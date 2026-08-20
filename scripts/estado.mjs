#!/usr/bin/env node
/**
 * Imprime o estado do portal: cobertura por departamento, contagens e idiomas
 * da biblioteca.
 *
 * Existe para que nenhum documento precise guardar esses números à mão. Uma
 * tabela copiada num README ou no CLAUDE.md diverge do repositório em poucos
 * ciclos, e um documento de continuidade que envelhece errado orienta pior do
 * que nenhum. Aqui a fonte é sempre o próprio código.
 *
 *   npm run estado
 *
 * O README, porém, é vitrine: precisa mostrar os números sem que o leitor rode
 * script nenhum. A saída é conferi-los na integração contínua em vez de confiar
 * na memória de quem edita — foi assim que a contagem de verbetes já divergiu
 * duas vezes, uma delas em poucas horas.
 *
 *   npm run conferir
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Disciplinas em que um verbete doutrinário não se aplica: aquisição de língua
 * e estágio supervisionado. Não é possível aprender hebraico nem cumprir
 * estágio lendo um verbete, e contá-las como descobertas distorce a escolha do
 * próximo alvo — foi o que fez Cultura Geral e Exegética parecerem mais
 * carentes do que estão, já que juntas concentram dezesseis disciplinas de
 * língua.
 *
 * A lista é discutível e é para ser discutida: se você achar que uma delas
 * comporta verbete, tire daqui. Um verbete de orientação sobre por que estudar
 * as línguas originais, por exemplo, serviria a TE04 e TE08 sem ensinar língua
 * nenhuma.
 */
const SEM_VERBETE = new Set([
  // aquisição de língua
  'CG01', 'CG02', 'CG03', 'CG04', 'CG05', 'CG54', 'CG56', 'CG57',
  'TE04', 'TE05', 'TE06', 'TE07', 'TE08', 'TE09', 'TE10', 'TE11',
  // estágio supervisionado
  'TP21', 'TP22', 'TP23', 'TP24',
]);

async function arquivosDeConteudo(dir) {
  const saida = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, ent.name);
    if (ent.isDirectory()) saida.push(...(await arquivosDeConteudo(caminho)));
    else if (ent.name.endsWith('.ts') && ent.name !== 'indice.ts' && ent.name !== 'relacoes.ts') saida.push(caminho);
  }
  return saida;
}

const ementasBase = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoesEmenta = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);
const correcoesPorCodigo = new Map(correcoesEmenta.map((d) => [d.codigo, d]));
const ementas = ementasBase.map((d) => ({ ...d, ...(correcoesPorCodigo.get(d.codigo) ?? {}) }));

const depPorCodigo = new Map(ementas.map((d) => [d.codigo, d.departamento]));
const depPorSigla = new Map(ementas.map((d) => [d.sigla, d.departamento]));
const discPorDep = new Map();
const aplicaveisPorDep = new Map();
let unidades = 0;
let topicos = 0;
let referencias = 0;
for (const d of ementas) {
  discPorDep.set(d.departamento, (discPorDep.get(d.departamento) ?? 0) + 1);
  if (!SEM_VERBETE.has(d.codigo))
    aplicaveisPorDep.set(d.departamento, (aplicaveisPorDep.get(d.departamento) ?? 0) + 1);
  unidades += d.unidades?.length ?? 0;
  for (const u of d.unidades ?? []) topicos += u.topicos?.length ?? 0;
  referencias +=
    (d.bibliografia?.basica?.length ?? 0) + (d.bibliografia?.complementar?.length ?? 0);
}

const verbPorDep = new Map();
const disciplinasCobertas = new Set();
let verbetes = 0;
for (const f of await arquivosDeConteudo(join(RAIZ, 'src/conteudo'))) {
  const s = await readFile(f, 'utf8');
  const m = s.match(/disciplina:\s*'([^']+)'/);
  if (!m) continue;
  verbetes++;
  disciplinasCobertas.add(m[1]);
  const dep = depPorCodigo.get(m[1]) ?? '(código desconhecido)';
  verbPorDep.set(dep, (verbPorDep.get(dep) ?? 0) + 1);
}

// O acervo está dividido em um arquivo histórico e um complemento pequeno,
// recuperado pela auditoria de integridade. Ambos formam uma única biblioteca.
const bib = [
  await readFile(join(RAIZ, 'src/dados/biblioteca.ts'), 'utf8'),
  await readFile(join(RAIZ, 'src/dados/biblioteca-extra.ts'), 'utf8'),
].join('\n');
const obras = [...bib.matchAll(/^ {4}id: '([^']+)',/gm)].length;
const idiomas = new Map();
for (const [, i] of bib.matchAll(/^ {4}idioma: '([^']+)',/gm))
  idiomas.set(i, (idiomas.get(i) ?? 0) + 1);

