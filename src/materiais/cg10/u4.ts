import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u4-estratificacao-social',
  disciplina: 'CG10',
  unidade: 4,
  titulo: 'A estratificação social',
  objetivo: 'Compreender estratificação como desigualdade social estruturada, distinguindo diferença, classe, status, mobilidade e mecanismos de reprodução sem reduzir pessoas a sua posição social nem moralizar dados antes de analisá-los.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Diferença não é automaticamente desigualdade', paragrafos: [
      'Sociedades contêm inúmeras diferenças entre pessoas. A estratificação começa quando diferenças se organizam de modo relativamente persistente em posições desiguais de acesso a renda, patrimônio, escolaridade, prestígio, poder, segurança e oportunidades.',
      'Por isso, a análise sociológica não pergunta apenas quem possui mais, mas como vantagens e desvantagens são distribuídas, transmitidas e justificadas. O foco é o padrão, não a condenação automática de cada indivíduo situado nele.'
    ] },
    { tipo: 'quadro', titulo: 'Categorias essenciais', itens: [
      'Classe social: posição relacionada a recursos econômicos, trabalho e oportunidades, definida de maneiras diferentes por distintas tradições sociológicas.',
      'Status: prestígio ou posição social reconhecida, que não coincide sempre com renda.',
      'Mobilidade social: deslocamento entre posições de estratificação ao longo da vida ou entre gerações.',
      'Desigualdade de oportunidades: diferenças sistemáticas nas condições de acesso a bens e trajetórias sociais.'
    ] },
    { tipo: 'texto', titulo: '2. Estrutura e responsabilidade pessoal', paragrafos: [
      'Reconhecer estruturas não elimina agência individual. Duas pessoas podem responder de modos diferentes às mesmas condições; ao mesmo tempo, escolhas semelhantes podem ter custos muito diferentes quando recursos, redes e instituições não são igualmente acessíveis.',
      'Uma leitura cristã responsável evita dois atalhos: explicar toda desigualdade como simples mérito ou culpa individual e, no extremo oposto, apagar completamente a responsabilidade pessoal. A Sociologia descreve mecanismos sociais; o juízo moral exige argumentos adicionais.'
    ] },
    { tipo: 'atividade', id: 'cg10-u4-a1', titulo: 'Atividade — diferença ou estratificação?', enunciado: 'Analise uma comunidade em que membros com automóvel participam muito mais de reuniões noturnas que membros dependentes de dois ônibus. Explique o que precisaria ser investigado antes de interpretar a diferença como falta de compromisso.', itens: ['Identifique barreiras materiais.', 'Diferencie correlação de causa.', 'Indique que dados comparativos seriam úteis.'], resposta: 'É necessário examinar tempo e custo de deslocamento, horários de transporte, distância, jornada de trabalho, segurança e alternativas oferecidas. A associação entre presença e transporte não prova causa isolada, mas pode revelar uma barreira estrutural que deve ser considerada antes de qualquer julgamento moral.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Estratificação é desigualdade estruturada e persistente.', 'Renda, prestígio, poder, escolaridade e território podem se combinar.', 'Estrutura condiciona possibilidades sem abolir agência.', 'Descrição sociológica e juízo moral são operações distintas.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para estratificação, classe, desigualdade e mobilidade social.' }
  ],
  atualizadoEm: '2026-09-10',
};
