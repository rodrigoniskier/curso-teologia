import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u2-origem-filosofia',
  disciplina: 'CG08',
  unidade: 2,
  titulo: 'A origem da Filosofia',
  objetivo: 'Situar historicamente o surgimento da filosofia grega sem repetir o mito simplista de uma passagem instantânea do “mito” para a “razão”, reconhecendo continuidades e mudanças nas formas de explicação.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A filosofia não nasceu num único instante', paragrafos: [
      'A narrativa escolar costuma dizer que os gregos abandonaram o mito e inventaram a razão. A fórmula captura uma mudança real — a busca por explicações discutíveis publicamente e por princípios mais gerais —, mas é histórica e conceitualmente simples demais. Poetas, legisladores, matemáticos e sábios já raciocinavam; e os primeiros filósofos continuaram usando imagens, cosmologias e linguagem religiosa.',
      'O que muda progressivamente entre os séculos VII e V a.C. é o modo de justificar afirmações: em vez de apelar apenas à autoridade de uma tradição narrativa, pensadores começam a perguntar por princípios, causas, estruturas e argumentos que possam ser examinados e contestados.'
    ] },
    { tipo: 'quadro', titulo: 'Condições que favoreceram o desenvolvimento filosófico', itens: [
      'Contato entre culturas no Mediterrâneo e no Oriente Próximo.',
      'Desenvolvimento de escrita, cálculo, astronomia e discussão pública.',
      'Vida política das pólis, na qual persuadir e argumentar tinham importância concreta.',
      'Busca por explicações gerais da natureza, da justiça e da vida humana.'
    ] },
    { tipo: 'texto', titulo: '2. Logos não significa “razão pura sem tradição”', paragrafos: [
      'A palavra logos pode significar palavra, discurso, relato, razão ou princípio, conforme o contexto. Por isso não deve ser usada como símbolo mágico de uma suposta modernidade grega. A filosofia antiga continua profundamente interessada em divindade, cosmos, alma, virtude e finalidade.',
      'Para o estudante cristão, reconhecer esse processo impede duas caricaturas: a de uma Grécia totalmente racional oposta a um Israel “religioso” e a de uma filosofia antiga sem qualquer valor porque nasceu fora da revelação bíblica. A comparação correta exige contexto histórico e avaliação posterior de cada argumento.'
    ] },
    { tipo: 'atividade', id: 'cg08-u2-a1', titulo: 'Atividade — explicar uma mudança sem caricatura', enunciado: 'Explique em quatro ou cinco linhas por que “do mito ao logos” pode ser uma fórmula útil e, ao mesmo tempo, enganosa.', itens: ['Identifique a mudança real.', 'Mostre uma continuidade.', 'Evite dizer que antes dos gregos ninguém raciocinava.'], resposta: 'A fórmula é útil porque registra o crescimento de explicações e argumentos publicamente discutíveis sobre natureza e sociedade. É enganosa quando sugere ruptura absoluta: tradições míticas já organizavam explicações e os primeiros filósofos continuaram usando imagens, religião e cosmologia. A novidade é gradual e envolve formas de justificação, não a invenção da capacidade humana de raciocinar.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A origem da filosofia é processo histórico, não evento instantâneo.', 'Os primeiros filósofos buscaram causas e princípios discutíveis por argumento.', 'Mito e razão não formam dois blocos absolutamente separados.', 'A filosofia grega deve ser contextualizada antes de ser elogiada ou criticada teologicamente.'] }
  ],
  fontes: [
    { id: 'sep-plato', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Plato', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/plato/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Contextualiza o desenvolvimento da filosofia grega clássica e seus problemas.' },
    { id: 'sep-aristotle-logic', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: "Aristotle's Logic", publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aristotle-logic/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência para a consolidação da argumentação e da lógica na tradição grega.' }
  ],
  atualizadoEm: '2026-09-10',
};
