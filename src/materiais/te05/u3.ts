import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u03-sufixos",
  disciplina: "TE05",
  unidade: 3,
  titulo: "Sufixos",
  objetivo: "Reconhecer os sufixos pronominais em substantivos e partículas, compreendendo sua função de posse, referência e encaixe morfológico dentro do sistema hebraico.",
  topicosCobertos: [
    "Sufixos pronominais em preposições e partículas",
    "Sufixos pronominais em substantivos"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Sufixos",
      paragrafos: [
        "O hebraico pode anexar pronome ao fim de substantivos, preposições e partículas. Esse mecanismo é essencial porque a ideia de posse e referencialidade entra diretamente na gramática da palavra. Ao invés de dizer “meu pai” em duas palavras, a língua pode formar uma unidade morfológica."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Sufixos básicos",
      itens: [
        "Em substantivos, o sufixo pode indicar posse ou referência direta.",
        "Em preposições e partículas, o mesmo princípio aparece em forma de anexação pronominal.",
        "A forma exata do sufixo varia conforme gênero, número e categoria da palavra.",
        "A análise deve começar pela categoria gramatical antes da tradução."
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
      id: "te05-u03-a1",
      titulo: "Atividade — distinguir posse e referência",
      enunciado: "Analise um substantivo com sufixo pronominal e explique se a forma expressa posse, referência ou combinação de ambas.",
      itens: [
        "Identifique a base nominal.",
        "Reconheça o sufixo pronominal.",
        "Explique a relação sintática e a tradução."
      ],
      resposta: "A base nominal continua sendo o núcleo, e o sufixo pronominal acrescenta a pessoa e o número do possuidor ou do referente. Esse encaixe pode ser traduzido como possessivo em português, mas a análise morfológica depende primeiro de reconhecer a palavra-base e a terminação pronominal."
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
