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
1. Escolher o alvo pelo desequilíbrio (ver seção 7)
2. Ler a ementa da disciplina em src/dados/ementas.json — o verbete deve
   servir ao programa oficial, não ao que você acha que o tema é
3. Ler os verbetes vizinhos para não repetir
4. Verificar as fontes com WebSearch antes de escrever
5. Escrever src/conteudo/<departamento>/<nome>.ts
6. Registrar em src/conteudo/indice.ts (import + entrada no array)
7. Acrescentar as fontes novas a src/dados/biblioteca.ts
8. Atualizar as contagens no README
9. npm run build
10. Verificar no Chromium headless (ver seção 6)
11. Commit, push com --force-with-lease, PR, esperar CI, merge
```

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

### Verificação no navegador

Confira sempre: zero asteriscos literais, ausência de "não encontrado",
ausência de transbordo horizontal em 1280px **e** 390px, blocos renderizando,
os três links de "Leia também" resolvendo, e nenhum erro de JS.

---

## 7. Estado atual e como escolher o próximo alvo

**47 verbetes, 64 obras na biblioteca.**

| Departamento | disciplinas | verbetes | v/disc |
| --- | --- | --- | --- |
| Cultura Geral | 30 | 5 | 0,17 |
| Teologia Pastoral | 37 | 9 | 0,24 |
| Teologia Exegética | 27 | 7 | 0,26 |
| Teologia Histórica | 10 | 5 | 0,50 |
| Teologia Sistemática | 17 | 21 | 1,24 |

**Regra de escolha:** o próximo verbete vai para o departamento com a menor
razão verbetes/disciplina. Sistemática está muito à frente e não deve receber
verbete novo enquanto os outros não subirem.

Ressalva ao usar a tabela: Cultura Geral inclui Português, Inglês, Espanhol,
Latim e Música, onde um verbete doutrinário não faz sentido. A razão bruta
exagera o vão desse departamento.

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

---

## 10. Sobre o tom

O leitor típico é pastor ou seminarista brasileiro, frequentemente sem
dinheiro para a bibliografia e frequentemente sozinho. Escreva para alguém
inteligente que não teve acesso, não para alguém que precisa ser impressionado.

Não poupe o leitor da dificuldade real de uma questão, e não finja neutralidade
que o portal não tem — ele é confessionalmente reformado e diz isso. O que se
exige não é neutralidade, é **imparcialidade**, que é verificável: representar
a posição contrária de modo que seu defensor a reconheça.
