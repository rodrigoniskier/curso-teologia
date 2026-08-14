import type { Verbete } from '../../tipos';

export const ordoSalutis: Verbete = {
  id: 'ts04-ordo-salutis',
  disciplina: 'TS04',
  unidade: 4,
  titulo: 'A Ordo Salutis',
  subtitulo: 'A ordem da salvação, e por que a posição da fé decide tudo',
  objetivo:
    'Ao final, você saberá o que a ordo salutis ordena e o que não ordena, comparar as sequências reformada, luterana e católica romana identificando exatamente onde divergem, e entender por que a regeneração preceder a fé é a consequência inevitável da depravação total.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts03-expiacao', 'ts01-decretos', 'ts02-imagem-de-deus'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A expiação foi consumada há dois mil anos. A pergunta seguinte é como aquilo chega até uma pessoa concreta, hoje. A soteriologia chama esse trajeto de aplicação da redenção, e a tentativa de ordená-lo recebeu o nome latino de ordo salutis — a ordem da salvação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convém dizer de saída o que essa ordem não é, porque quase todo mal-entendido nasce daí. Não é uma cronologia: ninguém vive a regeneração numa terça e a justificação na quinta seguinte. Na experiência, quase tudo acontece junto. A ordem é lógica — descreve o que depende de quê.',
    },
    { tipo: 'secao', titulo: 'Por que a ordem lógica importa', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Uma comparação ajuda. Acender a luz e o quarto clarear são simultâneos no relógio, mas não são reversíveis: a luz não acende porque o quarto clareou. Há dependência sem intervalo. É exatamente essa a espécie de ordem que a ordo salutis descreve, e é por isso que discutir sequência não é pedantismo — a sequência revela o que causa o quê, e portanto de quem é a salvação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta que decide tudo é uma só: a fé produz a regeneração, ou a regeneração produz a fé? Toda divergência entre as tradições se organiza em torno dela.',
    },
    { tipo: 'secao', titulo: 'A sequência reformada', nivel: 2 },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Vocação eficaz — o chamado interno pelo qual o Espírito torna eficaz a Palavra pregada.',
        'Regeneração — a comunicação de vida nova, monergística: obra exclusiva de Deus, na qual o homem é passivo.',
        'Fé e arrependimento — a primeira atividade do regenerado, e a partir daqui o homem age, embora movido pela graça.',
        'Justificação — o ato judicial em que Deus declara justo o pecador, imputando-lhe a justiça de Cristo.',
        'Adoção — a recepção na família de Deus, com todos os direitos de filho.',
        'Santificação — a transformação progressiva, agora sinergística: Deus opera e o crente coopera.',
        'Perseverança — a preservação até o fim, garantida por Deus.',
        'Glorificação — a consumação, na ressurreição.',
      ],
    },
    {
      tipo: 'termo',
      termo: 'Monergismo e sinergismo',
      texto:
        'Monergismo: uma só força age. Sinergismo: duas forças cooperam. A tradição reformada é monergística na regeneração — o morto não coopera com quem o ressuscita — e sinergística na santificação, onde Paulo manda "desenvolver a salvação" precisamente porque "Deus é quem efetua" (Fp 2.12-13). Confundir os dois campos produz ou passividade quietista ou legalismo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto polêmico é a posição 2 antes da 3. A razão não é uma preferência de escola: é a consequência inescapável da antropologia. Se o pecador está morto em delitos (Ef 2.1), a fé não pode ser a condição da vida nova, porque cadáveres não cumprem condições. É preciso viver primeiro para então crer.',
    },
    {
      tipo: 'passagem',
      referencia: 'João 6.44',
      texto:
        'Ninguém pode vir a mim se o Pai, que me enviou, não o trouxer; e eu o ressuscitarei no último dia.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A frase tem duas metades igualmente firmes. "Ninguém pode" nega a capacidade natural. "Se o Pai não o trouxer" identifica a única causa suficiente. Não se diz que o Pai ajuda quem se esforça; diz-se que sem a ação do Pai o vir é impossível. E note a promessa que se segue: todos os que são trazidos são também ressuscitados. A corrente não perde elos — é o que Paulo formaliza em Romanos 8.30.',
    },
    { tipo: 'secao', titulo: 'As três sequências comparadas', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'Onde as tradições divergem',
      posicoes: [
        {
          escola: 'Reformada',
          sintese:
            'Vocação eficaz → regeneração → fé → justificação → santificação. A regeneração precede a fé, e a justificação é um ato declaratório único e completo, distinto da santificação. A fé é instrumento, não causa: ela recebe a justiça de Cristo, não a produz.',
        },
        {
          escola: 'Luterana',
          sintese:
            'Muito próxima, e concorda no essencial: sola fide, justificação forense, imputação. Distingue-se sobretudo por ligar a regeneração mais estreitamente aos meios da graça — em especial ao batismo — e por resistir a ordenar rigidamente os passos, temendo que a análise transforme a salvação em processo psicológico observável.',
        },
        {
          escola: 'Católica Romana',
          sintese:
            'A justificação não é declaração mas transformação: a graça é infundida no batismo e o justo torna-se progressivamente justo, podendo perder e recuperar a justificação. Aqui justificação e santificação se fundem num só processo, e é isso — mais do que qualquer disputa sobre méritos — que separa Roma da Reforma.',
        },
        {
          escola: 'Arminiana',
          sintese:
            'A graça preveniente é dada a todos, restaurando a capacidade de escolher; a fé precede a regeneração e é condição dela. Preserva uma noção intuitiva de responsabilidade, mas devolve ao homem a palavra decisiva — e torna a perseverança condicional, já que o que a vontade concedeu ela pode retirar.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A divergência com Roma merece precisão, porque costuma ser caricaturada. Roma não ensina que se compra a salvação: ensina que a graça é real, necessária e gratuita em seu início. A diferença está na natureza da justificação — se ela é um veredito sobre o pecador, pronunciado de uma vez com base numa justiça alheia, ou um processo de tornar-se justo pela graça infundida. No primeiro caso a certeza é possível; no segundo, não pode ser, e o Concílio de Trento coerentemente a condenou como presunção.',
    },
    { tipo: 'secao', titulo: 'A união com Cristo, que sustenta o conjunto', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Há um risco na ordo salutis: apresentá-la como uma esteira de benefícios distribuídos em série, como se Deus entregasse pacotes sucessivos. A correção veio de Calvino, e é a chave de toda a sua soteriologia.',
    },
    {
      tipo: 'citacao',
      autor: 'João Calvino',
      obra: 'Institutas, III.1.1',
      fonteId: 'calvino-institutas',
      texto:
        'Enquanto Cristo permanecer fora de nós e estivermos separados dele, tudo quanto padeceu e fez pela salvação do gênero humano nos é inútil e sem valor algum.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os benefícios não são coisas que Deus dá separadamente de Cristo: são o que se recebe por estar nele. A união mística é anterior a todos eles, e todos decorrem dela simultaneamente — justificação, adoção e santificação chegam juntas, porque chega a Pessoa que as contém. Isso desarma de uma vez a objeção antinomista: não é possível receber a justificação e recusar a santificação, porque ninguém pode receber meio Cristo.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Ordo salutis',
      texto:
        'É a ordem lógica — não cronológica — em que os benefícios da redenção obtida por Cristo são aplicados ao pecador pelo Espírito Santo, e que exibe a dependência causal entre eles: a vocação eficaz produz a regeneração, que é obra monergística de Deus no homem inteiramente passivo; da vida nova assim comunicada procedem a fé e o arrependimento, os primeiros atos do regenerado; pela fé, que é instrumento e não causa, o pecador é justificado — declarado justo de uma vez por todas mediante a imputação da justiça de Cristo — e adotado como filho; e do mesmo Cristo a quem está unido recebe a santificação progressiva, na qual coopera, a perseverança e, enfim, a glorificação; todos esses benefícios decorrendo simultaneamente da união com Cristo, fora da qual nenhum deles existe.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Esta doutrina resolve um problema muito comum na vida cristã: a pessoa que crê, mas duvida se crê o bastante. Ela examina a própria fé em busca da qualidade que a tornaria válida — e quanto mais examina, menos encontra, porque a fé genuína raramente se sente robusta. A ordo salutis mostra onde está o erro. A fé não salva por ser forte; salva por estar ligada a Cristo, como a mão que recebe não vale pelo vigor do aperto, mas pelo que segura. Uma mão trêmula agarrada a uma corda está tão presa quanto uma firme. E mais: se a sua fé é fruto da regeneração e não a causa dela, então ela não é a sua contribuição para a salvação — é o primeiro sinal de que Deus já agiu. Você não creu para ser vivificado; creu porque foi. Isso muda o lugar de onde a pessoa olha para si mesma: não do banco dos réus tentando provar sinceridade, mas de dentro de uma obra que começou antes dela e não depende dela para se completar.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro III, caps. 1-3, 11',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'III.1 abre com a união com Cristo como pressuposto de todos os benefícios; III.11 é o tratado sobre justificação pela fé. Domínio público.',
    },
    {
      id: 'hodge-st3-pdf',
      autor: 'Charles Hodge',
      ano: '1873',
      titulo: 'Systematic Theology, vol. III — Soteriologia',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/h/hodge/theology3/cache/theology3.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O volume III cobre integralmente o programa de TS04: vocação, regeneração, fé, justificação, santificação e perseverança, com a comparação entre as posições romana, luterana e reformada. Domínio público.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus XV-XVI, De vocatione et fide',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A discussão escolástica da prioridade da regeneração sobre a fé e da fé como instrumento. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, caps. X-XVIII',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Os capítulos X a XVIII percorrem a ordo salutis na sequência reformada: vocação eficaz, justificação, adoção, santificação, fé salvadora, arrependimento, boas obras e perseverança.',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a aplicação da salvação',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Bavinck é particularmente cuidadoso ao advertir contra transformar a ordo salutis em cronologia psicológica.',
    },
  ],
};
