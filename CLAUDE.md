# Continuidade do projeto

Este arquivo existe para que uma sessão nova consiga retomar o trabalho sem
depender da memória da conversa anterior. Leia-o antes de escrever qualquer
coisa. Ele registra o que o mantenedor decidiu, o que já foi aprendido a
duras penas e o que deliberadamente não foi feito.

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

Estas não são negociáveis e vieram dele, não de mim:

- **Layout minimalista e acadêmico**, branco / azul / amarelo.
- **Conteúdo profundo, acadêmico e pastoral**, em português acessível.
- **Estrutura textual progressiva**: o texto constrói o conceito e só depois o
  declara. Nunca abra um verbete com uma definição.
- **Sempre ligar à fonte original.**
- **Só links que funcionam.** "Audite tudo."
- **Sempre PR e merge** — nada vai direto para `main`.

---

## 3. Como se escreve um verbete

Esta seção é a mais importante do arquivo. O que distingue este portal não é
a informação — é a forma.

### A abertura

Comece por um **problema real que o leitor tem**, não por definição nem por
histórico. Exemplos que funcionaram:

- TE52 abre mandando o leitor olhar o rodapé de Marcos 16 e perguntar por que
  os tradutores não parecem saber onde a Bíblia termina.
- TP01 abre com alguém dizendo ao pastor que vai largar o emprego para servir
  a Deus em tempo integral — e desmonta o pressuposto escondido na frase.
- TE55 abre listando as identificações da besta ao longo de dois séculos,
  todas sinceras, todas erradas.
- CG58 abre com dois argumentos sobre a inspiração e pede ao leitor que decida
  qual presta. O que defende a doutrina é o inválido.

O padrão: encurrale o leitor num problema que ele reconhece, mostre que as
saídas fáceis são ruins, e só então desenvolva.

### O corpo

- Construa antes de nomear. O bloco `definicao` ou `termo` vem **depois** que o
  leitor já entendeu a coisa, como consolidação.
- Quando uma tradição legou algo, diga também **o que ela cobrou em troca**.
  CG09 faz isso com Platão e Aristóteles; TH04 faz com o pietismo.
- Antecipe a objeção honesta e responda a ela no texto, não em nota.
- Prefira o exemplo concreto ao adjetivo. "Um cristão de Esmirna que ia perder
  a loja por não queimar incenso" vale mais que "os cristãos perseguidos".

### O bloco `controversia`

É onde a qualidade do verbete se prova. Regra:

**Cada posição recebe a força real que tem E o custo real que paga —
inclusive a posição que o portal defende.**

Se a posição reformada aparece sem custo e as outras só com defeito, o bloco
falhou. Verifique se um defensor competente de cada lado se reconheceria na
descrição. Exemplos bem resolvidos: TE52 (Textus Receptus tratado com
seriedade), TE55 (futurismo, que é a leitura dominante no Brasil), TP07
(missão integral).

### A `pastoral`

Não é aplicação devocional. É a consequência prática para quem exerce
ministério, e frequentemente contém a coisa mais difícil do verbete — por
exemplo, TP53 diz que às vezes o conflito é o próprio pastor, e CG58 adverte
quem gostou demais do verbete que saber o nome de uma falácia não é ter razão.

### Ligações

`verMais` com três verbetes existentes. **Confirme que os ids existem** — o
componente descarta silenciosamente id inexistente, então erro não aparece.

---

## 4. Disciplina de fontes

Regras duras. Elas são o que separa este portal de um agregador.

1. **Só entra o que o leitor consegue abrir.** Item de empréstimo do
   Archive.org (padrão de identificador com `0000`) não é acesso livre — se
   entrar, marque `acesso: 'cadastro'` e diga na nota.
2. **Nunca agregador de PDF pirata** (pdfcoffee, scribd e afins). Nem por
   conveniência. É injusto com quem publica em português, e esses links morrem.
3. **Prefira hospedeiro que a CI alcança**: Archive.org, Wikisource,
   plato.stanford.edu, monergismo.com, ipb.org.br, ipib.org.br.
4. **Quando não houver fonte à altura, declare a lacuna** no próprio verbete e
   no PR. É melhor não ter verbete do que ter um mal fundamentado.
