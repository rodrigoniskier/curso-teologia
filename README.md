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
| Unidades do programa | **1.375** (2.036 tópicos) |
| Referências bibliográficas oficiais | **1.251** |
| Verbetes redigidos | 198 |
| Obras livres mapeadas | 217 |

Os cinco departamentos, conforme o documento oficial:

| Sigla | Departamento | Disciplinas |
| --- | --- | --- |
| `TE` | Teologia Exegética | 27 |
| `TS` | Teologia Sistemática | 17 |
| `TH` | Teologia Histórica | 10 |
| `TP` | Teologia Pastoral | 37 |
| `CG` | Cultura Geral | 30 |

A cobertura não é inferida pelo número bruto de verbetes. `npm run estado`
conta **disciplinas distintas**: hoje há conteúdo em **101 das 101 disciplinas
em que um verbete se aplica**. O primeiro ciclo de cobertura curricular está,
portanto, completo. A diferença entre 198 verbetes e 101 disciplinas cobertas
existe porque algumas disciplinas possuem mais de um verbete.

## Como o conteúdo é escrito

Cada verbete segue uma **estrutura progressiva**: nunca começa pela definição.
Parte do problema que a doutrina resolve, percorre a exegese e a história do
debate, expõe honestamente onde as escolas divergem, e só então **declara** a
doutrina em um bloco de definição. Fecha com a aplicação pastoral.

Os blocos disponíveis estão tipados em [`src/tipos.ts`](src/tipos.ts):
`paragrafo`, `secao`, `citacao`, `passagem`, `termo`, `controversia`,
`lista`, `definicao` e `pastoral`.

Toda fonte externa é um objeto tipado com autor, ano, obra, veículo, idioma,
tipo e nível de acesso — e sempre com link para o original. A tipagem distingue
obra primária, tradução, livro, artigo, verbete, relatório, curso, documento e
acervo; assim um censo institucional não precisa ser classificado como livro,
nem um livro-texto como artigo apenas para satisfazer o compilador.

O verbete precisa **ensinar a doutrina**, não resumi-la e remeter ao manual.
O alvo declarado do portal é que quem estuda por ele não dependa de comprar
bibliografia cara para se formar.

## Biblioteca

O acervo está nos arquivos [`src/dados/biblioteca.ts`](src/dados/biblioteca.ts),
[`src/dados/biblioteca-extra.ts`](src/dados/biblioteca-extra.ts),
[`src/dados/biblioteca-final.ts`](src/dados/biblioteca-final.ts),
[`src/dados/biblioteca-aprofundamento.ts`](src/dados/biblioteca-aprofundamento.ts)
e complementos temáticos como
[`src/dados/biblioteca-historia-moderna.ts`](src/dados/biblioteca-historia-moderna.ts),
reunidos por [`biblioteca-completa.ts`](src/dados/biblioteca-completa.ts). Ele
mapeia o que dá para ler legalmente sem pagar nada, cruzado com os códigos de
disciplina — cada página de disciplina mostra a leitura gratuita correspondente.

O critério de entrada é estreito de propósito: **domínio público**, **edição
digital autorizada** ou **empréstimo de biblioteca**. Cópia não autorizada de
obra em catálogo não entra. Além de ser injusto com quem publica em português,
esses links morrem, e um portal de estudo não pode ser construído sobre eles.

Onde a obra de referência ainda está em catálogo, a resposta não é indicar uma
cópia pirata: é cobrir o conteúdo no próprio verbete, apoiado no aparato
primário aberto — Calvino, Hodge, Turretin e Bavinck estão todos livres.

## Auditorias automáticas

Há quatro garantias complementares. A auditoria de integridade confere relações
internas e cobertura do acervo; a validação curricular procura corrupção
estrutural introduzida pela extração do PDF; a auditoria semântica impede que
um link válido prometa no título conteúdo que a URL não entrega; e a auditoria
de links verifica a disponibilidade da rede:

```bash
npm run validar             # gera o índice e valida ids, verMais, fontes, acervo e currículo
npm run validar:curriculo   # sequência e contaminação estrutural das unidades e bibliografias
npm run auditar:metadados   # coerência semântica entre título e URL de acervos
npm run auditar             # falha se houver link quebrado
npm run auditar:relatorio   # grava relatorio-auditoria.md
```

`npm run validar` primeiro regenera `src/conteudo/indice.ts` a partir dos
próprios arquivos de verbete. Em seguida, reprova, entre outras coisas, id
duplicado, destino de `verMais` inexistente, auto-remissão, fonte de citação sem
`fonteId` resolvível e obra usada em verbete sem entrada no acervo. O validador
curricular adicional procura sequências quebradas e sinais de que títulos,
tópicos ou itens bibliográficos absorveram texto de outra `Unidade`, de
`BIBLIOGRAFIA`, de `Pré-requisito` ou de `Ementa`.

A reprodutibilidade do currículo é verificada antes dessas validações: a CI
regenera `ementas.json` a partir do PDF original, aplica as oito reconstruções
de layout e os saneamentos bibliográficos auditados dentro do próprio pipeline
e exige igualdade byte a byte com o artefato versionado. Assim, os validadores
e o portal consomem diretamente o currículo final, sem overlay aplicado em
tempo de execução.

As remissões são editoriais num sentido e **navegáveis nos dois**: a interface
mostra as escolhas do verbete e gera automaticamente o caminho de volta para
qualquer verbete que aponte para ele. Assim a reciprocidade não depende de
copiar manualmente a mesma relação para dois arquivos.

O workflow [`.github/workflows/auditoria.yml`](.github/workflows/auditoria.yml)
roda a validação estrutural, a auditoria semântica, a auditoria de fontes e a
checagem de tipos em todo PR e push para `main`, e semanalmente às segundas para
reexaminar a disponibilidade externa das fontes.
