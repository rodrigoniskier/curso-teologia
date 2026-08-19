import type { Verbete } from '../../tipos';

export const revelacao: Verbete = {
  id: 'ts01-revelacao',
  disciplina: 'TS01',
  unidade: 3,
  titulo: 'A Revelação Geral e a Revelação Especial',
  subtitulo: 'Como o Deus que não pode ser alcançado se deu a conhecer',
  objetivo:
    'Ao final, você saberá distinguir os dois modos da revelação divina, entender por que a revelação geral é suficiente para condenar mas insuficiente para salvar, e reconhecer o que está em jogo quando essa distinção é apagada.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-prolegomenos', 'ts01-inspiracao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Se Deus não pode ser alcançado de baixo para cima, resta apenas uma possibilidade: que Ele desça. A palavra "revelação" traduz o grego apokalypsis — remover o véu. O termo já contém a confissão de que havia um véu, e de que não fomos nós que o removemos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Mas a Escritura não descreve um único ato de desvelamento. Descreve dois modos distintos, com alcances distintos, e a saúde de uma teologia depende em boa medida de não confundi-los.',
    },
    { tipo: 'secao', titulo: 'O primeiro modo: a revelação geral', nivel: 2 },
    {
      tipo: 'passagem',
      referencia: 'Salmos 19.1-2',
      texto:
        'Os céus proclamam a glória de Deus e o firmamento anuncia as obras das suas mãos. Um dia discursa a outro dia, e uma noite revela conhecimento a outra noite.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A criação não é muda. O salmista usa vocabulário de fala — proclamar, anunciar, discursar — para descrever aquilo que não tem boca. Há um discurso incessante, universal, dirigido a todos os homens em todos os lugares, sem tradutor e sem intervalo. É a isso que se chama revelação geral: geral quanto ao público (todos), quanto ao meio (a criação, a providência e a consciência) e quanto ao conteúdo (o poder eterno e a divindade de Deus).',
    },
    {
      tipo: 'passagem',
      referencia: 'Romanos 1.19-20',
      texto:
        'Porquanto o que de Deus se pode conhecer é manifesto entre eles, porque Deus lhes manifestou. Porque os atributos invisíveis de Deus, assim o seu eterno poder, como também a sua própria divindade, claramente se reconhecem, desde o princípio do mundo, sendo percebidos por meio das coisas que foram criadas. Tais homens são, por isso, indesculpáveis.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo faz três afirmações em sequência rápida, e a terceira é a mais grave. Primeiro: há conhecimento de Deus disponível. Segundo: esse conhecimento é claro, não obscuro. Terceiro — e aqui está o ponto — a consequência não é a salvação de ninguém, mas a remoção de qualquer desculpa de todos. A revelação geral funciona, e o seu resultado é a inescusabilidade.',
    },
    {
      tipo: 'termo',
      termo: 'Sensus divinitatis',
      texto:
        'O "senso de divindade" que Calvino identifica em toda consciência humana: uma percepção inata de que existe um Deus a quem se deve prestar contas. Não é conhecimento salvífico, e o pecador trabalha ativamente para sufocá-lo — mas nunca o extingue por completo. É o que torna a idolatria universal: o homem não consegue não adorar.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas, I.5.1',
      fonteId: 'calvino-institutas',
      texto:
        'Não se pode abrir os olhos sem que se seja compelido a contemplá-lo. [...] Sobre suas obras Ele gravou marcas inconfundíveis de sua glória.',
    },
    { tipo: 'secao', titulo: 'Por que isso não basta', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Se a revelação geral é clara e universal, por que precisamos de mais? A resposta não está em um defeito da revelação, mas em um defeito do receptor. O problema nunca foi a falta de luz; foi a cegueira.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo continua o argumento de Romanos 1 descrevendo exatamente esse mecanismo: os homens "detêm a verdade pela injustiça", "mudaram a verdade de Deus em mentira" e adoraram a criatura em lugar do Criador. O dado da revelação chega íntegro e é corrompido no processamento. E há um limite adicional, mais fundamental: mesmo se fosse recebida com perfeita honestidade, a criação não anuncia o evangelho. Os céus proclamam a glória de Deus; não proclamam a encarnação, a cruz e a ressurreição. Da natureza se aprende que Deus é poderoso e que somos devedores — não se aprende como a dívida foi paga.',
    },
    {
      tipo: 'controversia',
      titulo: 'A revelação geral pode salvar?',
      posicoes: [
        {
          escola: 'Teologia natural racionalista (deísmo, Iluminismo)',
          sintese:
            'A razão, aplicada à natureza, é capaz de estabelecer uma religião suficiente. A revelação especial seria, no máximo, uma confirmação pedagógica do que a razão já alcança.',
        },
        {
          escola: 'Inclusivismo / cristianismo anônimo (Rahner e afins)',
          sintese:
            'A graça opera de modo salvífico dentro das outras religiões; quem responde sinceramente à luz que possui é salvo por Cristo sem conhecê-lo.',
        },
        {
          escola: 'Posição reformada confessional',
          sintese:
            'A revelação geral é real, clara e suficiente para tornar o homem indesculpável — mas insuficiente para salvar, porque não contém Cristo e porque o pecador a suprime. A fé salvífica vem pelo ouvir da Palavra pregada (Rm 10.14-17).',
        },
      ],
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, §1',
      fonteId: 'cfw-ipib',
      texto:
        'Embora a luz da natureza e as obras da criação e da providência de tal modo manifestem a bondade, a sabedoria e o poder de Deus que os homens ficam inescusáveis, contudo não são suficientes para dar aquele conhecimento de Deus e de sua vontade necessário à salvação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Note a estrutura da frase confessional: uma concessão generosa ("de tal modo manifestem") seguida de uma negação precisa ("contudo não são suficientes"). A Confissão não deprecia a revelação geral para exaltar a especial. Afirma as duas em seus lugares próprios. É esse equilíbrio que se perde nos dois extremos.',
    },
    { tipo: 'secao', titulo: 'O segundo modo: a revelação especial', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A revelação especial é o falar de Deus dirigido a um povo determinado, em uma história determinada, culminando em uma Pessoa. É particular quanto ao público, verbal e histórica quanto ao meio, e redentiva quanto ao conteúdo: seu assunto é a salvação.',
    },
    {
      tipo: 'lista',
      itens: [
        'Teofanias e aparições — Deus se torna visível em forma acomodada (Gn 18; Êx 3).',
        'Palavra profética — "assim diz o Senhor": a fala direta comunicada por porta-vozes autorizados.',
        'Atos redentivos na história — o Êxodo, o exílio, o retorno: Deus se revela agindo, e a palavra interpreta o ato.',
        'A encarnação do Filho — a revelação em pessoa, não apenas em palavras.',
        'A Escritura — o depósito escrito, permanente e infalível de tudo o que precede.',
      ],
    },
    {
      tipo: 'passagem',
      referencia: 'Hebreus 1.1-2',
      texto:
        'Havendo Deus, outrora, falado muitas vezes e de muitas maneiras aos pais, pelos profetas, nestes últimos dias, nos falou pelo Filho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O autor de Hebreus organiza toda a história da revelação em dois tempos e assinala uma progressão. Não uma correção — o que foi dito aos pais era verdadeiro — mas uma consumação. A revelação é progressiva: cresce em clareza e plenitude até Cristo, em quem se completa. Depois d\'Ele não há um terceiro tempo à espera. Esta é a base do princípio da suficiência: o cânon está fechado porque a revelação chegou ao seu termo.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Revelação',
      texto:
        'É o ato gracioso e livre pelo qual Deus, incognoscível por iniciativa da criatura, se dá a conhecer: universalmente, através da criação, da providência e da consciência, comunicando seu eterno poder e divindade de modo suficiente para tornar todo homem indesculpável; e particularmente, através da palavra profética, dos atos redentivos, da encarnação do Filho e da Escritura Sagrada, comunicando o conhecimento de sua vontade salvadora — conhecimento que a revelação geral não contém e que o pecador jamais alcançaria por si.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Esta distinção tem consequências imediatas no ministério. Ela funda o dever missionário: se a natureza bastasse, a pregação seria um luxo; como não basta, "como crerão naquele de quem nada ouviram?". E funda a apologética: o interlocutor mais hostil não é uma página em branco — ele já sabe, e está gastando energia para não saber. O evangelista não introduz um Deus desconhecido; ele nomeia Aquele que a consciência já denuncia. Isso muda o tom da conversa: não vamos convencer alguém de que há um Deus, mas anunciar quem Ele é e o que fez em Cristo.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 3-6',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Os capítulos 3 a 5 do Livro I são o locus clássico do sensus divinitatis e da insuficiência da revelação natural.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. I — Da Escritura Sagrada',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O §1 é a formulação confessional exata da relação entre revelação geral e especial.',
    },
    {
      id: 'cfw-ipcambe',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — Capítulo I, Da Escritura Sagrada',
      publicacao: 'Igreja Presbiteriana de Cambé (IPB)',
      url: 'https://ipcambe.ipb.org.br/boletim/confissao-de-fe-de-westminster',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Versão hospedada em domínio da própria IPB.',
    },
    {
      id: 'bavinck-dogmatics',
      autor: 'Herman Bavinck',
      ano: '1895',
      titulo: 'Reformed Dogmatics, vol. 1: Prolegomena — parte sobre revelação',
      publicacao: 'Monergism',
      url: 'https://www.monergism.com/reformed-dogmatics-ebook',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Bavinck é quem melhor articula a unidade orgânica entre revelação geral e especial, evitando tanto o dualismo quanto a fusão.',
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
    },
  ],
};
