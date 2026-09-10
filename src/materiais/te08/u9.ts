import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u9-segunda-declinacao',
  disciplina: 'TE08',
  unidade: 9,
  titulo: 'Substantivos 2 — segunda declinação',
  objetivo: 'Dominar os paradigmas masculino e neutro da segunda declinação, reconhecer caso e número por terminações e artigo e aplicar as formas em leitura e tradução controladas.',
  topicosCobertos: ['2ª declinação'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Declinação é um padrão de terminações',
      paragrafos: [
        'A segunda declinação reúne muitos substantivos em -ος, geralmente masculinos, e em -ον, geralmente neutros. A palavra lexical costuma ser aprendida com uma forma que ajuda a identificar o padrão, por exemplo λόγος, -ου, ὁ e ἔργον, -ου, τό.',
        'O objetivo não é recitar terminações sem função. Cada forma deve ser ligada simultaneamente a caso, número e uso provável. A repetição oral do paradigma é útil quando acompanhada de análise: λόγου não é apenas “a segunda forma da tabela”, mas genitivo singular de λόγος.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'λόγος — masculino da segunda declinação',
      itens: [
        'Singular: nominativo λόγος; genitivo λόγου; dativo λόγῳ; acusativo λόγον; vocativo λόγε.',
        'Plural: nominativo λόγοι; genitivo λόγων; dativo λόγοις; acusativo λόγους; vocativo λόγοι.',
        'Artigo singular: ὁ, τοῦ, τῷ, τόν. Artigo plural: οἱ, τῶν, τοῖς, τούς.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'ἔργον — neutro da segunda declinação',
      itens: [
        'Singular: nominativo ἔργον; genitivo ἔργου; dativo ἔργῳ; acusativo ἔργον; vocativo ἔργον.',
        'Plural: nominativo ἔργα; genitivo ἔργων; dativo ἔργοις; acusativo ἔργα; vocativo ἔργα.',
        'Artigo singular: τό, τοῦ, τῷ, τό. Artigo plural: τά, τῶν, τοῖς, τά.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A regra neutra merece reconhecimento imediato',
      paragrafos: [
        'Nos substantivos neutros, nominativo e acusativo têm a mesma forma; o vocativo também coincide. No plural da segunda declinação neutra, essas formas terminam em -α. Essa regularidade reaparecerá em outras declinações e deve ser memorizada como padrão do gênero neutro, não apenas como peculiaridade de ἔργον.',
        'Quando uma forma é morfologicamente ambígua, a sintaxe decide. ἔργον isolado pode ser nominativo ou acusativo singular; em uma frase, relação com verbo, artigo e demais constituintes permite identificar a função.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Terminações que devem saltar aos olhos',
      itens: [
        '-ου — genitivo singular masculino ou neutro.',
        '-ῳ — dativo singular masculino ou neutro.',
        '-ων — genitivo plural.',
        '-οις — dativo plural.',
        '-ους — acusativo plural masculino.',
        '-α — nominativo/acusativo/vocativo plural neutro no paradigma de ἔργον.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Não traduza forma isolada antes de analisá-la',
      enunciado: 'τοῖς λόγοις',
      explicacao: 'Artigo e substantivo concordam em dativo plural masculino. Uma tradução final poderia usar “aos”, “com os”, “pelos” ou outra construção, dependendo da sintaxe. A análise morfológica é certa antes de a relação semântica específica ser conhecida.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u9-a1',
      titulo: 'Reconhecimento misto de segunda declinação',
      enunciado: 'Analise: τοῦ λόγου, τοῖς λόγοις, τὰ ἔργα, τῷ ἔργῳ, τοὺς λόγους.',
      itens: [
        'Identifique gênero, número e caso de cada combinação.',
        'Explique por que τὰ ἔργα pode ser nominativo ou acusativo plural sem contexto maior.',
        'Escreva de memória os paradigmas de λόγος e ἔργον.',
        'Marque as terminações comuns aos dois paradigmas.'
      ],
      resposta: 'τοῦ λόγου = masc. gen. sg.; τοῖς λόγοις = masc. dat. pl.; τὰ ἔργα = neut. nom. ou acc. pl.; τῷ ἔργῳ = neut. dat. sg.; τοὺς λόγους = masc. acc. pl. A ambiguidade de τὰ ἔργα decorre da regra neutra pela qual nominativo e acusativo coincidem. Genitivo e dativo apresentam terminações paralelas nos paradigmas masculino e neutro.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'λόγος modela grande parte dos masculinos em -ος; ἔργον modela neutros em -ον.',
        'O artigo reforça gênero, número e caso.',
        'Nominativo, acusativo e vocativo neutros coincidem; no plural, terminam em -α nesse paradigma.',
        'Formas isoladas podem ser ambíguas; a sintaxe resolve o valor contextual.',
        'A meta é reconhecer terminações automaticamente para liberar atenção para leitura.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto com paradigmas e prática de segunda declinação.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para segunda declinação e artigo.' }
  ],
  atualizadoEm: '2026-09-09',
};
