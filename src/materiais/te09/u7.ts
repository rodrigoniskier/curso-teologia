import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u7-primeiro-aoristo-ativo-medio-passivo',
  disciplina: 'TE09',
  unidade: 7,
  titulo: 'Verbos 7',
  objetivo: 'Reconhecer e formar o primeiro aoristo ativo, médio e passivo no indicativo e no subjuntivo, distinguindo seus marcadores morfológicos.',
  topicosCobertos: ['Primeiro aoristo do indicativo e do subjuntivo, ativo e médio', 'Verbos 8: primeiro aoristo do indicativo e subjuntivo passivo'],
  blocos: [
    { tipo: 'texto', titulo: '1. Primeiro aoristo ativo e médio', paragrafos: [
      'O primeiro aoristo ativo e médio de muitos verbos emprega o marcador -σα-. No indicativo, aparece normalmente o aumento: λύω → ἔλυσα. No subjuntivo, não há aumento: λύσω.',
      'As formas de subjuntivo aoristo precisam ser distinguidas de outras séries pela combinação de tema, terminações e contexto. O fato de λύσω também coincidir formalmente com uma forma futura mostra por que parsing não pode depender de uma única letra.'
    ] },
    { tipo: 'quadro', titulo: 'Modelos com λύω', itens: [
      'Aoristo ativo indicativo: ἔλυσα, ἔλυσας, ἔλυσε(ν), ἐλύσαμεν, ἐλύσατε, ἔλυσαν.',
      'Aoristo médio indicativo: ἐλυσάμην, ἐλύσω, ἐλύσατο, ἐλυσάμεθα, ἐλύσασθε, ἐλύσαντο.',
      'Aoristo ativo subjuntivo: λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν).',
      'Aoristo médio subjuntivo: λύσωμαι, λύσῃ, λύσηται, λυσώμεθα, λύσησθε, λύσωνται.'
    ] },
    { tipo: 'texto', titulo: '2. O primeiro aoristo passivo usa -θη-', paragrafos: [
      'O aoristo passivo apresenta uma série distinta. λύω → ἐλύθην no indicativo; no subjuntivo, λυθῶ. O marcador -θη- é uma pista importante, embora verbos reais possam apresentar alterações de radical e séries passivas irregulares.',
      'O aoristo passivo não deve ser confundido com médio apenas porque ambos tratam de voz não ativa. As formas são morfologicamente distintas e precisam ser reconhecidas como paradigmas próprios.'
    ] },
    { tipo: 'atividade', id: 'te09-u7-a1', titulo: 'Atividade — quatro séries de aoristo', enunciado: 'Classifique ἔλυσα, ἐλυσάμην, ἐλύθην e λυθῶ.', itens: ['Identifique voz e modo.', 'Marque aumento nas formas indicativas.', 'Marque -σα- ou -θη-.', 'Explique por que forma e contexto são necessários para distinguir λύσω.'], resposta: 'ἔλυσα = aoristo ativo indicativo; ἐλυσάμην = aoristo médio indicativo; ἐλύθην = aoristo passivo indicativo; λυθῶ = aoristo passivo subjuntivo. λύσω pode coincidir formalmente com futuro ativo 1ª singular ou subjuntivo aoristo 1ª singular, sendo a sintaxe/contexto decisivos.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para primeiro aoristo e voz passiva.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Paradigmas clássicos do primeiro aoristo.' }
  ],
  atualizadoEm: '2026-09-24',
};