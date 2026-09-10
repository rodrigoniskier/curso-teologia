import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u3-sinais',
  disciplina: 'TE04',
  unidade: 3,
  titulo: 'Sinais: maqqef, objeto direto, daguesh forte e shva mudo',
  objetivo: 'Reconhecer quatro sinais e construções gráficas frequentes do hebraico bíblico e explicar sua função na leitura e na análise morfológica.',
  topicosCobertos: ['Maqqef', 'Sinal de objeto direto', 'Daguesh forte', 'Shva mudo'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Nem todo pequeno sinal faz a mesma coisa',
      paragrafos: [
        'A página hebraica combina letras, sinais vocálicos, acentos e outros sinais gráficos. O estudante precisa perguntar que tipo de informação cada marca oferece. Maqqef conecta palavras; אֵת pode marcar um objeto direto definido; daguesh forte indica duplicação histórica ou fortalecimento consonantal em determinados contextos; shva pode representar uma vogal muito reduzida ou ausência de vogal.',
        'Misturar essas funções produz erros diferentes: segmentar mal uma unidade acentual, traduzir אֵת como se fosse sempre uma palavra lexical, deixar de perceber uma consoante geminada ou criar uma vogal onde a tradição de leitura não a possui.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Quatro elementos da unidade',
      itens: [
        'Maqqef ־: pequeno traço horizontal que liga graficamente duas ou mais palavras, fazendo-as funcionar estreitamente como uma unidade acentual.',
        'אֵת: partícula que frequentemente introduz objeto direto definido. Em tal função, normalmente não recebe tradução lexical independente em português.',
        'Daguesh forte: ponto no interior de uma consoante que, quando é forte, sinaliza duplicação/geminação histórica da consoante. Não deve ser confundido automaticamente com o daguesh lene das letras begadkefat.',
        'Shva ְ: dois pontos verticais sob uma consoante. Nesta unidade, o foco é o shva mudo, que fecha a sílaba anterior ou indica ausência de vogal pronunciada naquele ponto.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. אֵת é sinal sintático, não uma palavra portuguesa escondida',
      paragrafos: [
        'Em construções como בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם, a partícula אֵת ajuda a marcar הַשָּׁמַיִם como objeto direto definido. Traduzir cada elemento por uma palavra portuguesa separada produziria uma equivalência artificial. A contribuição de אֵת é gramatical.',
        'A forma אֵת também pode ocorrer com outras funções lexicais em hebraico. Por isso a análise depende da construção. O estudante não deve aprender “אֵת = objeto direto” como se a sequência gráfica tivesse uma única função em qualquer contexto.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Daguesh forte: perguntas práticas',
      itens: [
        'O ponto está numa consoante capaz de receber daguesh forte? Guturais, estudadas depois, normalmente não o recebem.',
        'Há uma razão morfológica ou fonológica para duplicação, como assimilação de uma consoante ou presença do artigo definido?',
        'Se a letra pertence a begadkefat, o ponto representa fortalecimento/geminação ou apenas a distinção tradicional de pronúncia conhecida como daguesh lene?',
        'A análise deve combinar posição, morfologia e paradigma; a aparência do ponto isoladamente não basta.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u3-a1',
      titulo: 'Atividade — função antes da tradução',
      enunciado: 'Explique o papel de cada elemento destacado: (a) o traço em כָּל־הָאָרֶץ; (b) אֵת em uma oração com objeto definido; (c) o ponto consonantal em uma forma com daguesh forte; (d) um shva classificado como mudo.',
      itens: [
        'Diga se o elemento é principalmente gráfico, sintático, consonantal ou vocálico.',
        'Indique qual erro de leitura surgiria se ele fosse ignorado.'
      ],
      resposta: '(a) O maqqef conecta palavras numa unidade gráfica/acentual. (b) אֵת, quando marcador de objeto direto definido, cumpre função sintática e normalmente não recebe palavra própria na tradução. (c) O daguesh forte indica duplicação/fortalecimento da consoante e pode revelar processos morfológicos. (d) O shva mudo indica ausência de vogal pronunciada naquele ponto e participa da divisão silábica.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Maqqef liga palavras e afeta sua unidade acentual.',
        'אֵת frequentemente marca objeto direto definido sem equivalente lexical independente.',
        'Daguesh forte deve ser distinguido de outros pontos graficamente semelhantes.',
        'Shva mudo não cria uma vogal plena e será importante para silabação.',
        'A interpretação de sinais depende da posição e da estrutura, não de uma tabela de equivalências isoladas.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para maqqef, daguesh, shva e partículas gramaticais.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática aberta de reconhecimento desses elementos em formas e frases hebraicas.' }
  ],
  atualizadoEm: '2026-09-10',
};
