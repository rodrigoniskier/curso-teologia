import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u5-cultura-virtual-espiritualidade',
  disciplina: 'CG11',
  unidade: 5,
  titulo: 'Cultura virtual e espiritualidade',
  objetivo: 'Analisar como ambientes digitais reorganizam presença, identidade, autoridade, comunidade e práticas religiosas sem confundir mediação digital com a totalidade da vida eclesial.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. O ambiente digital também é ambiente cultural', paragrafos: [
      'Redes digitais não são apenas ferramentas neutras acrescentadas à vida social. Elas criam padrões próprios de visibilidade, permanência, velocidade, comparação e formação de vínculos. Práticas religiosas mediadas por telas passam a operar dentro desses padrões.',
      'Identidade pode ser editada e apresentada publicamente; autoridade pode ser medida por alcance; comunidades podem se formar sem proximidade territorial; ensino pode circular muito além da relação pastoral que o produziu. Cada ganho de alcance vem acompanhado de perda ou transformação de contexto.'
    ] },
    { tipo: 'quadro', titulo: 'Questões antropológicas para espiritualidade digital', itens: [
      'Presença: o que se ganha e o que se perde quando a participação é mediada?',
      'Autoridade: quem é reconhecido como confiável e por quais sinais?',
      'Comunidade: há reciprocidade, disciplina, cuidado e responsabilidade ou apenas consumo de conteúdo?',
      'Algoritmo: quais práticas recebem mais visibilidade e como isso influencia o que passa a ser produzido?',
      'Ritual: o que depende de corpo, lugar, tempo compartilhado e reconhecimento comunitário?'
    ] },
    { tipo: 'texto', titulo: '2. Mediação não é equivalência', paragrafos: [
      'Conteúdo digital pode ensinar, informar, consolar e aproximar pessoas. Mas nem toda prática religiosa se torna equivalente quando transferida de um contexto comunitário para uma tela. A antropologia chama atenção para corpo, espaço, reciprocidade e ritual; a eclesiologia reformada acrescenta que assembleia, sacramentos e disciplina pertencem à vida visível da igreja.',
      'A pergunta madura não é se o digital é bom ou ruim, mas que tipo de relação e prática ele torna possível, quais substituições ele incentiva e onde precisa permanecer subordinado à comunhão concreta.'
    ] },
    { tipo: 'atividade', id: 'cg11-u5-a1', titulo: 'Atividade — mapear uma prática digital', enunciado: 'Analise uma prática religiosa digital — transmissão, grupo de mensagens, podcast, curso ou rede social — segundo presença, autoridade, comunidade e ritual.', itens: ['Identifique benefícios.', 'Identifique perdas de contexto.', 'Indique o que não deveria ser tratado como equivalente à presença comunitária.'], resposta: 'A análise deve evitar tanto tecnofobia quanto entusiasmo ingênuo, descrevendo propriedades do meio e seus efeitos sobre relações e práticas.' }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para cultura, interação social, grupos e mídia.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para igreja visível, culto e meios ordinários.' }
  ],
  atualizadoEm: '2026-09-24',
};
