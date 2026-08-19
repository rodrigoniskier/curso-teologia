import type { Verbete } from '../../tipos';

export const gestaoEclesiastica: Verbete = {
  id: 'tp06-gestao-eclesiastica',
  disciplina: 'TP06',
  unidade: 2,
  titulo: 'Gestão Eclesiástica',
  subtitulo:
    'Deixar o tesoureiro sozinho com o dinheiro é chamado de confiança, e é o contrário disso: é deixá-lo sem defesa',
  objetivo:
    'Ao final, você saberá por que Paulo mandou mais de um homem levar a coleta e o que isso estabelece sobre contabilidade eclesiástica, entenderá que a administração não foi importada da empresa, distinguirá imunidade de isenção e o que cada uma exige, saberá o que a igreja precisa manter em ordem sob pena de responsabilidade pessoal dos oficiais, e conhecerá as três posições sobre o quanto o pastor deve administrar.',
  atualizadoEm: '2026-08-19',
  verMais: ['tp12-governo-presbiteriano', 'cg55-terceiro-setor', 'tp13-disciplina-eclesiastica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Há em muitas igrejas um irmão que cuida do dinheiro há anos. Recebe, deposita, paga, anota num caderno próprio, e ninguém confere — não por descuido, mas por convicção: *confiamos nele*. Costuma ser verdade que ele é confiável, e costuma ser verdade também que ninguém mais entende como aquilo funciona.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O problema aparece no dia em que alguém desconfia. Pode ser uma acusação injusta, um boato, uma pergunta mal-intencionada numa assembleia. **E então não há como limpá-lo**, porque não existe registro que outra pessoa possa examinar. O arranjo que se chamava confiança revela-se o que sempre foi: um homem exposto, sem nada entre ele e a suspeita.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo enfrentou exatamente essa questão ao transportar a coleta das igrejas gentílicas para Jerusalém, e a solução que adotou está registrada com a razão explicada.',
    },
    {
      tipo: 'passagem',
      referencia: '2 Coríntios 8.20-21',
      texto:
        'Evitando isto: que alguém nos vitupere por esta abundância, que por nós é ministrada; pois zelamos o que é honesto, não só diante do Senhor, mas também diante dos homens.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Paulo não estava em dúvida sobre a própria integridade, e a igreja também não estava. Ainda assim ele fez questão de que outros homens, escolhidos pelas igrejas, viajassem com o dinheiro. A razão que dá é dupla e a segunda parte é a decisiva: **honesto diante do Senhor, e também diante dos homens.** Não basta que a coisa seja correta; é preciso que seja verificável por quem tem o direito de verificar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí uma inversão que muda a conversa em qualquer conselho. Prestação de contas não é desconfiança do tesoureiro — **é a proteção dele**, e recusá-la em nome da confiança é deixar um irmão sozinho num lugar em que ninguém deveria ficar sozinho. Quem ama o tesoureiro exige o relatório.',
    },
    {
      tipo: 'secao',
      titulo: 'A administração não veio da empresa',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Existe um preconceito comum segundo o qual planejamento, organograma e controle seriam intrusões do mundo dos negócios numa comunidade que deveria mover-se pelo Espírito. A objeção tem um problema histórico: **a primeira crise administrativa da igreja está em Atos 6, e a resposta dos apóstolos foi criar estrutura.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A queixa era de distribuição desigual entre viúvas — problema de logística e de equidade, não de doutrina. E os apóstolos não responderam com uma exortação: separaram sete homens, com critérios explícitos de idoneidade, para que a Palavra não fosse prejudicada. Note que **a razão declarada para organizar foi proteger o ministério da Palavra**, e não o contrário. Estrutura existe para que o essencial não seja engolido pelo urgente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo raciocínio aparece antes, em Êxodo 18, quando Jetro observa Moisés julgando o povo do amanhecer ao anoitecer e lhe diz que aquilo não é sustentável — que ele vai se desgastar, e o povo com ele. A solução é delegação por escalas de competência. **Nos dois casos, quem propõe a estrutura está preocupado com a pessoa que ela vai poupar.**',
    },
    {
      tipo: 'termo',
      termo: 'Imunidade e isenção',
      texto:
        'Duas coisas que o vocabulário eclesiástico confunde e que têm naturezas diferentes. **Imunidade** é limitação constitucional ao poder de tributar: o Estado não pode instituir imposto sobre templos de qualquer culto nem sobre patrimônio, renda e serviços das instituições de assistência social sem fins lucrativos, e nenhuma lei ordinária pode revogar isso. **Isenção** é dispensa concedida por lei, que o mesmo legislador pode retirar quando quiser. A diferença importa na prática por dois motivos: a imunidade é mais sólida, e é também mais exigente — ela alcança o patrimônio, a renda e os serviços **relacionados às finalidades essenciais**, o que significa que atividade estranha ao culto e à assistência pode ser tributada normalmente, e que a escrituração regular é condição, não formalidade.',
    },
    {
      tipo: 'secao',
      titulo: 'O que precisa estar em ordem',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A maior parte dos problemas jurídicos de igreja não nasce de má-fé: nasce de coisas que ninguém fez porque ninguém sabia que era preciso fazer. Estas são as que mais aparecem.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Ata que registra a decisão, com quórum e assinaturas.** Alienação de imóvel, contratação, empréstimo e mudança de estatuto sem ata regular podem ser anuladas, e o oficial que assinou responde.',
        '**Contabilidade formal, e não caderno.** A imunidade exige escrituração das receitas e despesas em livros revestidos das formalidades. Igreja sem contabilidade é igreja que pode perder a imunidade e ver seus dirigentes autuados.',
        '**Distinguir empregado de voluntário.** Quem cumpre horário, recebe habitualmente e está subordinado é empregado, mesmo que a igreja chame de colaborador — a realidade prevalece sobre o nome. Zelador, secretária e músico contratado costumam ser os casos.',
        '**A situação previdenciária do ministro.** O ministro de confissão religiosa tem enquadramento próprio na legislação previdenciária, distinto do vínculo empregatício, e o valor que recebe para sua subsistência tem tratamento específico. Confundir isso com salário produz passivo dos dois lados.',
        '**Imóveis no nome de quem?** Bem adquirido em nome de pessoa física "para facilitar" é o problema patrimonial mais frequente e mais caro do protestantismo brasileiro, e reaparece sempre no inventário.',
        '**Quem pode assinar pela igreja, e até quanto.** O estatuto e a Constituição da denominação definem competências. Assinatura fora da competência não vincula a igreja — e vincula pessoalmente quem assinou.',
      ],
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto o pastor deve administrar',
      posicoes: [
        {
          escola: 'O pastor dirige a administração',
          sintese:
            'Ele preside o conselho, responde publicamente pela igreja e é quem tem visão de conjunto do trabalho; separar a direção espiritual da administrativa cria dois centros de poder e paralisa a igreja no primeiro desacordo. Tem a seu favor a realidade das igrejas pequenas, em que não há a quem delegar. Recebe a objeção de que é exatamente esse arranjo que produz pastor exausto, sem tempo de estudo e ressentido do próprio ministério.',
        },
        {
          escola: 'O pastor fora da administração',
          sintese:
            'Atos 6 é precedente explícito: não é razoável que se deixe a Palavra para servir às mesas. O ministro dedica-se ao estudo, à pregação e à cura de almas, e a administração cabe a oficiais próprios, que prestam contas ao concílio. Ganha em fidelidade ao texto e em saúde do ministério. E depende de haver leigos preparados e dispostos, o que em muitas igrejas simplesmente não há — nesse caso a posição vira ideal que ninguém pratica.',
        },
        {
          escola: 'Supervisão sem execução',
          sintese:
            'O pastor não executa nem se ausenta: acompanha, entende os números, faz as perguntas certas na reunião e garante que os controles existam — mas não emite cheque, não negocia contrato e não opera a conta. Preserva a autoridade de fiscalizar sem o desgaste e sem o risco de manejar recurso. A dificuldade é que a fronteira se apaga sob pressão, e quem supervisiona acaba executando quando alguém falta.',
        },
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Administração eclesiástica',
      texto:
        'Ordenação dos meios — pessoas, tempo, recursos e patrimônio — para que a igreja cumpra os fins que Cristo lhe deu, exercida pelos concílios e regulada pela Constituição da denominação e pelas leis do país. Distingue-se da administração de empresa em três pontos que decidem o resto: **os fins não são escolhidos por quem administra**, mas recebidos; **o critério de êxito não é o resultado financeiro**, de modo que uma igreja superavitária pode estar fracassando; e **a autoridade é de concílio e não de pessoa**, o que torna o registro em ata parte constitutiva do ato, e não sua formalização posterior. Boa administração eclesiástica reconhece-se por um sinal simples: **ela devolve tempo ao ministério da Palavra**, em vez de consumi-lo.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Vale dizer o que está em jogo quando essas coisas falham, porque não é dinheiro. Igreja que se divide por suspeita financeira raramente se reconcilia: o dano é diferente do de uma controvérsia doutrinária, porque atinge o julgamento que as pessoas fazem umas das outras, e esse não se resolve com esclarecimento. E a suspeita quase nunca começa com desonestidade — começa com a ausência de um relatório que teria custado uma hora por mês. Há também o efeito sobre quem serve: o tesoureiro que trabalha sem controle envelhece no cargo carregando um peso que ninguém percebe, porque **sabe que qualquer erro seu será indistinguível de má-fé.** Fazer as contas à vista de todos é, portanto, obra de misericórdia antes de ser exigência legal — e é assim que Paulo a apresenta, ao explicar que zelava pelo que é honesto também diante dos homens. Ele não estava se defendendo de si mesmo. Estava poupando a igreja de uma dúvida que não teria como resolver depois.',
    },
  ],
  fontes: [
    {
      id: 'constituicao-br',
      autor: 'Brasil',
      ano: '1988',
      titulo: 'Constituição da República Federativa do Brasil — art. 150, VI',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O dispositivo que veda instituir impostos sobre templos de qualquer culto e sobre patrimônio, renda e serviços das instituições de assistência social sem fins lucrativos, com a ressalva de que a proteção alcança o que se relaciona às finalidades essenciais. É a base da imunidade, e a leitura do parágrafo seguinte evita a confusão mais comum sobre o alcance dela.',
    },
    {
      id: 'clt',
      autor: 'Brasil',
      ano: '1943',
      titulo: 'Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943)',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Os artigos 2º e 3º definem empregador e empregado pelos elementos de fato — pessoalidade, habitualidade, subordinação e onerosidade —, e é por eles que se decide se o zelador ou a secretária da igreja têm vínculo, independentemente do nome que se dê à relação.',
    },
    {
      id: 'lei-voluntario',
      autor: 'Brasil',
      ano: '1998',
      titulo: 'Lei 9.608/1998 — do serviço voluntário',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l9608.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O termo de adesão escrito é o documento que separa serviço voluntário de vínculo de emprego. Custa uma folha de papel e evita o passivo trabalhista que mais surpreende igrejas.',
    },
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — Constituição e códigos',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Define as competências do conselho, do presbitério e da assembleia sobre patrimônio, contratação e representação. É onde se verifica quem pode assinar o quê — pergunta que só costuma ser feita depois de alguém já ter assinado.',
    },
    {
      id: 'miller-presbitero',
      autor: 'Samuel Miller',
      ano: '1832',
      titulo: 'An Essay on the Warrant, Nature and Duties of the Office of the Ruling Elder',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/essayonwarrantna184200mill',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Trata do oficial que a administração eclesiástica pressupõe e que raramente se forma: o presbítero regente capaz de examinar contas, fazer perguntas e assumir responsabilidade — sem o qual toda a estrutura recai sobre o pastor.',
    },
  ],
};
