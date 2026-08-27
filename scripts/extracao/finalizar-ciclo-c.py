"""Migração one-shot do ciclo C.

Executada uma única vez pela CI do ramo de manutenção. Regenera o currículo,
remove aplicação de overlays em runtime, documenta a nova arquitetura e troca o
workflow temporário pelo gate permanente. O próprio arquivo se remove ao final.
"""
from pathlib import Path
import json
import subprocess

RAIZ = Path(__file__).resolve().parents[2]


def ler(rel):
    return (RAIZ / rel).read_text(encoding='utf-8')


def gravar(rel, texto):
    (RAIZ / rel).write_text(texto, encoding='utf-8')


def trocar(rel, antigo, novo):
    texto = ler(rel)
    if antigo not in texto:
        raise SystemExit(f'{rel}: trecho esperado não encontrado')
    gravar(rel, texto.replace(antigo, novo, 1))


def rodar(*args):
    subprocess.run(args, cwd=RAIZ, check=True)


# 1) O artefato versionado passa a nascer correto a partir do PDF.
rodar('python3', 'scripts/extracao/extract.py')
rodar('python3', 'scripts/extracao/ligaduras.py')
rodar('python3', 'scripts/extracao/parse.py')
rodar('python3', 'scripts/extracao/aplicar-correcoes-layout.py')

# 2) Runtime e ferramentas editoriais leem diretamente o JSON final.
trocar(
    'scripts/validar-integridade.mjs',
    """const ementasBase = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoesEmenta = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);
const basePorCodigo = new Map(ementasBase.map((d) => [d.codigo, d]));
const codigosCorrecao = new Set();
for (const c of correcoesEmenta) {
  if (!c.codigo) erro('ementas-correcoes.json: correção sem código');
  else if (codigosCorrecao.has(c.codigo)) erro(`ementas-correcoes.json: código duplicado '${c.codigo}'`);
  else codigosCorrecao.add(c.codigo);
  if (c.codigo && !basePorCodigo.has(c.codigo)) erro(`ementas-correcoes.json: disciplina inexistente '${c.codigo}'`);
  if (c.unidades && new Set(c.unidades.map((u) => u.numero)).size !== c.unidades.length)
    erro(`ementas-correcoes.json: unidades duplicadas em '${c.codigo}'`);
}
const correcoesPorCodigo = new Map(correcoesEmenta.map((d) => [d.codigo, d]));
const ementas = ementasBase.map((d) => ({ ...d, ...(correcoesPorCodigo.get(d.codigo) ?? {}) }));
const ementaPorCodigo = new Map(ementas.map((d) => [d.codigo, d]));
""",
    """const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const ementaPorCodigo = new Map(ementas.map((d) => [d.codigo, d]));
""",
)
trocar(
    'scripts/validar-integridade.mjs',
    "console.log(`✓ ${correcoesEmenta.length} correção(ões) curricular(es) auditável(is) aplicada(s).`);\n",
    "console.log('✓ currículo consumido diretamente do artefato regenerável, sem overlays em runtime.');\n",
)

trocar(
    'scripts/estado.mjs',
    """const ementasBase = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoesEmenta = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);
const correcoesPorCodigo = new Map(correcoesEmenta.map((d) => [d.codigo, d]));
const ementas = ementasBase.map((d) => ({ ...d, ...(correcoesPorCodigo.get(d.codigo) ?? {}) }));
""",
    "const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));\n",
)

trocar(
    'scripts/priorizar-conteudo.mjs',
    """const ementasBase = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoes = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);
const correcoesPorCodigo = new Map(
  correcoes.map((disciplina) => [disciplina.codigo, disciplina]),
);
const ementas = ementasBase.map((disciplina) => ({
  ...disciplina,
  ...(correcoesPorCodigo.get(disciplina.codigo) ?? {}),
}));
""",
    "const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));\n",
)

