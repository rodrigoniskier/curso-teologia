import type { Verbete } from '../../tipos';

export const poimenicaEstruturasEnsinoMusica: Verbete = {
  id: 'tp02-estruturas-ensino-musica',
  disciplina: 'TP02',
  unidade: 13,
  titulo: 'O Pastor, as Sociedades Internas, a Escola Dominical e a Música',
  subtitulo: 'Supervisionar não é fazer tudo — é garantir que ministérios diferentes continuem servindo à mesma igreja',
  objetivo:
    'Ao final, você saberá relacionar o pastor com sociedades internas, Escola Dominical e ministério de música sem microgestão; compreenderá por que essas estruturas pertencem à vida da igreja e não funcionam como departamentos autônomos; poderá definir critérios de supervisão, formação e prestação de contas; e distinguir responsabilidade pastoral sobre ensino e culto de execução técnica que pode e deve ser compartilhada.',
  atualizadoEm: '2026-08-28',
  verMais: ['tp10-educacao-crista', 'cg59-musica', 'tp06-forcas-integracao-ipb', 'tp12-governo-presbiteriano'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma igreja pode ter sociedade de homens, mulheres e jovens, Escola Dominical, coral, conjunto, equipe de louvor, classes de catecúmenos e dezenas de voluntários — e ainda assim cada área operar como pequena igreja dentro da igreja. Calendários competem, líderes protegem territórios, professores escolhem conteúdo sem supervisão e músicos tratam repertório como assunto técnico. O pastor então oscila entre dois extremos: tenta controlar tudo ou desiste de acompanhar qualquer coisa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A poimênica pergunta como exercer cuidado pastoral sobre estruturas que possuem liderança própria. A resposta começa por distinguir **supervisão** de **execução**. O pastor e o conselho não precisam conduzir cada reunião, preparar cada aula ou escolher cada tonalidade. Precisam, porém, assegurar que ensino, culto, comunhão e uso de recursos permaneçam coerentes com a doutrina, a ordem e as prioridades da igreja.',
    },

    { tipo: 'secao', titulo: 'Sociedades internas são instrumentos da igreja, não igrejas paralelas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Na tradição da IPB, sociedades internas e suas federações e confederações organizam serviço, formação e comunhão de segmentos da igreja. Sua utilidade é real: criam participação, liderança, memória institucional e capacidade de mobilizar pessoas que talvez permanecessem apenas como público. O problema surge quando a estrutura intermediária começa a possuir missão, agenda e lealdade próprias em tensão com o conselho e a igreja local.',
    },
    {
      tipo: 'termo',
      termo: 'Sociedade interna',
      texto:
        'Organização reconhecida pela denominação e vinculada à igreja local para reunir determinado segmento em atividades de comunhão, formação e serviço sob supervisão eclesiástica. Não possui autoridade doutrinária ou governamental independente do concílio da igreja; sua autonomia operacional é real, mas subordinada à ordem e à missão da comunidade a que pertence.',
    },
    {
      tipo: 'lista',
      itens: [
        'O pastor deve conhecer a liderança, o calendário e os objetivos das sociedades, sem transformar-se em presidente informal de todas elas.',
        'Projetos que envolvem doutrina, culto público, uso significativo de recursos, patrimônio ou representação institucional precisam respeitar as competências do conselho.',
        'Lideranças das sociedades devem receber formação básica sobre governo da igreja, prestação de contas e limites de sua função.',
        'A sociedade existe para fortalecer a igreja inteira. Quando mede sucesso apenas pelo próprio número de eventos, participantes ou tradição interna, perdeu a referência eclesiológica.',
        'Conflitos entre sociedade e conselho não devem ser resolvidos por competição de popularidade. Precisam retornar às competências, normas e finalidades que justificam a existência da estrutura.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O melhor sinal de integração não é o pastor aparecer em todas as atividades. É a sociedade saber por que existe, como suas decisões se conectam à vida da igreja e a quem presta contas. Presença pastoral constante pode mascarar falta de formação; supervisão madura permite que líderes sirvam com iniciativa dentro de limites compreendidos.',
    },

    { tipo: 'secao', titulo: 'A Escola Dominical é responsabilidade de ensino antes de ser grade de classes', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: '2 Timóteo 2.2',
      texto:
        'E o que de minha parte ouviste através de muitas testemunhas, isso mesmo transmite a homens fiéis e também idôneos para instruir a outros.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Escola Dominical pode ser um dos instrumentos mais estáveis de formação da igreja, mas a estabilidade também pode esconder piloto automático. Classes existem porque sempre existiram; currículos são escolhidos por disponibilidade; professores permanecem décadas sem feedback; a reunião de abertura consome tempo pedagógico; adultos assistem a aulas sem sequência formativa. A pergunta pastoral não deve ser “a ED está funcionando?”, mas “o que nossa igreja está formando por meio dela?”.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O pastor não precisa ser superintendente para levar a Escola Dominical a sério. Precisa trabalhar em parceria com quem exerce essa função, ajudando a definir objetivos, critérios de currículo, formação docente e integração com a pregação, catequese e discipulado. Se o púlpito ensina uma coisa e as classes operam com outra teologia implícita, a igreja possui dois sistemas de formação concorrentes.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Defina resultados formativos.** O que uma criança, adolescente, novo convertido e adulto deveria conhecer, compreender e praticar após determinado ciclo?',
        '**Mapeie o currículo.** Evite repetir sempre os mesmos temas enquanto doutrinas, história bíblica e ética cristã ficam sem tratamento sistemático.',
        '**Prepare professores antes de preencher vagas.** Necessidade de voluntário não transforma automaticamente disponibilidade em capacidade de ensinar.',
        '**Observe e dê feedback.** Formação docente sem acompanhamento tende a virar palestra anual sem impacto na sala.',
        '**Crie sucessão.** Professores experientes devem ter auxiliares e futuros professores em processo de aprendizagem, para que a classe não dependa indefinidamente de uma única pessoa.',
        '**Integre com a vida da igreja.** A Escola Dominical deve reforçar catequese, culto doméstico, pregação e discipulado, e não competir com eles por atenção.',
      ],
    },
    {
      tipo: 'controversia',
      titulo: 'O pastor deve escolher diretamente todo o material da Escola Dominical?',
      posicoes: [
        {
          escola: 'Controle pastoral direto',
          sintese:
            'O pastor seleciona currículo, professores e abordagem para garantir unidade doutrinária. Sua força é a clareza de responsabilidade. Seu risco é criar dependência de uma pessoa e reduzir a superintendência e os professores a executores, além de deslocar decisões que podem pertencer ao conselho ou à equipe designada.',
        },
        {
          escola: 'Autonomia pedagógica ampla',
          sintese:
            'Superintendência e professores decidem material e métodos com liberdade. Sua força é usar competência técnica e distribuir responsabilidade. Seu risco é separar pedagogia de doutrina, como se conteúdo cristão pudesse ser escolhido sem supervisão eclesiástica.',
        },
        {
          escola: 'Supervisão eclesiástica com execução compartilhada',
          sintese:
            'O conselho e o pastor definem critérios doutrinários e objetivos, enquanto superintendência e professores participam da escolha e execução com responsabilidade real. É a posição deste verbete. Preserva supervisão sem microgestão e permite que competência pedagógica seja desenvolvida na própria igreja.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'Na música, o pastor é responsável pela doutrina sem precisar ser músico', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: 'Colossenses 3.16',
      texto:
        'Habite ricamente em vós a palavra de Cristo; instruí-vos e aconselhai-vos mutuamente em toda a sabedoria, louvando a Deus, com salmos, hinos e cânticos espirituais, com gratidão em vosso coração.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O canto congregacional ensina. Isso basta para impedir que o pastor trate repertório como assunto exclusivamente do músico. Ao mesmo tempo, a música possui dimensões técnicas reais — tonalidade, tessitura, arranjo, andamento, instrumentação — sobre as quais o pastor pode não ter competência. A solução madura é dividir responsabilidades sem dividir a igreja em “parte espiritual” e “parte técnica”.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quem conduz música precisa ser instruído sobre teologia do culto, critérios doutrinários, natureza congregacional do canto e autoridade do conselho. Quem supervisiona pastoralmente precisa aprender o suficiente para formular boas perguntas e respeitar competência musical. Um pastor que escolhe tonalidade sem conhecimento e um músico que escolhe doutrina sem supervisão cometem o mesmo erro em direções opostas.',
    },
    {
      tipo: 'lista',
      itens: [
        'O repertório deve ser examinado pelo conteúdo que a igreja aprenderá ao cantar, não apenas por preferência estética ou popularidade.',
        'A liderança musical precisa saber quem aprova repertório, como novos cânticos entram e que critérios doutrinários e litúrgicos são obrigatórios.',
        'Músicos devem ser formados como servos do culto congregacional, não como artistas convidados para uma apresentação paralela.',
        'O pastor deve ouvir a equipe antes de decisões técnicas e a equipe deve receber correção pastoral quando a questão envolve culto, doutrina ou edificação.',
        'Conflitos de estilo precisam ser tratados também como conflitos de geração, identidade e autoridade; reduzi-los a “tradicional versus contemporâneo” costuma esconder a questão real.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O verbete específico sobre música desenvolve critérios de repertório, teoria musical básica e controvérsias reformadas sobre o canto. Aqui o ponto é poimênico: o pastor precisa formar pessoas responsáveis pela música e construir um processo confiável para que o culto não dependa nem do gosto pastoral nem da autonomia de uma equipe.',
    },

    { tipo: 'secao', titulo: 'Três perguntas unem os três ministérios', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Sociedades internas, Escola Dominical e música parecem áreas muito diferentes. Para a supervisão pastoral, porém, três perguntas servem às três: **o que esta estrutura está formando? quem responde por suas decisões? como sabemos se ela está servindo à igreja inteira?** Se essas respostas forem claras, grande parte da microgestão se torna desnecessária. Se forem obscuras, a liberdade operacional vira fragmentação.',
    },
    {
      tipo: 'definicao',
      termo: 'Supervisão pastoral de ministérios',
      texto:
        'Acompanhamento doutrinário, relacional e institucional pelo qual pastor e concílio asseguram que ministérios e organizações da igreja atuem de acordo com a Escritura, confissão, governo e prioridades comuns, ao mesmo tempo em que reconhecem e desenvolvem a competência dos membros responsáveis pela execução concreta.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Escolha uma das três áreas e faça uma reunião de alinhamento que não seja convocada por crise. Pergunte ao líder qual é a finalidade do trabalho, quais decisões ele entende poder tomar sozinho, quais precisam de aprovação, como novos líderes são preparados, quais recursos utiliza e como recebe feedback. Compare as respostas com o que o conselho imagina. Diferenças encontradas antes do conflito são oportunidade de formação; encontradas depois viram disputa de autoridade. O objetivo pastoral não é inserir-se em cada detalhe, mas garantir que ninguém precise adivinhar onde termina iniciativa legítima e começa responsabilidade eclesiástica. Uma igreja integrada não é a que possui menos ministérios, e sim a que consegue fazer muitos ministérios servirem ao mesmo corpo.',
    },
  ],
  fontes: [
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
      nota: 'Fonte normativa para competências dos concílios, organização e responsabilidades eclesiásticas na IPB, necessária para situar sociedades e supervisão pastoral.',
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
      nota: 'Material catequético oficial em português e referência concreta para a dimensão formativa da igreja e da Escola Dominical.',
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
      nota: 'Os capítulos sobre igreja, culto e concílios sustentam a supervisão doutrinária e a integração entre ensino, adoração e governo.',
    },
    {
      id: 'watts-hinos',
      autor: 'Isaac Watts',
      ano: '1707',
      titulo: 'Hymns and Spiritual Songs, in Three Books',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/hymnsspiritusupp00watt',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte primária para história do canto congregacional e para a reflexão sobre conteúdo teológico de hinos, já empregada no verbete específico de música.',
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
      nota: 'O Livro IV fornece a moldura reformada de igreja, ministério, ensino e ordem necessária para tratar estruturas internas como instrumentos do corpo e não entidades paralelas.',
    },
  ],
};