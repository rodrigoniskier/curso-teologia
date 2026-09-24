import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u5-imperfeito-indicativo',
  disciplina: 'TE09',
  unidade: 5,
  titulo: 'Verbos 5',
  objetivo: 'Formar e reconhecer o imperfeito do indicativo ativo e médio/passivo, identificando aumento, tema do presente e terminações secundárias.',
  topicosCobertos: ['Imperfeito do indicativo ativo', 'Imperfeito do indicativo médio/passivo'],
  blocos: [
    { tipo: 'texto', titulo: '1. O imperfeito combina aumento e aspecto imperfectivo', paragrafos: [
      'O imperfeito pertence ao sistema do presente e normalmente apresenta a ação em desenvolvimento, repetição, duração ou estado no passado, conforme o verbo e o contexto. Não é necessário forçar sempre a tradução “estava fazendo”; o valor discursivo é mais amplo.',
      'Na forma regular, acrescenta-se aumento ao início do tema verbal e usam-se terminações secundárias. λύω fornece o modelo ἔλυον, ἔλυες, ἔλυε(ν), ἐλύομεν, ἐλύετε, ἔλυον.'
    ] },
    { tipo: 'quadro', titulo: 'Imperfeito médio/passivo de λύω', itens: [
      '1ª singular: ἐλυόμην.',
      '2ª singular: ἐλύου.',
      '3ª singular: ἐλύετο.',
      '1ª plural: ἐλυόμεθα.',
      '2ª plural: ἐλύεσθε.',
      '3ª plural: ἐλύοντο.'
    ] },
    { tipo: 'texto', titulo: '2. Aumento e terminação cumprem funções diferentes', paragrafos: [
      'O aumento ajuda a reconhecer o indicativo de tempo passado; as terminações indicam pessoa, número e voz. A forma ἔλυον é morfologicamente ambígua entre primeira pessoa singular e terceira plural; o sujeito expresso ou o contexto resolve a análise.',
      'No médio/passivo do imperfeito, a morfologia também não decide sozinha o valor semântico de voz. Primeiro registra-se o paradigma; depois o verbo e o contexto orientam a tradução.'
    ] },
    { tipo: 'atividade', id: 'te09-u5-a1', titulo: 'Atividade — desmontar a forma', enunciado: 'Analise ἐλύομεν, ἔλυον, ἐλύετο e ἐλύοντο.', itens: ['Separe aumento, tema e terminação.', 'Identifique pessoa/número quando possível.', 'Indique onde há ambiguidade.', 'Proponha uma tradução contextual sem tratar o imperfeito como fórmula única.'], resposta: 'ἐλύομεν = 1ª plural ativa; ἔλυον = 1ª singular ou 3ª plural ativa; ἐλύετο = 3ª singular médio/passiva; ἐλύοντο = 3ª plural médio/passiva. O contexto determina o valor discursivo e, nas formas médio/passivas, o sentido de voz.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para o imperfeito e leitura cumulativa.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Paradigmas clássicos do imperfeito.' }
  ],
  atualizadoEm: '2026-09-24',
};