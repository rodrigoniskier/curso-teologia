#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MATERIAIS = join(RAIZ, 'src', 'materiais-disciplinas');
const DADOS = join(RAIZ, 'src', 'dados');
const ementas = JSON.parse(await readFile(join(DADOS, 'ementas.json'), 'utf8'));
const plano = JSON.parse(await readFile(join(DADOS, 'plano-curricular.json'), 'utf8'));
const cobertura = JSON.parse(await readFile(join(DADOS, 'cobertura-curricular.json'), 'utf8'));
const porCodigo = new Map(ementas.map((d) => [d.codigo, d]));
const estagios = new Set(plano.naturezas?.estagio ?? []);
const concluidas = new Set(cobertura.disciplinasSemUnidadesConcluidas ?? []);
const erros = [];

function exigir(condicao, mensagem) { if (!condicao) erros.push(mensagem); }
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

let arquivos = [];
try {
  arquivos = (await readdir(MATERIAIS, { withFileTypes: true }))
    .filter((e) => e.isFile() && e.name.endsWith('.ts'))
    .map((e) => join(MATERIAIS, e.name));
} catch (erro) {
  if (erro?.code !== 'ENOENT') throw erro;
}

const arquivosBiblioteca = (await readdir(DADOS))
  .filter((nome) => /^biblioteca.*\.ts$/.test(nome) && nome !== 'biblioteca-completa.ts');
const textoBiblioteca = (await Promise.all(arquivosBiblioteca.map((nome) => readFile(join(DADOS, nome), 'utf8')))).join('\n');
const materiais = new Map();
const ids = new Set();

for (const caminho of arquivos) {
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
  const titulo = textoLiteral(propriedade(obj, 'titulo')?.initializer);
  const objetivo = textoLiteral(propriedade(obj, 'objetivo')?.initializer);
  const ementaCoberta = textoLiteral(propriedade(obj, 'ementaCoberta')?.initializer);
  const atualizadoEm = textoLiteral(propriedade(obj, 'atualizadoEm')?.initializer);
  const blocos = propriedade(obj, 'blocos')?.initializer;
  const fontes = propriedade(obj, 'fontes')?.initializer;

  exigir(Boolean(id), `${rel}: id ausente`);
  exigir(Boolean(disciplina), `${rel}: disciplina ausente`);
  exigir(Boolean(titulo?.trim()), `${rel}: título ausente`);
  exigir(Boolean(objetivo?.trim()), `${rel}: objetivo ausente`);
  exigir(Boolean(ementaCoberta?.trim()), `${rel}: ementaCoberta ausente`);
  exigir(/^\d{4}-\d{2}-\d{2}$/.test(atualizadoEm ?? ''), `${rel}: atualizadoEm inválido`);
  exigir(Boolean(blocos && ts.isArrayLiteralExpression(blocos) && blocos.elements.length > 0), `${rel}: blocos vazios`);
  exigir(Boolean(fontes && ts.isArrayLiteralExpression(fontes)), `${rel}: fontes deve ser lista literal`);

  if (id) {
    exigir(!ids.has(id), `${rel}: id duplicado ${id}`);
    ids.add(id);
  }

  const match = rel.match(/^src\/materiais-disciplinas\/([a-z0-9]+)\.ts$/);
  exigir(Boolean(match), `${rel}: caminho deve seguir src/materiais-disciplinas/<codigo>.ts`);
  if (match && disciplina) exigir(match[1] === disciplina.toLowerCase(), `${rel}: nome do arquivo não corresponde a ${disciplina}`);

  const d = disciplina ? porCodigo.get(disciplina) : undefined;
  exigir(Boolean(d), `${rel}: disciplina inexistente ${disciplina ?? '(ausente)'}`);
  if (d) {
    exigir(d.unidades.length === 0, `${rel}: material de disciplina só é permitido quando não há unidades oficiais`);
    exigir(ementaCoberta === d.ementa, `${rel}: ementaCoberta deve repetir literalmente a ementa oficial`);
  }
  if (disciplina) exigir(estagios.has(disciplina), `${rel}: disciplina ${disciplina} não está classificada como estágio`);

  for (const [, url] of fonte.matchAll(/\burl:\s*'([^']+)'/g)) {
    exigir(textoBiblioteca.includes(`url: '${url}'`), `${rel}: fonte não cadastrada no acervo: ${url}`);
  }

  if (disciplina) materiais.set(disciplina, rel);
}

for (const codigo of concluidas) {
  const d = porCodigo.get(codigo);
  if (!d || d.unidades.length > 0 || !estagios.has(codigo)) continue;
  exigir(materiais.has(codigo), `${codigo} está marcado como estágio concluído, mas não possui material de disciplina validado`);
}

if (erros.length) {
  console.error(`Materiais de disciplina inválidos (${erros.length} erro(s)):`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log(`✓ materiais de disciplina válidos: ${materiais.size}`);
console.log('  estágios sem unidades exigem ementaCoberta literal e material validado antes da conclusão');
