import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u6-segundo-aoristo',
  disciplina: 'TE09',
  unidade: 6,
  titulo: 'Verbos 6',
  objetivo: 'Compreender o valor aspectual básico do aoristo e reconhecer formas de segundo aoristo do indicativo e subjuntivo ativo e médio.',
  topicosCobertos: ['Tempo aoristo', 'Segundo aoristo do indicativo e subjuntivo, ativo e médio'],
  blocos: [
    { tipo: 'texto', titulo: '1. Aoristo não significa automaticamente ação pontual', paragrafos: [
      'O aoristo apresenta a situação verbal de modo perfectivo, isto é, como um todo para a organização do discurso. Em narrativas, o indicativo aoristo frequentemente relata eventos passados, mas a categoria não deve ser reduzida a “passado simples” nem a “ação feita uma única vez”.',
      'O segundo aoristo distingue-se sobretudo pela formação do tema. Em vez do marcador -σα- do primeiro aoristo ativo/médio, muitos verbos usam um radical diferente com terminações semelhantes às do imperfeito.'
    ] },
    { tipo: 'quadro', titulo: 'Segundo aoristo ativo — λαμβάνω → ἔλαβον', itens: [
      'Indicativo: ἔλαβον, ἔλαβες, ἔλαβε(ν), ἐλάβομεν, ἐλάβετε, ἔλαβον.',
      'Subjuntivo: λάβω, λάβῃς, λάβῃ, λάβωμεν, λάβητε, λάβωσι(ν).',
      'O indicativo apresenta aumento; o subjuntivo não. O radical de segundo aoristo λαβ- precisa ser aprendido lexicalmente.'
    ] },
    { tipo: 'texto', titulo: '2. O segundo aoristo médio usa terminações próprias da voz média', paragrafos: [
      'Verbos que possuem segundo aoristo médio mostram o mesmo princípio: tema específico de aoristo + terminações secundárias no indicativo ou terminações de subjuntivo na série correspondente. γενόμην, por exemplo, pertence ao aoristo médio de γίνομαι, e γένωμαι ao subjuntivo aoristo médio.',
      'O foco é reconhecer a arquitetura da forma. A lista das principais partes verbais se torna indispensável porque nem todo radical de aoristo pode ser previsto a partir do presente.'
    ] },
    { tipo: 'atividade', id: 'te09-u6-a1', titulo: 'Atividade — presente não basta', enunciado: 'Compare λαμβάνω, ἔλαβον e λάβω; depois γίνομαι, ἐγενόμην e γένωμαι.', itens: ['Identifique presente versus aoristo.', 'Distingua indicativo e subjuntivo.', 'Marque aumento quando houver.', 'Explique por que partes principais precisam ser aprendidas.'], resposta: 'ἔλαβον e ἐγενόμην são indicativos de segundo aoristo com aumento; λάβω e γένωμαι são subjuntivos aoristos sem aumento. Os temas λαβ- e γεν- não são obtidos por simples adição de uma terminação ao presente.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para aoristos e partes principais.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para segundo aoristo indicativo e subjuntivo.' }
  ],
  atualizadoEm: '2026-09-24',
};