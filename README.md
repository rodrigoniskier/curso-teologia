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
| Verbetes redigidos | 201 |
| Obras livres mapeadas | 224 |
| Unidades verificadas | **0 / 1.375** |
| Disciplinas concluídas | **0 / 121** |
| Módulos avaliativos estruturados | **242** |

Os cinco departamentos, conforme o documento oficial:

| Sigla | Departamento | Disciplinas |
| --- | --- | --- |
| `TE` | Teologia Exegética | 27 |
| `TS` | Teologia Sistemática | 17 |
| `TH` | Teologia Histórica | 10 |
| `TP` | Teologia Pastoral | 37 |
| `CG` | Cultura Geral | 30 |

A régua principal não é mais a presença de verbetes. O projeto acompanha o **currículo integral das 121 disciplinas** e exige verificação explícita das **1.375 unidades oficiais**. Idiomas e estágios pertencem à mesma meta, mas usam formatos pedagógicos próprios. Um verbete ancorado numa unidade não a certifica automaticamente.

O registro conservador começa sem promover retroativamente o acervo já escrito: cada unidade existente será revisada contra todos os seus tópicos oficiais quando chegar sua vez na fila de produção. `npm run progresso:curriculo` é a fonte de verdade para conclusão curricular; `npm run densidade:editorial` permanece apenas como indicador secundário de volume textual.

## Currículo integral, ordem de produção e avaliações

O plano permanente está em [`src/dados/plano-curricular.json`](src/dados/plano-curricular.json). A produção segue primeiro as **93 disciplinas que aparecem no histórico de referência**, na ordem em que constam nele; somente depois entram as **28 disciplinas ausentes do histórico**, preservando a ordem do currículo oficial.

Cada disciplina possui dois módulos avaliativos estruturais: **AV1**, para as unidades oficiais 1–8 existentes, e **AV2**, para as unidades 9–15 existentes. O banco [`src/dados/questoes.json`](src/dados/questoes.json) começa vazio. A CI rejeita qualquer questão criada antes da conclusão integral de todas as unidades do bloco correspondente. Unidades 16+ continuam obrigatórias para concluir a disciplina, embora fiquem fora do recorte AV1/AV2; disciplinas sem unidades numeradas são acompanhadas em nível de disciplina, sem conteúdo inventado.

