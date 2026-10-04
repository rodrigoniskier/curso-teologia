import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u10-verbos-os-demais-troncos",
  disciplina: "TE05",
  unidade: 10,
  titulo: "Verbos: os demais troncos",
  objetivo: "Conhecer os demais troncos verbais hebraicos e perceber como a classificação dos verbos fracos se organiza em uma lógica morfológica e semântica.",
  topicosCobertos: [
    "Os sete troncos verbais",
    "Classificação dos demais troncos"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: os demais troncos",
      paragrafos: [
        "Depois de aprender o Qal do verbo forte, o estudante não abandona o sistema, mas amplia sua visão. A classe dos demais troncos não é um conjunto caótico de exceções: ela organiza-se em torno de padrões de alteração consonantal e vocálica. A classificação dos troncos ajuda a prever o comportamento do verbo."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Classificação dos troncos",
      itens: [
        "Os troncos verbais são agrupados segundo o padrão de formação.",
        "A classificação não destrói a raiz; ela revela as formas em que a raiz atua.",
        "O Qal é a base de comparação.",
        "A leitura correta exige ver o padrão, não memorizar apenas uma lista de formas."
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
      id: "te05-u10-a1",
      titulo: "Atividade — classificar o tronco",
      enunciado: "Dê um exemplo de verbo em tronco diferente do Qal e explique como a classificação do tronco afeta a leitura da forma verbal.",
      itens: [
        "Identifique a raiz.",
        "Determine o tronco.",
        "Explique a implicação da classificação para a leitura."
      ],
      resposta: "Cada tronco altera a forma verbal, mas não o radical principal. Classificar o tronco ajuda a prever as mudanças morfológicas e a interpretar a ação com mais fidelidade ao padrão verbal hebraico."
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
