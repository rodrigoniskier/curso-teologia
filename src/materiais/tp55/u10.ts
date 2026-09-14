import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u10-comunicacao-plantacao-igrejas',
  disciplina: 'TP55',
  unidade: 10,
  titulo: 'Uso dos meios de comunicação para plantação de igrejas',
  objetivo: 'Planejar comunicação que sirva à plantação de igrejas sem confundir divulgação com missão nem sacrificar a fidelidade da mensagem.',
  topicosCobertos: ['Como os meios de comunicação podem auxiliar na plantação de igrejas e a divulgação da verdade com fidelidade'],
  blocos: [
    { tipo: 'texto', titulo: '1. Comunicação auxilia um processo eclesiológico', paragrafos: [
      'Uma igreja não é plantada porque uma campanha alcançou muitas pessoas. Comunicação pode tornar um trabalho conhecido, responder perguntas, orientar visitantes, explicar doutrina, anunciar encontros e manter contato; a plantação, porém, exige proclamação, conversão, discipulado, comunhão, liderança e constituição de uma igreja real.',
      'A estratégia deve começar pelas pessoas e pelo território. Quem mora ali? Que perguntas aparecem? Que meios são realmente usados? Que informações dificultam uma primeira visita? A mídia serve quando reduz barreiras legítimas sem redesenhar o evangelho para maximizar adesão.'
    ] },
    { tipo: 'quadro', titulo: 'Funil pastoral, não funil comercial', itens: [
      'Conhecimento: a pessoa descobre que existe um trabalho naquela região.',
      'Compreensão: encontra informação clara sobre fé, culto, localização e liderança.',
      'Contato: possui forma segura de fazer perguntas ou pedir visita.',
      'Presença: é convidada a participar da vida concreta da comunidade.',
      'Acompanhamento: recebe atenção pastoral e discipulado, sem ser reduzida a “lead”.'
    ] },
    { tipo: 'texto', titulo: '2. Fidelidade limita a propaganda', paragrafos: [
      'Divulgar a verdade com fidelidade inclui não prometer o que a igreja não pode garantir. Comunicação missionária não deve anunciar prosperidade, cura, pertencimento instantâneo ou solução total dos problemas como isca para audiência.',
      'Também não deve esconder convicções centrais para evitar rejeição. Clareza sobre identidade presbiteriana, centralidade das Escrituras, culto e sacramentos permite que interesse inicial se transforme em relação honesta.'
    ] },
    { tipo: 'atividade', id: 'tp55-u10-a1', titulo: 'Atividade — plano de comunicação de uma plantação', enunciado: 'Uma plantação começará reuniões públicas em 60 dias. Defina uma estratégia mínima de comunicação.', itens: ['Público e território.', 'Canal próprio.', 'Canal de descoberta.', 'Informação indispensável.', 'Forma de contato e acompanhamento.'], resposta: 'O plano deve incluir presença própria estável com identidade, doutrina, endereço/agenda e contato; um ou dois meios de descoberta realmente usados no território; conteúdo que explique a proposta sem exagero; e um processo humano de resposta que conduza da informação à presença e ao cuidado pastoral.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Comunicação serve à plantação; não a substitui.', 'O objetivo é remover barreiras à compreensão e ao contato.', 'Fidelidade da mensagem vale mais que conversão de audiência em números.'] }
  ],
  fontes: [
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Livro IV para natureza e sinais da igreja visível.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para igreja, Palavra, culto e liberdade cristã.' }
  ],
  atualizadoEm: '2026-09-11',
};