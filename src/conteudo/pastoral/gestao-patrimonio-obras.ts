import type { Verbete } from '../../tipos';

export const gestaoPatrimonioObras: Verbete = {
  id: 'tp06-patrimonio-contratos-obras',
  disciplina: 'TP06',
  unidade: 3,
  titulo: 'Patrimônio, Contratos e Obras da Igreja',
  subtitulo:
    'O patrimônio não é o prédio que a geração atual recebeu: é uma responsabilidade jurídica, financeira e eclesiástica que precisa chegar íntegra à geração seguinte',
  objetivo:
    'Ao final, você saberá distinguir posse, propriedade e registro, organizar inventário patrimonial, avaliar contratos de locação, comodato e arrendamento, estruturar a diligência prévia de uma aquisição imobiliária e compreender por que reformas e construções exigem decisão conciliar, documentação técnica, orçamento, fiscalização e registro completo.',
  atualizadoEm: '2026-08-28',
  verMais: ['tp06-gestao-eclesiastica', 'tp12-governo-presbiteriano', 'cg55-terceiro-setor'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma igreja pode cultuar durante trinta anos no mesmo terreno e descobrir, na primeira tentativa de vender, financiar uma reforma ou regularizar uma construção, que o imóvel juridicamente não é dela. O recibo de compra está guardado, a posse nunca foi contestada, todos na cidade sabem de quem é o templo — e a matrícula continua em nome de outra pessoa. Para a memória da comunidade, o problema não existe; para o registro imobiliário, ele nunca deixou de existir.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Gestão patrimonial existe para impedir que a diferença entre a história contada e a situação jurídica seja descoberta apenas quando já custa caro. O princípio é simples: **bem e documento precisam caminhar juntos**. A igreja deve saber o que possui, em nome de quem está, que ônus existem, quem autorizou a aquisição, quem pode alienar e onde a prova de cada resposta está guardada.',
    },
    { tipo: 'secao', titulo: 'Posse, escritura, matrícula e registro não são sinônimos' },
    {
      tipo: 'paragrafo',
      texto:
        'No cotidiano, “ter a escritura” costuma ser tratado como equivalente a “ser proprietário”. Não é. O negócio pode ter sido formalizado por escritura pública e ainda depender do registro no cartório de imóveis competente para produzir a transferência da propriedade. A matrícula é o histórico jurídico do imóvel: identifica o bem e registra proprietários, transmissões, hipotecas, penhoras, usufrutos e outros atos relevantes.',
    },
    {
      tipo: 'termo',
      termo: 'Due diligence imobiliária',
      texto:
        'Conjunto de verificações feitas antes de assumir compromisso: matrícula atualizada, titularidade, ônus, situação urbanística, débitos relevantes, capacidade de uso pretendido, competência de quem vende e competência interna de quem compra. Não é desconfiança; é a prática de descobrir antes da assinatura o problema que depois seria chamado de surpresa.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Matrícula atualizada:** confirma titularidade, descrição e ônus registrados.',
        '**Compatibilidade urbanística:** verifica se o uso religioso e a ocupação pretendida são admissíveis no local e sob quais condicionantes municipais.',
        '**Edificações existentes:** confere se o que está construído corresponde à documentação aprovada e registrada.',
        '**Competência eclesiástica:** identifica qual concílio ou assembleia deve autorizar aquisição, alienação, gravame ou obra conforme a Constituição e o estatuto.',
        '**Custo total:** inclui tributos eventualmente incidentes, cartório, projeto, adaptação, acessibilidade, segurança, manutenção e não apenas o preço negociado.',
      ],
    },
    { tipo: 'secao', titulo: 'O inventário patrimonial é mais que uma lista de cadeiras' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa menciona levantamento de móveis e utensílios porque igrejas perdem patrimônio de maneira banal: ninguém sabe o que existe, onde está, quem recebeu e se ainda funciona. O inventário deve ser proporcional ao valor e ao risco. Não faz sentido numerar cada colher; faz sentido registrar equipamentos, instrumentos, computadores, projetores, aparelhos de som, veículos e bens cujo desaparecimento ou quebra interromperia o trabalho.',
    },
    {
      tipo: 'lista',
      itens: [
        'Identificação do bem, descrição e número patrimonial quando pertinente.',
        'Data e forma de aquisição, valor histórico quando disponível e documento correspondente.',
        'Localização e responsável pelo uso ou guarda.',
        'Estado de conservação e manutenção relevante.',
        'Baixa formal quando vendido, doado, perdido ou inutilizado.',
        'Conferência física periódica por pessoa diferente de quem mantém o cadastro.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A separação de funções protege todos os envolvidos. Quem compra não deveria sozinho cadastrar, receber, pagar e depois atestar que o bem existe. Em igrejas pequenas, não haverá quatro departamentos; ainda assim é possível criar dupla conferência e registrar a decisão. O princípio é o mesmo da coleta administrada por Paulo: integridade pessoal é preciosa, e verificabilidade a protege.',
    },
    { tipo: 'secao', titulo: 'Locação, comodato e arrendamento: o nome do contrato muda a obrigação' },
    {
      tipo: 'paragrafo',
      texto:
        'A igreja usa imóveis e cede espaços com frequência: casa pastoral, salão, estacionamento, terreno rural, sala para projeto social. Tratar todos esses arranjos como “cessão” é fonte de conflito. **Locação** envolve uso mediante remuneração; **comodato** é empréstimo gratuito de coisa não fungível com dever de restituição; **arrendamento** aparece em relações específicas, especialmente rurais. O documento precisa refletir a relação real, e não o nome que parece mais conveniente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em qualquer contrato, quatro perguntas precedem a assinatura: quem tem poder para comprometer a igreja; qual é exatamente o objeto; por quanto tempo e sob quais condições pode terminar; e quem suporta manutenção, seguros, tributos, danos e benfeitorias. A frase “a gente resolve depois” é precisamente o que um contrato existe para evitar.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Delibere antes de assinar.** A ata deve registrar a decisão e a autorização conforme a competência interna.',
        '**Identifique partes e representantes corretamente.** CNPJ, qualificação e fundamento da representação reduzem nulidades e responsabilidade pessoal.',
        '**Descreva o imóvel ou bem sem ambiguidade.** Endereço sozinho pode não bastar; matrícula e anexos técnicos ajudam quando pertinentes.',
        '**Defina dinheiro e prazo por escrito.** Reajuste, vencimento, caução, multas, renovação e rescisão não devem depender de memória.',
        '**Distribua riscos.** Manutenção, obras, licenças, seguro e responsabilidade por terceiros precisam ter dono.',
      ],
    },
    { tipo: 'secao', titulo: 'Antes da obra: descobrir se a igreja pode construir o que deseja' },
    {
      tipo: 'paragrafo',
      texto:
        'O erro mais caro de uma construção começa antes do primeiro tijolo: escolher um terreno ou aprovar um desenho sem verificar restrições urbanísticas, acesso, estacionamento, vizinhança, acessibilidade, prevenção contra incêndio, infraestrutura e custo de manutenção. Um lote barato pode ser o lote mais caro quando exige solução técnica extraordinária para funcionar como templo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A expressão curricular “informação da prefeitura” continua correta, mas precisa ser entendida como categoria e não como um único documento nacional. Regras de uso e ocupação, licenciamento de obra, alvarás e procedimentos variam por município e pelo tipo de intervenção. Por isso o portal não deve inventar uma lista universal de documentos: deve ensinar o método de verificar localmente antes de decidir.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Programa de necessidades:** quantas pessoas, quais usos, fluxos, acessibilidade, apoio, estacionamento e expansão provável.',
        '**Viabilidade do imóvel:** restrições do lote e da legislação local antes do projeto definitivo.',
        '**Projeto por profissionais habilitados:** arquitetura e especialidades com responsabilidades técnicas definidas.',
        '**Orçamento de ciclo completo:** projeto, licenças, obra, mobiliário, contingência, manutenção e operação posterior.',
        '**Cronograma físico-financeiro:** relaciona avanço real da obra a desembolsos e impede que caixa disponível seja confundido com obra concluível.',
        '**Fiscalização e aceite:** quem executa não deve ser a única pessoa a dizer que executou corretamente.',
      ],
    },
    { tipo: 'secao', titulo: 'Mudança de escopo é onde o orçamento costuma morrer' },
    {
      tipo: 'paragrafo',
      texto:
        'Obras de igreja frequentemente começam com orçamento aprovado e crescem por decisões pequenas: já que a parede abriu, muda-se a instalação; já que o salão cresceu, troca-se o som; já que a congregação contribuiu bem, acrescenta-se outra sala. Cada decisão isolada parece razoável. Somadas, destroem a reserva e deixam acabamento, segurança ou acessibilidade para “uma segunda etapa” que pode nunca chegar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Por isso mudança de escopo precisa de rito: descrição do pedido, custo e prazo adicionais, impacto sobre o que já foi contratado e aprovação pela instância competente antes da execução. Não é burocracia contra generosidade; é impedir que entusiasmo de hoje crie obrigação financeira para o conselho de amanhã.',
    },
    {
      tipo: 'controversia',
      titulo: 'A igreja deve investir pesadamente em patrimônio próprio?',
      posicoes: [
        {
          escola: 'Patrimônio como estabilidade ministerial',
          sintese:
            'Templo e instalações próprias reduzem dependência de locador, permitem adaptação ao ministério e constituem patrimônio intergeracional. A força é estabilidade e capacidade de longo prazo. O risco é capital imobilizado e manutenção crescente consumirem recursos que a igreja dizia querer usar em pessoas e missão.',
        },
        {
          escola: 'Estrutura leve e flexível',
          sintese:
            'Locação e compartilhamento preservam mobilidade, reduzem investimento inicial e permitem adaptar tamanho ao momento. A força é flexibilidade. O custo é exposição a reajustes, término do contrato, limitações de uso e ausência de ativo próprio ao longo de décadas.',
        },
        {
          escola: 'Patrimônio subordinado à missão',
          sintese:
            'Recusa transformar possuir ou não possuir em virtude. Examina horizonte, custo total, alternativas e capacidade de manutenção, decidindo o imóvel como meio e não como monumento. É a posição deste verbete: patrimônio é servo da missão e precisa ser administrado como responsabilidade, não como prova visível de sucesso.',
        },
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Gestão patrimonial eclesiástica',
      texto:
        'Conjunto de decisões, registros e controles pelos quais a igreja adquire, utiliza, conserva, contrata, reforma e eventualmente aliena bens de forma compatível com sua finalidade, sua ordem constitucional e o direito civil. Boa gestão patrimonial mantém três trilhas sincronizadas: o bem existe e está conservado; a documentação prova a situação jurídica; e a decisão que o vinculou foi tomada pela autoridade eclesiástica competente.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Prédios guardam memória. É natural que decisões sobre venda, reforma ou mudança produzam emoção desproporcional à metragem: naquele salão alguém foi batizado, naquele banco uma família sentou por décadas, naquele terreno houve sacrifício financeiro de gente que já morreu. Administração fiel não ridiculariza essa memória, mas também não a transforma em direito de veto. A geração atual não recebeu o patrimônio para congelá-lo nem para gastá-lo como se fosse exclusivamente seu. Recebeu para usá-lo, documentá-lo, conservar aquilo que ainda serve e entregar à geração seguinte uma igreja menos confusa do que encontrou. Às vezes isso exige preservar. Às vezes exige vender. Em ambos os casos, a pergunta cristã é a mesma: **este bem continua servindo à vocação da igreja, e conseguimos prestar contas da decisão a quem o recebeu conosco e a quem o receberá depois de nós?**',
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
      nota: 'Define competências sobre patrimônio e representação eclesiástica; é indispensável para saber qual instância pode autorizar aquisição, alienação e outros atos patrimoniais na IPB.',
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
      nota: 'Fonte oficial para personalidade e representação das organizações religiosas, contratos, propriedade e demais relações civis abordadas no verbete.',
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
      nota: 'Disciplina registros públicos, inclusive o sistema registral que torna a situação jurídica do imóvel verificável para terceiros.',
    },
    {
      id: 'constituicao-br',
      autor: 'Brasil',
      ano: '1988',
      titulo: 'Constituição da República Federativa do Brasil',
      publicacao: 'Presidência da República',
      url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fornece o quadro constitucional da liberdade religiosa, autonomia das organizações religiosas e limitações tributárias pertinentes ao patrimônio destinado às finalidades essenciais.',
    },
  ],
};
