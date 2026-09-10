import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u10-substantivos-derivacao',
  disciplina: 'TE04',
  unidade: 10,
  titulo: 'Substantivos: derivação',
  objetivo: 'Classificar substantivos hebraicos por derivação em nível introdutório, reconhecendo relações entre raízes, padrões nominais e formas lexicalizadas sem presumir que toda etimologia determine o significado em contexto.',
  topicosCobertos: ['Classificação dos substantivos por derivação'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Forma relacionada não significa significado automático',
      paragrafos: [
        'Muitos substantivos hebraicos podem ser relacionados a raízes verbais ou a outros elementos lexicais. Em gramáticas introdutórias é comum distinguir substantivos primitivos, derivados e compostos. Essa classificação ajuda a perceber padrões morfológicos, mas não autoriza deduzir o significado de uma palavra apenas pela raiz que parece estar por trás dela.',
        'O hebraico, como qualquer língua, lexicaliza palavras: ao longo do uso, um substantivo pode adquirir um campo semântico próprio. A raiz oferece uma pista histórica ou morfológica; o contexto e o léxico continuam necessários para estabelecer o sentido real da ocorrência.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Classificação introdutória',
      itens: [
        'Primitivos: formas tratadas sincronicamente como bases lexicais simples no nível do curso.',
        'Derivados: substantivos cuja forma pode ser relacionada de maneira reconhecível a uma raiz ou padrão derivacional.',
        'Compostos ou formações complexas: unidades construídas pela combinação de elementos que funcionam juntas como expressão lexical.',
        'Padrões vocálicos e consonantais podem participar da formação nominal, mas o iniciante não deve transformar todo padrão em regra sem exceção.',
        'Etimologia e significado contextual são perguntas relacionadas, não idênticas.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A raiz é uma ferramenta de análise, não uma chave secreta',
      paragrafos: [
        'Uma falha frequente na exegese popular é imaginar que todas as palavras construídas com as mesmas consoantes radicais carregam necessariamente um “sentido profundo” comum. Isso confunde parentesco lexical com identidade semântica. Palavras cognatas podem divergir muito de uso e valor.',
        'O procedimento responsável é identificar a forma, consultar o lema, observar possíveis relações derivacionais e então verificar o uso da palavra em frases reais. Essa ordem protege o estudante contra a chamada falácia da raiz, na qual a história de uma palavra é tratada como se fosse seu significado atual.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u10-a1',
      titulo: 'Atividade — derivação sem falácia etimológica',
      enunciado: 'Um estudante descobre que dois substantivos compartilham consoantes de uma mesma raiz e conclui que devem ter exatamente o mesmo significado teológico. Avalie o raciocínio.',
      itens: ['Identifique o valor real da relação derivacional.', 'Explique o erro semântico.', 'Indique o procedimento correto.'],
      resposta: 'A relação derivacional pode ajudar a classificar a formação das palavras e sugerir parentesco lexical. Ela não prova identidade de significado. É necessário consultar o lema, o campo semântico e as ocorrências em contexto antes de formular uma conclusão exegética.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Substantivos podem ser classificados como primitivos, derivados e formações complexas.',
        'Raízes e padrões ajudam a reconhecer relações morfológicas.',
        'Parentesco formal não garante identidade semântica.',
        'O significado deve ser demonstrado pelo uso em contexto.',
        'A análise derivacional prepara a morfologia sem substituir o léxico.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para formação e classificação morfológica de substantivos.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Exposição complementar a vocabulário e padrões nominais em contexto.' }
  ],
  atualizadoEm: '2026-09-10',
};
