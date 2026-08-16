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
| Unidades do programa | **1.339** (1.995 tópicos) |
| Referências bibliográficas oficiais | **1.237** |
| Verbetes redigidos | 42 |
| Obras livres mapeadas | 56 |

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

O verbete precisa **ensinar a doutrina**, não resumi-la e remeter ao manual.
O alvo declarado do portal é que quem estuda por ele não dependa de comprar
bibliografia cara para se formar.

## Biblioteca

[`src/dados/biblioteca.ts`](src/dados/biblioteca.ts) mapeia o que dá para ler
legalmente sem pagar nada, cruzado com os códigos de disciplina — cada página
de disciplina mostra a leitura gratuita correspondente.

O critério de entrada é estreito de propósito: **domínio público**, **edição
digital autorizada** ou **empréstimo de biblioteca**. Cópia não autorizada de
obra em catálogo não entra. Além de ser injusto com quem publica em português,
esses links morrem, e um portal de estudo não pode ser construído sobre eles.

Onde a obra de referência ainda está em catálogo, a resposta não é indicar uma
cópia pirata: é cobrir o conteúdo no próprio verbete, apoiado no aparato
primário aberto — Calvino, Hodge, Turretin e Bavinck estão todos livres.

## Auditoria de links

O requisito é que **só entrem links que funcionam**. Isso é garantido por
automação, não por inspeção manual:

```bash
npm run auditar             # falha se houver link quebrado
npm run auditar:relatorio   # grava relatorio-auditoria.md
```

O workflow [`.github/workflows/auditoria.yml`](.github/workflows/auditoria.yml)
roda a auditoria e a checagem de tipos em todo PR e push para `main`, e
semanalmente às segundas para pegar link que morreu desde a última checagem.
O relatório fica no resumo do job e como artefato.

### Domínios restritos

Alguns acervos recusam conexões vindas de faixas de IP de nuvem — o CCEL é o
caso mais notável: responde normalmente a um navegador e dá
`UND_ERR_CONNECT_TIMEOUT` nos runners do GitHub, em IPv4 e IPv6, com ou sem
`www`. Da CI é impossível distinguir esse bloqueio de um link morto.

Reprovar por causa disso empurraria o portal a trocar fonte primária boa por
fonte pior, então esses domínios ficam em
[`src/dados/dominios-restritos.json`](src/dados/dominios-restritos.json), com
motivo e data da última confirmação manual. Eles aparecem no relatório em
seção própria e **não** reprovam a auditoria. Qualquer URL fora dessa lista
que falhe continua quebrando o build — a garantia segue valendo para todo o
resto.

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

### Verificação de completude

O parser é conferido contra o texto bruto: para cada disciplina, compara-se o
conjunto de `Unidade N` presentes nas páginas do PDF com o que foi extraído.
Foi assim que se descobriu que o flag de bibliografia era de mão única e
descartava tudo o que viesse depois de `BIBLIOGRAFIA` na ordem de leitura —
**140 unidades perdidas em 18 disciplinas**, incluindo justificação e
santificação em TS04. Restam 14 perdas, em CG10, CG12 e CG13, que dividem
páginas entre si.
