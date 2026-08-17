#!/usr/bin/env node
/**
 * Auditoria de links do portal.
 *
 * Percorre todas as fontes declaradas nos verbetes e verifica se cada URL
 * responde. Roda na CI do GitHub (rede aberta) porque o ambiente de
 * desenvolvimento do agente tem egresso restrito e não alcança a maioria
 * dos domínios.
 *
 *   node scripts/auditar-links.mjs              # falha se houver link quebrado
 *   node scripts/auditar-links.mjs --relatorio  # grava relatorio-auditoria.md
 *   node scripts/auditar-links.mjs --tolerante  # nunca falha; só relata
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setDefaultResultOrder } from 'node:dns';

// Vários acervos teológicos publicam registro AAAA mas não atendem por IPv6;
// a conexão fica pendurada até o timeout e o link parece morto sem estar.
setDefaultResultOrder('ipv4first');

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
// Verbetes e biblioteca: as duas fontes de URL do portal precisam ser auditadas,
// já que a página da Biblioteca promete ao leitor que os links são verificados.
const DIRETORIOS = [join(RAIZ, 'src', 'conteudo'), join(RAIZ, 'src', 'dados')];
const TEMPO_LIMITE = 25_000;
const CONCORRENCIA = 6;
const TENTATIVAS = 3;

const VERDE = '[32m OK  [0m';
const VERMELHO = '[31mFALHA[0m';
const AMARELO = '[33mREST.[0m';

const args = new Set(process.argv.slice(2));
const gerarRelatorio = args.has('--relatorio');
const tolerante = args.has('--tolerante');

/** Alguns servidores respondem 403 a clientes sem User-Agent de navegador. */
const CABECALHOS = {
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
};

/**
 * Acervos que recusam conexões vindas de faixas de IP de nuvem. Reprovar por
 * causa deles empurraria o portal a trocar fonte primária boa por fonte pior,
 * então entram em categoria própria: "não verificável daqui" não é a mesma
 * coisa que "link morto", e a diferença precisa ficar visível no relatório.
 */
const restritos = JSON.parse(
  await readFile(join(RAIZ, 'src', 'dados', 'dominios-restritos.json'), 'utf8'),
);

function hostDe(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

function dominioRestrito(url) {
  const host = hostDe(url);
  if (!host) return undefined;
  return restritos.find((r) => host === r.dominio || host.endsWith(`.${r.dominio}`));
}

/**
 * Domínios que não responderam à sondagem inicial. Suas URLs recebem tentativa
 * única, como as de domínio restrito: repetir o ciclo completo contra um acervo
 * mudo custa ~80s por URL e não descobre nada que a sondagem já não tenha dito.
 */
const hostsMudos = new Set();

async function arquivosTs(dir) {
  const saida = [];
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) saida.push(...(await arquivosTs(caminho)));
    else if (entrada.name.endsWith('.ts')) saida.push(caminho);
  }
  return saida;
}

/** Extrai as fontes sem executar TypeScript: lê os literais do próprio código. */
async function coletarFontes() {
  const fontes = [];
  const arquivos = (await Promise.all(DIRETORIOS.map(arquivosTs))).flat();
  for (const arquivo of arquivos) {
    const src = await readFile(arquivo, 'utf8');
    const rel = arquivo.slice(RAIZ.length + 1);
    for (const m of src.matchAll(/\{[^{}]*?url:\s*'([^']+)'[^{}]*?\}/gs)) {
      const bloco = m[0];
      const campo = (nome) => bloco.match(new RegExp(`${nome}:\\s*'([^']*)'`))?.[1] ?? '';
      fontes.push({
        url: m[1],
        id: campo('id'),
        titulo: campo('titulo'),
        autor: campo('autor'),
        arquivo: rel,
      });
    }
  }
  return fontes;
}

async function tentar(url, metodo, sinal) {
  return fetch(url, { method: metodo, redirect: 'follow', headers: CABECALHOS, signal: sinal });
}

