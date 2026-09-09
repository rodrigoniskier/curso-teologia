import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u15-viagens-paulo',
  disciplina: 'TE03',
  unidade: 15,
  titulo: 'As viagens de Paulo',
  objetivo: 'Acompanhar as principais cidades alcançadas nas viagens de Paulo e explicar como redes urbanas, estradas, portos e sinagogas serviram à propagação do evangelho sem reduzir a missão apostólica a estratégia geográfica.',
  topicosCobertos: [
    'Cidades alcançadas',
    'A propagação do Evangelho',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Antioquia, Chipre e a Ásia Menor',
      paragrafos: [
        'Atos apresenta Antioquia da Síria como importante base missionária. Dali Barnabé e Paulo seguem a Chipre e depois alcançam cidades da Ásia Menor, entre elas Antioquia da Pisídia, Icônio, Listra e Derbe. A sequência revela uso de rotas marítimas e terrestres, além da presença de comunidades judaicas que oferecem pontos iniciais de proclamação.',
        'As cidades não são escolhidas apenas por tamanho. Elas pertencem a redes regionais de comércio, administração e comunicação. Uma comunidade estabelecida num centro conectado pode manter relações com vilas e cidades vizinhas, ampliando o alcance sem que o missionário visite pessoalmente cada localidade.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Macedônia e Acaia: Filipos, Tessalônica, Atenas e Corinto',
      paragrafos: [
        'A entrada na Macedônia leva Paulo a Filipos, Tessalônica e Bereia; depois a missão alcança Atenas e Corinto, na Acaia. Cada cidade apresenta perfil diferente. Filipos é colônia romana; Tessalônica possui peso regional; Atenas carrega prestígio intelectual e religioso; Corinto controla um istmo estratégico e intensa circulação comercial.',
        'Paulo adapta sua abordagem ao auditório sem alterar o núcleo do evangelho. Em sinagogas argumenta a partir das Escrituras; em Atenas dialoga com referências do ambiente pagão; em Corinto permanece por período prolongado. Geografia e cultura explicam condições de comunicação, não uma mudança de mensagem.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Éfeso e a província da Ásia',
      paragrafos: [
        'Éfeso torna-se uma base missionária de longa permanência. Grande cidade portuária, centro administrativo e religioso ligado ao culto de Ártemis, ela conecta o mar Egeu ao interior da Ásia Menor. Atos 19 mostra que a proclamação cristã começa a afetar inclusive interesses econômicos associados ao culto local.',
        'A permanência em um centro estratégico ajuda a explicar como a mensagem alcança uma região maior. Isso não significa que estratégia urbana produza conversão. O próprio livro de Atos atribui o crescimento à Palavra do Senhor e registra portas fechadas, oposição e mudanças de rota que escapam ao controle dos missionários.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Jerusalém, Cesareia e Roma: a prisão vira itinerário',
      paragrafos: [
        'A fase final de Atos não parece uma viagem missionária planejada. Paulo é preso, passa por Cesareia, apela para César e segue por mar até Roma. Tempestade, naufrágio e custódia mostram que a infraestrutura imperial não elimina risco e que a expansão do evangelho não depende de liberdade irrestrita do mensageiro.',
        'Roma aparece no final de Atos como centro imperial alcançado pela proclamação, mas o livro termina de modo aberto. O evangelho chega ao coração político do império por meio de um prisioneiro. A geografia serve à teologia narrativa: a Palavra avança apesar das limitações do mensageiro.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Rede urbana missionária',
      itens: [
        'Antioquia: base de envio e comunidade multicultural.',
        'Cidades da Ásia Menor: conexão entre sinagogas, rotas interiores e populações gentílicas.',
        'Macedônia e Acaia: avanço para centros do mundo grego e romano.',
        'Éfeso: permanência prolongada com irradiação regional.',
        'Roma: centro imperial alcançado por uma rota que inclui prisão e naufrágio.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Estratégia sem triunfalismo',
      enunciado: 'Um manual afirma: “Paulo sempre escolheu as maiores cidades porque sua estratégia perfeita garantia que o evangelho se espalhasse pelas rotas romanas”.',
      explicacao: 'A frase observa corretamente o valor de centros conectados, mas transforma um padrão real em regra absoluta e causalidade mecânica. Atos mostra direção do Espírito, mudanças de plano, perseguição, prisão e oportunidades inesperadas. Paulo planeja, usa redes e permanece em cidades importantes; o fruto, porém, não é apresentado como produto garantido de uma técnica urbana.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u15-a1',
      titulo: 'Atividade — montar uma rota com significado missionário',
      enunciado: 'Escolha cinco cidades entre Antioquia, Filipos, Tessalônica, Corinto, Éfeso, Cesareia e Roma. Para cada uma, indique uma característica geográfica ou urbana e uma função no avanço narrativo de Atos.',
      itens: [
        'Inclua pelo menos uma cidade portuária ou ligada a rota marítima.',
        'Inclua uma cidade que funcione como base prolongada.',
        'Explique por que infraestrutura favorece circulação sem ser causa suficiente da conversão.'
      ],
      resposta: 'Exemplos: Antioquia funciona como base de envio; Filipos é colônia romana na Macedônia; Corinto ocupa posição estratégica no istmo; Éfeso é grande centro portuário e base prolongada; Roma é centro imperial alcançado no fim de Atos. Estradas, portos e cidades facilitam contato e comunicação, mas Atos atribui o avanço decisivo do evangelho à ação de Deus pela Palavra e pelo Espírito.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'As viagens de Paulo formam redes regionais, não uma coleção de pontos isolados.',
        'Sinagogas, cidades, estradas e portos oferecem estruturas reais de contato.',
        'Paulo adapta linguagem e permanência às situações sem mudar o conteúdo central do evangelho.',
        'Éfeso ilustra como uma base urbana pode irradiar influência regional.',
        'Atos impede reduzir a missão a estratégia: prisões, tempestades e direção divina mostram que o avanço não é controlado pelo missionário.'
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
      nota: 'Mapas históricos do Mediterrâneo oriental, rotas e cidades relevantes à expansão apostólica.'
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
      nota: 'Fonte antiga para o ambiente político e judaico do primeiro século que forma o pano de fundo inicial de Atos.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
