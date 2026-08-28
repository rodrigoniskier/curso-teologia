import type { ObraLivre } from './biblioteca';

/**
 * Fontes abertas acrescentadas nos ciclos de aprofundamento editorial.
 *
 * O arquivo começa pequeno de propósito: ele evita inflar os arquivos históricos
 * da biblioteca e oferece um ponto estável para novas fontes que sejam realmente
 * necessárias ao aprofundamento, sem transformar contagem de obras em meta.
 */
export const bibliotecaAprofundamento: ObraLivre[] = [
  {
    id: 'openstax-psychology-2e',
    autor: 'Rose M. Spielman; William J. Jenkins; Marilyn D. Lovett',
    ano: '2020',
    titulo: 'Psychology 2e',
    publicacao: 'OpenStax, Rice University',
    url: 'https://openstax.org/books/psychology-2e/pages/1-introduction',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TP04', 'CG07'],
    nota: 'Livro-texto universitário aberto usado para caracterizar, em fonte acadêmica acessível, as contribuições e os limites históricos de Freud, Skinner, Jung, Maslow e Rogers. Serve ao portal como referência descritiva, não como norma antropológica ou teológica.',
    base: 'edição autorizada',
  },
];
