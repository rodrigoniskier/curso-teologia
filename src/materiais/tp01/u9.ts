import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u9-vocacao-pregacao',
  disciplina: 'TP01',
  unidade: 9,
  titulo: 'Vocação e pregação',
  objetivo: 'Relacionar zelo na preparação e na proclamação da Palavra, subordinando criatividade, retórica e emoção à fidelidade ao texto bíblico e ao cuidado pastoral.',
  topicosCobertos: ['Zelo na preparação da pregação', 'Zelo na proclamação da Palavra à igreja'],
  blocos: [
    { tipo: 'texto', titulo: '1. Zelo começa antes do púlpito', paragrafos: [
      'O pregador não recebe licença para dizer qualquer coisa verdadeira a partir de qualquer texto. Seu primeiro dever é compreender a passagem em seu contexto, observar gênero, estrutura e argumento e só então organizar a mensagem.',
      'Preparação zelosa inclui oração e dependência do Espírito, mas não usa espiritualidade como desculpa para negligência exegética. A confiança na ação de Deus sustenta o estudo; não o substitui.'
    ] },
    { tipo: 'quadro', titulo: 'Uma sequência responsável de preparação', itens: [
      'Ler e delimitar a passagem antes de escolher uma ideia central.',
      'Observar contexto, gênero, estrutura e termos decisivos.',
      'Interpretar antes de aplicar.',
      'Relacionar o texto à obra redentora sem inserir Cristo artificialmente.',
      'Organizar a mensagem para servir ouvintes reais, não para exibir pesquisa.'
    ] },
    { tipo: 'texto', titulo: '2. Zelo na proclamação', paragrafos: [
      'Zelo na proclamação não significa volume, teatralidade ou emoção fabricada. Significa falar como servo da Palavra, com convicção apropriada ao assunto, clareza, seriedade e amor pelos ouvintes.',
      'Persuasão cristã não autoriza manipulação. O pregador chama ao arrependimento, fé e obediência, mas não precisa produzir artificialmente uma resposta. A Palavra é proclamada com urgência e o resultado é confiado à ação soberana de Deus.'
    ] },
    { tipo: 'atividade', id: 'tp01-u9-a1', titulo: 'Atividade — entre improviso e performance', enunciado: 'Compare dois pregadores: um improvisa quase tudo e chama isso de dependência do Espírito; outro prepara cuidadosamente, mas transforma a proclamação em performance emocional. Identifique o erro de cada um.', itens: ['Avalie o preparo.', 'Avalie a proclamação.', 'Formule o equilíbrio bíblico.'], resposta: 'O primeiro opõe falsamente dependência espiritual e diligência; o segundo usa recursos de comunicação como se pudessem fabricar a resposta do ouvinte. Zelo pastoral combina estudo sério, oração, clareza, convicção e confiança em Deus, sem negligência nem manipulação.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Preparar bem é parte do zelo pastoral.', 'Proclamar com zelo não exige teatralidade.', 'Fidelidade ao texto e amor ao ouvinte governam forma e conteúdo da pregação.'] }
  ],
  fontes: [
    { id: 'spurgeon-lectures', autor: 'Charles Haddon Spurgeon', ano: '1875', titulo: 'Lectures to My Students', publicacao: 'Internet Archive', url: 'https://archive.org/details/lecturestomystud1877spur', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência pastoral clássica para preparação, proclamação e vida do pregador.' },
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Relaciona pregação e cuidado real do rebanho.' }
  ],
  atualizadoEm: '2026-09-11',
};
