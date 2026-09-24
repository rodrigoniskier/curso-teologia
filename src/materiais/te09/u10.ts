import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u10-pronomes-demonstrativos',
  disciplina: 'TE09',
  unidade: 10,
  titulo: 'Pronomes 2',
  objetivo: 'Reconhecer e usar os demonstrativos οὗτος e ἐκεῖνος, analisando concordância, posição com o artigo e referência discursiva.',
  topicosCobertos: ['Pronomes demonstrativos'],
  blocos: [
    { tipo: 'texto', titulo: '1. Demonstrativos apontam dentro do discurso', paragrafos: [
      'οὗτος, αὕτη, τοῦτο e ἐκεῖνος, ἐκείνη, ἐκεῖνο concordam em gênero, número e caso com o substantivo quando o acompanham. Também podem funcionar substantivamente, quando o referente é recuperável pelo contexto.',
      'A distinção tradicional entre um demonstrativo mais próximo e outro mais distante pode ajudar inicialmente, mas a referência real é discursiva: o autor pode retomar, contrastar ou destacar participantes e ideias.'
    ] },
    { tipo: 'quadro', titulo: 'Demonstrativo com substantivo articular', itens: [
      'οὗτος ὁ ἄνθρωπος / ὁ ἄνθρωπος οὗτος — “este homem”.',
      'ἐκείνη ἡ ἡμέρα / ἡ ἡμέρα ἐκείνη — “aquele dia”.',
      'O demonstrativo normalmente aparece fora da posição atributiva interna do grupo artigo + substantivo.',
      'Concordância continua sendo decisiva mesmo quando a ordem muda.'
    ] },
    { tipo: 'texto', titulo: '2. A referência não termina na morfologia', paragrafos: [
      'Depois de identificar forma e concordância, o estudante precisa perguntar a que pessoa, objeto ou proposição o demonstrativo aponta. Essa etapa já aproxima a morfologia da análise do discurso.',
      'Em tradução, “este”, “esse” e “aquele” não correspondem mecanicamente a uma única forma grega em todos os contextos. A distância discursiva e a naturalidade do português precisam ser consideradas.'
    ] },
    { tipo: 'atividade', id: 'te09-u10-a1', titulo: 'Atividade — demonstrativo e referente', enunciado: 'Analise οὗτος ὁ λόγος, ἡ ἡμέρα ἐκείνη e τοῦτο sem substantivo expresso.', itens: ['Identifique gênero, número e caso quando possível.', 'Explique a posição em relação ao artigo.', 'Indique como localizar o referente de τοῦτο no contexto.'], resposta: 'οὗτος concorda com λόγος; ἐκείνη concorda com ἡμέρα. τοῦτο pode funcionar substantivamente e seu referente deve ser recuperado do discurso. A tradução final depende da referência, não apenas do paradigma.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para demonstrativos e sintaxe nominal.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para pronomes demonstrativos.' }
  ],
  atualizadoEm: '2026-09-24',
};