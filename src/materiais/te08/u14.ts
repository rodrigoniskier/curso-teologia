import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u14-leitura-traducao-5',
  disciplina: 'TE08',
  unidade: 14,
  titulo: 'Exercícios de leitura e tradução 5',
  objetivo: 'Consolidar análise morfológica mista de verbos e substantivos da segunda declinação, treinando identificação rápida de formas semelhantes e justificativa explícita de cada decisão de tradução.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A competência agora é justificar',
      paragrafos: [
        'No início do curso bastava reconhecer letras. Agora cada decisão precisa ser sustentada por evidência morfológica. Se o estudante afirma que λόγους é acusativo plural, deve apontar a terminação; se afirma que λύσονται é futuro médio, deve localizar o σ e a terminação -ονται.',
        'Essa justificativa explícita é uma ponte para exegese. Mais tarde haverá ambiguidades reais; o hábito de mostrar por que uma leitura é preferível impede que intuição ou tradução conhecida substituam análise.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Banco de formas para reconhecimento',
      itens: [
        'λόγος, λόγου, λόγῳ, λόγον, λόγοι, λόγων, λόγοις, λόγους.',
        'ἔργον, ἔργου, ἔργῳ, ἔργα, ἔργων, ἔργοις.',
        'λύει, λύουσιν, λύεται, λύονται, λύσει, λύσουσιν, λύσεται, λύσονται.',
        'Artigos: ὁ, τοῦ, τῷ, τόν; οἱ, τῶν, τοῖς, τούς; τό, τά.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u14-a1',
      titulo: 'Parsing relâmpago com justificativa',
      enunciado: 'Analise, sem traduzir primeiro: τοῖς λόγοις, τὰ ἔργα, λύσονται, λύουσιν, τοῦ λόγου, τὸν δοῦλον.',
      itens: [
        'Para formas nominais, registre gênero, número e caso e cite a pista morfológica.',
        'Para formas verbais, registre pessoa, número, tempo-forma, modo e voz.',
        'Marque qualquer ambiguidade real que permaneça sem contexto.',
        'Só depois forneça uma tradução aproximada das formas isoladas.'
      ],
      resposta: 'τοῖς λόγοις = masc. dat. pl.; τὰ ἔργα = neut. nom. ou acc. pl.; λύσονται = 3ª pl., futuro indicativo médio; λύουσιν = 3ª pl., presente indicativo ativo; τοῦ λόγου = masc. gen. sg.; τὸν δοῦλον = masc. acc. sg. τὰ ἔργα permanece morfologicamente ambíguo entre nominativo e acusativo plural sem sintaxe maior.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u14-a2',
      titulo: 'Análise de duas proposições',
      enunciado: 'Analise e traduza: (a) οἱ δοῦλοι λύονται. O contexto informa valor passivo. (b) ὁ κύριος λύσει τοὺς δούλους.',
      itens: [
        'Identifique sujeito e verbo em cada frase.',
        'Explique a diferença de tempo-forma entre λύονται e λύσει.',
        'Justifique o plural de δοῦλοι/δούλους pelas terminações e artigos.',
        'Produza tradução natural em português.'
      ],
      resposta: '(a) οἱ δοῦλοι = nominativo plural; λύονται = 3ª plural presente médio/passivo, aqui passivo: “Os servos são libertados”. (b) ὁ κύριος = nominativo singular; λύσει = 3ª singular futuro ativo; τοὺς δούλους = acusativo plural: “O senhor libertará os servos”.'
    },
    {
      tipo: 'quadro',
      titulo: 'Critério de domínio',
      itens: [
        'Você reconhece a forma antes de consultar a tradução.',
        'Consegue apontar a terminação que sustenta sua análise.',
        'Distingue ambiguidade morfológica de simples dúvida pessoal.',
        'Não força uma tradução além do que forma e contexto permitem.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto com exercícios cumulativos de parsing e tradução.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para exercícios de morfologia introdutória.' }
  ],
  atualizadoEm: '2026-09-09',
};
