import type { Verbete } from '../../tipos';

export const principioRegulador: Verbete = {
  id: 'ts09-principio-regulador',
  disciplina: 'TS09',
  unidade: 1,
  titulo: 'O Princípio Regulador do Culto',
  subtitulo: 'Quem decide o que se faz no domingo de manhã',
  objetivo:
    'Ao final, você saberá a diferença entre o princípio regulador e o normativo, distinguir elementos de circunstâncias — a distinção que resolve quase toda briga sobre culto —, e reconhecer o que o princípio de fato proíbe e o que apenas parece proibir.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts11-subscricao-confessional', 'ts06-batismo', 'th03-reforma'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Poucas discussões numa igreja local produzem tanto desgaste quanto as sobre culto — estilo de música, uso de instrumentos, projeção, teatro, ordem litúrgica. E quase todas são travadas no registro errado: como choque de preferências entre gerações, em que cada lado acusa o outro de tradicionalismo ou de mundanismo, e ninguém consegue apontar um critério que não seja o próprio gosto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada oferece um critério, e ele é anterior a qualquer preferência. A pergunta que ela faz não é "o que gostamos de fazer?" nem "o que atrai mais gente?", mas: quem tem autoridade para determinar como Deus deve ser adorado?',
    },
    { tipo: 'secao', titulo: 'Dois princípios possíveis', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'O que pode entrar no culto',
      posicoes: [
        {
          escola: 'Princípio normativo (luterano, anglicano)',
          sintese:
            'É lícito no culto tudo o que a Escritura não proíbe. Preserva liberdade e continuidade histórica, e permite absorver formas herdadas que não contradizem a Palavra. A dificuldade é que o silêncio da Escritura passa a autorizar, e com o tempo o acúmulo de práticas lícitas pode sufocar as ordenadas.',
        },
        {
          escola: 'Princípio regulador (reformado)',
          sintese:
            'Só é lícito no culto o que a Escritura ordena, por mandamento expresso ou por consequência necessária dele deduzida. Foi o que levou a Reforma suíça a remover imagens, altares e o calendário litúrgico onde os luteranos os mantiveram. A dificuldade é a aplicação: sem a distinção entre elementos e circunstâncias, ele degenera em minuciosidade paralisante.',
        },
      ],
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo XXI, § 1',
      fonteId: 'cfw-ipib',
      texto:
        'O modo aceitável de adorar o verdadeiro Deus é instituído por ele mesmo e de tal modo limitado por sua vontade revelada, que ele não pode ser adorado segundo as imaginações e invenções dos homens [...] ou qualquer outro modo não prescrito nas Sagradas Escrituras.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A base do princípio não é uma preferência estética por sobriedade, e sim o segundo mandamento — que não proíbe adorar outros deuses, o que é o primeiro, mas adorar o Deus verdadeiro de maneira não autorizada. É o que a Escritura ilustra em episódios severos: Nadabe e Abiú oferecem "fogo estranho, que o Senhor não lhes ordenara" e morrem (Lv 10.1-2); Uzá toca a arca com boa intenção e morre (2Sm 6). Em nenhum dos dois casos havia idolatria. Havia iniciativa.',
    },
    { tipo: 'secao', titulo: 'A distinção que resolve as brigas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Aplicado sem qualificação, o princípio produziria absurdos: a Escritura não ordena horário, banco, microfone ou idioma. A Confissão antecipou a objeção e a respondeu no mesmo capítulo em que enunciou o princípio.',
    },
    {
      tipo: 'termo',
      termo: 'Elementos',
      texto:
        'As partes do culto que Deus ordenou e que, por isso, não podem ser suprimidas nem acrescentadas: leitura da Palavra, pregação, oração, canto de louvor, sacramentos, ofertas, votos e bênção. São fixos porque são prescritos.',
    },
    {
      tipo: 'termo',
      termo: 'Circunstâncias',
      texto:
        'As condições comuns a qualquer reunião humana — horário, local, duração, mobiliário, iluminação, sonorização, idioma — que a Escritura não regula e que devem ser ordenadas "pela luz da natureza e prudência cristã, segundo as regras gerais da Palavra" (CFW I.6). São variáveis porque não são prescritas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Com essa distinção, a maior parte das disputas se dissolve ou muda de natureza. Se o canto é elemento ordenado e o estilo musical é circunstância, então discutir se a igreja deve cantar é discutir doutrina, e discutir se canta com órgão ou com violão é discutir prudência — legítimo, mas de outra ordem, e sem licença para tratar o adversário como infiel.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convém também dizer onde a distinção não resolve, porque há um ponto genuinamente disputado: se algo é elemento ou circunstância nem sempre é óbvio. Teatro no culto é circunstância da pregação ou elemento novo? Projeção de imagens é auxílio ou acréscimo? Aí a discussão é legítima e deve ser feita com o critério à vista, em vez de por gosto — que é precisamente o ganho de ter um princípio.',
    },
    { tipo: 'secao', titulo: 'O que o princípio não é', nivel: 2 },
    {
      tipo: 'lista',
      itens: [
        'Não é exigência de austeridade estética. Nada nele proíbe beleza; o próprio saltério é poesia sofisticada, e o templo foi construído com esmero artístico ordenado por Deus.',
        'Não é imobilismo litúrgico. A Confissão reconhece diversidade de ordem, e nenhuma liturgia particular é prescrita — a ordem é circunstância.',
        'Não é regra para a vida inteira. Governa o culto público da Igreja reunida, não a devoção privada nem a arte cristã fora dele.',
        'Não é argumento contra instrumentos. A questão dos instrumentos foi debatida entre reformados e permanece em aberto; tratá-la como decidida pelo princípio é ir além do que ele afirma.',
      ],
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Princípio regulador do culto',
      texto:
        'É a norma segundo a qual somente o que Deus ordenou em sua Palavra — por mandamento expresso ou por consequência necessária dele deduzida — pode compor o culto público da Igreja, de modo que nem se acrescente a ele invenção humana nem se suprima o que foi prescrito; fundando-se não em preferência de austeridade mas no segundo mandamento, que proíbe adorar o Deus verdadeiro de maneira não autorizada. Distingue-se nele entre os elementos, que Deus ordenou e são portanto fixos, e as circunstâncias comuns a toda reunião humana, que a Escritura não regula e devem ser ordenadas pela prudência cristã segundo as regras gerais da Palavra.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Este princípio é frequentemente empunhado como arma numa disputa de gosto, e usá-lo assim é traí-lo. Vale lembrar o que ele protege: a congregação. Sem ele, quem decide o culto é quem tem poder — o pastor com ideias, o grupo musical com preferências, a maioria com saudade de um estilo. O princípio retira essa decisão de todos eles e a devolve à Palavra, de modo que ninguém precisa fazer no domingo aquilo que só se justifica pelo carisma de quem propõe. E há um alívio embutido nele para quem conduz o culto: você não é responsável por torná-lo interessante. É responsável por fazer o que Deus mandou — ler, pregar, orar, cantar, administrar os sacramentos. Se isso parecer pouco, o problema não está no princípio; está na expectativa de que o culto exista para nos entreter, quando ele existe para que Deus seja adorado como Ele quer.',
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. XXI e cap. I, § 6',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. XXI, § 1 enuncia o princípio; o cap. I, § 6 estabelece a cláusula das circunstâncias, ordenadas pela luz da natureza e prudência cristã.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, cap. 11-12; Livro IV, cap. 10',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'IV.10 é o tratado de Calvino sobre o poder da Igreja de fazer leis, onde ele estabelece que ninguém pode obrigar a consciência com invenções no culto. Domínio público.',
    },
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      ano: '1888',
      titulo: 'History of the Christian Church — sobre a Reforma suíça e o culto',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Documenta as decisões concretas de Zurique e Genebra sobre imagens, música e calendário — o princípio regulador em aplicação histórica.',
    },
    {
      id: 'monergismo-culto',
      autor: 'Vários',
      titulo: 'A Teologia do Culto Reformado',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/textos/adoracao/teologia_culto.htm',
      idioma: 'pt',
      tipo: 'artigo',
      acesso: 'livre',
      nota: 'Exposição em português do princípio regulador e da distinção entre elementos e circunstâncias.',
    },
  ],
};
