import type { Verbete } from '../../tipos';

export const metodologia: Verbete = {
  id: 'cg06-metodologia',
  disciplina: 'CG06',
  unidade: 4,
  titulo: 'Metodologia da Pesquisa',
  subtitulo: 'A falha mais comum numa monografia de seminário não é escrever mal — é já saber a resposta',
  objetivo:
    'Ao final, você saberá distinguir pesquisa de defesa e por que confundi-las produz trabalho fraco mesmo quando a conclusão é correta, entenderá a diferença entre fonte primária e secundária e o que ela cobra de você, reconhecerá as formas de plágio que os estudantes não identificam como plágio, e terá uma posição defensável sobre se é possível pesquisar teologia com neutralidade.',
  atualizadoEm: '2026-08-16',
  verMais: ['cg58-logica', 'te12-hermeneutica', 'ts01-prolegomenos'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um estudante escolhe como tema da monografia a defesa do batismo infantil. Ele já sustenta a posição, já sabe onde ela está na Confissão e já tem em mente três argumentos. O trabalho consistirá em reuni-los, encontrar autores que os digam melhor e organizar tudo em capítulos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O resultado pode ser correto do começo ao fim e ainda assim não ser pesquisa. É advocacia com notas de rodapé — uma conclusão fixada antes e um percurso construído para chegar até ela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale dizer de saída que a tentação é maior em teologia do que em quase qualquer outra área, e por um motivo respeitável: o estudante já pertence a uma igreja que confessa alguma coisa, e não se espera dele indiferença quanto ao que é verdadeiro. O problema não é ter convicção. É que a convicção, sem método, dispensa o trabalho de verificar.',
    },
    {
      tipo: 'secao',
      titulo: 'Pesquisar e defender são atividades diferentes',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As duas são legítimas, e a confusão entre elas é que estraga. Uma defesa parte de uma posição e busca sustentá-la; uma pesquisa parte de uma pergunta e vai onde as evidências levarem. Um sermão é defesa, e deve ser. Uma monografia é pesquisa, mesmo quando termina defendendo aquilo em que o autor já cria.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há um teste simples para saber em qual das duas você está: **procure, no seu trabalho, a versão mais forte da posição contrária**. Se ela não estiver lá, ou se estiver numa forma que nenhum adversário competente reconheceria como sua, você escreveu uma defesa e a chamou de pesquisa. Se estiver lá, na melhor formulação que você conseguiu encontrar, e ainda assim você concluiu contra ela — aí você pesquisou, e a conclusão vale muito mais.',
    },
    {
      tipo: 'definicao',
      termo: 'Trabalho acadêmico',
      texto:
        'Texto que responde a uma pergunta delimitada por meio de um procedimento que o leitor pode repetir e verificar. Os três elementos importam por igual: a pergunta precisa ser delimitada o bastante para ser respondida, o procedimento precisa estar explícito, e as fontes precisam estar identificadas de modo que outra pessoa chegue a elas. O que distingue o trabalho acadêmico do ensaio não é o tom nem o vocabulário — é ser verificável.',
    },
    {
      tipo: 'secao',
      titulo: 'A delimitação, onde a maioria já se perde',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O erro mais frequente aparece antes da primeira linha escrita: o tema é grande demais. "A doutrina da justificação" não é tema de monografia; é tema de vida. "A soteriologia de Calvino" também não. Um tema desse tamanho força o autor a resumir manuais, porque não há como examinar fontes primárias de um assunto tão largo — e resumir manuais é exatamente o que uma monografia não deveria ser.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A delimitação boa costuma ter três cortes: um recorte de assunto, um de corpus e um de tempo ou autor. Compare "a doutrina da justificação" com "o uso de Gênesis 15.6 na argumentação de Romanos 4 segundo o comentário de Calvino". O segundo cabe num semestre, permite ler tudo o que precisa ser lido e produz uma resposta que ninguém mais escreveu exatamente assim.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um sinal prático de que o tema está bom: você consegue enunciá-lo como **pergunta**, e a pergunta admite mais de uma resposta plausível. Se só admite uma, não há o que pesquisar; se admite infinitas, não foi delimitada.',
    },
    {
      tipo: 'secao',
      titulo: 'Fonte primária e fonte secundária',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Fonte primária é o documento que você está estudando: o texto bíblico no original, a Institutas quando o assunto é Calvino, as atas quando o assunto é um concílio. Fonte secundária é o que outra pessoa escreveu sobre ele.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A regra que decorre disso é ignorada com espantosa frequência: **citar Calvino a partir de um manual que cita Calvino não é citar Calvino**. É citar o manual. E quando o manual errou, cortou o contexto ou traduziu de modo tendencioso, o erro entra no seu trabalho com a aparência de ter vindo da fonte.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Quando não houver mesmo como alcançar o original — obra sem tradução, manuscrito inacessível —, existe uma forma honesta de registrar isso: a citação indireta, indicada por *apud*, que informa ao leitor que você leu em segunda mão. É legítima, e deve ser rara. Um trabalho cheio de *apud* está dizendo, sem querer, que o autor não foi às fontes.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'É por isso que o acesso livre a obras primárias muda a natureza do que se pode exigir de um estudante. Há vinte anos, alguém sem biblioteca institucional tinha desculpa para citar Turretini por intermédio de terceiros. Hoje o texto está na internet inteiro, e a desculpa acabou.',
    },
    {
      tipo: 'secao',
      titulo: 'Plágio, inclusive nas formas que não parecem plágio',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A definição estreita — copiar frases sem aspas — é a que todo mundo conhece e a que menos ocorre entre estudantes de boa-fé. As formas frequentes são outras, e vale nomeá-las.',
    },
    {
      tipo: 'lista',
      itens: [
        'Paráfrase sem crédito. Reescrever o raciocínio de alguém com outras palavras e não indicar de quem é. A ideia continua sendo do autor original; trocar as palavras não a transfere para você.',
        'Citação de segunda mão silenciosa. Encontrar em um livro uma citação de outro e reproduzi-la como se você tivesse ido à fonte. É a forma mais comum em trabalhos de teologia, e o sinal é a nota de rodapé que aponta para uma edição que o autor nunca teve em mãos.',
        'Estrutura emprestada. Seguir a organização argumentativa de uma obra — mesmos passos, mesma ordem, mesmos exemplos — sem dizer que está seguindo. Ainda que cada frase seja sua, o plano do trabalho é de outra pessoa.',
        'Autoplágio. Reapresentar como novo um trabalho já entregue em outra disciplina. Não fere direito de terceiro, mas fere o objetivo da tarefa, que era você fazer aquilo agora.',
        'Texto gerado e assinado como próprio. Entregar como seu o que uma ferramenta produziu, sem declaração. Vale a mesma regra das demais: o problema não é a ferramenta, é a assinatura.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sobre este último ponto convém ser direto, porque a pergunta é nova e a resposta não é óbvia para todo mundo. Uma monografia não existe para produzir um documento — existe para formar quem a escreve. Quem terceiriza o trabalho pode entregar um texto melhor do que faria sozinho, e terá perdido exatamente aquilo pelo que a tarefa existia. É um prejuízo que não aparece na nota e aparece no ministério.',
    },
    {
      tipo: 'secao',
      titulo: 'As normas existem por uma razão, e não é burocrática',
    },
    {
      tipo: 'paragrafo',
      texto:
        'As regras de citação e referência — no Brasil, as da ABNT, com as adaptações que cada instituição adota — costumam ser vividas como aborrecimento. Mas o que elas garantem é uma coisa só, e é a mesma que sustenta toda a atividade: **que o leitor consiga chegar ao que você leu**.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Daí decorre o critério para resolver os casos que a norma não previu: pergunte se a informação que você deu basta para outra pessoa encontrar a fonte. Se um endereço eletrônico pode mudar, registre a data de acesso. Se a edição importa para a paginação citada, informe a edição. A norma é o formato; a finalidade é a verificabilidade, e quando as duas parecerem brigar, é a finalidade que decide.',
    },
    {
      tipo: 'controversia',
      titulo: 'É possível pesquisar teologia com neutralidade?',
      posicoes: [
        {
          escola: 'Objetividade metodológica',
          sintese:
            'O pesquisador deve suspender suas convicções durante a investigação e deixá-las de fora do procedimento, do mesmo modo que faria em qualquer disciplina acadêmica. Preserva algo indispensável — a disposição de mudar de opinião diante da evidência. A dificuldade é que ninguém suspende de fato aquilo que considera verdadeiro, e a suspensão declarada costuma esconder pressupostos que continuam operando sem exame.',
        },
        {
          escola: 'Impossibilidade da neutralidade',
          sintese:
            'Não há investigação sem pressuposto, e fingir neutralidade é apenas ocultar o ponto de partida; o honesto é declará-lo e argumentar a partir dele. É a posição que decorre da antítese kuyperiana. O risco é servir de licença para não examinar o próprio pressuposto — se toda pesquisa é comprometida, a minha estaria dispensada de prestar contas, o que não segue.',
        },
        {
          escola: 'Imparcialidade em vez de neutralidade',
          sintese:
            'Neutralidade é impossível, mas imparcialidade é verificável: não se exige do pesquisador que não tenha posição, e sim que represente a posição contrária de modo que seu defensor a reconheça, e que exponha as evidências que trabalham contra ele. É a exigência que este verbete adota, e a vantagem é ser testável por qualquer leitor — basta procurar, no trabalho, a melhor versão do outro lado.',
        },
      ],
    },
    {
      tipo: 'pastoral',
      texto:
        'Há uma razão pastoral para levar isto a sério que não tem a ver com nota nem com diploma. O ministro passará a vida afirmando coisas diante de pessoas que não têm como conferi-las — sobre o que um texto grego diz, sobre o que um autor sustentou, sobre o que a igreja sempre creu. A congregação vai acreditar, porque confia. Quem se acostuma, no seminário, a citar o que não leu e a atribuir a outros o que não verificou está formando o hábito que depois exercerá sobre gente indefesa. O rigor acadêmico, aqui, não é exigência da instituição: é treino de honestidade em condições em que a desonestidade é fácil e quase nunca é descoberta. E há o lado bom da mesma moeda: quem se habitua a ir às fontes descobre, mais cedo ou mais tarde, que alguma coisa que ele repetia com segurança não estava lá — e essa descoberta, humilhante e libertadora, é uma das melhores que a formação pode dar.',
    },
    {
      tipo: 'lista',
      itens: [
        'Antes de começar, enuncie o tema como pergunta. Se não couber numa frase interrogativa, ainda não foi delimitado.',
        'Ao montar a bibliografia, separe fisicamente as fontes primárias das secundárias. Se a primeira lista estiver quase vazia, o trabalho ainda não começou.',
        'Ao encontrar uma citação num livro, vá à obra citada antes de reproduzi-la. Se não conseguir, escreva apud — e conte quantas vezes precisou fazer isso.',
        'Ao terminar um capítulo, procure nele a melhor versão da posição que você rejeita. Se não achar, ela não está lá, e o capítulo não está pronto.',
        'Ao formatar, resolva os casos omissos perguntando se o leitor conseguiria chegar à fonte com o que você forneceu.',
      ],
    },
  ],
  fontes: [
    {
      id: 'watts-improvement',
      autor: 'Isaac Watts',
      ano: '1741',
      titulo: 'The Improvement of the Mind: or, a Supplement to the Art of Logick',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/suppimproveofmin00wattuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratado sobre como estudar, ler, tomar notas, conversar e escrever, escrito pelo mesmo pastor autor da Logick. É o clássico de método intelectual da tradição protestante e trata de coisas que os manuais atuais de metodologia raramente abordam — como o modo de ler um livro com que se discorda. Domínio público.',
    },
    {
      id: 'watts-logick',
      autor: 'Isaac Watts',
      ano: '1724',
      titulo: 'Logick: or, The Right Use of Reason in the Enquiry after Truth',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/logickorrightuse00wattuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O volume complementar, sobre a estrutura do raciocínio. Metodologia sem lógica produz trabalho bem formatado e mal argumentado — as duas disciplinas se sustentam mutuamente e foram escritas para serem lidas juntas.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Modelo de procedimento: cada questão começa delimitando o estado da controvérsia, separando o que está e o que não está em disputa, antes de argumentar. É a delimitação de tema aplicada à teologia, feita por quem a levava ao extremo. Domínio público.',
    },
    {
      id: 'bavinck-rd-monergism',
      autor: 'Herman Bavinck',
      ano: '1895',
      titulo: 'Reformed Dogmatics — página de acesso',
      publicacao: 'Monergism',
      url: 'https://www.monergism.com/reformed-dogmatics-ebook',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O primeiro volume trata dos prolegômenos, isto é, do método da teologia como ciência — a discussão de fundo sobre em que sentido a teologia é disciplina científica e o que isso exige de quem a pratica.',
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
      nota: 'O capítulo I estabelece o que decide uma questão de doutrina — a Escritura, expressamente ou por boa e necessária consequência —, que é o critério a que qualquer pesquisa teológica se submete, por mais bem conduzida que seja em termos de método.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion (trad. Beveridge)',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Exemplo de fonte primária disponível por inteiro e de graça — a obra que mais frequentemente é citada de segunda mão em trabalhos de seminário, sem que haja mais qualquer motivo para isso. Hospedado na CCEL, que recusa IPs de nuvem: a auditoria automática não confirma daqui, mas o endereço abre normalmente no navegador.',
    },
  ],
};
