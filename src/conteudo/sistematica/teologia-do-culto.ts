import type { Verbete } from '../../tipos';

export const teologiaDoCulto: Verbete = {
  id: 'ts08-teologia-do-culto',
  disciplina: 'TS08',
  unidade: 1,
  titulo: 'Teologia do Culto',
  subtitulo: 'O que a palavra "adoração" quer dizer, e por que ela quer dizer duas coisas',
  objetivo:
    'Ao final, você saberá o que os termos bíblicos para culto de fato significam, por que a religiosidade universal prova menos do que se costuma alegar, como o culto se transformou do Templo à Reforma sem perder identidade, e onde está a tensão real entre "toda a vida é culto" e a reunião do dia do Senhor.',
  atualizadoEm: '2026-08-15',
  verMais: ['ts09-principio-regulador', 'ts01-revelacao', 'th03-reforma'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A palavra "adoração" é usada, numa mesma conversa de igreja, para coisas diferentes. O músico chama de adoração o bloco de canções antes da pregação. O boletim chama de culto a reunião inteira de domingo. E o pregador, citando Romanos 12, diz que adoração é a vida toda oferecida a Deus. Não é imprecisão de vocabulário apenas: as três acepções puxam em direções distintas, e boa parte das brigas sobre culto acontece porque os dois lados usam a mesma palavra para conceitos diferentes sem perceber.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Antes de discutir estilo, ordem litúrgica ou instrumentos — assunto do princípio regulador, em TS09 —, é preciso saber do que se está falando. A teologia do culto começa, portanto, por um trabalho aparentemente modesto e que resolve muita confusão: definir os termos.',
    },

    { tipo: 'secao', titulo: 'O que as palavras bíblicas dizem', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O hebraico e o grego não têm um único termo equivalente ao nosso "culto". Têm vários, e cada um carrega uma imagem concreta. Recuperá-las é recuperar o que a Escritura de fato pede.',
    },
    {
      tipo: 'lista',
      itens: [
        'shachah (hebraico) e proskyneo (grego) — prostrar-se, curvar-se até o chão. É a imagem corporal da submissão diante de um superior. O gesto é de reverência, não de entusiasmo.',
        'abad (hebraico) e latreuo (grego) — servir, prestar serviço, inclusive o de escravo. Daí "latria": adoração é serviço devido, e não homenagem espontânea.',
        'leitourgia (grego) — originalmente o serviço público prestado por um cidadão às expensas próprias. Daí "liturgia", que portanto não significa formalidade nem cerimônia elaborada: significa obra pública feita em benefício do corpo.',
        'sebomai e eusebeia (grego) — reverenciar, temer com respeito; a raiz de "piedade". Aponta para a disposição interior sem a qual o gesto é vazio.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Duas conclusões já saem daqui. A primeira é que o vocabulário bíblico é dominado por submissão e serviço, não por emoção — o que não exclui o afeto, mas o subordina. A segunda é que "liturgia" não é sinônimo de rito pesado: toda igreja tem liturgia, inclusive a que se diz sem liturgia nenhuma, porque toda reunião tem uma ordem. A escolha real não é entre ter e não ter, mas entre uma ordem examinada e uma ordem por hábito.',
    },
    {
      tipo: 'termo',
      termo: 'Culto lato sensu e culto stricto sensu',
      texto:
        'A distinção que organiza o campo. Em sentido amplo, culto é a totalidade da vida oferecida a Deus — "apresenteis os vossos corpos por sacrifício vivo [...] que é o vosso culto racional" (Rm 12.1), onde o termo grego é justamente latreia. Em sentido estrito, é a reunião do povo de Deus convocada para adorá-lo publicamente. Os dois sentidos são bíblicos, e nenhum anula o outro.',
    },

    { tipo: 'secao', titulo: 'A semente da religião, e o que ela não prova', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Não se conhece povo sem religião. A observação é antiga — Cícero já a fazia — e Calvino a assume como ponto de partida: há no ser humano um senso de divindade (sensus divinitatis) e uma semente de religião (semen religionis) que nenhuma cultura conseguiu extirpar. Não existe tribo sem alguma forma de culto.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas, I.4.1',
      fonteId: 'calvino-institutas',
      texto:
        'A experiência atesta que a semente da religião foi divinamente semeada em todos os homens. Contudo, dificilmente se encontra um em cem que a acalente no coração, e nem sequer um em que ela amadureça — muito menos frutifique no tempo devido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A segunda metade da citação é a parte que costuma ser esquecida, e é a mais importante. A universalidade da religião prova que o ser humano foi feito para adorar; **não** prova que ele adora corretamente, nem que todas as religiões sejam caminhos para o mesmo Deus. Para Calvino, a mesma semente que testemunha a origem produz, em terreno caído, idolatria — a mente humana é, na sua expressão célebre, uma fábrica perpétua de ídolos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso reposiciona a pergunta prática. O problema humano diante do culto nunca foi a ausência de impulso religioso; foi o excesso dele mal dirigido. Israel não deixou de adorar no Sinai — fez um bezerro e proclamou "amanhã será festa ao SENHOR" (Êx 32.5). O culto ao Deus verdadeiro, do modo errado, é a tentação característica do povo religioso, e é ela que o segundo mandamento visa.',
    },

    { tipo: 'secao', titulo: 'Do Templo à mesa: o que mudou e o que permaneceu', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O culto do Antigo Testamento é organizado em torno de sacrifício, sacerdócio e lugar santo. O sistema levítico é minucioso porque encena, repetidamente, uma verdade simples: o pecado impede a aproximação, e só a morte de um substituto a restabelece. O Tabernáculo e depois o Templo dão a essa verdade um endereço geográfico, e o véu diz o resto — há acesso, e ele é restrito.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em paralelo, e sobretudo depois do exílio, surge a sinagoga: sem altar, sem sacrifício e sem sacerdote, organizada em torno da leitura e exposição da Lei, da oração e do canto dos Salmos. É uma instituição sem mandamento explícito no Pentateuco, e ela se torna, historicamente, o molde imediato da reunião cristã.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Novo Testamento não reforma o sistema sacrificial: declara-o cumprido. O véu se rasga, o sacerdócio passa a ser de todos os crentes, e a carta aos Hebreus argumenta longamente que repetir sacrifícios seria negar a suficiência do único já oferecido. O que resta, então, é o que a sinagoga já fazia — Palavra, oração, canto — acrescido dos dois sinais instituídos por Cristo, o batismo e a ceia, e da coleta para os santos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale notar o que **não** mudou. O culto continua sendo resposta a uma iniciativa divina, continua exigindo mediação — agora a de Cristo, e só a dela — e continua tendo forma prescrita. A liberdade do Novo Testamento é liberdade do sistema levítico, não liberdade de fazer o que se quiser.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A história posterior é, em boa medida, a história do reacúmulo. Nos séculos seguintes, a mesa vira altar, a ceia vira sacrifício repetido, o ministro vira sacerdote e a língua do povo dá lugar ao latim; o acesso, que fora aberto, torna a ser mediado. A Reforma do século XVI é a tentativa de desfazer esse acúmulo — e as decisões concretas variaram: Lutero manteve o que não contradizia a Palavra, Zuínglio removeu o que ela não ordenava, Calvino ficou entre os dois, e a Assembleia de Westminster produziu o Diretório de Culto, que prescreve partes sem impor um texto fixo.',
    },

    { tipo: 'secao', titulo: 'A tensão que continua viva', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção entre culto em sentido amplo e estrito não é neutra: dependendo de qual sentido se acentua, a vida da igreja muda. E aqui a discussão contemporânea é real, entre pessoas igualmente comprometidas com a Escritura.',
    },
    {
      tipo: 'controversia',
      titulo: 'Toda a vida é culto — e a reunião de domingo, então?',
      posicoes: [
        {
          escola: 'Ênfase no sentido amplo',
          sintese:
            'Romanos 12.1 e 1Coríntios 10.31 tratam a vida inteira como culto, e o Novo Testamento não reserva vocabulário sacral para a reunião nem chama o templo de lugar santo depois de Cristo. Acentuar isso combate o dualismo que trata a segunda-feira como zona neutra. O risco, reconhecido pelos próprios defensores, é a diluição: se tudo é culto do mesmo modo, a reunião perde caráter próprio e a ausência dela deixa de pesar.',
        },
        {
          escola: 'Ênfase no sentido estrito',
          sintese:
            'A Escritura ordena não deixar de congregar (Hb 10.25), institui um dia, e concentra na assembleia atos que não existem sozinho em casa: a pregação pública, os sacramentos, a bênção pronunciada sobre o povo. Acentuar isso preserva a assembleia como encontro convocado, e não como programação opcional. O risco é o inverso: transformar domingo em compartimento sagrado e liberar o resto da semana da mesma senhoria.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada historicamente segura as duas pontas, e a chave está em não tratá-las como concorrentes. O culto público não é um pedaço da vida mais santo que os outros; é o lugar onde o povo é convocado, alimentado e enviado — e é justamente por isso que a vida inteira pode ser culto. Suprimir a assembleia em nome da vida toda retira a fonte; suprimir a vida toda em nome da assembleia retira o efeito.',
    },

    {
      tipo: 'definicao',
      termo: 'Culto',
      texto:
        'É a resposta reverente da criatura ao Deus que se revelou e a resgatou, prestada por mediação de Cristo e na forma que ele mesmo prescreveu. Em sentido amplo, abrange a vida inteira oferecida como sacrifício vivo; em sentido estrito, designa a reunião pública do povo de Deus, convocada por ele, na qual a Palavra é lida e pregada, a oração é feita, o louvor é cantado, os sacramentos são administrados e a bênção é pronunciada. Nunca é iniciativa humana em busca de Deus: é sempre resposta a uma convocação que o precede.',
    },

    {
      tipo: 'pastoral',
      texto:
        'A consequência pastoral mais imediata é o alívio de uma ansiedade comum. Quem entende o culto como esforço humano para alcançar Deus — produzir a atmosfera certa, sentir a emoção adequada, atingir determinada intensidade — sai de domingo avaliando o próprio desempenho, e conclui com frequência que não adorou de verdade. Mas se o culto é resposta a uma convocação, o critério muda: a pergunta não é se você sentiu o bastante, e sim se ouviu quem chamou. Isso não torna o afeto indiferente — a Escritura repreende o lábio que se aproxima com o coração longe —, mas põe o afeto no lugar de fruto e não de condição. E dá ao crente cansado, que veio à igreja sem entusiasmo nenhum, a liberdade de vir assim mesmo: ele foi convocado, não convidado a se apresentar em boa forma.',
    },
  ],

  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. XXI, Do Culto Religioso e do Dia de Descanso',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. XXI enumera as partes ordinárias do culto e ancora a doutrina no segundo mandamento. É a base confessional tanto deste verbete quanto do princípio regulador em TS09.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 3-5 e 11-12; Livro IV, cap. 10',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'I.3-4 traz o sensus divinitatis e a semen religionis, com a ressalva de que a semente frutifica em quase ninguém; I.11-12 trata das imagens; IV.10 discute o poder da Igreja de legislar sobre o culto. Domínio público.',
    },
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      ano: '1888',
      titulo: 'History of the Christian Church — culto na igreja antiga, medieval e na Reforma',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Documenta o percurso histórico resumido neste verbete: da ceia à missa, do vernáculo ao latim, e as decisões litúrgicas concretas de Wittenberg, Zurique e Genebra.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1901',
      titulo: 'Gereformeerde Dogmatiek — sobre religião, revelação e culto',
      publicacao: 'Digitale Bibliotheek voor de Nederlandse Letteren (DBNL)',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Em holandês e em domínio público. Bavinck examina a religiosidade universal sem concluir dela o pluralismo — a distinção exata que este verbete faz sobre a semen religionis.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers — descrições primitivas da reunião cristã',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A Primeira Apologia de Justino Mártir (cap. 67) descreve um culto do século II: leitura das Escrituras, exortação, oração, ceia e coleta. É a fonte primária mais próxima do período apostólico.',
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
      nota: 'Traduções e artigos em português sobre teologia do culto, liturgia e o Diretório de Westminster.',
    },
  ],
};