async function verificar(fonte, { sondagem = false } = {}) {
  let ultimoErro = '';
  // Domínio que sabidamente recusa IP de nuvem não merece o ciclo completo de
  // repetições: são ~80s gastos por URL para reconfirmar o que já se sabe.
  // Uma tentativa curta ainda detecta se o acervo passar a aceitar a CI.
  // O mesmo vale para o acervo que não respondeu à sondagem inicial.
  const restrito = dominioRestrito(fonte.url);
  const rapido = restrito || (!sondagem && hostsMudos.has(hostDe(fonte.url)));
  const tentativas = rapido ? 1 : TENTATIVAS;
  const limite = rapido ? 10_000 : TEMPO_LIMITE;

  for (let tentativa = 1; tentativa <= tentativas; tentativa++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), limite);
    try {
      // HEAD é mais barato, mas muitos servidores não o implementam.
      let res = await tentar(fonte.url, 'HEAD', ctrl.signal);
      if (res.status === 405 || res.status === 501 || res.status === 403) {
        res = await tentar(fonte.url, 'GET', ctrl.signal);
      }
      clearTimeout(t);

      // Erro de servidor (5xx) e limitação de taxa (429) não são link morto:
      // são indisponibilidade momentânea, e merecem o mesmo tratamento que uma
      // falha de rede. O Archive.org responde 502 em rajada quando várias
      // requisições chegam juntas — em 16/08/2026 isso reprovou a auditoria com
      // quatro URLs falhando no mesmo milissegundo, enquanto outras do mesmo
      // domínio passavam segundos antes e depois. Um 404 continua terminal.
      if ((res.status === 429 || res.status >= 500) && tentativa < tentativas) {
        ultimoErro = `HTTP ${res.status}`;
        await new Promise((r) => setTimeout(r, 2000 * 2 ** (tentativa - 1)));
        continue;
      }

      return {
        ...fonte,
        status: res.status,
        ok: res.ok,
        urlFinal: res.url !== fonte.url ? res.url : undefined,
        erro: res.ok ? undefined : `HTTP ${res.status}`,
      };
    } catch (e) {
      clearTimeout(t);
      ultimoErro =
        e.name === 'AbortError'
          ? `timeout após ${limite / 1000}s`
          : String(e.cause?.code ?? e.message);
      if (tentativa < tentativas) {
        await new Promise((r) => setTimeout(r, 2000 * 2 ** (tentativa - 1)));
      }
    }
  }
  return { ...fonte, status: 0, ok: false, erro: ultimoErro };
}

async function emLotes(itens, n, fn) {
  const saida = [];
  for (let i = 0; i < itens.length; i += n) {
    saida.push(...(await Promise.all(itens.slice(i, i + n).map(fn))));
  }
  return saida;
}

const fontes = await coletarFontes();
const unicas = [...new Map(fontes.map((f) => [f.url, f])).values()];

console.log(`Auditando ${unicas.length} URLs únicas (${fontes.length} citações)…\n`);

// Sondagem: uma URL por domínio, antes de auditar tudo. Um acervo grande fora
// do ar custava ~80s por URL — em 17/08/2026, com o Archive.org mudo, a
// auditoria passou de quarenta minutos sem terminar. Pagar o ciclo completo uma
// vez por domínio, e não uma vez por URL, resolve sem perder informação: quem
// não responde à sondagem também não responderia às outras oitenta tentativas.
const representantes = [
  ...new Map(
    unicas.filter((f) => hostDe(f.url) && !dominioRestrito(f.url)).map((f) => [hostDe(f.url), f]),
  ).values(),
];
const sondagens = await Promise.all(representantes.map((f) => verificar(f, { sondagem: true })));
for (const s of sondagens) if (!s.ok && !s.status) hostsMudos.add(hostDe(s.url));
if (hostsMudos.size) {
  console.log(
    `Sem resposta na sondagem: ${[...hostsMudos].join(', ')}.\n` +
      'As URLs desses domínios recebem tentativa única em vez do ciclo completo.\n',
  );
}

const resultados = await emLotes(unicas, CONCORRENCIA, async (f) => {
  const r = await verificar(f);
  r.restrito = r.ok ? undefined : dominioRestrito(r.url);
  const marca = r.ok ? VERDE : r.restrito ? AMARELO : VERMELHO;
  console.log(`${marca} ${String(r.status).padEnd(3)} ${r.url}${r.erro ? `  — ${r.erro}` : ''}`);
  return r;
});

/**
 * Um acervo inteiro fora do ar não é a mesma coisa que link morto, e a diferença
 * é apurável do próprio resultado: link morto responde 404 enquanto os vizinhos
 * do mesmo domínio respondem 200; acervo fora do ar não responde a nada, nem na
 * raiz. Em 17/08/2026 o Archive.org parou de aceitar conexões dos runners e
 * reprovou um PR com 45 falhas — inclusive `archive.org/` — nove minutos depois
 * de as mesmas URLs terem passado com 200.
 *
 * Reprovar nesse caso não protege o leitor de nada: a falha nada tem a ver com o
 * que mudou no PR e não há o que corrigir no portal. Então esses vão para
 * categoria própria e não reprovam — mesmo tratamento dos domínios restritos,
 * com a diferença de que aqui a conclusão é calculada, e não escrita à mão numa
 * lista que envelhece.
 *
 * Os três critérios são cumulativos e existem para que um link morto nunca caia
 * aqui: o domínio precisa ter várias URLs no portal, TODAS precisam ter falhado,
 * e todas em nível de conexão (status 0). Um 404 no meio já desqualifica o
 * domínio inteiro — e volta a reprovar, como deve.
 */
const MIN_URLS_PARA_FORA_DO_AR = 3;

const porHost = new Map();
for (const r of resultados) {
  const h = hostDe(r.url);
  if (h) porHost.set(h, [...(porHost.get(h) ?? []), r]);
}

const hostsForaDoAr = new Set(
  [...porHost.entries()]
    .filter(
      ([, rs]) =>
        rs.length >= MIN_URLS_PARA_FORA_DO_AR &&
        rs.every((r) => !r.ok && !r.status && !r.restrito),
    )
    .map(([h]) => h),
);

