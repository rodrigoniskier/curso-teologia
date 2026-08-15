import type { Verbete } from '../../tipos';

export const canonNT: Verbete = {
  id: 'te02-canon-nt',
  disciplina: 'TE02',
  unidade: 4,
  titulo: 'A Formação do Cânon do Novo Testamento',
  subtitulo: 'Quem decidiu quais livros entram — e por que a pergunta já embute um erro',
  objetivo:
    'Ao final, você saberá que não houve um momento de decisão, reconhecerá os critérios que a igreja antiga de fato usou, saberá quais livros foram disputados e por quê, e entenderá a diferença entre conferir autoridade e reconhecê-la — a distinção sobre a qual repousa toda a resposta reformada.',
  atualizadoEm: '2026-08-15',
  verMais: ['te01-canon-at', 'ts01-inspiracao', 'th01-igreja-antiga'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta chega em tom de acusação, e quase sempre na mesma forma: quem escolheu os livros da Bíblia? Costuma vir acompanhada de uma história — a de que um concílio, geralmente Niceia, teria votado o conteúdo do Novo Testamento e descartado evangelhos concorrentes por motivos políticos. A história é falsa em cada detalhe: Niceia (325) tratou da divindade de Cristo e não discutiu cânon.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas a resposta oposta, que se ouve em púlpitos, também não resiste: a de que nunca houve dúvida alguma e que os vinte e sete livros foram unanimemente reconhecidos desde o início. Não foram. Alguns levaram séculos para ser aceitos em toda parte, e a igreja antiga sabia disso e registrou.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O erro comum às duas versões está na palavra "decidir". Ela pressupõe que a autoridade dos livros começou quando alguém a concedeu. A tradição reformada nega exatamente esse pressuposto — e a negação não é retórica: ela muda o que se deve procurar na história.',
    },

    { tipo: 'secao', titulo: 'O que acontece antes de qualquer lista', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Antes de existir qualquer catálogo, já existia uso. Paulo manda que sua carta aos colossenses seja lida também em Laodiceia e vice-versa (Cl 4.16): as cartas circulavam entre igrejas desde o início, e circular para leitura pública é precisamente o tratamento dado à Escritura na sinagoga.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mais decisivo é o que aparece dentro do próprio Novo Testamento. Em 1Timóteo 5.18 duas citações são introduzidas juntas pela fórmula "diz a Escritura": a primeira é Deuteronômio 25.4, a segunda é uma frase de Lucas 10.7. E 2Pedro 3.16 fala das cartas de Paulo mencionando que os indoutos as torcem "como o fazem também com as outras Escrituras".',
    },
    {
      tipo: 'passagem',
      referencia: '2 Pedro 3.15-16',
      texto:
        '...como igualmente o nosso amado irmão Paulo vos escreveu, segundo a sabedoria que lhe foi dada, ao falar acerca destes assuntos, como, de fato, costuma fazer em todas as suas epístolas, nas quais há certas coisas difíceis de entender, que os ignorantes e instáveis deturpam, como o fazem também com as demais Escrituras.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto não é que a igreja primitiva tivesse a lista fechada — não tinha. É que os escritos apostólicos eram tratados como Escritura por autores que ainda estavam escrevendo o Novo Testamento. O reconhecimento não começou no século IV; começou dentro do próprio período apostólico.',
    },

    { tipo: 'secao', titulo: 'O que forçou a igreja a fazer listas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Listas explícitas aparecem quando surge uma disputa que as exige — e a primeira veio de fora. Por volta de 144, Marcião, tendo concluído que o Deus do Antigo Testamento era outro, produziu o primeiro cânon conhecido: um Lucas mutilado e dez cartas paulinas editadas, sem o Antigo Testamento. A igreja não inventou um cânon para responder a Marcião; foi obrigada a dizer em voz alta o que já usava.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O documento mais antigo que sobreviveu nessa linha é o Fragmento Muratoriano, do fim do século II: já traz os quatro evangelhos, Atos, as cartas paulinas e a maior parte do restante, discute o que se deve ler na igreja e o que não se deve, e rejeita explicitamente falsificações que circulavam com nome de Paulo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No início do século IV, Eusébio de Cesareia faz o levantamento mais útil que temos, e sua honestidade é notável: em vez de afirmar unanimidade, ele classifica os escritos pelo grau de aceitação efetiva nas igrejas.',
    },
    {
      tipo: 'termo',
      termo: 'Homologoumena, antilegomena e notha',
      texto:
        'A classificação de Eusébio (História Eclesiástica III.25). Homologoumena: os reconhecidos por todos — os quatro evangelhos, Atos, as cartas de Paulo, 1João, 1Pedro. Antilegomena: os contestados, que ainda assim eram conhecidos e usados por muitos — Tiago, Judas, 2Pedro, 2 e 3João. Notha: os espúrios, como o Pastor de Hermas e o Apocalipse de Pedro, alguns edificantes e nenhum apostólico. A quarta categoria, dos escritos heréticos, ele descarta sem discussão.',
    },
    {
      tipo: 'citacao',
      autor: 'Eusébio de Cesareia',
      obra: 'História Eclesiástica, III.25',
      fonteId: 'eusebio-he',
      texto:
        'Entre os escritos contestados, ainda que conhecidos pela maioria, estão a epístola atribuída a Tiago, a de Judas, a segunda de Pedro, e as chamadas segunda e terceira de João, sejam elas do evangelista ou de outro do mesmo nome.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A primeira lista conhecida que coincide exatamente com os nossos vinte e sete livros está na 39ª Carta Festal de Atanásio, de 367. Os concílios de Hipona (393) e Cartago (397) confirmam a mesma relação. Repare na cronologia: os concílios chegam depois — e depois até mesmo de Atanásio. Eles ratificam um consenso já formado pelo uso, e é isso que a linguagem deles indica ao falar em livros "recebidos", e não em livros instituídos.',
    },

    { tipo: 'secao', titulo: 'Os critérios que a igreja antiga usou', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum concílio publicou uma regra formal, mas os critérios são visíveis no modo como os antigos argumentavam quando precisavam justificar uma inclusão ou uma recusa.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Apostolicidade — o livro provém de um apóstolo ou de alguém ligado a ele, como Marcos a Pedro e Lucas a Paulo. Não é autoria célebre, é autoridade delegada: o critério mira a origem da mensagem, não o prestígio do nome.',
        'Ortodoxia, ou regra de fé — o conteúdo concorda com o ensino recebido dos apóstolos. É o critério que descartou os evangelhos gnósticos, e note que ele não é circular do modo que às vezes se alega: a regra de fé era transmitida oralmente e batismalmente antes de o cânon estar fechado.',
        'Catolicidade — o livro é aceito e usado amplamente, não só numa região. Foi este o critério que mais demorou a se satisfazer para os antilegomena, e é a razão de a demora ter sido geográfica antes de ser doutrinária.',
        'Antiguidade — o escrito pertence ao período apostólico. Foi o que excluiu o Pastor de Hermas, cuja utilidade edificante o Fragmento Muratoriano reconhece ao mesmo tempo em que o exclui da leitura pública por ser tardio.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Duas observações que evitam mal-entendidos frequentes. Primeira: os chamados evangelhos apócrifos, como o de Tomé, não foram excluídos por censura política, mas por serem tardios — quase todos do século II em diante — e por ensinarem outra coisa. Segunda: a demora com Tiago, 2Pedro, 2 e 3João não foi resistência ao conteúdo; foram cartas curtas, de circulação restrita, cuja procedência levou tempo para ser verificada em regiões distantes. A cautela da igreja antiga é, nesse ponto, argumento a favor de sua seriedade, não contra.',
    },

    { tipo: 'secao', titulo: 'Onde a divisão é real', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Estabelecidos os fatos históricos, resta a pergunta teológica, e ela separa tradições inteiras: o que torna esses livros autoritativos?',
    },
    {
      tipo: 'controversia',
      titulo: 'A igreja constitui ou reconhece o cânon',
      posicoes: [
        {
          escola: 'Roma',
          sintese:
            'A Igreja, assistida pelo Espírito, determina infalivelmente quais livros são canônicos; sem esse juízo, o crente não teria certeza. Trento definiu a lista dogmaticamente em 1546, incluindo os deuterocanônicos. Agostinho é citado com frequência: "eu não creria no Evangelho se a autoridade da Igreja Católica não me movesse a isso".',
        },
        {
          escola: 'Reformada',
          sintese:
            'A autoridade dos livros é anterior e independente do reconhecimento: eles são canônicos porque são Palavra de Deus, e a igreja os recebe como testemunha, não como fonte. A Confissão de Westminster é explícita ao dizer que a autoridade da Escritura não depende do testemunho de homem ou igreja alguma, mas inteiramente de Deus. Calvino acrescenta a resposta subjetiva: é o testemunho interior do Espírito que persuade, e não um decreto eclesiástico.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A analogia que a tradição reformada costuma usar é a do júri: o veredito não torna o réu culpado, reconhece que ele é. Aplicada aqui, a igreja não confere canonicidade — ela a constata. E vale enfrentar a objeção óbvia, em vez de contorná-la: se a autoridade é intrínseca, por que o reconhecimento demorou? A resposta reformada é que demora no reconhecimento humano não implica ausência de autoridade divina, do mesmo modo que uma lei promulgada obriga antes de ser conhecida em todas as províncias. O que a demora mostra é cuidado da igreja, não hesitação de Deus.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, § 4',
      fonteId: 'cfw-ipib',
      texto:
        'A autoridade da Escritura Sagrada, pela qual ela deve ser crida e obedecida, não depende do testemunho de qualquer homem ou igreja, mas inteiramente de Deus (que é a própria verdade), seu autor; portanto, deve ser recebida, porque é a Palavra de Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar ainda uma divergência interna ao protestantismo, para que ninguém a descubra depois com escândalo. Lutero julgou Tiago uma "epístola de palha" por não achar nela o evangelho com a clareza que buscava, e a deslocou para o fim de sua tradução, junto com Hebreus, Judas e Apocalipse — mas não a removeu. A tradição reformada não seguiu esse juízo, e a razão é metodológica: submeter cada livro à conformidade com um tema escolhido pelo intérprete inverte a relação, pondo o leitor acima do texto.',
    },

    {
      tipo: 'definicao',
      termo: 'Cânon do Novo Testamento',
      texto:
        'É o conjunto dos vinte e sete livros que a igreja reconheceu como escritos apostólicos e, portanto, Palavra de Deus escrita. Sua autoridade não deriva do reconhecimento eclesiástico, mas da inspiração divina; a igreja atua como testemunha que recebe, não como instância que confere. O reconhecimento se deu por um processo histórico prolongado, guiado pelos critérios de apostolicidade, ortodoxia, catolicidade e antiguidade, e sua conclusão foi registrada — não criada — pelas listas do século IV.',
    },

    {
      tipo: 'pastoral',
      texto:
        'Muitos crentes sinceros levam um susto quando descobrem que o processo foi longo e que alguns livros foram contestados. O susto vem de uma expectativa que a própria Escritura nunca autorizou: a de que a providência divina teria de agir por um gesto instantâneo e visível, e não pela lenta convergência do uso, da comparação e do cuidado de muitas igrejas ao longo de gerações. É a mesma providência que governa a história inteira — Deus raramente faz as coisas do modo espetacular que imaginaríamos, e as faz. Conhecer essa história, portanto, não enfraquece a confiança: retira dela o que era ingenuidade e deixa o que é fundamento. Quem sabe por que Tiago demorou está mais firme, e não menos, do que quem nunca ouviu falar do assunto — e fica preparado para a hora em que alguém lhe apresentar a versão de Niceia como se fosse novidade demolidora.',
    },
  ],

  fontes: [
    {
      id: 'eusebio-he',
      autor: 'Eusébio de Cesareia',
      ano: '325',
      titulo: 'História Eclesiástica, Livro III, cap. 25 — os escritos aceitos, contestados e espúrios',
      publicacao: 'Nicene and Post-Nicene Fathers, série II, vol. I (Wikisource)',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_I/Church_History_of_Eusebius/Book_III/Chapter_25',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A fonte primária decisiva sobre o cânon: Eusébio classifica os escritos pelo grau de aceitação real em vez de alegar unanimidade. Domínio público, e hospedado fora do CCEL — portanto verificável pela auditoria automática.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. I, Das Sagradas Escrituras',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 2 enumera os livros canônicos, o § 3 exclui os apócrifos e o § 4 estabelece que a autoridade não depende de igreja alguma — o texto que sustenta a posição reformada exposta acima.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 7-8',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'I.7 responde diretamente ao argumento de que a Escritura depende do juízo da Igreja e formula o testemunho interior do Espírito. Domínio público.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers, vol. I — Irineu e os testemunhos do século II',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Contra as Heresias, de Irineu, argumenta pelos quatro evangelhos já no fim do século II — testemunho anterior a qualquer concílio.',
    },
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      ano: '1888',
      titulo: 'History of the Christian Church — formação do cânon e as listas antigas',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Reúne as fontes sobre Marcião, o Fragmento Muratoriano, Atanásio e os concílios africanos, com a documentação que este verbete resume.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae — locus II, De Scriptura Sacra',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento escolástico da questão canônica: autoridade intrínseca, critérios de reconhecimento e a resposta detalhada ao argumento romano a partir de Agostinho.',
    },
  ],
};
