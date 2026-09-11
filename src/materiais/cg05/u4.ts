import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u4-sinonimia-antonimia', disciplina: 'CG05', unidade: 4,
  titulo: 'Sinonímia e antonímia no texto',
  objetivo: 'Reconhecer relações de proximidade e oposição lexical como pistas de compreensão sem presumir que sinônimos sejam perfeitamente intercambiáveis.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Relações lexicais ajudam a ler', paragrafos: [
      'Autores explicam conceitos por aproximação e contraste. Expressões como in other words, similarly, by contrast, unlike e rather than ajudam a perceber se duas ideias se aproximam ou se opõem.',
      'Sinônimos raramente são idênticos em todos os contextos. Church, congregation e assembly podem se aproximar, mas não são automaticamente equivalentes em toda discussão histórica ou eclesiológica. A leitura precisa preservar a nuance.'
    ] },
    { tipo: 'atividade', id: 'cg05-u4-a1', titulo: 'Atividade — mapear relações', enunciado: 'Leia: “Christian hope is not optimism. Optimism expects favorable circumstances; hope trusts God even in suffering.” Identifique a oposição principal e explique como ela ajuda a inferir o sentido de hope.', itens: ['Observe not e o ponto e vírgula.', 'Compare os verbos expects e trusts.'], resposta: 'O texto contrasta hope com optimism. Hope é apresentado como confiança em Deus que permanece no sofrimento, enquanto optimism depende da expectativa de circunstâncias favoráveis.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Contrastes revelam limites conceituais.', 'Paráfrases ajudam a confirmar hipóteses de sentido.', 'Sinônimos próximos ainda podem carregar nuances importantes.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática aberta usada como apoio à leitura das relações entre palavras e estruturas.' }],
  atualizadoEm: '2026-09-11',
};