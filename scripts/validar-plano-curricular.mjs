#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(RAIZ, 'src/dados/plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(RAIZ, 'src/dados/cobertura-curricular.json'), 'utf8'));

const codigos = new Set(ementas.map((d) => d.codigo));
const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const erros = [];
const avisos = [];

function exigir(condicao, mensagem) {
  if (!condicao) erros.push(mensagem);
}

exigir(ementas.length === 121, `currículo deve conter 121 disciplinas; encontrou ${ementas.length}`);

const idiomas = plano.naturezas?.idioma ?? [];
const estagios = plano.naturezas?.estagio ?? [];
const classificados = [...idiomas, ...estagios];
exigir(new Set(idiomas).size === idiomas.length, 'há código duplicado na lista de idiomas');
exigir(new Set(estagios).size === estagios.length, 'há código duplicado na lista de estágios');
for (const codigo of classificados) exigir(codigos.has(codigo), `natureza curricular usa código inexistente: ${codigo}`);
for (const codigo of idiomas) exigir(!estagios.includes(codigo), `disciplina classificada simultaneamente como idioma e estágio: ${codigo}`);

const ordemHistorico = plano.ordemHistorico ?? [];
exigir(ordemHistorico.length === 93, `ordem do histórico deve conter 93 disciplinas; encontrou ${ordemHistorico.length}`);
exigir(new Set(ordemHistorico.map((x) => x.codigo)).size === ordemHistorico.length, 'ordem do histórico contém disciplina duplicada');
for (const item of ordemHistorico) exigir(codigos.has(item.codigo), `histórico usa código inexistente: ${item.codigo}`);
const foraHistorico = ementas.filter((d) => !ordemHistorico.some((x) => x.codigo === d.codigo));
exigir(foraHistorico.length === 28, `devem restar 28 disciplinas fora do histórico; encontrou ${foraHistorico.length}`);

const av1 = plano.avaliacoes?.av1;
const av2 = plano.avaliacoes?.av2;
exigir(av1?.inicioUnidade === 1 && av1?.fimUnidade === 8, 'AV1 deve corresponder às unidades 1–8');
exigir(av2?.inicioUnidade === 9 && av2?.fimUnidade === 15, 'AV2 deve corresponder às unidades 9–15');
exigir(ementas.length * 2 === 242, 'o currículo deve gerar exatamente 242 módulos estruturais AV1/AV2');

const unidadesConcluidas = cobertura.unidadesConcluidas ?? {};
for (const [codigo, unidades] of Object.entries(unidadesConcluidas)) {
  exigir(codigos.has(codigo), `cobertura usa código inexistente: ${codigo}`);
  const disciplina = porCodigo.get(codigo);
  if (!disciplina) continue;
  exigir(Array.isArray(unidades), `cobertura de ${codigo} não é uma lista`);
  exigir(new Set(unidades).size === unidades.length, `cobertura de ${codigo} contém unidade duplicada`);
  const oficiais = new Set(disciplina.unidades.map((u) => u.numero));
  for (const unidade of unidades) exigir(oficiais.has(unidade), `${codigo} marca unidade inexistente como concluída: ${unidade}`);
}

const semUnidades = cobertura.disciplinasSemUnidadesConcluidas ?? [];
exigir(new Set(semUnidades).size === semUnidades.length, 'lista de disciplinas sem unidades concluídas contém duplicação');
for (const codigo of semUnidades) {
  exigir(codigos.has(codigo), `conclusão sem unidades usa código inexistente: ${codigo}`);
  const disciplina = porCodigo.get(codigo);
  if (disciplina) exigir(disciplina.unidades.length === 0, `${codigo} foi marcado como disciplina sem unidades, mas possui ${disciplina.unidades.length}`);
}

const distribuicao = { zero: 0, ate7: 0, oito: 0, noveA14: 0, quinze: 0, acima15: 0 };
for (const d of ementas) {
  const n = d.unidades.length;
  if (n === 0) distribuicao.zero++;
  else if (n <= 7) distribuicao.ate7++;
  else if (n === 8) distribuicao.oito++;
  else if (n <= 14) distribuicao.noveA14++;
  else if (n === 15) distribuicao.quinze++;
  else distribuicao.acima15++;
}

for (const d of ementas.filter((d) => d.unidades.length > 15)) {
  avisos.push(`${d.codigo} possui ${d.unidades.length} unidades; unidades 16+ ficam fora de AV1/AV2, mas continuam obrigatórias na cobertura curricular`);
}
for (const d of ementas.filter((d) => d.unidades.length === 0)) {
  avisos.push(`${d.codigo} não possui unidades oficiais; AV1/AV2 permanecem estruturadas sem escopo inventado`);
}

if (erros.length) {
  console.error(`Plano curricular inválido (${erros.length} erro(s)):`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log('✓ plano curricular integral válido');
console.log(`  ${ementas.length} disciplinas · ${ementas.reduce((n, d) => n + d.unidades.length, 0)} unidades oficiais`);
console.log(`  naturezas: ${idiomas.length} idiomas · ${estagios.length} estágios · ${ementas.length - classificados.length} conteúdo`);
console.log(`  ordem prioritária do histórico: ${ordemHistorico.length} disciplinas; ${foraHistorico.length} ficam para o final`);
console.log(`  módulos avaliativos estruturais: ${ementas.length * 2} (AV1 + AV2 por disciplina)`);
console.log(`  distribuição de unidades: ${JSON.stringify(distribuicao)}`);
console.log(`  avisos estruturais esperados: ${avisos.length}`);
for (const aviso of avisos) console.log(`  · ${aviso}`);
