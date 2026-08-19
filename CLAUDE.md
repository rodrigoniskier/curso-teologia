# Continuidade do projeto

Este arquivo existe para que uma sessão nova consiga retomar o trabalho sem
depender da memória da conversa anterior. Leia-o antes de escrever qualquer
coisa. Ele registra decisões do mantenedor, invariantes do código e lições de
incidentes que não devem precisar ser reaprendidas.

---

## 1. O que é este projeto

Portal de teologia reformada em português, cobrindo o currículo oficial dos
seminários da Igreja Presbiteriana do Brasil — 121 disciplinas em cinco
departamentos, extraídas do Conteúdo Programático da JET/IPB.

**O objetivo que governa todas as decisões**, nas palavras do mantenedor:

> Quero que o estudo do conteúdo no portal e a partir dele elimine ou diminua
> muito a necessidade de comprar livros caros para formação teológica.

Isso não é slogan. É critério. Quando houver dúvida sobre incluir algo,
pergunte se aquilo aproxima um estudante sem dinheiro de uma formação séria.

Stack: Vite + React 19 + TypeScript estrito + Tailwind 4 + React Router.
Deploy na Vercel a partir de `main`.

---

## 2. Regras fixadas pelo mantenedor

- **Layout minimalista e acadêmico**, branco / azul / amarelo.
- **Conteúdo profundo, acadêmico e pastoral**, em português acessível.
- **Estrutura textual progressiva**: construa o conceito e só depois o declare.
  Nunca abra um verbete com uma definição.
- **Sempre ligar à fonte original.**
- **Só links que funcionam.** Audite tudo.
- **Toda obra citada precisa estar no acervo.**
- **Sempre ramo → PR → CI → merge.** Nada vai direto para `main`.

---

## 3. Como se escreve um verbete

### A abertura

Comece por um **problema real que o leitor tem**, não por definição nem por
histórico. Exemplos que funcionaram:

- TE52 manda o leitor olhar o rodapé de Marcos 16 e perguntar por que os
  tradutores parecem não saber onde a Bíblia termina.
- TP01 começa com alguém dizendo ao pastor que vai largar o emprego para servir
  a Deus em tempo integral e desmonta o pressuposto escondido na frase.
- TE55 lista identificações da besta feitas ao longo de dois séculos, todas
  sinceras e todas erradas.
- CG58 põe dois argumentos sobre inspiração lado a lado; o que defende a
  doutrina é o logicamente inválido.

O padrão: encurrale o leitor num problema reconhecível, mostre por que as
saídas fáceis falham e só então desenvolva.

### O corpo

- Construa antes de nomear. `definicao` ou `termo` vem **depois** que o leitor
  já entendeu a coisa.
- Quando uma tradição legou algo, diga também **o que ela cobrou em troca**.
- Antecipe a objeção honesta e responda no corpo, não numa nota defensiva.
- Prefira exemplo concreto a adjetivo abstrato.
- Não faça uma palavra original carregar uma doutrina inteira quando a doutrina
  depende da passagem, do cânon ou de síntese posterior. TE22 é o modelo:
  Calcedônia sintetiza dados de Filipenses 2; não é o significado lexical de
  `morphē`.

### O bloco `controversia`

**Cada posição recebe a força real que tem e o custo real que paga — inclusive
a posição que o portal defende.**

Se a posição reformada aparece sem custo e as outras só com defeito, o bloco
falhou. Um defensor competente de cada lado precisa conseguir se reconhecer na
descrição.

### A `pastoral`

Não é aplicação devocional genérica. É a consequência prática para quem exerce
ministério. Frequentemente contém a coisa mais difícil do verbete.

### Ligações (`verMais`)

`verMais` contém **duas ou três relações editoriais diretas**; para verbete
novo, prefira três quando houver três relações realmente úteis. Nunca coloque
id inexistente, duplicado ou o próprio id.

A reciprocidade **não é feita duplicando manualmente cada ligação**. A interface
resolve o grafo em dois sentidos por `src/conteudo/relacoes.ts`: mostra as
relações escolhidas pelo verbete e, em bloco compacto, os verbetes que apontam
para ele. Assim, se A remete a B, o leitor consegue voltar de B para A mesmo
quando B não gastou uma das suas três relações autorais com A.

`npm run validar` reprova destino inexistente, auto-remissão e duplicação. Não
volte ao modelo de exigir `A.verMais` e `B.verMais` simétricos nos arquivos:
isso cria hubs enormes e transforma curadoria editorial em manutenção mecânica.

---

## 4. Disciplina de fontes

1. **Só entra o que o leitor consegue abrir.** Empréstimo do Archive.org não é
   acesso livre; marque `acesso: 'cadastro'` quando for o caso.
2. **Nunca agregador de PDF pirata** (pdfcoffee, scribd e semelhantes).
3. **Prefira hospedeiro que a CI alcança**: Archive.org, Wikisource,
   plato.stanford.edu, monergismo.com, ipb.org.br, ipib.org.br.
