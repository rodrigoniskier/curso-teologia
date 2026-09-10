import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u7-grupos-agregados-sociais',
  disciplina: 'CG10',
  unidade: 7,
  titulo: 'Os grupos e agregados sociais',
  objetivo: 'Distinguir grupos sociais de agregados e categorias, reconhecer grupos primários, secundários e de referência e aplicar essas distinções à análise de comunidades e organizações.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Estar junto não é o mesmo que pertencer', paragrafos: [
      'Pessoas podem estar fisicamente próximas sem formar um grupo. Passageiros em uma plataforma constituem um agregado enquanto apenas compartilham circunstancialmente um espaço. Um grupo social envolve interação relativamente estável, reconhecimento mútuo, expectativas e algum grau de identidade compartilhada.',
      'Uma categoria social é ainda diferente: reúne analiticamente pessoas que compartilham uma característica, embora talvez nunca interajam entre si. “Pessoas de 18 a 24 anos” pode ser uma categoria estatística sem constituir um grupo.'
    ] },
    { tipo: 'quadro', titulo: 'Tipos úteis para análise', itens: [
      'Agregado: reunião circunstancial em um lugar, sem vínculo estável necessário.',
      'Categoria social: conjunto definido por uma característica comum para fins analíticos.',
      'Grupo primário: relações próximas, pessoais e duráveis, como família e amizade.',
      'Grupo secundário: relações mais orientadas por função, tarefa ou organização.',
      'Grupo de referência: grupo cujos padrões servem de comparação para a pessoa, mesmo sem pertença formal.'
    ] },
    { tipo: 'texto', titulo: '2. Presença não mede automaticamente integração', paragrafos: [
      'Uma congregação reunida no domingo não é apenas uma soma de indivíduos presentes. Dentro dela podem coexistir grupos primários, equipes funcionais, redes de amizade, grupos de referência e pessoas que permanecem socialmente periféricas apesar de frequentarem regularmente.',
      'Por isso, contar presença é importante, mas insuficiente para avaliar integração. É necessário observar interação, reciprocidade, participação e acesso real às redes de pertencimento.'
    ] },
    { tipo: 'atividade', id: 'cg10-u7-a1', titulo: 'Atividade — presença e pertencimento', enunciado: 'Uma igreja recebe vinte visitantes por mês, mas quase nenhum continua após três meses. Proponha três indicadores sociológicos, além da frequência ao culto, que ajudariam a investigar o fenômeno.', itens: ['Observe interação.', 'Observe inserção em redes.', 'Observe barreiras institucionais.'], resposta: 'Podem ser examinados vínculos formados após a visita, participação em pequenos grupos ou atividades, contato posterior, clareza das normas informais, acessibilidade de horários e percepção de acolhimento. Esses dados não substituem avaliação pastoral, mas ajudam a localizar possíveis barreiras de integração.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Agregado, categoria e grupo são conceitos distintos.', 'Grupos primários e secundários cumprem funções diferentes.', 'Grupos de referência influenciam identidade e avaliação.', 'Presença física não equivale necessariamente a pertencimento social.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para grupos, organizações, redes e interação social.' }
  ],
  atualizadoEm: '2026-09-10',
};
