import type { Verbete } from '../../tipos';

export const igrejaImperial: Verbete = {
  id: 'th02-igreja-imperial',
  disciplina: 'TH02',
  unidade: 20,
  titulo: 'A Igreja Imperial',
  subtitulo: 'De 313 a 590: quando o favor do Estado se revelou prova mais difícil que a perseguição',
  objetivo:
    'Ao final, você saberá o que os éditos de 313 e 380 de fato estabeleceram, entenderá por que uma letra grega decidiu a doutrina de Cristo, saberá o que Calcedônia definiu e o que ela deliberadamente se recusou a explicar, e conhecerá o preço institucional que a igreja pagou pela aliança com o império.',
  atualizadoEm: '2026-08-15',
  verMais: ['th01-igreja-antiga', 'ts01-trindade', 'ts03-pessoa-de-cristo'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Por quase três séculos a igreja orou para que a perseguição acabasse. Ela acabou. E os dois séculos e meio seguintes mostraram que a igreja não estava preparada para o que veio depois — porque o favor imperial trouxe problemas que a hostilidade nunca criara.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'É um período que costuma ser contado de dois modos igualmente ruins. Num deles, Constantino aparece como instrumento providencial e a era imperial como triunfo puro. No outro, ele aparece como o vilão que corrompeu o cristianismo, e tudo o que veio depois é decadência. Nenhuma das duas versões dá conta dos fatos, e as duas atrapalham a leitura dos concílios que definiram o que a igreja crê sobre Cristo.',
    },

    { tipo: 'secao', titulo: 'O que 313 e 380 de fato fizeram', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Convém corrigir de saída uma confusão frequente. O chamado Édito de Milão, de 313, **não** tornou o cristianismo religião oficial do império: concedeu tolerância a todos os cultos e devolveu bens confiscados aos cristãos. Foi liberdade religiosa, não estabelecimento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O estabelecimento veio quase setenta anos depois, com o Édito de Tessalônica, de Teodósio, em 380, que declarou o cristianismo niceno religião do Estado. Entre uma data e outra houve um imperador que tentou restaurar o paganismo — Juliano — e décadas em que ser cristão foi vantajoso sem ser obrigatório.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção importa porque explica o ritmo do que aconteceu. Sob tolerância, a igreja cresce e ganha espaço público; sob estabelecimento, ela ganha algo diferente e mais perigoso — poder coercitivo. E a partir de 380 começa a entrar na igreja, em massa, gente cuja adesão não custa nada. A chamada conversão em massa não foi um sucesso evangelístico: foi a origem do problema do cristianismo nominal, que a Reforma teria de enfrentar mil anos depois.',
    },

    { tipo: 'secao', titulo: 'Uma letra que decidiu a fé', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A liberdade recém-adquirida expôs uma divergência que a perseguição mantivera latente. Ário, presbítero em Alexandria, ensinava que o Filho é a primeira e mais excelsa das criaturas — houve um tempo em que ele não existia. Não era ateísmo nem irreverência: Ário queria proteger a unicidade de Deus, e citava textos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convocado o concílio de Niceia em 325, a disputa se concentrou em duas palavras separadas por uma única letra grega: **homoousios**, da mesma substância que o Pai, e **homoiousios**, de substância semelhante. Gibbon ironizou a briga por um iota, e a ironia erra o alvo.',
    },
    {
      tipo: 'termo',
      termo: 'Homoousios',
      texto:
        'Consubstancial: da mesma substância, ou essência, que o Pai. O termo não aparece na Escritura, e foi escolhido justamente porque os arianos aceitavam todas as fórmulas bíblicas atribuindo-lhes outro sentido. Niceia adotou uma palavra extrabíblica para proteger um ensino bíblico — precedente importante, e que a tradição reformada aceita: a fidelidade se mede pelo conteúdo, não pelo vocabulário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O que estava em jogo não era metafísica desinteressada. Se o Filho é criatura, então os cristãos adoram uma criatura, o que é idolatria; e a salvação, que consiste em ser reconciliado com Deus, teria sido obtida por alguém que não é Deus. Atanásio percebeu isso e passou a vida no assunto — exilado cinco vezes, donde a expressão *Athanasius contra mundum*.',
    },
    {
      tipo: 'citacao',
      autor: 'Concílio de Niceia',
      obra: 'Símbolo de 325',
      fonteId: 'nicea-wikisource',
      texto:
        'Cremos [...] em um só Senhor Jesus Cristo, Filho de Deus, gerado do Pai unigênito, isto é, da substância do Pai; Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro; gerado, não feito, consubstancial ao Pai.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale registrar um fato que desmonta a lenda popular: Niceia **não** votou o cânon das Escrituras nem decidiu que Jesus era divino por maioria política. Discutiu como confessar a divindade que a igreja já adorava, e o arianismo, longe de ser esmagado ali, dominou boa parte do império nas décadas seguintes. A vitória de Niceia só se consolidou em 381, no concílio de Constantinopla, que completou o símbolo com o artigo sobre o Espírito Santo — é esse texto, e não o de 325, que se recita hoje.',
    },

    { tipo: 'secao', titulo: 'Éfeso e Calcedônia: quem é o que sofreu', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Resolvida a divindade do Filho, a pergunta seguinte era inevitável: como a divindade e a humanidade coexistem numa só pessoa? Duas escolas puxaram para lados opostos, e cada uma protegia algo legítimo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nestório, de formação antioquena, recusou o título **theotokos** — mãe de Deus — preferindo *christotokos*. Queria evitar a impressão de que Maria gerasse a divindade, e o efeito colateral foi separar as duas naturezas a ponto de parecerem duas pessoas. Éfeso o condenou em 431. Do lado oposto, Êutiques, de formação alexandrina, tanto uniu as naturezas que a humanidade acabou absorvida pela divindade como uma gota de mel no mar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Calcedônia, em 451, definiu a fórmula que a cristandade recebeu: um só Cristo, em duas naturezas, **sem confusão, sem mudança, sem divisão, sem separação**.',
    },
    {
      tipo: 'citacao',
      autor: 'Concílio de Calcedônia',
      obra: 'Definição de fé, 451',
      fonteId: 'calcedonia-wikisource',
      texto:
        'Um só e mesmo Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação; não sendo a distinção das naturezas de modo algum anulada pela união, mas antes preservando-se a propriedade de cada natureza e concorrendo ambas numa só pessoa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que a definição faz e no que ela recusa fazer. Os quatro advérbios são todos **negativos**: dizem onde não se deve ir. Calcedônia não explica *como* a união ocorre — ela cerca o mistério com quatro muros, dois de cada lado, e deixa o interior sem descrição. É um exercício de contenção teológica que vale aprender: a formulação madura sabe onde parar, e nem toda pergunta legítima tem resposta disponível.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Também vale registrar o custo: Calcedônia não uniu a cristandade. Igrejas inteiras — a copta, a siríaca, a armênia, a etíope — não aceitaram a fórmula e permanecem separadas até hoje. O debate contemporâneo sobre se a divergência é substancial ou terminológica segue aberto, e a honestidade histórica exige dizer que o consenso conciliar teve limites geográficos reais.',
    },

    { tipo: 'secao', titulo: 'Agostinho, e a fatura que ficou', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum autor do período pesa tanto sobre a tradição reformada quanto Agostinho, bispo de Hipona, e a razão está em duas controvérsias. Contra Pelágio, que sustentava a capacidade humana de escolher o bem sem graça prévia, ele elaborou a doutrina do pecado original e da graça eficaz — o material de que a Reforma se serviria mil anos depois. Contra os donatistas, que exigiam ministros impecáveis para sacramentos válidos, sustentou que a eficácia não depende da santidade de quem administra, mas de Cristo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E aqui vem a parte desconfortável, que os manuais devocionais costumam pular. Agostinho começou defendendo que a fé não se impõe pela força e, diante da persistência donatista, mudou de posição: passou a aceitar a coerção imperial contra os cismáticos, lendo o "compele-os a entrar" da parábola do banquete como autorização. O argumento foi depois invocado por séculos para justificar perseguição de dissidentes. É o exemplo mais claro do que a aliança com o poder produziu — e serve de advertência sobre o que acontece quando a igreja passa a dispor de meios coercitivos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O período se encerra com Roma saqueada em 410, ocasião que levou Agostinho a escrever *A Cidade de Deus*, e com Gregório Magno, em 590, já organizando a igreja ocidental para um mundo em que o império não existe mais no Ocidente. A instituição que sobrevive ao colapso político é a igreja — e é dessa sobrevivência que nasce o poder papal medieval.',
    },

    { tipo: 'secao', titulo: 'Como avaliar o período', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'A virada constantiniana foi bênção ou queda',
      posicoes: [
        {
          escola: 'Leitura da queda',
          sintese:
            'A aliança com o império corrompeu a igreja: trouxe conversão nominal em massa, transformou o ministério em carreira, e pôs nas mãos dos cristãos a espada que antes os feria. A tese é clássica entre anabatistas e foi reformulada no século XX, e tem a seu favor um fato incômodo — a perseguição de dissidentes começa exatamente quando a igreja ganha poder de perseguir.',
        },
        {
          escola: 'Leitura providencial',
          sintese:
            'O fim da perseguição permitiu à igreja pensar com calma questões que a clandestinidade não deixava resolver, e o resultado foram Niceia, Constantinopla e Calcedônia — as definições que toda a cristandade posterior, inclusive os críticos da virada constantiniana, recebe como corretas. Reconhece os abusos, mas nota que rejeitar o período inteiro implicaria rejeitar as formulações que dele nasceram.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada tende a uma avaliação dividida, e ela é defensável: recebe os concílios cristológicos como fiéis à Escritura — a Confissão de Westminster ensina a doutrina de Calcedônia sem citá-la, porque a pressupõe — e ao mesmo tempo recusa o modelo de igreja estabelecida com poder coercitivo, insistindo em que a autoridade eclesiástica é ministerial e não pode usar a espada. Pode-se, portanto, aceitar o que os concílios definiram e recusar o arranjo político que os cercou.',
    },

    {
      tipo: 'definicao',
      termo: 'Igreja Imperial',
      texto:
        'É a igreja do período que vai da tolerância concedida em 313 ao pontificado de Gregório Magno, em 590, caracterizada pela aliança com o poder imperial e pela definição conciliar da doutrina de Deus e de Cristo. Nela se fixaram o dogma trinitário, em Niceia e Constantinopla, e o cristológico, em Éfeso e Calcedônia; e nela se firmaram também o cristianismo nominal, a coerção religiosa e a estrutura eclesiástica que sobreviveria à queda do império no Ocidente.',
    },

    {
      tipo: 'pastoral',
      texto:
        'A lição deste período para a igreja de hoje não está nos concílios, e sim no que os cercou. Uma igreja perseguida sabe quem é seu adversário; uma igreja prestigiada, não — e é muito mais difícil resistir ao afago do poder do que à sua ameaça. Toda vez que uma igreja ganha acesso a influência política, a tentação que se apresenta é a mesma de 380: usar o instrumento disponível para acelerar o que só a pregação e o Espírito produzem. O período imperial mostra que esse atalho funciona no curto prazo, enche templos e produz uma geração inteira de cristãos que nunca creram. Conhecer essa história é ganhar uma desconfiança útil — não do envolvimento do cristão na vida pública, que é dever, mas da tentação de trocar persuasão por coerção quando a coerção fica ao alcance da mão.',
    },
  ],

  fontes: [
    {
      id: 'nicea-wikisource',
      autor: 'Concílio de Niceia',
      ano: '325',
      titulo: 'O Símbolo Niceno — texto e notas',
      publicacao: 'Nicene and Post-Nicene Fathers, série II, vol. XIV (Wikisource)',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_XIV/The_First_Ecumenical_Council/The_Nicene_Creed',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O texto conciliar com o aparato crítico de Percival. Hospedado fora do CCEL, portanto verificável pela auditoria automática do repositório.',
    },
    {
      id: 'calcedonia-wikisource',
      autor: 'Concílio de Calcedônia',
      ano: '451',
      titulo: 'A Definição de Fé de Calcedônia',
      publicacao: 'Nicene and Post-Nicene Fathers, série II, vol. XIV (Wikisource)',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_XIV/The_Fourth_Ecumenical_Council/The_Definition_of_Faith',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A fonte primária da fórmula cristológica, com os quatro advérbios negativos que delimitam o mistério sem explicá-lo.',
    },
    {
      id: 'schaff-hcc3',
      autor: 'Philip Schaff',
      ano: '1889',
      titulo: 'History of the Christian Church, vol. III — Nicene and Post-Nicene Christianity (311-600)',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc3.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O volume dedicado exatamente a este período: éditos imperiais, os quatro concílios, as controvérsias donatista e pelagiana. Domínio público. O CCEL recusa conexões de datacenter, então este link consta da seção de domínios restritos do relatório de auditoria.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. II, VIII, XXIII e XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. VIII ensina a doutrina de Calcedônia sem citá-la; o XXIII trata do magistrado civil e o XXXI limita a autoridade dos concílios — os dois textos em que a tradição reformada recusa o arranjo imperial mantendo suas definições.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro II, caps. 13-14; Livro IV, cap. 9',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'II.13-14 expõe a união das duas naturezas na linha calcedoniana; IV.9 discute a autoridade dos concílios, aceitando os quatro primeiros sem lhes atribuir infalibilidade. Domínio público.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Traduções e artigos em português sobre a controvérsia ariana, a cristologia conciliar e a herança agostiniana na teologia reformada.',
    },
  ],
};
