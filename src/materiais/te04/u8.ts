import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u8-preposicoes-substantivos',
  disciplina: 'TE04',
  unidade: 8,
  titulo: 'Preposições com substantivos',
  objetivo: 'Reconhecer as preposições inseparáveis mais frequentes e aplicar suas regras básicas de combinação com substantivos definidos e não definidos.',
  topicosCobertos: ['Regras para o uso das preposições'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Algumas preposições são prefixos',
      paragrafos: [
        'בְּ, כְּ e לְ são chamadas tradicionalmente de preposições inseparáveis porque se unem graficamente à palavra seguinte. Seus valores mais comuns podem ser representados, conforme o contexto, por “em/com”, “como/segundo” e “a/para”, mas nenhuma dessas equivalências esgota seus usos.',
        'A primeira tarefa é reconhecer o prefixo antes de procurar o substantivo no léxico. Uma forma como בְּבַיִת precisa ser segmentada em preposição + substantivo; buscar a sequência inteira como se fosse um lema único gera erro de análise.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Regras introdutórias',
      itens: [
        'As preposições inseparáveis ligam-se diretamente ao substantivo.',
        'Sua vogal pode mudar conforme a primeira sílaba da palavra seguinte.',
        'Quando se combinam com o artigo definido, a consoante ה do artigo normalmente desaparece e sua vogal é absorvida pela preposição.',
        'Preposição + substantivo definido continua formando uma expressão definida; a fusão gráfica não apaga a função do artigo.',
        'A tradução deve considerar a relação sintática e semântica da frase, não apenas um equivalente memorizado.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Segmentação vem antes da tradução',
      paragrafos: [
        'Em hebraico bíblico, uma palavra gráfica pode concentrar conjunção, preposição, artigo e substantivo. O estudante precisa aprender a “desmontar” a forma. Esse hábito é decisivo porque softwares e léxicos exibem o lema, não necessariamente a forma exatamente como aparece no texto.',
        'Ao encontrar uma preposição diante de palavra definida, verifique se houve contração com o artigo. Essa observação evita traduzir a expressão como indefinida apenas porque הַ־ não aparece graficamente de maneira independente.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u8-a1',
      titulo: 'Atividade — segmentar antes de traduzir',
      enunciado: 'Diante de uma forma formada por לְ + artigo definido + substantivo, descreva o que deve ser identificado antes de oferecer uma tradução.',
      itens: ['Separe os morfemas.', 'Explique a fusão com o artigo.', 'Indique por que a tradução final depende do contexto.'],
      resposta: 'Primeiro identifica-se לְ como preposição e o substantivo pelo seu lema. Se o artigo estiver presente, sua consoante ה normalmente é absorvida e a preposição recebe a vocalização associada à definitude. Depois disso, a relação pode ser traduzida por “a”, “para” ou outra formulação adequada ao contexto.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'בְּ, כְּ e לְ são preposições inseparáveis frequentes.',
        'Elas devem ser segmentadas do substantivo.',
        'Podem sofrer mudanças vocálicas.',
        'Com artigo definido ocorre fusão gráfica previsível.',
        'A função da preposição é determinada pela construção inteira.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para preposições inseparáveis, vocalização e combinação com artigo.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática de reconhecimento das preposições em linguagem bíblica contextualizada.' }
  ],
  atualizadoEm: '2026-09-10',
};
