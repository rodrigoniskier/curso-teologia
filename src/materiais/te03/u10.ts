import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u10-geografia-politica-palestina',
  disciplina: 'TE03',
  unidade: 10,
  titulo: 'Geografia política da Palestina',
  objetivo: 'Relacionar território, capitais, rotas e fronteiras aos períodos do reino unido, dos reinos do Norte e do Sul e do reino de Judá sob pressão imperial.',
  topicosCobertos: [
    'Reino unido',
    'Reino do Norte e Reino do Sul',
    'Reino de Judá',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Reino unido: território não é controle homogêneo',
      paragrafos: [
        'As narrativas de Saul, Davi e Salomão descrevem expansão de autoridade, alianças, centros administrativos e controle de rotas. Um mapa político desse período não deve ser imaginado como fronteira moderna perfeitamente policiada. Poder antigo é exercido por cidades, tributos, guarnições, alianças e capacidade de projetar força sobre corredores e populações.',
        'Jerusalém adquire papel decisivo com Davi porque combina posição defensiva, localização entre antigas áreas tribais e posterior centralidade religiosa. O reino de Salomão amplia redes de administração, comércio e construção, mas sua extensão e forma de controle precisam ser lidas como estrutura política antiga, não como Estado nacional contemporâneo.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A divisão muda o mapa e a lógica do poder',
      paragrafos: [
        'Após a ruptura da monarquia, o Reino do Norte reúne áreas mais extensas e produtivas, importantes rotas e centros como Samaria; o Reino do Sul se organiza em torno de Jerusalém e das montanhas de Judá. A divisão não é apenas dinástica: muda acesso a recursos, fronteiras, santuários, aliados e ameaças.',
        'O Norte fica mais diretamente exposto a corredores internacionais e à pressão síria e assíria. Judá possui maior proteção topográfica na serra, mas depende de cidades da Sefelá e de rotas que defendem os acessos a Jerusalém. A geografia ajuda a explicar por que campanhas militares se concentram repetidamente em certos vales e fortalezas.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Norte e Sul em contraste',
      itens: [
        'Israel/Norte: território maior em boa parte do período, agricultura diversificada, Samaria como capital e maior exposição a rotas internacionais.',
        'Judá/Sul: núcleo montanhoso em torno de Jerusalém, acesso estratégico pela Sefelá e maior continuidade dinástica davídica.',
        'Fronteiras: zonas de influência variáveis, não linhas fixas; cidades fortificadas e corredores valem mais que traçados abstratos.',
        'Religião e política: Betel, Dã e Jerusalém também funcionam dentro de disputas por lealdade, identidade e centralização cultual.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Judá diante dos impérios',
      paragrafos: [
        'A queda do Reino do Norte diante da Assíria altera radicalmente o equilíbrio regional. Judá passa a viver sob pressão imperial mais direta, pagando tributos, fortificando cidades e negociando alianças. Laquis, por exemplo, torna-se peça importante no sistema defensivo e aparece tanto na arqueologia quanto na propaganda assíria.',
        'A campanha de Senaqueribe mostra como geografia e política se encontram: cidades da Sefelá são atacadas antes da pressão sobre Jerusalém. A sobrevivência ou queda de uma capital não pode ser compreendida isoladamente das fortalezas, rotas e recursos que a conectam ao território.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u10-a1',
      titulo: 'Atividade — explicar uma fronteira antiga',
      enunciado: 'Compare duas formas de representar Israel e Judá: (a) linhas rígidas e contínuas como fronteiras nacionais modernas; (b) áreas de controle, cidades fortificadas, rotas e zonas de disputa.',
      itens: [
        'Explique por que a segunda representação costuma ser historicamente mais adequada.',
        'Indique uma consequência para interpretar guerras entre Israel, Judá e vizinhos.',
        'Relacione Jerusalém ou Samaria à lógica territorial de seu reino.'
      ],
      resposta: 'Reinos antigos controlavam território por centros, rotas, tributo, alianças e força militar, com zonas periféricas variáveis. Isso ajuda a entender por que uma mesma cidade ou região pode mudar de mãos e por que campanhas se concentram em corredores. Jerusalém combina defesa, administração e culto em Judá; Samaria ocupa posição central e estratégica no Reino do Norte.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O reino unido deve ser lido por centros de poder, rotas e graus de controle, não por fronteiras modernas.',
        'A divisão entre Norte e Sul cria realidades territoriais, econômicas e estratégicas distintas.',
        'Israel é mais exposto a grandes corredores internacionais; Judá depende fortemente da serra e da Sefelá.',
        'Jerusalém e Samaria são capitais políticas inseridas em geografias diferentes.',
        'A pressão assíria mostra que fortificações, rotas e tributos pertencem ao contexto material da história bíblica.'
      ],
    },
  ],
  fontes: [
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
      nota: 'Mapas históricos para reinos, cidades, rotas e campanhas na Palestina.'
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
      nota: 'Documentação assíria para campanhas, tributos e relações imperiais com Israel e Judá.'
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
      nota: 'Relaciona terreno, cidades e corredores à história política da Palestina.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
