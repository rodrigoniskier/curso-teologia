import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u7-alexandria-antioquia',
  disciplina: 'TE12',
  unidade: 7,
  titulo: 'A Hermenêutica em Alexandria e Antioquia',
  objetivo: 'Comparar tendências interpretativas associadas a Alexandria e Antioquia, reconhecendo contribuições e riscos de ambas sem reduzi-las a uma oposição simplista entre alegoria e literalidade.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Duas ênfases, não dois blocos homogêneos',
      paragrafos: [
        'A história costuma contrastar Alexandria, associada a leituras alegóricas, e Antioquia, associada ao sentido histórico e gramatical. O contraste é útil como mapa inicial, mas se torna enganoso quando transforma comunidades e autores diversos em duas escolas perfeitamente uniformes.',
        'Orígenes exemplifica o esforço alexandrino de relacionar a letra a realidades espirituais e à unidade cristológica da Escritura. Intérpretes ligados a Antioquia, como Diodoro e Teodoro de Mopsuéstia, enfatizaram com maior força a sequência histórica, a linguagem e o referente do texto. Ambos os ambientes buscavam ler a Escritura como texto cristão; divergiam sobretudo nos controles aplicados ao movimento além do sentido histórico imediato.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Contribuições e riscos',
      itens: [
        'Alexandria: preserva forte consciência da unidade espiritual e cristológica do cânon.',
        'Risco alexandrino: permitir que uma correspondência espiritual se afaste do que palavras e contexto sustentam.',
        'Antioquia: valoriza história, gramática, sequência narrativa e intenção textual.',
        'Risco de uma caricatura antioquena: supor que atenção histórica exclua tipologia, teologia ou unidade canônica.',
        'A hermenêutica reformada recebe o compromisso histórico-gramatical e exige controle canônico para leituras tipológicas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O problema real é o critério de controle',
      paragrafos: [
        'Alegoria não é sinônimo de toda leitura figurada. A Bíblia contém metáforas, símbolos e tipologia. O problema surge quando o intérprete atribui ao texto um segundo significado que não pode ser demonstrado pela linguagem, pelo contexto nem pelo desenvolvimento canônico.',
        'A lição histórica é metodológica: uma leitura pode produzir uma conclusão teologicamente verdadeira e ainda assim não ser uma boa interpretação daquela passagem. Verdade doutrinária e prova exegética precisam permanecer ligadas.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u7-a1',
      titulo: 'Atividade — distinguir figura textual de alegorização livre',
      enunciado: 'Compare uma metáfora claramente indicada pelo texto com uma interpretação que atribui significado espiritual a cada detalhe sem apoio contextual. Explique por que uma é controlada pelo texto e a outra não.',
      itens: ['Identifique sinais literários da figura.', 'Mostre o vínculo com o contexto.', 'Explique onde a segunda leitura perde controle exegético.'],
      resposta: 'A leitura figurada legítima nasce de marcas do próprio texto, do gênero e do contexto e pode ser justificada por evidências. A alegorização livre transforma detalhes em símbolos a partir de associações externas, sem critério textual capaz de limitar ou falsificar a interpretação.'
    },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Alexandria e Antioquia são tendências históricas, não caricaturas.', 'Atenção espiritual e unidade canônica não exigem abandono do sentido histórico.', 'Gramática e história não eliminam tipologia bíblica.', 'A questão decisiva é o controle textual e canônico.', 'Uma doutrina verdadeira ainda precisa ser corretamente derivada da passagem usada para ensiná-la.'] }
  ],
  fontes: [
    { id: 'schaff-hcc', autor: 'Philip Schaff', ano: '1858-1890', titulo: 'History of the Christian Church', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'História clássica para Orígenes e o desenvolvimento inicial da interpretação cristã.' },
    { id: 'schaff-hcc3', autor: 'Philip Schaff', ano: '1867', titulo: 'History of the Christian Church, vol. III', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/schaff/hcc3.all.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio histórico para intérpretes e debates dos séculos IV e V.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Síntese histórica e metodológica sobre sentidos figurados e métodos de interpretação.' }
  ],
  atualizadoEm: '2026-09-10',
};
