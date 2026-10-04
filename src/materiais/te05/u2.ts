import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u02-substantivos-rela-o-de-construto",
  disciplina: "TE05",
  unidade: 2,
  titulo: "Substantivos: relação de construto",
  objetivo: "Distinguir o estado absoluto do estado construto e entender como a relação entre dois substantivos funciona na frase hebraica, com atenção à forma e à função sintática.",
  topicosCobertos: [
    "Definição de estado absoluto e estado construto",
    "Função do estado construto",
    "Formas do construto"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Substantivos: relação de construto",
      paragrafos: [
        "Em hebraico, a relação entre dois termos nominais é frequentemente expressa por um padrão chamado estado construto. A expressão “casa de Davi” não é apenas uma tradução opcional; ela traduz uma construção sintática que o hebraico marca internamente. O estudante precisa aprender a distinguir entre um substantivo independente e um substantivo que funciona como parte de uma composição nominal."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Estado absoluto e construto",
      itens: [
        "Estado absoluto: o substantivo aparece como termo independente.",
        "Estado construto: o substantivo entra em relação sintática com outro nome.",
        "O construto não é apenas um genitivo; ele reflete a organização da frase hebraica.",
        "A forma pode envolver redução de vogal ou adaptação da base nominal."
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
      id: "te05-u02-a1",
      titulo: "Atividade — capturar a relação",
      enunciado: "Explique por que a expressão hebraica com estado construto pode ser traduzida em português com “de” ou por um sintagma possessivo, mesmo sem preposição explícita.",
      itens: [
        "Identifique o termo que funciona como núcleo.",
        "Observe a relação entre os substantivos.",
        "Explique a tradução em português."
      ],
      resposta: "O construto indica que um substantivo depende sintaticamente de outro. A relação pode ser de posse, pertinência ou composição. Em português, a relação costuma aparecer como “de” ou como genitivo possessivo, ainda que o hebraico a expresse por construção nominal compacta."
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
