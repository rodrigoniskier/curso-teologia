import type { Verbete } from '../../tipos';

export const ritosProvasJulgamento: Verbete = {
  id: 'tp13-ritos-provas-julgamento',
  disciplina: 'TP13',
  unidade: 3,
  titulo: 'Ritos, Provas e Julgamento no Processo Eclesiástico',
  subtitulo:
    '“Sumaríssimo” significa simples e célere; não significa acusação sem autos, defesa sem tempo ou julgamento sem prova',
  objetivo:
    'Ao final, você distinguirá os ritos sumaríssimo, sumário e ordinário do Código de Disciplina da IPB, saberá quando cada um se aplica, compreenderá a produção e avaliação das provas, os atos de secretaria, as diligências e alegações finais, e reconhecerá os elementos indispensáveis de uma sentença ou acórdão e os fundamentos de absolvição.',
  atualizadoEm: '2026-08-30',
  verMais: ['tp13-processo-instauração-garantias', 'tp13-recursos-execucao-restauracao', 'tp12-concilios-comissoes-atas'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um conselho recebe uma denúncia simples, o acusado comparece e admite parte substancial do fato. Alguém lembra que existe “processo sumaríssimo” e conclui que basta ouvir, votar e registrar a pena. A palavra parece autorizar o atalho. **O Código faz o oposto: cria um rito mais simples sem abolir o processo.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa distinção é decisiva. Celeridade é uma qualidade do procedimento quando o caso permite simplificação; pressa é uma decisão emocional de reduzir etapas sem base normativa. O primeiro preserva justiça e evita formalidades desnecessárias. O segundo produz nulidades, recursos e, pior, a convicção de que o resultado estava decidido antes de a defesa começar.',
    },
    { tipo: 'secao', titulo: '1. Antes do rito, a pergunta que realmente importa' },
    {
      tipo: 'paragrafo',
      texto:
        'O rito não deve ser escolhido pela ansiedade do tribunal nem pela fama do acusado, mas pelas características processuais da causa. Há contestação? Há necessidade de prova testemunhal? O acusado confessou? Trata-se de ministro, concílio ou tribunal? A verdade depende de instrução mais ampla? O Código organiza os ritos a partir dessas diferenças.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma mesma falta moral pode, portanto, percorrer ritos diferentes em situações distintas. A gravidade do pecado influencia a resposta disciplinar, mas não substitui o critério processual. Essa separação impede um erro comum: usar o rito mais rápido justamente nos casos mais sensíveis, quando a quantidade de fatos disputados exigiria maior instrução.',
    },
    { tipo: 'secao', titulo: '2. Processo sumaríssimo: simplicidade com garantias' },
    {
      tipo: 'paragrafo',
      texto:
        'O processo sumaríssimo é próprio do âmbito do Conselho. O Manual de 2025 incorpora interpretação oficial segundo a qual ele não começa simplesmente com a presença do acusado numa reunião: continua sendo necessária a provocação formal por queixa ou denúncia e o Conselho continua funcionando como tribunal eclesiástico. A simplificação está nos atos e na velocidade, não na eliminação da causa formal do processo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No rito, o acusado comparece, presta declarações, pode ser interrogado pelos membros do Conselho, exerce defesa e pode pedir investigações sobre fatos ainda obscuros. Encerradas as investigações e não havendo novas alegações, o Conselho julga. Os passos e declarações relevantes são registrados e a decisão pode ser apelada ao plenário do Presbitério.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A leitura correta de “sumaríssimo” é, portanto: **menos formalidade onde a matéria permite, nunca menos contraditório onde a justiça exige**. A própria orientação denominacional associa esse rito a simplicidade, informalidade e celeridade, preservados o devido processo, o contraditório e a ampla defesa.',
    },
    { tipo: 'secao', titulo: '3. Processo sumário: quando a controvérsia encolhe' },
    {
      tipo: 'paragrafo',
      texto:
        'O processo sumário aparece em hipóteses em que a instrução pode ser reduzida: por exemplo, quando o acusado comparece e confessa, recusa-se a se defender, deixa de comparecer depois de citado em causa que não dependa de prova testemunhal, oculta-se depois das providências legais ou, sem justo motivo, recusa-se a prestar depoimento. O ponto comum é que uma parte importante da controvérsia factual foi removida ou não depende da mesma instrução do rito ordinário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Na audiência sumária, o relator apresenta seu parecer; acusação e defesa, quando presentes, falam por tempo delimitado; o relator vota e os demais juízes votam em sequência. A decisão é escrita. O rito é compacto, mas ainda possui relatoria, oportunidade das partes e decisão formal. Confissão não transforma o tribunal em mero homologador automático de pena.',
    },
    { tipo: 'secao', titulo: '4. Processo ordinário: quando a verdade precisa de instrução' },
    {
      tipo: 'paragrafo',
      texto:
        'O rito ordinário é exigido quando há contestação, quando o próprio tribunal entende indispensável aprofundar a verdade ou quando são acusados concílio, tribunal ou ministro. Para ministro que confessa a falta, o Código admite rito sumário; fora dessa hipótese específica, o ordinário protege a complexidade institucional e a gravidade própria do julgamento de ofício ministerial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Aqui a instrução aparece com mais nitidez. O acusado é interrogado, testemunhas de acusação e defesa são ouvidas e as partes recebem oportunidade sucessiva de requerer diligências. Cumpridas as diligências, acusação e defesa apresentam alegações finais; depois os autos vão ao relator e o tribunal é convocado para julgamento. **O rito ordinário não é lento por defeito: ele reserva tempo porque a decisão depende de uma verdade que precisa ser construída documentalmente.**',
    },
    {
      tipo: 'termo',
      termo: 'Diligência processual',
      texto:
        'Ato destinado a completar a instrução: obter documento, realizar verificação, ouvir pessoa, esclarecer contradição ou produzir outro elemento necessário para que o tribunal decida com base em fatos suficientemente apurados. Diligência não serve para procurar indefinidamente algo que confirme uma conclusão pronta; precisa ter relação identificável com questão relevante do processo.',
    },
    { tipo: 'secao', titulo: '5. Prova: o que o tribunal sabe e como sabe' },
    {
      tipo: 'paragrafo',
      texto:
        'Todo julgamento disciplinar contém duas perguntas diferentes: **o que aconteceu?** e **o que o fato provado significa segundo a lei da igreja?** A primeira é probatória; a segunda é normativa. Misturá-las é perigoso. Um comportamento pode parecer moralmente suspeito e ainda não estar provado. Um fato pode estar provado e, ainda assim, não constituir a falta descrita pela acusação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Código não autoriza condenação por reputação, probabilidade social ou “todo mundo conhece o jeito dele”. Documentos, confissão, testemunhos e demais elementos precisam estar nos autos e ser acessíveis ao contraditório. A regra de absolvição é pedagogicamente forte: o tribunal absolve quando está provado que o fato não existiu, quando falta prova de que existiu, quando o fato não constitui falta, quando não há prova da participação do acusado ou quando existe circunstância que exclui sua responsabilidade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa lista impede um raciocínio muito comum: “não conseguimos provar que ele é inocente”. O processo não exige que o acusado demonstre uma inocência abstrata. O tribunal precisa alcançar base probatória suficiente para afirmar o fato, a participação e sua relevância disciplinar. Quando a prova não sustenta uma dessas etapas, a incerteza não pode ser convertida em pena apenas porque a acusação parecia plausível no começo.',
    },
    { tipo: 'secao', titulo: '6. Testemunhos, documentos e material digital' },
    {
      tipo: 'paragrafo',
      texto:
        'Testemunha serve para narrar fatos que conhece, não para fornecer ao tribunal um diagnóstico do caráter do acusado. Por isso as perguntas devem separar observação de interpretação: “o que você viu?” é diferente de “ele sempre foi manipulador?”. A primeira pode produzir prova sobre um fato; a segunda normalmente oferece impressão, reputação ou conclusão que o próprio tribunal precisa avaliar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Documentos digitais também precisam ser contextualizados. Captura de tela pode esconder a mensagem anterior; áudio pode estar editado; encaminhamento não demonstra autoria; data de arquivo não prova necessariamente data do fato. O Manual incorpora decisões específicas sobre uso de certos áudios e atas notariais, mas o princípio formativo é mais amplo: **meio tecnológico não elimina as perguntas de autenticidade, integridade, autorização, pertinência e contraditório.**',
    },
    { tipo: 'secao', titulo: '7. Secretaria e autos: onde a justiça se torna verificável' },
    {
      tipo: 'paragrafo',
      texto:
        'O secretário cumpre papel processual, não apenas administrativo. Ele zela pelos autos, cumpre determinações, atende às partes, certifica atos, faz citações e intimações e registra o que ocorreu. A cadeia documental permite que outro tribunal, meses depois, reconstrua o processo sem depender da memória de quem participou.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Manual de 2025 também reforça a separação entre ata do concílio e registro dos atos do tribunal. A ata não deve carregar indiscriminadamente todo conteúdo sensível do processo; os autos e livros próprios existem justamente para preservar detalhes necessários ao julgamento sem converter a memória administrativa da igreja em arquivo público de intimidades.',
    },
    { tipo: 'secao', titulo: '8. Prazos: disciplina da instituição, não arma contra a parte' },
    {
      tipo: 'paragrafo',
      texto:
        'No rito ordinário, o Código estabelece sequência de prazos para diligências, alegações finais e relatório. A função do prazo é impedir tanto indefinição interminável quanto decisão por surpresa. Conselho que deixa processo meses sem movimento e depois exige resposta imediata do acusado usa contra a parte uma urgência que ele próprio criou.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O estudante deve resistir à tentação de decorar uma única tabela e aplicá-la a qualquer ato. O Código possui prazos específicos conforme o tipo de manifestação, e os regimentos dos tribunais superiores acrescentam regras próprias. A habilidade necessária é outra: identificar o ato processual, localizar a norma aplicável e registrar corretamente o termo inicial. Em matéria recursal, por exemplo, a intimação formal da decisão é decisiva para o início do prazo.',
    },
    { tipo: 'secao', titulo: '9. Sentença e acórdão: a decisão precisa explicar a si mesma' },
    {
      tipo: 'paragrafo',
      texto:
        'O art. 94 exige que sentença ou acórdão identifique as partes, resuma acusação e defesa, exponha os fundamentos de fato e de direito, indique a pena com agravantes e atenuantes e registre data, local e assinaturas dos julgadores. Uma decisão que diz apenas “considerando os fatos, aplica-se afastamento” não permite saber quais fatos foram tidos por provados nem como a pena foi construída.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso explica a diferença prática entre **ata** e **decisão**. A ata registra que o tribunal se reuniu, quais atos praticou e qual foi o resultado. A sentença ou acórdão carrega a fundamentação que permite às partes compreender, cumprir e eventualmente recorrer. Colocar toda fundamentação na ata expõe conteúdo sensível; deixar a fundamentação fora de qualquer documento inviabiliza o controle da decisão.',
    },
    {
      tipo: 'definicao',
      termo: 'Rito processual eclesiástico',
      texto:
        'É a sequência organizada de atos pela qual o tribunal instrui e julga uma causa disciplinar. No Código da IPB, os ritos sumaríssimo, sumário e ordinário variam em extensão conforme as características da causa, mas nenhum deles dispensa competência, contraditório, defesa, registro e decisão fundamentada. O rito existe para adaptar a forma à complexidade sem adaptar a justiça à conveniência.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Simulado 1 — confissão parcial:** identifique quais fatos foram confessados e quais continuam controvertidos antes de escolher o rito.',
        '**Simulado 2 — três capturas de tela:** descreva o que cada imagem prova, o que não prova e qual confirmação adicional seria necessária.',
        '**Simulado 3 — ministro acusado:** explique por que a identidade do acusado altera o rito e a competência sem antecipar culpa.',
        '**Simulado 4 — decisão em uma linha:** reescreva-a separando fato provado, norma aplicada, atenuantes ou agravantes e pena.',
        '**Simulado 5 — urgência congregacional:** liste quais atos podem ser acelerados e quais garantias não podem ser eliminadas apenas porque o assunto já se tornou público.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Processo disciplinar costuma chegar ao julgamento depois de semanas em que a congregação já formou opiniões. O tribunal precisa fazer justamente o contrário do ambiente ao redor: **diminuir a velocidade da certeza e aumentar a qualidade da prova.** Não é falta de coragem absolver quando a prova falha; é reconhecer que a igreja não recebeu de Cristo autoridade para preencher lacunas probatórias com intuição. E não é falta de misericórdia condenar quando a prova é firme; misericórdia cristã não exige que o tribunal chame o verdadeiro de incerto. A tarefa é mais difícil: decidir apenas o que os autos permitem decidir e, depois, pastorear as consequências dessa verdade.',
    },
  ],
  fontes: [
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — Código de Disciplina e notas remissivas',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte normativa para os três ritos processuais, produção de prova, atuação de testemunhas e secretaria, prazos de instrução, fundamentos de absolvição e requisitos da sentença ou acórdão.',
    },
    {
      id: 'bannerman-igreja',
      autor: 'James Bannerman',
      ano: '1868',
      titulo: 'The Church of Christ, vol. I',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/churchofchristtr01bann',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fundamenta teologicamente a limitação do poder eclesiástico e a necessidade de distinguir autoridade ministerial de decisão arbitrária.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — capítulo XXX',
      publicacao: 'IPIB',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Quadro confessional para compreender censuras eclesiásticas como exercício ministerial voltado à glória de Cristo, pureza da igreja e recuperação do faltoso.',
    },
  ],
};
