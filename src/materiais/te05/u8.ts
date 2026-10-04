import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u08-ora-es-interrogativas",
  disciplina: "TE05",
  unidade: 8,
  titulo: "Orações interrogativas",
  objetivo: "Reconhecer a pontuação e os pronomes interrogativos do hebraico, compreendendo como a pergunta é organizada na oração e como ela influenciará a leitura e a tradução.",
  topicosCobertos: [
    "Regras para a pontuação do he interrogativo",
    "Pronomes interrogativos"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Orações interrogativas",
      paragrafos: [
        "A oração interrogativa hebraica exige cuidado com a pontuação e com a partícula interrogativa. O he interrogativo, por exemplo, pode funcionar como marca da pergunta, mas sua presença deve ser entendida em conjunto com a oração e sua estrutura. Sem isso, o aluno corre o risco de tratar a pergunta como mero detalhe estilístico."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Elementos básicos",
      itens: [
        "He interrogativo: marcação frequente de pergunta direta.",
        "Pronomes interrogativos: “quem?”, “que?”, “qual?”.",
        "A pontuação e a entonação ajudam a distinguir pergunta de frase afirmativa.",
        "As partículas devem ser lidas junto com a estrutura da oração."
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
      id: "te05-u08-a1",
      titulo: "Atividade — distinguir a pergunta",
      enunciado: "Explique como identificar uma oração interrogativa em hebraico e como a partícula interrogativa e o pronome interrogativo podem funcionar em conjunto.",
      itens: [
        "Reconheça a partícula.",
        "Observe o pronome interrogativo.",
        "Explique a função da pergunta na oração."
      ],
      resposta: "A pergunta é reconhecida pela estrutura da oração e pela marca interrogativa. A partícula he e os pronomes interrogativos mostram que o discurso busca informação ou produz ênfase. A análise deve combinar forma e contexto."
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
