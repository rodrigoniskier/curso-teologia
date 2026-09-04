import type { MaterialDisciplina } from '../tipos';

export const material: MaterialDisciplina = {
  id: 'tp21-estagio1-pratica-relatorio',
  disciplina: 'TP21',
  titulo: 'Estágio 1 — prática ministerial supervisionada e relatório',
  objetivo: 'Conduzir o estudante da preparação da atividade ministerial à observação, reflexão supervisionada, redação e apresentação de um relatório claro, responsável e teologicamente consciente.',
  ementaCoberta: 'Instrui os alunos a preparar relatórios. Inclui atividade prática ministerial supervisionada, com apresentação de relatório.',
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O estágio não é ministério autônomo',
      paragrafos: [
        'Estágio ministerial é aprendizagem situada. O estudante participa de atividades reais, mas não atua como autoridade independente nem transforma a experiência de campo em laboratório sobre pessoas. A prática ocorre sob supervisão, dentro das atribuições que lhe forem efetivamente delegadas e em respeito à ordem da igreja local e às orientações acadêmicas.',
        'Na tradição presbiteriana, governo, culto, sacramentos, disciplina e cuidado pastoral não são tarefas privadas exercidas por iniciativa individual. O estágio deve, portanto, ensinar também limites: saber quando observar, quando colaborar, quando perguntar e quando encaminhar uma situação ao responsável competente.',
        'O objetivo não é apenas acumular horas. Uma experiência ministerial se torna formativa quando o estudante consegue relacionar ação, contexto, Escritura, confissão, prudência pastoral, feedback do supervisor e autocrítica responsável.'
      ]
    },
    {
      tipo: 'quadro',
      titulo: 'Ciclo básico de aprendizagem supervisionada',
      itens: [
        'Planejar: compreender a atividade, o objetivo, o público, os limites e o papel do estudante.',
        'Servir: executar somente o que foi autorizado, com pontualidade, respeito, preparo e atenção às pessoas.',
        'Observar: registrar fatos relevantes sem expor dados pessoais desnecessários.',
        'Debriefar: conversar com o supervisor sobre decisões, dificuldades, alternativas e aprendizados.',
        'Refletir: distinguir o que aconteceu, como foi interpretado e que princípios bíblico-teológicos orientam a avaliação.',
        'Relatar: transformar a experiência em registro verificável, organizado e útil para acompanhamento acadêmico.'
      ]
    },
    {
      tipo: 'texto',
      titulo: '2. Antes da atividade: prepare o campo e prepare-se',
      paragrafos: [
        'Antes de cada atividade, o estudante deve saber quem supervisiona, qual é a tarefa, quais são os limites de atuação, que preparação é necessária e como o resultado será registrado. Em visitação, aconselhamento, ensino, culto, ação diaconal ou atividade administrativa, a pergunta inicial não é “o que eu gostaria de fazer?”, mas “o que foi solicitado, por quem, para qual finalidade e dentro de quais limites?”.',
        'Preparação também inclui postura. O estudante chega no horário combinado, leva o material necessário, conhece o objetivo da atividade, evita promessas que não pode cumprir e não utiliza o estágio para promover a si mesmo. Quando houver dúvida sobre confidencialidade, aconselhamento, disciplina, finanças, crianças, pessoas vulneráveis ou qualquer situação sensível, a decisão correta é consultar o supervisor antes de agir.'
      ]
    },
    {
      tipo: 'lista',
      titulo: 'Checklist pré-atividade',
      ordenada: false,
      itens: [
        'Supervisor responsável identificado.',
        'Objetivo e duração aproximada da atividade compreendidos.',
        'Papel do estudante e limites de atuação definidos.',
        'Materiais, leituras ou preparação prévia concluídos.',
        'Critérios de confidencialidade e registro esclarecidos.',
        'Forma de retorno ao supervisor combinada.',
        'Campo de notas preparado para registrar fatos depois da atividade, sem interromper desnecessariamente o serviço.'
      ]
    },
    {
      tipo: 'texto',
      titulo: '3. Durante a prática: observar sem transformar pessoas em “casos”',
      paragrafos: [
        'A boa observação ministerial é concreta. Em vez de escrever “a reunião foi boa”, registre elementos verificáveis: qual era o propósito, que tarefa você recebeu, que sequência de ações ocorreu, que dificuldade apareceu, como a liderança respondeu e que resultado imediato pôde ser observado.',
        'Ao mesmo tempo, o relatório não é prontuário nem espaço para exposição. Nomes, diagnósticos, conflitos familiares, informações financeiras, confissões pessoais e outros dados sensíveis só devem aparecer quando forem indispensáveis e quando houver autorização e base adequada para registrá-los. Na maior parte dos relatórios acadêmicos, anonimizar e descrever apenas o necessário é suficiente.',
        'Evite também o erro oposto: usar linguagem tão vaga que ninguém consiga compreender o que foi feito. Confidencialidade exige discrição, não imprecisão. É possível escrever “participei, sob supervisão, de uma visita a um membro hospitalizado; minha responsabilidade foi leitura bíblica e oração” sem revelar identidade ou informação clínica.'
      ]
    },
    {
      tipo: 'exemplo',
      titulo: 'Fato, interpretação e reflexão',
      enunciado: '“A classe ficou desinteressada e a aula não funcionou.”',
      explicacao: 'A frase mistura julgamento e fato. Um registro melhor separa níveis: fato — “após cerca de vinte minutos, três participantes iniciaram conversas paralelas e duas perguntas previstas não foram discutidas”; interpretação — “o ritmo e a quantidade de exposição podem ter reduzido a participação”; reflexão — “o supervisor sugeriu reduzir a exposição e usar perguntas mais cedo; na próxima oportunidade, prepararei transições mais curtas e verificarei compreensão ao longo da aula”.'
    },
    {
      tipo: 'texto',
      titulo: '4. A conversa com o supervisor é parte do estágio',
      paragrafos: [
        'Supervisão não é mera assinatura. O estudante deve apresentar dúvidas e receber correção. Uma boa conversa pós-atividade pode trabalhar quatro perguntas: o que aconteceu; por que você agiu assim; que alternativas existiam; o que fará de modo diferente na próxima vez.',
        'O estudante maduro não escreve o relatório para provar que acertou tudo. Ele registra limitações, correções recebidas e próximos passos. A tradição pastoral reformada insiste que quem cuida de outros também precisa examinar a própria doutrina, caráter e prática. Esse autoexame não é introspecção sem fim; ele deve produzir arrependimento quando necessário, gratidão, aprendizado e serviço mais fiel.'
      ]
    },
    {
      tipo: 'quadro',
      titulo: 'Perguntas para o debriefing',
      itens: [
        'Qual era o objetivo ministerial da atividade?',
        'O que efetivamente aconteceu?',
        'Que decisão minha precisa ser explicada ou revista?',
        'Que aspecto o supervisor considerou adequado?',
        'Que correção ou alternativa foi proposta?',
        'Que princípio bíblico, confessional ou pastoral ajuda a avaliar a experiência?',
        'Qual mudança concreta farei na próxima oportunidade?'
      ]
    },
    {
      tipo: 'texto',
      titulo: '5. Como preparar o relatório',
      paragrafos: [
        'O relatório sugerido abaixo é uma ferramenta pedagógica do portal. Ele não substitui formulário, modelo, carga horária, assinatura ou exigência específica que o seminário ou o supervisor determine. Quando houver modelo institucional, use o modelo institucional e aproveite estes princípios apenas para melhorar a qualidade do conteúdo.',
        'Um bom relatório permite que outra pessoa compreenda o contexto, o que foi feito, qual foi sua participação, como a experiência foi avaliada e o que você aprendeu. Ele não precisa ser ornamentado. Precisa ser verdadeiro, específico, ordenado e suficientemente documentado.',
        'Na redação, prefira verbos concretos e identifique sujeitos: “preparei”, “observei”, “o supervisor orientou”, “a equipe decidiu”. Evite transformar opinião em fato e evite atribuir intenções que você não pode demonstrar. Quando citar Escritura, documento eclesiástico ou outra fonte, identifique a referência de modo que ela possa ser conferida.'
      ]
    },
    {
      tipo: 'lista',
      titulo: 'Estrutura sugerida de relatório',
      ordenada: true,
      itens: [
        'Identificação da atividade: data, local ou contexto geral, supervisor e natureza da atividade, preservando informações sensíveis.',
        'Objetivo: o que a atividade pretendia realizar e qual era o papel do estudante.',
        'Preparação: leituras, reunião prévia, materiais e orientações recebidas.',
        'Descrição factual: sequência principal do que foi feito e observado.',
        'Participação do estudante: tarefas efetivamente executadas e limites observados.',
        'Análise ministerial: aspectos que favoreceram ou dificultaram o objetivo da atividade.',
        'Reflexão bíblico-teológica: princípio relevante usado para avaliar a experiência, sem inserir versículos apenas como decoração.',
        'Feedback do supervisor: orientação, correção, confirmação ou questão levantada após a prática.',
        'Autoavaliação e próximo passo: o que manter, corrigir ou estudar antes de atividade semelhante.',
        'Referências e anexos autorizados, quando realmente necessários.'
      ]
    },
    {
      tipo: 'exemplo',
      titulo: 'Trecho insuficiente',
      enunciado: '“Ajudei no culto. Foi uma experiência muito boa e aprendi bastante.”',
      explicacao: 'O texto não informa responsabilidade, ação, observação, supervisão nem aprendizado específico. Uma versão melhor seria: “Fui responsável por organizar, sob orientação do presbítero escalado, a recepção e a distribuição dos boletins antes do culto. Percebi que a equipe não tinha uma divisão clara dos pontos de entrada; após o culto, o supervisor sugeriu definir previamente duas posições. Na próxima escala, confirmarei a distribuição da equipe antes da abertura das portas”.'
    },
    {
      tipo: 'atividade',
      id: 'tp21-atividade-relatorio-1',
      titulo: 'Do registro bruto ao relatório',
      enunciado: 'Depois de uma atividade supervisionada real, produza duas versões do registro: primeiro, notas factuais curtas; depois, um relatório estruturado.',
      itens: [
        'Nas notas brutas, registre apenas fatos observáveis, decisões e falas do supervisor indispensáveis à compreensão.',
        'No relatório, acrescente interpretação e reflexão em seções separadas.',
        'Remova nomes e detalhes pessoais que não sejam necessários ao objetivo acadêmico.',
        'Inclua pelo menos uma correção ou orientação recebida do supervisor.',
        'Finalize com um próximo passo específico e verificável.'
      ],
      resposta: 'Não existe uma única redação correta. A resposta é adequada quando distingue fato, interpretação e reflexão; preserva confidencialidade; identifica o papel do estudante; registra supervisão real; relaciona a experiência a um princípio relevante; e termina com aprendizagem concreta. O supervisor deve poder reconhecer a atividade sem encontrar no texto exposição desnecessária de pessoas.'
    },
    {
      tipo: 'texto',
      titulo: '6. Apresentação do relatório',
      paragrafos: [
        'Apresentar o relatório não significa ler o documento inteiro. A apresentação deve permitir que professor, supervisor ou colegas compreendam rapidamente a atividade, a participação do estudante, um desafio significativo, o feedback recebido e o principal aprendizado. Se houver tempo ou formato definido pela instituição, adapte-se a ele.',
        'Uma boa apresentação seleciona. Comece pelo contexto e pelo objetivo, descreva o ponto central da experiência, explique a análise e termine com o próximo passo. Se utilizar slides, cada tela deve apoiar a exposição, não substituí-la. Informações confidenciais permanecem confidenciais também na apresentação oral.'
      ]
    },
    {
      tipo: 'lista',
      titulo: 'Roteiro enxuto de apresentação',
      ordenada: true,
      itens: [
        'Contexto e objetivo da atividade.',
        'Minha responsabilidade específica.',
        'Um fato ou desafio relevante.',
        'Como o supervisor avaliou a situação.',
        'Princípio bíblico-teológico que orientou a reflexão.',
        'O que aprendi e o que farei na próxima oportunidade.'
      ]
    },
    {
      tipo: 'quadro',
      titulo: 'Rubrica pedagógica sugerida pelo portal',
      itens: [
        'Fidelidade factual: o relatório descreve o que realmente ocorreu sem exagero ou reconstrução conveniente.',
        'Responsabilidade: identifica limites, supervisão, confidencialidade e papel real do estudante.',
        'Clareza: organiza contexto, ações, análise e conclusão de forma compreensível.',
        'Reflexão: vai além de “gostei/não gostei” e examina decisões, fundamentos e alternativas.',
        'Aprendizagem: registra feedback recebido e transforma a experiência em próximo passo concreto.',
        'Apresentação: comunica o essencial sem expor pessoas nem simplesmente ler o relatório.'
      ]
    },
    {
      tipo: 'atividade',
      id: 'tp21-atividade-relatorio-2',
      titulo: 'Revisão antes da entrega',
      enunciado: 'Revise seu relatório como se você fosse o supervisor responsável por confirmar a experiência.',
      itens: [
        'Consigo identificar o que o estudante realmente fez?',
        'Consigo distinguir fatos de interpretações?',
        'Há alguma informação pessoal que deveria ser removida ou anonimizada?',
        'O relatório registra feedback ou supervisão real?',
        'A reflexão bíblico-teológica está relacionada à experiência concreta?',
        'O próximo passo é específico o suficiente para ser retomado no estágio seguinte?'
      ],
      resposta: 'Se alguma resposta for negativa, revise antes da entrega. O relatório de estágio deve servir simultaneamente como prestação de contas acadêmica e como instrumento de aprendizagem supervisionada; quando ele é genérico, autopromocional ou indiscreto, falha nos dois propósitos.'
    }
  ],
  fontes: [
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — edição revista com notas remissivas',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte denominacional para situar o serviço do estudante dentro da ordem, das responsabilidades e dos concílios da IPB; não é apresentada aqui como manual específico de estágio.'
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
      nota: 'Referência confessional para avaliar a prática eclesial por princípios doutrinários, em vez de reduzir o estágio a técnica ou preferência pessoal.'
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
      nota: 'Clássico pastoral usado especialmente para o princípio de autoexame do ministro e seriedade no cuidado de pessoas; seu contexto histórico não é tratado como regulamento contemporâneo da IPB.'
    },
    {
      id: 'unifal-normalizacao-2025',
      autor: 'Universidade Federal de Alfenas',
      ano: '2025',
      titulo: 'Manual de normalização e apresentação de trabalhos acadêmicos da UNIFAL-MG: com base nas normas de documentação da ABNT',
      publicacao: 'Sistema de Bibliotecas da UNIFAL-MG',
      url: 'https://repositorio.unifal-mg.edu.br/items/931ae2f8-b69d-47ff-83ee-ff7912db2480',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Referência aberta de apoio à apresentação formal, citações e referências. Não é usada como suposto modelo oficial de relatório de estágio do seminário.'
    }
  ],
  atualizadoEm: '2026-09-03'
};
