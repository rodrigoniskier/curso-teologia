import type { Verbete } from '../../tipos';

export const poimenica: Verbete = {
  id: 'tp02-poimenica',
  disciplina: 'TP02',
  unidade: 1,
  titulo: 'Poimênica: a vida do pastor',
  subtitulo: 'A única alma da igreja que ninguém está pastoreando',
  objetivo:
    'Ao final, você entenderá por que Atos 20.28 põe o cuidado de si antes do cuidado do rebanho, reconhecerá os riscos que são específicos do ofício — e não versões piores dos riscos comuns —, saberá o que a tradição reformada ensina sobre corpo, dinheiro e estudo no ministério, e distinguirá chamado interno de chamado externo.',
  atualizadoEm: '2026-08-15',
  verMais: ['tp14-homiletica', 'ts04-santificacao', 'tp12-governo-presbiteriano'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Numa igreja saudável, todo membro tem quem cuide dele. Há pregação que o alimenta, presbíteros que o visitam, disciplina que o corrige, irmãos que percebem quando ele some. Uma pessoa, porém, costuma ficar de fora desse arranjo — justamente a que o organiza.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O pastor ocupa uma posição estranha: é o encarregado do cuidado espiritual de dezenas ou centenas de pessoas e, com frequência, ninguém pergunta como vai a alma dele. Pior: ele passa a semana lidando com as coisas de Deus profissionalmente, e essa familiaridade tem um efeito que quase ninguém antecipa no seminário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Poimênica — do grego *poimen*, pastor — é a disciplina que trata dessa questão antes de qualquer técnica ministerial. E ela não começa por conselhos práticos, mas por uma ordem de prioridade que está no texto.',
    },

    { tipo: 'secao', titulo: 'A ordem de Atos 20.28', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: 'Atos 20.28',
      texto:
        'Atendei por vós e por todo o rebanho sobre o qual o Espírito Santo vos constituiu bispos, para pastoreardes a igreja de Deus, a qual ele comprou com o seu próprio sangue.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A sequência não é acidental, e Baxter construiu sobre ela o clássico do assunto: primeiro **por vós**, depois **pelo rebanho**. Não porque o pastor importe mais, mas porque o que ele não tem não pode dar. Um homem que deixou de orar não conduz ninguém à oração por mais que pregue sobre ela.',
    },
    {
      tipo: 'citacao',
      autor: 'Richard Baxter',
      obra: 'The Reformed Pastor, 1656',
      fonteId: 'baxter-reformed-pastor',
      texto:
        'Cuidado com vós mesmos, para que não sejais destituídos daquela graça salvadora de Deus que oferecereis aos outros, e não sejais estranhos à obra eficaz daquele evangelho que pregais. [...] Muitos cozinheiros não provam a comida que preparam.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O risco descrito é específico do ofício, e é a chave do tópico inteiro. Não se trata de o pastor ter as mesmas tentações dos demais em grau maior; trata-se de tentações que **só existem** para quem lida com o sagrado como trabalho.',
    },
    {
      tipo: 'termo',
      termo: 'O perigo profissional',
      texto:
        'A Escritura deixa de ser lida para nutrir e passa a ser lida para produzir sermão, aula e devocional alheio. O texto vira insumo. Quando isso se instala, o pastor pode passar anos falando de Deus diariamente sem falar **com** Deus — e a coisa é difícil de detectar de fora, porque a produção continua boa. É a razão de a tradição reformada insistir na leitura devocional separada da leitura de estudo: não por sentimentalismo, mas porque a alma não se alimenta do que passa por ela a caminho do púlpito.',
    },

    { tipo: 'secao', titulo: 'As tentações que vêm com o ofício', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Spurgeon dedicou aulas inteiras a isso com seus alunos, e sua franqueza é rara. Vale enumerar sem eufemismo o que ele e a tradição identificam.',
    },
    {
      tipo: 'lista',
      itens: [
        'A vaidade do púlpito — o ofício põe o homem num lugar elevado, falando sem ser interrompido, e recebendo elogios semanais pelo desempenho. A tentação não é achar-se melhor que os outros; é passar a medir a fidelidade pelo efeito produzido.',
        'O desânimo — Spurgeon, que sofria de depressão, tratou o assunto sem espiritualizá-lo. O ministério expõe a resultados invisíveis, ingratidão e conflitos, e o abatimento do ministro é frequente o bastante para ser previsto, e não tratado como falha de fé.',
        'A comparação — igrejas maiores, convites melhores, números alheios. É o pecado que a Escritura chama de cobiça, aplicado ao que parece espiritual e por isso não se reconhece como cobiça.',
        'A solidão — o pastor sabe o que não pode contar a ninguém, e muitos concluem daí que não podem ter amigos na igreja. A conclusão é errada e cara: sigilo pastoral não exige isolamento afetivo, e o isolamento é onde quase toda queda começa.',
        'A pressa em resolver — a tentação de manipular a decisão do outro, apressar uma conversão, forçar uma reconciliação. É querer produzir com técnica o que só o Espírito produz.',
      ],
    },

    { tipo: 'secao', titulo: 'Corpo, dinheiro e estudo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa desta disciplina trata explicitamente de três assuntos que a piedade evangélica costuma achar prosaicos demais para figurar num curso de teologia. Eles estão ali porque é neles que os ministérios de fato naufragam.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**O corpo.** A doutrina da criação já resolve a questão de princípio: o corpo é bom, e a espiritualidade cristã não é fuga dele. Na prática ministerial, isso significa que sono, alimentação, exercício e descanso não são concessões à carne — são condições do trabalho. Elias, exausto e querendo morrer, recebe primeiro comida e sono, e só depois a palavra de Deus (1Rs 19). O texto trata a exaustão como exaustão, e não como problema espiritual disfarçado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**O dinheiro.** O Novo Testamento diz duas coisas ao mesmo tempo, e reter as duas é o ponto. Primeira: o ministro tem direito a sustento — "digno é o trabalhador do seu salário" (1Tm 5.18), e Paulo defende esse direito longamente em 1Coríntios 9. Segunda: os requisitos do presbítero excluem quem é "ávido de torpe ganância" (1Pe 5.2; Tt 1.7). Não há virtude em pastor mal pago, e há ruína em pastor que ama dinheiro. A salvaguarda prática é institucional: transparência das contas da igreja, remuneração definida pelo conselho e não pelo próprio ministro, e separação estrita entre a conta pessoal e a da igreja.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**O estudo.** Um ministro que para de estudar não fica estacionado: começa a repetir, e depois a repetir mal. A tradição reformada sempre exigiu ministério letrado — não por elitismo, mas porque quem prega tem de ler o texto, e não a lembrança do que ouviu sobre o texto. Vale a advertência inversa também: o estudo que não vira oração produz o professor frio que Baxter descreve, tecnicamente correto e espiritualmente vazio.',
    },

    { tipo: 'secao', titulo: 'Quem decide que alguém é chamado', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A questão da vocação atravessa a disciplina e é onde há mais confusão prática — jovens convictos de um chamado que a igreja não reconhece, e homens úteis que nunca se convenceram de ter recebido um.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como se discerne o chamado ao ministério',
      posicoes: [
        {
          escola: 'Ênfase no chamado interno',
          sintese:
            'Há uma convicção pessoal e irresistível, dada por Deus, sem a qual ninguém deve entrar no ministério. Spurgeon a descreve como um desejo intenso e permanente, e chega a dizer que quem consegue fazer outra coisa deve fazê-la. A força é impedir que o ministério vire escolha de carreira; o risco é confundir vocação com temperamento, entusiasmo ou pressão familiar — sensações que nada garantem.',
        },
        {
          escola: 'Ênfase no chamado externo',
          sintese:
            'Quem confirma é a igreja, avaliando dons, caráter e fruto conforme os requisitos objetivos de 1Timóteo 3 e Tito 1 — que, note-se, tratam quase inteiramente de caráter e de vida doméstica, e não de eloquência ou carisma. A força é submeter a autopercepção a um juízo externo; o risco é reduzir a vocação a processo burocrático de habilitação.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A posição reformada clássica exige as duas coisas e trata a segunda como decisiva no caso de conflito. A convicção interior sem reconhecimento da igreja não autoriza ninguém a exercer o ofício — é justamente aí que o governo presbiteriano protege, ao pôr a decisão num concílio em vez de na certeza do candidato ou na simpatia de uma congregação. E vale registrar o alívio contido na doutrina: se o chamado tem componente externo, então o candidato não precisa produzir sozinho uma certeza subjetiva perfeita antes de se submeter ao exame.',
    },

    {
      tipo: 'definicao',
      termo: 'Poimênica',
      texto:
        'É a disciplina que trata da vida e do preparo do pastor como condição de seu ofício, e não apenas de suas técnicas. Sustenta que o cuidado de si precede o cuidado do rebanho, porque o ministro comunica o que recebeu e não o que apenas manuseia; que os riscos do ofício são específicos dele, e não versões agravadas dos riscos comuns; e que a vocação se compõe de convicção interior e reconhecimento eclesiástico, sendo este último o que autoriza o exercício.',
    },

    {
      tipo: 'pastoral',
      texto:
        'Há uma aplicação para quem não é pastor, e ela talvez seja a mais urgente. Se a alma do ministro é a que ninguém pastoreia, então a igreja tem aqui um dever que raramente cumpre: perguntar ao pastor como ele está, e não apenas como vai o trabalho; garantir-lhe descanso de verdade e não férias interrompidas por telefonemas; remunerá-lo de modo que ele não tenha de escolher entre a integridade e as contas do mês; e, sobretudo, não exigir dele uma perfeição que a Escritura não exige de ninguém. Um pastor que precisa fingir que está bem acabará mentindo sobre coisas maiores. Para o próprio ministro, a aplicação é a inversa e mais difícil: aceitar ser pastoreado. Ter um pastor, submeter-se a alguém, contar a verdade a um irmão de confiança. Quem lida com o sagrado o dia inteiro e nunca é ministrado por outro está no lugar mais perigoso da igreja, e costuma ser o último a perceber.',
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
      nota: 'O clássico do assunto, construído inteiro sobre Atos 20.28. Domínio público, e hospedado no Archive.org — verificável pela auditoria automática, ao contrário das cópias em domínio restrito.',
    },
    {
      id: 'spurgeon-lectures',
      autor: 'Charles Haddon Spurgeon',
      ano: '1875',
      titulo: 'Lectures to My Students',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/lecturestomystud1877spur',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Aulas dadas no Pastors’ College, com franqueza rara sobre vaidade do púlpito, desânimo e o "cão negro" da depressão ministerial. Domínio público.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, cap. 3',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'IV.3 trata dos ministros, de sua vocação e da distinção entre o chamado secreto diante de Deus e o chamado externo pela igreja — a base da seção sobre vocação deste verbete. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XIII, XVI e XXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A santificação do cap. XIII e as boas obras do XVI valem para o ministro como para qualquer crente — ponto que a disciplina precisa reafirmar contra a ideia de uma espiritualidade profissional à parte.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — deveres do ministro e disciplina eclesiástica',
      publicacao: 'Secretaria Executiva da IPB',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Define os deveres do ministro e o processo de licenciatura e ordenação — o lado institucional do chamado externo, distribuído gratuitamente pela denominação.',
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
      nota: 'Traduções em português de Baxter, Spurgeon e outros sobre o ministério, úteis a quem prefere ler o material na própria língua.',
    },
  ],
};
