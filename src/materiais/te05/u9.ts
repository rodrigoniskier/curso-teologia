import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u09-os-numerais",
  disciplina: "TE05",
  unidade: 9,
  titulo: "Os numerais",
  objetivo: "Entender os numerais cardinais e ordinais no hebraico bíblico, reconhecendo como o sistema numérico se integra à leitura e ao contexto textual.",
  topicosCobertos: [
    "Números cardinais e ordinais"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Os numerais",
      paragrafos: [
        "Os numerais hebraicos, tanto cardinais quanto ordinais, não pertencem apenas ao campo da matemática; eles também aparecem em textos narrativos, legais e poéticos. O estudante precisa reconhecer que um número pode indicar quantidade, ordem ou valor simbólico dentro do texto."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Categorias numéricas",
      itens: [
        "Cardinais: indicam quantidade.",
        "Ordinais: indicam ordem.",
        "A forma numérica pode estar ligada a um substantivo.",
        "A tradução não deve ignorar a relação entre número e substantivo."
      ]
    },
    {
      tipo: "texto",
      titulo: "2. A formação e o contexto",
      paragrafos: [
        "A forma verbal não deve ser lida em isolamento. O estudante precisa conectar a raiz, a flexão e o contexto da oração para perceber o valor gramatical e semântico adequado. O ensino de hebraico 2 começa pela forma e avança para a frase, porque a sintaxe é a melhor garantia de fidelidade exegética."
      ]
    },
    {
      tipo: "atividade",
      id: "te05-u09-a1",
      titulo: "Atividade — reconhecer número e ordem",
      enunciado: "Identifique se um numeral hebraico indica quantidade ou ordem e explique como a estrutura da frase ajuda a decidir a categoria.",
      itens: [
        "Separe o numeral de seu substantivo.",
        "Classifique como cardinal ou ordinal.",
        "Explique a diferença funcional no contexto."
      ],
      resposta: "Cardinais expressam quantidade e ordinais expressam posição em uma sequência. A identificação correta depende de observar tanto a forma do numeral como a relação sintática com o substantivo e o contexto da frase."
    },
    {
      tipo: "quadro",
      titulo: "Síntese",
      itens: [
        "O aluno reconhece a estrutura morfológica antes de traduzir.",
        "As flexões e os padrões verbais se explicam pela combinação de forma e contexto.",
        "O estudo avança do elemento nominal e verbal para a oração inteira.",
        "Hebraico 2 prepara a leitura de textos mais extensos e menos formulares do Antigo Testamento."
      ]
    }
  ],
  fontes: [
    {
      id: "gesenius-hebrew-grammar-1910",
      autor: "Wilhelm Gesenius; E. Kautzsch; A. E. Cowley",
      ano: "1910",
      titulo: "Gesenius' Hebrew Grammar — 2nd English edition",
      publicacao: "Internet Archive — Clarendon Press",
      url: "https://archive.org/details/geseniushebrewgr00geseuoft",
      idioma: "en",
      tipo: "livro",
      acesso: "livre",
      nota: "Referência clássica para morfologia e sintaxe do hebraico bíblico."
    },
    {
      id: "aleph-with-beth",
      autor: "Bethany Case; Andrew Case",
      ano: "—",
      titulo: "Aleph with Beth — Free Hebrew. Forever.",
      publicacao: "Betheden Ministries / Free Hebrew. Forever.",
      url: "https://freehebrew.online/",
      idioma: "he",
      tipo: "curso",
      acesso: "livre",
      nota: "Prática visual e contextual de leitura do hebraico bíblico."
    }
  ],
  atualizadoEm: "2026-10-04"
}
