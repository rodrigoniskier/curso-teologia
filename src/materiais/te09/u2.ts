import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u2-adjetivos-introducao',
  disciplina: 'TE09',
  unidade: 2,
  titulo: 'Adjetivos 1',
  objetivo: 'Reconhecer a flexão adjetival e distinguir posição atributiva e predicativa pela concordância e pelo uso do artigo.',
  topicosCobertos: ['Introdução aos adjetivos', 'Flexão dos adjetivos', 'Posição atributiva e posição predicativa'],
  blocos: [
    { tipo: 'texto', titulo: '1. Adjetivos concordam com o substantivo', paragrafos: [
      'O adjetivo grego flexiona para concordar com o substantivo em gênero, número e caso. Isso significa que a forma do adjetivo acompanha a função sintática do substantivo, ainda que as duas palavras não apareçam lado a lado.',
      'ἀγαθός, ἀγαθή, ἀγαθόν fornece um modelo de três gêneros. O estudante deve analisar primeiro gênero, número e caso; a tradução vem depois.'
    ] },
    { tipo: 'quadro', titulo: 'Atributivo e predicativo', itens: [
      'Atributivo: ὁ ἀγαθὸς ἄνθρωπος — “o homem bom”. O artigo introduz o grupo e o adjetivo pertence ao sintagma nominal.',
      'Atributivo repetido: ὁ ἄνθρωπος ὁ ἀγαθός — também “o homem bom”, com segunda posição atributiva.',
      'Predicativo: ἀγαθὸς ὁ ἄνθρωπος ou ὁ ἄνθρωπος ἀγαθός — “o homem é bom” em contexto apropriado. O adjetivo fica fora da posição atributiva marcada pelo artigo.'
    ] },
    { tipo: 'texto', titulo: '2. O artigo ajuda, mas não substitui análise', paragrafos: [
      'A distinção de posição é um recurso sintático importante porque o grego frequentemente omite o verbo “ser” no presente. A relação predicativa pode, portanto, estar expressa sem uma forma explícita de εἰμί.',
      'Não se deve transformar a posição do artigo em fórmula mecânica desconectada do contexto. Concordância, artigo e estrutura da oração trabalham juntos.'
    ] },
    { tipo: 'atividade', id: 'te09-u2-a1', titulo: 'Atividade — duas posições', enunciado: 'Compare ὁ πιστὸς δοῦλος e πιστὸς ὁ δοῦλος.', itens: ['Identifique a posição do adjetivo.', 'Analise a concordância.', 'Proponha uma tradução que preserve a diferença estrutural.'], resposta: 'ὁ πιστὸς δοῦλος está em posição atributiva: “o servo fiel”. πιστὸς ὁ δοῦλος está em posição predicativa: “o servo é fiel”, conforme o contexto.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para flexão e posição dos adjetivos.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para uso atributivo e predicativo.' }
  ],
  atualizadoEm: '2026-09-24',
};