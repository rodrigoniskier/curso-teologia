#!/usr/bin/env node
/**
 * Produz uma fila editorial baseada em sinais mensuráveis, sem transformar
 * esses sinais em nota automática de qualidade.
 *
 *   npm run priorizar
 *   npm run priorizar -- --json
 */
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { coletarTextosAst } from './lib/coletar-textos-ast.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTEUDO = join(RAIZ, 'src', 'conteudo');
const PASTAS = ['exegetica', 'sistematica', 'historica', 'pastoral', 'geral'];
const TIPOS_DE_BLOCO = [
  'paragrafo',
  'secao',
  'citacao',
  'passagem',
  'termo',
  'controversia',
  'lista',
  'definicao',
  'pastoral',
];
const CAMPOS_TECNICOS = new Set(['tipo', 'fonteId']);

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
  if (no && (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no))) {
    return no.text;
  }
  return undefined;
}

function numeroLiteral(no) {
  return no && ts.isNumericLiteral(no) ? Number(no.text) : undefined;
}

function contarArray(no) {
  return no && ts.isArrayLiteralExpression(no) ? no.elements.length : 0;
}

function contarPalavras(texto) {
  return (texto.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) ?? []).length;
}

function mediana(valores) {
  const ordenados = [...valores].sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);
  return ordenados.length % 2
    ? ordenados[meio]
    : (ordenados[meio - 1] + ordenados[meio]) / 2;
}

