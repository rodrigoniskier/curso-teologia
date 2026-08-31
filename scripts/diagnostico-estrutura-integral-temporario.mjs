import { readFile } from 'node:fs/promises';

const ementas = JSON.parse(await readFile(new URL('../src/dados/ementas.json', import.meta.url), 'utf8'));

const historico = [
  ['2024-1', 'Português 1'],
  ['2024-1', 'Estágio 1 Evangelização'],
  ['2024-1', 'Evangelização'],
  ['2024-1', 'Geografia e Arqueologia Bíblica'],
  ['2024-1', 'Grego 1'],
  ['2024-1', 'Hebraico 1'],
  ['2024-1', 'Hermenêutica 1'],
  ['2024-1', 'Introdução à Filosofia'],
  ['2024-1', 'Metodologia da Pesquisa Científica'],
  ['2024-1', 'Sociologia Geral'],
  ['2024-1', 'Vocação e Espiritualidade'],
  ['2024-1', 'Inglês Instrumental'],
  ['2024-1', 'Comunicação Social'],
  ['2024-2', 'Antropologia Geral e da Religião'],
  ['2024-2', 'Grego 2'],
  ['2024-2', 'Hebraico 2'],
  ['2024-2', 'Hermenêutica 2'],
  ['2024-2', 'História da Filosofia 1'],
  ['2024-2', 'Homilética'],
  ['2024-2', 'Introdução e Análise do AT'],
  ['2024-2', 'Poimênica'],
  ['2024-2', 'Português 2'],
  ['2024-2', 'Psicologia Geral'],
  ['2024-2', 'Teologia Sistemática 1 - Prolegômenos, Bibliologia e Teontologia'],
  ['2024-2', 'Credos e Confissões'],
  ['2024-2', 'Lógica'],
  ['2025-1', 'Português 3'],
  ['2025-1', 'Aconselhamento 1'],
  ['2025-1', 'Grego 3'],
  ['2025-1', 'Hebraico 3'],
  ['2025-1', 'História da Igreja 1 (Antiga)'],
  ['2025-1', 'Introdução e Análise do NT'],
  ['2025-1', 'Metodologia da Pesquisa Exegética'],
  ['2025-1', 'Pregação 1'],
  ['2025-1', 'Símbolos de Fé da IPB'],
  ['2025-1', 'Teologia Bíblica do Antigo Testamento'],
  ['2025-1', 'Teologia Sistemática 2 - Antropologia'],
  ['2025-1', 'Manuscritologia'],
  ['2025-1', 'História da Filosofia 2'],
  ['2025-2', 'Aconselhamento 2'],
  ['2025-2', 'Educação Cristã'],
  ['2025-2', 'Grego 4'],
  ['2025-2', 'Hebraico 4'],
  ['2025-2', 'História da Igreja 2 - Medieval'],
  ['2025-2', 'Liderança'],
  ['2025-2', 'Português 4'],
  ['2025-2', 'Pregação 2'],
  ['2025-2', 'Teologia Bíblica do Novo Testamento'],
  ['2025-2', 'Teologia de Missões 1'],
  ['2025-2', 'Teologia Sistemática 3 - Cristologia'],
  ['2025-2', 'Latim'],
  ['2026-1', 'História da Igreja 3 - Reforma Protestante'],
  ['2026-1', 'Exegese do AT 1 - Pentateuco'],
  ['2026-1', 'Exegese do NT 1 - Evangelhos'],
  ['2026-1', 'Teologia de Missões 2'],
  ['2026-1', 'História do Pensamento Cristão 1'],
  ['2026-1', 'Antropologia Missionária'],
  ['2026-1', 'Pregação 3 - Epístolas'],
  ['2026-1', 'Missões Transculturais'],
  ['2026-1', 'Prática de Ensino'],
  ['2026-1', 'Estágio 2 Educação Cristã'],
  ['2026-1', 'Missões Urbanas'],
  ['2026-1', 'Teologia Sistemática 4 - Soteriologia'],
  ['2026-1', 'Administração de Conflitos na Igreja'],
  ['2026-2', 'Exegese do AT 2 - Poéticos'],
  ['2026-2', 'Exegese do NT 2 - Atos'],
  ['2026-2', 'História da Igreja 4 - Moderna e Contemporânea'],
  ['2026-2', 'História do Pensamento Cristão 2'],
  ['2026-2', 'Monografia 1'],
  ['2026-2', 'Pregação 4 - Poéticos'],
  ['2026-2', 'Plantação e Revitalização de Igrejas'],
  ['2026-2', 'Teologia do Culto 1'],
  ['2026-2', 'Teologia Sistemática 5 - Pneumatologia'],
  ['2026-2', 'Apologética'],
  ['2026-2', 'Didática'],
  ['7º', 'Gestão Eclesiástica'],
  ['7º', 'Cosmovisão Calvinista'],
  ['7º', 'Constituição e Ordem da IPB 1'],
  ['7º', 'Estágio 3 - Teologia do Culto'],
  ['7º', 'Estágio 4 - Gestão Eclesiástica'],
  ['7º', 'Exegese do AT 3 - Proféticos'],
  ['7º', 'Exegese do NT 3 - Epístolas'],
  ['7º', 'História da Igreja Brasileira'],
  ['7º', 'Monografia 2'],
  ['7º', 'Pregação 5 - Proféticos'],
  ['7º', 'Teologia do Culto 2'],
  ['7º', 'Teologia Sistemática 6 - Eclesiologia'],
  ['8º', 'Constituição e Ordem da IPB 2'],
  ['8º', 'Ética Cristã'],
  ['8º', 'História da Igreja Presbiteriana do Brasil'],
  ['8º', 'Teologia Sistemática 7 - Escatologia'],
  ['8º', 'Exegese do AT 4 - Aramaico'],
  ['8º', 'Exegese do NT 4 - Apocalipse'],
];

