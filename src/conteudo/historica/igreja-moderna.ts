import type { Verbete } from '../../tipos';

export const igrejaModerna: Verbete = {
  id: 'th04-igreja-moderna',
  disciplina: 'TH04',
  unidade: 1,
  titulo: 'A Igreja Moderna',
  subtitulo: 'Como o protestantismo ganhou o mundo e teve de decidir no que ainda acreditava',
  objetivo:
    'Ao final, você entenderá o problema pastoral que a ortodoxia confessional criou sem querer, saberá distinguir o que o pietismo acertou do que ele cobrou, reconhecerá em Jonathan Edwards a recusa de escolher entre coração e doutrina, entenderá por que o século de maior expansão missionária foi também o de menor confiança teológica, e saberá em que termos a divisão do início do século XX foi posta.',
  atualizadoEm: '2026-08-16',
  verMais: ['th03-reforma', 'tp07-teologia-de-missoes', 'ts11-subscricao-confessional'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Em 1648, a Paz de Vestfália encerra a Guerra dos Trinta Anos. Um continente que passara mais de um século matando por causa de doutrina concorda em parar — e o preço do acordo é que a religião de cada território seja definida pelo seu governante.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A fórmula trouxe paz e trouxe junto uma sugestão que ninguém pretendeu fazer: se a confissão de um lugar é decidida por tratado e por fronteira, ela se parece menos com verdade e mais com arranjo político. O europeu instruído do século seguinte tirará essa conclusão sozinho, e ela estará no fundo de quase tudo o que vem depois.',
    },
    {
      tipo: 'secao',
      titulo: 'A ortodoxia que estava certa e não bastava',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A geração seguinte à Reforma fez o que qualquer movimento faz depois de vencer: consolidou. Redigiu confissões, delimitou definições, respondeu adversários com precisão crescente. É o período da ortodoxia protestante, e convém dizer de saída que ela não é a vilã da história. As distinções que os manuais reformados ainda usam vêm dali, e quem as despreza costuma continuar usando-as sem saber.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O problema não era o conteúdo — era o que estava acontecendo nos bancos. Uma pregação inteiramente ocupada em refutar o erro do vizinho pode ser correta linha por linha e deixar o ouvinte sem saber o que fazer na segunda-feira. Multiplique isso por algumas décadas e você tem igrejas cheias de gente que sabe a resposta certa sobre a ceia e não sabe se ama a Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A história moderna da igreja é, em grande parte, a história de **duas reações a esse quadro** — uma vinda do coração, outra vinda da cabeça. Entender as duas, e o que cada uma custou, é entender o resto.',
    },
    {
      tipo: 'secao',
      titulo: 'A reação do coração: o pietismo',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1675, Philipp Jakob Spener publica um prefácio que vira programa. O diagnóstico é que a igreja luterana tem doutrina viva e vida morta; a proposta é prática — reuniões domésticas para leitura da Bíblia, sacerdócio de todos os crentes levado a sério, formação pastoral que inclua piedade e não só erudição, pregação voltada à edificação e não à polêmica.',

    },
    {
      tipo: 'paragrafo',
      texto:
        'O movimento produziu frutos que ninguém honesto nega. Halle tornou-se centro de obra social e de formação. Os morávios de Zinzendorf começaram, décadas antes de Carey, a enviar missionários para lugares onde nenhum protestante havia pisado — e foi num culto morávio, em Londres, que John Wesley disse ter sentido o coração estranhamente aquecido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A conta veio depois, e é preciso enunciá-la sem caricatura, porque a caricatura desqualifica a crítica. O pietismo não negou a doutrina: ele a **desprioritizou**, tratando-a como o invólucro de algo mais interior. Feita essa mudança, o critério de autenticidade desliza da confissão para a experiência — e uma vez instalado ali, ele fica disponível para quem quiser esvaziar a confissão por inteiro. Não é acidente biográfico que Schleiermacher, o pai da teologia liberal, tenha sido criado entre morávios: ele conservou a intuição de que a religião é primariamente sentimento e retirou dela a doutrina que os morávios ainda mantinham.',
    },
    {
      tipo: 'secao',
      titulo: 'Os avivamentos, e o homem que se recusou a escolher',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O século XVIII assiste a algo que os contemporâneos não sabiam nomear: multidões, em lugares sem ligação entre si, sendo tomadas por convicção de pecado e alegria religiosa ao mesmo tempo. Na Inglaterra, Whitefield prega ao ar livre para mineiros que nunca entraram numa igreja e Wesley organiza os convertidos em sociedades. Na Nova Inglaterra, uma paróquia rural do vale do Connecticut passa por algo parecido, e seu pastor decide descrever o que viu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse pastor era Jonathan Edwards, e é aqui que a história fica interessante. Edwards foi ao mesmo tempo o maior **defensor** e o maior **crítico** do avivamento — e não em momentos diferentes da vida, por arrependimento, mas simultaneamente e pelo mesmo motivo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Contra os racionalistas que descartavam tudo como histeria, ele argumentou que a obra era real e que exigir dela ausência de emoção é exigir que a alma humana seja tocada sem reagir. Contra os entusiastas que tomavam cada manifestação como prova, ele argumentou que lágrimas, tremores e visões não provam nada por si — nem contra, nem a favor. O sinal de uma obra do Espírito não é a intensidade do fenômeno; é o que sobra depois: amor a Deus, apreço pelas Escrituras, humildade, mudança duradoura de conduta.',
    },
    {
      tipo: 'citacao',
      texto:
        'Não é sinal de que uma obra não seja do Espírito de Deus o fato de produzir efeitos extraordinários sobre os corpos das pessoas; nem é sinal de que seja.',
      autor: 'Jonathan Edwards',
      obra: 'Thoughts on the Revival of Religion in New England',
      fonteId: 'edwards-avivamentos',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que essa dupla recusa custa. É muito mais fácil ser sempre entusiasta ou sempre cético — cada uma dessas posições dá ao seu titular um partido e uma paz. Edwards ficou sem os dois porque manteve juntas duas coisas que a época estava separando: o Espírito age de verdade nos afetos, **e** os afetos precisam ser examinados por critérios que não são eles mesmos.',
    },
    {
      tipo: 'termo',
      termo: 'Avivamento',
      texto:
        'Período em que a pregação ordinária produz efeitos desproporcionais ao habitual — conversões numerosas, consciência aguda de pecado, reforma visível de costumes — sem que a igreja tenha mudado seus meios. A tradição reformada o entende como intensificação soberana do uso dos meios ordinários, não como técnica a ser reproduzida; daí a distinção, sempre reaberta desde o século XIX, entre *revival* e *revivalism*.',
    },
    {
      tipo: 'secao',
      titulo: 'A reação da cabeça: a crítica',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Enquanto isso, nas universidades, formava-se a outra resposta. O ponto de partida é a mesma insatisfação — a ortodoxia parece árida —, mas a saída é oposta: em vez de buscar o calor, busca-se o que da religião sobrevive ao exame da razão autônoma.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O deísmo propôs um Deus que criou e se retirou, dispensando revelação e milagre. A crítica histórica passou a tratar a Bíblia como qualquer documento antigo — o que, em si, produziu ganhos reais de conhecimento — mas frequentemente já partindo do princípio de que o sobrenatural não pode ter acontecido, o que transforma um método em conclusão antecipada. E Schleiermacher, diante da acusação de que a religião era superstição, respondeu deslocando-a para um terreno onde a crítica não alcança: religião não é doutrina nem moral, é o sentimento de dependência absoluta.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A solução parecia salvar a fé e, na prática, entregou a chave. Uma religião que não afirma nada sobre o que aconteceu na Palestina não pode ser refutada pela história — e também não pode ser pregada como notícia. É essa a posição que a geração seguinte herdará e que o século XX terá de discutir.',
    },
    {
      tipo: 'secao',
      titulo: 'O paradoxo do século XIX',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Aqui está o fato que costuma passar despercebido nos manuais. O mesmo século em que a teologia acadêmica europeia perde a confiança na revelação é o século de maior expansão geográfica do cristianismo desde os apóstolos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A partir de 1792, com o opúsculo de Carey, formam-se sociedades missionárias em cadeia; o evangelho chega à Índia, à China, à África interior, às ilhas do Pacífico. Traduz-se a Bíblia para centenas de línguas, muitas delas reduzidas a escrita pela primeira vez justamente para isso. As igrejas que hoje concentram o crescimento do cristianismo mundial nasceram nesse período.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os dois movimentos não são independentes. Quem foi para o campo saiu, em regra, dos meios avivados e pietistas — dos que ainda achavam que havia notícia a levar. A teologia que reduzia a fé a sentimento não enviou quase ninguém: não se atravessa um oceano para comunicar a alguém o sentimento de dependência absoluta que ele já teria de qualquer modo.',
    },
    {
      tipo: 'secao',
      titulo: 'A divisão, posta em termos exatos',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No início do século XX a tensão chega às instituições. Nos Estados Unidos, seminários, juntas missionárias e assembleias passam a abrigar duas teologias que usavam o mesmo vocabulário — pecado, salvação, Cristo, ressurreição — com sentidos incompatíveis. O acordo tácito era conviver.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1923, um professor de Novo Testamento de Princeton publicou o livro que tornou a convivência insustentável, e o fez por um movimento argumentativo de um só passo: sustentou que o liberalismo não é uma versão frouxa do cristianismo, mas **outra religião**, que apenas herdou o vocabulário. A tese é dura, e a honestidade de Machen consistiu em tirar dela a consequência que lhe desagradava — se são duas religiões, então não se trata de expulsar ninguém, mas de reconhecer que duas coisas diferentes não podem ser sustentadas pela mesma denominação como se fossem uma.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O desfecho é conhecido: Machen deixa Princeton, funda o Westminster Theological Seminary em 1929, é suspenso pelo presbitério em 1935 e morre em 1937. As divisões presbiterianas do século XX — inclusive as que repercutiram no Brasil — se organizam em torno das questões que ele pôs.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como avaliar os avivamentos',
      posicoes: [
        {
          escola: 'Leitura entusiasta',
          sintese:
            'Os avivamentos são a forma normal de agir de Deus, e a igreja deve buscá-los e criar as condições para que ocorram. Preserva algo verdadeiro — a igreja não deve resignar-se à esterilidade —, mas escorrega com facilidade para o *revivalism*: se o resultado depende de método, então basta encontrar o método, e a soberania de Deus vira uma formalidade.',
        },
        {
          escola: 'Leitura crítica',
          sintese:
            'Os avivamentos introduziram no protestantismo o individualismo, o emocionalismo e a desconfiança da igreja institucional que o corroeram por dentro; o crescimento aparente custou a catequese, a disciplina e o culto ordenado. A crítica acerta ao apontar consequências reais, mas prova demais: teria de descartar também os frutos duradouros e a obra missionária que saiu dali.',
        },
        {
          escola: 'Leitura de Edwards',
          sintese:
            'A obra é de Deus e os acompanhamentos são humanos, e a tarefa do pastor é distinguir os dois em vez de aceitar ou rejeitar o pacote. É a posição mais exigente, porque não fornece um veredito prévio: obriga a examinar caso a caso, pelos frutos que permanecem. É também a que a tradição reformada adotou.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'A lição deste período é que as duas reações erradas nascem do mesmo diagnóstico correto. É verdade que ortodoxia sem calor produz igrejas frias; é verdade que fervor sem doutrina produz igrejas que não sabem no que creem. O pastor tentado a escolher um dos lados deve notar que a escolha já foi feita antes, duas vezes, e que se conhece o resultado das duas. O caminho de Edwards é mais trabalhoso porque não entrega um partido: exige pregar de modo que o afeto seja movido e, ao mesmo tempo, ensinar o ouvinte a desconfiar do próprio afeto quando ele não vier acompanhado de amor a Deus, apreço pela Escritura e mudança de vida. Quem faz isso será acusado de frieza pelos entusiastas e de emocionalismo pelos críticos. É um bom sinal.',
    },
    {
      tipo: 'lista',
      itens: [
        'Ao avaliar um movimento contemporâneo, use o critério de Edwards: não pergunte quão intensa foi a manifestação, pergunte o que restou dela seis meses depois.',
        'Ao ouvir a acusação de que doutrina esfria a igreja, verifique se o alvo é a doutrina ou uma pregação polêmica que se confunde com ela. Os dois casos existem e pedem remédios diferentes.',
        'Ao estudar a teologia liberal, note que ela raramente começa negando: começa deslocando a fé para um terreno onde nada pode ser negado. É esse deslocamento, e não uma negação frontal, que a torna inatacável — e inatacável não é o mesmo que verdadeira.',
        'Ao ler história das missões, lembre que o mapa do cristianismo mundial de hoje foi desenhado por instituições nascidas entre 1792 e 1900, e que quase todas saíram de meios avivados.',
      ],
    },
  ],
  fontes: [
    {
      id: 'edwards-avivamentos',
      autor: 'Jonathan Edwards',
      ano: '1737–1742',
      titulo:
        'Edwards on Revivals: A Faithful Narrative of the Surprising Work of God e Thoughts on the Revival of Religion in New England',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/edwardsonrevival00edwa',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Volume que reúne o relato de 1737 e a defesa crítica de 1742 — os dois lados da posição de Edwards no mesmo livro, que é justamente o que este verbete argumenta. Domínio público.',
    },
    {
      id: 'machen-liberalismo',
      autor: 'J. Gresham Machen',
      ano: '1923',
      titulo: 'Christianity and Liberalism',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/christianitylibe00mach_0',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O livro que pôs a divisão do século XX em termos exatos, comparando ponto a ponto — Deus, homem, Bíblia, Cristo, salvação, igreja — as duas teologias que dividiam as mesmas denominações. Domínio público.',
    },
    {
      id: 'warneck-missoes',
      autor: 'Gustav Warneck',
      ano: '1901',
      titulo:
        'Outline of a History of Protestant Missions from the Reformation to the Present Time',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/outlineofhistorypc00warn',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Documenta o longo período em que o protestantismo praticamente não fez missões e a explosão de sociedades missionárias a partir do fim do século XVIII — a base factual da seção sobre o paradoxo do século XIX. Domínio público.',
    },
    {
      id: 'carey-enquiry',
      autor: 'William Carey',
      ano: '1792',
      titulo:
        'An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/pts_enquiryintotheobligations_1687_2',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O marco a partir do qual as sociedades missionárias se multiplicam. Tratado em detalhe no verbete sobre teologia de missões. Domínio público.',
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
      nota: 'O documento cuja subscrição estava justamente em disputa nas controvérsias do início do século XX — o que se entende por adotar uma confissão é o assunto do verbete sobre subscrição confessional.',
    },
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      titulo: 'History of the Christian Church (8 volumes)',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Obra de referência para o período anterior, útil como pano de fundo da ortodoxia pós-Reforma. Hospedada na CCEL, que recusa IPs de nuvem: a auditoria automática não consegue confirmá-la daqui, mas o endereço abre normalmente no navegador.',
    },
  ],
};
