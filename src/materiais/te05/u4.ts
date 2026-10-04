import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u04-verbos-caracter-sticas-gerais",
  disciplina: "TE05",
  unidade: 4,
  titulo: "Verbos: características gerais",
  objetivo: "Compreender a natureza do sistema verbal hebraico, distinguindo as formas básicas, os verbos fortes e fracos e a lógica de análise do radical diante de formas flexionadas.",
  topicosCobertos: [
    "Formas dos verbos",
    "Verbos fortes e verbos fracos"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: características gerais",
      paragrafos: [
        "O verbo hebraico organiza-se em um sistema de formas que expressam pessoa, número, gênero, aspecto e modo. Antes de aprender o imperfeito ou o perfeito, o estudante precisa perceber que cada forma verbal nasce de uma raiz e de um padrão de inflexão. A própria noção de “verbo forte” e “verbo fraco” se entende dentro desse sistema."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Categorias importantes",
      itens: [
        "Raiz verbal: conjunto de consoantes do significado básico.",
        "Forma verbal: realização da raiz em pessoa, número, gênero e aspecto.",
        "Verbo forte: radical com consoantes estáveis.",
        "Verbo fraco: radical com alterações internas ou omissões sistemáticas."
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
      id: "te05-u04-a1",
      titulo: "Atividade — separar raiz e flexão",
      enunciado: "Escolha uma forma verbal simples e explique o que faz parte da raiz e o que pertence à flexão. Diga também por que isso ajuda a distinguir verbo forte de verbo fraco.",
      itens: [
        "Identifique a raiz.",
        "Diferencie prefixo ou sufixo de radical.",
        "Classifique a forma como forte ou fraca."
      ],
      resposta: "A raiz corresponde às consoantes que sustentam o significado básico e a flexão organiza essa base em pessoa, número e modo. Se a raiz mantém consoantes estáveis, a forma tende a ser forte; quando a consoante se enfraquece, cai ou se alterna, o verbo entra na categoria dos fracos."
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
