import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u15-verbos-sufixos-pronominais",
  disciplina: "TE05",
  unidade: 15,
  titulo: "Verbos: sufixos pronominais",
  objetivo: "Reconhecer os sufixos pronominais em formas do perfeito e do imperfeito, compreendendo como as desinências pronominais se conectam à estrutura verbal hebraica.",
  topicosCobertos: [
    "Sufixos pronominais em formas do perfeito",
    "Sufixos pronominais em formas do imperfeito"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: sufixos pronominais",
      paragrafos: [
        "O hebraico pode anexar sufixos pronominais às formas verbais, especialmente ao perfeito e ao imperfeito. Isso aparece como extensão da flexão verbal e não como categoria totalmente separada. O aluno precisa reconhecer a raiz, o padrão da forma e o sufixo para distinguir pronome, sujeito e valor da oração."
      ]
    },
    {
      tipo: "quadro",
      titulo: "A base da análise",
      itens: [
        "O pronome pode aparecer anexado à forma verbal.",
        "A raiz permanece como centro do significado básico.",
        "O sufixo indica pessoa, gênero e número.",
        "A tradução em português geralmente aparece como pronome oblíquo ou possessivo."
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
      id: "te05-u15-a1",
      titulo: "Atividade — reconhecer a junção verbal",
      enunciado: "Explique como identificar um sufixo pronominal em uma forma verbal e por que ele não deve ser lido apenas como “mais um pronome” sem relação à forma verbal.",
      itens: [
        "Separe a raiz da desinência.",
        "Classifique a forma como perfeito ou imperfeito.",
        "Explique a função do pronome na oração."
      ],
      resposta: "O sufixo verbal é parte da flexão e expressa pessoa, gênero e número. Ao reconhecê-lo como desinência da forma verbal, o estudante evita interpretar o pronome de maneira isolada, sem relação com o verbo e com a oração."
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
