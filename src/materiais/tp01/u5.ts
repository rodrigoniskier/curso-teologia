import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u5-trabalho-glorioso',
  disciplina: 'TP01',
  unidade: 5,
  titulo: 'Chamado para um trabalho glorioso',
  objetivo: 'Relacionar relevância, reverência e zelo no trabalho pastoral, mostrando que a glória do ministério está em seu objeto e não no prestígio do ministro.',
  topicosCobertos: ['A relevância do trabalho pastoral', 'A reverência do trabalho pastoral', 'O zelo pelo trabalho pastoral'],
  blocos: [
    { tipo: 'texto', titulo: '1. A relevância está naquilo que Cristo faz por meio do ofício', paragrafos: [
      'O trabalho pastoral é relevante porque serve à Igreja comprada por Cristo e lida com Palavra, sacramentos, doutrina, cuidado, disciplina e formação de pessoas. Sua importância não vem de visibilidade social, influência pública ou centralidade institucional do pastor.',
      'Essa distinção protege tanto contra desprezo quanto contra vaidade. O ministério não é pequeno porque muitas tarefas são discretas; também não transforma o ministro em celebridade religiosa. A grandeza está no serviço confiado.'
    ] },
    { tipo: 'texto', titulo: '2. Reverência significa consciência de responsabilidade', paragrafos: [
      'Tiago adverte que mestres receberão juízo mais severo; Paulo ordena aos presbíteros que atentem primeiro por si mesmos e depois pelo rebanho; Pedro proíbe dominar os que foram confiados aos pastores. Reverência pastoral nasce da consciência de que autoridade ministerial permanece debaixo da Palavra.',
      'Por isso o temor do Senhor é incompatível com improviso irresponsável, manipulação e culto à personalidade. Quanto maior a responsabilidade, maior deve ser a disposição para prestação de contas.'
    ] },
    { tipo: 'quadro', titulo: 'Zelo pastoral não é hiperatividade', itens: [
      'Zelo é preparar-se seriamente para ensinar e pregar.',
      'Zelo é tratar pessoas como rebanho de Cristo, não como recursos de um projeto pessoal.',
      'Zelo inclui disciplina de tempo, estudo e visitação, mas também limites e descanso responsável.',
      'Zelo sem humildade se torna controle; reverência sem confiança se torna paralisia.'
    ] },
    { tipo: 'atividade', id: 'tp01-u5-a1', titulo: 'Atividade — relevância sem celebridade', enunciado: 'Um ministro mede a relevância do próprio trabalho quase exclusivamente pelo tamanho da audiência e pela repercussão pública. Reoriente esse critério usando relevância, reverência e zelo.', itens: ['Defina a fonte da relevância.', 'Explique como reverência corrige vaidade.', 'Dê dois sinais de zelo que não dependem de visibilidade.'], resposta: 'A relevância decorre do serviço à Palavra e ao povo de Cristo, não do tamanho da plataforma. Reverência lembra que o ministro presta contas a Deus e não possui o rebanho. Zelo pode aparecer em estudo fiel, visitação, oração, acompanhamento, preparação cuidadosa e disciplina de vida, mesmo sem reconhecimento público.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O trabalho pastoral é glorioso por causa de Cristo e de sua Igreja.', 'Reverência nasce da responsabilidade e da prestação de contas.', 'Zelo é fidelidade diligente, não ativismo nem busca de prestígio.'] }
  ],
  fontes: [
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Clássico reformado sobre gravidade do ofício, cuidado de si e cuidado do rebanho.' },
    { id: 'spurgeon-lectures', autor: 'Charles Haddon Spurgeon', ano: '1875', titulo: 'Lectures to My Students', publicacao: 'Internet Archive', url: 'https://archive.org/details/lecturestomystud1877spur', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Aulas pastorais sobre vida ministerial, preparação, zelo e fraquezas do pregador.' }
  ],
  atualizadoEm: '2026-09-11',
};
