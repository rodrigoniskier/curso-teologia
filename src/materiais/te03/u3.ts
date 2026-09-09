import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u3-patriarcas-egito',
  disciplina: 'TE03',
  unidade: 3,
  titulo: 'Arqueologia 2',
  objetivo: 'Avaliar com rigor o que a arqueologia pode e não pode afirmar sobre o ambiente dos patriarcas e o Egito bíblico, distinguindo plausibilidade contextual, identificação histórica e silêncio documental.',
  topicosCobertos: [
    'Descobertas arqueológicas relacionadas aos patriarcas',
    'Arqueologia no Egito',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Patriarcas: contexto não é certidão de identidade',
      paragrafos: [
        'Abraão, Isaque e Jacó aparecem em narrativas de migração, pastoreio, alianças familiares, aquisição de terra, poços, cidades e rotas do antigo Oriente Próximo. A arqueologia pode estudar esses ambientes, mas famílias móveis e unidades domésticas raramente deixam a mesma assinatura material de palácios, fortalezas ou arquivos estatais.',
        'Por isso, um paralelo cultural não deve ser convertido em identificação pessoal. Encontrar documentos antigos com costumes semelhantes aos de Gênesis pode mostrar que determinado comportamento é inteligível no mundo antigo; não demonstra, sozinho, que um texto específico descreve exatamente aquela cidade, arquivo ou século.',
        'O ganho correto é mais modesto e mais forte: perguntar se paisagem, rotas, organização doméstica e práticas conhecidas tornam a narrativa historicamente situada e culturalmente plausível. A ausência do nome “Abraão” numa inscrição contemporânea não é surpreendente para um chefe de família pastoril; mas a plausibilidade geral também não deve ser vendida como prova arqueológica individual.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três níveis que não devem ser confundidos',
      itens: [
        'Compatibilidade: um costume ou ambiente descrito é conhecido em mais de um período e não cria conflito histórico evidente.',
        'Corroboração contextual: múltiplas evidências independentes se ajustam de modo significativo ao cenário de uma narrativa.',
        'Identificação direta: uma inscrição, selo ou contexto permite relacionar com segurança um indivíduo, lugar ou evento específico. É o nível mais raro para os patriarcas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O Egito preserva muito, mas não preserva tudo',
      paragrafos: [
        'A arqueologia egípcia dispõe de monumentos, inscrições, papiros, tumbas, assentamentos e enorme documentação administrativa. Essa abundância pode criar uma expectativa equivocada de que todo acontecimento importante deveria aparecer em registros oficiais. Arquivos antigos são seletivos: preservação depende de material, clima, lugar, acidente histórico e decisão institucional sobre o que valia registrar.',
        'Inscrições reais são ainda mais seletivas. Faraós constroem memória de legitimidade, ordem e vitória; derrotas e humilhações não são gêneros favoritos da propaganda estatal. Portanto, silêncio documental precisa ser avaliado perguntando se o evento, seus protagonistas e sua finalidade tornavam provável um registro preservado — e não como argumento automático de inexistência.',
        'A estela de Merneptá, do fim do século XIII a.C., é um exemplo positivo do que a evidência pode estabelecer com clareza limitada. Ela menciona Israel numa lista de inimigos em Canaã e emprega um determinativo que o caracteriza como povo, não como cidade-Estado. Isso demonstra a existência de um grupo chamado Israel reconhecível naquele cenário; não explica sua origem nem resolve sozinho a cronologia do Êxodo.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'A estela de Merneptá e a disciplina de não dizer mais que a fonte',
      enunciado: 'Um divulgador afirma: “A estela de Merneptá prova toda a narrativa do Êxodo porque menciona Israel”. Outro afirma: “Como ela não descreve o Êxodo, não possui valor para a história de Israel”.',
      explicacao: 'As duas conclusões excedem a evidência. O documento atesta que, no fim do século XIII a.C., um grupo chamado Israel era conhecido em Canaã pelo escriba egípcio. Esse dado é importante e independente da Bíblia, mas não contém uma narrativa de origem nem permite reconstruir sozinho eventos anteriores.'
    },
    {
      tipo: 'texto',
      titulo: '3. O problema do argumento pelo silêncio',
      paragrafos: [
        'Ausência de evidência pode tornar-se relevante quando temos boas razões para esperar evidência abundante, preservada e pesquisada. Mas “não encontramos” não equivale sempre a “não existiu”. Um assentamento pequeno, um grupo móvel ou um episódio politicamente embaraçoso possuem probabilidades de registro diferentes das de um palácio monumental ou decreto oficial.',
        'A posição reformada não precisa proteger a Escritura com conclusões arqueológicas infladas. Pelo contrário, pode aceitar perguntas difíceis e distinguir o que é conhecido, provável ou aberto. A fé na inspiração não autoriza chamar hipótese de fato; e o compromisso com a história real torna a precisão intelectual uma virtude, não uma ameaça.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u3-a1',
      titulo: 'Atividade — calibrar uma afirmação histórica',
      enunciado: 'Avalie três frases: (a) “nenhuma inscrição contemporânea conhecida nomeia Abraão”; (b) “logo, Abraão não existiu”; (c) “documentos e paisagens do antigo Oriente Próximo ajudam a avaliar o contexto das narrativas patriarcais”.',
      itens: [
        'Indique qual frase é observação, qual é inferência excessiva e qual representa uso contextual legítimo.',
        'Reescreva a frase (b) de modo metodologicamente responsável.',
        'Explique em uma frase o que a estela de Merneptá efetivamente acrescenta ao estudo histórico de Israel.'
      ],
      resposta: 'A é observação sobre o estado documental; B é inferência excessiva; C é uso contextual legítimo. B pode ser reescrita como: “a arqueologia conhecida não fornece identificação direta de Abraão, de modo que sua existência não pode ser demonstrada arqueologicamente por inscrição pessoal”. A estela de Merneptá atesta que um grupo chamado Israel era conhecido em Canaã no fim do século XIII a.C.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Arqueologia patriarcal trabalha sobretudo com contextos, não com identificação de indivíduos.',
        'Paralelos culturais podem mostrar plausibilidade sem fixar automaticamente uma data.',
        'Documentação egípcia é abundante, mas seletiva e condicionada por gênero e preservação.',
        'A estela de Merneptá atesta Israel em Canaã, mas não narra sua origem.',
        'Argumentos pelo silêncio precisam avaliar a probabilidade real de registro e preservação.'
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
      nota: 'Reúne documentos e paralelos do antigo Oriente Próximo usados historicamente na discussão do contexto patriarcal e egípcio; interpretações cronológicas antigas exigem atualização.'
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
      nota: 'Coleção documental da XIX dinastia que inclui a estela de Merneptá e permite consultar a referência egípcia a Israel em contexto.'
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
      nota: 'Auxilia a relacionar rotas, regiões e assentamentos das narrativas patriarcais ao espaço histórico do Levante.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
