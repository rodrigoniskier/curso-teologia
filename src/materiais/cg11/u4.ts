import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u4-grupos-religiosos',
  disciplina: 'CG11',
  unidade: 4,
  titulo: 'Caracterização antropológica dos grupos religiosos',
  objetivo: 'Descrever comparativamente grupos religiosos presentes no Brasil sem confundir descrição antropológica, classificação censitária e avaliação teológica.',
  topicosCobertos: ['ICAR (formal e popular)', 'Igrejas tradicionais protestantes', 'Grupos neopentecostais', 'Grupos espíritas e afros'],
  blocos: [
    { tipo: 'texto', titulo: '1. Caracterizar não é homogeneizar', paragrafos: [
      'Grupos religiosos são internamente diversos. Uma categoria censitária ou histórica pode reunir pessoas com intensidades de prática, doutrinas, lideranças e experiências muito diferentes. A antropologia evita tratar o rótulo como descrição completa da pessoa.',
      'A caracterização responsável combina três níveis: instituições formais e suas doutrinas declaradas; práticas populares efetivamente vividas; e modos de pertencimento, autoridade, ritual e comunidade observáveis no cotidiano.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro conjuntos pedidos pela ementa', itens: [
      'ICAR, formal e popular: distinguir doutrina e organização católica oficiais de devoções, promessas, festas, peregrinações e práticas locais, sem pressupor que todo católico participe de todas elas.',
      'Igrejas tradicionais protestantes: observar centralidade da pregação, Escritura, comunidades locais, confissões ou tradições denominacionais e formas históricas de organização, reconhecendo diferenças internas entre denominações.',
      'Grupos neopentecostais: descrever ênfases, estilos de culto, liderança, mídia, cura, prosperidade ou batalha espiritual quando presentes, sem presumir que todo grupo use os mesmos elementos do mesmo modo.',
      'Grupos espíritas e afros: distinguir espiritismo kardecista de religiões de matriz africana e, dentro destas, tradições diversas como candomblé e umbanda; categorias externas não substituem a autodescrição dos participantes.'
    ] },
    { tipo: 'texto', titulo: '2. Dados nacionais são mapa, não retrato de cada pessoa', paragrafos: [
      'O Censo Demográfico 2022 permite observar mudanças de composição religiosa por idade, território e outras variáveis. Ele é útil para dimensionar populações e tendências, mas não explica sozinho por que alguém crê, deixa de crer ou participa de determinada tradição.',
      'O método antropológico completa a estatística com observação, história, entrevistas e descrição interna. Percentuais mostram distribuição; etnografia ajuda a compreender significado.'
    ] },
    { tipo: 'atividade', id: 'cg11-u4-a1', titulo: 'Atividade — descrição sem caricatura', enunciado: 'Escolha um dos grupos da unidade e produza uma descrição de 150 palavras baseada em autodescrição institucional e dados verificáveis, evitando linguagem depreciativa ou apologética.', itens: ['Registre a categoria usada pelo próprio grupo.', 'Distinga instituição formal e prática popular.', 'Indique pelo menos uma diversidade interna.'], resposta: 'A resposta deve ser reconhecível por um participante informado do grupo, ainda que o aluno depois faça avaliação teológica distinta. Precisão descritiva é condição de diálogo e crítica responsável.' }
  ],
  fontes: [
    { id: 'ibge-censo2022-religioes', autor: 'Instituto Brasileiro de Geografia e Estatística', ano: '2025', titulo: 'Censo Demográfico 2022 — Religiões: resultados preliminares da amostra', publicacao: 'IBGE / SIDRA', url: 'https://sidra.ibge.gov.br/pesquisa/censo-demografico/demografico-2022/amostra-religioes', idioma: 'pt', tipo: 'relatorio', acesso: 'livre', nota: 'Fonte oficial para composição religiosa brasileira e recortes demográficos.' },
    { id: 'tylor-primitive', autor: 'Edward Burnett Tylor', ano: '1871', titulo: 'Primitive Culture', publicacao: 'Internet Archive', url: 'https://archive.org/details/primitiveculture01tylouoft', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte histórica para a formação da antropologia da religião, usada criticamente.' }
  ],
  atualizadoEm: '2026-09-24',
};
