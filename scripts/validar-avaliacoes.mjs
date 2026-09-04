#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DADOS = join(RAIZ, 'src/dados');
const MATERIAIS = join(RAIZ, 'src/materiais');
const MATERIAIS_DISCIPLINAS = join(RAIZ, 'src/materiais-disciplinas');
const ementas = JSON.parse(await readFile(join(DADOS, 'ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(DADOS, 'plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(DADOS, 'cobertura-curricular.json'), 'utf8'));
const arquivosQuestoes = (await readdir(DADOS))
  .filter((nome) => /^questoes(?:-[a-z0-9-]+)?\.json$/i.test(nome))
  .sort();
const questoes = (await Promise.all(
  arquivosQuestoes.map(async (nome) => JSON.parse(await readFile(join(DADOS, nome), 'utf8'))),
)).flat();

const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const concluidas = cobertura.unidadesConcluidas ?? {};
const semUnidadesConcluidas = new Set(cobertura.disciplinasSemUnidadesConcluidas ?? []);
const erros = [];
const ids = new Set();
const letrasPermitidas = new Set(['A', 'B', 'C', 'D', 'E']);
const tiposPermitidos = new Set(['resposta-unica', 'resposta-multipla', 'assercao-razao']);
const bloomPermitido = new Set(['lembrar', 'compreender', 'aplicar', 'analisar', 'avaliar', 'criar']);
const dificuldadePermitida = new Set(['extremamente-facil', 'facil', 'media', 'dificil', 'extremamente-dificil']);
const faixas = {
  av1: plano.avaliacoes.av1,
  av2: plano.avaliacoes.av2,
};

function exigir(condicao, mensagem) {
  if (!condicao) erros.push(mensagem);
}

async function idsDeMateriaisEmPastas(idsDisponiveis) {
  let pastas = [];
  try {
    pastas = await readdir(MATERIAIS, { withFileTypes: true });
  } catch (erro) {
    if (erro?.code !== 'ENOENT') throw erro;
  }
  for (const pasta of pastas.filter((e) => e.isDirectory())) {
    const arquivos = (await readdir(join(MATERIAIS, pasta.name))).filter((n) => n.endsWith('.ts'));
    for (const nome of arquivos) {
      const texto = await readFile(join(MATERIAIS, pasta.name, nome), 'utf8');
      const id = texto.match(/\bid:\s*'([^']+)'/)?.[1];
      if (id) idsDisponiveis.add(id);
    }
  }
}

async function idsDeMateriaisDisciplina(idsDisponiveis) {
  let arquivos = [];
  try {
    arquivos = (await readdir(MATERIAIS_DISCIPLINAS)).filter((n) => n.endsWith('.ts'));
  } catch (erro) {
    if (erro?.code !== 'ENOENT') throw erro;
  }
  for (const nome of arquivos) {
    const texto = await readFile(join(MATERIAIS_DISCIPLINAS, nome), 'utf8');
    const id = texto.match(/\bid:\s*'([^']+)'/)?.[1];
    if (id) idsDisponiveis.add(id);
  }
}

async function coletarIdsReferenciais() {
  const idsDisponiveis = new Set();
  const arquivosBiblioteca = (await readdir(DADOS))
    .filter((nome) => /^biblioteca.*\.ts$/.test(nome) && nome !== 'biblioteca-completa.ts');
  for (const nome of arquivosBiblioteca) {
    const texto = await readFile(join(DADOS, nome), 'utf8');
    for (const [, id] of texto.matchAll(/\bid:\s*'([^']+)'/g)) idsDisponiveis.add(id);
  }
  await idsDeMateriaisEmPastas(idsDisponiveis);
  await idsDeMateriaisDisciplina(idsDisponiveis);
  return idsDisponiveis;
}

const referenciaisDisponiveis = await coletarIdsReferenciais();

exigir(Array.isArray(questoes), 'os bancos de questões devem conter listas');

