import type { Verbete } from '../../tipos';

export const subscricaoConfessional: Verbete = {
  id: 'ts11-subscricao-confessional',
  disciplina: 'TS11',
  unidade: 1,
  titulo: 'A Subscrição Confessional',
  subtitulo: 'Por que uma igreja que crê na sola Scriptura se obriga a um documento humano',
  objetivo:
    'Ao final, você saberá responder à objeção de que confessar é contradizer a sola Scriptura, distinguir os graus de subscrição e suas consequências práticas, e entender o que a Assembleia de Westminster produziu e por que a IPB o adotou.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-inspiracao', 'th03-reforma', 'te01-canon-at'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A objeção é limpa e merece ser levada a sério: se a Escritura é a única autoridade infalível, por que uma igreja exige que seus ministros subscrevam um documento escrito por homens no século XVII? Ou o documento acrescenta algo à Escritura — e então a sola Scriptura foi abandonada — ou não acrescenta nada, e então é dispensável.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O dilema parece fechado, e desmonta assim que se percebe que ele confunde autoridade com função. Uma confissão não pretende ser fonte de doutrina. Ela é a declaração pública do que uma igreja entende que a Escritura ensina — e a alternativa a ter uma confissão escrita não é não ter nenhuma.',
    },
    { tipo: 'secao', titulo: 'A alternativa não é a ausência de credo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Toda igreja tem uma teologia. A escolha real não é entre ter e não ter, mas entre uma teologia escrita, pública e revisável, e uma teologia implícita, difusa e inacessível ao exame. A frase "não temos credo senão a Bíblia" descreve uma intenção respeitável e uma impossibilidade prática: quem a diz também acredita que a Bíblia ensina certas coisas e não outras, e é isso que se chama credo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A diferença é que, sem documento, essa teologia fica onde ninguém pode conferi-la — na cabeça do pastor, na cultura da denominação, nos costumes que se herdaram sem saber de onde. Uma confissão escrita torna a doutrina auditável: qualquer membro pode ler o que sua igreja professa e cobrá-la disso. Paradoxalmente, é o documento humano que impede o líder humano de decidir sozinho o que a Bíblia diz.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo XXXI, § 3',
      fonteId: 'cfw-ipib',
      texto:
        'Todos os sínodos ou concílios, desde os tempos apostólicos, podem errar, e muitos têm errado; portanto não devem ser feitos regra de fé ou de prática, mas usados como auxílio em ambas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Este parágrafo é notável: a Confissão declara falível a espécie de assembleia que a produziu, e nega a si mesma o estatuto de regra de fé. Um documento que se subordina expressamente à Escritura não pode ser acusado de competir com ela. A norma que julga é a Escritura — norma normans; a confissão é norma normata, norma que foi normada.',
    },
    {
      tipo: 'termo',
      termo: 'Norma normans e norma normata',
      texto:
        'A distinção que resolve o problema. A Escritura é a norma que norma e não é normada por nada. A confissão é norma no seu âmbito — obriga quem a subscreve — mas é ela própria normada pela Escritura, e por isso revisável: se se demonstrar que erra, ela é que deve mudar.',
    },
    { tipo: 'secao', titulo: 'Os graus de subscrição', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Admitido que subscrever faz sentido, resta a pergunta prática: subscrever o quê, exatamente? A resposta divide o presbiterianismo há três séculos, e as consequências são concretas — decidem quem pode ser ordenado.',
    },
    {
      tipo: 'controversia',
      titulo: 'Até onde vai a subscrição',
      posicoes: [
        {
          escola: 'Estrita',
          sintese:
            'O ministro adota cada proposição da Confissão. Garante uniformidade máxima e clareza sobre o que a igreja professa. O custo é a rigidez: pontos periféricos passam a ter o mesmo peso que a justificação, e homens ortodoxos no essencial ficam de fora por divergências secundárias.',
        },
        {
          escola: 'Ao sistema de doutrina',
          sintese:
            'O ministro adota a Confissão como contendo o sistema de doutrina ensinado na Escritura, podendo registrar escrúpulos em pontos que não alterem esse sistema. É a fórmula histórica do presbiterianismo americano desde 1729, e a que a IPB segue. A dificuldade é definir a fronteira: quem decide o que pertence ao sistema?',
        },
        {
          escola: 'Frouxa',
          sintese:
            'A Confissão é documento histórico e testemunho respeitável, sem força vinculante. Preserva liberdade máxima, e na prática dissolve a identidade doutrinária — foi o caminho por onde denominações confessionais se tornaram teologicamente indistintas ao longo do século XX.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A posição intermediária só funciona se a fronteira for administrada com seriedade pelos concílios. Onde os escrúpulos deixam de ser examinados e passam a ser registrados por formalidade, a subscrição ao sistema desliza silenciosamente para a subscrição frouxa — e a igreja descobre tarde demais que não professa mais o que pensava professar.',
    },
    { tipo: 'secao', titulo: 'Westminster: o que a Assembleia produziu', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Convocada pelo Parlamento inglês em 1643, em plena guerra civil, a Assembleia reuniu cerca de 120 teólogos por mais de mil sessões. O objetivo político era alinhar a Igreja da Inglaterra à da Escócia, aliada militar dos parlamentares. O objetivo político fracassou — a Restauração de 1660 devolveu o episcopado —, mas os documentos sobreviveram ao regime que os encomendou e se tornaram o padrão do presbiterianismo mundial.',
    },
    {
      tipo: 'lista',
      itens: [
        'A Confissão de Fé (1646), em 33 capítulos: a exposição sistemática, destinada a ministros e concílios.',
        'O Catecismo Maior: exposição extensa em perguntas e respostas, pensada para instrução pública e pregação catequética.',
        'O Breve Catecismo: 107 perguntas para ensino de crianças e novos membros, cuja primeira resposta — que o fim principal do homem é glorificar a Deus e gozá-lo para sempre — é provavelmente a frase mais conhecida da tradição.',
        'O Diretório de Culto Público e a Forma de Governo Presbiteriano, que regulam a prática.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Igreja Presbiteriana do Brasil adota a Confissão e os dois Catecismos como seus símbolos de fé, com as alterações que o presbiterianismo americano introduziu nos capítulos sobre a relação entre Igreja e Estado — os originais de 1646 pressupunham um magistrado civil encarregado de proteger a religião verdadeira, arranjo incompatível com um Estado laico.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Subscrição confessional',
      texto:
        'É o ato pelo qual o ministro e o oficial declaram publicamente adotar os símbolos de fé de sua igreja como contendo o sistema de doutrina ensinado nas Sagradas Escrituras — não como fonte de revelação, nem como regra de fé ao lado dela, mas como norma derivada e falível, subordinada à Escritura e por ela revisável. Sua função é tornar pública, auditável e estável a doutrina que a igreja professa, protegendo-a tanto da indefinição quanto do arbítrio de quem a governa; e sua legitimidade repousa exatamente em que a confissão reconhece a própria falibilidade e submete-se à Palavra que pretende expor.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Quem estranha a subscrição costuma imaginá-la como uma coleira. Vale inverter a imagem: ela é uma coleira sobretudo no pescoço de quem tem poder. Sem confissão, o membro que discorda do pastor não tem a que apelar senão à interpretação particular de outro homem; com ela, tem um documento público que a própria igreja se obrigou a sustentar, e pode dizer ao seu presbitério que o ensino recebido não corresponde ao que foi professado. A confissão protege o fiel comum do líder carismático, o presbitério do pastor isolado, e a geração seguinte da moda teológica desta. E protege o próprio ministro: ele não precisa reinventar a doutrina cristã sozinho, nem responder pessoalmente por cada questão difícil — pode dizer, com alívio, que ali está o que a sua igreja crê, e que ele não fala em nome próprio.',
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — texto integral em português',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O texto que TS11 expõe capítulo a capítulo. O cap. XXXI, § 3, citado acima, é onde a Confissão declara falíveis os concílios — inclusive o que a redigiu.',
    },
    {
      id: 'cfw-braga',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'A Confissão de Fé de Westminster — edição portuguesa',
      publicacao: 'Igreja Cristã Presbiteriana de Braga',
      url: 'https://www.icpbraga.pt/documentos/cfw',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Cotejar as duas traduções é exercício útil: onde divergem, quase sempre há uma decisão interpretativa por trás.',
    },
    {
      id: 'cfw-ipcambe',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. I',
      publicacao: 'Igreja Presbiteriana de Cambé (IPB)',
      url: 'https://ipcambe.ipb.org.br/boletim/confissao-de-fe-de-westminster',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Versão hospedada em domínio da própria IPB.',
    },
    {
      id: 'schaff-hcc',
      autor: 'Philip Schaff',
      ano: '1888',
      titulo: 'History of the Christian Church — sobre a Assembleia de Westminster',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/schaff/hcc2.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Schaff é também o editor dos Creeds of Christendom, a compilação padrão dos símbolos de fé, e documenta o contexto político da Assembleia. Domínio público.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, cap. 9',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'IV.9 trata da autoridade dos concílios e da sua subordinação à Escritura — o argumento que a Confissão condensaria um século depois.',
    },
  ],
};
