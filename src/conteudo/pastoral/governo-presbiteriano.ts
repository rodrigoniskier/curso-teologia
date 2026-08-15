import type { Verbete } from '../../tipos';

export const governoPresbiteriano: Verbete = {
  id: 'tp12-governo-presbiteriano',
  disciplina: 'TP12',
  unidade: 1,
  titulo: 'O Governo Presbiteriano',
  subtitulo: 'Por que a forma de governo da igreja é questão doutrinária, e não administrativa',
  objetivo:
    'Ao final, você saberá distinguir as três formas históricas de governo eclesiástico e o argumento bíblico de cada uma, entender por que presbítero e bispo designam o mesmo ofício no Novo Testamento, conhecer a estrutura dos quatro concílios da IPB e o que significa dizer que o poder da igreja é ministerial e declarativo.',
  atualizadoEm: '2026-08-15',
  verMais: ['ts11-subscricao-confessional', 'ts09-principio-regulador', 'th03-reforma'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Poucas matérias do seminário são estudadas com tanto desânimo quanto Constituição e Ordem. A impressão inicial é de burocracia: artigos, prazos, quóruns, atas. Parece o regimento interno de uma associação, e não teologia — algo que se decora para o exame de ordenação e se esquece depois.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A impressão engana, e o custo de mantê-la é alto. Toda forma de governo eclesiástico responde, na prática, a uma pergunta doutrinária: quem tem autoridade sobre a consciência do crente, e o que limita essa autoridade? Igrejas que nunca discutiram isso acabam governadas pela força de personalidade de alguém — o que é uma resposta à pergunta, e das piores.',
    },

    { tipo: 'secao', titulo: 'As três respostas históricas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A cristandade produziu três modelos, e cada um se apoia num argumento bíblico que merece ser enunciado com honestidade antes de ser respondido.',
    },
    {
      tipo: 'controversia',
      titulo: 'Onde reside a autoridade de governo',
      posicoes: [
        {
          escola: 'Episcopal',
          sintese:
            'A autoridade está no bispo, ofício distinto e superior ao dos presbíteros, em sucessão dos apóstolos. Apela para a posição de Tiago em Jerusalém, para o encargo dado a Timóteo e Tito sobre outras igrejas, e para o testemunho antigo de Inácio de Antioquia, já no início do século II. A dificuldade é que o próprio Novo Testamento usa "bispo" e "presbítero" como sinônimos, e a distinção entre os dois aparece depois do período apostólico.',
        },
        {
          escola: 'Congregacional',
          sintese:
            'A autoridade está na assembleia dos membros; cada igreja local é autônoma e não se sujeita a nenhum concílio externo. Apela para Mateus 18.17, que manda "dize-o à igreja", e para a participação da congregação na escolha dos sete em Atos 6. A dificuldade é o Concílio de Jerusalém em Atos 15, cuja decisão é enviada a outras igrejas como obrigatória, e a existência de autoridade que não é da assembleia inteira mas de quem preside.',
        },
        {
          escola: 'Presbiteriana',
          sintese:
            'A autoridade está em presbíteros eleitos pelo povo e reunidos em concílios escalonados. Apela para a pluralidade de presbíteros em cada igreja (At 14.23), para a identidade entre bispo e presbítero, e para Atos 15 como assembleia que decide para além de uma congregação. A dificuldade é que o Novo Testamento não descreve a estrutura de concílios com a minúcia que as constituições modernas adotam — o que exige distinguir o que é princípio do que é aplicação prudente.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale notar o que essa exposição já mostra: nenhum dos três modelos é invenção arbitrária, e todos apelam a texto. A escolha reformada não é feita por ausência de argumento contrário, e sim por peso comparativo dos argumentos.',
    },

    { tipo: 'secao', titulo: 'O argumento que decide: bispo e presbítero', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto exegético central é simples de verificar e difícil de contornar. Em Atos 20, Paulo convoca os **presbíteros** (presbyteroi) da igreja de Éfeso e, ao lhes falar, diz que o Espírito Santo os constituiu **bispos** (episkopoi) para pastorearem o rebanho. São as mesmas pessoas, no mesmo discurso, com os dois títulos.',
    },
    {
      tipo: 'passagem',
      referencia: 'Atos 20.17, 28',
      texto:
        'De Mileto mandou a Éfeso chamar os presbíteros da igreja. [...] Atendei por vós e por todo o rebanho sobre o qual o Espírito Santo vos constituiu bispos, para pastoreardes a igreja de Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tito confirma a equivalência: Paulo manda constituir **presbíteros** em cada cidade e, na frase seguinte, justifica os requisitos dizendo que "o **bispo** deve ser irrepreensível" (Tt 1.5-7). Se fossem ofícios distintos, o argumento não se sustentaria.',
    },
    {
      tipo: 'termo',
      termo: 'Os três termos e o que cada um destaca',
      texto:
        'Presbyteros (ancião) aponta para a maturidade e a dignidade de quem governa. Episkopos (supervisor, bispo) aponta para a função de vigiar e cuidar. Poimen (pastor) aponta para a imagem do rebanho — alimentar, guiar, defender. Não são três cargos: são três ângulos do mesmo ofício, e 1Pedro 5.1-2 usa os três na mesma frase, ao exortar os presbíteros a pastorearem, exercendo a supervisão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Segue daí a pluralidade. Paulo e Barnabé constituem presbíteros — no plural — em cada igreja (At 14.23), e Tiago manda chamar "os presbíteros da igreja" (Tg 5.14), também no plural para uma congregação. O governo por um só homem, seja ele bispo ou pastor solitário, não é o padrão descrito. E a razão não é desconfiança do indivíduo: é que a autoridade compartilhada protege tanto o rebanho quanto o próprio ministro, que assim não decide sozinho o que não deveria decidir sozinho.',
    },

    { tipo: 'secao', titulo: 'Os concílios, e por que são escalonados', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se a autoridade é de presbíteros reunidos, resta a pergunta prática: reunidos até onde? A resposta presbiteriana toma Atos 15 como paradigma. Uma disputa surgida em Antioquia não é resolvida ali: a questão sobe a uma assembleia de apóstolos e presbíteros em Jerusalém, e a decisão desce em forma de carta obrigatória para igrejas que não participaram do debate. Há, portanto, autoridade que ultrapassa a congregação local.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Igreja Presbiteriana do Brasil organiza isso em quatro concílios, cada um com jurisdição própria e com recurso para o seguinte.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Conselho — governa a igreja local. Composto pelo pastor, que o preside, e pelos presbíteros regentes eleitos pela congregação. Recebe e disciplina membros, administra os sacramentos por meio do ministro e cuida da vida espiritual do rebanho.',
        'Presbitério — reúne os ministros e representantes dos conselhos de uma região. É o concílio que ordena ministros, organiza e dissolve igrejas, e julga o que envolve pastores — que respondem ao presbitério, e não ao conselho local.',
        'Sínodo — reúne presbitérios. Funciona sobretudo como instância de recurso e de coordenação regional.',
        'Supremo Concílio — a assembleia nacional, última instância de recurso e responsável pelo que é comum a toda a denominação, inclusive alterações constitucionais.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Duas características desse arranjo costumam passar despercebidas e são justamente as importantes. A primeira: **o pastor não é chefe do conselho, é seu presidente e um entre os presbíteros** — tem voto como os demais. A segunda: **o ministro não é membro da igreja local que serve, mas do presbitério**. Isso não é tecnicalidade: significa que a congregação não pode demitir seu pastor por maioria de votos numa noite de conflito, nem o pastor pode se blindar da disciplina alegando lealdade da própria igreja. Cada um responde a uma instância que não controla.',
    },

    { tipo: 'secao', titulo: 'O limite: poder ministerial, não legislativo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Toda essa estrutura poderia produzir uma máquina eclesiástica autoritária, e a tradição reformada antecipou o risco com uma qualificação que é o coração da doutrina. O poder da igreja não é o de criar leis, e sim o de aplicar as de Cristo.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo XX, § 2',
      fonteId: 'cfw-ipib',
      texto:
        'Somente Deus é o Senhor da consciência, e a deixou livre das doutrinas e mandamentos dos homens que sejam de qualquer modo contrários à sua Palavra, ou que, em matéria de fé ou de culto, sejam um acréscimo a ela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí se dizer que o poder eclesiástico é **ministerial** — exercido como serviço de quem administra o que é de outro — e **declarativo** — limitado a declarar o que a Escritura já diz. Um concílio que decide algo contrário à Palavra não obriga ninguém, por mais regular que tenha sido sua votação. É a mesma lógica do princípio regulador aplicada ao governo: a igreja não inventa, administra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Fica assim explicado por que a forma de governo é matéria doutrinária. Ela é o mecanismo concreto pelo qual a igreja se protege de duas tiranias simétricas — a do clérigo que se torna senhor da fé alheia e a da maioria que decide por gosto o que só a Escritura pode decidir.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar uma discussão interna que persiste entre presbiterianos: se o presbítero regente e o ministro ocupam **um só** ofício em duas funções, ou **dois** ofícios distintos. Quem sustenta o ofício único apela para a identidade de vocabulário no Novo Testamento; quem sustenta a distinção apela para 1Timóteo 5.17, que fala dos presbíteros que presidem bem e, entre eles, dos que "se afadigam na palavra e no ensino". A prática da IPB reflete a segunda leitura ao exigir formação e ordenação distintas, sem que a primeira seja tratada como erro.',
    },

    {
      tipo: 'definicao',
      termo: 'Governo presbiteriano',
      texto:
        'É a forma de governo eclesiástico em que Cristo, único Cabeça da Igreja, exerce sua autoridade por meio de presbíteros eleitos pelo povo e reunidos em concílios escalonados, cujo poder é ministerial e declarativo — administra e aplica a Palavra, não cria obrigação nova. Repousa sobre a identidade neotestamentária entre presbítero e bispo, sobre a pluralidade de presbíteros em cada igreja e sobre a existência de assembleias com autoridade além da congregação local, conforme o padrão de Atos 15.',
    },

    {
      tipo: 'pastoral',
      texto:
        'Há um serviço pastoral escondido nos artigos que parecem burocráticos, e ele aparece justamente nas horas ruins. Quando surge um conflito grave numa igreja — uma acusação contra o pastor, uma divisão na congregação, uma decisão que fere alguém —, a existência prévia de regras claras e de instâncias de recurso é o que impede que o caso seja resolvido pelo mais forte, pelo mais eloquente ou pelo mais bem relacionado. O membro ferido tem a quem recorrer; o pastor acusado tem direito a processo e a defesa; a minoria vencida tem caminho legítimo em vez de ter de escolher entre calar e romper. Nada disso é frieza jurídica: é o cuidado que a igreja toma, em tempo de paz, com os irmãos que um dia estarão em tempo de guerra. Estudar Constituição e Ordem com atenção é, nesse sentido, um ato pastoral antecipado — e quem só descobre o regimento durante a crise já chegou tarde.',
    },
  ],

  fontes: [
    {
      id: 'ci-ipb',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '1950',
      titulo: 'Constituição da Igreja Presbiteriana do Brasil (CI/IPB)',
      publicacao: 'Secretaria Executiva da IPB',
      url: 'https://www.executivaipb.com.br/site/constituicao/constituicao.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O texto oficial e vigente, publicado pela própria denominação. É a fonte normativa de tudo o que este verbete descreve sobre concílios, ofícios e jurisdição.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2024',
      titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada',
      publicacao: 'Secretaria Executiva da IPB',
      url: 'https://www.executivaipb.com.br/arquivos/manual_presbiteriano_2024.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A obra de referência que todo oficial precisa ter, distribuída gratuitamente em PDF pela denominação. Reúne Constituição, códigos e princípios de liturgia com remissões cruzadas — dispensa a compra do volume impresso.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XX, XXV, XXX e XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. XX trata da liberdade de consciência; o XXV, da Igreja; o XXX, das censuras eclesiásticas; o XXXI, dos sínodos e concílios, onde se estabelece que suas decisões obrigam apenas se conformes à Palavra.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, caps. 3-4 e 8-11',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'IV.3 trata dos ofícios e sustenta a identidade entre presbítero e bispo; IV.8-11 delimita o poder da Igreja, distinguindo o que ela pode declarar do que não pode impor. Domínio público.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae — locus XVIII, De Ecclesia',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratamento escolástico do governo eclesiástico e da natureza do poder da Igreja, com a resposta detalhada aos argumentos episcopais.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Acervo de textos em português sobre eclesiologia e governo reformado',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Traduções e artigos em português sobre os ofícios, a disciplina eclesiástica e o debate entre os modelos de governo.',
    },
  ],
};
