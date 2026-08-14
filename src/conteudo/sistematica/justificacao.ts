import type { Verbete } from '../../tipos';

export const justificacao: Verbete = {
  id: 'ts04-justificacao',
  disciplina: 'TS04',
  unidade: 10,
  titulo: 'A Justificação pela Fé',
  subtitulo: 'Um veredito, não um processo — e por que a diferença partiu a cristandade',
  objetivo:
    'Ao final, você saberá por que justificar é um termo forense e não transformador, o que a imputação transfere em cada direção, por que a fé é instrumento e não mérito, e o que exatamente Trento condenou ao rejeitar a certeza da salvação.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts04-ordo-salutis', 'ts03-expiacao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Lutero contou que a expressão "justiça de Deus" o aterrorizava. Ele a lia como a justiça pela qual Deus pune, e não conseguia entender por que Paulo a chamaria de boa notícia. A virada veio quando percebeu que o genitivo podia ser de origem e não de atributo: uma justiça que vem de Deus e é dada, não uma que Ele exige e cobra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa releitura de Romanos 1.17 partiu a cristandade ocidental. Vale entender exatamente o que estava em disputa — porque não era, como se supõe, se as obras salvam. Ninguém em Roma ensinava que se compra a salvação. A disputa era sobre o significado de um verbo.',
    },
    { tipo: 'secao', titulo: 'O verbo, e o que ele faz', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O grego dikaioō pode, em tese, significar "tornar justo" ou "declarar justo". A questão se resolve pelo uso, e o uso bíblico é decisivo: o termo pertence ao tribunal.',
    },
    {
      tipo: 'lista',
      itens: [
        'Deuteronômio 25.1 manda que os juízes justifiquem o inocente e condenem o culpado. É evidente que o juiz não torna ninguém inocente — ele declara o que é.',
        'Provérbios 17.15 chama de abominação justificar o ímpio. Se justificar significasse transformar, a acusação não faria sentido: transformar o ímpio seria excelente.',
        'Em Lucas 7.29, o povo "justificou a Deus". Ninguém torna Deus justo; reconhece-se e declara-se que Ele o é.',
        'Paulo opõe justificar a condenar (Rm 8.33-34). Condenar não altera o réu por dentro; profere uma sentença. O antônimo revela a natureza do termo.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A conclusão se impõe: justificação é ato judicial. Deus não constata que o pecador ficou bom, nem o torna bom e depois o declara; Ele profere sobre o culpado um veredito de justo. Provérbios 17.15 mostra por que isso é escandaloso — e Romanos 4.5 usa exatamente a expressão proibida ao dizer que Deus "justifica o ímpio". Só a cruz explica como o abominável se tornou justo.',
    },
    { tipo: 'secao', titulo: 'Imputação: a dupla transferência', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'Imputação',
      texto:
        'Do latim imputare, lançar em conta. Não descreve infusão de qualidade, mas atribuição de status jurídico. Na justificação há duas transferências simultâneas: a culpa do pecador é lançada na conta de Cristo, e a justiça de Cristo é lançada na conta do pecador. Nenhuma das duas altera imediatamente o caráter de quem recebe — alteram a posição diante da lei.',
    },
    {
      tipo: 'passagem',
      referencia: '2 Coríntios 5.21',
      texto:
        'Aquele que não conheceu pecado, ele o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O paralelismo do versículo é o argumento inteiro. Cristo foi "feito pecado" — não tornado pecaminoso, o que contradiria a primeira metade da frase, mas tratado como pecador. Se o primeiro "feito" é forense, o segundo também é: somos "feitos justiça" no mesmo sentido, tratados como justos sem ainda o sermos de fato. Lutero chamou isso de admirabile commercium, a admirável troca.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Aqui a obediência ativa de Cristo, discutida na expiação, mostra o seu serviço. Se apenas a culpa fosse removida, o pecador ficaria em posição neutra — sem dívida, mas sem justiça positiva. O que a imputação credita não é ausência de pecado; é a obediência perfeita que Cristo prestou durante toda a vida. Por isso o justificado não é um absolvido por falta de provas: é declarado justo com base num mérito real, que não é dele.',
    },
    { tipo: 'secao', titulo: 'A fé: instrumento, não mérito', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Uma objeção recorrente diz que a fé, sendo algo que o homem faz, seria apenas outra obra — trocou-se a moeda, mas ainda se paga. A resposta reformada é precisa: a fé não justifica por ser um ato meritório, mas por ser o meio pelo qual se recebe a justiça alheia.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição sempre insistiu na preposição. Não somos justificados propter fidem, por causa da fé, como se ela fosse a causa; somos justificados per fidem, por meio da fé. A distinção parece sutil e é toda a diferença entre a graça e o mérito disfarçado.',
    },
    {
      tipo: 'termo',
      termo: 'Os três elementos da fé salvadora',
      texto:
        'Notitia — o conteúdo, aquilo que se sabe: quem é Cristo e o que fez. Assensus — o assentimento de que isso é verdadeiro. Fiducia — a confiança pessoal que se lança sobre Ele. Os dois primeiros o diabo possui (Tg 2.19); o terceiro é o que distingue a fé salvadora do mero acordo intelectual.',
    },
    { tipo: 'secao', titulo: 'O que Roma realmente sustenta', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'A natureza da justificação',
      posicoes: [
        {
          escola: 'Roma (Concílio de Trento, 1547)',
          sintese:
            'A justificação é translação do estado de pecado ao estado de graça: a graça é infundida no batismo, tornando o pecador realmente justo, e cresce pelas obras feitas em graça. Pode ser perdida pelo pecado mortal e recuperada pela penitência. Justificação e santificação são o mesmo processo. Coerentemente, Trento condenou a certeza da salvação como presunção — se a justificação depende de um estado que se pode perder, ninguém pode saber se está nele.',
        },
        {
          escola: 'A Reforma',
          sintese:
            'A justificação é ato declaratório único, completo e irreversível, fundado numa justiça externa imputada. Distinta da santificação, embora inseparável dela. Como não depende do grau de transformação alcançado, a certeza é possível — e é dever, não presunção.',
        },
        {
          escola: 'Nova Perspectiva sobre Paulo (Sanders, Dunn, Wright)',
          sintese:
            'As "obras da lei" que Paulo rejeita seriam marcadores de identidade judaica — circuncisão, sábado, alimentos — e não esforço moral; a justificação seria sobretudo declaração de pertença ao povo da aliança. Chamou atenção legítima para a dimensão eclesial do texto, mas a crítica reformada observa que Romanos 4 fundamenta o argumento em Abraão *antes* da circuncisão, e que Rm 3.20 conclui com toda a humanidade culpada, não apenas mal identificada.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'É importante não caricaturar Roma. Trento afirma que a graça é necessária, gratuita em seu início e impossível de merecer. O ponto de ruptura é outro: se a justificação é um processo de tornar-se justo, ela é gradual, perdível e incerta por definição. Se é um veredito sobre uma justiça alheia, é instantânea, completa e segura. Toda a diferença pastoral entre as duas cristandades está aí.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo XI, § 1',
      fonteId: 'cfw-ipib',
      texto:
        'Aos que Deus eficazmente chama, também gratuitamente justifica, não infundindo neles a justiça, mas perdoando-lhes os pecados e considerando e aceitando as suas pessoas como justas; não por qualquer coisa neles operada ou por eles feita, mas somente por causa de Cristo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A cláusula "não infundindo neles a justiça" é uma rejeição direta e nomeada de Trento. A Confissão não está apenas afirmando uma doutrina; está recusando uma alternativa específica, com o vocabulário dela.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Justificação',
      texto:
        'É o ato gracioso e judicial de Deus pelo qual, unicamente por causa de Cristo e sem qualquer mérito ou obra do homem, Ele perdoa todos os pecados do pecador que crê e o aceita e declara justo diante de si — não porque nele infunda justiça, nem porque o encontre justo, mas porque lhe imputa a justiça de Cristo, ao mesmo tempo em que imputou a Cristo a culpa dele; ato único, completo e irreversível, recebido somente por meio da fé, que não justifica por seu próprio valor mas por ser o instrumento que se apega a Cristo, e do qual decorre necessariamente, embora sem se confundir com ele, o processo da santificação.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma pergunta que revela imediatamente se esta doutrina foi entendida: em um dia ruim, você se sente menos aceito por Deus? Se a resposta é sim, a justificação ainda está sendo tratada como processo. O veredito não oscila com o desempenho, porque não se funda nele. A sentença foi proferida com base numa justiça que já era perfeita antes de você nascer e que não piora quando você falha. Isso não produz descuido, ao contrário do que se teme sempre que a doutrina é pregada com clareza — quem sabe que não pode perder o amor de Deus não fica indiferente a Ele; fica livre para obedecer sem estar negociando. O legalista obedece para ser aceito e nunca descansa; o antinomista dispensa a obediência e nunca ama. O justificado obedece porque já foi aceito, e essa é a única motivação que não corrói a alma de quem a segue.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro III, caps. 11-18',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratado mais extenso de Calvino sobre justificação, incluindo a resposta detalhada às objeções romanas e a relação entre fé e obras. Domínio público.',
    },
    {
      id: 'hodge-st3-pdf',
      autor: 'Charles Hodge',
      ano: '1873',
      titulo: 'Systematic Theology, vol. III — sobre justificação',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/h/hodge/theology3/cache/theology3.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Trata o sentido forense do termo com todo o levantamento do uso bíblico, e discute Trento ponto a ponto. Cobre a unidade 10 do programa de TS04.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus XVI, De justificatione',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A defesa escolástica da imputação e da distinção entre per fidem e propter fidem. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. XI — Da Justificação',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 1 nega expressamente a infusão de justiça; o § 2 define a fé como instrumento.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a justificação',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
    },
  ],
};
