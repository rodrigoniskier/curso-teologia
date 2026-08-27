import type { Verbete } from '../../tipos';

export const governoPoderIgreja: Verbete = {
  id: 'ts06-governo-poder',
  disciplina: 'TS06',
  unidade: 6,
  titulo: 'Governo, Ofícios e Poder da Igreja',
  subtitulo: 'Cristo governa sua Igreja por servos submetidos à Palavra, não por donos da consciência',
  objetivo:
    'Ao final, você saberá comparar os principais modelos de governo eclesiástico, explicar a lógica reformada do presbiterato e do diaconato, distinguir poder ministerial de poder soberano, compreender a disciplina como cuidado e delimitar biblicamente a relação entre Igreja e Estado.',
  atualizadoEm: '2026-08-27',
  verMais: ['tp12-governo-presbiteriano', 'ts06-igreja-natureza-marcas', 'ts06-meios-graca'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Toda igreja é governada por alguém, mesmo quando afirma não ter “estrutura”. A ausência de regras formais não elimina poder; apenas o torna menos visível. A pergunta eclesiológica, portanto, não é se haverá autoridade, mas de onde ela vem, quem pode exercê-la e quais limites impedem que liderança espiritual se transforme em domínio sobre a consciência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A resposta reformada começa antes de qualquer constituição denominacional: Cristo é o único Rei e Cabeça da Igreja. Oficiais não recebem uma parcela autônoma de soberania; recebem uma comissão. Sua autoridade é real justamente porque é derivada, e deixa de ser legítima quando pretende obrigar onde Cristo não obrigou ou liberar onde Cristo proibiu.',
    },
    { tipo: 'secao', titulo: 'Três famílias históricas de governo', nivel: 2 },
    {
      tipo: 'controversia',
      titulo: 'Como a autoridade eclesiástica deve ser estruturada?',
      posicoes: [
        {
          escola: 'Episcopal',
          sintese:
            'Organiza a Igreja em torno de bispos com jurisdição sobre presbíteros e comunidades. Sua força histórica é a ênfase na continuidade, unidade visível e supervisão supra-local. A crítica reformada principal é exegética: no Novo Testamento, “bispo” e “presbítero” aparecem aplicados às mesmas pessoas, o que dificulta demonstrar um terceiro grau permanente de ofício por instituição apostólica.',
        },
        {
          escola: 'Congregacional',
          sintese:
            'A autoridade final ordinária pertence à congregação local, que recebe, disciplina e escolhe seus oficiais. A posição leva a sério a responsabilidade do corpo e textos em que a igreja inteira participa de decisões. A dificuldade apontada pelos presbiterianos é explicar assembleias e decisões supra-locais como Atos 15 e a autoridade de presbíteros que não se reduz à soma das preferências dos membros.',
        },
        {
          escola: 'Presbiteriana',
          sintese:
            'Cristo governa por presbíteros escolhidos pela igreja e reunidos em pluralidade, com concílios capazes de tratar assuntos que ultrapassam uma congregação. Sua força é combinar participação do povo, liderança ordenada e conexão entre igrejas. Seu risco histórico é transformar concílios em burocracias autônomas se o caráter ministerial e declarativo da autoridade for esquecido.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O verbete sobre Governo Presbiteriano em TP12 descreve com mais detalhe os concílios e a prática constitucional da IPB. Aqui o foco é dogmático: por que uma forma de governo pode ser defendida teologicamente e o que nenhuma forma de governo tem permissão para fazer.',
    },
    { tipo: 'secao', titulo: 'Presbíteros: governo que pastoreia', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Atos 20 e Tito 1 usam os termos presbítero e bispo para o mesmo ofício. Um termo ressalta maturidade e posição entre o povo; o outro, supervisão. A função pastoral completa a imagem: aqueles que governam devem alimentar, guardar e cuidar do rebanho. O Novo Testamento, portanto, não separa governo de pastoreio como se o primeiro fosse administração e o segundo apenas afeto.',
    },
    {
      tipo: 'passagem',
      referencia: '1Pedro 5.2-3',
      texto:
        'Os presbíteros devem pastorear e supervisionar voluntariamente, não como dominadores, mas tornando-se exemplos do rebanho.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa combinação define o limite moral do ofício. Autoridade eclesiástica que não pode ser questionada, que confunde lealdade a Cristo com lealdade a uma personalidade ou que usa informação espiritual para controlar pessoas contradiz a própria forma do pastoreio apostólico. O presbítero lidera debaixo do Supremo Pastor e será julgado por ele.',
    },
    {
      tipo: 'controversia',
      titulo: 'Um ofício de presbítero ou dois?',
      posicoes: [
        {
          escola: 'Um ofício, funções distintas',
          sintese:
            'Ministros da Palavra e presbíteros regentes pertencem ao mesmo ofício básico de presbítero, embora alguns sejam especialmente separados para pregação e ensino. A leitura apela à linguagem comum de presbítero no Novo Testamento e a 1Timóteo 5.17.',
        },
        {
          escola: 'Dois ofícios presbiterais correlatos',
          sintese:
            'Pastor/ministro e presbítero regente exercem autoridades relacionadas, porém ocupam ofícios distintos, com vocações e ordenações próprias. A tradição e a prática da IPB refletem essa formulação. A diferença é intrarreformada e não altera a convicção comum de que nenhum oficial governa como soberano individual.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'Diáconos: autoridade para servir necessidades concretas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O diaconato surge ligado ao cuidado material, à misericórdia e à boa ordem do serviço da Igreja. Atos 6 não usa o substantivo técnico “diácono” para os sete, mas apresenta o padrão que a tradição cristã associou ao ofício: necessidades reais ameaçam a unidade da comunidade, pessoas qualificadas são separadas para administrá-las e os ministros da Palavra não abandonam oração e ensino para absorver toda tarefa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1Timóteo 3, os requisitos morais dos diáconos são altos porque serviço material também é ministério espiritual. Dinheiro, assistência, logística e misericórdia lidam com vulnerabilidade humana e confiança. O diaconato não é um “ofício menor”; é um ofício diferente, cuja grandeza é medida pela conformidade com Cristo servo.',
    },
    { tipo: 'secao', titulo: 'O poder da Igreja: real, porém ministerial', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A Igreja possui poder doutrinário, ordenador e disciplinar. Pode confessar publicamente o ensino bíblico, organizar seu culto e sua vida comum, reconhecer oficiais, admitir membros e aplicar censuras. Mas esse poder não é legislativo no sentido soberano. A Igreja não produz nova revelação nem cria mandamentos capazes de prender a consciência como se viessem de Deus.',
    },
    {
      tipo: 'termo',
      termo: 'Poder ministerial e declarativo',
      texto:
        'É autoridade exercida em nome de Cristo e limitada por sua Palavra. “Ministerial” significa que os oficiais administram o que pertence ao Senhor; “declarativo” significa que sua tarefa é reconhecer, ensinar e aplicar a vontade revelada, não inventar uma vontade eclesiástica paralela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso protege a Igreja tanto do autoritarismo clerical quanto do autoritarismo democrático. Um pastor não pode tornar sua preferência um mandamento divino; uma maioria congregacional também não pode votar para tornar verdadeiro o que a Escritura chama falso. A soberania não está no líder nem na assembleia, mas em Cristo falando por sua Palavra.',
    },
    { tipo: 'secao', titulo: 'Disciplina: as chaves servem para restaurar', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Disciplina eclesiástica é uma das expressões mais mal compreendidas desse poder. Quando reduzida a punição, parece incompatível com graça. No Novo Testamento, porém, ela serve à santidade da Igreja, à proteção do rebanho, à clareza do testemunho e, sempre que possível, à restauração do pecador. A censura mais severa continua tendo um horizonte pastoral: chamar ao arrependimento.',
    },
    {
      tipo: 'lista',
      itens: [
        'A disciplina deve tratar pecado real, não desagrado pessoal, diferença de estilo ou crítica legítima à liderança.',
        'Deve respeitar processo, testemunhas, proporcionalidade e oportunidade de defesa, porque justiça também é mandamento bíblico.',
        'Deve distinguir fraqueza, ignorância e impenitência obstinada. Nem todo pecado requer censura pública.',
        'Deve buscar restauração. Quando há arrependimento verdadeiro, o objetivo não é manter uma marca permanente sobre o irmão, mas recebê-lo de volta com verdade e prudência.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma igreja que nunca disciplina pode chamar tolerância de amor enquanto permite que o pecado destrua pessoas. Uma igreja que disciplina sem misericórdia pode chamar dureza de fidelidade enquanto usa as chaves como arma. A disciplina reformada só é bíblica quando verdade, justiça, finalidade pastoral e limites institucionais permanecem juntos.',
    },
    { tipo: 'secao', titulo: 'Igreja e Estado: duas autoridades, competências distintas', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Igreja e magistrado civil respondem a Deus, mas não receberam a mesma missão. O Estado porta autoridade coercitiva para a ordem civil e a justiça pública; a Igreja recebeu Palavra, sacramentos e disciplina espiritual. Quando a Igreja busca governar pela espada, trai seus meios. Quando o Estado pretende definir doutrina, ordenar ministros ou controlar sacramentos, invade uma jurisdição que não recebeu.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como relacionar as duas esferas?',
      posicoes: [
        {
          escola: 'Fusão sacral',
          sintese:
            'Procura uma unidade institucional forte entre poder civil e religião, esperando que a ordem política proteja ou promova a verdadeira fé. Historicamente produziu coesão, mas também criou graves riscos de coerção religiosa e de instrumentalização mútua entre trono e altar.',
        },
        {
          escola: 'Separação hostil ou privatizante',
          sintese:
            'Trata religião como assunto estritamente privado e considera suspeita qualquer contribuição eclesial ao debate público. Protege contra estabelecimento religioso, mas pode converter neutralidade estatal em exclusão seletiva das convicções religiosas da esfera comum.',
        },
        {
          escola: 'Distinção de jurisdições com responsabilidade pública',
          sintese:
            'Igreja e Estado têm competências próprias sob a soberania de Deus. A Igreja não governa o Estado nem recebe dele sua mensagem; pode, contudo, ensinar princípios morais, defender justiça e formar cidadãos. O Estado preserva liberdade e ordem civil sem assumir o governo espiritual da Igreja.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'A definição', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'Governo e poder eclesiástico',
      texto:
        'É o exercício da autoridade que Cristo confiou à sua Igreja por meio de oficiais e assembleias submetidos à Escritura. Na tradição presbiteriana, presbíteros governam e pastoreiam em pluralidade e diáconos lideram o serviço de misericórdia e necessidades materiais. O poder da Igreja é ministerial e declarativo, exercido em doutrina, ordem e disciplina, e não inclui soberania sobre a consciência nem competência coercitiva própria do magistrado civil.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A pergunta prática que testa qualquer liderança cristã não é apenas “ela consegue fazer a igreja funcionar?”, mas “ela ajuda pessoas a obedecerem a Cristo sem ocupar o lugar de Cristo?”. Sistemas são importantes, eleições são importantes e concílios são importantes; nenhum deles redime a Igreja. O melhor governo é aquele que torna mais difícil a tirania, mais clara a responsabilidade, mais segura a correção de abusos e mais visível que todo oficial permanece irmão, servo e devedor do mesmo evangelho que anuncia.',
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XX, XXIII, XXV, XXX e XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para liberdade de consciência, Igreja, magistrado civil, censuras e concílios.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, caps. 3-4 e 8-12',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Calvino trata dos ofícios, do poder doutrinário e disciplinar, dos concílios e dos limites da autoridade eclesiástica.',
    },
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
      nota: 'Fonte normativa para a forma concreta de governo, ofícios, concílios e disciplina na IPB.',
    },
    {
      id: 'hodge-st3-pdf',
      autor: 'Charles Hodge',
      ano: '1873',
      titulo: 'Systematic Theology, vol. III — The Church and its government',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/h/hodge/theology3/cache/theology3.pdf',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratamento clássico sobre poder eclesiástico, ofícios, disciplina e relação entre Igreja e Estado.',
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
      nota: 'Fonte reformada clássica para a natureza do poder da Igreja e as controvérsias de governo.',
    },
  ],
};