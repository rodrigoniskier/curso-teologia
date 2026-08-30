import type { Verbete } from '../../tipos';

export const processoEclesiasticoInstauracaoGarantias: Verbete = {
  id: 'tp13-processo-instauração-garantias',
  disciplina: 'TP13',
  unidade: 1,
  titulo: 'Processo Eclesiástico: Instauração, Tribunal e Garantias',
  subtitulo:
    'Um fato pode ser público, grave e confessado — e ainda assim não autorizar o conselho a improvisar um processo',
  objetivo:
    'Ao final, você saberá distinguir queixa, denúncia e autodenúncia, compreenderá a exigência dos meios suasórios antes da instauração, identificará competência, suspeição e quórum do tribunal, acompanhará autuação, relatoria, citação, intimação, procurador e defesa, e saberá organizar interrogatório, testemunhas e acareação sem transformar zelo disciplinar em arbítrio.',
  atualizadoEm: '2026-08-30',
  verMais: ['tp13-disciplina-eclesiastica', 'tp12-governo-presbiteriano', 'tp12-concilios-comissoes-atas'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Imagine que um membro confesse diante de dois presbíteros uma falta que já circula pela igreja. O fato parece claro, o próprio envolvido admite o ocorrido e todos querem evitar mais escândalo. O impulso natural é convocar o conselho, ouvir a pessoa e aplicar logo uma medida. **É exatamente aí que um concílio bem-intencionado pode produzir um processo inválido.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No Código de Disciplina da IPB, gravidade não substitui forma. Fato público não dispensa provocação formal; confissão não elimina garantias; urgência não transforma o conselho em órgão sem procedimento. A disciplina eclesiástica é poder ministerial, e poder ministerial se reconhece também pelo fato de aceitar limites antes de exigir obediência dos outros.',
    },
    { tipo: 'secao', titulo: '1. O processo não começa porque “todo mundo sabe”' },
    {
      tipo: 'paragrafo',
      texto:
        'O ponto de partida normativo é simples e contraintuitivo: a falta chega ao concílio por **queixa**, quando a comunicação é feita pelo ofendido, ou por **denúncia**, quando é apresentada por outra pessoa. A comunicação deve ser escrita. O registro identifica quem provoca a jurisdição, quem é acusado e qual fato está sendo atribuído a ele. Isso impede que boato, conversa de corredor ou impressão coletiva se tornem acusação sem autor e sem objeto definido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Manual Presbiteriano registra ainda uma interpretação importante: embora o texto clássico do Código não nomeasse expressamente a autodenúncia, a IPB reconheceu que o próprio faltoso pode comunicar formalmente a sua falta. A confissão espontânea, portanto, pode deflagrar o tratamento disciplinar; ela não autoriza, porém, que se pulem os atos necessários para que o tribunal saiba exatamente o que está julgando e qual resposta eclesiástica é apropriada.',
    },
    {
      tipo: 'termo',
      termo: 'Queixa, denúncia e autodenúncia',
      texto:
        'São formas de provocar a atuação disciplinar. Queixa é a comunicação escrita do ofendido; denúncia é a comunicação escrita feita por outra pessoa; autodenúncia é a comunicação do próprio faltoso, admitida pela interpretação oficial da IPB. Nenhuma delas é sentença. Elas apenas levam uma falta determinada ao órgão competente para que este decida, segundo o Código, se e como a causa prosseguirá.',
    },
    { tipo: 'secao', titulo: '2. Antes do processo, o dever de tentar ganhar o irmão' },
    {
      tipo: 'paragrafo',
      texto:
        'O artigo 43 do Código impõe ao concílio, antes de iniciar processo, o emprego de **meios suasórios**. Não é uma etapa decorativa nem um pedido para que as partes “façam um acordo” a qualquer preço. É o esforço pastoral e eclesiástico para corrigir a falta, recuperar pessoas e conter danos antes de mobilizar o aparato judicial da igreja.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A jurisprudência do Tribunal de Recursos do Supremo Concílio reforçou a seriedade dessa exigência: a ausência do procedimento suasório pode levar à nulidade. Ao mesmo tempo, o próprio entendimento oficial evita formalismo vazio. Se, antes da instalação do tribunal, o concílio praticou atos que cumpriram materialmente a finalidade suasória, ou se circunstâncias como revelia, autodenúncia ou recusa tornaram o procedimento impossível, é preciso examinar o que de fato foi feito e por quê.',
    },
    {
      tipo: 'controversia',
      titulo: 'Meios suasórios significam que todo caso deveria terminar sem processo?',
      posicoes: [
        {
          escola: 'Conciliação como objetivo dominante',
          sintese:
            'Enfatiza que disciplina cristã busca recuperação e que judicializar cedo amplia dano, endurece posições e expõe famílias. Sua força é levar a sério Mateus 18 e o caráter pastoral da disciplina. Seu custo aparece quando a conciliação é usada para evitar apuração necessária, sobretudo em faltas graves, reiteradas ou que envolvam risco a terceiros.',
        },
        {
          escola: 'Processo como resposta à gravidade',
          sintese:
            'Entende que certos fatos são graves demais para tentativas informais e que a igreja protege vítimas e seu testemunho quando formaliza rapidamente a apuração. Sua força é não confundir misericórdia com impunidade. Seu custo é transformar gravidade em licença para ignorar uma exigência normativa que existe também para organizar a própria resposta a casos graves.',
        },
        {
          escola: 'Meios suasórios como dever orientado por finalidade',
          sintese:
            'Lê o art. 43 como obrigação real: o concílio deve buscar correção, recuperação e contenção de danos antes da instauração. Isso não significa que o processo sempre possa ser evitado; significa que a necessidade do processo deve surgir depois de uma tentativa pastoral séria ou da demonstração de que ela é inviável. O custo é exigir discernimento e documentação, em vez de uma fórmula automática.',
        },
      ],
    },
    { tipo: 'secao', titulo: '3. Quem pode julgar: competência, tribunal e quórum' },
    {
      tipo: 'paragrafo',
      texto:
        'Conselho reunido para fins judiciais não está simplesmente realizando mais uma reunião administrativa. Ele funciona como **tribunal eclesiástico**. A distinção muda postura, registro, papéis e garantias. Quem participou do conflito, é testemunha relevante ou possui interesse pessoal precisa considerar impedimento ou suspeição; quem preside precisa separar a necessidade pastoral de cuidar da igreja da tarefa judicial de apreciar fatos e provas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Competência responde a uma pergunta anterior ao mérito: **este órgão tem autoridade para instaurar ou julgar esta causa?** O Código prevê alegação de incompetência dentro de quinze dias da citação. Se o tribunal rejeitar a alegação, há mecanismo de insistência e possibilidade de recurso à instância superior. Não é tecnicismo: decisão materialmente correta dada por órgão incompetente continua sendo decisão tomada por quem não deveria tê-la tomado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A suspeição protege a imparcialidade dos juízes. Deve ser arguida oportunamente; reconhecida, o juiz deixa de atuar. Se suspeições reconhecidas eliminarem o quórum mesmo com suplentes, o Código prevê complementação por juízes de tribunal de igual categoria designados pela instância superior. O sistema prefere mobilizar outra composição a permitir que a necessidade de decidir torne aceitável um tribunal parcial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há ainda um caso especialmente importante: se o acusado for o próprio Conselho ou a maioria de seus componentes, a matéria é referida ao Presbitério. O princípio é maior que a regra concreta: **ninguém deve controlar ao mesmo tempo a acusação, a composição do tribunal e o julgamento da própria causa.**',
    },
    { tipo: 'secao', titulo: '4. Autuação e relatoria: transformar acusação em autos verificáveis' },
    {
      tipo: 'paragrafo',
      texto:
        'Recebida a comunicação, o processo precisa ganhar forma material. A autuação identifica tribunal, número, partes e data, e os documentos passam a ser incorporados cronologicamente. O secretário numera e rubrica as folhas. Esses gestos parecem pequenos até o dia em que alguém pergunta se uma prova estava nos autos antes da decisão, se uma página foi substituída ou qual versão de um documento foi efetivamente apreciada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O relator recebe os autos e apresenta parecer inicial sobre arquivamento ou prosseguimento. O tribunal, e não o relator sozinho, decide. Depois, se a queixa ou denúncia for recebida, marca-se o interrogatório. Se for rejeitada, o queixoso ou denunciante deve ser cientificado e o Código admite que se dirija à instância superior. Aqui já aparece uma lógica que reaparecerá nos recursos: **controle da decisão por outro órgão não é desconfiança anticristã; é limite institucional ao erro humano.**',
    },
    { tipo: 'secao', titulo: '5. Citação, intimação e notificação não são sinônimos' },
    {
      tipo: 'paragrafo',
      texto:
        'Citação chama o acusado ao processo para ser interrogado, defender-se e acompanhá-lo. Intimação dá ciência de decisão ou ato que interessa à pessoa. Notificação comunica outros atos processuais. Misturar essas categorias cria erros concretos: alguém pode saber informalmente que foi condenado e, mesmo assim, não ter sido formalmente intimado da sentença — e isso interfere no início do prazo recursal.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No primeiro comparecimento do acusado, a regra específica do art. 48 estabelece prazo não inferior a oito dias, considerado o contexto da pessoa. Em regras gerais de citação, o Código trabalha também com antecedência mínima de quarenta e oito horas, ressalvando expressamente o regime do primeiro comparecimento. O estudante precisa aprender a consultar a regra específica antes de aplicar mecanicamente um número isolado encontrado no índice.',
    },
    { tipo: 'secao', titulo: '6. Procurador e ampla defesa: o direito de ser ouvido de verdade' },
    {
      tipo: 'paragrafo',
      texto:
        'Ofendido e ofensor podem ser representados por procuradores crentes de idoneidade reconhecida pelo tribunal. O procurador não substitui necessariamente a presença pessoal quando a parte precisa prestar depoimento. A função da representação não é importar teatralidade forense para a igreja, mas impedir que alguém perca o próprio direito porque não domina linguagem processual, está emocionalmente abalado ou não sabe organizar documentos e perguntas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Contraditório não significa que toda alegação merece o mesmo peso; significa que ninguém deve ser surpreendido por fundamento, prova ou acusação que não pôde conhecer e enfrentar. Ampla defesa não significa procrastinação ilimitada; significa acesso real aos meios de defesa previstos. O conselho que já decidiu interiormente e oferece defesa apenas para “cumprir tabela” preserva a aparência do processo e destrói sua substância.',
    },
    { tipo: 'secao', titulo: '7. Interrogatório, testemunhas e acareação' },
    {
      tipo: 'paragrafo',
      texto:
        'Interrogatório não é pregação de dez minutos seguida de uma pergunta cuja resposta esperada é “sim”. É ato de esclarecimento. Perguntas precisam distinguir o que a pessoa viu, fez, ouviu de terceiros, concluiu e admite. Confissão pode simplificar o rito, mas precisa ser registrada com clareza e não transforma toda narrativa da acusação em fato automaticamente provado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As testemunhas são ouvidas separadamente; não assistem umas às outras. Primeiro são arguidas pelo tribunal, depois pela parte que as indicou e, por fim, pela parte contrária. Seu depoimento é reduzido a termo. Quando há divergência relevante, o Código admite acareação entre acusados, entre acusado e testemunha, entre testemunhas ou entre ofendido e acusado, limitada aos pontos de conflito que precisam ser esclarecidos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Prova digital exige cuidado ainda maior. O Manual de 2025 incorpora entendimento específico sobre determinados áudios e atas notariais e, paralelamente, lembra que processos disciplinares contêm dados pessoais sensíveis. Portanto, “está no celular” não significa automaticamente “pode circular no conselho”. Origem, autorização, integridade, pertinência e acesso aos autos precisam ser tratados com a mesma prudência que se exigiria de qualquer outra prova.',
    },
    {
      tipo: 'definicao',
      termo: 'Devido processo eclesiástico',
      texto:
        'É a forma ordenada pela qual a igreja exerce disciplina sem transformar autoridade espiritual em vontade momentânea do julgador. Inclui órgão competente e imparcial, acusação identificável, meios suasórios quando exigidos, citação regular, conhecimento dos fatos e provas, possibilidade de defesa e produção probatória, registro dos atos e acesso aos mecanismos de revisão. Sua finalidade não é proteger o pecado; é proteger a igreja de chamar de justiça aquilo que não foi apurado justamente.',
    },
    {
      tipo: 'pastoral',
      texto:
        'O maior perigo para um conselho experiente é acreditar que experiência torna desnecessário o procedimento. Ocorre o contrário: quanto mais vezes alguém julga, mais fácil é reconhecer padrões cedo demais e encaixar uma pessoa no caso anterior. Antes de perguntar “qual pena cabe?”, force a sala a responder quatro perguntas mais lentas: **quem trouxe formalmente a causa, o que exatamente está sendo imputado, por que este tribunal é competente e o que o acusado ainda não teve oportunidade real de responder?** Se uma delas não tiver resposta documental, o atraso pode ser a forma mais pastoral de justiça.',
    },
  ],
  fontes: [
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano — Código de Disciplina e notas remissivas',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte normativa principal para queixa, denúncia, meios suasórios, competência, suspeição, autuação, relatoria, procuradores, interrogatório, testemunhas, citações, intimações e jurisprudência do Tribunal de Recursos do Supremo Concílio.',
    },
    {
      id: 'bannerman-igreja',
      autor: 'James Bannerman',
      ano: '1868',
      titulo: 'The Church of Christ, vol. I',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/churchofchristtr01bann',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Eclesiologia reformada clássica para o caráter ministerial e limitado do poder da igreja, fundamento teológico para não tratar processo como simples técnica administrativa.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — capítulo XXX',
      publicacao: 'IPIB',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para o poder das chaves, fins das censuras e autoridade ministerial da igreja; oferece o quadro teológico dentro do qual o procedimento denominacional precisa ser lido.',
    },
  ],
};
