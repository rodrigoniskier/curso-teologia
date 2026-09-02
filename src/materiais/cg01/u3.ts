import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg01-u3-introducao-morfologia',
  disciplina: 'CG01',
  unidade: 3,
  titulo: 'Introdução à morfologia',
  objetivo: 'Analisar a estrutura interna das palavras, reconhecer morfemas e suas funções e distinguir os principais processos de formação vocabular do português.',
  topicosCobertos: [
    'Morfema e classificação',
    'Estrutura e formação de palavras',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O que a morfologia estuda',
      paragrafos: [
        'Morfologia é o campo da gramática que investiga a estrutura das palavras e os processos pelos quais elas variam ou dão origem a outras palavras. Enquanto a fonologia pergunta como os sons se organizam e a sintaxe pergunta como as palavras se combinam em estruturas maiores, a morfologia observa unidades internas como radical, afixos e marcas de flexão.',
        'A palavra não deve ser tratada como bloco indivisível. Em muitas formas, partes menores carregam informações reconhecíveis. Em “meninas”, por exemplo, é possível relacionar “menin-” a uma família lexical, “-a” à forma nominal feminina e “-s” ao plural. Em “reler”, o segmento “re-” acrescenta a ideia de repetição à base “ler”.',
        'A análise morfológica é uma ferramenta, não uma caça mecânica a pedaços de palavras. O valor de um segmento depende do sistema e da história da palavra. Nem toda sequência que se parece com um prefixo ou sufixo deve ser automaticamente separada. O procedimento mais seguro é comparar formas relacionadas e verificar se a segmentação tem função recorrente.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Morfema: unidade mínima com função linguística',
      paragrafos: [
        'Morfema é, em termos introdutórios, a menor unidade recorrente da estrutura da palavra que possui significado lexical ou função gramatical. Alguns morfemas concentram o núcleo semântico da família de palavras; outros modificam esse sentido; outros ainda exprimem gênero, número, pessoa, tempo ou modo.',
        'Compare “livro”, “livros”, “livrinho”, “livreiro” e “livraria”. A recorrência de “livr-” permite reconhecer um elemento lexical comum. Os segmentos acrescentados produzem informações diferentes: plural em “livros”, diminutivo em “livrinho” e novas palavras em “livreiro” e “livraria”.',
        'Morfema não é sinônimo de sílaba. A divisão silábica atende à organização sonora; a segmentação morfológica atende à estrutura e à função. “Infeliz” pode ser analisada como in- + feliz, embora a divisão silábica seja in-fe-liz. As duas análises respondem a perguntas diferentes.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Categorias básicas para esta unidade',
      itens: [
        'Radical: elemento que concentra o núcleo lexical compartilhado por palavras de uma mesma família.',
        'Afixo: morfema acrescentado à base; pode aparecer antes dela (prefixo) ou depois (sufixo).',
        'Desinência: elemento flexional que expressa informações gramaticais, como número ou características verbais.',
        'Vogal temática: elemento que, em certas análises, liga o radical a terminações flexionais e identifica classes ou conjugações.',
        'Tema: combinação do radical com a vogal temática, quando esta existe.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Comparação por família lexical',
      enunciado: 'pedra, pedreiro, pedrada, pedrinha, pedregulho',
      explicacao: 'A comparação evidencia o núcleo pedr-, associado ao campo lexical de “pedra”. Os demais segmentos ajudam a formar palavras novas ou nuances de sentido. A identificação do radical fica mais segura quando se observa uma série, não uma palavra isolada.',
    },
    {
      tipo: 'texto',
      titulo: '3. Morfemas lexicais e gramaticais',
      paragrafos: [
        'Uma classificação útil distingue morfemas lexicais, que carregam o núcleo de conteúdo da palavra, e morfemas gramaticais, que acrescentam funções estruturais. Em “cantávamos”, o radical cant- associa-se ao conteúdo lexical de cantar, enquanto os demais elementos situam a forma dentro do paradigma verbal.',
        'Outra distinção separa morfemas derivacionais e flexionais. A derivação cria uma nova unidade lexical ou modifica significativamente a categoria ou o sentido da base: feliz → infeliz; feliz → felicidade. A flexão produz formas gramaticais de uma mesma palavra dentro de um paradigma: aluno → alunos; estudo → estudamos.',
        'Essa diferença é conceitualmente mais importante que decorar listas. Derivação amplia o léxico; flexão ajusta a palavra às exigências gramaticais do enunciado. Há áreas de fronteira discutidas pela linguística, por isso o estudante deve aprender o princípio e saber que diferentes gramáticas podem analisar alguns casos de modo diverso.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'cg01-u3-a1',
      titulo: 'Atividade 1 — localizar funções morfológicas',
      enunciado: 'Analise “infelizmente”, “meninas” e “cantávamos”. Identifique, na medida do possível, o radical e os elementos que acrescentam negação, derivação ou flexão.',
      resposta: 'Em “infelizmente”, feliz constitui a base lexical, in- acrescenta negação e -mente forma advérbio a partir da base adjetival. Em “meninas”, menin- é o radical, -a participa da forma nominal feminina e -s marca plural. Em “cantávamos”, cant- é o radical verbal e a terminação reúne informações de tempo/modo e pessoa/número. Gramáticas podem apresentar segmentações mais técnicas da forma verbal; nesta etapa, o objetivo é distinguir núcleo lexical, derivação e flexão.',
    },
    {
      tipo: 'texto',
      titulo: '4. Estrutura das palavras',
      paragrafos: [
        'A estrutura morfológica pode ser visualizada como uma base à qual se associam elementos. Em palavras simples, a segmentação pode ser mínima; em palavras derivadas, prefixos e sufixos podem ser reconhecidos; em formas flexionadas, terminações gramaticais aparecem conforme gênero, número ou paradigma verbal.',
        'Nem toda palavra possui todos os elementos possíveis. Há palavras sem afixos, palavras com mais de um afixo e palavras cuja história tornou opaca a segmentação para o falante contemporâneo. A análise sincrônica descreve o sistema tal como funciona em uma etapa da língua; a etimologia investiga a história. Misturar os dois planos pode produzir falsas segmentações.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Sincronia antes da etimologia',
      enunciado: 'Uma sequência gráfica pode lembrar um prefixo conhecido sem funcionar como prefixo para o falante atual.',
      explicacao: 'A presença das letras iniciais não é suficiente para segmentar uma palavra. Para reconhecer um prefixo produtivo, procuramos relação funcional com uma base existente e com outras formações semelhantes. A análise morfológica contemporânea deve privilegiar relações reconhecíveis no sistema atual; a origem histórica é outra investigação.',
    },
    {
      tipo: 'texto',
      titulo: '5. Formação de palavras: derivação',
      paragrafos: [
        'Derivação é a formação de uma palavra a partir de uma base já existente. Na derivação prefixal, acrescenta-se um prefixo: fazer → refazer. Na sufixal, acrescenta-se um sufixo: feliz → felicidade. Uma palavra pode receber ambos em etapas sucessivas.',
        'Na derivação parassintética, prefixo e sufixo participam conjuntamente da formação de uma nova palavra de modo que a forma correspondente sem um deles não funciona como etapa independente no mesmo processo. Exemplos tradicionais incluem “entristecer” ou “amanhecer”, cuja análise exige verificar a existência e o funcionamento das formas intermediárias.',
        'Na derivação regressiva, uma forma menor relaciona-se a uma base maior, frequentemente na formação de substantivos associados a verbos, como “ataque” em relação a “atacar” em certas análises. Na derivação imprópria ou conversão, uma forma passa a desempenhar outra classe sem alteração formal evidente: “o jantar”, em que uma forma verbal é usada como substantivo.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '6. Formação de palavras: composição',
      paragrafos: [
        'Composição reúne duas ou mais bases ou radicais para formar uma unidade lexical. Em classificações tradicionais, fala-se em justaposição quando os elementos preservam maior integridade formal, como “guarda-chuva” ou “passatempo”, e em aglutinação quando há alteração na forma de um ou mais elementos, como “planalto” e “aguardente”.',
        'A grafia com ou sem hífen não deve ser usada sozinha para decidir a estrutura morfológica. Regras ortográficas mudam e obedecem a convenções próprias. A análise deve observar a relação entre as bases, o significado da unidade formada e os padrões produtivos da língua.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Mapa dos processos principais',
      itens: [
        'Derivação prefixal: prefixo + base — refazer, infeliz.',
        'Derivação sufixal: base + sufixo — felizmente, livraria.',
        'Derivação parassintética: prefixo e sufixo participam conjuntamente — entristecer.',
        'Derivação regressiva: redução formal associada à criação de nova unidade lexical — atacar → ataque, conforme análise tradicional.',
        'Derivação imprópria/conversão: mudança de classe sem alteração formal — jantar → o jantar.',
        'Composição por justaposição: bases combinadas com preservação formal perceptível — passatempo.',
        'Composição por aglutinação: combinação com alteração formal — planalto.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'cg01-u3-a2',
      titulo: 'Atividade 2 — classificar formação vocabular',
      enunciado: 'Classifique o processo predominante em “refazer”, “felicidade”, “passatempo”, “planalto” e “o olhar” na frase “Seu olhar mudou”. Justifique cada classificação.',
      resposta: '“Refazer”: derivação prefixal, com re- + fazer. “Felicidade”: derivação sufixal a partir de feliz. “Passatempo”: composição por justaposição em análise tradicional. “Planalto”: composição por aglutinação, historicamente associada a plano + alto com alteração formal. “O olhar”: conversão/derivação imprópria, pois a forma usada como verbo em outros contextos funciona aqui como substantivo sem mudança formal.',
    },
    {
      tipo: 'atividade',
      id: 'cg01-u3-a3',
      titulo: 'Atividade 3 — criar uma família morfológica',
      enunciado: 'Escolha uma base comum — por exemplo, “terra”, “livro”, “claro” ou “justo” — e construa uma família com pelo menos cinco palavras. Depois indique quais elementos se repetem e quais processos de formação aparecem.',
      resposta: 'Uma resposta possível para “livro”: livro, livrinho, livreiro, livraria, livresco. O radical livr- é recorrente, e diferentes sufixos criam palavras ou nuances novas. O objetivo é perceber a rede lexical e justificar a segmentação por comparação, não apenas sublinhar sequências gráficas.',
    },
    {
      tipo: 'texto',
      titulo: '7. Por que morfologia importa para leitura e escrita',
      paragrafos: [
        'Conhecer morfemas ajuda a inferir sentidos de palavras desconhecidas. Prefixos como re-, anti-, pré- ou des- e sufixos recorrentes fornecem pistas, embora o contexto continue indispensável. Em textos teológicos e acadêmicos, famílias como “justo, justiça, justificar, justificação” ou “santo, santidade, santificar, santificação” mostram como mudanças morfológicas organizam conceitos relacionados.',
        'A análise também melhora a escrita porque torna visíveis escolhas de classe e formação. Um texto pode alternar verbo e substantivo para construir abstrações: “Deus justifica” e “a justificação”. A relação morfológica não garante que duas formas tenham exatamente o mesmo uso semântico, mas ajuda a rastrear a arquitetura do vocabulário.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Morfologia investiga estrutura, flexão e formação de palavras.',
        'Morfema é uma unidade mínima recorrente com conteúdo lexical ou função gramatical.',
        'Radical, afixos, desinências e vogal temática desempenham funções diferentes.',
        'Derivação cria palavras a partir de bases; flexão produz formas gramaticais de uma mesma unidade lexical.',
        'Derivação e composição são os grandes processos de formação trabalhados nesta etapa.',
        'Segmentação morfológica deve ser justificada por relações funcionais, não apenas por semelhança gráfica.',
      ],
    },
  ],
  fontes: [
    {
      id: 'cecierj-portugues-iv-morfologia',
      autor: 'Ronaldo Amorim Lima et al.',
      ano: '2015',
      titulo: 'Português IV — Vol. 1',
      publicacao: 'Canal CECIERJ / Consórcio CEDERJ',
      url: 'https://canal.cecierj.edu.br/recurso/13787',
      idioma: 'pt',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Caderno universitário aberto utilizado como apoio à estrutura, flexão e formação das palavras.',
    },
    {
      id: 'uab-fonetica-fonologia-morfologia',
      autor: 'Maria Helena Mira Mateus',
      ano: '1991',
      titulo: 'Fonética, fonologia e morfologia do português: a linguagem e as línguas',
      publicacao: 'Universidade Aberta',
      url: 'https://repositorioaberto.uab.pt/handle/10400.2/7188',
      idioma: 'pt',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Material acadêmico aberto que situa a morfologia entre os níveis de análise da língua.',
    },
  ],
  atualizadoEm: '2026-09-02',
};
