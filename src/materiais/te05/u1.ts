import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: "te05-u01-substantivos-segolados",
  disciplina: "TE05",
  unidade: 1,
  titulo: "Substantivos: segolados",
  objetivo: "Identificar a categoria dos substantivos segolados, reconhecendo suas formas básicas, a alternância vocálica e o papel do estado absoluto na leitura e na tradução do hebraico bíblico.",
  topicosCobertos: [
    "Definição",
    "Categorias de substantivos segolados"
  ],
  blocos: [
    {
      tipo: "texto",
      titulo: "1. Substantivos: segolados",
      paragrafos: [
        "No hebraico bíblico, muitos substantivos não aparecem em uma base estável e igual em todas as formas. Os substantivos segolados recebem esse nome porque em algumas formas a vogal se abre em segol diante de terminações ou de certos padrões morfológicos. Isso não é adição arbitrária; é um sinal da estrutura interna da palavra."
      ]
    },
    {
      tipo: "quadro",
      titulo: "Padrões frequentes",
      itens: [
        "A base nominal costuma aparecer sem terminações e com vogal breve estável.",
        "Em formas flexionadas, a vogal pode alternar em segol para ajustar a sílaba.",
        "A categoria inclui substantivos com raízes consoantais simples e frequentes na leitura bíblica.",
        "O aluno precisa distinguir radical, vogal temática e forma flexionada antes de traduzir."
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
      id: "te05-u01-a1",
      titulo: "Atividade — reconhecer o padrão",
      enunciado: "Compare a forma básica de um substantivo segolado com a forma que recebe terminação. Explique por que a alternância de vogal não deve ser tratada como um detalhe casual.",
      itens: [
        "Nomeie a base do substantivo.",
        "Identifique a vogal que muda.",
        "Explique a função da alternância na forma flexionada."
      ],
      resposta: "A forma base e a forma flexionada compartilham o mesmo radical, mas a estrutura silábica exige mudança de vogal. O segol não é marca arbitrária; é sinal de adaptação da palavra à terminação ou à posição em que ela aparece. Portanto, a análise morfológica deve preceder a tradução."
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
