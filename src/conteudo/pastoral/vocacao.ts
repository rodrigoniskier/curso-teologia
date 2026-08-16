import type { Verbete } from '../../tipos';

export const vocacao: Verbete = {
  id: 'tp01-vocacao',
  disciplina: 'TP01',
  unidade: 3,
  titulo: 'Vocação e Espiritualidade',
  subtitulo: 'Por que a frase "vou largar tudo para servir a Deus" contém uma teologia errada',
  objetivo:
    'Ao final, você reconhecerá a estrutura de dois andares que a Reforma demoliu e por que ela volta sempre, entenderá o argumento de Lutero sobre o sacerdócio de todos os crentes e o de Calvino sobre a estação, saberá situar a vocação ministerial sem transformá-la em grau superior de cristão, conhecerá o abuso a que a doutrina se presta, e terá um quadro da espiritualidade reformada como espiritualidade dos meios ordinários.',
  atualizadoEm: '2026-08-16',
  verMais: ['tp02-poimenica', 'ts12-cosmovisao', 'ts10-etica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um membro da igreja procura o pastor e diz: estou pensando em largar meu emprego para servir a Deus em tempo integral.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A frase é sincera, e costuma vir acompanhada de disposição genuína de sacrifício. Mas repare no que ela pressupõe, porque o pressuposto atravessa a conversa inteira sem nunca ser dito: até agora, no emprego, essa pessoa **não** estava servindo a Deus em tempo integral. O trabalho era uma sala de espera. A vida cristã de verdade começa quando ela sair de lá.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa suposição tem história, tem nome e foi combatida frontalmente no século XVI. Entender por que ela é falsa não é consolo para quem ficou no escritório: é uma correção teológica com consequências práticas em quase toda decisão que um cristão comum toma.',
    },
    {
      tipo: 'secao',
      titulo: 'A estrutura de dois andares',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A cristandade medieval organizava a vida cristã em dois níveis. No andar de cima, o estado religioso: monges, freiras, clero — gente que fazia votos, renunciava a casamento e propriedade e vivia sob regra. No de baixo, o estado secular: camponeses, comerciantes, soldados, mães de família, que cumpriam os mandamentos e se salvavam, mas num regime de segunda classe.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção tinha até uma base técnica: além dos mandamentos, obrigatórios para todos, haveria os conselhos de perfeição, opcionais e superiores. Quem os seguisse alcançava mais. A palavra **vocação** aplicava-se, nesse esquema, quase exclusivamente ao andar de cima — ter vocação significava entrar para a vida religiosa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Guarde essa palavra e o seu uso restrito, porque o problema volta com roupas novas. Quando alguém hoje diz "sentir o chamado" para se referir apenas ao ministério, ou quando uma igreja trata seus missionários como cristãos de primeira linha e seus engenheiros como financiadores deles, a estrutura de dois andares foi reconstruída — sem votos e sem regra, mas com a mesma lógica.',
    },
    {
      tipo: 'secao',
      titulo: 'A demolição de Lutero',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1520, num escrito dirigido à nobreza alemã, Lutero atacou a distinção pela raiz. O argumento é de dois passos e cabe num parágrafo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Primeiro: todos os batizados são sacerdotes, e a Escritura não conhece a divisão entre um estado espiritual e um estado temporal. O que distingue o ministro do leigo é o **ofício** que ele exerce, não a classe de cristão a que pertence — do mesmo modo que dez irmãos escolhem um para falar por eles sem que esse deixe de ser irmão como os outros.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Segundo, e é aqui que a coisa fica surpreendente: se não há dois estados, então o trabalho do sapateiro é obra de Deus tanto quanto a do bispo. Não porque sapatos sejam sagrados, mas porque é assim que Deus cuida do mundo. Ele podia alimentar todo mundo com maná; escolheu alimentar através do lavrador, vestir através do tecelão, curar através do médico. A pessoa que trabalha é o instrumento pelo qual Deus atende o pedido do pão nosso de cada dia — inclusive o pedido feito por ela mesma.',
    },
    {
      tipo: 'citacao',
      texto:
        'Todos os cristãos são verdadeiramente do estado espiritual, e não há entre eles diferença alguma senão a do ofício. Somos todos consagrados sacerdotes pelo batismo.',
      autor: 'Martinho Lutero',
      obra: 'À Nobreza Cristã da Nação Alemã',
      fonteId: 'lutero-tres-tratados',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Calvino acrescenta a esse quadro uma peça que Lutero deixou implícita. Cada um recebe de Deus uma **estação** — um lugar, um conjunto de deveres, um alcance —, e reconhecer isso tem dois efeitos opostos e igualmente úteis: freia a ambição de quem quer sair de onde foi posto por achar aquilo pequeno demais, e dá dignidade a quem faz tarefa modesta, porque nenhuma obediência é insignificante quando quem a designou é Deus.',
    },
    {
      tipo: 'definicao',
      termo: 'Vocação',
      texto:
        'Chamado de Deus, que se dá em dois sentidos que não devem ser confundidos nem separados. O primeiro é o chamado eficaz à salvação, comum a todos os crentes. O segundo é a designação da estação em que cada um serve — trabalho, família, comunidade, e, em alguns casos, o ofício ministerial. O ministério é uma vocação entre outras quanto à dignidade, e uma vocação distinta quanto aos requisitos e ao modo de reconhecimento.',
    },
    {
      tipo: 'secao',
      titulo: 'Onde a doutrina foi abusada',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma exposição honesta precisa dizer isto, porque quem só ouve a versão inspiradora fica sem defesa quando encontrar a versão torta. A linguagem da estação já foi usada, e não raramente, para mandar gente ficar quieta onde estava: o servo que aceita o senhor, o operário que não reivindica, a mulher que suporta. Deus o pôs aí — logo, conforme-se.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O erro dessa aplicação é identificável, e não exige abandonar a doutrina. Estação não é sinônimo de circunstância imutável. Paulo diz ao escravo que, podendo tornar-se livre, aproveite a oportunidade — o que é incompatível com a leitura conformista. A doutrina da vocação dignifica o trabalho; não santifica a injustiça que às vezes o cerca, nem proíbe mudar de lugar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há um segundo abuso, mais comum em igrejas evangélicas do que o primeiro: a palavra chamado usada para vencer resistência. Você é chamado a assumir este ministério, a dar esta quantia, a não questionar esta decisão. Quando "chamado" entra numa frase para encerrar a conversa em vez de descrevê-la, deixou de ser doutrina e virou instrumento.',
    },
    {
      tipo: 'secao',
      titulo: 'Então o chamado ao ministério é o quê',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Se todo trabalho legítimo é vocação, alguém pode concluir que a vocação ministerial se dissolve. Não se dissolve — apenas deixa de ser um andar acima e passa a ser um ofício ao lado, com requisitos próprios.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E os requisitos são explícitos. As listas de 1 Timóteo 3 e Tito 1 quase não falam de talento e falam quase o tempo todo de caráter e de vida doméstica — irrepreensível, sóbrio, hospitaleiro, não avarento, que governe bem a própria casa, apto para ensinar. É uma descrição de quem a pessoa é, não de quanto ela rende.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada distingue ainda o chamado interior, que é a convicção do próprio candidato, do chamado exterior, que é o reconhecimento pela igreja por meio de seus concílios. O segundo não é formalidade que confirma o primeiro: é o que impede que a convicção pessoal se autorize sozinha. Quem decide, e com que critérios, é assunto tratado em detalhe no verbete de poimênica.',
    },
    {
      tipo: 'controversia',
      titulo: 'Todo trabalho é vocação no mesmo sentido?',
      posicoes: [
        {
          escola: 'Vocação plena',
          sintese:
            'Toda ocupação lícita é vocação no sentido teológico pleno: Deus governa o mundo por meio dela, e chamar isso de analogia é enfraquecer a Reforma pela metade. É a leitura de Lutero e de Kuyper, e tem a força de eliminar de vez o segundo andar. O risco é a palavra virar elogio automático, aplicada a qualquer emprego sem que se pergunte a quem ele serve.',
        },
        {
          escola: 'Distinção estrita',
          sintese:
            'No Novo Testamento o vocabulário do chamado se refere sobretudo à salvação e ao ofício; estendê-lo ao emprego é analogia útil, mas analogia. Tem o mérito do rigor terminológico e evita a inflação da palavra; corre o risco de devolver, pela porta dos fundos, a impressão de que o trabalho comum é assunto neutro.',
        },
        {
          escola: 'Vocação com critério',
          sintese:
            'Trabalho é vocação quando é lícito e serve ao próximo — o que exclui alguns ofícios e faz a outros uma pergunta desconfortável sobre o que de fato produzem. Preserva o conteúdo da doutrina sem transformá-la em bênção indiscriminada; exige, em troca, um discernimento que nem sempre é fácil e que pode virar julgamento apressado do trabalho alheio.',
        },
      ],
    },
    {
      tipo: 'secao',
      titulo: 'A espiritualidade que corresponde a isso',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Se a vida cristã não se concentra num andar superior, a espiritualidade também não pode depender de condições especiais. É por isso que a tradição reformada é insistentemente ordinária no que propõe: leitura e pregação da Palavra, os sacramentos, a oração, o culto público com o povo de Deus, o dia do Senhor. Nada disso exige retiro, técnica ou temperamento místico.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A vantagem dessa proposta aparece justamente em quem mais precisa dela. Uma espiritualidade construída sobre experiências intensas favorece quem tem tempo, disposição emocional e silêncio disponível — e deixa de fora a mãe de três filhos pequenos e o homem que faz dois turnos. Uma espiritualidade de meios ordinários alcança os dois, porque os meios são públicos, repetíveis e não dependem de como a pessoa acordou.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso não é frieza nem desprezo pelo afeto. A tradição que produziu o exame minucioso das afeições religiosas não pode ser acusada de indiferença à experiência. O que ela sustenta é que o afeto é fruto dos meios, e não o meio pelo qual se chega — e que julgar a própria vida espiritual pela temperatura do sentimento é apoiar-se na parte mais instável do sistema.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Volte à conversa do começo. À pessoa que quer largar tudo, o pastor não deve responder nem com entusiasmo automático nem com desestímulo: deve desfazer o pressuposto. Pergunte por que ela acredita que só agora começaria a servir a Deus, e o que mudou — se foi a descoberta de um dom reconhecido por outros, ou se foi cansaço do emprego vestido de linguagem espiritual. As duas coisas se parecem por fora. E há a conversa oposta, que ninguém procura ter porque ninguém marca hora para tê-la: a do irmão que acha o próprio trabalho sem sentido e nunca ouviu de um púlpito que Deus alimenta uma cidade inteira por meio de gente como ele. Esse não vai ao gabinete pedir orientação. Ele precisa ouvir isso na pregação, e a maioria nunca ouviu.',
    },
    {
      tipo: 'lista',
      itens: [
        'Ao ouvir alguém falar em servir a Deus em tempo integral, pergunte o que a pessoa acha que estava fazendo até aqui. A resposta revela qual teologia está operando.',
        'Ao pregar sobre trabalho, evite parar no exemplo do trabalho como testemunho — como se o valor do emprego fosse a oportunidade de evangelizar ali. O trabalho já é serviço a Deus antes de qualquer conversa no cafezinho.',
        'Ao avaliar um candidato ao ministério, compare a lista de 1 Timóteo 3 com a lista que a sua igreja de fato usa. Se a segunda pesa mais desempenho que caráter, a distância entre elas é o problema.',
        'Ao usar a palavra chamado, verifique se ela está descrevendo algo ou encerrando uma discussão. No segundo caso, troque de palavra.',
        'Ao propor uma disciplina espiritual, teste-a contra o caso mais difícil da sua congregação: se ela não funciona para quem faz dois turnos, não é a espiritualidade que a igreja deve ensinar como norma.',
      ],
    },
  ],
  fontes: [
    {
      id: 'lutero-tres-tratados',
      autor: 'Martinho Lutero',
      ano: '1520',
      titulo:
        'First Principles of the Reformation: as 95 teses e os três tratados primários (ed. Wace e Buchheim)',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/firstprinciples00buchgoog',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Reúne À Nobreza Cristã da Nação Alemã, O Cativeiro Babilônico e A Liberdade Cristã. O primeiro contém o argumento sobre o sacerdócio de todos os crentes e a demolição da distinção entre estado espiritual e temporal discutida aqui. Domínio público.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion (trad. Beveridge)',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O Livro III, cap. X, trata do uso da vida presente e encerra com a doutrina da estação — a passagem em que Calvino sustenta que reconhecer o posto designado por Deus freia a ambição e dignifica a tarefa modesta. Hospedado na CCEL, que recusa IPs de nuvem: a auditoria automática não confirma daqui, mas o endereço abre normalmente no navegador.',
    },
    {
      id: 'baxter-reformed-pastor',
      autor: 'Richard Baxter',
      ano: '1656',
      titulo: 'The Reformed Pastor',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/reformedpastor00baxt',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Sobre o que se exige de quem exerce o ofício ministerial, com o exame de consciência que Baxter dirige primeiro a si mesmo. Complementa aqui a seção sobre os requisitos de 1 Timóteo 3. Domínio público.',
    },
    {
      id: 'ryle-holiness',
      autor: 'J. C. Ryle',
      ano: '1887',
      titulo: 'Holiness: Its Nature, Hindrances, Difficulties and Roots',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/HolinessJ.C.Ryle1887',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Escrito contra a ideia de que a santificação dependeria de uma experiência extraordinária — a mesma objeção que a seção sobre espiritualidade de meios ordinários faz aqui, aplicada à vida devocional. Domínio público.',
    },
    {
      id: 'kuyper-calvinismo',
      autor: 'Abraham Kuyper',
      ano: '1898',
      titulo: 'Calvinism: Six Lectures (Stone Lectures, Princeton)',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/calvinismsixlect00kuyp',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Estende a lógica da vocação a domínios inteiros da vida — ciência, arte, política —, o que é a versão desenvolvida do argumento de Lutero sobre o sapateiro. Domínio público.',
    },
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
      nota: 'O capítulo X trata do chamado eficaz — o primeiro dos dois sentidos distinguidos no bloco de definição —, e o capítulo XVI trata das boas obras e do seu lugar, que é o pano de fundo de toda esta discussão.',
    },
  ],
};
