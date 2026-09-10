import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u4-intertextualidade-rabinos',
  disciplina: 'TE12',
  unidade: 4,
  titulo: 'Os primeiros intérpretes do AT — intertextualidade e tradição judaica',
  objetivo: 'Reconhecer como autores do próprio Antigo Testamento reutilizam textos anteriores e situar, com cautela histórica, o desenvolvimento de práticas interpretativas judaicas que antecedem e preparam a tradição rabínica.',
  topicosCobertos: [
    'Os autores do AT: hermenêutica da intertextualidade',
    'Os Rabinos do Antigo Israel',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A Bíblia já contém interpretação da Bíblia',
      paragrafos: [
        'Livros posteriores do Antigo Testamento frequentemente retomam linguagem, instituições e acontecimentos de textos anteriores. Crônicas relê tradições de Samuel e Reis; profetas retomam criação, êxodo e aliança; salmos reinterpretam episódios históricos em forma litúrgica. Essa intertextualidade mostra que recordar um texto bíblico pode significar aplicá-lo a uma nova etapa da história da aliança sem apagar seu sentido anterior.',
        'A relação precisa ser demonstrada, não apenas intuída. Vocabulário compartilhado, sequência temática, citação, alusão, estrutura e continuidade histórica fornecem graus diferentes de evidência. O intérprete responsável distingue paralelos convincentes de semelhanças genéricas.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Como testar uma proposta intertextual',
      itens: [
        'Há vocabulário ou formulação suficientemente específica para sugerir dependência?',
        'O texto mais antigo estava disponível ao autor posterior e pertence ao mesmo horizonte canônico?',
        'A relação explica algo no contexto do texto posterior ou é apenas uma coincidência verbal?',
        'O autor posterior preserva, amplia, tipifica ou aplica o texto anterior?',
        'A leitura proposta pode ser mostrada ao leitor a partir de evidências textuais verificáveis?'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. “Rabinos do Antigo Israel” exige precisão cronológica',
      paragrafos: [
        'A ementa usa a expressão “Rabinos do Antigo Israel”, mas a instituição rabínica clássica pertence sobretudo ao judaísmo do Segundo Templo tardio e ao período posterior à destruição do templo em 70 d.C. No próprio Antigo Testamento encontramos sacerdotes, levitas, escribas e sábios que ensinam e aplicam a Torá; não é historicamente seguro chamá-los todos de rabinos no sentido posterior.',
        'A continuidade legítima está na prática de receber, explicar e aplicar textos autorizados. Esdras 7 e Neemias 8 oferecem exemplos importantes de leitura e exposição da Lei. Mais tarde, tradições judaicas desenvolveriam regras e formas de argumentação próprias. O curso deve observar essa continuidade sem apagar as diferenças entre escriba, sábio, mestre e rabino.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u4-a1',
      titulo: 'Atividade — provar uma relação intertextual',
      enunciado: 'Escolha uma passagem do AT que retome criação, êxodo, aliança ou monarquia. Liste três evidências de que a relação com o texto anterior é intencional e explique o que o autor posterior faz com essa tradição.',
      itens: ['Identifique o texto anterior.', 'Mostre evidência verbal ou temática específica.', 'Classifique a relação como retomada, aplicação, ampliação ou outra categoria justificável.'],
      resposta: 'Uma boa resposta não depende apenas de tema semelhante. Ela aponta correspondências concretas, situa os textos historicamente e mostra como o texto posterior reutiliza a tradição anterior dentro de seu próprio argumento. A interpretação posterior pode ampliar a aplicação sem cancelar o sentido anterior.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Autores bíblicos posteriores interpretam e reutilizam textos anteriores.',
        'Intertextualidade exige evidência, não associação livre.',
        'Aplicação posterior pode desenvolver sem negar o sentido anterior.',
        'Escribas e mestres do AT não devem ser anacronicamente identificados com o rabinato posterior.',
        'A história judaica da interpretação mostra continuidade e desenvolvimento.'
      ],
    },
  ],
  fontes: [
    { id: 'sefaria-tanakh', autor: 'Sefaria', ano: '—', titulo: 'Tanakh', publicacao: 'Sefaria', url: 'https://www.sefaria.org/texts/Tanakh', idioma: 'he', tipo: 'acervo', acesso: 'livre', nota: 'Texto e navegação do cânon judaico para comparação de passagens e relações intertextuais.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Discussão clássica sobre interpretação bíblica, paralelos, citações e desenvolvimento histórico do método.' }
  ],
  atualizadoEm: '2026-09-10',
};
