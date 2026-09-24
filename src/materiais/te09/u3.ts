import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u3-adjetivos-primeira-segunda-declinacoes',
  disciplina: 'TE09',
  unidade: 3,
  titulo: 'Adjetivos 2',
  objetivo: 'Dominar o padrão de adjetivos de primeira e segunda declinações e usar concordância para analisar grupos nominais.',
  topicosCobertos: ['1ª e 2ª declinações'],
  blocos: [
    { tipo: 'texto', titulo: '1. Um paradigma combina duas declinações', paragrafos: [
      'Adjetivos do tipo ἀγαθός, -ή, -όν usam formas da segunda declinação no masculino e neutro e formas da primeira declinação no feminino. O paradigma, portanto, reaproveita estruturas já estudadas em vez de introduzir um sistema totalmente novo.',
      'A concordância é gramatical, não uma simples cópia de terminações. Um substantivo de outra declinação ainda pode ser modificado por um adjetivo desse padrão, desde que gênero, número e caso correspondam.'
    ] },
    { tipo: 'quadro', titulo: 'Formas-chave de ἀγαθός', itens: [
      'Masculino nominativo singular ἀγαθός; genitivo ἀγαθοῦ; acusativo ἀγαθόν.',
      'Feminino nominativo singular ἀγαθή; genitivo ἀγαθῆς; acusativo ἀγαθήν.',
      'Neutro nominativo/acusativo singular ἀγαθόν; plural ἀγαθά.',
      'Plural masculino nominativo ἀγαθοί; feminino ἀγαθαί; neutro ἀγαθά.'
    ] },
    { tipo: 'texto', titulo: '2. Concordância resolve relações à distância', paragrafos: [
      'Quando substantivo e adjetivo são separados por outras palavras, a concordância pode mostrar que pertencem ao mesmo grupo. Essa informação é especialmente valiosa numa língua cuja ordem é mais flexível que a do português.',
      'A análise madura evita traduzir o adjetivo isoladamente: identifica sua forma, encontra o substantivo compatível e só então decide a relação sintática.'
    ] },
    { tipo: 'atividade', id: 'te09-u3-a1', titulo: 'Atividade — parear por concordância', enunciado: 'Em uma lista controlada, relacione ἀγαθαῖς, πιστούς, καλά e ἁγίας a substantivos com gênero, número e caso compatíveis.', itens: ['Justifique cada pareamento pela morfologia.', 'Indique as formas que admitem mais de uma análise isoladamente.', 'Explique como o contexto resolve a ambiguidade.'], resposta: 'O pareamento deve usar gênero, número e caso, não proximidade linear. Formas neutras e algumas terminações podem ser ambíguas isoladamente; artigo, substantivo e sintaxe resolvem a leitura.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para paradigmas adjetivais.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Prática clássica de concordância adjetival.' }
  ],
  atualizadoEm: '2026-09-24',
};