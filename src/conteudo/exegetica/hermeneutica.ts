import type { Verbete } from '../../tipos';

export const hermeneutica: Verbete = {
  id: 'te12-hermeneutica',
  disciplina: 'TE12',
  unidade: 1,
  titulo: 'Hermenêutica Reformada',
  subtitulo: 'Por que a Escritura interpreta a Escritura',
  objetivo:
    'Ao final, você saberá por que a Reforma rompeu com o método dos quatro sentidos, o que significa o sensus literalis, e como a analogia da fé protege a interpretação sem sufocá-la.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-revelacao', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Todo texto que sobrevive ao seu autor gera uma pergunta prática: quem decide o que ele significa? Para a maioria dos textos, a pergunta é acadêmica. Para a Escritura, é uma pergunta sobre autoridade — e foi, no século XVI, uma pergunta sobre poder.',
    },
    { tipo: 'secao', titulo: 'O problema herdado: quatro sentidos e um intérprete oficial', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A exegese medieval trabalhava com a Quadriga, o método dos quatro sentidos. Um mesmo texto era lido em quatro camadas simultâneas, resumidas em um dístico mnemônico que gerações de estudantes decoraram: a letra ensina o que aconteceu; a alegoria, o que crer; a moral, o que fazer; a anagogia, para onde tender.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Sentido literal — histórico: Jerusalém é a cidade da Judeia.',
        'Sentido alegórico — doutrinário: Jerusalém é a Igreja.',
        'Sentido tropológico — moral: Jerusalém é a alma do crente.',
        'Sentido anagógico — escatológico: Jerusalém é a pátria celestial.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O método não era absurdo, e produziu leituras devocionais de real beleza. Mas continha uma falha estrutural: uma vez admitido que o texto significa outra coisa além do que diz, não há critério interno para limitar o que essa outra coisa pode ser. A alegoria não tem freio próprio. O freio tinha de vir de fora — do magistério, a autoridade eclesiástica que decidia qual alegoria era legítima. A consequência é que a Escritura, na prática, deixava de julgar a Igreja e passava a ser julgada por ela.',
    },
    { tipo: 'secao', titulo: 'A virada da Reforma: o sentido literal é o sentido', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta dos reformadores não foi acrescentar um quinto sentido, mas reduzir a um. Lutero, e depois Calvino com maior consistência metodológica, sustentaram que a Escritura tem um sentido — o que o autor pretendeu comunicar naquele texto — e que todos os demais usos legítimos derivam dele, em vez de concorrerem com ele.',
    },
    {
      tipo: 'termo',
      termo: 'Sensus literalis',
      texto:
        'O sentido literal não é literalismo. Não significa ler "as árvores bateram palmas" como botânica. Significa o sentido que as palavras têm segundo o gênero, o contexto e a intenção do autor — de modo que a metáfora lida como metáfora e a poesia lida como poesia são leituras literais, no sentido próprio do termo.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Comentário à Epístola aos Romanos, epístola dedicatória (1540)',
      fonteId: 'calvino-romanos',
      texto:
        'Sendo quase o único ofício do intérprete desvendar a mente do escritor que se propôs expor, ele erra o alvo, ou ao menos se afasta de seus limites, na medida em que conduz seus leitores para longe do sentido do autor.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esta frase é a carta de fundação da exegese protestante. O ofício do intérprete é descrito de forma quase policial: ele tem um alvo, tem limites, e pode errar. A tarefa não é criativa, é receptiva. E a virtude que ela exige, Calvino nomeia em seguida: perspicua brevitas — clareza breve. O comentarista que se exibe atrapalha.',
    },
    { tipo: 'secao', titulo: 'Os dois princípios que sustentam o método', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Reduzir a interpretação ao sentido do autor levanta imediatamente uma objeção: e quando o texto é obscuro? Se não há magistério para decidir, quem arbitra? A resposta reformada tem duas partes, e ambas estão na Confissão de Fé de Westminster.',
    },
    {
      tipo: 'termo',
      termo: 'Scriptura sui ipsius interpres',
      texto:
        'A Escritura é seu próprio intérprete. A regra infalível de interpretação da Escritura é a própria Escritura: quando há dúvida sobre o sentido de um texto, ele deve ser buscado em outros lugares que falem mais claramente. O obscuro cede ao claro, e não o contrário.',
    },
    {
      tipo: 'termo',
      termo: 'Analogia fidei',
      texto:
        'A analogia da fé: nenhuma interpretação de uma passagem pode contradizer o conjunto do ensino bíblico. Como a Escritura tem um só Autor divino, ela não se contradiz; logo, uma leitura que produz contradição está errada por isso mesmo.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, §9',
      fonteId: 'cfw-ipib',
      texto:
        'A regra infalível de interpretação da Escritura é a própria Escritura; e assim, quando há questão sobre o verdadeiro e pleno sentido de qualquer texto (o qual não é múltiplo, mas único), este deve ser investigado por outros textos que falem mais claramente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O parêntese é o coração do parágrafo, e é uma rejeição direta da Quadriga: "o qual não é múltiplo, mas único". A Confissão não está apenas propondo um método melhor; está negando a premissa do método anterior.',
    },
    {
      tipo: 'controversia',
      titulo: 'A analogia da fé é um círculo vicioso?',
      posicoes: [
        {
          escola: 'Objeção crítica',
          sintese:
            'Usar a doutrina para interpretar o texto do qual a doutrina foi extraída é raciocínio circular: o sistema se torna imune à correção pelo próprio texto.',
        },
        {
          escola: 'Resposta reformada',
          sintese:
            'O círculo é hermenêutico, não vicioso: toda leitura parte de uma pré-compreensão. A diferença é que a analogia da fé é declarada, sujeita a revisão pela exegese e subordinada à Escritura — que a Confissão coloca acima de concílios e confissões, inclusive dela mesma (CFW I.10).',
        },
      ],
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Hermenêutica Reformada',
      texto:
        'É a disciplina que busca o sentido único e literal de cada texto da Escritura — isto é, aquele que o autor humano, movido pelo Espírito Santo, pretendeu comunicar segundo a gramática, o gênero e o contexto histórico — reconhecendo que, por ser a Escritura obra de um só Autor divino, ela é seu próprio intérprete, de modo que as passagens obscuras se esclarecem pelas claras e nenhuma leitura pode ser admitida se contradiz o conjunto da fé nela revelada.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma consequência democrática nisso que a Reforma percebeu de imediato: se o sentido é único e acessível pela gramática e pelo contexto, então o crente comum, com um bom texto e diligência, pode ler a Bíblia e entendê-la nas coisas necessárias à salvação. É esta doutrina que põe a Bíblia na mão do fiel. Ela não elimina o pastor nem o erudito — a Confissão reconhece que nem tudo é igualmente claro — mas muda a função deles: de guardiões do sentido, passam a servos que ajudam o povo a ver por si mesmo o que já está no texto. O bom expositor não é aquele que traz da Escritura o que ninguém veria; é aquele depois de quem o ouvinte diz: "está mesmo aqui, e eu não tinha notado".',
    },
  ],
  fontes: [
    {
      id: 'calvino-romanos',
      autor: 'João Calvino',
      ano: '1540',
      titulo: 'Commentary on Romans — epístola dedicatória a Simon Grynaeus',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/calcom38.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A dedicatória contém a declaração programática de Calvino sobre o ofício do intérprete e a perspicua brevitas.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I, §§ 6-10',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Os §§ 7 (perspicuidade), 9 (a Escritura como sua própria intérprete) e 10 (a Escritura como juiz supremo) são a base confessional deste verbete.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'monergismo.com',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Reúne traduções de artigos sobre método exegético reformado; ponto de partida para leitura complementar em português.',
    },
  ],
};
