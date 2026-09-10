import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u15-pos-modernidade',
  disciplina: 'TE12',
  unidade: 15,
  titulo: 'A Hermenêutica da Pós-Modernidade',
  objetivo: 'Avaliar criticamente ênfases pós-modernas sobre linguagem, poder, comunidade e localização do leitor, recebendo seus alertas legítimos sem reduzir o significado bíblico a construção relativa de comunidades interpretativas.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A pós-modernidade intensifica a suspeita contra neutralidade e totalização', paragrafos: [
      'Sob o rótulo amplo de pós-modernidade encontram-se autores e movimentos muito diferentes. Em comum, muitas abordagens questionam pretensões de neutralidade, chamam atenção para a relação entre conhecimento e poder e destacam que linguagem e interpretação acontecem em comunidades concretas. Para a leitura bíblica, isso tornou mais visíveis perguntas que intérpretes dominantes às vezes não faziam: quem está lendo, de qual posição social, com quais interesses e quais vozes foram ignoradas?',
      'Essas perguntas podem revelar pontos cegos reais. O problema começa quando a crítica da neutralidade é convertida na tese de que não existe significado capaz de julgar o leitor, apenas interpretações produzidas por perspectivas e relações de poder. Se toda afirmação de verdade for apenas efeito de uma posição, a própria crítica também perde um critério não arbitrário para dizer por que uma leitura opressiva é de fato errada.'
    ]},
    { tipo: 'quadro', titulo: 'O que receber e o que contestar', itens: [
      'Receber: leitores são situados e podem carregar vieses culturais, econômicos, étnicos e institucionais.',
      'Receber: interpretações podem ser usadas para legitimar poder e por isso precisam de exame moral e histórico.',
      'Receber: comunidades de leitura ajudam a expor pressupostos individuais invisíveis.',
      'Contestar: localização do leitor não implica que o texto não possua direção comunicativa própria.',
      'Contestar: pluralidade de interpretações não demonstra que todas sejam igualmente adequadas.',
      'Contestar: suspeita é uma ferramenta crítica, não uma hermenêutica suficiente para construir significado.'
    ]},
    { tipo: 'texto', titulo: '2. A resposta reformada não é voltar à fantasia do leitor neutro', paragrafos: [
      'Uma resposta reformada madura pode concordar que o pecado, a finitude e a cultura afetam leitores. Ela já possuía recursos teológicos para isso antes da pós-modernidade: efeitos noéticos do pecado, necessidade de iluminação, leitura eclesial e humildade diante da Escritura. O desacordo está em saber se há uma Palavra capaz de confrontar todos os horizontes, inclusive os nossos.',
      'Nesse sentido, a comunidade é necessária, mas não soberana; tradição é valiosa, mas não infalível; experiência é real, mas não cria a autoridade do texto. A Escritura pode ser interpretada por pessoas situadas porque comunicação humana é possível e porque, na confissão cristã, Deus escolheu realmente comunicar-se por ela.'
    ]},
    { tipo: 'atividade', id: 'te12-u15-a1', titulo: 'Atividade — suspeita e reconstrução', enunciado: 'Escolha uma interpretação bíblica usada historicamente para justificar uma prática de poder. Faça duas etapas: critique os interesses e pressupostos envolvidos e depois reconstrua a interpretação a partir do texto, em vez de encerrar a análise na suspeita.', itens: ['Identifique o possível viés do leitor.', 'Reexamine gramática, gênero e contexto.', 'Compare o resultado com o cânon.', 'Explique por que a crítica do poder não substitui a exegese.'], resposta: 'A suspeita pode revelar incentivos e silêncios importantes, mas não decide sozinha o significado. A reconstrução precisa mostrar por evidência textual por que a leitura anterior falhou e qual leitura explica melhor a passagem. Assim, a crítica moral permanece ligada a um critério exegético público e discutível.' },
    { tipo: 'quadro', titulo: 'Síntese do curso', itens: ['O leitor nunca é socialmente desencarnado.', 'Poder e tradição podem afetar interpretações.', 'A comunidade ajuda a corrigir pontos cegos, mas não cria a autoridade bíblica.', 'Pluralidade não implica relativismo inevitável.', 'A hermenêutica reformada combina humildade do intérprete, trabalho histórico-gramatical, unidade canônica e submissão à Escritura.'] }
  ],
  fontes: [
    { id: 'sep-postmodernism', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Postmodernism', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/postmodernism/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Panorama acadêmico dos principais movimentos e problemas associados ao pós-modernismo.' },
    { id: 'sep-critical-theory', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Critical Theory', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/critical-theory/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência para crítica social, poder e reflexividade do intérprete.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Contraponto confessional para autoridade, perspicuidade e interpretação da Escritura pela Escritura.' }
  ],
  atualizadoEm: '2026-09-10',
};
