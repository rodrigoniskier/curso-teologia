import type { Verbete } from '../../tipos';

export const historiaFilosofia: Verbete = {
  id: 'cg09-historia-filosofia',
  disciplina: 'CG09',
  unidade: 1,
  titulo: 'História da Filosofia Antiga e Medieval',
  subtitulo: 'De onde vieram as palavras com que a igreja definiu sua fé',
  objetivo:
    'Ao final, você saberá por que o vocabulário dos concílios é grego, distinguirá o que Platão e Aristóteles legaram à teologia e o que cada um cobrou em troca, entenderá o que Agostinho fez com o platonismo e o que Tomás fez com Aristóteles, e saberá avaliar a acusação de que a doutrina cristã foi helenizada.',
  atualizadoEm: '2026-08-15',
  verMais: ['cg08-filosofia', 'th01-igreja-imperial', 'ts03-pessoa-de-cristo'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Abra a definição de Calcedônia. Cristo é uma **pessoa** em duas **naturezas**, sem confusão e sem separação. Abra o símbolo niceno: o Filho é **consubstancial** ao Pai. Abra a Confissão de Westminster: Deus é um só em **substância**, três em **pessoas**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhuma dessas palavras está na Bíblia. Todas vieram da filosofia grega, e sem elas a igreja não teria conseguido dizer o que queria dizer — nem teria conseguido excluir o que precisava excluir. É por isso que a história da filosofia não é matéria de erudição opcional para o teólogo: é a genealogia do seu próprio vocabulário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há ainda um segundo motivo, menos nobre e igualmente prático: quase toda heresia importante dos primeiros séculos entrou pela porta de uma escola filosófica. Quem não conhece as escolas não reconhece as heresias quando elas voltam com roupa nova.',
    },

    { tipo: 'secao', titulo: 'Do mito ao logos', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A filosofia começa na Jônia, no século VI a.C., com uma mudança de pergunta. Diante do raio, o mito respondia "Zeus"; os primeiros filósofos passaram a perguntar de que a realidade é feita e a exigir uma resposta que pudesse ser discutida. Tales disse água, Anaximandro disse o indefinido, Heráclito disse que tudo flui e Parmênides respondeu que o ser não muda.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O conteúdo dessas respostas envelheceu; o gesto, não. O que nasce ali é a exigência de **razões públicas** — a ideia de que uma afirmação sobre o mundo precisa ser sustentada por argumento e pode ser contestada por outro. Toda a teologia posterior, inclusive a reformada com sua insistência em provar cada ponto pela Escritura e por "boa e necessária consequência", opera dentro desse gesto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sócrates desloca a atenção do cosmos para o ser humano e para a pergunta sobre como se deve viver. Seu método é o interrogatório que expõe a ignorância do interlocutor, e sua tese mais discutida é que ninguém erra sabendo — quem conhece o bem o pratica. A tradição cristã aceita a primeira metade e rejeita a segunda, porque conhece um dado que Sócrates não considerava: a vontade corrompida, que vê o bem e escolhe outra coisa. Paulo descreve exatamente isso em Romanos 7.',
    },

    { tipo: 'secao', titulo: 'Platão e Aristóteles: o que legaram e o que cobraram', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'As duas heranças',
      texto:
        'De Platão vem a convicção de que existe uma realidade estável, inteligível e superior ao mundo sensível — as Formas —, e de que o conhecimento verdadeiro é dela. De Aristóteles vem o aparato conceitual para descrever este mundo: substância e acidente, forma e matéria, ato e potência, as quatro causas. Simplificando ao extremo: Platão deu à teologia sua confiança na realidade do invisível; Aristóteles deu-lhe as ferramentas de análise.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada herança veio com uma conta. A platônica é a desvalorização da matéria: se o corpo é prisão e o mundo sensível é sombra, então a encarnação é constrangedora, a ressurreição do corpo é um retrocesso e o casamento é concessão. Não é acidente que o gnosticismo e boa parte do ascetismo extremo tenham raiz nesse solo — e que a igreja tenha precisado insistir, contra eles, que a criação é boa e que o Verbo se fez **carne**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A conta aristotélica é outra: seu Deus é o Motor Imóvel, que move o mundo por atração e não o conhece nem o ama, porque pensar o inferior seria degradar-se. Um deus que não conhece indivíduos não é o Deus que conta os cabelos da cabeça. Quando a teologia medieval adotou a estrutura aristotélica, teve de fazer nela correções profundas para que o resultado ainda fosse cristão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O período helenístico acrescenta três escolas que Paulo encontrou pessoalmente em Atenas (At 17.18). Os **estoicos**, com sua providência racional, seu logos que ordena o cosmos e sua lei natural gravada em todos — vocabulário do qual a teologia se serviu largamente. Os **epicureus**, materialistas, que não negavam os deuses mas os julgavam indiferentes. E os **céticos**, que suspendiam o juízo. A pregação no Areópago é, entre outras coisas, um exercício de tradução para esse público.',
    },

    { tipo: 'secao', titulo: 'Agostinho e o platonismo convertido', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Agostinho conta que foram os livros dos platônicos que o livraram do materialismo e o tornaram capaz de conceber uma realidade espiritual — e que neles não encontrou o Verbo feito carne. É a fórmula da apropriação crítica que ele mesmo teorizou com a imagem do ouro dos egípcios, e que aparece em CG08.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Três contribuições dele têm consequência direta na dogmática. Primeira: **o mal não é substância**, e sim privação de bem — o que dispensa postular um princípio mau eterno, como fazia o maniqueísmo de sua juventude, e preserva a bondade de tudo o que existe. Segunda: **o tempo é criado com o mundo**, de modo que perguntar o que Deus fazia antes de criar é malformado, porque não havia "antes". Terceira: a **virada para dentro** — o caminho para Deus passa pela memória e pela interioridade, e não apenas pela contemplação do cosmos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada é agostiniana de modo consciente e declarado, sobretudo na doutrina do pecado e da graça, e Calvino o cita mais do que a qualquer outro autor depois dos apóstolos. Vale registrar, porém, que ela não o segue em tudo — a leitura agostiniana da eclesiologia e do sacramento foi objeto de disputa na Reforma, com os dois lados reivindicando o mesmo bispo.',
    },

    { tipo: 'secao', titulo: 'A escolástica e a síntese de Tomás', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Idade Média organiza o trabalho intelectual em torno de uma frase de Anselmo: *fides quaerens intellectum*, a fé que busca entender. Não é fé exigindo prova antes de crer, nem crença que dispensa pensamento — é a fé já dada procurando compreender o que crê. Anselmo é também o autor do argumento ontológico, que discute a existência de Deus a partir do próprio conceito, e que segue sendo debatido mil anos depois.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto alto é Tomás de Aquino, no século XIII, quando as obras de Aristóteles reentram no Ocidente pela mediação de comentadores árabes e provocam uma crise: aquele sistema explicava o mundo inteiro sem recorrer à revelação. Havia três saídas — proibir Aristóteles, aceitá-lo integralmente ou reformá-lo. Tomás escolheu a terceira, e sua fórmula ficou: a graça não destrói a natureza, mas a aperfeiçoa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na prática, isso significa dividir o campo: a razão natural alcança certas verdades — que Deus existe, que é uno, algo de seus atributos —, e a revelação acrescenta o que ela não alcançaria, como a Trindade e a encarnação. Daí nascem as cinco vias e a teologia natural como disciplina.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada tem com Tomás uma relação mais complexa do que a polêmica costuma admitir. Rejeita a confiança que ele deposita na razão não regenerada e, sobretudo, o uso aristotélico que Roma fez da substância na doutrina da transubstanciação. Mas a escolástica reformada dos séculos XVI e XVII — Turretin é o exemplo maior — usa com desenvoltura o mesmo aparato conceitual, e a Confissão de Westminster está escrita nesse idioma. Quem denuncia toda escolástica como corrupção precisa explicar de onde vieram as distinções que usa.',
    },

    { tipo: 'secao', titulo: 'A acusação de helenização', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Resta a pergunta que atravessa tudo isto: se a doutrina foi formulada com categorias gregas, ela ainda é a fé dos apóstolos ou virou outra coisa?',
    },
    {
      tipo: 'controversia',
      titulo: 'A dogmática é fé apostólica formulada ou fé helenizada',
      posicoes: [
        {
          escola: 'Tese da helenização',
          sintese:
            'Formulada por Adolf von Harnack no fim do século XIX: o evangelho simples de Jesus teria sido progressivamente convertido em metafísica grega, e o dogma seria "obra do espírito grego sobre o solo do evangelho". A força é apontar um fato inegável — o vocabulário mudou —, e a proposta prática é destilar o núcleo original removendo a casca especulativa. A dificuldade é que o próprio critério para separar núcleo e casca não vem do texto: vem das preferências teológicas de quem separa, e o resultado costuma parecer muito com o liberalismo do separador.',
        },
        {
          escola: 'Tese da formulação',
          sintese:
            'A igreja usou o vocabulário disponível para dizer, contra distorções concretas, o que já cria e adorava. Termos como homoousios foram adotados justamente porque as fórmulas bíblicas estavam sendo aceitas pelos arianos com outro sentido — a palavra grega serviu para proteger o ensino bíblico, não para substituí-lo. A dificuldade é reconhecer honestamente que categorias trazem bagagem, e que houve pontos em que a bagagem pesou mais do que devia.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A posição reformada acompanha a segunda e conserva da primeira uma vigilância útil: nenhuma formulação é intocável por ser antiga, e a norma continua sendo a Escritura. É o que a própria Confissão declara ao afirmar que concílios podem errar e muitos erraram, de modo que suas decisões não devem ser a regra da fé, mas usadas como ajuda. Aceitar Calcedônia não é aceitar a autoridade de Calcedônia: é reconhecer que ali se disse corretamente o que a Escritura ensina.',
    },

    {
      tipo: 'definicao',
      termo: 'A filosofia antiga e medieval, para o teólogo',
      texto:
        'É o campo em que se forjaram as categorias — substância, pessoa, natureza, essência, ato e potência — com que a igreja formulou os dogmas trinitário e cristológico, e em que se originaram boa parte das objeções que ela precisou responder. Conhecê-la não é erudição acessória: é a condição de ler os símbolos de fé com compreensão, de reconhecer heresias antigas em roupagens novas e de distinguir, na própria tradição, o que é ensino bíblico do que é apenas o idioma de uma época.',
    },

    {
      tipo: 'pastoral',
      texto:
        'A utilidade prática aparece no aconselhamento e na conversa de calçada, e não em debate acadêmico. As ideias antigas não morreram: voltam sem nome e sem crachá. Quando um irmão trata o corpo como obstáculo à espiritualidade, é platonismo. Quando alguém supõe que basta conhecer o certo para fazê-lo, e conclui que quem peca apenas não foi bem informado, é socratismo. Quando se fala de um Deus distante, que criou e não se envolve, é o Motor Imóvel. E quando alguém diz que Deus e o mal são forças eternas em disputa, é maniqueísmo, que Agostinho respondeu há dezesseis séculos. O pastor que conhece essa história não precisa improvisar diante dessas frases — reconhece a estrutura, sabe o que já foi respondido e por quê, e pode conduzir a conversa em vez de ser surpreendido por ela.',
    },
  ],

  fontes: [
    {
      id: 'sep-plato',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Plato',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/plato/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Enciclopédia revisada por pares e gratuita. O verbete cobre a teoria das Formas e a estrutura dos diálogos — a herança e a conta platônicas discutidas acima.',
    },
    {
      id: 'sep-aquinas',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Thomas Aquinas',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/aquinas/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Trata da recepção de Aristóteles, da relação entre razão natural e revelação e das cinco vias — a síntese medieval exposta neste verbete, com o rigor que os manuais introdutórios não alcançam.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers, vol. I e III — Justino Mártir e Tertuliano',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'As duas posturas patrísticas diante da filosofia grega em suas fontes: o logos spermatikos de Justino e a recusa de Tertuliano.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 5 e 15; Livro II, cap. 2',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Calvino discute expressamente o que os filósofos acertaram e onde falharam, e I.15 avalia a antropologia platônica ao tratar da alma. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. I, II e XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. II usa o vocabulário de substância e pessoas discutido aqui; o XXXI.4 afirma que concílios podem errar e muitos erraram — o limite reformado à autoridade das formulações antigas.',
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
      nota: 'Material em português sobre a escolástica reformada e o debate a respeito do uso de categorias filosóficas na dogmática.',
    },
  ],
};