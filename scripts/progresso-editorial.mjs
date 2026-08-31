#!/usr/bin/env node
/**
 * Estima o avanço da produção editorial sem tratar volume como nota de qualidade.
 *
 * A meta é calculada disciplina por disciplina. Para cada uma das 101 disciplinas
 * em que um verbete se aplica, usa-se o maior entre:
 *   - 1.500 palavras autorais;
 *   - 250 palavras por tópico curricular;
 *   - 350 palavras por unidade curricular.
 *
 * O avanço de cada disciplina é limitado a 100%, para que profundidade excedente
 * em uma área não compense uma lacuna em outra. O resultado é, portanto, uma
 * estimativa transparente da massa editorial planejada, não um gate de qualidade.
 */
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { coletarTextosAst } from './lib/coletar-textos-ast.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTEUDO = join(RAIZ, 'src', 'conteudo');
const PASTAS = ['exegetica', 'sistematica', 'historica', 'pastoral', 'geral'];
const CAMPOS_TECNICOS = new Set(['tipo', 'fonteId']);
const SEM_VERBETE = new Set([
  'CG01', 'CG02', 'CG03', 'CG04', 'CG05', 'CG54', 'CG56', 'CG57',
  'TE04', 'TE05', 'TE06', 'TE07', 'TE08', 'TE09', 'TE10', 'TE11',
  'TP21', 'TP22', 'TP23', 'TP24',
]);

function nomePropriedade(nome) {
  if (ts.isIdentifier(nome) || ts.isStringLiteralLike(nome) || ts.isNumericLiteral(nome)) {
    return nome.text;
  }
  return undefined;
}

function propriedade(obj, nome) {
  return obj.properties.find(
    (item) => ts.isPropertyAssignment(item) && nomePropriedade(item.name) === nome,
  );
}

function textoLiteral(no) {
  if (no && (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no))) return no.text;
  return undefined;
}

function contarPalavras(texto) {
  return (texto.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) ?? []).length;
}

async function lerVerbete(caminho) {
  const fonte = await readFile(caminho, 'utf8');
  const arquivo = ts.createSourceFile(caminho, fonte, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const candidatos = [];

  for (const declaracao of arquivo.statements) {
    if (!ts.isVariableStatement(declaracao)) continue;
    if (!declaracao.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue;
    for (const item of declaracao.declarationList.declarations) {
      if (item.initializer && ts.isObjectLiteralExpression(item.initializer)) candidatos.push(item.initializer);
    }
  }

  if (candidatos.length !== 1) throw new Error(`${caminho}: esperado 1 verbete exportado`);
  const obj = candidatos[0];
  const disciplina = textoLiteral(propriedade(obj, 'disciplina')?.initializer);
  const titulo = textoLiteral(propriedade(obj, 'titulo')?.initializer) ?? '';
  const subtitulo = textoLiteral(propriedade(obj, 'subtitulo')?.initializer) ?? '';
  const objetivo = textoLiteral(propriedade(obj, 'objetivo')?.initializer) ?? '';
  const blocos = propriedade(obj, 'blocos')?.initializer;
  if (!disciplina) throw new Error(`${caminho}: disciplina ausente`);

  const texto = [titulo, subtitulo, objetivo, ...coletarTextosAst(blocos, [], CAMPOS_TECNICOS)].join(' ');
  return { disciplina, palavras: contarPalavras(texto) };
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const palavrasPorDisciplina = new Map();
let verbetes = 0;
let palavrasTotais = 0;

for (const pasta of PASTAS) {
  const dir = join(CONTEUDO, pasta);
  for (const nome of (await readdir(dir)).filter((n) => n.endsWith('.ts')).sort()) {
    const verbete = await lerVerbete(join(dir, nome));
    verbetes += 1;
    palavrasTotais += verbete.palavras;
    palavrasPorDisciplina.set(
      verbete.disciplina,
      (palavrasPorDisciplina.get(verbete.disciplina) ?? 0) + verbete.palavras,
    );
  }
}

const disciplinas = [];
let metaTotal = 0;
let produzidoUtil = 0;
let restante = 0;

for (const disciplina of ementas) {
  if (SEM_VERBETE.has(disciplina.codigo)) continue;
  const unidades = disciplina.unidades?.length ?? 0;
  const topicos = (disciplina.unidades ?? []).reduce(
    (total, unidade) => total + (unidade.topicos?.length ?? 0),
    0,
  );
  const meta = Math.max(1500, topicos * 250, unidades * 350);
  const produzido = palavrasPorDisciplina.get(disciplina.codigo) ?? 0;
  const credito = Math.min(produzido, meta);
  const falta = Math.max(meta - produzido, 0);
  metaTotal += meta;
  produzidoUtil += credito;
  restante += falta;
  disciplinas.push({
    codigo: disciplina.codigo,
    titulo: disciplina.titulo,
    unidades,
    topicos,
    produzido,
    meta,
    falta,
    percentual: meta ? (credito / meta) * 100 : 100,
  });
}

const percentual = metaTotal ? (produzidoUtil / metaTotal) * 100 : 100;
const concluidas = disciplinas.filter((d) => d.falta === 0).length;
const pendentes = disciplinas
  .filter((d) => d.falta > 0)
  .sort((a, b) => b.falta - a.falta || a.codigo.localeCompare(b.codigo));
const medianaAtual = 1741;
const equivalentesRestantes = Math.ceil(restante / medianaAtual);
const totalEquivalenteProjetado = verbetes + equivalentesRestantes;

const relatorio = {
  metodologia: {
    disciplinasAplicaveis: disciplinas.length,
    pisoPalavras: 1500,
    palavrasPorTopico: 250,
    palavrasPorUnidade: 350,
    creditoMaximoPorDisciplina: '100%',
  },
  totais: {
    verbetes,
    palavrasAutorais: palavrasTotais,
    metaPalavrasDistribuida: metaTotal,
    creditoProduzido: produzidoUtil,
    restanteEstimado: restante,
    percentual,
    disciplinasNaMeta: concluidas,
    disciplinasAbaixoDaMeta: pendentes.length,
    verbetesEquivalentesRestantes: equivalentesRestantes,
    totalEquivalenteProjetado,
  },
  maioresLacunas: pendentes.slice(0, 15),
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(relatorio, null, 2));
  process.exit(0);
}

console.log('\nPROGRESSO EDITORIAL ESTIMADO');
console.log(`disciplinas aplicáveis: ${disciplinas.length}`);
console.log(`palavras autorais existentes: ${palavrasTotais.toLocaleString('pt-BR')}`);
console.log(`meta distribuída: ${metaTotal.toLocaleString('pt-BR')} palavras`);
console.log(`crédito produzido, sem compensação entre disciplinas: ${produzidoUtil.toLocaleString('pt-BR')}`);
console.log(`restante estimado: ${restante.toLocaleString('pt-BR')} palavras`);
console.log(`avanço estimado: ${percentual.toFixed(1)}%`);
console.log(`disciplinas na meta: ${concluidas}/${disciplinas.length}`);
console.log(`equivalente restante à mediana atual: ~${equivalentesRestantes} verbetes`);
console.log(`total equivalente projetado: ~${totalEquivalenteProjetado} verbetes`);
console.log('\nMaiores lacunas pela meta distribuída:');
for (const item of pendentes.slice(0, 15)) {
  console.log(
    `${item.codigo.padEnd(5)} ${item.percentual.toFixed(1).padStart(5)}%` +
    `  falta ${String(item.falta).padStart(5)} palavras  ${item.titulo}`,
  );
}
console.log('\nEsta é uma estimativa de produção, não uma nota de qualidade nem um gate automático.');