4. **Quando não houver fonte à altura, declare a lacuna**. É melhor adiar um
   verbete que fundamentá-lo mal.
5. **Toda obra citada num verbete deve ter entrada no acervo.** O acervo está
   historicamente em `src/dados/biblioteca.ts`, com complementos recuperados
   pela auditoria em `src/dados/biblioteca-extra.ts`; a interface consome a
   união em `src/dados/biblioteca-completa.ts`.
6. **Em obra traduzida, o direito da tradução importa separadamente.** Estar
   acessível na rede não significa que a tradução possa ser usada licitamente
   no Brasil. Quando a tradução não servir, procure original em domínio público,
   tradução antiga livre ou recurso autorizado.

A auditoria de 16/08/2026 já conferiu as traduções sensíveis então existentes:
Beveridge e Giger estão em domínio público; Charles está livre no Brasil;
Turretini em inglês está corretamente tratado como empréstimo; Bavinck em
inglês como edição autorizada.

### Domínios restritos

`src/dados/dominios-restritos.json` é para **impossibilidade persistente de
verificação pela CI**, não para contornar instabilidade temporária. Nunca ponha
`archive.org` ali por causa de uma sequência ruim: isso desliga a verificação de
muitas fontes e esconde links realmente mortos.

Antes de restringir um domínio, teste outros hosts da mesma instituição. `403`
é resposta, não queda, e não se generaliza automaticamente para todos os
subdomínios.

---

## 5. Validações automáticas

Há três camadas e elas protegem coisas diferentes:

```bash
npm run validar             # integridade interna de conteúdo e acervo
npm run build               # TypeScript + build de produção
npm run conferir            # números do README contra o repositório
npm run auditar             # rede: disponibilidade das URLs
npm run auditar:relatorio   # rede + relatório persistido
```

`npm run validar` deve permanecer **offline e determinístico**. Ele verifica:

- um Verbete exportado por arquivo, importado e registrado uma vez no índice;
- ids de verbete únicos e códigos de disciplina existentes;
- `atualizadoEm` no formato esperado;
- `verMais` com 2–3 destinos existentes, sem repetição nem auto-remissão;
- ids de fonte únicos dentro do verbete;
- `fonteId` de bloco `citacao` resolvendo em uma fonte local;
- toda fonte citada correspondendo, por id ou URL normalizada, a uma entrada do
  acervo;
- ids únicos no acervo e códigos de disciplina válidos;
- marcações que sabemos vazar asteriscos na interface.

Divergência entre o número de `unidade` do verbete e o JSON é **aviso**, não
erro automático, porque a extração do PDF tem lacunas documentadas. Confirme
contra o PDF antes de alterar conteúdo ou ementa.

A CI em `.github/workflows/auditoria.yml` executa a validação estrutural antes
do build, confere o README e roda a auditoria de rede em job separado. Não
junte falha estrutural com indisponibilidade externa: são classes de problema
diferentes.

---

## 6. O ciclo de trabalho

```text
0. Partir sempre do main mais recente em um ramo novo
1. npm run estado — escolher o alvo pelo desequilíbrio
2. Ler a ementa oficial em src/dados/ementas.json
3. Ler verbetes vizinhos para não repetir
4. Verificar as fontes antes de escrever
5. Escrever src/conteudo/<departamento>/<nome>.ts
6. Registrar em src/conteudo/indice.ts
7. Acrescentar fontes novas ao acervo, quando necessário
8. Atualizar as contagens do README
9. npm run validar
10. npm run build
11. npm run conferir
12. Verificar a interface real no navegador
13. Commit, push, PR, esperar CI, merge
```

Como os merges são por squash, **não reutilize um ramo antigo como base do
próximo ciclo**. Isso já produziu conflitos em `README.md`, `indice.ts` e
biblioteca. Novo ciclo começa no `main` já incorporado.

A contagem do README é escrita para o leitor, mas conferida por código. Se
esquecer de atualizá-la, a CI precisa falhar. Não mantenha instantâneos mutáveis
no CLAUDE.md; rode `npm run estado`.

---

## 7. Particularidades do ambiente e da interface

- **A auditoria local de rede não é confiável** em ambientes com egresso
  bloqueado. A CI é o teste real de links; não declare link morto por um 403 do
  ambiente de desenvolvimento.
- **A rota do verbete é `/disciplina/:codigo/:id`**, não `/verbete/:id`.
- **Ênfase não aninha.** `**forte com *itálico* dentro**` vaza asteriscos.
  `npm run validar` deve impedir esse padrão.
- **`nota` de fonte é texto puro.** Não use marcação `*...*` nela.
- A página de Biblioteca e as páginas de disciplina devem importar o acervo por
  `biblioteca-completa.ts`, para não perder complementos auditados.

### Verificação no navegador

Confira sempre: zero asteriscos literais, ausência de “não encontrado”, ausência
de transbordo horizontal em desktop e mobile, blocos renderizando, relações
`Leia também` resolvendo, backlinks recíprocos aparecendo quando houver, e
nenhum erro de JavaScript.

