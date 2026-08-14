import type { Verbete } from '../../tipos';

export const canonAT: Verbete = {
  id: 'te01-canon-at',
  disciplina: 'TE01',
  unidade: 5,
  titulo: 'A Formação do Cânon do Antigo Testamento',
  subtitulo: 'Quem decidiu quais livros são Escritura — e por que a pergunta está mal feita',
  objetivo:
    'Ao final, você saberá a diferença entre canonicidade e reconhecimento, a estrutura tríplice do cânon hebraico e o que ela implica, por que os antilegômenas foram discutidos, e qual é de fato o argumento reformado contra os apócrifos.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-inspiracao', 'te12-hermeneutica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A objeção chega quase sempre na mesma forma: a Bíblia é o resultado de concílios que escolheram alguns livros e descartaram outros, logo o cânon é uma decisão eclesiástica e a autoridade real está na Igreja, não no texto. Se isso for verdade, a doutrina da suficiência da Escritura desaba, porque quem escolheu o critério está acima do escolhido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta não é negar que houve reconhecimento histórico — houve, e foi gradual. É observar que a pergunta confunde duas coisas distintas.',
    },
    { tipo: 'secao', titulo: 'Canonicidade e reconhecimento', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'Canonicidade',
      texto:
        'A propriedade que um livro tem de ser Palavra de Deus. Decorre da inspiração e é anterior a qualquer decisão humana: um livro é canônico no instante em que é escrito, porque procede de Deus. Ninguém a confere.',
    },
    {
      tipo: 'termo',
      termo: 'Reconhecimento (recepção)',
      texto:
        'O ato pelo qual o povo de Deus identifica e recebe como Escritura aquilo que já é Escritura. É histórico, gradual e falível em seu processo, ainda que providencialmente conduzido. A Igreja não constitui o cânon; ela o atesta.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A analogia clássica é a de Bavinck: o cânon não é como uma lei promulgada por uma assembleia, mas como uma lei da natureza descoberta por cientistas. A gravidade não passou a existir quando Newton a formulou, e não seria menos real se ele tivesse errado. A pergunta "quem decidiu?" pressupõe o modelo errado desde a primeira palavra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar um dado histórico que costuma surpreender: no caso do Antigo Testamento, não houve concílio constituinte. Nenhuma assembleia judaica se reuniu para votar a lista. O que se encontra é um reconhecimento difuso e antigo, já consolidado quando as primeiras discussões documentadas aparecem.',
    },
    { tipo: 'secao', titulo: 'A estrutura tríplice', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O cânon hebraico organiza-se em três seções, e a divisão não é arbitrária — reflete ordem de recepção e função.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Torá (Lei) — os cinco livros de Moisés. Nunca houve dúvida sobre eles em parte alguma do judaísmo.',
        'Nevi\'im (Profetas) — divididos em anteriores (Josué a Reis, que nós chamamos de históricos) e posteriores (Isaías, Jeremias, Ezequiel e os Doze).',
        'Ketuvim (Escritos) — Salmos, Provérbios, Jó, os cinco rolos festivos, Daniel, Esdras-Neemias e Crônicas.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'As iniciais dessas três palavras formam o acrônimo TaNaK, o nome judaico das Escrituras. E a estrutura aparece no Novo Testamento: Jesus fala da "Lei de Moisés, os Profetas e os Salmos" (Lc 24.44) — sendo os Salmos o primeiro e maior livro dos Escritos, usado para nomear a seção inteira. A tripartição, portanto, já era corrente no primeiro século.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Outro indício está em Lucas 11.51, onde Jesus fala do sangue derramado "desde Abel até Zacarias". Abel morre em Gênesis, o primeiro livro; e o Zacarias assassinado no pátio do templo aparece em 2 Crônicas 24 — que é o último livro do cânon hebraico, embora não do nosso. A expressão equivale a "de Gênesis a Malaquias" no nosso arranjo: Jesus delimita a extensão de uma coleção já fechada.',
    },
    { tipo: 'secao', titulo: 'Os antilegômenas: os livros discutidos', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'Antilegômenas',
      texto:
        'Literalmente "os contraditos": livros cuja canonicidade foi objeto de discussão entre rabinos, sobretudo nas escolas de Shammai e Hillel e depois em Jâmnia (c. 90 d.C.). Os principais são Ester, Eclesiastes, Cântico dos Cânticos, Provérbios e Ezequiel.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'É importante entender a natureza dessas objeções, porque não eram sobre origem divina. Discutia-se Ester por não mencionar o nome de Deus; Eclesiastes por conter afirmações aparentemente pessimistas; Cântico dos Cânticos por sua linguagem erótica; Ezequiel por tensões entre suas prescrições rituais e a Torá. Eram dificuldades de conteúdo e uso litúrgico, levantadas sobre livros que já circulavam como Escritura.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convém também desfazer um mito frequente: Jâmnia não foi um concílio que fixou o cânon. Foi uma escola rabínica onde tais questões foram debatidas, e a erudição atual reconhece que ela não teve autoridade constituinte nem produziu decisão vinculante. O cânon que se discutia já era o cânon recebido.',
    },
    { tipo: 'secao', titulo: 'Os apócrifos, e qual é realmente o argumento', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'Os livros deuterocanônicos pertencem ao Antigo Testamento?',
      posicoes: [
        {
          escola: 'Roma (definido em Trento, 1546)',
          sintese:
            'Tobias, Judite, Sabedoria, Eclesiástico, Baruque e 1-2 Macabeus, mais acréscimos a Ester e Daniel, são canônicos. Argumenta-se com a Septuaginta, que os continha, e com o uso patrístico — Agostinho os aceitava.',
        },
        {
          escola: 'Ortodoxia oriental',
          sintese:
            'Recebe-os com estatuto reconhecidamente distinto, chamando-os frequentemente de anaginoskomena, "os que se leem" — proveitosos para leitura sem serem base de doutrina.',
        },
        {
          escola: 'Reforma',
          sintese:
            'Não são canônicos. O argumento decisivo não é o conteúdo dos livros, mas quem os reconhecia: a comunidade a quem "foram confiados os oráculos de Deus" (Rm 3.2) é Israel — e o judaísmo nunca os incluiu em seu cânon. Acrescente-se que Jesus e os apóstolos, que citam o Antigo Testamento centenas de vezes, jamais citam um deuterocanônico como Escritura; e que Jerônimo, o maior hebraísta antigo, os distinguiu explicitamente na Vulgata.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale ser justo com a posição contrária em dois pontos. Primeiro, esses livros têm valor histórico real — 1 Macabeus é a principal fonte sobre o período intertestamentário, e a Reforma nunca negou isso: a Confissão diz que podem ser aprovados ou usados como quaisquer outros escritos humanos. Segundo, Agostinho de fato os aceitava, e a questão só foi definida dogmaticamente por Roma em Trento, em resposta à Reforma — o que significa que, por quinze séculos, a divergência sobre eles conviveu dentro da Igreja sem ser heresia.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, § 3',
      fonteId: 'cfw-ipib',
      texto:
        'Os livros geralmente chamados apócrifos, não sendo de inspiração divina, não fazem parte do cânon da Escritura e, portanto, não são de autoridade alguma na Igreja de Deus, nem devem ser aprovados ou usados senão como quaisquer outros escritos humanos.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Cânon do Antigo Testamento',
      texto:
        'É a coleção dos livros que, por procederem da inspiração de Deus, são Escritura Sagrada — sendo a canonicidade propriedade intrínseca que decorre da origem divina, e não estatuto conferido por decisão eclesiástica. A Igreja não constituiu o cânon: reconheceu-o, num processo histórico gradual e providencialmente conduzido, no qual os livros já recebidos como Palavra de Deus por Israel, a quem foram confiados os oráculos divinos, e atestados como tais por Cristo e pelos apóstolos, foram identificados e distinguidos dos demais escritos — inclusive dos apócrifos, que, sendo de valor histórico e literário mas não de inspiração divina, não pertencem ao cânon nem têm autoridade doutrinária na Igreja.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Este verbete costuma ser lido por quem foi confrontado com a objeção e ficou sem resposta. Vale ter clara a resposta curta: se a Igreja tivesse criado o cânon, ela estaria acima da Escritura, e o cristão deveria obedecer à Igreja. Como ela o reconheceu, a Escritura permanece acima dela, e a própria Igreja está sujeita ao que reconheceu. Toda a diferença entre as duas cristandades ocidentais passa por essa distinção. E há um alcance mais simples, para quem apenas lê a Bíblia: você não está diante de uma antologia que alguém montou por conveniência política. Está diante de livros que o povo de Deus reconheceu, ao longo de séculos, como tendo a voz do seu Autor — do mesmo modo que se reconhece a voz de alguém conhecido ao telefone, sem precisar de um perito que a certifique.',
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I, §§ 2-3',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 2 lista os 66 livros; o § 3 trata dos apócrifos com a moderação citada acima.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 7-8',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Calvino trata da autoridade da Escritura contra a pretensão de que ela dependa do juízo da Igreja — o argumento central deste verbete.',
    },
    {
      id: 'schaff-hcc2',
      autor: 'Philip Schaff',
      ano: '1885',
      titulo: 'History of the Christian Church, vol. II — sobre o cânon',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Schaff documenta o processo histórico de reconhecimento com as fontes primárias à vista. Domínio público.',
    },
    {
      id: 'bavinck-gd1',
      autor: 'Herman Bavinck',
      ano: '1895',
      titulo: 'Gereformeerde Dogmatiek, Deel 1 — sobre o cânon',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere01_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'É de Bavinck a analogia entre o reconhecimento do cânon e a descoberta de uma lei natural, usada acima.',
    },
  ],
};
