import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u1-antropologia-religiao',
  disciplina: 'CG11',
  unidade: 1,
  titulo: 'Significado, história e objeto da antropologia, com especial referência à religião',
  objetivo: 'Compreender o objeto e os métodos da antropologia e distinguir descrição cultural, explicação antropológica e avaliação teológica das práticas religiosas.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. O que a antropologia investiga', paragrafos: [
      'A antropologia estuda seres humanos em sociedade, seus modos aprendidos de viver e os significados atribuídos a parentesco, economia, linguagem, arte, política e religião. Seu objeto não é apenas o costume visível, mas a rede de sentidos que torna esse costume inteligível para quem o pratica.',
      'Na antropologia da religião, o primeiro dever metodológico é descrever uma crença ou prática de modo reconhecível por seus próprios participantes. Essa precisão não implica concordância: ela impede que a crítica seja dirigida a uma caricatura.'
    ] },
    { tipo: 'quadro', titulo: 'Métodos e perspectivas', itens: [
      'Observação de campo: registrar práticas no contexto em que ocorrem.',
      'Entrevista: ouvir as categorias usadas pelos próprios participantes.',
      'Perspectiva êmica: como o fenômeno é compreendido por quem está dentro do grupo.',
      'Perspectiva ética/analítica: categorias comparativas usadas pelo pesquisador.',
      'Comparação: identificar semelhanças e diferenças sem presumir uma escala automática de superioridade cultural.'
    ] },
    { tipo: 'texto', titulo: '2. Da antropologia de gabinete ao trabalho de campo', paragrafos: [
      'Autores do século XIX, como Edward Tylor e James Frazer, organizaram grandes coleções de relatos e propuseram sequências universais para a evolução da religião. Essas hipóteses tiveram enorme importância histórica, mas o desenvolvimento do trabalho de campo mostrou que as trajetórias religiosas reais não obedecem a uma única escada linear.',
      'Para uma perspectiva reformada, Romanos 1 pode explicar teologicamente a relação humana com a revelação e a idolatria, mas não deve ser transformado em uma cronologia etnográfica de todos os povos. Teologia e antropologia respondem perguntas distintas e podem dialogar sem confundir seus métodos.'
    ] },
    { tipo: 'atividade', id: 'cg11-u1-a1', titulo: 'Atividade — descrever antes de julgar', enunciado: 'Escolha uma prática religiosa que você não compartilha e formule uma descrição que um praticante bem informado aceitaria como correta antes de apresentar qualquer avaliação teológica.', itens: ['Identifique o significado atribuído pelos participantes.', 'Separe descrição de avaliação.', 'Liste quais dados ainda precisariam ser investigados.'], resposta: 'Uma boa resposta evita rótulos depreciativos, registra o significado interno da prática e deixa a avaliação normativa para um segundo momento. O objetivo é demonstrar compreensão antes de concordar ou refutar.' }
  ],
  fontes: [
    { id: 'tylor-primitive', autor: 'Edward Burnett Tylor', ano: '1871', titulo: 'Primitive Culture', publicacao: 'Internet Archive', url: 'https://archive.org/details/primitiveculture01tylouoft', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte primária para a história da antropologia cultural e da religião.' },
    { id: 'frazer-golden-bough', autor: 'James George Frazer', ano: '1890', titulo: 'The Golden Bough', publicacao: 'Internet Archive', url: 'https://archive.org/details/cu31924021569128', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte primária para a história das teorias evolucionistas da religião.' }
  ],
  atualizadoEm: '2026-09-14',
};
