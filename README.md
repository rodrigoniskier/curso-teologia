# Sola Scriptura — Portal de Teologia Reformada

Portal de estudos em português de teologia reformada, organizado segundo o
**Conteúdo Programático Curricular dos Seminários Teológicos da Igreja
Presbiteriana do Brasil** (Junta de Educação Teológica, 2ª ed., 2018) — o
currículo unificado aprovado pelo Supremo Concílio Extraordinário de 2014 e
adotado pelo Seminário Presbiteriano do Norte e demais seminários da IPB.

## O que já existe

| | |
| --- | --- |
| Disciplinas mapeadas | **121** (5 departamentos) |
| Unidades do programa | **1.212** |
| Referências bibliográficas oficiais | **1.237** |
| Verbetes redigidos | 3 |

Os cinco departamentos, conforme o documento oficial:

| Sigla | Departamento | Disciplinas |
| --- | --- | --- |
| `TE` | Teologia Exegética | 27 |
| `TS` | Teologia Sistemática | 17 |
| `TH` | Teologia Histórica | 10 |
| `TP` | Teologia Pastoral | 37 |
| `CG` | Cultura Geral | 30 |

## Como o conteúdo é escrito

Cada verbete segue uma **estrutura progressiva**: nunca começa pela definição.
Parte do problema que a doutrina resolve, percorre a exegese e a história do
debate, expõe honestamente onde as escolas divergem, e só então **declara** a
doutrina em um bloco de definição. Fecha com a aplicação pastoral.

Os blocos disponíveis estão tipados em [`src/tipos.ts`](src/tipos.ts):
`paragrafo`, `secao`, `citacao`, `passagem`, `termo`, `controversia`,
`lista`, `definicao` e `pastoral`.

Toda fonte externa é um objeto tipado com autor, ano, obra, veículo, idioma,
tipo e nível de acesso — e sempre com link para o original.

## Auditoria de links

O requisito é que **só entrem links que funcionam**. Isso é garantido por
automação, não por inspeção manual:

```bash
npm run auditar             # falha se houver link quebrado
npm run auditar:relatorio   # grava relatorio-auditoria.md
```

O workflow [`.github/workflows/auditoria.yml`](.github/workflows/auditoria.yml)
roda a auditoria em todo PR e push que toque o conteúdo, e semanalmente às
segundas, para pegar link que morreu desde a última checagem. O relatório fica
no resumo do job e como artefato.

## Extração do currículo

O currículo não foi digitado à mão: foi extraído do PDF oficial. O pipeline
está em [`scripts/extracao/`](scripts/extracao/) e é reproduzível:

```bash
python3 scripts/extracao/extract.py     # PDF -> texto (resolve CMaps por fonte)
python3 scripts/extracao/ligaduras.py   # corrige ligaduras fi/fl/ff
python3 scripts/extracao/parse.py       # texto -> src/dados/ementas.json
```

O PDF gerado pela editora tem os CMaps `/ToUnicode` defeituosos para as
ligaduras (mapeiam `ﬁ`, `ﬂ` e `ﬀ` para `\xa0`), o que apagava as letras de
palavras como *Filosofia*, *Definição*, *Confissão* e *influência*. As 241
palavras afetadas foram inspecionadas e são resolvidas deterministicamente
por `ligaduras.py`.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # checagem de tipos + build de produção
```

Stack: Vite + React 19 + TypeScript (estrito) + Tailwind CSS 4 + React Router.

Deploy na Vercel — a configuração está em [`vercel.json`](vercel.json), com
rewrite de SPA para que as rotas profundas funcionem.

## Design

Layout acadêmico clássico, minimalista e voltado à leitura longa:

- **Branco** para o papel, **azul** (`#1e3a8a`) como eixo estrutural,
  **amarelo** (`#f5cf4a`) apenas como destaque — nunca em corpo de texto.
- Serifada (EB Garamond) para leitura, sem serifa (Inter) para aparato.
- Medida de linha limitada a ~68 caracteres.
- Seções numeradas automaticamente via CSS counters.

## Licença e direitos

Os textos dos verbetes são de elaboração própria. O currículo é documento
público da Junta de Educação Teológica da IPB, citado como fonte. As obras
externas pertencem aos seus detentores de direitos e são sempre referenciadas
com link para o original — o portal não hospeda cópias.
