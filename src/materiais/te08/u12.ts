import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u12-leitura-traducao-3',
  disciplina: 'TE08',
  unidade: 12,
  titulo: 'Exercícios de leitura e tradução 3',
  objetivo: 'Treinar a distinção entre formas ativas e médio/passivas em contexto controlado, registrando primeiro a análise morfológica e somente depois escolhendo uma tradução compatível com o valor fornecido pelo contexto pedagógico.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A forma não autoriza adivinhar a voz contextual',
      paragrafos: [
        'Nas unidades anteriores aprendemos que o presente médio e o passivo compartilham formas. Nesta oficina, cada frase vem acompanhada de uma indicação contextual mínima para que o estudante possa praticar a passagem correta de morfologia a interpretação.',
        'A rotina continua a mesma: primeiro descreva o que a forma codifica com certeza; depois use o contexto para decidir o valor de voz e a tradução. Esse hábito é mais importante que qualquer frase específica do exercício.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Glossário e convenção da oficina',
      itens: [
        'λύω — solto, liberto.',
        'κύριος, -ου, ὁ — senhor.',
        'δοῦλος, -ου, ὁ — servo.',
        'Quando o enunciado disser “valor passivo”, traduza o sujeito como afetado pelo processo.',
        'Quando disser “valor médio”, preserve a ideia de participação especial do sujeito sem impor reflexividade onde ela não foi indicada.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u12-a1',
      titulo: 'Ativo versus passivo',
      enunciado: 'Compare: (a) ὁ κύριος λύει τὸν δοῦλον. (b) ὁ δοῦλος λύεται. Para (b), o contexto informa valor passivo.',
      itens: [
        'Analise λύει e λύεται.',
        'Explique por que a segunda forma não deve ser classificada simplesmente como “passiva” antes de considerar o contexto.',
        'Traduza as duas frases.',
        'Diga o que mudou na apresentação do participante δοῦλος.'
      ],
      resposta: 'λύει é 3ª singular do presente do indicativo ativo. λύεται é 3ª singular do presente do indicativo médio/passivo; o contexto da atividade atribui valor passivo. Traduções: “O senhor liberta o servo” e “O servo é libertado”. Na primeira, δοῦλος é objeto acusativo; na segunda, aparece como sujeito nominativo afetado pelo processo.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u12-a2',
      titulo: 'Reconhecimento plural',
      enunciado: 'Analise λυόμεθα e λύονται antes de receber qualquer contexto.',
      itens: [
        'Identifique pessoa e número.',
        'Registre a voz morfológica corretamente.',
        'Liste pelo menos duas possibilidades gerais de valor que o contexto poderia selecionar.',
        'Explique por que não é responsável traduzir automaticamente ambas como reflexivas.'
      ],
      resposta: 'λυόμεθα = 1ª plural; λύονται = 3ª plural; ambas são presente do indicativo médio/passivo. O contexto pode selecionar valor médio ou passivo, entre usos lexicais específicos. A morfologia não obriga tradução reflexiva; por isso a análise deve permanecer mais ampla até que sintaxe e léxico resolvam o valor.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese prática',
      itens: [
        'Classifique a forma antes de interpretar a voz contextual.',
        'Médio/passivo é uma descrição morfológica legítima.',
        'Mudança de voz altera a maneira como os participantes são apresentados na oração.',
        'Tradução responsável não inventa reflexividade só porque a forma é média.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para prática cumulativa do sistema verbal.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para formas médio/passivas.' }
  ],
  atualizadoEm: '2026-09-09',
};
