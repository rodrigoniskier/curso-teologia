import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u4-verbos-caracteristicas-gerais',
  disciplina: 'TE05',
  unidade: 4,
  titulo: 'Verbos: características gerais',
  objetivo: 'Mapear as principais formas do sistema verbal hebraico e distinguir verbos fortes e fracos como preparação para a flexão do Qal.',
  topicosCobertos: ['Formas dos verbos', 'Verbos fortes e verbos fracos'],
  blocos: [
    { tipo: 'texto', titulo: '1. O verbo hebraico organiza informação em várias dimensões', paragrafos: [
      'A análise verbal envolve raiz, tronco ou binyan, conjugação, pessoa, gênero e número. O estudante não deve começar pela tradução portuguesa: primeiro identifica a arquitetura morfológica da forma.',
      'Entre as formas que aparecerão progressivamente estão perfeito, imperfeito, imperativo, infinitivos, particípio, jussivo e coortativo. Essas categorias interagem com sintaxe, discurso e contexto para produzir valores temporais e modais.'
    ] },
    { tipo: 'quadro', titulo: 'Verbo forte e verbo fraco', itens: [
      'Verbo forte: suas consoantes radicais comportam-se de maneira relativamente regular nos paradigmas-modelo.',
      'Verbo fraco: uma ou mais radicais pertencem a classes que produzem alterações previsíveis, como נ inicial, guturais, י/ו ou ה final.',
      '“Fraco” não significa semanticamente menos importante; é uma classificação morfológica.',
      'O paradigma do verbo forte fornece uma referência para reconhecer onde o verbo fraco diverge.'
    ] },
    { tipo: 'texto', titulo: '2. A raiz não é ainda uma palavra flexionada', paragrafos: [
      'Gramáticas costumam representar uma raiz por três consoantes, como קטל. Essa representação ajuda a visualizar padrões, mas as formas reais recebem vocalização, prefixos, sufixos e eventualmente mudanças fonológicas.',
      'O sistema dos troncos modifica a voz, a valência ou outros aspectos lexicais e gramaticais do verbo. Nesta unidade basta reconhecer que Qal é o paradigma básico de referência; os demais troncos serão estudados mais adiante.'
    ] },
    { tipo: 'atividade', id: 'te05-u4-a1', titulo: 'Atividade — classificar antes de conjugar', enunciado: 'Explique por que um verbo com נ inicial ou ה final pode não seguir visualmente o paradigma forte em todas as formas.', itens: ['Defina verbo forte.', 'Defina verbo fraco.', 'Indique por que o paradigma forte continua útil.'], resposta: 'Certas radicais sofrem assimilação, queda ou mudanças vocálicas previsíveis. O paradigma forte funciona como linha de base: a forma fraca é entendida pela diferença sistemática, não como exceção sem regra.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};