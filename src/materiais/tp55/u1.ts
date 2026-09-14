import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u1-introducao-comunicacao-social',
  disciplina: 'TP55',
  unidade: 1,
  titulo: 'Introdução ao curso',
  objetivo: 'Definir comunicação social eclesiástica e distinguir mensagem, meio, público, contexto, ruído e feedback para orientar decisões comunicacionais da igreja.',
  topicosCobertos: ['Definição de termos e conceitos gerais'],
  blocos: [
    { tipo: 'texto', titulo: '1. Comunicação não é apenas transmissão', paragrafos: [
      'Comunicar não é simplesmente colocar uma mensagem no ar. Entre intenção e compreensão existem linguagem, contexto, relação, meio, ruídos e expectativas. A responsabilidade do comunicador cristão inclui tornar a verdade inteligível sem manipulá-la nem reduzir seu conteúdo ao formato da moda.',
      'Na igreja, comunicação social é o uso deliberado de meios públicos para informar, ensinar, convidar, testemunhar e servir à missão. Ela pode conduzir pessoas à Palavra e à comunhão da igreja, mas não substitui os meios ordinários de graça, a assembleia, os sacramentos nem o cuidado pastoral pessoal.'
    ] },
    { tipo: 'quadro', titulo: 'Vocabulário mínimo', itens: [
      'Emissor: pessoa ou instituição que assume responsabilidade pela mensagem.',
      'Mensagem: conteúdo efetivamente expresso, não apenas o que se pretendia dizer.',
      'Canal ou meio: rádio, televisão, impresso, site, rede social, conversa ou outro suporte.',
      'Público: pessoas concretas com repertórios, necessidades e limitações próprias.',
      'Ruído: tudo o que dificulta a compreensão, da falha técnica ao jargão e à ambiguidade.',
      'Feedback: resposta que permite verificar o que foi compreendido e corrigir o processo.'
    ] },
    { tipo: 'texto', titulo: '2. A mensagem governa a ferramenta', paragrafos: [
      'A tradição reformada distingue o conteúdo normativo da Palavra das circunstâncias prudenciais de comunicação. Nenhuma tecnologia é meio de graça por si mesma e nenhuma plataforma recebe autoridade para remodelar o evangelho. A pergunta correta começa com o serviço que precisa ser prestado e só depois escolhe o canal.',
      'Essa ordem protege a igreja de dois erros: tecnofobia, como se ferramentas novas fossem intrinsecamente infiéis; e tecnolatria, como se alcance, velocidade ou engajamento provassem fidelidade e fruto espiritual.'
    ] },
    { tipo: 'atividade', id: 'tp55-u1-a1', titulo: 'Atividade — diagnosticar antes de escolher', enunciado: 'Uma igreja quer “melhorar as redes”, mas não consegue dizer qual problema pastoral ou informacional pretende resolver. Reescreva o objetivo antes de escolher qualquer ferramenta.', itens: ['Defina o público.', 'Defina a necessidade concreta.', 'Defina o resultado observável.'], resposta: 'Exemplo: “Queremos que visitantes encontrem com facilidade horários, endereço, doutrina básica e um canal de contato antes da primeira visita”. Só depois desse objetivo faz sentido decidir se site, mapa, mensagem, impresso ou rede social é o melhor meio.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Comunicação envolve significado, contexto e resposta.', 'A igreja escolhe o meio em função da missão e do público.', 'Métrica de plataforma não substitui critérios bíblicos de fidelidade.'] }
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Base confessional para distinguir culto regulado, liberdade cristã e circunstâncias prudenciais.' },
    { id: 'broadus-sermoes', autor: 'John A. Broadus', ano: '1870', titulo: 'A Treatise on the Preparation and Delivery of Sermons', publicacao: 'Internet Archive', url: 'https://archive.org/details/treatiseonprepar00broarich', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Princípios clássicos de clareza, propósito e adequação da forma ao auditório.' }
  ],
  atualizadoEm: '2026-09-11',
};