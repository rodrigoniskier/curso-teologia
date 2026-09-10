import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u11-reforma-2',
  disciplina: 'TE12',
  unidade: 11,
  titulo: 'A Hermenêutica no Período da Reforma 2',
  objetivo: 'Examinar a contribuição de Calvino para intenção autoral, clareza expositiva, Escritura interpretando Escritura e analogia da fé, distinguindo esses princípios de harmonização forçada.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Calvino descreve o intérprete como servo do texto', paragrafos: [
      'Na dedicatória de seu comentário de Romanos, Calvino afirma que o dever do intérprete é revelar a mente do escritor e que se afastar dela é errar o alvo. A formulação condensa uma disciplina hermenêutica: o comentarista não deve usar a passagem como plataforma para exibir tudo o que sabe, mas explicar aquilo que o autor está fazendo naquele lugar.',
      'Isso não reduz a Escritura à intenção psicológica reconstruída de um autor isolado. Para Calvino, os autores bíblicos pertencem ao cânon inspirado e devem ser lidos dentro da unidade da revelação. A intenção humana e a autoria divina não competem; a leitura canônica precisa respeitar a forma concreta pela qual cada autor fala.'
    ]},
    { tipo: 'quadro', titulo: 'Quatro controles reformados', itens: [
      'Mente do escritor: a passagem possui direção comunicativa que limita o intérprete.',
      'Contexto: palavras são explicadas dentro do argumento e da situação literária.',
      'Escritura pela Escritura: textos claros ajudam a interpretar os obscuros.',
      'Analogia da fé: uma leitura não deve contradizer o ensino bíblico estabelecido com clareza.',
      'Clareza expositiva: o comentário serve ao leitor quando torna visível o raciocínio do texto.'
    ]},
    { tipo: 'texto', titulo: '2. Analogia da fé não deve silenciar uma passagem difícil', paragrafos: [
      'É possível usar um princípio correto de maneira errada. Se a analogia da fé se transforma em ordem para fazer toda passagem repetir uma formulação sistemática já pronta, ela deixa de ser controle e se torna filtro impermeável à correção exegética.',
      'Seu uso legítimo é comparativo e revisável. Quando uma leitura local parece colidir com ensino canônico claro, o intérprete volta à gramática, ao contexto e aos textos paralelos. A tensão pode revelar erro de leitura, nuance doutrinária ou necessidade de formular com mais precisão aquilo que se acreditava já resolvido.'
    ]},
    { tipo: 'atividade', id: 'te12-u11-a1', titulo: 'Atividade — usar a analogia da fé sem harmonização artificial', enunciado: 'Descreva como investigar uma passagem que parece entrar em tensão com uma doutrina bíblica bem estabelecida.', itens: ['Reexamine a passagem local.', 'Compare textos claros relevantes.', 'Indique como a doutrina também pode ser formulada com maior precisão.'], resposta: 'O intérprete deve primeiro conferir gramática, gênero, contexto e argumento da passagem difícil. Depois compara textos claros sobre o mesmo tema, sem apagar diferenças de ênfase. Se a tensão persistir, a formulação doutrinária deve ser refinada para acomodar todos os dados bíblicos, e não o contrário.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O intérprete serve à intenção comunicativa do texto.', 'Calvino combina exegese local e unidade canônica.', 'Escritura interpreta Escritura.', 'Analogia da fé é controle subordinado, não harmonização automática.', 'A boa exposição torna o argumento do texto verificável ao leitor.'] }
  ],
  fontes: [
    { id: 'calvino-romanos', autor: 'João Calvino', ano: '1540', titulo: 'Commentary on Romans', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/calcom38.toc.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte primária para a declaração programática de Calvino sobre o ofício do intérprete.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Capítulo I, §9, para a regra de interpretação da Escritura pela própria Escritura.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Comparação metodológica e histórica do princípio protestante.' }
  ],
  atualizadoEm: '2026-09-10',
};
