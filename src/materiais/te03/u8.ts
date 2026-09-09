import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u8-geografia-humana-palestina-2',
  disciplina: 'TE03',
  unidade: 8,
  titulo: 'Geografia humana da Palestina 2',
  objetivo: 'Descrever habitantes, povos vizinhos, religiões, idiomas, estradas, cidades e calendários da Palestina bíblica e aplicar essas informações à leitura histórica sem tratar séculos distintos como um único cenário cultural.',
  topicosCobertos: [
    'Habitantes',
    'Povos vizinhos e suas religiões',
    'Idiomas da Palestina',
    'Estradas',
    'Cidades',
    'Calendário judaico',
    'Divisão do dia e da noite',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A população muda ao longo da história bíblica',
      paragrafos: [
        'Não existe uma população “bíblica” fixa. Cananeus, israelitas, judeus, filisteus, fenícios, arameus, moabitas, amonitas, edomitas e populações incorporadas por impérios aparecem em épocas e proporções diferentes. Depois do exílio, administração persa, cultura helenística e domínio romano acrescentam novas camadas políticas e culturais.',
        'Por isso um nome étnico ou regional precisa ser datado. “Samaritano” no Novo Testamento, por exemplo, carrega uma história religiosa e política que não pode ser projetada sem mediação sobre o período dos juízes. A geografia humana estuda populações no tempo, não apenas nomes colocados sobre um mapa.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Povos vizinhos e religiões',
      paragrafos: [
        'Os povos vizinhos de Israel compartilham elementos do antigo Oriente Próximo, mas não formam uma religião única. Cultos cananeus associados a Baal e Aserá, práticas moabitas, amonitas, arameias e fenícias possuem deuses, centros e tradições próprias. A Bíblia polemiza contra formas concretas de idolatria, e a arqueologia ajuda a situá-las sem reduzir todas a uma caricatura genérica.',
        'A proximidade cultural torna a idolatria mais inteligível: cultos de fertilidade falam a sociedades agrícolas dependentes de chuva; alianças políticas podem trazer também práticas religiosas estrangeiras. Explicar essa atração histórica não equivale a justificá-la teologicamente.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Idiomas da Palestina',
      paragrafos: [
        'Hebraico ocupa lugar central no Antigo Testamento e na identidade literária de Israel. O aramaico torna-se língua internacional e cotidiana em amplas regiões, aparecendo também em porções bíblicas. No período helenístico e romano, o grego koiné ganha enorme importância no Mediterrâneo oriental e é a língua dos livros do Novo Testamento.',
        'Latim representa o poder imperial romano e aparece em administração, exército e inscrições, mas não deve ser imaginado automaticamente como idioma cotidiano dominante da Galileia e Judeia. O primeiro século é linguisticamente plural: pessoas podiam transitar entre registros e línguas conforme contexto social.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Estradas e cidades organizam circulação',
      paragrafos: [
        'Rotas internacionais percorrem a planície costeira e corredores interiores; a Estrada do Rei liga regiões a leste do Jordão; caminhos pela serra conectam Hebrom, Jerusalém, Betel e Siquém. Estradas reais seguem relevo, água, segurança e centros de abastecimento, não a menor distância geométrica entre dois pontos.',
        'Cidades também possuem funções diferentes: fortalezas guardam passagens, portos articulam comércio marítimo, centros administrativos concentram tributo, aldeias sustentam produção agrícola e Jerusalém combina funções políticas, religiosas e peregrinas. O tamanho e a importância de uma cidade não podem ser inferidos apenas pelo número de vezes em que seu nome aparece na Bíblia.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Calendário judaico e contagem do tempo',
      itens: [
        'O calendário judaico combina ciclos lunares com ajuste ao ano agrícola e solar; meses e festas estruturam memória, colheita e peregrinação.',
        'Páscoa, Semanas e Tabernáculos possuem dimensão religiosa e também temporal e geográfica: multidões se deslocam em épocas específicas do ano.',
        'A contagem do dia judaico está associada ao ciclo de tarde e manhã, mas referências horárias no Novo Testamento precisam ser interpretadas segundo convenções do contexto narrativo.',
        'A noite podia ser dividida em vigílias; sistemas de divisão variaram e sofreram influência de administrações e práticas militares.',
        'Converter uma “hora” antiga mecanicamente para o relógio moderno pode produzir falsa precisão; o contexto deve indicar se o texto exige exatidão ou apenas uma faixa do dia.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Uma estrada que é mais que distância',
      enunciado: 'Um leitor pergunta por que uma rota bíblica aparentemente faz um desvio quando o mapa moderno mostra uma linha mais curta.',
      explicacao: 'A resposta deve considerar montanhas, desertos, travessias, água, fronteiras políticas e segurança. Mapas rodoviários modernos supõem túneis, pontes e infraestrutura inexistentes no mundo antigo. A rota plausível é a que pessoas e animais conseguiam percorrer, não a linha reta mais curta.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u8-a1',
      titulo: 'Atividade — reconstruir um contexto humano',
      enunciado: 'Você prepara uma aula sobre uma viagem no primeiro século entre Galileia e Jerusalém. Monte um checklist mínimo de contexto humano antes de explicar o texto.',
      itens: [
        'Inclua população e identidades regionais.',
        'Inclua idiomas e religião.',
        'Inclua estrada, cidade e calendário.',
        'Indique um anacronismo que deve ser evitado.'
      ],
      resposta: 'O checklist deve considerar identidades de Galileia, Samaria e Judeia; judaísmo do Segundo Templo e relações com populações vizinhas; presença de aramaico, hebraico e grego; rotas plausíveis e centros urbanos; época do ano e festas que possam gerar peregrinação; e convenções de tempo. Deve-se evitar projetar fronteiras, estradas, idioma dominante ou relógio modernos sobre o texto.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Habitantes e identidades regionais mudam ao longo dos séculos bíblicos.',
        'Povos vizinhos possuem religiões relacionadas, mas não idênticas.',
        'Hebraico, aramaico, grego e latim ocupam funções diferentes conforme período e contexto.',
        'Estradas e cidades devem ser lidas como redes de circulação, poder e abastecimento.',
        'Calendário e divisão do tempo são convenções históricas que precisam ser reconstruídas antes de converter datas e horas.'
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
      nota: 'Mapas históricos para rotas, cidades, populações e divisões políticas da Palestina.'
    },
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
      nota: 'Fonte antiga relevante para povos, cidades, administração, religião e vida judaica no fim do período do Segundo Templo.'
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
      nota: 'Ajuda a relacionar habitantes, rotas, cidades e regiões à geografia histórica da Palestina.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
