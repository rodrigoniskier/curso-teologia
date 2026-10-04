import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u12-verbos-o-jussivo-e-o-coortativo",
  disciplina: "TE05",
  unidade: 12,
  titulo: "Verbos: o jussivo e o coortativo",
  objetivo: "Distinguir jussivo e coortativo no hebraico bíblico, reconhecendo como formas verbais com prefixos e vogais específicas assumem valor modal e oracional.",
  topicosCobertos: [
    "Definição e características do jussivo",
    "Definição e características do coortativo"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: o jussivo e o coortativo",
      paragrafos: [
        "O jussivo e o coortativo mostram que o sistema verbal hebraico não se organiza somente em passado ou futuro. Em certos contextos, a forma verbal expressa desejo, pedido, encorajamento ou impulso. Isso não quer dizer que o texto saia do campo da ação; significa que a forma verbal está assumindo valor modal dentro da oração."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Uma distinção útil",
      itens: [
        "Jussivo: ordem, desejo ou comando.",
        "Coor-tativo: impulso, desejo ou oração.",
        "Ambas as formas dependem da estrutura da oração e do contexto.",
        "A tradução deve captar a modalização sem perder a ação verbal."
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
      id: "te05-u12-a1",
      titulo: "Atividade — identificar o modo verbal",
      enunciado: "Explique quando uma forma verbal deve ser identificada como jussivo ou coortativo e por que o contexto determina o valor modal.",
      itens: [
        "Reconheça a forma verbal.",
        "Observe o contexto da oração.",
        "Diga qual valor modal é mais provável."
      ],
      resposta: "A forma verbal modal não é apenas uma variação de tempo; ela encarna uma oração com desejo, comando ou apelo. O contexto contextualiza a força do modal e permite a tradução adequada em português."
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
