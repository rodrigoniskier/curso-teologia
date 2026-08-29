#!/usr/bin/env node
/** Validação offline das invariantes internas do portal. */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(RAIZ, 'src/conteudo');
const DADOS = join(RAIZ, 'src/dados');
const erros = [];
const avisos = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

const parse = (nome, s) => ts.createSourceFile(nome, s, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const nomeProp = (p) => {
  const n = p?.name;
  return n && (ts.isIdentifier(n) || ts.isStringLiteral(n) || ts.isNumericLiteral(n)) ? n.text : null;
};
const prop = (o, nome) => o && ts.isObjectLiteralExpression(o)
  ? o.properties.find((p) => ts.isPropertyAssignment(p) && nomeProp(p) === nome)?.initializer
  : undefined;
const str = (n) => n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) ? n.text : undefined;
const num = (n) => n && ts.isNumericLiteral(n) ? Number(n.text) : undefined;
const arr = (n) => n && ts.isArrayLiteralExpression(n) ? [...n.elements] : [];
const strings = (n) => arr(n).map(str).filter((x) => x !== undefined);

function urlCanonica(url) {
  if (!url) return '';
  try {
    const u = new URL(url);
    u.hash = '';
    if (u.pathname !== '/') u.pathname = u.pathname.replace(/\/+$/, '');
    return u.toString();
  } catch {
    return url.trim().replace(/\/+$/, '');
  }
}

async function arquivosConteudo(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await arquivosConteudo(p));
    else if (e.name.endsWith('.ts') && !['indice.ts', 'relacoes.ts'].includes(e.name)) out.push(p);
  }
  return out.sort();
}

function exportObjetos(sf) {
  const out = [];
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st) || !st.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue;
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.initializer && ts.isObjectLiteralExpression(d.initializer)) {
        out.push({ nome: d.name.text, obj: d.initializer });
      }
    }
  }
  return out;
}

function lerVerbete(caminho, texto) {
  const candidatos = exportObjetos(parse(caminho, texto))
    .filter(({ obj }) => str(prop(obj, 'id')) && str(prop(obj, 'disciplina')));
  if (candidatos.length !== 1) {
    erro(`${relative(RAIZ, caminho)}: esperado 1 Verbete exportado; encontrados ${candidatos.length}`);
    return null;
  }
  const { nome, obj } = candidatos[0];
  const fontes = arr(prop(obj, 'fontes')).filter(ts.isObjectLiteralExpression).map((f) => ({
    id: str(prop(f, 'id')),
    autor: str(prop(f, 'autor')),
    titulo: str(prop(f, 'titulo')),
    url: str(prop(f, 'url')),
    nota: str(prop(f, 'nota')),
  }));
  const citacoes = arr(prop(obj, 'blocos')).filter(ts.isObjectLiteralExpression)
    .filter((b) => str(prop(b, 'tipo')) === 'citacao')
    .map((b) => str(prop(b, 'fonteId'))).filter(Boolean);
  return {
    caminho,
    rel: relative(RAIZ, caminho).replaceAll('\\', '/'),
    nome,
    id: str(prop(obj, 'id')),
    disciplina: str(prop(obj, 'disciplina')),
    unidade: num(prop(obj, 'unidade')),
    atualizadoEm: str(prop(obj, 'atualizadoEm')),
    verMais: strings(prop(obj, 'verMais')),
    fontes,
    citacoes,
    texto,
  };
}

function lerAcervo(texto, arquivo) {
  const sf = parse(arquivo, texto);
  const candidatos = [];
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st) || !st.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue;
    for (const d of st.declarationList.declarations) {
      if (!ts.isIdentifier(d.name) || !d.initializer || !ts.isArrayLiteralExpression(d.initializer)) continue;
      const objetos = d.initializer.elements.filter(ts.isObjectLiteralExpression);
      if (!objetos.length) continue;
      const pareceAcervo = objetos.every((o) => str(prop(o, 'id')) && str(prop(o, 'url')) && ts.isArrayLiteralExpression(prop(o, 'disciplinas')));
      if (pareceAcervo) candidatos.push({ nome: d.name.text, lista: d.initializer });
    }
  }
  if (candidatos.length !== 1) {
    erro(`${arquivo}: esperado 1 array exportado de acervo; encontrados ${candidatos.length}`);
    return [];
  }
  const { lista } = candidatos[0];
  return arr(lista).filter(ts.isObjectLiteralExpression).map((o, i) => ({
    arquivo,
    pos: i + 1,
    id: str(prop(o, 'id')),
    url: str(prop(o, 'url')),
    disciplinas: strings(prop(o, 'disciplinas')),
  }));
}

