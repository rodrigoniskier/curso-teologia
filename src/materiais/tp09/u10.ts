import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u10-meios-evangelizacao',
  disciplina: 'TP09',
  unidade: 10,
  titulo: 'Deus e os meios de evangelização',
  objetivo: 'Relacionar fé, Palavra de Deus, conduta do evangelista e oração como meios ordinários que Deus usa na evangelização, distinguindo fidelidade no uso dos meios de confiança supersticiosa em técnicas.',
  topicosCobertos: [
    'A fé e a Palavra de Deus, a conduta de quem evangeliza e a oração',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A fé vem pelo ouvir a Palavra de Cristo',
      paragrafos: [
        'A fé salvadora possui conteúdo. Ela não é otimismo religioso nem salto no escuro, mas confiança em Cristo conforme ele é oferecido no evangelho. Por isso a Palavra de Deus ocupa posição central entre os meios de evangelização: é por meio da verdade anunciada que o ouvinte conhece quem deve crer e por quê.',
        'Isso não obriga toda conversa a reproduzir um sermão completo. Significa que a mensagem precisa ser governada pela Escritura, e que o evangelista deve saber abrir, explicar e aplicar textos bíblicos quando a conversa exige maior profundidade.',
        'A centralidade da Palavra protege contra dois erros: confiar numa fórmula fixa como se as palavras possuíssem poder mágico e trocar a mensagem bíblica por uma comunicação atraente que já não explica Cristo.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A conduta não substitui a mensagem, mas pode confirmá-la ou contradizê-la',
      paragrafos: [
        'A vida do evangelista funciona como contexto moral daquilo que ele diz. Integridade, paciência, serviço, verdade e amor ao próximo não convertem ninguém, mas tornam visível que o mensageiro leva a sério o senhorio que proclama.',
        'O inverso também é verdadeiro. Manipulação financeira, mentira, abuso de poder, desprezo pelos pobres, racismo, arrogância ou irresponsabilidade podem contradizer publicamente o evangelho anunciado. A falha moral do mensageiro não torna Cristo falso, mas cria escândalos reais que a igreja deve levar a sério.',
        'Por isso testemunho de vida e testemunho verbal não competem. Boa conduta sem evangelho pode ser admirada sem que Cristo seja conhecido; palavras sem caráter podem ser corretas e ainda serem desmentidas pelo comportamento.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Oração confessa que o resultado pertence a Deus',
      paragrafos: [
        'Orar antes, durante e depois da evangelização é uma forma prática de confessar soberania. A igreja pede oportunidades, clareza, coragem, abertura do coração e perseverança. A oração não informa Deus nem substitui preparo; expressa dependência e alinha o mensageiro à missão recebida.',
        'A oração também combate ansiedade. O cristão pode apresentar o evangelho, responder ao que sabe, reconhecer o que precisa estudar e continuar intercedendo sem assumir o lugar do Espírito.',
        'Quando Palavra, conduta e oração permanecem juntas, a evangelização evita tanto intelectualismo sem vida quanto ativismo sem dependência.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Meios e responsabilidades',
      itens: [
        'Palavra: conhecer, explicar e aplicar o evangelho com fidelidade.',
        'Fé: chamar o ouvinte a confiar em Cristo, e não em mérito, ritual ou emoção.',
        'Conduta: viver de modo coerente com a mensagem, reconhecendo e corrigindo pecados quando houver falha.',
        'Oração: pedir a Deus oportunidades, ousadia e fruto, antes e depois das conversas.',
        'Comunidade: encaminhar interessados para ensino, culto e relações reais na igreja local.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Uma conversa comum pode reunir os meios',
      enunciado: 'Um colega pergunta por que um cristão mantém esperança durante uma crise. O cristão responde contando sua confiança em Cristo, explica brevemente a reconciliação com Deus, cita um texto bíblico, pergunta o que o colega pensa e depois se oferece para continuar conversando e orar por ele.',
      explicacao: 'Não há método extraordinário. Há Palavra comunicada, testemunho coerente, convite à reflexão, disposição para acompanhamento e oração. Os meios são ordinários, mas Deus é livre e poderoso para usá-los.'
    },
    {
      tipo: 'atividade',
      id: 'tp09-u10-a1',
      titulo: 'Atividade — preparar uma conversa evangelística',
      enunciado: 'Planeje uma conversa com uma pessoa real de seu convívio que saiba que você é cristão, sem transformar a relação num roteiro artificial.',
      itens: [
        'Escolha um texto bíblico curto que ajude a explicar o evangelho.',
        'Formule duas perguntas abertas para compreender o que a pessoa pensa.',
        'Identifique uma área de sua própria conduta que precisa ser coerente com o testemunho.',
        'Escreva uma oração breve pela pessoa e pela conversa.',
        'Defina uma forma respeitosa de oferecer continuidade.'
      ],
      resposta: 'O plano adequado integra conteúdo bíblico, escuta, caráter, oração e acompanhamento. Não exige controlar a reação da pessoa nem manipular circunstâncias; prepara o evangelista para usar fielmente os meios que Deus ordenou.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'A fé cristã é resposta à Palavra de Cristo, e por isso a Escritura governa a mensagem.',
        'A conduta confirma ou contradiz publicamente o testemunho verbal.',
        'Oração expressa dependência e sustenta coragem e perseverança.',
        'Meios ordinários não são mecanismos automáticos de conversão.',
        'A responsabilidade da igreja é usar bem os meios e confiar a eficácia salvadora a Deus.'
      ],
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Os capítulos XIV, XVI e XXI relacionam fé, boas obras e oração à vida cristã.'
    },
    {
      id: 'spurgeon-soul-winner',
      autor: 'Charles Haddon Spurgeon',
      ano: '1895',
      titulo: 'The Soul Winner',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/soulwinner0000chsp',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'cadastro',
      nota: 'Trata do caráter e da responsabilidade do ganhador de almas, mantendo dependência de Deus e esforço pastoral concreto.'
    }
  ],
  atualizadoEm: '2026-09-04',
};