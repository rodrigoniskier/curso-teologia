import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u1-inferencia-contextual',
  disciplina: 'CG05',
  unidade: 1,
  titulo: 'Vocabulário por inferência contextual',
  objetivo: 'Desenvolver a capacidade de inferir o sentido provável de palavras desconhecidas em textos teológicos ingleses usando contexto verbal e aspectos gráficos antes de recorrer ao dicionário.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Ler antes de traduzir', paragrafos: [
      'Leitura instrumental não exige conhecer previamente cada palavra. O leitor começa pelo que já reconhece: título, subtítulo, palavras repetidas, contraste, enumeração, exemplos e relações lógicas. A hipótese de sentido vem antes da consulta lexical.',
      'Em textos teológicos, termos como covenant, grace, church, justification e worship reaparecem em famílias semânticas. Mesmo quando uma palavra é desconhecida, a sentença costuma oferecer pistas por definição, contraste ou consequência.'
    ] },
    { tipo: 'quadro', titulo: 'Pistas úteis', itens: ['Palavras repetidas indicam o tópico central.', 'Dois-pontos, travessões, parênteses e exemplos frequentemente explicam um termo.', 'But, however e unlike sinalizam contraste.', 'Therefore, thus e so sinalizam consequência.', 'Títulos e subtítulos limitam as hipóteses de sentido.'] },
    { tipo: 'atividade', id: 'cg05-u1-a1', titulo: 'Atividade — inferir antes do dicionário', enunciado: 'Leia: “The covenant is not a private arrangement. It establishes a public bond between God and his people.” Sem dicionário, proponha o sentido provável de bond e explique quais pistas sustentam sua hipótese.', itens: ['Observe a oposição entre private e public.', 'Considere a relação entre God e his people.', 'Só depois compare com um dicionário.'], resposta: 'Bond provavelmente significa vínculo ou ligação. A sentença descreve uma relação pública estabelecida entre duas partes; esse contexto exclui sentidos como “título financeiro” e favorece “vínculo”.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Inferência contextual reduz dependência do dicionário.', 'Pistas gráficas e conectores ajudam a restringir sentidos.', 'A hipótese deve ser testada contra a frase inteira e o tema do texto.'] }
  ],
  fontes: [
    { id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'OER de apoio à leitura gramatical do inglês.' }
  ],
  atualizadoEm: '2026-09-11',
};