5. **Toda obra citada num verbete deve estar na biblioteca** (`src/dados/biblioteca.ts`).
   Já aconteceu de 24 obras citadas não aparecerem lá.
6. **Em obra traduzida, a data que importa é a morte do tradutor, não a do
   autor.** A tradução é obra derivada com direito próprio. Weber morreu em
   1920 e o original alemão é livre há décadas, mas a tradução inglesa corrente
   é de Parsons, morto em 1979 — no Brasil ela só cai em domínio público em
   2050, ainda que esteja aberta no Archive.org. **Estar acessível não é o
   mesmo que o leitor poder usar licitamente**, e o portal se dirige a leitores
   brasileiros. Quando a tradução não servir, procure verbete de enciclopédia
   livre, outra tradução antiga, ou o original.

   Auditoria feita em 16/08/2026 nas traduções já listadas: Beveridge (m. 1868)
   e Giger (m. 1865) livres; Charles (m. 1931) livre no Brasil desde 2002;
   Turretini em inglês corretamente marcado como empréstimo; Bavinck em inglês
   como edição autorizada, sem alegar domínio público. Nenhuma irregularidade.

### Domínios restritos

`src/dados/dominios-restritos.json` lista domínios que a CI não consegue
verificar por motivo alheio ao conteúdo. Hoje só `ccel.org`, que recusa IPs de
nuvem — bloqueio permanente, sem alternativa conhecida.

**Este mecanismo é para impossibilidade, não para conveniência.** Quando o
certificado do site da Executiva da IPB venceu, a entrada foi criada com
instrução de removê-la assim que houvesse solução — e foi removida horas
depois, ao descobrir que a IPB publica os mesmos documentos em `ipb.org.br`.
Se você adicionar um domínio aqui, escreva no `motivo` se é permanente ou
temporário, e o que fazer para resolver.

---

## 5. O ciclo de trabalho

```
0. git fetch origin && git checkout -B <ramo> origin/main — ver nota abaixo
1. npm run estado  — escolher o alvo pelo desequilíbrio (ver seção 7)
2. Ler a ementa da disciplina em src/dados/ementas.json — o verbete deve
   servir ao programa oficial, não ao que você acha que o tema é
3. Ler os verbetes vizinhos para não repetir
4. Verificar as fontes com WebSearch antes de escrever
5. Escrever src/conteudo/<departamento>/<nome>.ts
6. Registrar em src/conteudo/indice.ts (import + entrada no array)
7. Acrescentar as fontes novas a src/dados/biblioteca.ts
8. Atualizar as contagens no README
9. npm run build
10. npm run conferir — bate os números do README com o repositório
11. Verificar no Chromium headless (ver seção 6)
12. Commit, push com --force-with-lease, PR, esperar CI, merge
```

O passo 0 não é zelo: sem ele o ciclo seguinte **falha no merge**. Como o
merge é por squash, o commit anterior do ramo e o commit correspondente em
`main` têm o mesmo conteúdo e identidades diferentes; o PR novo carrega o
antigo junto e o GitHub acusa conflito nos arquivos que todo ciclo toca —
`README.md`, `indice.ts`, `biblioteca.ts`. Se isso já aconteceu, o remédio é
refazer o ramo a partir de `origin/main` e aplicar o commit por cima
(`git cherry-pick`), conferindo antes de mergear que a árvore continua a
mesma que a auditoria aprovou: `git rev-parse <sha-auditado>^{tree}` e
`git rev-parse <sha-novo>^{tree}` devem coincidir.

O passo 10 também roda na CI, de modo que esquecer o passo 8 quebra o build em
vez de publicar número errado. É intencional: a contagem de verbetes já
divergiu duas vezes por edição manual.

### Validações que valem rodar sempre

```bash
# códigos de disciplina inválidos somem sem aviso na página
python3 -c "
import json,re
validos={x['codigo'] for x in json.load(open('src/dados/ementas.json'))}
s=open('src/dados/biblioteca.ts').read()
maus={c for m in re.finditer(r'disciplinas: \[([^\]]*)\]', s, re.S)
      for c in re.findall(r\"'([^']+)'\", m.group(1)) if c not in validos}
print(sorted(maus) or 'nenhum inválido')"
```