---

## 8. Auditoria de rede: como diagnosticar Archive.org e semelhantes

O auditor repete `5xx` e `429`; um `404` é terminal **naquela execução**, mas
não deve ser interpretado isoladamente durante instabilidade do acervo.

Regras que sobreviveram ao incidente de agosto de 2026:

- **mesma URL com 404 consistente em duas ou mais execuções independentes**,
  enquanto o restante do acervo responde: item provavelmente removido →
  substituir;
- **mesma URL alternando 404 / 502 / `ECONNRESET` / timeout**: sobrecarga →
  esperar;
- **falhas migrando entre URLs a cada execução**: congestionamento → esperar;
- **falha de conexão no domínio inteiro, inclusive na raiz**: acervo fora do ar;
  o auditor já classifica esse caso e não deve reprovar;
- não crie tolerância genérica para 404/502 e não restrinja Archive.org para
  fazer a CI ficar verde.

O caso de Ryle é o teste de sanidade: a mesma URL chegou a responder 404, depois
502 e depois `ECONNRESET`, e mais tarde voltou a 200. “404 = morto” teria
eliminado uma fonte viva.

### Diagnóstico da CI

Não use isoladamente o `status` da API, a `conclusion` do check run nem um 404
ao buscar logs para inferir que um job terminou. Durante um incidente esses
sinais ficaram defasados e uma execução saudável foi cancelada. Quando houver
dúvida, use evidência temporal do log real e os timestamps das etapas
concluídas; não transforme indisponibilidade momentânea do endpoint de logs em
estado do job.

### Concorrência do auditor

`CONCORRENCIA = 6` já foi levantada como possível fator de rate limiting em
Archive.org. Reduzir para 2–3 é **hipótese não confirmada**, não correção.
Somente altere depois de comparação reproduzível; nunca afrouxe a garantia por
plausibilidade.

---

## 9. Estado e escolha do próximo alvo

**Não confie em número escrito aqui.** Rode:

```bash
npm run estado
```

O script calcula cobertura por departamento, disciplinas aplicáveis, verbetes,
acervo e idiomas diretamente do código. A escolha padrão é o departamento com
menor razão verbetes/disciplina aplicável. Sistemática ficou historicamente bem
à frente e não deve receber novos verbetes enquanto os demais estiverem atrás.

A razão exclui aquisição de língua e estágio supervisionado. A lista fica no
topo de `scripts/estado.mjs` e pode ser discutida, mas não deve ser alterada só
para melhorar um número.

---

## 10. Lacunas declaradas

Não são esquecimentos; foram recusas conscientes até que surja fonte adequada:

- **TH06 · História da IPB** — ainda sem fonte livre única à altura de todo o
  programa; há material secundário disperso.
- **Cânones de Dort em português** — não localizado texto integral em endereço
  estável e juridicamente claro.
- **Eduardo Carlos Pereira, O Problema Religioso da América Latina** — só foi
  localizado em agregador inadequado.
- **Roland Allen, Missionary Methods** e **Vos, The Pauline Eschatology** — no
  Archive.org em modalidade de empréstimo nas edições localizadas.
- **Freud sobre religião** — original alemão livre, mas traduções de referência
  localizadas ainda protegidas; ensine a tese com fontes lícitas em vez de
  apontar cópia indevida.

Antes de declarar “não existe em português”, refaça a busca nos hospedeiros que
o portal já usa. Essa conclusão já esteve errada no caso do Catecismo Maior.

---

## 11. Lições de consistência

- **Leia a ementa antes de escrever.** TE52 precisou ser corrigido porque foi
  pensado só para NT enquanto a disciplina cobria também AT.
- **Mesma classe de documento recebe a mesma classificação jurídica.** Símbolo
  confessional dos séculos XVI–XVII é domínio público; documento denominacional
  vigente é edição autorizada.
- **Não confie em manutenção manual para invariantes que o código pode testar.**
  Foi assim com números do README, obras citadas fora da biblioteca e destinos
  de `verMais`. Se uma regra é mecânica, coloque-a em `npm run validar`.
- **Reciprocidade de navegação é propriedade do sistema, não duplicação de
  dados.** Preserve a curadoria direta em 2–3 relações e gere a volta.
- **Mesmo id de fonte com outra edição pode ser legítimo.** Trate URL diferente
  como aviso para revisão, não como erro automático; o caso de Spurgeon em
  Poimênica usa outra digitalização da mesma obra.

---

## 12. Sobre o tom

O leitor típico é pastor ou seminarista brasileiro, frequentemente sem dinheiro
para a bibliografia e frequentemente sozinho. Escreva para alguém inteligente
que não teve acesso, não para alguém que precisa ser impressionado.

Não poupe o leitor da dificuldade real de uma questão, e não finja neutralidade
que o portal não tem — ele é confessionalmente reformado e diz isso. O que se
exige não é neutralidade, é **imparcialidade**: representar a posição contrária
de modo que seu defensor competente a reconheça.
