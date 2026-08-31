import type { Verbete } from '../../tipos';

export const filosofiaEpistemologia: Verbete = {
  id: 'cg08-epistemologia-conhecimento-fe-razao',
  disciplina: 'CG08',
  unidade: 8,
  titulo: 'Epistemologia: Conhecimento, Justificação, Fé e Razão',
  subtitulo:
    'Antes de perguntar se uma crença é cristã, é preciso entender o que significa dizer que alguém sabe alguma coisa',
  objetivo:
    'Ao final, você saberá distinguir crença verdadeira de conhecimento, compreender o problema da justificação e as principais fontes do conhecimento, situar ceticismo, racionalismo, empirismo e a resposta crítica de Kant, explicar por que testemunho é uma fonte epistêmica indispensável e relacionar fé, razão e conhecimento de Deus sem cair em racionalismo autônomo nem em fideísmo.',
  atualizadoEm: '2026-08-30',
  verMais: ['cg08-filosofia', 'ts01-revelacao', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma pessoa olha pela janela e diz: “está chovendo”. Outra sonhou à noite que choveria e repete a mesma frase. As duas podem ter uma crença verdadeira, mas não parecem **saber** do mesmo modo. A diferença mostra por que verdade, sozinha, não basta para caracterizar conhecimento. Epistemologia começa quando perguntamos não apenas “isso é verdade?”, mas também **“como você sabe?”**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa pergunta é inevitável para a teologia. “Deus existe”, “Cristo ressuscitou” e “a Escritura é Palavra de Deus” são afirmações que pretendem ser verdadeiras. Se o cristão diz que as conhece, precisa explicar que tipo de acesso, evidência, testemunho ou garantia está envolvido — e por que fé não significa escolher uma conclusão sem razões.',
    },

    { tipo: 'secao', titulo: '1. Conhecimento não é apenas ter uma opinião correta' },
    {
      tipo: 'paragrafo',
      texto:
        'Durante séculos, uma fórmula didática descreveu conhecimento proposicional como **crença verdadeira justificada**: para saber que p, a pessoa deve crer que p, p deve ser verdadeiro e deve haver alguma razão ou garantia adequada para a crença. A fórmula é útil porque separa três perguntas: o sujeito aceita a proposição? a proposição corresponde à realidade? a pessoa chegou a ela de maneira epistemicamente apropriada?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No século XX, os chamados casos de Gettier mostraram que uma crença pode ser verdadeira e aparentemente justificada por sorte. Imagine alguém que olha para um relógio parado sem saber que ele parou exatamente doze horas antes; por coincidência, o mostrador indica a hora correta naquele instante. A pessoa tem crença verdadeira e uma razão aparentemente boa, mas hesitamos em dizer que ela sabe. O problema revelou que **justificação precisa excluir algum tipo de sorte epistêmica**.',
    },
    {
      tipo: 'definicao',
      termo: 'Epistemologia',
      texto:
        'Ramo da filosofia que investiga a natureza, as fontes, os limites e a justificação do conhecimento e da crença racional. Pergunta o que é saber, quando uma crença é racional, como lidamos com erro e ceticismo e quais processos ou razões tornam uma crença epistemicamente adequada.',
    },

    { tipo: 'secao', titulo: '2. Fontes do conhecimento: ninguém conhece o mundo por um único canal' },
    {
      tipo: 'lista',
      itens: [
        '**Percepção:** visão, audição e demais sentidos nos colocam em contato com o mundo, embora possam falhar e precisem de condições adequadas.',
        '**Memória:** preserva informação adquirida anteriormente. Sem memória, não haveria aprendizagem acumulativa nem identidade narrativa.',
        '**Razão e inferência:** permitem extrair consequências de crenças já possuídas, identificar contradições e reconhecer relações lógicas.',
        '**Introspecção:** oferece algum acesso a estados mentais próprios — dor, intenção, dúvida, desejo — ainda que autoconhecimento também possa ser falível.',
        '**Testemunho:** grande parte do que sabemos depende do que outras pessoas e instituições nos dizem: história, geografia, medicina, ciência e até nosso próprio nascimento.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O testemunho é especialmente importante para desmontar um mito moderno: a ideia de que conhecimento autêntico é apenas aquilo que cada indivíduo verificou pessoalmente. Nenhum estudante repetiu todos os experimentos que sustentam a química, conferiu todos os manuscritos do Novo Testamento ou testemunhou os eventos históricos que aceita. A questão racional não é **se** dependeremos de testemunho, mas quando uma testemunha é confiável e como testemunhos independentes, documentos e outras evidências se relacionam.',
    },

    { tipo: 'secao', titulo: '3. Racionalismo e empirismo: de onde vêm as ideias que estruturam o conhecimento?' },
    {
      tipo: 'paragrafo',
      texto:
        'Na filosofia moderna, uma das grandes disputas opôs tendências racionalistas e empiristas. O racionalista enfatiza o papel da razão, de princípios não derivados simplesmente da sensação e, em alguns autores, de ideias ou estruturas inatas. O empirista enfatiza a experiência sensorial e desconfia de conceitos que não possam mostrar sua ligação com a experiência.',
    },
    {
      tipo: 'controversia',
      titulo: 'A razão ou a experiência tem prioridade?',
      posicoes: [
        {
          escola: 'Racionalismo moderno',
          sintese:
            'Autores como Descartes e Leibniz procuram fundamentos que a experiência mutável não forneceria sozinha. Matemática e necessidade lógica funcionam como modelos de conhecimento. O risco é atribuir à razão uma autonomia ou alcance que ultrapasse aquilo que pode justificar.',
        },
        {
          escola: 'Empirismo moderno',
          sintese:
            'Autores como Locke e Hume enfatizam experiência e observação. O programa disciplina especulações e aproxima filosofia e ciência empírica, mas enfrenta dificuldades para explicar necessidade, causalidade, identidade e princípios que parecem ir além de uma coleção de impressões.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A oposição nunca foi absoluta: racionalistas observam o mundo e empiristas argumentam. O desacordo envolve o **fundamento e o alcance** do conhecimento, não a presença exclusiva de uma única faculdade mental.',
    },

    { tipo: 'secao', titulo: '4. Hume e o problema da indução: por que o futuro deveria parecer com o passado?' },
    {
      tipo: 'paragrafo',
      texto:
        'Boa parte da vida e da ciência depende de indução. Observamos que certos tipos de evento ocorreram repetidamente e esperamos regularidade futura. Hume percebeu a dificuldade de justificar essa passagem sem circularidade: não podemos provar que a natureza continuará regular apenas dizendo que **até hoje** ela foi regular, porque isso usa a própria indução que está em questão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O problema não destruiu a ciência, mas mostrou que a racionalidade científica envolve mais do que dedução formal a partir de dados brutos. Expectativas sobre causalidade, uniformidade, melhores explicações e confiabilidade dos processos cognitivos fazem parte do quadro. É precisamente nesse nível que filosofia da ciência e epistemologia se encontram.',
    },

    { tipo: 'secao', titulo: '5. Kant: conhecimento começa com experiência, mas não deriva todo dela' },
    {
      tipo: 'paragrafo',
      texto:
        'Kant tenta superar a disputa simples entre racionalismo e empirismo. Seu ponto de partida é que todo conhecimento humano **começa** com experiência, mas disso não segue que todo conhecimento **provenha** apenas da experiência. A mente não seria uma superfície passiva recebendo fatos já totalmente organizados; a experiência inteligível depende de estruturas mediante as quais objetos podem aparecer para nós.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso muda a pergunta epistemológica. Em vez de perguntar apenas como a mente alcança um objeto totalmente independente de suas condições de conhecimento, Kant pergunta quais condições tornam possível haver experiência de objetos. A solução cobra um preço: aquilo que conhecemos teoricamente é o mundo enquanto objeto possível da experiência humana, não uma visão divina das coisas independentemente de toda condição cognitiva.',
    },

    { tipo: 'secao', titulo: '6. Ceticismo: uma dúvida útil pode virar uma exigência impossível' },
    {
      tipo: 'paragrafo',
      texto:
        'O cético força uma pergunta saudável: como excluímos erro? Talvez estejamos sonhando; talvez nossos sentidos falhem; talvez uma cadeia de testemunho esteja corrompida. Um pouco de ceticismo é disciplina contra credulidade. O problema aparece quando conhecimento é definido como certeza que elimina **toda possibilidade logicamente concebível de erro**. Sob esse padrão, quase nada do que ordinariamente chamamos conhecimento sobreviveria.',
    },
    {
      tipo: 'lista',
      itens: [
        'Falibilidade não é o mesmo que irracionalidade: uma crença pode ser racionalmente garantida sem ser impossível de revisar.',
        'Dúvida precisa de motivo proporcional. A simples capacidade de imaginar uma alternativa não concede à alternativa a mesma probabilidade que a explicação bem sustentada.',
        'Métodos de correção importam: percepção pode falhar, mas outras percepções, instrumentos, testemunhos e testes independentes podem revelar o erro.',
      ],
    },

    { tipo: 'secao', titulo: '7. Fé e razão: três erros que parecem opostos, mas partem do mesmo equívoco' },
    {
      tipo: 'paragrafo',
      texto:
        'Quando fé e razão são tratadas como duas fontes que competem pelo mesmo espaço, três erros aparecem. O **racionalismo autônomo** aceita apenas aquilo que um tribunal independente da revelação conseguir validar. O **fideísmo** reage dizendo que fé não precisa prestar contas a nenhuma razão. E o **irracionalismo religioso** transforma convicção subjetiva intensa em critério de verdade. Os três pressupõem que fé bíblica seja um salto cognitivo que precisa ser domesticado ou protegido da razão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na perspectiva reformada, a razão é criatura e dom de Deus, não inimiga da fé. Ela lê, compara, infere, traduz, distingue e argumenta. Mas não é autônoma: opera num mundo criado, por pessoas finitas e moralmente afetadas pelo pecado. A revelação não pede que a razão deixe de funcionar; fornece verdades e um quadro último dentro do qual a razão deve funcionar corretamente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso também impede o uso preguiçoso de “pressupostos” como fuga da evidência. Dizer que ninguém é neutro não significa que documentos históricos, coerência, observação e argumentos sejam irrelevantes. Significa que as evidências são sempre interpretadas dentro de compromissos sobre realidade, autoridade e possibilidade. A tarefa é trazer esses compromissos à luz, não abandonar o exame das evidências.',
    },

    { tipo: 'secao', titulo: '8. O conhecimento de Deus: natural, revelado e salvador não são sinônimos' },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada distingue formas e alcances do conhecimento de Deus. Criação e providência tornam Deus conhecido de modo real e deixam o ser humano sem desculpa; a Escritura comunica de modo verbal e pactual aquilo que Deus quis revelar para fé e obediência; e o conhecimento salvador envolve obra do Espírito, união com Cristo e resposta de fé. Essas dimensões não devem ser reduzidas umas às outras.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Conhecimento natural de Deus:** decorre da criação, providência e constituição da criatura racional. É verdadeiro, mas não oferece por si o evangelho salvador.',
        '**Conhecimento revelacional especial:** depende da Palavra de Deus e torna conhecido o caminho da redenção e a vontade divina de modo que a natureza, sozinha, não comunica.',
        '**Conhecimento salvador:** não é mero acúmulo de proposições corretas. Inclui receber pela fé o Cristo anunciado na Palavra, sem deixar de possuir conteúdo proposicional verdadeiro.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Calvino descreve simultaneamente uma consciência de Deus e uma fábrica de ídolos no coração humano. A combinação é epistemologicamente importante: o problema do pecado não é simplesmente falta de dados. O ser humano pode possuir evidência, conceitos e até conclusões verdadeiras e ainda reorganizá-los para evitar as implicações morais do Deus que conhece. Isso explica por que apologética reformada fala de conhecimento e supressão ao mesmo tempo.',
    },

    { tipo: 'secao', titulo: '9. Como avaliar uma afirmação de conhecimento no ministério' },
    {
      tipo: 'lista',
      itens: [
        '**Qual é a proposição?** Antes de discutir, formule com precisão o que está sendo afirmado.',
        '**Que tipo de fonte sustenta a crença?** percepção, memória, inferência, testemunho, documento, revelação?',
        '**A fonte é adequada ao tipo de afirmação?** Experimento não prova sozinho um evento histórico; tradição oral não mede concentração química.',
        '**Existem derrotadores?** Há informação relevante que enfraqueça a razão inicial para crer?',
        '**O grau de confiança corresponde à força da evidência?** Nem toda conclusão precisa ser anunciada com a mesma certeza.',
        '**Há pressupostos escondidos?** Que visão de realidade e de autoridade torna o argumento plausível?',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Epistemologia é pastoral porque pessoas feridas por boatos, teorias conspiratórias, falsos profetas e certezas fabricadas precisam aprender a perguntar “como sabemos?”. A igreja não honra a verdade quando troca investigação por credulidade. Também não honra a verdade quando exige do crente uma certeza impossível antes de permitir confiança. Maturidade epistêmica une convicção, humildade, disposição para corrigir erro e fidelidade às fontes que realmente têm autoridade para a pergunta em questão.',
    },
  ],
  fontes: [
    {
      id: 'sep-epistemology',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '2024',
      titulo: 'Epistemology',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/epistemology/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Base acadêmica para natureza do conhecimento, justificação, fontes epistêmicas e ceticismo.',
    },
    {
      id: 'sep-faith',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Faith',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/faith/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Referência aberta para os modelos filosóficos de fé e sua relação com evidência, razão e conhecimento.',
    },
    {
      id: 'sep-kant',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Immanuel Kant',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/kant/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Base para o projeto crítico e a síntese kantiana entre experiência e estruturas do conhecimento.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 1–6; Livro II, cap. 2',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte reformada primária sobre conhecimento de Deus, senso religioso e efeitos do pecado sobre a razão.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — capítulos I e XXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Referência confessional para luz da natureza, revelação especial, autoridade da Escritura e conhecimento de Deus.',
    },
  ],
};
