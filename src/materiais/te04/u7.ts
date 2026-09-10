import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u7-artigo-definido',
  disciplina: 'TE04',
  unidade: 7,
  titulo: 'O artigo definido',
  objetivo: 'Reconhecer e aplicar as regras básicas do artigo definido hebraico, incluindo sua assimilação gráfica e os ajustes causados por guturais.',
  topicosCobertos: ['Regras para o uso do artigo definido'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O artigo hebraico é prefixado à palavra',
      paragrafos: [
        'O artigo definido hebraico não aparece como palavra independente equivalente a “o, a, os, as”. Ele se liga ao início do substantivo ou adjetivo. A forma pedagógica básica é הַ־ seguida de duplicação da primeira consoante da palavra por daguesh forte.',
        'Assim, a análise precisa separar forma gráfica e função: o prefixo marca definitude, enquanto o daguesh indica a assimilação histórica de um elemento consonantal do artigo. Quando a primeira consoante não aceita daguesh forte, especialmente diante de guturais, a vocalização se ajusta.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Padrão básico e variações previsíveis',
      itens: [
        'Diante de consoante regular: artigo com הַ־ e daguesh forte na consoante inicial.',
        'Diante de gutural: o daguesh esperado não aparece e pode ocorrer compensação vocálica.',
        'A presença do artigo torna definido o substantivo e também participa da concordância em grupos nominais.',
        'Nomes próprios normalmente já são definidos por natureza e não exigem artigo para serem identificados como entidades específicas.',
        'A ausência do artigo não significa automaticamente indefinição sem considerar sintaxe, nomes próprios, sufixos pronominais e estado construto.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O artigo ajuda a ler relações, não apenas palavras',
      paragrafos: [
        'Em um grupo como “o homem bom”, a concordância de definitude entre substantivo e adjetivo contribui para identificar o uso atributivo. Em outras construções, a presença ou ausência do artigo no adjetivo pode alterar a análise sintática. Por isso esta unidade prepara diretamente o estudo posterior do uso atributivo e predicativo dos adjetivos.',
        'O estudante deve resistir a duas simplificações: traduzir todo הַ־ mecanicamente por “o” e presumir que todo substantivo sem artigo seja indefinido. A forma hebraica oferece uma pista gramatical importante, mas a tradução final depende da construção completa.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u7-a1',
      titulo: 'Atividade — reconhecer o artigo em contexto',
      enunciado: 'Explique por que a ausência de daguesh forte depois do artigo diante de uma gutural não elimina a definitude da expressão.',
      itens: ['Identifique a regra regular do artigo.', 'Explique a restrição da gutural.', 'Indique qual informação sintática permanece.'],
      resposta: 'A regra regular associa הַ־ à duplicação da primeira consoante. Guturais normalmente não recebem daguesh forte, então a língua compensa por alteração vocálica. A função do morfema permanece: o grupo nominal continua marcado como definido apesar da ausência do ponto de duplicação.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'O artigo definido é prefixado.',
        'Seu padrão regular inclui הַ־ e daguesh forte na consoante seguinte.',
        'Guturais provocam ajustes previsíveis.',
        'Definitude participa da sintaxe do grupo nominal.',
        'Forma e tradução não devem ser confundidas mecanicamente.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para artigo definido, assimilação consonantal e variações diante de guturais.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática complementar de reconhecimento do artigo em vocabulário e frases simples.' }
  ],
  atualizadoEm: '2026-09-10',
};
