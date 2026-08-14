import type { Verbete } from '../../tipos';

export const reforma: Verbete = {
  id: 'th03-reforma',
  disciplina: 'TH03',
  unidade: 1,
  titulo: 'A Reforma do Século XVI',
  subtitulo: 'Por que aconteceu quando aconteceu, e por que se dividiu em quatro',
  objetivo:
    'Ao final, você saberá por que tentativas anteriores de reforma fracassaram e a de Lutero não, o que distingue as quatro correntes reformadoras entre si, e por que a diferença entre Lutero e Calvino não é de temperamento mas de método.',
  atualizadoEm: '2026-08-14',
  verMais: ['th01-igreja-antiga', 'ts04-justificacao', 'te12-hermeneutica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Wycliffe pregou contra os abusos romanos no século XIV e traduziu a Bíblia para o inglês. Hus fez o mesmo na Boêmia e foi queimado em 1415. Savonarola incendiou Florença com pregação moral e acabou enforcado em 1498. Todos anteciparam temas que Lutero levantaria, e todos fracassaram. A pergunta histórica séria não é por que a Reforma aconteceu — é por que aconteceu em 1517, e não antes.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta não é que Lutero fosse mais corajoso que Hus. É que ele apareceu no primeiro momento em que uma convergência de condições tornou possível o que antes era abafado em poucos anos.',
    },
    { tipo: 'secao', titulo: 'As condições que mudaram', nivel: 2 },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'A imprensa. Gutenberg imprime por volta de 1450; em 1517 há prensas em todas as cidades alemãs importantes. As 95 teses circularam pela Alemanha em semanas — Hus dependia de cópias manuscritas, e o papel simplesmente não alcançava a autoridade.',
        'O humanismo. O lema ad fontes, "às fontes", produziu o Novo Testamento grego de Erasmo em 1516, um ano antes das teses. Sem ele, Lutero leria a Vulgata, onde metanoeite aparece como "fazei penitência" — e não como "arrependei-vos", que é o que a primeira das 95 teses explora.',
        'A fragmentação política alemã. O Sacro Império era um mosaico de príncipes ciosos de autonomia. Frederico, o Sábio, protegeu Lutero menos por convicção teológica que por não aceitar que Roma julgasse um súdito seu — o que dá a medida de quanto a Reforma dependeu de fatores que nada tinham de espirituais.',
        'O desgaste institucional. O Cisma do Ocidente havia exibido três papas simultâneos, e a venda de indulgências para financiar São Pedro tornara o escândalo econômico visível ao camponês.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale reter isso: nenhuma dessas quatro condições é teológica. A doutrina de Lutero não era mais verdadeira que a de Hus por ter vencido; ela venceu porque encontrou o momento em que podia circular. Confundir sucesso histórico com validade doutrinária é um erro que a própria Reforma, com sua doutrina da providência, estava bem equipada para evitar.',
    },
    { tipo: 'secao', titulo: 'A questão que estava por baixo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'As 95 teses tratam de indulgências, e é fácil supor que a Reforma tenha começado como protesto contra corrupção financeira. Não foi. A indulgência era apenas o ponto em que um problema mais fundo se tornava visível: se o perdão pode ser distribuído pela Igreja mediante condições que ela estabelece, então a justificação está nas mãos dela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Foi por isso que a controvérsia escalou tão rápido de indulgências para autoridade. Em Leipzig, em 1519, Eck forçou Lutero a admitir que concílios podem errar — e ali a discussão deixou de ser sobre uma prática abusiva e passou a ser sobre onde reside a autoridade final. Os dois princípios formulados depois não são duas teses independentes: são o mesmo movimento visto de dois lados.',
    },
    {
      tipo: 'termo',
      termo: 'Princípio material e princípio formal',
      texto:
        'O princípio material da Reforma é a justificação somente pela fé — o conteúdo em disputa. O princípio formal é a Escritura como autoridade suprema — o critério pelo qual a disputa se resolve. Um exige o outro: sem o formal, a justificação seria apenas mais uma opinião entre as autorizadas; sem o material, a autoridade da Escritura não teria sido posta à prova em nada decisivo.',
    },
    { tipo: 'secao', titulo: 'As quatro reformas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Falar da Reforma no singular é conveniente e enganoso. Houve quatro movimentos distintos, com relações ora de aliança, ora de hostilidade aberta.',
    },
    {
      tipo: 'controversia',
      titulo: 'As quatro correntes e o que as separa',
      posicoes: [
        {
          escola: 'Luterana',
          sintese:
            'Conserva na prática da Igreja tudo o que a Escritura não proíbe expressamente. Daí a manutenção de imagens, vestes e boa parte da liturgia medieval. A ruptura com Zuínglio em Marburgo (1529) sobre a presença de Cristo na Ceia impediu uma frente protestante unificada — e Lutero recusou o aperto de mão ao final.',
        },
        {
          escola: 'Reformada (Zuínglio, Bucero, Calvino)',
          sintese:
            'Admite na adoração apenas o que a Escritura positivamente ordena — o princípio regulador do culto. Por isso removeu imagens, órgãos e o calendário litúrgico onde os luteranos os mantiveram. É também a corrente que mais desenvolveu a doutrina da santificação e a organização eclesiástica presbiteral.',
        },
        {
          escola: 'Radical (anabatistas e espiritualistas)',
          sintese:
            'Rejeita o batismo infantil e a igreja territorial, defendendo comunidades de crentes voluntários separadas do Estado. Foi perseguida por católicos e protestantes. A tragédia de Münster (1534-35), com seus excessos milenaristas, marcou o movimento inteiro na percepção da época — injustamente, já que a maioria era pacifista.',
        },
        {
          escola: 'Inglesa',
          sintese:
            'Começa por um ato político — a Lei de Supremacia de 1534 — e só depois recebe conteúdo teológico, sobretudo com Cranmer e o Book of Common Prayer. Essa origem explica o caráter híbrido do anglicanismo e a insatisfação puritana posterior, que desembocaria na Assembleia de Westminster.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'Lutero e Calvino: método, não temperamento', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A comparação usual descreve Lutero como explosivo e Calvino como frio, e é superficial. A diferença real é de posição na história e de método.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Lutero é o rompedor. Sua teologia nasce do combate e mantém a forma do combate: fragmentária, ocasional, escrita contra alguém. Sua descoberta central é existencial — encontrou um Deus gracioso onde temia um juiz — e ele nunca deixa de escrever a partir daquele alívio.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Calvino pertence à segunda geração, e sua tarefa é outra: organizar o que já fora rompido. Humanista de formação, com primeira obra sobre Sêneca, ele traz para a teologia o método filológico e a exigência de ordem. As Institutas não são um manifesto — são um manual, escrito para que quem lesse a Bíblia soubesse o que procurar. Daí a diferença de tom: Lutero prega a partir de uma experiência; Calvino ensina a partir de um texto.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'A Reforma do século XVI',
      texto:
        'É o movimento pelo qual parte da cristandade ocidental, em condições historicamente favoráveis — a imprensa, o retorno humanista às fontes, a fragmentação política do império e o desgaste institucional de Roma —, submeteu a doutrina e a prática da Igreja ao juízo da Escritura, tomada como autoridade suprema acima de papas e concílios (princípio formal), e recuperou a justificação do pecador somente pela fé, mediante a justiça imputada de Cristo (princípio material); movimento que não foi um só, mas se realizou em quatro correntes distintas — luterana, reformada, radical e inglesa —, divergentes entre si quanto à extensão da reforma do culto, à relação com o poder civil e à natureza dos sacramentos.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há um uso ruim desta história e um bom. O ruim é o heroico: a Reforma como epopeia de gigantes contra vilões, que serve para alimentar identidade e desprezo. Ele não sobrevive ao contato com as fontes — os reformadores erraram gravemente, Lutero escreveu contra os judeus páginas que a Igreja luterana repudiou, Calvino consentiu na execução de Servet, e a divisão de Marburgo custou caro ao protestantismo. O uso bom é outro: perceber que Deus conduz a sua Igreja através de instrumentos falíveis e de circunstâncias que ninguém planejou — imprensa, política de príncipes, uma edição grega publicada no ano certo. Isso é a doutrina da providência aplicada à história, e ela protege de dois erros ao mesmo tempo: da ingenuidade de achar que a verdade vence sozinha, e do cinismo de achar que só as circunstâncias importam.',
    },
  ],
  fontes: [
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      ano: '1888',
      titulo: 'History of the Christian Church — os volumes sobre a Reforma',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A obra de Schaff cobre a Reforma alemã e a suíça em dois volumes, com as fontes primárias citadas em extensão. Domínio público — cobre integralmente o programa de TH03.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — edição definitiva',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A fonte primária da corrente reformada, e a melhor evidência do método de Calvino descrito acima. A epístola ao rei Francisco I, que abre a obra, é uma apologia do movimento inteiro.',
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
      nota: 'O desfecho puritano da reforma inglesa, e o padrão confessional que o presbiterianismo brasileiro herdou.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Útil para verificar as apelações dos reformadores à igreja antiga, que era terreno disputado com Roma.',
    },
  ],
};
