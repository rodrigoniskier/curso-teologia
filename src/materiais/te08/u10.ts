import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u10-leitura-traducao-1',
  disciplina: 'TE08',
  unidade: 10,
  titulo: 'Exercícios de leitura e tradução 1',
  objetivo: 'Integrar alfabeto, acentuação, pontuação, presente ativo e segunda declinação em frases pedagógicas curtas, priorizando leitura direta e análise morfológica antes da tradução.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Oficina, não nova gramática',
      paragrafos: [
        'Daqui em diante o foco muda: o estudante já possui material suficiente para começar a ler pequenas estruturas. As frases desta oficina são controladas pedagogicamente e não devem ser confundidas com citações do Novo Testamento. O objetivo é treinar procedimentos que depois serão aplicados a textos reais.',
        'Cada frase deve ser lida em voz alta, segmentada, analisada e só então traduzida. Quando houver vocabulário ainda não memorizado, o glossário fornece o lema; isso impede que o exercício se transforme em teste de adivinhação lexical.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Glossário mínimo',
      itens: [
        'κύριος, -ου, ὁ — senhor.',
        'δοῦλος, -ου, ὁ — servo.',
        'λόγος, -ου, ὁ — palavra, mensagem.',
        'ἔργον, -ου, τό — obra, trabalho.',
        'γράφω — escrevo.',
        'λύω — solto, liberto.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Método de quatro passagens',
      ordenada: true,
      itens: [
        'Leia sem transliterar.',
        'Circule verbos e identifique pessoa, número, tempo-forma, modo e voz.',
        'Marque substantivos/artigos e identifique gênero, número e caso.',
        'Monte uma tradução portuguesa natural preservando as relações sintáticas identificadas.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u10-a1',
      titulo: 'Primeiras frases controladas',
      enunciado: 'Analise e traduza: (a) ὁ δοῦλος γράφει λόγον. (b) ὁ κύριος λύει τὸν δοῦλον. (c) οἱ δοῦλοι γράφουσι λόγους.',
      itens: [
        'Identifique sujeito e objeto quando houver.',
        'Analise cada verbo completamente.',
        'Explique como nominativo e acusativo ajudam a determinar as funções.',
        'Leia as três frases duas vezes sem transliteração.'
      ],
      resposta: '(a) “O servo escreve uma palavra/mensagem”: ὁ δοῦλος é nominativo singular e γράφει, 3ª singular do presente ativo; λόγον é acusativo singular. (b) “O senhor liberta o servo”: ὁ κύριος é sujeito nominativo; λύει é 3ª singular presente ativo; τὸν δοῦλον é objeto acusativo. (c) “Os servos escrevem palavras/mensagens”: οἱ δοῦλοι é nominativo plural; γράφουσι, 3ª plural presente ativo; λόγους, acusativo plural.'
    },
    {
      tipo: 'quadro',
      titulo: 'Autocorreção',
      itens: [
        'Se você traduziu antes de identificar os casos, refaça a frase.',
        'Se precisou escrever letras latinas, repita a leitura do alfabeto.',
        'Se confundiu -ου com -ους, contraste genitivo singular e acusativo plural.',
        'A meta desta unidade é procedimento confiável, não velocidade isolada.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Modelo de progressão por leitura e exercícios cumulativos.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Fonte clássica para prática controlada de formas introdutórias.' }
  ],
  atualizadoEm: '2026-09-09',
};
