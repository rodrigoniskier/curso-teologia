import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u13-modernidade-1',
  disciplina: 'TE12',
  unidade: 13,
  titulo: 'A Hermenêutica da Modernidade 1',
  objetivo: 'Explicar como Iluminismo, crítica histórica e novas concepções de razão alteraram a interpretação bíblica, distinguindo ferramentas históricas legítimas de pressupostos que excluem a revelação antes da investigação.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A modernidade mudou a pergunta sobre quem pode julgar o texto', paragrafos: [
      'O Iluminismo intensificou a confiança na razão crítica autônoma e a suspeita diante de autoridades recebidas. No estudo bíblico, isso favoreceu perguntas históricas rigorosas sobre autoria, fontes, datação, contexto e desenvolvimento textual. Muitas dessas perguntas são legítimas e continuam indispensáveis à exegese responsável.',
      'A mudança problemática ocorre quando um método histórico incorpora como regra prévia que ação divina, profecia verdadeira ou milagre não podem ocorrer. Nesse caso, uma conclusão teológica foi assumida antes de o dado ser examinado. A crítica reformada não é contra história ou evidência; é contra transformar naturalismo metodológico em metafísica não confessada.'
    ]},
    { tipo: 'quadro', titulo: 'Ferramenta e pressuposto precisam ser separados', itens: [
      'Perguntar quando e em que contexto um texto foi escrito é investigação histórica legítima.',
      'Comparar fontes, manuscritos e formas literárias pode esclarecer o processo textual.',
      'Reconhecer desenvolvimento histórico não exige negar providência ou inspiração.',
      'Excluir a priori qualquer causalidade divina não é resultado da análise; é pressuposto filosófico.',
      'A resposta reformada deve disputar evidências e pressupostos, não rejeitar métodos apenas por serem modernos.'
    ]},
    { tipo: 'texto', titulo: '2. Hume e Kant ajudam a localizar a mudança epistemológica', paragrafos: [
      'Hume radicalizou questões sobre causalidade, testemunho e milagres; Kant reorganizou o problema do conhecimento ao perguntar pelas condições e limites da razão humana. Mesmo quando suas conclusões não são aceitas por uma teologia reformada, compreender essas mudanças ajuda a entender por que a interpretação bíblica moderna passou a discutir não apenas o texto, mas também as condições do conhecimento religioso.',
      'O intérprete cristão não precisa escolher entre credulidade e ceticismo. Ele pode investigar testemunhos, gêneros, evidências históricas e explicações concorrentes com rigor, declarando ao mesmo tempo que sua investigação não começa pela proibição filosófica do sobrenatural.'
    ]},
    { tipo: 'atividade', id: 'te12-u13-a1', titulo: 'Atividade — identificar pressuposto escondido', enunciado: 'Avalie a frase: “Como milagres não podem ocorrer, todo relato bíblico de milagre precisa ter uma explicação natural ou lendária”. Separe a observação histórica do pressuposto filosófico.', itens: ['Identifique o que foi assumido antes da análise.', 'Indique quais perguntas históricas ainda são legítimas.', 'Formule uma investigação que não decida o resultado antecipadamente.'], resposta: 'A impossibilidade de milagres foi assumida filosoficamente, não demonstrada pelo relato. O intérprete ainda pode perguntar por gênero, testemunho, data, transmissão e contexto histórico. Uma investigação aberta compara explicações e evidências sem declarar impossível, por definição, uma das categorias de causa que o próprio texto reivindica.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A modernidade amplia a crítica histórica e a autonomia da razão.', 'Perguntas históricas podem ser recebidas com rigor.', 'Naturalismo a priori é pressuposto, não descoberta exegética.', 'Hume e Kant ajudam a explicar a mudança epistemológica.', 'A hermenêutica reformada deve ser crítica sem ser anti-intelectual.'] }
  ],
  fontes: [
    { id: 'sep-enlightenment', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Enlightenment', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/enlightenment/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Panorama acadêmico do Iluminismo e de suas mudanças epistemológicas.' },
    { id: 'sep-hume', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'David Hume', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/hume/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência acadêmica para causalidade, testemunho e crítica da religião.' },
    { id: 'sep-kant', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Immanuel Kant', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/kant/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência para o projeto crítico e os limites modernos do conhecimento.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Testemunho metodológico protestante do século XIX para comparação com as mudanças modernas.' }
  ],
  atualizadoEm: '2026-09-10',
};
