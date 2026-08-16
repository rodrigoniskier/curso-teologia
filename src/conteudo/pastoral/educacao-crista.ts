import type { Verbete } from '../../tipos';

export const educacaoCrista: Verbete = {
  id: 'tp10-educacao-crista',
  disciplina: 'TP10',
  unidade: 3,
  titulo: 'Educação Cristã',
  subtitulo: 'Por que uma igreja pode ensinar durante trinta anos e formar gente que não sabe o que crê',
  objetivo:
    'Ao final, você entenderá a diferença entre atividade e catequese e por que a primeira não produz a segunda, saberá onde a Escritura localiza a responsabilidade primária pelo ensino e o que isso cobra da igreja, conhecerá a razão histórica pela qual a Reforma investiu em catecismos, e terá elementos para decidir a disputa pedagógica entre memorização, compreensão e formação por hábito.',
  atualizadoEm: '2026-08-16',
  verMais: ['tp01-vocacao', 'ts11-subscricao-confessional', 'tp14-homiletica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Faça uma experiência numa classe de adultos da sua igreja. Pergunte qual é o fim principal do homem — a primeira pergunta do Breve Catecismo, aquela que a tradição reformada considera o resumo de tudo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na maioria das congregações haverá silêncio, e depois improviso. E os presentes não são desatentos: muitos frequentam a igreja há décadas, passaram anos na escola dominical, ouviram milhares de sermões. O problema não é falta de exposição.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale enunciar o diagnóstico sem rodeio, porque ele é incômodo: a igreja não deixou de ensinar. Ela substituiu **conteúdo transmitido e retido** por **atividade**. Há aula, há material colorido, há acampamento, há dinâmica — e ao fim de vinte anos o aluno não consegue dizer o que a sua igreja crê sobre a ceia, sobre a lei ou sobre a perseverança.',
    },
    {
      tipo: 'secao',
      titulo: 'Onde a Escritura põe a responsabilidade',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Antes de discutir método, é preciso ver a quem a tarefa foi dada, e a resposta bíblica é desconfortável para o modelo que a maioria das igrejas adotou.',
    },
    {
      tipo: 'passagem',
      referencia: 'Deuteronômio 6.6-7',
      texto:
        'Estas palavras que hoje te ordeno estarão no teu coração; tu as inculcarás a teus filhos, e delas falarás assentado em tua casa, e andando pelo caminho, e ao deitar-te, e ao levantar-te.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare em três coisas. A primeira é o destinatário: a ordem é dada aos pais, não a uma instituição de ensino. A segunda é o lugar: a casa, o caminho, a hora de deitar — isto é, o dia comum, não um horário reservado. A terceira é a sequência: as palavras devem estar **primeiro** no coração de quem ensina. Não se transmite o que não se tem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A consequência prática é que a escola dominical não é o lugar onde a educação cristã acontece: é o lugar onde a igreja **ajuda a família** a fazer o que lhe cabe, e supre onde não há família que o faça. Igrejas que invertem essa ordem — assumindo a tarefa inteira e deixando os pais na plateia — costumam produzir dois resultados ao mesmo tempo: pais que se sentem dispensados e filhos que associam a fé a uma atividade infantil que se abandona ao crescer.',
    },
    {
      tipo: 'secao',
      titulo: 'Por que a Reforma escreveu catecismos',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1528, Lutero participou de visitas às paróquias da Saxônia para verificar como andavam. O que encontrou o assustou, e ele disse por escrito: o povo comum não sabia o Pai-Nosso, nem o Credo, nem os Dez Mandamentos, e muitos párocos não estavam em melhor situação. O ano seguinte é o da publicação do Catecismo Menor, e o prefácio deixa claro que se trata de resposta a um diagnóstico, não de exercício acadêmico.',
    },
    {
      tipo: 'citacao',
      texto:
        'A deplorável situação que encontrei ao visitar as paróquias obrigou-me a preparar este catecismo, ou instrução cristã, nesta forma breve e simples. Que miséria contemplei! O povo comum, sobretudo nas aldeias, nada sabe da doutrina cristã.',
      autor: 'Martinho Lutero',
      obra: 'prefácio ao Catecismo Menor, 1529',
      fonteId: 'lutero-catecismo',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O que veio depois foi uma indústria: o Catecismo de Genebra, o de Heidelberg, o Breve e o Maior de Westminster. E há uma ligação que costuma passar despercebida entre esse esforço e o princípio formal da Reforma. Justamente porque se afirmava que o leigo deve ler a Escritura por si mesmo, tornava-se urgente ensiná-lo a lê-la bem — um povo entregue ao texto sem instrução não fica livre, fica à mercê do primeiro que apareça com uma leitura confiante.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O formato escolhido também não foi acidente. Pergunta e resposta é a estrutura de uma conversa, feita para ser usada por um pai com um filho, não por um professor com uma turma. E é curta o bastante para caber na memória de quem não tem biblioteca — que era, e continua sendo, a maioria.',
    },
    {
      tipo: 'definicao',
      termo: 'Catequese',
      texto:
        'Instrução sistemática e progressiva nas verdades fundamentais da fé, organizada de modo que o aprendiz retenha o conteúdo e possa recorrer a ele depois. Distingue-se da pregação, que é proclamação dirigida à assembleia reunida, e da atividade educativa em geral, que pode ocupar o tempo sem transmitir nada retido. Não é sinônimo de infantil: aplica-se a qualquer pessoa que ainda não possui o conteúdo, tenha ela seis ou sessenta anos.',
    },
    {
      tipo: 'secao',
      titulo: 'O que o modelo reformado supõe sobre quem aprende',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Toda pedagogia carrega uma antropologia, e é aí que a educação cristã se separa das teorias que a cercam. Se a criança é boa por natureza, educar é remover obstáculos e deixar florescer. Se é folha em branco, educar é imprimir. Nenhuma das duas é a suposição reformada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição sustenta duas coisas ao mesmo tempo, e o equilíbrio entre elas é o que dá forma ao trabalho. O filho de crentes está sob a aliança e por isso deve ser criado como quem pertence, ensinado a orar, levado ao culto, tratado como parte do povo de Deus — e não como um pagão em observação. E, ao mesmo tempo, ele nasce com a natureza que todos herdamos, de modo que instrução nenhuma produz por si a mudança de coração que só o Espírito opera.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada metade sozinha produz um erro reconhecível. Só a primeira, e a igreja presume convertidos todos os que frequentam, deixando de pregar arrependimento a quem cresceu ali. Só a segunda, e trata os próprios filhos como estranhos até que apresentem uma experiência dramática, o que ensina à criança que a fé é um evento que ainda não lhe aconteceu.',
    },
    {
      tipo: 'controversia',
      titulo: 'Memorizar, compreender ou formar',
      posicoes: [
        {
          escola: 'Catequese clássica',
          sintese:
            'Primeiro se memoriza, e a compreensão vem com a vida — o aluno guarda uma resposta que ainda não entende inteiramente e a reencontra aos trinta anos, quando precisar dela. Tem a força de reconhecer que a memória é o único meio de o conteúdo estar disponível na hora da provação, quando não há livro à mão. O risco é a repetição vazia, e ele é real: catecismo decorado sem explicação produz gente que recita e não usa.',
        },
        {
          escola: 'Pedagogia da compreensão',
          sintese:
            'Memorizar sem entender é inútil e até prejudicial, porque ensina que doutrina é fórmula; o ensino deve partir da pergunta do aluno e construir o entendimento antes da formulação. Acerta ao exigir que o aluno saiba o que está dizendo. Corre o risco de nunca chegar à formulação — e quem não tem formulação não tem o que lembrar depois, ficando com impressões no lugar de conteúdo.',
        },
        {
          escola: 'Formação por hábito',
          sintese:
            'O que forma não é primariamente informação, e sim prática repetida — culto, oração em família, mesa, calendário —, porque o ser humano é moldado mais pelo que ama e faz do que pelo que sabe. Recupera algo que as duas outras posições subestimam e que a liturgia sempre soube. O risco é dispensar o conteúdo em nome da prática, e então a comunidade fica com hábitos que ninguém sabe justificar — o que dura uma geração.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A prática das igrejas reformadas históricas, quando examinada, não escolhe uma das três: memoriza o catecismo, explica cada resposta e sustenta tudo num culto semanal e numa devoção doméstica. As três posições descrevem ênfases legítimas, e o erro é tomá-las como alternativas excludentes quando elas operam em tempos diferentes do mesmo processo.',
    },
    {
      tipo: 'secao',
      titulo: 'O que fazer com quem já é adulto',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A objeção prática mais comum é que tudo isso serve para quem começa cedo, e a maior parte de uma congregação brasileira não começou. É verdade, e não muda a conclusão: a catequese não é uma etapa da infância que se perde ao passar da idade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Baxter, que catequizava família por família em Kidderminster, dedicava a maior parte do tempo a adultos — e considerava aquele trabalho, feito na casa das pessoas e um a um, mais eficaz do que sua própria pregação. O argumento dele merece ser levado a sério por quem organiza a agenda de uma igreja: no púlpito não se sabe o que cada ouvinte entendeu; sentado à mesa, pergunta-se.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma conversa que o pastor precisa ter com pais e não costuma ter, porque ela soa como cobrança. Muitos pais cristãos delegaram o ensino da fé à igreja não por descuido, mas por se julgarem despreparados — acham que ensinar exige um conhecimento que eles não têm, e preferem entregar a tarefa a quem estudou. O que eles precisam ouvir é duplo, e as duas partes importam. A primeira é que a tarefa é deles e não é transferível, e que uma criança aprende mais sobre a fé vendo o pai orar mal do que ouvindo um professor orar bem. A segunda é que a igreja não vai deixá-los sozinhos: dar a um pai inseguro um catecismo curto, mostrar como usar cinco perguntas por semana e perguntar como foi no domingo seguinte resolve o problema real, que é falta de método e não falta de amor. E convém dizer também aos que chegaram tarde: começar aos quarenta com um filho de quinze é constrangedor, e continua sendo melhor do que não começar.',
    },
    {
      tipo: 'lista',
      itens: [
        'Ao avaliar o ensino da sua igreja, não conte atividades nem presenças. Faça três perguntas de conteúdo a uma classe de adultos e observe a resposta — é o único diagnóstico que não engana.',
        'Ao escolher material, verifique se ele termina com o aluno sabendo dizer alguma coisa. Material que só produz reflexão não deixa nada disponível para a hora difícil.',
        'Ao organizar a escola dominical, pergunte o que ela está pedindo à família fazer durante a semana. Se a resposta for nada, a igreja assumiu uma tarefa que não é primariamente sua.',
        'Ao ensinar um catecismo, explique cada resposta antes de cobrá-la e volte a ela depois. A memorização sem explicação é o abuso que a crítica denuncia com razão.',
        'Ao pensar em catequese, tire da cabeça a imagem de criança. A maior parte da congregação adulta de uma igreja brasileira nunca foi catequizada, e sabe disso melhor do que o pastor imagina.',
      ],
    },
  ],
  fontes: [
    {
      id: 'lutero-catecismo',
      autor: 'Martinho Lutero',
      ano: '1529',
      titulo: 'The Small Catechism of Dr. Martin Luther',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/smallcatechismof00luth',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O catecismo que inaugurou o gênero na Reforma, com o prefácio em que Lutero relata a visita às paróquias da Saxônia e explica que escreveu aquilo por necessidade. Vale ler o prefácio antes do conteúdo: é o documento de fundação da educação cristã protestante. Domínio público.',
    },
    {
      id: 'breve-catecismo',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'O Breve Catecismo de Westminster',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Arquivos/Breve_Catecismo_de_Westminster.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'As 107 perguntas e respostas em português, publicadas pela própria denominação. É o material de catequese pronto e gratuito de que este verbete fala — inclusive a primeira pergunta usada na abertura.',
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
      nota: 'A defesa da catequese pessoal, família por família, feita por quem a praticou em Kidderminster e a considerava mais eficaz que a própria pregação. É a fonte da seção sobre adultos. Domínio público.',
    },
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
      nota: 'O próprio prefácio das Institutas descreve a obra como instrução preparatória para o estudo da Escritura — isto é, a obra maior de Calvino nasce como projeto pedagógico. Hospedado na CCEL, que recusa IPs de nuvem: a auditoria automática não confirma daqui, mas o endereço abre normalmente no navegador.',
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
      nota: 'O capítulo XXV, sobre a igreja, e o XXI, sobre o culto e o dia do Senhor, sustentam a articulação entre ensino público e devoção doméstica discutida aqui.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano com notas remissivas',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Traz as atribuições dos concílios quanto ao ensino e à admissão de novos membros, que é onde a educação cristã deixa de ser iniciativa voluntária e vira responsabilidade de ofício.',
    },
  ],
};
