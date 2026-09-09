import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u14-imperio-romano',
  disciplina: 'TE03',
  unidade: 14,
  titulo: 'O Império Romano',
  objetivo: 'Situar a extensão e as principais infraestruturas do Império Romano no primeiro século, reconhecendo como estradas, portos, administração e relativa segurança favoreceram circulação sem idealizar a dominação imperial.',
  topicosCobertos: [
    'Extensão do Império Romano',
    'Benefícios trazidos pelo Império Romano',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Um império mediterrânico de escala continental',
      paragrafos: [
        'No primeiro século, Roma controla vastas áreas da Europa, norte da África e Oriente Próximo, articuladas em províncias, reinos clientes, cidades e redes militares. O Mediterrâneo funciona como grande corredor interno de circulação, ainda que viagens marítimas permaneçam sazonais e perigosas.',
        'A Palestina integra esse sistema de maneiras diferentes conforme o período: partes podem estar sob governadores romanos ou sob governantes herodianos subordinados a Roma. A presença imperial aparece em impostos, tropas, cidadania, tribunais, moedas, estradas e decisões políticas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O que se costuma chamar de pax Romana',
      paragrafos: [
        'A expressão pax Romana descreve relativa estabilidade política em amplas áreas do império quando comparada a períodos de guerras sucessivas entre Estados rivais. Essa estabilidade, somada a estradas, rotas marítimas, cidades e administração, facilita deslocamento e comunicação em escala ampla.',
        '“Paz”, porém, é palavra que precisa de nuance. Roma mantém ordem por poder militar, tributos, repressão e desigualdades jurídicas. Rebeliões podem ser punidas com extrema violência. Portanto, a infraestrutura imperial pode favorecer circulação ao mesmo tempo que o próprio império é agente de coerção.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Benefícios de infraestrutura sem propaganda imperial',
      itens: [
        'Estradas: conectam centros administrativos e militares e também são usadas por comerciantes, viajantes e missionários.',
        'Portos e navegação: ligam províncias do Mediterrâneo e tornam possíveis viagens longas, embora clima e naufrágios continuem reais.',
        'Cidades: oferecem mercados, tribunais, sinagogas, associações e redes de comunicação.',
        'Administração e direito: criam procedimentos relativamente padronizados; a cidadania romana de Paulo, por exemplo, possui consequências jurídicas concretas.',
        'Línguas de circulação: o grego koiné permanece amplamente usado no leste, facilitando comunicação entre populações diversas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Providência não é elogio do império',
      paragrafos: [
        'É legítimo reconhecer que determinadas condições romanas favoreceram a circulação do evangelho. Atos mostra Paulo utilizando estradas, cidades, navios e direitos jurídicos. Mas o mesmo livro mostra prisões, violência, expulsões, interesses econômicos e riscos de viagem.',
        'A leitura providencial não transforma Roma em agente redentor. Deus governa inclusive estruturas imperfeitas e coercitivas e pode usá-las para fins que elas não pretendem. A causa teológica do avanço do evangelho permanece a ação de Deus por sua Palavra e Espírito; a infraestrutura é contexto e meio histórico.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Cidadania romana como recurso jurídico',
      enunciado: 'Em Atos, Paulo recorre a sua condição de cidadão romano em momentos de detenção e apela para César.',
      explicacao: 'O episódio mostra como o sistema jurídico imperial podia criar recursos reais, embora desiguais, dentro de um regime coercitivo. A cidadania não torna Roma justa em sentido absoluto; ela ajuda a explicar por que determinado prisioneiro possui caminhos processuais que outros não possuem.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u14-a1',
      titulo: 'Atividade — avaliar a expressão “Roma preparou o caminho para o evangelho”',
      enunciado: 'Escreva uma avaliação de quatro frases da afirmação “o Império Romano preparou o caminho para o evangelho”.',
      itens: [
        'Mencione dois fatores que facilitaram circulação.',
        'Mencione duas formas de coerção ou risco que impedem idealizar Roma.',
        'Diferencie meio providencial de causa do crescimento da igreja.'
      ],
      resposta: 'Estradas, portos, cidades, relativa estabilidade e procedimentos jurídicos facilitaram circulação. Ao mesmo tempo, impostos, repressão militar, desigualdade e perseguições mostram que Roma não era um reino benevolente. Na leitura cristã, Deus pode usar estruturas imperiais como meios históricos; o crescimento da igreja é atribuído à ação divina pela Palavra e pelo Espírito, não à eficiência de Roma.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Roma articula grande parte do Mediterrâneo por províncias, cidades, estradas e rotas marítimas.',
        'A Palestina participa do sistema romano por administrações diretas e reinos clientes.',
        'A relativa estabilidade imperial favorece circulação, mas é sustentada também por coerção.',
        'Estradas, portos, cidades e direito ajudam a explicar o ambiente missionário apostólico.',
        'Providência divina não deve ser confundida com aprovação moral do império.'
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
      nota: 'Fonte antiga para administração romana, relações herodianas, guerra e instituições da Palestina no primeiro século.'
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
      nota: 'Mapas históricos para províncias, rotas e expansão mediterrânica no período do Novo Testamento.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
