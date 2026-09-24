import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u9-numerais',
  disciplina: 'TE05',
  unidade: 9,
  titulo: 'Os numerais',
  objetivo: 'Reconhecer números cardinais e ordinais, com atenção à concordância particular dos cardinais de três a dez e à função sintática no grupo nominal.',
  topicosCobertos: ['Números cardinais e ordinais'],
  blocos: [
    { tipo: 'texto', titulo: '1. Cardinais não seguem uma concordância intuitiva para o falante de português', paragrafos: [
      'Os numerais cardinais um e dois possuem comportamento próprio e concordam com o substantivo em construções características. De três a dez, aparece a conhecida polaridade de gênero: a forma tradicionalmente chamada feminina do numeral acompanha substantivos masculinos, e a forma sem a terminação feminina acompanha substantivos femininos.',
      'Essa descrição é morfológica e deve ser aprendida com exemplos; não há utilidade em procurar uma justificativa semântica para a “inversão”.'
    ] },
    { tipo: 'quadro', titulo: 'Estratégia de leitura', itens: [
      'Identifique primeiro o substantivo e seu gênero lexical.',
      'Reconheça se o numeral é cardinal ou ordinal.',
      'Nos cardinais 3–10, verifique o padrão de polaridade de gênero.',
      'Observe se o numeral está em estado absoluto ou construto quando a forma o exigir.',
      'Traduza a quantidade ou ordem para português natural sem copiar a ordem hebraica mecanicamente.'
    ] },
    { tipo: 'texto', titulo: '2. Ordinais descrevem posição numa sequência', paragrafos: [
      'Os ordinais, como רִאשׁוֹן “primeiro”, שֵׁנִי “segundo” e formas seguintes, comportam-se de modo mais próximo a adjetivos e concordam com o substantivo em gênero e número.',
      'Cardinal e ordinal respondem perguntas diferentes: “quantos?” e “qual posição?”. Em textos cronológicos, genealógicos e narrativos, essa distinção é frequente.'
    ] },
    { tipo: 'atividade', id: 'te05-u9-a1', titulo: 'Atividade — quantidade ou ordem', enunciado: 'Classifique uma série de expressões com numerais de um a dez e ordinais básicos.', itens: ['Identifique cardinal/ordinal.', 'Determine o gênero do substantivo.', 'Nos cardinais 3–10, verifique a polaridade.', 'Explique a tradução proposta.'], resposta: 'A análise deve separar quantidade de posição e demonstrar a concordância/polaridade pela forma hebraica, não apenas pelo número traduzido.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};