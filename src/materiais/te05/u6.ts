import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u06-verbos-o-significado-do-perfeito",
  disciplina: "TE05",
  unidade: 6,
  titulo: "Verbos: o significado do perfeito",
  objetivo: "Entender a base semântica do perfeito hebraico, reconhecendo que sua tradução em português depende do contexto, do aspecto verbal e do tipo de ação narrada.",
  topicosCobertos: [
    "Maneira de traduzir o perfeito hebraico"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Verbos: o significado do perfeito",
      paragrafos: [
        "O termo “perfeito” na gramática hebraica não significa que a forma seja reduzida a uma noção apenas passada. No contexto bíblico, ela pode ser traduzida como pretérito, perfeito, presente com valor de resultado ou ação concluída. A questão não é cair em regra rígida, mas perceber que o chão semântico é ação concluída ou resultado estabilizado."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Tradução funcional",
      itens: [
        "Pretérito simples quando a ação é narrada como anterior.",
        "Perfeito quando o resultado permanece relevante para o momento da narrativa.",
        "Presente ou perfeito em contextos de resultado durável.",
        "A tradução deve seguir a lógica da frase, não a etiqueta isolada."
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
      id: "te05-u06-a1",
      titulo: "Atividade — decidir a melhor tradução",
      enunciado: "Dê duas traduções possíveis para uma forma do perfeito hebraico e indique qual seria preferível em um contexto narrativo.",
      itens: [
        "Identifique a forma verbal.",
        "Descreva o aspecto da ação.",
        "Explique a melhor tradução no contexto."
      ],
      resposta: "A forma verbal pode receber tradução em pretérito ou em perfeito, mas a melhor opção depende do contexto. Se a ação é narrada como concluída e seu resultado permanece eficaz, o perfeito em português pode ser mais fiel; se o foco está na sequência narrativa, o pretérito pode ser melhor."
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
