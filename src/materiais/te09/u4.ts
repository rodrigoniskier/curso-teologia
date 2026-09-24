import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te09-u4-preposicoes',
  disciplina: 'TE09',
  unidade: 4,
  titulo: 'Preposições',
  objetivo: 'Reconhecer as principais preposições do Novo Testamento, relacionando-as ao caso regido e evitando equivalências portuguesas fixas fora de contexto.',
  topicosCobertos: ['As preposições do Novo Testamento', 'Uso das preposições'],
  blocos: [
    { tipo: 'texto', titulo: '1. Preposição e caso formam uma unidade', paragrafos: [
      'No grego do Novo Testamento, a preposição introduz uma relação semântica e rege determinado caso. O caso não é mero detalhe decorativo: em várias preposições, a mudança de caso acompanha mudança de relação.',
      'Por isso, a unidade de leitura não é simplesmente διά = “por”. É διά + genitivo ou διά + acusativo em determinado contexto. A tradução portuguesa precisa vir depois da análise da construção.'
    ] },
    { tipo: 'quadro', titulo: 'Mapa inicial de preposições frequentes', itens: [
      'ἀπό + genitivo: origem, afastamento, proveniência.',
      'ἐκ/ἐξ + genitivo: saída ou origem a partir de dentro; o contexto amplia os valores possíveis.',
      'διά + genitivo: frequentemente meio ou agência; διά + acusativo: frequentemente causa ou razão.',
      'εἰς + acusativo: direção, movimento para, entrada em uma relação ou finalidade conforme o contexto.',
      'ἐν + dativo: localização, esfera, meio ou associação, segundo a construção.',
      'μετά + genitivo: frequentemente companhia; μετά + acusativo: frequentemente posterioridade.',
      'πρός + acusativo: direção, relação ou movimento em direção a.',
      'ὑπό + genitivo: frequentemente agente com voz passiva; ὑπό + acusativo: posição/movimento sob em certos contextos.'
    ] },
    { tipo: 'texto', titulo: '2. Não transforme glossário em sintaxe', paragrafos: [
      'Uma preposição possui um campo de usos, não uma única tradução. Expressões idiomáticas e relações abstratas exigem atenção ao verbo, ao substantivo regido e ao contexto mais amplo.',
      'O estudante deve registrar primeiro preposição + caso, depois propor a relação semântica e só então escolher uma construção natural em português.'
    ] },
    { tipo: 'atividade', id: 'te09-u4-a1', titulo: 'Atividade — caso antes da tradução', enunciado: 'Analise as construções ἐν τῷ λόγῳ, εἰς τὴν οἰκίαν, διὰ τοῦ λόγου e διὰ τὸν λόγον.', itens: ['Identifique o caso do complemento.', 'Descreva o valor provável da relação.', 'Explique por que διά não deve receber uma única tradução em todos os exemplos.'], resposta: 'ἐν rege dativo; εἰς rege acusativo; διά com genitivo e acusativo abre relações diferentes. A tradução deve nascer da construção e do contexto, não de uma equivalência fixa memorizada.' }
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para preposições, casos e exercícios de leitura.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'CCEL', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para regência preposicional.' }
  ],
  atualizadoEm: '2026-09-24',
};