import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u9-rota-exodo',
  disciplina: 'TE03',
  unidade: 9,
  titulo: 'A rota do êxodo',
  objetivo: 'Distinguir os pontos geográficos relativamente seguros, as identificações prováveis e as hipóteses abertas na reconstrução da rota do Êxodo, usando mapas como modelos argumentados e não como certezas cartográficas.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O texto fornece uma rota, mas nem todos os topônimos podem ser localizados hoje',
      paragrafos: [
        'Êxodo e Números registram regiões e estações de viagem, o que mostra que a narrativa pretende situar deslocamentos reais. A dificuldade moderna é que vários nomes antigos desapareceram, mudaram de forma ou podem corresponder a mais de um sítio. Além disso, a paisagem do delta oriental do Nilo sofreu transformações ambientais e costeiras significativas.',
        'Um mapa responsável, portanto, não deve desenhar uma linha única e contínua com aparência de GPS. Ele precisa distinguir pontos de maior confiança, áreas possíveis e segmentos cuja localização permanece debatida.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três níveis de confiança cartográfica',
      itens: [
        'Localização relativamente segura: sítio ou região possui identificação amplamente sustentada por geografia, continuidade toponímica, inscrições ou convergência de evidências.',
        'Localização provável: há bons argumentos, mas alternativas continuam plausíveis.',
        'Localização aberta: o topônimo ou trajeto não pode ser associado com segurança a coordenadas modernas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Sinai, Yam Suph e a tentação da falsa precisão',
      paragrafos: [
        'Debates sobre a localização do monte Sinai e sobre a expressão Yam Suph ilustram como tradução, geografia e tradição podem interagir. O estudante deve separar o que o texto hebraico diz, o que tradições posteriores localizaram e o que a geografia permite reconstruir.',
        'A ausência de consenso sobre uma coordenada não torna o relato sem geografia; apenas limita a precisão que podemos reivindicar. Em história antiga, reconhecer graus de certeza é parte da honestidade metodológica.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Logística importa',
      paragrafos: [
        'Rotas antigas dependem de água, passagem, pastagem, relevo e segurança. Um grande grupo não atravessa o mapa como seta abstrata. Mesmo sem localizar cada estação, a geografia ajuda a avaliar quais corredores são plausíveis e por que determinadas regiões funcionam como zonas de trânsito ou permanência.',
        'Essa observação também impede leituras excessivamente naturalistas ou excessivamente desencarnadas. Milagre e providência não removem as pessoas do espaço; o texto continua descrevendo fome, sede, acampamentos e deslocamentos reais.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u9-a1',
      titulo: 'Atividade — desenhar um mapa honesto',
      enunciado: 'Você precisa produzir um mapa didático da rota do Êxodo para uma aula. Defina como representará um ponto seguro, uma localização provável e um trecho debatido.',
      itens: [
        'Use símbolos ou linhas diferentes para graus de certeza.',
        'Inclua uma legenda explicando a diferença.',
        'Escreva uma frase que impeça o leitor de confundir hipótese cartográfica com o próprio texto bíblico.'
      ],
      resposta: 'O mapa deve usar convenções visuais distintas, como ponto sólido para localização segura, ponto vazado para provável e faixa sombreada ou linha tracejada para área debatida. A legenda deve informar que a rota é reconstrução histórica baseada em evidências de diferentes graus, enquanto o texto bíblico permanece a fonte primária para os nomes e a sequência narrativa.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O Êxodo possui geografia real, mas nem todos os topônimos antigos podem ser identificados atualmente.',
        'Mapas devem comunicar graus de certeza em vez de esconder hipóteses.',
        'Mudanças ambientais no delta e debates de toponímia limitam reconstruções excessivamente precisas.',
        'Água, relevo, pastagem e corredores de circulação ajudam a avaliar rotas plausíveis.',
        'Dizer “não sabemos exatamente” é conclusão científica legítima, não falha de fé.'
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
      nota: 'Referência cartográfica histórica para rotas e regiões do antigo Oriente Próximo, usada criticamente quanto a identificações hoje debatidas.'
    },
    {
      id: 'breasted-egito-3',
      autor: 'James Henry Breasted',
      ano: '1906',
      titulo: 'Ancient Records of Egypt, vol. III — The Nineteenth Dynasty',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/ancientrecordsof03brea_0',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'Documentação egípcia do período raméssida útil para o contexto histórico e geográfico do delta e de Canaã.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
