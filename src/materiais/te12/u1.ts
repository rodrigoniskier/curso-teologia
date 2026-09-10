import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u1-definicao-conceituacoes',
  disciplina: 'TE12',
  unidade: 1,
  titulo: 'Definição e conceituações',
  objetivo: 'Distinguir hermenêutica, exegese, interpretação e aplicação e formular uma definição reformada de interpretação bíblica que respeite texto, autor, gênero, contexto e unidade canônica.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Interpretar não é inventar um significado para o texto',
      paragrafos: [
        'Hermenêutica é a reflexão disciplinada sobre como textos são compreendidos e interpretados. Na teologia bíblica, ela pergunta quais princípios devem governar a leitura da Escritura. Exegese é a aplicação desses princípios a uma passagem concreta: delimitar o texto, observar gramática e gênero, reconstruir contexto, acompanhar argumento e justificar uma leitura.',
        'Interpretação e aplicação também precisam ser distinguidas. A interpretação busca responder o que o texto comunica; a aplicação pergunta como essa verdade alcança leitores e situações posteriores. Uma aplicação pode variar conforme pessoas e contextos, mas não é legítima se contradiz aquilo que o texto comunica.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Quatro termos que não devem ser confundidos',
      itens: [
        'Hermenêutica: princípios e teoria da interpretação.',
        'Exegese: investigação argumentada de um texto particular.',
        'Interpretação: compreensão do sentido comunicado pela passagem.',
        'Aplicação: implicações legítimas desse sentido para outros contextos.',
        'Eisegese: impor ao texto uma ideia que não foi demonstrada a partir dele.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O sentido literal não é literalismo',
      paragrafos: [
        'Na tradição reformada, buscar o sentido literal significa buscar o sentido que as palavras comunicam segundo seu uso, gênero e contexto. Uma metáfora é interpretada literalmente quando é reconhecida como metáfora; poesia não vira descrição física apenas porque a leitura deseja ser “literal”.',
        'A Confissão de Westminster acrescenta um controle decisivo: a Escritura é sua própria intérprete. Passagens obscuras devem ser lidas à luz das claras, e o sentido de um texto não pode ser multiplicado arbitrariamente em camadas independentes. Isso não elimina riqueza teológica ou tipologia; exige que elas sejam demonstradas pelo próprio cânon.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u1-a1',
      titulo: 'Atividade — separar sentido e aplicação',
      enunciado: 'Escolha uma ordem bíblica simples e escreva, em duas frases separadas, uma afirmação de interpretação e uma aplicação contemporânea. Em seguida explique por que a segunda depende da primeira.',
      itens: ['Identifique o que o texto comunica.', 'Formule uma aplicação coerente.', 'Mostre a ligação lógica entre ambas.'],
      resposta: 'Uma resposta adequada primeiro enuncia o conteúdo textual em seu contexto e só depois deriva uma implicação. A aplicação pode variar em forma, mas precisa preservar a norma ou verdade que foi demonstrada no texto, em vez de substituir o texto por uma preocupação contemporânea.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Hermenêutica formula princípios; exegese os aplica.',
        'Interpretação precede logicamente aplicação.',
        'Sentido literal inclui metáfora, poesia e outros gêneros como tais.',
        'O intérprete recebe o texto; não cria livremente seu significado.',
        'A Escritura interpreta a Escritura dentro da unidade do cânon.'
      ],
    },
  ],
  fontes: [
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics: A Treatise on the Interpretation of the Old and New Testaments', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Tratado clássico para definições, princípios e distinções metodológicas da hermenêutica.' },
    { id: 'calvino-romanos', autor: 'João Calvino', ano: '1540', titulo: 'Commentary on Romans', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/calcom38.toc.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'A epístola dedicatória sintetiza a preocupação reformada com a mente do autor e os limites do intérprete.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Capítulo I, especialmente §§7–10, para perspicuidade, interpretação da Escritura pela Escritura e autoridade final.' }
  ],
  atualizadoEm: '2026-09-10',
};
