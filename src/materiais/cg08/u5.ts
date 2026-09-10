import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u5-metafisica-1',
  disciplina: 'CG08',
  unidade: 5,
  titulo: 'Metafísica I',
  objetivo: 'Definir metafísica e explicar os conceitos aristotélicos de substância, forma e matéria, ato e potência e causalidade como instrumentos para pensar mudança e identidade.',
  topicosCobertos: ['Definição e introdução à metafísica', 'Metafísica aristotélica'],
  blocos: [
    { tipo: 'texto', titulo: '1. Metafísica pergunta pelo que há e pelo modo de ser', paragrafos: ['Metafísica investiga existência, identidade, causalidade, propriedades, tempo, possibilidade e necessidade. Não é sinônimo de sobrenaturalismo: perguntar se pessoas permanecem as mesmas ao longo da mudança já é uma questão metafísica.', 'Aristóteles chamou esse nível de investigação de primeira filosofia e de estudo do ser enquanto ser: não uma ciência de um objeto especial, mas dos princípios mais gerais aplicáveis ao que existe.'] },
    { tipo: 'quadro', titulo: 'Distinções aristotélicas centrais', itens: ['Substância: aquilo que existe de modo primário e é sujeito de propriedades.', 'Matéria e forma: do que algo é constituído e o princípio pelo qual é este tipo de coisa.', 'Potência e ato: capacidade real e sua realização.', 'Quatro causas: material, formal, eficiente e final — respostas diferentes à pergunta “por quê?”.'] },
    { tipo: 'texto', titulo: '2. Ferramenta filosófica não é revelação', paragrafos: ['Categorias aristotélicas influenciaram profundamente a teologia cristã, mas não são equivalentes à doutrina bíblica. A criação, o Deus trino e a providência não são simples extensões da Metafísica de Aristóteles.', 'A postura reformada pode usar distinções filosóficas quando esclarecem um problema, desde que elas não se tornem um quadro obrigatório capaz de corrigir ou limitar a revelação.'] },
    { tipo: 'atividade', id: 'cg08-u5-a1', titulo: 'Atividade — explicar mudança sem perder identidade', enunciado: 'Uma árvore cresce de uma muda para uma planta adulta. Use ato/potência e matéria/forma para explicar por que mudança não implica que qualquer coisa possa tornar-se qualquer coisa.', itens: ['Identifique uma potência real.', 'Mostre a passagem ao ato.', 'Explique por que a identidade não é puro acaso.'], resposta: 'A muda possui capacidades reais próprias de seu tipo de organismo; crescer realiza algumas dessas potências. A matéria muda continuamente, mas a organização e a forma do ser vivo estruturam a continuidade. As categorias mostram que mudança pressupõe possibilidades delimitadas e algum princípio de identidade.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Metafísica investiga as estruturas mais gerais da realidade.', 'Aristóteles explica mudança por ato e potência.', 'Matéria e forma ajudam a pensar constituição e identidade.', 'As quatro causas são tipos de explicação, não quatro eventos concorrentes.'] }
  ],
  fontes: [
    { id: 'sep-aristotle-metaphysics', autor: 'Stanford Encyclopedia of Philosophy', ano: '2025', titulo: 'Aristotle’s Metaphysics', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aristotle-metaphysics/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência acadêmica para a metafísica aristotélica.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Contraponto confessional para Criador, criação e providência.' }
  ],
  atualizadoEm: '2026-09-10',
};