for (const q of Array.isArray(questoes) ? questoes : []) {
  exigir(typeof q?.id === 'string' && q.id.trim().length > 0, 'questão sem id válido');
  if (q?.id) {
    exigir(!ids.has(q.id), `id de questão duplicado: ${q.id}`);
    ids.add(q.id);
  }

  const disciplina = porCodigo.get(q?.disciplina);
  exigir(Boolean(disciplina), `${q?.id ?? '(sem id)'}: disciplina inexistente: ${q?.disciplina}`);
  exigir(q?.avaliacao === 'av1' || q?.avaliacao === 'av2', `${q?.id ?? '(sem id)'}: avaliação deve ser av1 ou av2`);
  exigir(tiposPermitidos.has(q?.tipoItem), `${q?.id ?? '(sem id)'}: tipoItem inválido`);
  exigir(typeof q?.tema === 'string' && q.tema.trim().length > 0, `${q?.id ?? '(sem id)'}: tema vazio`);
  exigir(bloomPermitido.has(q?.taxonomiaBloom), `${q?.id ?? '(sem id)'}: taxonomiaBloom inválida`);
  exigir(dificuldadePermitida.has(q?.nivelDificuldade), `${q?.id ?? '(sem id)'}: nivelDificuldade inválido`);
  exigir(Array.isArray(q?.referenciais) && q.referenciais.length > 0, `${q?.id ?? '(sem id)'}: referenciais deve conter ao menos um ID`);
  if (Array.isArray(q?.referenciais)) {
    const vistos = new Set();
    for (const ref of q.referenciais) {
      exigir(typeof ref === 'string' && ref.trim().length > 0, `${q?.id ?? '(sem id)'}: referencial vazio`);
      exigir(!vistos.has(ref), `${q?.id ?? '(sem id)'}: referencial duplicado ${ref}`);
      vistos.add(ref);
      exigir(referenciaisDisponiveis.has(ref), `${q?.id ?? '(sem id)'}: referencial inexistente ${ref}`);
    }
  }

  if (!disciplina || !(q?.avaliacao in faixas)) continue;

  if (disciplina.unidades.length === 0) {
    exigir(semUnidadesConcluidas.has(disciplina.codigo), `${q.id}: avaliação criada antes da conclusão integral da disciplina sem unidades`);
    exigir(q.unidade === undefined || q.unidade === null, `${q.id}: não invente número de unidade em disciplina sem unidades oficiais`);
  } else {
    const faixa = faixas[q.avaliacao];
    const unidadesAlvo = disciplina.unidades
      .filter((u) => u.numero >= faixa.inicioUnidade && u.numero <= faixa.fimUnidade)
      .map((u) => u.numero);
    const oficiais = new Set(disciplina.unidades.map((u) => u.numero));
    const feitas = new Set(concluidas[disciplina.codigo] ?? []);

    exigir(unidadesAlvo.length > 0, `${q.id}: a ${q.avaliacao.toUpperCase()} desta disciplina não possui unidades oficiais na faixa`);
    exigir(Number.isInteger(q.unidade), `${q.id}: unidade obrigatória em disciplina com unidades oficiais`);
    exigir(oficiais.has(q.unidade), `${q.id}: unidade ${q.unidade} não existe em ${disciplina.codigo}`);
    exigir(
      q.unidade >= faixa.inicioUnidade && q.unidade <= faixa.fimUnidade,
      `${q.id}: unidade ${q.unidade} está fora da faixa ${faixa.inicioUnidade}–${faixa.fimUnidade} de ${q.avaliacao.toUpperCase()}`,
    );
    exigir(
      unidadesAlvo.every((numero) => feitas.has(numero)),
      `${q.id}: ${q.avaliacao.toUpperCase()} contém questão antes da conclusão integral das unidades ${unidadesAlvo.join(', ')}`,
    );
  }

  exigir(typeof q.contexto === 'string' && q.contexto.trim().length >= 30, `${q.id}: texto-base/contexto insuficiente`);
  exigir(typeof q.comando === 'string' && q.comando.trim().length >= 10, `${q.id}: comando insuficiente`);
  exigir(!/\b(exceto|incorreta|incorreto|não corresponde|não é)\b/i.test(q.comando), `${q.id}: evite comando formulado negativamente`);
  exigir(Array.isArray(q.alternativas) && q.alternativas.length >= 3, `${q.id}: precisa de ao menos três alternativas`);

  if (Array.isArray(q.alternativas)) {
    const letras = new Set();
    for (const alternativa of q.alternativas) {
      exigir(letrasPermitidas.has(alternativa?.letra), `${q.id}: letra de alternativa inválida: ${alternativa?.letra}`);
      exigir(!letras.has(alternativa?.letra), `${q.id}: alternativa duplicada: ${alternativa?.letra}`);
      letras.add(alternativa?.letra);
      exigir(typeof alternativa?.texto === 'string' && alternativa.texto.trim().length > 0, `${q.id}: alternativa ${alternativa?.letra ?? '?'} vazia`);
      exigir(typeof alternativa?.justificativa === 'string' && alternativa.justificativa.trim().length >= 15, `${q.id}: justificativa da alternativa ${alternativa?.letra ?? '?'} insuficiente`);
    }
    exigir(letras.has(q.gabarito), `${q.id}: gabarito ${q.gabarito} não corresponde a uma alternativa`);
  }

  exigir(typeof q.justificativa === 'string' && q.justificativa.trim().length >= 20, `${q.id}: justificativa-síntese insuficiente`);
  exigir(/^\d{4}-\d{2}-\d{2}$/.test(q.atualizadoEm ?? ''), `${q.id}: atualizadoEm deve usar AAAA-MM-DD`);
}

if (erros.length) {
  console.error(`Banco de avaliações inválido (${erros.length} erro(s)):`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log('✓ banco de avaliações válido');
console.log(`  ${ementas.length * 2} módulos estruturais (AV1 + AV2)`);
console.log(`  ${questoes.length} questões cadastradas em ${arquivosQuestoes.length} banco(s)`);
console.log('  disciplinas sem unidades podem usar a ementa integral somente após conclusão explícita');
console.log('  padrão dos itens: texto-base + comando + opções + gabarito + racional individual + Bloom/dificuldade/referenciais');
