import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u5-segmentacao-morfossintatica', disciplina: 'CG05', unidade: 5,
  titulo: 'Segmentação das palavras na sentença',
  objetivo: 'Segmentar sentenças inglesas em grupos funcionais, reconhecendo classes de palavras e relações sintáticas para reduzir traduções palavra por palavra.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Ler em blocos, não em palavras isoladas', paragrafos: [
      'Uma sentença inglesa pode ser dividida em sujeito, núcleo verbal, complementos e modificadores. Em “The early church confessed Christ publicly”, The early church forma o grupo nominal sujeito; confessed é o núcleo verbal; Christ é objeto; publicly modifica o verbo.',
      'A segmentação evita erros típicos de tradução literal. Artigos, auxiliares, preposições e modificadores precisam ser entendidos pela função que exercem na estrutura.'
    ] },
    { tipo: 'quadro', titulo: 'Perguntas de segmentação', itens: ['Qual é o verbo principal?', 'Quem ou o que executa/recebe a ação?', 'Quais palavras pertencem ao mesmo grupo nominal?', 'Quais preposições iniciam complementos?', 'Quais termos apenas modificam outro elemento?'] },
    { tipo: 'atividade', id: 'cg05-u5-a1', titulo: 'Atividade — marcar blocos', enunciado: 'Segmente: “The faithful preacher explains the biblical text to the congregation with patience.”', itens: ['Marque sujeito.', 'Marque verbo e objeto.', 'Separe os grupos preposicionados.'], resposta: '[The faithful preacher] [explains] [the biblical text] [to the congregation] [with patience]. A tradução por blocos é mais segura: “O pregador fiel explica o texto bíblico à congregação com paciência.”' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O verbo principal organiza a sentença.', 'Grupos nominais devem ser lidos como unidades.', 'Segmentar antes de traduzir reduz falsos encaixes sintáticos.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência aberta para partes do discurso, frases, orações e funções sintáticas.' }],
  atualizadoEm: '2026-09-11',
};