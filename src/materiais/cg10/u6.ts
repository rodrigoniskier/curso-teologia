import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u6-processos-sociais-basicos',
  disciplina: 'CG10',
  unidade: 6,
  titulo: 'Os processos sociais básicos',
  objetivo: 'Reconhecer cooperação, competição, conflito, acomodação e assimilação como processos sociais, analisando como grupos administram interesses, recursos e diferenças sem pressupor que ausência de conflito equivale a saúde social.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Grupos estão sempre em processo', paragrafos: [
      'A vida coletiva não é estática. Pessoas cooperam para objetivos comuns, competem por recursos e posições, entram em conflito por interesses ou valores e constroem formas de acomodação para continuar convivendo.',
      'Esses processos podem coexistir. Duas organizações podem cooperar em uma ação comunitária e competir por recursos; membros de uma igreja podem compartilhar fé e missão enquanto discordam legitimamente sobre decisões administrativas.'
    ] },
    { tipo: 'quadro', titulo: 'Processos fundamentais', itens: [
      'Cooperação: coordenação de esforços em direção a objetivos compartilhados.',
      'Competição: disputa regulada ou não por recursos, reconhecimento, posição ou oportunidades escassas.',
      'Conflito: oposição manifesta entre interesses, valores, interpretações ou grupos.',
      'Acomodação: arranjo que reduz ou administra o conflito sem exigir identidade completa entre as partes.',
      'Assimilação: processo pelo qual diferenças culturais ou padrões de grupo podem diminuir ao longo do contato; não deve ser presumida como resultado inevitável ou sempre desejável.'
    ] },
    { tipo: 'texto', titulo: '2. Conflito pode revelar informação', paragrafos: [
      'Conflito não significa automaticamente falência institucional. Organizações saudáveis podem conter canais legítimos para discordância, deliberação, recurso e revisão. Em sentido contrário, silêncio não prova consenso: pessoas com menos poder podem evitar discordar porque aprenderam que o custo é alto.',
      'A análise sociológica pergunta quem define a pauta, quem pode falar, quais recursos cada parte possui e que consequências seguem da discordância. A avaliação ética dos objetivos e dos meios requer um segundo passo.'
    ] },
    { tipo: 'atividade', id: 'cg10-u6-a1', titulo: 'Atividade — mapear um conflito institucional', enunciado: 'Analise uma reunião em que todos votam unanimemente, mas membros mais novos relatam fora dela que não se sentem livres para discordar. Que processos e relações deveriam ser investigados?', itens: ['Considere normas formais e informais.', 'Observe poder e sanções.', 'Diferencie unanimidade registrada de consenso real.'], resposta: 'A investigação deve observar quem fala, quem define alternativas, possíveis sanções informais, histórico de discordâncias e canais de recurso. A unanimidade formal é um dado, mas não demonstra por si só que houve liberdade de participação ou consenso substantivo.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Cooperação, competição e conflito podem coexistir.', 'Acomodação administra diferenças sem necessariamente eliminá-las.', 'Silêncio institucional não prova ausência de conflito.', 'A Sociologia descreve relações de poder; o juízo moral precisa de critérios adicionais.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para interação, grupos, instituições e processos sociais.' }
  ],
  atualizadoEm: '2026-09-10',
};
