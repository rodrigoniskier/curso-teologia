import type { Verbete } from '../../tipos';

export const sociologia: Verbete = {
  id: 'cg10-sociologia',
  disciplina: 'CG10',
  unidade: 1,
  titulo: 'Sociologia: enxergar estruturas sem apagar pessoas',
  subtitulo:
    'Uma igreja pode pregar a mesma doutrina para todos e, sem perceber, continuar sendo muito mais acessível para alguns grupos do que para outros',
  objetivo:
    'Ao final, você saberá distinguir Sociologia de senso comum, história, antropologia, economia e teologia; compreender sociedade, cultura, instituições, normas, estratificação, status, papel, processos sociais, grupos e mudança social; reconstruir criticamente a tese de Weber sobre protestantismo e capitalismo; ler dados sociais sem transformar correlação em causa; e aplicar categorias sociológicas aos problemas de pobreza, preconceito, educação, corrupção, política e vida eclesiástica sem reduzir pessoas às estruturas que as condicionam.',
  atualizadoEm: '2026-08-20',
  verMais: ['cg11-antropologia', 'cg63-realidades-regionais', 'th05-igreja-brasileira'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Duas igrejas da mesma cidade confessam a mesma fé, usam a mesma Bíblia e pregam sermões igualmente ortodoxos. Uma reúne quase apenas profissionais com ensino superior; a outra reúne trabalhadores de baixa renda. Uma recebe visitantes sem que ninguém precise explicar como se vestir, onde estacionar, quando levantar ou que palavras o pregador presume conhecidas; na outra, o visitante percebe em cinco minutos que entrou num mundo social que não é o seu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhuma dessas diferenças precisa ter sido planejada. É precisamente aí que começa a pergunta sociológica. **A vida social produz padrões que ninguém sozinho desenhou, mas que depois condicionam o comportamento de todos.** O horário do culto, a linguagem do boletim, o bairro onde o templo está, quem possui carro, quem consegue ler um texto denso, quem conhece as regras não escritas e quem tem tempo livre no domingo à noite podem funcionar como filtros mesmo quando ninguém decidiu excluir pessoa alguma.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Sociologia não substitui a teologia para dizer o que a igreja deve ser. Ela ajuda a perceber o que a igreja, como agrupamento humano situado em determinada sociedade, efetivamente está fazendo. A primeira pergunta é normativa; a segunda é descritiva e explicativa. Confundi-las produz dois erros opostos: tratar um dado social como se fosse mandamento bíblico ou recusar um dado verdadeiro porque ele é desconfortável teologicamente.',
    },

    { tipo: 'secao', titulo: '1. O olhar sociológico: do caso individual ao padrão social' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma pessoa perde o emprego. Isso pode ser explicado por decisões individuais, competência, saúde, conflito ou azar. Dez mil pessoas perdem o emprego no mesmo setor, na mesma região e no mesmo trimestre. Agora existe uma regularidade que nenhuma biografia isolada explica. A Sociologia nasce quando o pesquisador aprende a passar da história individual para as relações, instituições e condições que tornam certos resultados mais prováveis.',
    },
    {
      tipo: 'definicao',
      termo: 'Sociologia',
      texto:
        'Estudo sistemático das sociedades, dos grupos, das instituições e das interações sociais. Investiga como relações relativamente estáveis, normas, posições sociais, organizações e processos históricos moldam possibilidades de ação e, ao mesmo tempo, como pessoas e grupos reproduzem ou transformam essas estruturas.',
    },
    {
      tipo: 'lista',
      itens: [
        '**História** pergunta especialmente como processos e acontecimentos se desenvolveram no tempo; a Sociologia procura também padrões comparáveis entre casos.',
        '**Antropologia** presta atenção particularmente à cultura, às diferenças de sentido e às formas de vida; a Sociologia costuma enfatizar relações, instituições, desigualdades e processos sociais. Na prática, as fronteiras se sobrepõem.',
        '**Economia** estuda produção, distribuição, incentivos e escolhas relativas a recursos; a Sociologia pergunta como classe, instituições, normas e redes moldam inclusive o comportamento econômico.',
        '**Ciência política** concentra-se em poder político, Estado, governo e instituições públicas; a Sociologia examina o poder também em famílias, igrejas, profissões, grupos e organizações.',
        '**Teologia** pergunta, entre outras coisas, o que é verdadeiro diante de Deus e como devemos viver; a Sociologia não possui instrumentos para decidir se uma doutrina é revelada por Deus, mas pode estudar como essa doutrina é recebida, organizada e vivida socialmente.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O erro do reducionismo sociológico é imaginar que, porque uma crença tem condições sociais de transmissão, ela está explicada quanto à sua verdade. Uma proposição matemática também é ensinada por instituições, transmitida por professores e aprendida em comunidades. Descrever sua circulação social não decide se ela é verdadeira. O mesmo cuidado vale para religião.',
    },

    { tipo: 'secao', titulo: '2. Sociedade, cultura e instituições: o cenário que parece natural porque já estava aqui' },
    {
      tipo: 'paragrafo',
      texto:
        'Toda sociedade entrega a seus membros um mundo já parcialmente organizado. Há língua antes de a criança falar, família antes de ela conhecer a palavra família, moeda antes de ela comprar, escola antes de ela aprender a ler e leis antes de ela saber que são leis. Essas formas coletivas não são meros hábitos privados. Elas estruturam expectativas e tornam determinadas ações previsíveis.',
    },
    {
      tipo: 'termo',
      termo: 'Instituição social',
      texto:
        'Conjunto relativamente estável de papéis, normas, práticas e organizações voltado a necessidades recorrentes da vida coletiva. Família, educação, economia, religião, Estado e sistemas jurídicos são exemplos. Uma instituição não é apenas um prédio ou uma organização: é o padrão social que continua existindo mesmo quando seus ocupantes mudam.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cultura é o repertório de sentidos, símbolos, valores, práticas e conhecimentos por meio dos quais as pessoas interpretam o mundo. Sociedade e cultura não são a mesma coisa, mas não podem ser separadas na prática: instituições carregam significados culturais, e significados culturais são transmitidos por instituições.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para o estudante de teologia, essa distinção é especialmente importante. Uma prática eclesiástica pode ser bíblica, confessional, tradicional, regional ou apenas conveniente — e essas categorias não são idênticas. O fato de uma congregação ter feito algo por cinquenta anos prova continuidade social; não prova, sozinho, normatividade bíblica.',
    },

    { tipo: 'secao', titulo: '3. Normas sociais: regras que funcionam mesmo quando nunca foram escritas' },
    {
      tipo: 'paragrafo',
      texto:
        'Algumas normas são formais: constituição, regimento, lei, contrato. Outras existem apenas porque quase todos sabem o que se espera. Numa igreja pode não haver norma escrita sobre roupa, vocabulário, pontualidade, lugar de sentar ou maneira de cumprimentar o pastor; ainda assim, quem viola uma expectativa percebe rapidamente que ela existe.',
    },
    {
      tipo: 'termo',
      termo: 'Norma social',
      texto:
        'Expectativa coletiva sobre comportamento considerado apropriado, esperado ou proibido em determinado contexto. Normas podem ser formais ou informais e são sustentadas por sanções que variam de aprovação e prestígio até reprovação, exclusão, multa ou punição jurídica.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nem toda norma é boa, e nem toda transgressão é virtude. O ponto sociológico vem antes do julgamento moral: identificar qual expectativa está operando e que sanção a mantém. Só depois a teologia moral pergunta se essa norma é justa, indiferente, prudencial ou pecaminosa.',
    },

    { tipo: 'secao', titulo: '4. Estratificação social: desigualdade não é apenas diferença' },
    {
      tipo: 'paragrafo',
      texto:
        'Pessoas são diferentes em idade, profissão, personalidade, renda, escolaridade e experiência. Estratificação começa quando diferenças se organizam de modo relativamente durável em posições desiguais de acesso a recursos, prestígio, segurança, poder ou oportunidades.',
    },
    {
      tipo: 'definicao',
      termo: 'Estratificação social',
      texto:
        'Distribuição estruturada e persistente de pessoas e grupos em posições desiguais dentro de uma sociedade. Pode envolver renda e patrimônio, escolaridade, ocupação, prestígio, poder político, raça, gênero, território e outros marcadores que se combinam de maneiras históricas específicas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A linguagem de estrutura não elimina responsabilidade individual. Ela pergunta por que escolhas semelhantes têm custos diferentes para pessoas situadas em posições diferentes. Um trabalhador que depende de dois ônibus para chegar ao culto noturno enfrenta um obstáculo que o membro com automóvel não percebe. A ausência do primeiro pode ser interpretada moralmente como falta de compromisso quando, sociologicamente, existe também uma barreira material previsível.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O cuidado reformado aqui é duplo. A doutrina do pecado impede romantizar qualquer classe social; ricos e pobres continuam agentes morais. A doutrina da dignidade humana e as exigências bíblicas de justiça impedem o erro contrário de tratar desigualdades produzidas por estruturas injustas como se fossem simples reflexo do mérito pessoal.',
    },

    { tipo: 'secao', titulo: '5. Status e papel: uma pessoa ocupa posições diferentes ao mesmo tempo' },
    {
      tipo: 'paragrafo',
      texto:
        'Um mesmo homem pode ser pai, filho, professor, presbítero, vizinho, eleitor e paciente. Cada posição carrega expectativas parcialmente diferentes. Em Sociologia, a posição é chamada status; o conjunto de comportamentos esperados associado a ela é chamado papel.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Status atribuído:** posição recebida sem escolha direta, como idade, parentesco de origem ou certas classificações sociais.',
        '**Status adquirido:** posição alcançada ou assumida por trajetória, escolha ou reconhecimento, como profissão ou função institucional.',
        '**Papel social:** expectativas associadas a um status. O papel de professor inclui ensinar e avaliar; o de aluno inclui participar e realizar as atividades previstas.',
        '**Conflito de papéis:** ocorre quando expectativas legítimas de posições diferentes entram em tensão — por exemplo, o pastor que também é pai e precisa decidir entre uma reunião extraordinária e uma emergência familiar.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A categoria ajuda a compreender ministério sem transformá-lo em teatro. O ofício pastoral envolve responsabilidades objetivas que não dependem do humor do ministro. Ao mesmo tempo, o pastor não deixa de ser pessoa, marido, pai, cidadão e membro do corpo. Problemas aparecem quando um papel absorve todos os outros e uma instituição começa a exigir disponibilidade ilimitada como prova de fidelidade.',
    },

    { tipo: 'secao', titulo: '6. Processos sociais: cooperação, competição, conflito e acomodação' },
    {
      tipo: 'paragrafo',
      texto:
        'Grupos não permanecem estáticos. Pessoas cooperam para alcançar objetivos comuns, competem por recursos escassos, entram em conflito por valores e interesses, negociam limites e constroem formas provisórias de convivência. Esses movimentos são processos sociais básicos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Conflito não significa automaticamente colapso. Uma sessão de conselho pode conter desacordo forte e ainda funcionar institucionalmente se existem regras legítimas para decisão, registro e revisão. Em sentido inverso, ausência aparente de conflito não prova saúde: um grupo pode estar silencioso porque participantes vulneráveis aprenderam que discordar tem custo alto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Sociologia pergunta quem pode falar, quem define a pauta, que recursos cada parte possui e quais custos recaem sobre quem discorda. A teologia acrescenta perguntas que o método sociológico não resolve: o objetivo é justo? os meios são moralmente lícitos? a autoridade é exercida segundo a Escritura?',
    },

    { tipo: 'secao', titulo: '7. Grupos e agregados: estar perto não significa pertencer' },
    {
      tipo: 'paragrafo',
      texto:
        'Cem pessoas num terminal rodoviário formam um agregado: estão próximas, mas não constituem necessariamente um grupo. Um grupo aparece quando existe interação relativamente estável, reconhecimento mútuo, expectativas e alguma identidade compartilhada. A distinção parece simples, mas ajuda a avaliar a igreja para além da contagem de presentes.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Agregado:** pessoas reunidas circunstancialmente num lugar, sem interação ou identidade estável necessária.',
        '**Grupo primário:** relações mais próximas, duráveis e pessoais, como família e amizade.',
        '**Grupo secundário:** relações mais orientadas por função, objetivo ou organização, como equipe, conselho, empresa ou turma.',
        '**Grupo de referência:** grupo cujos valores ou padrões uma pessoa usa para avaliar a si mesma, mesmo sem pertencer formalmente a ele.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma congregação pode ser instituição, organização e comunidade ao mesmo tempo, mas cada dimensão precisa ser observada. Ter lista de membros demonstra vínculo formal; não demonstra que as pessoas possuem relações de cuidado. Ter pequenos grupos demonstra estrutura de encontro; não demonstra necessariamente confiança. O sociólogo aprende a não inferir relação apenas a partir do organograma.',
    },

    { tipo: 'secao', titulo: '8. Desenvolvimento e mudança social: quando o que parecia permanente deixa de ser' },
    {
      tipo: 'paragrafo',
      texto:
        'Mudança social ocorre quando padrões relativamente estáveis de comportamento, instituições, tecnologia, demografia ou valores se alteram em escala suficiente para modificar a vida coletiva. Urbanização, migração, escolarização, industrialização, redes digitais, mudanças legais e crises econômicas podem reorganizar relações em poucas décadas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O termo desenvolvimento precisa de cuidado. Crescimento econômico é um indicador; não é sinônimo automático de bem-estar, justiça, liberdade, coesão social ou saúde comunitária. A pergunta sociológica deve especificar o que está melhorando, para quem, segundo qual medida e com quais custos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Igrejas também atravessam mudança social. Um bairro pode envelhecer, receber migrantes, perder população para condomínios periféricos ou tornar-se mais caro. A congregação que interpreta todo declínio numérico apenas como problema espiritual pode deixar de perceber que o território ao redor mudou. Reconhecer a mudança não substitui evangelização; torna a missão mais consciente do campo real.',
    },

    { tipo: 'secao', titulo: '9. Weber: o que significa dizer que ideias religiosas têm efeitos sociais?' },
    {
      tipo: 'paragrafo',
      texto:
        'O caso clássico para uma disciplina de Sociologia num seminário é Max Weber. A versão popular diz que “o calvinismo criou o capitalismo”. Essa frase é ruim porque simplifica tanto a teologia reformada quanto o argumento sociológico. Weber investigou uma afinidade histórica entre determinadas formas de ascese protestante e um comportamento econômico racionalizado; seu interesse estava nos efeitos sociais não pretendidos de ideias religiosas.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Na reconstrução de Weber, certas formas de protestantismo intensificaram a busca por disciplina metódica da vida cotidiana.',
        'A vocação profissional passou a ser tratada como campo de dever religioso e não apenas como necessidade material.',
        'Uma vida de trabalho disciplinado associada à restrição do consumo favorecia acumulação e reinvestimento.',
        'Com o tempo, a disciplina econômica poderia sobreviver à motivação religiosa e tornar-se parte de uma ordem social secularizada.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A análise é sociologicamente valiosa porque mostra como doutrinas e práticas podem produzir efeitos históricos que seus agentes não formularam como objetivo. Mas a reconstrução teológica de Weber precisa ser examinada por fontes confessionais. A Confissão de Westminster, por exemplo, não ensina o crente a fundar a certeza da salvação em desempenho econômico ou em sucesso na vocação. O capítulo XVIII ancora a certeza nas promessas de Deus, nas graças que acompanham a fé e no testemunho do Espírito.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como usar Weber sem transformá-lo em propaganda nem espantalho?',
      posicoes: [
        {
          escola: 'Celebração econômica',
          sintese:
            'Converte Weber em elogio do calvinismo como produtor de riqueza. É uma leitura fraca porque ignora a ambivalência do próprio diagnóstico weberiano e confunde consequência histórica proposta por um sociólogo com objetivo teológico da Reforma.',
        },
        {
          escola: 'Rejeição apologética',
          sintese:
            'Descarta toda a análise porque Weber descreve de modo discutível aspectos da doutrina reformada. Isso perde a contribuição sociológica: crenças, organizações e hábitos podem ter efeitos sociais reais mesmo quando a explicação de sua origem teológica precisa de correção.',
        },
        {
          escola: 'Leitura crítica por camadas',
          sintese:
            'Distingue a descrição sociológica do comportamento, a reconstrução histórica das causas e a avaliação teológica da doutrina. É a abordagem deste verbete: cada camada é testada pelas fontes e nenhuma recebe autoridade para responder às perguntas das outras.',
        },
      ],
    },

    { tipo: 'secao', titulo: '10. O Brasil como laboratório: dados religiosos exigem recorte, data e categoria' },
    {
      tipo: 'paragrafo',
      texto:
        'O Censo 2022 oferece um exemplo concreto de mudança social religiosa. Entre pessoas de 10 anos ou mais, os católicos apostólicos romanos passaram de 65,1% em 2010 para 56,7% em 2022; os evangélicos, de 21,6% para 26,9%; e os que se declararam sem religião, de 7,9% para 9,3%. O dado mostra mudança de composição. Ele não explica sozinho por que ela ocorreu.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'É aqui que uma leitura sociológica madura se distingue de manchete. Percentual não é causa. Para explicar mudança de afiliação seria necessário investigar geração, território, migração, redes familiares, mobilidade social, organizações religiosas, experiência individual e outros fatores. O Censo também usa categorias declaradas pelos próprios respondentes; “evangélico” reúne tradições bastante diferentes, e “sem religião” não significa automaticamente ateísmo.',
    },
    {
      tipo: 'lista',
      itens: [
        'Pergunte sempre **qual é a população**: todos os brasileiros ou pessoas de determinada idade?',
        'Pergunte **qual é o ano de referência** e se há comparação legítima com o levantamento anterior.',
        'Pergunte **como a categoria foi definida** e se grupos diferentes foram agregados.',
        'Separe **descrição** (“a proporção aumentou”) de **explicação** (“aumentou por causa de…”).',
        'Evite transformar tendência nacional em descrição automática da sua cidade ou congregação; consulte o recorte territorial disponível.',
      ],
    },

    { tipo: 'secao', titulo: '11. A igreja e os problemas sociais: quatro temas da ementa, quatro erros a evitar' },
    {
      tipo: 'paragrafo',
      texto:
        'A última unidade do currículo não pede apenas conceitos. Ela coloca pobreza, preconceito e educação, corrupção e política diante da igreja. O desafio é abordar cada tema sem trocar explicação sociológica por slogan partidário e sem transformar exortação moral em substituto de análise.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Pobreza:** não reduza toda pobreza a falha moral individual nem toda desigualdade a opressão estrutural. Investigue renda, patrimônio, trabalho, território, educação, saúde, redes de apoio e políticas públicas; depois avalie responsabilidades pessoais e institucionais à luz da ética bíblica.',
        '**Preconceito e educação:** observe como expectativas, estereótipos, acesso desigual, qualidade institucional e redes sociais afetam trajetórias. A negação abstrata de preconceito não prova sua ausência, assim como diferença estatística isolada não prova automaticamente discriminação causal.',
        '**Corrupção:** não é apenas defeito de caráter de agentes individuais. Incentivos, controles, transparência, concentração de poder, impunidade e normas informais podem tornar práticas corruptas mais fáceis ou mais custosas. Estrutura não inocenta o corrupto; ajuda a explicar por que certos ambientes o multiplicam.',
        '**Política:** distinguir igreja, membros da igreja, Estado, partidos e esfera pública evita confusão. A Sociologia pode mapear coalizões, identidades, interesses e efeitos institucionais; não possui autoridade para transformar uma preferência partidária em doutrina cristã.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A contribuição especificamente cristã não é usar a Sociologia para encontrar um grupo politicamente conveniente, mas recusar duas reduções. A pessoa não é apenas produto de classe, raça, partido ou instituição; é criatura moral diante de Deus. Ao mesmo tempo, pessoas morais vivem dentro de estruturas reais que podem facilitar justiça ou injustiça. Uma antropologia cristã robusta permite sustentar agência e estrutura sem sacrificar uma à outra.',
    },

    { tipo: 'secao', titulo: '12. Um método simples para analisar sociologicamente a própria igreja' },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Defina a pergunta.** “Nossa igreja é acolhedora?” é amplo demais. “Que grupos do bairro estão sub-representados entre visitantes e membros?” é observável.',
        '**Descreva antes de explicar.** Conte presença, idade, território, horários, meios de transporte ou escolaridade quando esses dados forem lícitos e necessários. Não invente causa antes de conhecer o padrão.',
        '**Compare.** A composição da congregação só ganha sentido quando comparada ao território, ao longo do tempo ou entre atividades diferentes.',
        '**Procure normas informais.** Que comportamento um visitante precisa aprender sem que ninguém explique?',
        '**Mapeie posições e papéis.** Quem decide, quem executa, quem possui informação, quem é ouvido e quem arca com o custo de cada decisão?',
        '**Formule hipóteses concorrentes.** Se jovens deixaram de participar, teste mais de uma explicação: horário, linguagem, trabalho, transporte, conflito, ciclo de vida, mudança de bairro.',
        '**Ouça pessoas afetadas.** Dado quantitativo identifica padrão; entrevista, observação e conversa podem ajudar a compreender significado e mecanismo.',
        '**Separe diagnóstico de norma.** Depois de entender o que está acontecendo, volte à Escritura, à confissão e à prudência pastoral para decidir o que deve mudar.',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Imaginação sociológica',
      texto:
        'Disciplina de conectar experiências pessoais a padrões sociais mais amplos sem apagar nenhuma das duas dimensões. Em vez de concluir imediatamente que um problema é apenas individual ou apenas estrutural, pergunta como biografia, instituição, cultura e história se encontram naquele caso.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A Sociologia é mais útil à igreja quando funciona como espelho, não como senhor. Ela pode revelar que determinado horário exclui trabalhadores, que uma linguagem presume escolaridade alta, que um grupo de liderança reproduz sempre a mesma rede social ou que uma comunidade mudou ao redor de um templo que permaneceu igual. Nenhum desses dados diz por si só o que Deus ordena. Mas ignorá-los pode permitir que hábitos contingentes sejam defendidos como fidelidade. A igreja não deve ser governada pela demografia, pela classe social ou por pesquisa de opinião. Deve, porém, amar pessoas reais no mundo real — e isso exige enxergar as estruturas nas quais essas pessoas vivem.',
    },
  ],
  fontes: [
    {
      id: 'openstax-sociology3',
      autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang',
      ano: '2021',
      titulo: 'Introduction to Sociology 3e',
      publicacao: 'OpenStax / Rice University',
      url: 'https://openstax.org/details/books/introduction-sociology-3e',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota:
        'Livro-texto aberto usado para a arquitetura conceitual das unidades de Sociologia Geral: sociedade, cultura, instituições, normas, estratificação, status, papéis, grupos, pesquisa e mudança social. A exposição do portal é própria e adaptada ao contexto teológico.',
    },
    {
      id: 'sep-weber',
      autor: 'Stanford Encyclopedia of Philosophy',
      ano: '—',
      titulo: 'Max Weber',
      publicacao: 'Stanford University',
      url: 'https://plato.stanford.edu/entries/weber/',
      idioma: 'en',
      tipo: 'verbete',
      acesso: 'livre',
      nota:
        'Exposição acadêmica revisada por especialistas sobre Weber, racionalização, ação social, religião e a tese da ética protestante. Serve para reconstruir o argumento antes de avaliá-lo teologicamente.',
    },
    {
      id: 'ibge-censo2022-religioes',
      autor: 'Instituto Brasileiro de Geografia e Estatística',
      ano: '2025',
      titulo: 'Censo Demográfico 2022 — Religiões: resultados preliminares da amostra',
      publicacao: 'IBGE / SIDRA',
      url: 'https://sidra.ibge.gov.br/pesquisa/censo-demografico/demografico-2022/amostra-religioes',
      idioma: 'pt',
      tipo: 'relatorio',
      acesso: 'livre',
      nota:
        'Fonte oficial para composição religiosa brasileira e seus recortes demográficos e territoriais. Os percentuais usados no verbete referem-se à população de 10 anos ou mais e ao ano censitário de 2022.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota:
        'O capítulo XVIII é usado para testar a reconstrução que Weber faz da certeza protestante. A fonte confessional deve ser lida diretamente antes de se atribuir à tradição reformada uma determinada psicologia da salvação.',
    },
  ],
};
