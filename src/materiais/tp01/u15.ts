import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u15-familia-pastoral',
  disciplina: 'TP01',
  unidade: 15,
  titulo: 'Vocação e família pastoral',
  objetivo: 'Relacionar qualificação ministerial e cuidado da família, protegendo esposa e filhos de expectativas indevidas e tratando a educação doméstica como parte da fidelidade pastoral.',
  topicosCobertos: ['Cuidado com a esposa', 'Cuidado com os filhos', 'Educação da família'],
  blocos: [
    { tipo: 'texto', titulo: '1. A família não é equipamento do ministério', paragrafos: [
      '1 Timóteo 3 usa a vida doméstica como evidência de maturidade do candidato. O texto examina a responsabilidade do oficial em sua casa; não ordena simultaneamente esposa e filhos nem autoriza a igreja a tratá-los como extensão funcional do cargo.',
      'Cuidar da esposa inclui fidelidade, presença, escuta e proteção contra expectativas ministeriais automáticas. Ela pode possuir dons e serviços próprios, mas não recebe por casamento um cargo auxiliar não solicitado.'
    ] },
    { tipo: 'texto', titulo: '2. Filhos não são peças da reputação pastoral', paragrafos: [
      'Cuidar dos filhos envolve disciplina amorosa, tempo, instrução e segurança para que sejam crianças e adolescentes reais. O pastor deve corrigi-los por amor a eles, não para preservar uma imagem pública.',
      'O requisito bíblico não exige filhos sem pecado; examina se o pai governa e cuida da casa com fidelidade. Uma comunidade que aplica aos filhos do pastor uma régua mais severa do que às demais famílias pode transformar qualificação bíblica em vigilância injusta.'
    ] },
    { tipo: 'quadro', titulo: 'Educação da família', itens: [
      'Participação no culto público e nos meios ordinários de graça.',
      'Escritura e oração no contexto doméstico sem transformar a casa em segunda congregação.',
      'Conversas reais, disciplina coerente e exemplo do próprio ministro.',
      'Tempos protegidos para a família, com critérios claros para emergências pastorais.',
      'Liberdade para a esposa e os filhos receberem cuidado pastoral de outros líderes quando necessário.'
    ] },
    { tipo: 'atividade', id: 'tp01-u15-a1', titulo: 'Atividade — expectativas sobre a família', enunciado: 'Uma congregação exige que a esposa do pastor lidere automaticamente um ministério e que seus filhos tenham comportamento público impecável para proteger a imagem pastoral. Avalie essas expectativas.', itens: ['Examine o que realmente pertence à qualificação do pastor.', 'Diferencie vocação do cônjuge e do ministro.', 'Proteja os filhos sem relativizar disciplina.'], resposta: 'A Igreja pode observar se o pastor cuida fielmente da casa, mas não pode criar um ofício automático para sua esposa nem exigir dos filhos impecabilidade que a Escritura não promete. O pastor deve discipular e proteger a família, e a congregação deve tratá-la como membros do corpo, não como acessórios de sua reputação.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A família do pastor não é ordenada junto com ele.', 'Cuidado da esposa e dos filhos integra a fidelidade ministerial.', 'Educação doméstica depende de presença, meios ordinários, disciplina e exemplo.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para responsabilidades e vida ministerial na IPB.' },
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência clássica para vida, caráter e responsabilidade doméstica do ministro.' }
  ],
  atualizadoEm: '2026-09-11',
};
