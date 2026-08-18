import type { Verbete } from '../../tipos';

export const psicopatologia: Verbete = {
  id: 'cg64-psicopatologia',
  disciplina: 'CG64',
  unidade: 2,
  titulo: 'Psicopatologia',
  subtitulo:
    'O conselho de que basta orar mais tem menos tradição do que parece: os puritanos mandavam o melancólico ao médico',
  objetivo:
    'Ao final, você saberá por que tratar depressão como falta de fé é inovação recente e não herança reformada, distinguirá tristeza de transtorno depressivo pelo marcador que decide a questão, entenderá por que "confie em Deus" não funciona no meio de uma crise de pânico e o que funciona, reconhecerá o TOC de conteúdo religioso como sintoma em vez de pecado, conhecerá as três posições em disputa sobre a relação entre igreja e psiquiatria, e terá critérios explícitos de encaminhamento — inclusive para risco de suicídio.',
  atualizadoEm: '2026-08-18',
  verMais: ['tp03-aconselhamento', 'tp04-aconselhamento-2', 'tp02-poimenica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Uma pessoa da igreja para de aparecer. Quando alguém finalmente vai à casa dela, encontra-a há semanas sem conseguir levantar da cama, sem tomar banho, sem vontade de nada — nem das coisas de que sempre gostou. E o que ela ouve, com boa intenção, é que precisa orar mais, confiar mais, participar mais. Como se não estivesse tentando.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse conselho costuma vir embrulhado num argumento de autoridade: *antigamente não existia isso*, a igreja resolvia com fé, a psiquiatria é invenção secular. O argumento tem um problema de fato, e ele é fácil de checar.',
    },
    {
      tipo: 'secao',
      titulo: 'O que a tradição de fato disse sobre melancolia',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em 1621, um clérigo anglicano chamado Robert Burton publicou um tratado de mais de mil páginas sobre a melancolia. Não é livro devocional: examina causas físicas — dieta, sono, humores, ar, hereditariedade —, descreve sintomas com precisão clínica e prescreve remédios corporais junto com os espirituais. Burton escrevia sobre o que conhecia por dentro, e disse que escrevia sobre a melancolia para se ocupar da própria.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Richard Baxter, um século depois, tratou do assunto num sermão cujo título já resolve a discussão: *A cura da melancolia e da tristeza excessiva pela fé* **e pela medicina**. Baxter não era liberal e não estava relativizando a suficiência da Escritura. Estava observando o óbvio: há um corpo envolvido, e ignorá-lo não é piedade, é imprudência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**A conclusão desmonta o argumento de autoridade pela raiz.** A ideia de que tristeza patológica se resolve exclusivamente por meios espirituais não é a posição histórica da tradição reformada — é um desvio recente, nascido em boa parte da reação do século XX contra a psicologia. Quem a defende invocando os antigos está do lado contrário ao dos antigos que invoca.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E há um episódio bíblico que trata o assunto com um realismo que costuma escandalizar. Elias, logo depois da maior vitória pública de seu ministério, foge para o deserto, senta-se debaixo de um zimbro e pede para morrer.',
    },
    {
      tipo: 'passagem',
      referencia: '1 Reis 19.5-7',
      texto:
        'E deitou-se, e dormiu debaixo do zimbro; e eis que então um anjo o tocou, e lhe disse: Levanta-te, come. E olhou, e eis que à sua cabeceira estava um pão cozido sobre as brasas, e uma botija de água; e comeu, e bebeu, e tornou a deitar-se. E o anjo do Senhor tornou segunda vez, e o tocou, e disse: Levanta-te e come, porque não te será longa a jornada.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Note a ordem das providências. Antes de qualquer palavra de correção, antes da pergunta *que fazes aqui, Elias?*, antes do vento, do terremoto e do fogo — **duas refeições e duas dormidas**. Deus trata primeiro o corpo do profeta. Não porque o espiritual não importe, mas porque um homem exausto e desnutrido não está em condição de ouvir nada. A sequência do texto é, ela mesma, um protocolo pastoral.',
    },
    {
      tipo: 'secao',
      titulo: 'Onde está a linha entre tristeza e transtorno',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tristeza não é doença. Luto não é doença. A Escritura tem um livro inteiro de lamentações e um terço do saltério em tom menor, e nada disso é sintoma. A pergunta prática do pastor não é *esta pessoa está triste?*, mas *o que estou vendo é sofrimento ou é adoecimento?* — e existe um marcador que decide a questão melhor do que a intensidade do choro.',
    },
    {
      tipo: 'termo',
      termo: 'Anedonia',
      texto:
        'Perda da capacidade de sentir prazer ou interesse por aquilo que antes dava prazer. É o marcador que mais distingue tristeza de depressão, e é mais confiável que a queixa de tristeza: quem está triste ainda ri de uma piada boa, ainda quer ver o neto, ainda gosta do próprio café. Na depressão, a máquina do prazer desliga — e a pessoa relata isso como estranhamento, não como escolha. Combinada a duração de semanas, prejuízo do sono, do apetite e da capacidade de trabalhar, a anedonia é o sinal de que se saiu do terreno da tristeza.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'É preciso dizer o que essa distinção **não** significa. Não são duas caixas lacradas, com o espiritual de um lado e o clínico do outro. Um deprimido pode estar em pecado; um pecador pode estar deprimido; e a maior parte das pessoas que procuram o pastor traz as duas coisas misturadas, sem saber separá-las. **O erro pastoral quase nunca está em enxergar dimensão espiritual — está em enxergar só ela**, e em usar essa leitura para dispensar o encaminhamento.',
    },
    {
      tipo: 'secao',
      titulo: 'Pânico e TOC: por que o conselho certo dado na hora errada não funciona',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma crise de pânico é um disparo do sistema de alarme do corpo sem que haja o perigo correspondente: taquicardia, falta de ar, tremor, formigamento, sensação de morte iminente. Dura em geral poucos minutos, atinge o pico depressa e passa — e, enquanto acontece, a pessoa está com o organismo em estado de fuga, com o raciocínio deliberado praticamente indisponível.',
      },
    {
      tipo: 'paragrafo',
      texto:
        'Por isso dizer *confie em Deus* no meio de uma crise não ajuda, e a razão não é teológica: é fisiológica. Não há nada de errado com o conteúdo do conselho — há com o momento. O que ajuda ali é o que baixa o alarme: presença calma, ajudar a alongar a expiração, dizer que aquilo passa e não mata, não discutir. **A conversa sobre confiança vem depois, quando existe alguém em condições de ter conversa.** E quem confunde uma coisa com a outra costuma concluir, erradamente, que a pessoa não quis crer.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O caso do transtorno obsessivo-compulsivo é ainda mais traiçoeiro para a igreja, porque nele o conteúdo religioso aparece como sintoma. A pessoa é assaltada por pensamentos blasfemos que abomina, confessa o mesmo pecado pela quinquagésima vez, repete a oração até sair *certa*, teme ter cometido o pecado imperdoável. Tratar isso como problema de consciência é alimentar exatamente o mecanismo que produz o sofrimento: **cada nova garantia dada funciona como compulsão, alivia por minutos e reforça o ciclo.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quem quiser ver o quadro por dentro tem à mão um documento notável, e escrito por um dos maiores autores da tradição: a autobiografia espiritual de John Bunyan descreve anos de pensamentos intrusivos, blasfêmias involuntárias, certeza de condenação e busca compulsiva de sinais. Bunyan não tinha esse vocabulário; descreveu o fenômeno com exatidão mesmo assim, e saiu do outro lado. Ler *Grace Abounding* poupa o pastor de tratar como incredulidade o que a história da igreja já viu, nomeou de outro jeito e atravessou.',
    },
    {
      tipo: 'controversia',
      titulo: 'Que relação a igreja deve ter com a psiquiatria',
      posicoes: [
        {
          escola: 'Suficiência estrita da Escritura',
          sintese:
            'Na linha do aconselhamento nouthético: a Escritura é suficiente para todo problema não orgânico, e as categorias psiquiátricas rebatizam de doença aquilo que a Bíblia chama de pecado, sofrimento ou provação. Tem o mérito de recusar o determinismo que dissolve a responsabilidade — e o defeito de precisar decidir de antemão o que é orgânico, justamente aquilo que só o exame clínico estabelece.',
        },
        {
          escola: 'Integração pela graça comum',
          sintese:
            'A medicina descreve verdadeiramente o corpo porque toda verdade é de Deus, e recusar o que ela apurou sobre sono, neurotransmissores e ansiedade é o mesmo obscurantismo que recusaria antibiótico. Usa as duas ordens sem confundi-las. Recebe a objeção — legítima — de que muita psicologia embute uma antropologia incompatível com a bíblica, e de que a integração, feita sem discernimento, importa a antropologia junto com a técnica.',
        },
        {
          escola: 'Encaminhamento com acompanhamento',
          sintese:
            'Posição de trabalho antes que teoria: o pastor não tenta ser terapeuta nem prescrever, encaminha ao profissional, e ao mesmo tempo não desaparece — segue visitando, ceando, incluindo. Resolve na prática o que as outras duas disputam no princípio, e por isso mesmo é acusada de adiar a pergunta de fundo sobre o estatuto das categorias psiquiátricas. Em compensação, é a única das três que ninguém precisa resolver antes de agir na terça-feira.',
        },
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Psicopatologia',
      texto:
        'O estudo descritivo do sofrimento mental adoecido: como se reconhecem, se distinguem e se agrupam alterações do humor, da ansiedade, do pensamento e da percepção que ultrapassam a variação normal e comprometem o funcionamento da pessoa. Para o pastor, o objetivo de estudá-la **não é diagnosticar** — diagnóstico é ato de profissional habilitado, e pastor que diagnostica erra duas vezes, na medicina e no ofício. O objetivo é o inverso e mais modesto: **reconhecer quando o que está diante de si excede o alcance do aconselhamento**, para encaminhar a tempo e continuar presente depois — sem tratar a doença como culpa e sem tratar a culpa como doença.',
    },
    {
      tipo: 'secao',
      titulo: 'Quando encaminhar, sem hesitar',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Não é preciso saber psiquiatria para reconhecer um limite. Estes sinais são suficientes, e quando aparecem o encaminhamento deixa de ser opção.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Qualquer menção a tirar a própria vida** — plano, meio, despedida, ou a frase de que seria melhor não acordar. Pergunte diretamente se a pessoa pensou em se matar: perguntar não sugere a ideia, e é a única forma de saber. Não deixe a pessoa sozinha, procure a família, e leve ao serviço de emergência se houver plano ou meio à mão. No Brasil, o CVV atende no **188**, de graça e 24 horas.',
        '**Sintomas que duram semanas e não cedem**, sobretudo com perda de sono, de apetite e de peso, e com incapacidade de trabalhar ou cuidar dos filhos.',
        '**Alucinação, delírio ou desorganização do pensamento** — ouvir vozes, crença fixa e impermeável a evidência, fala que perde o fio. Aqui o encaminhamento é urgente, e a interpretação espiritual precipitada faz dano rápido.',
        '**Alternância entre períodos de euforia, gasto e insônia sem cansaço, e períodos de queda profunda.** É o padrão do transtorno bipolar, e ele responde a tratamento específico que o aconselhamento não substitui.',
        '**Uso de álcool ou outra substância como forma de dormir ou de aguentar o dia.**',
        '**Recaída de quem já tinha diagnóstico e parou o remédio** — muitas vezes por conselho recebido na própria igreja. Essa é, das causas evitáveis, a mais comum e a mais grave.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Encaminhar não é entregar a pessoa e sair de cena. O que se encaminha é o tratamento, não o cuidado pastoral — e a pessoa vai precisar dos dois, sabendo que continua sendo membro e não virou caso.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Falta a parte que o currículo põe por último e que costuma ser a primeira a cobrar: a sua. Spurgeon dedicou aos próprios desfalecimentos uma aula inteira, e disse que o ministro que nunca esteve por baixo dificilmente saberá levantar quem está — mas disse também que aquilo lhe vinha sem causa, como névoa, e que a piedade não o impedia. O ofício tem características que fabricam adoecimento: você trabalha quando os outros descansam, carrega o que ouviu sem poder repetir a ninguém, é avaliado semanalmente em público, e a única pessoa da igreja que não tem pastor é você. Some-se a isso a suspeita, tão comum em nosso meio, de que procurar ajuda seria confessar fraqueza espiritual — e está montada a armadilha. Vale inverter o argumento, porque ele é o mesmo que você usará com os outros: se o corpo do profeta precisou de pão e sono antes de ouvir a voz de Deus, o seu não é diferente. **Um pastor que se recusa a cuidar de si não está sendo dedicado; está exigindo de si uma condição que nem Elias teve.**',
    },
  ],
  fontes: [
    {
      id: 'burton-melancolia',
      autor: 'Robert Burton',
      ano: '1621',
      titulo: 'The Anatomy of Melancholy',
      publicacao: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/10800',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratado de mais de mil páginas escrito por um clérigo anglicano que examinava causas físicas da melancolia — sono, dieta, hereditariedade — e prescrevia remédios corporais ao lado dos espirituais. É a prova documental de que a tradição cristã tratava melancolia como doença três séculos antes da psiquiatria.',
    },
    {
      id: 'bunyan-grace-abounding',
      autor: 'John Bunyan',
      ano: '1666',
      titulo: 'Grace Abounding to the Chief of Sinners',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/graceaboundingto00buny_0',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A autobiografia espiritual do autor de O Peregrino, e o melhor relato em primeira pessoa que a tradição produziu de pensamentos intrusivos, blasfêmias involuntárias e busca compulsiva de garantia. Bunyan não dispunha do vocabulário clínico e descreveu o quadro com exatidão mesmo assim.',
    },
    {
      id: 'spurgeon-licoes',
      autor: 'Charles Haddon Spurgeon',
      ano: '1877',
      titulo: 'Lectures to My Students — cap. XI, "The Minister\'s Fainting Fits"',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/lecturestomystud1877spur',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A aula em que Spurgeon trata da própria depressão diante dos seus alunos, sem eufemismo: descreve a névoa que lhe vinha sem causa aparente, nega que piedade impeça o quadro, e argumenta que o ministro que nunca esteve por baixo dificilmente saberá levantar quem está.',
    },
    {
      id: 'cid-11',
      autor: 'Organização Mundial da Saúde',
      ano: '2022',
      titulo: 'CID-11 — Classificação Internacional de Doenças, 11ª revisão',
      publicacao: 'OMS',
      url: 'https://icd.who.int/pt',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'A classificação oficial da OMS, em português e de consulta gratuita, com os critérios descritivos dos transtornos de humor e de ansiedade citados neste verbete. Serve ao pastor não para diagnosticar, e sim para entender o que o profissional está dizendo quando devolve um laudo.',
    },
    {
      id: 'cvv',
      autor: 'Centro de Valorização da Vida',
      titulo: 'CVV — apoio emocional e prevenção do suicídio (telefone 188)',
      publicacao: 'CVV',
      url: 'https://cvv.org.br/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Atendimento gratuito e sigiloso por telefone, chat e e-mail, 24 horas, pelo número 188. Não substitui tratamento nem cuidado pastoral, e é o recurso imediato quando aparece o primeiro item da lista de encaminhamento deste verbete.',
    },
  ],
};
