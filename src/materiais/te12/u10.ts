import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u10-reforma-1',
  disciplina: 'TE12',
  unidade: 10,
  titulo: 'A Hermenêutica no Período da Reforma 1',
  objetivo: 'Explicar como a Reforma reordenou autoridade, sentido literal e uso das línguas originais, situando Lutero e o princípio sola Scriptura sem transformar a Reforma em rejeição de toda tradição.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A mudança principal foi de autoridade e controle', paragrafos: [
      'Os reformadores não foram os primeiros cristãos a estudar gramática, história ou línguas bíblicas. O que muda decisivamente é a ordem das autoridades: a Escritura passa a funcionar como norma suprema pela qual tradições, concílios e interpretações são avaliados. Sola Scriptura não significa “eu e minha Bíblia sem igreja”; significa que nenhuma autoridade eclesiástica possui jurisdição igual ou superior à Palavra escrita.',
      'O humanismo renascentista também contribuiu ao movimento ad fontes — retorno às fontes — fortalecendo o estudo de hebraico, grego, manuscritos e textos patrísticos. A reforma hermenêutica foi, portanto, simultaneamente teológica e filológica.'
    ]},
    { tipo: 'quadro', titulo: 'Ênfases associadas à Reforma', itens: [
      'Sola Scriptura: a Escritura é a norma final da fé e da interpretação.',
      'Sensus literalis: prioridade ao sentido histórico-literário em vez de sentidos paralelos autônomos.',
      'Línguas originais: hebraico e grego ganham renovada centralidade para exegese e tradução.',
      'Perspicuidade: o essencial da fé não fica reservado a uma elite interpretativa infalível.',
      'Tradição: útil como testemunha e interlocutora, mas subordinada e corrigível.'
    ]},
    { tipo: 'texto', titulo: '2. Lutero e a centralidade de Cristo', paragrafos: [
      'Lutero insistiu que a Escritura testemunha de Cristo e combateu alegorias que obscureciam o sentido simples do texto. Sua prática, contudo, não cabe em uma fórmula única: ele também utiliza tipologia, leitura cristológica e distinções teológicas herdadas da tradição. A importância histórica está em submeter esses movimentos ao evangelho e ao texto, em vez de aceitar uma quadriga como mecanismo obrigatório.',
      'Uma hermenêutica reformada posterior precisará formular com ainda mais precisão como centralidade de Cristo, intenção autoral, desenvolvimento canônico e analogia da fé se relacionam. Esse amadurecimento aparece de maneira exemplar em Calvino e nas confissões reformadas.'
    ]},
    { tipo: 'atividade', id: 'te12-u10-a1', titulo: 'Atividade — sola Scriptura não é solo Scriptura', enunciado: 'Explique a diferença entre subordinar tradição à Escritura e desprezar toda interpretação cristã anterior.', itens: ['Defina a autoridade final.', 'Reconheça o valor da tradição.', 'Mostre como uma tradição pode ser corrigida.'], resposta: 'Sola Scriptura afirma que somente a Escritura é norma infalível final. Comentários, credos e concílios podem resumir sabedoria acumulada e corrigir o individualismo, mas permanecem examináveis pela Escritura. Rejeitar autoridade final da tradição não exige rejeitar sua utilidade histórica e eclesial.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A Reforma reordena autoridades.', 'O sentido literal recupera prioridade metodológica.', 'As línguas originais servem ao acesso mais preciso ao texto.', 'Perspicuidade limita a ideia de um intérprete humano infalível.', 'A tradição é recebida criticamente, não abolida.'] }
  ],
  fontes: [
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte reformada primária para Escritura, autoridade e testemunho do Espírito.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Síntese histórica do desenvolvimento da interpretação protestante.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Formulação madura dos princípios de autoridade, perspicuidade e interpretação reformada.' }
  ],
  atualizadoEm: '2026-09-10',
};
