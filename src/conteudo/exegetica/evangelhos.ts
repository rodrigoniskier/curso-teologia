import type { Verbete } from '../../tipos';

export const evangelhos: Verbete = {
  id: 'te20-evangelhos',
  disciplina: 'TE20',
  unidade: 6,
  titulo: 'Exegese dos Evangelhos',
  subtitulo:
    'Quatro relatos da inscrição na cruz, quatro redações diferentes — e o reflexo de harmonizar destrói justamente a informação que ali existe',
  objetivo:
    'Ao final, você entenderá por que os relatos paralelos divergem sem que isso os torne falsos, saberá o que Lucas diz sobre o próprio método e o que a inerrância de fato afirma, conhecerá o problema sinótico e as três soluções em disputa, saberá trabalhar uma perícope comparando as versões em vez de fundi-las, e terá um roteiro de exegese que aproveita a diferença em vez de apagá-la.',
  atualizadoEm: '2026-08-18',
  verMais: ['te16-metodologia-exegetica', 'te12-hermeneutica', 'te52-manuscritologia'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Quatro evangelhos relatam a placa que Pilatos mandou pregar na cruz, e as quatro redações são diferentes. Marcos traz *O REI DOS JUDEUS*; Lucas, *ESTE É O REI DOS JUDEUS*; Mateus, *ESTE É JESUS, O REI DOS JUDEUS*; João, *JESUS NAZARENO, O REI DOS JUDEUS*. Qualquer estudante que compare as quatro percebe isso em cinco minutos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O reflexo mais comum é somar tudo e supor que a placa trazia a redação mais longa, da qual cada evangelista teria citado um pedaço. Só que esse reflexo, levado a sério, produz um resultado desconfortável: **a placa que ninguém relata é a única que a harmonização considera verdadeira**, e os quatro relatos passam a ser, cada um, parcialmente incompletos — que é exatamente o defeito que a harmonização queria evitar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale examinar o que as quatro versões de fato fazem, em vez de o que se supõe que deveriam fazer. Todas registram a acusação — rei dos judeus —, que era o ponto jurídico da execução, e cada uma acrescenta ou omite a identificação do réu. **Nenhuma delas erra sobre o que aconteceu, e nenhuma delas se propõe a reproduzir letra por letra.** O que estava em causa, para o autor antigo, era relatar com fidelidade o que foi dito; a exigência de transcrição literal é uma expectativa nossa, projetada sobre textos que nunca a assumiram.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso não é hipótese conciliadora inventada depois: um dos quatro autores descreve o próprio procedimento logo na abertura do livro.',
    },
    {
      tipo: 'passagem',
      referencia: 'Lucas 1.1-4',
      texto:
        'Tendo muitos empreendido pôr em ordem a narração dos fatos que entre nós se cumpriram, segundo nos transmitiram os mesmos que os presenciaram desde o princípio, e foram ministros da palavra, pareceu-me também a mim conveniente descrevê-los a ti, ó excelentíssimo Teófilo, por sua ordem, havendo-me já informado minuciosamente de tudo desde o princípio, para que conheças a certeza das coisas de que já estás informado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Lucas descreve pesquisa, fontes oculares, seleção, ordenação e finalidade. Ele diz que houve *muitos* antes dele, que consultou quem viu, e que organizou o material *por sua ordem* — expressão que admite ordenação temática e não obriga a cronológica. **Um autor que trabalha assim vai necessariamente diferir de outro que trabalhou assim**, e o texto trata isso como método, não como defeito.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí uma formulação que poupa muita confusão ao estudante: a inerrância afirma que a Escritura **não erra naquilo que afirma**, medida pelo padrão de precisão que o próprio texto assume. Ela não transforma o evangelista em estenógrafo, nem obriga o discurso citado a ser transcrição, nem exige ordem cronológica onde o autor não a alegou. Exigir do texto uma precisão que ele não reivindica é criar dificuldade artificial — e depois ter de resolvê-la com engenhosidade que ninguém acredita.',
    },
    {
      tipo: 'termo',
      termo: 'Problema sinótico',
      texto:
        'Nome dado à questão literária levantada por Mateus, Marcos e Lucas — chamados *sinóticos*, do grego para "ver junto", porque podem ser dispostos em colunas paralelas. Eles compartilham grandes blocos de material, com frequência em ordem semelhante e por vezes com coincidência verbal exata, inclusive em construções incomuns; e ao mesmo tempo cada um tem material que só ele traz. A pergunta é como se explica essa combinação de dependência e independência. **É questão histórico-literária, não doutrinária**: nenhuma das soluções propostas nega a inspiração, e a escolha entre elas não decorre da confessionalidade de quem escolhe.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como se explicam as semelhanças entre os sinóticos',
      posicoes: [
        {
          escola: 'Prioridade de Marcos',
          sintese:
            'Marcos é o mais antigo e serviu de fonte a Mateus e Lucas, que ainda partilham uma coleção de ditos hoje perdida, convencionalmente chamada Q. Explica bem por que Marcos é o mais curto e ainda assim mais detalhado nos episódios que traz, e por que Mateus e Lucas raramente concordam contra ele na ordem. É a hipótese majoritária. A objeção mais séria é que Q é entidade postulada, da qual não existe nenhum manuscrito nem menção antiga.',
        },
        {
          escola: 'Prioridade de Mateus',
          sintese:
            'Mateus veio primeiro, Lucas o usou, e Marcos resumiu ambos — posição sustentada por Agostinho em outra forma e retomada modernamente por Griesbach. Tem a seu favor o testemunho patrístico unânime de que Mateus escreveu primeiro, e dispensa a hipótese de um documento que nunca ninguém viu. Recebe a objeção de ser difícil explicar por que um resumidor acrescentaria detalhes vívidos e cortaria o Sermão do Monte.',
        },
        {
          escola: 'Tradição oral comum',
          sintese:
            'A catequese apostólica circulava oralmente em forma já fixada, com blocos memorizados, e os três evangelistas beberam dela de modo independente — o que explicaria as coincidências sem exigir cópia literária. Leva a sério que a cultura era de transmissão oral treinada, e não de arquivo. A dificuldade é que a coincidência verbal em certos trechos é exata demais, incluindo parênteses do narrador, para vir de memorização independente.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto prático para quem prega é que **as três hipóteses produzem quase a mesma exegese**. Nenhuma delas altera o sentido de uma perícope. O que muda é a explicação de por que os textos se parecem — e é honesto dizer ao estudante que essa é uma pergunta em aberto, em vez de apresentar a hipótese majoritária como resultado fechado ou tratá-la como ameaça.',
    },
    {
      tipo: 'secao',
      titulo: 'O que fazer com as diferenças, na prática',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A diferença entre versões paralelas é a fonte de informação mais subaproveitada da exegese dos Evangelhos, e ela se perde inteira quando se harmoniza. O procedimento correto é o inverso: colocar as colunas lado a lado e perguntar, de cada evangelista, **o que ele escolheu incluir, o que omitiu e onde colocou o episódio.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um exemplo torna isso concreto. Marcos e Lucas narram a cura de um cego em Jericó; Mateus fala de dois. Harmonizar leva a discutir aritmética. Comparar leva a notar que **Marcos é o único que dá o nome — Bartimeu** —, o que é típico dele e sugere alguém conhecido da comunidade que recebeu o relato; e que Mateus tem o costume de mencionar pares em outros episódios, o que faz do detalhe uma marca de estilo antes de ser um dado a conciliar. A segunda leitura ensina algo sobre cada evangelista; a primeira consome a aula e não ensina nada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar a advertência simétrica, porque a exegese moderna erra para o outro lado com a mesma facilidade: **nem toda diferença carrega teologia.** Um evangelista pode abreviar porque o episódio não servia ao seu argumento, ou porque a memória de sua fonte era assim. Atribuir intenção redacional a cada palavra que varia é a versão erudita de alegorizar cada detalhe da parábola.',
    },
    {
      tipo: 'definicao',
      termo: 'Evangelho, como gênero',
      texto:
        'Narrativa da vida, morte e ressurreição de Jesus, escrita para produzir e sustentar fé — e portanto **seletiva e ordenada por propósito**, não exaustiva nem necessariamente cronológica. Aproxima-se da biografia antiga, que também organizava o material por temas e concentrava a atenção no fim da vida do biografado, e distingue-se dela por dois traços decisivos: o narrador escreve de dentro da comunidade que confessa aquele personagem como Senhor, e declara essa intenção em vez de escondê-la. Ler um evangelho corretamente é, por isso, ler um texto que é **ao mesmo tempo histórico e confessional**, sem transformar a segunda coisa em desmentido da primeira.',
    },
    {
      tipo: 'secao',
      titulo: 'Roteiro para uma perícope dos Evangelhos',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Delimite a perícope pelos sinais do texto**, e não pelos títulos da edição: mudança de lugar, de tempo, de interlocutor, fórmulas de transição. Os títulos em negrito da sua Bíblia foram postos por editores modernos e às vezes cortam no lugar errado.',
        '**Ponha os paralelos em colunas.** Se o episódio aparece em mais de um evangelho, essa é a primeira coisa a fazer, antes de qualquer comentário. Uma harmonia impressa ou uma sinopse resolve em minutos o que a leitura sequencial nunca revela.',
        '**Marque três colunas de observação:** o que só este evangelista tem, o que ele omite dos outros, e onde ele situa o episódio na sequência. As três perguntas juntas costumam mostrar o propósito.',
        '**Situe no argumento do livro inteiro.** Cada evangelho tem um fio: os cinco discursos de Mateus, o segredo messiânico e a corrida para a cruz em Marcos, os pobres e os de fora em Lucas, os sinais e o "Eu sou" em João. A perícope quase sempre serve ao fio.',
        '**Reconstitua o cenário concreto** — quem estava presente, onde, em que festa, com que custo social. Aqui geografia e cultura material fazem diferença real, e há verbete próprio sobre isso.',
        '**Só então pergunte pela teologia**, e deixe que ela venha da estrutura do relato, e não de uma palavra isolada que variou entre versões.',
        '**Ao pregar, pregue um evangelho de cada vez.** Sermão que funde as quatro versões prega um quinto evangelho, que não existe e que ninguém escreveu.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Um estudante que descobre essas diferenças sozinho, sem preparo, costuma passar por um susto — e às vezes o susto vira crise. Vale dizer por que a crise é evitável e de onde ela vem: quase sempre de uma doutrina da Escritura aprendida por slogan, em que a Bíblia é perfeita no sentido em que uma ata de cartório seria. Quando o texto não corresponde a isso, cai a caricatura, e o estudante acha que caiu a fé. **O antídoto é ensinar cedo o que a inerrância afirma, com os exemplos difíceis na mesa** — não escondê-los até que alguém os encontre num vídeo hostil. E há um consolo escondido no problema: a igreja antiga tinha quatro relatos com diferenças visíveis e podia ter escolhido um só, ou fundido os quatro num único texto liso, como Taciano de fato tentou. Preferiu conservar os quatro, com as arestas à vista. Quem preserva versões que não batem em cada detalhe está mais interessado em fidelidade do que em aparência de fidelidade — e isso, no fim, é razão para confiar, não para desconfiar.',
    },
  ],
  fontes: [
    {
      id: 'burton-harmonia',
      autor: 'Ernest De Witt Burton e Edgar J. Goodspeed',
      ano: '1917',
      titulo: 'A Harmony of the Synoptic Gospels for Historical and Critical Study',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/harmonyofsynopti00burtrich',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A sinopse em colunas paralelas que o segundo passo do roteiro deste verbete exige, em domínio público. Permite fazer em minutos, e de graça, o trabalho de comparação que a leitura sequencial dos evangelhos nunca revela — e que é a etapa mais pulada da exegese dos Evangelhos.',
    },
    {
      id: 'westcott-evangelhos',
      autor: 'Brooke Foss Westcott',
      ano: '1860',
      titulo: 'An Introduction to the Study of the Gospels',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/introductiontost00westrich',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento clássico do problema sinótico e do caráter dos quatro evangelhos, por um dos maiores textualistas do Novo Testamento. Escreve antes de as escolas modernas se fixarem, o que o torna útil justamente por argumentar as questões em vez de repetir conclusões — e por defender a tradição oral com seriedade, quando hoje ela costuma ser descartada em nota de rodapé.',
    },
    {
      id: 'vos-reino',
      autor: 'Geerhardus Vos',
      ano: '1903',
      titulo: 'The Teaching of Jesus Concerning the Kingdom of God and the Church',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/theteachingofjes00vosuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A leitura reformada do tema central da pregação de Jesus, feita pelo fundador da teologia bíblica em Princeton. Serve ao quarto passo do roteiro: mostra como o Reino organiza o material dos Evangelhos, o que impede que a perícope seja pregada solta.',
    },
    {
      id: 'terry-hermeneutica',
      autor: 'Milton Spenser Terry',
      ano: '1883',
      titulo: 'Biblical Hermeneutics — narrativa, discurso e parábola',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/biblicalhermeneu00terr',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'As seções sobre relato histórico e sobre citação de discurso tratam diretamente do que este verbete discute: o grau de precisão que a historiografia antiga assumia ao reproduzir falas, e por que a variação entre relatos paralelos não é erro.',
    },
  ],
};
