import type { Verbete } from '../../tipos';

export const recursosExecucaoRestauracao: Verbete = {
  id: 'tp13-recursos-execucao-restauracao',
  disciplina: 'TP13',
  unidade: 3,
  titulo: 'Recursos, Execução e Restauração no Processo Eclesiástico',
  subtitulo:
    'A sentença não encerra a disciplina: ainda faltam revisão, execução fiel e o caminho de volta do faltoso',
  objetivo:
    'Ao final, você distinguirá apelação, revisão, recurso extraordinário, recurso de ofício e recursos especiais não nominados, compreenderá seus pressupostos e prazos essenciais, saberá como a pena é executada e registrada e entenderá a restauração como direito do faltoso arrependido, inclusive as exigências graduais aplicáveis a ministros.',
  atualizadoEm: '2026-08-30',
  verMais: ['tp13-ritos-provas-julgamento', 'tp13-disciplina-eclesiastica', 'tp12-governo-presbiteriano'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma sentença pode estar bem escrita, ter sido aprovada pela maioria correta e ainda não ser o fim da causa. O acusado pode recorrer; a parte contrária pode responder; a instância superior pode reformar a decisão; a pena precisa ser executada pelo órgão competente; e, se a disciplina alcançar sua finalidade, alguém terá de decidir como reconhecer o arrependimento e restaurar o faltoso. **Encerrar o processo na sentença é abandonar justamente a parte que prova se a disciplina foi cristã ou apenas punitiva.**',
    },
    { tipo: 'secao', titulo: '1. Por que existe recurso numa igreja presbiteriana' },
    {
      tipo: 'paragrafo',
      texto:
        'O recurso não parte da suposição de que o concílio inferior é incompetente ou indigno. Parte de uma doutrina mais sóbria: concílios legítimos podem errar. A conexão entre conselhos, presbitérios, sínodos e Supremo Concílio cria instâncias capazes de rever decisões sem negar a autoridade real do órgão que julgou primeiro.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso é profundamente presbiteriano. A igreja não concentra jurisdição definitiva numa pessoa, nem trata a decisão local como imune a controle. O mesmo sistema que distribui governo entre presbíteros também distribui correção entre concílios. **A possibilidade de recurso é uma expressão institucional da doutrina da falibilidade humana.**',
    },
    { tipo: 'secao', titulo: '2. Apelação: levar a sentença à instância imediatamente superior' },
    {
      tipo: 'paragrafo',
      texto:
        'A apelação é o recurso ordinário contra sentença que absolve, condena ou anula o processo. Ela leva a causa à instância imediatamente superior. No rito perante Conselho, por exemplo, a decisão disciplinar pode chegar ao plenário do Presbitério. O tribunal superior pode confirmar ou reformar a sentença no todo ou em parte.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O prazo de apelação é de cinco dias, contado da **intimação formal** da sentença. Essa precisão é importante: a presença da parte na sessão de julgamento, sozinha, não substitui necessariamente a ciência formal exigida para iniciar o prazo. O Manual de 2025 incorpora jurisprudência segundo a qual a falta de intimação adequada pode impedir o curso do prazo recursal.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Interposta a apelação, apelante e apelado recebem sucessivamente prazo para razões e contrarrazões. O órgão que julgou não pode ocupar o lugar da parte recorrida e produzir contrarrazões em nome dela. Depois, os autos sobem à instância competente. Na audiência recursal, o relator apresenta seu relatório, as partes podem falar e os juízes votam.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A apelação, em regra, não tem efeito suspensivo. Há ainda uma proteção expressa contra agravamento unilateral: se somente o acusado apelou, a pena não pode ser aumentada. O sistema evita que o simples exercício do direito de recorrer seja transformado em risco de punição maior quando a acusação não provocou a instância superior.',
    },
    { tipo: 'secao', titulo: '3. Revisão: não é uma segunda apelação' },
    {
      tipo: 'paragrafo',
      texto:
        'Revisão é pedido para que o **mesmo tribunal que proferiu a decisão** examine novamente a causa quando surgem elementos novos capazes de modificar o julgado. A distinção para apelação é estrutural: apelação sobe; revisão retorna ao órgão julgador porque algo relevante para a verdade apareceu depois do julgamento.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '“Elemento novo” não significa simplesmente novo argumento jurídico, nova interpretação da mesma prova ou vontade de discutir tudo outra vez. A jurisprudência do Tribunal de Recursos do Supremo Concílio restringe a revisão a elementos anteriormente desconhecidos que possam demonstrar erro no julgamento. Uma revisão usada como apelação tardia esvaziaria a estabilidade das decisões.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Código fixa prazo para o tribunal realizar a revisão depois de admiti-la, mas não estabelece prazo geral de interposição da revisão. Resolução incorporada ao Manual registra essa lacuna e a distingue do prazo expresso da apelação. O estudante deve resistir a inventar prazo por analogia apenas porque seria administrativamente conveniente.',
    },
    { tipo: 'secao', titulo: '4. Recurso extraordinário: controlar legalidade e divergência no topo' },
    {
      tipo: 'paragrafo',
      texto:
        'O recurso extraordinário leva ao Tribunal de Recursos do Supremo Concílio questões específicas: decisões que deixem de cumprir leis ou resoluções do Supremo Concílio, que as contrariem, ou situações de divergência decisória ou jurisprudência questionável. Não é uma terceira oportunidade genérica para discutir qualquer prova ou qualquer pena.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A regularidade formal também importa aqui. O recurso extraordinário não deve simplesmente ser enviado diretamente ao Tribunal do Supremo Concílio ignorando a instância inferior. O Manual incorpora entendimento de que a tramitação precisa respeitar o caminho previsto; suprimir o ato de encaminhamento pode tornar o recurso formalmente inválido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ao contrário da apelação, o Código não contém a mesma regra de ausência automática de efeito suspensivo para o recurso extraordinário. A jurisprudência admite que o relator suspenda a eficácia da decisão em situações excepcionais, quando haja fundamento plausível e risco grave de dano difícil ou impossível de reparar. Isso é exceção cautelar, não resultado automático da interposição.',
    },
    {
      tipo: 'termo',
      termo: 'Apelação, revisão e recurso extraordinário',
      texto:
        'Apelação leva sentença à instância imediatamente superior; revisão pede ao próprio tribunal que reexamine decisão diante de elementos novos; recurso extraordinário provoca o Tribunal de Recursos do Supremo Concílio nas hipóteses restritas de violação de leis ou resoluções superiores e de divergência ou questão jurisprudencial prevista no Código. Cada recurso existe para corrigir um tipo diferente de problema.',
    },
    { tipo: 'secao', titulo: '5. Recurso de ofício: uma hipótese específica, não regra geral' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa de Constituição e Ordem 2 chama atenção para o recurso de ofício do art. 10, § 1º. É importante não generalizá-lo. Ele aparece quando um concílio superior aplica a Conselho ou Presbitério as penas de **interdição ou dissolução**. Nesses casos, a própria lei exige que a matéria siga para o concílio imediatamente superior, ainda que ninguém tenha recorrido voluntariamente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A lógica é institucional: dissolver ou interditar um concílio altera a própria estrutura de governo da igreja e, por isso, a decisão recebe controle obrigatório. Não se deve ensinar que toda condenação de membro ou oficial gera recurso automático. O recurso de ofício é excepcional e vinculado às hipóteses expressas do Código.',
    },
    { tipo: 'secao', titulo: '6. Os chamados recursos inominados da ementa' },
    {
      tipo: 'paragrafo',
      texto:
        'O programa oficial menciona recursos “inominados” ligados aos arts. 41, § 1º, e 54, parte final. O Código não os inclui na lista principal de apelação, revisão e extraordinário, mas abre vias especiais de controle em situações específicas. É por isso que o currículo os trata separadamente.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No primeiro caso, se a parte alega incompetência do tribunal, insiste e continua vencida, pode recorrer à instância superior dentro do prazo previsto. No segundo, se o tribunal **não recebe a queixa ou denúncia**, o queixoso ou denunciante, depois de cientificado, pode dirigir-se diretamente à instância superior. São remédios processuais especiais porque atacam decisões anteriores ao julgamento normal do mérito.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A utilidade pedagógica dessas vias é enorme: processo eclesiástico não oferece revisão apenas depois da condenação. Há mecanismos para corrigir também decisões sobre competência e sobre a própria abertura da causa. Isso evita que um erro de porta de entrada obrigue a parte a atravessar todo um processo apenas para discutir, ao final, que ele nunca deveria ter ocorrido — ou que deveria ter ocorrido diante de outro órgão.',
    },
    { tipo: 'secao', titulo: '7. Execução: decisão não cumprida não é disciplina concluída' },
    {
      tipo: 'paragrafo',
      texto:
        'Depois de definitiva ou eficaz, a pena precisa ser executada pelo concílio competente. O Código determina registro da aplicação na secretaria e, em caso de deposição, comunicação aos concílios superiores e respectivas secretarias executivas. A execução não é uma nova oportunidade para alterar informalmente a pena: é cumprimento do que foi decidido segundo o título sentencial válido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Também aqui a discrição importa. Executar não significa publicar detalhes do processo para satisfazer curiosidade. A forma de ciência da pena precisa respeitar a natureza da falta, as normas da igreja e a finalidade disciplinar. O mesmo processo que protegeu os autos durante o julgamento não deveria terminar com exposição desnecessária depois da sentença.',
    },
    { tipo: 'secao', titulo: '8. Restauração: direito condicionado à prova de arrependimento' },
    {
      tipo: 'paragrafo',
      texto:
        'O art. 134 começa com uma afirmação que muda o horizonte de todo o capítulo: **todo faltoso tem direito à restauração mediante prova de arrependimento**. Isso significa que a disciplina não cria uma categoria permanente de pessoas eclesiasticamente marcadas. A pena pode ser real e severa sem ser uma identidade definitiva.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quando a penalidade tem prazo determinado, ao final o concílio chama o disciplinado e aprecia as provas de arrependimento. Em afastamento por prazo indeterminado ou exclusão, cabe ao faltoso apresentar pedido de restauração. A restauração é ato de tribunal eclesiástico, não de assembleia congregacional, e a competência ordinária permanece com o concílio que exerceu a disciplina, observadas as regras de delegação e situações excepcionais previstas nas resoluções da IPB.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '“Prova de arrependimento” não pode ser reduzida a uma frase emocional nem transformada em exigência impossível de ler o coração. O tribunal observa frutos verificáveis: reconhecimento da falta, abandono da conduta, reparação possível, submissão à disciplina, constância no tempo e disposição de reconstruir comunhão. O arrependimento é espiritual; sua apreciação eclesiástica precisa trabalhar com sinais objetivos porque concílios não possuem acesso infalível ao interior da pessoa.',
    },
    { tipo: 'secao', titulo: '9. Presbíteros, diáconos e ministros: restauração não é simples retorno ao cargo' },
    {
      tipo: 'paragrafo',
      texto:
        'No caso de presbítero ou diácono deposto, a tradição normativa da IPB distingue **ofício** e **mandato local**. A restauração não significa simplesmente recolocar a pessoa no cargo que ocupava antes da disciplina. O retorno ao exercício local depende das regras eleitorais e constitucionais aplicáveis; a restauração não apaga o fato de que o mandato anterior foi interrompido.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para ministros, o Código estabelece restauração gradativa: primeiro admissão à Santa Ceia, depois licença para pregar e, finalmente, reintegração ao ministério. O desenho impede que uma única decisão trate como equivalentes comunhão cristã, exercício público da Palavra e retorno pleno ao ofício ministerial. **O arrependimento pode ser verdadeiro antes de estar reconstruída a confiança necessária para cada nível de responsabilidade.**',
    },
    {
      tipo: 'controversia',
      titulo: 'Arrependimento verdadeiro deve produzir restauração imediata ao ministério?',
      posicoes: [
        {
          escola: 'Restauração ministerial rápida após arrependimento',
          sintese:
            'Enfatiza a plenitude do perdão e teme que longas restrições transformem graça em punição permanente. Sua força é lembrar que a igreja não deve exigir expiação adicional de quem Cristo perdoa. Seu custo é confundir reconciliação espiritual com qualificação e confiança institucional para um ofício que exige reputação e aptidão pública.',
        },
        {
          escola: 'Irreversibilidade prática de certas quedas',
          sintese:
            'Sustenta que algumas faltas tornam imprudente ou inadequado qualquer retorno ao ministério, ainda que a pessoa seja plenamente restaurada à comunhão. Sua força é proteger o rebanho e levar a sério requisitos de reputação. Seu custo é correr o risco de transformar juízo prudencial sobre função em declaração implícita de que a restauração cristã é incompleta.',
        },
        {
          escola: 'Restauração gradativa com distinção entre comunhão e ofício',
          sintese:
            'Distingue perdão, restauração à comunhão e retorno progressivo a responsabilidades ministeriais. É a lógica expressa no Código da IPB para ministros. Sua força é permitir acolhimento real sem fingir que confiança pública se recompõe instantaneamente. Seu custo é exigir acompanhamento longo e decisões prudenciais que não podem ser reduzidas a calendário automático.',
        },
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Restauração eclesiástica',
      texto:
        'É o ato pelo qual o tribunal competente reconhece, mediante sinais suficientes de arrependimento e segundo o Código, que a finalidade corretiva da disciplina foi alcançada e que o faltoso pode retornar à condição e aos privilégios correspondentes. Não apaga a história do processo, não transforma confiança em direito automático e não substitui eleição ou requisitos próprios do ofício; encerra a pena na medida em que a igreja pode fazê-lo sem negar nem a graça nem a responsabilidade.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Simulado 1 — apelação fora do prazo aparente:** antes de concluir intempestividade, determine quando e como ocorreu a intimação formal da sentença.',
        '**Simulado 2 — “prova nova” que já estava nos autos:** explique por que simples releitura da mesma prova não transforma apelação perdida em revisão.',
        '**Simulado 3 — dissolução de Conselho:** identifique por que existe recurso de ofício mesmo sem iniciativa das partes.',
        '**Simulado 4 — denúncia rejeitada:** indique qual via especial o denunciante possui sem esperar julgamento de mérito que nunca começou.',
        '**Simulado 5 — ministro arrependido:** construa um plano de restauração que diferencie ceia, pregação e reintegração ministerial, com critérios observáveis para cada etapa.',
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'O teste final de um sistema disciplinar não é a quantidade de sentenças que ele consegue produzir, mas o que faz depois delas. Um concílio maduro sabe cumprir uma decisão que considera severa demais enquanto usa legitimamente os recursos disponíveis; sabe acolher de volta alguém que o feriu; e sabe dizer a um ministro arrependido que ele é irmão plenamente recebido sem prometer que confiança e ofício voltarão na mesma velocidade. **Graça sem ordem abandona o rebanho; ordem sem restauração abandona o faltoso.** A disciplina presbiteriana só alcança sua finalidade quando consegue sustentar as duas coisas ao mesmo tempo.',
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
      nota: 'Fonte normativa para apelação, revisão, recurso extraordinário, recurso de ofício, vias especiais de controle, execução, restauração e jurisprudência do Tribunal de Recursos do Supremo Concílio.',
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
      nota: 'Oferece o fundamento eclesiológico reformado para autoridade ministerial, censuras e limites do poder dos tribunais da igreja.',
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
      nota: 'Base confessional para compreender a censura como meio ordenado à glória de Cristo, pureza da igreja, dissuasão do pecado e recuperação do faltoso.',
    },
  ],
};
