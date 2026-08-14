import type { Verbete } from '../../tipos';

export const homiletica: Verbete = {
  id: 'tp14-homiletica',
  disciplina: 'TP14',
  unidade: 1,
  titulo: 'Pregação Expositiva',
  subtitulo: 'Por que o texto deve governar o sermão, e o que isso exige do pregador',
  objetivo:
    'Ao final, você saberá o que distingue exposição de outros modelos de pregação, como se encontra a ideia central de um texto, o que a pregação cristocêntrica legitimamente afirma e onde ela vira alegoria, e por que a forma do sermão é uma decisão teológica.',
  atualizadoEm: '2026-08-14',
  verMais: ['te12-hermeneutica', 'ts01-inspiracao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Todo pregador enfrenta, semana após semana, a mesma decisão silenciosa: o sermão vai dizer o que o texto diz, ou vai usar o texto para dizer o que o pregador já queria dizer? A pergunta parece retórica, e não é. A segunda opção raramente é escolhida com má-fé; ela se instala aos poucos, por pressão de calendário, de plateia e de convicções que se tornaram urgentes demais para esperar o texto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A homilética reformada não é uma técnica de comunicação: é a doutrina da Escritura aplicada ao púlpito. Se a Bíblia é a Palavra de Deus em suas próprias palavras, então a autoridade do sermão não vem do pregador — vem do quanto o sermão de fato apresenta o que o texto diz.',
    },
    { tipo: 'secao', titulo: 'Quatro modelos, e o que os separa', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'De onde vem o conteúdo do sermão',
      posicoes: [
        {
          escola: 'Sermão temático',
          sintese:
            'Parte de um assunto — ansiedade, casamento, dinheiro — e reúne textos que o iluminam. Tem lugar legítimo, sobretudo em catequese e em séries doutrinárias. O risco é que o tema selecione os textos, e não o contrário: colhem-se versículos que confirmam a tese e ignoram-se os que a complicam.',
        },
        {
          escola: 'Sermão textual',
          sintese:
            'Toma um versículo ou frase curta e extrai dele os pontos do sermão, muitas vezes pela estrutura das palavras. Fica a meio caminho: usa o texto como fonte dos tópicos, mas normalmente sem o contexto que lhes dá sentido.',
        },
        {
          escola: 'Sermão expositivo',
          sintese:
            'Toma uma unidade de pensamento do texto — um parágrafo, uma perícope, às vezes um capítulo — e faz com que a ideia central do texto seja a ideia central do sermão, e a estrutura do texto governe a estrutura da mensagem. É o modelo que a tradição reformada considera normativo.',
        },
        {
          escola: 'Homilia devocional / motivacional',
          sintese:
            'O texto aparece como epígrafe e o restante é reflexão do pregador. Não é um quarto método legítimo: é a ausência de método, e é o que a doutrina da suficiência da Escritura torna injustificável — se o texto basta, por que substituí-lo?',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção decisiva não é o tamanho da passagem nem a quantidade de grego citado. É esta: em uma exposição, alguém que discordasse do pregador poderia verificar a mensagem abrindo a Bíblia — porque o sermão se oferece à conferência do texto. Nos outros modelos, a mensagem depende da autoridade de quem fala.',
    },
    { tipo: 'secao', titulo: 'A ideia central', nivel: 2 },
    {
      tipo: 'termo',
      termo: 'Ideia central do texto',
      texto:
        'A única proposição que resume o que aquela unidade de pensamento afirma. Encontra-se perguntando duas coisas: sobre o que o autor está falando (o assunto) e o que ele afirma sobre isso (o complemento). Um texto tem muitos assuntos possíveis; tem uma só ideia.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A disciplina de formular essa proposição em uma frase é o trabalho mais duro da preparação, e o que mais se pula. Enquanto o pregador não consegue dizer em uma sentença o que o texto afirma, ele ainda não entendeu o texto — e o sermão que sair dali será uma sequência de observações verdadeiras sem direção, que a congregação escuta sem conseguir reter.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ideia central do texto ainda não é a ideia central do sermão. Entre uma e outra há uma segunda pergunta: o que este texto, dito a estes ouvintes, exige? A ideia homilética é a ideia exegética dirigida a alguém. É aqui que a exposição se separa da aula: a aula informa, a pregação interpela.',
    },
    { tipo: 'secao', titulo: 'Pregar Cristo sem alegorizar', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição reformada insiste que todo o cânon aponta para Cristo, e tem base explícita para isso: no caminho de Emaús, "começando por Moisés e discorrendo por todos os profetas, expôs-lhes o que a seu respeito constava em todas as Escrituras" (Lc 24.27). Pregar o Antigo Testamento como se Cristo não existisse é pregá-lo como um rabino o pregaria.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas a mesma insistência produz um abuso conhecido, e é preciso nomeá-lo. Encontrar Cristo no fio escarlate de Raabe, ou na madeira do altar, é retomar por outra porta a alegoria que a Reforma expulsou pela frente. O critério é o mesmo da hermenêutica: a ligação com Cristo precisa estar no texto, e não na engenhosidade de quem prega.',
    },
    {
      tipo: 'lista',
      itens: [
        'Promessa e cumprimento — o texto anuncia algo que Cristo cumpre, e o Novo Testamento frequentemente o declara.',
        'Tipo e antítipo — instituições e figuras que a própria Escritura interpreta cristologicamente: o cordeiro, o sacerdócio, o templo, o êxodo.',
        'História redentiva — o texto pertence a uma narrativa que só se resolve em Cristo, e situá-lo nela já é apontá-lo.',
        'Contraste — o texto mostra o fracasso de um rei, um sacerdote ou um povo, e o contraste evidencia aquele que não falha.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum desses quatro caminhos exige encontrar símbolos ocultos. Todos passam pelo sentido literal do texto — que é exatamente o que a alegoria dispensa.',
    },
    { tipo: 'secao', titulo: 'Forma e entrega', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A forma do sermão não é questão de gosto. Se a estrutura do texto governa a estrutura da mensagem, então um texto narrativo pregado em três pontos alinhados está sendo traído na forma ainda que respeitado no conteúdo — porque a narrativa comunica por tensão e desfecho, não por enumeração.',
    },
    {
      tipo: 'citacao',
      autor: 'Charles Spurgeon',
      obra: 'Lectures to My Students',
      fonteId: 'spurgeon-lectures',
      texto:
        'Sermões devem ter em si muito bom material, muita verdade sólida e muita persuasão fervorosa; mas devem também ser bem entregues, ou não alcançarão o alvo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sobre a entrega, a tradição é mais sóbria do que se supõe. Não recomenda leitura de manuscrito nem improviso: recomenda domínio tal do material que o pregador possa olhar as pessoas enquanto fala. O que se prega é uma mensagem dirigida a alguém, e mensagens dirigidas se dizem olhando para quem as recebe.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Pregação expositiva',
      texto:
        'É a proclamação em que a ideia central de uma unidade de pensamento da Escritura, obtida por exegese honesta do texto em seu contexto, torna-se a ideia central do sermão; em que a estrutura da mensagem decorre da estrutura e do gênero do próprio texto; em que Cristo é anunciado pelas ligações que a Escritura de fato estabelece — promessa e cumprimento, tipo e antítipo, história redentiva e contraste — e não por alegoria imposta; e em que essa verdade é dirigida aos ouvintes concretos como interpelação, e não apenas exposta como informação. Sua autoridade não repousa sobre o pregador, mas sobre a Palavra que ele apresenta — de sorte que o ouvinte pode conferi-la abrindo a própria Bíblia.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma liberdade nesta doutrina que os pregadores costumam descobrir tarde. Quem prega as próprias ideias precisa ser interessante todas as semanas, e essa é uma dívida impagável — a criatividade acaba antes dos domingos. Quem expõe o texto tem uma tarefa mais modesta e infinitamente mais sustentável: entender bem e dizer com clareza. O peso da eficácia sai de cima dele. E há um efeito colateral que só aparece com os anos: a pregação expositiva contínua obriga o pregador a tratar de assuntos que ele jamais escolheria — os textos difíceis, os que condenam o seu próprio pecado predileto, os que contrariam a expectativa da congregação. Um púlpito que segue o texto pastoreia melhor do que um que segue a intuição do pastor, precisamente porque não é ele quem escolhe o que dizer.',
    },
  ],
  fontes: [
    {
      id: 'spurgeon-lectures',
      autor: 'Charles Haddon Spurgeon',
      ano: '1877',
      titulo: 'Lectures to My Students',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/lecturestomystud1877spur',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'As palestras de Spurgeon aos alunos do Pastors\' College. Domínio público, e ainda hoje o tratado mais útil sobre a vida e o preparo do pregador.',
    },
    {
      id: 'spurgeon-segunda',
      autor: 'Charles Haddon Spurgeon',
      ano: '1877',
      titulo: 'Second Series of Lectures to My Students',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/secondseriesofle00spur',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A segunda série trata sobretudo da entrega e da voz — o material da unidade 4 do programa de TP14.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, caps. 1-3',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Calvino trata da pregação como meio ordinário pelo qual Deus edifica a Igreja — o fundamento teológico da homilética reformada.',
    },
    {
      id: 'calvino-romanos',
      autor: 'João Calvino',
      ano: '1540',
      titulo: 'Commentary on Romans — epístola dedicatória',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/calcom38.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A perspicua brevitas — clareza breve — como virtude do expositor, princípio que vale igualmente para o púlpito.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I e cap. XXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O cap. XXI arrola a pregação sã e a audição consciente da Palavra entre as partes do culto ordinário a Deus.',
    },
  ],
};
