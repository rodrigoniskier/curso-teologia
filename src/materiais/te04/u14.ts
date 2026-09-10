import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u14-pronomes-pessoais-independentes',
  disciplina: 'TE04',
  unidade: 14,
  titulo: 'Pronomes pessoais independentes',
  objetivo: 'Reconhecer as formas básicas dos pronomes pessoais independentes e empregá-las em orações nominais simples, distinguindo pessoa, gênero e número.',
  topicosCobertos: [
    'Formas dos pronomes pessoais independentes',
    'Emprego dos pronomes pessoais independentes',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O pronome independente é uma palavra, não um sufixo',
      paragrafos: [
        'O hebraico bíblico possui formas independentes para “eu”, “tu”, “ele”, “ela”, “nós”, “vós” e “eles/elas”. Elas devem ser distinguidas desde já dos sufixos pronominais, que serão estudados mais adiante ligados a substantivos, preposições e verbos.',
        'As formas independentes exibem distinções de pessoa, gênero e número que nem sempre coincidem com o português. A segunda pessoa e a terceira pessoa, por exemplo, distinguem masculino e feminino em várias formas; essa informação precisa ser preservada na análise mesmo quando a tradução portuguesa não a explicita.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Formas de referência para reconhecimento',
      itens: [
        '1ª pessoa singular: אָנֹכִי / אֲנִי — “eu”.',
        '2ª pessoa singular masculina: אַתָּה; feminina: אַתְּ.',
        '3ª pessoa singular masculina: הוּא; feminina: הִיא.',
        '1ª pessoa plural: אֲנַחְנוּ.',
        '2ª pessoa plural e 3ª pessoa plural apresentam distinções tradicionais de gênero que devem ser reconhecidas no paradigma completo.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Pronomes independentes aparecem com frequência em orações nominais',
      paragrafos: [
        'Como o hebraico pode formar predicação nominal no presente sem uma cópula verbal expressa, o pronome independente pode funcionar como sujeito em estruturas equivalentes a “eu sou X”, “ele é Y” ou “eles são Z”. A tradução portuguesa normalmente insere o verbo “ser”; a análise hebraica continua sendo nominal.',
        'O pronome também pode receber destaque discursivo porque é expresso como palavra independente. Mais tarde, quando formas verbais já codificarem pessoa e número, sua presença poderá ter valor enfático ou contrastivo. Nesta unidade, basta reconhecer a forma e sua função sintática básica.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u14-a1',
      titulo: 'Atividade — identificar pessoa, gênero e número',
      enunciado: 'Analise הִיא como pronome independente e explique como ele pode funcionar em uma oração nominal sem verbo expresso.',
      itens: ['Indique pessoa, gênero e número.', 'Diga sua função sintática possível.', 'Explique por que a tradução portuguesa pode conter “é”.'],
      resposta: 'הִיא é pronome pessoal independente de terceira pessoa, feminino singular. Pode funcionar como sujeito de uma oração nominal. Se vier seguido de um substantivo ou adjetivo predicativo, o português pode exigir “ela é...”, embora a forma verbal “é” não esteja expressa no hebraico.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Pronomes pessoais independentes são palavras autônomas.',
        'Codificam pessoa, gênero e número.',
        'Devem ser distinguidos dos sufixos pronominais.',
        'São frequentes como sujeitos de orações nominais.',
        'A tradução pode inserir “ser” sem que haja verbo expresso no texto hebraico.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para formas e uso sintático dos pronomes pessoais independentes.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática contextual de reconhecimento de pronomes pessoais em hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-10',
};