As unidades oficiais têm rota própria (`/disciplina/:codigo/unidade/:numero`). Isso permite que aquisição de línguas e estágios recebam, no futuro, materiais adequados ao seu método sem depender do formato de verbete doutrinário.

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
npm run validar             # integridade de conteúdo, currículo integral e avaliações
npm run validar:curriculo   # sequência e contaminação estrutural das unidades e bibliografias
npm run validar:plano       # 121 disciplinas, ordem do histórico, AV1/AV2 e cobertura explícita
npm run validar:avaliacoes  # bloqueia questões prematuras ou fora da faixa/unidade
npm run progresso:curriculo # régua principal: unidades e disciplinas verificadas
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
npm run regenerar:curriculo  # PDF -> texto -> ligaduras -> parser -> correções de layout
```

O produto desse comando é o próprio `src/dados/ementas.json`. A CI repete a
regeneração em checkout limpo e reprova qualquer diferença em relação ao JSON
versionado; assim, o currículo servido pelo portal é um artefato reproduzível,
não um arquivo corrigido silenciosamente em tempo de execução.

O PDF gerado pela editora tem os CMaps `/ToUnicode` defeituosos para as
ligaduras (mapeiam `ﬁ`, `ﬂ` e `ﬀ` para `\xa0`), o que apagava as letras de
palavras como *Filosofia*, *Definição*, *Confissão* e *influência*. As 241
palavras afetadas foram inspecionadas e são resolvidas deterministicamente
por `ligaduras.py`.

Há ainda uma classe diferente de falha: **duas disciplinas ou duas colunas na
mesma página**. Em CG12/CG13, o código aparece no fim do cabeçalho
(`MONOGRAFIA 2 CG13`) em vez de uma linha isolada; o recortador antigo não
reconhecia esse formato e misturava os dois blocos. Em CG10, a bibliografia na
coluna direita interrompia visualmente a sequência das unidades da coluna
esquerda. O validador revelou a mesma família de defeitos em TH01–TH04 e
TP02–TP03: unidades, tópicos e bibliografias podiam ser absorvidos pela seção
vizinha por causa da ordem de leitura dos objetos do PDF.

Uma regeneração integral em checkout limpo mostrou que o parser genérico
reproduz exatamente **113 das 121 disciplinas**. As oito exceções de
reconstrução são **CG10, CG13, TH01, TH02, TH03, TH04, TP02 e TP03**. Suas
reconstruções, conferidas diretamente no PDF, ficam nos manifestos
[`scripts/extracao/correcoes-layout*.json`](scripts/extracao/) e são aplicadas
**durante a extração**. O portal, os validadores e as ferramentas editoriais
leem diretamente `ementas.json` e não aplicam overlay algum.

A ampliação do validador detectou ainda uma segunda forma de corrupção: em
**12 disciplinas** — CG04, CG65, TE12, TE17, TE20, TE21, TE22, TH05, TP04,
TP05, TS04 e TS08 — o conteúdo das unidades já estava preservado, mas o fluxo
do PDF havia anexado cópias do programa ao último item da bibliografia. Esses
casos são saneados por índice e prefixo esperados, de modo que qualquer mudança
no PDF faz o pipeline falhar em vez de cortar texto por heurística. Em TH05, a
mesma inspeção recuperou ainda dois tópicos da unidade 25 que estavam apenas no
vazamento bibliográfico.

Essa escolha é deliberada: preservar exceções explícitas e auditáveis é mais
seguro do que introduzir heurísticas de ordem de colunas capazes de corromper
silenciosamente as demais disciplinas. O exame do original também confirmou
que **CG12 realmente não possui unidades programáticas**; sua ausência não era
erro de extração.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run validar  # consistência de conteúdo, acervo e currículo
npm run regenerar:curriculo # reproduz ementas.json a partir do PDF original
npm run build    # checagem de tipos + build de produção
npm run estado   # cobertura real por disciplina e contagens calculadas do código
npm run priorizar # fila editorial por profundidade, carga curricular e fontes
```

Depois de completar a cobertura aplicável, `npm run priorizar` substitui a
escolha por simples presença/ausência. Ele mostra, separadamente, disciplinas
com muitos tópicos para pouco conteúdo, os verbetes mais curtos, os textos com
poucas fontes e ausências estruturais que merecem leitura humana. Esses sinais
não são nota automática de qualidade nem gate: servem para decidir onde uma
revisão ou um novo verbete terá maior efeito.

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

O parser é conferido contra o texto bruto e o currículo efetivo passa ainda por
uma validação estrutural independente. Esse processo já revelou perdas e
contaminações que permaneciam como JSON perfeitamente válido: **140 unidades
perdidas em 18 disciplinas** na primeira grande correção, mistura CG12/CG13,
unidades 7–9 de CG10 absorvidas por uma coluna de bibliografia, unidades 20–30
de TH01 deslocadas para TH02, unidades 27–30 de TH02 inseridas em TH03, a
unidade 15 de TP02 mais sua bibliografia inseridas em TP03, dois tópicos de
TH04 presos na bibliografia e vazamentos programáticos em outros 12 registros
bibliográficos.

Com as reconstruções e saneamentos auditados atuais, não há perda curricular
conhecida entre esses casos já identificados. A CI agora regenera `ementas.json`
a partir do PDF original e exige igualdade com o artefato versionado. Não existe
mais overlay curricular em runtime: qualquer mudança futura no PDF, no extrator,
nas ligaduras, no parser ou nos manifestos de layout precisa aparecer
explicitamente no diff.