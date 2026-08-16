import type { Verbete } from '../../tipos';

export const logica: Verbete = {
  id: 'cg58-logica',
  disciplina: 'CG58',
  unidade: 8,
  titulo: 'Lógica',
  subtitulo: 'Um argumento ruim em favor de uma doutrina verdadeira faz mais estrago do que argumento nenhum',
  objetivo:
    'Ao final, você distinguirá validade de verdade e entenderá por que as duas se confundem com facilidade, reconhecerá de imediato as duas formas condicionais inválidas que aparecem em quase toda apologética popular, saberá identificar a equivocação — a falácia que mais estrago faz em teologia —, e terá uma resposta consistente para a pergunta se a lógica limita Deus.',
  atualizadoEm: '2026-08-16',
  verMais: ['cg08-filosofia', 'cg09-historia-filosofia', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Leia dois argumentos em defesa da mesma afirmação verdadeira, e decida qual dos dois presta.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Se a Escritura é inspirada, então ela não se contradiz. Ela não se contradiz. Logo, é inspirada.',
        'Se a Escritura é inspirada, então ela não se contradiz. Encontrou-se uma contradição real e insolúvel. Logo, ela não é inspirada.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O primeiro defende a doutrina que você provavelmente sustenta, e é **inválido**. O segundo ataca essa mesma doutrina, e é **válido** — o que não significa que sua conclusão seja verdadeira, porque a segunda premissa é falsa e cabe justamente ao apologeta mostrar isso.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Aqui está a razão de a lógica interessar ao teólogo, e ela não é o refinamento acadêmico. Quem defende uma doutrina verdadeira com um argumento inválido entrega ao ouvinte atento a impressão de que a doutrina não se sustenta. O prejuízo não é do argumento: é da coisa defendida.',
    },
    {
      tipo: 'secao',
      titulo: 'Validade e verdade são coisas diferentes',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A confusão entre as duas é a origem da maior parte dos erros. Verdade é propriedade de proposições: uma afirmação é verdadeira quando corresponde ao que é o caso. Validade é propriedade de argumentos: uma inferência é válida quando, **sendo as premissas verdadeiras, a conclusão não pode ser falsa**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As duas propriedades variam de forma independente, e é isso que engana. Existem argumentos válidos com premissas falsas e conclusão falsa. Existem argumentos inválidos cujas premissas e conclusão são todas verdadeiras — e esses são os perigosos, porque nada no resultado denuncia o defeito.',
    },
    {
      tipo: 'definicao',
      termo: 'Argumento válido',
      texto:
        'Aquele cuja forma garante que, se as premissas forem verdadeiras, a conclusão também será. A validade depende exclusivamente da estrutura da inferência, não do assunto nem do valor de verdade das partes. Um argumento válido cujas premissas são de fato verdadeiras chama-se sólido — e é isso, não a mera validade, que se busca numa discussão.',
    },
    {
      tipo: 'secao',
      titulo: 'As quatro formas condicionais, e as duas que enganam',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quase toda argumentação apologética passa por um condicional — se A, então B. Há quatro modos de raciocinar a partir dele, e vale memorizar os quatro, porque dois são válidos e dois não são, e a semelhança entre eles é a armadilha mais comum.',
    },
    {
      tipo: 'lista',
      itens: [
        'Afirmar o antecedente (válido). Se A, então B. Ocorre A. Logo, B. — Se Cristo ressuscitou, a nossa fé não é vã. Cristo ressuscitou. Logo, a nossa fé não é vã.',
        'Negar o consequente (válido). Se A, então B. Não ocorre B. Logo, não A. — Se Cristo não ressuscitou, a nossa pregação é vã. A nossa pregação não é vã. Logo, Cristo ressuscitou. É a forma que Paulo usa em 1 Coríntios 15, e é o modo pelo qual uma teoria é refutada por suas consequências.',
        'Afirmar o consequente (inválido). Se A, então B. Ocorre B. Logo, A. — Se o livro é inspirado, não se contradiz. Não se contradiz. Logo, é inspirado. O defeito: outros livros não se contradizem sem serem inspirados. A ausência de contradição é condição necessária, não suficiente.',
        'Negar o antecedente (inválido). Se A, então B. Não ocorre A. Logo, não B. — Se alguém é batizado, pertence à igreja visível. Fulano não foi batizado. Logo, não pertence a nada. O defeito: negar a condição não elimina outros caminhos para o mesmo resultado.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare que as duas formas inválidas não são raras nem grosseiras: são exatamente o formato de boa parte da apologética popular, tanto a que defende quanto a que ataca. Reconhecê-las de imediato é a habilidade mais rentável de todo este verbete.',
    },
    {
      tipo: 'secao',
      titulo: 'A equivocação, que em teologia faz mais estrago que todas as outras',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma falácia merece tratamento próprio porque o vocabulário teológico é o terreno mais fértil que existe para ela. A equivocação ocorre quando uma palavra muda de sentido no meio do argumento, de modo que a conclusão só se sustenta trocando o significado no caminho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tome a discussão sobre o livre-arbítrio. Um lado afirma que o homem é livre; o outro nega. Antes de decidir quem tem razão, é preciso perguntar o que cada um chama de liberdade. Se liberdade significa ausência de coação externa — ninguém escolhe com uma arma na cabeça —, a tradição reformada afirma que o homem é livre. Se significa capacidade de escolher contra a própria inclinação dominante, ela nega. Boa parte do debate popular consiste em duas pessoas usando a mesma palavra em sentidos diferentes e concluindo que a outra é herética.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo ocorre com **mundo** nas discussões sobre a extensão da expiação, com **fé** quando se compara Paulo e Tiago, e com **lei** quando se debate a relação entre lei e evangelho. Em cada caso, a primeira pergunta útil não é quem está certo, e sim se os dois estão falando da mesma coisa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Foi exatamente por isso que a escolástica reformada multiplicou distinções — vontade antecedente e consequente, necessidade de consequência e do consequente, capacidade natural e moral. As distinções não são pedantismo: são o mecanismo pelo qual se impede que um debate inteiro seja uma equivocação prolongada.',
    },
    {
      tipo: 'lista',
      itens: [
        'Petição de princípio: usar como premissa aquilo que se quer provar. "A Bíblia é a Palavra de Deus porque afirma ser" só funciona para quem já aceitou a conclusão.',
        'Falso dilema: reduzir a duas as alternativas quando há mais. "Ou Deus é soberano ou o homem é responsável" descarta por decreto a posição que a tradição de fato sustenta.',
        'Espantalho: refutar uma versão enfraquecida da posição alheia. Reconhece-se pelo fato de o adversário não se reconhecer na descrição.',
        'Ad hominem: atacar quem argumenta em vez do argumento. Frequente em polêmica teológica, e especialmente inútil, porque um herege pode estar certo sobre uma questão particular.',
        'Apelo indevido à autoridade: citar um nome respeitado fora de sua competência, ou como se a citação encerrasse a questão. Citar Calvino é dar um testemunho, não apresentar uma prova.',
      ],
    },
    {
      tipo: 'secao',
      titulo: 'A lógica limita Deus?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Chega-se à pergunta que a disciplina reserva para o fim, e que costuma ser feita em tom de armadilha: se Deus é onipotente, ele pode fazer um círculo quadrado? Se não pode, há algo acima dele; se pode, então a lógica não vale para falar dele, e a teologia inteira desaba.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta da tradição desfaz o dilema pela primeira premissa. As leis lógicas não são normas externas impostas a Deus — são descrição de como ele é. Deus não pode mentir, e isso não é limitação de poder: é consistência de caráter. A Escritura chega a dizer que ele não pode negar-se a si mesmo. A não-contradição, aplicada a Deus, é essa mesma fidelidade formulada de outro modo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E um círculo quadrado não é uma coisa difícil que exija muito poder: é a ausência de coisa alguma, uma expressão que se anula. Perguntar se Deus pode criá-lo é perguntar se ele pode criar nada, disfarçado de pergunta sobre onipotência.',
    },
    {
      tipo: 'termo',
      termo: 'Mistério não é contradição',
      texto:
        'Contradição é afirmar e negar a mesma coisa, no mesmo sentido, ao mesmo tempo e sob o mesmo aspecto. Mistério é afirmar algo verdadeiro cuja articulação interna excede a nossa capacidade de compreender. A Trindade não é um contra três: é um quanto à essência e três quanto às pessoas — aspectos diferentes, portanto sem contradição. Quem acusa a doutrina de ilógica quase sempre deixou de ler a qualificação, que existe justamente para evitar a contradição que ele julga ter encontrado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale enunciar a distinção que decorre daí, porque ela protege dos dois lados. Deus é **incompreensível**, isto é, nunca inteiramente abarcado pela mente criada. Não é **irracional**, isto é, não afirma de si coisas que se destroem mutuamente. Quem confunde as duas ou exige da teologia uma transparência que ela não pode ter, ou usa a palavra mistério para blindar afirmações que simplesmente não foram pensadas.',
    },
    {
      tipo: 'controversia',
      titulo: 'Que estatuto tem a lógica',
      posicoes: [
        {
          escola: 'Realismo teísta',
          sintese:
            'As leis lógicas refletem a natureza e a mente de Deus, e por isso valem universalmente e não poderiam ser de outro modo. É a posição majoritária na tradição reformada e a que sustenta a argumentação teológica: se a lógica fosse convenção, nenhuma inferência a partir da Escritura teria força obrigatória. A dificuldade que enfrenta é explicar em que sentido preciso essas leis estão em Deus, sem transformá-las em criaturas nem em rivais.',
        },
        {
          escola: 'Convencionalismo',
          sintese:
            'A lógica é um instrumento humano, útil e revisável, e a existência de lógicas não clássicas mostraria que o sistema clássico é uma escolha entre outras. Tem o mérito de reconhecer que há formalizações alternativas; a fragilidade é que as próprias lógicas não clássicas são construídas e avaliadas por raciocínio que pressupõe a não-contradição, de modo que a alternativa não alcança o princípio que pretende relativizar.',
        },
        {
          escola: 'Voluntarismo',
          sintese:
            'Deus poderia ter decretado outras leis lógicas, do mesmo modo que decretou outras leis físicas; sustentar o contrário seria submeter a vontade divina a uma necessidade. Preserva com vigor a liberdade de Deus, mas ao preço de tornar o próprio discurso teológico provisório — inclusive a afirmação de que Deus é fiel, que deixaria de excluir seu contrário.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Duas advertências, e a segunda é para quem gostou demais deste verbete. A primeira: ao preparar uma defesa da fé, examine a forma do seu argumento antes de admirar a conclusão. Se ele afirma o consequente, o ouvinte que perceber não concluirá que você errou o raciocínio — concluirá que a doutrina precisa de raciocínios torcidos para se sustentar, e você terá trabalhado contra si mesmo com a melhor das intenções. A segunda: saber o nome de uma falácia não é ter razão. É comum que alguém aprenda a lista e passe a usá-la como taco, encerrando conversas com um rótulo em latim em vez de responder ao que foi dito. Isso é pior do que a falácia original, porque destrói a única coisa que tornava a discussão útil, que era a disposição das duas partes de examinar o próprio pensamento. A lógica serve para corrigir quem a estuda antes de servir para corrigir os outros.',
    },
  ],
  fontes: [
    {
      id: 'watts-logick',
      autor: 'Isaac Watts',
      ano: '1724',
      titulo: 'Logick: or, The Right Use of Reason in the Enquiry after Truth',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/logickorrightuse00wattuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O manual de lógica escrito por um pastor — o mesmo autor de centenas de hinos — e usado como livro-texto em universidades inglesas e americanas por mais de um século. Trata explicitamente do uso da razão nos assuntos de religião, o que o torna a introdução mais adequada para este currículo. Domínio público.',
    },
    {
      id: 'sep-fallacies',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Fallacies',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/fallacies/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Catálogo crítico das falácias com a discussão de por que várias delas são mais difíceis de definir do que os manuais sugerem — inclusive a petição de princípio e o apelo à autoridade, que nem sempre são falaciosos.',
    },
    {
      id: 'sep-aristotle-logic',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: "Aristotle's Logic",
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/aristotle-logic/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'A origem do aparato silogístico que a escolástica adotou e que a escolástica reformada usa até hoje — pano de fundo da seção sobre distinções e equivocação.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Exemplo em escala industrial do uso das distinções para evitar equivocação: cada questão é posta separando primeiro os sentidos em que os termos podem ser tomados. É o método descrito aqui, em operação. Domínio público.',
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
      nota: 'O capítulo I afirma que o conselho de Deus se encontra na Escritura expressamente ou por boa e necessária consequência dela deduzido — isto é, a própria Confissão autoriza a inferência lógica como via de doutrina, o que dá a esta disciplina estatuto confessional e não apenas utilitário.',
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
      nota: 'O Livro I trata da incompreensibilidade de Deus sem concluir dela que nada se possa afirmar — a distinção entre incompreensível e irracional discutida aqui. Hospedado na CCEL, que recusa IPs de nuvem: a auditoria automática não confirma daqui, mas o endereço abre normalmente no navegador.',
    },
  ],
};
