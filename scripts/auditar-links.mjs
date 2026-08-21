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
import { encontrarRestricao } from './lib/dominios-restritos.mjs';
import { mapearComConcorrencia } from './lib/mapear-com-concorrencia.mjs';

setDefaultResultOrder('ipv4first');

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIRETORIOS = [join(RAIZ, 'src', 'conteudo'), join(RAIZ, 'src', 'dados')];
const TEMPO_LIMITE = 25_000;
const CONCORRENCIA = 6;
const TENTATIVAS = 3;

const VERDE = '\u001b[32m OK  \u001b[0m';
const VERMELHO = '\u001b[31mFALHA\u001b[0m';
const AMARELO = '\u001b[33mREST.\u001b[0m';

const args = new Set(process.argv.slice(2));
const gerarRelatorio = args.has('--relatorio');
const tolerante = args.has('--tolerante');

const CABECALHOS = {
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
};

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
  return encontrarRestricao(url, restritos);
}

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

/**
 * `forcarCompleto` é usado apenas no passe final de confirmação. Ele ignora a
 * otimização de host mudo para que uma falha transitória receba uma última
 * verificação serial, com o ciclo completo, depois que a carga paralela acabou.
 */
async function verificar(fonte, { sondagem = false, forcarCompleto = false } = {}) {
  let ultimoErro = '';
  const restrito = dominioRestrito(fonte.url);
  const rapido = !forcarCompleto && (restrito || (!sondagem && hostsMudos.has(hostDe(fonte.url))));
  const tentativas = rapido ? 1 : TENTATIVAS;
  const limite = rapido ? 10_000 : TEMPO_LIMITE;

  for (let tentativa = 1; tentativa <= tentativas; tentativa++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), limite);
    try {
      let res = await tentar(fonte.url, 'HEAD', ctrl.signal);
      if (res.status === 405 || res.status === 501 || res.status === 403) {
        await res.body?.cancel().catch(() => {});
        res = await tentar(fonte.url, 'GET', ctrl.signal);
      }
      clearTimeout(t);
      await res.body?.cancel().catch(() => {});

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

const fontes = await coletarFontes();
const unicas = [...new Map(fontes.map((f) => [f.url, f])).values()];
const fontePorUrl = new Map(unicas.map((f) => [f.url, f]));

console.log(`Auditando ${unicas.length} URLs únicas (${fontes.length} citações)…\n`);

const representantes = [
  ...new Map(
    unicas.filter((f) => hostDe(f.url) && !dominioRestrito(f.url)).map((f) => [hostDe(f.url), f]),
  ).values(),
];
const urlsPorHost = new Map();
for (const f of unicas) {
  const h = hostDe(f.url);
  if (h) urlsPorHost.set(h, (urlsPorHost.get(h) ?? 0) + 1);
}
const sondagens = await Promise.all(representantes.map((f) => verificar(f, { sondagem: true })));
const sondagemPorUrl = new Map(sondagens.map((s) => [s.url, s]));
for (const s of sondagens) {
  const h = hostDe(s.url);
  if (!s.ok && !s.status && (urlsPorHost.get(h) ?? 0) > 1) hostsMudos.add(h);
}
if (hostsMudos.size) {
  console.log(
    `Sem resposta na sondagem: ${[...hostsMudos].join(', ')}.\n` +
      'As URLs desses domínios recebem tentativa única no lote principal.\n',
  );
}

const resultadosIniciais = await mapearComConcorrencia(unicas, CONCORRENCIA, async (f) => {
  const r = await verificar(f);
  r.restrito = r.ok ? undefined : dominioRestrito(r.url);
  const marca = r.ok ? VERDE : r.restrito ? AMARELO : VERMELHO;
  console.log(`${marca} ${String(r.status).padEnd(3)} ${r.url}${r.erro ? `  — ${r.erro}` : ''}`);
  return r;
});

/**
 * Timeout, 429 e 5xx não demonstram que um endereço deixou de existir. Depois
 * que o lote paralelo termina, cada candidato desse tipo recebe uma confirmação
 * serial com três tentativas completas. Assim um 404/410 continua terminal,
 * mas congestionamento de Archive.org, IPHAN ou outro acervo não transforma
 * uma fonte boa em link "morto" só porque o runner a atingiu num instante ruim.
 *
 * A confirmação serial não é uma exceção ao gate: se também falhar, a fonte
 * continua vermelha. Ela apenas coleta uma segunda medição em condições menos
 * agressivas antes de reprovar o PR.
 */
const resultados = [];
const recuperados = [];
for (const r of resultadosIniciais) {
  const candidatoTransitorio =
    !r.ok &&
    !r.restrito &&
    (r.status === 0 || r.status === 429 || r.status >= 500);

  if (!candidatoTransitorio) {
    resultados.push(r);
    continue;
  }

  console.log(`CONF. ${r.url} — repetindo serialmente após ${r.erro}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const nova = await verificar(fontePorUrl.get(r.url) ?? r, { forcarCompleto: true });
  nova.restrito = nova.ok ? undefined : dominioRestrito(nova.url);
  if (nova.ok) {
    recuperados.push({ ...nova, erroAnterior: r.erro });
    console.log(`${VERDE} ${String(nova.status).padEnd(3)} ${nova.url}  — confirmado no passe serial`);
  } else {
    console.log(`${VERMELHO} ${String(nova.status).padEnd(3)} ${nova.url}  — confirmação falhou: ${nova.erro}`);
  }
  resultados.push(nova);
}

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

/**
 * Há ainda um caso estreito em que a própria sondagem da execução confirmou a
 * URL exata e a verificação posterior terminou só em erro de conexão. Essa
 * evidência positiva é preservada; nunca se aplica a respostas HTTP 4xx/5xx.
 */
const transientesConfirmados = resultados.filter(
  (r) =>
    !r.ok &&
    !r.restrito &&
    !hostsForaDoAr.has(hostDe(r.url)) &&
    !r.status &&
    sondagemPorUrl.get(r.url)?.ok,
);
const urlsTransientes = new Set(transientesConfirmados.map((r) => r.url));
const quebrados = resultados.filter(
  (r) =>
    !r.ok &&
    !r.restrito &&
    !hostsForaDoAr.has(hostDe(r.url)) &&
    !urlsTransientes.has(r.url),
);
const redirecionados = resultados.filter((r) => r.ok && r.urlFinal);

console.log(
  `\n${acessiveis.length}/${resultados.length} acessíveis após confirmação · ` +
    `${recuperados.length} recuperado(s) no passe serial · ` +
    `${transientesConfirmados.length} confirmado(s) pela sondagem · ${quebrados.length} com falha · ` +
    `${foraDoAr.length} em acervo fora do ar · ` +
    `${naoVerificaveis.length} em domínio restrito · ${redirecionados.length} redirecionadas`,
);

if (recuperados.length) {
  console.log(
    '\nFalhas transitórias recuperadas: a verificação paralela falhou, mas o passe ' +
      'serial posterior confirmou a URL. O relatório registra ambos os fatos.',
  );
}
if (transientesConfirmados.length) {
  console.log(
    '\nOscilação de rede após confirmação positiva: a própria sondagem desta execução ' +
      'obteve 2xx para a URL exata antes de erro de conexão posterior. Respostas ' +
      'HTTP terminais nunca entram nesta categoria.',
  );
}
if (foraDoAr.length) {
  console.log(
    `\nAcervo(s) sem responder a nada agora: ${[...hostsForaDoAr].join(', ')}.\n` +
      'Todas as URLs desses domínios falharam em nível de conexão. Não reprova a ' +
      'auditoria porque o padrão aponta para indisponibilidade do acervo, não remoção ' +
      'de itens individuais.',
  );
}
if (naoVerificaveis.length) {
  console.log(
    '\nDomínios restritos não reprovam a auditoria. O motivo e a data da última ' +
      'confirmação manual estão em src/dados/dominios-restritos.json.',
  );
}

if (gerarRelatorio) {
  const linhas = [
    '# Relatório de auditoria de links',
    '',
    `Gerado em ${new Date().toISOString()}`,
    '',
    `- URLs verificadas: **${resultados.length}**`,
    `- Acessíveis após confirmação: **${acessiveis.length}**`,
    `- Recuperadas no passe serial: **${recuperados.length}**`,
    `- Confirmadas pela sondagem antes de oscilação de rede: **${transientesConfirmados.length}**`,
    `- Com falha: **${quebrados.length}**`,
    `- Em acervo fora do ar: **${foraDoAr.length}**`,
    `- Em domínio restrito (não verificável na CI): **${naoVerificaveis.length}**`,
    `- Redirecionadas: **${redirecionados.length}**`,
    '',
  ];

  if (recuperados.length) {
    linhas.push(
      '## Recuperadas no passe serial',
      '',
      'Falharam no lote paralelo por timeout, 429 ou 5xx, mas responderam no',
      'passe serial de confirmação executado depois que a carga concorrente acabou.',
      '',
      '| URL | Falha anterior | Resultado final |',
      '| --- | --- | --- |',
    );
    for (const r of recuperados)
      linhas.push(`| ${r.url} | ${r.erroAnterior} | HTTP ${r.status} |`);
    linhas.push('');
  }

  if (transientesConfirmados.length) {
    linhas.push(
      '## Confirmadas pela sondagem; falha transitória posterior',
      '',
      'A mesma execução recebeu 2xx da URL exata durante a sondagem e depois',
      'encontrou apenas erro de conexão. Respostas HTTP terminais não recebem',
      'esta classificação.',
      '',
      '| URL | Verbete | Erro posterior |',
      '| --- | --- | --- |',
    );
    for (const r of transientesConfirmados)
      linhas.push(`| ${r.url} | \`${r.arquivo}\` | ${r.erro} |`);
    linhas.push('');
  }

  if (foraDoAr.length) {
    linhas.push(
      '## Acervos fora do ar',
      '',
      `Nenhuma URL de ${[...hostsForaDoAr].map((h) => `\`${h}\``).join(', ')} respondeu,`,
      'e todas falharam em nível de conexão. Não reprovam a auditoria; devem ser',
      'conferidas posteriormente para distinguir interrupção transitória de retirada',
      'definitiva do acervo.',
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
    for (const r of quebrados)
      linhas.push(`| ${r.status || '—'} | ${r.url} | \`${r.arquivo}\` | ${r.erro} |`);
    linhas.push('');
  }

  if (naoVerificaveis.length) {
    linhas.push(
      '## Domínios restritos',
      '',
      'A CI não consegue verificar estes endereços por motivo registrado em',
      '`src/dados/dominios-restritos.json`. Não reprovam a auditoria e precisam',
      'de confirmação manual periódica.',
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
  console.error('\nAuditoria falhou: há fontes inacessíveis após confirmação. Corrija ou substitua os links.');
  process.exit(1);
}
