import type { Verbete } from '../../tipos';

export const inspiracao: Verbete = {
  id: 'ts01-inspiracao',
  disciplina: 'TS01',
  unidade: 5,
  titulo: 'Inspiração, Inerrância e Suficiência',
  subtitulo: 'Em que sentido um livro escrito por homens é Palavra de Deus',
  objetivo:
    'Ao final, você saberá distinguir as principais teorias da inspiração e por que a tradição reformada rejeita todas menos uma, o que a inerrância afirma e o que ela não afirma, e como o testemunho interno do Espírito responde à pergunta que nenhum argumento externo resolve.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-revelacao', 'ts01-prolegomenos', 'te12-hermeneutica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A Bíblia tem autores. Isso não é uma concessão embaraçosa que a fé precise minimizar; é um dado que o próprio texto exibe. Lucas informa que pesquisou (Lc 1.1-4). Paulo dita cartas a situações concretas e às vezes muda de assunto no meio da frase. Os salmos têm temperamentos distintos. Jeremias escreve como Jeremias, e não como Isaías. Há vocabulário, estilo, personalidade e circunstância em cada página.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E, no entanto, a Igreja sempre confessou que esse mesmo livro é a Palavra de Deus — não que a contenha, não que se torne, mas que é. A doutrina da inspiração é a tentativa de dizer com precisão como as duas coisas são verdadeiras ao mesmo tempo.',
    },
    { tipo: 'secao', titulo: 'O que o texto reivindica sobre si mesmo', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: '2 Timóteo 3.16',
      texto:
        'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A palavra traduzida por "inspirada por Deus" é theopneustos, e a tradução tradicional, embora consagrada, atrapalha. "Inspirar" sugere soprar para dentro — como se Deus insuflasse algo em um texto que já existia. O grego diz o contrário: theos (Deus) + pneustos (soprado). Não é ar soprado para dentro da Escritura; é Escritura soprada para fora de Deus. A palavra descreve origem, não aprimoramento.',
    },
    {
      tipo: 'termo',
      termo: 'Theopneustos',
      texto:
        'Literalmente "soprado por Deus". Warfield demonstrou que o termo é passivo e aponta para a fonte: a Escritura é produto do sopro divino, como as criaturas o são no Salmo 33.6. A ênfase não recai sobre o que aconteceu com os escritores, mas sobre o que o escrito é.',
    },
    {
      tipo: 'passagem',
      referencia: '2 Pedro 1.20-21',
      texto:
        'Nenhuma profecia da Escritura provém de particular elucidação; porque nunca jamais qualquer profecia foi dada por vontade humana; entretanto, homens santos falaram da parte de Deus, movidos pelo Espírito Santo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Pedro acrescenta a peça que falta. O verbo traduzido por "movidos" (pheromenoi) é o mesmo que Lucas usa em Atos 27 para o navio levado pelo vento: a embarcação continua sendo uma embarcação, com seu casco e sua tripulação, mas quem determina o rumo é o vento. Os escritores não foram anulados nem substituídos. Foram conduzidos.',
    },
    { tipo: 'secao', titulo: 'As teorias, e por que quatro delas falham', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A história da doutrina produziu um número limitado de respostas ao problema da dupla autoria. Vale percorrê-las, porque cada uma erra de um jeito instrutivo — e porque quase toda objeção contemporânea é a repetição de uma delas.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como Deus e o autor humano se relacionam no ato de escrever',
      posicoes: [
        {
          escola: 'Teoria mecânica (ditado)',
          sintese:
            'Deus ditou palavra por palavra e o escritor funcionou como escriba passivo. Explica bem a autoridade, mas colide frontalmente com o texto: não há como justificar as diferenças de estilo, o vocabulário próprio de cada autor, ou a pesquisa que Lucas declara ter feito. Curiosamente, é a caricatura que os críticos costumam atribuir aos conservadores — e que nenhum reformado confessional sustenta.',
        },
        {
          escola: 'Teoria da intuição',
          sintese:
            'Os escritores eram homens de genialidade religiosa, e a inspiração é o grau elevado de uma capacidade que todo ser humano possui. Preserva a humanidade do texto ao preço de dissolver sua autoridade: se Isaías difere de Shakespeare apenas em intensidade, nada obriga ninguém a obedecer a Isaías.',
        },
        {
          escola: 'Teoria da iluminação',
          sintese:
            'O Espírito elevou a percepção espiritual dos autores, mas não governou o que escreveram. A dificuldade é que isso descreve o que o Espírito faz em todo crente ao ler — e a Escritura distingue claramente as duas coisas: ela é inspirada; nós somos iluminados.',
        },
        {
          escola: 'Teoria dinâmica (dos conceitos)',
          sintese:
            'Deus garantiu os pensamentos e deixou as palavras a cargo dos autores. É a posição mediadora mais popular, e a mais frágil sob exame: pensamento não existe separado de linguagem, e o próprio Novo Testamento argumenta a partir de palavras isoladas — Jesus discute um tempo verbal em Mateus 22.32 e Paulo, um singular contra um plural em Gálatas 3.16.',
        },
        {
          escola: 'Inspiração orgânica, verbal e plenária (posição reformada)',
          sintese:
            'O Espírito Santo governou de tal modo os escritores — sua formação, temperamento, pesquisa, vocabulário e circunstância — que o que produziram livremente é exatamente o que Deus quis dizer. Verbal, porque alcança as palavras; plenária, porque alcança toda a Escritura; orgânica, porque opera através da personalidade do autor e não apesar dela.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O adjetivo decisivo é orgânica, e é ele que desfaz o falso dilema. A pergunta "foi Deus ou foi Paulo que escreveu Romanos?" pressupõe que a ação divina e a ação humana disputam o mesmo espaço, de modo que aumentar uma exija diminuir a outra. É a mesma pressuposição equivocada que assombra os debates sobre providência e livre-arbítrio. A causalidade divina não é uma força a mais dentro do mundo, concorrendo com as outras: ela é a razão de haver mundo. Deus não precisa suspender Paulo para falar por Paulo.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, §8',
      fonteId: 'cfw-ipib',
      texto:
        'O Velho Testamento em hebraico [...] e o Novo Testamento em grego [...] foram inspirados diretamente por Deus e, pelo seu cuidado e providência singulares, conservados puros em todos os séculos.',
    },
    { tipo: 'secao', titulo: 'Inerrância: o que se afirma e o que não se afirma', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se a Escritura procede de Deus e Deus não mente, então a Escritura não erra naquilo que afirma. A inferência é simples. As dificuldades começam quando se esquece a cláusula final — "naquilo que afirma" — e a doutrina passa a ser cobrada por coisas que ela nunca sustentou.',
    },
    {
      tipo: 'lista',
      itens: [
        'A inerrância não exige precisão técnica moderna. "O sol nasceu" é verdadeiro no registro da linguagem fenomenológica, que continuamos usando em boletins meteorológicos sem que ninguém acuse o meteorologista de geocentrismo.',
        'Não exige citação literal. Os autores do Novo Testamento citam o Antigo com a liberdade normal da época, às vezes pela Septuaginta, às vezes parafraseando; afirmam o sentido, não a forma.',
        'Não exige uniformidade de ordenação. Os evangelistas organizam material por tema e não apenas por cronologia — algo que qualquer biógrafo faz sem mentir.',
        'Não exige que toda fala registrada seja verdadeira. A Escritura relata com exatidão os discursos dos amigos de Jó, e depois informa que estavam errados.',
        'Não exige precisão numérica além da pretendida. Números redondos são números redondos em qualquer literatura.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O que a doutrina afirma é isto: naquilo que os autores pretenderam ensinar, segundo o gênero em que escreveram e os padrões de precisão que assumiram, a Escritura não induz ao erro. É por isso que a inerrância é inseparável da hermenêutica. Determinar se um texto errou exige antes determinar o que ele afirmou — e boa parte das supostas contradições se dissolve nessa etapa.',
    },
    {
      tipo: 'termo',
      termo: 'Autógrafos',
      texto:
        'A inerrância é predicada dos manuscritos originais, não das cópias e traduções. A distinção não é uma escapatória: é o reconhecimento honesto de que copistas erram — e a razão de existir a crítica textual, disciplina cuja conclusão consolidada é que nenhuma variante conhecida afeta qualquer doutrina cristã.',
    },
    { tipo: 'secao', titulo: 'A pergunta que o argumento não alcança', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Resta o problema mais duro, e ele é circular por natureza. Por que crer que a Escritura é a Palavra de Deus? Se a resposta for "porque a Igreja o atesta", a Igreja passa a ser a autoridade última e a Escritura, derivada. Se for "porque a Escritura o afirma", argumenta-se em círculo. E se for "porque a arqueologia, o cumprimento profético e a coerência do texto o demonstram", chega-se no máximo a um livro provavelmente confiável — e ninguém entrega a vida a uma probabilidade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Calvino enfrenta o impasse recusando a premissa comum às três respostas: a de que a autoridade suprema poderia ser certificada por algo acima dela. Por definição, não pode — o que a certificasse seria a autoridade suprema. O reconhecimento tem de vir de outra ordem.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas, I.7.4',
      fonteId: 'calvino-institutas',
      texto:
        'A Escritura, de fato, traz consigo evidência tão clara de sua verdade quanto as coisas brancas e pretas trazem de sua cor, e as doces e amargas, de seu sabor.',
    },
    {
      tipo: 'termo',
      termo: 'Testimonium Spiritus Sancti internum',
      texto:
        'O testemunho interno do Espírito Santo: a persuasão soberana pela qual o Espírito, ao mesmo tempo em que abre o entendimento, faz o leitor reconhecer na Escritura a voz de seu Autor. Não é uma revelação nova nem uma emoção; é o restabelecimento da capacidade de reconhecer o que já estava ali — como quem recobra a audição e passa a distinguir uma voz que sempre falava.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso não torna as evidências externas inúteis. A Confissão as enumera com generosidade e as chama de argumentos que podem "abundantemente demonstrar" a origem divina do texto. Mas as classifica com precisão: elas persuadem o intelecto e removem obstáculos; não geram a certeza da fé. Essa vem do Espírito, e é por isso que a apologética prepara o terreno sem jamais substituir a pregação.',
    },
    { tipo: 'secao', titulo: 'A consequência: suficiência', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se a revelação culminou em Cristo e foi depositada por escrito, segue-se que ela está completa quanto ao necessário para a salvação e a vida cristã. É a doutrina da suficiência — e nela se joga a diferença prática mais visível entre a Reforma e suas alternativas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Suficiência não significa que a Escritura ensine tudo o que se pode saber; ela não trata de engenharia nem de medicina. Significa que, para aquilo a que se destina — a glória de Deus, a salvação do homem, a fé e a vida —, nada precisa ser acrescentado a ela: nem tradição paralela com autoridade própria, nem magistério que produza doutrina nova, nem profecia contemporânea que corrija ou complete o texto. Sobre o que a Escritura não decide expressamente, a Confissão reconhece espaço para a prudência cristã e a ordem da Igreja, guiadas pelos princípios gerais da Palavra.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Inspiração',
      texto:
        'É a ação sobrenatural pela qual o Espírito Santo governou de tal modo os autores bíblicos — através de sua formação, temperamento, pesquisa, vocabulário e circunstância histórica, e não à revelia deles — que o escrito por eles livremente produzido é, em suas próprias palavras e em toda a sua extensão, a Palavra de Deus; de sorte que a Escritura, naquilo que afirma segundo o propósito e o gênero de cada autor, não erra, é suficiente para tudo quanto respeita à fé e à vida, e é reconhecida como divina não por certificação externa, mas pelo testemunho interno do Espírito Santo no coração do crente.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Esta doutrina decide o que acontece no púlpito. Se a Escritura é a Palavra de Deus em suas palavras, então a tarefa do pregador é expor o texto — e não usá-lo como trampolim para suas próprias ideias. E decide o que acontece na cadeira do aconselhamento: quem crê na suficiência não precisa esperar uma palavra especial para saber a vontade de Deus na maior parte das situações, porque ela já está escrita e é acessível. Há aqui uma libertação silenciosa. O crente que confia na suficiência da Escritura é poupado da ansiedade permanente de quem vive à espera de um sinal, e ganha em troca algo mais firme do que uma impressão interior: um texto que pode reler, examinar e sobre o qual pode descansar quando os sentimentos oscilarem.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 6-9',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'I.7 é o locus clássico do testemunho interno do Espírito; I.8 enumera as evidências externas e explica por que elas não bastam.',
    },
    {
      id: 'hodge-st1',
      autor: 'Charles Hodge',
      ano: '1872',
      titulo: 'Systematic Theology, vol. I — parte sobre Inspiração',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/hodge/theology1.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Exposição completa e em domínio público das teorias da inspiração e da questão dos autógrafos. Cobre integralmente esta unidade do programa.',
    },
    {
      id: 'bavinck-gd1',
      autor: 'Herman Bavinck',
      ano: '1895',
      titulo: 'Gereformeerde Dogmatiek, Deel 1 — sobre inspiração orgânica',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere01_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'É de Bavinck a formulação mais precisa da inspiração orgânica, que evita tanto o ditado quanto a teoria dinâmica. Original holandês em domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I, §§ 4-8',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 5 distingue com rigor as evidências externas do testemunho interno do Espírito; o § 6 formula a suficiência.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — textos sobre bibliologia e inerrância',
      publicacao: 'monergismo.com',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
    },
  ],
};
