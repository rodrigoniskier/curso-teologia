import type { Verbete } from '../../tipos';

export const prolegomenos: Verbete = {
  id: 'ts01-prolegomenos',
  disciplina: 'TS01',
  unidade: 1,
  titulo: 'O que é Teologia Sistemática',
  subtitulo: 'Prolegômenos: os princípios que governam o falar sobre Deus',
  objetivo:
    'Ao final, você saberá o que é um principium, por que a Teologia Reformada distingue o princípio do ser do princípio do conhecer, e o que exatamente se está afirmando quando se chama a Teologia de ciência.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-revelacao', 'ts01-inspiracao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Há uma pergunta que precede todas as outras, e que quase nunca é feita. Antes de perguntar o que Deus é, o que Ele fez, ou o que Ele exige, é preciso perguntar uma coisa mais elementar: com que direito falamos d\'Ele? Quem autorizou a criatura a abrir a boca sobre o Criador? Esta é a pergunta dos prolegômenos — literalmente, "as coisas ditas antes".',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta não é óbvia. Se Deus é infinito e nós somos finitos, qualquer frase que digamos sobre Ele já é, em algum grau, pequena demais. E se somos pecadores, nossa própria disposição de julgar a Deus está viciada na raiz. A teologia começa, portanto, não com confiança, mas com um problema. Ignorar esse problema produz um discurso religioso seguro de si e teologicamente irresponsável. Encará-lo é o primeiro ato da disciplina.',
    },
    { tipo: 'secao', titulo: 'O problema: uma ciência cujo objeto não pode ser objeto', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Toda ciência trabalha com um objeto que ela pode, de algum modo, submeter a exame. O botânico corta a folha. O historiador confronta os documentos. O objeto se deixa manusear pelo sujeito que o investiga. Aqui está a anomalia da teologia: o seu objeto não se deixa manusear. Deus não está disponível para inspeção. Ele não é uma região da realidade que possamos circundar e medir; Ele é aquele de quem toda a realidade depende.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Segue-se algo decisivo: em teologia, o sujeito que conhece nunca está acima do objeto conhecido. Estamos sempre por baixo. Só sabemos o que nos foi permitido saber. Por isso a teologia é a única ciência em que a virtude intelectual primária não é a ousadia, mas a reverência — e em que a arrogância não é apenas um defeito moral, mas um erro de método.',
    },
    { tipo: 'secao', titulo: 'A solução escolástica: a doutrina dos princípios', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Os teólogos reformados dos séculos XVI e XVII resolveram o impasse com um instrumento herdado da tradição escolástica: a doutrina dos principia. Um principium é aquilo de que algo procede — o ponto de partida do qual uma realidade ou um conhecimento deriva. A distinção fundamental está entre o princípio de onde a coisa é e o princípio de onde a coisa é conhecida.',
    },
    {
      tipo: 'termo',
      termo: 'Principium essendi',
      texto:
        'O princípio do ser: a fonte da qual a teologia existe. Este é o próprio Deus. A teologia não existe porque teólogos a inventaram; existe porque Deus é, e porque Ele é cognoscível em si mesmo. Deus se conhece perfeitamente — é a chamada teologia arquetípica.',
    },
    {
      tipo: 'termo',
      termo: 'Principium cognoscendi externum',
      texto:
        'O princípio externo do conhecer: o meio pelo qual esse conhecimento chega até nós. Este é a Escritura Sagrada. Nossa teologia é ectípica — uma cópia acomodada, verdadeira mas não exaustiva, do que Deus sabe de si.',
    },
    {
      tipo: 'termo',
      termo: 'Principium cognoscendi internum',
      texto:
        'O princípio interno do conhecer: aquilo que torna o sujeito capaz de receber o que a Escritura diz. Este é o Espírito Santo, iluminando o entendimento. Sem ele, o texto é lido e não é ouvido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que essa arquitetura de três termos realiza. Ela impede dois erros opostos. Contra o racionalismo, nega que a razão humana seja um principium: a razão é instrumento, nunca fonte. Contra o misticismo, nega que a experiência interior seja autônoma: o Espírito não fala independentemente da Palavra que Ele mesmo inspirou. A teologia reformada é, por construção, ao mesmo tempo objetiva e espiritual.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas da Religião Cristã, I.1.1',
      fonteId: 'calvino-institutas',
      texto:
        'Quase toda a soma de nossa sabedoria, que verdadeiramente se deva ter por sabedoria verdadeira e sólida, consta de duas partes: o conhecimento de Deus e de nós mesmos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A frase de abertura das Institutas não é um floreio retórico. Ela estabelece que o conhecimento de Deus e o conhecimento de si são inseparáveis e mutuamente reveladores: não se pode contemplar a santidade de Deus sem descobrir a própria miséria, nem medir a própria miséria sem já pressupor a santidade que a mede. A teologia, portanto, nunca é neutra. Ela sempre implica o teólogo.',
    },
    { tipo: 'secao', titulo: 'Em que sentido a teologia é uma ciência', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Chamar a teologia de ciência exige cuidado, porque a palavra mudou de sentido. No uso moderno, "ciência" costuma significar o método empírico das ciências naturais — e nesse sentido restrito a teologia claramente não é ciência, pois seu objeto não é empiricamente acessível.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas há um sentido mais antigo e mais amplo, o de scientia: um corpo de conhecimento organizado a partir de princípios próprios, com objeto definido, método coerente e conclusões demonstráveis dentro desses princípios. Nesse sentido, a teologia é ciência — e é ciência exatamente do mesmo modo que a matemática é ciência sem ser empírica: ela procede a partir de princípios que não demonstra, mas recebe.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Objeto próprio: Deus, e todas as coisas em sua relação com Deus.',
        'Princípio próprio: a Escritura como revelação verbal e infalível.',
        'Método próprio: exegese, síntese, formulação dogmática, verificação confessional.',
        'Fim próprio: não a acumulação de dados, mas o conhecimento de Deus que resulta em adoração e obediência.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O quarto item é o que separa a teologia de um exercício meramente acadêmico. A tradição reformada insistiu que a teologia é uma disciplina prática, ou melhor, teórico-prática: ela não termina no intelecto. Uma teologia que produz erudição sem produzir piedade falhou segundo o seu próprio critério.',
    },
    { tipo: 'secao', titulo: 'Sistemática, bíblica, histórica: uma divisão de trabalho', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Teologia Sistemática não é a única forma de organizar o conteúdo da revelação, e não é a primeira. Ela pressupõe as outras e depende delas.',
    },
    {
      tipo: 'lista',
      itens: [
        'A Teologia Exegética pergunta: o que este texto, nesta língua, neste contexto, diz?',
        'A Teologia Bíblica pergunta: como a revelação se desenvolveu ao longo da história redentiva, de Gênesis ao Apocalipse?',
        'A Teologia Histórica pergunta: como a Igreja compreendeu isso ao longo dos séculos, e onde errou?',
        'A Teologia Sistemática pergunta: reunindo tudo o que a Escritura ensina sobre um tema, qual é a doutrina?',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem é significativa. A sistemática vem por último porque é sintética: ela colhe. Uma sistemática que não se alimenta continuamente da exegese degenera em especulação, e uma que ignora a história repete erros já sepultados. É por isso que o currículo dos seminários presbiterianos organiza esses departamentos lado a lado, e não em compartimentos estanques.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Teologia Sistemática',
      texto:
        'É a ciência que, tomando a Escritura Sagrada como seu princípio externo de conhecimento e a iluminação do Espírito Santo como seu princípio interno, reúne e ordena logicamente tudo quanto a revelação divina ensina acerca de Deus e de todas as coisas em relação a Deus, a fim de que a Igreja O conheça verdadeiramente — ainda que não exaustivamente — e por esse conhecimento O adore e Lhe obedeça.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada cláusula dessa definição foi conquistada acima. "Ciência", porque procede metodicamente a partir de princípios. "Escritura como princípio externo", porque não inventamos nosso objeto. "Iluminação do Espírito", porque o texto exige um leitor renovado. "Verdadeiramente, ainda que não exaustivamente", porque a teologia ectípica é real sem ser total. "Adore e obedeça", porque o fim não é o sistema.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Prolegômenos parecem a parte mais árida do currículo, e são a mais protetora. Quem entende que sua teologia é ectípica ganha ao mesmo tempo confiança e humildade: confiança, porque o que Deus disse é verdadeiro e suficiente para a salvação e a vida; humildade, porque nenhum sistema — nem o mais reformado — esgota a Deus. Essa combinação é rara. Ela impede tanto o ceticismo de quem acha que nada se pode saber quanto a soberba de quem acha que já sabe tudo. Diante do mistério que resta, o teólogo maduro não se irrita: ele adora.',
    },
    {
      tipo: 'passagem',
      referencia: 'Deuteronômio 29.29',
      texto:
        'As coisas encobertas pertencem ao Senhor nosso Deus, porém as reveladas nos pertencem, a nós e a nossos filhos, para sempre, para que cumpramos todas as palavras desta lei.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Este versículo é o prolegômeno bíblico por excelência. Ele traça a fronteira entre o oculto e o revelado, atribui o oculto a Deus, entrega o revelado à Igreja — e declara o propósito da entrega: não a curiosidade, mas a obediência. Toda a doutrina dos princípios está contida ali, em uma linha.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion (trad. Henry Beveridge)',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Texto integral da edição definitiva de 1559. O Livro I abre exatamente com a duplicidade do conhecimento de Deus e de si mesmo.',
    },
    {
      id: 'calvino-institutas-pdf',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'The Institutes of the Christian Religion — PDF integral',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/institutes/formats/institutes.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Mesma tradução em arquivo único, útil para leitura offline e citação por página.',
    },
    {
      id: 'bavinck-dogmatics',
      autor: 'Herman Bavinck',
      ano: '1895',
      titulo: 'Reformed Dogmatics (4 volumes) — vol. 1: Prolegomena',
      publicacao: 'Monergism',
      url: 'https://www.monergism.com/reformed-dogmatics-ebook',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A exposição clássica moderna da doutrina dos principia. Bavinck é a fonte por trás da estrutura de três princípios apresentada acima.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — texto em português',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O capítulo I trata da Escritura Sagrada e é o correspondente confessional direto da doutrina dos princípios.',
    },
    {
      id: 'cfw-braga',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'A Confissão de Fé de Westminster',
      publicacao: 'Igreja Cristã Presbiteriana de Braga (Portugal)',
      url: 'https://www.icpbraga.pt/documentos/cfw',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Edição portuguesa, útil para cotejo de tradução com a brasileira.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de textos reformados em português',
      publicacao: 'monergismo.com',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'O maior acervo lusófono de textos reformados traduzidos. Base para leitura complementar em quase todos os verbetes deste portal.',
    },
  ],
};
