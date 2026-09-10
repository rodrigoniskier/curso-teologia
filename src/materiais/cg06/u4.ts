import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg06-u4-etapas-trabalho-cientifico',
  disciplina: 'CG06',
  unidade: 4,
  titulo: 'Etapas do trabalho científico: tema, problema e objetivos',
  objetivo: 'Transformar um assunto amplo em problema pesquisável e formular objetivo geral e objetivos específicos que correspondam ao problema, ao corpus e ao método disponíveis.',
  topicosCobertos: ['Escolha do tema; definição do problema; determinação dos objetivos da pesquisa'],
  blocos: [
    { tipo: 'texto', titulo: '1. Tema não é problema de pesquisa', paragrafos: [
      '“Justificação”, “missões” ou “liberdade religiosa” são áreas temáticas, não perguntas de pesquisa. Um trabalho começa a ganhar forma quando o tema é recortado por objeto, corpus, população, período, lugar ou relação conceitual e então convertido em pergunta que admite investigação real.',
      'O problema precisa ser suficientemente aberto para que a pesquisa tenha algo a descobrir e suficientemente delimitado para que possa ser respondido com o tempo e as fontes disponíveis. Uma pergunta cuja resposta já foi embutida na formulação produz confirmação; uma pergunta ampla demais produz resumo enciclopédico.'
    ] },
    { tipo: 'quadro', titulo: 'Do assunto ao problema', itens: [
      'Assunto: liberdade religiosa.',
      'Tema delimitado: revisão da Confissão de Westminster de 1788 sobre o magistrado civil.',
      'Corpus: CFW XXIII.3 nas redações de 1647 e 1788, documentos históricos e literatura acadêmica pertinente.',
      'Problema: quais mudanças textuais e pressupostos eclesiopolíticos distinguem a revisão de 1788 da formulação de 1647?',
      'Resultado esperado: uma resposta demonstrada pelas fontes, não uma conclusão presumida antes da investigação.'
    ] },
    { tipo: 'texto', titulo: '2. Objetivos são ações intelectuais verificáveis', paragrafos: [
      'O objetivo geral expressa o que a pesquisa fará para responder ao problema. Objetivos específicos decompõem esse percurso em etapas necessárias e logicamente ordenadas. Verbos vagos como “conhecer”, “entender” ou “conscientizar” são difíceis de verificar; verbos como identificar, comparar, descrever, analisar, avaliar e correlacionar tornam o produto esperado mais claro.',
      'Objetivos não são capítulos decorados. Cada objetivo específico deve produzir informação necessária à resposta final. Se um objetivo não contribui para o problema, deve ser retirado; se a conclusão depende de uma análise que não aparece nos objetivos e no método, o projeto está incompleto.'
    ] },
    { tipo: 'texto', titulo: '3. Viabilidade e revisão preliminar', paragrafos: [
      'Antes de fixar definitivamente o problema, faça pesquisa preliminar. Verifique se as fontes existem, se estão acessíveis, em que idiomas se encontram, que debates já foram travados e se a pergunta cabe no prazo. A delimitação melhora quando encontra o arquivo real, não quando permanece apenas na imaginação do pesquisador.',
      'Convicções prévias não precisam ser escondidas, especialmente em pesquisa teológica confessional. O rigor exige outra coisa: formular o problema de modo que evidências contrárias possam ser reconhecidas e representar posições rivais de modo que seus melhores defensores as reconheçam. Imparcialidade metodológica é mais útil e testável do que uma alegação impossível de ausência total de pressupostos.'
    ] },
    { tipo: 'atividade', id: 'cg06-u4-a1', titulo: 'Atividade — construir um mini-projeto', enunciado: 'Transforme o assunto “uso de inteligência artificial no seminário” em um problema de pesquisa viável para um semestre. Depois formule um objetivo geral e três específicos.', itens: ['Delimite população, corpus ou contexto.', 'Formule uma pergunta que não contenha a resposta.', 'Use verbos de ação verificáveis nos objetivos.', 'Confira se cada objetivo contribui para responder ao problema.'], resposta: 'Exemplo: Problema — “Como estudantes do 3º ano do seminário X usam ferramentas generativas na pesquisa bibliográfica e quais práticas declaradas de verificação de fontes adotam em 2026?” Objetivo geral — analisar os usos e práticas de verificação. Específicos — (1) identificar os usos declarados; (2) descrever os procedimentos de checagem de fontes; (3) comparar padrões entre tipos de tarefa. O exemplo poderia ser ajustado conforme acesso, ética e desenho.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Tema é área; problema é pergunta investigável.', 'Delimitação precisa combinar relevância e viabilidade.', 'Objetivo geral responde ao problema; específicos constroem o caminho.', 'Pesquisa preliminar testa fontes, escopo e viabilidade antes da redação final do projeto.'] }
  ],
  fontes: [
    { id: 'bhattacherjee-social-research', autor: 'Anol Bhattacherjee', ano: '2019', titulo: 'Social Science Research: Principles, Methods and Practices (Revised edition)', publicacao: 'University of Southern Queensland — Pressbooks', url: 'https://usq.pressbooks.pub/socialscienceresearch/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base para processo de pesquisa, formulação de perguntas, desenho e relação entre teoria e evidência.' },
    { id: 'unifal-normalizacao-2025', autor: 'Universidade Federal de Alfenas', ano: '2025', titulo: 'Manual de normalização e apresentação de trabalhos acadêmicos da UNIFAL-MG: com base nas normas de documentação da ABNT', publicacao: 'Sistema de Bibliotecas da UNIFAL-MG', url: 'https://www.unifal-mg.edu.br/bibliotecas/wp-content/uploads/sites/125/2025/05/Manual-de-normalizacao-2-edicao-revista-e-atualizada-12-05-2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Inclui estrutura de projetos de pesquisa conforme a normalização brasileira atualizada.' }
  ],
  atualizadoEm: '2026-09-10',
};