const restritos = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/dominios-restritos.json'), 'utf8'),
);

const linhas = [...discPorDep.entries()]
  .map(([dep, nd]) => {
    const nap = aplicaveisPorDep.get(dep) ?? 0;
    const nv = verbPorDep.get(dep) ?? 0;
    return { dep, nd, nap, nv, razao: nv / nap };
  })
  .sort((a, b) => a.razao - b.razao);

console.log(
  `\n${'DEPARTAMENTO'.padEnd(24)}${'disc'.padStart(5)}${'aplic'.padStart(7)}${'verb'.padStart(6)}${'v/aplic'.padStart(9)}`,
);
for (const l of linhas)
  console.log(
    l.dep.padEnd(24) +
      String(l.nd).padStart(5) +
      String(l.nap).padStart(7) +
      String(l.nv).padStart(6) +
      l.razao.toFixed(2).padStart(9),
  );
console.log(
  '\naplic = disciplinas em que cabe verbete; exclui aquisição de língua e' +
    ` estágio (${SEM_VERBETE.size} no total, lista no topo do script).`,
);

const aplicaveis = ementas.length - SEM_VERBETE.size;
console.log(
  `\nverbetes: ${verbetes}  ·  disciplinas com verbete: ${disciplinasCobertas.size}/${aplicaveis} aplicáveis` +
    ` (${ementas.length} no currículo)  ·  obras na biblioteca: ${obras}`,
);
console.log(
  'idiomas da biblioteca: ' +
    [...idiomas.entries()].sort((a, b) => b[1] - a[1]).map(([i, n]) => `${i} ${n}`).join(' · '),
);
console.log('domínios não auditáveis: ' + (restritos.map((r) => r.dominio).join(', ') || 'nenhum'));

const descobertas = ementas.filter((d) => !SEM_VERBETE.has(d.codigo) && !disciplinasCobertas.has(d.codigo));
if (descobertas.length === 0) {
  console.log('\npróximo alvo: cobertura curricular aplicável completa; priorizar revisão, aprofundamento e lacunas internas.\n');
} else {
  console.log(`\npróximo alvo: ${linhas[0].dep} (menor razão)\n`);
}

if (!process.argv.includes('--conferir')) process.exit(0);

/* ------------------------------------------------------------------ *
 * Conferência do README                                              *
 * ------------------------------------------------------------------ */

const readme = await readFile(join(RAIZ, 'README.md'), 'utf8');

/** Números de uma linha de tabela, pelo rótulo da primeira célula.
 *  Aceita separador de milhar (`1.339`) e negrito (`**121**`). */
function numerosDaLinha(rotulo) {
  const escapado = rotulo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = readme.match(new RegExp(`^\\|\\s*${escapado}\\s*\\|(.*)$`, 'm'));
  if (!m) return null;
  return [...m[1].matchAll(/\d[\d.]*/g)].map((n) => Number(n[0].replace(/\./g, '')));
}

const conferencias = [
  ['Disciplinas mapeadas', [ementas.length, discPorDep.size]],
  ['Unidades do programa', [unidades, topicos]],
  ['Referências bibliográficas oficiais', [referencias]],
  ['Verbetes redigidos', [verbetes]],
  ['Obras livres mapeadas', [obras]],
  ...[...depPorSigla].map(([sigla, dep]) => [`\`${sigla}\``, [discPorDep.get(dep) ?? 0]]),
];

const divergencias = [];
for (const [rotulo, esperado] of conferencias) {
  const achado = numerosDaLinha(rotulo);
  if (achado === null) {
    divergencias.push(`${rotulo}: linha não encontrada no README`);
  } else if (achado.length !== esperado.length || achado.some((n, i) => n !== esperado[i])) {
    divergencias.push(`${rotulo}: README diz ${achado.join(', ')} — o código diz ${esperado.join(', ')}`);
  }
}

if (divergencias.length > 0) {
  console.error('README fora de sincronia com o repositório:\n');
  for (const d of divergencias) console.error(`  · ${d}`);
  console.error(
    '\nCorrija os números no README.md (ou o rótulo, se a linha foi renomeada).' +
      ' Estes números são conferidos na CI justamente porque já divergiram à mão.\n',
  );
  process.exit(1);
}

console.log(`README conferido: ${conferencias.length} linhas batem com o repositório.\n`);
