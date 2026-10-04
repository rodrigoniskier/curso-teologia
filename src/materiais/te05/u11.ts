import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u11-verbos-o-imperfeito-qal-do-verbo-forte",
  disciplina: "TE05",
  unidade: 11,
  titulo: "Verbos: o imperfeito Qal do verbo forte",
  objetivo: "Formar e reconhecer o imperfeito Qal do verbo forte, entendendo prefixos, sufixos e os valores semânticos que a forma traz para a oração.",
  topicosCobertos: [
    "Formação do Qal imperfeito",
    "Prefixos e sufixos usados para formar o imperfeito Qal",
    "Os significados do imperfeito"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: o imperfeito Qal do verbo forte",
      paragrafos: [
        "O imperfeito hebraico não deve ser lido como um simples “futuro”. Sua formação envolve prefixos e, em alguns casos, sufixos, e o valor semântico pode incluir ação futura, contingência, desejo, ordem ou aspecto iterativo. O estudante precisa observar a forma e o contexto juntos."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Elementos da formação",
      itens: [
        "Prefixos marcam pessoa ou conceito de modo e voz.",
        "A raiz permanece como suporte do significado lexical.",
        "Sufixos podem aparecer em certas formas.",
        "O valor semântico depende da combinação de formação e contexto."
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
      id: "te05-u11-a1",
      titulo: "Atividade — distinguir valor do imperfeito",
      enunciado: "Explique por que o imperfeito hebraico não deve ser traduzido automaticamente como futuro e por que a formação da forma ajuda a distinguir o valor semântico.",
      itens: [
        "Identifique o prefixo.",
        "Relacione a forma à pessoa.",
        "Explique o valor semântico mais provável no contexto."
      ],
      resposta: "O imperfeito pode ser futuro, desejado ou contingente, dependendo do contexto e da oração. O prefixo e a estrutura da forma são indicadores essenciais, mas o significado completo exige leitura do conjunto da frase."
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
