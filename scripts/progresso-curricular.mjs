#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(RAIZ, 'src/dados/plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(RAIZ, 'src/dados/cobertura-curricular.json'), 'utf8'));
const concluidas = cobertura.unidadesConcluidas ?? {};
const semUnidadesConcluidas = new Set(cobertura.disciplinasSemUnidadesConcluidas ?? []);

const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const ordemHistorico = plano.ordemHistorico.map((x) => ({ ...x, origem: 'historico' }));
const usados = new Set(ordemHistorico.map((x) => x.codigo));
const ordem = [
  ...ordemHistorico,
  ...ementas.filter((d) => !usados.has(d.codigo)).map((d) => ({ codigo: d.codigo, origem: 'curriculo' })),
];

const totalUnidades = ementas.reduce((n, d) => n + d.unidades.length, 0);
let unidadesConcluidas = 0;
let disciplinasConcluidas = 0;
const estado = [];
for (const d of ementas) {
  const oficiais = new Set(d.unidades.map((u) => u.numero));
  const feitas = [...new Set(concluidas[d.codigo] ?? [])].filter((n) => oficiais.has(n));
  unidadesConcluidas += feitas.length;
  const completa = d.unidades.length === 0
    ? semUnidadesConcluidas.has(d.codigo)
    : feitas.length === d.unidades.length;
  if (completa) disciplinasConcluidas++;
  estado.push({ codigo: d.codigo, titulo: d.titulo, total: d.unidades.length, feitas: feitas.length, completa });
}

const estadoPorCodigo = new Map(estado.map((x) => [x.codigo, x]));
const proximo = ordem.map((x) => ({ ...x, ...estadoPorCodigo.get(x.codigo) })).find((x) => !x.completa);
const zero = ementas.filter((d) => d.unidades.length === 0).length;
const zeroConcluidas = ementas.filter((d) => d.unidades.length === 0 && semUnidadesConcluidas.has(d.codigo)).length;

const relatorio = {
  disciplinas: { concluidas: disciplinasConcluidas, total: ementas.length },
  unidades: { concluidas: unidadesConcluidas, total: totalUnidades },
  disciplinasSemUnidades: { concluidas: zeroConcluidas, total: zero },
  modulosAvaliativos: ementas.length * 2,
  ordemHistorico: plano.ordemHistorico.length,
  foraHistorico: ementas.length - plano.ordemHistorico.length,
  proximo,
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(relatorio, null, 2));
  process.exit(0);
}

console.log('\nPROGRESSO CURRICULAR INTEGRAL');
console.log(`disciplinas concluídas: ${disciplinasConcluidas}/${ementas.length}`);
console.log(`unidades oficiais concluídas e verificadas: ${unidadesConcluidas}/${totalUnidades}`);
console.log(`disciplinas sem unidades oficiais concluídas: ${zeroConcluidas}/${zero}`);
console.log(`módulos avaliativos estruturados: ${ementas.length * 2}`);
console.log(`ordem pelo histórico: ${plano.ordemHistorico.length} disciplinas · depois ${ementas.length - plano.ordemHistorico.length} ausentes do histórico`);
if (proximo) {
  console.log(`próxima disciplina obrigatória: ${proximo.codigo} — ${proximo.titulo} [${proximo.periodo ?? 'fora do histórico'}]`);
} else {
  console.log('currículo integral concluído.');
}
console.log('\nObservação: esta régua registra cobertura explicitamente verificada por unidade; verbetes preexistentes não são promovidos automaticamente a “unidade concluída”.\n');
