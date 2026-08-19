import type { Verbete } from '../../tipos';

export const etica: Verbete = {
  id: 'ts10-etica',
  disciplina: 'TS10',
  unidade: 1,
  titulo: 'Ética Cristã',
  subtitulo: 'Por que a pergunta "é pecado?" quase sempre está mal formulada',
  objetivo:
    'Ao final, você saberá distinguir moral de ética, reconhecer os seis sistemas éticos que disputam o campo e por que quatro deles falham, entender os três usos da lei e o que o prefácio ao Decálogo faz com o legalismo, e saber exatamente onde a tradição reformada se divide diante de deveres em conflito.',
  atualizadoEm: '2026-08-15',
  verMais: ['ts04-santificacao', 'ts12-cosmovisao', 'ts09-principio-regulador'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um irmão procura o pastor com uma pergunta prática: pode aceitar o emprego? Pode se divorciar? Deve denunciar o colega? E a pergunta vem quase sempre na mesma forma: "isso é pecado?". A forma parece humilde, mas esconde um problema — ela pede uma sentença, sim ou não, sobre um ato isolado, como se a vida moral fosse uma lista de itens permitidos e proibidos que bastaria consultar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Duas saídas costumam ser oferecidas, e as duas são ruins. A primeira é o casuísmo: multiplicar regras até cobrir cada situação concebível, o que produz manuais infinitos e consciências escrupulosas, incapazes de agir sem consultar alguém. A segunda é a evasão: "ore e siga seu coração", que soa espiritual e na prática entrega a decisão ao apetite do momento, batizando-o de direção divina.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ética cristã existe porque nenhuma das duas serve. Ela não é uma lista maior nem uma dispensa de listas: é a disciplina que pergunta o que torna uma ação boa, e por quê — e a resposta que ela dá tem mais de uma parte.',
    },

    { tipo: 'secao', titulo: 'Moral e ética não são a mesma coisa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção parece pedante e resolve confusões reais. "Moral" designa os costumes efetivamente praticados por um povo — o que se faz e se espera que se faça. É descritivo: há uma moral vitoriana, uma moral corporativa, uma moral de determinada igreja. "Ética" é a reflexão normativa sobre esses costumes: pergunta não o que se faz, mas o que se deve fazer, e com que fundamento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência prática é imediata. Quando alguém diz "isso é imoral", pode estar apenas relatando que a prática contraria os costumes do seu grupo — o que não estabelece nada. E quando um costume cristão é defendido só porque "sempre foi assim entre nós", a defesa é moral e não ética: descreve um hábito e não oferece razão. A ética cristã exige que a razão seja dada, e que ela venha da Escritura.',
    },
    {
      tipo: 'termo',
      termo: 'Ética descritiva, normativa e metaética',
      texto:
        'A descritiva registra o que os grupos de fato consideram certo — é trabalho de antropologia. A normativa argumenta sobre o que é certo. A metaética pergunta o que as próprias palavras "certo" e "bom" significam e se podem ser verdadeiras. A ética cristã opera nas duas últimas, e sua metaética é teísta: o bem não é uma convenção nem uma propriedade autônoma, mas se define pelo caráter de Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse último ponto merece cuidado, porque aqui mora um dilema clássico. Se algo é bom porque Deus ordena, o bem parece arbitrário — Deus poderia ter ordenado a crueldade. Se Deus ordena porque é bom, o bem parece anterior a Deus, e há um padrão acima dele. A resposta reformada recusa os dois chifres: Deus não ordena arbitrariamente nem obedece a um padrão externo, porque o padrão é **o seu próprio caráter**. A lei não é um decreto avulso da vontade divina; é a expressão da natureza de Deus em forma de mandamento. Por isso o Decálogo não poderia ter saído diferente sem que Deus fosse outro.',
    },

    { tipo: 'secao', titulo: 'Os seis sistemas que disputam o campo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A discussão ética não começa do zero: há posições já formuladas, e vale conhecê-las porque quase toda opinião espontânea sobre moral é uma delas mal-arrumada. Elas se distinguem por duas perguntas — existem normas morais absolutas? e, se existem, o que fazer quando duas parecem colidir?',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Antinomismo — não há normas morais objetivas; cada um decide. Falha porque torna impossível qualquer censura moral, inclusive a que o próprio antinomista faz ao hipócrita e ao opressor. Quem condena alguma coisa já abandonou a posição.',
        'Generalismo — há normas, mas nenhuma absoluta; todas cedem diante de consequências suficientemente graves. Falha no critério: sem norma absoluta, quem decide o que é "suficientemente grave" é o interessado, e a exceção se torna a regra sempre que convém.',
        'Situacionismo — há exatamente um absoluto, o amor; tudo mais é negociável em função dele. É a posição de Joseph Fletcher, e sua fraqueza é o esvaziamento: amor sem conteúdo prescrito vira o que o agente já queria fazer. A Escritura faz o movimento inverso e define o amor pelos mandamentos: "se me amais, guardareis os meus mandamentos" (Jo 14.15); "o amor é o cumprimento da lei" (Rm 13.10).',
        'Absolutismo não conflitante — há muitos absolutos e eles nunca colidem de verdade; todo conflito aparente se dissolve com análise mais fina do caso ou do dever. Posição de forte tradição reformada, sustentada por John Murray.',
        'Absolutismo conflitante (ou ideal) — os absolutos às vezes colidem de fato; nesses casos não há saída limpa: escolhe-se o mal menor, e ainda assim se peca e se pede perdão.',
        'Absolutismo graduado (ou hierárquico) — os absolutos colidem, e há entre eles uma hierarquia estabelecida por Deus; obedecer ao dever superior isenta a culpa por não cumprir o inferior. É a posição de Norman Geisler, adotada em boa parte da literatura evangélica.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os três primeiros sistemas são rejeitados pela tradição reformada, e não por severidade: eles não conseguem explicar por que a Escritura repreende quem já não quer ser repreendido. Os três últimos são todos absolutistas — divergem apenas sobre o que fazer quando os deveres colidem, e essa divergência é interna à ortodoxia.',
    },

    { tipo: 'secao', titulo: 'O caso que separa as três posições', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O teste clássico não é hipotético. As parteiras hebreias recebem ordem de matar os meninos e desobedecem; interrogadas por Faraó, mentem. E o texto registra que "Deus fez bem às parteiras" e "estabeleceu-lhes casas" (Êx 1.15-21). Raabe esconde os espias, mente aos mensageiros do rei e aparece em Hebreus 11 entre os heróis da fé. Na história recente, o caso de quem escondeu judeus e mentiu à Gestapo põe a mesma questão sem nenhuma distância confortável.',
    },
    {
      tipo: 'controversia',
      titulo: 'O que fazer quando dois mandamentos colidem',
      posicoes: [
        {
          escola: 'Absolutismo não conflitante (Murray)',
          sintese:
            'O conflito é aparente. O texto diz que Deus abençoou as parteiras "porque temeram a Deus" (Êx 1.21) — a bênção recai sobre a recusa de matar, não sobre a mentira. Além disso, o nono mandamento proíbe o falso testemunho contra o próximo, não toda ocultação de informação a quem não tem direito a ela: quem persegue não tem direito à verdade que usaria para matar. A força da posição é preservar a lei sem exceções; a dificuldade é que a distinção entre "não dizer" e "dizer o falso" fica tensa nos casos em que houve afirmação positiva.',
        },
        {
          escola: 'Absolutismo conflitante',
          sintese:
            'Num mundo caído, deveres realmente colidem, e nem toda situação tem saída sem mancha. Deve-se escolher o mal menor — proteger a vida — e, ainda assim, confessar a mentira como pecado. A força é a honestidade sobre a tragédia moral; a dificuldade é conceber que Deus obrigue alguém a pecar necessariamente, o que parece atritar com 1Coríntios 10.13.',
        },
        {
          escola: 'Absolutismo graduado (Geisler)',
          sintese:
            'Os mandamentos têm peso desigual, e a própria Escritura os ordena: há "o principal na lei" e mandamentos "maiores" (Mt 23.23; Jo 19.11). Salvar a vida pesa mais que dizer a verdade a um assassino, e cumprir o dever superior não deixa culpa. A força é resolver o caso sem chamar de pecado o que a Escritura elogia; a dificuldade é que a hierarquia precisa ser estabelecida com rigor, sob pena de virar régua flexível para qualquer conveniência.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Note o que está e o que não está em disputa. Nenhuma das três posições admite que o fim justifique qualquer meio, nenhuma dissolve a lei em intenção, e todas tratam a mentira como coisa séria. O desacordo é sobre a estrutura da obrigação, não sobre a autoridade da Escritura — e reconhecer isso evita tanto acusar o irmão de relativismo quanto acusá-lo de farisaísmo.',
    },

    { tipo: 'secao', titulo: 'Lei e graça: o prefácio muda tudo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A objeção mais comum à ética cristã é que ela seria legalismo disfarçado: trocar o evangelho por uma lista de deveres. A resposta não está em suavizar a lei, e sim em ler o Decálogo inteiro — inclusive a frase que vem antes do primeiro mandamento e que quase todo mundo pula.',
    },
    {
      tipo: 'passagem',
      referencia: 'Êxodo 20.2',
      texto:
        'Eu sou o SENHOR, teu Deus, que te tirei da terra do Egito, da casa da servidão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A lei não é dada a um povo para que se torne povo de Deus; é dada a um povo **já resgatado**, e o resgate é a razão da obediência. A ordem é redenção primeiro, mandamento depois — a mesma ordem do Novo Testamento, em que as epístolas expõem por capítulos o que Cristo fez antes de dizer "portanto" e passar às exortações. Onde essa ordem se inverte, nasce o legalismo; onde o "portanto" é suprimido, nasce o antinomismo. A ética cristã vive de manter as duas metades na sequência certa.',
    },
    {
      tipo: 'termo',
      termo: 'Os três usos da lei (usus legis)',
      texto:
        'Primeiro, o uso civil (usus politicus): a lei refreia o mal na sociedade pela ameaça de punição, mesmo em quem não crê. Segundo, o uso pedagógico (usus elenchticus): a lei revela o pecado, cala a autojustificação e conduz a Cristo — "pela lei vem o pleno conhecimento do pecado" (Rm 3.20). Terceiro, o uso didático ou normativo (usus normativus): a lei orienta o crente já justificado sobre como viver de modo agradável a Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O terceiro uso é a marca distintiva da tradição reformada. O luteranismo enfatiza o segundo e trata o terceiro com reserva, temendo o retorno da lei como acusadora. Calvino inverte a ênfase e chama o terceiro de "o uso principal, e o que mais de perto diz respeito ao fim próprio da lei" — porque, para quem já está em Cristo, a lei deixou de acusar e passou a instruir.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas, II.7.12',
      fonteId: 'calvino-institutas',
      texto:
        'O terceiro uso da lei, que é o principal e que se relaciona mais de perto com o fim próprio dela, tem lugar entre os fiéis, em cujos corações o Espírito de Deus já vive e reina. [...] Nela eles têm um excelente instrumento para compreender melhor, dia após dia, qual é a vontade do Senhor.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar a distinção que impede o mal-entendido seguinte. A Confissão de Westminster divide a lei mosaica em moral, cerimonial e judicial: a cerimonial foi ab-rogada porque cumprida em Cristo; a judicial expirou com o Estado de Israel, "não obrigando agora a nenhum outro, além do que sua equidade geral possa requerer"; a moral, resumida no Decálogo, permanece obrigando a todos. Não é que o cristão escolha quais leis lhe agradam — é que a própria Escritura trata as três de modos diferentes.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A cláusula da "equidade geral" é onde a tradição segue discutindo. Os teonomistas leem nela a permanência substancial das penas civis mosaicas; a posição confessional majoritária lê a permanência dos princípios de justiça que aquelas penas encarnavam, sem os estatutos; e a teologia dos dois reinos acentua a distinção entre a igreja e a ordem civil. É desacordo real, sobre como um texto confessional se aplica — e não sobre se a lei de Deus obriga.',
    },

    { tipo: 'secao', titulo: 'Por que "é pecado?" é pergunta incompleta', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Volta-se agora à pergunta do início. Ela é incompleta porque avalia só o ato, e um ato não é bom apenas por estar na coluna dos permitidos. A tradição reformada sempre exigiu três condições simultâneas, e a Confissão as enuncia com precisão desconfortável ao tratar das obras dos não regenerados: são coisas que Deus ordena e úteis a si e aos outros, e ainda assim pecaminosas — porque não procedem de um coração purificado pela fé, não são feitas do modo correto, nem visam ao fim devido, que é a glória de Deus.',
    },
    {
      tipo: 'lista',
      itens: [
        'A norma — o que a Escritura ordena ou proíbe. Sem ela, a sinceridade vira critério e qualquer coisa se justifica.',
        'A situação — os fatos do caso, as consequências previsíveis, as obrigações concorrentes. Sem ela, aplica-se a regra certa ao caso errado.',
        'O agente — o motivo, o afeto, o fim visado. Sem ele, a obediência externa convive com um coração que não quis nada daquilo, e é justamente essa a definição de hipocrisia no Sermão do Monte.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'As três precisam ser satisfeitas juntas. Dar esmola é ordenado; dar esmola para ser visto é condenado no mesmo Sermão. Dizer a verdade é ordenado; dizê-la para humilhar é crueldade. E a boa intenção não corrige o ato errado: Uzá quis proteger a arca. Por isso a pergunta pastoral madura não é "posso?", mas "isso é bom, feito do modo devido, e por amor a quem?".',
    },

    {
      tipo: 'definicao',
      termo: 'Ética cristã',
      texto:
        'É a disciplina teológica que investiga como a criatura resgatada deve viver diante de Deus, tendo por norma a Escritura, por fundamento o caráter de Deus expresso na lei moral, e por motor a gratidão pela redenção já consumada em Cristo. Ela avalia a ação por três aspectos inseparáveis — a norma que a rege, a situação em que ocorre e o coração de quem a pratica — e reconhece que a lei, para o crente, deixou de ser instrumento de acusação e tornou-se regra de vida.',
    },

    {
      tipo: 'pastoral',
      texto:
        'A consequência pastoral desta doutrina é a paciência. Quem trata a ética como lista de permissões alterna entre a dureza com o irmão que errou e a frouxidão consigo mesmo, porque a lista não alcança o coração de nenhum dos dois. Quem entende que o padrão é o caráter de Deus descobre duas coisas ao mesmo tempo: que a exigência é maior do que imaginava — alcança o motivo, e não só o gesto — e que ela é feita a alguém que já foi tirado da casa da servidão antes de receber o primeiro mandamento. É esse duplo reconhecimento que produz aconselhamento sério sem produzir escrúpulo. Ao irmão que pergunta "é pecado?", a resposta mais útil raramente é sim ou não: é ajudá-lo a ver que Deus quer nele algo maior do que um veredito sobre aquele ato isolado, e que a força para isso não vem da sua determinação, mas do Espírito que escreve a lei no coração de carne.',
    },
  ],

  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XVI (Boas Obras) e XIX (A Lei de Deus)',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. XIX distingue lei moral, cerimonial e judicial e traz a cláusula da "equidade geral"; o XVI.7 é o texto que exige norma, modo e fim retos para que uma obra seja boa.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro II, caps. 7 e 8',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'II.7 expõe os três usos da lei, com o terceiro uso em II.7.12; II.8 é a exposição do Decálogo mandamento por mandamento. Domínio público.',
    },
    {
      id: 'hodge-st3-pdf',
      autor: 'Charles Hodge',
      ano: '1873',
      titulo: 'Systematic Theology, vol. III — Parte III: Ética e a Lei',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/h/hodge/theology3/cache/theology3.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O volume III dedica centenas de páginas ao Decálogo e às questões éticas mandamento a mandamento — é o tratado de ética reformada mais extenso disponível em domínio público.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a lei, a consciência e a vida cristã',
      publicacao: 'Digitale Bibliotheek voor de Nederlandse Letteren (DBNL)',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Em holandês e em domínio público. Bavinck trata a lei como expressão do caráter de Deus, que é a chave para escapar do dilema de Eutífron exposto acima.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae — locus XI, De Lege Dei',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento escolástico da lei: obrigação, divisão tripartite e o problema dos deveres em conflito, discutido com o rigor que a literatura devocional costuma pular.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Reúne traduções e artigos em português sobre os três usos da lei e a controvérsia teonomista — útil para quem quer acompanhar o debate na própria língua.',
    },
  ],
};
