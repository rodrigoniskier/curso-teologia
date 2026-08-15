import type { Verbete } from '../../tipos';

export const aconselhamento: Verbete = {
  id: 'tp03-aconselhamento',
  disciplina: 'TP03',
  unidade: 3,
  titulo: 'Aconselhamento Bíblico',
  subtitulo: 'O que a suficiência da Escritura afirma — e o que ela nunca afirmou',
  objetivo:
    'Ao final, você saberá por que o aconselhamento é uma forma do ministério da Palavra, o que a doutrina da suficiência de fato reivindica, o que a Escritura entende por "coração" e por que isso condena a mera mudança de comportamento, e como se posicionar diante da medicina e da psiquiatria sem cair nos dois erros que ferem pessoas.',
  atualizadoEm: '2026-08-15',
  verMais: ['tp02-poimenica', 'ts04-santificacao', 'ts10-etica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Bate na porta do gabinete um casal cujo casamento está acabando. Ou um irmão que não sai da cama há três semanas. Ou um jovem escravizado por pornografia e envergonhado demais para contar a alguém antes de agora. E o pastor tem três instintos, todos compreensíveis e todos incompletos.',
    },
    {
      tipo: 'lista',
      itens: [
        'Citar um versículo e orar. Sincero, e insuficiente quando trata a Escritura como amuleto — palavra certa aplicada sem que ninguém tenha entendido o problema.',
        'Encaminhar imediatamente ao psicólogo. Às vezes é exatamente o que se deve fazer, e vira erro quando é reflexo automático: o pastor conclui que a alma alheia não é assunto dele, o que contraria o próprio nome do seu ofício.',
        'Dar conselho prático a partir da experiência. Útil, e não é ministério: é ser um amigo com um título.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A disciplina do aconselhamento bíblico existe para dar ao pastor algo mais do que instinto. E ela começa por situar a atividade no lugar certo.',
    },

    { tipo: 'secao', titulo: 'Uma das três formas do ministério da Palavra', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Pregação, ensino e aconselhamento não são três departamentos: são três modos de fazer a mesma coisa. A pregação leva a Palavra a muitos de uma vez; o ensino a organiza e a transmite sistematicamente; o aconselhamento a aplica a **uma** pessoa, na situação concreta dela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Segue disso algo prático: se aconselhar é ministrar a Palavra, então o pastor que aconselha sem conhecer bem a Escritura está desarmado, por mais empático que seja — e o que conhece a Escritura e não escuta a pessoa está aplicando texto a um caso que não examinou. Paulo descreve as duas exigências juntas ao dizer que admoestava "cada um" com lágrimas, por três anos (At 20.31): conteúdo e proximidade.',
    },

    { tipo: 'secao', titulo: 'O que a suficiência afirma', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Toda a controvérsia deste campo passa por uma doutrina, e quase toda a confusão vem de enunciá-la mal. Vale ler o que a Confissão de fato diz.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, § 6',
      fonteId: 'cfw-ipib',
      texto:
        'Todo o conselho de Deus, no tocante a todas as coisas necessárias para a sua própria glória, para a salvação, fé e vida do homem, está expressamente exposto na Escritura, ou dela se pode deduzir por boa e necessária consequência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no recorte: **necessárias para a glória de Deus, para a salvação, a fé e a vida do homem**. A Escritura é suficiente *para aquilo a que se propõe*. Ela não afirma ensinar farmacologia, endocrinologia, nem o funcionamento da tireoide — e nunca pretendeu. Quem lhe atribui essa pretensão não a está honrando: está pedindo dela algo que ela não oferece, e o resultado previsível é frustração, seguida de descrédito.',
    },
    {
      tipo: 'termo',
      termo: 'Suficiência e onicompetência',
      texto:
        'Suficiência é a afirmação de que a Escritura basta para o que Deus se propôs revelar: quem ele é, o que fez, o que o homem deve crer e como deve viver. Onicompetência seria a afirmação de que ela responde a toda pergunta de toda natureza. A tradição reformada afirma a primeira e nega a segunda — e a distinção é justamente o que permite ao conselheiro cristão usar o que a medicina descobriu sem achar que está traindo a Palavra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência prática merece ser dita sem rodeio, porque é aqui que se fere gente. Um irmão com depressão pode estar em pecado, pode estar sob provação, pode ter uma disfunção fisiológica, e pode ter as três coisas ao mesmo tempo. Tratar toda tristeza profunda como falta de fé é crueldade travestida de fidelidade; tratar todo problema espiritual como química cerebral é abandono travestido de competência. O conselheiro precisa da humildade de não saber, de antemão, qual é o caso.',
    },

    { tipo: 'secao', titulo: 'O coração, e por que mudar comportamento não basta', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A palavra "coração" na Escritura não significa o que significa hoje. Não é a sede da emoção em oposição à razão: é o centro de controle da pessoa inteira — pensamento, vontade, afeto e intenção reunidos. É por isso que se diz que do coração procedem "as fontes da vida" (Pv 4.23) e que é de dentro, do coração, que saem os maus desígnios (Mc 7.21).',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência para o aconselhamento é decisiva. Se o comportamento brota do coração, então intervenção que atinge só o comportamento é superficial por definição. Fazer alguém parar de beber sem tocar no que a bebida estava resolvendo produz, na melhor das hipóteses, um abstêmio infeliz — e, com frequência, a troca de um vício por outro. A pergunta do conselheiro não é apenas "o que você está fazendo?", mas "o que você está querendo, e o que está temendo?".',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí a estrutura que Paulo usa em Efésios 4.22-24, e que não é um par de sinônimos: **despojar-se** do velho homem e **revestir-se** do novo. Não basta parar; é preciso substituir. O ladrão não é mandado apenas a não furtar, mas a trabalhar para ter o que repartir com o necessitado (Ef 4.28) — o mesmo impulso, reorientado.',
    },
    {
      tipo: 'citacao',
      autor: 'John Owen',
      obra: 'The Mortification of Sin, 1656',
      fonteId: 'owen-mortification',
      texto:
        'Sede matando o pecado, ou ele estará matando a vós. [...] A mortificação do pecado não consiste em ocultar-lhe a manifestação exterior, nem no abandono de um pecado por outro, nem numa disposição serena do temperamento natural.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Owen antecipa exatamente o erro moderno: a pessoa contida não é a pessoa mudada. E acrescenta a advertência inversa, que o aconselhamento cristão precisa reter — a mortificação não é obra da força de vontade, e sim do Espírito. Aconselhamento que devolve o irmão à própria determinação apenas o deixa mais culpado quando ele fracassar de novo.',
    },

    { tipo: 'secao', titulo: 'Onde o campo se divide', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A história recente do aconselhamento cristão é curta e agitada. Vale conhecê-la porque as três posições continuam representadas em qualquer igreja.',
    },
    {
      tipo: 'controversia',
      titulo: 'Que lugar cabe às ciências psicológicas',
      posicoes: [
        {
          escola: 'Nouthética',
          sintese:
            'Nasce nos anos 1970 como reação à absorção acrítica da psicologia secular pelo clero. Sustenta que os problemas não orgânicos da vida são, no fundo, questões de pecado e santificação, e que a Escritura os cobre; o termo vem de noutheteo, admoestar. A força foi devolver a alma ao pastor num momento em que ele a tinha entregado. A crítica que recebeu, inclusive de dentro do movimento, é a de reduzir sofrimento a pecado com rapidez excessiva, e de dar pouca atenção ao sofredor que é vítima e não agente.',
        },
        {
          escola: 'Aconselhamento bíblico contemporâneo',
          sintese:
            'Herda a convicção sobre a suficiência e corrige a aspereza: distingue o que a pessoa fez do que lhe foi feito, leva a sério trauma, luto e enfermidade, e trata as descobertas descritivas das ciências humanas como observação útil, submetida à Escritura no plano normativo. A dificuldade é manter a fronteira: quanto mais se incorpora, mais é preciso explicar por que aquilo não é integracionismo.',
        },
        {
          escola: 'Integracionismo',
          sintese:
            'Sustenta que teologia e psicologia investigam o mesmo ser humano por vias distintas, e que ambas são fontes legítimas — toda verdade é verdade de Deus. A força é o realismo diante de quadros clínicos que a exortação não resolve. A dificuldade é o critério: sem uma norma que decida os conflitos, a psicologia da moda tende a fixar a antropologia, e a Escritura acaba ilustrando conclusões tomadas em outro lugar.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A posição confessional oferece um critério que evita os dois abismos: a Escritura é **normativa** — decide o que o ser humano é, o que deve buscar e como muda —, e as observações das ciências podem ser **descritivas** úteis, do mesmo modo que a medicina descreve o corpo sem determinar o que se deve fazer com ele. Um conselheiro pode aprender com um estudo sobre privação de sono sem por isso adotar a antropologia de quem o escreveu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sobre medicação, convém ser explícito, porque o silêncio aqui produz dano. Um cristão pode tomar antidepressivo pelas mesmas razões pelas quais toma insulina: o corpo é parte da pessoa, e a queda o afetou. Isso não substitui o cuidado espiritual, não resolve pecado, e não deve ser tratado como fracasso de fé. Pastores que insinuam o contrário empurram pessoas doentes para longe do tratamento **e** para longe da igreja.',
    },

    {
      tipo: 'definicao',
      termo: 'Aconselhamento bíblico',
      texto:
        'É a aplicação pessoal e situada da Palavra de Deus a um indivíduo, como uma das três formas do ministério da Palavra, ao lado da pregação e do ensino. Opera sob a suficiência da Escritura — que basta para o que Deus se propôs revelar sobre fé e vida, sem pretender ensinar as ciências naturais —, dirige-se ao coração como centro de onde procede o comportamento, e busca a mudança pela dupla obra de despojar-se e revestir-se, produzida pelo Espírito e não pela força de vontade do aconselhado.',
    },

    {
      tipo: 'pastoral',
      texto:
        'Há um alívio nesta doutrina que o pastor precisa receber antes de oferecer. Ele não é o agente da mudança de ninguém — é ministro, isto é, servo que aplica a palavra de outro. Isso o livra de duas cargas impossíveis: a de ter resposta pronta para tudo e a de sentir-se responsável pelo resultado. O conselheiro que carrega essas duas cargas ou se esgota ou começa a manipular, porque precisa que o irmão melhore para se sentir competente. E há um alívio para o aconselhado também. Se o alvo é o coração, e não o comportamento, então ele não precisa fingir que está melhor do que está: pode dizer a verdade sobre o que quer e o que teme, sabendo que é justamente aí que o trabalho acontece. Uma igreja onde as pessoas conseguem dizer a verdade sobre si mesmas já tem quase tudo o que o aconselhamento exige — e o pastor que aprende a escutar sem se apressar cria essa igreja mais depressa do que qualquer programa.',
    },
  ],

  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. I, XIII e XVIII',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 6 do cap. I é o texto exato da suficiência, com o recorte "glória de Deus, salvação, fé e vida" que delimita o que a doutrina reivindica. O cap. XIII trata da santificação e o XVIII da segurança e de suas oscilações — matéria diária de gabinete.',
    },
    {
      id: 'owen-mortification',
      autor: 'John Owen',
      ano: '1656',
      titulo: 'The Mortification of Sin in Believers',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/mortificationofs00owen',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O tratado clássico sobre mudança real, com a distinção entre mortificar o pecado e apenas ocultar sua manifestação exterior — a crítica antecipada à modificação de comportamento. Domínio público, verificável pela auditoria.',
    },
    {
      id: 'baxter-reformed-pastor',
      autor: 'Richard Baxter',
      ano: '1656',
      titulo: 'The Reformed Pastor — sobre a instrução pessoal, família a família',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/reformedpastor00baxt',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Baxter descreve o trabalho de catequizar e aconselhar individualmente cada família da paróquia — o aconselhamento como ministério ordinário da Palavra, e não como recurso de emergência.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro III, caps. 3 e 6-10',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'III.3 trata do arrependimento como mortificação e vivificação — a estrutura de despojar-se e revestir-se; III.6-10 é o tratado sobre a vida cristã, aplicado e concreto. Domínio público.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Acervo de textos em português sobre aconselhamento e vida cristã',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Traduções de Owen, Baxter e material contemporâneo sobre aconselhamento bíblico, incluindo textos dos três lados da controvérsia exposta acima.',
    },
  ],
};