---

## 6. Particularidades do ambiente

Armadilhas que já custaram tempo:

- **A auditoria local não funciona.** O proxy da caixa bloqueia toda saída, e
  `npm run auditar` retorna 403 em tudo. **A CI é o único teste real de link.**
  Não conclua que um link está morto a partir daqui.
- **`pkill` num comando composto mata o próprio shell** (exit 144). Rode
  separado.
- **Playwright só roda de `/home/user/cosmosacademy`**, onde foi instalado.
  Chromium em `/opt/pw-browsers/chromium`.
- **A rota do verbete é `/disciplina/:codigo/:id`**, não `/verbete/:id`.
- **Depois de um merge por squash**, o `--force-with-lease` simples falha
  porque o topo do ramo não é ancestral de `main`. Confirme que o conteúdo já
  entrou (`git diff --stat <sha> origin/main`) e use a forma explícita:
  `--force-with-lease=refs/heads/<ramo>:<sha>`.
- **Ênfase não aninha.** O processador casa `\*\*([^*]+)\*\*`, e `[^*]` não
  aceita asterisco no interior: escrever `**forte com *itálico* dentro**` faz
  o bloco inteiro vazar com os asteriscos na tela. Ponha uma ênfase ou a
  outra. A varredura que encontra o caso:
  `grep -rnoP '\*\*[^*]*\*[^*]*\*\*' src/conteudo/`
- **O campo `nota` das fontes é texto puro.** Ele é impresso direto em
  `Verbete.tsx`, `Biblioteca.tsx` e `Disciplina.tsx`, sem passar pelo
  processador de marcação — `*itálico*` aparece com os asteriscos na tela. As
  demais notas do repositório seguem todas texto puro; escreva sem marcação.
- **O gatilho `pull_request` da auditoria já deixou de disparar uma vez**, sem
  causa identificada, e voltou a funcionar nos PRs seguintes sem intervenção.
  Não mexa no workflow por causa disso: ele aceita `workflow_dispatch`, então
  dispare a auditoria à mão sobre o ramo e siga. Só investigue se repetir.
- **`403` é resposta, não queda — e não se generaliza por host.** O IBGE
  recusou o runner em `agenciadenoticias.ibge.gov.br` e em
  `censo2022.ibge.gov.br`, e concluir dali um bloqueio do domínio inteiro
  teria sido errado: `biblioteca.ibge.gov.br` respondeu 200. Antes de cogitar
  `dominios-restritos.json`, tente outro host da mesma instituição — e prefira
  o repositório de publicações, que costuma não ter a proteção contra robô
  que as páginas de portal têm, e ainda dá citação melhor.
- **A auditoria repete em 5xx e 429 e não repete em 404.** O Archive.org
  devolve 502 em rajada quando várias requisições chegam juntas, e isso já
  reprovou uma auditoria inteira. Se um lote de URLs do mesmo domínio falhar
  no mesmo instante enquanto outras do mesmo domínio passam, suspeite de
  indisponibilidade momentânea antes de mexer nas fontes.

### Verificação no navegador

Confira sempre: zero asteriscos literais, ausência de "não encontrado",
ausência de transbordo horizontal em 1280px **e** 390px, blocos renderizando,
os três links de "Leia também" resolvendo, e nenhum erro de JS.

---

## 7. Estado atual e como escolher o próximo alvo

**Não confie em número escrito aqui.** Rode:

```bash
npm run estado
```

Ele calcula a cobertura por departamento a partir do próprio código, imprime
as contagens e os idiomas da biblioteca, e diz qual departamento está com a
menor razão. Existe porque a tabela que ocupava este lugar divergiu do
repositório em menos de um dia — e documento de continuidade que envelhece
errado orienta pior do que documento nenhum.

O README não tem essa saída: é vitrine, e precisa mostrar os números a quem
não vai rodar script nenhum. Por isso `npm run conferir` roda o mesmo cálculo
e confere as dez linhas numéricas do README contra o repositório, falhando a
CI quando divergem. Escreva o número no README à vontade — só não confie em
tê-lo escrito certo.

