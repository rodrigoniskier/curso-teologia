import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u12-defesa-rebanho',
  disciplina: 'TP01',
  unidade: 12,
  titulo: 'Vocação e defesa do rebanho',
  objetivo: 'Explicar o zelo pastoral na doutrina e na liturgia como vigilância confessional e conciliar, evitando tanto negligência quanto controle personalista.',
  topicosCobertos: ['Zelo na doutrina', 'Zelo na liturgia'],
  blocos: [
    { tipo: 'texto', titulo: '1. Defender doutrina é distinguir pesos', paragrafos: [
      'Atos 20 apresenta o pastoreio como vigilância real contra ensino destrutivo. O ministro não pode tratar toda ideia como indiferente, porque doutrina molda culto, ética e esperança.',
      'Ao mesmo tempo, zelo doutrinário exige proporção. Trindade, pessoa de Cristo, justificação e autoridade da Escritura não ocupam a mesma categoria de preferências prudenciais. Chamar toda divergência de heresia banaliza a própria palavra.'
    ] },
    { tipo: 'texto', titulo: '2. Zelo litúrgico é responsabilidade, não propriedade', paragrafos: [
      'Na tradição reformada, o pastor não é dono do culto nem diretor de uma experiência religiosa. A igreja se reúne diante de Deus e recebe da Escritura seus elementos e finalidade.',
      'Planejamento, música, beleza e comunicação podem servir ao culto, mas não substituir Palavra, oração, sacramentos e a centralidade de Deus. O zelo do ministro consiste em guardar essa ordem com a Igreja, não impor gosto pessoal.'
    ] },
    { tipo: 'quadro', titulo: 'Vigilância saudável', itens: [
      'Ensina positivamente a verdade antes de apenas combater erros.',
      'Distingue doutrina central, confessional e questão prudencial.',
      'Age em colegialidade, não por autoridade privada ilimitada.',
      'Avalia práticas litúrgicas pela Escritura e pelos padrões da Igreja, não apenas por eficiência ou preferência.'
    ] },
    { tipo: 'atividade', id: 'tp01-u12-a1', titulo: 'Atividade — zelo ou controle?', enunciado: 'Um pastor proíbe qualquer proposta litúrgica diferente de sua preferência pessoal e chama toda discordância de infidelidade doutrinária. Avalie a postura.', itens: ['Diferencie princípio de preferência.', 'Explique o papel da colegialidade.', 'Preserve o dever real de vigilância.'], resposta: 'O pastor tem dever de guardar doutrina e culto, mas não pode identificar seu gosto com a norma divina. Questões devem ser classificadas por peso bíblico e confessional, discutidas nos foros competentes e decididas colegiadamente. Vigilância real é compatível com limites de autoridade.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Defesa do rebanho inclui doutrina e culto.', 'Zelo exige proporção e discernimento.', 'Autoridade pastoral é confessional, conciliar e limitada pela Palavra.'] }
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster — caps. XXI, XXV e XXX', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para culto, Igreja e governo.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para culto, governo e disciplina na IPB.' }
  ],
  atualizadoEm: '2026-09-11',
};
