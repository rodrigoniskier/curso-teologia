import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u3-normas-sociais',
  disciplina: 'CG10',
  unidade: 3,
  titulo: 'As normas sociais e a sociedade',
  objetivo: 'Identificar normas sociais formais e informais, compreender como sanções sustentam expectativas coletivas e distinguir descrição sociológica de avaliação moral ou teológica dessas normas.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Regras sociais nem sempre estão escritas', paragrafos: [
      'Uma sociedade coordena comportamento por leis e regulamentos, mas também por expectativas que quase nunca aparecem em documentos. Maneiras de vestir, falar, chegar no horário, ocupar espaços, demonstrar respeito ou discordar podem ser reguladas informalmente e percebidas com nitidez quando alguém as viola.',
      'Norma social é uma expectativa compartilhada sobre comportamento adequado, esperado ou proibido. Ela pode ser formal ou informal e costuma ser sustentada por sanções positivas ou negativas: aprovação, prestígio, constrangimento, exclusão, multa ou punição jurídica.'
    ] },
    { tipo: 'quadro', titulo: 'Norma, valor e sanção', itens: [
      'Valor: ideal ou princípio valorizado por um grupo, como lealdade, eficiência ou honra.',
      'Norma: expectativa concreta que orienta comportamento em determinado contexto.',
      'Sanção: resposta social que recompensa conformidade ou pune transgressão.',
      'Internalização: processo pelo qual uma regra passa a ser percebida pelo indivíduo como natural ou evidente.'
    ] },
    { tipo: 'texto', titulo: '2. Descrever uma norma não é legitimá-la', paragrafos: [
      'A Sociologia pode mostrar que uma norma existe, quem a aplica e quais efeitos produz. Isso não prova que ela seja justa. Sociedades podem normalizar discriminação, corrupção ou violência; também podem criar regras prudenciais úteis que não possuem estatuto moral absoluto.',
      'No contexto eclesiástico, a distinção evita confundir “sempre fizemos assim” com “Deus ordenou assim”. O pesquisador primeiro identifica a expectativa social e seu funcionamento; a avaliação teológica pergunta depois se ela é fiel, prudente, indiferente ou pecaminosa.'
    ] },
    { tipo: 'atividade', id: 'cg10-u3-a1', titulo: 'Atividade — descobrir uma norma invisível', enunciado: 'Descreva uma norma informal presente em uma instituição que você conhece. Identifique a expectativa, a sanção e quem é mais afetado quando ela é violada.', itens: ['A norma está escrita?', 'Como novos membros aprendem essa regra?', 'Que sanções positivas ou negativas existem?', 'A descrição sociológica já basta para dizer se a regra é justa?'], resposta: 'A resposta deve mostrar uma expectativa observável e os mecanismos que a sustentam. A última pergunta deve ser respondida negativamente: existência e eficácia social não equivalem a legitimidade moral.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Normas podem ser formais ou informais.', 'Sanções tornam expectativas socialmente eficazes.', 'Normas podem ser internalizadas e parecer naturais.', 'Descrever sociologicamente uma norma não é aprová-la moralmente.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Livro-texto aberto para cultura, normas, socialização e controle social.' }
  ],
  atualizadoEm: '2026-09-10',
};
