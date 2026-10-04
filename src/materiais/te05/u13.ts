import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u13-verbos-imperfeito-dos-demais-troncos",
  disciplina: "TE05",
  unidade: 13,
  titulo: "Verbos: imperfeito dos demais troncos",
  objetivo: "Apresentar o imperfeito dos demais troncos e o uso do vav consecutivo e do he-locale, mostrando como a forma verbal se desenvolve na oração hebraica.",
  topicosCobertos: [
    "Formação do imperfeito dos demais troncos",
    "Imperfeito com vav consecutivo",
    "He-locale (indicador de direção)"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: imperfeito dos demais troncos",
      paragrafos: [
        "Quando o imperfeito aparece em troncos diferentes do Qal, o estudante precisa observar o padrão de formação e a conexão sintática com a oração. A presença do vav consecutivo é especialmente importante, porque ele pode transformar a linha do discurso, mudando o valor da ação. O he-locale aparece em frases de direção sem ser apenas semelhança de preposição."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Pontos centrais",
      itens: [
        "Imperfeito dos demais troncos exige atenção à raiz e ao padrão do tronco.",
        "Vav consecutivo pode ligar duas orações e alterar a orientação temporal.",
        "He-locale indica direção e aparece em contextos específicos.",
        "A leitura não pode se basear apenas em um prefixo isolado."
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
      id: "te05-u13-a1",
      titulo: "Atividade — reconhecer o movimento da oração",
      enunciado: "Explique como o vav consecutivo e o he-locale alteram a leitura de uma oração verbal e por que a estrutura da frase precisa ser observada antes da tradução.",
      itens: [
        "Reconheça a partícula.",
        "Classifique o imperfeito.",
        "Explique a direção ou a sequência da ação."
      ],
      resposta: "O vav consecutivo modifica a sequência narrativa e o he-locale acrescenta a ideia de direção. Ao reconhecer essas partículas, o estudante evita separar forma verbal de sintaxe e obtém leitura mais fiel da ação na oração."
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
