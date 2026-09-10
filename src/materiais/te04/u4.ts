import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u4-acentos-meteg-letras-fracas',
  disciplina: 'TE04',
  unidade: 4,
  titulo: 'Acentos, meteg e letras fracas',
  objetivo: 'Explicar a finalidade dos acentos massoréticos, reconhecer a função auxiliar do meteg e compreender o que a tradição gramatical chama de letras fracas sem atribuir a esses sinais uma antiguidade maior que sua transmissão manuscrita permite.',
  topicosCobertos: ['Finalidade dos acentos', 'Definição de letra fraca'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Os acentos fazem mais que indicar onde levantar a voz',
      paragrafos: [
        'Os sinais de acentuação do sistema tiberiense, chamados frequentemente teʿamim, preservam uma tradição de recitação e também ajudam a organizar a estrutura do versículo. Há sinais conjuntivos, que aproximam elementos, e disjuntivos, que marcam graus de separação. Assim, eles podem oferecer pistas importantes para a segmentação sintática e para a leitura pública.',
        'A maior parte das palavras recebe um acento principal, e sua posição ajuda a localizar a sílaba tônica segundo a tradição massorética. Contudo, o estudante deve distinguir a forma consonantal mais antiga da camada de vocalização e acentuação transmitida pelos massoretas. O acento é evidência textual relevante; não é um sinal gráfico escrito pelos autores bíblicos em sua forma tiberiense.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três funções práticas dos acentos',
      itens: [
        'Recitação: orientam a tradição melódica/cantilar do texto.',
        'Tonicidade: normalmente indicam a sílaba que recebe o acento principal da palavra.',
        'Sintaxe: a hierarquia de sinais conjuntivos e disjuntivos ajuda a perceber como palavras e grupos se relacionam dentro do versículo.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Meteg: um pequeno traço com função de apoio à leitura',
      paragrafos: [
        'O meteg é um pequeno traço vertical colocado junto a uma vogal em determinados contextos. Em gramáticas introdutórias ele costuma ser associado a acento secundário, preservação de qualidade vocálica ou esclarecimento da leitura. Sua distribuição é mais complexa do que uma regra única de “segunda tonicidade”.',
        'Para Grego 1 bastava reconhecer acentos gráficos; em Hebraico 1 o estudante precisa também aprender a não confundir meteg com sinais de cantilação visualmente próximos. O critério é observar posição, contexto e a edição usada.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. “Letra fraca” descreve comportamento, não inferioridade',
      paragrafos: [
        'Na terminologia tradicional, uma letra é chamada fraca quando seu comportamento fonológico ou morfológico tende a provocar alterações, assimilação, perda ou mudanças de vocalização em certos ambientes. A extensão exata da categoria varia entre gramáticas. א, ה, ו e י recebem atenção especial porque podem enfraquecer ou funcionar como matres lectionis; as guturais, estudadas na próxima unidade, também impõem restrições próprias.',
        'O termo não significa que a letra seja opcional nem que possa ser apagada livremente. Ele é uma etiqueta para prever irregularidades. O estudante deve sempre partir da forma efetivamente escrita e só então explicar por que determinada raiz ou palavra se comporta de modo diferente de um paradigma regular.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Disciplina de leitura',
      itens: [
        'Localize o acento principal antes de pronunciar uma palavra longa.',
        'Use os acentos como pista de agrupamento, não como substituto da análise sintática.',
        'Reconheça meteg pela posição e não pela semelhança visual isolada.',
        'Ao ouvir “letra fraca”, pergunte qual comportamento concreto está sendo descrito.',
        'Nunca reconstrua a pronúncia do período bíblico apenas copiando a pronúncia moderna de uma tradição de leitura.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u4-a1',
      titulo: 'Atividade — camada textual e função',
      enunciado: 'Explique a diferença entre dizer “os acentos fazem parte da tradição textual massorética” e dizer “os autores bíblicos escreveram os mesmos sinais de acentuação que vemos numa BHS moderna”. Em seguida, defina letra fraca sem usar a ideia de “letra menos importante”.',
      itens: [
        'Identifique o problema histórico da segunda afirmação.',
        'Liste duas funções dos acentos.',
        'Dê uma definição funcional de letra fraca.'
      ],
      resposta: 'A primeira formulação reconhece a importância dos sinais como registro massorético da leitura; a segunda projeta anacronicamente a notação tiberiense sobre os autores antigos. Os acentos orientam recitação/tonicidade e também segmentação sintática. Letra fraca é uma consoante cujo comportamento fonológico ou morfológico sofre alterações previsíveis em certos contextos; não é uma letra “menos válida”.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Acentos tiberienses servem à recitação, tonicidade e estrutura do versículo.',
        'Meteg é sinal auxiliar de leitura cuja função depende do contexto.',
        'Letras fracas são classificadas pelo comportamento fonológico/morfológico.',
        'א, ה, ו e י exigem atenção especial e podem participar de grafias vocálicas.',
        'A camada massorética deve ser valorizada sem ser confundida com a forma gráfica original dos textos.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para acentuação, meteg e classificação de consoantes fracas.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Exposição complementar à leitura vocalizada e à tonicidade em contexto.' }
  ],
  atualizadoEm: '2026-09-10',
};
