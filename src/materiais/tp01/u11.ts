import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u11-vocacao-aconselhamento',
  disciplina: 'TP01',
  unidade: 11,
  titulo: 'Vocação e aconselhamento',
  objetivo: 'Explicar o chamado pastoral para aconselhar, o preparo necessário e a responsabilidade de buscar restauração com verdade, brandura e reconhecimento de limites.',
  topicosCobertos: ['Chamado para aconselhar', 'Preparo para aconselhar', 'Chamado para restaurar pessoas'],
  blocos: [
    { tipo: 'texto', titulo: '1. Aconselhamento pertence ao pastoreio', paragrafos: [
      'O aconselhamento pastoral nasce do cuidado de pessoas concretas. Culpa, luto, conflitos, decisões, pecados persistentes, medo e sofrimento raramente cabem integralmente numa pregação pública; por isso o pastor precisa saber ouvir e aplicar a Palavra a situações particulares.',
      'Esse chamado não transforma o ministro em especialista universal. Competência pastoral inclui saber quando um caso exige também avaliação médica, psicológica, jurídica ou medidas formais de proteção.'
    ] },
    { tipo: 'quadro', titulo: 'Preparo para aconselhar', itens: [
      'Ouvir antes de concluir.',
      'Distinguir pecado, sofrimento e limitação.',
      'Aplicar a Escritura no contexto, não como frase isolada.',
      'Conhecer limites de competência e encaminhar quando necessário.',
      'Acompanhar processos que exigem tempo, arrependimento, perdão, disciplina e novas práticas.'
    ] },
    { tipo: 'texto', titulo: '2. Restaurar não é vencer uma discussão', paragrafos: [
      'Gálatas 6 associa restauração à brandura e autoexame. A meta não é provar superioridade moral do conselheiro, mas recuperar o irmão, proteger quem sofreu dano e promover arrependimento real.',
      'Brandura não significa minimizar pecado. Da mesma forma, firmeza não autoriza humilhação. O chamado pastoral combina verdade, paciência e responsabilidade pelo efeito do conselho.'
    ] },
    { tipo: 'atividade', id: 'tp01-u11-a1', titulo: 'Atividade — aconselhar dentro dos limites', enunciado: 'Uma pessoa procura o pastor com culpa espiritual intensa e sinais de risco de autoagressão. Como a vocação pastoral deve responder?', itens: ['Preserve o cuidado espiritual.', 'Reconheça limites e risco.', 'Indique ações simultâneas.'], resposta: 'O pastor deve ouvir, oferecer cuidado bíblico e presença responsável, mas não tratar risco de autoagressão como questão exclusivamente espiritual. É necessário acionar suporte de emergência e profissionais habilitados, envolver rede segura quando apropriado e continuar o acompanhamento pastoral. Encaminhar não é abandonar.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Aconselhamento é aplicação pastoral da Palavra.', 'Preparo inclui escuta, discernimento e conhecimento de limites.', 'Restauração busca recuperar pessoas com verdade e brandura.'] }
  ],
  fontes: [
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Clássico sobre cuidado pessoal do rebanho e responsabilidade pastoral.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Normatiza cuidado, disciplina e responsabilidades pastorais na IPB.' }
  ],
  atualizadoEm: '2026-09-11',
};
