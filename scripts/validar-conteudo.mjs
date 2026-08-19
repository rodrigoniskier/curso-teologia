#!/usr/bin/env node
/**
 * Validação estrutural do conteúdo do portal.
 *
 * Não testa disponibilidade de rede — isso pertence a auditar-links.mjs.
 * Aqui ficam invariantes internas que TypeScript não consegue verificar:
 * ids, índice, remissões, fonteId e correspondência entre fontes e acervo.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR_CONTEUDO = join(RAIZ, 'src/conteudo');
const erros = [];
const avisos = [];
const info = [];

const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

function parse(caminho, texto) {
  return ts.createSourceFile(caminho, texto, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

function nomeProp(p) {
  const n = p?.name;
  if (!n) return null;
  if (ts.isIdentifier(n) || ts.isStringLiteral(n) || ts.isNumericLiteral(n)) return n.text;
  return null;
}

function prop(obj, nome) {
  if (!obj || !ts.isObjectLiteralExpression(obj)) return undefined;
  return obj.properties.find((x) => ts.isPropertyAssignment(x) && nomeProp(x) === nome)?.initializer;
}

function str(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return undefined;
}

function num(node) {
  return ts.isNumericLiteral(node) ? Number(node.text) : undefined;
}

function arr(node) {
  return node && ts.isArrayLiteralExpression(node) ? [...node.elements] : [];
}

function strings(node) {
  return arr(node).map(str).filter((x) => x !== undefined);
}

async function arquivosTs(dir) {
  const out = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory()) out.push(...await arquivosTs(p));
    else if (ent.name.endsWith('.ts') && ent.name !== 'indice.ts' && ent.name !== 'relacoes.ts') out.push(p);
  }
  return out.sort();
}

function objetosExportados(sf) {
  const out = [];
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st)) continue;
    if (!st.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue;
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.initializer && ts.isObjectLiteralExpression(d.initializer)) {
        out.push({ nome: d.name.text, obj: d.initializer });
      }
    }
  }
  return out;
}

function normalizarUrl(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    if (u.pathname !== '/') u.pathname = u.pathname.replace(/\/+$/, '');
    return u.toString();
  } catch {
    return url?.trim().replace(/\/+$/, '');
  }
}

function extrairVerbete(caminho, texto) {
  const sf = parse(caminho, texto);
  const candidatos = objetosExportados(sf).filter(({ obj }) => str(prop(obj, 'id')) && str(prop(obj, 'disciplina')));
  if (candidatos.length !== 1) {
    erro(`${relative(RAIZ, caminho)}: esperado exatamente 1 Verbete exportado; encontrados ${candidatos.length}`);
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
  const citacoes = arr(prop(obj, 'blocos'))
    .filter(ts.isObjectLiteralExpression)
    .filter((b) => str(prop(b, 'tipo')) === 'citacao')
    .map((b) => ({ fonteId: str(prop(b, 'fonteId')) }));

  return {
    caminho,
    caminhoRel: relative(RAIZ, caminho).replaceAll('\\', '/'),
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

function extrairArrayNomeado(texto, caminho, nomes) {
  const sf = parse(caminho, texto);
  for (const st of sf.statements) {
    if (!ts.isVariableStatement(st)) continue;
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && nomes.includes(d.name.text) && d.initializer && ts.isArrayLiteralExpression(d.initializer)) {
        return d.initializer;
      }
    }
  }
  return undefined;
}

function extrairBiblioteca(texto, caminho, nomes) {
  const lista = extrairArrayNomeado(texto, caminho, nomes);
  if (!lista) {
    erro(`${caminho}: array ${nomes.join('/')} não encontrado`);
    return [];
  }
  return lista.elements.filter(ts.isObjectLiteralExpression).map((o, i) => ({
    arquivo: caminho,
    pos: i + 1,
    id: str(prop(o, 'id')),
    autor: str(prop(o, 'autor')),
    titulo: str(prop(o, 'titulo')),
    url: str(prop(o, 'url')),
    disciplinas: strings(prop(o, 'disciplinas')),
  }));
}

function extrairIndice(texto) {
  const sf = parse('indice.ts', texto);
  const importes = new Map();
  let lista = [];
  for (const st of sf.statements) {
    if (ts.isImportDeclaration(st) && st.importClause?.namedBindings && ts.isNamedImports(st.importClause.namedBindings)) {
      const modulo = str(st.moduleSpecifier);
      if (modulo?.startsWith('./')) {
        for (const el of st.importClause.namedBindings.elements) importes.set(el.name.text, modulo);
      }
    }
    if (!ts.isVariableStatement(st)) continue;
    for (const d of st.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.name.text === 'verbetes' && d.initializer && ts.isArrayLiteralExpression(d.initializer)) {
        lista = d.initializer.elements.filter(ts.isIdentifier).map((x) => x.text);
      }
    }
  }
  return { importes, lista };
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const ementaPorCodigo = new Map(ementas.map((d) => [d.codigo, d]));

const verbetes = [];
for (const caminho of await arquivosTs(DIR_CONTEUDO)) {
  const v = extrairVerbete(caminho, await readFile(caminho, 'utf8'));
  if (v) verbetes.push(v);
}

const porId = new Map();
const fontesPorId = new Map();
for (const v of verbetes) {
  if (!v.id) erro(`${v.caminhoRel}: id ausente ou não literal`);
  else if (porId.has(v.id)) erro(`id de verbete duplicado '${v.id}': ${porId.get(v.id).caminhoRel} e ${v.caminhoRel}`);
  else porId.set(v.id, v);

  const d = ementaPorCodigo.get(v.disciplina);
  if (!d) erro(`${v.caminhoRel}: disciplina inexistente '${v.disciplina}'`);
  if (d && v.unidade !== undefined && d.unidades?.length > 0 && !d.unidades.some((u) => u.numero === v.unidade)) {
    aviso(`${v.caminhoRel}: unidade ${v.unidade} não aparece no JSON de ${v.disciplina}; conferir contra o PDF, pois há lacunas conhecidas na extração`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.atualizadoEm ?? '')) erro(`${v.caminhoRel}: atualizadoEm deve ser YYYY-MM-DD`);

  if (v.verMais.length < 2 || v.verMais.length > 3) {
    erro(`${v.caminhoRel}: verMais deve conter 2 ou 3 relações editoriais; contém ${v.verMais.length}`);
  }
  if (new Set(v.verMais).size !== v.verMais.length) erro(`${v.caminhoRel}: verMais contém id duplicado`);
  if (v.verMais.includes(v.id)) erro(`${v.caminhoRel}: verMais aponta para o próprio verbete`);

  const idsFonteLocais = new Set();
  for (const f of v.fontes) {
    if (!f.id) erro(`${v.caminhoRel}: fonte sem id`);
    else if (idsFonteLocais.has(f.id)) erro(`${v.caminhoRel}: fonte id '${f.id}' duplicado no verbete`);
    else idsFonteLocais.add(f.id);

    if (!f.url || !/^https?:\/\//.test(f.url)) erro(`${v.caminhoRel}: fonte '${f.id ?? '?'}' sem URL http(s) literal`);
    if (f.nota?.includes('*')) erro(`${v.caminhoRel}: nota da fonte '${f.id ?? '?'}' contém '*' (nota é texto puro)`);

    if (f.id) {
      const anterior = fontesPorId.get(f.id);
      if (anterior && f.url && anterior.url && normalizarUrl(anterior.url) !== normalizarUrl(f.url)) {
        aviso(`fonte '${f.id}' usa edições/URLs diferentes em ${anterior.caminhoRel} e ${v.caminhoRel}`);
      } else if (!anterior) {
        fontesPorId.set(f.id, { ...f, caminhoRel: v.caminhoRel });
      }
    }
  }

  for (const c of v.citacoes) {
    if (c.fonteId && !idsFonteLocais.has(c.fonteId)) erro(`${v.caminhoRel}: bloco citacao usa fonteId '${c.fonteId}' ausente em fontes`);
  }

  if (/\*\*[^*]*\*[^*]*\*\*/s.test(v.texto)) erro(`${v.caminhoRel}: contém ênfase forte com itálico aninhado, que vaza asteriscos na interface`);
}

