import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u11-equilibrio-meios-comunicacao',
  disciplina: 'TP55',
  unidade: 11,
  titulo: 'O equilíbrio no uso dos meios de comunicação',
  objetivo: 'Escolher meios adequados a públicos de diferentes faixas etárias sem confundir preferência geracional com regra absoluta e sem permitir que o meio se sobreponha à mensagem.',
  topicosCobertos: ['Meios corretos para faixas etárias específicas e o meio nunca pode se sobrepor à mensagem'],
  blocos: [
    { tipo: 'texto', titulo: '1. Faixa etária é pista, não destino', paragrafos: [
      'Idade influencia hábitos de mídia, mas não determina sozinha o canal adequado. Escolaridade, acesso, deficiência, contexto econômico, costume congregacional e finalidade da mensagem também importam. Uma igreja prudente observa seu público real em vez de aplicar estereótipos como “jovem só vê vídeo” ou “idoso não usa internet”.',
      'Comunicação inclusiva frequentemente exige redundância entre canais: agenda no site, aviso oral, mensagem e impresso podem cumprir funções complementares. Redundância planejada é diferente de simplesmente copiar a mesma peça para todos os meios.'
    ] },
    { tipo: 'quadro', titulo: 'Critérios de escolha', itens: [
      'Acessibilidade: o público consegue receber e compreender?',
      'Urgência: a mensagem precisa chegar agora ou pode ser consultada depois?',
      'Complexidade: o conteúdo exige espaço para contexto e revisão?',
      'Privacidade: pode circular publicamente?',
      'Interação: exige resposta, escuta ou decisão conjunta?',
      'Manutenção: a igreja conseguirá sustentar o canal?'
    ] },
    { tipo: 'texto', titulo: '2. O meio nunca é a mensagem da igreja', paragrafos: [
      'Todo meio favorece certas formas. Vídeo premia imagem e ritmo; mensagem instantânea favorece brevidade; livro favorece desenvolvimento; reunião presencial favorece interação rica. A disciplina cristã consiste em usar essas propriedades sem permitir que elas determinem o conteúdo que merece ser dito.',
      'Quando uma doutrina precisa ser reduzida até ficar enganosa para caber no formato, é o formato que deve mudar. Quando uma plataforma recompensa conflito ou exagero, a igreja não recebe autorização para converter provocação em método normal de comunicação.'
    ] },
    { tipo: 'atividade', id: 'tp55-u11-a1', titulo: 'Atividade — mesma necessidade, meios diferentes', enunciado: 'A igreja precisa comunicar uma mudança emergencial de horário e também publicar uma explicação sobre a Ceia do Senhor. Escolha meios para cada tarefa e justifique.', itens: ['Considere urgência.', 'Considere complexidade.', 'Considere permanência.', 'Considere públicos com hábitos diferentes.'], resposta: 'Mudança emergencial pede canais empurrados e redundantes, como mensagem/lista, aviso nas redes e atualização no site. A explicação doutrinária pede meio permanente e contextual, como artigo, aula ou vídeo mais longo, que pode ser divulgado por posts curtos sem ser reduzido a eles.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Conheça pessoas concretas, não caricaturas geracionais.', 'Canal deve ser escolhido pela tarefa e pelo público.', 'Quando forma e fidelidade entram em conflito, muda-se a forma.'] }
  ],
  fontes: [
    { id: 'broadus-sermoes', autor: 'John A. Broadus', ano: '1870', titulo: 'A Treatise on the Preparation and Delivery of Sermons', publicacao: 'Internet Archive', url: 'https://archive.org/details/treatiseonprepar00broarich', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Princípios de adaptação da comunicação ao auditório sem abandono do conteúdo.' },
    { id: 'kuyper-calvinismo', autor: 'Abraham Kuyper', ano: '1898', titulo: 'Calvinism: Six Lectures', publicacao: 'Internet Archive', url: 'https://archive.org/details/calvinismsixlect00kuyp', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Enquadramento reformado da ação cristã na cultura.' }
  ],
  atualizadoEm: '2026-09-11',
};