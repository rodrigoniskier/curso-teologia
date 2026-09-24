import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u7-ordem-palavras-oracoes-verbais',
  disciplina: 'TE05',
  unidade: 7,
  titulo: 'Verbos: ordem das palavras em orações verbais',
  objetivo: 'Analisar a ordem dos constituintes em orações verbais hebraicas e usar o léxico de modo responsável na identificação e tradução dos verbos.',
  topicosCobertos: ['Significados diferentes de acordo com a ordem das palavras em orações verbais', 'Uso do dicionário na definição e tradução dos verbos'],
  blocos: [
    { tipo: 'texto', titulo: '1. A ordem das palavras também organiza informação', paragrafos: [
      'O hebraico bíblico admite diferentes ordens de verbo, sujeito e complementos. Uma ordem verbo-inicial é frequente em certos contextos narrativos, mas outras ordens podem colocar sujeito, objeto ou outro constituinte em posição de destaque, contraste, tópico ou continuidade discursiva.',
      'Não é seguro afirmar que uma ordem produz sempre um único “significado”. O efeito depende do gênero, da construção e do contexto. A tarefa inicial é observar o que foi antecipado ou posposto e comparar com o padrão do trecho.'
    ] },
    { tipo: 'quadro', titulo: 'Fluxo de análise da oração verbal', itens: [
      'Identifique a forma verbal: raiz provável, tronco, conjugação, pessoa/gênero/número.',
      'Localize sujeito e complementos por concordância, partículas e função sintática.',
      'Observe qual constituinte aparece antes do verbo e se há contraste ou retomada discursiva.',
      'Compare a ordem com as orações vizinhas antes de atribuir ênfase.',
      'Traduza para português natural sem apagar uma ênfase demonstrável.'
    ] },
    { tipo: 'texto', titulo: '2. Como usar o dicionário com verbos flexionados', paragrafos: [
      'O léxico normalmente organiza o verbo por uma forma lexical associada à raiz, não por cada forma flexionada do texto. O estudante precisa remover mentalmente prefixos e sufixos, reconhecer possíveis alterações de verbos fracos e localizar o lema adequado.',
      'Depois de encontrar o lema, não se escolhe automaticamente o primeiro glossário. O sentido deve ser compatível com o tronco, a construção sintática e o contexto. Dicionário é ferramenta de decisão informada, não substituto da análise.'
    ] },
    { tipo: 'atividade', id: 'te05-u7-a1', titulo: 'Atividade — forma, ordem e léxico', enunciado: 'Receba uma oração verbal curta e compare uma versão verbo-inicial com outra em que o sujeito foi colocado antes do verbo.', itens: ['Analise o verbo antes de abrir o léxico.', 'Identifique a mudança de ordem.', 'Proponha uma hipótese de destaque sem tratá-la como regra absoluta.', 'Confirme no léxico um sentido compatível com a construção.'], resposta: 'A ordem diferente pode sinalizar tópico, contraste ou outra organização informacional, mas o efeito deve ser demonstrado no contexto. O léxico confirma possibilidades sem substituir morfologia e sintaxe.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};