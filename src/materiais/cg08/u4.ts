import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u4-disciplinas-filosofia-2',
  disciplina: 'CG08',
  unidade: 4,
  titulo: 'Disciplinas da Filosofia II',
  objetivo: 'Integrar filosofia política, filosofias do genitivo e lógica em problemas multidimensionais e distinguir descrição, explicação, inferência e normatividade.',
  topicosCobertos: ['Filosofia política', 'Filosofia do genitivo (da Ciência, da Religião, da Linguagem dentre outras)', 'Lógica'],
  blocos: [
    { tipo: 'texto', titulo: '1. Problemas reais atravessam mais de um ramo', paragrafos: [
      'Considere uma política pública que restringe reuniões religiosas durante uma emergência sanitária. A filosofia política pergunta por legitimidade, proporcionalidade e liberdade; a filosofia da ciência examina a qualidade da evidência usada para justificar a medida; a filosofia da religião esclarece o estatuto da prática religiosa afetada; a lógica avalia se as razões oferecidas sustentam a conclusão.',
      'Dividir a filosofia em áreas não fragmenta o problema. A divisão impede que uma resposta de um campo seja confundida com resposta suficiente para todos os demais.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro níveis que não devem ser confundidos', itens: [
      'Descrição: o que aconteceu ou é observado?',
      'Explicação: por que aconteceu?',
      'Inferência: o que se segue das premissas?',
      'Normatividade: o que deve ser feito ou considerado legítimo?'
    ] },
    { tipo: 'texto', titulo: '2. O papel crítico da filosofia', paragrafos: [
      'A filosofia é especialmente útil quando uma discussão mistura níveis sem perceber. Dados empíricos podem mostrar efeitos de uma política, mas não determinam sozinhos quais direitos podem ser limitados. Uma convicção religiosa pode ter autoridade para uma comunidade, mas ainda precisa ser expressa com clareza quando participa de debate público.',
      'Do ponto de vista reformado, essa análise não produz neutralidade última. Ela ajuda a identificar onde fatos, inferências e valores entram na argumentação, permitindo que pressupostos teológicos sejam assumidos com transparência.'
    ] },
    { tipo: 'atividade', id: 'cg08-u4-a1', titulo: 'Atividade — desmontar um argumento misto', enunciado: 'Analise a frase: “A ciência mostrou que determinada prática traz benefícios psicológicos; logo o Estado deve promovê-la”. Identifique pelo menos três passos filosóficos que ainda precisam ser justificados.', itens: ['Separe a evidência empírica da conclusão política.', 'Identifique a premissa normativa ausente.', 'Avalie a inferência.'], resposta: 'É preciso perguntar se a evidência realmente sustenta o benefício alegado, qual princípio normativo autoriza o Estado a promover tudo o que traz benefício psicológico e se existem direitos, custos ou alternativas relevantes. A conclusão política não decorre automaticamente da descrição científica.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Ramos filosóficos podem cooperar sem se confundir.', 'Descrição, explicação, inferência e normatividade são níveis distintos.', 'Dados não produzem deveres sem premissas normativas.', 'A análise filosófica torna pressupostos e transições argumentativas visíveis.'] }
  ],
  fontes: [
    { id: 'sep-filosofia-religiao', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Philosophy of Religion', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/philosophy-religion/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Exemplo de análise filosófica interdisciplinar aplicada à religião.' },
    { id: 'sep-aristotle-logic', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: "Aristotle's Logic", publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aristotle-logic/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência para estrutura argumentativa e inferência.' }
  ],
  atualizadoEm: '2026-09-10',
};
