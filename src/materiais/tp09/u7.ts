import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u7-apologetica-evangelizacao',
  disciplina: 'TP09',
  unidade: 7,
  titulo: 'O uso da apologética na evangelização',
  objetivo: 'Distinguir abordagens apologéticas e empregar argumentos, perguntas e respostas como serviço à comunicação do evangelho, sem transformar evangelização em disputa intelectual.',
  topicosCobertos: [
    'Métodos apologéticos e como usar a apologética na evangelização com discernimento',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A apologética serve à mensagem',
      paragrafos: [
        'Apologética é a tarefa de apresentar e defender racionalmente a esperança cristã diante de perguntas, objeções e alternativas. Na evangelização, ela possui função ministerial: remover mal-entendidos, mostrar incoerências, oferecer razões e abrir espaço para que o conteúdo do evangelho seja ouvido com maior clareza. Ela não é um segundo evangelho nem uma etapa que torna a Palavra eficaz por força lógica.',
        'O Novo Testamento mostra diferentes formas de argumentação. Paulo expõe as Escrituras a quem as reconhece como autoridade, dialoga a partir da criação e da cultura diante de pagãos, responde a autoridades e adapta a linguagem ao auditório. O padrão não é ausência de razões, mas razões subordinadas à verdade revelada e ao objetivo de testemunhar de Cristo.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Famílias de método — mapa introdutório',
      itens: [
        'Abordagens clássicas: frequentemente começam por argumentos sobre Deus e credibilidade do cristianismo antes de tratar especificamente de Cristo e da revelação.',
        'Abordagens evidencialistas: dão maior peso a evidências históricas e empíricas, como a ressurreição, a confiabilidade documental e fatos públicos.',
        'Abordagens pressuposicionalistas: enfatizam que todo raciocínio parte de compromissos fundamentais e procuram mostrar a coerência da cosmovisão cristã e tensões nas alternativas.',
        'Na prática pastoral, esses recursos podem ser combinados com discernimento; o evangelista precisa conhecer o ouvinte e não apenas defender uma escola apologética.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Discernimento antes de resposta',
      paragrafos: [
        'A mesma pergunta pode ter funções diferentes. “Como um Deus bom permite sofrimento?” pode ser uma objeção filosófica, um grito de alguém enlutado ou uma forma de adiar uma conversa sobre culpa pessoal. Uma resposta tecnicamente correta pode ser pastoralmente inadequada se não perceber o que está sendo perguntado. Escutar e pedir esclarecimento são competências apologéticas.',
        'Discernimento também significa admitir limites. O cristão não precisa improvisar uma resposta para tudo. Dizer “não sei; quero pesquisar” pode preservar mais credibilidade que uma explicação frágil. A confiança cristã não repousa na onisciência do evangelista, mas na verdade de Deus.',
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Boas práticas numa conversa apologética',
      ordenada: true,
      itens: [
        'Pergunte o que o interlocutor quer dizer antes de responder a um rótulo.',
        'Identifique a objeção central e não tente resolver dez problemas ao mesmo tempo.',
        'Ofereça razões proporcionais à pergunta, evitando jargão desnecessário.',
        'Não humilhe o interlocutor nem trate vitória retórica como conversão.',
        'Reconecte a conversa ao evangelho: apologética prepara e esclarece, mas Cristo continua sendo o centro.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u7-a1',
      titulo: 'Atividade — responder com discernimento',
      enunciado: 'Uma pessoa diz: “Eu não acredito em Deus porque a religião só causa guerras”. Formule três perguntas de esclarecimento e depois escreva uma resposta breve que reconheça o problema sem aceitar a generalização, conduzindo a conversa de volta à pessoa e à obra de Cristo.',
      resposta: 'Perguntas possíveis: “Quando você fala em religião, quais casos tem em mente?”, “Você entende que crenças seculares também podem legitimar violência?”, “Sua objeção é contra qualquer crença em Deus ou contra o uso violento da religião?”. A resposta deve reconhecer pecados cometidos em nome da religião, distinguir abuso religioso do ensino de Cristo e mostrar que o evangelho não depende da inocência histórica dos cristãos, mas do próprio Cristo que julga o pecado e reconcilia pecadores.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Apologética é serviço à evangelização, não substituto do evangelho.',
        'Diferentes métodos destacam tipos distintos de argumento e pressupostos.',
        'Perguntas ajudam a descobrir a objeção real e a condição pastoral do ouvinte.',
        'A meta não é vencer a pessoa, mas falar a verdade com mansidão, clareza e coragem.',
      ],
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A abertura das Institutas relaciona conhecimento de Deus e de nós mesmos e oferece base reformada para pensar pressupostos e revelação.',
    },
    {
      id: 'monergismo-acervo',
      autor: 'Vários',
      titulo: 'Monergismo — acervo de teologia reformada em português',
      publicacao: 'Monergismo',
      url: 'https://www.monergismo.com/',
      idioma: 'pt',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Acervo aberto com materiais de apologética e teologia reformada para aprofundamento dos métodos apresentados.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
