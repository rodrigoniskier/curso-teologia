import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u11-leitura-traducao-2',
  disciplina: 'TE08',
  unidade: 11,
  titulo: 'Exercícios de leitura e tradução 2',
  objetivo: 'Aprofundar a leitura de frases com ordem variável, mostrando que as terminações de caso ajudam a identificar relações sintáticas mesmo quando a sequência das palavras não coincide com o português.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Não traduza pela posição da palavra',
      paragrafos: [
        'O grego possui flexão suficiente para permitir variação de ordem com mais liberdade que o português. Isso não significa que a ordem seja irrelevante; ela pode contribuir para foco, continuidade discursiva e estilo. Mas o iniciante deve resistir ao impulso de tratar a primeira expressão nominal como sujeito apenas porque vem primeiro.',
        'Nesta oficina, as mesmas relações aparecem em ordens diferentes. O caso fornece a primeira pista segura; o verbo confirma pessoa e número; a ordem é então observada como parte da organização discursiva.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Glossário',
      itens: [
        'κύριος, -ου, ὁ — senhor.',
        'δοῦλος, -ου, ὁ — servo.',
        'λόγος, -ου, ὁ — palavra, mensagem.',
        'γράφω — escrevo.',
        'λύω — solto, liberto.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u11-a1',
      titulo: 'Mesma morfologia, ordem diferente',
      enunciado: 'Compare: (a) ὁ κύριος λύει τὸν δοῦλον. (b) τὸν δοῦλον λύει ὁ κύριος. (c) λύει ὁ κύριος τὸν δοῦλον.',
      itens: [
        'Marque o nominativo e o acusativo em cada frase.',
        'Identifique o sujeito e o objeto sem usar a posição como critério principal.',
        'Traduza as três frases.',
        'Explique o que permanece igual e o que muda entre elas.'
      ],
      resposta: 'Em todas as frases, ὁ κύριος é nominativo singular e funciona como sujeito; τὸν δοῦλον é acusativo singular e funciona como objeto; λύει é 3ª singular do presente do indicativo ativo. A relação proposicional básica permanece “o senhor liberta o servo”. A ordem varia e pode produzir efeitos discursivos, mas não muda automaticamente as funções marcadas pelos casos.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u11-a2',
      titulo: 'Plural e concordância verbal',
      enunciado: 'Analise: λόγους γράφουσιν οἱ δοῦλοι.',
      itens: [
        'Identifique caso e número de λόγους.',
        'Identifique caso e número de οἱ δοῦλοι.',
        'Analise γράφουσιν.',
        'Traduza sem conservar obrigatoriamente a ordem grega.'
      ],
      resposta: 'λόγους é acusativo plural masculino; οἱ δοῦλοι é nominativo plural masculino; γράφουσιν é 3ª plural do presente do indicativo ativo. Tradução natural: “Os servos escrevem palavras/mensagens”. A ordem grega começa pelo objeto, mas a tradução portuguesa não precisa imitá-la se isso prejudicar naturalidade.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese prática',
      itens: [
        'Caso não torna a ordem irrelevante, mas impede que função sintática seja inferida apenas pela posição.',
        'Nominativo e acusativo precisam ser reconhecidos antes da tradução.',
        'A concordância verbal ajuda a confirmar o sujeito.',
        'Tradução fiel preserva relações e sentido; não exige copiar a ordem palavra por palavra.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para exercícios graduados de leitura.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para sintaxe introdutória baseada em casos.' }
  ],
  atualizadoEm: '2026-09-09',
};
