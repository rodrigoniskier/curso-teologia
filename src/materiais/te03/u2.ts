import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u2-metodos-arqueologia-mundo-antigo',
  disciplina: 'TE03',
  unidade: 2,
  titulo: 'Arqueologia 1',
  objetivo: 'Explicar os principais métodos arqueológicos usados no Levante e situar a arqueologia bíblica dentro do mundo antigo, distinguindo dado, contexto, datação e interpretação.',
  topicosCobertos: [
    'Métodos arqueológicos',
    'Arqueologia bíblica e o mundo antigo',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Escavar é destruir de modo controlado',
      paragrafos: [
        'Uma escavação arqueológica é irrepetível. Ao remover uma camada, o arqueólogo altera para sempre o sítio; por isso registro, desenho, fotografia, coordenadas, amostragem e descrição são parte do próprio método. O objetivo não é alcançar rapidamente o objeto mais espetacular, mas preservar a relação entre vestígios antes que ela desapareça.',
        'Muitos sítios do antigo Oriente Próximo formam tells: montículos compostos por sucessivas ocupações. Casas são construídas, reformadas, destruídas e niveladas; novas estruturas surgem sobre as antigas. A primeira tarefa é reconstruir essa sequência relativa e identificar onde houve continuidade, ruptura, intrusão ou mistura de materiais.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Ferramentas centrais do método arqueológico',
      ordenada: true,
      itens: [
        'Estratigrafia: lê relações entre camadas, pisos, muros, fossas e destruições para estabelecer uma sequência relativa.',
        'Tipologia cerâmica: compara formas, fabricação e decoração que mudam ao longo do tempo; cacos comuns podem ser mais informativos para cronologia que peças raras.',
        'Radiocarbono e outras datações: fornecem intervalos probabilísticos quando materiais apropriados estão disponíveis; não substituem o contexto estratigráfico.',
        'Epigrafia e paleografia: estudam inscrições, suportes e formas de escrita, combinando leitura linguística, datação e crítica do gênero documental.',
        'Arqueobotânica e zooarqueologia: sementes, pólen, madeira e restos animais ajudam a reconstruir dieta, agricultura, clima e uso do território.',
        'Proveniência e documentação: registram o lugar e as associações de cada achado; objetos de mercado sem contexto exigem cautela muito maior.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Datação não é um único relógio',
      paragrafos: [
        'Cronologia robusta resulta da convergência de métodos. Uma camada pode ser relativamente anterior a outra por sua posição; cerâmica pode aproximá-la de sequências conhecidas; uma inscrição pode fornecer nome ou reinado; material orgânico pode produzir intervalo radiocarbônico. Quanto mais linhas independentes convergem, mais forte a conclusão.',
        'Isso também explica por que datas mudam. Uma revisão não demonstra que toda arqueologia é arbitrária; pode refletir nova calibração, amostra mais adequada, melhor leitura estratigráfica ou comparação regional ampliada. A linguagem responsável distingue “aproximadamente”, “provável”, “possível” e “não identificado”.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. A Bíblia pertence ao mundo antigo, não a uma bolha cultural',
      paragrafos: [
        'Israel e Judá conviveram com Egito, Canaã, Fenícia, Aram, Assíria, Babilônia, Pérsia, povos da Transjordânia e, mais tarde, reinos helenísticos e Roma. Esses vizinhos deixaram inscrições, monumentos, arquivos, moedas, relevo, arquitetura e padrões de assentamento que ajudam a reconstruir o horizonte histórico em que os textos bíblicos falam.',
        'Comparar fontes exige crítica de gênero. Um prisma real assírio celebra o rei; um tratado estabelece obrigações; uma lista administrativa contabiliza bens; uma inscrição funerária preserva outra finalidade. Nenhum documento antigo deve ser lido como reportagem moderna neutra. A arqueologia fornece materiais; história e exegese precisam perguntar quem produziu cada evidência, para quem e com qual propósito.',
        'O mesmo princípio vale para paralelos culturais. Semelhança entre uma prática bíblica e um documento mesopotâmico não demonstra automaticamente dependência literária nem identidade religiosa. Primeiro se estabelece o paralelo; depois se avaliam data, distância, gênero, continuidade e diferenças.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Um texto real que precisa ser lido como texto real',
      enunciado: 'Senaqueribe registra campanhas militares e descreve Ezequias preso em Jerusalém “como um pássaro numa gaiola”. O documento exalta cidades conquistadas e tributo, mas não afirma a tomada da capital.',
      explicacao: 'O dado é valioso justamente quando o gênero é respeitado. Anais reais assírios são propaganda de vitória; por isso se pode comparar o que o rei afirma, o que omite e o que outras fontes registram. Arqueologia responsável não chama a inscrição de neutra, mas também não a descarta por ser tendenciosa.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u2-a1',
      titulo: 'Atividade — construir uma conclusão arqueológica',
      enunciado: 'Uma camada apresenta muro destruído, grande quantidade de cerâmica de um mesmo horizonte, sementes carbonizadas com intervalo radiocarbônico e uma inscrição fragmentária encontrada em uma fossa posterior que corta a camada.',
      itens: [
        'Indique quais evidências podem ajudar a datar a destruição e quais exigem cautela adicional.',
        'Explique por que a inscrição da fossa não pode ser atribuída automaticamente à camada que ela atravessa.',
        'Formule uma conclusão usando linguagem de grau de certeza, sem transformar hipótese em fato.'
      ],
      resposta: 'Estratigrafia, conjunto cerâmico e sementes carbonizadas podem convergir para datar a destruição. A inscrição exige cautela porque a fossa é intrusiva e pode ser posterior. Uma formulação adequada seria: “a destruição provavelmente pertence ao intervalo sugerido pela associação estratigráfica, cerâmica e radiocarbono; a inscrição posterior não deve ser usada para nomear o evento sem evidência adicional”.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Escavação é registro sistemático de contexto, não caça a objetos.',
        'Estratigrafia, cerâmica, datação absoluta, epigrafia e evidência ambiental precisam ser combinadas.',
        'Datas arqueológicas possuem graus de precisão e podem ser revistas à luz de dados melhores.',
        'O mundo bíblico deve ser estudado em relação com as culturas vizinhas sem apagar suas diferenças.',
        'Documentos antigos possuem gêneros e interesses; crítica de fonte é parte da leitura arqueológica.'
      ],
    },
  ],
  fontes: [
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
      nota: 'Manual histórico e coleção documental útil para observar como a arqueologia bíblica relacionava sítios e documentos ao mundo antigo, lido hoje com atualização metodológica.'
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
      nota: 'Coleção de inscrições reais assírias que permite exercitar crítica de gênero e comparação de fontes históricas.'
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
      nota: 'Relaciona paisagem, rotas e sítios ao desenvolvimento histórico, útil para integrar evidência arqueológica e contexto espacial.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
