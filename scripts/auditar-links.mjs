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

function dominioRestrito(url) {
  let host;
  try {
    host = new URL(url).hostname;
  } catch {
    return undefined;
  }
  return restritos.find((r) => host === r.dominio || host.endsWith(`.${r.dominio}`));
}

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

async function verificar(fonte) {
  let ultimoErro = '';
  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TEMPO_LIMITE);
    try {
      // HEAD é mais barato, mas muitos servidores não o implementam.
      let res = await tentar(fonte.url, 'HEAD', ctrl.signal);
      if (res.status === 405 || res.status === 501 || res.status === 403) {
        res = await tentar(fonte.url, 'GET', ctrl.signal);
      }
      clearTimeout(t);
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
          ? `timeout após ${TEMPO_LIMITE / 1000}s`
          : String(e.cause?.code ?? e.message);
      if (tentativa < TENTATIVAS) {
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

const resultados = await emLotes(unicas, CONCORRENCIA, async (f) => {
  const r = await verificar(f);
  r.restrito = r.ok ? undefined : dominioRestrito(r.url);
  const marca = r.ok ? VERDE : r.restrito ? AMARELO : VERMELHO;
  console.log(`${marca} ${String(r.status).padEnd(3)} ${r.url}${r.erro ? `  — ${r.erro}` : ''}`);
  return r;
});

const acessiveis = resultados.filter((r) => r.ok);
const quebrados = resultados.filter((r) => !r.ok && !r.restrito);
const naoVerificaveis = resultados.filter((r) => !r.ok && r.restrito);
const redirecionados = resultados.filter((r) => r.ok && r.urlFinal);

console.log(
  `\n${acessiveis.length}/${resultados.length} acessíveis · ${quebrados.length} com falha · ` +
    `${naoVerificaveis.length} em domínio restrito · ${redirecionados.length} redirecionadas`,
);

if (naoVerificaveis.length) {
  console.log(
    '\nDomínios restritos não reprovam a auditoria: eles recusam IPs de nuvem, e\n' +
      'daqui não há como separar um bloqueio de um link morto. Confira no navegador\n' +
      'e atualize confirmadoEm em src/dados/dominios-restritos.json.',
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
    `- Em domínio restrito (não verificável na CI): **${naoVerificaveis.length}**`,
    `- Redirecionadas: **${redirecionados.length}**`,
    '',
  ];
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
      'Estes acervos recusam conexões vindas de faixas de IP de nuvem, então a CI',
      'não consegue verificá-los. Não reprovam a auditoria; devem ser conferidos',
      'no navegador e ter `confirmadoEm` atualizado em',
      '`src/dados/dominios-restritos.json`.',
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
