import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u3-disciplinas-filosofia-1',
  disciplina: 'CG08',
  unidade: 3,
  titulo: 'Disciplinas da Filosofia I',
  objetivo: 'Distinguir filosofia política, filosofias do genitivo e lógica pelo tipo de pergunta que cada campo formula e aplicar essa distinção a problemas concretos.',
  topicosCobertos: ['Filosofia política', 'Filosofia do genitivo (da Ciência, da Religião, da Linguagem dentre outras)', 'Lógica'],
  blocos: [
    { tipo: 'texto', titulo: '1. As áreas da filosofia são mapas de perguntas', paragrafos: [
      'Uma divisão filosófica é útil quando mostra que perguntas diferentes exigem métodos e conceitos diferentes. Filosofia política pergunta por autoridade, justiça, liberdade, lei e legitimidade. As chamadas filosofias “do genitivo” investigam os fundamentos de práticas específicas: filosofia da ciência, da religião, da linguagem, do direito, da história e assim por diante.',
      'Lógica, por sua vez, examina relações de inferência: quando uma conclusão segue de premissas, que formas de argumento preservam verdade e que erros tornam um raciocínio inválido ou fraco.'
    ] },
    { tipo: 'quadro', titulo: 'Uma pergunta, um campo principal', itens: [
      '“Quando o uso da força pelo Estado é legítimo?” — filosofia política.',
      '“O que torna uma explicação científica uma boa explicação?” — filosofia da ciência.',
      '“O que uma afirmação religiosa está afirmando e como pode ser avaliada?” — filosofia da religião.',
      '“Essa conclusão realmente segue dessas premissas?” — lógica.'
    ] },
    { tipo: 'texto', titulo: '2. Filosofia do genitivo não substitui a disciplina estudada', paragrafos: [
      'A filosofia da ciência não realiza experimentos no lugar do cientista; pergunta por evidência, causalidade, explicação e método. A filosofia da linguagem não substitui linguística; pergunta por significado, referência e relação entre linguagem e mundo. A filosofia da religião não substitui teologia; examina conceitos e argumentos religiosos em nível filosófico.',
      'Essa distinção protege contra confusões de competência. Uma pergunta filosófica pode esclarecer uma prática sem possuir os dados empíricos ou a autoridade normativa da disciplina correspondente.'
    ] },
    { tipo: 'atividade', id: 'cg08-u3-a1', titulo: 'Atividade — classificar perguntas', enunciado: 'Classifique quatro perguntas: (a) o Estado pode proibir um culto? (b) o que distingue correlação de causalidade científica? (c) “Deus existe; portanto Deus existe” é argumento válido? (d) como palavras se referem a objetos?', itens: ['Associe cada pergunta ao campo principal.', 'Explique por que a classificação não impede diálogo entre campos.'], resposta: '(a) filosofia política e também filosofia do direito/religião; (b) filosofia da ciência; (c) lógica — a forma é circular e não oferece suporte independente; (d) filosofia da linguagem. Campos se cruzam porque problemas reais podem ter dimensões políticas, lógicas, semânticas e epistemológicas ao mesmo tempo.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Filosofia política examina poder, justiça e legitimidade.', 'Filosofias do genitivo investigam pressupostos de áreas específicas.', 'Lógica examina inferências e estrutura de argumentos.', 'Classificar a pergunta é um passo anterior a tentar respondê-la.'] }
  ],
  fontes: [
    { id: 'sep-filosofia-religiao', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Philosophy of Religion', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/philosophy-religion/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Exemplo acadêmico de uma filosofia do genitivo.' },
    { id: 'sep-aristotle-logic', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: "Aristotle's Logic", publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aristotle-logic/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Base histórica e conceitual para inferência e lógica.' }
  ],
  atualizadoEm: '2026-09-10',
};
