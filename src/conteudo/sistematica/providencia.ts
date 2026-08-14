import type { Verbete } from '../../tipos';

export const providencia: Verbete = {
  id: 'ts01-providencia',
  disciplina: 'TS01',
  unidade: 25,
  titulo: 'A Providência e o Problema do Mal',
  subtitulo: 'Um Deus que governa tudo, num mundo que dói',
  objetivo:
    'Ao final, você saberá distinguir os três atos da providência, entender por que a concorrência divina não faz de Deus cúmplice do pecado, e avaliar honestamente as respostas cristãs ao problema do mal — inclusive o que nenhuma delas resolve.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-decretos', 'ts01-atributos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Se o decreto é o propósito eterno, a providência é esse propósito em execução. A primeira doutrina olha para trás, ao conselho de Deus antes do mundo; esta olha para o mundo em movimento, agora. E é aqui que a teologia deixa de ser um exercício de escola e passa a doer, porque o mundo que Deus governa é o mundo em que crianças adoecem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Não é possível tratar da providência com honestidade sem chegar ao problema do mal. Quem o contorna produz uma doutrina que só funciona para quem ainda não sofreu.',
    },
    { tipo: 'secao', titulo: 'Os três atos da providência', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada divide a providência em três atos distintos. A divisão não é decorativa: cada um responde a uma pergunta diferente, e confundi-los produz erros específicos.',
    },
    {
      tipo: 'termo',
      termo: 'Preservação (conservatio)',
      texto:
        'Deus mantém em existência tudo o que criou. A criatura não persiste por inércia própria: se Deus retirasse o seu sustento, ela não se degradaria lentamente — deixaria de ser. "Ele sustenta todas as coisas pela palavra do seu poder" (Hb 1.3). Negar isso é deísmo: um relojoeiro que dá corda e se afasta.',
    },
    {
      tipo: 'termo',
      termo: 'Concorrência (concursus)',
      texto:
        'Deus coopera com toda ação da criatura, de modo que o efeito é inteiramente da criatura e inteiramente de Deus, em ordens distintas de causalidade. Não é uma divisão de trabalho — não é que Deus faça metade e o agente a outra metade. É a mesma ação, plenamente atribuível a ambos em sentidos diferentes.',
    },
    {
      tipo: 'termo',
      termo: 'Governo (gubernatio)',
      texto:
        'Deus dirige todas as coisas ao fim que estabeleceu. Não apenas mantém e coopera, mas conduz — inclusive o que as criaturas fazem contra a sua vontade revelada, que Ele dobra ao seu propósito sem violentar a vontade delas.',
    },
    { tipo: 'secao', titulo: 'A concorrência, e o que ela evita', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A concorrência é o mais difícil dos três, e o mais necessário. Sem ela, restam apenas duas saídas, e ambas são desastrosas.',
    },
    {
      tipo: 'lista',
      itens: [
        'Se Deus não coopera com a ação da criatura, o mundo tem regiões autônomas onde Ele não governa — e a promessa de Romanos 8.28 não tem como se cumprir, porque há coisas fora do alcance de quem promete.',
        'Se Deus é a única causa real e a criatura é aparência, cai-se no ocasionalismo: nada age de fato senão Deus, o que faz d\'Ele o autor imediato de todo pecado e transforma a responsabilidade humana em ficção.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A saída clássica é a distinção entre causa primeira e causas segundas. Deus é a causa primeira de tudo; as criaturas são causas segundas reais, com naturezas próprias — o fogo queima porque é fogo, e o homem escolhe porque tem vontade. Deus não substitui essas naturezas: Ele as sustenta e opera através delas, conforme o modo próprio de cada uma. Age necessariamente no que é necessário, e livremente no que é livre.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Turretin acrescenta a distinção decisiva quanto ao pecado. Em todo ato pecaminoso há dois aspectos: o ato enquanto ato — o movimento, a energia, o exercício da faculdade — e a deformidade moral que o qualifica. Deus concorre com o primeiro, pois nada se move sem Ele; a segunda procede exclusivamente da criatura. Um homem manca porque tem perna coxa: a força que o move vem de fora dele, mas o defeito do andar vem da perna.',
    },
    { tipo: 'secao', titulo: 'O problema do mal', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A formulação é antiga e continua intacta. Se Deus é onipotente, pode impedir o mal. Se é perfeitamente bom, quer impedi-lo. O mal existe. Logo, ou não é onipotente, ou não é bom.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O argumento só é válido se houver uma premissa oculta: a de que um Deus bom não teria razão suficiente para permitir mal algum. É exatamente essa premissa que a fé cristã nega — e não por conveniência, mas porque conhece pelo menos um caso em que ela é demonstravelmente falsa.',
    },
    {
      tipo: 'controversia',
      titulo: 'As respostas ao problema do mal',
      posicoes: [
        {
          escola: 'Defesa do livre-arbítrio',
          sintese:
            'O mal é preço da liberdade: Deus quis criaturas livres, e a liberdade genuína implica a possibilidade real de escolher o mal. Tem força contra o mal moral, mas pouco diz sobre o mal natural — o terremoto e o câncer não são escolhas de ninguém —, e a versão libertária que costuma acompanhá-la compromete a soberania afirmada em Ef 1.11.',
        },
        {
          escola: 'Teodiceia da formação da alma',
          sintese:
            'O sofrimento forma o caráter e produz virtudes impossíveis num mundo indolor. Verdadeiro em parte, e a Escritura o afirma (Rm 5.3-5; Hb 12.11). Mas fracassa diante do sofrimento que destrói em vez de formar, e do que atinge quem não tem como aprender nada com ele.',
        },
        {
          escola: 'Resposta reformada: propósito oculto e cruz revelada',
          sintese:
            'Deus tem razões suficientes para permitir cada mal, e não nos deve a explicação de cada caso. O que Ele deu não foi um sistema, mas um fato: na cruz, o pior mal já cometido — o assassinato do Justo — foi o meio pelo qual veio o maior bem. Isso não explica o meu sofrimento, mas destrói a premissa de que sofrimento e bondade divina sejam incompatíveis.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale ser franco sobre o alcance dessa terceira resposta. Ela não é uma teodiceia completa: não diz por que este mal, nesta vida, agora. A Escritura não oferece esse cálculo, e o livro que mais se aproxima da pergunta — Jó — termina sem entregá-lo. Deus responde a Jó com quatro capítulos sobre estrelas, chuva e avestruzes, e não com uma justificativa. A resposta bíblica ao mal não é uma explicação; é uma pessoa e uma promessa.',
    },
    {
      tipo: 'passagem',
      referencia: 'Romanos 8.28',
      texto:
        'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Note o que o versículo diz e o que não diz. Não diz que todas as coisas são boas — algumas são atrozes. Não diz que veremos o bem. Diz que cooperam, e que o fazem para os que são chamados segundo o propósito. É uma promessa de resultado, não uma anestesia; e ela só faz sentido se a providência for exatamente tão abrangente quanto esta doutrina afirma. Um Deus que governasse parcialmente não poderia prometê-la.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Providência',
      texto:
        'É a obra contínua pela qual Deus preserva em existência tudo quanto criou, coopera com toda ação das criaturas segundo a natureza própria de cada uma — necessariamente com as causas necessárias e livremente com as livres —, e governa todas as coisas para o fim que decretou; de modo que nada acontece por acaso ou fora do seu alcance, e nem por isso Deus é autor do pecado, cuja deformidade procede unicamente da criatura, ainda que o próprio pecado seja por Ele permitido, limitado e ordenado a fins bons.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há um modo cruel de usar esta doutrina e um modo verdadeiro. O modo cruel é dizer ao enlutado que tudo tem um propósito, como se a frase fosse um analgésico — e ela não é, porque não sabemos qual é o propósito, e fingir que sabemos é mentira dita em nome de Deus. O modo verdadeiro é mais silencioso e mais firme: não sabemos por que isto aconteceu, e não vamos inventar; mas sabemos que não escapou das mãos d\'Ele, que Ele não é indiferente, e que já provou onde estava do lado do sofrimento — não como espectador, mas como quem o atravessou. Jó nunca soube da conversa do primeiro capítulo. Recebeu algo melhor do que a explicação que pedia: o próprio Deus falando com ele. É isso que a providência oferece ao crente que sofre — não o mapa, mas a companhia de quem tem o mapa.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 16-18',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Os capítulos 16 a 18 do Livro I são o tratado de Calvino sobre a providência, incluindo a difícil questão de como Deus usa a ação dos ímpios sem se contaminar com ela.',
    },
    {
      id: 'hodge-st1',
      autor: 'Charles Hodge',
      ano: '1872',
      titulo: 'Systematic Theology, vol. I — sobre a providência',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/hodge/theology1.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Trata preservação, concorrência e governo separadamente, com a discussão das objeções. Cobre as unidades 25 a 27 do programa de TS01.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus VI, De providentia',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A distinção entre o ato e a deformidade do ato, usada acima, é dele. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. V — Da Providência',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 4 trata explicitamente de como a providência alcança os pecados sem que Deus seja seu autor.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a providência',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
    },
  ],
};
