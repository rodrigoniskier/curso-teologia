import type { Verbete } from '../../tipos';

export const aconselhamento2: Verbete = {
  id: 'tp04-aconselhamento-2',
  disciplina: 'TP04',
  unidade: 2,
  titulo: 'Aconselhamento: Método e Casos',
  subtitulo:
    'Quatro pessoas dizem a mesma palavra e querem dizer quatro coisas — quem responde à palavra acerta em uma',
  objetivo:
    'Ao final, você saberá por que a coleta de dados precede a instrução e o que exatamente se coleta, distinguirá esperança falsa de verdadeira, reconhecerá o padrão comum sob ira, medo e ansiedade, conhecerá as três posições reformadas sobre divórcio e novo casamento com o custo de cada uma, e saberá o que fazer quando o aconselhamento não avança.',
  atualizadoEm: '2026-08-17',
  verMais: ['tp03-aconselhamento', 'tp53-conflitos', 'cg07-psicologia'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Quatro pessoas procuram o pastor na mesma semana e dizem a mesma frase: "estou ansioso".',
    },
    {
      tipo: 'lista',
      itens: [
        'A primeira deve três meses de aluguel e não dorme desde que o senhorio ligou.',
        'A segunda tem episódios em que o coração dispara, as mãos formigam e ela acha que vai morrer — e não sabe dizer o que os provoca.',
        'A terceira está escondendo alguma coisa há dois anos e aprendeu a chamar de ansiedade o que é culpa.',
        'A quarta emagreceu sete quilos sem dieta, sente calor quando ninguém sente, e nunca mediu a tireoide.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um conselheiro que responda à palavra "ansiedade" dará a mesma orientação às quatro, e ela servirá, na melhor das hipóteses, a uma. Às outras três fará algum tipo de dano — à terceira, o dano de confirmar o disfarce; à quarta, o de tratar como problema espiritual o que um exame de sangue resolveria.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A disciplina anterior estabeleceu **por que** a Escritura é suficiente para o cuidado da alma. Esta trata do que fazer com isso numa terça-feira à noite, diante de uma pessoa concreta cujo problema você ainda não conhece. E o primeiro achado é desconfortável: **o erro mais comum não é dar o conselho errado, é dar o conselho certo cedo demais.**',
    },
    {
      tipo: 'secao',
      titulo: 'Por que a pressa é o erro característico',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A pressa não vem de desleixo. Vem, quase sempre, de duas coisas boas mal aplicadas: o conselheiro conhece a doutrina e quer aliviar o sofrimento que está vendo. Ele reconhece o assunto nas primeiras frases, e a partir daí escuta apenas para confirmar o que já concluiu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Baxter, que visitava as famílias da paróquia uma a uma para instruí-las pessoalmente, defendia esse trabalho miúdo contra a objeção de que o púlpito bastaria. A razão que ele dá continua valendo: da forma pública se fala ao conjunto, e o conjunto não existe — existem pessoas, cada uma com um estado da alma que só se descobre perguntando. Um sermão pode ser verdadeiro para todos e útil para poucos; um conselho só é útil se for daquela pessoa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há ainda um detalhe que a experiência ensina e nenhum manual dispensa: **o que a pessoa traz primeiro raramente é o problema.** É o que ela julgou seguro dizer a alguém que ainda não sabe se merece confiança. O motivo real costuma aparecer na terceira conversa, ou quando o relógio já passou da hora.',
    },
    {
      tipo: 'secao',
      titulo: 'O que se coleta, e em que ordem',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Coletar não é interrogar. É recolher, por perguntas abertas e sem pressa, quatro camadas que costumam vir embaralhadas na fala de quem sofre — e separá-las já é metade do trabalho.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Os fatos.** O que aconteceu, quando, com quem, quantas vezes. Não o que a pessoa concluiu sobre o que aconteceu — o que aconteceu. Aqui entram sono, alimentação, remédios, exames, trabalho e dívidas, que parecem irrelevantes e frequentemente não são.',
        '**Os sentimentos.** O que ela sentiu, e o que sente agora ao contar. Sentimento não é pecado nem diagnóstico: é dado. Serve para localizar o que está em jogo, não para julgar.',
        '**Os pensamentos.** O que ela disse a si mesma sobre aquilo. Aqui aparecem as interpretações que sustentam o sofrimento — "isso prova que sou um fracasso", "Deus me abandonou", "se eu fosse melhor, ele não teria saído".',
        '**As reações.** O que ela fez em seguida, e o que faz de forma repetida. A conduta revela o que as palavras ainda não admitiram, e é onde o padrão fica visível.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Só depois de separar as quatro camadas é possível perguntar o que a Escritura diz — porque só então se sabe *sobre o quê* perguntar.',
    },
    {
      tipo: 'definicao',
      termo: 'Coleta de dados',
      texto:
        'Primeira fase do aconselhamento, em que o conselheiro recolhe fatos, sentimentos, pensamentos e reações antes de formular qualquer orientação. Não é uma cortesia introdutória nem uma técnica emprestada da clínica: é a condição de aplicar corretamente um texto que se crê suficiente, pelo mesmo motivo por que a exegese precede a pregação. Quem pula esta fase não está confiando mais na Escritura — está aplicando-a a um caso que não conhece.',
    },
    {
      tipo: 'secao',
      titulo: 'Ninguém conta o que importa a quem não confia',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O programa da disciplina põe o acolhimento como unidade própria, e há uma razão prática para isso não ser sentimentalismo: a informação de que o conselheiro mais precisa é justamente a que a pessoa tem mais vergonha de dar. Ela sairá antes de dizê-la se sentir que será processada em vez de ouvida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso impõe ao conselheiro uma disciplina específica, que é não reagir com o rosto. Quem se sobressalta ao ouvir o pecado alheio ensina, sem dizer nada, que aquele assunto não se traz aqui. E quem, do outro lado, banaliza — "isso é comum, não se preocupe" — ensina que a consciência da pessoa está exagerando, o que raramente é verdade e nunca ajuda.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A medida certa é conhecida e difícil: receber sem espanto e sem leviandade. Sibbes e os puritanos do cuidado pastoral trabalharam essa distinção a partir da imagem do caniço rachado que não se quebra e do pavio fumegante que não se apaga — a pessoa já ferida não precisa de mais peso, precisa de quem sustente até que ela consiga andar.',
    },
    {
      tipo: 'secao',
      titulo: 'Esperança falsa e esperança verdadeira',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esta é a parte em que o conselheiro bem-intencionado mais erra, porque o erro se parece com bondade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**Esperança falsa é a que promete resultado.** "Isso vai passar", "Deus vai restaurar seu casamento", "você vai se sentir melhor". Nenhuma dessas frases está na Escritura como promessa a indivíduos, e todas criam uma dívida que o conselheiro não pode pagar. Quando o casamento não se restaura e o sentimento não melhora, a pessoa não conclui que o conselheiro se enganou — conclui que Deus falhou, ou que ela falhou, e as duas conclusões são piores do que a dor original.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**Esperança verdadeira é a que promete companhia e fim, não trajeto.** Ela afirma o que de fato está prometido: que a obra começada será completada, que nenhuma provação vem sem propósito, que o sofrimento é usado na santificação e não desperdiçado, e que há um termo para ele — sem garantir que o termo seja nesta vida nem que o caminho seja curto. É menos do que a pessoa quer ouvir naquele momento, e é a única coisa que continuará de pé daqui a dois anos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A diferença prática se mede assim: a esperança falsa fica mais frágil a cada semana que passa sem melhora; a verdadeira não depende de melhora nenhuma.',
    },
    {
      tipo: 'secao',
      titulo: 'O que muda acontece fora da sala',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma conversa por semana são cinquenta minutos contra dez mil. Se a mudança dependesse do que acontece na sala, ela não aconteceria. Daí as tarefas — não como exercício escolar, mas porque a santificação se dá no uso dos meios e na conduta repetida, e não na compreensão obtida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tarefa boa tem três marcas: é **concreta** (não "ore mais", e sim o quê, quando, por quanto tempo), é **verificável** na conversa seguinte, e é **pequena o bastante** para ser cumprida por alguém que já está exausto. Tarefa grande demais não produz mudança — produz mais uma prova de fracasso, que era exatamente o que sobrava.',
    },
    {
      tipo: 'secao',
      titulo: 'Ira, medo e ansiedade têm o mesmo esqueleto',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O programa dedica três unidades a esses três estados, e o estudante tende a tratá-los como três assuntos. São variações de um só, e ver isso economiza metade do trabalho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada um deles é a reação do coração diante de algo que ele ama e teme perder, ou que já perdeu. A **ira** aparece quando alguém obstrui aquilo; o **medo**, quando a perda se anuncia; a **ansiedade**, quando a perda é possível e o desfecho não está nas mãos de quem sofre. Por isso a pergunta que mais rende não é "o que você está sentindo" e sim **"o que você perde se isso acontecer"** — a resposta nomeia o que o coração de fato adora.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nada disso torna o sentimento pecaminoso por si. Há ira justa, e há medo prudente. O que a análise revela é a *régua*: quando a reação é desproporcional ao objeto, ela está medindo outra coisa — e essa outra coisa costuma ser o que ocupou, naquela vida, o lugar que era de Deus. Owen descreve o trabalho seguinte com uma franqueza que os manuais suavizam: o pecado não se administra, mortifica-se, e quem negocia com ele em vez de matá-lo já perdeu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo esqueleto explica os vícios e os pecados escravizadores da unidade 14. O que prende não é a substância nem o hábito: é a promessa que aquilo faz de aliviar algo que a pessoa não suporta sentir. Enquanto essa promessa não for desmontada e substituída, tirar o objeto só troca de vício.',
    },
    {
      tipo: 'controversia',
      titulo: 'Divórcio e novo casamento',
      posicoes: [
        {
          escola: 'Só adultério e abandono',
          sintese:
            'O vínculo se rompe legitimamente nos dois casos que a Escritura nomeia — a infidelidade e o abandono pelo incrédulo —, e nesses casos a parte inocente pode casar-se de novo. É a posição da Confissão de Westminster e a que este portal segue. Contra si, a dificuldade de aplicar duas categorias fechadas a situações que não se encaixam nelas: a mulher agredida cujo marido não a abandonou nem cometeu adultério fica, nessa leitura, sem porta — e quem sustenta a posição precisa dizer o que faz por ela, sob pena de a doutrina proteger o vínculo às custas da pessoa.',
        },
        {
          escola: 'Indissolubilidade sem recasamento',
          sintese:
            'A separação pode ser necessária para proteger, mas o vínculo não se desfaz enquanto ambos viverem, e não há recasamento. Tem a favor a seriedade com que trata a permanência do pacto e o testemunho de que o casamento não é contrato rescindível. Contra si, precisa explicar por que Cristo enunciou uma exceção se ela não altera nada, e impõe celibato perpétuo a quem foi traído — um peso que a Escritura não parece atribuir ao inocente.',
        },
        {
          escola: 'Abandono material',
          sintese:
            'Violência continuada e negligência que destrói a vida comum equivalem a abandono, ainda que o cônjuge permaneça sob o mesmo teto — pois o abandono está no que se deixou de fazer, não no endereço. Tem a favor a coerência com o que o abandono significa, e resolve o caso que a primeira posição deixa em aberto. Contra si, o critério fica com a fronteira móvel: quem decide quanta negligência basta, e a experiência mostra que fronteiras móveis se movem sempre para o lado de quem quer sair.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'A última unidade do programa é a mais honesta e a menos tratada: o que fazer quando o aconselhamento não avança. Convém distinguir três situações que se parecem. A primeira é a pessoa que não quer mudar e quer alívio — aqui o conselheiro não fracassou, e insistir em sessões só sustenta a ilusão de que algo está sendo feito; o que cabe é dizer isso com clareza e deixar a porta aberta. A segunda é o caso que excede o que o conselheiro tem — e reconhecer isso não é abrir mão da suficiência da Escritura, é aplicá-la, porque ela em nenhum lugar promete que este pastor é competente em tudo; encaminhar a um médico quando há sinal clínico, ou a alguém mais experiente, é ato de cuidado e não de descrença. A terceira é a mais difícil: o conselheiro é parte do problema, porque se envolveu demais, porque tem o mesmo pecado e não o enfrentou, ou porque precisa daquele caso dar certo. Quem nunca suspeitou de si nessa terceira hipótese provavelmente já esteve nela. E há uma coisa a fazer em todos os três casos, que é a mais desprezada de todas: **não conduzir sozinho.** O conselho que ninguém supervisiona é o que mais demora a perceber que se perdeu.',
    },
    {
      tipo: 'lista',
      itens: [
        'Antes de orientar, pergunte o que aconteceu — fatos, não conclusões. Sono, remédios, dívidas e exames entram aqui, por mais espiritual que pareça o assunto.',
        'Não responda à palavra que a pessoa usou; descubra o que ela quer dizer com aquela palavra.',
        'Trate o primeiro relato como o que foi seguro dizer, não como o problema.',
        'Ao dar esperança, verifique se o que você prometeu está prometido na Escritura àquela pessoa. Se depender de o problema melhorar, é esperança falsa.',
        'Faça a pergunta que localiza o coração: o que você perde se isso acontecer?',
        'Dê tarefas pequenas, concretas e verificáveis — e confira na conversa seguinte, ou não as dê.',
        'Quando não avançar, distinga entre quem não quer mudar, caso que excede você, e você mesmo como obstáculo. E não conduza caso difícil sem que outra pessoa saiba.',
      ],
    },
  ],
  fontes: [
    {
      id: 'baxter-reformed-pastor',
      autor: 'Richard Baxter',
      ano: '1656',
      titulo: 'The Reformed Pastor',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/reformedpastor00baxt',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A defesa clássica da instrução pessoal, família a família, contra a objeção de que a pregação pública bastaria. É o texto que fundamenta este verbete inteiro: Baxter conhecia o estado de alma de cada casa da paróquia porque perguntava, e o argumento dele é exatamente o desta disciplina. Domínio público.',
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
      nota: 'Para as unidades sobre ira, idolatria sexual e vícios. Owen recusa a ideia de administrar o pecado e descreve o trabalho de matá-lo, incluindo o diagnóstico do que o alimenta — que é precisamente a análise que este verbete chama de localizar o que o coração adora. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XV, XVIII e XXIV',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O capítulo XXIV enuncia a posição confessional sobre casamento, divórcio e recasamento que a controvérsia deste verbete discute. O XV, sobre arrependimento, e o XVIII, que admite que o crente possa passar longos períodos sem segurança, são os textos a ter à mão diante de quem não melhora.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro III',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Os capítulos sobre arrependimento, negação de si e a vida cristã dão o quadro em que as tarefas práticas fazem sentido: a mudança se dá no uso dos meios e na conduta, não na compreensão obtida numa conversa. Domínio público.',
    },
    {
      id: 'boston-fourfold',
      autor: 'Thomas Boston',
      ano: '1720',
      titulo: 'Human Nature in Its Fourfold State',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/humannatureinits00bostuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Útil para a unidade sobre provações e sofrimento. Boston — que enterrou vários filhos e escreveu sobre isso — trata a aflição sem prometer alívio e sem torná-la sem sentido, que é o equilíbrio exato da esperança verdadeira descrita aqui. Domínio público.',
    },
    {
      id: 'monergismo',
      autor: 'Vários',
      ano: 's.d.',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'A bibliografia oficial desta disciplina está inteira em catálogo — Adams, Powlison, Tripp, Jones, Street. Enquanto ela não estiver ao alcance, este acervo é o que existe em português sobre aconselhamento e vida cristã sem custo, e serve de complemento ao que o verbete ensina.',
    },
  ],
};
