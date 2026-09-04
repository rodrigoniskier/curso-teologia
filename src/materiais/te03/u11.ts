import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u11-economia-palestina',
  disciplina: 'TE03',
  unidade: 11,
  titulo: 'A economia da Palestina',
  objetivo: 'Comparar estruturas econômicas da Palestina no Antigo e no Novo Testamentos, relacionando agricultura, pastoreio, comércio, tributo, dívida, trabalho e impostos à interpretação bíblica.',
  topicosCobertos: [
    'No Antigo Testamento',
    'No Novo Testamento',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Antigo Testamento: casa, campo, rebanho e tributo',
      paragrafos: [
        'A economia de Israel antigo é predominantemente agrária, mas não simples. Famílias produzem cereais, vinho e azeite, mantêm rebanhos, armazenam colheitas, trocam bens e dependem de redes locais e regionais. Terra e descendência possuem peso econômico porque a propriedade familiar sustenta produção, herança e pertencimento.',
        'A monarquia acrescenta estruturas de arrecadação, trabalho obrigatório, administração, exército e grandes projetos. Tributos podem vir tanto de populações internas quanto de relações internacionais. A Bíblia registra os benefícios e também os custos da centralização política.',
        'Dívida, penhor e perda de terra aparecem nas leis e nos profetas porque crises econômicas podem transformar pequenos proprietários em dependentes. A legislação sobre pobres, colheita, empréstimo e restituição não é decoração moral: responde a vulnerabilidades concretas de uma sociedade agrária.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Elementos econômicos do Antigo Testamento',
      itens: [
        'Agricultura: cereal, vinha e oliveira dependem de terra, chuva, trabalho e armazenamento.',
        'Pastoreio: rebanhos fornecem alimento, lã, couro, riqueza móvel e segurança econômica.',
        'Tributo e trabalho: reinos financiam administração, construções e guerra por arrecadação e serviço.',
        'Comércio: madeira, metais, cavalos, artigos de luxo e produtos agrícolas circulam por rotas regionais.',
        'Dívida e pobreza: perda de safra, guerra e concentração de riqueza podem levar famílias à dependência.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Novo Testamento: economia agrária dentro do sistema romano',
      paragrafos: [
        'No primeiro século, agricultura e trabalho doméstico continuam fundamentais, mas a Palestina está inserida em estruturas fiscais e monetárias do Império Romano e de governantes locais. Impostos, pedágios, arrendamentos, grandes propriedades, mercados e moedas aparecem no horizonte das parábolas e narrativas.',
        'Publicanos são socialmente controversos porque arrecadação não é questão abstrata: envolve poder imperial, contratos e possibilidade de abuso. Trabalhadores diaristas dependem do pagamento diário; pescadores podem operar em redes familiares e comerciais; artesãos, comerciantes e proprietários participam de economias urbanas e rurais conectadas.',
        'Moedas romanas e provinciais circulam ao lado de outras formas de valor. A pergunta de Jesus sobre o denário de César, por exemplo, pressupõe tanto economia monetária quanto simbolismo político. O dinheiro carrega imagem, autoridade e obrigação fiscal.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Riqueza não é termômetro automático de fidelidade',
      paragrafos: [
        'A Escritura pode apresentar colheita e prosperidade como dádivas, mas também denuncia sociedades economicamente prósperas por injustiça. Profetas condenam casas luxuosas, exploração e tribunais corrompidos; Jesus adverte ricos e chama discípulos a generosidade. A leitura econômica não deve virar evangelho da prosperidade nem espiritualizar todas as relações materiais.',
        'A perspectiva pactual reconhece bens como dádivas de Deus e, ao mesmo tempo, submete propriedade, trabalho e riqueza à justiça, misericórdia e responsabilidade. O significado teológico aparece justamente porque dinheiro, terra e dívida são realidades concretas.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'O trabalhador de um denário',
      enunciado: 'Uma parábola menciona trabalhadores contratados por um valor diário. Um leitor transforma o denário em uma cifra exata em reais e constrói todo o argumento sobre essa conversão.',
      explicacao: 'A melhor leitura começa pela função social: trata-se de remuneração de jornada num ambiente em que o trabalhador depende do pagamento. A equivalência monetária moderna é instável; a relação entre trabalho, diária e provisão é mais segura e exegética.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u11-a1',
      titulo: 'Atividade — ler economia dentro do texto',
      enunciado: 'Escolha um dos temas: dívida, tributo, salário, colheita ou comércio. Explique como ele funciona de modo diferente se for lido apenas como metáfora espiritual ou primeiro como realidade econômica concreta.',
      itens: [
        'Descreva a realidade material envolvida.',
        'Indique quem possui poder e quem é vulnerável na situação.',
        'Mostre como o dado histórico esclarece, sem esgotar, a aplicação teológica.'
      ],
      resposta: 'A resposta deve reconstruir o mecanismo econômico antes de aplicar o texto. Dívida envolve obrigação e risco de perda; tributo envolve poder político; salário sustenta o trabalhador; colheita depende de terra e clima; comércio depende de rotas e capital. O sentido teológico ganha força quando parte dessa realidade em vez de substituí-la por uma alegoria.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'No Antigo Testamento, economia envolve casa, terra, rebanho, armazenamento, tributo, comércio e dívida.',
        'A monarquia amplia arrecadação, trabalho estatal e pressão econômica.',
        'No Novo Testamento, a economia palestina opera dentro de estruturas fiscais e monetárias romanas.',
        'Publicanos, diaristas, pescadores e proprietários precisam ser lidos em seus contextos materiais.',
        'A Bíblia não identifica riqueza automaticamente com aprovação divina nem trata economia como assunto não espiritual.'
      ],
    },
  ],
  fontes: [
    {
      id: 'josefo-obras',
      autor: 'Flávio Josefo',
      ano: '93',
      titulo: 'The Works of Flavius Josephus (trad. William Whiston)',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/workstranslatedb00joseuoft',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'Fonte antiga para tributos, administração, guerra, economia e vida social judaica no período romano.'
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
      nota: 'Relaciona ambiente, produção agrícola, rotas e cidades às estruturas econômicas regionais.'
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
      nota: 'Documentação para tributos, campanhas e pressões econômicas dos impérios sobre Israel e Judá.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
