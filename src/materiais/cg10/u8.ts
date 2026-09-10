import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u8-desenvolvimento-mudanca-social',
  disciplina: 'CG10',
  unidade: 8,
  titulo: 'Desenvolvimento e mudança social',
  objetivo: 'Compreender mudança social como transformação de instituições, relações e padrões culturais ao longo do tempo, distinguindo descrição de mudança, teorias explicativas e juízos normativos sobre progresso.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Mudança não significa automaticamente progresso', paragrafos: [
      'Sociedades mudam por inovação tecnológica, transformações econômicas, movimentos sociais, migração, guerras, decisões políticas, mudanças demográficas e circulação de ideias. A Sociologia procura identificar mecanismos e ritmos dessa transformação.',
      'O termo desenvolvimento pode carregar um juízo de valor. Uma mudança pode aumentar renda e, ao mesmo tempo, enfraquecer vínculos comunitários; pode ampliar acesso à informação e também produzir novas formas de exclusão. Por isso, descrever mudança vem antes de chamá-la de progresso ou decadência.'
    ] },
    { tipo: 'quadro', titulo: 'Fatores de mudança social', itens: [
      'Tecnologia altera formas de trabalho, comunicação e organização.',
      'Demografia modifica demandas por educação, saúde, moradia e cuidado.',
      'Migração e urbanização reconfiguram redes, identidades e instituições.',
      'Movimentos sociais podem transformar leis, normas e expectativas.',
      'Crises econômicas, guerras e desastres podem acelerar mudanças já em curso.'
    ] },
    { tipo: 'texto', titulo: '2. Instituições religiosas também vivem em contextos móveis', paragrafos: [
      'Uma igreja pode conservar sua doutrina e ainda precisar compreender mudanças ao redor: transformação do bairro, alteração de horários de trabalho, novas formas de comunicação, envelhecimento populacional ou chegada de migrantes.',
      'A fidelidade confessional não exige imobilidade sociológica. O desafio é distinguir aquilo que pertence à norma teológica daquilo que é forma histórica, hábito local ou estratégia circunstancial.'
    ] },
    { tipo: 'atividade', id: 'cg10-u8-a1', titulo: 'Atividade — mapear mudança sem moralizar primeiro', enunciado: 'Uma congregação percebe queda na participação noturna ao longo de dez anos. Liste fatores sociais que deveriam ser investigados antes de concluir que houve simples perda de compromisso religioso.', itens: ['Considere trabalho e mobilidade.', 'Considere demografia e território.', 'Considere mudanças tecnológicas e familiares.'], resposta: 'A investigação pode incluir horários de trabalho, segurança, transporte, mudança residencial dos membros, envelhecimento, composição familiar, novas rotinas de estudo, oferta de encontros digitais e transformação do bairro. Esses fatores não eliminam dimensões espirituais, mas impedem conclusões causais precipitadas.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Mudança social tem causas múltiplas.', 'Desenvolvimento não é sinônimo automático de progresso moral.', 'Instituições religiosas também respondem a transformações contextuais.', 'Análise sociológica ajuda a distinguir princípio permanente de forma contingente.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para mudança social, tecnologia, população e movimentos sociais.' }
  ],
  atualizadoEm: '2026-09-10',
};
