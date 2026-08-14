import type { Verbete } from '../../tipos';

export const decretos: Verbete = {
  id: 'ts01-decretos',
  disciplina: 'TS01',
  unidade: 18,
  titulo: 'Os Decretos de Deus e a Predestinação',
  subtitulo: 'O propósito eterno, e o que ele faz com a responsabilidade humana',
  objetivo:
    'Ao final, você saberá o que a Escritura chama de decreto e por que ele é único, como a tradição reformada articula soberania e responsabilidade sem anular nenhuma das duas, o que separa eleição de reprovação, e o que realmente está em jogo na disputa entre supra e infralapsarianismo.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-atributos', 'ts01-trindade', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Toda pessoa que reflete sobre a própria vida acaba diante de uma pergunta incômoda: o que aconteceu comigo estava previsto? A pergunta se agrava quando o que aconteceu foi mau. E se agrava ainda mais quando se percebe que ela não é sobre o passado apenas, mas sobre a liberdade — se tudo estava previsto, em que sentido eu escolhi?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A doutrina dos decretos é a resposta cristã a essa pergunta. Ela costuma ser apresentada como a mais fria da teologia reformada. É, na verdade, uma das mais pastorais — mas só depois que se entende o que ela afirma, e sobretudo o que não afirma.',
    },
    { tipo: 'secao', titulo: 'O que a Escritura chama de decreto', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: 'Efésios 1.11',
      texto:
        'Nele, digo, no qual fomos também feitos herança, predestinados segundo o propósito daquele que faz todas as coisas conforme o conselho da sua vontade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo não diz que Deus faz algumas coisas conforme o conselho de sua vontade. Diz "todas as coisas". A abrangência é o primeiro dado, e é o que torna a doutrina inevitável para quem leva o texto a sério: ou o propósito de Deus alcança tudo, ou há regiões da realidade fora de seu governo — e um Deus assim não é o Deus da Escritura.',
    },
    {
      tipo: 'termo',
      termo: 'Decreto',
      texto:
        'O propósito eterno, sábio, livre e imutável de Deus, pelo qual, para sua própria glória, Ele determinou tudo quanto acontece. O singular é deliberado: a tradição fala em decretos no plural apenas por acomodação à nossa mente, que só apreende sucessivamente. Em Deus há um único ato de vontade, simples como Ele é simples.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Eterno: não é uma decisão tomada em resposta ao que Deus viu acontecer, pois em Deus não há antes e depois de deliberação.',
        'Livre: nada fora de Deus o obrigou. A criação não era necessária.',
        'Imutável: não pode ser frustrado nem revisto, porque quem o formou não muda e não erra.',
        'Abrangente: alcança o que é bom e o que é mau, o certo e o contingente, o livre e o necessário — mas não do mesmo modo, e é aí que está toda a questão.',
      ],
    },
    { tipo: 'secao', titulo: 'A objeção séria, e por que ela não procede', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A objeção é conhecida: se Deus determinou tudo, então determinou o pecado; e se determinou o pecado, é o autor dele; e se é o autor dele, punir o pecador é injusto. O argumento tem força e não deve ser despachado com uma frase.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta reformada distingue modos de causalidade. Deus decreta o bem de maneira eficiente — Ele o produz, e a glória é sua. Decreta o mal de maneira permissiva e ordenadora: não o produz, mas o permite livremente e o dirige a fins bons que o agente não pretendia. A distinção não é um artifício verbal; é exatamente o que a Escritura faz quando trata do caso mais difícil possível.',
    },
    {
      tipo: 'passagem',
      referencia: 'Gênesis 50.20',
      texto:
        'Vós, na verdade, intentastes o mal contra mim; porém Deus o tornou em bem, para fazer, como se vê neste dia, que se conserve muita gente em vida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'José não diz que os irmãos foram instrumentos inocentes de um plano divino — eles intentaram o mal, e a culpa é deles. Nem diz que Deus improvisou um bom desfecho a partir de um estrago imprevisto. Diz que o mesmo ato teve duas intenções simultâneas e distintas: a deles, má; a de Deus, boa. Um único evento, duas causalidades em níveis diferentes.',
    },
    {
      tipo: 'passagem',
      referencia: 'Atos 2.23',
      texto:
        'Sendo este entregue pelo determinado desígnio e presciência de Deus, vós o matastes, crucificando-o por mãos de iníquos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Pedro aplica a mesma lógica ao maior crime da história, e na mesma frase. A crucificação foi decretada — "determinado desígnio" — e os que a executaram são chamados de iníquos e responsabilizados. Se a determinação divina eliminasse a culpa humana, esta sentença seria incoerente. Como não é, a conclusão se impõe: as duas coisas são compatíveis, ainda que o modo exato de sua compatibilidade permaneça oculto.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo III, §1',
      fonteId: 'cfw-ipib',
      texto:
        'Deus, desde toda a eternidade, ordenou livre e imutavelmente, pelo mui sábio e santo conselho da sua própria vontade, tudo quanto acontece; contudo, de modo que nem Deus é o autor do pecado, nem violência é oferecida à vontade das criaturas, nem é tirada a liberdade ou contingência das causas segundas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Confissão faz aqui algo raro e admirável. Afirma o decreto abrangente e, na mesma sentença, ergue três muros de proteção: Deus não é autor do pecado, a vontade das criaturas não sofre violência, e as causas segundas não perdem sua liberdade nem sua contingência. Ela não explica como isso se harmoniza. Recusa-se a especular além do revelado — e é essa contenção, e não a ousadia, que caracteriza a melhor teologia reformada.',
    },
    { tipo: 'secao', titulo: 'Predestinação: eleição e reprovação', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A predestinação é o decreto aplicado ao destino eterno das criaturas racionais. Comporta duas partes, e um erro comum é tratá-las como simétricas.',
    },
    {
      tipo: 'passagem',
      referencia: 'Efésios 1.4-5',
      texto:
        'Assim como nos escolheu, nele, antes da fundação do mundo, para sermos santos e irrepreensíveis perante ele; e em amor nos predestinou para ele, para adoção de filhos, por meio de Jesus Cristo, segundo o beneplácito de sua vontade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Três marcas do texto merecem atenção. A escolha é anterior à fundação do mundo — logo, não pode fundar-se em nada que a criatura tenha feito. É "nele", em Cristo, e não à revelia do Filho. E a finalidade declarada é que sejamos santos: a eleição não dispensa a santidade, ela a produz. Quem trata a eleição como licença para viver como quiser inverteu o texto.',
    },
    {
      tipo: 'termo',
      termo: 'Eleição',
      texto:
        'O decreto pelo qual Deus, por pura graça e sem qualquer mérito previsto na criatura, escolheu em Cristo, desde a eternidade, aqueles a quem daria fé, justificaria e glorificaria. A causa é o beneplácito de sua vontade, não a previsão de que creriam.',
    },
    {
      tipo: 'termo',
      termo: 'Reprovação',
      texto:
        'O decreto pelo qual Deus resolveu passar ao largo dos demais, deixando-os na condição de culpa em que se colocaram, e condená-los justamente por seus pecados. A assimetria é essencial: a eleição tem por causa a graça; a reprovação tem por causa o pecado do próprio homem. Deus não precisa fazer ninguém pecador para condená-lo justamente.',
    },
    {
      tipo: 'controversia',
      titulo: 'A ordem lógica dos decretos: supra e infralapsarianismo',
      posicoes: [
        {
          escola: 'Supralapsarianismo',
          sintese:
            'Na ordem lógica, o decreto de eleger e reprovar precede o decreto de permitir a queda: Deus primeiro determina o fim (manifestar graça e justiça em certos homens) e depois os meios (criar, permitir a queda, prover a redenção). É mais coerente com o modo humano de planejar, em que o fim vem primeiro, e enfrenta a dificuldade de fazer o objeto da eleição ser o homem ainda não caído — o que aproxima Deus da causa da queda.',
        },
        {
          escola: 'Infralapsarianismo',
          sintese:
            'O decreto de permitir a queda precede logicamente o de eleger: Deus contempla a humanidade já caída e culpada, e dela escolhe alguns para a salvação, deixando os demais em sua culpa. Preserva melhor a assimetria entre eleição e reprovação e é a posição refletida na Confissão de Fé de Westminster e nos Cânones de Dort — a majoritária na tradição reformada.',
        },
        {
          escola: 'O que ambas afirmam em comum',
          sintese:
            'Que se trata de ordem lógica, não cronológica. Não houve sequência temporal em Deus: há um único decreto eterno, e a discussão versa apenas sobre como nossa mente deve ordenar seus elementos para pensá-los sem contradição. Ambas as posições foram sempre consideradas dentro dos limites da ortodoxia reformada.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale dizer com franqueza o que está e o que não está em jogo aqui. Nenhuma das duas posições afirma que Deus decidiu em algum instante; nenhuma altera o que se prega. É uma discussão sobre a arquitetura interna de um decreto único — e um estudante que a tome por controvérsia decisiva terá entendido mal a sua importância relativa.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Decreto e Predestinação',
      texto:
        'O decreto de Deus é o seu propósito eterno, único, sábio, livre, santo e imutável, pelo qual, para a glória do seu nome, determinou tudo quanto acontece — produzindo eficazmente o bem e permitindo e ordenando o mal a fins bons, sem ser autor do pecado, sem violentar a vontade das criaturas e sem suprimir a contingência das causas segundas. Sua aplicação ao destino eterno dos homens chama-se predestinação, e compreende a eleição, pela qual Deus, por pura graça e sem mérito previsto, escolheu em Cristo desde a eternidade aqueles que salvaria, e a reprovação, pela qual resolveu deixar os demais na culpa em que voluntariamente se puseram, condenando-os com justiça por seus próprios pecados.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Esta doutrina é frequentemente apresentada de trás para frente, e é isso que a torna assustadora. Ninguém deve começar perguntando "estarei eu entre os eleitos?", porque essa pergunta olha para um decreto oculto ao qual não temos acesso, e a resposta que ela devolve é sempre a angústia. A Escritura convida ao caminho inverso: olhe para Cristo, que é revelado, e não para o decreto, que não é. Quem crê nele já tem nisso a evidência da eleição, porque a fé é fruto dela, não sua condição. Calvino chamou Cristo de "o espelho da nossa eleição" exatamente por isso. E há uma consolação segunda, que é a razão de a doutrina existir na experiência cristã: se a minha salvação depende de um propósito eterno de Deus e não da constância dos meus sentimentos, então ela não desmorona nos dias em que eu desmorono. O crente não se segura em Deus — é segurado por Ele.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro III, caps. 21-24',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratado de Calvino sobre a eleição, incluindo a imagem de Cristo como espelho da nossa eleição (III.24.5) e a advertência contra especular sobre o decreto oculto. Domínio público.',
    },
    {
      id: 'hodge-st1',
      autor: 'Charles Hodge',
      ano: '1872',
      titulo: 'Systematic Theology, vol. I — sobre os decretos e a predestinação',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/hodge/theology1.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Trata as objeções filosóficas à doutrina dos decretos com detalhe, e discute supra e infralapsarianismo. Cobre as unidades 18 a 21 do programa de TS01.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus IV, De decretis Dei',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A análise escolástica da causalidade permissiva e da distinção entre vontade de decreto e vontade de preceito. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. III — Dos Decretos Eternos de Deus',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 1 é a formulação mais precisa já produzida da compatibilidade entre decreto e liberdade; o § 8 adverte sobre como a doutrina deve ser tratada pastoralmente.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre o conselho de Deus',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Bavinck situa o debate supra/infra em sua devida proporção histórica, mostrando por que nenhuma das duas escolas jamais foi condenada.',
    },
  ],
};