async function lerVerbete(caminho) {
  const fonte = await readFile(caminho, 'utf8');
  const arquivo = ts.createSourceFile(
    caminho,
    fonte,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const candidatos = [];

  for (const declaracao of arquivo.statements) {
    if (!ts.isVariableStatement(declaracao)) continue;
    if (
      !declaracao.modifiers?.some(
        (modificador) => modificador.kind === ts.SyntaxKind.ExportKeyword,
      )
    ) {
      continue;
    }
    for (const item of declaracao.declarationList.declarations) {
      if (item.initializer && ts.isObjectLiteralExpression(item.initializer)) {
        candidatos.push(item.initializer);
      }
    }
  }

  if (candidatos.length !== 1) {
    throw new Error(`${relative(RAIZ, caminho)}: esperado 1 verbete exportado`);
  }

  const obj = candidatos[0];
  const id = textoLiteral(propriedade(obj, 'id')?.initializer);
  const disciplina = textoLiteral(propriedade(obj, 'disciplina')?.initializer);
  const titulo = textoLiteral(propriedade(obj, 'titulo')?.initializer);
  const subtitulo = textoLiteral(propriedade(obj, 'subtitulo')?.initializer) ?? '';
  const objetivo = textoLiteral(propriedade(obj, 'objetivo')?.initializer) ?? '';
  const unidade = numeroLiteral(propriedade(obj, 'unidade')?.initializer);
  const blocos = propriedade(obj, 'blocos')?.initializer;
  const fontes = propriedade(obj, 'fontes')?.initializer;

  if (!id || !disciplina || !titulo) {
    throw new Error(`${relative(RAIZ, caminho)}: metadados editoriais incompletos`);
  }

  const tipos = Object.fromEntries(TIPOS_DE_BLOCO.map((tipo) => [tipo, 0]));
  if (ts.isArrayLiteralExpression(blocos)) {
    for (const bloco of blocos.elements) {
      if (!ts.isObjectLiteralExpression(bloco)) continue;
      const tipo = textoLiteral(propriedade(bloco, 'tipo')?.initializer);
      if (tipo && tipo in tipos) tipos[tipo] += 1;
    }
  }

  const texto = [
    titulo,
    subtitulo,
    objetivo,
    ...coletarTextosAst(blocos, [], CAMPOS_TECNICOS),
  ].join(' ');
  return {
    id,
    disciplina,
    titulo,
    unidade,
    palavras: contarPalavras(texto),
    blocos: contarArray(blocos),
    fontes: contarArray(fontes),
    tipos,
  };
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const ementaPorCodigo = new Map(ementas.map((disciplina) => [disciplina.codigo, disciplina]));

const verbetes = [];
for (const pasta of PASTAS) {
  const diretorio = join(CONTEUDO, pasta);
  const arquivos = (await readdir(diretorio)).filter((nome) => nome.endsWith('.ts')).sort();
  for (const arquivo of arquivos) verbetes.push(await lerVerbete(join(diretorio, arquivo)));
}

const porDisciplina = new Map();
for (const verbete of verbetes) {
  const grupo = porDisciplina.get(verbete.disciplina) ?? [];
  grupo.push(verbete);
  porDisciplina.set(verbete.disciplina, grupo);
}

const disciplinas = [...porDisciplina.entries()].map(([codigo, grupo]) => {
  const ementa = ementaPorCodigo.get(codigo);
  const topicos = (ementa?.unidades ?? []).reduce(
    (total, unidade) => total + (unidade.topicos?.length ?? 0),
    0,
  );
  const palavras = grupo.reduce((total, verbete) => total + verbete.palavras, 0);
  return {
    codigo,
    titulo: ementa?.titulo ?? '(código desconhecido)',
    verbetes: grupo.length,
    unidades: ementa?.unidades?.length ?? 0,
    topicos,
    palavras,
    fontes: grupo.reduce((total, verbete) => total + verbete.fontes, 0),
    topicosPorMilPalavras: palavras ? (topicos * 1000) / palavras : 0,
  };
});

const aprofundamento = [...disciplinas]
  .filter((disciplina) => disciplina.topicos > 0)
  .sort(
    (a, b) =>
      b.topicosPorMilPalavras - a.topicosPorMilPalavras ||
      b.unidades / b.verbetes - a.unidades / a.verbetes ||
      a.codigo.localeCompare(b.codigo),
  )
  .slice(0, 12);
const revisaoDeExtensao = [...verbetes]
  .sort((a, b) => a.palavras - b.palavras || a.id.localeCompare(b.id))
  .slice(0, 12);
const reforcoDeFontes = verbetes
  .filter((verbete) => verbete.fontes <= 3)
  .sort(
    (a, b) =>
      b.palavras / Math.max(b.fontes, 1) - a.palavras / Math.max(a.fontes, 1) ||
      a.id.localeCompare(b.id),
  );
const revisaoEstrutural = verbetes.filter(
  (verbete) =>
    verbete.tipos.definicao === 0 ||
    verbete.tipos.pastoral === 0 ||
    verbete.tipos.controversia === 0,
);

const relatorio = {
  totais: {
    verbetes: verbetes.length,
    palavras: verbetes.reduce((total, verbete) => total + verbete.palavras, 0),
    medianaPalavras: mediana(verbetes.map((verbete) => verbete.palavras)),
    medianaBlocos: mediana(verbetes.map((verbete) => verbete.blocos)),
    medianaFontes: mediana(verbetes.map((verbete) => verbete.fontes)),
  },
  aprofundamento,
  revisaoDeExtensao,
  reforcoDeFontes,
  revisaoEstrutural,
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(relatorio, null, 2));
  process.exit(0);
}

function tabela(titulo, cabecalho, linhas) {
  console.log(`\n${titulo}`);
  console.log(cabecalho);
  for (const linha of linhas) console.log(linha);
}

console.log('\nDIAGNÓSTICO EDITORIAL');
console.log(
  `${relatorio.totais.verbetes} verbetes · ${relatorio.totais.palavras.toLocaleString('pt-BR')} palavras autorais` +
    ` · mediana ${relatorio.totais.medianaPalavras.toLocaleString('pt-BR')} palavras` +
    ` / ${relatorio.totais.medianaBlocos} blocos / ${relatorio.totais.medianaFontes} fontes`,
);

tabela(
  'Aprofundamento curricular — maior pressão de tópicos sobre o conteúdo existente',
  'CÓD   verb  unid  tóp  palavras  tóp/1k  disciplina',
  aprofundamento.map(
    (item) =>
      `${item.codigo.padEnd(5)}${String(item.verbetes).padStart(5)}` +
      `${String(item.unidades).padStart(6)}${String(item.topicos).padStart(5)}` +
      `${String(item.palavras).padStart(10)}${item.topicosPorMilPalavras.toFixed(1).padStart(8)}` +
      `  ${item.titulo}`,
  ),
);

tabela(
  'Revisão de extensão — verbetes mais curtos (sinal, não reprovação)',
  'ID'.padEnd(34) + 'palavras  blocos  fontes',
  revisaoDeExtensao.map(
    (item) =>
      `${item.id.padEnd(34)}${String(item.palavras).padStart(8)}` +
      `${String(item.blocos).padStart(8)}${String(item.fontes).padStart(8)}`,
  ),
);

tabela(
  'Reforço de fontes — no máximo três fontes, ordenado pela carga textual',
  'ID'.padEnd(34) + 'palavras  fontes',
  reforcoDeFontes.map(
    (item) =>
      `${item.id.padEnd(34)}${String(item.palavras).padStart(8)}` +
      `${String(item.fontes).padStart(8)}`,
  ),
);

tabela(
  'Revisão estrutural humana — ausência de bloco esperado pelo padrão editorial',
  'ID'.padEnd(34) + 'definição  pastoral  controvérsia',
  revisaoEstrutural.map(
    (item) =>
      `${item.id.padEnd(34)}${String(item.tipos.definicao).padStart(9)}` +
      `${String(item.tipos.pastoral).padStart(10)}` +
      `${String(item.tipos.controversia).padStart(14)}`,
  ),
);

console.log(
  '\nAs filas orientam leitura humana. Não são nota de qualidade nem gate automático: ' +
    'ementas variam de granularidade e nem todo tema exige o mesmo número de fontes ou controvérsias.',
);
