import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u14-modernidade-2',
  disciplina: 'TE12',
  unidade: 14,
  titulo: 'A Hermenêutica da Modernidade 2',
  objetivo: 'Compreender a ampliação moderna da hermenêutica para a relação entre autor, texto e leitor, reconhecendo contribuições sobre pré-compreensão e historicidade sem abandonar a possibilidade de comunicação textual verdadeira.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. A hermenêutica deixou de perguntar apenas por regras de exegese', paragrafos: [
      'Nos séculos XIX e XX, a hermenêutica passou a investigar não apenas técnicas para explicar textos, mas o próprio ato de compreender. A atenção se deslocou progressivamente para linguagem, consciência histórica, pré-compreensão e participação do leitor no processo interpretativo. Isso tornou mais difícil sustentar a imagem ingênua de um intérprete sem história que simplesmente recolhe dados neutros.',
      'Essa mudança oferece uma correção importante: leitores fazem perguntas a partir de horizontes reais e podem não perceber seus próprios hábitos. Entretanto, reconhecer a historicidade do leitor não obriga concluir que o texto não possa comunicar algo que resista, corrija e transforme esse leitor.'
    ]},
    { tipo: 'quadro', titulo: 'Autor, texto e leitor', itens: [
      'Foco exclusivo no autor pode reduzir interpretação a reconstrução psicológica impossível.',
      'Foco exclusivo no texto pode ignorar história, situação comunicativa e uso linguístico.',
      'Foco exclusivo no leitor pode transformar interpretação em produção de sentidos sem limite textual.',
      'Uma abordagem equilibrada pergunta pelo ato comunicativo: alguém diz algo por meio de um texto a destinatários, em convenções compartilhadas.',
      'Pré-compreensão pode ser revisada quando o texto oferece resistência real às expectativas do leitor.'
    ]},
    { tipo: 'texto', titulo: '2. O círculo hermenêutico pode descrever aprendizagem, não aprisionamento', paragrafos: [
      'Lemos partes à luz de uma compreensão provisória do todo e revisamos o todo à medida que as partes surpreendem ou corrigem essa compreensão. Esse movimento costuma ser chamado círculo hermenêutico. Ele não precisa ser vicioso: é possível entrar em um texto com hipóteses, testá-las e sair com uma compreensão diferente.',
      'A hermenêutica reformada pode reconhecer esse movimento desde que preserve assimetria entre Escritura e intérprete. O leitor possui horizonte; a Escritura também possui conteúdo que não depende da aprovação desse horizonte. A tarefa cristã inclui permitir que pressupostos sejam julgados pela Palavra, não apenas observar como eles condicionam a leitura.'
    ]},
    { tipo: 'atividade', id: 'te12-u14-a1', titulo: 'Atividade — documentar revisão de pré-compreensão', enunciado: 'Escolha uma passagem cuja leitura cuidadosa corrigiu ou poderia corrigir uma expectativa inicial. Descreva o movimento entre hipótese, evidência textual e revisão.', itens: ['Declare a hipótese inicial.', 'Mostre os dados que a desafiam.', 'Formule a compreensão revisada.'], resposta: 'A atividade é bem-sucedida quando mostra que pré-compreensão existe, mas não determina necessariamente o resultado. A hipótese inicial é confrontada por gramática, contexto, estrutura ou comparação canônica, e o leitor modifica sua compreensão para explicar melhor as evidências.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A hermenêutica moderna amplia a atenção para o ato de compreender.', 'Historicidade do leitor é real.', 'Pré-compreensão pode ser criticada e revisada.', 'O círculo hermenêutico pode representar aprendizagem progressiva.', 'Reconhecer o leitor não exige negar significado comunicável do texto.'] }
  ],
  fontes: [
    { id: 'sep-heidegger', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Martin Heidegger', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/heidegger/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Contexto acadêmico para a guinada hermenêutica em direção à historicidade e às condições da compreensão.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Ponto de comparação com a tradição de hermenêutica bíblica metodológica do século XIX.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Contraponto confessional sobre autoridade da Escritura e responsabilidade do intérprete.' }
  ],
  atualizadoEm: '2026-09-10',
};
