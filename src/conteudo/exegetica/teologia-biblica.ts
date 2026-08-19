import type { Verbete } from '../../tipos';

export const teologiaBiblica: Verbete = {
  id: 'te14-teologia-biblica',
  disciplina: 'TE14',
  unidade: 3,
  titulo: 'Teologia Bíblica',
  subtitulo: 'Ler a Escritura como uma história só, e não como um depósito de versículos',
  objetivo:
    'Ao final, você saberá distinguir teologia bíblica de teologia sistemática pela distinção de Vos entre processo e produto, entenderá por que a revelação progride sem que a anterior fique errada, reconhecerá as alianças como estrutura do Antigo Testamento, e saberá onde estão os dois abusos simétricos — o moralismo e o cristocentrismo alegorizante.',
  atualizadoEm: '2026-08-15',
  verMais: ['te12-hermeneutica', 'te01-canon-at', 'tp14-homiletica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um pregador abre 1Samuel 17 e anuncia o tema: enfrente os gigantes da sua vida. Davi vira exemplo de coragem, a funda vira metáfora da fé, e Golias vira o problema financeiro do ouvinte. O sermão é aplicável, comovente, e não tem quase nada a ver com o que o texto está fazendo ali.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Do outro lado há o erro inverso, e ele é comum entre gente séria. Trata-se a Bíblia como um arquivo de proposições: para cada doutrina, colhem-se os versículos pertinentes, de Gênesis a Apocalipse, e monta-se o artigo. Nada de falso nisso — a teologia sistemática faz exatamente isso e é indispensável. O problema é quando ela é o **único** modo de ler, porque então some um fato: a revelação foi dada ao longo de séculos, em etapas, e a ordem em que foi dada significa alguma coisa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A teologia bíblica é a disciplina que estuda justamente isso — e a formulação clássica veio de Geerhardus Vos, na aula inaugural de sua cátedra em Princeton, em 1894.',
    },

    { tipo: 'secao', titulo: 'Processo e produto', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'A distinção de Vos',
      texto:
        'A teologia sistemática toma a revelação como **produto acabado** e a organiza logicamente por assuntos: Deus, homem, Cristo, salvação, igreja, últimas coisas. A teologia bíblica toma a revelação como **processo histórico** e a acompanha na ordem em que foi dada, perguntando o que cada etapa acrescentou. Não são rivais nem substitutas: uma pergunta "o que a Escritura ensina sobre X?", a outra pergunta "como Deus foi revelando isso, e por quê nessa ordem?".',
    },
    {
      tipo: 'citacao',
      autor: 'Geerhardus Vos',
      obra: 'The Idea of Biblical Theology, 1894',
      fonteId: 'vos-biblical-theology',
      texto:
        'A teologia bíblica lida com a revelação como um movimento divino, e busca exibi-la em seus estágios sucessivos; a teologia sistemática lida com o produto final e o dispõe em forma lógica.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência prática é grande. Se a revelação tem história, então perguntar "o que os israelitas no Sinai sabiam sobre a ressurreição?" não é irreverência: é a pergunta certa. E responder "menos do que Paulo sabia" não implica que eles cressem errado — implica que a revelação ainda não tinha chegado ali.',
    },

    { tipo: 'secao', titulo: 'Progresso sem correção', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Aqui está o ponto que precisa ser dito com cuidado, porque é onde a disciplina foi historicamente sequestrada. No século XIX, a chamada teologia bíblica de matriz liberal usou a ideia de desenvolvimento para afirmar que Israel **evoluiu** do politeísmo ao monoteísmo, e que os textos antigos estão errados e foram corrigidos pelos posteriores. Nessa leitura, progresso significa correção de erro.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A teologia bíblica reformada afirma o contrário, e a imagem que Vos usa é orgânica: a revelação cresce como uma semente que vira árvore. A semente não estava errada por não ter folhas; ela era a árvore em estágio inicial. **A revelação posterior acrescenta, nunca corrige.** Gênesis 3.15 fala em uma semente da mulher que esmagará a cabeça da serpente — obscuro, verdadeiro e insuficiente. Milênios depois se sabe quem é. O texto de Gênesis nunca precisou ser desmentido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso também explica um fenômeno que confunde muitos leitores: por que o Novo Testamento cita o Antigo de modos que parecem forçados. Quando Mateus aplica a Cristo o "do Egito chamei o meu filho" de Oseias — que fala de Israel —, ele não está torcendo o texto. Está lendo Israel e Cristo como momentos de uma mesma história, em que o segundo recapitula e cumpre o primeiro. É a lógica típica da revelação progressiva, e não um erro de citação.',
    },

    { tipo: 'secao', titulo: 'As alianças como esqueleto', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se a revelação tem etapas, é preciso saber onde estão as junções. A tradição reformada as identifica nas **alianças** — os pactos pelos quais Deus se compromete e estabelece as condições da relação. Não são episódios avulsos: cada uma retoma a anterior e a amplia.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Criação — Deus estabelece a relação com Adão como cabeça de toda a humanidade, com mandamento, sanção e promessa implícita de vida. A tradição a chama de aliança das obras, e é dela que depende a lógica de Romanos 5, em que Cristo é o segundo Adão.',
        'Noé — depois do dilúvio, a aliança é com toda a criatura e garante a estabilidade da ordem natural. É a base do que se chama graça comum: a chuva cai sobre justos e injustos, e a história continua tendo condições de existir.',
        'Abraão — a promessa de descendência, terra e bênção às nações. Paulo a trata como a aliança fundamental, anterior à lei e não anulada por ela (Gl 3.17), e é aí que a justificação pela fé encontra sua raiz veterotestamentária.',
        'Moisés — a aliança no Sinai, que dá forma nacional e legal ao povo prometido a Abraão. Note a ordem, que TS10 já destacou: o resgate do Egito vem antes do mandamento.',
        'Davi — a promessa de um trono perpétuo, que concentra a esperança numa figura real e prepara a categoria de Messias.',
        'Nova aliança — anunciada em Jeremias 31 como lei escrita no coração e pecados não mais lembrados, e inaugurada na ceia com as palavras "este cálice é a nova aliança no meu sangue".',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Lidas em sequência, elas mostram um movimento: de um casal para uma família, de uma família para uma nação, de uma nação para as nações. A promessa a Abraão de que nele seriam benditas todas as famílias da terra só se cumpre no fim dessa linha — e é por isso que a missão da igreja não é um apêndice do Novo Testamento, mas o desfecho de algo prometido em Gênesis 12.',
    },

    { tipo: 'secao', titulo: 'A divisão sobre a continuidade', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Quanta continuidade há entre as alianças, e o que exatamente a igreja herda de Israel? A ementa desta disciplina pede uma análise crítica do dispensacionalismo, e o assunto merece ser exposto pelos argumentos, e não pelas caricaturas.',
    },
    {
      tipo: 'controversia',
      titulo: 'Israel e a Igreja: uma aliança ou duas economias',
      posicoes: [
        {
          escola: 'Teologia da aliança',
          sintese:
            'Há uma só aliança da graça, administrada de modos diversos ao longo da história. A igreja não substitui Israel nem é um plano alternativo: é a continuação do povo de Deus, agora aberta às nações — Paulo fala em ramos enxertados na mesma oliveira (Rm 11) e chama os gentios crentes de descendência de Abraão (Gl 3.29). A dificuldade que precisa enfrentar é o que fazer com as promessas territoriais e com o lugar de Israel étnico em Romanos 11.',
        },
        {
          escola: 'Dispensacionalismo',
          sintese:
            'Deus conduz a história por economias distintas, e mantém propósitos separados para Israel e para a igreja; as promessas feitas a Israel devem cumprir-se literalmente em Israel. Apela para a literalidade das promessas territoriais e para a continuidade do povo judeu. A dificuldade é que o próprio Novo Testamento aplica à igreja títulos veterotestamentários de Israel — "raça eleita, sacerdócio real, nação santa" (1Pe 2.9) — e trata Cristo como a descendência a quem a promessa foi feita.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição presbiteriana é confessionalmente aliancista, e vale registrar por quê em uma frase: é a leitura que sustenta o batismo de crianças, a unidade da lei moral e a continuidade do povo de Deus — de modo que a divergência sobre alianças não é acadêmica, ela reaparece no batistério e no púlpito. Vale registrar também que o dispensacionalismo contemporâneo se moveu bastante desde suas formulações originais, e criticar hoje a versão de cem anos atrás é discutir com quem já não está lá.',
    },

    { tipo: 'secao', titulo: 'Os dois abusos', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Cristo disse aos discípulos de Emaús que, começando por Moisés e por todos os profetas, as Escrituras falavam dele (Lc 24.27). A frase é o mandato da teologia bíblica, e é também a porta por onde entram dois erros opostos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O primeiro é o **moralismo**, do sermão sobre gigantes. Ele trata cada personagem como exemplo a imitar, e o resultado é que a Escritura vira manual de autoaperfeiçoamento — com o efeito colateral de que o ouvinte sai da igreja sabendo o que deve fazer e sem saber o que Deus fez.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O segundo é o **cristocentrismo alegorizante**, que é o erro dos que já perceberam o primeiro. Aqui, cada detalhe do texto vira símbolo de Cristo: o cordão vermelho de Raabe é o sangue, as cinco pedras de Davi são algo, a madeira da arca é a cruz. O texto deixa de ter sentido próprio e vira código a decifrar — e o pregador acaba dizendo, sobre a passagem, coisas que ela não diz.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A saída não é um meio-termo tímido, e sim um critério: pergunte que **função** o texto exerce na história da redenção, e não que símbolo cada elemento esconde. Davi contra Golias, lido assim, não é sobre coragem nem sobre pedras: é sobre o rei ungido que luta e vence em lugar do povo que assiste paralisado — e é essa estrutura, não os detalhes, que aponta para Cristo. O texto mantém seu sentido histórico e ganha seu lugar na história inteira.',
    },

    {
      tipo: 'definicao',
      termo: 'Teologia bíblica',
      texto:
        'É a disciplina que estuda a revelação divina como processo histórico, acompanhando-a nas etapas em que foi dada e perguntando o que cada uma acrescenta, em contraste com a teologia sistemática, que organiza logicamente o produto acabado. Na perspectiva reformada, esse progresso é orgânico e cumulativo — a revelação posterior amplia a anterior sem corrigi-la —, e sua articulação se dá pelas alianças sucessivas que culminam em Cristo.',
    },

    {
      tipo: 'pastoral',
      texto:
        'O ganho pastoral desta disciplina aparece no púlpito e na cadeira do aconselhamento. No púlpito, porque ela devolve ao pregador dois terços da Bíblia: quem só sabe extrair lição moral do Antigo Testamento acaba pregando quase só do Novo, e o povo perde a metade da história de que o evangelho é o desfecho. No aconselhamento, porque muda o que se oferece ao irmão em dificuldade — em vez de um exemplo a imitar, que aumenta a carga de quem já não está conseguindo, oferece-se o lugar dele numa história que Deus está conduzindo e que não depende do seu desempenho para chegar ao fim. É a diferença entre dizer "seja corajoso como Davi" e dizer que existe um Rei que já lutou pelos que assistiam paralisados. A primeira frase exige; a segunda sustenta.',
    },
  ],

  fontes: [
    {
      id: 'vos-biblical-theology',
      autor: 'Geerhardus Vos',
      ano: '1894',
      titulo: 'The Idea of Biblical Theology as a Science and as a Theological Discipline',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/inaugurationofrevge00prin',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A aula inaugural em Princeton que fundou a disciplina em bases reformadas, com a distinção entre processo e produto e a metáfora orgânica do crescimento da revelação. Domínio público, hospedado no Archive.org — verificável pela auditoria automática.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. VII, Da Aliança de Deus com o Homem',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. VII enuncia a aliança das obras e a da graça e afirma que esta é uma só, "diversamente administrada" nos dois Testamentos — a formulação confessional da posição aliancista exposta acima.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro II, caps. 9-11',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'II.10 argumenta a unidade substancial dos dois Testamentos e II.11 expõe suas diferenças de administração — o tratamento clássico da continuidade e da diversidade das alianças. Domínio público.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae — locus XII, De Foedere Gratiae',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento escolástico da aliança da graça e de suas administrações sucessivas, com as distinções que a literatura devocional costuma pular.',
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
      nota: 'Traduções de Vos e de outros autores da tradição, além de material sobre a controvérsia com o dispensacionalismo, para quem prefere ler em português.',
    },
  ],
};
