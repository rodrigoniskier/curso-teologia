import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u3-acentuacao-pontuacao',
  disciplina: 'TE08',
  unidade: 3,
  titulo: 'Acentuação e sinais de pontuação',
  objetivo: 'Reconhecer os principais acentos e sinais de pontuação do grego do Novo Testamento, compreender sua função editorial e histórica e utilizá-los para segmentar e ler corretamente frases curtas.',
  topicosCobertos: [
    'Finalidade dos acentos no grego',
    'Sinais de pontuação',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Acento não é decoração tipográfica',
      paragrafos: [
        'As edições modernas do Novo Testamento imprimem acentos e sinais respiratórios porque a tradição manuscrita e editorial preservou essas marcas como auxílio de leitura. Os manuscritos mais antigos não exibem necessariamente o mesmo sistema gráfico completo; por isso, o estudante deve distinguir o texto linguístico das convenções editoriais que ajudam a lê-lo.',
        'O sistema tradicional distingue acento agudo (´), grave (`) e circunflexo (῀ ou ˆ, conforme a fonte). Historicamente, os acentos se relacionam ao padrão prosódico da língua. Para o iniciante, a função prática é reconhecer a sílaba marcada, aprender a forma lexical corretamente e não confundir diferenças gráficas com letras diferentes.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três acentos para reconhecer',
      itens: [
        'Agudo: λόγος, θεός. Pode ocorrer em uma das três últimas sílabas, conforme as regras da palavra e a quantidade da sílaba final.',
        'Grave: substitui graficamente certo agudo final em contexto contínuo: θεὸς ἀγάπη ἐστίν. Para leitura inicial, reconheça que não cria uma nova palavra.',
        'Circunflexo: οὗτος, δοῦλος. Historicamente representa um contorno prosódico específico e só aparece em determinadas sílabas longas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Respirações: uma informação de leitura que aparece junto ao acento',
      paragrafos: [
        'Palavras iniciadas por vogal ou rho podem trazer espírito brando (᾿) ou áspero (῾). O áspero tradicionalmente indica presença histórica de som semelhante a h no início da palavra; o brando indica sua ausência. Assim, ὁ e οὐ não começam graficamente da mesma maneira, embora o sinal respiratório não seja uma letra autônoma.',
        'Como a ementa desta unidade enfatiza acentuação e pontuação, basta nesta fase reconhecer a respiração e copiá-la corretamente. O estudante não precisa dominar ainda todas as regras de colocação dos sinais.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Pontuação grega: cuidado com o ponto e vírgula',
      paragrafos: [
        'A vírgula e o ponto final funcionam de modo semelhante ao uso moderno. O ponto alto ou ano teleia (·) pode equivaler, conforme o contexto, a dois-pontos ou ponto e vírgula. O sinal que mais engana o leitor lusófono é o ponto e vírgula grego (;): ele funciona como ponto de interrogação.',
        'A pontuação das edições críticas é editorial. Ela representa uma análise sintática responsável do texto, mas não possui o mesmo estatuto dos caracteres e palavras transmitidos. Em passagens ambíguas, diferentes decisões de pontuação podem refletir interpretações distintas; por isso a pontuação ajuda a ler, mas também pode ser discutida exegeticamente.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Mapa rápido de pontuação',
      itens: [
        'κόμμα , — pausa breve.',
        'τελεία . — encerramento de período.',
        'ἄνω τελεία · — pausa forte, frequentemente equivalente a dois-pontos ou ponto e vírgula.',
        'ἐρωτηματικό ; — ponto de interrogação grego.',
        'Apóstrofo — pode marcar elisão, como em formas em que uma vogal final cai diante da palavra seguinte.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u3-a1',
      titulo: 'Pontue e leia',
      enunciado: 'Observe: τί ἐστιν τοῦτο; ὁ θεὸς ἀγάπη ἐστίν. Identifique os sinais e leia as frases como duas unidades de sentido.',
      itens: [
        'Qual sinal encerra a pergunta?',
        'Qual palavra apresenta acento grave no exemplo?',
        'Explique por que o sinal ; não deve ser lido como ponto e vírgula português.',
        'Copie as duas frases preservando acentos, respirações e pontuação.'
      ],
      resposta: 'A pergunta termina em ;, que em grego funciona como ponto de interrogação. θεὸς apresenta grave no contexto dado. O sinal deve ser interpretado pela convenção gráfica grega, não pela portuguesa. A cópia correta é parte do exercício porque treina atenção simultânea às letras e aos sinais editoriais.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Agudo, grave e circunflexo pertencem ao sistema tradicional de acentuação.',
        'Respirações acompanham palavras iniciadas por vogal ou rho e devem ser reconhecidas.',
        'O ponto e vírgula gráfico grego funciona como ponto de interrogação.',
        'A pontuação auxilia a análise sintática, mas é decisão editorial e pode ter relevância exegética.',
        'Copiar os sinais corretamente desde o início evita hábitos ruins de leitura.'
      ],
    },
  ],
  fontes: [
    {
      id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para leitura, ortografia e progressão gramatical.'
    },
    {
      id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática clássica com introdução a acentos, respirações e pontuação.'
    }
  ],
  atualizadoEm: '2026-09-09',
};
