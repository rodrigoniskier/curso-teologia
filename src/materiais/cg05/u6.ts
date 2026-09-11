import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u6-premodificadores-grupos-nominais', disciplina: 'CG05', unidade: 6,
  titulo: 'Pré-modificadores em grupos nominais',
  objetivo: 'Reconhecer a ordem interna de grupos nominais ingleses com múltiplos pré-modificadores para identificar corretamente o núcleo e reconstruir a ordem natural em português.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. O núcleo costuma vir por último', paragrafos: [
      'O inglês acadêmico compacta muita informação antes do substantivo principal. Em “New Testament textual criticism”, criticism é o núcleo; textual modifica criticism; New Testament especifica o campo. Traduzir na ordem linear produz frases artificiais.',
      'A estratégia é localizar o núcleo nominal e reconstruir os modificadores da direita para a esquerda, testando relações possíveis: “crítica textual do Novo Testamento”. O contexto resolve ambiguidades.'
    ] },
    { tipo: 'quadro', titulo: 'Procedimento', itens: ['Localize o último substantivo relevante: ele frequentemente é o núcleo.', 'Agrupe nomes próprios ou expressões fixas, como New Testament.', 'Reconstrua os modificadores em português sem preservar mecanicamente a ordem inglesa.', 'Teste a tradução contra o tema do parágrafo.'] },
    { tipo: 'atividade', id: 'cg05-u6-a1', titulo: 'Atividade — desmontar o grupo nominal', enunciado: 'Analise “early Christian worship practices” e “Reformation church history studies”. Identifique o núcleo e proponha traduções naturais.', itens: ['Comece pelo último substantivo.', 'Depois reencaixe os modificadores.'], resposta: 'Em “early Christian worship practices”, practices é o núcleo: “práticas de culto cristão primitivo”. Em “Reformation church history studies”, studies é o núcleo: “estudos de história da igreja na Reforma” é uma tradução natural possível.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Pré-modificadores acumulam informação antes do núcleo.', 'O português frequentemente exige preposições e inversão da ordem.', 'Identificar o núcleo vem antes de traduzir.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência aberta para estrutura de grupos nominais e modificadores.' }],
  atualizadoEm: '2026-09-11',
};