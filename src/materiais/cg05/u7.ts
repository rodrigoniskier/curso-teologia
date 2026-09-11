import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u7-coesao-referencia', disciplina: 'CG05', unidade: 7,
  titulo: 'Coesão gramatical e textual: referência pronominal e adverbial',
  objetivo: 'Rastrear referentes de pronomes e advérbios em textos ingleses para preservar a continuidade argumentativa e evitar traduções com referentes incorretos.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Ler o encadeamento do texto', paragrafos: [
      'Pronomes como it, they, this, these, which e who dependem de um referente recuperável. O leitor não deve traduzir o pronome isoladamente; precisa perguntar a que palavra, ideia ou oração ele retoma.',
      'Advérbios e expressões como there, then, therefore, however e thus também conectam segmentos do discurso. Alguns apontam para lugar ou tempo; outros organizam a lógica do argumento.'
    ] },
    { tipo: 'atividade', id: 'cg05-u7-a1', titulo: 'Atividade — rastrear referentes', enunciado: 'Leia: “The church received the letter and read it publicly. This encouraged the believers, who then shared its message with others.” Identifique os referentes de it, This, who e its.', itens: ['Procure o antecedente nominal mais plausível.', 'Verifique se o referente produz coerência semântica.'], resposta: 'it = the letter; This = o ato/situação de a igreja receber e ler a carta publicamente; who = the believers; its = the letter. A tradução precisa conservar essas relações.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Pronomes dependem de antecedentes ou ideias recuperáveis.', 'Referência pode retomar uma oração inteira, não apenas um substantivo.', 'Advérbios conectivos ajudam a reconstruir a lógica do parágrafo.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência aberta para pronomes, advérbios e estrutura oracional.' }],
  atualizadoEm: '2026-09-11',
};