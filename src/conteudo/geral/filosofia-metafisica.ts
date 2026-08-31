import type { Verbete } from '../../tipos';

export const filosofiaMetafisica: Verbete = {
  id: 'cg08-metafisica-aristoteles-kant-heidegger-kripke',
  disciplina: 'CG08',
  unidade: 5,
  titulo: 'Metafísica: de Aristóteles a Kripke',
  subtitulo:
    'O que significa perguntar pelo ser — e por que nem Kant, nem o positivismo lógico conseguiram simplesmente fazer a metafísica desaparecer',
  objetivo:
    'Ao final, você saberá definir metafísica sem confundi-la com misticismo, explicar a primeira filosofia de Aristóteles, compreender em que sentido Kant limita a metafísica tradicional, situar o programa antimetafísico do empirismo lógico, distinguir a pergunta heideggeriana pelo ser de uma restauração da metafísica clássica e entender como necessidade, possibilidade e mundos possíveis reabriram a metafísica analítica no século XX.',
  atualizadoEm: '2026-08-30',
  verMais: ['cg08-filosofia', 'ts01-prolegomenos', 'ts12-cosmovisao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Dizer que “não acredita em metafísica” soa como recusar uma disciplina opcional. O problema é que a frase já contém uma tese sobre o que existe e sobre quais perguntas são legítimas. Se alguém afirma que **só existem entidades físicas**, fez uma afirmação metafísica. Se sustenta que causas, propriedades ou pessoas são apenas maneiras úteis de organizar dados, também fez uma afirmação metafísica. Até a tentativa de expulsar a metafísica precisa dizer algo sobre a estrutura da realidade e sobre os limites do discurso significativo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Por isso a metafísica não é sinônimo de “assuntos sobrenaturais”. Ela pergunta em nível máximo de generalidade: **o que há? que tipo de coisa é uma coisa? o que torna algo a mesma coisa através da mudança? o que é causa? o que significa dizer que algo é possível ou necessário?** Deus é uma questão metafísica, mas identidade pessoal, tempo, causalidade, propriedades e liberdade também são.',
    },

    { tipo: 'secao', titulo: '1. “Metafísica” não significa simplesmente “além da física”' },
    {
      tipo: 'paragrafo',
      texto:
        'O nome surgiu da organização posterior dos escritos de Aristóteles: os livros que conhecemos como Metafísica foram colocados “depois dos livros da Física”. Aristóteles chamava sua investigação de **primeira filosofia**, “sabedoria”, “teologia” e estudo do “ser enquanto ser”. A expressão não manda procurar um objeto misterioso chamado “o ser”; pede que tudo o que existe seja examinado precisamente enquanto existente, e não enquanto corpo vivo, número ou objeto em movimento.',
    },
    {
      tipo: 'definicao',
      termo: 'Metafísica',
      texto:
        'Investigação filosófica das estruturas e categorias mais fundamentais da realidade: existência, identidade, substância, propriedade, causa, tempo, possibilidade, necessidade e relações de dependência. Sua pergunta não é apenas quais coisas existem, mas em virtude de quê e de que modo elas existem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A física pode perguntar como um corpo muda de posição. A metafísica pergunta o que é mudança, o que precisa permanecer para que ainda se trate do mesmo corpo e o que significa uma causa produzir um efeito. Isso não torna a metafísica superior à ciência empírica. Torna as duas investigações **diferentes em nível de pergunta**.',
    },

    { tipo: 'secao', titulo: '2. Aristóteles: ser, substância, forma, matéria, ato e potência' },
    {
      tipo: 'paragrafo',
      texto:
        'A metafísica aristotélica nasce do esforço de explicar uma experiência banal e difícil: as coisas mudam e, ainda assim, não se tornam qualquer coisa. Uma semente torna-se árvore; uma estátua pode ser talhada no bronze; uma pessoa envelhece permanecendo a mesma pessoa. Para explicar mudança sem dissolver identidade, Aristóteles desenvolve uma rede de distinções.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Substância:** aquilo que existe de modo primário e serve de sujeito a propriedades e mudanças. “Este homem” não é apenas um conjunto solto de predicados.',
        '**Matéria e forma:** em entidades materiais, a matéria é aquilo de que algo é constituído; a forma é o princípio pelo qual a matéria é este tipo de coisa organizada e não outra.',
        '**Potência e ato:** potência é capacidade real de ser ou fazer algo; ato é a realização dessa capacidade. A madeira é potencialmente mesa antes de sê-lo atualmente.',
        '**Causalidade:** explicar plenamente algo pode exigir falar de matéria, estrutura ou forma, agente produtor e finalidade. As chamadas quatro causas não são quatro eventos concorrentes, mas quatro respostas possíveis a “por quê?”.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa arquitetura influenciou profundamente a teologia cristã medieval. Mas influência não é identidade. A doutrina bíblica da criação não é deduzida da Metafísica de Aristóteles, e o Deus aristotélico não deve ser simplesmente identificado com o Deus trino das Escrituras. O valor do filósofo está em oferecer distinções intelectuais que depois precisam ser avaliadas e, quando úteis, reconstruídas dentro de um sistema teológico diferente.',
    },
    {
      tipo: 'termo',
      termo: 'Ser enquanto ser',
      texto:
        'Fórmula aristotélica para estudar tudo aquilo que existe sob o aspecto mais geral de existir. Não é uma “coisa” adicional além dos entes; é um nível de investigação sobre princípios que atravessam diferentes tipos de ente.',
    },

    { tipo: 'secao', titulo: '3. Kant: o tribunal da razão contra a metafísica dogmática' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa descreve Kant como “rejeição da metafísica”. A expressão é pedagogicamente compreensível, mas precisa de precisão. Kant não abandona todas as perguntas metafísicas. Seu projeto crítico pergunta **como a experiência e o conhecimento são possíveis** e quais limites a própria razão deve respeitar. O alvo principal é a metafísica dogmática que pretende conhecer realidades suprassensíveis pela razão especulativa como se fossem objetos disponíveis do mesmo modo que os fenômenos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A chamada revolução copernicana de Kant inverte uma suposição: o conhecimento não é uma mente simplesmente copiando um mundo já organizado em nossa frente. A experiência humana aparece estruturada por formas e categorias do sujeito cognoscente. Assim, conhecemos objetos **como aparecem dentro das condições da experiência humana**. Isso impõe um limite à pretensão de passar diretamente da estrutura de nosso conhecimento para afirmações especulativas sobre coisas consideradas independentemente dessas condições.',
    },
    {
      tipo: 'controversia',
      titulo: 'Kant destruiu ou transformou a metafísica?',
      posicoes: [
        {
          escola: 'Leitura de ruptura',
          sintese:
            'Enfatiza a crítica kantiana às provas tradicionais e à metafísica especulativa. O conhecimento teórico não pode tratar alma, mundo como totalidade e Deus como objetos empíricos disponíveis; nesse sentido, a velha metafísica perde sua pretensão de ciência demonstrativa.',
        },
        {
          escola: 'Leitura de transformação',
          sintese:
            'Observa que a Crítica continua fazendo perguntas metafísicas sobre objeto, causalidade, liberdade e condições da experiência. Kant não produz um mundo sem metafísica; redefine o que uma metafísica criticamente legítima pode afirmar e desloca algumas questões para a razão prática.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para o estudante reformado, a resposta a Kant não pode ser “a Bíblia diz, logo o problema não existe”. Kant obriga a distinguir dois atos: receber uma revelação e alegar conhecer algo. A teologia afirma que Deus fala realmente em história e linguagem humanas; por isso precisa explicar por que essa revelação é conhecimento e não mera projeção das estruturas do sujeito. A crítica kantiana, mesmo quando rejeitada em suas conclusões, torna a epistemologia teológica mais cuidadosa.',
    },

    { tipo: 'secao', titulo: '4. Positivismo lógico: quando a crítica da metafísica virou uma crítica do significado' },
    {
      tipo: 'paragrafo',
      texto:
        'No início do século XX, pensadores associados ao Círculo de Viena e ao empirismo lógico tentaram uma estratégia mais radical. Em vez de provar que determinada tese metafísica era falsa, perguntaram se muitas frases metafísicas possuíam **conteúdo cognitivamente significativo**. Uma versão popular do princípio de verificação dizia, grosso modo, que uma afirmação factual deveria ter relação clara com condições de experiência que contassem a favor ou contra ela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí a tentação de classificar enunciados metafísicos e teológicos como pseudoproposições: palavras gramaticalmente organizadas, mas sem condições empíricas de verificação. O movimento, porém, nunca foi uma doutrina monolítica. Seus membros discordaram sobre verificação, ciência, probabilidade, linguagem e até sobre o estatuto do próprio empirismo. Além disso, um problema tornou-se célebre: **qual experiência verifica o próprio princípio de verificação?** Se o critério não passa pelo teste que impõe aos outros, ele não pode funcionar como guilhotina universal.',
    },
    {
      tipo: 'lista',
      itens: [
        'A crítica positivista ensinou uma lição duradoura: termos metafísicos vagos podem esconder ausência de argumento, e pedir condições de uso de uma frase é saudável.',
        'O fracasso de um critério forte de verificação não transforma qualquer frase metafísica em conhecimento. A metafísica continuou obrigada a oferecer argumentos, coerência e poder explicativo.',
        'Ciência e metafísica não são rivais automáticas. A própria interpretação da ciência envolve perguntas sobre leis, causalidade, propriedades, probabilidade e identidade que possuem dimensão metafísica.',
      ],
    },

    { tipo: 'secao', titulo: '5. Heidegger: reabrir a pergunta pelo ser não é voltar a Aristóteles' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa chama Heidegger de “reconstrução da metafísica”. É melhor entender isso como **reabertura da pergunta que a metafísica deveria ter enfrentado**. Heidegger acusa grande parte da tradição de estudar os entes — inclusive o ente supremo — sem perguntar suficientemente pelo sentido do ser pelo qual os entes são inteligíveis como entes.',
    },
    {
      tipo: 'termo',
      termo: 'Diferença ontológica',
      texto:
        'Distinção entre os entes — tudo aquilo que é — e o ser dos entes. Heidegger procura impedir que “ser” seja tratado simplesmente como mais um ente, ainda que maximamente elevado. Essa distinção estrutura sua crítica da tradição metafísica.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em Ser e Tempo, a investigação começa pelo Dasein, o ente para quem seu próprio ser está em questão. Existência humana é analisada como ser-no-mundo, temporalidade, cuidado, finitude e abertura de possibilidades. Isso não é uma prova alternativa da existência de Deus, nem uma ontologia reformada esperando ser batizada. É outro projeto filosófico, cuja influência sobre hermenêutica, existencialismo e teologia do século XX exige leitura antes de avaliação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A crítica cristã precisa ser especialmente cuidadosa aqui. Dizer que Deus é o Criador não responde automaticamente à pergunta de Heidegger, porque ele justamente questiona uma tradição que teria transformado Deus em peça explicativa dentro de uma estrutura ontológica. A teologia reformada responderá a partir da distinção Criador-criatura e da auto-revelação divina, mas só depois de compreender a acusação.',
    },

    { tipo: 'secao', titulo: '6. Kripke e as modalidades: possível e necessário voltam à mesa' },
    {
      tipo: 'paragrafo',
      texto:
        'Outra reconstrução ocorreu na tradição analítica. A lógica modal formaliza expressões como “é necessário que” e “é possível que”. O trabalho de Saul Kripke ajudou a oferecer uma semântica rigorosa para sistemas modais mediante estruturas de mundos possíveis e relações de acessibilidade. “Mundo possível” aqui não precisa significar um universo físico paralelo; pode funcionar como instrumento para representar maneiras coerentes de como as coisas poderiam ter sido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência filosófica foi grande porque necessidade deixou de parecer apenas um defeito obscuro da linguagem. Passou a ser possível perguntar tecnicamente se determinada propriedade é essencial ou acidental, se uma identidade vale necessariamente e como uma expressão conserva sua referência através de situações contrafactuais.',
    },
    {
      tipo: 'definicao',
      termo: 'Modalidade',
      texto:
        'Modo segundo o qual uma proposição ou estado de coisas é verdadeiro: necessariamente, possivelmente, contingentemente ou impossivelmente. A metafísica modal investiga o que fundamenta essas diferenças e como falar com rigor sobre o que poderia ou não poderia ser diferente.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Necessário:** não poderia ser falso ou diferente nas condições relevantes.',
        '**Possível:** poderia ser verdadeiro; não envolve contradição ou impossibilidade do tipo em questão.',
        '**Contingente:** é verdadeiro, mas poderia ter sido diferente.',
        '**Contrafactual:** afirmação sobre o que ocorreria ou poderia ocorrer caso as circunstâncias fossem outras.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso importa para teologia porque expressões modais aparecem por toda parte: Deus não pode negar a si mesmo; a criação poderia não ter existido; Cristo verdadeiramente assumiu natureza humana; certas ações são possíveis e outras incompatíveis com a natureza de Deus. A lógica modal não decide sozinha essas doutrinas. Ela ajuda a perguntar **que tipo de necessidade está sendo afirmado e de onde essa necessidade deriva**.',
    },

    { tipo: 'secao', titulo: '7. Um teste reformado para teorias metafísicas' },
    {
      tipo: 'paragrafo',
      texto:
        'A perspectiva reformada não começa por escolher entre Aristóteles, Kant, Heidegger ou Kripke como mestre definitivo. Começa com uma afirmação anterior: o Deus triúno existe por si, cria livremente tudo o que não é Deus, sustenta a criação e fala de modo verdadeiro. A partir daí, conceitos filosóficos podem ser usados como ferramentas, mas precisam ser examinados quanto ao que pressupõem sobre autonomia da razão, Criador e criatura, pecado e possibilidade de conhecimento.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Pergunta ontológica:** a teoria preserva ou dissolve a diferença entre Criador e criatura?',
        '**Pergunta epistemológica:** como sabemos que sua descrição da realidade é verdadeira, e qual autoridade decide quando há conflito?',
        '**Pergunta semântica:** os termos usados têm conteúdo identificável ou funcionam apenas como palavras impressionantes?',
        '**Pergunta de integração:** a distinção filosófica esclarece a revelação ou começa silenciosamente a controlá-la?',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Metafísica parece distante do ministério até o primeiro funeral, a primeira conversa sobre identidade depois de uma doença degenerativa, a primeira pergunta de uma criança sobre onde Deus estava antes de criar o mundo ou o primeiro debate sobre se uma pessoa poderia ter sido “outra pessoa”. Pastores fazem metafísica toda semana. A formação filosófica não existe para transformar o púlpito em seminário técnico, mas para evitar respostas confusas justamente quando as perguntas humanas se tornam mais fundamentais.',
    },
  ],
  fontes: [
    {
      id: 'sep-aristotle-metaphysics',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2025',
      titulo: 'Aristotle’s Metaphysics',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/aristotle-metaphysics/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Base acadêmica para ser enquanto ser, substância, ato e potência, causalidade e primeira filosofia.',
    },
    {
      id: 'sep-kant',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Immanuel Kant',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/kant/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Referência para o projeto crítico, as condições do conhecimento e os limites da metafísica especulativa.',
    },
    {
      id: 'sep-logical-empiricism',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2022',
      titulo: 'Logical Empiricism',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/logical-empiricism/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Fonte para Círculo de Viena, verificacionismo, antimetafísica e diversidade interna do empirismo lógico.',
    },
    {
      id: 'sep-heidegger',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2025',
      titulo: 'Martin Heidegger',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/heidegger/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Base para pergunta pelo ser, diferença ontológica, Dasein e crítica da tradição metafísica.',
    },
    {
      id: 'sep-modal-logic',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Modal Logic',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/logic-modal/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Introdução técnica aberta a necessidade, possibilidade, sistemas modais e semântica associada a Kripke.',
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
      nota: 'Referência confessional para Deus, criação, providência, liberdade e distinção entre Criador e criatura.',
    },
  ],
};
