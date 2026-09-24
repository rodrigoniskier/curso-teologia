import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u3-cultura-elite-popular-massa',
  disciplina: 'CG11',
  unidade: 3,
  titulo: 'Cultura de elite e cultura popular ou de massa',
  objetivo: 'Distinguir cultura de elite, cultura popular e cultura de massa sem transformar essas categorias em uma escala automática de valor.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Três categorias, não três castas culturais', paragrafos: [
      'Cultura de elite costuma designar bens e práticas associados a instituições de alta escolarização, formação especializada ou prestígio social. Cultura popular refere-se a práticas produzidas e transmitidas em comunidades e tradições locais. Cultura de massa destaca bens culturais produzidos e distribuídos em grande escala por meios industriais e digitais.',
      'As fronteiras são móveis. Uma música popular pode ser incorporada por instituições acadêmicas; uma obra erudita pode circular por plataformas de massa; práticas comunitárias podem transformar-se em produtos comerciais. Por isso, as categorias descrevem modos de produção, circulação e legitimação, não essências fixas.'
    ] },
    { tipo: 'quadro', titulo: 'Perguntas antropológicas úteis', itens: [
      'Quem produz e quem legitima a prática cultural?',
      'Como ela circula: família, escola, mercado, mídia, igreja, plataforma digital?',
      'Que capital econômico, escolar ou simbólico é necessário para participar?',
      'O grupo a trata como tradição, entretenimento, arte, identidade, devoção ou consumo?'
    ] },
    { tipo: 'texto', titulo: '2. O risco de chamar preferência de princípio', paragrafos: [
      'Em ambientes religiosos, diferenças de repertório musical, linguagem, vestimenta e estética podem ser confundidas com diferenças doutrinárias. A análise antropológica ajuda a separar o que pertence ao conteúdo normativo da fé do que pertence a estilos sociais aprendidos.',
      'Isso não significa que toda forma cultural seja moralmente indiferente. Significa apenas que o juízo precisa identificar primeiro o que a prática comunica e faz, em vez de concluir pela origem social ou pelo prestígio de quem a utiliza.'
    ] },
    { tipo: 'atividade', id: 'cg11-u3-a1', titulo: 'Atividade — circulação cultural', enunciado: 'Escolha uma prática cultural presente em uma igreja ou comunidade e descreva como ela circula entre cultura popular, institucional e de massa.', itens: ['Identifique produtores e públicos.', 'Descreva meios de circulação.', 'Separe juízo estético, social e teológico.'], resposta: 'Uma boa análise mostra que a mesma prática pode ocupar posições diferentes conforme o contexto e evita confundir prestígio social com superioridade moral ou espiritual.' }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Livro-texto aberto para cultura, mídia, grupos e instituições sociais.' }
  ],
  atualizadoEm: '2026-09-24',
};
