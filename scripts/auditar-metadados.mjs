import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import ts from 'typescript';

const RAIZ = process.cwd();
const DIR_CONTEUDO = join(RAIZ, 'src', 'conteudo');

const HOMES_DE_ACERVO = new Set([
  'https://www.monergismo.com/',
  'https://archive.org/',
  'https://www.ccel.org/',
  'https://www.dbnl.org/',
]);

const erros = [];

function textoLiteral(no) {
  if (!no) return undefined;
  if (ts.isStringLiteral(no) || ts.isNoSubstitutionTemplateLiteral(no)) return no.text;
  return undefined;
}

function propriedade(obj, nome) {
  for (const p of obj.properties) {
    if (!ts.isPropertyAssignment(p)) continue;
    const chave = ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) ? p.name.text : undefined;
    if (chave === nome) return p.initializer;
  }
  return undefined;
}

async function arquivosTs(dir) {
  const saida = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, item.name);
    if (item.isDirectory()) saida.push(...await arquivosTs(caminho));
    else if (item.isFile() && item.name.endsWith('.ts') && !['indice.ts', 'relacoes.ts'].includes(item.name)) saida.push(caminho);
  }
  return saida;
}

function tituloPrometeSubsecao(titulo) {
  if (!titulo) return true;
  const normalizado = titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  return /\b(sobre|secao)\b/.test(normalizado);
}

function auditarObjeto(obj, arquivo) {
  const url = textoLiteral(propriedade(obj, 'url'));
  if (!url || !HOMES_DE_ACERVO.has(url)) return;

  const titulo = textoLiteral(propriedade(obj, 'titulo'));
  if (tituloPrometeSubsecao(titulo)) {
    erros.push(`${arquivo}: a URL '${url}' abre apenas a página inicial do acervo, mas o título promete conteúdo específico: '${titulo ?? '(sem título)'}'`);
  }
}

async function auditarArquivo(caminho) {
  const rel = relative(RAIZ, caminho).replaceAll('\\', '/');
  const texto = await readFile(caminho, 'utf8');
  const sf = ts.createSourceFile(rel, texto, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);

  function visitar(no) {
    if (ts.isObjectLiteralExpression(no)) auditarObjeto(no, rel);
    ts.forEachChild(no, visitar);
  }
  visitar(sf);
}

for (const caminho of await arquivosTs(DIR_CONTEUDO)) await auditarArquivo(caminho);

for (const caminho of [
  join(RAIZ, 'src', 'dados', 'biblioteca.ts'),
  join(RAIZ, 'src', 'dados', 'biblioteca-extra.ts'),
  join(RAIZ, 'src', 'dados', 'biblioteca-final.ts'),
  join(RAIZ, 'src', 'dados', 'biblioteca-aprofundamento.ts'),
]) await auditarArquivo(caminho);

if (erros.length) {
  console.error(`\n${erros.length} erro(s) de coerência semântica de metadados:`);
  for (const erro of erros) console.error(`  · ${erro}`);
  process.exit(1);
}

console.log('✓ Páginas iniciais de acervos não prometem subseções que a URL não entrega.');
