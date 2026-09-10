import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u5-mappiq-silabacao',
  disciplina: 'TE04',
  unidade: 5,
  titulo: 'Mappiq e silabação',
  objetivo: 'Reconhecer o mappiq, especialmente em ה final, e dividir palavras hebraicas em sílabas usando consoantes, vogais e shva como evidência de leitura.',
  topicosCobertos: ['Mappiq', 'Sílabas'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Um ponto em ה pode impedir que a letra desapareça da leitura',
      paragrafos: [
        'O mappiq é um ponto colocado no interior de uma letra, especialmente ה em posição final, para indicar que a consoante conserva valor consonantal e deve ser articulada. Isso é importante porque ה final frequentemente pode funcionar como mater lectionis e não representar uma consoante audível.',
        'O exemplo clássico para o iniciante aparece em formas com o sufixo pronominal feminino singular, como סוּסָהּ, “cavalo dela”. O הּ final não é simplesmente uma marca vocálica: o mappiq sinaliza que ה pertence à forma consonantal pronunciada segundo a tradição.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Não confunda três pontos internos',
      itens: [
        'Daguesh lene: associado tradicionalmente à pronúncia de letras begadkefat em determinados ambientes.',
        'Daguesh forte: indica duplicação/geminação consonantal histórica ou morfológica.',
        'Mappiq: indica que uma letra que poderia ser tomada como quiescente, sobretudo ה final, mantém valor consonantal.',
        'A aparência gráfica pode ser semelhante; a função é determinada pela letra e pelo contexto.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Silabação começa pela sequência de consoantes e vogais',
      paragrafos: [
        'Uma sílaba hebraica normalmente começa com consoante. Para fins introdutórios, podemos distinguir sílaba aberta, que termina em vogal, de sílaba fechada, que termina em consoante. Essa distinção ajuda a entender vocalização, acento e várias mudanças que serão encontradas posteriormente.',
        'O shva é decisivo: quando classificado como mudo, não inaugura uma nova sílaba pronunciada; quando é vocal, participa do início de uma sílaba. Como a classificação do shva depende do ambiente, silabação não deve ser feita contando apenas sinais sob as letras.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Procedimento inicial de silabação',
      itens: [
        'Leia a palavra inteira antes de tentar cortá-la mecanicamente.',
        'Localize cada núcleo vocálico pronunciado.',
        'Associe a consoante inicial ao núcleo vocálico correspondente.',
        'Determine se a sílaba termina na vogal (aberta) ou se uma consoante a fecha (fechada).',
        'Classifique o shva antes de decidir se ele representa ausência de vogal ou início de nova sílaba.',
        'Observe o acento, pois tonicidade e estrutura silábica interagem em várias regras posteriores.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u5-a1',
      titulo: 'Atividade — ponto e sílaba',
      enunciado: 'Compare uma palavra terminada em ה sem mappiq, usada como mater lectionis, com uma forma terminada em הּ. Depois explique como a presença de uma consoante final pronunciada pode alterar a estrutura da sílaba final.',
      itens: [
        'Identifique em qual forma ה conserva valor consonantal explícito.',
        'Defina sílaba aberta e fechada.',
        'Explique por que contar sinais vocálicos não basta para silabar.'
      ],
      resposta: 'Na forma com הּ, o mappiq indica valor consonantal de ה. Sílaba aberta termina em vogal; sílaba fechada termina em consoante. A silabação exige saber quais letras são consonantais ou quiescentes e como o shva funciona; por isso a simples contagem de pontos e traços vocálicos é insuficiente.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Mappiq, daguesh forte e daguesh lene podem parecer semelhantes, mas não têm a mesma função.',
        'Em ה final, o mappiq é especialmente importante para indicar valor consonantal.',
        'Sílabas podem ser inicialmente classificadas como abertas ou fechadas.',
        'Shva precisa ser interpretado antes de determinar a divisão silábica.',
        'Silabação é análise fonológica da forma, não simples contagem de sinais gráficos.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para mappiq, estrutura silábica, shva e relação entre vocalização e consoantes.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática auditiva e visual complementar para segmentar palavras hebraicas em contexto.' }
  ],
  atualizadoEm: '2026-09-10',
};
