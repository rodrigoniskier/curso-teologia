import type { Verbete } from '../../tipos';

export const igrejaBrasileira: Verbete = {
  id: 'th05-igreja-brasileira',
  disciplina: 'TH05',
  unidade: 2,
  titulo: 'História da Igreja no Brasil',
  subtitulo: 'Duas chegadas reformadas que fracassaram, e a terceira que ficou',
  objetivo:
    'Ao final, você saberá que a primeira confissão reformada das Américas foi escrita na Guanabara em 1558, entenderá por que aquela tentativa e a holandesa em Pernambuco não deixaram igreja, distinguirá protestantismo de imigração de protestantismo de missão, saberá por que o presbiterianismo brasileiro se dividiu três vezes, e terá um quadro honesto de por que o pentecostalismo cresceu onde as igrejas históricas não cresceram.',
  atualizadoEm: '2026-08-16',
  verMais: ['th04-igreja-moderna', 'tp07-teologia-de-missoes', 'ts11-subscricao-confessional'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Pergunte a um presbiteriano brasileiro quando a fé reformada chegou ao país e a resposta provável será 1859, com a chegada de Simonton. É uma boa resposta para a igreja que existe hoje. Como fato histórico, atrasa a conta em trezentos anos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1557, catorze calvinistas enviados de Genebra desembarcaram numa ilha da baía de Guanabara. No ano seguinte, quatro deles redigiram uma confissão de fé — e três foram executados por causa dela. É o primeiro documento confessional reformado escrito nas Américas, e foi escrito no Rio de Janeiro.',
    },
    {
      tipo: 'secao',
      titulo: 'A primeira chegada: Guanabara, 1557',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O contexto é uma disputa colonial. A França tentava firmar-se no litoral sul e instalou na Guanabara a chamada França Antártica, sob o comando de Nicolas Durand de Villegagnon. Precisando de gente, Villegagnon escreveu a Genebra pedindo colonos e ministros — e Calvino atendeu, enviando um grupo que incluía dois pastores e o jovem Jean de Léry, cujo relato é a fonte principal de tudo o que sabemos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A convivência durou meses. O desacordo estourou onde era previsível: na ceia. Villegagnon acabou rompendo com os genebrinos e exigiu deles uma declaração escrita sobre os pontos em disputa. Quatro homens — Jean du Bourdel, Matthieu Vermeil, Pierre Bourdon e André la Fon — redigiram, sem biblioteca e em poucas horas, dezessete artigos que ficaram conhecidos como a **Confissão da Guanabara**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Villegagnon mandou executar três deles: dois estrangulados e lançados ao mar, um terceiro morto em seguida. La Fon, alfaiate, foi poupado porque era útil. Léry escapou por estar em terra firme entre os tupinambás, e voltou à Europa para publicar, vinte anos depois, o relato que preserva a história.',
    },
    {
      tipo: 'citacao',
      texto:
        'Cremos que somos feitos participantes de Jesus Cristo somente pela fé, e que essa fé nos é dada pelo Espírito Santo, o qual habita em nós.',
      autor: 'Confissão da Guanabara',
      obra: 'reproduzida no relato de Jean de Léry',
      fonteId: 'lery-pt',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale notar o que essa história ensina e o que ela não autoriza. Ela ensina que a fé reformada esteve no Brasil desde o primeiro século de colonização, e que os três executados são os primeiros mártires protestantes do continente. Não autoriza dizer que houve ali uma igreja brasileira: os envolvidos eram franceses, o esforço não alcançou a população local e a colônia foi destruída pelos portugueses em 1560.',
    },
    {
      tipo: 'secao',
      titulo: 'A segunda: Pernambuco holandês, 1630–1654',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Setenta anos depois vem a tentativa mais organizada. A Companhia das Índias Ocidentais toma Pernambuco e instala ali, por vinte e quatro anos, uma administração holandesa reformada. Sob Maurício de Nassau há tolerância religiosa incomum para a época — católicos e judeus mantêm culto, e a primeira sinagoga das Américas é aberta no Recife.',

    },
    {
      tipo: 'paragrafo',
      texto:
        'A estrutura eclesiástica montada foi séria: dezenas de congregações, ministros vindos da Holanda, e concílios reunidos em solo brasileiro — o primeiro presbitério das Américas se reuniu no Recife na década de 1630, mais de um século antes de qualquer coisa parecida na América do Norte. Houve inclusive trabalho missionário entre indígenas e tradução de material religioso.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E também não ficou nada. Em 1654 os holandeses são expulsos, e com eles vai a igreja inteira: pastores, membros e estrutura. O motivo é a lição que os dois episódios ensinam juntos, e é uma lição missiológica antes de ser histórica.',
    },
    {
      tipo: 'definicao',
      termo: 'Igreja de bandeira',
      texto:
        'Presença cristã que existe como apêndice de um projeto político ou comercial estrangeiro, dependendo dele para subsistir. Enquanto a bandeira permanece, a igreja funciona e pode até prosperar; quando a bandeira se retira, a igreja se retira junto, porque nunca criou raiz na população do lugar nem liderança nascida dela. Guanabara e o Recife holandês são os dois exemplos brasileiros.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Compare com o padrão de Atos, em que Paulo nomeia presbíteros locais e parte. A diferença não é de piedade nem de doutrina — os holandeses eram calvinistas ortodoxos, com confissão e disciplina. A diferença é que a igreja continuava sendo deles, e não do lugar.',
    },
    {
      tipo: 'secao',
      titulo: 'O século XIX: imigração e missão',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A presença protestante permanente começa no século XIX, e é preciso separar duas coisas que costumam ser confundidas, porque a diferença entre elas explica quase tudo o que veio depois.',
    },
    {
      tipo: 'lista',
      itens: [
        'Protestantismo de imigração: comunidades que chegam com os imigrantes e cultuam na língua deles — luteranos alemães no Sul, a partir de 1824. Preservam a fé dentro do grupo, mas não se propõem a evangelizar o brasileiro; a igreja acompanha a etnia.',
        'Protestantismo de missão: obreiros enviados com o propósito explícito de evangelizar a população local, em português, formando igrejas nacionais. É daqui que saem as denominações que hoje chamamos históricas.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O primeiro trabalho de missão duradouro entre brasileiros é o do médico escocês Robert Reid Kalley, a partir de 1855. Em 1859 chega Ashbel Green Simonton, enviado pela Igreja Presbiteriana dos Estados Unidos, com vinte e seis anos. Ele organiza a primeira igreja presbiteriana no Rio de Janeiro em 1862, funda o jornal *Imprensa Evangélica* em 1864 e um seminário em 1867 — e morre nesse mesmo ano, aos trinta e três, de febre amarela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que ele fez em oito anos, porque a escolha é deliberada e explica a diferença em relação às duas tentativas anteriores: igreja, imprensa e seminário. Isto é — congregação, meio de circulação de ideias em português e formação de ministros nacionais. Nenhuma das três depende de a bandeira estrangeira permanecer.',
    },
    {
      tipo: 'secao',
      titulo: 'As divisões, e o que estava em jogo em cada uma',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O presbiterianismo brasileiro se dividiu mais de uma vez, e vale conhecer os motivos sem o partidarismo que costuma acompanhar a narração — inclusive porque o leitor deste portal provavelmente pertence a um dos lados.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Em 1903, a questão imediata era a maçonaria — se um presbítero podia pertencer à ordem —, mas por baixo dela corria outra: o grau de tutela das missões estrangeiras sobre a igreja nacional e o lugar da formação teológica. Do rompimento nasce a Igreja Presbiteriana Independente.',
        'Em 1940 forma-se a Igreja Presbiteriana Conservadora, em disputas sobre disciplina e orientação doutrinária.',
        'Em 1978, a Igreja Presbiteriana Unida se organiza a partir de conflitos do período em que a denominação, como o país, atravessava o regime militar — com desacordo sobre a atuação social da igreja e sobre a liberdade de docentes e estudantes nos seminários.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um padrão atravessa as três: em cada caso havia uma questão de princípio real e, junto dela, uma disputa sobre quem decide. Ler só o princípio produz uma história de heróis; ler só o poder produz uma história de intrigas. As duas leituras isoladas são falsas.',
    },
    {
      tipo: 'secao',
      titulo: 'O pentecostalismo, e a pergunta que ele faz às históricas',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1910 chega a São Paulo o italiano Louis Francescon, e no ano seguinte dois suecos, Daniel Berg e Gunnar Vingren, desembarcam em Belém. Do primeiro nasce a Congregação Cristã no Brasil; dos segundos, a Assembleia de Deus. Cem anos depois, o pentecostalismo é a maior expressão do protestantismo brasileiro, por larga margem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A explicação não cabe em desprezo. Aquelas igrejas foram, desde o início, dirigidas por brasileiros, sem exigir diploma para pregar; instalaram-se onde a população pobre de fato morava, e não onde havia salão disponível; falavam de cura e de intervenção divina numa população para quem doença e desemprego não eram assunto teórico; e adotaram uma liturgia que não pressupunha leitura fluente. As igrejas históricas, com melhor formação teológica, cresceram menos porque atenderam menos gente onde a gente estava.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A partir dos anos 1970 aparece uma segunda onda, comumente chamada neopentecostal, com ênfase na prosperidade material, na guerra espiritual e em estruturas mais centralizadas. Aqui a crítica reformada é doutrinária e específica, e não deve ser confundida com a avaliação do pentecostalismo clássico: o problema não é esperar que Deus atue, é a inversão pela qual a fé se torna instrumento de obtenção de bens e o fiel, cliente de um serviço.',
    },
    {
      tipo: 'controversia',
      titulo: 'O que fazer com o crescimento pentecostal',
      posicoes: [
        {
          escola: 'Leitura de contraste',
          sintese:
            'O crescimento se explica por concessões — teologia rasa, emocionalismo, promessas que a Escritura não faz — e a igreja reformada não deve imitá-lo, porque números não são critério de fidelidade. Acerta ao recusar o pragmatismo, mas usa o argumento como anestésico: serve para nunca perguntar por que a igreja fiel não alcançou o vizinho pobre.',
        },
        {
          escola: 'Leitura de aprendizado',
          sintese:
            'O crescimento se explica por acertos que as históricas não tiveram — liderança nacional desde o início, presença na periferia, linguagem acessível —, e esses acertos são imitáveis sem adotar a doutrina. Acerta ao separar método de conteúdo, mas precisa de vigilância: a mesma abertura, mal conduzida, importa junto o que se queria deixar de fora.',
        },
        {
          escola: 'Leitura de autocrítica histórica',
          sintese:
            'A pergunta certa não é sobre o pentecostalismo e sim sobre as históricas: por que uma igreja com melhor teologia se tornou, na prática, igreja de classe média letrada? Tem o mérito de olhar para o próprio lado, e o risco de transformar culpa em paralisia, como se ter errado no passado dispensasse decidir o que fazer agora.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Há um uso ruim desta matéria e um bom. O ruim é sair dela com uma lista de culpados — Villegagnon, os holandeses, os maçons, os pentecostais —, o que é confortável e não muda nada. O bom é reparar no que se repete. Duas vezes uma igreja reformada teologicamente sólida desapareceu do Brasil sem deixar rastro, e não foi por erro doutrinário: foi por não ter criado raiz na gente do lugar nem liderança nascida dela. A terceira vez ficou porque um rapaz de vinte e seis anos, que morreria oito anos depois, gastou o pouco tempo que teve fundando igreja, jornal e seminário — coisas que continuariam funcionando sem ele. É essa a pergunta a levar para a igreja onde você serve: o que aqui continua de pé se eu não estiver, e quem daqui está sendo preparado para conduzir?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sobre a história da própria IPB — atas, controvérsias internas e documentos oficiais — o portal ainda não tem verbete, e o motivo é declarado: não encontramos fontes livres à altura, apenas material secundário disperso. Enquanto não houver, é melhor não ter verbete do que ter um mal fundamentado.',
    },
  ],
  fontes: [
    {
      id: 'lery-pt',
      autor: 'Jean de Léry',
      ano: '1578',
      titulo: 'História de uma viagem feita à terra do Brasil',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historiadeumavia00lery',
      idioma: 'pt',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tradução portuguesa do relato de testemunha ocular da França Antártica, com o episódio da Confissão da Guanabara e a execução dos três. É também um dos primeiros registros etnográficos sobre os tupinambás. Domínio público — e uma das poucas fontes primárias desta biblioteca disponíveis em português.',
    },
    {
      id: 'lery-fr',
      autor: 'Jean de Léry',
      ano: '1578',
      titulo: 'Histoire d’un voyage fait en la terre du Brésil — edição original',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/histoiredunvoyag01lryj',
      idioma: 'fr',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A primeira edição, de La Rochelle. Útil para conferir passagens em que as traduções divergem, sobretudo nos capítulos sobre o rompimento com Villegagnon. Domínio público.',
    },
    {
      id: 'simonton-sermoes',
      autor: 'Ashbel Green Simonton',
      ano: '1867',
      titulo: 'Sermões escolhidos',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/sermoesescolhido00simo',
      idioma: 'pt',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Os sermões do fundador do presbiterianismo brasileiro, em português. Permite verificar em fonte primária o que ele de fato pregava, em vez de depender da imagem construída depois. Domínio público.',
    },
    {
      id: 'warneck-missoes',
      autor: 'Gustav Warneck',
      ano: '1901',
      titulo:
        'Outline of a History of Protestant Missions from the Reformation to the Present Time',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/outlineofhistorypc00warn',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Situa as missões protestantes na América Latina dentro do quadro mundial do século XIX, útil para entender por que a onda que produziu Kalley e Simonton chegou quando chegou. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O padrão doutrinário adotado pelas igrejas presbiterianas brasileiras, inclusive as surgidas das divisões tratadas aqui — o que é, por si, um dado relevante sobre a natureza daquelas disputas.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Reúne textos em português sobre a Confissão da Guanabara e a história do protestantismo brasileiro, úteis como porta de entrada — com a ressalva de que são material secundário e devem ser conferidos contra as fontes primárias listadas acima.',
    },
  ],
};
