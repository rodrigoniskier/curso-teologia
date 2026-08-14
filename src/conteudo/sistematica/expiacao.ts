import type { Verbete } from '../../tipos';

export const expiacao: Verbete = {
  id: 'ts03-expiacao',
  disciplina: 'TS03',
  unidade: 11,
  titulo: 'A Expiação',
  subtitulo: 'Por que a cruz era necessária, o que aconteceu nela, e para quem',
  objetivo:
    'Ao final, você saberá por que a necessidade da expiação depende da natureza de Deus e não de um decreto arbitrário, distinguirá as cinco teorias históricas e o que cada uma preserva, e compreenderá o que a extensão da expiação realmente disputa — que não é o que costuma se supor.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts03-pessoa-de-cristo', 'ts01-atributos', 'ts01-decretos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um homem foi executado em Jerusalém por volta do ano 30. A afirmação central do cristianismo é que essa execução resolveu o problema de outras pessoas — pessoas que não estavam lá, algumas ainda não nascidas. Nenhuma outra religião faz uma afirmação com essa estrutura, e ela exige explicação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Três perguntas se impõem, e a ordem entre elas importa. Por que foi necessário? O que exatamente aconteceu ali? E a quem alcança? Cada uma tem sido respondida de modos incompatíveis, e as respostas se determinam mutuamente.',
    },
    { tipo: 'secao', titulo: 'A necessidade: um Deus que não pode simplesmente perdoar', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A objeção mais natural é também a mais antiga: se Deus é onipotente e misericordioso, por que não perdoar e pronto? Um credor pode cancelar uma dívida sem que ninguém a pague. Por que Deus não faria o mesmo?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta cristã é que o pecado não é primariamente uma dívida contábil, mas uma violação da ordem moral que é o próprio caráter de Deus. Perdoar sem satisfação não seria generosidade — seria Deus declarar que a justiça não importa, isto é, negar a si mesmo. E aqui a doutrina da simplicidade divina, que parecia abstrata, mostra o seu serviço: como Deus não tem uma reserva de misericórdia separada de uma reserva de justiça, Ele não pode exercer uma suspendendo a outra.',
    },
    {
      tipo: 'controversia',
      titulo: 'A expiação era necessária?',
      posicoes: [
        {
          escola: 'Necessidade hipotética (Agostinho, Tomás, e Calvino em parte)',
          sintese:
            'Deus poderia ter salvo de outro modo; escolheu este porque era o mais conveniente. Preserva a liberdade divina absoluta, mas deixa a cruz parecer um caminho entre outros — o que torna difícil explicar Getsêmani, onde o Filho pede que o cálice passe e a resposta é que não há outro modo.',
        },
        {
          escola: 'Necessidade absoluta (Anselmo, a escolástica reformada, Turretin)',
          sintese:
            'Dada a decisão livre de salvar, a satisfação era necessária, porque a justiça de Deus não é uma opção que Ele possa desligar — é o que Ele é. Não limita a liberdade divina: Deus era livre para não salvar ninguém; não era livre para salvar injustamente. É a posição da ortodoxia reformada.',
        },
      ],
    },
    {
      tipo: 'passagem',
      referencia: 'Romanos 3.25-26',
      texto:
        'A quem Deus propôs, no seu sangue, como propiciação, mediante a fé, para manifestar a sua justiça, por ter Deus, na sua tolerância, deixado impunes os pecados anteriormente cometidos; tendo em vista a manifestação da sua justiça no tempo presente, para ele mesmo ser justo e o justificador daquele que tem fé em Jesus.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Este é o texto decisivo, e o problema que Paulo levanta é surpreendente: não é como Deus pode condenar, mas como Ele pôde ter deixado pecados impunes durante séculos sem se tornar cúmplice. A cruz é apresentada como a resposta a uma acusação contra a integridade de Deus. O propósito declarado é que Ele seja "justo e o justificador" — as duas coisas ao mesmo tempo, que é precisamente o que parecia impossível.',
    },
    { tipo: 'secao', titulo: 'A natureza: o que aconteceu ali', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A história cristã produziu cinco grandes explicações. Elas não são todas igualmente boas, mas quase todas capturam algo real — e o erro característico de cada uma é tomar um aspecto verdadeiro como se fosse o todo.',
    },
    {
      tipo: 'controversia',
      titulo: 'As teorias da expiação',
      posicoes: [
        {
          escola: 'Resgate / Christus Victor (patrística; Aulén no séc. XX)',
          sintese:
            'A cruz é vitória sobre Satanás, o pecado e a morte, libertando os cativos. É genuinamente bíblico (Cl 2.15; Hb 2.14) e a tradição reformada o afirma. Torna-se insuficiente quando isolado, pois não explica como a culpa é removida — vencer o carcereiro não anula a sentença.',
        },
        {
          escola: 'Satisfação (Anselmo, séc. XI)',
          sintese:
            'O pecado ofende a honra infinita de Deus e exige reparação que só o Deus-homem pode prestar. Rompeu decisivamente com a ideia de resgate pago ao diabo. Sua limitação é a categoria feudal da honra: o problema é apresentado como afronta à dignidade, e não como violação da justiça e exposição à ira.',
        },
        {
          escola: 'Influência moral (Abelardo; o liberalismo do séc. XIX)',
          sintese:
            'A cruz demonstra o amor de Deus e assim desperta amor em nós, transformando-nos. Verdadeiro como efeito (Rm 5.8), falso como explicação: se nada objetivo foi realizado, a morte de Cristo é uma demonstração gratuita — como quem se atira ao mar para provar amor a alguém que não está se afogando.',
        },
        {
          escola: 'Governamental (Grócio, séc. XVII)',
          sintese:
            'Deus não exigiu pagamento estrito; aceitou a morte de Cristo como demonstração pública de que a lei é séria, preservando a ordem moral do universo. Posição arminiana clássica. O problema é que ninguém é de fato punido pelos pecados, e o perdão continua sem base jurídica real.',
        },
        {
          escola: 'Substituição penal (a Reforma; posição confessional)',
          sintese:
            'Cristo tomou o lugar dos pecadores, suportando a pena que a justiça de Deus exigia contra eles, de modo que a culpa é realmente transferida e realmente punida. Absorve o que há de verdadeiro nas demais — há vitória, há satisfação, há demonstração de amor — mas explica o que elas não explicam: como Deus permanece justo ao justificar.',
        },
      ],
    },
    {
      tipo: 'termo',
      termo: 'Propiciação e expiação',
      texto:
        'Termos distintos que o português às vezes confunde. Expiação tem por objeto o pecado: ele é coberto, removido. Propiciação tem por objeto a ira: ela é aplacada. A teologia liberal costuma reduzir tudo a expiação, alegando que ira seria antropopatismo pagão — mas hilastērion em Rm 3.25 e 1Jo 4.10 exige o sentido pleno. Sem propiciação não há explicação para a linguagem do cálice em Getsêmani.',
    },
    {
      tipo: 'termo',
      termo: 'Obediência ativa e passiva',
      texto:
        'A obediência passiva é o sofrimento da pena em nosso lugar; a ativa é o cumprimento perfeito da lei em nosso favor. A distinção é essencial: sem a passiva, a culpa permaneceria; sem a ativa, o pecador ficaria apenas quite — perdoado, mas sem justiça positiva. Não basta remover o débito; é preciso creditar o mérito. Por isso o justificado não é apenas absolvido, mas declarado justo.',
    },
    { tipo: 'secao', titulo: 'A extensão: o que realmente se disputa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum ponto da soteriologia é mais mal compreendido. A pergunta não é se a morte de Cristo tem valor suficiente para salvar todos — nisso reformados e arminianos concordam, e a fórmula medieval "suficiente para todos, eficaz para os eleitos" é aceita por ambos. A pergunta é qual foi a intenção de Deus ao enviá-lo.',
    },
    {
      tipo: 'controversia',
      titulo: 'A extensão da expiação',
      posicoes: [
        {
          escola: 'Expiação universal (arminiana)',
          sintese:
            'Cristo morreu igualmente por todos, tornando todos salváveis; a fé do indivíduo é que decide a aplicação. Preserva a oferta universal do evangelho. Dificuldade: se a expiação de fato pagou pelos pecados de todos, por que alguém é condenado — e se ela apenas tornou a salvação possível, a cruz não salvou ninguém, apenas criou uma oportunidade.',
        },
        {
          escola: 'Redenção particular (reformada)',
          sintese:
            'Cristo morreu com a intenção definida de salvar efetivamente os que o Pai lhe deu, e sua morte de fato os salva — não os torna salváveis. A oferta do evangelho permanece universal e sincera, porque a suficiência é ilimitada e o pregador não conhece os eleitos. Dificuldade honesta: exige leitura cuidadosa dos textos que dizem "todos" e "o mundo inteiro".',
        },
        {
          escola: 'Amiraldismo (hipotético universalismo)',
          sintese:
            'Deus decretou uma expiação universal condicional e, prevendo que ninguém creria por si, elegeu alguns para dar-lhes fé. Tentativa de mediação nascida em Saumur no séc. XVII; tolerada em parte da tradição reformada, mas criticada por postular no decreto divino uma sequência de intenções que se corrigem.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O argumento reformado mais forte não é textual, mas estrutural: um pai que envia o filho a morrer por pessoas determinadas está fazendo algo diferente de quem o envia a morrer por uma possibilidade. Em João 10, o Bom Pastor dá a vida "pelas ovelhas", e em João 17 Jesus ora explicitamente por aqueles que o Pai lhe deu, e não pelo mundo. A intenção e o efeito coincidem — o que a Escritura chama de redenção é sempre redenção consumada.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Expiação',
      texto:
        'É a obra pela qual Jesus Cristo, verdadeiro Deus e verdadeiro homem, em cumprimento do propósito eterno do Pai e por amor voluntário, colocou-se no lugar dos pecadores como seu substituto — prestando em favor deles a obediência perfeita que a lei exigia e suportando em lugar deles a pena que a justiça divina cominava, satisfazendo assim plenamente essa justiça e aplacando a ira contra o pecado; de modo que Deus, sem violar nada do que é, permanece justo e ao mesmo tempo justifica o ímpio que crê. Sendo de valor infinito, essa obra é suficiente para todos e é sinceramente oferecida a todos; sendo obra de intenção definida, ela efetivamente redime aqueles pelos quais foi oferecida, e não apenas os torna redimíveis.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma pergunta que aparece em todo aconselhamento sério: como sei que Deus me perdoou de verdade, e não só me tolera? A resposta que a substituição penal dá é jurídica antes de ser emocional, e é por isso que sustenta peso. Se a pena pelos seus pecados foi de fato executada — não perdoada de leve, não relevada, mas cumprida —, então ela não pode ser cobrada duas vezes. Deus não é um credor de boa vontade que decidiu não protestar o título: é um juiz cuja sentença já foi integralmente satisfeita. E a obediência ativa acrescenta o que falta ao alívio: você não está apenas sem dívida, o que ainda deixaria alguém neutro diante de Deus; está vestido de uma justiça que não é sua. É isso que separa o cristianismo do moralismo religioso, que passa a vida tentando ficar quite e nunca chega nem a isso.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro II, caps. 15-17',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'II.16-17 tratam de como Cristo aboliu o pecado e mereceu a graça, com a discussão da necessidade e do mérito. Domínio público.',
    },
    {
      id: 'hodge-st3-pdf',
      autor: 'Charles Hodge',
      ano: '1873',
      titulo: 'Systematic Theology, vol. II-III — sobre a obra de Cristo e a expiação',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/h/hodge/theology3/cache/theology3.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Trata as teorias da expiação uma a uma e discute a extensão com detalhe. Cobre as unidades 11 a 14 do programa de TS03.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus XIV, De officio Christi',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A defesa clássica da necessidade absoluta da satisfação e da distinção entre obediência ativa e passiva. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. VIII, §§ 4-8',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 5 afirma a satisfação plena da justiça do Pai; o § 8 formula a redenção particular sem ambiguidade.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a obra de Cristo',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Bavinck expõe as teorias historicamente e mostra como a substituição penal integra o que as demais isolam.',
    },
  ],
};
