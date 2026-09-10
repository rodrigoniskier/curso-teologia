import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u13-leitura-traducao-4',
  disciplina: 'TE08',
  unidade: 13,
  titulo: 'Exercícios de leitura e tradução 4',
  objetivo: 'Integrar presente e futuro em leitura controlada, reconhecendo o marcador de futuro, pessoa, número e voz e evitando inferir tempo-forma apenas pela tradução portuguesa sugerida pelo contexto.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Compare formas antes de comparar traduções',
      paragrafos: [
        'A diferença entre λύει e λύσει é pequena na escrita e grande na análise: a primeira é presente; a segunda é futuro. A oficina treina o olhar para o σ de futuro e para as terminações já conhecidas.',
        'O futuro costuma ter referência temporal prospectiva no indicativo, mas a tarefa continua sendo morfológica antes de ser tradutória. Não use palavras portuguesas como “amanhã” para adivinhar a forma; identifique a forma grega e depois confirme se ela combina com o contexto.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Glossário',
      itens: [
        'κύριος, -ου, ὁ — senhor.',
        'δοῦλος, -ου, ὁ — servo.',
        'λόγος, -ου, ὁ — palavra, mensagem.',
        'γράφω — escrevo; futuro regular pedagógico γράψω ilustra a combinação φ + σ → ψ.',
        'λύω — solto, liberto; futuro λύσω.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u13-a1',
      titulo: 'Presente ou futuro?',
      enunciado: 'Analise: (a) ὁ κύριος λύει τὸν δοῦλον. (b) ὁ κύριος λύσει τὸν δοῦλον. (c) οἱ κύριοι λύσουσι τοὺς δούλους.',
      itens: [
        'Circule o elemento que distingue o futuro nas formas de λύω.',
        'Identifique pessoa e número de cada verbo.',
        'Traduza as três frases.',
        'Explique por que λύσουσι e λύουσι não são a mesma forma.'
      ],
      resposta: '(a) λύει = 3ª singular presente ativo: “O senhor liberta o servo”. (b) λύσει = 3ª singular futuro ativo: “O senhor libertará o servo”. (c) λύσουσι = 3ª plural futuro ativo: “Os senhores libertarão os servos”. O σ pertence ao tema de futuro e distingue λύσουσι de λύουσι, presente ativo 3ª plural.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u13-a2',
      titulo: 'Ativo e médio no futuro',
      enunciado: 'Compare λύσομεν e λυσόμεθα.',
      itens: [
        'Identifique a pessoa e o número comuns.',
        'Identifique a voz de cada forma.',
        'Mostre onde está o sinal de futuro.',
        'Explique por que a diferença principal entre elas não é temporal.'
      ],
      resposta: 'Ambas são 1ª plural do futuro do indicativo. λύσομεν é ativa; λυσόμεθα é média. O σ após o radical λυ- marca o futuro em ambas. A diferença principal é de voz morfológica, não de tempo-forma.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese prática',
      itens: [
        'O σ ajuda a reconhecer muitos futuros regulares.',
        'Terminações continuam indicando pessoa, número e voz.',
        'Pequenas diferenças gráficas podem alterar a análise inteira.',
        'Mudanças consonantais como φ + σ → ψ são previsíveis em muitos verbos, mas não substituem consulta lexical para formas irregulares.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para prática cumulativa de presente e futuro.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para formação de futuros regulares.' }
  ],
  atualizadoEm: '2026-09-09',
};
