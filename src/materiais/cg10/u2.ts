import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u2-sociedade-cultura-instituicoes',
  disciplina: 'CG10',
  unidade: 2,
  titulo: 'Sociedade e cultura: as instituições sociais',
  objetivo: 'Distinguir sociedade, cultura, organização e instituição social e analisar como instituições estruturam expectativas e oportunidades sem serem confundidas com normas bíblicas ou realidades imutáveis.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Ninguém começa a vida num mundo social vazio', paragrafos: [
      'Antes que uma criança escolha qualquer coisa, já existem língua, família, regras, moeda, escola, religião, divisão do trabalho e expectativas de comportamento. Sociedade designa a rede relativamente durável de relações entre pessoas e grupos; cultura inclui significados, conhecimentos, valores, símbolos e práticas que tornam esse mundo inteligível.',
      'A relação é recíproca: instituições carregam cultura e a cultura ganha estabilidade por meio de instituições. Por isso mudanças culturais podem transformar organizações, e mudanças institucionais podem alterar hábitos que pareciam naturais.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro conceitos que não devem ser confundidos', itens: [
      'Sociedade: conjunto organizado de relações e interdependências entre pessoas e grupos.',
      'Cultura: repertório aprendido de significados, símbolos, valores, práticas e conhecimentos.',
      'Instituição social: padrão durável de papéis, normas e práticas em torno de necessidades recorrentes, como família, educação, economia, religião e Estado.',
      'Organização: entidade concreta com membros, objetivos e estrutura, como uma escola, empresa, associação ou igreja local.'
    ] },
    { tipo: 'texto', titulo: '2. Instituições habilitam e limitam', paragrafos: [
      'Instituições tornam ações coordenadas possíveis: contratos, calendários escolares, formas de parentesco, sistemas monetários e procedimentos religiosos criam previsibilidade. Ao mesmo tempo, distribuem recursos, autoridade e oportunidades de modos que podem beneficiar alguns grupos mais que outros.',
      'Instituições não são forças mágicas separadas das pessoas. Elas persistem porque são incorporadas em regras, rotinas, sanções, edifícios, documentos e expectativas transmitidas entre gerações.'
    ] },
    { tipo: 'atividade', id: 'cg10-u2-a1', titulo: 'Atividade — separar fé, instituição e costume', enunciado: 'Escolha uma prática de uma igreja local — horário do culto, modo de receber visitantes ou organização de classes — e classifique quais elementos são doutrinários, institucionais, culturais ou apenas convenientes.', itens: ['Identifique a função da prática.', 'Pergunte se existe norma bíblica direta.', 'Identifique hábitos culturais e barreiras sociais possíveis.'], resposta: 'A resposta varia conforme a prática, mas deve distinguir o que a igreja considera normativo biblicamente do modo contingente como organiza essa norma. Um horário específico, por exemplo, pode ser decisão institucional prudencial e produzir efeitos sociais reais sem ser mandamento bíblico.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Sociedade e cultura são relacionadas, mas não idênticas.', 'Instituições são padrões sociais duráveis; organizações são entidades concretas.', 'Instituições coordenam a vida e também distribuem oportunidades e custos.', 'Tradição social não equivale automaticamente a norma teológica.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência aberta para sociedade, cultura, instituições e organizações.' }
  ],
  atualizadoEm: '2026-09-10',
};