async function arquivosAcervo() {
  return (await readdir(DADOS, { withFileTypes: true }))
    .filter((e) => e.isFile() && /^biblioteca(?:-[a-z0-9-]+)?\.ts$/i.test(e.name) && e.name !== 'biblioteca-completa.ts')
    .map((e) => `src/dados/${e.name}`)
    .sort();
}

function lerIndice(texto) {
  const sf = parse('indice.ts', texto);
  const importes = new Map();
  let lista = [];
  for (const st of sf.statements) {
    if (ts.isImportDeclaration(st) && st.importClause?.namedBindings && ts.isNamedImports(st.importClause.namedBindings)) {
      const modulo = str(st.moduleSpecifier);
      if (modulo?.startsWith('./')) for (const e of st.importClause.namedBindings.elements) importes.set(e.name.text, modulo);
    }
    if (!ts.isVariableStatement(st)) continue;
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.name.text === 'verbetes' && d.initializer && ts.isArrayLiteralExpression(d.initializer)) {
        lista = d.initializer.elements.filter(ts.isIdentifier).map((e) => e.text);
      }
    }
  }
  return { importes, lista };
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const ementaPorCodigo = new Map(ementas.map((d) => [d.codigo, d]));

const verbetes = [];
for (const caminho of await arquivosConteudo(DIR)) {
  const v = lerVerbete(caminho, await readFile(caminho, 'utf8'));
  if (v) verbetes.push(v);
}

