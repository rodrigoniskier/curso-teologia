import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u5-geografia-crescente-fertil',
  disciplina: 'TE03',
  unidade: 5,
  titulo: 'Geografia física do Crescente Fértil',
  objetivo: 'Construir um mapa mental do Crescente Fértil, reconhecendo seus limites, formas de relevo, sistemas hídricos, desertos e regimes climáticos e relacionando-os à circulação, agricultura e formação de centros políticos do mundo bíblico.',
  topicosCobertos: [
    'Limites',
    'Planícies',
    'Vales',
    'Planaltos',
    'Montes',
    'Rios, mares e lagos',
    'Desertos',
    'Clima',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Um arco habitável em torno de grandes zonas áridas',
      paragrafos: [
        'O Crescente Fértil é uma expressão moderna para o arco de terras relativamente favoráveis à agricultura que vai da Mesopotâmia, acompanha a Síria e o Levante e alcança o Egito. Seus limites não são fronteiras políticas rígidas. Eles resultam da combinação entre água, solo, relevo e possibilidade de ocupação diante dos grandes desertos interiores.',
        'Essa forma em arco explica um dado decisivo da história bíblica: Egito e Mesopotâmia não se ligam por uma linha reta atravessando o deserto. Exércitos, comerciantes e migrantes procuram corredores onde água e abastecimento são possíveis. O Levante, portanto, funciona como ponte entre centros imperiais maiores.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Relevo que organiza o mundo antigo',
      itens: [
        'Planícies: grandes áreas aluviais da Mesopotâmia e do vale do Nilo sustentam agricultura irrigada e alta concentração populacional; no Levante, planícies costeiras e interiores tornam-se corredores e áreas agrícolas importantes.',
        'Vales: vales fluviais canalizam agricultura, povoamento e deslocamento. O Eufrates e o Tigre estruturam a Mesopotâmia; o Nilo estrutura o Egito; vales do Levante conectam interior e costa.',
        'Planaltos: áreas elevadas da Síria e da Transjordânia condicionam pastoreio, rotas interiores e formação de reinos regionais.',
        'Montes: cadeias como o Líbano e Anti-Líbano afetam circulação e chuva; montanhas do Levante criam barreiras, passagens e zonas de maior precipitação.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Água: rios, mares e lagos como eixos diferentes',
      paragrafos: [
        'Tigre e Eufrates sustentam sistemas de irrigação e cidades mesopotâmicas; o Nilo possui regularidade e escala capazes de organizar a vida egípcia em torno de seu vale. Esses sistemas não devem ser projetados sobre Canaã, cuja agricultura depende muito mais de chuvas sazonais.',
        'O Mediterrâneo funciona como fronteira e conexão marítima; povos costeiros exploraram suas rotas com intensidade variável. No interior levantino, Jordão, mar da Galileia e mar Morto pertencem a outro sistema, de escala regional e forte contraste de altitude. Rios e lagos, portanto, não possuem a mesma função econômica ou estratégica em toda a região.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Desertos não são vazios no mapa',
      paragrafos: [
        'O deserto sírio-arábico ocupa o centro da grande curva do Crescente Fértil e funciona como forte condicionante de rotas. Isso não significa ausência humana: grupos pastoris, caravanas, oásis e caminhos conhecidos atravessam zonas áridas, mas grandes exércitos e assentamentos densos dependem de água e logística.',
        'Ao sul e a leste da Palestina, áreas áridas também estabelecem limites práticos, zonas de transição e corredores específicos. Na narrativa bíblica, “deserto” pode designar ambientes diferentes do imaginário de dunas infinitas; muitas vezes trata-se de região semiárida capaz de sustentar pastoreio sazonal.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Clima: regularidade fluvial e risco pluviométrico',
      paragrafos: [
        'O Crescente Fértil contém regimes climáticos distintos. Egito e Mesopotâmia dependem fortemente de grandes rios; o Levante mediterrânico recebe chuvas concentradas sobretudo no período mais frio do ano; regiões interiores tornam-se rapidamente mais secas. Altitude e exposição aos ventos úmidos criam contrastes em distâncias pequenas.',
        'Essa diversidade ajuda a explicar economias diferentes e também imagens bíblicas. Chuva, seca, colheita e fome não são apenas metáforas; pertencem a sociedades cuja sobrevivência dependia de ciclos ambientais concretos. A geografia dá densidade ao texto sem reduzir a providência divina a mecanismo climático.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u5-a1',
      titulo: 'Atividade — explicar uma rota sem decorar um atlas',
      enunciado: 'Explique por que uma viagem terrestre entre Mesopotâmia e Egito tenderia a seguir o arco do Crescente Fértil em vez de cruzar diretamente o deserto sírio-arábico.',
      itens: [
        'Mencione água e abastecimento.',
        'Inclua relevo e corredores de circulação.',
        'Relacione a resposta à importância estratégica do Levante.'
      ],
      resposta: 'Grandes deslocamentos precisam de fontes de água, alimento, pastagem e caminhos transitáveis. O deserto central torna a rota direta logisticamente arriscada, enquanto o arco de terras habitáveis acompanha rios, vales e assentamentos. Por isso o Levante funciona como ponte obrigatória entre Egito e potências do norte e leste, adquirindo importância estratégica muito maior que seu tamanho.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O Crescente Fértil é uma zona geográfica, não um Estado ou fronteira fixa.',
        'Planícies, vales, planaltos e montes organizam agricultura, povoamento e circulação.',
        'Tigre, Eufrates e Nilo possuem papel estrutural distinto dos sistemas hídricos menores do Levante.',
        'Desertos condicionam rotas sem serem espaços humanos vazios.',
        'O clima varia fortemente e ajuda a explicar economias, migrações e crises descritas nos textos bíblicos.'
      ],
    },
  ],
  fontes: [
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
      nota: 'Geografia histórica clássica para relacionar relevo, rotas e história do Levante dentro do arco regional.'
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
      nota: 'Mapas históricos de relevo, hidrografia, chuvas, rotas e divisões regionais usados para construir o mapa mental da unidade.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
