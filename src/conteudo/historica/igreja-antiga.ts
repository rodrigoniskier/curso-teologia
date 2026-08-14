import type { Verbete } from '../../tipos';

export const igrejaAntiga: Verbete = {
  id: 'th01-igreja-antiga',
  disciplina: 'TH01',
  unidade: 10,
  titulo: 'A Igreja Antiga sob Perseguição',
  subtitulo: 'Como uma seita ilegal se tornou a religião do império — e o que isso custou',
  objetivo:
    'Ao final, você saberá por que Roma perseguia os cristãos apesar de sua notória tolerância religiosa, como as três grandes ameaças do período moldaram a ortodoxia, e por que a virada constantiniana foi ao mesmo tempo alívio e problema.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-trindade', 'te01-canon-at'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Roma era notoriamente tolerante em matéria de religião. Absorvia deuses estrangeiros com facilidade, concedia isenções a cultos locais e não tinha interesse em uniformidade teológica. Isso torna a perseguição aos cristãos um enigma que precisa ser explicado, e não pressuposto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A explicação está em que o cristianismo violava a única exigência que Roma de fato fazia. Podia-se adorar o que se quisesse, desde que se acrescentasse o culto ao imperador e aos deuses do Estado. Os judeus tinham isenção formal, por antiguidade e por tratado. Os cristãos, uma vez percebidos como distintos do judaísmo, ficaram sem isenção — e recusavam o acréscimo. Não eram vistos como praticantes de outra religião, mas como ateus e sediciosos, gente que se negava a cumprir o dever cívico mínimo.',
    },
    { tipo: 'secao', titulo: 'A perseguição, e o que ela de fato foi', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Convém corrigir a imagem popular de três séculos de matança contínua. A realidade foi mais irregular e, por isso mesmo, mais reveladora.',
    },
    {
      tipo: 'lista',
      itens: [
        'Até meados do século III, as perseguições foram locais, episódicas e movidas mais pela população do que pelo Estado. A carta de Plínio a Trajano (c. 112) mostra um governador em dúvida sobre o que fazer, e um imperador que responde que não se deve caçar cristãos — só puni-los se acusados formalmente.',
        'A partir de Décio (250), tornam-se sistemáticas e imperiais: exigia-se certidão de sacrifício, o libellus, e a recusa era crime capital.',
        'A última e mais dura foi a de Diocleciano (303-311), que visou os livros e os líderes antes das pessoas — sinal de que o Estado entendera onde estava a força do movimento.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A perseguição criou um problema pastoral que marcaria séculos: o dos lapsi, os que negaram a fé sob tortura ou compraram certidões falsas. Podiam ser readmitidos? A resposta majoritária — sim, mediante penitência — consolidou a convicção de que a Igreja é hospital e não clube de puros. A resposta minoritária, dos rigoristas novacianos e depois dos donatistas, produziu cismas duradouros.',
    },
    { tipo: 'secao', titulo: 'As três ameaças que produziram a ortodoxia', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Há um padrão que se repete em toda a história do dogma: a Igreja formula com precisão aquilo que é atacado. Antes da negação, a fé é vivida sem definição técnica. Os três desafios do século II produziram, cada um, um elemento estrutural do cristianismo posterior.',
    },
    {
      tipo: 'controversia',
      titulo: 'Os três desafios e as três respostas',
      posicoes: [
        {
          escola: 'Gnosticismo',
          sintese:
            'Matéria é má, o Deus criador do Antigo Testamento é inferior ao Pai de Jesus, e a salvação é conhecimento secreto para iniciados. Resposta: a Igreja afirmou a bondade da criação, a unidade dos dois Testamentos e a publicidade da revelação — e, para isso, precisou explicitar a regra de fé e definir o cânon. A polêmica antignóstica é a parteira da doutrina da Escritura.',
        },
        {
          escola: 'Marcionismo',
          sintese:
            'Marcião rejeitou todo o Antigo Testamento e editou um Novo reduzido a Lucas e dez cartas paulinas. Foi o primeiro a propor uma lista fechada. Resposta: a Igreja não inventou um cânon para se opor a ele, mas foi forçada a declarar publicamente qual já era o seu.',
        },
        {
          escola: 'Montanismo',
          sintese:
            'Profecia extática nova, com autoridade equivalente à apostólica, e rigorismo moral extremo. Resposta: a Igreja afirmou o encerramento da revelação com os apóstolos — o princípio que fundamenta a suficiência da Escritura. Tertuliano, ironicamente o maior polemista latino do período, terminou aderindo a eles.',
        },
      ],
    },
    {
      tipo: 'termo',
      termo: 'Regula fidei',
      texto:
        'A regra de fé: resumo do ensino apostólico transmitido publicamente nas igrejas fundadas por apóstolos, usado por Irineu e Tertuliano contra a alegação gnóstica de tradição secreta. Não era uma fonte paralela à Escritura, mas a chave de leitura dela — e é a semente dos credos posteriores, inclusive do Apostólico.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os apologistas do século II — Justino Mártir à frente — fizeram algo distinto: escreveram ao imperador e ao público culto, argumentando que os cristãos eram cidadãos leais e que a filosofia grega, em seus melhores momentos, apontava para Cristo. Inauguraram a apologética como gênero e o difícil trabalho de traduzir a fé para uma cultura que não a compartilha.',
    },
    { tipo: 'secao', titulo: 'A virada constantiniana', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Em 313, o Edito de Milão concedeu liberdade de culto. Em 380, o Edito de Tessalônica fez do cristianismo niceno a religião oficial do império. Em menos de setenta anos, a Igreja passou de perseguida a estabelecida — e poucas transições foram mais ambíguas.',
    },
    {
      tipo: 'lista',
      itens: [
        'Ganhos: fim do martírio, possibilidade de concílios ecumênicos (Niceia é convocado por Constantino em 325), preservação e cópia em larga escala dos manuscritos, e o desenvolvimento teológico que produziu as definições trinitária e cristológica.',
        'Perdas: adesões em massa por conveniência social, subordinação crescente da Igreja ao poder imperial, e o precedente perigoso de resolver disputas doutrinárias com força civil — o próprio Constantino exilou bispos por discordarem.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'É significativo que o monaquismo nasça exatamente nesse momento. Quando o martírio deixou de ser possível, o deserto passou a ser a forma de dizer que seguir Cristo custa algo. Antão vai para o deserto do Egito justamente quando ser cristão deixa de ser perigoso — o monge substitui o mártir como figura do discipulado radical.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'A Igreja Antiga (séculos I-IV)',
      texto:
        'É o período em que a comunidade cristã, sem estatuto legal e sob perseguição episódica e depois sistemática, definiu os elementos estruturais que a caracterizariam desde então: sob pressão do gnosticismo, do marcionismo e do montanismo, explicitou a regra de fé, delimitou publicamente o cânon e afirmou o encerramento da revelação apostólica; sob a pressão da perseguição, resolveu que a Igreja acolhe os que caíram mediante penitência, recusando o rigorismo dos puros; e, ao ver-se subitamente estabelecida por Constantino e Teodósio, ganhou a possibilidade dos concílios ecumênicos e das grandes definições dogmáticas ao preço da adesão nominal em massa e da tutela do poder civil sobre a fé.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma lição de método nesta história, e ela vale para o estudante hoje. Nenhuma das grandes doutrinas foi formulada por curiosidade especulativa. O cânon foi delimitado porque Marcião o mutilou; a Trindade foi definida porque Ário a negou; a regra de fé foi escrita porque os gnósticos alegavam tradição secreta. A precisão teológica nasce sempre da necessidade de proteger algo que se está perdendo — o que sugere desconfiar tanto de quem trata as definições antigas como pedantismo ultrapassado quanto de quem as multiplica sem que nada esteja em risco. E há uma segunda lição, mais desconfortável: a Igreja sofreu menos dano em três séculos de perseguição do que nas décadas seguintes ao favor imperial. A hostilidade purificou; o prestígio diluiu. Vale lembrar disso sempre que se desejar, para a Igreja, mais influência do que fidelidade.',
    },
  ],
  fontes: [
    {
      id: 'schaff-hcc2',
      autor: 'Philip Schaff',
      ano: '1885',
      titulo: 'History of the Christian Church, vol. II — Ante-Nicene Christianity, 100-325',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A história padrão do período, em domínio público e texto integral. Cobre praticamente todo o programa de TH01 e é o substituto direto de qualquer manual de História da Igreja em catálogo.',
    },
    {
      id: 'schaff-hcc2-pdf',
      autor: 'Philip Schaff',
      ano: '1885',
      titulo: 'History of the Christian Church, vol. II — PDF integral',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/s/schaff/hcc2/cache/hcc2.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Mesmo volume em arquivo único, para leitura offline.',
    },
    {
      id: 'anf01',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers, vol. I — Padres Apostólicos, Justino Mártir, Irineu',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'As fontes primárias do período em tradução: Clemente, Inácio, Policarpo, a Didaqué, as apologias de Justino e o Contra as Heresias de Irineu. Domínio público.',
    },
    {
      id: 'schaff-archive',
      autor: 'Philip Schaff',
      ano: '1885',
      titulo: 'History of the Christian Church, vol. II — cópia no Internet Archive',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historyofthechri009648mbp',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Alternativa útil, já que ccel.org recusa conexões vindas de IPs de nuvem e nem sempre é acessível de todo lugar.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. XXV — Da Igreja',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 4 reconhece que as igrejas particulares são mais ou menos puras — princípio confessional que ilumina a controvérsia com os rigoristas tratada acima.',
    },
  ],
};
