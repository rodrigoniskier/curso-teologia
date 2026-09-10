import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u9-hermeneutica-medieval',
  disciplina: 'TE12',
  unidade: 9,
  titulo: 'A Hermenêutica no Período da Idade Média',
  objetivo: 'Explicar a consolidação medieval dos sentidos literal e espirituais, a quadriga e o papel crescente da tradição e da teologia escolástica, distinguindo riqueza teológica de controle exegético.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A quadriga organizou uma herança mais antiga', paragrafos: [
      'A Idade Média não inventou a leitura espiritual da Escritura, mas sistematizou práticas herdadas da patrística. Tornou-se comum falar em quatro sentidos: literal ou histórico, alegórico, tropológico ou moral e anagógico ou escatológico. A fórmula oferecia ao intérprete uma maneira de relacionar narrativa bíblica, doutrina, vida moral e esperança futura.',
      'O mérito do sistema é perceber que a Escritura forma crença, vida e esperança e que o cânon possui unidade teológica. Seu risco estrutural aparece quando os sentidos espirituais se tornam independentes do que a passagem efetivamente comunica. Quanto menos controlada pelo sentido textual, mais a interpretação depende de uma autoridade externa para decidir quais associações são aceitáveis.'
    ]},
    { tipo: 'quadro', titulo: 'Os quatro sentidos em sua função clássica', itens: [
      'Literal: aquilo que o texto narra ou afirma em seu nível histórico-literário.',
      'Alegórico: relação com Cristo, a igreja ou doutrina cristã.',
      'Tropológico: formação moral do crente.',
      'Anagógico: realidade futura e esperança escatológica.',
      'O problema não é reconhecer doutrina, ética e escatologia no cânon; é fazê-las nascer sem controle do sentido textual.'
    ]},
    { tipo: 'texto', titulo: '2. Escolástica e exegese não são sinônimos de abandono da Bíblia', paragrafos: [
      'A teologia escolástica desenvolveu métodos de distinção, objeção e resposta que podiam aumentar a precisão conceitual. Comentários medievais também preservaram conhecimento textual e patrístico. Portanto, descrever todo o período como “Bíblia esquecida” é historicamente inadequado.',
      'A crítica reformada dirige-se sobretudo à hierarquia de autoridades e à multiplicação de sentidos normativos. O retorno ao sensus literalis e às línguas originais não surgiu em vazio: também foi favorecido pelo humanismo renascentista e por movimentos medievais de renovação textual.'
    ]},
    { tipo: 'atividade', id: 'te12-u9-a1', titulo: 'Atividade — testar a quadriga', enunciado: 'Escolha uma passagem narrativa e imagine uma leitura moral legítima. Explique como essa aplicação pode ser preservada sem transformá-la em um segundo sentido independente do texto.', itens: ['Defina o sentido histórico-literário.', 'Formule a aplicação moral.', 'Mostre como a aplicação deriva do sentido em vez de competir com ele.'], resposta: 'A aplicação moral é legítima quando surge de uma verdade, padrão ou exigência demonstrável na passagem e em seu contexto canônico. Ela não precisa ser tratada como um significado oculto paralelo. Assim, preserva-se a capacidade formativa da Escritura sem romper o vínculo entre aplicação e exegese.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A quadriga organiza quatro sentidos tradicionais.', 'Ela preserva preocupações doutrinárias, morais e escatológicas reais.', 'Seu risco é tornar sentidos espirituais independentes do texto.', 'A escolástica medieval também trouxe precisão e preservação intelectual.', 'A Reforma herdará e criticará esse mundo, não começará do zero.'] }
  ],
  fontes: [
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'História clássica dos métodos interpretativos e crítica da multiplicidade de sentidos.' },
    { id: 'ccel', autor: 'Vários', ano: '—', titulo: 'Christian Classics Ethereal Library', publicacao: 'CCEL', url: 'https://www.ccel.org/', idioma: 'en', tipo: 'acervo', acesso: 'livre', nota: 'Acervo de textos medievais e patrísticos em domínio público para leitura histórica complementar.' }
  ],
  atualizadoEm: '2026-09-10',
};
