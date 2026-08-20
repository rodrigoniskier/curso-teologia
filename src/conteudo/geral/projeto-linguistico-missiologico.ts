import type { Verbete } from '../../tipos';

export const projetoLinguisticoMissiologico: Verbete = {
  id: 'cg67-projeto-linguistico-missiologico',
  disciplina: 'CG67',
  unidade: 1,
  titulo: 'Projeto de Pesquisa Linguístico-missiológica',
  subtitulo: 'Uma lista de palavras coletada no campo ainda não é uma pesquisa — e uma pesquisa que não muda nenhuma decisão missionária pode ser apenas um arquivo bonito',
  objetivo:
    'Ao final, você saberá transformar uma necessidade missionária em uma pergunta de pesquisa delimitada, desenhar coleta de dados fonológicos, morfossintáticos e sociolinguísticos sem tratar pessoas como fontes descartáveis, distinguir elicitação de uso natural, organizar gravações e metadados, analisar padrões sem confundir hipótese com fato e escrever um relatório que deixe claros método, limites, evidências e implicações práticas para aquisição de língua, tradução, comunicação e estratégia missionária.',
  atualizadoEm: '2026-08-19',
  verMais: ['cg66-linguistica-aplicada', 'tp27-antropologia-missionaria', 'tp60-estrategia-missionaria'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma equipe chega a uma região multilíngue e decide “fazer um levantamento”. Durante duas semanas anota centenas de palavras, grava algumas conversas, pergunta a moradores qual língua eles usam e volta com uma pasta cheia de arquivos. Na reunião de avaliação surge a pergunta incômoda: **o que exatamente queríamos descobrir?** Ninguém consegue responder sem usar palavras vagas como “conhecer melhor o povo”.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O problema não é falta de trabalho. É falta de desenho. Pesquisa começa antes da coleta, quando uma necessidade prática é convertida em pergunta que pode receber resposta por meio de evidência. Se não sabemos que decisão os dados ajudarão a tomar, acumulamos informação sem critério para saber o que é suficiente, relevante ou ausente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'CG66 apresentou ferramentas para observar sons, palavras, estruturas, significados e uso social. CG67 dá o passo seguinte: **como organizar uma investigação de campo em que essas ferramentas produzam conhecimento verificável e útil para a missão, sem transformar a comunidade em laboratório do pesquisador?**',
    },

    { tipo: 'secao', titulo: 'O projeto começa pela decisão que ainda não pode ser tomada com segurança' },
    {
      tipo: 'paragrafo',
      texto:
        '“Estudar a língua X” é tema, não problema de pesquisa. “Descobrir se os jovens ainda usam X em casa ou se a transmissão intergeracional está mudando” já aponta para observações específicas. “Verificar quais contrastes sonoros precisam ser distinguidos numa proposta inicial de escrita” aponta para outro desenho. “Entender que formas de tratamento aparecem numa conversa pastoral” pede dados diferentes dos dois anteriores.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Necessidade missionária:** que dificuldade concreta existe — aquisição, tradução, alfabetização, comunicação, formação de líderes, escolha de língua de trabalho?',
        '**Pergunta de pesquisa:** que coisa ainda não sabemos e pode ser investigada com dados observáveis?',
        '**Unidade de análise:** som, palavra, construção, texto, falante, família, domínio de uso, comunidade ou variedade?',
        '**Evidência necessária:** que dados permitiriam responder sem depender apenas de impressão pessoal?',
        '**Decisão esperada:** o que poderá ser feito de modo diferente se a resposta for A, B ou “ainda não sabemos”?',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Projeto de pesquisa linguístico-missiológica',
      texto:
        'Plano delimitado para investigar uma questão de linguagem relevante a uma decisão missionária. Explicita problema, objetivos, participantes, contexto, métodos de coleta e análise, cuidados éticos, cronograma, tratamento dos dados, limitações e forma de comunicação dos resultados. Seu produto não é apenas um relatório: é uma conclusão proporcional às evidências, capaz de orientar nova aprendizagem, tradução, comunicação ou estratégia.',
    },

    { tipo: 'secao', titulo: 'Objetivo geral amplo demais produz coleta que nunca termina' },
    {
      tipo: 'paragrafo',
      texto:
        'Projetos de campo fracassam frequentemente por querer “descrever a língua”. Uma descrição ampla pode ocupar décadas e equipes inteiras. Um semestre ou estágio precisa escolher um recorte. O objetivo geral define o problema; objetivos específicos dizem que etapas observáveis permitirão enfrentá-lo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Se o problema é fonológico, objetivos podem incluir levantar inventário provisório de sons, identificar pares contrastivos, testar distribuição e registrar variação. Se o problema é sociolinguístico, podem incluir mapear línguas usadas em casa, culto, escola e comércio, comparar gerações e registrar atitudes dos falantes. Cada objetivo deve gerar um conjunto identificável de dados.',
    },
    {
      tipo: 'termo',
      termo: 'Hipótese de trabalho',
      texto:
        'Explicação provisória que orienta onde procurar padrões sem receber antecipadamente o estatuto de conclusão. Em pesquisa descritiva, nem todo projeto precisa começar com hipótese formal; muitas vezes perguntas e objetivos são suficientes. Quando uma hipótese é usada, o desenho deve permitir encontrar evidência que a contrarie, e não apenas exemplos que a confirmem.',
    },

    { tipo: 'secao', titulo: 'O participante não é “o falante nativo médio” — porque essa pessoa não existe' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma língua é usada por pessoas com idade, gênero, trajetória, escolaridade, mobilidade, religião, rede social e repertório multilíngue diferentes. O primeiro colaborador disponível pode fornecer dados excelentes sobre sua própria variedade e dados péssimos para sustentar generalizações sobre toda a comunidade. Pesquisa começa registrando **quem produziu o dado e em que circunstância**.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Seleção intencional:** escolha participantes porque representam contrastes relevantes à pergunta — por exemplo gerações, bairros ou repertórios linguísticos.',
        '**Não confunda conveniência com representatividade:** trabalhar com quem mora perto pode ser necessário; apenas não esconda essa limitação no relatório.',
        '**Compare mais de uma voz:** uma construção rejeitada por um falante pode ser comum em outro grupo. Variação é dado, não ruído a ser apagado.',
        '**Registre contexto:** uma forma usada numa entrevista formal pode não aparecer numa conversa entre parentes, e vice-versa.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Glottolog ajuda a localizar línguas, famílias e referências, mas seu próprio desenho lembra que categorias linguísticas são hipóteses acadêmicas atualizáveis. A etiqueta usada por uma base externa também pode não coincidir com a identidade escolhida pela comunidade. O código facilita catalogação; não substitui perguntar às pessoas como nomeiam sua língua e seu grupo.',
    },

    { tipo: 'secao', titulo: 'Consentimento precisa acontecer antes da gravação — e continuar válido depois dela' },
    {
      tipo: 'paragrafo',
      texto:
        'O gravador cria um arquivo que pode sobreviver muito mais tempo que a conversa. Por isso autorização não deve significar apenas “posso gravar?”. É preciso explicar finalidade, armazenamento, quem terá acesso, se trechos poderão aparecer em aula ou publicação e se o participante pode pedir retirada ou anonimização dentro das condições combinadas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em contexto missionário, consentimento exige cuidado adicional porque relações podem conter assimetrias de dinheiro, emprego, assistência, prestígio religioso ou vínculo pastoral. A pessoa que depende da organização pode sentir que recusar uma gravação não é realmente opção. O pesquisador precisa criar uma situação em que dizer “não” não prejudique a relação nem o acesso a ajuda.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Explique em linguagem compreensível** o objetivo e o destino dos dados.',
        '**Peça permissão específica** para gravação, fotografia, publicação e compartilhamento; uma autorização não implica automaticamente as demais.',
        '**Minimize dados pessoais** que não são necessários para responder à pergunta.',
        '**Proteja materiais sensíveis** — religião, política, histórias familiares e conversas privadas podem colocar pessoas em risco.',
        '**Reconheça colaboração intelectual:** quem oferece análise, tradução e interpretação extensa pode ser colaborador de pesquisa, não apenas “fonte”.',
      ],
    },

    { tipo: 'secao', titulo: 'Elicitação e fala natural respondem perguntas diferentes' },
    {
      tipo: 'termo',
      termo: 'Elicitação',
      texto:
        'Procedimento em que o pesquisador pede deliberadamente palavras, julgamentos, traduções, paradigmas ou exemplos para investigar determinada forma. É eficiente para testar contrastes e preencher lacunas, mas o dado é produzido numa situação criada pela pesquisa e pode refletir tradução, monitoramento ou expectativa do participante.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Perguntar “como se diz ‘ele chegou ontem’?” pode revelar uma forma útil e, ao mesmo tempo, induzir a estrutura da língua de contato. Por isso o mesmo padrão deve ser procurado também em narrativas, conversas, instruções, histórias de vida e outros usos menos controlados. O melhor desenho combina métodos quando a pergunta permite.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Lista dirigida:** boa para inventário inicial e contrastes específicos; fraca para demonstrar frequência ou naturalidade discursiva.',
        '**Paradigma:** excelente para morfologia quando há formas comparáveis; pode produzir formas possíveis que raramente aparecem espontaneamente.',
        '**Julgamento de aceitabilidade:** testa contraste fino; precisa de contexto e mais de um participante antes de virar regra geral.',
        '**Narrativa gravada:** preserva sequência e escolhas naturais de discurso; exige mais trabalho de transcrição e pode não conter a construção que você procura.',
        '**Observação de interação:** revela pragmática, turnos e formas de tratamento; aumenta as exigências éticas e de anonimização.',
      ],
    },

    { tipo: 'secao', titulo: 'Gravar sem metadados produz arquivos que rapidamente perdem valor' },
    {
      tipo: 'paragrafo',
      texto:
        'Um arquivo chamado `audio_final_3.wav` pode parecer claro no dia da coleta e se tornar quase inútil seis meses depois. Dados de campo precisam ser acompanhados por informação mínima que permita reconstruir sua origem. Data, local aproximado quando seguro, participante codificado, tipo de atividade, idioma/variedade, equipamento, pesquisador e status de consentimento devem viajar com o arquivo.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Nomeie de modo consistente:** projeto + participante codificado + data + sessão.',
        '**Preserve o original:** não substitua a gravação bruta por versão editada.',
        '**Faça cópias separadas:** pelo menos dois locais físicos ou serviços independentes quando a segurança permitir.',
        '**Mantenha uma tabela de sessões:** arquivo, duração, conteúdo, consentimento, transcrição, revisão e observações.',
        '**Separe chave de identificação:** se usar códigos, a tabela que liga código a pessoa deve ter proteção maior que o corpus de trabalho.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tratamento de dados não é etapa burocrática posterior à “pesquisa de verdade”. Se a equipe perde a origem de um exemplo, não consegue avaliar sua força. Organização é parte da evidência porque permite retornar ao dado, conferir transcrição e mostrar como a conclusão foi alcançada.',
    },

    { tipo: 'secao', titulo: 'Levantamento fonológico começa procurando contraste, não montando um alfabeto' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa pede levantamento fonológico. O objetivo inicial não deve ser decidir imediatamente como escrever cada som, mas descobrir quais diferenças participam do sistema. Anderson e colaboradores distinguem fonética — realização física — de fonologia — padrões e contrastes que funcionam na língua. Essa separação impede que o pesquisador crie letras diferentes para toda variação acústica que consegue ouvir.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Colete palavras comparáveis** em posições diferentes e com mais de um falante.',
        '**Procure pares mínimos ou quase mínimos:** formas cuja diferença sonora acompanha diferença de significado.',
        '**Mapeie distribuição:** dois sons aparecem nos mesmos ambientes ou se complementam?',
        '**Teste percepção e produção:** o pesquisador pode ouvir contraste que o falante não considera funcional, ou deixar de ouvir um contraste que o falante usa.',
        '**Registre variação:** idade, velocidade e contexto podem alterar pronúncia sem criar novo fonema.',
        '**Adie decisões ortográficas:** escrita envolve fonologia, alfabetização, identidade, tecnologia e escolha comunitária, não apenas tabela fonética.',
      ],
    },

    { tipo: 'secao', titulo: 'Levantamento morfossintático procura sistemas de contraste, não frases exóticas' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma boa descrição não coleciona apenas construções curiosas. Ela testa como a língua marca relações recorrentes. Quem faz o quê a quem? Como nega? Como pergunta? Como expressa tempo, aspecto, número, posse e comparação? Como liga orações? Que elementos podem ser omitidos e quando?',
    },
    {
      tipo: 'lista',
      itens: [
        '**Constituintes e ordem:** sujeito, verbo, objeto e posições alternativas em contextos diferentes.',
        '**Morfologia nominal:** número, caso, posse, classificação, determinantes e concordância quando existirem.',
        '**Morfologia verbal:** pessoa, tempo, aspecto, modo, voz, negação e concordância.',
        '**Perguntas e negação:** formas polares, interrogativos, escopo e posição de marcadores.',
        '**Subordinação e coordenação:** como narrativas ligam causa, condição, tempo, finalidade e contraste.',
        '**Referência no discurso:** pronomes, repetição, elipse e recursos que mantêm participantes identificáveis ao longo do texto.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paradigmas ajudam a encontrar regularidade, mas precisam voltar ao corpus natural. Uma forma perfeitamente aceitável quando pedida isoladamente pode ser rara em narrativa; uma construção que o pesquisador nunca pensou em elicitar pode dominar o uso espontâneo. O ciclo saudável é **observar → formular hipótese → testar → voltar ao uso**.',
    },

    { tipo: 'secao', titulo: 'O levantamento sociolinguístico pergunta quem usa qual língua, com quem, para quê e como avalia esse uso' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma comunidade “fala X” pode usar X em casa, outra língua na escola, uma terceira no comércio e uma quarta em certos conteúdos digitais. Crianças podem compreender X sem produzi-la; adultos podem declarar preferência por uma língua prestigiosa e continuar usando outra nas relações íntimas. Por isso contagem de falantes sem domínio de uso oferece retrato incompleto.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Repertório:** que línguas/variedades cada grupo compreende, fala, lê ou escreve?',
        '**Domínios:** casa, culto, escola, trabalho, administração, mídia, mercado e relações entre gerações.',
        '**Transmissão:** crianças estão adquirindo a língua no lar ou apenas adultos a usam?',
        '**Mobilidade:** migração, casamento e estudo aproximam variedades ou mudam repertórios?',
        '**Atitudes:** que língua é associada a identidade, oportunidade, vergonha, tradição ou autoridade religiosa?',
        '**Variação interna:** a categoria “uma língua” esconde diferenças que afetam inteligibilidade ou aceitação de materiais?',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sapir continua útil ao lembrar que língua é fenômeno social e histórico, mas seus conceitos devem ser lidos ao lado da linguística atual. A pesquisa sociolinguística não procura uma “mentalidade do povo” escondida na gramática. Procura padrões observáveis de uso e as interpretações que os próprios participantes dão a esses padrões.',
    },

    { tipo: 'secao', titulo: 'Analisar significa mostrar como você saiu do dado e chegou à afirmação' },
    {
      tipo: 'paragrafo',
      texto:
        'A diferença entre relatório e impressão pessoal aparece na cadeia de evidência. “Os jovens não valorizam a língua” é afirmação forte. Que dados a sustentam? Menor uso em casa? Respostas de entrevista? Escolha de idioma em mensagens? Comentários negativos? Todos podem ser relevantes e nenhum, isoladamente, prova uma atitude coletiva.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Descreva primeiro:** o que foi observado ou contado, sem interpretação causal prematura.',
        '**Compare:** grupos, ambientes, formas ou fontes de dados relevantes à pergunta.',
        '**Procure contraexemplos:** eles delimitam a regra e às vezes revelam que a hipótese estava errada.',
        '**Diferencie frequência de existência:** uma construção encontrada uma vez pode ser possível sem ser típica.',
        '**Declare incerteza:** “os dados sugerem” é melhor que uma certeza falsa quando a amostra é pequena.',
        '**Vincule conclusão ao objetivo:** dado interessante que não responde à pergunta pode entrar como pista para pesquisa futura, não como centro do relatório.',
      ],
    },

    { tipo: 'secao', titulo: 'O relatório deve permitir que outra pessoa entenda o que você fez — inclusive onde você pode ter errado' },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Problema e contexto:** por que a investigação foi necessária e que decisão ela pretende informar.',
        '**Pergunta e objetivos:** recorte suficientemente específico para que o leitor saiba o que ficou de fora.',
        '**Participantes e ética:** critérios de seleção, consentimento, proteção e limitações de representatividade.',
        '**Método:** tipos de sessão, instrumentos, duração, corpus e procedimentos de análise.',
        '**Resultados:** dados organizados antes da interpretação — tabelas, exemplos, padrões e exceções.',
        '**Discussão:** o que os resultados significam para a pergunta e que explicações alternativas permanecem.',
        '**Implicações missionárias:** decisões que os dados apoiam, decisões que ainda não podem ser tomadas e próximos passos.',
        '**Limitações e reprodutibilidade:** o que outra equipe precisaria saber para revisar ou ampliar o estudo.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um bom relatório não precisa parecer mais certo do que a pesquisa foi. A frase “trabalhamos com quatro famílias de uma única aldeia e, portanto, não generalizamos para toda a língua” aumenta a credibilidade. O leitor consegue distinguir evidência de extrapolação e decidir quanto peso dar ao resultado.',
    },

    { tipo: 'secao', titulo: 'Três modelos de pesquisa de campo e a relação que cada um cria com a comunidade' },
    {
      tipo: 'controversia',
      titulo: 'Quem define a pesquisa e quem recebe seus frutos?',
      posicoes: [
        {
          escola: 'Levantamento extrativo',
          sintese:
            'A equipe externa define perguntas, coleta dados rapidamente, produz análise e leva o resultado para sua instituição. Sua força é foco e eficiência quando uma decisão urgente exige diagnóstico. Seu risco é reduzir participantes a provedores de dados, perder conhecimento local e produzir materiais que nunca voltam para quem tornou a pesquisa possível.',
        },
        {
          escola: 'Documentação acadêmica extensiva',
          sintese:
            'Prioriza corpus amplo, descrição durável, metadados e preservação para pesquisa futura. Sua força é profundidade e valor de longo prazo, especialmente para línguas pouco descritas. Seu custo é exigir tempo, competência e infraestrutura além do alcance de muitos projetos missionários, e a agenda acadêmica pode não coincidir com necessidades imediatas da comunidade.',
        },
        {
          escola: 'Pesquisa colaborativa orientada por decisão',
          sintese:
            'Define um problema missionário real, negocia métodos e uso dos dados com colaboradores locais, preserva padrões técnicos suficientes para revisão e devolve resultados em forma útil. É a posição deste verbete. Seu desafio é equilibrar rigor, tempo, expectativas institucionais e participação sem romantizar consenso onde interesses são diferentes.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'Um projeto mínimo viável para o estágio de campo' },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Uma pergunta principal** que caiba em uma frase e numa decisão concreta.',
        '**Dois a quatro objetivos específicos** ligados a conjuntos de dados identificáveis.',
        '**Plano de participantes** com critérios e limites de amostra explicitados.',
        '**Protocolo de consentimento e dados** antes de ligar o gravador.',
        '**Duas modalidades de coleta**, idealmente uma controlada e uma natural, quando a pergunta permitir.',
        '**Tabela de sessões e backups** desde o primeiro dia.',
        '**Ciclo semanal de análise:** não deixe toda análise para depois do campo; lacunas descobertas tarde demais não podem ser recolhidas.',
        '**Devolutiva local:** compartilhe conclusões provisórias e permita correção factual antes de fechar o relatório.',
        '**Relatório com limites claros** e uma seção específica: “o que recomendamos fazer agora”.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Pesquisa linguístico-missiológica pode ser uma escola de humildade porque obriga o pesquisador a admitir quantas vezes ouviu sem entender. O falante local sabe fazer espontaneamente aquilo que o especialista estrangeiro precisa desmontar em tabelas para começar a perceber. Quando o projeto é bem conduzido, essa assimetria deixa de ser obstáculo e vira disciplina espiritual: perguntar antes de concluir, ouvir mais de uma pessoa, registrar a própria incerteza, voltar com uma hipótese e aceitar que alguém diga “não, ninguém fala assim”. A igreja não pesquisa línguas para transformar pessoas em dados. Pesquisa para diminuir a distância criada pela nossa ignorância e servir de modo que o outro não precise carregar sozinho o peso de ser compreendido.',
    },
  ],
  fontes: [
    {
      id: 'anderson-linguistics2',
      autor: 'Catherine Anderson et al.',
      ano: '2022',
      titulo: 'Essentials of Linguistics, 2nd edition',
      publicacao: 'eCampusOntario / McMaster University',
      url: 'https://openlibrary-repo.ecampusontario.ca/jspui/handle/123456789/1489',
      idioma: 'en',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Livro-texto aberto que fornece a base analítica para fonética, fonologia, morfologia, sintaxe, semântica e variação empregadas no desenho dos levantamentos de CG67.',
    },
    {
      id: 'sapir-language',
      autor: 'Edward Sapir',
      ano: '1921',
      titulo: 'Language: An Introduction to the Study of Speech',
      publicacao: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/12629',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Clássico para a dimensão social e histórica da linguagem, usado criticamente ao lado de uma introdução contemporânea.',
    },
    {
      id: 'glottolog-5-3',
      autor: 'Harald Hammarström, Robert Forkel, Martin Haspelmath e Sebastian Bank (eds.)',
      ano: '2026',
      titulo: 'Glottolog 5.3 — About Languoids',
      publicacao: 'Max Planck Institute / Glottolog',
      url: 'https://glottolog.org/glottolog/glottologinformation',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base acadêmica aberta para identificação e classificação de línguas e referências bibliográficas, usada com a ressalva de que categorias são atualizadas conforme novas descrições surgem.',
    },
  ],
};
