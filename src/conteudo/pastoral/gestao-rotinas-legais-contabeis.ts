import type { Verbete } from '../../tipos';

export const gestaoRotinasLegaisContabeis: Verbete = {
  id: 'tp06-rotinas-legais-contabeis',
  disciplina: 'TP06',
  unidade: 2,
  titulo: 'Rotinas Legais, Contábeis e Documentais da Igreja',
  subtitulo:
    'A maioria dos passivos eclesiásticos não começa com fraude: começa com uma obrigação pequena que ninguém sabia de quem era',
  objetivo:
    'Ao final, você saberá organizar um calendário de obrigações administrativas, distinguir o tratamento previdenciário do ministro das relações comuns de emprego, compreender a lógica de orçamento e documentação contábil, produzir atas e relatórios úteis, e explicar o fluxo básico do casamento religioso com efeitos civis sem substituir orientação contábil, jurídica ou cartorial específica.',
  atualizadoEm: '2026-08-28',
  verMais: ['tp06-gestao-eclesiastica', 'tp06-patrimonio-contratos-obras', 'cg55-terceiro-setor'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'O conselho aprova uma ajuda ao pastor, contrata uma secretária, celebra um casamento, recebe uma oferta para uma obra, muda a diretoria civil e compra um computador. Nada disso parece complexo isoladamente. O problema é que cada ato deixa uma trilha diferente: previdenciária, tributária, trabalhista, registral, contábil ou eclesiástica. Quando ninguém administra a trilha, o fato aconteceu e o documento não — e meses depois a igreja tenta reconstruir por memória aquilo que deveria ter registrado no momento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Rotina administrativa é justamente a decisão de **não depender da memória**. Ela transforma obrigações recorrentes em calendário, responsáveis, documentos-padrão e conferência. O ganho não é burocrático: libera conselho e pastor de redescobrir todos os meses o que já deveria funcionar como processo.',
    },
    { tipo: 'secao', titulo: 'Um calendário de conformidade antes de qualquer detalhe' },
    {
      tipo: 'lista',
      itens: [
        '**Mensal:** fechamento contábil, conciliação bancária, pagamentos, retenções e obrigações trabalhistas/previdenciárias aplicáveis.',
        '**Trimestral:** comparação orçamento-realizado, conferência de documentos, revisão de contratos e pendências.',
        '**Anual:** orçamento, inventário patrimonial, relatórios estatísticos e ministeriais, obrigações fiscais e contábeis, revisão de procurações e responsáveis.',
        '**Por evento:** admissão ou desligamento de empregado, mudança de diretoria, aquisição de imóvel, obra, casamento religioso com efeitos civis, convênio, eleição e assembleia.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Os nomes e prazos exatos de declarações eletrônicas podem mudar. Por isso um portal teológico não deve congelar uma lista operacional como se fosse eterna. A prática correta é manter contador responsável, calendário atualizado e prova de entrega. O ensino que permanece é a arquitetura do controle: obrigação, responsável, prazo, comprovante e revisão.',
    },
    { tipo: 'secao', titulo: 'Ministro de confissão religiosa não é simplesmente “empregado sem carteira”' },
    {
      tipo: 'paragrafo',
      texto:
        'A legislação previdenciária brasileira enquadra o ministro de confissão religiosa como **contribuinte individual** em seu mister religioso. A Receita Federal esclarece que, quando os valores destinados à subsistência independem da natureza e da quantidade do trabalho executado, aplica-se tratamento previdenciário próprio. Isso é diferente de afirmar que toda relação entre igreja e ministro está imune a qualquer consequência trabalhista ou tributária.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo documento oficial faz uma distinção que a igreja precisa guardar: se o pagamento assume características de remuneração proporcional a serviços, ou se a pessoa exerce outra atividade além do mister religioso, o enquadramento pode mudar. E, para imposto de renda, os valores recebidos não se tornam automaticamente isentos por serem pagos por organização religiosa. **Imunidade da igreja e tributação da renda da pessoa são questões diferentes.**',
    },
    {
      tipo: 'termo',
      termo: 'Mister religioso e relação de emprego',
      texto:
        'Mister religioso é o exercício da função ministerial própria da confissão, com tratamento legal específico. Relação de emprego é categoria trabalhista definida pelos elementos concretos da prestação de serviço. O título “pastor”, “missionário” ou “obreiro” não resolve sozinho a natureza de toda atividade desempenhada; por isso funções administrativas, docentes ou operacionais adicionais precisam ser examinadas pelo que realmente são.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Fundo de Assistência Pastoral — FAP — aparece no currículo porque a IPB possui mecanismos denominacionais de assistência aos ministros. Regras de elegibilidade, contribuição e benefício são administrativas e podem ser alteradas por deliberação competente; portanto devem ser conferidas na regulamentação vigente da denominação, não memorizadas a partir de material de aula antigo. O princípio de gestão é registrar quem acompanha o vínculo do ministro com os sistemas denominacionais e previdenciários e revisar isso periodicamente.',
    },
    { tipo: 'secao', titulo: 'Orçamento é autorização antes de ser previsão' },
    {
      tipo: 'paragrafo',
      texto:
        'Orçamento de igreja não é tentativa de adivinhar quanto Deus enviará. É instrumento de decisão: antes de o dinheiro entrar ou sair, o concílio declara prioridades, limites e responsabilidades. A previsão pode errar; a disciplina de escolher antes continua valiosa.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Projete receitas com prudência:** use histórico e cenários, não o melhor mês do ano como regra.',
        '**Separe despesas recorrentes e projetos:** folha, manutenção e contratos têm comportamento diferente de uma reforma ou conferência.',
        '**Reserve contingência:** emergência previsível no longo prazo não é surpresa administrativa.',
        '**Defina alçadas:** quais despesas estão autorizadas pelo orçamento e quais precisam voltar ao conselho.',
        '**Compare realizado e orçado:** desvio sem análise transforma orçamento em peça decorativa.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A contabilidade formal registra o que aconteceu; o orçamento disciplina o que se pretende autorizar. Confundir os dois produz dois extremos: tesouraria que paga apenas porque há saldo e conselho que aprova orçamento sem nunca olhar a execução. Caixa disponível não significa despesa autorizada; orçamento aprovado não significa que o caixa existirá.',
    },
    { tipo: 'secao', titulo: 'Documentos financeiros precisam formar uma trilha verificável' },
    {
      tipo: 'lista',
      itens: [
        'Documento que demonstra a origem da receita quando aplicável.',
        'Documento fiscal ou comprobatório da despesa e identificação de sua finalidade.',
        'Autorização compatível com a alçada definida pelo concílio.',
        'Comprovante de pagamento e identificação da conta utilizada.',
        'Classificação contábil e conciliação com extrato bancário.',
        'Relatório periódico examinado por quem não executou sozinho toda a movimentação.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A trilha protege especialmente quando o gasto é correto, mas parece estranho fora do contexto. Um recibo isolado não conta por que a igreja pagou aquilo; a ata, a autorização, a nota e o extrato juntos contam. Governança financeira é construir a história documental ao mesmo tempo que o ato acontece.',
    },
    { tipo: 'secao', titulo: 'Ata: registrar decisão, não transcrever conversa' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma boa ata permite que alguém que não participou saiba **quem reuniu, com que competência, o que foi decidido e sob quais condições**. Ela não precisa transformar cada discussão em discurso indireto. O excesso pode esconder a decisão tanto quanto a falta.',
    },
    {
      tipo: 'lista',
      itens: [
        'Identificação do órgão, data, local e forma da reunião.',
        'Presidência, secretaria, presença e quórum quando pertinente.',
        'Matéria suficientemente identificada para tornar a deliberação inteligível.',
        'Decisão, votação ou consenso conforme a norma aplicável.',
        'Responsável, limite financeiro, prazo ou condição quando a deliberação exigir execução posterior.',
        'Fecho, aprovação e assinaturas conforme a disciplina eclesiástica e civil pertinente.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em atos com efeito externo — alteração estatutária, eleição civil, aquisição, representação — a redação precisa também atender às exigências do órgão perante o qual será apresentada. O livro de atas e a ata destinada a registro podem ter funções relacionadas sem serem administradas de modo improvisado. Quando o ato produz efeito civil relevante, revisão profissional antes do protocolo custa menos que refazer depois.',
    },
    { tipo: 'secao', titulo: 'Casamento religioso com efeitos civis: o fluxo, não um formulário universal' },
    {
      tipo: 'paragrafo',
      texto:
        'O Código Civil reconhece que o casamento religioso pode produzir efeitos civis quando atende às exigências legais e é registrado. A Lei de Registros Públicos disciplina o registro e admite tanto a hipótese de habilitação prévia quanto, sob requisitos próprios, o registro posterior de celebração realizada sem a habilitação antecedente.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Habilitação e orientação cartorial:** os nubentes verificam no registro civil competente os requisitos aplicáveis.',
        '**Celebração religiosa:** o ministro celebra e documenta o ato com os elementos exigidos.',
        '**Termo ou assento:** contém os dados legais e assinaturas pertinentes.',
        '**Registro civil:** o documento é apresentado ao cartório competente dentro do fluxo legal para que produza os efeitos civis.',
        '**Arquivo e conferência:** a igreja preserva sua documentação e os nubentes confirmam a efetivação do registro.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cartórios podem oferecer formulários e rotinas operacionais próprios dentro da legislação. O pastor não deve prometer prazo ou procedimento que não conferiu localmente. Sua responsabilidade administrativa é conhecer o regime jurídico básico, manter termos corretos e orientar o casal a tratar o registro civil como parte do processo, e não como detalhe que alguém fará depois.',
    },
    { tipo: 'secao', titulo: 'Cadastro de membresia e relatório: dados a serviço do pastoreio' },
    {
      tipo: 'paragrafo',
      texto:
        'O currículo menciona programas da IPB para controle de membresia, mas software é meio substituível. O dado necessário permanece: identidade, contato, condição eclesiástica, recepção, transferência, disciplina, batismo, profissão de fé, casamento, óbito e demais eventos que o governo e o cuidado exigem. Sistema bom não é o que tem mais campos; é o que mantém informação correta, acessível a quem precisa e protegida de quem não precisa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Relatórios ministeriais e estatísticos deveriam nascer desses registros, não de uma semana anual de caça a números. Quando a informação é mantida ao longo do ano, o relatório deixa de ser estimativa e começa a mostrar movimento real da comunidade: entradas, saídas, sacramentos, frequência, ações, finanças e necessidades.',
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto da rotina administrativa deve ficar com o pastor?',
      posicoes: [
        {
          escola: 'Centralização pastoral',
          sintese:
            'Facilita decisão em igrejas pequenas e mantém visão integrada. Seu custo é tornar o ministro gargalo, misturar supervisão e execução e retirar horas do ministério da Palavra.',
        },
        {
          escola: 'Delegação administrativa ampla',
          sintese:
            'Entrega rotinas a tesouraria, secretaria, contabilidade e presbíteros preparados, preservando o pastor para suas funções próprias. Seu risco é o ministro se desligar a ponto de não compreender documentos e riscos sobre os quais participa das deliberações do conselho.',
        },
        {
          escola: 'Supervisão informada sem operacionalização',
          sintese:
            'O pastor conhece os processos, lê relatórios, faz perguntas e participa das decisões que lhe cabem, sem transformar-se no executor habitual. Preserva responsabilidade conciliar e especialização. É o arranjo preferível quando a igreja dispõe de pessoas capazes.',
        },
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Rotina administrativa eclesiástica',
      texto:
        'Processo recorrente, documentado e atribuível pelo qual obrigações financeiras, contábeis, trabalhistas, previdenciárias, registrais e denominacionais são cumpridas nos prazos e competências corretos. Seu objetivo é retirar tarefas previsíveis da improvisação para que o concílio possa governar por informação confiável e os oficiais não precisem administrar por memória.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Há tarefas na igreja que ninguém percebe quando são bem feitas: conciliação bancária, atualização cadastral, guarda de ata, obrigação entregue, termo arquivado. Elas só ficam visíveis quando falham. Por isso quem cuida delas pode passar anos servindo sem receber a mesma gratidão de quem ensina ou canta. A liderança madura torna esse trabalho visível sem transformá-lo em protagonismo. Paulo chamou administração de recursos de algo que precisava ser honesto diante de Deus **e** dos homens. Isso dignifica a rotina: a planilha conferida, o documento guardado e o prazo cumprido podem ser formas discretas de proteger irmãos, preservar reputações e impedir que a desordem roube tempo do ministério que a própria administração existe para servir.',
    },
  ],
  fontes: [
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
      nota: 'Fonte denominacional para competências, atas, governo, representação e rotinas eclesiásticas que não podem ser definidas apenas pela legislação civil.',
    },
    {
      id: 'receita-ministro-confissao-130-2021',
      autor: 'Receita Federal do Brasil',
      ano: '2021',
      titulo: 'Solução de Consulta Cosit 130/2021 — Ministro de confissão religiosa',
      publicacao: 'Receita Federal do Brasil',
      url: 'https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?termoBusca=971%252F09',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Esclarece o enquadramento previdenciário do ministro como contribuinte individual e a incidência de imposto de renda, com distinções relevantes para pagamentos ligados ao mister religioso.',
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
      nota: 'Fonte primária para distinguir relações de emprego de outras formas de serviço e evitar que nomenclatura eclesiástica substitua a análise da realidade da prestação.',
    },
    {
      id: 'codigo-civil-br',
      autor: 'Brasil',
      ano: '2002',
      titulo: 'Código Civil — Lei 10.406/2002, texto compilado',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte oficial para organizações religiosas, representação civil e reconhecimento do casamento religioso com efeitos civis.',
    },
    {
      id: 'lei-registros-publicos',
      autor: 'Brasil',
      ano: '1973',
      titulo: 'Lei 6.015/1973 — Registros Públicos, texto compilado',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Disciplina o registro do casamento religioso para efeitos civis e fornece a base legal do fluxo documental ensinado no verbete.',
    },
  ],
};
