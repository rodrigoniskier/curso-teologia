import type { Verbete } from '../../tipos';

export const conciliosComissoesAtas: Verbete = {
  id: 'tp12-concilios-comissoes-atas',
  disciplina: 'TP12',
  unidade: 2,
  titulo: 'Como Funcionam os Concílios: Mesa, Comissões, Regimentos e Atas',
  subtitulo: 'A ordem parlamentar existe para que a autoridade coletiva não vire improviso nem domínio de poucos',
  objetivo:
    'Ao final, você distinguirá as competências operacionais de Conselho, Presbitério, Sínodo e Supremo Concílio, compreenderá o papel da Mesa, das comissões e comissões executivas, saberá diferenciar órgãos auxiliares de concílios e entenderá por que pauta, regimento, votação e ata são garantias de responsabilidade e não mera formalidade.',
  atualizadoEm: '2026-08-29',
  verMais: ['tp12-governo-presbiteriano', 'tp12-membresia-assembleias-poder', 'tp13-disciplina-eclesiastica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um concílio pode ter a doutrina correta, os oficiais legítimos e ainda produzir decisões ruins se ninguém souber conduzir a reunião. A razão é simples: autoridade compartilhada precisa de forma. Sem pauta, regra de palavra, proposição clara, votação verificável e registro, a decisão coletiva acaba capturada por memória seletiva, cansaço, pressa ou habilidade retórica.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem conciliar presbiteriana tenta responder justamente a esse problema. Ela não transforma a igreja em repartição; transforma deliberação em ato responsável. O que foi decidido precisa ser identificável, por um órgão competente, em reunião regular, segundo regra conhecida e com possibilidade de revisão.',
    },

    { tipo: 'secao', titulo: 'Quatro concílios, jurisdições diferentes', nivel: 2 },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Conselho:** exerce jurisdição sobre a igreja local e cuida diretamente de membresia, vida espiritual, disciplina, administração e supervisão dos trabalhos que a Constituição lhe entrega.',
        '**Presbitério:** jurisdiciona ministros e conselhos de determinada região; recebe e ordena ministros, organiza igrejas e decide matérias que ultrapassam uma única congregação.',
        '**Sínodo:** reúne presbitérios e exerce inspeção, coordenação e jurisdição sobre eles, inclusive em matérias que chegam por recurso ou consulta.',
        '**Supremo Concílio:** é o órgão de unidade de toda a IPB e a instância superior dentro da estrutura denominacional, sem deixar de estar submetido à Constituição e ao padrão bíblico-confessional da própria Igreja.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A gradação não significa que o superior possa fazer qualquer coisa que o inferior faria. Cada concílio possui competência própria. A autoridade superior aparece sobretudo em inspeção, recurso, coordenação e matérias de alcance maior. Respeitar competência é tão importante quanto respeitar hierarquia.',
    },

    { tipo: 'secao', titulo: 'A Mesa conduz; não substitui o concílio', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Presidente, vice-presidente, secretários e tesouraria existem para permitir que o corpo delibere. A função do presidente é conduzir segundo a ordem, preservar a possibilidade de manifestação, formular adequadamente o que será votado e declarar o resultado; não é transformar a presidência em poder legislativo pessoal.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso explica a importância das regras parlamentares. Uma proposta precisa estar inteligível antes de ser decidida. Emendas precisam modificar exatamente o que dizem modificar. Questões de ordem existem para proteger o procedimento, não para bloquear o mérito. Pedido de esclarecimento não deve virar discurso. A técnica é boa quando torna a vontade do concílio mais nítida; é ruim quando vira arma para cansar ou silenciar quem conhece menos o regimento.',
    },
    {
      tipo: 'controversia',
      titulo: 'Regra parlamentar ajuda ou burocratiza a vida da igreja?',
      posicoes: [
        {
          escola: 'Minimalismo procedimental',
          sintese:
            'Defende reuniões pouco formais, confiando na maturidade fraterna. Ganha agilidade em grupos pequenos e consensuais, mas fica vulnerável quando há conflito, porque direitos e precedentes passam a depender da memória e do temperamento do presidente.',
        },
        {
          escola: 'Formalismo rígido',
          sintese:
            'Trata o rito como fim em si mesmo e tende a medir a legitimidade da decisão pela técnica parlamentar. Protege previsibilidade, mas pode permitir que quem domina a regra controle a reunião sem convencer no mérito.',
        },
        {
          escola: 'Ordem ministerial',
          sintese:
            'Usa a regra como instrumento de justiça procedimental. A forma serve para que todos saibam o que está em discussão, a minoria possa ser ouvida, a maioria possa decidir e o resultado possa ser registrado e revisto.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'Comissões: estudar não é decidir no lugar do concílio', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A comissão existe porque o plenário não consegue examinar com igual profundidade todas as matérias. Uma comissão recebe um encargo, reúne documentos, compara normas, ouve interessados quando necessário e apresenta parecer. O ganho é concentração de trabalho. O risco é imaginar que o parecer já seja decisão.',
    },
    {
      tipo: 'termo',
      termo: 'Comissão de expediente',
      texto:
        'Grupo constituído durante a reunião para estudar documentos e matérias encaminhadas ao concílio. Seu parecer organiza o problema e propõe resolução; o plenário continua livre para aprovar, rejeitar, emendar, devolver ou substituir a proposta.',
    },
    {
      tipo: 'termo',
      termo: 'Comissão permanente ou especial',
      texto:
        'Comissão com mandato que ultrapassa uma sessão ou criada para tarefa determinada. A permanência dá continuidade e memória institucional, mas não transforma a comissão em concílio paralelo: suas atribuições permanecem limitadas pelo ato que a criou.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo princípio ajuda a compreender secretarias gerais, autarquias, juntas e outros órgãos. Eles executam causas, políticas e tarefas delegadas. Não recebem, pelo simples fato de existir, a jurisdição eclesiástica que a Constituição atribui aos concílios. É preciso sempre perguntar: **quem criou este órgão, qual competência lhe foi delegada e a quem ele presta contas?**',
    },

    { tipo: 'secao', titulo: 'Comissão Executiva: continuidade sem criar um novo Supremo Concílio', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Como o Supremo Concílio não permanece reunido continuamente, uma Comissão Executiva exerce competências entre suas reuniões. Essa solução é administrativamente necessária, mas exige um limite conceitual: execução entre sessões não equivale a possuir toda a competência constituinte e deliberativa do plenário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta correta diante de qualquer decisão executiva é dupla: havia competência delegada para isso e a resolução respeitou normas superiores? Esse hábito evita tanto o desprezo pela continuidade administrativa quanto a transformação da Comissão Executiva em órgão sem limites.',
    },

    { tipo: 'secao', titulo: 'Regimentos e atas: memória institucional é parte da justiça', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O regimento interno disciplina o modo pelo qual determinado órgão executa suas competências. Ele não pode ampliar a Constituição nem contrariá-la. A Constituição diz **o que** o órgão é e pode fazer; o regimento detalha **como** ele trabalha dentro desse espaço. Quando um regimento cria poder que a norma superior não concedeu, a hierarquia foi invertida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ata cumpre outra função: torna a decisão verificável depois que as pessoas foram embora. Uma boa ata registra identificação da reunião, presença e quórum, matéria recebida, deliberação efetivamente tomada e os elementos exigidos pelas normas. Não é transcrição de tudo o que cada pessoa disse nem resumo criativo do secretário.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse ponto se torna decisivo anos depois. Recursos, consultas, execução de decisões, história institucional e responsabilidade patrimonial dependem de saber o que o concílio realmente deliberou. Memória humana é frágil e interessada; a ata existe para que a instituição não dependa dela.',
    },

    {
      tipo: 'definicao',
      termo: 'Funcionamento conciliar',
      texto:
        'É o conjunto de regras e práticas pelas quais oficiais reunidos em concílio exercem colegiadamente uma jurisdição constitucional: convocam-se regularmente, verificam quórum, recebem matérias, deliberam segundo regras conhecidas, usam comissões sem transferir-lhes indevidamente o poder decisório, registram resoluções e preservam os caminhos de inspeção e recurso.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Quem aprende procedimento conciliar apenas para vencer votação aprendeu a parte menos importante. A boa ordem deve proteger justamente a pessoa que você espera derrotar no mérito. Permitir que o outro fale, formular com honestidade a posição adversária, registrar uma divergência e reconhecer o direito de recurso são atos de governo cristão porque aceitam um limite: **eu posso estar errado mesmo quando ocupo a presidência, relato a matéria ou pertenço à maioria.**',
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
      nota: 'Fonte normativa principal para composição, jurisdição e funcionamento dos concílios, regras de decisão, comissões e registros.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. XXXI',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para sínodos e concílios e para a submissão das decisões eclesiásticas à Palavra.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV, caps. 8–11',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Delimita o poder doutrinário e jurisdicional da igreja e fornece a matriz reformada para autoridade ministerial e colegiada.',
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
      nota: 'Discussão reformada clássica da autoridade da igreja e dos limites de seus órgãos.',
    },
  ],
};