import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u12-adjetivos-genero-numero',
  disciplina: 'TE04',
  unidade: 12,
  titulo: 'Adjetivos: gênero e número',
  objetivo: 'Reconhecer e formar as principais flexões de gênero e número dos adjetivos hebraicos e aplicar a concordância com o substantivo que modificam.',
  topicosCobertos: ['Formas dos adjetivos quanto ao gênero e número'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O adjetivo mostra concordância visível',
      paragrafos: [
        'Os adjetivos hebraicos concordam com o substantivo em gênero e número. Isso significa que uma mesma qualidade aparece em formas diferentes conforme o substantivo seja masculino singular, feminino singular, masculino plural ou feminino plural.',
        'O padrão mais útil é aprender um paradigma lexical frequente e, ao mesmo tempo, observar que a concordância é sintática: não basta saber a terminação do adjetivo; é necessário identificar qual substantivo ele descreve.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Paradigma introdutório de concordância',
      itens: [
        'Masculino singular: normalmente a forma lexical básica do adjetivo.',
        'Feminino singular: frequentemente recebe ־ָה ou outra formação feminina lexicalmente determinada.',
        'Masculino plural: frequentemente recebe ־ִים.',
        'Feminino plural: frequentemente recebe ־וֹת.',
        'A concordância deve ser verificada pelo substantivo e pela construção, não pela semelhança isolada das terminações.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Concordância prepara a diferença entre atributo e predicação',
      paragrafos: [
        'Nesta unidade, o foco é apenas a forma. Entretanto, reconhecer gênero e número prepara a próxima etapa: distinguir quando o adjetivo integra o mesmo grupo nominal do substantivo e quando funciona como predicado de uma oração nominal.',
        'A ausência de um verbo equivalente a “ser” no presente de muitas orações nominais hebraicas torna essa atenção especialmente importante. A morfologia do adjetivo ajuda a relacioná-lo ao substantivo, mas a definitude e a posição também participarão da análise.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u12-a1',
      titulo: 'Atividade — concordar pela forma',
      enunciado: 'Um substantivo feminino plural precisa ser qualificado por um adjetivo. Explique quais características o adjetivo deve apresentar e por que não basta escolher a forma masculina singular do dicionário.',
      itens: ['Identifique gênero e número exigidos.', 'Explique a concordância.', 'Diga qual é o papel da forma lexical do dicionário.'],
      resposta: 'O adjetivo precisa assumir a forma feminina plural apropriada ao seu paradigma, concordando com o substantivo. A forma masculina singular costuma servir como lema lexical, mas não é a forma usada em todos os contextos. A sintaxe exige a flexão correspondente.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Adjetivos concordam com substantivos em gênero e número.',
        'Há quatro formas introdutórias centrais: masc. sg., fem. sg., masc. pl. e fem. pl.',
        'As terminações frequentes ajudam, mas pertencem a paradigmas reais.',
        'A concordância é relação sintática, não simples semelhança gráfica.',
        'Esse domínio é pré-requisito para atributo e predicação.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para flexão e concordância dos adjetivos.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Exposição contextual a adjetivos em diferentes formas de gênero e número.' }
  ],
  atualizadoEm: '2026-09-10',
};
