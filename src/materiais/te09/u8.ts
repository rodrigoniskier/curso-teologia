import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u8-futuro-passivo',
  disciplina: 'TE09',
  unidade: 8,
  titulo: 'Verbos 9',
  objetivo: 'Reconhecer e formar o futuro do indicativo passivo, relacionando-o ao tema passivo do aoristo e às terminações primárias médio/passivas.',
  topicosCobertos: ['Futuro do indicativo passivo'],
  blocos: [
    { tipo: 'texto', titulo: '1. O futuro passivo reaproveita o tema passivo', paragrafos: [
      'O futuro passivo regular é construído a partir do tema passivo associado ao aoristo, acrescido do marcador de futuro σ e de terminações do paradigma médio/passivo. λύω fornece a forma λυθήσομαι.',
      'A forma mostra várias camadas: λυ- é o radical lexical, -θη- identifica o tema passivo regular, -σ- pertence à formação futura e -ομαι integra a terminação pessoal.'
    ] },
    { tipo: 'quadro', titulo: 'Futuro passivo de λύω', itens: [
      'λυθήσομαι — 1ª singular.',
      'λυθήσῃ — 2ª singular.',
      'λυθήσεται — 3ª singular.',
      'λυθησόμεθα — 1ª plural.',
      'λυθήσεσθε — 2ª plural.',
      'λυθήσονται — 3ª plural.'
    ] },
    { tipo: 'texto', titulo: '2. A parte principal passiva precisa ser aprendida', paragrafos: [
      'Nem todo verbo forma o passivo com transparência a partir do presente. Alterações de radical fazem com que o estudante precise reconhecer partes principais e consultar o léxico quando necessário.',
      'A meta desta unidade não é adivinhar formas desconhecidas, mas desmontar corretamente as formas encontradas e relacioná-las ao sistema verbal já aprendido.'
    ] },
    { tipo: 'atividade', id: 'te09-u8-a1', titulo: 'Atividade — ler em camadas', enunciado: 'Analise λυθήσεται, λυθήσονται e λυθησόμεθα.', itens: ['Identifique pessoa e número.', 'Marque o tema passivo.', 'Marque o sinal de futuro.', 'Compare com ἐλύθην.'], resposta: 'λυθήσεται = 3ª singular; λυθήσονται = 3ª plural; λυθησόμεθα = 1ª plural do futuro passivo. Todas reutilizam o tema passivo λυθη- e acrescentam σ + terminações primárias médio/passivas. ἐλύθην é aoristo passivo indicativo.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para futuro passivo e partes principais.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para futuro passivo.' }
  ],
  atualizadoEm: '2026-09-24',
};