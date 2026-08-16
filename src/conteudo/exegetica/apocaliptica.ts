import type { Verbete } from '../../tipos';

export const apocaliptica: Verbete = {
  id: 'te55-apocaliptica',
  disciplina: 'TE55',
  unidade: 2,
  titulo: 'Teologia Apocalíptica',
  subtitulo: 'Por que cada geração identificou a besta com um contemporâneo, e por que todas erraram',
  objetivo:
    'Ao final, você saberá o que é o gênero apocalíptico e quais convenções ele pressupõe no leitor, entenderá por que números e feras funcionam ali de modo diferente do que funcionariam numa carta, distinguirá profecia de apocalipse sem traçar uma linha rígida entre as duas, saberá o que separa o Apocalipse de João das apocalipses não canônicas, e conhecerá as quatro escolas de interpretação com a força e a fraqueza de cada uma.',
  atualizadoEm: '2026-08-16',
  verMais: ['ts07-milenio', 'te12-hermeneutica', 'te15-teologia-biblica-nt'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Napoleão foi a besta. O Kaiser foi a besta. Hitler, Mussolini e Stálin foram a besta. Uma sucessão de papas foi a besta. Nas últimas décadas entraram na lista códigos de barra, cartões de crédito, chips e vários secretários-gerais.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada uma dessas identificações foi feita com sinceridade, por gente que lia a Bíblia com atenção e às vezes arriscava a reputação para anunciá-la. E todas erraram. Quando um método produz erro com essa regularidade, a regularidade é informação sobre o método.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O diagnóstico não é falta de piedade nem de inteligência. É que o leitor aplicou ao texto a convenção de leitura errada — leu como jornal cifrado um livro que pertence a outro gênero, e cujo gênero os primeiros destinatários reconheciam sem precisar que ninguém lhes explicasse.',
    },
    {
      tipo: 'secao',
      titulo: 'Gênero não é enfeite: é o que determina como o texto significa',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Todo leitor competente já faz esse ajuste dezenas de vezes sem perceber. Ninguém pergunta o sobrenome do bom samaritano nem tenta localizar a estrada no mapa para verificar a história. Ninguém lê "os montes saltaram como carneiros" como registro sísmico. Ninguém trata uma cláusula do Levítico como se fosse um provérbio.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A observação incômoda é esta: o mesmo leitor que jamais alegorizaria uma parábola frequentemente decodifica o Apocalipse como se cada imagem fosse um enigma com uma resposta jornalística. O critério que ele aplica ao resto da Bíblia é suspenso justamente onde mais faria falta.',
    },
    {
      tipo: 'definicao',
      termo: 'Literatura apocalíptica',
      texto:
        'Gênero literário que floresceu no judaísmo entre os séculos III a.C. e II d.C. e ao qual pertencem Daniel, o Apocalipse de João e trechos de outros livros. Caracteriza-se por relatar visões concedidas a um vidente e explicadas por um intérprete celeste, empregar imagens e números com valor simbólico convencionado, descrever a história como conflito entre poderes cósmicos e afirmar que Deus encerrará o presente século em favor dos seus. Dirige-se tipicamente a um grupo sob pressão, e sua função é reinterpretar o presente à luz do céu, não fornecer um calendário do futuro.',
    },
    {
      tipo: 'secao',
      titulo: 'As convenções, uma a uma',
    },
    {
      tipo: 'lista',
      itens: [
        'Visão mediada. O vidente não deduz: é levado, vê, e um anjo explica o que viu. Isso já indica que as imagens não são descrição direta — elas próprias precisam de interpretação dentro do texto, e o texto frequentemente a fornece. Em Apocalipse 1.20 o autor diz o que são os candeeiros e as estrelas; quem ignora essa chave interna procurará fora o que estava dentro.',
        'Números qualitativos. Sete indica completude, doze indica o povo de Deus, mil indica imensidão. Cento e quarenta e quatro mil é doze ao quadrado multiplicado por mil — a totalidade do povo de Deus, e não um censo. Ler esses números como quantidades é o mesmo erro de quem contasse os dias de "sete vezes setenta vezes".',
        'Feras para impérios. Daniel 7 vê quatro animais monstruosos e o próprio texto informa que são quatro reinos. A convenção estava dada: quando o Apocalipse mostra uma besta que sobe do mar, o leitor do primeiro século sabia que estava vendo um império, não um indivíduo com CPF.',
        'Conflito cósmico por trás do político. O gênero mostra que o que parece disputa de poder terreno tem outra camada — há um dragão atrás do trono. Isso não é fuga do mundo: é a afirmação de que a política importa mais, e não menos, do que o observador percebia.',
        'Os dois séculos. A estrutura já discutida em teologia bíblica do Novo Testamento aparece aqui em forma visual: o presente século está sob poderes que serão destronados, e o vindouro já foi decidido.',
      ],
    },
    {
      tipo: 'termo',
      termo: 'Apocalipse',
      texto:
        'Do grego *apokalypsis*, revelação, desvelamento — literalmente, tirar o véu de algo que estava coberto. É a primeira palavra do último livro da Bíblia e descreve o que ele faz: mostrar o que já está acontecendo, visto do lado de Deus. O uso corrente, que faz de apocalipse sinônimo de catástrofe e fim do mundo, inverteu o sentido do termo — e essa inversão, sozinha, já desorienta a leitura de quem chega ao livro esperando encontrar nele um noticiário do desastre.',
    },
    {
      tipo: 'secao',
      titulo: 'Profecia e apocalipse: parentes, não sinônimos',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As duas coisas se sobrepõem, e forçar uma separação rígida é um erro tão comum quanto confundi-las. Mas há uma diferença de função que ajuda a ler.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O profeta dirige-se ao povo da aliança e chama à conversão, e o futuro que ele anuncia costuma ser condicional: se não se converterem, virá o juízo; se se converterem, Deus se arrepende do mal. Jonas é o caso limite — a cidade se converte e a profecia não se cumpre, para irritação do profeta.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O apocalíptico dirige-se a quem já está sob perseguição e não tem poder de mudar a situação, e o que ele oferece não é uma condição a cumprir, e sim uma garantia: isto vai acabar, e Deus é quem acaba. A palavra do profeta é **mudem**; a palavra do apocalíptico é **suportem**. Daniel escreve para quem está no exílio; João, para igrejas pressionadas pelo culto imperial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Livros como Ezequiel, Zacarias e Isaías 24 a 27 ficam entre os dois, com visões e simbolismo apocalíptico dentro de livros proféticos. Isso não é problema de classificação: é indicação de que um gênero nasceu do outro.',
    },
    {
      tipo: 'secao',
      titulo: 'O que separa o Apocalipse das apocalipses',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A comparação com a literatura não canônica é obrigatória no estudo do gênero, e é também a parte mais instrutiva, porque revela por contraste o que o livro bíblico faz de diferente. Circularam no período obras como o Livro de Enoque, o Quarto Livro de Esdras e o Segundo Baruque, todas hoje acessíveis em tradução livre.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Elas compartilham o repertório: visões, anjos intérpretes, feras, números, o fim do século. E divergem num ponto estrutural. As apocalipses não canônicas são **pseudônimas** — atribuídas a figuras antigas e veneráveis que não as escreveram, o que permite ao autor narrar como profecia o que já era passado para ele.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Apocalipse não faz isso. É assinado por João, dirigido a sete igrejas nomeadas, numa província que o autor conhece, sobre uma pressão que ele mesmo está sofrendo — e começa e termina como carta. Quem lê os dois conjuntos lado a lado percebe que o livro bíblico usa o vocabulário do gênero sem adotar o expediente que o define em suas versões correntes.',
    },
    {
      tipo: 'secao',
      titulo: 'O que o livro estava fazendo pelos seus leitores',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Reúna as peças e o propósito aparece. Um cristão de Esmirna via o império como fato absoluto: o culto ao imperador organizava o comércio, a festa e a carreira, e recusá-lo custava o sustento e às vezes a vida. Roma parecia eterna, e a igreja, um punhado de gente sem importância.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O que o livro faz é levantar o véu sobre essa cena. O império não é eterno: é uma besta, com prazo. O trono que decide não é o de Roma. E a igreja perseguida, vista do céu, é uma multidão que ninguém pode contar. Nada disso informa quando algo vai acontecer — tudo isso reinterpreta o que já está acontecendo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí a resposta à pergunta da abertura. A besta é Roma — e é também cada império que depois dela exigiu o que só a Deus se deve. É por isso que o livro continua servindo a cristãos perseguidos em qualquer século, e é por isso que identificá-lo com um só homem é ao mesmo tempo compreensível e errado: quem acerta o alvo de uma geração perde o alvo de todas as outras.',
    },
    {
      tipo: 'controversia',
      titulo: 'As quatro escolas de interpretação do Apocalipse',
      posicoes: [
        {
          escola: 'Preterista',
          sintese:
            'O livro trata de eventos do primeiro século — a perseguição imperial e, em algumas versões, a queda de Jerusalém —, e falava primeiro aos seus destinatários originais. Tem a força de levar a sério que o autor escreveu a sete igrejas reais e esperava ser entendido por elas. A fraqueza é que, levada ao extremo, deixa o livro sem palavra sobre a consumação, que ele evidentemente anuncia.',
        },
        {
          escola: 'Historicista',
          sintese:
            'As visões traçam o curso da história da igreja desde o primeiro século até o fim, e cada selo ou taça corresponde a um período. Foi a leitura dominante entre os reformadores, o que explica a identificação do papado com o anticristo em documentos do período. A dificuldade é empírica: cada geração historicista refez o mapa para caber no seu próprio tempo, o que é sintoma de um método que não se deixa corrigir.',
        },
        {
          escola: 'Futurista',
          sintese:
            'A partir do capítulo 4, o livro descreve eventos ainda por vir, concentrados num período final. É a leitura mais difundida no evangelicalismo brasileiro. Preserva com seriedade a expectativa da consumação; corre o risco de esvaziar o livro para os seus primeiros leitores, que teriam recebido, sob perseguição, um material sobre um futuro remoto que não lhes servia de consolo imediato.',
        },
        {
          escola: 'Idealista',
          sintese:
            'As visões retratam o conflito permanente entre o reino de Deus e os poderes que se lhe opõem, aplicável a qualquer época sem se esgotar em nenhuma. Explica bem por que o livro consola cristãos de todos os séculos; corre o risco de dissolver as referências concretas ao primeiro século e a consumação futura em símbolo atemporal.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convém notar que as quatro não são inteiramente excludentes, e que as leituras reformadas mais sólidas costumam combinar elementos: o livro falou de fato à situação do primeiro século, retrata um conflito que se repete, e anuncia uma consumação real e futura. O que a tradição rejeita é o cronograma — a pretensão de extrair dali datas e sequências verificáveis no noticiário.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Se na sua igreja há entusiasmo por decifrar o Apocalipse, o caminho não é proibir o assunto nem ridicularizar quem se interessa — o interesse é legítimo e nasce de levar o livro a sério. O que ajuda é devolver o livro à sua função. Pergunte à classe o que aquelas visões faziam por um cristão de Esmirna que ia perder a loja por não queimar incenso ao imperador; e depois pergunte quem, na congregação, está hoje numa situação em que precisa ouvir a mesma coisa. Ali há gente perdendo emprego, tratando doença sem prognóstico, criando filho sozinha. O Apocalipse foi escrito para essas pessoas, e a leitura de calendário — além de errar sempre — lhes rouba exatamente aquilo que o livro tinha para dar. Vale registrar, por fim, que Calvino comentou quase todos os livros da Bíblia e não escreveu sobre este. Não temos como saber a razão; mas a reticência de alguém que raramente hesitava é um bom conselho para quem fala do Apocalipse com certeza excessiva.',
    },
  ],
  fontes: [
    {
      id: 'charles-enoque',
      autor: 'R. H. Charles (trad.)',
      ano: '1912',
      titulo: 'The Book of Enoch, or 1 Enoch',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/bookofenochor1en00char',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'A apocalipse judaica não canônica mais importante do período, em tradução do editor do texto etíope. Serve exatamente ao propósito da unidade sobre literatura apocalíptica não canônica: permite ao estudante ver o gênero em ação fora do cânon e comparar por conta própria, em vez de aceitar a descrição de um manual. Domínio público.',
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
      nota: 'Estabelece a estrutura dos dois séculos que a apocalíptica pressupõe e representa em imagens — o pano de fundo teológico sem o qual as visões viram enigma solto. Domínio público.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers — os padres anteriores a Niceia',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Permite verificar como os cristãos dos dois primeiros séculos liam o Apocalipse, quando a distância cultural em relação ao gênero ainda era pequena — inclusive o quiliasmo de Justino e de Irineu.',
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
      nota: 'Os capítulos XXXII e XXXIII, sobre o estado dos homens após a morte e o juízo final, mostram o que a tradição reformada de fato afirma sobre a consumação — e a sobriedade do que ela deixa de afirmar.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion (trad. Beveridge)',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O Livro III, cap. XXV, trata da ressurreição final com a contenção característica de quem comentou quase toda a Bíblia e deixou o Apocalipse de fora. Hospedado na CCEL, que recusa IPs de nuvem: a auditoria automática não confirma daqui, mas o endereço abre normalmente no navegador.',
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
      nota: 'Reúne textos em português sobre escatologia e sobre as escolas de interpretação do Apocalipse, úteis para ouvir cada posição defendida por quem a sustenta.',
    },
  ],
};
