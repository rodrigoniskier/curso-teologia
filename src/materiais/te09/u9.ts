import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u9-pronomes-pessoais',
  disciplina: 'TE09',
  unidade: 9,
  titulo: 'Pronomes 1',
  objetivo: 'Reconhecer as formas dos pronomes pessoais de primeira e segunda pessoas e o uso pronominal de αὐτός, identificando caso, número, ênfase e referência contextual.',
  topicosCobertos: ['Pronomes pessoais'],
  blocos: [
    { tipo: 'texto', titulo: '1. A pessoa verbal pode dispensar o pronome expresso', paragrafos: [
      'Como a terminação verbal já identifica pessoa e número, ἐγώ e σύ não precisam aparecer sempre como sujeito. Quando o pronome nominativo é expresso, pode haver contraste, ênfase ou necessidade discursiva que merece atenção.',
      'Nas formas oblíquas, há variantes átonas e enfáticas. O estudante não precisa tratar cada variante como novo lema; precisa reconhecer que μου/ἐμοῦ, μοι/ἐμοί e με/ἐμέ pertencem ao paradigma da primeira pessoa singular.'
    ] },
    { tipo: 'quadro', titulo: 'Primeira e segunda pessoas', itens: [
      '1ª singular: ἐγώ; genitivo μου/ἐμοῦ; dativo μοι/ἐμοί; acusativo με/ἐμέ.',
      '1ª plural: ἡμεῖς; ἡμῶν; ἡμῖν; ἡμᾶς.',
      '2ª singular: σύ; genitivo σου/σοῦ; dativo σοι/σοί; acusativo σε/σέ.',
      '2ª plural: ὑμεῖς; ὑμῶν; ὑμῖν; ὑμᾶς.'
    ] },
    { tipo: 'texto', titulo: '2. αὐτός exige atenção ao contexto', paragrafos: [
      'αὐτός flexiona como forma de primeira/segunda declinações e pode funcionar, especialmente nos casos oblíquos, como pronome de terceira pessoa: αὐτοῦ, αὐτῷ, αὐτόν e correspondentes de gênero e número.',
      'No nominativo, αὐτός frequentemente tem valor intensivo — “ele mesmo” — e também pode apresentar outros usos conforme posição e contexto. Por isso, não se deve traduzir automaticamente toda ocorrência como simples “ele”.'
    ] },
    { tipo: 'atividade', id: 'te09-u9-a1', titulo: 'Atividade — referência e ênfase', enunciado: 'Analise ἐγὼ γράφω, γράφω, ὑμῖν e αὐτός em frases controladas.', itens: ['Explique o que a presença de ἐγώ pode acrescentar.', 'Identifique caso/número de ὑμῖν.', 'Liste duas possibilidades de uso para αὐτός e indique que informação contextual seria necessária.'], resposta: 'A forma verbal já marca 1ª pessoa em γράφω; ἐγώ pode acrescentar contraste ou ênfase. ὑμῖν é dativo plural da segunda pessoa. αὐτός pode funcionar como intensivo ou, conforme forma/posição, como referência de terceira pessoa; contexto e sintaxe decidem.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para pronomes pessoais e leitura.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Paradigmas clássicos de pronomes pessoais.' }
  ],
  atualizadoEm: '2026-09-24',
};