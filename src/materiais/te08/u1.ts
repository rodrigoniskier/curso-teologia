import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u1-historia-grego-koine',
  disciplina: 'TE08',
  unidade: 1,
  titulo: 'Introdução histórica do grego coinê',
  objetivo: 'Situar o grego coinê na história da língua grega, distingui-lo do grego clássico sem tratá-lo como língua inferior e explicar por que ele se tornou o principal idioma escrito do Novo Testamento.',
  topicosCobertos: [
    'Principais pontos da história da língua grega',
    'Comparativo grego coinê com o grego clássico',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O Novo Testamento foi escrito numa língua viva',
      paragrafos: [
        'O grego do Novo Testamento pertence ao amplo fenômeno do grego coinê, isto é, a variedade comum que se difundiu pelo Mediterrâneo oriental depois das conquistas de Alexandre. Ele não surgiu do nada no século I, nem constitui um “dialeto sagrado” inventado pelos cristãos. É continuidade histórica da língua grega, especialmente sobre base ática, transformada pelo contato entre regiões e pelo uso como língua de comunicação suprarregional.',
        'Para o estudante de teologia, isso muda a postura diante do texto. Palavras, flexões e construções devem ser aprendidas como elementos de uma língua histórica, não como códigos teológicos independentes. A exegese começa respeitando o que uma forma podia comunicar em seu ambiente linguístico antes de atribuir a ela um significado doutrinário.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Linha histórica mínima',
      itens: [
        'Grego micênico: testemunhado em Linear B no segundo milênio a.C.; mostra uma etapa muito anterior ao grego bíblico.',
        'Período arcaico e clássico: coexistência de dialetos e grande produção literária; o ático de Atenas alcança enorme prestígio.',
        'Período helenístico: após Alexandre, formas de base ática difundem-se e nivelam diferenças regionais, formando a coinê.',
        'Período romano: o grego continua sendo língua central de comunicação, cultura e administração no Mediterrâneo oriental, mesmo sob domínio político romano.',
        'Cristianismo primitivo: autores do Novo Testamento escrevem dentro desse ambiente linguístico e também dialogam com a linguagem da Septuaginta e do judaísmo de língua grega.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Coinê e clássico: continuidade com mudança',
      paragrafos: [
        'Comparar coinê e grego clássico não significa colocar uma forma “correta” contra outra “decadente”. Línguas mudam quando são usadas. A coinê tende, em muitos contextos, a simplificar ou redistribuir construções, reduzir algumas distinções antigas e ampliar outras formas que já existiam. Ao mesmo tempo, preserva grande parte do sistema flexional e do vocabulário herdado.',
        'O estudante encontrará no Novo Testamento autores com estilos diferentes. Lucas pode empregar períodos e vocabulário mais próximos de registros literários; Marcos frequentemente prefere coordenação simples e narrativa direta; cartas combinam linguagem argumentativa, pastoral e fórmulas recebidas. “Coinê” identifica um horizonte linguístico comum, não um estilo uniforme.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Comparações úteis sem caricatura',
      itens: [
        'O clássico e a coinê compartilham alfabeto, grande parte da morfologia e enorme quantidade de vocabulário.',
        'A coinê generaliza usos que facilitam comunicação entre falantes de origens diferentes.',
        'Algumas construções clássicas tornam-se menos frequentes; outras passam a assumir funções mais amplas.',
        'A Septuaginta introduz no repertório bíblico grego escolhas lexicais e construções influenciadas pelo hebraico e pelo aramaico.',
        'O Novo Testamento deve ser comparado tanto com literatura grega quanto com papiros, inscrições e outros documentos comuns do período.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u1-a1',
      titulo: 'Atividade — desfazer três mitos',
      enunciado: 'Avalie as afirmações: (a) “o grego do Novo Testamento é uma língua criada pelo Espírito Santo”; (b) “coinê é apenas grego clássico mal escrito”; (c) “todos os autores do Novo Testamento escrevem no mesmo estilo”.',
      itens: [
        'Classifique cada afirmação como adequada ou inadequada.',
        'Corrija cada formulação inadequada em uma frase historicamente mais precisa.'
      ],
      resposta: 'As três afirmações são inadequadas. (a) O Novo Testamento foi inspirado por Deus, mas foi escrito em formas históricas reais do grego coinê. (b) A coinê é desenvolvimento normal e amplamente difundido da língua grega, não simples corrupção do clássico. (c) Os autores compartilham um horizonte linguístico, mas apresentam repertórios, registros e estilos distintos.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O coinê é etapa histórica e variedade comum do grego helenístico e romano.',
        'Sua expansão está ligada à helenização posterior a Alexandre, não ao surgimento do cristianismo.',
        'Coinê e clássico apresentam continuidade estrutural e diferenças de frequência, preferência e uso.',
        'O Novo Testamento participa do grego comum e também do universo linguístico da Septuaginta e do judaísmo helenístico.',
        'Aprender a língua historicamente protege a exegese contra significados inventados a partir de formas isoladas.'
      ],
    },
  ],
  fontes: [
    {
      id: 'ewald-elementary-greek-2022',
      autor: 'Owen Ewald',
      ano: '2022',
      titulo: 'Elementary New Testament Greek',
      publicacao: 'Seattle Pacific University Library',
      url: 'https://digitalcommons.spu.edu/open_books/2/',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Livro-texto aberto contemporâneo que situa o aprendizado de grego neotestamentário dentro da aquisição real da língua.'
    },
    {
      id: 'machen-greek-1923',
      autor: 'J. Gresham Machen',
      ano: '1923',
      titulo: 'New Testament Greek for Beginners',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/m/machen/greek/home.html',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Gramática clássica em domínio público, útil também para observar a tradição pedagógica reformada de ensino do grego do Novo Testamento.'
    }
  ],
  atualizadoEm: '2026-09-09',
};
