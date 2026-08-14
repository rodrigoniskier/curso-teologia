import type { Verbete } from '../../tipos';

export const trindade: Verbete = {
  id: 'ts01-trindade',
  disciplina: 'TS01',
  unidade: 15,
  titulo: 'A Doutrina da Trindade',
  subtitulo: 'Como a Igreja chegou a uma fórmula que ninguém queria inventar',
  objetivo:
    'Ao final, você saberá por que a Trindade não foi imposta ao texto mas extraída dele, o que significam exatamente ousia, hypostasis e processão, por que cada heresia trinitária resolve o problema sacrificando algo essencial, e o que a doutrina muda na vida de quem ora.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-atributos', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum autor bíblico se propôs a escrever sobre a Trindade. A palavra não aparece na Escritura, e a fórmula clássica — uma essência, três pessoas — é obra de concílios que se reuniram séculos depois do último apóstolo. Essa é a objeção que todo estudante ouve mais cedo ou mais tarde, e ela merece ser levada a sério antes de ser respondida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta honesta não é negar o fato, mas explicá-lo. A doutrina da Trindade não foi acrescentada à Escritura: ela é o resultado de a Igreja ter sido forçada, sob pressão de negações concretas, a dizer com precisão o que já lia e o que já fazia. Ninguém inventaria uma fórmula tão desconfortável por vontade própria. Ela nasceu de dados que não podiam ser abandonados.',
    },
    { tipo: 'secao', titulo: 'Os quatro dados que não se deixam reduzir', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se você reunir tudo o que a Escritura afirma sobre Deus e sobre Jesus, encontrará quatro proposições. Cada uma isolada é simples. Juntas, elas obrigam a algo como a doutrina trinitária — e qualquer alternativa histórica acaba negando uma delas.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Há um só Deus. O monoteísmo não é negociável em nenhum ponto do cânon: "Ouve, Israel, o SENHOR nosso Deus é o único SENHOR" (Dt 6.4).',
        'O Pai é Deus. Ninguém jamais disputou isto.',
        'O Filho é Deus. "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus" (Jo 1.1); e Tomé, diante do ressurreto: "Senhor meu e Deus meu!" (Jo 20.28).',
        'O Espírito Santo é Deus. Mentir ao Espírito é mentir a Deus, e não a homens (At 5.3-4); e é Ele que sonda "as próprias profundezas de Deus" (1Co 2.10-11).',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A esses quatro soma-se um quinto dado, de outra natureza: Pai, Filho e Espírito são distintos entre si. O Filho ora ao Pai e não a si mesmo. O Pai envia o Filho. O Espírito procede e é enviado. No batismo de Jesus os três aparecem simultaneamente na mesma cena, o que exclui a saída fácil de dizer que são apenas nomes diferentes para o mesmo sujeito.',
    },
    {
      tipo: 'passagem',
      referencia: 'Mateus 28.19',
      texto:
        'Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Observe a construção grega, que a tradução preserva: "em nome", no singular, seguido de três genitivos. Não são três nomes, nem um nome triplo. Um só nome, e três a quem esse nome pertence. A fórmula batismal é o embrião da doutrina, e ela é anterior a qualquer concílio.',
    },
    { tipo: 'secao', titulo: 'As saídas que a Igreja teve de recusar', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Diante da tensão, três soluções foram propostas nos primeiros séculos. Todas são elegantes. Todas foram rejeitadas, e vale entender por quê — porque cada uma reaparece hoje, com roupa nova, em púlpitos e conversas.',
    },
    {
      tipo: 'controversia',
      titulo: 'As três tentativas de dissolver a tensão',
      posicoes: [
        {
          escola: 'Modalismo (Sabélio, séc. III)',
          sintese:
            'Deus é uma só pessoa que se manifesta em três modos sucessivos: Pai na criação, Filho na redenção, Espírito na santificação. Preserva o monoteísmo e destrói a distinção — a oração de Jesus no Getsêmani vira encenação, e o amor eterno do Pai pelo Filho (Jo 17.24) fica sem objeto. Sobrevive hoje na analogia popular da água que é gelo, líquido e vapor, que é modalismo puro.',
        },
        {
          escola: 'Arianismo (Ário, séc. IV)',
          sintese:
            'O Filho é a primeira e mais excelsa das criaturas, por quem tudo o mais foi feito; "houve um tempo em que não existia". Preserva a distinção e destrói a divindade do Filho — e com ela a salvação, pois se quem morreu na cruz é criatura, uma criatura está pagando a dívida infinita que só o Criador poderia saldar.',
        },
        {
          escola: 'Triteísmo',
          sintese:
            'Três seres divinos distintos, unidos em propósito. Preserva a distinção ao preço do monoteísmo. Raramente professado de forma explícita, é o erro em que a pregação descuidada mais escorrega ao falar dos "três" sem nunca dizer o que os faz um.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no padrão: cada heresia é uma simplificação. Todas resolvem o desconforto lógico sacrificando um dos dados bíblicos. A ortodoxia é mais difícil precisamente porque se recusa a soltar qualquer um deles.',
    },
    { tipo: 'secao', titulo: 'O vocabulário técnico, e por que ele foi necessário', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Niceia (325) e Constantinopla (381) não acrescentaram conteúdo à revelação; fixaram termos capazes de excluir as leituras falsas. O trabalho foi linguístico, e foi árduo: os padres precisaram distinguir duas palavras gregas que, na linguagem comum, eram praticamente sinônimas.',
    },
    {
      tipo: 'termo',
      termo: 'Ousia (essência, substância)',
      texto:
        'Aquilo que Deus é. Responde à pergunta "o quê?". Em Deus há uma só ousia — e é por isso que a doutrina permanece monoteísta, e não uma concessão ao politeísmo.',
    },
    {
      tipo: 'termo',
      termo: 'Hypostasis (pessoa, subsistência)',
      texto:
        'Aquele que Deus é. Responde à pergunta "quem?". Em Deus há três hypostaseis. A palavra não significa "pessoa" no sentido moderno de centro psicológico independente — significa um modo distinto e real de subsistir da única essência divina.',
    },
    {
      tipo: 'termo',
      termo: 'Homoousios',
      texto:
        'Da mesma essência. O termo decisivo de Niceia contra Ário, que aceitava homoiousios — de essência semelhante. A diferença é uma única letra grega, o iota, e nela se decidia se Cristo é Deus ou a mais nobre das criaturas. A expressão "não faz diferença nem um iota" tem origem exatamente aqui, e é irônica: fazia toda a diferença.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Com esse vocabulário, a fórmula se enuncia sem contradição: Deus é um quanto à essência e três quanto às pessoas. Não se afirma que Deus é um e três no mesmo sentido — o que seria absurdo —, mas em sentidos distintos. A doutrina é misteriosa; não é ilógica.',
    },
    { tipo: 'secao', titulo: 'O que distingue as pessoas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se as três pessoas partilham inteiramente a mesma essência, sem partes nem graus, o que as distingue? Não pode ser um atributo, pois todos os atributos são da essência e portanto comuns aos três. A resposta da tradição é que o que as distingue são exclusivamente as relações de origem.',
    },
    {
      tipo: 'lista',
      itens: [
        'O Pai é ingênito: não procede de ninguém. É a fonte sem fonte da divindade.',
        'O Filho é gerado do Pai — eternamente, e não em algum momento. A geração eterna significa que a relação Pai-Filho não teve começo: Deus não passou a ser Pai.',
        'O Espírito procede do Pai e do Filho — a cláusula filioque, acrescentada no Ocidente e nunca aceita pelo Oriente, causa da ruptura de 1054 e sustentada pela tradição reformada.',
      ],
    },
    {
      tipo: 'termo',
      termo: 'Perichoresis (circumincessão)',
      texto:
        'A habitação mútua das pessoas divinas: cada uma existe plenamente nas outras, sem confusão e sem separação. É o que Jesus afirma ao dizer "eu estou no Pai e o Pai está em mim" (Jo 14.11). Impede que as três pessoas sejam pensadas como três partes justapostas de Deus.',
    },
    {
      tipo: 'termo',
      termo: 'Opera ad extra sunt indivisa',
      texto:
        'As obras de Deus para fora são indivisas: toda ação divina no mundo é obra das três pessoas, ainda que a Escritura aproprie certas obras a certas pessoas. O Pai cria pelo Filho no Espírito; a encarnação é do Filho, mas o Pai envia e o Espírito concebe. Isso impede o erro popular de repartir a história em três turnos divinos.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Trindade',
      texto:
        'Há um só Deus vivo e verdadeiro, um em essência, indiviso e simples, subsistindo eternamente em três pessoas — Pai, Filho e Espírito Santo — reais e distintas entre si não por qualquer diferença de essência, poder ou glória, que lhes são inteiramente comuns, mas unicamente pelas relações de origem: o Pai não gerado, o Filho eternamente gerado do Pai, e o Espírito eternamente procedente do Pai e do Filho; de sorte que cada pessoa é inteiramente Deus, as três habitam-se mutuamente sem confusão nem separação, e todas as obras de Deus para fora são obra indivisa das três.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo II, §3',
      fonteId: 'cfw-ipib',
      texto:
        'Na unidade da Divindade há três pessoas de uma só substância, poder e eternidade: Deus Pai, Deus Filho e Deus Espírito Santo. O Pai não é de ninguém, não é gerado nem procede; o Filho é eternamente gerado do Pai; o Espírito Santo eternamente procede do Pai e do Filho.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma razão prática para o cuidado com essa doutrina, e ela aparece no momento em que alguém ora. A oração cristã tem uma gramática trinitária: dirige-se ao Pai, pelo Filho, no Espírito. Quem perde a Trindade perde essa estrutura e cai em uma de duas religiões empobrecidas — a de quem se dirige a um Deus genérico e distante, sem mediador, e a de quem trata Jesus como o Deus acessível e o Pai como a autoridade severa que Ele acalma. A doutrina protege contra ambas. Ela diz que o Pai a quem você se dirige é o mesmo que enviou o Filho por amor, antes que você o buscasse; que o Filho pelo qual você se aproxima não está persuadindo um Pai relutante, mas cumprindo o propósito comum; e que o Espírito que geme em você quando faltam palavras é Deus intercedendo dentro de você por você. A oração cristã é Deus atraindo a si mesmo, e o crente é levado nesse movimento.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, cap. 13',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O capítulo 13 do Livro I é um tratado trinitário completo, com a discussão do vocabulário conciliar e a defesa da geração eterna. Domínio público.',
    },
    {
      id: 'hodge-st1',
      autor: 'Charles Hodge',
      ano: '1872',
      titulo: 'Systematic Theology, vol. I — sobre a Trindade',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/hodge/theology1.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Percorre a história da doutrina, as heresias e a formulação de Niceia com detalhe suficiente para cobrir as três unidades trinitárias do programa de TS01.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus III, sobre a Trindade',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento escolástico das relações de origem e da perichoresis, em latim e domínio público.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a Trindade',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Bavinck é especialmente forte na história do desenvolvimento dogmático e na relação entre Trindade ontológica e econômica.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. II, § 3',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A formulação confessional em português, incluindo o filioque.',
    },
  ],
};