let arestas = 0;
let arestasSemVoltaAutoral = 0;
for (const v of verbetes) {
  for (const alvoId of v.verMais) {
    arestas++;
    const alvo = porId.get(alvoId);
    if (!alvo) {
      erro(`${v.caminhoRel}: verMais aponta para id inexistente '${alvoId}'`);
      continue;
    }
    if (!alvo.verMais.includes(v.id)) arestasSemVoltaAutoral++;
  }
}
info.push(`${arestas} remissões autorais verificadas; ${arestasSemVoltaAutoral} recebem a volta pela navegação recíproca automática.`);

const indice = extrairIndice(await readFile(join(DIR_CONTEUDO, 'indice.ts'), 'utf8'));
const vezesNoArray = new Map();
for (const n of indice.lista) vezesNoArray.set(n, (vezesNoArray.get(n) ?? 0) + 1);
for (const [n, qtd] of vezesNoArray) if (qtd !== 1) erro(`src/conteudo/indice.ts: '${n}' aparece ${qtd} vezes no array verbetes`);

for (const v of verbetes) {
  const moduloEsperado = './' + relative(DIR_CONTEUDO, v.caminho).replaceAll('\\', '/').replace(/\.ts$/, '');
  const moduloImportado = indice.importes.get(v.nome);
  if (!moduloImportado) erro(`${v.caminhoRel}: export '${v.nome}' não é importado em src/conteudo/indice.ts`);
  else if (normalize(moduloImportado) !== normalize(moduloEsperado)) erro(`src/conteudo/indice.ts: import de '${v.nome}' aponta para '${moduloImportado}', esperado '${moduloEsperado}'`);
  if (!vezesNoArray.has(v.nome)) erro(`${v.caminhoRel}: export '${v.nome}' não aparece no array verbetes`);
}
for (const n of indice.lista) if (!indice.importes.has(n)) erro(`src/conteudo/indice.ts: '${n}' está no array verbetes mas não tem import correspondente`);

