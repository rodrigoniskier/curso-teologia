import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u10-epistemologia-3-conhecimento-deus',
  disciplina: 'CG08',
  unidade: 10,
  titulo: 'Epistemologia III',
  objetivo: 'Distinguir conhecimento natural, revelação especial e conhecimento salvador de Deus, relacionando evidência, supressão e autoridade na epistemologia reformada.',
  topicosCobertos: ['O conhecimento de Deus'],
  blocos: [
    { tipo: 'texto', titulo: '1. Conhecer Deus não é uma única relação epistêmica', paragrafos: ['A tradição reformada distingue o conhecimento de Deus disponível na criação e providência, o conhecimento verbalmente comunicado na revelação especial e o conhecimento salvador no qual a verdade revelada é recebida pela fé. Esses níveis se relacionam, mas não são intercambiáveis.', 'Romanos 1 e a Confissão de Westminster sustentam que a criação manifesta Deus de modo real, tornando o ser humano inescusável, mas insuficiente para comunicar o evangelho salvador. A Escritura não corrige uma ausência total de conhecimento; ela confronta também a supressão e distorção do conhecimento recebido.'] },
    { tipo: 'quadro', titulo: 'Três distinções úteis', itens: ['Conhecimento natural: Deus conhecido por criação, providência e constituição da criatura racional.', 'Revelação especial: Palavra de Deus comunicando verbalmente sua vontade e o caminho da redenção.', 'Conhecimento salvador: recepção pela fé do Cristo anunciado, pela obra do Espírito.', 'Conhecimento proposicional verdadeiro e comunhão salvadora não são idênticos.'] },
    { tipo: 'texto', titulo: '2. O problema epistêmico do pecado não é falta de inteligência', paragrafos: ['Calvino combina duas afirmações: há consciência de Deus e há uma “fábrica de ídolos”. A dificuldade humana é moral e cognitiva ao mesmo tempo. Evidência pode ser conhecida e reorganizada para evitar suas implicações.', 'Isso impede tanto o otimismo racionalista — como se informação suficiente produzisse automaticamente fé — quanto o desprezo da razão. Evangelização e apologética argumentam, mas dependem da ação do Espírito para uma resposta salvadora.'] },
    { tipo: 'atividade', id: 'cg08-u10-a1', titulo: 'Atividade — distinguir tipos de conhecimento', enunciado: 'Uma pessoa reconhece que o universo depende de um Criador, mas nunca ouviu o evangelho. O que a tradição reformada afirmaria que ela conhece e o que não se pode inferir daí?', itens: ['Diferencie conhecimento natural e especial.', 'Não confunda inescusabilidade com salvação.', 'Indique o papel da proclamação do evangelho.'], resposta: 'Ela pode possuir conhecimento verdadeiro de Deus por criação e providência e, portanto, não é descrita como absolutamente ignorante de Deus. Contudo, disso não se segue conhecimento salvador de Cristo. A revelação especial e a proclamação do evangelho comunicam o caminho da redenção que a natureza, sozinha, não fornece.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Conhecimento natural de Deus é real, porém não salvador por si.', 'Revelação especial comunica o evangelho e a vontade de Deus.', 'Conhecimento salvador envolve verdade e obra do Espírito.', 'O pecado afeta interpretação e resposta às evidências.'] }
  ],
  fontes: [
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte reformada primária para conhecimento natural de Deus e efeitos do pecado.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Capítulo I distingue luz da natureza e revelação especial.' }
  ],
  atualizadoEm: '2026-09-10',
};