const acessiveis = resultados.filter((r) => r.ok);
const naoVerificaveis = resultados.filter((r) => !r.ok && r.restrito);
const foraDoAr = resultados.filter(
  (r) => !r.ok && !r.restrito && hostsForaDoAr.has(hostDe(r.url)),
);
const quebrados = resultados.filter(
  (r) => !r.ok && !r.restrito && !hostsForaDoAr.has(hostDe(r.url)),
);
const redirecionados = resultados.filter((r) => r.ok && r.urlFinal);

console.log(
  `\n${acessiveis.length}/${resultados.length} acessíveis · ${quebrados.length} com falha · ` +
    `${foraDoAr.length} em acervo fora do ar · ` +
    `${naoVerificaveis.length} em domínio restrito · ${redirecionados.length} redirecionadas`,
);

if (foraDoAr.length) {
  console.log(
    `\nAcervo(s) sem responder a nada agora: ${[...hostsForaDoAr].join(', ')}.\n` +
      'Todas as URLs desses domínios falharam em nível de conexão, o que indica\n' +
      'indisponibilidade do acervo e não link morto — link morto responde 404\n' +
      'enquanto os vizinhos respondem 200. Não reprova a auditoria: confira no\n' +
      'navegador e, se o acervo tiver mesmo sumido, troque as fontes.',
  );
}

if (naoVerificaveis.length) {
  console.log(
    '\nDomínios restritos não reprovam a auditoria: por algum motivo alheio ao\n' +
      'conteúdo — recusa de IPs de nuvem, certificado vencido — a CI não consegue\n' +
      'confirmá-los, e daqui não há como separar isso de um link morto. O motivo de\n' +
      'cada um está em src/dados/dominios-restritos.json. Confira no navegador e\n' +
      'atualize confirmadoEm.',
  );
}

if (gerarRelatorio) {
  const linhas = [
    '# Relatório de auditoria de links',
    '',
    `Gerado em ${new Date().toISOString()}`,
    '',
    `- URLs verificadas: **${resultados.length}**`,
    `- Acessíveis: **${acessiveis.length}**`,
    `- Com falha: **${quebrados.length}**`,
    `- Em acervo fora do ar: **${foraDoAr.length}**`,
    `- Em domínio restrito (não verificável na CI): **${naoVerificaveis.length}**`,
    `- Redirecionadas: **${redirecionados.length}**`,
    '',
  ];
  if (foraDoAr.length) {
    linhas.push(
      '## Acervos fora do ar',
      '',
      `Nenhuma URL de ${[...hostsForaDoAr].map((h) => `\`${h}\``).join(', ')} respondeu,`,
      'e todas falharam em nível de conexão — o que indica indisponibilidade do',
      'acervo, não link morto: link morto responde 404 enquanto os vizinhos do',
      'mesmo domínio respondem 200. Não reprovam a auditoria. Confira no navegador;',
      'se o acervo tiver mesmo desaparecido, as fontes precisam ser trocadas.',
      '',
      '| URL | Verbete | Erro na CI |',
      '| --- | --- | --- |',
    );
    for (const r of foraDoAr) linhas.push(`| ${r.url} | \`${r.arquivo}\` | ${r.erro} |`);
    linhas.push('');
  }
  if (quebrados.length) {
    linhas.push(
      '## Links com falha',
      '',
      '| Status | URL | Verbete | Erro |',
      '| --- | --- | --- | --- |',
    );
    for (const r of quebrados) {
      linhas.push(`| ${r.status || '—'} | ${r.url} | \`${r.arquivo}\` | ${r.erro} |`);
    }
    linhas.push('');
  }
  if (naoVerificaveis.length) {
    linhas.push(
      '## Domínios restritos',
      '',
      'A CI não consegue verificar estes endereços por um motivo alheio ao conteúdo',
      '— recusa de IPs de nuvem, certificado vencido —, registrado por domínio em',
      '`src/dados/dominios-restritos.json`. Não reprovam a auditoria; devem ser',
      'conferidos no navegador e ter `confirmadoEm` atualizado.',
      '',
      '| URL | Domínio | Confirmado em | Erro na CI |',
      '| --- | --- | --- | --- |',
    );
    for (const r of naoVerificaveis) {
      linhas.push(
        `| ${r.url} | ${r.restrito.dominio} | ${r.restrito.confirmadoEm} | ${r.erro} |`,
      );
    }
    linhas.push('');
  }
  if (redirecionados.length) {
    linhas.push('## Redirecionamentos', '', '| De | Para |', '| --- | --- |');
    for (const r of redirecionados) linhas.push(`| ${r.url} | ${r.urlFinal} |`);
  }
  await writeFile(join(RAIZ, 'relatorio-auditoria.md'), linhas.join('\n'));
  await writeFile(join(RAIZ, 'relatorio-auditoria.json'), JSON.stringify(resultados, null, 2));
  console.log('\nRelatório gravado em relatorio-auditoria.md');
}

if (quebrados.length && !tolerante) {
  console.error('\nAuditoria falhou: há fontes inacessíveis. Corrija ou substitua os links.');
  process.exit(1);
}
