import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u6-autores-nt-interpretam-at',
  disciplina: 'TE12',
  unidade: 6,
  titulo: 'Os primeiros intérpretes do AT — os autores do NT',
  objetivo: 'Explicar como os autores do Novo Testamento interpretam o Antigo Testamento por citação, alusão, tipologia e cumprimento, distinguindo leitura apostólica autorizada de alegorização arbitrária.',
  topicosCobertos: ['Os autores do NT'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O Novo Testamento lê o Antigo como história que chega a Cristo',
      paragrafos: [
        'Jesus e os autores apostólicos citam e aludem constantemente ao Antigo Testamento. Eles leem a história de Israel como uma história real e, ao mesmo tempo, como parte de um movimento redentivo que alcança seu clímax em Cristo. Promessa e cumprimento, padrão e antítipo, reino, êxodo, templo, sacerdócio e aliança são conectados dentro dessa unidade histórica.',
        'Essa leitura não significa que o sentido anterior dos textos fosse falso ou descartável. A tipologia pressupõe correspondência histórica: pessoas, instituições e acontecimentos anteriores possuem realidade própria e, pela providência divina, também participam de padrões que recebem desenvolvimento posterior no cânon.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Formas de uso do AT no NT',
      itens: [
        'Citação explícita: o autor reproduz e identifica um texto anterior.',
        'Alusão: linguagem ou estrutura evoca um texto sem fórmula de citação.',
        'Promessa e cumprimento: uma expectativa textual encontra realização posterior.',
        'Tipologia: correspondência histórico-redentiva entre eventos, pessoas ou instituições.',
        'Aplicação analógica: um princípio ou padrão anterior é aplicado a uma nova situação sem afirmar necessariamente cumprimento profético direto.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O exemplo apostólico não autoriza associações sem controle',
      paragrafos: [
        'Uma objeção comum afirma que, se Paulo ou Mateus usam um texto de maneira inesperada, leitores atuais também podem atribuir sentidos ocultos livremente. A conclusão ignora duas diferenças. Primeiro, os autores do NT escrevem com autoridade apostólica e inspirada. Segundo, suas leituras apresentam conexões canônicas demonstráveis dentro da história da redenção.',
        'O intérprete atual aprende com o padrão apostólico — unidade do cânon, centralidade de Cristo, desenvolvimento da promessa — mas não reivindica a mesma autoridade para criar novos sentidos inspirados. Tipologia responsável precisa de correspondência textual e histórico-redentiva, não apenas criatividade devocional.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u6-a1',
      titulo: 'Atividade — tipologia ou associação livre?',
      enunciado: 'Avalie uma proposta tipológica verificando se ela possui base histórica e canônica suficiente para ir além de mera semelhança imaginada.',
      itens: ['Identifique o elemento histórico anterior.', 'Mostre desenvolvimento posterior no cânon.', 'Explique por que a conexão não depende apenas de semelhança verbal.'],
      resposta: 'Uma tipologia plausível preserva a realidade histórica do tipo, mostra repetição ou desenvolvimento dentro da história bíblica e encontra confirmação canônica ou forte correspondência estrutural. Uma semelhança isolada sem esse percurso não basta para estabelecer sentido tipológico.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'O NT interpreta continuamente o AT.',
        'Cristo é o clímax da história redentiva, não pretexto para apagar contextos anteriores.',
        'Tipologia depende de correspondência histórica e canônica.',
        'Apostolicidade e inspiração distinguem o uso neotestamentário de aplicações posteriores.',
        'O intérprete aprende o padrão apostólico sem reivindicar liberdade para novos sentidos inspirados.'
      ],
    },
  ],
  fontes: [
    { id: 'sblgnt', autor: 'Michael W. Holmes (ed.)', ano: '2010', titulo: 'The Greek New Testament: SBL Edition', publicacao: 'Society of Biblical Literature', url: 'https://www.sblgnt.com/', idioma: 'grc', tipo: 'documento', acesso: 'livre', nota: 'Texto grego aberto para observar diretamente citações e alusões ao Antigo Testamento.' },
    { id: 'sefaria-tanakh', autor: 'Sefaria', ano: '—', titulo: 'Tanakh', publicacao: 'Sefaria', url: 'https://www.sefaria.org/texts/Tanakh', idioma: 'he', tipo: 'acervo', acesso: 'livre', nota: 'Texto do cânon judaico para cotejo das passagens utilizadas no Novo Testamento.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Discussão clássica de citações, tipos, profecia e relações entre os Testamentos.' }
  ],
  atualizadoEm: '2026-09-10',
};