Não há instantâneo numérico aqui de propósito. Já houve dois, e os dois
envelheceram no mesmo dia em que foram escritos — o segundo ficou quatro
verbetes defasado em poucas horas. O que se pode dizer sem prazo de validade:
**Sistemática está muito à frente e não deve receber verbete novo**; os outros
quatro departamentos se aproximaram e a ordem entre eles muda a cada ciclo, o
que é exatamente por que se roda o comando antes de escolher.

**Regra de escolha:** o próximo verbete vai para o departamento com a menor
razão verbetes/disciplina. Sistemática está muito à frente e não deve receber
verbete novo enquanto os outros não subirem.

A razão é calculada sobre as disciplinas **em que cabe verbete**, não sobre
todas: o script exclui aquisição de língua e estágio supervisionado, porque
ninguém aprende hebraico nem cumpre estágio lendo um verbete. Isso não é
detalhe. Quando a conta era feita sobre o total, Cultura Geral e Exegética
pareciam mais carentes do que estão — juntas concentram dezesseis disciplinas
de língua —, e o alvo indicado chegou a ser o departamento errado.

A lista de exclusões está no topo de `scripts/estado.mjs` e é para ser
discutida. Se você achar que uma delas comporta verbete, tire de lá: um
verbete de orientação sobre por que estudar as línguas originais, por exemplo,
serviria a TE04 e TE08 sem ensinar língua nenhuma.

Alvos mapeados: CG07/CG62 (Psicologia), CG11 (Antropologia da Religião),
TP20 (Plantação e Revitalização), TP56 (Denominações e Seitas), TP05
(Liderança), TP04 (Aconselhamento 2), TE16 (Metodologia da Pesquisa
Exegética), TE03 (Geografia e Arqueologia), TH07/TH08 (História do Pensamento
Cristão).

---

## 8. Lacunas declaradas

Não são esquecimento. Foram recusas conscientes, e devem continuar recusadas
até que a condição mude:

- **TH06 · História da IPB** — não há fonte livre à altura, só material
  secundário disperso de sites de igreja.
- **Cânones de Dort em português** — não localizado em texto integral num
  endereço estável. Só esboços, blogs e agregadores.
- **Eduardo Carlos Pereira, *O Problema Religioso da América Latina*** (1920,
  domínio público, fundador da IPI) — só aparece em agregador pirata.
- **Roland Allen, *Missionary Methods*** (1912) e **Vos, *The Pauline
  Eschatology*** — existem no Archive.org apenas como empréstimo.
- **Freud sobre religião** (*O Futuro de uma Ilusão*, *Totem e Tabu*) — o
  original alemão é domínio público, mas nenhuma tradução de referência
  localizada está livre no Brasil: as portuguesas estão em catálogo e as
  inglesas correntes têm tradutores mortos há menos de setenta anos. CG62
  aplica a regra da casa — **ensina a tese da projeção no próprio verbete**,
  com a força que ela tem, e responde a ela pelo *Varieties* de James, que já
  é livre e formulou a objeção antes de Freud escrever sobre religião.

Ainda por procurar: Imprensa Evangélica (jornal fundado por Simonton em 1864),
documentos do Brasil holandês, traduções antigas já em domínio público.

---

## 9. Lições que custaram caro

**Sobre buscar fontes em português.** Declarei que o Catecismo Maior só
existia em sites de igrejas locais. Estava no Monergismo — hospedeiro que o
portal já citava. Refeita a busca com atenção, apareceram também Heidelberg,
Confissão Belga e Segunda Helvética, e o português saltou de 8 para 12 obras.
**Desconfie de conclusão sua do tipo "não existe em português"; refaça a busca
nos hospedeiros já conhecidos antes de declarar lacuna.**

**Sobre ênfase no texto.** O renderizador trata `**forte**` e `*itálico*`, e
só isso. Sublinhado (`_x_`) ficou **deliberadamente** de fora: as URLs de
Wikisource e Archive.org usam sublinhado no lugar de espaço, e interpretá-lo
quebraria os links das fontes. Não "conserte" isso.

**Sobre a ementa.** Escrevi TE52 inteiro pensando só no Novo Testamento e a
ementa cobria também o Antigo, com a diferença entre os dois como unidade
própria. Leia a ementa antes de escrever, não depois.

