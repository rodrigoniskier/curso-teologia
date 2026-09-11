import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u16-comunhao-visitacao',
  disciplina: 'TP01',
  unidade: 16,
  titulo: 'O pastor e a comunhão com os irmãos',
  objetivo: 'Tratar relacionamentos na igreja e visitação pastoral como dimensões da comunhão e do cuidado do rebanho, sem reduzir presença pastoral a sociabilidade ou disponibilidade sem limites.',
  topicosCobertos: ['Relacionamentos na igreja', 'Visitação pastoral'],
  blocos: [
    { tipo: 'texto', titulo: '1. O pastor continua sendo irmão', paragrafos: [
      'A ordenação muda responsabilidades, mas não cancela a necessidade de comunhão. O pastor também precisa adorar, ouvir a Palavra, participar da Ceia, receber correção, encorajamento e cuidado como membro do corpo.',
      'Quando toda relação é interpretada apenas como pastor e ovelha, surge solidão funcional: todos conhecem o ministro, mas poucos conhecem o irmão. Confidencialidade exige prudência, não isolamento.'
    ] },
    { tipo: 'quadro', titulo: 'Relacionamentos pastorais saudáveis', itens: [
      'Cultivar amizades maduras sem favoritismo no governo da igreja.',
      'Manter prestação de contas e relações com outros ministros.',
      'Receber cuidado espiritual de irmãos e concílios, não apenas oferecê-lo.',
      'Distinguir confidencialidade pastoral de segredo que impede qualquer suporte responsável.'
    ] },
    { tipo: 'texto', titulo: '2. Visitação é presença com propósito', paragrafos: [
      'Visitação pastoral não é obrigação de aparecer socialmente em todas as casas. É meio de conhecer o rebanho fora do ambiente programado, levar Palavra e oração a situações específicas e perceber necessidades que raramente chegam espontaneamente ao gabinete.',
      'Tecnologia pode manter contato, mas não substitui automaticamente presença em enfermidade, luto, conflito ou restauração. O critério é qual forma de presença serve melhor aquela pessoa naquele momento.'
    ] },
    { tipo: 'quadro', titulo: 'Tipos de visitação', itens: [
      'Cuidado: enfermidade, luto, crise, fragilidade econômica ou transições importantes.',
      'Conhecimento: famílias novas, idosos, membros isolados ou pouco integrados.',
      'Restauração: ausência persistente, conflitos e disciplina.',
      'Compartilhada: presbíteros e outros líderes participam para que o cuidado não dependa de uma única pessoa.'
    ] },
    { tipo: 'atividade', id: 'tp01-u16-a1', titulo: 'Atividade — presença pastoral proporcional', enunciado: 'Uma igreja mede a fidelidade do pastor pelo número bruto de visitas domiciliares semanais. Avalie o critério e proponha uma régua melhor.', itens: ['Diferencie visita social e cuidado pastoral.', 'Considere necessidades desiguais.', 'Inclua colegialidade e outras formas legítimas de contato.'], resposta: 'Quantidade isolada não mede fidelidade. O pastor deve conhecer o rebanho e oferecer presença proporcional às necessidades, priorizando crises, pessoas vulneráveis, novos membros e restauração. Visitas podem ser compartilhadas com presbíteros e complementadas por outros meios, desde que o cuidado não seja reduzido a comunicação impessoal.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O pastor permanece irmão e necessita de comunhão.', 'Visitação é instrumento de conhecimento e cuidado, não mero ritual social.', 'Presença pastoral deve ser intencional, proporcional e compartilhável.'] }
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster — caps. XXV e XXVI', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Base confessional para Igreja e comunhão dos santos.' },
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência clássica para visitação, cuidado pessoal e responsabilidade pelo rebanho.' }
  ],
  atualizadoEm: '2026-09-11',
};
