import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u9-conjuncao-vav',
  disciplina: 'TE04',
  unidade: 9,
  titulo: 'A conjunção vav',
  objetivo: 'Reconhecer a conjunção וְ e suas principais variações de vocalização, distinguindo função coordenativa de tradução automática por um único equivalente português.',
  topicosCobertos: ['Regras para o uso da conjunção vav'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Uma letra pode organizar o fluxo da frase',
      paragrafos: [
        'A conjunção וְ é uma das formas mais frequentes do hebraico bíblico. Ela se liga à palavra seguinte e pode coordenar palavras, sintagmas e orações. Em muitos contextos corresponde naturalmente a “e”, mas também pode introduzir sequência, contraste, consequência ou simples continuidade discursiva.',
        'Por isso, o reconhecimento morfológico deve vir antes da escolha estilística em português. Identificar וְ como conjunção é seguro; decidir se a melhor tradução é “e”, “mas”, “então” ou até nenhuma conjunção explícita exige observar a relação entre as partes do discurso.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Padrões de vocalização úteis no início',
      itens: [
        'A forma básica é וְ־.',
        'Diante de certas consoantes labiais e de formas com shva simples, pode aparecer וּ־.',
        'A vocalização também pode ajustar-se diante de guturais e sílabas específicas.',
        'A mudança vocálica não cria uma conjunção nova; é variação fonológica do mesmo morfema.',
        'A conjunção pode acumular-se com outros prefixos, exigindo segmentação cuidadosa.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Coordenação não é sempre equivalência semântica',
      paragrafos: [
        'Duas expressões ligadas por ו não precisam ter o mesmo peso semântico, e duas orações coordenadas podem representar relações discursivas diferentes. A gramática identifica a ligação; a interpretação determina como ela funciona naquele contexto.',
        'Essa cautela será ainda mais importante em Hebraico 2, quando a disciplina tratar formas verbais e sequências com vav. Nesta unidade, o objetivo é apenas consolidar a conjunção simples e impedir que o estudante antecipe categorias verbais que ainda não estudou.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u9-a1',
      titulo: 'Atividade — função antes da equivalência',
      enunciado: 'Uma frase contém וְ entre duas orações. Explique por que reconhecer a forma como conjunção não obriga traduzir sempre por “e”.',
      itens: ['Identifique a função morfológica.', 'Liste duas relações discursivas possíveis.', 'Explique como o contexto decide a tradução.'],
      resposta: 'Morfologicamente וְ coordena as unidades. Discursivamente, a coordenação pode expressar simples adição, sequência, contraste ou consequência. A tradução precisa reproduzir a relação percebida no contexto, não uma equivalência fixa de dicionário.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'וְ é conjunção prefixada e muito frequente.',
        'Sua vocalização varia por razões fonológicas.',
        'A forma básica não determina sozinha a melhor tradução.',
        'Ela pode coordenar palavras, grupos e orações.',
        'O estudo verbal com vav pertence às etapas posteriores.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para formas e vocalização da conjunção vav.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática complementar de reconhecimento auditivo e visual da conjunção em contexto.' }
  ],
  atualizadoEm: '2026-09-10',
};