const normalizar = (s) => s
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/\b(da|de|do|das|dos|e)\b/g, ' ')
  .replace(/[^a-z0-9]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const aliases = new Map([
  ['estagio 1 evangelizacao', 'Estágio 1 - Evangelização'],
  ['estagio 2 educacao crista', 'Estágio 2 - Educação Cristã'],
  ['historia igreja 1 antiga', 'História da Igreja 1'],
  ['historia igreja 2 medieval', 'História da Igreja 2'],
  ['historia igreja 3 reforma protestante', 'História da Igreja 3'],
  ['historia igreja 4 moderna contemporanea', 'História da Igreja 4'],
]);

function pontuar(a, b) {
  const aa = new Set(a.split(' '));
  const bb = new Set(b.split(' '));
  let inter = 0;
  for (const x of aa) if (bb.has(x)) inter++;
  return inter / Math.max(aa.size, bb.size, 1);
}

console.log('DISTRIBUIÇÃO DE UNIDADES');
const faixas = { zero: 0, '1-7': 0, '8': 0, '9-14': 0, '15': 0, '>15': 0 };
for (const d of ementas) {
  const n = d.unidades.length;
  if (n === 0) faixas.zero++;
  else if (n <= 7) faixas['1-7']++;
  else if (n === 8) faixas['8']++;
  else if (n <= 14) faixas['9-14']++;
  else if (n === 15) faixas['15']++;
  else faixas['>15']++;
}
console.log(faixas);
console.log('\nDISCIPLINAS COM >15 UNIDADES');
for (const d of ementas.filter((d) => d.unidades.length > 15)) console.log(`${d.codigo}\t${d.unidades.length}\t${d.titulo}`);
console.log('\nDISCIPLINAS COM 0 UNIDADES');
for (const d of ementas.filter((d) => d.unidades.length === 0)) console.log(`${d.codigo}\t${d.titulo}`);

console.log('\nMAPEAMENTO DO HISTÓRICO');
const usados = new Set();
let falhas = 0;
for (const [periodo, nomeOriginal] of historico) {
  const chave = normalizar(nomeOriginal);
  const alvoAlias = aliases.get(chave);
  const chaveBusca = normalizar(alvoAlias ?? nomeOriginal);
  const exatos = ementas.filter((d) => normalizar(d.titulo) === chaveBusca);
  let escolhido = exatos[0];
  if (!escolhido) {
    const ranking = ementas
      .map((d) => ({ d, score: pontuar(chaveBusca, normalizar(d.titulo)) }))
      .sort((a, b) => b.score - a.score);
    if (ranking[0]?.score >= 0.55 && ranking[0].score > (ranking[1]?.score ?? 0)) escolhido = ranking[0].d;
    else {
      falhas++;
      console.log(`FALHA\t${periodo}\t${nomeOriginal}\t${ranking.slice(0, 3).map((x) => `${x.d.codigo}:${x.d.titulo}:${x.score.toFixed(2)}`).join(' | ')}`);
      continue;
    }
  }
  if (usados.has(escolhido.codigo)) console.log(`DUPLICADO\t${escolhido.codigo}\t${nomeOriginal}`);
  usados.add(escolhido.codigo);
  console.log(`OK\t${periodo}\t${escolhido.codigo}\t${escolhido.titulo}\t<=\t${nomeOriginal}`);
}
console.log(`\nHistórico mapeado: ${usados.size}/${historico.length}; falhas: ${falhas}`);
console.log(`Disciplinas fora do histórico: ${ementas.length - usados.size}`);
console.log('\nFORA DO HISTÓRICO (ordem oficial)');
for (const d of ementas.filter((d) => !usados.has(d.codigo))) console.log(`${d.codigo}\t${d.titulo}`);
