import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u05-verbos-o-perfeito-qal-do-verbo-forte",
  disciplina: "TE05",
  unidade: 5,
  titulo: "Verbos: o perfeito Qal do verbo forte",
  objetivo: "Formar e reconhecer as flexões do perfeito Qal do verbo forte, entendendo suas categorias, sua estrutura e o início da leitura verbal em contextos literários.",
  topicosCobertos: [
    "Categorias de flexão dos verbos",
    "Formação da flexão do perfeito Qal"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: o perfeito Qal do verbo forte",
      paragrafos: [
        "No Qal, o perfeito do verbo forte se forma a partir de um radical consonantal e recebe terminação por pessoa, gênero e número. O estudante não começa pela tradução, mas pela forma: percebe-se a raiz, identifica-se a desinência e só então o valor verbal. Esse procedimento permite distinguir verbo forte de padrões similares."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Estrutura do perfeito Qal",
      itens: [
        "A raiz fornece o núcleo semântico.",
        "As terminações indicam pessoa, número e gênero.",
        "A estrutura do radical permanece visível quando não há alteração consonantal.",
        "A leitura depende de reconhecer a base verbal e a terminação final."
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
      id: "te05-u05-a1",
      titulo: "Atividade — formar e classificar",
      enunciado: "Identifique a raiz e a terminação em uma forma verbal do perfeito Qal do verbo forte e explique como a categoria gramatical é reconhecida a partir da desinência.",
      itens: [
        "Separe a raiz da terminação.",
        "Indique pessoa, número e gênero.",
        "Explique como a forma revela a categoria."
      ],
      resposta: "A raiz sustenta o significado básico do verbo, enquanto a terminação indica a pessoa, o número e o gênero. Ao identificar a desinência, o estudante classifica a forma verbal em sua categoria gramatical."
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
