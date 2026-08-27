import type { Verbete } from '../../tipos';

export const pentateucoLivrosHistoricos: Verbete = {
  id: 'te01-pentateuco-historicos',
  disciplina: 'TE01',
  unidade: 6,
  titulo: 'Da Criação ao Retorno: Pentateuco e Livros Históricos',
  subtitulo: 'A narrativa do Antigo Testamento não é uma sequência de heróis: é a história da aliança atravessando criação, êxodo, terra, reino, exílio e restauração',
  objetivo:
    'Ao final, você saberá situar Gênesis a Ester na história redentiva, reconhecer propósito e estrutura dos livros, avaliar com justiça os debates sobre autoria e composição do Pentateuco e dos livros históricos e perceber como lei, terra, reino, templo, exílio e retorno formam uma única trama pactual.',
  atualizadoEm: '2026-08-27',
  verMais: ['te01-at-inspiracao-critica', 'te01-canon-at', 'te14-teologia-biblica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Gênesis começa com um mundo que pertence a Deus; Ester termina com o povo de Deus espalhado dentro de um império estrangeiro. Entre esses extremos estão patriarcas, escravidão, êxodo, Sinai, deserto, terra, juízes, monarquia, templo, divisão, exílio e retorno. Ler cada livro isoladamente é possível; compreender por que eles foram preservados juntos exige enxergar essa sequência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O eixo não é o progresso moral dos personagens. Abraão mente, Jacó engana, Moisés falha, os juízes pioram, Davi peca gravemente, Salomão divide seu coração e os reis conduzem o povo ao exílio. A continuidade está na fidelidade de Deus às promessas que sobrevivem à fraqueza de seus portadores.',
    },
    { tipo: 'secao', titulo: 'Gênesis: criação, queda e promessa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Gênesis 1–11 oferece o horizonte universal: Deus cria, o ser humano se rebela, o pecado se expande, o juízo não elimina a graça e as nações se espalham. Em Gênesis 12 o foco se estreita para Abraão, mas a finalidade continua universal: por sua descendência, as famílias da terra serão abençoadas. A eleição de uma família é instrumento da intenção de Deus para as nações, não abandono delas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os ciclos de Abraão, Isaque, Jacó e José mostram promessa avançando por esterilidade, fome, conflito familiar e deslocamento. O livro termina no Egito, o lugar que preservou a família durante a fome e que se tornará, no livro seguinte, a casa da servidão. Essa transição literária impede separar Gênesis de Êxodo.',
    },
    { tipo: 'secao', titulo: 'Êxodo: redenção forma um povo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Êxodo não termina quando Israel atravessa o mar. A libertação do faraó leva ao Sinai, e o Sinai leva ao tabernáculo. O movimento é de escravos servindo um senhor opressor para um povo livre servindo o Senhor que os resgatou. Lei e graça, portanto, não aparecem como dois programas rivais: o Decálogo começa lembrando a redenção já realizada antes de ordenar a vida que deve segui-la.',
    },
    {
      tipo: 'passagem',
      referencia: 'Êxodo 20.2',
      texto:
        'Antes dos mandamentos, Deus se identifica como aquele que tirou Israel da terra do Egito e da casa da servidão.',
    },
    { tipo: 'secao', titulo: 'Levítico, Números e Deuteronômio: presença, peregrinação e renovação', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Levítico responde à pergunta criada pelo final de Êxodo: como um Deus santo pode habitar no meio de um povo pecador? Sacrifícios, sacerdócio, pureza e Dia da Expiação organizam aproximação e comunhão. A legislação não é um catálogo arbitrário; gira em torno da santidade de Deus, da vida comunitária e da manutenção simbólica da presença divina.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Números alterna preparação, marcha, rebelião e nova preparação. A geração que sai do Egito não entra na terra por incredulidade; ainda assim, a promessa não morre com ela. O livro termina com outra geração no limiar de Canaã. A repetição é teológica: Deus disciplina o povo sem cancelar sua palavra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Deuteronômio apresenta Moisés renovando a aliança com essa geração. Não é mera repetição legal. Reconta a história, reaplica mandamentos à vida na terra e concentra obediência no amor ao Senhor. Bênção, maldição, testemunhas da aliança e promessa de restauração fornecerão o vocabulário que os livros históricos e os profetas usarão para interpretar o que acontece depois.',
    },
    { tipo: 'secao', titulo: 'Quem escreveu o Pentateuco?', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição bíblica associa a Torá de maneira singular a Moisés: ele escreve leis, registra jornadas, entrega o livro da aliança e é apresentado posteriormente como mediador legislativo fundamental. Ao mesmo tempo, o próprio Pentateuco contém material que exige perspectiva posterior, sendo Deuteronômio 34 — a morte de Moisés — o caso mais óbvio. Reconhecer edição ou complementação posterior não é o mesmo que negar a matriz mosaica.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como explicar a composição do Pentateuco?',
      posicoes: [
        {
          escola: 'Autoria mosaica estrita',
          sintese:
            'Atribui a Moisés praticamente toda a redação, excetuando notas evidentemente posteriores. Preserva com força o testemunho canônico sobre Moisés e a unidade da obra, mas pode tratar como ameaça dados literários que admitem história redacional sem negar a autoridade do texto.',
        },
        {
          escola: 'Hipóteses documentárias clássicas',
          sintese:
            'Explicam repetições, vocabulário e diferenças de perspectiva por grandes fontes tradicionalmente identificadas como J, E, D e P, combinadas em etapas posteriores. Tiveram enorme influência e identificaram padrões reais, mas a reconstrução exata das fontes, datas e redatores mudou repetidamente e hoje é muito menos consensual do que versões populares do modelo sugerem.',
        },
        {
          escola: 'Matriz mosaica com composição e edição providenciais',
          sintese:
            'Recebe Moisés como figura histórica e legislativa central, admite uso de fontes e trabalho editorial onde o texto o permite e julga propostas composicionais caso a caso. Seu ganho é não confundir inspiração com ditado; seu dever é não usar “edição” como palavra vaga para evitar evidências difíceis.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'Josué, Juízes e Rute: terra recebida e fidelidade testada', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Josué apresenta a entrada na terra como cumprimento da promessa e, ao mesmo tempo, deixa tensões abertas: há vitórias decisivas e território ainda a possuir. O livro termina com renovação da aliança, mostrando que possuir a terra nunca foi simples questão geopolítica; a permanência nela é narrada dentro da relação pactual.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Juízes desmonta progressivamente a ideia de que Israel pode viver sem fidelidade central. Seus ciclos não melhoram: deterioram. A frase recorrente de que cada um fazia o que parecia certo aos próprios olhos prepara a pergunta pela realeza, mas o restante do cânon mostrará que um rei, por si só, também não resolve o coração do povo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Rute ocorre nesse período turbulento e trabalha em escala doméstica. Fome, viuvez, lealdade, resgate e providência silenciosa conduzem uma estrangeira moabita à genealogia de Davi. A história pequena torna visível que a preservação da promessa acontece também fora de palácios, guerras e grandes discursos.',
    },
    { tipo: 'secao', titulo: 'Samuel, Reis e Crônicas: a pergunta pelo reino', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Samuel narra a passagem dos juízes à monarquia. O pedido por um rei contém ambiguidade: a realeza estava prevista na Torá, mas Israel deseja ser “como todas as nações”. Saul demonstra que aparência e poder não bastam; Davi recebe uma promessa dinástica que se tornará eixo messiânico, embora sua própria história impeça transformá-lo em herói sem pecado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Reis interpreta a história da monarquia à luz da aliança. A pergunta recorrente não é se o rei foi economicamente eficiente ou militarmente brilhante, mas se fez o que era reto diante do Senhor, como lidou com idolatria e como respondeu à palavra profética. A queda de Samaria e Jerusalém é apresentada como sanção pactual acumulada, não como acidente sem explicação teológica.',
    },
    {
      tipo: 'termo',
      termo: 'História deuteronomista',
      texto:
        'Nome dado na pesquisa moderna à percepção de forte unidade de linguagem e teologia entre Deuteronômio e Josué–Reis. A observação de vínculos é valiosa; mais discutível é transformar a semelhança automaticamente numa reconstrução específica de autoria tardia. Para a leitura canônica, o dado seguro é que os livros realmente interpretam a história com categorias de aliança articuladas em Deuteronômio.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Crônicas reconta muito do mesmo período, mas não é uma cópia defeituosa de Samuel e Reis. Escreve para uma comunidade pós-exílica, amplia genealogias, destaca Davi, templo, levitas, culto e possibilidades de retorno. A seleção diferente revela que historiografia bíblica pode narrar fatos verdadeiros com propósito teológico explícito sem fingir neutralidade moderna.',
    },
    { tipo: 'secao', titulo: 'Esdras, Neemias e Ester: retorno sem consumação', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Esdras e Neemias mostram templo reconstruído, ensino da Torá, muros restaurados e reformas comunitárias. Há retorno real, mas não restauração plena: o povo continua sob impérios estrangeiros, o pecado reaparece e a glória esperada pelos profetas não se esgota nesses acontecimentos. O final canônico da história ainda deixa expectativa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ester acompanha judeus que permaneceram na diáspora. O nome de Deus não aparece explicitamente, justamente enquanto coincidências, reversões e preservação dominam a narrativa. O livro ensina providência sem precisar nomeá-la a cada parágrafo: o povo ameaçado de eliminação sobrevive dentro do império onde parece politicamente vulnerável.',
    },
    { tipo: 'secao', titulo: 'História ou teologia?', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A alternativa é falsa. Os livros históricos pretendem falar de acontecimentos e fazem isso teologicamente. Inscrições assírias, geografia, cronologias vizinhas e arqueologia podem iluminar ou tensionar reconstruções; não substituem a análise do gênero nem transformam o texto bíblico em ata administrativa. O historiador antigo seleciona, organiza e interpreta — e a Bíblia não oculta que faz isso sob a palavra de Deus.',
    },
    {
      tipo: 'definicao',
      termo: 'Trama histórica do Antigo Testamento',
      texto:
        'É o movimento de criação e queda para promessa, êxodo e aliança; da aliança para terra e reino; do reino infiel para exílio; e do exílio para um retorno verdadeiro, porém incompleto. Essa trama dá unidade ao Pentateuco e aos livros históricos e prepara a esperança de um descendente, um rei e uma restauração que excedem qualquer personagem ou retorno já narrado.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Esses livros são perigosos quando viram coleção de exemplos morais. Abraão não está ali apenas para ensinar coragem, José para ensinar administração e Davi para ensinar liderança. A pergunta maior é como Deus preserva sua promessa através de gente real, pecadora e frequentemente incapaz de carregar o peso que recebeu. A leitura cristã chega a Cristo não porque força seu nome em cada detalhe, mas porque a própria história termina repetidamente mostrando que a promessa precisa de alguém maior que seus portadores anteriores.',
    },
  ],
  fontes: [
    {
      id: 'sefaria-tanakh',
      autor: 'Sefaria',
      titulo: 'Tanakh — texto hebraico',
      publicacao: 'Sefaria',
      url: 'https://www.sefaria.org/texts/Tanakh',
      idioma: 'he',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Fonte primária para consultar a sequência, estrutura hebraica e texto dos livros tratados.',
    },
    {
      id: 'fairbairn-typology',
      autor: 'Patrick Fairbairn',
      ano: '1845–1847',
      titulo: 'The Typology of Scripture',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/typologyofscript00fairuoft',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Clássico reformado para continuidade histórica, tipologia e relação entre instituições veterotestamentárias e seu cumprimento.',
    },
    {
      id: 'josefo-obras',
      autor: 'Flávio Josefo',
      ano: 'c. 93–94',
      titulo: 'The Works of Flavius Josephus',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/workstranslatedb00joseuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Testemunho judaico antigo da recepção e releitura da história de Israel; usado como fonte histórica secundária ao próprio texto bíblico.',
    },
    {
      id: 'luckenbill-assiria-2',
      autor: 'Daniel David Luckenbill, trad. e ed.',
      ano: '1927',
      titulo: 'Ancient Records of Assyria and Babylonia, vol. II',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/LuckenbillAncientRecordsAssyria02',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Traduções de inscrições reais assírias úteis para o pano de fundo de Reis, Crônicas e da crise de Judá.',
    },
    {
      id: 'smith-historical-geography',
      autor: 'George Adam Smith',
      ano: '1894',
      titulo: 'The Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historicalgeogra00smit',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Ajuda a situar terra, rotas e regiões que estruturam a narrativa histórica do AT.',
    },
  ],
};