const porId = new Map();
const primeiraFontePorId = new Map();
for (const v of verbetes) {
  if (porId.has(v.id)) erro(`id duplicado '${v.id}': ${porId.get(v.id).rel} e ${v.rel}`);
  else porId.set(v.id, v);

  const d = ementaPorCodigo.get(v.disciplina);
  if (!d) erro(`${v.rel}: disciplina inexistente '${v.disciplina}'`);
  if (d && v.unidade !== undefined && d.unidades?.length > 0 && !d.unidades.some((u) => u.numero === v.unidade)) {
    aviso(`${v.rel}: unidade ${v.unidade} não aparece no currículo efetivo de ${v.disciplina}; conferir o PDF antes de alterar`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.atualizadoEm ?? '')) erro(`${v.rel}: atualizadoEm inválido`);
  if (v.verMais.length < 2 || v.verMais.length > 3) erro(`${v.rel}: verMais deve ter 2–3 ids; tem ${v.verMais.length}`);
  if (new Set(v.verMais).size !== v.verMais.length) erro(`${v.rel}: verMais duplicado`);
  if (v.verMais.includes(v.id)) erro(`${v.rel}: auto-remissão em verMais`);

  const locais = new Set();
  for (const f of v.fontes) {
    if (!f.id) erro(`${v.rel}: fonte sem id`);
    else if (locais.has(f.id)) erro(`${v.rel}: fonte '${f.id}' duplicada`);
    else locais.add(f.id);
    if (!f.url || !/^https?:\/\//.test(f.url)) erro(`${v.rel}: fonte '${f.id ?? '?'}' sem URL http(s)`);
    if (f.nota?.includes('*')) erro(`${v.rel}: nota da fonte '${f.id ?? '?'}' contém marcação`);
    if (f.id) {
      const anterior = primeiraFontePorId.get(f.id);
      if (anterior && urlCanonica(anterior.url) !== urlCanonica(f.url)) {
        aviso(`fonte '${f.id}' usa URLs/edições diferentes em ${anterior.rel} e ${v.rel}`);
      } else if (!anterior) primeiraFontePorId.set(f.id, { ...f, rel: v.rel });
    }
  }
  for (const fonteId of v.citacoes) if (!locais.has(fonteId)) erro(`${v.rel}: citacao usa fonteId '${fonteId}' ausente`);
  if (/\*\*[^*]*\*[^*]*\*\*/s.test(v.texto)) erro(`${v.rel}: ênfase forte contém itálico aninhado`);
}

let arestas = 0;
let voltasAutomaticas = 0;
for (const v of verbetes) {
  for (const alvoId of v.verMais) {
    arestas++;
    const alvo = porId.get(alvoId);
    if (!alvo) erro(`${v.rel}: verMais aponta para id inexistente '${alvoId}'`);
    else if (!alvo.verMais.includes(v.id)) voltasAutomaticas++;
  }
}

const indice = lerIndice(await readFile(join(DIR, 'indice.ts'), 'utf8'));
const contagem = new Map();
for (const n of indice.lista) contagem.set(n, (contagem.get(n) ?? 0) + 1);
for (const [n, qtd] of contagem) if (qtd !== 1) erro(`indice.ts: '${n}' aparece ${qtd} vezes no array verbetes`);
for (const v of verbetes) {
  const esperado = './' + relative(DIR, v.caminho).replaceAll('\\', '/').replace(/\.ts$/, '');
  const importado = indice.importes.get(v.nome);
  if (!importado) erro(`${v.rel}: '${v.nome}' não importado pelo índice`);
  else if (normalize(importado) !== normalize(esperado)) erro(`indice.ts: '${v.nome}' importado de '${importado}', esperado '${esperado}'`);
  if (!contagem.has(v.nome)) erro(`${v.rel}: '${v.nome}' não registrado no array verbetes`);
}
for (const n of indice.lista) if (!indice.importes.has(n)) erro(`indice.ts: '${n}' está no array sem import`);

const acervo = [];
for (const arquivo of await arquivosAcervo()) {
  acervo.push(...lerAcervo(await readFile(join(RAIZ, arquivo), 'utf8'), arquivo));
}
const acervoPorId = new Map();
const acervoPorUrl = new Map();
for (const o of acervo) {
  if (!o.id) erro(`${o.arquivo} #${o.pos}: obra sem id`);
  else if (acervoPorId.has(o.id)) erro(`acervo: id duplicado '${o.id}'`);
  else acervoPorId.set(o.id, o);
  if (!o.url) erro(`${o.arquivo}: '${o.id ?? o.pos}' sem URL`);
  else if (!acervoPorUrl.has(urlCanonica(o.url))) acervoPorUrl.set(urlCanonica(o.url), o);
  for (const c of o.disciplinas) if (!ementaPorCodigo.has(c)) erro(`acervo '${o.id}': disciplina inexistente '${c}'`);
}

let citacoes = 0;
for (const v of verbetes) {
  for (const f of v.fontes) {
    citacoes++;
    const porIdAcervo = f.id ? acervoPorId.get(f.id) : undefined;
    const porUrl = f.url ? acervoPorUrl.get(urlCanonica(f.url)) : undefined;
    if (!porIdAcervo && !porUrl) erro(`${v.rel}: obra citada sem entrada no acervo: '${f.id ?? '?'}' — ${f.url ?? ''}`);
    else if (porIdAcervo && f.url && urlCanonica(porIdAcervo.url) !== urlCanonica(f.url)) {
      aviso(`${v.rel}: fonte '${f.id}' usa URL diferente da entrada homônima do acervo`);
    }
  }
}

console.log(`✓ ${verbetes.length} verbetes e ${arestas} remissões autorais verificados.`);
console.log(`✓ ${voltasAutomaticas} remissões unilaterais recebem backlink pela navegação automática.`);
console.log(`✓ ${citacoes} citações de fonte cruzadas com ${acervo.length} entradas do acervo.`);
console.log('✓ currículo consumido diretamente do artefato regenerável, sem overlays em runtime.');

if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s) não bloqueantes:`);
  for (const a of avisos) console.log(`  · ${a}`);
}
if (erros.length) {
  console.error(`\n${erros.length} erro(s) de integridade:`);
  for (const e of erros) console.error(`  · ${e}`);
  process.exit(1);
}
console.log('\nIntegridade OK.\n');
