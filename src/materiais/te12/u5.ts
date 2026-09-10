import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u5-qumran-josefo-filo',
  disciplina: 'TE12',
  unidade: 5,
  titulo: 'Os primeiros intérpretes do AT — Qumran, Josefo e Filo',
  objetivo: 'Comparar três ambientes do judaísmo do Segundo Templo — Qumran, Josefo e Filo — reconhecendo que compartilham a Escritura de Israel, mas empregam estratégias interpretativas e objetivos distintos.',
  topicosCobertos: [
    'A comunidade do Mar Morto',
    'Flávio Josefo',
    'Filo de Alexandria',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Não existia um único método judaico de interpretação',
      paragrafos: [
        'O judaísmo do Segundo Templo era internamente diverso. Grupos diferentes liam a mesma herança bíblica a partir de situações políticas, litúrgicas e intelectuais distintas. Qumran, Josefo e Filo não devem ser transformados em três exemplos intercambiáveis de uma “hermenêutica judaica”.',
        'O valor histórico da comparação está justamente nas diferenças: uma comunidade sectária interpreta profecia à luz de sua própria história; um historiador reconta tradições de Israel para leitores greco-romanos; um judeu alexandrino dialoga intensamente com categorias filosóficas gregas e emprega alegoria de maneira extensa.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três contextos, três ênfases',
      itens: [
        'Qumran: os pesharim aplicam textos proféticos aos acontecimentos e personagens da comunidade, frequentemente com forte consciência escatológica.',
        'Josefo: reconta história e instituições judaicas para públicos do mundo romano, selecionando e explicando material segundo propósitos historiográficos e apologéticos.',
        'Filo: lê a Torá em ambiente helenístico e combina atenção ao texto com interpretações alegóricas influenciadas por filosofia grega.',
        'Nenhum desses autores possui autoridade canônica para a igreja; são testemunhas históricas do ambiente interpretativo.',
        'A comparação ajuda a perceber tanto continuidades judaicas quanto a especificidade da leitura apostólica no NT.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Contexto ilumina sem governar o cânon',
      paragrafos: [
        'Textos de Qumran, Josefo e Filo podem esclarecer vocabulário, práticas, debates e expectativas do período. Eles são especialmente úteis para mostrar que certas questões encontradas no Novo Testamento pertencem a debates reais do judaísmo antigo e não surgem em vácuo histórico.',
        'Ao mesmo tempo, fontes extracanônicas não devem ser usadas para obrigar um texto bíblico a significar aquilo que um autor contemporâneo pensava. Contexto fornece possibilidades e contrastes; a interpretação de uma passagem continua sendo demonstrada pela própria passagem e por sua localização canônica.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u5-a1',
      titulo: 'Atividade — distinguir contexto de autoridade',
      enunciado: 'Explique como um texto de Qumran ou Josefo pode ajudar a interpretar o NT sem funcionar como autoridade normativa paralela à Escritura.',
      itens: ['Identifique o tipo de informação histórica fornecida.', 'Mostre como ela restringe ou amplia possibilidades contextuais.', 'Explique por que o sentido do texto bíblico ainda precisa ser demonstrado no cânon.'],
      resposta: 'A fonte extracanônica pode esclarecer instituições, vocabulário, expectativas ou controvérsias compartilhadas no período. Isso torna algumas leituras historicamente mais ou menos plausíveis. Contudo, a fonte não determina por si só o sentido do texto inspirado; a conclusão precisa permanecer sustentada pela gramática, pelo argumento e pelo contexto canônico da passagem bíblica.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'O judaísmo do Segundo Templo era hermeneuticamente plural.',
        'Qumran lê profecia em chave comunitária e escatológica.',
        'Josefo reconta a tradição em projeto historiográfico e apologético.',
        'Filo combina tradição judaica e alegoria filosófica helenística.',
        'Fontes históricas iluminam o texto bíblico, mas não governam seu sentido.'
      ],
    },
  ],
  fontes: [
    { id: 'dead-sea-scrolls', autor: 'Israel Antiquities Authority', ano: '—', titulo: 'The Leon Levy Dead Sea Scrolls Digital Library', publicacao: 'Israel Antiquities Authority', url: 'https://www.deadseascrolls.org.il/', idioma: 'en', tipo: 'acervo', acesso: 'livre', nota: 'Acervo oficial para manuscritos do deserto da Judeia e contexto de Qumran.' },
    { id: 'josefo-obras', autor: 'Flávio Josefo', ano: '93', titulo: 'The Works of Flavius Josephus', publicacao: 'Internet Archive', url: 'https://archive.org/details/workstranslatedb00joseuoft', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte antiga para história, práticas judaicas e representação da tradição de Israel no mundo romano.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio histórico para métodos judaicos e alegóricos de interpretação.' }
  ],
  atualizadoEm: '2026-09-10',
};
