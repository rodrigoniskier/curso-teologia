import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u15-pronomes-demonstrativos',
  disciplina: 'TE04',
  unidade: 15,
  titulo: 'Pronomes demonstrativos',
  objetivo: 'Reconhecer e empregar as principais formas dos demonstrativos hebraicos, distinguindo gênero, número e usos substantivos e adjetivais em grupos nominais definidos.',
  topicosCobertos: [
    'Formas dos pronomes demonstrativos',
    'Emprego dos pronomes demonstrativos',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Demonstrativos também concordam',
      paragrafos: [
        'Os demonstrativos básicos de proximidade incluem זֶה para masculino singular, זֹאת para feminino singular e אֵלֶּה para plural. Eles podem funcionar de maneira substantiva, como “este/esta/estes”, ou acompanhar um substantivo, como em “este homem” e “esta palavra”.',
        'Quando o demonstrativo modifica um substantivo definido, a construção hebraica normalmente apresenta o substantivo com artigo e o demonstrativo em posição posterior. Isso difere da ordem mais comum do português, mas a análise deve seguir a estrutura hebraica antes de reorganizar a frase na tradução.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Formas e funções introdutórias',
      itens: [
        'זֶה — demonstrativo masculino singular de proximidade.',
        'זֹאת — demonstrativo feminino singular de proximidade.',
        'אֵלֶּה — demonstrativo plural, usado com referentes masculinos e femininos.',
        'Uso substantivo: o demonstrativo ocupa sozinho uma função nominal.',
        'Uso adjetival: acompanha um substantivo e concorda com ele em gênero e número; com substantivo definido, a definitude da construção precisa ser observada.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Posição e definitude ajudam a identificar a construção',
      paragrafos: [
        'O estudante já dispõe de três ferramentas que agora trabalham juntas: artigo definido, concordância e posição. Em uma expressão definida, o demonstrativo pós-nominal não deve ser confundido com predicado apenas porque aparece depois do substantivo; sua relação com a definitude e com o padrão demonstrativo precisa ser considerada.',
        'Essa integração fecha Hebraico 1. A meta não é independência exegética completa, mas domínio seguro do sistema gráfico, das partículas iniciais e da morfologia nominal básica. Hebraico 2 poderá então introduzir construto, sufixos e sistema verbal sem exigir que o aluno reaprenda a leitura elementar.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u15-a1',
      titulo: 'Atividade — fechar o ciclo nominal',
      enunciado: 'Explique como identificar um demonstrativo que acompanha um substantivo definido e por que sua posição posterior não deve ser traduzida mecanicamente na mesma ordem.',
      itens: ['Reconheça a forma demonstrativa.', 'Verifique gênero/número e definitude.', 'Explique a reorganização legítima na tradução.'],
      resposta: 'Primeiro identifica-se o demonstrativo e verifica-se sua concordância com o substantivo. Se o substantivo estiver definido e a construção corresponder ao padrão adjetival, a relação é “este/esta + substantivo”, embora o demonstrativo apareça depois do substantivo em hebraico. A tradução pode reordenar os termos para o português sem alterar a função gramatical.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese de Hebraico 1',
      itens: [
        'Demonstrativos básicos distinguem masculino singular, feminino singular e plural.',
        'Podem funcionar substantiva ou adjetivalmente.',
        'Concordância, definitude e posição identificam a construção.',
        'A ordem hebraica não precisa ser copiada mecanicamente em português.',
        'Com U15, o estudante possui a base gráfica e nominal necessária para iniciar Hebraico 2.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para formas e emprego sintático dos demonstrativos.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática contextual de demonstrativos e grupos nominais definidos.' }
  ],
  atualizadoEm: '2026-09-10',
};
