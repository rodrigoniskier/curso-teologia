import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u1-introducao-geografia-arqueologia',
  disciplina: 'TE03',
  unidade: 1,
  titulo: 'Introdução ao curso',
  objetivo: 'Conceituar geografia bíblica e arqueologia como disciplinas auxiliares da exegese, distinguir seus objetos e limites e reconhecer os principais momentos da passagem do antiquarianismo para a arqueologia contextual e interdisciplinar.',
  topicosCobertos: [
    'Conceituação de geografia bíblica e arqueologia',
    'Breve história da arqueologia',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O texto bíblico aconteceu em lugares reais',
      paragrafos: [
        'A Bíblia não foi revelada num espaço abstrato. Montanhas, vales, rios, estradas, cidades, distâncias, chuvas e fronteiras condicionam deslocamentos, guerras, agricultura, comércio e relações entre povos. Geografia bíblica é o estudo sistemático desse espaço físico e humano para recuperar informações que os primeiros leitores frequentemente conheciam sem precisar de explicação.',
        'Isso significa que o mapa não é mero enfeite. Quando um narrador diz que alguém subiu a Jerusalém, atravessou o Jordão, desceu a Jericó ou seguiu por determinada rota, o dado espacial pode participar do argumento. A função da geografia é mostrar o que o terreno torna possível, difícil, estratégico ou significativo, sem transformar relevo e clima em causas deterministas de tudo o que acontece.',
        'Arqueologia trabalha com outra classe de evidência. Ela estuda sociedades por meio de cultura material: edifícios, cerâmica, inscrições, selos, moedas, ossos, sementes, ferramentas, estradas e camadas de ocupação. Seu objeto imediato não é provar um texto, mas reconstruir contextos humanos a partir de vestígios preservados.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Duas disciplinas próximas, mas não idênticas',
      itens: [
        'Geografia bíblica pergunta onde, por quais caminhos, em que relevo, clima, fronteira e rede de assentamentos os acontecimentos são situados.',
        'Arqueologia pergunta o que a cultura material preservada permite inferir sobre ocupação, cronologia, economia, administração, religião e vida cotidiana.',
        'Geografia tende a lidar com estruturas espaciais relativamente duradouras; arqueologia trabalha sobretudo com vestígios de ocupações e mudanças ao longo do tempo.',
        'Ambas precisam dialogar com história, línguas, epigrafia e literatura antiga; nenhuma delas interpreta a si mesma sem argumentos.',
        'Na exegese reformada, ambas são auxiliares: iluminam o mundo da revelação histórica, mas não conferem autoridade à Escritura nem substituem o texto.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Da coleta de antiguidades ao contexto arqueológico',
      paragrafos: [
        'Durante muitos séculos, viajantes, peregrinos, colecionadores e estudiosos registraram monumentos e adquiriram objetos antigos. Esse antiquarianismo preservou informações importantes, mas frequentemente valorizava a peça rara mais que o lugar exato em que fora encontrada. Sem contexto de escavação, um objeto perde grande parte de sua capacidade de responder perguntas históricas.',
        'No século XIX, levantamentos topográficos, descrições sistemáticas da Palestina e escavações mais organizadas começaram a ligar textos, sítios e paisagem. A geografia histórica ganhou precisão com medições de distâncias, relevo e rotas. Ao mesmo tempo, arqueólogos passaram a perceber que um sítio não é um depósito de tesouros, mas uma sequência de ocupações que precisa ser registrada camada por camada.',
        'No início do século XX, estratigrafia e classificação de cerâmica deram maior controle cronológico à pesquisa no Levante. A chamada arqueologia bíblica procurou relacionar achados ao mundo das Escrituras e produziu contribuições reais, embora algumas de suas formulações apologéticas prometessem mais confirmação direta do que o método podia entregar.',
        'A pesquisa contemporânea é mais interdisciplinar. Radiocarbono, arqueobotânica, zooarqueologia, análise de resíduos, imagens aéreas, sensoriamento, estudos ambientais e métodos digitais trabalham ao lado da escavação tradicional. O ganho não é uma arqueologia sem interpretação, mas uma interpretação constrangida por conjuntos maiores e mais variados de dados.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Por que procedência muda o valor de um achado',
      enunciado: 'Dois selos antigos semelhantes aparecem para estudo. Um foi comprado no mercado de antiguidades sem registro de origem. O outro foi encontrado numa escavação documentada, dentro de uma camada associada a edifícios, cerâmica e material datável.',
      explicacao: 'Os dois objetos podem ser autênticos, mas o segundo possui muito maior valor histórico porque sua posição e associação são conhecidas. A arqueologia moderna não pergunta apenas “o que é isto?”, mas “onde estava, com o quê, em qual camada e em que sequência?”. Contexto transforma objeto em evidência.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u1-a1',
      titulo: 'Atividade — distinguir objeto, pergunta e limite',
      enunciado: 'Classifique as perguntas a seguir como predominantemente geográficas, arqueológicas ou interdisciplinares: (a) por que Megido controlava uma passagem estratégica? (b) a que período pertence uma camada de cerâmica? (c) como relevo e fortificações condicionavam a defesa de Jerusalém? (d) o que uma inscrição real pode informar sobre uma campanha militar?',
      itens: [
        'Justifique cada classificação indicando o tipo de evidência principal.',
        'Escolha uma pergunta e explique por que a resposta não deveria ser apresentada como “prova da Bíblia”.'
      ],
      resposta: 'A é principalmente geográfica; B, arqueológica; C e D são interdisciplinares, porque exigem combinar espaço ou cultura material com reconstrução histórica e interpretação. Nenhuma delas “prova a Bíblia” em sentido teológico: elas podem esclarecer ou corroborar aspectos históricos, mas inspiração e autoridade não são conclusões produzidas por topografia, cerâmica ou inscrições.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Geografia bíblica estuda o espaço físico e humano necessário para ler acontecimentos situados.',
        'Arqueologia reconstrói sociedades a partir da cultura material preservada e de seu contexto.',
        'A história da disciplina passa de coleta de antiguidades para escavação contextual, cronologia e interdisciplinaridade.',
        'Um achado sem procedência documentada perde grande parte de seu valor histórico.',
        'Na perspectiva reformada, geografia e arqueologia servem à exegese sem se tornarem fundamento da autoridade da Escritura.'
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
      nota: 'Clássico de geografia histórica que exemplifica a consolidação do estudo sistemático de relevo, rotas, sítios e história da Palestina.'
    },
    {
      id: 'barton-arqueologia',
      autor: 'George A. Barton',
      ano: '1916',
      titulo: 'Archaeology and the Bible',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/archaeologybible00bartuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Testemunho histórico da fase de consolidação da arqueologia bíblica; útil também por reunir documentos e achados conhecidos no início do século XX, com necessidade de atualização metodológica.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
