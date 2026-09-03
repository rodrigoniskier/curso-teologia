#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MATERIAIS = join(RAIZ, 'src', 'materiais');
const DADOS = join(RAIZ, 'src', 'dados');
const ementas = JSON.parse(await readFile(join(DADOS, 'ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(DADOS, 'plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(DADOS, 'cobertura-curricular.json'), 'utf8'));
const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const erros = [];

function exigir(condicao, mensagem) {
  if (!condicao) erros.push(mensagem);
}

function nomePropriedade(nome) {
  if (ts.isIdentifier(nome) || ts.isStringLiteralLike(nome) || ts.isNumericLiteral(nome)) return nome.text;
  return undefined;
}

function propriedade(obj, nome) {
  return obj.properties.find((p) => ts.isPropertyAssignment(p) && nomePropriedade(p.name) === nome);
}

function textoLiteral(no) {
  return no && (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no)) ? no.text : undefined;
}

function numeroLiteral(no) {
  return no && ts.isNumericLiteral(no) ? Number(no.text) : undefined;
}

function listaTextos(no) {
  if (!no || !ts.isArrayLiteralExpression(no)) return undefined;
  const itens = no.elements.map(textoLiteral);
  return itens.every((x) => typeof x === 'string') ? itens : undefined;
}

async function listarTs(dir) {
  const saida = [];
  let entradas;
  try {
    entradas = await readdir(dir, { withFileTypes: true });
  } catch (erro) {
    if (erro?.code === 'ENOENT') return saida;
    throw erro;
  }
  for (const entrada of entradas) {
    const caminho = join(dir, entrada.name);
    if (entrada.isDirectory()) saida.push(...await listarTs(caminho));
    else if (entrada.isFile() && entrada.name.endsWith('.ts')) saida.push(caminho);
  }
  return saida;
}

const arquivosBiblioteca = (await readdir(DADOS))
  .filter((nome) => /^biblioteca.*\.ts$/.test(nome) && nome !== 'biblioteca-completa.ts');
const textoBiblioteca = (await Promise.all(
  arquivosBiblioteca.map((nome) => readFile(join(DADOS, nome), 'utf8')),
)).join('\n');

const materiais = new Map();
const ids = new Set();
for (const caminho of await listarTs(MATERIAIS)) {
  const fonte = await readFile(caminho, 'utf8');
  const sf = ts.createSourceFile(caminho, fonte, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const variavel = sf.statements
    .filter(ts.isVariableStatement)
    .flatMap((st) => [...st.declarationList.declarations])
    .find((decl) => ts.isIdentifier(decl.name) && decl.name.text === 'material');
  const obj = variavel?.initializer;
  const rel = relative(RAIZ, caminho).split(sep).join('/');
  exigir(Boolean(obj && ts.isObjectLiteralExpression(obj)), `${rel}: deve declarar const material = { ... }`);
  if (!obj || !ts.isObjectLiteralExpression(obj)) continue;

  const id = textoLiteral(propriedade(obj, 'id')?.initializer);
  const disciplina = textoLiteral(propriedade(obj, 'disciplina')?.initializer);
  const unidade = numeroLiteral(propriedade(obj, 'unidade')?.initializer);
  const titulo = textoLiteral(propriedade(obj, 'titulo')?.initializer);
  const objetivo = textoLiteral(propriedade(obj, 'objetivo')?.initializer);
  const topicos = listaTextos(propriedade(obj, 'topicosCobertos')?.initializer);
  const atualizadoEm = textoLiteral(propriedade(obj, 'atualizadoEm')?.initializer);
  const blocos = propriedade(obj, 'blocos')?.initializer;
  const fontes = propriedade(obj, 'fontes')?.initializer;

  exigir(Boolean(id), `${rel}: id ausente`);
  exigir(Boolean(disciplina), `${rel}: disciplina ausente`);
  exigir(Number.isInteger(unidade), `${rel}: unidade inválida`);
  exigir(Boolean(titulo?.trim()), `${rel}: título ausente`);
  exigir(Boolean(objetivo?.trim()), `${rel}: objetivo ausente`);
  exigir(Array.isArray(topicos), `${rel}: topicosCobertos deve ser lista literal`);
  exigir(/^\d{4}-\d{2}-\d{2}$/.test(atualizadoEm ?? ''), `${rel}: atualizadoEm inválido`);
  exigir(Boolean(blocos && ts.isArrayLiteralExpression(blocos) && blocos.elements.length > 0), `${rel}: blocos vazios`);
  exigir(Boolean(fontes && ts.isArrayLiteralExpression(fontes) && fontes.elements.length > 0), `${rel}: fontes vazias`);

  if (id) {
    exigir(!ids.has(id), `${rel}: id duplicado ${id}`);
    ids.add(id);
  }

  const match = rel.match(/^src\/materiais\/([a-z0-9]+)\/u(\d+)\.ts$/);
  exigir(Boolean(match), `${rel}: caminho deve seguir src/materiais/<codigo>/uNN.ts`);
  if (match && disciplina && Number.isInteger(unidade)) {
    exigir(match[1] === disciplina.toLowerCase(), `${rel}: pasta não corresponde a ${disciplina}`);
    exigir(Number(match[2]) === unidade, `${rel}: nome do arquivo não corresponde à unidade ${unidade}`);
  }

  const d = disciplina ? porCodigo.get(disciplina) : undefined;
  exigir(Boolean(d), `${rel}: disciplina inexistente ${disciplina ?? '(ausente)'}`);
  const u = d?.unidades.find((item) => item.numero === unidade);
  exigir(Boolean(u), `${rel}: unidade ${unidade} não existe em ${disciplina}`);
  if (u && topicos) {
    exigir(topicos.length === u.topicos.length, `${rel}: quantidade de tópicos cobertos diverge da unidade oficial`);
    for (let i = 0; i < u.topicos.length; i++) {
      exigir(topicos[i] === u.topicos[i], `${rel}: tópico ${i + 1} deve repetir literalmente "${u.topicos[i]}"`);
    }
  }

  for (const [, url] of fonte.matchAll(/\burl:\s*'([^']+)'/g)) {
    exigir(textoBiblioteca.includes(`url: '${url}'`), `${rel}: fonte não cadastrada no acervo: ${url}`);
  }

  if (disciplina && Number.isInteger(unidade)) materiais.set(`${disciplina}:${unidade}`, rel);
}

const idiomas = new Set(plano.naturezas?.idioma ?? []);
for (const [codigo, unidades] of Object.entries(cobertura.unidadesConcluidas ?? {})) {
  if (!idiomas.has(codigo)) continue;
  for (const unidade of unidades) {
    exigir(
      materiais.has(`${codigo}:${unidade}`),
      `${codigo} unidade ${unidade} está marcada como concluída, mas não possui material didático validado`,
    );
  }
}

if (erros.length) {
  console.error(`Materiais por unidade inválidos (${erros.length} erro(s)):`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log(`✓ materiais por unidade válidos: ${materiais.size}`);
console.log('  tópicos cobertos conferidos literalmente contra a ementa oficial');
console.log('  unidades concluídas de idiomas exigem material didático correspondente');
