import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u2-cognatos', disciplina: 'CG05', unidade: 2,
  titulo: 'Vocabulário por cognatos',
  objetivo: 'Usar cognatos com critério para ampliar rapidamente a compreensão de textos teológicos em inglês, distinguindo cognatos transparentes de falsos cognatos.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Cognatos como hipótese, não atalho absoluto', paragrafos: [
      'Português e inglês compartilham grande vocabulário de origem latina e grega, especialmente em textos acadêmicos: theology, doctrine, justification, sanctification, creation, providence e resurrection são exemplos de alta transparência.',
      'A semelhança gráfica produz uma hipótese inicial, mas o contexto decide. Actually não significa “atualmente”; eventually não significa “eventualmente” em todos os contextos; pretend não é “pretender”. Leitura instrumental exige verificar quando a forma semelhante engana.'
    ] },
    { tipo: 'quadro', titulo: 'Estratégia de três passos', itens: ['Marque palavras visualmente próximas do português.', 'Teste se o sentido provável funciona na frase.', 'Confirme apenas os casos decisivos ou suspeitos.'] },
    { tipo: 'atividade', id: 'cg05-u2-a1', titulo: 'Atividade — cognato ou armadilha?', enunciado: 'Leia: “The doctrine of providence affirms that God actively sustains creation.” Identifique os cognatos e traduza a frase sem consultar cada palavra.', itens: ['Localize doctrine, providence, affirms, actively e creation.', 'Observe o verbo sustains pelo contexto.'], resposta: 'Tradução adequada: “A doutrina da providência afirma que Deus sustenta ativamente a criação.” Os cognatos fornecem grande parte da estrutura semântica; sustains pode ser inferido como “sustenta”.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Cognatos aceleram a leitura acadêmica.', 'Semelhança formal não garante equivalência semântica.', 'O contexto continua sendo o árbitro principal.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio aberto de gramática e reconhecimento de categorias do inglês.' }],
  atualizadoEm: '2026-09-11',
};