import type { Verbete } from '../../tipos';

export const arqueologiaMetodoAchados: Verbete = {
  id: 'te03-arqueologia-metodo-achados',
  disciplina: 'TE03',
  unidade: 1,
  titulo: 'Arqueologia Bíblica: Método, Evidência e Grandes Achados',
  subtitulo: 'Escavar não é procurar objetos que provem a Bíblia, mas reconstruir contextos a partir de vestígios incompletos',
  objetivo:
    'Ao final, você compreenderá como sítios arqueológicos são escavados, datados e interpretados; distinguirá artefato, contexto e inscrição; reconhecerá o valor e os limites de achados ligados aos patriarcas, Egito, Canaã, Assíria, Babilônia e Qumran; e saberá usar a arqueologia como disciplina auxiliar da exegese sem transformá-la em fundamento da autoridade bíblica.',
  atualizadoEm: '2026-08-28',
  verMais: ['te03-geografia-arqueologia', 'te03-geografia-fisica-humana', 'te01-antigo-testamento-inspiracao-critica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta popular “a arqueologia prova a Bíblia?” começa mal. Arqueologia não foi criada para confirmar ou refutar um livro específico. Ela investiga sociedades humanas por meio de cultura material: construções, cerâmica, restos orgânicos, inscrições, selos, ferramentas, moedas, ossos, estradas e camadas de ocupação. Quando esse material cruza o mundo descrito na Escritura, ele pode iluminar, corroborar, tensionar ou corrigir interpretações modernas do texto. O que não pode fazer é transformar fé em resultado de laboratório.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O valor teológico da disciplina está justamente em sua modéstia. A revelação bíblica aconteceu na história, entre povos que construíram cidades, pagaram impostos, fizeram guerras, escreveram cartas e enterraram mortos. Conhecer esse mundo impede que o intérprete leia Israel, Judá, Egito ou Roma como cenários imaginários. Mas o fragmento escavado continua sendo fragmento: ele não vem com interpretação pronta.',
    },
    { tipo: 'secao', titulo: 'Como um sítio arqueológico é lido', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Um tell — montículo formado por sucessivas ocupações humanas — contém camadas acumuladas ao longo de séculos. Escavar significa remover essas camadas de modo controlado, registrando posição, associação e sequência. Um vaso isolado em mercado de antiguidades pode ser bonito; arqueologicamente, perdeu grande parte do valor porque não sabemos em que camada, edifício ou conjunto foi encontrado. Contexto é parte da evidência.',
    },
    {
      tipo: 'lista',
      itens: [
        'Estratigrafia observa a sequência relativa das camadas: em condições normais, uma camada inferior antecede a superior, embora fossas, erosão e reconstruções possam perturbar o quadro.',
        'Tipologia cerâmica compara formas, técnicas e estilos que mudam ao longo do tempo; por isso cacos comuns podem ser mais úteis para datar uma ocupação do que objetos raros.',
        'Datação absoluta usa, quando disponível, métodos como radiocarbono e materiais associados a datas conhecidas. Ela fornece intervalos e probabilidades, não relógios perfeitos.',
        'Epigrafia e paleografia estudam inscrições e formas de escrita. O texto precisa ser lido no gênero em que foi produzido: anais reais, contratos, cartas e epitáfios não têm a mesma função.',
        'Arqueologia ambiental examina sementes, pólen, fauna e paisagem para reconstruir dieta, agricultura, clima e uso do território.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O princípio essencial é convergência. Uma conclusão forte raramente depende de um único objeto. Estratigrafia, cerâmica, inscrição, datação e comparação regional precisam conversar. Isso explica por que interpretações mudam: novos métodos ou novas escavações podem alterar a forma como uma camada antiga é entendida sem que o sítio “mude de opinião”.',
    },
    { tipo: 'secao', titulo: 'Patriarcas: contexto é diferente de identificação', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'As narrativas patriarcais mencionam migração, pastoreio, alianças, compra de sepultura, cidades e rotas do antigo Oriente Próximo. A arqueologia pode reconstruir práticas e ambientes compatíveis com essas cenas, mas raramente identifica um indivíduo como Abraão, Isaque ou Jacó. Objetos cotidianos quase nunca trazem o nome das pessoas que os usaram, e famílias seminômades deixam registro material muito menor que palácios e cidades.',
    },
    {
      tipo: 'controversia',
      titulo: 'Paralelos de costumes datam automaticamente os patriarcas?',
      posicoes: [
        {
          escola: 'Uso maximalista de paralelos',
          sintese:
            'Costumes semelhantes aos de Gênesis em documentos do segundo milênio são tratados como confirmação cronológica direta. O ganho é mostrar que as narrativas pertencem plausivelmente ao mundo antigo; o risco é esquecer que várias práticas continuaram por longos períodos e não funcionam como marcador exclusivo de uma década ou século.',
        },
        {
          escola: 'Ceticismo radical',
          sintese:
            'Como não há inscrição contemporânea dizendo “Abraão esteve aqui”, conclui que a arqueologia nada oferece à historicidade patriarcal. O método evita excesso apologético, mas exige do mundo doméstico e pastoral um tipo de documentação que raramente existe para qualquer família antiga.',
        },
        {
          escola: 'Realismo contextual',
          sintese:
            'Usa a arqueologia para testar plausibilidade de ambiente, rotas e costumes sem fingir que contexto equivale a identificação pessoal. É uma conclusão menor, porém metodologicamente mais sólida.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'Egito: monumentos, silêncio e a estela de Merneptá', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O Egito oferece enorme quantidade de monumentos e textos, mas a documentação é seletiva e fortemente controlada pela elite. Registros reais celebram ordem e vitória; derrotas, crises e grupos marginais tendem a desaparecer. Por isso, ausência de um episódio em inscrições faraônicas não funciona automaticamente como refutação. A pergunta correta é se aquele tipo de evento, envolvendo aquele grupo, teria razões e condições para ser preservado na documentação que sobreviveu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A estela de Merneptá, do fim do século XIII a.C., é um ponto firme. Ao listar povos derrotados na campanha de Canaã, menciona Israel e usa um determinativo que o classifica como povo, não cidade-Estado. A inscrição não narra a origem desse Israel, mas mostra que um grupo com esse nome era conhecido em Canaã naquele momento. É um excelente exemplo do que um achado pode afirmar com segurança — e do que não pode.',
    },
    { tipo: 'secao', titulo: 'Canaã: cidades destruídas não vêm com legenda', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Escavações em Jericó, Hazor, Laquis e outros sítios revelaram sucessões de destruição, reconstrução e mudança populacional. O problema é ligar uma camada específica a um episódio textual específico. Uma cidade pode ter sido destruída mais de uma vez; cronologias cerâmicas podem ser refinadas; o nome bíblico de uma cidade precisa corresponder corretamente ao sítio moderno. Por isso, “foi encontrada uma camada de incêndio” é apenas o começo, não o fim, do argumento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Jericó tornou-se símbolo dessa dificuldade porque escavadores competentes propuseram cronologias diferentes para as mesmas ruínas. A lição pedagógica não é que arqueologia seja inútil, mas que ela funciona por hipóteses revisáveis. Uma apologética que anuncia cada notícia de escavação como confirmação definitiva coloca a Escritura na dependência de uma manchete que poderá ser revista na próxima temporada de campo.',
    },
    { tipo: 'secao', titulo: 'Assíria e Babilônia: quando os impérios escrevem sua versão', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A partir do primeiro milênio a.C., a quantidade de documentação imperial cresce enormemente. Anais, prismas, relevos e crônicas permitem comparar eventos bíblicos com a memória oficial assíria e babilônica. Essa comparação é valiosa porque os documentos são independentes; também exige crítica de gênero, porque reis escrevem para exibir domínio, legitimar tronos e intimidar inimigos.',
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
        'Senaqueribe enumera cidades de Judá conquistadas e o tributo de Ezequias, mas não afirma ter capturado Jerusalém. O dado combina de modo interessante com 2 Reis 18—19: as fontes discordam na teologia e na perspectiva, mas convergem em que o rei assírio devastou Judá e não incorporou Jerusalém à lista de capitais tomadas. A comparação responsável não precisa fazer as duas fontes dizerem exatamente a mesma coisa.',
    },
    { tipo: 'secao', titulo: 'Qumran: a arqueologia encontra uma biblioteca', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Os manuscritos do deserto da Judeia, descobertos a partir de 1947, mudaram sobretudo o estudo do texto bíblico e do judaísmo do Segundo Templo. As cavernas próximas de Qumran preservaram manuscritos bíblicos, comentários, regras comunitárias e outras obras judaicas. Seu valor não está em “provar” que o Antigo Testamento existia, mas em oferecer testemunhas muito anteriores da transmissão textual e uma janela para a diversidade religiosa judaica antes e no tempo de Jesus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Qumran também ensina cautela interdisciplinar. Manuscrito, caverna e assentamento são tipos diferentes de evidência. Relacioná-los exige argumento histórico; não basta proximidade geográfica. A associação do sítio a uma comunidade essênia é influente e plausível, mas detalhes sobre quem escreveu cada documento ou como cada rolo chegou às cavernas continuam sujeitos a discussão.',
    },
    {
      tipo: 'termo',
      termo: 'Proveniência',
      texto:
        'História documentada do lugar e das circunstâncias em que um artefato foi encontrado e depois preservado. Sem proveniência, aumenta o risco de falsificação e diminui a capacidade de relacionar o objeto com uma camada, edifício ou contexto histórico.',
    },
    {
      tipo: 'definicao',
      termo: 'Método arqueológico aplicado à Bíblia',
      texto:
        'Investigação da cultura material dos mundos bíblicos por escavação controlada, estratigrafia, tipologia, datação, análise de inscrições e comparação regional. Seu objetivo é reconstruir contextos históricos e sociais, não validar teologicamente a Escritura. Achados podem corroborar ou tensionar interpretações, mas sua força depende de proveniência, contexto, gênero documental e convergência de evidências.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A fé cristã não precisa escolher entre entusiasmo ingênuo e medo da arqueologia. O aluno pode celebrar um achado que ilumina o texto e, no dia seguinte, estudar uma datação que levanta perguntas difíceis. A Escritura não ganha autoridade quando uma pá encontra um muro, nem perde autoridade quando uma camada é reinterpretada. A humildade intelectual é parte da piedade: Deus não nos pede que chamemos hipótese de fato para defendê-lo.',
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
      nota: 'Manual histórico de arqueologia e antologia de documentos do Oriente Próximo; a parte documental permanece útil, enquanto datações antigas exigem atualização crítica.',
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
      nota: 'Reúne documentos egípcios da XIX dinastia, incluindo a estela de Merneptá e sua referência a Israel.',
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
      nota: 'Tradução das inscrições reais assírias, inclusive os anais de Senaqueribe sobre a campanha contra Judá.',
    },
    {
      id: 'smith-atlas',
      autor: 'George Adam Smith',
      ano: '1915',
      titulo: 'Atlas of the Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/atlasofhistorica00smit',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Mapas históricos e físicos para situar sítios, rotas e regiões mencionadas na discussão arqueológica.',
    },
  ],
};
