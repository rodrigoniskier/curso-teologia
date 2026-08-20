import type { Verbete } from '../../tipos';

export const credosConfissoes: Verbete = {
  id: 'ts53-credos-confissoes',
  disciplina: 'TS53',
  unidade: 1,
  titulo: 'Credos e Confissões',
  subtitulo:
    'A igreja não escolhe entre ter ou não ter um credo; escolhe entre confessar publicamente o que crê ou deixar sua teologia escondida',
  objetivo:
    'Ao final, você saberá distinguir credo, confissão, catecismo, cânones e fórmulas de consenso; compreenderá por que a fé cristã é histórica e confessional sem colocar documentos humanos no nível da Escritura; percorrerá o desenvolvimento doutrinário do Credo Apostólico, Niceia-Constantinopla, Calcedônia e Orange; distinguirá a tradição luterana da tradição reformada; e será capaz de situar Consensus Tigurinus, Confissão da Guanabara, Segunda Confissão Helvética, Confissão Belga, Catecismo de Heidelberg, Cânones de Dort, símbolos de Westminster, Formula Consensus Helvetica e a Declaração de Fé da World Reformed Fellowship dentro da história da confessionalidade reformada.',
  atualizadoEm: '2026-08-20',
  verMais: ['ts11-subscricao-confessional', 'th03-reforma', 'ts51-apologetica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma igreja anuncia: “Não temos credo senão a Bíblia”. A frase pretende proteger a autoridade das Escrituras. Mas basta perguntar se essa igreja crê que Deus é Trindade, que Cristo é verdadeiramente Deus e verdadeiramente homem, que a justificação é pela fé ou que o batismo infantil é legítimo. Assim que responde, ela já fez mais do que repetir palavras bíblicas: **organizou, interpretou e confessou o que entende que a Bíblia ensina**. A questão, portanto, nunca foi se a igreja terá uma teologia confessada. A questão é se ela será pública, examinável e historicamente responsável.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso explica por que credos e confissões não competem necessariamente com a sola Scriptura. A Escritura é a norma infalível que julga a igreja; o credo é uma resposta humana, derivada e revisável, que declara como a igreja entendeu essa norma diante de perguntas concretas. **Uma confissão pode errar; justamente por isso ela precisa dizer claramente o que afirma, para que possa ser testada pela Escritura.**',
    },

    { tipo: 'secao', titulo: '1. Credo, confissão, catecismo, cânones e consenso não são a mesma coisa' },
    {
      tipo: 'lista',
      itens: [
        '**Credo** é uma declaração relativamente breve dos elementos centrais da fé, frequentemente destinada à confissão pública e ao culto. Os credos ecumênicos concentram-se sobretudo em Deus, Cristo e na identidade da igreja.',
        '**Confissão de fé** é normalmente mais extensa e responde a um conjunto maior de controvérsias doutrinárias e eclesiásticas. A Confissão Belga e Westminster são exemplos claros.',
        '**Catecismo** organiza a doutrina pedagogicamente, em perguntas e respostas ou em uma sequência didática. Heidelberg e os catecismos de Westminster foram feitos para formar pessoas, não apenas para resolver disputas acadêmicas.',
        '**Cânones** são decisões formais sobre pontos controvertidos. Os Cânones de Dort, por exemplo, respondem aos artigos remonstrantes; não pretendem ser uma sistemática completa.',
        '**Fórmula, consenso ou declaração** pode ser um documento de acordo entre igrejas, teólogos ou comunhões sobre questões específicas. Seu alcance depende do documento: não se deve presumir que todo “consenso” tenha a mesma autoridade ou amplitude de uma confissão eclesiástica.',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Símbolo de fé',
      texto:
        'Documento público pelo qual uma comunidade cristã declara, de modo resumido ou sistemático, aquilo que entende ser o ensino da Escritura. O símbolo é autoridade subordinada: vincula dentro da comunhão que o recebe, mas permanece humano, falível e sujeito à Palavra de Deus.',
    },

    { tipo: 'secao', titulo: '2. Por que a historicidade da fé importa' },
    {
      tipo: 'paragrafo',
      texto:
        'O cristianismo não começou conosco. Isso parece óbvio, mas muda a maneira de estudar. Se uma interpretação de João 1 ou Romanos 3 exige que praticamente toda a igreja anterior tenha entendido o texto de modo incompatível, esse fato não prova automaticamente que a interpretação é falsa — a Escritura continua sendo o tribunal —, mas cria uma pergunta histórica séria. **Tradição não é um segundo cânon; é memória da leitura da igreja, que pode advertir tanto contra novidade quanto contra repetição de erros antigos.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Credos também funcionam como marcas de onde a igreja encontrou pressão suficiente para precisar falar com precisão. A palavra homoousios em Niceia, as duas naturezas em Calcedônia, a linguagem da graça em Orange, a justificação na Reforma e a perseverança em Dort não surgiram porque cristãos gostavam de fabricar termos difíceis. Surgiram porque palavras bíblicas estavam sendo usadas em sentidos incompatíveis e a controvérsia obrigou a igreja a declarar o que entendia que aquelas palavras implicavam.',
    },

    { tipo: 'secao', titulo: '3. O Credo Apostólico: uma síntese que cresceu antes de receber sua forma final' },
    {
      tipo: 'paragrafo',
      texto:
        'O nome “Credo Apostólico” não significa que os doze apóstolos tenham se reunido e redigido a forma que hoje recitamos. O documento cresceu a partir de regras de fé e fórmulas batismais da igreja antiga, especialmente ligadas à tradição romana, até chegar gradualmente à forma recebida no Ocidente. Schaff permite comparar essas versões e ver a formação linha por linha.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sua força está na arquitetura: Deus Pai criador; Jesus Cristo, seu Filho, encarnado, crucificado, ressuscitado e exaltado; Espírito Santo; igreja; perdão; ressurreição e vida eterna. Ele não resolve as controvérsias posteriores sobre como Cristo é Deus, como duas naturezas subsistem numa pessoa ou como se relacionam fé e graça. **É precisamente por isso que os credos posteriores não o tornam inútil: eles explicam o que se tornou necessário explicitar quando novas perguntas surgiram.**',
    },

    { tipo: 'secao', titulo: '4. Niceia e Constantinopla: uma palavra não bíblica para proteger uma afirmação bíblica' },
    {
      tipo: 'paragrafo',
      texto:
        'A controvérsia ariana mostrou que era possível chamar Jesus de Filho de Deus e ainda entendê-lo como criatura superior. Niceia, em 325, respondeu que o Filho é homoousios — da mesma substância ou essência do Pai. O termo não aparece no texto bíblico. Sua função, porém, era impedir que linguagem bíblica fosse esvaziada por uma definição incompatível com a adoração e o testemunho apostólico sobre Cristo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A forma que normalmente chamamos Credo Niceno é mais precisamente niceno-constantinopolitana: a tradição do século IV expandiu a confissão e tornou explícita a divindade do Espírito Santo. O ponto metodológico é importante: **fidelidade bíblica não significa limitar-se ao vocabulário bíblico quando uma controvérsia exige definir o sentido desse vocabulário**. Significa usar conceitos subordinados para guardar o conteúdo da revelação.',
    },

    { tipo: 'secao', titulo: '5. Calcedônia: quatro negativas para impedir quatro atalhos cristológicos' },
    {
      tipo: 'paragrafo',
      texto:
        'Calcedônia, em 451, não tentou explicar o mecanismo metafísico da encarnação. Fez algo mais cuidadoso: afirmou um só e mesmo Cristo, perfeito em divindade e humanidade, em duas naturezas, e cercou a afirmação com quatro limites — sem confusão, sem mudança, sem divisão e sem separação. A definição não dissolve o mistério; **marca as soluções que a igreja entendeu serem incompatíveis com o testemunho bíblico sobre a unidade da pessoa e a integridade das duas naturezas.**',
    },

    { tipo: 'secao', titulo: '6. Orange, 529: graça antes da Reforma, sem transformar o concílio em “calvinismo antecipado”' },
    {
      tipo: 'paragrafo',
      texto:
        'O Segundo Concílio de Orange respondeu a controvérsias sobre graça, pecado e iniciativa humana no contexto posterior a Agostinho. Seus cânones rejeitam a ideia de que o início da fé salvadora surja autonomamente da vontade caída e enfatizam a prioridade da graça divina. Isso explica por que autores reformados o leem com interesse.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas Orange não deve ser simplesmente renomeado “calvinismo do século VI”. Ele pertence a outro contexto, não contém a sistematização reformada posterior e foi recebido dentro da tradição ocidental pré-Reforma. O uso histórico correto é mais modesto e mais forte: **mostra que a insistência na necessidade da graça preveniente de Deus não nasceu no século XVI e que a Reforma entrou numa conversa muito mais antiga sobre pecado e graça.**',
    },

    { tipo: 'secao', titulo: '7. Augsburgo e a Fórmula de Concórdia: a Reforma não produziu uma única família confessional' },
    {
      tipo: 'paragrafo',
      texto:
        'A Confissão de Augsburgo, apresentada em 1530, tornou-se documento central do luteranismo. A Fórmula de Concórdia, de 1577, procurou resolver disputas internas que apareceram depois da morte de Lutero. Estudá-las é importante para o reformado por duas razões: elas confessam com vigor vários eixos comuns da Reforma — autoridade da Palavra, justificação e crítica a abusos romanos — e também deixam claro que **luteranos e reformados não são simplesmente dois nomes para a mesma tradição**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As diferenças ficam especialmente visíveis em cristologia, Ceia do Senhor, predestinação e formulações sobre lei e evangelho. Uma história confessional séria não usa “protestante” como se fosse um bloco homogêneo.',
    },

    { tipo: 'secao', titulo: '8. A “Fórmula de Calvino”: por que este verbete a identifica com o Consensus Tigurinus' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa da JET/IPB usa a expressão “Fórmula de Calvino”, nomenclatura pouco padronizada. Neste verbete, ela é tratada como referência ao **Consensus Tigurinus, de 1549**, também chamado Consenso de Zurique: o acordo sacramental associado a João Calvino e Heinrich Bullinger que aproximou Genebra e Zurique sobre a Ceia. A identificação é a mais plausível porque Schaff o coloca justamente entre os documentos confessionais reformados e o apresenta junto ao Catecismo de Genebra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Consensus rejeita tanto uma presença corporal local de Cristo nos elementos quanto um memorialismo que reduza a Ceia a recordação psicológica. O crente recebe verdadeiramente Cristo e seus benefícios, mas pela ação do Espírito e pela fé. É uma peça importante para entender como uma identidade “reformada” transnacional foi sendo construída por acordos que atravessavam cidades e tradições locais.',
    },

    { tipo: 'secao', titulo: '9. A Confissão da Guanabara: confessionalidade reformada no primeiro século da presença europeia no Brasil' },
    {
      tipo: 'paragrafo',
      texto:
        'A chamada Confissão da Guanabara nasceu no contexto da colônia francesa no Rio de Janeiro e do conflito religioso em torno de Nicolas Durand de Villegagnon. Ela é breve, circunstancial e escrita sob pressão. Por isso seu valor não está em competir com Heidelberg ou Westminster em abrangência, mas em mostrar como temas confessionais concretos — Escritura, Trindade, sacramentos, presença de Cristo e disciplina — podiam se tornar questão de vida e morte no ambiente colonial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Jean de Léry é uma porta de entrada primária para esse mundo. Aqui convém evitar o uso meramente heroico da narrativa: a presença huguenote na França Antártica não deve ser isolada do colonialismo europeu nem transformada em uma história simples de “protestantes bons contra católicos maus”. **O documento é mais valioso quando permanece dentro da complexidade de seu contexto.**',
    },

    { tipo: 'secao', titulo: '10. Segunda Helvética e Confissão Belga: duas arquiteturas maduras da fé reformada continental' },
    {
      tipo: 'paragrafo',
      texto:
        'A Segunda Confissão Helvética, associada a Heinrich Bullinger e publicada em 1566, tornou-se um dos símbolos reformados de maior circulação continental. A Confissão Belga, redigida por Guido de Brès em 1561, oferece uma exposição orgânica da fé das igrejas reformadas dos Países Baixos. Ambas mostram uma característica que se perderia se estudássemos apenas os “cinco pontos do calvinismo”: **a teologia reformada confessa Escritura, Deus, criação, Cristo, salvação, igreja, sacramentos, magistrado e vida cristã como um corpo integrado.**',
    },

    { tipo: 'secao', titulo: '11. Heidelberg: doutrina organizada pela pergunta pastoral “qual é o teu único consolo?”' },
    {
      tipo: 'paragrafo',
      texto:
        'O Catecismo de Heidelberg, de 1563, é talvez a melhor demonstração de que precisão confessional e calor pastoral não são opostos. Sua estrutura clássica — culpa, graça e gratidão — organiza o ensino a partir da condição do discípulo e culmina em exposição do Credo, sacramentos, Dez Mandamentos e oração.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa forma ensina uma lição editorial importante: um catecismo não é uma sistemática cortada em perguntas. Ele seleciona e ordena doutrina para formação. Por isso a pergunta 1 não começa com uma definição de inspiração ou atributos divinos, mas com pertencimento: qual é o consolo do cristão na vida e na morte?',
    },

    { tipo: 'secao', titulo: '12. Dort: uma controvérsia específica que acabou fornecendo um mapa soteriológico' },
    {
      tipo: 'paragrafo',
      texto:
        'O Sínodo de Dort, 1618–1619, respondeu aos cinco artigos da Remonstrância. Seus cânones tratam eleição, morte de Cristo, corrupção humana, conversão e perseverança. A conhecida sigla TULIP é muito posterior e pedagogicamente útil, mas não deve substituir o texto dos Cânones. A ordem original responde a uma controvérsia concreta e possui mais nuances do que o acrônimo sugere.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Dort também ajuda a desfazer a caricatura de que predestinação torna evangelização incoerente. Os cânones conectam decreto, proclamação do evangelho, chamada e responsabilidade. A graça soberana não elimina meios; ela explica por que os meios podem efetivamente servir ao propósito de Deus.',
    },

    { tipo: 'secao', titulo: '13. Westminster: confissão, catecismos e um sistema público de doutrina' },
    {
      tipo: 'paragrafo',
      texto:
        'A Assembleia de Westminster produziu uma Confissão de Fé, um Catecismo Maior e um Breve Catecismo, além de documentos de culto e governo. Para o presbiterianismo, isso significa que a confessionalidade não se limita a uma lista de doutrinas distintivas: ela oferece um vocabulário comum para Escritura, Deus, decretos, criação, providência, pacto, Cristo, salvação, lei, culto, igreja, sacramentos e últimas coisas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Westminster também contém a salvaguarda contra o próprio abuso da confessionalidade: concílios podem errar e não devem ser feitos regra de fé. A Confissão é vinculante para a comunhão que a adota precisamente como **norma subordinada**, nunca como nova revelação.',
    },

    { tipo: 'secao', titulo: '14. Formula Consensus Helvetica, 1675: precisão defensiva e o risco de congelar uma controvérsia' },
    {
      tipo: 'paragrafo',
      texto:
        'A Formula Consensus Helvetica de 1675 foi produzida na Suíça reformada em contexto de preocupação com desenvolvimentos percebidos como afastamento da ortodoxia clássica, especialmente em doutrina da Escritura, pacto e predestinação. Ela mostra uma fase em que a confessionalidade não apenas definia fronteiras contra Roma ou luteranos, mas também regulava debates dentro da própria tradição reformada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Seu estudo é útil também como advertência. Confissões podem preservar clareza em tempos de erosão; fórmulas muito ligadas a uma disputa particular também podem adquirir uma rigidez ou uma vida institucional maior que a necessidade que as gerou. **Ser confessional não é tratar cada documento histórico como se tivesse o mesmo peso, alcance e recepção.**',
    },

    { tipo: 'secao', titulo: '15. World Reformed Fellowship, 2011: continuidade reformada em linguagem global e contemporânea' },
    {
      tipo: 'paragrafo',
      texto:
        'A Declaração de Fé da World Reformed Fellowship foi concluída pelo conselho da organização em 31 de março de 2011 depois de vários anos de trabalho. O próprio texto explica três objetivos: expressar elementos comuns das confissões reformadas históricas, aplicar essa ortodoxia a questões contemporâneas e incorporar vozes reformadas de várias regiões do mundo. A organização declara explicitamente que o documento não foi criado para substituir as confissões históricas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso a torna um excelente caso final para a disciplina. Uma tradição confessional viva não precisa escolher entre repetir literalmente o século XVII e abandonar o passado. Pode **receber uma herança, distinguir o que é estrutural nela e confessá-la diante de perguntas novas**, desde que a nova formulação permaneça aberta ao teste bíblico e não apague os documentos que a tornaram possível.',
    },

    { tipo: 'secao', titulo: 'Como ler qualquer confissão sem transformá-la em coleção de frases' },
    {
      tipo: 'lista',
      itens: [
        '**Pergunte qual problema produziu o documento.** Niceia sem Ário, Dort sem a Remonstrância e Westminster sem as guerras e reformas britânicas perdem parte importante do sentido.',
        '**Identifique o gênero.** Credo, confissão, catecismo e cânones pedem leituras diferentes.',
        '**Leia o documento inteiro antes de colecionar citações.** Termos mudam de nuance conforme a arquitetura do texto.',
        '**Compare com a Escritura, não apenas com outra confissão.** O documento é testemunha e norma subordinada, não tribunal final.',
        '**Compare documentos da mesma família.** Onde Heidelberg, Belga, Dort e Westminster convergem, vemos uma tradição; onde divergem, descobrimos que “reformado” nunca significou uniformidade absoluta.',
        '**Pergunte como o símbolo foi recebido.** Uma declaração escrita não ganha automaticamente autoridade eclesial só por ser teologicamente boa.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Credos servem mal quando viram senha tribal. Um estudante pode saber que Cristo é “consubstancial ao Pai”, repetir os cinco pontos de Dort e assinar Westminster sem jamais usar essas palavras para adorar, consolar, corrigir ou ensinar alguém. A função pastoral da confissão é mais profunda: dar à igreja uma memória doutrinária comum para que o membro não dependa da personalidade do pastor, para que o pastor não reinvente o cristianismo a cada geração e para que uma congregação possa dizer publicamente: **é isto que entendemos que a Palavra de Deus ensina; se estivermos errados, mostrem-nos pela Palavra.**',
    },
  ],
  fontes: [
    {
      id: 'schaff-creeds-2',
      autor: 'Philip Schaff',
      ano: '1877',
      titulo: 'The Creeds of Christendom, vol. II — Greek and Latin Creeds',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://ccel.org/ccel/schaff/creeds2/creeds2.toc.html',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota:
        'Reúne regras de fé antigas, Credo Apostólico, Niceia-Constantinopla, Calcedônia e outros símbolos em textos comparáveis, permitindo acompanhar a formação das fórmulas antigas.',
    },
    {
      id: 'nicea-wikisource',
      autor: 'Concílio de Niceia',
      ano: '325',
      titulo: 'O Símbolo Niceno — texto e notas',
      publicacao: 'Wikisource / Nicene and Post-Nicene Fathers',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_XIV/The_First_Ecumenical_Council/The_Nicene_Creed',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Texto primário de Niceia com aparato histórico em domínio público.',
    },
    {
      id: 'calcedonia-wikisource',
      autor: 'Concílio de Calcedônia',
      ano: '451',
      titulo: 'A Definição de Fé de Calcedônia',
      publicacao: 'Wikisource / Nicene and Post-Nicene Fathers',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_XIV/The_Fourth_Ecumenical_Council/The_Definition_of_Faith',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Texto primário para a formulação cristológica de Calcedônia.',
    },
    {
      id: 'orange-529',
      autor: 'Segundo Concílio de Orange',
      ano: '529',
      titulo: 'Canons of the Second Council of Orange, A.D. 529',
      publicacao: 'Open Library — edição de 1882',
      url: 'https://openlibrary.org/books/OL28397248M/Canons_of_the_Second_Council_of_Orange_A.D._529',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Texto latino e tradução inglesa dos cânones sobre graça e livre-arbítrio, em edição histórica de domínio público.',
    },
    {
      id: 'schaff-creeds-3',
      autor: 'Philip Schaff',
      ano: '1877',
      titulo: 'The Creeds of Christendom, vol. III — Evangelical Protestant Creeds',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/TheCreedsOfChristendomV3',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota:
        'Reúne e compara documentos luteranos e reformados, incluindo Consensus Tigurinus, Heidelberg, Confissão Belga, documentos de Dort e Westminster.',
    },
    {
      id: 'lery-pt',
      autor: 'Jean de Léry',
      ano: '1578',
      titulo: 'História de uma viagem feita à terra do Brasil',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historiadeumavia00lery',
      idioma: 'pt',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte primária para o contexto huguenote da França Antártica e a memória reformada ligada à Confissão da Guanabara.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Texto integral em português da confissão que estrutura a identidade doutrinária presbiteriana.',
    },
    {
      id: 'breve-catecismo',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'O Breve Catecismo de Westminster',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Arquivos/Breve_Catecismo_de_Westminster.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Documento catequético oficial em português, útil para distinguir função confessional de função pedagógica.',
    },
    {
      id: 'wrf-statement-2011',
      autor: 'World Reformed Fellowship',
      ano: '2011',
      titulo: 'World Reformed Fellowship Statement of Faith',
      publicacao: 'World Reformed Fellowship',
      url: 'https://wrfnet.org/about/statement-of-faith',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota:
        'Fonte oficial para a declaração contemporânea da WRF, seus objetivos, sua relação com as confissões históricas e seu desenvolvimento posterior.',
    },
  ],
};
