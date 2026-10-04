import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u07-verbos-ordem-das-palavras-em-ora-es-verbais",
  disciplina: "TE05",
  unidade: 7,
  titulo: "Verbos: ordem das palavras em orações verbais",
  objetivo: "Relacionar a ordem das palavras das orações verbais com seu valor semântico e compreender como a sintaxe hebraica pode afetar a tradução e a interpretação.",
  topicosCobertos: [
    "Significados diferentes de acordo com a ordem das palavras em orações verbais",
    "Uso do dicionário na definição e tradução dos verbos"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: ordem das palavras em orações verbais",
      paragrafos: [
        "Em hebraico, a ordem dos elementos da oração verbal pode alterar a ênfase e a percepção do sujeito e do objeto. A forma verbal e o seu lugar na oração não são indiferentes: o aluno precisa ver que a sintaxe ajuda a distinguir foco, tópico e ação. Isso explica por que duas orações com o mesmo verbo podem receber traduções distintas."
      ]
    },
    {
      tipo: "quadro",
      titulo: "O que a ordem revela",
      itens: [
        "A posição do sujeito e do objeto pode marcar ênfase ou contraste.",
        "O verbo nem sempre inicia a oração.",
        "A ordenação do discurso em hebraico exige atenção antes da tradução.",
        "O dicionário ajuda a identificar a raiz, mas a oração completa orienta a escolha final."
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
      id: "te05-u07-a1",
      titulo: "Atividade — comparar duas ordens",
      enunciado: "Compare duas orações verbais com a mesma raiz, mas com ordem dos termos distinta. Explique como a sintaxe pode mudar o destaque semântico.",
      itens: [
        "Identifique o verbo.",
        "Observe a ordem da oração.",
        "Explique o efeito do destaque semântico."
      ],
      resposta: "A mesma raiz pode aparecer com foco em sujeito, objeto ou ação, dependendo da ordem dos termos. O dicionário oferece a base semântica, mas o contexto revela o valor específico e a melhor tradução na oração concreta."
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
