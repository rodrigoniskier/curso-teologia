import type { Verbete } from '../../tipos';

export const filosofiaValoresEticaEstetica: Verbete = {
  id: 'cg08-valores-etica-estetica',
  disciplina: 'CG08',
  unidade: 11,
  titulo: 'Teoria dos Valores: Ética, Metaética e Estética',
  subtitulo:
    'Dizer que algo é bom ou belo parece simples — até perguntarmos o que essas palavras afirmam sobre a realidade',
  objetivo:
    'Ao final, você saberá distinguir axiologia, ética normativa e metaética, reconhecer as principais famílias de teorias éticas, compreender o problema de Eutífron e as discussões sobre objetividade moral, definir o campo da estética, diferenciar gosto privado de julgamento estético argumentável e relacionar bondade e beleza à doutrina reformada da criação sem transformar filosofia em mera repetição de teologia sistemática.',
  atualizadoEm: '2026-08-30',
  verMais: ['cg08-filosofia', 'ts10-etica', 'ts12-cosmovisao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        '“Isso é errado” não significa a mesma coisa que “não gosto disso”. “Essa música é bela” também parece dizer mais do que “essa música me dá prazer”. Mas o que acrescentamos quando usamos palavras como **bom, mau, justo, belo, feio, digno ou sublime**? Teoria dos valores começa quando deixamos de discutir apenas qual ação praticar ou qual obra apreciar e perguntamos o que torna possíveis esses juízos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa reúne ética e estética sob “teoria dos valores”. Isso é pedagogicamente fecundo: as duas áreas investigam avaliações que orientam nossa resposta ao mundo. Uma lida principalmente com o que deve ser feito e com que tipo de pessoa devemos ser; a outra, com experiência, julgamento e valor ligados ao belo, ao sublime, à arte e à forma.',
    },

    { tipo: 'secao', titulo: '1. Axiologia: o que significa chamar algo de valioso?' },
    {
      tipo: 'definicao',
      termo: 'Axiologia',
      texto:
        'Investigação filosófica do valor. Pergunta que tipos de valor existem, se são objetivos ou dependentes de avaliadores, o que torna algo bom em si ou bom como meio e como valores morais, estéticos, epistêmicos e outros se relacionam.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Valor instrumental:** algo é bom como meio para outra finalidade. Dinheiro, por exemplo, possui valor em grande parte pelo que permite obter ou realizar.',
        '**Valor intrínseco ou final:** algo é valorizado por si, não apenas como ferramenta para outra coisa.',
        '**Valor moral:** diz respeito a ações, caráter, deveres, virtudes, direitos e relações entre agentes responsáveis.',
        '**Valor estético:** relaciona-se a experiência, forma, beleza, expressividade, harmonia, profundidade e outros modos de apreciação.',
        '**Valor epistêmico:** verdade, entendimento, justificação e conhecimento também são tratados como bens que orientam práticas intelectuais.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A primeira cautela é não supor que “valor” seja uma substância invisível colada às coisas. Em filosofia, a pergunta é relacional e metafísica: que propriedades, relações ou razões tornam adequado responder positivamente a algo? A segunda cautela é não concluir que, porque valores envolvem avaliadores, são automaticamente arbitrários. Dor envolve um sujeito que sente e nem por isso é imaginária.',
    },

    { tipo: 'secao', titulo: '2. Ética normativa pergunta “o que devo fazer?”' },
    {
      tipo: 'paragrafo',
      texto:
        'Ética normativa procura critérios para orientar ação e caráter. As classificações variam, mas três famílias funcionam como mapa inicial. Elas não são gavetas perfeitas e teorias sofisticadas frequentemente combinam elementos de mais de uma.',
    },
    {
      tipo: 'controversia',
      titulo: 'Três maneiras clássicas de organizar a ética normativa',
      posicoes: [
        {
          escola: 'Consequencialismo',
          sintese:
            'Avalia ações principalmente pelos estados de coisas que produzem. Sua força é levar efeitos reais a sério; sua dificuldade é explicar por que certos meios pareceriam moralmente proibidos mesmo quando poderiam maximizar algum resultado considerado bom.',
        },
        {
          escola: 'Deontologia',
          sintese:
            'Enfatiza deveres, regras, direitos e limites que não dependem apenas do saldo de consequências. Protege pessoas contra cálculo utilitário, mas precisa explicar a origem e a hierarquia dos deveres e como agir quando obrigações parecem colidir.',
        },
        {
          escola: 'Ética das virtudes',
          sintese:
            'Pergunta que tipo de pessoa devemos nos tornar e quais disposições constituem uma vida humana excelente. Recupera caráter, hábito e comunidade, mas ainda precisa dizer quais virtudes são genuínas e por que determinada concepção de florescimento é normativa.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ética cristã não cabe sem resto em uma dessas etiquetas. A Escritura contém mandamentos reais, considera consequências e frutos e descreve caráter virtuoso conformado a Cristo. Uma abordagem reformada deve resistir tanto à importação de um sistema filosófico como árbitro da revelação quanto à recusa preguiçosa de qualquer distinção filosófica. As categorias ajudam a enxergar **que tipo de razão moral** estamos oferecendo.',
    },

    { tipo: 'secao', titulo: '3. Metaética pergunta “o que estamos fazendo quando dizemos que algo é errado?”' },
    {
      tipo: 'paragrafo',
      texto:
        'Metaética dá um passo atrás da decisão concreta. Em vez de perguntar se mentir é errado, pergunta o que significa a frase “mentir é errado”. Ela descreve um fato? expressa uma atitude? depende de cultura? há propriedades morais? como as conhecemos? por que uma verdade moral gera razão para agir?',
    },
    {
      tipo: 'lista',
      itens: [
        '**Realismo moral:** em alguma forma, sustenta que certas afirmações morais são verdadeiras independentemente de simples preferência individual.',
        '**Antirrealismo:** reúne posições que negam ou reinterpretam a existência de fatos morais objetivos do tipo defendido pelos realistas.',
        '**Relativismo:** vincula a verdade ou validade de certos juízos a quadros culturais, sociais ou individuais. Não deve ser confundido com a observação banal de que culturas discordam.',
        '**Naturalismo moral:** procura compreender fatos ou propriedades morais em continuidade com propriedades naturais ou cientificamente investigáveis.',
        '**Não naturalismo:** sustenta que normatividade moral não se reduz adequadamente a propriedades naturais descritivas.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto pastoral é imediato: quando duas pessoas discordam sobre um tema moral, elas podem não estar apenas aplicando regras diferentes. Podem discordar sobre **o que torna qualquer regra moralmente vinculante**. Sem identificar esse nível, a conversa repete conclusões sem tocar o fundamento.',
    },

    { tipo: 'secao', titulo: '4. O problema de Eutífron: Deus manda porque é bom, ou é bom porque Deus manda?' },
    {
      tipo: 'paragrafo',
      texto:
        'Um dilema antigo reaparece em debates sobre moralidade teísta. Se algo é bom porque Deus simplesmente manda, a moral parece arbitrária: Deus poderia tornar crueldade boa por decreto. Se Deus manda algo porque reconhece um padrão de bem independente dele, então parece haver um padrão acima de Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta cristã clássica rejeita a estrutura do dilema. O bem não é regra externa que Deus consulta nem produto de vontade caprichosa. **Deus é bom**, e sua vontade santa expressa quem ele é. Mandamentos podem variar conforme relações e circunstâncias criadas, mas não transformam contradição moral em virtude porque não procedem de um caráter arbitrário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa resposta precisa de duas cautelas. Primeiro, dizer “a natureza de Deus é o padrão” não resolve automaticamente toda questão ética; ainda precisamos interpretar corretamente o caráter e os mandamentos revelados. Segundo, a doutrina não autoriza chamar de bom qualquer ato que alguém atribua a Deus por impressão privada. A norma cristã depende do Deus que se revelou, não de uma vontade divina imaginada para justificar preferências humanas.',
    },

    { tipo: 'secao', titulo: '5. Fato e valor: por que descrição não produz dever por mágica' },
    {
      tipo: 'paragrafo',
      texto:
        'Há diferença lógica entre descrever o que ocorre e afirmar o que deveria ocorrer. “Pessoas mentem” não implica “pessoas devem mentir”; “a seleção natural favoreceu determinado comportamento” não implica que o comportamento seja moralmente obrigatório. Para chegar a uma conclusão normativa, o argumento precisa de alguma premissa normativa, ainda que escondida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso não torna fatos irrelevantes para ética. Se quero amar o próximo, preciso saber quais ações realmente o ajudam ou ferem; consequências empíricas importam. A distinção apenas impede que **descrição científica seja apresentada como norma moral sem o passo argumentativo que conecta as duas**.',
    },

    { tipo: 'secao', titulo: '6. Estética não é apenas “filosofia da arte”' },
    {
      tipo: 'paragrafo',
      texto:
        'Estética investiga beleza, gosto, experiência estética, julgamento, sublime, feiura, arte e valor estético. Arte é um de seus campos centrais, mas a experiência de uma paisagem, de uma voz, de uma demonstração matemática elegante ou da arquitetura de um espaço pode suscitar perguntas estéticas sem depender de uma obra produzida como “arte”.',
    },
    {
      tipo: 'definicao',
      termo: 'Julgamento estético',
      texto:
        'Avaliação em que respondemos a qualidades como beleza, equilíbrio, expressividade, unidade, intensidade, graça, feiura ou sublime. O debate filosófico pergunta se esses julgamentos são apenas relatos de prazer privado ou se podem reivindicar razões e algum tipo de validade compartilhável.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A história moderna da estética mostra uma tensão. Julgamentos de beleza parecem nascer de experiência e prazer — ninguém prova a beleza de uma música por silogismo sem ouvi-la. Ao mesmo tempo, discutimos obras, oferecemos razões, refinamos percepção e distinguimos gosto treinado de reação casual. **O fato de um julgamento envolver sensação não o torna automaticamente incomunicável ou irracional.**',
    },

    { tipo: 'secao', titulo: '7. “Gosto não se discute” é uma frase forte demais' },
    {
      tipo: 'controversia',
      titulo: 'A beleza está no objeto ou no observador?',
      posicoes: [
        {
          escola: 'Subjetivismo forte',
          sintese:
            'Julgamentos estéticos reportam essencialmente preferências ou respostas do sujeito. A posição explica divergência persistente e diversidade cultural, mas torna difícil compreender por que oferecemos razões, falamos em erro de percepção ou reconhecemos melhora de gosto mediante atenção e formação.',
        },
        {
          escola: 'Objetivismo forte',
          sintese:
            'Beleza corresponde a propriedades reais ou relações formais do objeto que poderiam, em princípio, ser avaliadas independentemente da preferência. A posição leva a sério a normatividade estética, mas pode subestimar contexto, experiência, tradição e pluralidade de formas legítimas.',
        },
        {
          escola: 'Modelos relacionais',
          sintese:
            'O valor estético depende de qualidades reais apreendidas por sujeitos adequadamente situados e sensíveis. Assim, objeto e resposta não são concorrentes: certas propriedades fundamentam experiências que requerem capacidades perceptivas e contextos para serem reconhecidas.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na prática, “gosto não se discute” pode significar apenas “não adianta obrigar alguém a sentir prazer”. Isso é sensato. Mas não segue daí que toda avaliação tenha o mesmo peso. Podemos mostrar que alguém ouviu apenas cinco segundos de uma obra, confundiu uma reprodução defeituosa com o original ou ignorou deliberadamente características relevantes. Discussão estética não fabrica experiência, mas pode **educar atenção**.',
    },

    { tipo: 'secao', titulo: '8. Beleza, criação e queda: uma moldura reformada sem teoria estética pronta' },
    {
      tipo: 'paragrafo',
      texto:
        'A Escritura não entrega uma teoria filosófica completa da estética, e uma abordagem reformada deve resistir à tentação de transformar versículos sobre beleza em manual de crítica de arte. Ela oferece, porém, uma moldura: o mundo é criação de Deus, possui ordem e fecundidade; seres humanos são criaturas corporais e imaginativas; a queda afeta percepção e desejo; graça comum impede que toda produção cultural se reduza à rebelião explícita.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso permite afirmar duas coisas juntas. Uma obra feita por não cristãos pode revelar extraordinária percepção da criação e da condição humana; e nenhuma obra cultural é religiosamente neutra em sentido último, porque toda imaginação do mundo opera dentro de alguma visão de realidade. A primeira afirmação impede sectarismo estético; a segunda impede ingenuidade cultural.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Kuyper é útil aqui porque sua reflexão sobre arte dentro de uma cosmovisão calvinista recusa reduzir arte a ilustração devocional. A criação possui riqueza própria e o artista explora possibilidades que não precisam terminar numa mensagem explícita para possuir valor. **Arte cristã não é sinônimo de arte com tema religioso, e arte valiosa não é sinônimo de arte moralmente inocente em todos os aspectos.**',
    },

    { tipo: 'secao', titulo: '9. Ética e estética se encontram — mas uma não pode engolir a outra' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma obra pode ser formalmente poderosa e moralmente perturbadora. Também pode defender uma causa moralmente nobre e ser artisticamente pobre. Se valor estético fosse simplesmente valor moral, não precisaríamos de estética; bastaria ética. Se arte estivesse completamente fora da moral, ações reais cometidas em sua produção ou efeitos deliberadamente exploratórios não poderiam ser avaliados eticamente. As duas esferas se cruzam sem se reduzir.',
    },
    {
      tipo: 'lista',
      itens: [
        'Pergunte **o que a obra faz esteticamente**: forma, ritmo, composição, linguagem, experiência, inovação, coerência.',
        'Pergunte **o que a obra imagina como real ou desejável**: sua visão de pessoa, corpo, poder, sofrimento, esperança e transcendência.',
        'Pergunte **como foi produzida e recebida**: valor artístico não apaga exploração real de pessoas.',
        'Evite o reflexo de censurar antes de compreender. Uma obra pode representar o mal sem celebrá-lo e pode incomodar justamente para tornar o mal visível.',
      ],
    },

    { tipo: 'secao', titulo: '10. Um roteiro para pensar valores sem slogans' },
    {
      tipo: 'lista',
      itens: [
        '**Identifique o tipo de avaliação:** moral, estética, epistêmica, prudencial, econômica ou outra?',
        '**Pergunte pelo fundamento:** por que essa propriedade ou razão torna algo bom, obrigatório ou belo?',
        '**Diferencie discordância de relativismo:** pessoas discordarem não prova que não exista verdade sobre a questão.',
        '**Diferencie emoção de arbitrariedade:** sentimentos podem ser respostas cognitivamente relevantes sem funcionar como critério infalível.',
        '**Examine a visão de ser humano:** teorias de valor quase sempre pressupõem alguma ideia de florescimento, liberdade, desejo e finalidade.',
        '**Na avaliação cristã, volte à revelação:** filosofia ajuda a organizar perguntas e consequências; não substitui a autoridade pela qual a igreja reconhece o bem moral e o fim último da criatura.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Uma igreja forma valores o tempo inteiro: pelo que louva, pelo que tolera, pelo que canta, pela arquitetura que constrói, pelas histórias que conta e pela maneira como trata pessoas quando ninguém está fazendo uma aula de ética. Estudar teoria dos valores ajuda o futuro pastor a perceber que formação moral e estética não acontece apenas por regras explícitas. Comunidades aprendem a amar certas coisas. A questão pastoral não é somente “o que nossos membros sabem?”, mas também “o que aprenderam a admirar, desejar e chamar de belo?”.',
    },
  ],
  fontes: [
    {
      id: 'sep-metaethics',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2023',
      titulo: 'Metaethics',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/metaethics/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Base para realismo, antirrealismo, naturalismo, relativismo, normatividade e problema de Eutífron.',
    },
    {
      id: 'sep-aesthetic-concept',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2026',
      titulo: 'The Concept of the Aesthetic',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/aesthetic-concept/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Referência acadêmica para experiência, julgamento e valor estéticos, gosto e objetividade estética.',
    },
    {
      id: 'sep-relativism',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Relativism',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/relativism/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Usado para distinguir desacordo cultural de teses filosóficas relativistas propriamente ditas.',
    },
    {
      id: 'kuyper-calvinismo',
      autor: 'Abraham Kuyper',
      ano: '1898',
      titulo: 'Calvinism: Six Lectures — conferência sobre arte',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/calvinismsixlect00kuyp',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte reformada primária para arte, criação, cultura e desenvolvimento de possibilidades criacionais.',
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
      nota: 'Referência confessional para bondade de Deus, criação, lei moral, liberdade e finalidade humana diante de Deus.',
    },
  ],
};
