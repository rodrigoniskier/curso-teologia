import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u11-substantivos-genero-numero',
  disciplina: 'TE04',
  unidade: 11,
  titulo: 'Substantivos: gênero e número',
  objetivo: 'Reconhecer gênero e número dos substantivos hebraicos, usando terminações como pistas sem tratá-las como regras infalíveis e distinguindo singular, plural e dual.',
  topicosCobertos: [
    'Regras para a definição de gênero dos substantivos',
    'Categorias do substantivo quanto ao número',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Gênero é propriedade lexical e morfológica',
      paragrafos: [
        'O hebraico bíblico organiza os substantivos principalmente em masculino e feminino. Certas terminações, especialmente הָ־ e ת־ em muitas formas, frequentemente apontam para feminino; porém a forma externa não substitui a aprendizagem lexical. Há substantivos femininos sem essas terminações e substantivos cuja aparência pode induzir o iniciante ao erro.',
        'Por isso, o vocabulário deve ser aprendido junto com o gênero quando ele não é óbvio. O gênero importa porque afeta concordância com adjetivos, numerais, pronomes e formas verbais em etapas posteriores.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Número: três categorias que precisam ser distinguidas',
      itens: [
        'Singular: apresenta uma entidade ou um substantivo lexicalmente singular.',
        'Plural masculino: frequentemente usa a terminação ־ִים, embora haja exceções lexicais.',
        'Plural feminino: frequentemente usa ־וֹת, também com exceções.',
        'Dual: forma característica, frequentemente em ־ַיִם, usada sobretudo com pares naturais, medidas ou certas expressões lexicalizadas.',
        'A terminação ajuda, mas não é prova isolada de gênero; algumas palavras masculinas formam plural em ־וֹת e algumas femininas aparecem com ־ִים.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Morfologia e gênero não devem ser confundidos',
      paragrafos: [
        'A regra pedagógica correta é usar terminações como evidência, não como veredito. Quando forma e gênero lexical parecem divergir, a concordância no contexto e o léxico ajudam a confirmar a análise.',
        'O dual também não deve ser interpretado como uma categoria produtiva em todos os substantivos. Muitas ocorrências são lexicalizadas ou pertencem a campos específicos. Reconhecê-lo é mais importante neste estágio do que tentar gerar indiscriminadamente uma forma dual para qualquer palavra.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u11-a1',
      titulo: 'Atividade — usar terminações como pistas',
      enunciado: 'Um substantivo termina em ־וֹת. Um estudante conclui automaticamente que ele é feminino plural. Explique por que a conclusão é precipitada e como confirmá-la.',
      itens: ['Indique a pista fornecida pela terminação.', 'Explique por que há exceções.', 'Mostre que evidências adicionais devem ser consultadas.'],
      resposta: '־וֹת é uma terminação plural frequentemente associada a substantivos femininos, portanto é uma pista relevante. Contudo, há substantivos masculinos com esse plural. O gênero deve ser confirmado pelo léxico e, quando possível, pela concordância com adjetivos, pronomes ou verbos no contexto.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'O hebraico bíblico distingue masculino e feminino.',
        'Terminações ajudam a reconhecer gênero, mas têm exceções.',
        'O número inclui singular, plural e dual.',
        '־ִים e ־וֹת são padrões plurais frequentes, não garantias de gênero.',
        'Concordância e léxico confirmam a análise.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para gênero, singular, plural, dual e formas nominais irregulares.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática contextual de gênero e número em vocabulário frequente.' }
  ],
  atualizadoEm: '2026-09-10',
};
