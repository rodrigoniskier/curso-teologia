#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(RAIZ, 'src/dados/plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(RAIZ, 'src/dados/cobertura-curricular.json'), 'utf8'));
const questoes = JSON.parse(await readFile(join(RAIZ, 'src/dados/questoes.json'), 'utf8'));

const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const concluidas = cobertura.unidadesConcluidas ?? {};
const erros = [];
const ids = new Set();
const letrasPermitidas = new Set(['A', 'B', 'C', 'D', 'E']);
const faixas = {
  av1: plano.avaliacoes.av1,
  av2: plano.avaliacoes.av2,
};

function exigir(condicao, mensagem) {
  if (!condicao) erros.push(mensagem);
}

exigir(Array.isArray(questoes), 'src/dados/questoes.json deve conter uma lista');

for (const q of Array.isArray(questoes) ? questoes : []) {
  exigir(typeof q?.id === 'string' && q.id.trim().length > 0, 'questão sem id válido');
  if (q?.id) {
    exigir(!ids.has(q.id), `id de questão duplicado: ${q.id}`);
    ids.add(q.id);
  }

  const disciplina = porCodigo.get(q?.disciplina);
  exigir(Boolean(disciplina), `${q?.id ?? '(sem id)'}: disciplina inexistente: ${q?.disciplina}`);
  exigir(q?.avaliacao === 'av1' || q?.avaliacao === 'av2', `${q?.id ?? '(sem id)'}: avaliação deve ser av1 ou av2`);
  if (!disciplina || !(q?.avaliacao in faixas)) continue;

  const faixa = faixas[q.avaliacao];
  const unidadesAlvo = disciplina.unidades
    .filter((u) => u.numero >= faixa.inicioUnidade && u.numero <= faixa.fimUnidade)
    .map((u) => u.numero);
  const oficiais = new Set(disciplina.unidades.map((u) => u.numero));
  const feitas = new Set(concluidas[disciplina.codigo] ?? []);

  exigir(disciplina.unidades.length > 0, `${q.id}: não pode haver questão em disciplina sem unidades oficiais`);
  exigir(unidadesAlvo.length > 0, `${q.id}: a ${q.avaliacao.toUpperCase()} desta disciplina não possui unidades oficiais na faixa`);
  exigir(oficiais.has(q.unidade), `${q.id}: unidade ${q.unidade} não existe em ${disciplina.codigo}`);
  exigir(
    q.unidade >= faixa.inicioUnidade && q.unidade <= faixa.fimUnidade,
    `${q.id}: unidade ${q.unidade} está fora da faixa ${faixa.inicioUnidade}–${faixa.fimUnidade} de ${q.avaliacao.toUpperCase()}`,
  );
  exigir(
    unidadesAlvo.every((numero) => feitas.has(numero)),
    `${q.id}: ${q.avaliacao.toUpperCase()} contém questão antes da conclusão integral das unidades ${unidadesAlvo.join(', ')}`,
  );

  exigir(typeof q.contexto === 'string' && q.contexto.trim().length > 0, `${q.id}: contexto vazio`);
  exigir(typeof q.comando === 'string' && q.comando.trim().length > 0, `${q.id}: comando vazio`);
  exigir(Array.isArray(q.alternativas) && q.alternativas.length >= 2, `${q.id}: precisa de ao menos duas alternativas`);

  if (Array.isArray(q.alternativas)) {
    const letras = new Set();
    for (const alternativa of q.alternativas) {
      exigir(letrasPermitidas.has(alternativa?.letra), `${q.id}: letra de alternativa inválida: ${alternativa?.letra}`);
      exigir(!letras.has(alternativa?.letra), `${q.id}: alternativa duplicada: ${alternativa?.letra}`);
      letras.add(alternativa?.letra);
      exigir(typeof alternativa?.texto === 'string' && alternativa.texto.trim().length > 0, `${q.id}: alternativa ${alternativa?.letra ?? '?'} vazia`);
    }
    exigir(letras.has(q.gabarito), `${q.id}: gabarito ${q.gabarito} não corresponde a uma alternativa`);
  }

  exigir(typeof q.justificativa === 'string' && q.justificativa.trim().length > 0, `${q.id}: justificativa vazia`);
  exigir(/^\d{4}-\d{2}-\d{2}$/.test(q.atualizadoEm ?? ''), `${q.id}: atualizadoEm deve usar AAAA-MM-DD`);
}

if (erros.length) {
  console.error(`Banco de avaliações inválido (${erros.length} erro(s)):`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log('✓ banco de avaliações válido');
console.log(`  ${ementas.length * 2} módulos estruturais (AV1 + AV2)`);
console.log(`  ${questoes.length} questões cadastradas`);
if (questoes.length === 0) console.log('  banco deliberadamente vazio enquanto os blocos curriculares não forem concluídos');
