import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u6-geografia-fisica-palestina',
  disciplina: 'TE03',
  unidade: 6,
  titulo: 'Geografia física da Palestina',
  objetivo: 'Reconhecer os principais limites e faixas físicas da Palestina, relacionando planícies, vales, planaltos, montes, águas, desertos e clima à circulação e à leitura das narrativas bíblicas.',
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
      titulo: '1. Limites que variam conforme o período',
      paragrafos: [
        '“Palestina” é usado aqui como designação geográfica ampla do sul do Levante, não como fronteira política única válida para todos os períodos bíblicos. Israel, Judá, províncias imperiais e administrações posteriores ocuparam áreas diferentes. Para exegese, é mais seguro começar por mar, desertos, vale do Jordão, serras e regiões vizinhas antes de projetar fronteiras modernas sobre textos antigos.',
        'A oeste está o Mediterrâneo; a leste, a depressão do Jordão e os planaltos transjordanianos; ao sul, regiões progressivamente áridas; ao norte, Galileia, vales e conexões com Fenícia e Síria. Esses limites naturais são permeáveis: comércio, guerra e migração os atravessam continuamente.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Faixas físicas para construir o mapa mental',
      ordenada: true,
      itens: [
        'Planície costeira: terreno relativamente baixo e aberto junto ao Mediterrâneo, mais favorável a grandes deslocamentos e rotas internacionais que a serra central.',
        'Sefelá: colinas baixas entre a costa e as montanhas de Judá; seus vales funcionam como portas de acesso ao interior.',
        'Montanhas centrais: espinha dorsal de Judá, Benjamim, Efraim e Samaria; Jerusalém situa-se nessa faixa elevada.',
        'Vale do Jordão: depressão profunda que corre do norte ao mar Morto e cria forte contraste de altitude em pequena distância.',
        'Planaltos da Transjordânia: regiões elevadas a leste, associadas a Gileade, Amom, Moabe e Edom em diferentes épocas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Planícies, vales, planaltos e montes são rotas e barreiras',
      paragrafos: [
        'Planícies favorecem agricultura e movimentação de carros e exércitos; vales canalizam acessos; planaltos oferecem áreas de pastoreio e corredores interiores; montes podem proteger, isolar ou exigir longas subidas. Por isso cidades fortificadas em pontos de passagem adquirem valor estratégico desproporcional.',
        'A Bíblia usa “subir” e “descer” de modo frequentemente literal. Jerusalém está na região montanhosa, enquanto Jericó fica na depressão do Jordão. Uma viagem relativamente curta entre as duas envolve grande diferença de altitude. O relevo muda o ritmo, o risco e a compreensão de uma cena.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Rios, mares e lagos',
      paragrafos: [
        'O Jordão funciona como eixo geográfico, fronteira e lugar de travessia, mas não possui o papel econômico do Nilo. O mar da Galileia sustenta pesca e assentamentos do norte; o mar Morto ocupa a grande depressão ao sul e recebe água sem saída fluvial. O Mediterrâneo conecta a costa a redes marítimas mais amplas.',
        'Fontes, cisternas e cursos menores também são decisivos. Em ambiente de verão seco, uma cidade ou fortaleza depende de água armazenada ou protegida. Narrativas de poços, fontes, cercos e disputas por água refletem infraestrutura vital, não detalhes incidentais.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Desertos e clima: poucos quilômetros podem mudar o ambiente',
      paragrafos: [
        'O deserto da Judeia fica a leste das montanhas centrais e recebe muito menos chuva que áreas expostas ao Mediterrâneo. Mais ao sul, o Neguebe forma outra grande zona árida. “Deserto” pode incluir estepes e áreas de pastagem sazonal, de modo que o termo não deve ser imaginado sempre como mar de dunas.',
        'As chuvas concentram-se entre outono e primavera. O ar úmido vindo do Mediterrâneo perde água ao subir as serras; depois de cruzá-las, desce mais seco em direção ao Jordão. Esse efeito ajuda a explicar o contraste entre Jerusalém e Jericó.',
        'Deuteronômio 11 contrasta Canaã com o Egito: a terra de montes e vales “da chuva dos céus beberá as águas”. Essa dependência climática possui dimensão teológica no próprio texto e ajuda a compreender por que cultos ligados à tempestade e fertilidade podiam exercer atração.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Jerusalém–Jericó: um verbo que contém geografia',
      enunciado: 'Lucas descreve um homem que “descia de Jerusalém para Jericó”.',
      explicacao: 'O verbo acompanha um deslocamento real da serra central para a profunda depressão do Jordão. A estrada atravessa ambiente mais árido e acidentado, o que dá concretude ao cenário de viagem e vulnerabilidade. O dado geográfico melhora a leitura quando explica o texto; não precisa virar curiosidade desconectada no sermão.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u6-a1',
      titulo: 'Atividade — ler o relevo como contexto',
      enunciado: 'Um estudante vê num texto as expressões “subiu a Jerusalém”, “desceu ao Jordão” e “atravessou o deserto da Judeia” e afirma que são apenas figuras espirituais.',
      itens: [
        'Explique quais elementos físicos precisam ser conferidos antes de propor sentido figurado.',
        'Relacione altitude, chuva e rotas a pelo menos duas das expressões.',
        'Indique quando um dado geográfico merece entrar numa explicação exegética.'
      ],
      resposta: 'Primeiro deve-se verificar a topografia literal: Jerusalém está na serra central, o Jordão numa depressão profunda e o deserto da Judeia na sombra de chuva a leste. Altitude explica “subir/descer”, e clima ajuda a caracterizar o deserto. O dado geográfico merece destaque quando altera a compreensão de movimento, risco, estratégia, economia ou imagem empregada pelo texto.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Os limites políticos mudam, mas as grandes estruturas físicas fornecem um mapa estável para a leitura.',
        'Costa, Sefelá, serra central, Jordão e Transjordânia organizam boa parte da geografia palestina.',
        'Planícies, vales, planaltos e montes afetam agricultura, defesa e circulação.',
        'Jordão, mar da Galileia, mar Morto e Mediterrâneo possuem funções distintas.',
        'Clima mediterrânico e zonas áridas próximas ajudam a explicar água, agricultura, deslocamentos e imagens bíblicas.'
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
      nota: 'Descrição clássica das regiões físicas, rotas e relações entre terreno e história da Palestina.'
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
      nota: 'Mapas de relevo, chuva, rotas e divisões regionais usados para localizar as faixas físicas estudadas.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