# Arquivos menores são reescritos para deixar a arquitetura explícita.
gravar('scripts/gerar-curriculo-cliente.mjs', """import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = join(RAIZ, 'src', 'dados', 'ementas.json');
const RESUMO = join(RAIZ, 'src', 'infra', 'curriculo-gerado.json');
const DIR_DISCIPLINAS = join(RAIZ, 'public', 'disciplinas');

// ementas.json já é o produto final do pipeline PDF -> extração -> reconstrução
// de layouts irregulares. Nenhum patch curricular é aplicado no cliente.
const disciplinas = JSON.parse(await readFile(BASE, 'utf8'));

const resumo = disciplinas.map((d) => ({
  codigo: d.codigo,
  titulo: d.titulo,
  departamento: d.departamento,
  sigla: d.sigla,
  eletiva: d.eletiva,
  preRequisito: d.preRequisito,
  ementa: d.ementa,
  paginaPdf: d.paginaPdf,
  quantidadeUnidades: d.unidades.length,
}));

const estatisticas = {
  disciplinas: disciplinas.length,
  unidades: disciplinas.reduce((n, d) => n + d.unidades.length, 0),
  referencias: disciplinas.reduce(
    (n, d) => n + d.bibliografia.basica.length + d.bibliografia.complementar.length,
    0,
  ),
};

await mkdir(dirname(RESUMO), { recursive: true });
await rm(DIR_DISCIPLINAS, { recursive: true, force: true });
await mkdir(DIR_DISCIPLINAS, { recursive: true });
await writeFile(RESUMO, JSON.stringify({ disciplinas: resumo, estatisticas }, null, 2) + '\\n');
for (const disciplina of disciplinas) {
  await writeFile(join(DIR_DISCIPLINAS, `${disciplina.codigo}.json`), JSON.stringify(disciplina) + '\\n');
}

console.log(`✓ currículo cliente gerado: ${disciplinas.length} disciplinas`);
console.log(`  ${relative(RAIZ, RESUMO)} · navegação leve`);
console.log(`  ${relative(RAIZ, DIR_DISCIPLINAS)}/*.json · programa completo sob demanda`);
""")

gravar('scripts/validar-curriculo.mjs', """#!/usr/bin/env node
/**
 * Valida a estrutura do currículo FINAL versionado.
 *
 * O pipeline de extração já resolve ligaduras e aplica as reconstruções de
 * layout auditadas. Este script deliberadamente não corrige nada: se o JSON
 * final estiver contaminado, a validação deve falhar.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const curriculo = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const erros = [];
const avisos = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

const codigos = new Set();
for (const d of curriculo) {
  if (!d.codigo) erro('disciplina sem código');
  else if (codigos.has(d.codigo)) erro(`código de disciplina duplicado: ${d.codigo}`);
  else codigos.add(d.codigo);

  if (!Array.isArray(d.unidades)) {
    erro(`${d.codigo}: unidades não é array`);
    continue;
  }
  const numeros = d.unidades.map((u) => u.numero);
  if (numeros.some((n) => !Number.isInteger(n) || n < 1))
    erro(`${d.codigo}: número de unidade inválido (${numeros.join(', ')})`);
  if (new Set(numeros).size !== numeros.length)
    erro(`${d.codigo}: números de unidade duplicados (${numeros.join(', ')})`);

  if (numeros.length > 0) {
    const ordenados = [...numeros].sort((a, b) => a - b);
    const esperado = Array.from({ length: ordenados.at(-1) }, (_, i) => i + 1);
    const faltantes = esperado.filter((n) => !ordenados.includes(n));
    if (ordenados[0] !== 1 || faltantes.length > 0)
      aviso(`${d.codigo}: sequência de unidades não contínua; presentes ${ordenados.join(', ')}${faltantes.length ? `; faltam ${faltantes.join(', ')}` : ''}`);
  }

  for (const u of d.unidades) {
    const titulo = String(u.titulo ?? '');
    const topicos = Array.isArray(u.topicos) ? u.topicos.map(String) : [];
    if (/\\bUnidade\\s+\\d+\\b/i.test(titulo) || /\\bBIBLIOGRAFIA\\b/i.test(titulo))
      erro(`${d.codigo} unidade ${u.numero}: título parece conter texto de outra seção: "${titulo}"`);
    if ((titulo.match(/\\bUnidade\\b/gi) ?? []).length >= 2)
      erro(`${d.codigo} unidade ${u.numero}: múltiplos marcadores "Unidade" no título`);
    for (const t of topicos) {
      if (/\\bUnidade\\s+\\d+\\b/i.test(t) || /^BIBLIOGRAFIA\\b/i.test(t))
        erro(`${d.codigo} unidade ${u.numero}: tópico parece conter texto de outra seção: "${t}"`);
    }
  }
}

console.log(`✓ ${curriculo.length} disciplinas verificadas diretamente no currículo final.`);
console.log(`✓ Estrutura interna de ${curriculo.reduce((n, d) => n + d.unidades.length, 0)} unidades inspecionada.`);
if (avisos.length) {
  console.log(`\\n${avisos.length} aviso(s) de sequência para conferência:`);
  for (const a of avisos) console.log(`  · ${a}`);
}
if (erros.length) {
  console.error(`\\n${erros.length} erro(s) estruturais no currículo final:`);
  for (const e of erros) console.error(`  · ${e}`);
  process.exit(1);
}
console.log('\\nCurrículo estruturalmente íntegro e sem overlay de execução.\\n');
""")

