# Sola Scriptura — Portal de Teologia Reformada

Portal de estudos em português de teologia reformada, organizado segundo o
**Conteúdo Programático Curricular dos Seminários Teológicos da Igreja
Presbiteriana do Brasil** (Junta de Educação Teológica, 2ª ed., 2018) — o
currículo unificado aprovado pelo Supremo Concílio Extraordinário de 2014 e
adotado pelo Seminário Presbiteriano do Norte e demais seminários da IPB.

> **Vai escrever para o portal?** Leia antes o [`CLAUDE.md`](CLAUDE.md). Ele
> registra o padrão de redação dos verbetes, a disciplina de fontes, as
> lacunas que foram recusadas de propósito e as armadilhas do ambiente de
> desenvolvimento. Vale para colaborador humano e para agente.

## O que já existe

| | |
| --- | --- |
| Disciplinas mapeadas | **121** (5 departamentos) |
| Unidades do programa | **1.339** (1.995 tópicos) |
| Referências bibliográficas oficiais | **1.237** |
| Verbetes redigidos | 104 |
| Obras livres mapeadas | 147 |

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

O acervo está nos arquivos [`src/dados/biblioteca.ts`](src/dados/biblioteca.ts)
e [`src/dados/biblioteca-extra.ts`](src/dados/biblioteca-extra.ts), reunidos por
[`biblioteca-completa.ts`](src/dados/biblioteca-completa.ts). Ele mapeia o que
dá para ler legalmente sem pagar nada, cruzado com os códigos de disciplina —
cada página de disciplina mostra a leitura gratuita correspondente.

O critério de entrada é estreito de propósito: **domínio público**, **edição
digital autorizada** ou **empréstimo de biblioteca**. Cópia não autorizada de
obra em catálogo não entra. Além de ser injusto com quem publica em português,
esses links morrem, e um portal de estudo não pode ser construído sobre eles.

Onde a obra de referência ainda está em catálogo, a resposta não é indicar uma
cópia pirata: é cobrir o conteúdo no próprio verbete, apoiado no aparato
primário aberto — Calvino, Hodge, Turretin e Bavinck estão todos livres.

## Auditorias automáticas

Há três garantias complementares. A auditoria de integridade confere relações
internas e cobertura do acervo; a auditoria semântica impede que um link válido
prometa no título conteúdo que a URL não entrega; a auditoria de links verifica
a disponibilidade da rede:

```bash
npm run validar             # ids, índice, verMais, fonteId e acervo
npm run auditar:metadados   # coerência semântica entre título e URL de acervos
npm run auditar             # falha se houver link quebrado
npm run auditar:relatorio   # grava relatorio-auditoria.md
```

`npm run validar` reprova, entre outras coisas, verbete não registrado no
índice, id duplicado, destino de `verMais` inexistente, auto-remissão, fonte de
citação sem `fonteId` resolvível e obra usada em verbete sem entrada no acervo.
As remissões são editoriais num sentido e **navegáveis nos dois**: a interface
mostra as escolhas do verbete e gera automaticamente o caminho de volta para
qualquer verbete que aponte para ele. Assim a reciprocidade não depende de
copiar manualmente a mesma relação para dois arquivos.

O workflow [`.github/workflows/auditoria.yml`](.github/workflows/auditoria.yml)
roda a validação estrutural, a auditoria semântica, a auditoria de fontes e a
checagem de tipos em todo PR e push para `main`, e semanalmente às segundas para
pegar link que morreu desde a última checagem. O relatório de rede fica no
resumo do job e como artefato.

### Domínios restritos

Alguns acervos recusam conexões vindas de faixas de IP de nuvem. Nesses casos,
quando a limitação é persistente e demonstrável, o domínio pode ficar em
[`src/dados/dominios-restritos.json`](src/dados/dominios-restritos.json), com
motivo e data da última confirmação manual. Eles aparecem no relatório em
seção própria e **não** reprovam a auditoria. Qualquer URL fora dessa lista
que falhe continua sendo examinada normalmente.

### Acervos fora do ar

Uma falha do acervo inteiro é diferente de um item removido. Se todas as URLs
de um domínio falham em nível de conexão — inclusive a raiz —, a auditoria pode
classificar o acervo como temporariamente indisponível em vez de condenar cada
item individualmente. Isso evita trocar fontes boas porque um hospedeiro teve
uma interrupção transitória.

Um `404` isolado, porém, **não basta para diagnosticar item morto quando o
acervo está instável**. A regra operacional é observar o padrão entre execuções:
`404` consistente para a mesma URL, enquanto o restante do acervo responde,
justifica substituição; alternância entre `404`, `502`, timeout e erro de
conexão aponta antes para sobrecarga. A auditoria continua estrita — não há
exceção genérica para `404` ou `502`.

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
npm run validar  # consistência de conteúdo e acervo
npm run build    # checagem de tipos + build de produção
npm run estado   # cobertura por departamento e contagens, calculadas do código
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
santificação em TS04. Restam perdas conhecidas em CG10, CG12 e CG13, que
dividem páginas entre si; por isso divergência de `unidade` é tratada pela
validação como aviso para conferência contra o PDF, não como erro automático.
