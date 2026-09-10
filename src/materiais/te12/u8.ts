import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u8-ocidente-latino',
  disciplina: 'TE12',
  unidade: 8,
  titulo: 'A Hermenêutica no Período dos Países Latinos',
  objetivo: 'Situar a interpretação bíblica no cristianismo latino, especialmente em Jerônimo e Agostinho, avaliando o papel da tradução, da regra da fé, da caridade e dos sentidos figurados.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O Ocidente latino recebeu e transformou debates anteriores',
      paragrafos: [
        'À medida que o latim se tornou dominante no cristianismo ocidental, interpretação e tradução passaram a caminhar ainda mais próximas. Jerônimo insistiu no valor das línguas bíblicas e produziu a Vulgata em diálogo com manuscritos hebraicos e gregos. Esse trabalho mostra que escolhas de tradução já são decisões hermenêuticas: é preciso decidir relações gramaticais, variantes e campos de sentido antes de escrever uma frase em outra língua.',
        'Agostinho ofereceu uma síntese influente em De doctrina christiana. Ele valoriza conhecimento de línguas, sinais, contexto e regras de leitura, mas também organiza a interpretação por uma finalidade teológica: a leitura cristã deve conduzir ao amor de Deus e do próximo. Essa regra pode funcionar como teste de finalidade, mas não como permissão para ignorar o que a passagem comunica.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três legados do período latino',
      itens: [
        'A tradução da Bíblia torna visível a necessidade de filologia e comparação textual.',
        'A regra da fé ajuda a ler textos dentro da confissão cristã recebida.',
        'A finalidade moral e eclesial da leitura permanece forte: interpretar não é mero exercício antiquário.',
        'Sentidos figurados continuam presentes e podem ultrapassar os controles histórico-gramaticais posteriores.',
        'A autoridade eclesiástica e a tradição ganham crescente peso na delimitação de interpretações legítimas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Caridade não substitui sentido',
      paragrafos: [
        'Uma interpretação pode produzir uma aplicação moralmente edificante e ainda ser exegese inadequada. A hermenêutica reformada recebe com gratidão a insistência agostiniana de que conhecimento bíblico deve formar amor e piedade, mas distingue fruto legítimo de sentido textual.',
        'Esse ponto prepara a Reforma: os reformadores não rejeitaram a tradição cristã inteira. Eles contestaram a capacidade de tradições e autoridades posteriores de criarem sentidos normativos independentes do texto e voltaram a dar prioridade programática às línguas originais e ao sentido histórico-literário.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u8-a1',
      titulo: 'Atividade — tradução como interpretação',
      enunciado: 'Escolha uma passagem que apresente duas traduções portuguesas diferentes. Identifique uma decisão linguística real por trás da diferença e explique por que isso não significa que tradução seja arbitrária.',
      itens: ['Compare as duas formulações.', 'Localize a decisão gramatical ou lexical.', 'Mostre quais evidências podem favorecer uma opção.'],
      resposta: 'Traduções divergem porque línguas não correspondem palavra por palavra e porque algumas construções admitem mais de uma formulação. A decisão continua controlável por gramática, contexto, uso lexical e evidência textual; reconhecer interpretação na tradução não a transforma em escolha livre.'
    },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Jerônimo evidencia a ligação entre línguas originais, texto e tradução.', 'Agostinho integra técnica interpretativa, regra da fé e finalidade de amor.', 'A tradição latina preserva exegese histórica e também sentidos figurados.', 'Edificação não prova por si só que uma exegese está correta.', 'A Reforma herdará esse patrimônio ao mesmo tempo em que reordenará suas autoridades.'] }
  ],
  fontes: [
    { id: 'schaff-hcc3', autor: 'Philip Schaff', ano: '1867', titulo: 'History of the Christian Church, vol. III', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/schaff/hcc3.all.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'História de Jerônimo, Agostinho e do cristianismo latino patrístico.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio para história da interpretação, tradução e métodos patrísticos.' },
    { id: 'ccel', autor: 'Vários', ano: '—', titulo: 'Christian Classics Ethereal Library', publicacao: 'CCEL', url: 'https://www.ccel.org/', idioma: 'en', tipo: 'acervo', acesso: 'livre', nota: 'Acervo público de textos patrísticos e clássicos cristãos para leitura complementar.' }
  ],
  atualizadoEm: '2026-09-10',
};