# 3) Comando explícito e único para regeneração local/CI.
trocar(
    'package.json',
    '    "catalogo": "node scripts/gerar-catalogo.mjs && node scripts/gerar-curriculo-cliente.mjs",\n',
    '    "catalogo": "node scripts/gerar-catalogo.mjs && node scripts/gerar-curriculo-cliente.mjs",\n    "regenerar:curriculo": "python3 scripts/extracao/extract.py && python3 scripts/extracao/ligaduras.py && python3 scripts/extracao/parse.py && python3 scripts/extracao/aplicar-correcoes-layout.py",\n',
)

# 4) Documentação: correções de layout pertencem à extração, não ao runtime.
trocar(
    'README.md',
    """```bash
python3 scripts/extracao/extract.py     # PDF -> texto (resolve CMaps por fonte)
python3 scripts/extracao/ligaduras.py   # corrige ligaduras fi/fl/ff
python3 scripts/extracao/parse.py       # texto -> src/dados/ementas.json
```""",
    """```bash
npm run regenerar:curriculo  # PDF -> texto -> ligaduras -> parser -> correções de layout
```

O produto desse comando é o próprio `src/dados/ementas.json`. A CI repete a
regeneração em checkout limpo e reprova qualquer diferença em relação ao JSON
versionado; assim, o currículo servido pelo portal é um artefato reproduzível,
não um arquivo corrigido silenciosamente em tempo de execução.""",
)

trocar(
    'README.md',
    """As reconstruções factuais de **CG10, CG13, TH01, TH02, TH03, TP02 e TP03**,
conferidas diretamente no PDF, ficam temporariamente em
[`src/dados/ementas-correcoes.json`](src/dados/ementas-correcoes.json) até que o
JSON-base seja regenerado pelo pipeline e comparado contra esse conjunto
independente de correções. O exame do original também confirmou que **CG12
realmente não possui unidades programáticas**; sua ausência não era erro de
extração.""",
    """Uma regeneração integral em checkout limpo mostrou que o parser genérico
reproduz exatamente **114 das 121 disciplinas**. As sete exceções são os layouts
irregulares já conhecidos — **CG10, CG13, TH01, TH02, TH03, TP02 e TP03**. Suas
reconstruções, conferidas diretamente no PDF, ficam em
[`scripts/extracao/correcoes-layout.json`](scripts/extracao/correcoes-layout.json)
e são aplicadas **durante a extração**. O portal, os validadores e as ferramentas
editoriais leem diretamente `ementas.json` e não aplicam overlay algum.

Essa escolha é deliberada: preservar sete exceções explícitas e auditáveis é mais
seguro do que introduzir heurísticas de ordem de colunas capazes de corromper
silenciosamente as outras 114 disciplinas. O exame do original também confirmou
que **CG12 realmente não possui unidades programáticas**; sua ausência não era
erro de extração.""",
)

trocar(
    'README.md',
    "npm run validar  # consistência de conteúdo, acervo e currículo\n",
    "npm run validar  # consistência de conteúdo, acervo e currículo\nnpm run regenerar:curriculo # reproduz ementas.json a partir do PDF original\n",
)

