import type { Verbete } from '../../tipos';

export const historiaIPB: Verbete = {
  id: 'th06-historia-ipb',
  disciplina: 'TH06',
  unidade: 12,
  titulo: 'História da Igreja Presbiteriana do Brasil',
  subtitulo:
    'As marcas mais distintivas da IPB não vieram de Genebra nem de Princeton: foram forjadas em disputas brasileiras entre 1859 e 1903',
  objetivo:
    'Ao final, você saberá por que a IPB tem traços que as igrejas-mães americanas não tinham, entenderá o que Simonton de fato construiu em oito anos e por que isso importa mais que sua biografia, conhecerá as três questões que produziram o cisma de 1903 e as duas leituras que dele se fazem, saberá o que foi o Plano Brasileiro, e terá critérios para estudar história denominacional sem cair na hagiografia nem no ajuste de contas.',
  atualizadoEm: '2026-08-18',
  verMais: ['th05-igreja-brasileira', 'tp12-governo-presbiteriano', 'tp26-missoes-urbanas'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Pergunte a um presbiteriano brasileiro por que a sua igreja é como é, e a resposta costuma apontar para longe: Genebra, Westminster, Princeton. Mas várias das marcas que mais distinguem a IPB — a incompatibilidade declarada com a maçonaria, a reserva diante do ecumenismo, o controle nacional do trabalho missionário, a rede própria de seminários — não vieram de lá.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A prova é simples: **as igrejas-mães americanas que enviaram os missionários não tinham essas marcas.** Elas nasceram aqui, de conflitos ocorridos entre a chegada do primeiro missionário e o cisma de 1903 — quarenta e quatro anos que definiram o que a denominação viria a ser. Quem não conhece esse período não entende a própria igreja, e tende a atribuir a princípios eternos o que foi decidido em assembleia, com voto apertado.',
    },
    {
      tipo: 'secao',
      titulo: 'Oito anos, quatro instituições',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ashbel Green Simonton desembarcou no Rio de Janeiro em agosto de 1859, com vinte e sete anos, enviado pela Igreja Presbiteriana dos Estados Unidos. Morreu de febre amarela em dezembro de 1867, aos trinta e quatro. Teve, portanto, oito anos de trabalho — e o que fez neles explica por que a igreja sobreviveu à sua morte.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ele não construiu uma congregação em torno de si. Construiu **instituições que funcionavam sem ele**: a primeira igreja presbiteriana do país, em 1862; o jornal *Imprensa Evangélica*, em 1864, que foi o primeiro periódico protestante brasileiro e por décadas o principal instrumento de formação de um público leitor evangélico; o Presbitério do Rio de Janeiro, em 1865, que deu à obra governo próprio; e o seminário, em 1867, que passou a formar pastores brasileiros em solo brasileiro.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem dessas quatro fundações é ela mesma uma tese missiológica, e vale notá-la porque contradiz o instinto comum. Simonton não esperou a igreja crescer para depois criar estrutura: **criou governo e formação antes de haver o que governar em escala**. Quando morreu, aos trinta e quatro anos, havia igreja, imprensa, concílio e seminário. É o oposto do modelo em que tudo depende do fundador e desaba com ele.',
    },
    {
      tipo: 'secao',
      titulo: 'O padre que virou o primeiro pastor brasileiro',
    },
    {
      tipo: 'paragrafo',
      texto:
        'José Manoel da Conceição era sacerdote católico, vigário respeitado no interior paulista, quando se converteu e foi ordenado em 1865 — o primeiro brasileiro no ministério presbiteriano. E o que ele fez a seguir não coube em nenhum plano de missão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Recusou salário, distribuiu o que tinha e passou a percorrer o interior a pé, pregando de vila em vila, dormindo onde o recebessem, sem sede, sem relatório e sem congregação fixa. Deixou atrás de si um rastro de gente que ouviu o evangelho em português, de boca brasileira, num tempo em que protestantismo era coisa de estrangeiro. Morreu pobre em 1873, à beira de uma estrada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O caso incomodava a missão, e é honesto dizer por quê: um homem que não presta contas, não fixa trabalho e não se deixa administrar é um problema para qualquer estrutura, por mais santo que seja. Mas o incômodo revela a pergunta que atravessaria os quarenta anos seguintes — **o protestantismo brasileiro seria um transplante bem administrado ou uma planta nativa?** As duas respostas tinham argumentos, e nenhuma era desonesta.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa pergunta não é nova, e o Novo Testamento a enfrenta na forma mais aguda que existe: a de gente se identificando pelo nome de quem a evangelizou.',
    },
    {
      tipo: 'passagem',
      referencia: '1 Coríntios 3.4-7',
      texto:
        'Porque, dizendo um: Eu sou de Paulo; e outro: Eu de Apolo; porventura não sois carnais? Pois, quem é Paulo, e quem é Apolo, senão ministros pelos quais crestes, e conforme o que o Senhor deu a cada um? Eu plantei, Apolo regou; mas Deus deu o crescimento. Pelo que, nem o que planta é alguma coisa, nem o que rega, mas Deus, que dá o crescimento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo não resolve a disputa dizendo qual dos dois vale mais. Retira os dois do centro. **A igreja não é de quem a plantou nem de quem a regou** — e essa é, exatamente, a régua com que se deve ler o que aconteceu em 1903, dos dois lados.',
    },
    {
      tipo: 'secao',
      titulo: '1903: três questões e uma ruptura',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 31 de julho de 1903, sete pastores e quinze presbíteros deixaram o Sínodo e organizaram o Presbitério Independente, núcleo da atual Igreja Presbiteriana Independente do Brasil. À frente estava Eduardo Carlos Pereira, um dos pastores brasileiros mais influentes de sua geração. Três questões tinham se acumulado.',
    },
    {
      tipo: 'lista',
      itens: [
        '**A questão missionária.** Quem dirige o trabalho: o concílio brasileiro ou a missão estrangeira que o financia? Havia, na prática, duas autoridades sobre o mesmo campo, e a nacional dependia do dinheiro da outra.',
        '**A questão educacional.** Deve a igreja manter escolas de currículo geral, como o Colégio Internacional e a Escola Americana, ou concentrar tudo em evangelização direta e formação de obreiros? Estava em jogo para onde iam recursos escassos.',
        '**A questão maçônica.** Pode um oficial da igreja pertencer à maçonaria? Para uns, sociedade filantrópica sem implicação religiosa; para outros, sistema com juramentos, ritos e teologia próprios, incompatível com os votos de um presbítero.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A terceira foi a que rompeu, e é sobre ela que a memória das duas denominações diverge até hoje. É preciso registrar, sem suavizar, que havia também conflito pessoal acumulado, e que o debate se conduziu com aspereza dos dois lados — em jornal, em púlpito e em concílio. **Nenhuma leitura honesta do episódio pode apresentar um dos grupos como puro e o outro como facção.**',
    },
    {
      tipo: 'controversia',
      titulo: 'Como se deve ler o cisma de 1903',
      posicoes: [
        {
          escola: 'Questão de princípio doutrinário',
          sintese:
            'Leitura predominante na IPB: o ponto era a maçonaria, e era doutrinário — uma sociedade com juramentos vinculantes, ritual religioso próprio e um deísmo implícito não é compatível com o ofício presbiteral. A igreja não podia transigir sem relativizar a exclusividade de Cristo, e quem saiu recusou a disciplina do concílio. Recebe a objeção de que a firmeza sobre maçonaria conviveu com tolerância a outras acomodações mais consequentes.',
        },
        {
          escola: 'Questão de autonomia nacional',
          sintese:
            'Leitura predominante na IPI: o conflito real era o controle estrangeiro sobre uma igreja já madura, com pastores nacionais capazes e concílio próprio, e a maçonaria foi o ponto em que a tensão cristalizou. A prova estaria na cronologia — as questões missionária e educacional vinham fervendo havia anos. Recebe a objeção de que a autonomia foi conquistada de todo modo, e que a ruptura custou décadas de duplicação de trabalho para antecipá-la.',
        },
        {
          escola: 'Leitura historiográfica combinada',
          sintese:
            'A que hoje predomina entre historiadores das duas casas: as três questões eram reais, reforçavam-se mutuamente, e o desfecho foi decidido também por temperamentos e mágoas que nenhum dos lados registrou em ata. Tem a vantagem de explicar por que nenhuma das duas narrativas fechadas dá conta dos documentos — e o desconforto de não fornecer a nenhuma das duas igrejas a absolvição que suas memórias institucionais gostariam.',
        },
      ],
    },
    {
      tipo: 'termo',
      termo: 'Plano Brasileiro',
      texto:
        'Também chamado *modus operandi*: o acordo, firmado nas primeiras décadas do século XX, que repartiu atribuições entre as missões norte-americanas e a igreja nacional — em linhas gerais, cabendo às missões abrir trabalho em campo novo e à igreja brasileira assumi-lo uma vez organizado, com transferência progressiva de propriedades e de direção. É a resposta institucional àquela mesma pergunta de 1903, dada depois do estrago e por negociação, em vez de por ruptura. Estudá-lo é ver como uma igreja passa, na prática, de campo missionário a igreja.',
    },
    {
      tipo: 'definicao',
      termo: 'Igreja nacional',
      texto:
        'Igreja que, plantada por missão estrangeira, passou a governar-se, sustentar-se e propagar-se por si mesma — as três autonomias que a missiologia reformada formulou no século XIX. A definição tem uma consequência que a IPB aprendeu do modo difícil: **autonomia não é conquistada quando a igreja é capaz dela, e sim quando a estrutura que a financia decide reconhecê-la** — e é nesse intervalo, entre a capacidade e o reconhecimento, que os conflitos se produzem. Igreja nacional não significa igreja isolada nem igreja sem dívida com quem a plantou; significa igreja cujo governo responde aos seus próprios concílios, e cujos erros são seus.',
    },
    {
      tipo: 'secao',
      titulo: 'Como estudar a história da própria denominação',
    },
    {
      tipo: 'paragrafo',
      texto:
        'História denominacional tem dois vícios simétricos, e ambos produzem texto ruim: a hagiografia, que transforma fundadores em santos sem arestas, e o ajuste de contas, que lê o passado só para condenar. Estas precauções ajudam a escapar dos dois.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Leia a fonte do período, não o resumo.** Os jornais da época estão digitalizados e são gratuitos: a *Imprensa Evangélica* mostra o que se discutia, em que tom e com que argumentos — antes de qualquer historiador organizar a narrativa.',
        '**Leia o outro lado na voz dele.** Sobre 1903, isso significa ler o que a IPI diz de si mesma, e não apenas o que se diz dela. Vale a inversão para quem estuda a partir da IPI.',
        '**Desconfie de toda narrativa em que um lado só erra.** Quando o relato de um cisma não registra nenhum erro do próprio grupo, o que se está lendo é apologia, e ela é reconhecível justamente por essa simetria ausente.',
        '**Repare no que é decisão administrativa e no que é princípio.** Muita coisa que hoje se defende como identidade confessional começou como solução prática para escassez de dinheiro ou de gente — o que não a torna errada, mas muda o peso do argumento.',
        '**Datas e números primeiro, interpretação depois.** Quantas igrejas, quantos comungantes, quantos pastores nacionais e estrangeiros em cada ano. A curva costuma desmentir tanto o lamento quanto a euforia.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Há um uso pastoral desta disciplina que não aparece na ementa. Numa igreja em conflito, quase sempre alguém dirá que a divisão é impensável, e alguém dirá que ela é inevitável — e as duas frases costumam ser ditas por quem não conhece história nenhuma. Quem estudou 1903 sabe que homens sérios, ortodoxos e piedosos se separaram por questões que eram reais, e que o custo disso foi pago por gerações que não participaram da decisão. Isso não torna toda divisão errada; a Reforma não foi um erro. Mas desfaz a leveza com que se fala em romper. E desfaz também, no sentido contrário, a ilusão de que basta calar para preservar a paz — porque as três questões de 1903 estavam abertas havia anos, e o silêncio sobre elas não impediu nada. **A lição que a história cobra é a mesma nos dois casos: as coisas se resolvem enquanto ainda cabem numa conversa.**',
    },
  ],
  fontes: [
    {
      id: 'bn-periodicos-religiosos',
      autor: 'Fundação Biblioteca Nacional',
      titulo: 'Periódicos religiosos na Hemeroteca Digital Brasileira',
      publicacao: 'BNDigital',
      url: 'https://bndigital.bn.gov.br/dossies/periodicos-religiosos-na-hemeroteca-digital-brasileira/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'O guia da própria Biblioteca Nacional aos periódicos religiosos digitalizados, com a Imprensa Evangélica entre eles. É o caminho mais curto para ler o protestantismo brasileiro do século XIX na fonte, e não no resumo.',
    },
    {
      id: 'hemeroteca-bn',
      autor: 'Fundação Biblioteca Nacional',
      titulo: 'Hemeroteca Digital Brasileira — jornais e revistas',
      publicacao: 'Biblioteca Nacional',
      url: 'https://memoria.bn.br/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'A ferramenta de busca no acervo digitalizado de periódicos brasileiros, com texto pesquisável. Permite rastrear um nome, uma polêmica ou uma data pela imprensa da época — inclusive a repercussão pública das disputas que levaram a 1903.',
    },
    {
      id: 'ipb-sobre',
      autor: 'Igreja Presbiteriana do Brasil',
      titulo: 'Sobre a IPB — histórico e identidade',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/sobre-a-ipb',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O relato oficial da denominação sobre a própria origem e organização. Leia-o como fonte de posição institucional, que é o que ele é, e não como narrativa neutra — o que vale igualmente para o equivalente da outra casa.',
    },
    {
      id: 'ipib-oficial',
      autor: 'Igreja Presbiteriana Independente do Brasil',
      titulo: 'Igreja Presbiteriana Independente do Brasil — sítio oficial',
      publicacao: 'IPIB',
      url: 'https://ipib.org.br/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O outro lado de 1903 na própria voz. Está aqui por exigência de método: sobre um cisma, ler apenas a versão da casa em que se está é o modo mais garantido de não entender o que aconteceu.',
    },
    {
      id: 'simonton-sermoes',
      autor: 'Ashbel Green Simonton',
      ano: '1867',
      titulo: 'Sermões escolhidos',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/sermoesescolhido00simo',
      idioma: 'pt',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O que o fundador de fato pregava, em português e em fonte primária — útil justamente para corrigir a imagem construída depois, que tende a projetar sobre ele as ênfases de quem o invoca.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — Constituição e códigos',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A forma atual do governo cuja construção esta história narra. Ler a Constituição sabendo de onde vieram seus dispositivos muda o que se enxerga neles: vários resolvem, em texto, disputas que custaram décadas.',
    },
  ],
};
