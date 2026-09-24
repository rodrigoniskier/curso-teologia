import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u5-perfeito-qal-verbo-forte',
  disciplina: 'TE05',
  unidade: 5,
  titulo: 'Verbos: o perfeito Qal do verbo forte',
  objetivo: 'Formar e analisar o perfeito Qal do verbo forte, reconhecendo que pessoa, gênero e número são marcados principalmente por sufixos.',
  topicosCobertos: ['Categorias de flexão dos verbos', 'Formação da flexão do perfeito Qal'],
  blocos: [
    { tipo: 'texto', titulo: '1. O perfeito Qal usa uma base sufixal', paragrafos: [
      'O perfeito Qal do verbo forte é tradicionalmente apresentado pelo paradigma קָטַל. A forma de terceira pessoa masculina singular funciona como forma de citação em muitas gramáticas e léxicos. As demais pessoas são formadas principalmente por sufixos acrescentados à base, com ajustes vocálicos previsíveis.',
      'Pessoa, gênero e número precisam ser identificados morfologicamente antes da tradução. O perfeito será discutido semanticamente na unidade seguinte; aqui o foco é a forma.'
    ] },
    { tipo: 'quadro', titulo: 'Paradigma-modelo de קָטַל', itens: [
      '3ms קָטַל — ele matou / forma-modelo.',
      '3fs קָטְלָה — ela.',
      '2ms קָטַלְתָּ — tu masc.',
      '2fs קָטַלְתְּ — tu fem.',
      '1cs קָטַלְתִּי — eu.',
      '3cp קָטְלוּ — eles/elas.',
      '2mp קְטַלְתֶּם — vós masc.',
      '2fp קְטַלְתֶּן — vós fem.',
      '1cp קָטַלְנוּ — nós.'
    ] },
    { tipo: 'texto', titulo: '2. O sufixo é a pista principal', paragrafos: [
      'As terminações -תִּי, -תָּ, -תְּ, -נוּ, -תֶּם, -תֶּן e -וּ permitem identificar a maior parte do paradigma. A forma 3ms não possui um sufixo pessoal comparável e funciona como base de referência.',
      'A vocalização da base muda em algumas pessoas. O estudante deve aprender o paradigma como sistema e não como mera colagem de sufixos a uma sequência vocálica invariável.'
    ] },
    { tipo: 'atividade', id: 'te05-u5-a1', titulo: 'Atividade — ler a terminação', enunciado: 'Analise קָטַלְתִּי, קָטַלְנוּ, קְטַלְתֶּם e קָטְלוּ.', itens: ['Identifique pessoa, gênero e número.', 'Marque o sufixo pessoal.', 'Observe alterações na vocalização da base.'], resposta: 'קָטַלְתִּי = 1cs; קָטַלְנוּ = 1cp; קְטַלְתֶּם = 2mp; קָטְלוּ = 3cp. Os sufixos são a principal pista, enquanto a base apresenta ajustes vocálicos conforme a forma.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};