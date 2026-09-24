import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u8-oracoes-interrogativas',
  disciplina: 'TE05',
  unidade: 8,
  titulo: 'Orações interrogativas',
  objetivo: 'Reconhecer o ה interrogativo e os principais pronomes interrogativos, analisando sua vocalização e função sem depender da pontuação portuguesa.',
  topicosCobertos: ['Regras para a pontuação do he interrogativo', 'Pronomes interrogativos'],
  blocos: [
    { tipo: 'texto', titulo: '1. O ה interrogativo marca perguntas de sim/não', paragrafos: [
      'O prefixo interrogativo ה־ pode introduzir perguntas cuja resposta esperada é sim ou não. Na tradição massorética, sua vocalização mais comum é com ḥateph-pataḥ, הֲ־, como em muitas formas bíblicas.',
      'O ambiente fonológico pode provocar ajustes de vocalização, especialmente junto a certas guturais ou sílabas com shewa. Por isso, o aluno deve reconhecer a função do prefixo no texto vocalizado e não tentar reconstruir toda pontuação por uma única regra gráfica.'
    ] },
    { tipo: 'quadro', titulo: 'Interrogativos básicos', itens: [
      'הֲ־: partícula prefixada para perguntas de sim/não.',
      'מִי — “quem?”, normalmente referente a pessoa.',
      'מָה / מַה / מֶה — formas contextuais do interrogativo “o quê?/que?”.',
      'Uma pergunta pode conter ainda preposição + interrogativo, exigindo análise da construção completa.',
      'A entonação portuguesa da tradução não substitui a identificação das marcas hebraicas.'
    ] },
    { tipo: 'texto', titulo: '2. Pontuação massorética é evidência de leitura', paragrafos: [
      'A vocalização do ה interrogativo deve ser aprendida junto com exemplos reais. A presença de guturais, shewa e padrões fonológicos condiciona as variantes, de modo semelhante a outras partículas prefixadas estudadas em Hebraico 1.',
      'Em leitura não vocalizada, sintaxe, vocabulário e contexto tornam-se ainda mais importantes para distinguir o interrogativo de outros usos de ה.'
    ] },
    { tipo: 'atividade', id: 'te05-u8-a1', titulo: 'Atividade — que tipo de pergunta?', enunciado: 'Classifique exemplos contendo הֲ־, מִי e מָה.', itens: ['Distinga pergunta de sim/não de pergunta de conteúdo.', 'Identifique o interrogativo.', 'Observe a vocalização do prefixo quando presente.', 'Traduza preservando a natureza da pergunta.'], resposta: 'ה interrogativo tende a introduzir pergunta polar; מִי pergunta por pessoa e מָה/מַה/מֶה por coisa, conteúdo ou identificação. A vocalização precisa ser lida no ambiente fonológico concreto.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};