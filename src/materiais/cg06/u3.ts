import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg06-u3-producao-trabalhos-academicos',
  disciplina: 'CG06',
  unidade: 3,
  titulo: 'Produção de trabalhos acadêmicos',
  objetivo: 'Distinguir os principais gêneros acadêmicos, planejar materiais de apoio para apresentações e empregar paráfrase, citação, referência e nota de modo rastreável e eticamente íntegro.',
  topicosCobertos: [
    'Monografia, resumo, resenha, fichamento, artigo',
    'Material de apoio e material visual para apresentações orais',
    'Paráfrase, citações, referências e notas'
  ],
  blocos: [
    { tipo: 'texto', titulo: '1. Cada gênero resolve um problema diferente', paragrafos: [
      'Resumo, resenha, fichamento, artigo e monografia não são versões maiores ou menores do mesmo texto. Cada gênero possui finalidade, leitor e nível de responsabilidade autoral próprios. Um resumo reconstrói de modo fiel o conteúdo essencial; uma resenha acrescenta avaliação argumentada; um fichamento organiza leitura para uso futuro; um artigo apresenta problema, método, análise e conclusão delimitados; uma monografia desenvolve investigação mais extensa e documentada.',
      'Confundir gêneros produz textos formalmente corretos e intelectualmente inadequados. Uma resenha que apenas resume não avalia; um artigo que apenas compila autores não demonstra pesquisa; uma monografia que acumula capítulos sem pergunta central vira enciclopédia temática.'
    ] },
    { tipo: 'quadro', titulo: 'Mapa dos gêneros', itens: [
      'Resumo: condensar com fidelidade, sem substituir o texto original por opinião do resumidor.',
      'Resenha: apresentar suficientemente a obra e avaliá-la com critérios e evidências.',
      'Fichamento: registrar dados bibliográficos, ideias, citações e comentários de modo recuperável.',
      'Artigo: responder a uma pergunta delimitada em estrutura adequada ao campo e veículo.',
      'Monografia: desenvolver investigação extensa, coerente e documentada sobre problema delimitado.'
    ] },
    { tipo: 'texto', titulo: '2. Paráfrase, citação e referência não são intercambiáveis', paragrafos: [
      'Citação direta reproduz palavras de uma fonte e exige marcação correspondente. Paráfrase reformula uma ideia com linguagem própria, mas a autoria intelectual continua pertencendo à fonte e precisa ser reconhecida. Referência fornece os dados necessários para identificar e recuperar o documento. Nota pode acrescentar informação, comentário ou indicação documental conforme o sistema adotado.',
      'Trocar palavras por sinônimos não cria uma paráfrase intelectualmente independente quando a estrutura argumentativa continua copiada. Uma boa paráfrase exige compreender, reconstruir e atribuir. Também é inadequado citar um autor clássico como se tivesse sido consultado quando a passagem foi encontrada apenas em obra secundária; nesse caso, deve-se buscar a fonte original ou declarar honestamente a mediação.'
    ] },
    { tipo: 'texto', titulo: '3. Apresentação oral é comunicação de pesquisa, não projeção do manuscrito', paragrafos: [
      'Slides e outros materiais visuais devem apoiar a linha argumentativa oral. Parágrafos projetados competem com a fala; tabelas ilegíveis escondem dados; animações decorativas raramente acrescentam evidência. Um bom recurso visual reduz a carga cognitiva e torna relações, dados e estrutura mais visíveis.',
      'A apresentação deve conservar rastreabilidade. Imagens, gráficos e citações precisam de origem identificável; dados não devem ser recortados de modo a produzir impressão diferente da análise completa. O princípio é o mesmo do texto: permitir que o público reconheça o que é dado, inferência, citação e conclusão do autor.'
    ] },
    { tipo: 'atividade', id: 'cg06-u3-a1', titulo: 'Atividade — classificar e corrigir práticas acadêmicas', enunciado: 'Avalie três situações: (a) um resumo inclui críticas que não aparecem no original; (b) uma paráfrase muda as palavras, mantém a estrutura do autor e não o cita; (c) um slide apresenta gráfico sem indicar a fonte.', itens: ['Classifique o problema de cada situação.', 'Proponha a correção mínima necessária.'], resposta: '(a) O texto deixou de ser resumo fiel; críticas devem ser separadas ou o gênero deve ser outro. (b) Há apropriação intelectual sem atribuição; é preciso reconstruir genuinamente e citar a fonte. (c) O gráfico perde rastreabilidade; deve identificar a fonte e, quando houver adaptação, declarar a adaptação.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Gêneros acadêmicos têm finalidades distintas.', 'Paráfrase exige compreensão e atribuição.', 'Referências existem para tornar fontes recuperáveis.', 'Material visual deve esclarecer o argumento e preservar a origem dos dados.'] }
  ],
  fontes: [
    { id: 'unifal-normalizacao-2025', autor: 'Universidade Federal de Alfenas', ano: '2025', titulo: 'Manual de normalização e apresentação de trabalhos acadêmicos da UNIFAL-MG: com base nas normas de documentação da ABNT', publicacao: 'Sistema de Bibliotecas da UNIFAL-MG', url: 'https://www.unifal-mg.edu.br/bibliotecas/wp-content/uploads/sites/125/2025/05/Manual-de-normalizacao-2-edicao-revista-e-atualizada-12-05-2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Guia atualizado para tipos de trabalhos, estrutura, citações, notas e referências.' },
    { id: 'bhattacherjee-social-research', autor: 'Anol Bhattacherjee', ano: '2019', titulo: 'Social Science Research: Principles, Methods and Practices (Revised edition)', publicacao: 'University of Southern Queensland — Pressbooks', url: 'https://usq.pressbooks.pub/socialscienceresearch/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para estrutura do processo de pesquisa e comunicação metodológica.' }
  ],
  atualizadoEm: '2026-09-10',
};