trocar(
    'README.md',
    """Com as reconstruções auditadas atuais, não há perda curricular conhecida entre
 esses casos já identificados. O próximo passo de manutenção é regenerar o
`ementas.json` a partir do pipeline corrigido e comparar automaticamente o
resultado com `ementas-correcoes.json` antes de remover qualquer overlay.""".replace(' entre\n ', ' entre\n'),
    """Com as reconstruções auditadas atuais, não há perda curricular conhecida entre
esses casos já identificados. A CI agora regenera `ementas.json` a partir do PDF
original e exige igualdade com o artefato versionado. Não existe mais overlay
curricular em runtime: qualquer mudança futura no PDF, no extrator, nas ligaduras,
no parser ou no manifesto de layout precisa aparecer explicitamente no diff.""",
)

# Ajustes de continuidade para futuras sessões.
trocar(
    'CLAUDE.md',
    "npm run validar             # integridade interna de conteúdo e acervo\n",
    "npm run validar             # integridade interna de conteúdo e acervo\nnpm run regenerar:curriculo # reproduz ementas.json a partir do PDF original\n",
)
trocar(
    'CLAUDE.md',
    """Divergência entre o número de `unidade` do verbete e o JSON é **aviso**, não
erro automático, porque a extração do PDF tem lacunas documentadas. Confirme
contra o PDF antes de alterar conteúdo ou ementa.""",
    """Divergência entre o número de `unidade` do verbete e o JSON permanece **aviso**,
não erro automático, porque a ancoragem editorial de um verbete pode ser mais
ampla que uma unidade. O currículo, porém, não depende mais de lacunas conhecidas
da extração: a CI o regenera do PDF e exige igualdade com o artefato versionado.""",
)
trocar(
    'CLAUDE.md',
    "- **TH06 · História da IPB** — ainda sem fonte livre única à altura de todo o\n  programa; há material secundário disperso.\n",
    '',
)

# 5) Gate permanente: regenerar e exigir diff zero antes das demais validações.
workflow = """name: Auditoria de fontes

# Sem filtro de paths: ambos os jobs são gates obrigatórios.
on:
  push:
    branches: [main]
  pull_request:
  schedule:
    - cron: '0 6 * * 1'
  workflow_dispatch:

concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.run_id }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}

jobs:
  links:
    name: Verificar todas as fontes citadas
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: '22'
      - name: Auditar links
        id: auditoria
        env:
          NODE_OPTIONS: --dns-result-order=ipv4first
        run: |
          if [ "${{ github.event_name }}" = "schedule" ]; then
            node scripts/auditar-links.mjs --relatorio --tolerante
          else
            node scripts/auditar-links.mjs --relatorio
          fi
      - name: Publicar relatório no resumo
        if: always()
        run: cat relatorio-auditoria.md >> "$GITHUB_STEP_SUMMARY" || true
      - name: Guardar relatório
        if: always()
        uses: actions/upload-artifact@v6
        with:
          name: relatorio-auditoria
          path: |
            relatorio-auditoria.md
            relatorio-auditoria.json
          retention-days: 30

  build:
    name: Compilar e validar o portal
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: '22'
      - run: npm ci

      - name: Conferir reprodutibilidade do currículo
        run: |
          cp src/dados/ementas.json /tmp/ementas-versionado.json
          npm run regenerar:curriculo
          if ! cmp -s /tmp/ementas-versionado.json src/dados/ementas.json; then
            echo '::error::ementas.json diverge da regeneração a partir do PDF original'
            diff -u /tmp/ementas-versionado.json src/dados/ementas.json | head -n 400 || true
            exit 1
          fi

      - name: Testar regras de infraestrutura
        run: node --test scripts/lib/*.test.mjs
      - name: Validar integridade do conteúdo
        run: npm run validar
      - name: Auditar coerência semântica dos metadados
        run: npm run auditar:metadados
      - run: npm run build
      - name: Conferir os números do README
        run: npm run conferir
      - name: Verificar diagnóstico editorial
        run: npm run priorizar -- --json > /dev/null
"""
gravar('.github/workflows/auditoria.yml', workflow)

# O antigo arquivo tinha função exclusivamente de overlay em runtime. O mesmo
# conteúdo auditado já vive em scripts/extracao/correcoes-layout.json.
(RAIZ / 'src/dados/ementas-correcoes.json').unlink()
comparador = RAIZ / 'scripts/extracao/comparar-regeneracao.py'
if comparador.exists():
    comparador.unlink()

# O migrador não faz parte da arquitetura permanente.
Path(__file__).unlink()
print('migração do ciclo C preparada; ementas.json regenerado e runtime sem overlays')
