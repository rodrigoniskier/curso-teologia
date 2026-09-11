import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u13-relacao-presbiteros-diaconos',
  disciplina: 'TP01',
  unidade: 13,
  titulo: 'Relação do pastor com presbíteros e diáconos',
  objetivo: 'Examinar relações harmônicas e conflitantes entre pastor, presbíteros e diáconos, tratando colegialidade como proteção do rebanho e do próprio ministro.',
  topicosCobertos: ['Uma relação harmônica', 'Uma relação conflitante'],
  blocos: [
    { tipo: 'texto', titulo: '1. Harmonia não é ausência de discordância', paragrafos: [
      'Na ordem presbiteriana, o pastor não governa como proprietário espiritual da congregação. Ele exerce o ministério da Palavra e participa do governo com presbíteros, trabalhando ao lado dos diáconos no cuidado concreto da igreja e respondendo aos concílios.',
      'Uma relação harmônica não exige unanimidade permanente. Harmonia cristã é capacidade de buscar fidelidade comum, dizer a verdade, distribuir responsabilidade, decidir legitimamente e continuar em comunhão quando preferências diferentes não vencem.'
    ] },
    { tipo: 'quadro', titulo: 'Cooperação por ofícios', itens: [
      'Com presbíteros: compartilhar informação, ouvir experiência local e distinguir autoridade do ofício de preferência pessoal.',
      'Com diáconos: respeitar o ofício e não reduzi-lo a manutenção ou execução de ordens pastorais.',
      'Com concílios: prestar contas, receber supervisão e usar os meios institucionais de recurso e argumentação.',
      'Com lideranças informais: reconhecer influência real sem criar governo paralelo.'
    ] },
    { tipo: 'texto', titulo: '2. Conflito revela como a autoridade é usada', paragrafos: [
      'Conflito não prova automaticamente fracasso espiritual. Decisões importantes podem gerar divergências reais. O teste está em como o conflito é conduzido: fórum correto, escuta honesta, registros adequados e preservação da possibilidade de reconciliação.',
      'O pastor que nunca enfrenta nada pode estar evitando seu dever; o que transforma toda discordância em disputa por autoridade está defendendo a si mesmo. Colegialidade exige coragem e limites.'
    ] },
    { tipo: 'atividade', id: 'tp01-u13-a1', titulo: 'Atividade — divergência no conselho', enunciado: 'O pastor propõe uma mudança, mas a maioria dos presbíteros, após debate legítimo, decide contra sua proposta. Como ele deve agir?', itens: ['Considere a colegialidade.', 'Diferencie convicção doutrinária de preferência prudencial.', 'Preserve liderança sem propriedade do conselho.'], resposta: 'Se a decisão é legítima e não viola a Escritura ou a Constituição da Igreja, o pastor deve respeitá-la, colaborar na execução e manter liberdade para argumentar futuramente pelos meios apropriados. Liderar não significa possuir o conselho nem usar o púlpito para retaliar uma decisão colegiada.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Colegialidade é parte da ordem e da proteção eclesiástica.', 'Harmonia admite discordância responsável.', 'Conflitos devem ser conduzidos pelos foros e meios próprios, sem personalismo.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para governo conciliar e atribuições de oficiais.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Exposição clássica sobre ministros, presbíteros, diáconos e governo da Igreja.' }
  ],
  atualizadoEm: '2026-09-11',
};
