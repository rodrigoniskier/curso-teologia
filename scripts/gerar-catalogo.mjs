import ts from 'typescript';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { coletarTextosAst } from './lib/coletar-textos-ast.mjs';
import { removerMarcacaoEnfase } from './lib/texto-busca.mjs';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTEUDO = join(RAIZ, 'src', 'conteudo');
const CATALOGO = join(CONTEUDO, 'catalogo-gerado.json');
const INDICE = join(CONTEUDO, 'indice.ts');
const BUSCA = join(RAIZ, 'public', 'indice-busca.json');
const PASTAS = ['exegetica', 'sistematica', 'historica', 'pastoral', 'geral'];
const ORDEM_SIGLA = new Map(['TE', 'TS', 'TH', 'TP', 'CG'].map((s, i) => [s, i]));

function nomePropriedade(nome) {
  if (ts.isIdentifier(nome) || ts.isStringLiteralLike(nome) || ts.isNumericLiteral(nome)) return nome.text;
  return undefined;
}

function propriedade(obj, nome) {
  return obj.properties.find(
    (p) => ts.isPropertyAssignment(p) && nomePropriedade(p.name) === nome,
  );
}

function textoLiteral(no) {
  if (!no) return undefined;
  if (ts.isStringLiteralLike(no) || ts.isNoSubstitutionTemplateLiteral(no)) return no.text;
  return undefined;
}

function numeroLiteral(no) {
  if (!no) return undefined;
  if (ts.isNumericLiteral(no)) return Number(no.text);
  return undefined;
}

function listaDeTextos(no) {
  if (!no || !ts.isArrayLiteralExpression(no)) return undefined;
  const itens = no.elements.map(textoLiteral);
  return itens.every((x) => typeof x === 'string') ? itens : undefined;
}

function contarArray(no) {
  return no && ts.isArrayLiteralExpression(no) ? no.elements.length : 0;
}

function lerVerbete(caminho, pasta) {
  return readFile(caminho, 'utf8').then((fonte) => {
    const sf = ts.createSourceFile(caminho, fonte, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const candidatos = [];

    for (const st of sf.statements) {
      if (!ts.isVariableStatement(st)) continue;
      const exportado = st.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);
      if (!exportado) continue;

      for (const decl of st.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || !decl.initializer || !ts.isObjectLiteralExpression(decl.initializer)) continue;
        const obj = decl.initializer;
        const id = textoLiteral(propriedade(obj, 'id')?.initializer);
        const disciplina = textoLiteral(propriedade(obj, 'disciplina')?.initializer);
        const titulo = textoLiteral(propriedade(obj, 'titulo')?.initializer);
        const objetivo = textoLiteral(propriedade(obj, 'objetivo')?.initializer);
        if (!id || !disciplina || !titulo || !objetivo) continue;
        candidatos.push({ nome: decl.name.text, obj, id, disciplina, titulo, objetivo });
      }
    }

    if (candidatos.length !== 1) {
      throw new Error(`${relative(RAIZ, caminho)}: esperado 1 Verbete exportado; encontrados ${candidatos.length}`);
    }

    const { nome, obj, id, disciplina, titulo, objetivo } = candidatos[0];
    const subtitulo = textoLiteral(propriedade(obj, 'subtitulo')?.initializer);
    const unidade = numeroLiteral(propriedade(obj, 'unidade')?.initializer);
    const atualizadoEm = textoLiteral(propriedade(obj, 'atualizadoEm')?.initializer) ?? '';
    const verMais = listaDeTextos(propriedade(obj, 'verMais')?.initializer) ?? [];
    const blocosNo = propriedade(obj, 'blocos')?.initializer;
    const fontesNo = propriedade(obj, 'fontes')?.initializer;
    const textosBlocos = coletarTextosAst(blocosNo);
    const textosFontes = coletarTextosAst(fontesNo);

    if (contarArray(blocosNo) && textosBlocos.length === 0) {
      throw new Error(`${relative(RAIZ, caminho)}: blocos não entraram no índice de busca`);
    }

    const textoBusca = removerMarcacaoEnfase(
      [disciplina, titulo, subtitulo ?? '', objetivo, ...textosBlocos, ...textosFontes]
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim(),
    );
    const arquivo = './' + [pasta, caminho.split(sep).at(-1)].join('/');

    return {
      meta: {
        id,
        disciplina,
        ...(unidade === undefined ? {} : { unidade }),
        titulo,
        ...(subtitulo ? { subtitulo } : {}),
        objetivo,
        ...(verMais.length ? { verMais } : {}),
        atualizadoEm,
        quantidadeBlocos: contarArray(blocosNo),
        quantidadeFontes: contarArray(fontesNo),
        arquivo,
        exportado: nome,
      },
      // O cliente normaliza este texto uma vez ao carregar o índice. Manter
      // também uma cópia normalizada quase dobrava o arquivo transferido.
      busca: { id, texto: textoBusca },
    };
  });
}

const registros = [];
for (const pasta of PASTAS) {
  const dir = join(CONTEUDO, pasta);
  const arquivos = (await readdir(dir)).filter((f) => f.endsWith('.ts')).sort();
  for (const arquivo of arquivos) registros.push(await lerVerbete(join(dir, arquivo), pasta));
}

registros.sort((a, b) => {
  const sa = a.meta.disciplina.slice(0, 2);
  const sb = b.meta.disciplina.slice(0, 2);
  const dep = (ORDEM_SIGLA.get(sa) ?? 99) - (ORDEM_SIGLA.get(sb) ?? 99);
  if (dep) return dep;
  const codigo = a.meta.disciplina.localeCompare(b.meta.disciplina, 'pt-BR', { numeric: true });
  if (codigo) return codigo;
  const unidade = (a.meta.unidade ?? 999) - (b.meta.unidade ?? 999);
  if (unidade) return unidade;
  return a.meta.titulo.localeCompare(b.meta.titulo, 'pt-BR');
});

const ids = new Set();
for (const { meta } of registros) {
  if (ids.has(meta.id)) throw new Error(`id duplicado no catálogo: ${meta.id}`);
  ids.add(meta.id);
}

function gerarIndice() {
  const importes = registros.map(({ meta }) => {
    const modulo = meta.arquivo.replace(/\.ts$/, '');
    return `import { ${meta.exportado} } from '${modulo}';`;
  });
  const nomes = registros.map(({ meta }) => `  ${meta.exportado},`);
  return [
    '/** Arquivo gerado por scripts/gerar-catalogo.mjs. Não edite manualmente. */',
    "import type { Verbete } from '../tipos';",
    '',
    ...importes,
    '',
    'export const verbetes: Verbete[] = [',
    ...nomes,
    '];',
    '',
  ].join('\n');
}

await mkdir(dirname(CATALOGO), { recursive: true });
await mkdir(dirname(BUSCA), { recursive: true });
await writeFile(CATALOGO, JSON.stringify(registros.map((r) => r.meta), null, 2) + '\n');
await writeFile(BUSCA, JSON.stringify(registros.map((r) => r.busca)) + '\n');
await writeFile(INDICE, gerarIndice());

console.log(`✓ catálogo gerado: ${registros.length} verbetes`);
console.log(`  ${relative(RAIZ, CATALOGO)} · metadados leves`);
console.log(`  ${relative(RAIZ, BUSCA)} · texto integral carregado apenas na busca`);
console.log(`  ${relative(RAIZ, INDICE)} · registro TypeScript gerado para validação`);
