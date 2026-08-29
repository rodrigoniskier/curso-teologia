import type { Verbete } from '../../tipos';

export const arqueologiaMetodoAchados: Verbete = {
  id: 'te03-arqueologia-metodo-achados',
  disciplina: 'TE03',
  unidade: 1,
  titulo: 'Arqueologia Bíblica: Método, Evidência e Grandes Achados',
  subtitulo:
    'Escavar não é procurar objetos que provem a Bíblia, mas reconstruir contextos a partir de vestígios incompletos',
  objetivo:
    'Ao final, você compreenderá como sítios arqueológicos são escavados, datados e interpretados; distinguirá artefato, contexto e inscrição; reconhecerá o valor e os limites de achados ligados aos patriarcas, Egito, Canaã, Assíria, Babilônia e Qumran; e saberá usar a arqueologia como disciplina auxiliar da exegese sem transformá-la em fundamento da autoridade bíblica.',
  atualizadoEm: '2026-08-29',
  verMais: ['te03-geografia-arqueologia', 'te03-geografia-fisica-humana', 'te01-at-inspiracao-critica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta popular “a arqueologia prova a Bíblia?” começa mal. Arqueologia não foi criada para confirmar ou refutar um livro específico. Ela investiga sociedades humanas por meio de sua cultura material: construções, cerâmica, restos orgânicos, inscrições, selos, ferramentas, moedas, ossos, estradas e camadas de ocupação. Quando esse material cruza o mundo descrito na Escritura, ele pode iluminar, corroborar, tensionar ou corrigir interpretações modernas. O que não pode fazer é transformar fé em resultado de laboratório.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Seu valor para a exegese está justamente nessa modéstia. A revelação bíblica aconteceu na história, entre povos que construíram cidades, pagaram impostos, fizeram guerras, escreveram cartas e enterraram mortos. Conhecer esse mundo impede que Israel, Judá, Egito, Assíria ou Babilônia sejam lidos como cenários imaginários. Mas o fragmento escavado continua sendo fragmento: ele não vem com interpretação pronta.',
    },
    {
      tipo: 'secao',
      titulo: 'O sítio arqueológico é uma sequência, não um depósito de objetos',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Muitos sítios do antigo Oriente Próximo formam um tell, um montículo criado por sucessivas ocupações humanas. Casas são construídas, destruídas, niveladas e reconstruídas no mesmo lugar durante séculos. A escavação tenta recuperar essa sequência sem destruí-la antes de registrá-la. Por isso a posição de um objeto importa tanto quanto o próprio objeto.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Estratigrafia** observa a ordem relativa das camadas e suas relações, levando em conta fossas, erosão, reformas e outros distúrbios.',
        '**Tipologia cerâmica** compara formas, técnicas e estilos que mudam ao longo do tempo; cacos comuns frequentemente datam melhor uma camada do que objetos raros.',
        '**Datação absoluta** usa, quando disponível, métodos como radiocarbono e materiais associados a cronologias independentes. O resultado é um intervalo probabilístico, não uma data impressa no solo.',
        '**Epigrafia e paleografia** estudam inscrições e formas de escrita, mas o texto precisa ser interpretado segundo gênero, finalidade e público.',
        '**Arqueologia ambiental** analisa sementes, pólen, fauna e paisagem para reconstruir alimentação, agricultura, clima e uso do território.',
      ],
    },
    {
      tipo: 'termo',
      termo: 'Proveniência',
      texto:
        'História documentada do lugar e das circunstâncias em que um artefato foi encontrado e preservado. Um objeto sem proveniência perde grande parte de seu valor histórico porque já não pode ser relacionado com segurança a uma camada, edifício ou conjunto arqueológico.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma conclusão forte raramente depende de um único objeto. Estratigrafia, cerâmica, inscrições, datações e comparação regional precisam convergir. Isso também explica por que interpretações arqueológicas mudam: novos métodos e novas escavações podem reformular a leitura de uma camada antiga sem que a ciência tenha “falhado”. Revisão é parte normal do método.',
    },
    {
      tipo: 'secao',
      titulo: 'Patriarcas: contexto plausível não é identificação pessoal',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As narrativas de Gênesis mencionam migração, pastoreio, alianças, compra de sepultura, cidades e rotas do antigo Oriente Próximo. A arqueologia consegue reconstruir práticas e ambientes compatíveis com essas cenas, mas quase nunca identifica indivíduos como Abraão, Isaque ou Jacó. Famílias seminômades deixam menos vestígios que palácios, muralhas e arquivos administrativos.',
    },
    {
      tipo: 'controversia',
      titulo: 'Paralelos de costumes datam automaticamente os patriarcas?',
      posicoes: [
        {
          escola: 'Uso maximalista de paralelos',
          sintese:
            'Costumes semelhantes aos de Gênesis em documentos do segundo milênio são tratados como confirmação cronológica direta. O ganho é mostrar plausibilidade cultural; o risco é esquecer que várias práticas continuaram por muitos séculos e não funcionam como marcador exclusivo de uma época.',
        },
        {
          escola: 'Ceticismo radical',
          sintese:
            'Como não existe uma inscrição contemporânea dizendo “Abraão esteve aqui”, conclui que a arqueologia nada oferece à historicidade patriarcal. O método evita exagero apologético, mas exige do mundo doméstico e pastoral um tipo de documentação que raramente sobrevive para qualquer família antiga.',
        },
        {
          escola: 'Realismo contextual',
          sintese:
            'Usa a arqueologia para testar ambiente, rotas e costumes sem fingir que contexto equivale a identificação pessoal. É uma conclusão mais limitada, porém metodologicamente mais robusta.',
        },
      ],
    },
    {
      tipo: 'secao',
      titulo: 'Egito: abundância documental também tem silêncios',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Egito preservou enorme quantidade de monumentos e textos, mas essa documentação é seletiva e fortemente controlada pela elite. Inscrições reais celebram ordem, vitória e legitimidade; derrotas, crises e grupos marginais tendem a desaparecer. Ausência de um episódio em inscrições faraônicas, portanto, não funciona automaticamente como refutação. É preciso perguntar se aquele tipo de evento teria razões e condições para ser registrado e preservado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A estela de Merneptá, do fim do século XIII a.C., oferece um ponto cronológico importante. Ao listar povos derrotados em Canaã, menciona Israel com um determinativo que o caracteriza como povo, não como cidade-Estado. A inscrição não explica a origem desse Israel, mas demonstra que um grupo com esse nome era reconhecido em Canaã naquele período.',
    },
    {
      tipo: 'secao',
      titulo: 'Canaã: uma camada de destruição não vem com legenda',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Escavações em Jericó, Hazor, Laquis e muitos outros sítios revelaram sucessões de destruição, reconstrução e mudança populacional. O passo difícil é relacionar uma camada específica a um episódio textual específico. Uma cidade pode ter sido destruída várias vezes; a identificação do sítio pode ser discutida; cronologias cerâmicas podem ser refinadas. Encontrar uma camada de incêndio é o começo do argumento, não o fim.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Jericó tornou-se exemplo clássico porque escavadores competentes propuseram cronologias diferentes para as mesmas ruínas. A lição não é que arqueologia seja inútil, mas que ela trabalha com hipóteses revisáveis. Uma apologética que transforma cada manchete de escavação em confirmação definitiva coloca a confiança do leitor na dependência de uma interpretação que poderá ser revista.',
    },
    {
      tipo: 'secao',
      titulo: 'Assíria e Babilônia: impérios escrevem sua própria memória',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No primeiro milênio a.C., anais, prismas, relevos, cartas e crônicas permitem comparar acontecimentos bíblicos com a documentação imperial. Essa independência é valiosa, mas exige crítica de gênero. Reis escrevem para exibir poder, legitimar tronos e intimidar inimigos; um texto oficial não é uma câmera neutra apontada para o passado.',
    },
    {
      tipo: 'citacao',
      texto: 'A ele próprio encerrei em Jerusalém, sua residência real, como um pássaro numa gaiola.',
      autor: 'Senaqueribe, rei da Assíria',
      obra: 'Anais da campanha contra Judá',
      fonteId: 'luckenbill-assiria-2',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Senaqueribe enumera cidades de Judá conquistadas e o tributo de Ezequias, mas não afirma ter capturado Jerusalém. Esse silêncio é significativo porque inscrições reais assírias celebram conquistas. A comparação com 2 Reis 18—19 mostra como duas fontes independentes podem divergir em perspectiva e teologia, mas convergir em elementos históricos importantes sem precisarem dizer exatamente a mesma coisa.',
    },
    {
      tipo: 'secao',
      titulo: 'Qumran: quando a arqueologia encontra uma biblioteca',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os manuscritos do deserto da Judeia, descobertos a partir de 1947, transformaram o estudo da transmissão textual do Antigo Testamento e do judaísmo do Segundo Templo. As cavernas próximas de Qumran preservaram manuscritos bíblicos, comentários, regras comunitárias e outras obras judaicas muito anteriores aos códices medievais completos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Qumran também ensina cautela interdisciplinar. Manuscrito, caverna e assentamento são tipos diferentes de evidência. Relacioná-los exige argumento histórico; proximidade geográfica não resolve sozinha quem produziu cada texto ou como cada rolo chegou às cavernas. A associação do sítio com uma comunidade essênia continua importante, mas detalhes permanecem debatidos.',
    },
    {
      tipo: 'definicao',
      termo: 'Arqueologia bíblica',
      texto:
        'Aplicação dos métodos arqueológicos ao estudo das sociedades, territórios e culturas materiais relacionadas ao mundo bíblico. Como disciplina auxiliar da exegese, reconstrói contextos e testa hipóteses históricas; não fundamenta a inspiração da Escritura, não converte ausência de evidência em evidência de ausência e não dispensa a interpretação crítica dos próprios achados.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A fé cristã não precisa escolher entre entusiasmo ingênuo e medo da arqueologia. O estudante pode celebrar um achado que ilumina o texto e, no dia seguinte, estudar uma datação que levanta perguntas difíceis. A Escritura não ganha autoridade quando uma pá encontra um muro, nem perde autoridade quando uma camada é reinterpretada. Humildade intelectual também é disciplina cristã: não precisamos chamar hipótese de fato para defender a verdade.',
    },
  ],
  fontes: [
    {
      id: 'barton-arqueologia',
      autor: 'George A. Barton',
      ano: '1916',
      titulo: 'Archaeology and the Bible',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/archaeologybible00bartuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota:
        'Manual histórico de arqueologia e antologia de documentos do Oriente Próximo; a parte documental permanece útil, enquanto datações antigas exigem atualização crítica.',
    },
    {
      id: 'breasted-egito-3',
      autor: 'James Henry Breasted',
      ano: '1906',
      titulo: 'Ancient Records of Egypt, vol. III — The Nineteenth Dynasty',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/ancientrecordsof03brea_0',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota:
        'Reúne documentos egípcios da XIX dinastia, incluindo a estela de Merneptá e sua referência a Israel.',
    },
    {
      id: 'luckenbill-assiria-2',
      autor: 'Daniel David Luckenbill',
      ano: '1927',
      titulo: 'Ancient Records of Assyria and Babylonia, vol. II',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/LuckenbillAncientRecordsAssyria02',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota:
        'Traduções de inscrições reais assírias, incluindo os anais de Senaqueribe sobre a campanha contra Judá.',
    },
    {
      id: 'smith-geografia',
      autor: 'George Adam Smith',
      ano: '1894',
      titulo: 'The Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historicalgeogra00smit',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota:
        'Geografia histórica clássica da Palestina, útil para relacionar sítios, rotas, relevo e acontecimentos históricos.',
    },
  ],
};