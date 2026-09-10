import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u8-substantivos-genero-numero-caso',
  disciplina: 'TE08',
  unidade: 8,
  titulo: 'Substantivos 1 — gênero, número e caso',
  objetivo: 'Compreender como os substantivos gregos flexionam em gênero, número e caso, reconhecendo as funções básicas de nominativo, genitivo, dativo, acusativo e vocativo sem reduzir cada caso a uma única tradução portuguesa.',
  topicosCobertos: [
    'Introdução aos substantivos',
    'Flexão do substantivo: gênero, número e caso',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A terminação ajuda a mostrar a função na frase',
      paragrafos: [
        'Em português, ordem de palavras e preposições carregam grande parte das relações sintáticas. O grego também usa ordem e preposições, mas a flexão nominal acrescenta informação. Uma mesma palavra lexical pode mudar de terminação conforme sua função: λόγος, λόγου, λόγῳ, λόγον.',
        'Por isso, o estudante não deve perguntar apenas “o que esta palavra significa?”, mas também “que forma ela tem?”. O léxico fornece o lema e o campo semântico; a morfologia ajuda a descobrir como aquele substantivo participa da oração.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três dimensões da flexão nominal',
      itens: [
        'Gênero: masculino, feminino ou neutro. Gênero gramatical não coincide necessariamente com sexo ou gênero natural do referente.',
        'Número: singular ou plural.',
        'Caso: nominativo, genitivo, dativo, acusativo ou vocativo. O caso restringe e sinaliza funções possíveis, mas o contexto determina a relação específica.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Os cinco casos: funções prototípicas, não caixas rígidas',
      paragrafos: [
        'O nominativo frequentemente marca o sujeito ou o predicativo do sujeito. O genitivo frequentemente estabelece relações de pertencimento, origem, descrição ou associação. O dativo pode marcar destinatário, interesse, meio, esfera e outras relações. O acusativo aparece frequentemente como objeto direto e também em extensões adverbiais. O vocativo é usado para dirigir-se diretamente a alguém ou algo.',
        'Essas descrições são portas de entrada. Dizer “genitivo = de” ou “dativo = para” pode ajudar no primeiro minuto, mas se torna erro quando tratado como regra universal. Uma tradução responsável parte do caso e da construção, não de uma tabela de equivalências fixas.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Mapa funcional inicial',
      itens: [
        'Nominativo — frequentemente sujeito: ὁ λόγος ...',
        'Genitivo — frequentemente relação ou pertencimento: τοῦ λόγου ...',
        'Dativo — frequentemente destinatário, interesse ou meio: τῷ λόγῳ ...',
        'Acusativo — frequentemente objeto direto: τὸν λόγον ...',
        'Vocativo — chamamento direto: λόγε ...'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. O artigo é um aliado de análise',
      paragrafos: [
        'O artigo grego flexiona em gênero, número e caso e frequentemente acompanha substantivos. Para o iniciante, ele funciona como uma espécie de etiqueta morfológica adicional. Se o substantivo ainda parece ambíguo, o artigo pode ajudar a confirmar gênero e caso.',
        'Isso não significa que o artigo grego funcione exatamente como “o/a/os/as” em português. Seus usos são mais amplos e serão estudados com mais detalhe em sintaxe. Nesta fase, o objetivo é utilizá-lo como pista de concordância.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Forma lexical e forma flexionada',
      enunciado: 'λόγος → λόγου → λόγον',
      explicacao: 'As três formas pertencem ao mesmo substantivo lexical. λόγος é nominativo singular; λόγου é genitivo singular; λόγον é acusativo singular. Não são três palavras independentes para memorizar no dicionário.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u8-a1',
      titulo: 'Função antes da tradução',
      enunciado: 'Considere as combinações ὁ λόγος, τοῦ λόγου, τῷ λόγῳ e τὸν λόγον.',
      itens: [
        'Identifique o caso de cada combinação usando artigo e terminação.',
        'Associe a cada caso uma função prototípica, deixando claro que ela não é exclusiva.',
        'Explique por que gênero gramatical não deve ser inferido apenas do referente.',
        'Escreva uma frase explicando por que “genitivo = de” é uma regra insuficiente.'
      ],
      resposta: 'ὁ λόγος = nominativo singular; τοῦ λόγου = genitivo singular; τῷ λόγῳ = dativo singular; τὸν λόγον = acusativo singular. Funções prototípicas incluem sujeito, relação/pertencimento, destinatário/meio e objeto direto, respectivamente, mas cada caso possui usos mais amplos. Gênero é propriedade gramatical da forma lexical. O genitivo pode expressar várias relações e não deve ser traduzido automaticamente por uma única preposição.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Substantivos gregos flexionam em gênero, número e caso.',
        'Os cinco casos são nominativo, genitivo, dativo, acusativo e vocativo.',
        'Caso sinaliza relações sintáticas, mas não fornece sozinho uma tradução fixa.',
        'O artigo concorda com o substantivo e ajuda a reconhecer a morfologia.',
        'Aprender substantivos significa aprender lema e paradigma, não uma lista de traduções isoladas.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para introdução à flexão nominal e exercícios.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para casos e declinações.' }
  ],
  atualizadoEm: '2026-09-09',
};
