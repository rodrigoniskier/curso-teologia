#!/usr/bin/env node
/**
 * Imprime o estado integral do portal. A régua principal agora é o currículo
 * completo: 121 disciplinas e suas unidades oficiais. Ter um verbete numa
 * disciplina continua sendo informação útil, mas não equivale a concluir suas
 * unidades.
 *
 *   npm run estado
 *   npm run conferir
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

async function arquivosDeConteudo(dir) {
  const saida = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, ent.name);
    if (ent.isDirectory()) saida.push(...(await arquivosDeConteudo(caminho)));
    else if (ent.name.endsWith('.ts') && ent.name !== 'indice.ts' && ent.name !== 'relacoes.ts') saida.push(caminho);
  }
  return saida;
}

async function arquivosDeBiblioteca() {
  const dir = join(RAIZ, 'src/dados');
  return (await readdir(dir, { withFileTypes: true }))
    .filter((ent) => ent.isFile() && /^biblioteca(?:-[a-z0-9-]+)?\.ts$/i.test(ent.name) && ent.name !== 'biblioteca-completa.ts')
    .map((ent) => join(dir, ent.name))
    .sort();
}

async function arquivosDeQuestoes() {
  const dir = join(RAIZ, 'src/dados');
  return (await readdir(dir, { withFileTypes: true }))
    .filter((ent) => ent.isFile() && /^questoes(?:-[a-z0-9-]+)?\.json$/i.test(ent.name))
    .map((ent) => join(dir, ent.name))
    .sort();
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(RAIZ, 'src/dados/plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(RAIZ, 'src/dados/cobertura-curricular.json'), 'utf8'));
const questoes = (await Promise.all(
  (await arquivosDeQuestoes()).map(async (arquivo) => JSON.parse(await readFile(arquivo, 'utf8'))),
)).flat();
const unidadesRegistradas = cobertura.unidadesConcluidas ?? {};
const semUnidadesConcluidas = new Set(cobertura.disciplinasSemUnidadesConcluidas ?? []);

const depPorCodigo = new Map(ementas.map((d) => [d.codigo, d.departamento]));
const depPorSigla = new Map(ementas.map((d) => [d.sigla, d.departamento]));
const discPorDep = new Map();
const unidadesPorDep = new Map();
const unidadesConcluidasPorDep = new Map();
let unidades = 0;
let topicos = 0;
let referencias = 0;
let unidadesConcluidas = 0;
let disciplinasConcluidas = 0;

for (const d of ementas) {
  discPorDep.set(d.departamento, (discPorDep.get(d.departamento) ?? 0) + 1);
  unidadesPorDep.set(d.departamento, (unidadesPorDep.get(d.departamento) ?? 0) + d.unidades.length);
  unidades += d.unidades.length;
  for (const u of d.unidades) topicos += u.topicos?.length ?? 0;
  referencias += (d.bibliografia?.basica?.length ?? 0) + (d.bibliografia?.complementar?.length ?? 0);

  const oficiais = new Set(d.unidades.map((u) => u.numero));
  const feitas = [...new Set(unidadesRegistradas[d.codigo] ?? [])].filter((n) => oficiais.has(n));
  unidadesConcluidas += feitas.length;
  unidadesConcluidasPorDep.set(
    d.departamento,
    (unidadesConcluidasPorDep.get(d.departamento) ?? 0) + feitas.length,
  );
  const completa = d.unidades.length === 0
    ? semUnidadesConcluidas.has(d.codigo)
    : feitas.length === d.unidades.length;
  if (completa) disciplinasConcluidas++;
}

const verbPorDep = new Map();
const disciplinasComVerbete = new Set();
let verbetes = 0;
for (const f of await arquivosDeConteudo(join(RAIZ, 'src/conteudo'))) {
  const s = await readFile(f, 'utf8');
  const m = s.match(/disciplina:\s*'([^']+)'/);
  if (!m) continue;
  verbetes++;
  disciplinasComVerbete.add(m[1]);
  const dep = depPorCodigo.get(m[1]) ?? '(código desconhecido)';
  verbPorDep.set(dep, (verbPorDep.get(dep) ?? 0) + 1);
}

const bib = (await Promise.all((await arquivosDeBiblioteca()).map((f) => readFile(f, 'utf8')))).join('\n');
const obras = [...bib.matchAll(/^ {4}id: '([^']+)',/gm)].length;
const idiomasBiblioteca = new Map();
for (const [, i] of bib.matchAll(/^ {4}idioma: '([^']+)',/gm))
  idiomasBiblioteca.set(i, (idiomasBiblioteca.get(i) ?? 0) + 1);

const restritos = JSON.parse(await readFile(join(RAIZ, 'src/dados/dominios-restritos.json'), 'utf8'));

console.log(
  `\n${'DEPARTAMENTO'.padEnd(24)}${'disc'.padStart(5)}${'verb'.padStart(6)}${'unid'.padStart(7)}${'ok'.padStart(7)}${'% unid'.padStart(8)}`,
);
for (const [dep, nd] of discPorDep.entries()) {
  const nv = verbPorDep.get(dep) ?? 0;
  const nu = unidadesPorDep.get(dep) ?? 0;
  const ok = unidadesConcluidasPorDep.get(dep) ?? 0;
  const percentual = nu ? (ok / nu) * 100 : 0;
  console.log(
    dep.padEnd(24) +
      String(nd).padStart(5) +
      String(nv).padStart(6) +
      String(nu).padStart(7) +
      String(ok).padStart(7) +
      `${percentual.toFixed(1)}%`.padStart(8),
  );
}

const idiomas = plano.naturezas.idioma.length;
const estagios = plano.naturezas.estagio.length;
const conteudo = ementas.length - idiomas - estagios;
console.log(`\nnaturezas pedagógicas: conteúdo ${conteudo} · idiomas ${idiomas} · estágios ${estagios}`);
console.log(`verbetes: ${verbetes} · disciplinas com ao menos um verbete: ${disciplinasComVerbete.size}/${ementas.length}`);
console.log(`unidades oficialmente verificadas: ${unidadesConcluidas}/${unidades}`);
console.log(`disciplinas integralmente concluídas: ${disciplinasConcluidas}/${ementas.length}`);
console.log(`módulos avaliativos estruturados: ${ementas.length * 2} (AV1 + AV2 para cada disciplina)`);
console.log(`questões avaliativas publicadas: ${Array.isArray(questoes) ? questoes.length : 0}`);
console.log(`obras na biblioteca: ${obras}`);
console.log(
  'idiomas da biblioteca: ' +
    [...idiomasBiblioteca.entries()].sort((a, b) => b[1] - a[1]).map(([i, n]) => `${i} ${n}`).join(' · '),
);
console.log('domínios não auditáveis: ' + (restritos.map((r) => r.dominio).join(', ') || 'nenhum'));

const historico = plano.ordemHistorico.map((x) => ({ ...x, origem: 'histórico' }));
const noHistorico = new Set(historico.map((x) => x.codigo));
const ordem = [
  ...historico,
  ...ementas.filter((d) => !noHistorico.has(d.codigo)).map((d) => ({ codigo: d.codigo, origem: 'currículo' })),
];
const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const proximo = ordem.find((item) => {
  const d = porCodigo.get(item.codigo);
  if (!d) return false;
  if (d.unidades.length === 0) return !semUnidadesConcluidas.has(d.codigo);
  const feitas = new Set(unidadesRegistradas[d.codigo] ?? []);
  return d.unidades.some((u) => !feitas.has(u.numero));
});
if (proximo) {
  const d = porCodigo.get(proximo.codigo);
  console.log(`\npróxima disciplina pela ordem fixada: ${d.codigo} — ${d.titulo} [${proximo.periodo ?? 'ausente do histórico'}]`);
} else {
  console.log('\ncurrículo integral concluído.');
}
console.log();

if (!process.argv.includes('--conferir')) process.exit(0);

const readme = await readFile(join(RAIZ, 'README.md'), 'utf8');
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
  ['Unidades verificadas', [unidadesConcluidas, unidades]],
  ['Disciplinas concluídas', [disciplinasConcluidas, ementas.length]],
  ['Módulos avaliativos estruturados', [ementas.length * 2]],
  ['Questões avaliativas publicadas', [Array.isArray(questoes) ? questoes.length : 0]],
  ...[...depPorSigla].map(([sigla, dep]) => [`\`${sigla}\``, [discPorDep.get(dep) ?? 0]]),
];

const divergencias = [];
for (const [rotulo, esperado] of conferencias) {
  const achado = numerosDaLinha(rotulo);
  if (achado === null) divergencias.push(`${rotulo}: linha não encontrada no README`);
  else if (achado.length !== esperado.length || achado.some((n, i) => n !== esperado[i]))
    divergencias.push(`${rotulo}: README diz ${achado.join(', ')} — o código diz ${esperado.join(', ')}`);
}

if (divergencias.length > 0) {
  console.error('README fora de sincronia com o repositório:\n');
  for (const d of divergencias) console.error(`  · ${d}`);
  process.exit(1);
}
console.log(`README conferido: ${conferencias.length} linhas batem com o repositório.\n`);