const biblioteca = [
  ...extrairBiblioteca(
    await readFile(join(RAIZ, 'src/dados/biblioteca.ts'), 'utf8'),
    'src/dados/biblioteca.ts',
    ['biblioteca'],
  ),
  ...extrairBiblioteca(
    await readFile(join(RAIZ, 'src/dados/biblioteca-extra.ts'), 'utf8'),
    'src/dados/biblioteca-extra.ts',
    ['bibliotecaExtra'],
  ),
];

const bibPorId = new Map();
const bibPorUrl = new Map();
for (const b of biblioteca) {
  if (!b.id) erro(`${b.arquivo}: item #${b.pos} sem id`);
  else if (bibPorId.has(b.id)) erro(`biblioteca: id duplicado '${b.id}'`);
  else bibPorId.set(b.id, b);

  if (!b.url) erro(`${b.arquivo}: item '${b.id ?? b.pos}' sem URL`);
  else {
    const u = normalizarUrl(b.url);
    if (bibPorUrl.has(u)) aviso(`biblioteca: URL repetida em '${bibPorUrl.get(u).id}' e '${b.id}'`);
    else bibPorUrl.set(u, b);
  }

  for (const c of b.disciplinas) {
    if (!ementaPorCodigo.has(c)) erro(`biblioteca '${b.id}': disciplina inexistente '${c}'`);
  }
}

let fontesConferidas = 0;
for (const v of verbetes) {
  for (const f of v.fontes) {
    fontesConferidas++;
    const porMesmoId = f.id ? bibPorId.get(f.id) : undefined;
    const porMesmaUrl = f.url ? bibPorUrl.get(normalizarUrl(f.url)) : undefined;
    if (!porMesmoId && !porMesmaUrl) {
      erro(`${v.caminhoRel}: obra citada sem entrada no acervo: '${f.id ?? '?'}' — ${f.autor ?? ''}, ${f.titulo ?? ''} — ${f.url ?? ''}`);
      continue;
    }
    if (porMesmoId && f.url && normalizarUrl(porMesmoId.url) !== normalizarUrl(f.url)) {
      aviso(`${v.caminhoRel}: fonte '${f.id}' usa URL diferente da entrada homônima do acervo`);
    }
  }
}
info.push(`${fontesConferidas} citações de fonte cruzadas com ${biblioteca.length} entradas do acervo.`);

for (const i of info) console.log(`  ✓ ${i}`);
if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s) não bloqueantes:`);
  for (const a of avisos) console.log(`  · ${a}`);
}

if (erros.length) {
  console.error(`\n${erros.length} erro(s) de integridade:\n`);
  for (const e of erros) console.error(`  · ${e}`);
  console.error('\nCorrija antes do merge.\n');
  process.exit(1);
}

console.log(`\nIntegridade OK: ${verbetes.length} verbetes, ${biblioteca.length} obras, ${ementas.length} disciplinas.`);
console.log('Índice, ids, destinos de verMais, fonteId e cobertura do acervo conferidos.\n');
