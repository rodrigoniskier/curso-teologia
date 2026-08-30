import type { Verbete } from '../../tipos';

export const contextosHistoricoLiterarioCanonico: Verbete = {
  id: 'te16-contextos-historico-literario-canonico',
  disciplina: 'TE16',
  unidade: 2,
  titulo: 'Contextos Histórico, Literário e Canônico: Reconstruir sem Inventar',
  subtitulo:
    'O contexto explica o que o primeiro leitor não precisava que o autor explicasse — mas um contexto imaginado pode controlar o texto com tanta força quanto um versículo isolado',
  objetivo:
    'Ao final, você saberá reconstruir contextos histórico, cultural, político, econômico e religioso com graus de evidência, distinguir contexto do livro, remoto e próximo, usar o contexto canônico sem apagar o horizonte original e testar quando uma informação de fundo realmente muda a interpretação da perícope.',
  atualizadoEm: '2026-08-30',
  verMais: ['te51-cultura-semitica-helenica', 'te13-generos-literarios', 'te16-metodologia-exegetica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma frase pode ser traduzida corretamente, analisada gramaticalmente e ainda assim entendida de modo errado porque o leitor imagina a situação errada. Ao mesmo tempo, uma das formas mais comuns de produzir exegese fantasiosa é começar com uma história de “contexto” tão detalhada que o texto passa a significar aquilo que a reconstrução exige. **Contexto é controle da leitura apenas quando ele próprio é controlado por evidência.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa de TE16 separa contexto histórico, literário e canônico porque eles respondem a perguntas diferentes. O histórico pergunta em que mundo o texto foi produzido e recebido. O literário pergunta como a perícope funciona dentro da obra a que pertence. O canônico pergunta como a mesma revelação participa da Escritura inteira. Confundi-los produz atalhos: usar teologia sistemática para decidir uma palavra antes da sintaxe, ou usar uma hipótese histórica para apagar o que a frase efetivamente diz.',
    },
    { tipo: 'secao', titulo: '1. Contexto histórico é reconstrução, não cenário decorativo' },
    {
      tipo: 'paragrafo',
      texto:
        '“Contexto histórico” não significa acrescentar datas e nomes a uma introdução. Significa recuperar condições sem as quais alguma ação, expressão ou argumento seria entendido de outra maneira. Se saber quem governava não altera nada na perícope, essa informação pode ser verdadeira e ainda assim desnecessária para a exegese. A pergunta útil é: **qual aspecto do mundo compartilhado entre autor e primeiros leitores está pressuposto aqui?**',
    },
    {
      tipo: 'lista',
      itens: [
        '**Cronologia:** quando a situação descrita ou a composição se localiza, e quais eventos anteriores o texto pressupõe?',
        '**Geografia:** onde estão autor, destinatários e lugares mencionados, e que distâncias, rotas ou ambientes importam?',
        '**Instituições:** que estruturas políticas, jurídicas, familiares ou religiosas moldam a situação?',
        '**Atores históricos:** quais grupos, autoridades ou movimentos aparecem explicitamente ou são necessários para compreender a referência?',
        '**Fontes:** o que sabemos vem do próprio texto, de outra fonte antiga, de arqueologia ou de reconstrução moderna?',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A última pergunta é a mais importante. “Paulo escreveu da prisão” pode vir do próprio texto. “Esta prisão foi em Roma” pode ser uma inferência histórica debatida em determinada carta. “A cela tinha exatamente tais condições” pode vir de analogia com outra prisão antiga. Quando o trabalho não distingue níveis, uma hipótese passa a circular como se estivesse escrita no versículo.',
    },
    {
      tipo: 'definicao',
      termo: 'Reconstrução histórica controlada',
      texto:
        'Formulação do cenário histórico mais provável para uma perícope a partir de evidências explicitamente identificadas e hierarquizadas. Distingue o que o texto afirma, o que fontes contemporâneas ou arqueológicas atestam, o que estudos secundários inferem e o que permanece possível ou incerto. Usa o contexto para esclarecer referências reais, não para criar um sentido que a gramática e a literatura não sustentam.',
    },
    { tipo: 'secao', titulo: '2. Contexto cultural: o normal que ninguém precisava explicar' },
    {
      tipo: 'paragrafo',
      texto:
        'Cultura inclui padrões de parentesco, honra, hospitalidade, pureza, trabalho, vestimenta, alimentação, educação, casamento e linguagem social. É especialmente relevante quando uma ação que parece estranha ao leitor moderno era ordinária no mundo antigo, ou quando uma expressão comum carregava convenções compartilhadas pelos primeiros destinatários.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas proximidade cultural não é identidade. Um costume documentado na Babilônia do segundo milênio não pode ser transferido automaticamente para a Judeia do primeiro século; uma prática rabínica registrada séculos depois do Novo Testamento pode preservar tradição antiga, mas sua data precisa entrar na avaliação. O dado cultural tem localização temporal e social.',
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto peso dar ao “background” cultural?',
      posicoes: [
        {
          escola: 'Leitura fortemente contextual',
          sintese:
            'Busca reconstruir densamente o mundo social para recuperar pressupostos invisíveis ao leitor moderno. Sua força é reduzir anacronismo. Seu risco é fazer o contexto externo falar mais que o texto e transformar paralelos culturais em causas ou significados sem evidência direta.',
        },
        {
          escola: 'Prioridade estrita do texto',
          sintese:
            'Usa informação externa apenas quando a passagem a exige claramente. Sua força é preservar verificabilidade e impedir histórias de púlpito. Seu risco é supor que o texto contém explicitamente tudo o que o primeiro leitor sabia e perder referências que dependem de mundo compartilhado.',
        },
        {
          escola: 'Contexto proporcional à função',
          sintese:
            'Começa pelo texto e acrescenta informação histórica quando ela explica uma referência, restrição, imagem ou argumento identificável. Quanto mais decisivo o dado para a interpretação, maior a exigência de proximidade e qualidade da fonte. É o procedimento adotado aqui.',
        },
      ],
    },
    { tipo: 'secao', titulo: '3. Contexto político: poder possui vocabulário próprio' },
    {
      tipo: 'paragrafo',
      texto:
        'Rei, governador, império, cidadão, tributo, senhor, evangelho e paz podem ter dimensões políticas sem que toda ocorrência seja manifesto contra o Estado. A exegese precisa conhecer instituições e títulos para perceber alusões reais, mas deve resistir à tentação de transformar semelhança vocabular em código secreto de resistência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O método é comparar. O título aparece de modo técnico em inscrições ou documentos? O autor o usa em contraste explícito? A narrativa situa a cena diante de uma autoridade? Há consequências políticas dentro do próprio livro? Quanto mais respostas positivas convergem, mais forte a leitura. Uma única coincidência lexical raramente basta.',
    },
    { tipo: 'secao', titulo: '4. Contexto econômico: seguir o dinheiro sem reduzir o texto a economia' },
    {
      tipo: 'paragrafo',
      texto:
        'Moedas, salários, dívida, patronagem, escravidão, terra, comércio e impostos aparecem em narrativas, leis, parábolas e cartas. Conhecer a escala econômica pode transformar a leitura — por exemplo, perceber quando uma dívida é realisticamente pagável ou deliberadamente absurda. Contudo, o dado econômico serve à unidade literária. Uma parábola que menciona dinheiro não se torna automaticamente tratado de economia.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ao estimar valores antigos, prefira relações internas como jornadas de trabalho, proporções e poder de compra aproximado a conversões diretas para reais contemporâneos. Converter um denário em uma cifra moderna exata cria precisão falsa porque sistemas de produção, moeda, consumo e trabalho são incomparáveis em muitos aspectos.',
    },
    { tipo: 'secao', titulo: '5. Contexto religioso: semelhança não significa dependência' },
    {
      tipo: 'paragrafo',
      texto:
        'Cultos, sacrifícios, sinagogas, templo, filosofia, magia, associações e movimentos judaicos formam parte do ambiente bíblico. Fontes externas ajudam a compreender vocabulário e práticas. A cautela metodológica é a mesma: duas religiões podem compartilhar forma sem compartilhar significado, e semelhança não demonstra automaticamente que uma tomou a ideia da outra.',
    },
    {
      tipo: 'lista',
      itens: [
        'Primeiro identifique o fenômeno no texto bíblico.',
        'Depois procure paralelos cronologicamente e geograficamente plausíveis.',
        'Liste semelhanças e diferenças, não apenas semelhanças.',
        'Pergunte se dependência histórica é necessária para explicar o dado ou apenas uma hipótese possível.',
        'Retorne ao texto e verifique se o paralelo esclareceu a passagem ou apenas tornou a nota de rodapé mais interessante.',
      ],
    },
    { tipo: 'secao', titulo: '6. Contexto do livro inteiro: antes do parágrafo, existe uma obra' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma perícope não é documento independente. O mesmo vocábulo pode ganhar cor própria dentro de um livro; uma cena pode resolver tensão criada capítulos antes; uma advertência pode pressupor argumento inteiro. Por isso a pesquisa começa com leitura integral da obra sempre que seu tamanho permite. Introduções e comentários ajudam depois, mas nenhum resumo substitui ler a fonte que está sendo interpretada.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Leia o livro em uma ou poucas sessões.** Marque repetições, transições, personagens, perguntas e mudanças de gênero.',
        '**Escreva uma frase sobre a função de cada grande seção.** Não copie o sumário de um comentário ainda.',
        '**Formule o problema ou propósito do livro.** Depois confronte com introduções acadêmicas.',
        '**Localize a perícope.** Pergunte o que mudaria no argumento se ela fosse removida.',
        '**Observe retomadas posteriores.** Às vezes o sentido funcional aparece quando o autor volta ao tema muitos capítulos depois.',
      ],
    },
    { tipo: 'secao', titulo: '7. Contexto remoto: conexões dentro do mesmo documento' },
    {
      tipo: 'paragrafo',
      texto:
        'Contexto remoto é o material do mesmo livro que não está imediatamente ao lado, mas esclarece termos, temas ou estrutura. Em Romanos, por exemplo, uma palavra de capítulo 8 deve primeiro ser comparada com o modo como Romanos inteiro usa o termo antes de percorrer todas as ocorrências do Novo Testamento. O autor é seu próprio primeiro glossário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Conexão remota precisa ser demonstrada, não apenas percebida. Repetição rara de vocabulário, paralelismo estrutural, pergunta retomada, personagem reaparecendo ou citação comum são evidências melhores que semelhança temática genérica. “Ambos falam de fé” conecta milhares de versos e explica quase nada.',
    },
    { tipo: 'secao', titulo: '8. Contexto próximo: a defesa mais barata contra texto-prova' },
    {
      tipo: 'paragrafo',
      texto:
        'O contexto próximo é a sequência argumentativa ou narrativa imediatamente ao redor. O verbete-base de TE16 já mostrou sua importância com Filipenses 4.13. Aprofundar o método significa perguntar relações, não apenas ler mais linhas: este versículo fornece razão, contraste, resultado, exemplo, exceção, conclusão ou transição em relação ao anterior?',
    },
    {
      tipo: 'lista',
      itens: [
        '**Conectivos:** portanto, pois, mas, porque, para que, se, então.',
        '**Referentes:** quem é “ele”, “estes”, “isso”, “assim”?',
        '**Mudanças de interlocutor:** quem fala e a quem?',
        '**Tempo e lugar:** a cena mudou ou continua?',
        '**Tópico:** uma nova seção começou ou o autor continua respondendo à mesma questão?',
        '**Inclusões e repetições:** palavras do início retornam no final delimitando unidade?',
      ],
    },
    { tipo: 'secao', titulo: '9. Contexto canônico não é licença para pular o sentido histórico' },
    {
      tipo: 'paragrafo',
      texto:
        'Ler canonicamente significa reconhecer que a perícope pertence a uma revelação progressiva e a uma Escritura cujo Autor último é Deus. Isso permite relacionar promessa e cumprimento, tipo e antítipo, temas de aliança e citações posteriores. Mas a ordem permanece importante: o uso canônico posterior ilumina e desenvolve o texto; não autoriza apagar o que o texto fez em seu primeiro horizonte.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quando o Novo Testamento cita o Antigo, há evidência canônica explícita e ela merece análise detalhada. Quando não cita, a conexão precisa ser construída por categorias controladas: vocabulário, estrutura de promessa, instituição, tipologia ou tema que o próprio cânon desenvolve. A frase “isso aponta para Cristo” é conclusão, não método.',
    },
    {
      tipo: 'citacao',
      autor: 'Assembleia de Westminster',
      obra: 'Confissão de Fé de Westminster, I.9',
      fonteId: 'cfw-ipib',
      texto:
        'Westminster estabelece dois controles simultâneos: o sentido da Escritura é um, e a regra infalível para interpretar a Escritura é a própria Escritura. A leitura canônica, portanto, amplia evidência sem multiplicar sentidos independentes.',
    },
    { tipo: 'secao', titulo: '10. Uma matriz simples para decidir se o contexto entra no trabalho' },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Qual afirmação do texto este dado pretende esclarecer?** Se nenhuma, provavelmente é decoração.',
        '**Qual é a fonte do dado?** Texto bíblico, documento antigo, arqueologia, estudo moderno ou tradição popular?',
        '**Quão próximo é o dado?** Mesma época e lugar pesam mais que analogia distante.',
        '**O dado é necessário ou apenas compatível?** Algo pode combinar com a passagem sem ser exigido por ela.',
        '**Que interpretação mudaria se o dado fosse falso?** Se nenhuma, ele não deve ocupar espaço central.',
        '**O próprio texto oferece explicação mais simples?** Background nunca deve ser usado para escapar da gramática evidente.',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Análise contextual exegética',
      texto:
        'Investigação organizada dos horizontes histórico-cultural-político-econômico-religioso, literário e canônico de uma perícope para recuperar pressupostos, relações e desenvolvimentos relevantes ao seu sentido. Trabalha do dado mais próximo e explícito para reconstruções mais amplas, atribui graus de certeza às inferências e só incorpora informação contextual quando ela esclarece uma característica demonstrável do texto.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Pegue uma informação de contexto que você já ouviu muitas vezes em sermões — qualquer costume antigo que “muda tudo”. Tente localizar a fonte mais antiga que a sustenta, sua data e seu lugar. Depois retire essa informação e releia a perícope. Se a interpretação desmorona, a exigência de evidência é alta. Se o texto continua dizendo a mesma coisa, talvez o detalhe seja uma boa ilustração, mas não a chave do sentido. Essa disciplina evita dois vícios de púlpito ao mesmo tempo: ler a Bíblia como se tivesse sido escrita ontem e vender curiosidade histórica como se fosse exegese.',
    },
  ],
  fontes: [
    {
      id: 'terry-hermeneutica',
      autor: 'Milton Spenser Terry',
      ano: '1883',
      titulo: 'Biblical Hermeneutics',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/biblicalhermeneu00terr',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratado clássico para contexto histórico, literário, gêneros e comparação de Escritura com Escritura.',
    },
    {
      id: 'fairbairn-hermeneutica',
      autor: 'Patrick Fairbairn',
      ano: '1858',
      titulo: 'Hermeneutical Manual',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/hermeneuticalma00fair',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Contraponto reformado clássico, especialmente importante para relações entre Antigo e Novo Testamentos.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, capítulo I',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para sentido único, perspicuidade e Escritura interpretando Escritura.',
    },
    {
      id: 'matthew-henry',
      autor: 'Matthew Henry',
      ano: '1710',
      titulo: 'An Exposition of the Old and New Testament',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/expositionofoldn11henr',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Comentário integral em domínio público para exercícios de comparação entre leitura própria, contexto do livro e tradição expositiva.',
    },
  ],
};
