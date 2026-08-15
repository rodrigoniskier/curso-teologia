import type { Verbete } from '../../tipos';

export const filosofia: Verbete = {
  id: 'cg08-filosofia',
  disciplina: 'CG08',
  unidade: 9,
  titulo: 'Filosofia e Fé Cristã',
  subtitulo: 'Atenas e Jerusalém: por que o seminarista não escapa da filosofia',
  objetivo:
    'Ao final, você saberá o que cada ramo da filosofia pergunta e por que a teologia já responde a todos eles, reconhecerá as três posturas históricas do cristianismo diante da filosofia, e entenderá o que está em jogo na divisão entre apologética clássica e pressuposicional.',
  atualizadoEm: '2026-08-15',
  verMais: ['ts12-cosmovisao', 'ts01-prolegomenos', 'ts01-revelacao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Filosofia costuma entrar na grade do seminário sob suspeita. O aluno que veio estudar as Escrituras não entende por que precisa ler gregos pagãos, e os dois motivos que lhe oferecem raramente convencem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O primeiro é o utilitário: estuda-se filosofia para refutar filósofos. Isso reduz a disciplina a uma lista de adversários e produz gente capaz de repetir a etiqueta de um sistema sem nunca ter entendido o problema que ele tentava resolver. O segundo é o decorativo: estuda-se para ter cultura geral, o que é honesto e insuficiente para justificar um semestre.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A razão verdadeira é outra e mais incômoda: **você já tem uma filosofia**. Toda pessoa opera com convicções sobre o que existe, sobre como se conhece algo e sobre o que torna uma ação boa. A única pergunta em aberto é se essas convicções foram examinadas ou se foram absorvidas sem exame — e convicções não examinadas costumam vir da cultura, não da Escritura.',
    },

    { tipo: 'secao', titulo: 'O que cada ramo pergunta', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Filosofia não é um conjunto de doutrinas, e sim uma disciplina: a de fazer as perguntas mais básicas possíveis e exigir razões para cada resposta. Suas divisões clássicas são divisões de perguntas.',
    },
    {
      tipo: 'lista',
      itens: [
        'Metafísica — o que existe, e o que significa existir? Trata de substância, causa, tempo, identidade, possibilidade e necessidade.',
        'Epistemologia — o que é conhecer, e o que justifica uma crença? Trata de evidência, autoridade, testemunho, certeza e ceticismo.',
        'Ética — o que se deve fazer, e o que torna uma ação boa? É a matéria de TS10, aqui vista pelo lado das razões últimas.',
        'Estética — o que é a beleza, e ela é propriedade do objeto ou reação do sujeito?',
        'Lógica — o que se segue de quê? Não é opinião sobre o mundo: é a gramática de qualquer argumento, inclusive teológico.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Agora observe o que acontece quando um seminarista abre a primeira página da teologia sistemática. "Deus existe" é uma afirmação **metafísica**. "A Escritura é a fonte última de conhecimento em matéria de fé" é uma tese **epistemológica**. "Deus é bom, e o bem se define por seu caráter" é **metaética**. A teologia não escolhe entrar nesses terrenos: ela já está neles desde a primeira frase.',
    },
    {
      tipo: 'termo',
      termo: 'Filosofia do genitivo',
      texto:
        'A expressão designa os ramos formados pela preposição "de": filosofia da ciência, da religião, da linguagem, do direito, da história. Não são disciplinas paralelas às ciências correspondentes — são o exame de seus pressupostos. A filosofia da ciência não faz experimentos; pergunta o que torna um experimento uma prova. A filosofia da religião não é teologia; pergunta o que uma afirmação religiosa está afirmando e como se poderia avaliá-la.',
    },

    { tipo: 'secao', titulo: 'Três posturas, e uma frase famosa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A relação entre fé e razão é discutida desde o início, e a formulação mais citada é de Tertuliano, no fim do século II: "que tem Atenas a ver com Jerusalém?". A frase é usada hoje como bandeira de quem rejeita a filosofia — e vale registrar que o próprio Tertuliano era retoricamente treinado e argumentava com categorias filosóficas ao dizer isso. A pergunta dele não era um convite ao anti-intelectualismo, mas uma advertência contra submeter a revelação a um tribunal externo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Do outro lado, e quase ao mesmo tempo, Justino Mártir sustentou que o Logos que se encarnou em Cristo é o mesmo que espalhou sementes de verdade entre os gregos — donde a expressão *logos spermatikos*. Sócrates, nessa leitura, acertou por participação num Logos que ele não conhecia pelo nome.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Agostinho ofereceu a imagem que a tradição adotou: assim como os hebreus levaram do Egito o ouro dos egípcios para usá-lo no tabernáculo, o cristão pode tomar dos filósofos o que houver de verdadeiro, pois toda verdade é de Deus onde quer que se encontre. É apropriação crítica, não adesão: o ouro é levado, o culto egípcio fica para trás.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tomás de Aquino levou a síntese ao ponto máximo com a fórmula de que a graça não destrói a natureza, mas a aperfeiçoa: a razão natural alcança certas verdades sobre Deus — que ele existe, que é uno — e a revelação acrescenta o que a razão não alcançaria, como a Trindade e a encarnação. A teologia natural, com suas provas da existência de Deus, nasce desse arranjo.',
    },

    { tipo: 'secao', titulo: 'Onde os reformados se dividem', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Reforma herdou o problema e não o resolveu de modo unânime. Calvino afirma que há um conhecimento natural de Deus em todo ser humano — a *semen religionis* discutida em TS08 — e, na mesma página, que o pecado o corrompe a ponto de produzir idolatria em vez de adoração. As duas afirmações juntas geraram, no século XX, uma divisão que segue viva.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como o cristão deve usar a razão diante do incrédulo',
      posicoes: [
        {
          escola: 'Apologética clássica ou evidencialista',
          sintese:
            'Há terreno comum: crente e incrédulo compartilham a razão e a experiência, e é possível argumentar da criação para o Criador antes de apelar à Escritura. Apela para Romanos 1, onde a criação torna Deus manifesto, e para o discurso de Paulo no Areópago, que parte de um altar pagão e cita poetas gregos. A dificuldade é explicar como o argumento neutro escapa do fato de que o incrédulo interpreta a evidência com pressupostos que já excluem Deus.',
        },
        {
          escola: 'Apologética pressuposicional',
          sintese:
            'Não há neutralidade: toda argumentação parte de pressupostos últimos, e conceder terreno comum já é conceder que a autoridade da Escritura pode ser julgada por um critério externo. A estratégia é mostrar que o sistema do incrédulo não sustenta nem a ciência que ele pratica — sem Deus, não se justifica a uniformidade da natureza nem a confiabilidade da razão. A dificuldade é o risco de circularidade e de tornar a conversa impossível quando o interlocutor recusa o ponto de partida.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale notar o que as duas escolas concordam, porque a caricatura recíproca costuma esconder isso. Ambas afirmam que o incrédulo conhece Deus e suprime esse conhecimento; ambas negam que a razão humana seja autônoma; ambas usam argumentos. A divergência é sobre o **estatuto** do argumento — se ele estabelece uma conclusão a partir de terreno partilhado ou se expõe a inconsistência interna de quem nega o ponto de partida.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, § 1',
      fonteId: 'cfw-ipib',
      texto:
        'Embora a luz da natureza e as obras da criação e da providência de tal modo manifestem a bondade, a sabedoria e o poder de Deus que os homens ficam inescusáveis, contudo não são suficientes para dar aquele conhecimento de Deus e de sua vontade que é necessário para a salvação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Confissão faz aqui o movimento que orienta a posição reformada e que serve de critério prático: reconhece a luz da natureza como real e suficiente para tornar inescusável, e insuficiente para salvar. Ou seja, a razão natural não é cega nem é bastante. Quem nega a primeira metade cai no fideísmo que não tem o que dizer a ninguém; quem nega a segunda cai no racionalismo que dispensa a revelação.',
    },

    {
      tipo: 'definicao',
      termo: 'Filosofia, na perspectiva cristã',
      texto:
        'É a disciplina que investiga, por argumento e análise, as questões mais fundamentais sobre a realidade, o conhecimento e o valor. Para o teólogo, ela não é opcional nem neutra: opcional não é, porque toda doutrina pressupõe respostas a essas questões; neutra não é, porque nenhum pensamento parte do nada, e o pensamento cristão parte de Deus como pressuposto e não como conclusão. O uso legítimo da filosofia é instrumental e crítico — toma-se dela o que for verdadeiro, submetendo tudo à Escritura, sem lhe conceder o papel de tribunal da revelação.',
    },

    {
      tipo: 'pastoral',
      texto:
        'A aplicação prática é mais imediata do que parece. O pastor que despreza a filosofia não fica livre dela: fica refém da que absorveu sem perceber, e passa a pregar pressupostos da cultura convencido de estar pregando a Escritura. É assim que entram no púlpito, sem resistência, o individualismo que transforma a fé em experiência privada, o pragmatismo que mede a igreja por resultados, e o sentimentalismo que faz da sinceridade critério de verdade. Nenhum deles vem da Bíblia, e todos chegam sem crachá. Estudar filosofia serve, portanto, menos para vencer debates do que para reconhecer a própria bagagem — e um pastor que sabe distinguir o que crê por Escritura do que crê por hábito cultural está mais apto a pregar, e menos apto a confundir uma coisa com a outra diante do rebanho.',
    },
  ],

  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. I, §§ 1 e 6',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 1 estabelece a suficiência da luz da natureza para tornar inescusável e sua insuficiência para salvar — o critério que delimita o uso reformado da razão natural.',
    },
    {
      id: 'sep-faith',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Faith — a análise filosófica da fé e de sua relação com a razão',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/faith/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Enciclopédia revisada por pares, gratuita e mantida por especialistas. Cobre o debate fé e razão com rigor que nenhum manual introdutório alcança, e substitui com vantagem os dicionários de filosofia em catálogo.',
    },
    {
      id: 'sep-filosofia-religiao',
      autor: 'Stanford Encyclopedia of Philosophy',
      titulo: 'Philosophy of Religion',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/philosophy-religion/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota: 'Panorama das avaliações medievais e modernas sobre fé e razão nas tradições judaica, cristã e islâmica — o contexto amplo da controvérsia exposta neste verbete.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 3-6; Livro II, cap. 2',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'I.3-6 trata do conhecimento natural de Deus e de sua corrupção; II.2 discute o que resta da razão humana após a queda — as duas afirmações cuja tensão gerou a divisão apologética moderna. Domínio público.',
    },
    {
      id: 'anf',
      autor: 'Roberts e Donaldson (eds.)',
      ano: '1885',
      titulo: 'Ante-Nicene Fathers, vol. I e III — Justino Mártir e Tertuliano',
      publicacao: 'CCEL',
      url: 'https://ccel.org/ccel/schaff/anf01/anf01.i.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'As Apologias de Justino, com o logos spermatikos, e a Prescrição contra os Hereges de Tertuliano, de onde vem a pergunta sobre Atenas e Jerusalém. As duas posturas em suas fontes originais.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Acervo de textos em português sobre apologética e fé e razão',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Reúne material em português dos dois lados da controvérsia apologética, útil para acompanhar o debate na própria língua antes de ir às fontes.',
    },
  ],
};
