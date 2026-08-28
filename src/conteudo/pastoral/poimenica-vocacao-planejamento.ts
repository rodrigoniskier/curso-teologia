import type { Verbete } from '../../tipos';

export const poimenicaVocacaoPlanejamento: Verbete = {
  id: 'tp02-vocacao-planejamento',
  disciplina: 'TP02',
  unidade: 10,
  titulo: 'Configurações da Vocação, Filosofia Ministerial e Planejamento',
  subtitulo: 'Tempo parcial não significa chamado parcial — e planejamento não substitui dependência de Deus',
  objetivo:
    'Ao final, você saberá distinguir pastorado de tempo integral, bivocacional, auxiliar e efetivo sem criar hierarquias espirituais artificiais; compreenderá o que uma filosofia de ministério deve conter; relacionará planejamento pessoal e eclesiástico à providência e ao governo presbiteriano; e poderá organizar prioridades e tempo de modo coerente com o ofício, a família e os limites criacionais.',
  atualizadoEm: '2026-08-28',
  verMais: ['tp01-vocacao', 'tp02-poimenica', 'tp06-planejamento-controle-tempo'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Duas igrejas podem chamar “pastor” a homens cuja semana ministerial é completamente diferente. Um recebe sustento integral e concentra todo o tempo de trabalho na igreja. Outro ensina numa escola durante o dia e serve a congregação à noite e nos fins de semana. Um terceiro é pastor auxiliar numa equipe grande. Um quarto é pastor efetivo e carrega responsabilidades de moderação, coordenação e representação. A vocação é a mesma? O ofício é o mesmo? As expectativas podem ser as mesmas?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa de poimênica trata dessas configurações antes de entrar em filosofia de ministério e uso do tempo porque a ordem é lógica. Não se administra bem uma agenda antes de saber qual responsabilidade realmente foi assumida. Boa parte da sobrecarga pastoral nasce de uma descrição de função implícita: todos esperam tudo, ninguém definiu prioridades e o próprio pastor tenta provar fidelidade atendendo a cada demanda que aparece.',
    },

    { tipo: 'secao', titulo: 'O Novo Testamento não trata sustento como medida de legitimidade', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: '1 Coríntios 9.13-14',
      texto:
        'Não sabeis vós que os que prestam serviços sagrados do próprio templo se alimentam? E quem serve ao altar do altar tira o seu sustento? Assim ordenou também o Senhor aos que pregam o evangelho que vivam do evangelho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo defende claramente o direito de quem trabalha no evangelho receber sustento. No mesmo capítulo, contudo, explica que em determinadas circunstâncias abriu mão desse direito. Em Atos 18 ele aparece trabalhando com as próprias mãos. A combinação impede duas distorções: tratar o sustento integral como luxo suspeito e tratar o trabalho fora da igreja como sinal de ministério incompleto.',
    },
    {
      tipo: 'termo',
      termo: 'Ministério bivocacional',
      texto:
        'Configuração em que o ministro ordenado exerce trabalho remunerado fora da igreja ao mesmo tempo em que cumpre responsabilidades pastorais. A expressão é útil, embora “duas vocações” possa sugerir uma divisão que a doutrina reformada da vocação não exige: trabalho secular lícito e ministério são ambos lugares de serviço a Deus, ainda que o ofício pastoral possua qualificações e responsabilidades próprias.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O principal risco do pastor bivocacional não é espiritual, mas estrutural: expectativas de tempo integral com disponibilidade de tempo parcial. Se a igreja escolhe esse arranjo, precisa ajustar escopo, distribuição de responsabilidades e urgências. O principal risco do pastor sustentado integralmente é o inverso: imaginar que, por ser pago pela igreja, todo minuto da vida se tornou propriedade institucional. Sustento compra disponibilidade de trabalho; não compra a pessoa, o casamento, o descanso nem a consciência do ministro.',
    },

    { tipo: 'secao', titulo: 'Pastor auxiliar e pastor efetivo não são graus de ministério', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Em contexto presbiteriano, funções diferentes podem ser atribuídas a ministros igualmente ordenados. O pastor efetivo assume relação formal específica com a igreja e responsabilidades definidas constitucionalmente; o auxiliar serve sob arranjo distinto. Isso não cria dois níveis ontológicos de pastor. A diferença é de função, vínculo e responsabilidade, não de dignidade espiritual.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na prática, equipes ministeriais adoecem quando a estrutura formal diz uma coisa e a cultura diz outra. Um auxiliar pode receber responsabilidade sem autoridade correspondente; um efetivo pode interpretar coordenação como domínio; áreas podem competir por acesso ao “pastor principal”; decisões podem ser centralizadas informalmente mesmo quando deveriam passar pelo conselho. A descrição de função precisa ser suficientemente clara para que ninguém dependa de ler a personalidade do líder para saber onde termina sua responsabilidade.',
    },
    {
      tipo: 'lista',
      itens: [
        'Defina por escrito responsabilidades ordinárias de cada ministro e quais matérias permanecem necessariamente colegiadas.',
        'Separe coordenação de supremacia: alguém pode organizar trabalho comum sem se tornar fonte final de autoridade.',
        'Estabeleça como conflitos entre ministros serão tratados antes que surjam, de preferência com participação do conselho.',
        'Evite linguagem empresarial importada sem tradução eclesiológica. “CEO”, “executivo principal” e “dono da visão” carregam pressupostos que não combinam automaticamente com governo presbiteriano.',
        'Avalie equipes não apenas pelo volume produzido, mas pela clareza de responsabilidades, confiança, formação de outros e saúde familiar dos envolvidos.',
      ],
    },

    { tipo: 'secao', titulo: 'Filosofia de ministério é um conjunto de convicções operacionais', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        '“Filosofia de ministério” pode soar como slogan de planejamento estratégico, mas a ideia é simples: toda igreja já possui respostas, explícitas ou não, para perguntas como “o que o culto deve fazer?”, “o que é um membro maduro?”, “qual é o papel do pastor?”, “como evangelizamos?”, “como decidimos prioridades?”, “o que nunca sacrificaremos para crescer?”. Se essas respostas não são formuladas, ainda governam a prática — apenas ficam invisíveis.',
    },
    {
      tipo: 'definicao',
      termo: 'Filosofia de ministério',
      texto:
        'Conjunto explícito de convicções bíblico-teológicas que traduz a identidade eclesiológica de uma igreja em prioridades práticas de culto, ensino, cuidado, missão, liderança e uso de recursos. Não substitui confissão de fé, constituição ou decisões conciliares; organiza como essas convicções serão aplicadas no contexto concreto da igreja.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma boa filosofia de ministério precisa ser curta o bastante para orientar e densa o bastante para excluir alternativas. “Queremos glorificar a Deus” é verdadeiro, mas não decide nada sozinho. “A centralidade será a Palavra pregada e ensinada, os sacramentos, oração, comunhão, disciplina e missão, com liderança colegiada e formação de membros para servir” começa a produzir consequências. A filosofia precisa dizer não a algumas coisas para dizer sim de modo real a outras.',
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto planejamento cabe numa igreja que crê na providência?',
      posicoes: [
        {
          escola: 'Espontaneidade espiritual',
          sintese:
            'Teme que planejamento engesse a ação de Deus e privilegia resposta flexível às oportunidades. Sua força é lembrar que a igreja não controla fruto nem futuro. Seu risco é chamar de dependência aquilo que às vezes é ausência de preparo, orçamento, sucessão e avaliação.',
        },
        {
          escola: 'Gestão estratégica forte',
          sintese:
            'Usa metas, indicadores, calendários e processos detalhados para alinhar recursos. Sua força é clareza e prestação de contas. Seu risco é importar para a igreja uma lógica em que tudo precisa ser mensurável e o sucesso se torna equivalente ao que o painel consegue contar.',
        },
        {
          escola: 'Planejamento prudente sob providência',
          sintese:
            'Planeja seriamente meios, recursos e responsabilidades, mas distingue fidelidade de resultados soberanamente produzidos por Deus. É a posição deste verbete. Metas servem à mordomia; não funcionam como promessa de fruto nem como critério suficiente de saúde espiritual.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'A agenda revela a teologia prática do pastor', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Quase todo pastor diz que oração, estudo, família, visitação e formação de líderes são prioridades. A agenda mostra a ordem real. O urgente possui uma vantagem estrutural: aparece sozinho. O importante que não é urgente precisa ser marcado deliberadamente ou será consumido por reuniões, mensagens e pequenas decisões que poderiam ser resolvidas por outras pessoas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso não significa transformar ministério em planilha inflexível. Pastoreio contém interrupções legítimas. Significa reservar blocos para o que não pode depender de sobras: preparação da Palavra, oração, família, descanso, desenvolvimento de pessoas e administração essencial. O calendário é servo da vocação quando protege aquilo que a pressão imediata sempre tentará retirar.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Comece pelo que só você deve fazer.** Deveres próprios do ofício e compromissos familiares entram antes das tarefas delegáveis.',
        '**Crie blocos de trabalho profundo.** Estudo e preparação de sermão perdem qualidade quando fragmentados por notificações contínuas.',
        '**Agrupe tarefas semelhantes.** Reuniões, respostas administrativas e pequenas decisões consomem menos energia quando não interrompem toda a semana.',
        '**Defina canais de urgência.** Se tudo chega pela mesma mensagem, tudo parece igualmente urgente.',
        '**Revise a semana.** Compare o que ocupou tempo com as prioridades declaradas; a distância entre os dois é dado pastoral, não apenas problema de produtividade.',
        '**Planeje margem.** Agenda preenchida a cem por cento torna qualquer crise verdadeira destrutiva para o restante da semana.',
      ],
    },

    { tipo: 'secao', titulo: 'Planejamento pessoal e planejamento da igreja não são a mesma coisa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O pastor pode organizar sua própria semana; não pode unilateralmente organizar a igreja como se fosse extensão da agenda pessoal. Objetivos e prioridades eclesiásticas precisam respeitar competências do conselho, orçamento aprovado, participação de outros oficiais e processos denominacionais. Convicção pastoral pode iniciar uma proposta; não pode pular o governo da igreja para chegar diretamente à execução.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse ponto protege inclusive o pastor. Uma visão que só existe na cabeça dele produz responsabilidade sem corresponsabilidade. Quando prioridades são discutidas, registradas e assumidas pelo concílio, a igreja passa a possuir o plano. O ministro deixa de carregar sozinho tanto o crédito quanto a culpa pelos resultados.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Antes de reorganizar sua agenda, escreva em uma página qual é sua configuração real de ministério: vínculo, horas disponíveis, responsabilidades próprias, responsabilidades compartilhadas, deveres familiares e limites. Em seguida escreva cinco convicções que definem sua filosofia de ministério e compare-as com o calendário dos últimos trinta dias. Onde a agenda contradiz a filosofia, escolha o que precisa mudar — a prática ou a convicção. Para a igreja, faça o mesmo processo em concílio: prioridades explícitas, responsáveis definidos, recursos previstos e revisão periódica. Planejamento cristão não é tentativa de controlar o futuro; é tentativa de ser fiel hoje sem fingir que toda demanda possui o mesmo peso.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion (trad. Beveridge)',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Útil para vocação, providência, ofício e ordem eclesiástica, especialmente na distinção entre serviço cristão amplo e ministério ordenado.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano 2025',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte normativa para vínculos pastorais, competências dos concílios e responsabilidades ministeriais concretas na IPB.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Oferece o quadro confessional de providência, liberdade cristã, igreja e concílios necessário para tratar planejamento sem autonomia institucional.',
    },
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
      nota: 'Referência clássica para prioridades pastorais, responsabilidade pelo rebanho e organização do trabalho ministerial em torno de cuidado real, não apenas atividade.',
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
      nota: 'Trata do trabalho cotidiano do ministro, preparação, disciplina pessoal e perigos práticos de uma vida ministerial mal organizada.',
    },
  ],
};