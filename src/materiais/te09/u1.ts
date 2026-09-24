import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u1-primeira-declinacao',
  disciplina: 'TE09',
  unidade: 1,
  titulo: 'Substantivos 3 — 1ª declinação',
  objetivo: 'Reconhecer e analisar substantivos da primeira declinação, relacionando terminações a gênero, número e caso sem depender da ordem das palavras.',
  topicosCobertos: ['1ª declinação'],
  blocos: [
    { tipo: 'texto', titulo: '1. A primeira declinação amplia o sistema nominal', paragrafos: [
      'Depois da segunda declinação, o estudante encontra na primeira declinação um grande grupo de substantivos, sobretudo femininos em -η e -α e alguns masculinos em -ης ou -ας. O princípio continua o mesmo: a terminação fornece informação morfológica e a sintaxe decide a função contextual.',
      'γράφη, -ῆς, ἡ oferece um paradigma feminino em -η; ὥρα, -ας, ἡ ilustra o padrão em -α. A forma lexical deve ser aprendida com genitivo e artigo para que gênero e declinação não sejam adivinhados.'
    ] },
    { tipo: 'quadro', titulo: 'γραφή — paradigma básico', itens: [
      'Singular: γραφή, γραφῆς, γραφῇ, γραφήν, γραφή.',
      'Plural: γραφαί, γραφῶν, γραφαῖς, γραφάς, γραφαί.',
      'Artigo feminino: ἡ, τῆς, τῇ, τήν; αἱ, τῶν, ταῖς, τάς.'
    ] },
    { tipo: 'texto', titulo: '2. O -α não possui um único comportamento', paragrafos: [
      'Substantivos em -α podem manter α em genitivo e dativo singular em determinados ambientes fonológicos, enquanto outros alternam para η. Nesta etapa, a estratégia segura é aprender o genitivo junto com o nominativo, em vez de tentar prever toda forma apenas pelo nominativo.',
      'Os masculinos da primeira declinação combinam terminações características da primeira declinação com marcas próprias, como nominativo -ης/-ας e genitivo -ου. O reconhecimento deve ser lexical e morfológico, não baseado na suposição de que primeira declinação significa automaticamente feminino.'
    ] },
    { tipo: 'atividade', id: 'te09-u1-a1', titulo: 'Atividade — reconhecer antes de traduzir', enunciado: 'Analise γραφῆς, γραφαῖς, ὥραν e προφήτου quanto a caso, número e gênero usando os lemas fornecidos pelo professor.', itens: ['Marque a terminação.', 'Indique a informação fornecida pelo artigo quando houver.', 'Explique por que o genitivo deve ser aprendido com o lema.'], resposta: 'γραφῆς = genitivo singular feminino; γραφαῖς = dativo plural feminino; ὥραν = acusativo singular feminino; προφήτου = genitivo singular masculino de um masculino da primeira declinação. O genitivo ajuda a identificar o padrão flexional.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para paradigmas nominais e exercícios cumulativos.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para a primeira declinação.' }
  ],
  atualizadoEm: '2026-09-24',
};