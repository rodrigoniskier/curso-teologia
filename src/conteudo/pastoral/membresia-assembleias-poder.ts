import type { Verbete } from '../../tipos';

export const membresiaAssembleiasPoder: Verbete = {
  id: 'tp12-membresia-assembleias-poder',
  disciplina: 'TP12',
  unidade: 1,
  titulo: 'Membresia, Assembleias e Poder na Igreja Local',
  subtitulo: 'Quem pertence, quem decide e por que a assembleia não é um parlamento soberano',
  objetivo:
    'Ao final, você saberá distinguir membresia comungante e não comungante, compreenderá admissão, desligamento, direitos e deveres como atos eclesiásticos e não meramente cadastrais, distinguirá poder originário e poder derivado na Constituição da IPB e saberá por que a assembleia exerce competências reais sem substituir o Conselho nem se tornar fonte autônoma de autoridade.',
  atualizadoEm: '2026-08-29',
  verMais: ['tp12-governo-presbiteriano', 'tp13-disciplina-eclesiastica', 'ts06-igreja-natureza-marcas'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma igreja pode ter um rol impecável e ainda não saber o que significa pertencer. Quando membresia vira cadastro, a admissão é recebida como preenchimento de ficha, o desligamento como baixa administrativa e a assembleia como reunião de associados. A Constituição da IPB usa linguagem jurídica porque uma comunidade religiosa também precisa agir no mundo civil; mas a realidade que ela tenta ordenar é anterior ao estatuto: **Cristo reúne um povo, entrega-lhe privilégios, deveres e disciplina e manda que tudo seja exercido de modo responsável.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Por isso, Constituição e Ordem não começa verdadeiramente no artigo: começa na eclesiologia. O rol deve dizer quem a igreja reconhece como pertencente à comunidade visível; a assembleia deve permitir que os governados exerçam as competências que lhes cabem; e o Conselho deve exercer o governo espiritual sem absorver aquilo que a Constituição reserva à igreja reunida.',
    },

    { tipo: 'secao', titulo: 'Membro não é cliente nem espectador', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Constituição da IPB reconhece como membros as pessoas batizadas e regularmente inscritas no rol. Dentro dessa membresia, distingue **comungantes** — os que fizeram pública profissão de fé — e **não comungantes** — filhos da aliança batizados na infância que ainda não fizeram sua pública profissão de fé, segundo a definição constitucional. A diferença não cria duas igrejas: descreve duas condições dentro da mesma comunidade visível.',
    },
    {
      tipo: 'termo',
      termo: 'Membro comungante',
      texto:
        'Membro que professou publicamente a fé e, não estando sob restrição disciplinar, participa dos privilégios e direitos próprios da comunhão eclesiástica. A categoria inclui responsabilidade: votar, ser votado quando preencher os requisitos, participar das assembleias e usar os meios de graça não são direitos de consumidor, mas expressões de pertencimento pactual.',
    },
    {
      tipo: 'termo',
      termo: 'Membro não comungante',
      texto:
        'Na Constituição da IPB, é o menor batizado na infância que ainda não fez profissão pública de fé. Sua condição não significa estar fora da igreja nem ser um visitante permanente; ela torna visível a responsabilidade da igreja e da família de conduzi-lo à compreensão, apropriação e confissão pessoal da fé que lhe foi ensinada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção explica por que o rol nunca deveria ser tratado como planilha de presença. Receber alguém é declarar que a igreja reconhece publicamente um vínculo. Transferir, desligar ou excluir alguém também muda um vínculo público. Cada movimento do rol deve, portanto, corresponder a uma razão eclesiástica verificável e ser registrado com clareza.',
    },

    { tipo: 'secao', titulo: 'Admissão e desligamento: portas com responsabilidade', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A tradição presbiteriana evita duas soluções fáceis. A primeira é a membresia automática: basta frequentar e a pessoa passa a ser tratada como membro. A segunda é a membresia privatizada: cada indivíduo decide sozinho quando entrou e quando saiu. Em ambos os casos desaparece o reconhecimento da igreja. O sistema constitucional exige atos definidos de recepção, transferência, jurisdição, profissão de fé e, quando necessário, desligamento ou disciplina.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso protege as duas partes. A igreja sabe por quem assumiu cuidado pastoral; o membro sabe qual comunidade assumiu responsabilidade por sua doutrina, sacramentos e disciplina. Quando alguém muda de igreja, a carta de transferência não é uma licença burocrática: é a tentativa de preservar continuidade de cuidado entre comunidades visíveis.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo princípio vale quando o vínculo se rompe. Nem toda saída é disciplina, e nem toda ausência autoriza exclusão sumária. A Constituição e as decisões conciliares distinguem situações porque fatos diferentes exigem respostas diferentes. A precisão do registro protege a verdade histórica do rol e evita que uma medida administrativa seja usada como censura informal.',
    },

    { tipo: 'secao', titulo: 'O poder reside na corporação, mas não do mesmo modo', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Constituição da IPB afirma que o poder da igreja é espiritual e administrativo e reside na corporação, isto é, **nos que governam e nos que são governados**. Essa frase impede dois reducionismos. O primeiro transforma os oficiais em proprietários da igreja; o segundo imagina que a maioria reunida pode governar diretamente tudo. A própria Constituição distribui o exercício desse poder.',
    },
    {
      tipo: 'termo',
      termo: 'Poder originário',
      texto:
        'É a autoridade exercida pelos membros comungantes reunidos em assembleia nas matérias que a Constituição lhes atribui, sobretudo a escolha de pastores e oficiais e os assuntos patrimoniais e civis reservados à assembleia. Chama-se originário porque procede da corporação dos governados, não porque seja absoluto ou anterior à autoridade de Cristo.',
    },
    {
      tipo: 'termo',
      termo: 'Poder derivado',
      texto:
        'É o poder exercido pelos oficiais e concílios regularmente constituídos. Eles recebem competência para governar em nome da igreja e sob a autoridade de Cristo. Derivado não significa inferior em toda matéria: significa que sua jurisdição é recebida e delimitada, e não criada pela vontade de quem ocupa o cargo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A distinção resolve uma confusão frequente. A assembleia **elege** presbíteros e diáconos, mas não assume as funções do Conselho. O Conselho **governa** a vida espiritual e administrativa que lhe compete, mas não escolhe para si os oficiais em lugar da assembleia. Cada órgão é forte exatamente dentro de sua competência; fora dela, a força vira usurpação.',
    },

    { tipo: 'secao', titulo: 'Assembleia não é culto de aclamação nem parlamento soberano', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A assembleia geral é composta pelos membros em plena comunhão e se reúne ordinária ou extraordinariamente conforme as normas constitucionais e estatutárias. Seu funcionamento exige convocação, pauta compatível, quórum, votação e registro. Esses requisitos podem parecer formais, mas sua função é pastoral: todos precisam saber previamente **o que será decidido, por quem e segundo qual regra**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma decisão tomada por maioria pode ser constitucionalmente inválida se a assembleia decidiu matéria que não era de sua competência. Da mesma forma, uma decisão correta em conteúdo pode ser contestável se o procedimento suprimiu direitos dos membros. Governo ordenado não é apenas chegar a uma conclusão adequada; é chegar a ela pelo órgão competente e por um caminho que possa ser conferido.',
    },
    {
      tipo: 'controversia',
      titulo: 'A assembleia é soberana na igreja local?',
      posicoes: [
        {
          escola: 'Leitura congregacional',
          sintese:
            'A assembleia dos membros é a instância final da igreja local e concentra a autoridade ordinária sobre admissão, disciplina, oficiais e decisões institucionais. Tem a vantagem de tornar visível a responsabilidade da congregação inteira, mas, do ponto de vista presbiteriano, não explica adequadamente a autoridade própria dos presbíteros nem a jurisdição dos concílios superiores.',
        },
        {
          escola: 'Leitura clerical ou concentrada',
          sintese:
            'O governo efetivo reside no ministro ou em pequeno núcleo de líderes, e a assembleia sobretudo ratifica decisões. Pode parecer eficiente, especialmente em comunidades grandes, mas tende a esvaziar competências que a própria Constituição entrega aos governados e aumenta o risco de personalização do poder.',
        },
        {
          escola: 'Leitura presbiteriana constitucional',
          sintese:
            'A igreja reunida e os concílios exercem poderes distintos e coordenados sob Cristo. A assembleia não é decorativa, e o Conselho não é absoluto. A competência define quem decide cada matéria, e o sistema de recursos impede que uma instância se trate como autoridade sem revisão.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'O pastor, a assembleia e o presbitério', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O ministro ocupa uma posição deliberadamente não redutível à igreja local. Serve pastoralmente uma comunidade concreta, preside o Conselho nos termos constitucionais e, ao mesmo tempo, é membro do Presbitério. Essa dupla relação evita que o pastor se torne funcionário privado da congregação e evita também que ele se comporte como proprietário independente dela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tomar assento no Presbitério, participar dos trabalhos conciliares, respeitar regras parlamentares e registrar corretamente as decisões não são acessórios administrativos do ministério. São parte da prestação de contas do oficial. A palavra pode ser usada com liberdade, mas não para impedir a palavra do outro; a maioria pode decidir, mas não apagar o direito de recurso; o presidente conduz, mas não substitui o concílio.',
    },

    {
      tipo: 'definicao',
      termo: 'Membresia e poder na igreja local',
      texto:
        'Na ordem presbiteriana, membresia é o vínculo eclesiástico público pelo qual pessoas batizadas são reconhecidas no rol e recebem cuidado, privilégios e deveres; o poder da igreja, sempre subordinado a Cristo e à Escritura, é exercido tanto pelos governados reunidos em assembleia nas competências que lhes são próprias quanto pelos oficiais e concílios em sua jurisdição derivada. A saúde constitucional depende de não confundir essas esferas nem esvaziar nenhuma delas.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A prova de uma boa Constituição aparece quando pessoas discordam. Enquanto todos estão de acordo, quase qualquer modelo parece funcionar. Quando uma eleição divide a igreja, quando uma família pede transferência, quando alguém discorda do Conselho ou quando o pastor é parte interessada, regras claras deixam de parecer burocracia e passam a ser proteção contra improviso e favoritismo. A ordem não substitui amor, sabedoria ou oração; ela cria um caminho em que esses valores possam agir sem depender de quem tem mais influência na sala.',
    },
  ],
  fontes: [
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte normativa principal para classificação, direitos e deveres dos membros, assembleias, distribuição constitucional do poder e relação entre igreja local e concílios.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XXV, XXX e XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para a natureza da Igreja visível, o exercício das censuras e os limites da autoridade conciliar.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Oferece o quadro reformado clássico para Igreja visível, poder eclesiástico, ministros, governo e disciplina.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae — locus XVIII, De Ecclesia',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratamento reformado escolástico da Igreja, de seus membros e da natureza ministerial de sua autoridade.',
    },
  ],
};