import type { Verbete } from '../../tipos';

export const metodologiaExegetica: Verbete = {
  id: 'te16-metodologia-exegetica',
  disciplina: 'TE16',
  unidade: 1,
  titulo: 'Metodologia da Pesquisa Exegética',
  subtitulo:
    'O versículo mais pregado errado do Brasil tem a correção escrita duas linhas acima dele',
  objetivo:
    'Ao final, você saberá em que a exegese difere da hermenêutica, executará os passos na ordem — perícope, texto, contexto, análise, teologia, aplicação —, saberá por que a aplicação vem por último e o que acontece quando ela vem primeiro, e reconhecerá os erros de estudo de palavra que sobrevivem porque parecem eruditos.',
  atualizadoEm: '2026-08-16',
  verMais: ['te12-hermeneutica', 'te52-manuscritologia', 'tp15-pregacao-generos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Poucas frases da Bíblia circulam mais no Brasil do que "posso todas as coisas naquele que me fortalece". Ela aparece em prova de vestibular, em camisa de time, em cartaz de campanha financeira, e o sentido que carrega em todos esses lugares é o mesmo: com Deus, você consegue o que se propuser.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A correção não exige grego, nem comentário, nem erudição nenhuma. Está escrita duas linhas acima, e quem lê a página inteira não tem como não ver.',
    },
    {
      tipo: 'passagem',
      referencia: 'Filipenses 4.11-13',
      texto:
        'Aprendi a viver contente em toda e qualquer situação. Sei o que é passar necessidade e sei o que é ter fartura... tanto a ter fartura como a passar fome, tanto a ter abundância como a padecer necessidade. Tudo posso naquele que me fortalece.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O "tudo" que Paulo pode é passar fome sem perder a alegria. A promessa não é de conseguir o que se quer: é de sobreviver espiritualmente a não conseguir. E o mais instrutivo do caso não é o erro, é como ele se sustenta — ninguém precisa mentir sobre o versículo para pregá-lo errado. Basta lê-lo sozinho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O que separa a leitura certa da errada, aqui, não é piedade nem inteligência. É **procedimento**: ter ou não ter um passo que obriga a olhar o que vem antes antes de decidir o que o texto diz.',
    },
    {
      tipo: 'secao',
      titulo: 'Em que isto difere da hermenêutica',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção costuma ser apresentada como formalidade de programa, e é mais que isso. A hermenêutica estabelece os princípios: que o sentido é o literal, que a Escritura interpreta a Escritura, que nenhuma parte pode ser lida contra o conjunto da fé. Ela responde à pergunta **por que se interpreta assim**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A exegese é o trabalho de aplicar isso a um texto determinado, numa terça-feira, com um prazo. Responde à pergunta **o que faço agora, e em que ordem**. Ter os princípios certos e nenhum procedimento é a situação mais comum entre pregadores formados — e é exatamente a situação em que se prega Filipenses 4.13 ao contrário sem violar princípio nenhum conscientemente.',
    },
    {
      tipo: 'definicao',
      termo: 'Exegese',
      texto:
        'Trabalho de extrair do texto o que ele diz, conduzido por passos verificáveis e na ordem em que cada um depende do anterior: delimitar a unidade, estabelecer o que se vai ler, situá-la no seu contexto, analisar a sua estrutura e as suas palavras, e só então perguntar o que ela ensina e o que exige. O oposto é a eisegese, que introduz no texto o sentido que já se trazia — e que raramente se apresenta como tal, porque quem a pratica costuma estar convicto de ter lido.',
    },
    {
      tipo: 'secao',
      titulo: 'Primeiro passo: achar onde a unidade começa e termina',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Antes de perguntar o que um texto diz, é preciso saber que texto é. E aqui há um fato que raramente se ensina cedo o bastante: **as divisões de capítulo e versículo não são inspiradas**. Os capítulos vêm do século XIII e os versículos de uma edição impressa do século XVI. São grade de referência, não estrutura do argumento — e às vezes cortam no meio.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A unidade real chama-se **perícope**, e acha-se por sinais internos: mudança de assunto, de lugar, de interlocutor ou de tempo verbal; fórmulas de abertura e de fechamento; retomada de um termo que marca começo e fim. Uma perícope mal delimitada estraga tudo o que vem depois, porque o contexto que se vai consultar já será o errado.',
    },
    {
      tipo: 'secao',
      titulo: 'Segundo passo: saber que texto se está lendo',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum autógrafo sobreviveu, e as cópias divergem em pontos que o leitor de uma tradução não percebe — a menos que compare. Este passo não exige do estudante que resolva variantes: exige que ele saiba quando há uma.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O instrumento mais barato é a comparação de traduções. Onde duas versões honestas divergem de modo mais que estilístico, ou onde uma traz nota de rodapé dizendo que manuscritos antigos omitem o trecho, alguma coisa está acontecendo no original — e pregar sobre exatamente essa frase, sem saber disso, é construir sobre terreno que pode não estar lá. O verbete de manuscritologia trata do assunto; aqui basta a regra prática: **antes de pregar sobre uma frase, verifique se ela é textualmente firme.**',
    },
    {
      tipo: 'secao',
      titulo: 'Terceiro passo: os contextos, do mais próximo ao mais amplo',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem importa, e é do mais próximo para o mais distante — porque o mais próximo resolve a maioria dos casos e custa menos. Foi o contexto próximo que corrigiu Filipenses 4.13, e é ele que a pressa costuma pular.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Contexto próximo: os parágrafos imediatamente antes e depois. Pergunte o que o autor estava fazendo quando chegou a esta frase.',
        'Contexto remoto e do livro inteiro: qual o propósito da obra, a quem foi escrita, que problema ela responde. Uma frase de Gálatas e a mesma frase em Tiago pesam diferente porque os livros combatem erros opostos.',
        'Contexto histórico e cultural: o que o primeiro leitor sabia e nós não. Aqui entram costume, economia, política, geografia — e aqui é onde o intérprete moderno mais projeta o próprio mundo sem perceber.',
        'Contexto canônico: como o restante da Escritura trata o assunto, e como o Novo Testamento lê este texto quando o lê. É o passo que mais exige cuidado, e a controvérsia adiante mostra por quê.',
      ],
    },
    {
      tipo: 'secao',
      titulo: 'Quarto passo: a análise, e as armadilhas que parecem erudição',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A análise do texto olha a estrutura — como o argumento se articula, o que é afirmação principal e o que é subordinada — e as palavras que carregam peso. É a parte que mais impressiona no púlpito e a que mais produz erro, porque três procedimentos falsos soam exatamente como estudo sério.',
    },
    {
      tipo: 'lista',
      itens: [
        'A **etimologia como sentido**: dizer que a palavra "significa realmente" o que a sua origem sugere. Uso não é origem — "embaraço" não guarda nada de barcos, e *dýnamis* não faz de Romanos 1.16 uma promessa de dinamite.',
        'A **transferência total de sentido**: reunir todos os sentidos que uma palavra tem na Bíblia e despejá-los sobre esta ocorrência. Numa frase, a palavra tem o sentido que o contexto seleciona — um, não todos.',
        'O **argumento a partir do que não está escrito**: construir sobre um tempo verbal, uma preposição ou um artigo mais peso do que a língua suporta. Se a conclusão depende inteiramente de um detalhe gramatical que nenhuma tradução refletiu, desconfie primeiro da conclusão.',
      ],
    },
    {
      tipo: 'secao',
      titulo: 'Quinto passo: teologia e aplicação, e por que ficam no fim',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Só depois de saber o que o texto diz é que se pergunta o que ele ensina: o que acrescenta à teologia bíblica do seu próprio livro e do cânon, como se articula com o que a Sistemática afirma, e o que exige de quem o lê hoje.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem não é preciosismo acadêmico, e a razão é psicológica antes de ser metodológica. Quem decide a aplicação primeiro não deixa de fazer os outros passos — faz todos, e faz bem, só que como defesa. O contexto passa a ser consultado para confirmar, as palavras a ser estudadas até darem o resultado desejado, e o resultado é uma exegese formalmente correta em cada etapa e falsa no todo. **O sinal de que isso aconteceu é nunca ter sido surpreendido pelo texto.** Quem trabalha na ordem certa muda de ideia com alguma frequência; quem trabalha ao contrário nunca precisa.',
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto do sentido o autor humano precisava saber',
      posicoes: [
        {
          escola: 'Só a intenção do autor humano',
          sintese:
            'O sentido do texto é o que o autor quis dizer e podia dizer no seu tempo; o resto é aplicação, não sentido. Tem a favor a única defesa realmente eficaz contra a leitura arbitrária: um critério público, verificável, que impede que qualquer texto signifique qualquer coisa. Contra si, tem os apóstolos — o Novo Testamento lê o Antigo com frequência de um modo que o profeta dificilmente teria reconhecido, e essa posição, levada a sério, precisa explicar por que os autores inspirados não a seguiram.',
        },
        {
          escola: 'Sentido pleno',
          sintese:
            'Deus, autor último, quis no texto mais do que o autor humano compreendeu, e esse excedente é sentido genuíno, não invenção do intérprete. Tem a favor a prática apostólica e a unidade de um livro cujo autor é um só. Contra si, a dificuldade de dizer quem, além dos apóstolos, tem acesso a esse excedente — sem um critério, a posição autoriza no pregador comum o que só se justificava na inspiração, e a história da exegese alegórica mostra aonde isso chega.',
        },
        {
          escola: 'Sentido único, lido no cânon inteiro',
          sintese:
            'O sentido é um só e é o do texto; o que a leitura canônica acrescenta não é um segundo sentido, é a percepção de para onde o primeiro apontava, tornada visível pelo cumprimento. É a posição deste portal, e a que a Confissão sustenta ao afirmar que o sentido da Escritura é um. O preço é que ela empurra toda a dificuldade para um único ponto — quando uma leitura canônica revela o texto e quando o cobre —, e nesse ponto o método não decide sozinho: decide o conjunto da Escritura, que é precisamente o que estava sendo interpretado.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma objeção honesta a tudo isto, e ela vem de quem tem uma igreja pequena, um emprego secular e dois cultos por semana: não há tempo. A objeção é real e a resposta não é fingir que há. É que o método rende mais justamente quando o tempo é curto, porque ele diz em que ordem gastar o pouco que existe — e as duas horas mal gastas são quase sempre as que se passam procurando ilustração e aplicação para uma leitura que ainda não foi verificada. Delimitar a perícope custa cinco minutos. Ler os dois parágrafos vizinhos custa mais cinco. Comparar duas traduções custa outros cinco. Quinze minutos cobrem a maior parte dos erros que envergonham um pregador depois, e nenhum deles exige grego. E há um ganho que só aparece com o tempo: a congregação que vê o pregador ser corrigido pelo texto — dizer, do púlpito, que entendia esta passagem de outro modo e que o texto não permite — aprende com esse gesto mais sobre a autoridade da Escritura do que com uma série inteira de sermões sobre bibliologia. O propósito de tudo isso, afinal, não é produzir exegetas: é que o povo ouça o que Deus disse, e não o que o seu pastor já pensava antes de abrir o livro.',
    },
    {
      tipo: 'lista',
      itens: [
        'Comece pela perícope, não pelo versículo. Se o seu texto é um versículo isolado, você ainda não sabe se ele é uma unidade.',
        'Leia o parágrafo anterior e o seguinte antes de formar qualquer opinião. É o passo mais barato e o que corrige mais erros.',
        'Compare duas traduções honestas. Divergência que não seja de estilo é aviso de que algo está acontecendo no original.',
        'Escreva o que você acha que o texto diz antes de abrir qualquer comentário — e depois anote onde os comentários o contradisseram. Essa lista é a medida do seu progresso.',
        'Desconfie de conclusão que dependa só de etimologia, só de um tempo verbal, ou só de uma preposição.',
        'Deixe a aplicação por último, e desconfie de você mesmo quando o texto nunca o surpreender.',
      ],
    },
  ],
  fontes: [
    {
      id: 'fairbairn-hermeneutica',
      autor: 'Patrick Fairbairn',
      ano: '1858',
      titulo: 'Hermeneutical Manual: Introduction to the Exegetical Study of the Scriptures of the New Testament',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/hermeneuticalma00fair',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Manual reformado escrito por um professor da Free Church of Scotland, e o mais próximo que há de um livro-texto desta disciplina em domínio público. O foco é o estudo exegético do Novo Testamento, com tratamento extenso do uso do Antigo Testamento pelos apóstolos — que é justamente o ponto em que a controvérsia deste verbete se decide.',
    },
    {
      id: 'terry-hermeneutica',
      autor: 'Milton Spenser Terry',
      ano: '1883',
      titulo: 'Biblical Hermeneutics: A Treatise on the Interpretation of the Old and New Testaments',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/biblicalhermeneu00terr',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratado que serviu de padrão por quase um século, e o mais completo em domínio público: análise gramatical, contexto histórico, tipos, profecia e gêneros, com exemplos trabalhados. Terry é metodista e não reformado — diverge em escatologia e no tratamento dos tipos —, o que não compromete a parte metodológica, mas é razão para ler comparando com Fairbairn.',
    },
    {
      id: 'calvino-romanos',
      autor: 'João Calvino',
      ano: '1540',
      titulo: 'Commentary on Romans — epístola dedicatória a Simon Grynaeus',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/calcom38.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A epístola dedicatória enuncia em duas páginas o programa do método: a virtude do intérprete é a "clareza breve", e o seu ofício é expor a mente do escritor, não exibir a própria. Vale ler antes de qualquer manual — é o texto que explica por que os passos existem.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 9 é a base confessional da controvérsia deste verbete: o sentido da Escritura não é múltiplo, e sim um, e onde uma passagem é obscura ela se esclarece por outras que falem com mais clareza. É o texto que autoriza a leitura canônica e ao mesmo tempo lhe põe limite.',
    },
    {
      id: 'westcott-hort',
      autor: 'B. F. Westcott e F. J. A. Hort',
      ano: '1881',
      titulo: 'The New Testament in the Original Greek: Introduction and Appendix',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/newtestamentinor82west',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Para o segundo passo. A introdução explica como se pesa uma variante e por que a contagem de manuscritos não decide nada sozinha — o que basta para o estudante entender o que uma nota de rodapé da sua Bíblia está dizendo.',
    },
    {
      id: 'watts-improvement',
      autor: 'Isaac Watts',
      ano: '1741',
      titulo: 'The Improvement of the Mind',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/suppimproveofmin00wattuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratado sobre método de estudo e leitura, escrito para quem estuda sozinho e sem biblioteca. Os capítulos sobre ler autores com quem se discorda e sobre reconhecer os próprios preconceitos são o antídoto direto do erro que este verbete chama de fazer os passos como defesa.',
    },
    {
      id: 'matthew-henry',
      autor: 'Matthew Henry',
      ano: '1710',
      titulo: 'An Exposition of the Old and New Testament',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/expositionofoldn11henr',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Comentário integral em domínio público, útil aqui como banco de exemplos: acompanhe um trecho que você já trabalhou e compare os seus passos com os dele. Serve para o exercício de anotar onde o comentário contradisse a sua leitura.',
    },
  ],
};
