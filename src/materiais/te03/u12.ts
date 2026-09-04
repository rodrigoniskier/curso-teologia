import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u12-palestina-novo-testamento',
  disciplina: 'TE03',
  unidade: 12,
  titulo: 'A Palestina do Novo Testamento',
  objetivo: 'Distinguir Judeia, Samaria e Galileia no primeiro século, relacionando suas geografias, identidades e administrações às narrativas dos Evangelhos e de Atos.',
  topicosCobertos: [
    'Judeia',
    'Samaria',
    'Galileia',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Uma terra pequena com administrações e identidades distintas',
      paragrafos: [
        'A Palestina do Novo Testamento não forma uma unidade política simples. Herodes, seus sucessores e governadores romanos administraram regiões diferentes em momentos diferentes, enquanto elites sacerdotais e instituições locais conservaram graus próprios de influência. Ler “Judeia”, “Samaria” e “Galileia” apenas como três faixas de um mapa apaga parte importante do contexto.',
        'As três regiões compartilham conexões com a tradição de Israel, mas possuem trajetórias históricas, centros religiosos e relações políticas diferentes. Uma viagem entre elas pode envolver não só mudança de paisagem, mas também mudança de autoridade, identidade social e memória coletiva.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Judeia: Jerusalém reorganiza a região',
      paragrafos: [
        'Judeia é região montanhosa ao sul, com Jerusalém como centro religioso e político de peso extraordinário. O templo atrai peregrinos, ofertas, comércio e autoridade sacerdotal, enquanto o governo romano se faz sentir por administração provincial, presença militar e tributação.',
        'Nas narrativas da paixão e em Atos, Jerusalém concentra disputas que ultrapassam a escala municipal. Decisões tomadas ali repercutem por comunidades judaicas muito além da Judeia porque cidade, templo e instituições funcionam como centro simbólico do judaísmo do período.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Samaria: território e memória religiosa',
      paragrafos: [
        'Samaria ocupa a região entre Judeia e Galileia. Sua população e tradição religiosa desenvolveram relação tensa com os judeus da Judeia, incluindo diferenças sobre lugar de culto e identidade histórica. Isso torna cenas como João 4 e a missão de Atos 8 muito mais densas que simples encontros entre moradores de províncias vizinhas.',
        'A hostilidade não deve ser simplificada como ódio racial moderno. Ela envolve séculos de história política, disputa de memória, culto e pertencimento. Ao mesmo tempo, os textos do Novo Testamento mostram essas barreiras sendo atravessadas pelo ministério de Jesus e pela expansão da igreja.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Galileia: periferia no discurso, conexão no mapa',
      paragrafos: [
        'A Galileia combina aldeias agrícolas, pesca em torno do lago e proximidade de cidades e rotas conectadas ao mundo helenístico. Nazaré, Cafarnaum, Caná e outras localidades pertencem a um território relativamente compacto, mas não isolado culturalmente.',
        'O contraste com Jerusalém aparece várias vezes nos Evangelhos. Chamar alguém de galileu pode carregar identificação regional e social; ainda assim, a região possui circulação, produção e contato com redes maiores. “Periferia” é uma percepção política e religiosa, não sinônimo de isolamento geográfico.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três regiões, três perguntas exegéticas',
      itens: [
        'Judeia: como Jerusalém, templo e administração romana moldam o episódio?',
        'Samaria: que memória religiosa e tensão identitária o texto pressupõe?',
        'Galileia: como aldeias, lago, rotas e relação com Jerusalém entram na narrativa?',
        'Em todas: qual administração está vigente no momento específico do texto?'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u12-a1',
      titulo: 'Atividade — localizar antes de interpretar',
      enunciado: 'Compare João 4, uma narrativa situada na Galileia e um episódio em Jerusalém. Para cada um, liste duas informações regionais que podem alterar a leitura.',
      itens: [
        'Inclua geografia física ou rota.',
        'Inclua identidade religiosa ou política.',
        'Explique por que tratar toda a Palestina como cenário homogêneo empobrece o texto.'
      ],
      resposta: 'João 4 exige considerar Samaria entre Judeia e Galileia, a tradição samaritana e a disputa de lugar de culto. Um episódio galileu pode envolver lago, aldeias e distância de Jerusalém. Um episódio em Jerusalém exige considerar templo, peregrinação e autoridades. Homogeneizar a Palestina apaga diferenças que os autores pressupõem.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Judeia, Samaria e Galileia são regiões geográficas e também realidades históricas e identitárias.',
        'Jerusalém e o templo dão à Judeia centralidade muito além de seu tamanho.',
        'Samaria carrega tensões religiosas e históricas próprias.',
        'Galileia é regionalmente distinta, mas integrada a redes econômicas e culturais.',
        'A administração política precisa ser datada episódio por episódio.'
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
      nota: 'Fonte antiga central para administrações, regiões e relações judaicas no primeiro século.'
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
      nota: 'Geografia histórica para Judeia, Samaria, Galileia, rotas e cidades.'
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
      nota: 'Mapas históricos para divisões regionais e rotas da Palestina.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