**Sobre consistência de dados.** Introduzi um selo divergente na biblioteca —
Confissão de Westminster como domínio público e Breve Catecismo, mesma
assembleia de 1647, como edição autorizada. A regra agora: símbolo
confessional dos séculos XVI–XVII é `domínio público`; documento
denominacional vigente, como o Manual Presbiteriano, é `edição autorizada`.

**Sobre defeitos que ninguém pediu para corrigir.** Doze verbetes publicados
exibiam asteriscos literais ao leitor porque o renderizador não processava a
marcação. Foi encontrado ao verificar um verbete novo no navegador. Verifique
de verdade, no navegador, e olhe a página inteira.

**Sobre CI vermelha que não é sua.** O Archive.org hospeda mais de cem fontes
do portal. Quando ele cai, a auditoria reprova o PR com dezenas de falhas que
nada têm a ver com o diff. Antes de mexer em fonte alguma, **olhe o padrão do
erro**: falha de conexão em todas as URLs de um domínio — inclusive na raiz — é
acervo fora do ar; link morto responde 404 enquanto os vizinhos respondem 200.
O auditor hoje separa os dois casos sozinho e não reprova pelo primeiro. Não
ponha o Archive.org em `dominios-restritos.json` para contornar queda passageira:
isso desligaria a verificação de mais de cem links de vez.

**Sobre diagnosticar a CI.** Não use isoladamente o campo `status` da API, a
`conclusion` do check run nem o 404 de `get_job_logs` para decidir se um job
terminou. Durante o incidente de 17/08/2026, esses sinais permaneceram
enganosos depois de uma execução já ter acabado e isso levou ao cancelamento
de uma execução saudável. Quando houver dúvida, a evidência confiável é o
timestamp dentro do próprio log, e não o estado externo reportado pela API.

**Sobre distinguir link morto de sobrecarga.** Uma execução isolada não basta.
A regra que sobreviveu ao incidente é temporal: **404 consistente na mesma URL,
em duas ou mais execuções, indica item removido e pede substituição**. Se a
mesma URL alterna entre 404, 502, `ECONNRESET` e timeout, o sinal é de
sobrecarga do acervo e a ação é esperar. Se as falhas migram de uma URL para
outra a cada execução, o padrão é congestionamento e a ação também é esperar.
Falha de conexão em todo o domínio, inclusive na raiz, é acervo fora do ar —
o auditor já trata esse caso sem reprovar. O caso de Ryle é o teste de sanidade:
a mesma URL devolveu 404, depois 502 e depois `ECONNRESET`; aplicar
mecanicamente "404 = item removido" teria descartado uma fonte viva.

**Sobre a concorrência do auditor.** Na pior execução do incidente, dezenove
falhas ocorreram todas em nível de conexão contra o mesmo host. Isso é
compatível com limitação de taxa e torna plausível testar `CONCORRENCIA = 2`
ou `3` no lugar de `6`. **É hipótese, não correção.** Não altere a concorrência
só porque a explicação parece boa; primeiro reproduza o problema num ambiente
em que seja possível comparar as duas configurações sem afrouxar a garantia.

**Sobre número escrito à mão.** Informação que muda não deve ser escrita à mão
em documento nenhum: ou está no código que a calcula, ou não deveria estar
escrita. A contagem de verbetes divergiu duas vezes — a segunda em poucas
horas. No CLAUDE.md a saída foi apagar o instantâneo; no README, que precisa
mostrar os números, foi `npm run conferir` na CI. **Onde o número tiver de
ficar escrito, ponha uma verificação junto dele** — e verifique que ela
realmente falha quando o número está errado, senão é enfeite.

---

## 10. Sobre o tom

O leitor típico é pastor ou seminarista brasileiro, frequentemente sem
dinheiro para a bibliografia e frequentemente sozinho. Escreva para alguém
inteligente que não teve acesso, não para alguém que precisa ser impressionado.

Não poupe o leitor da dificuldade real de uma questão, e não finja neutralidade
que o portal não tem — ele é confessionalmente reformado e diz isso. O que se
exige não é neutralidade, é **imparcialidade**, que é verificável: representar
a posição contrária de modo que seu defensor a reconheça.