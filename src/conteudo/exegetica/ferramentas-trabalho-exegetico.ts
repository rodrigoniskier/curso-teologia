import type { Verbete } from '../../tipos';

export const ferramentasTrabalhoExegetico: Verbete = {
  id: 'te16-ferramentas-trabalho-exegetico',
  disciplina: 'TE16',
  unidade: 1,
  titulo: 'Ferramentas e Trabalho Exegético: da Pergunta ao Texto Entregue',
  subtitulo:
    'Uma biblioteca maior não produz automaticamente uma exegese melhor; o ganho vem de saber qual ferramenta responde a qual pergunta e registrar como cada conclusão foi alcançada',
  objetivo:
    'Ao final, você saberá distinguir texto bíblico, edição crítica, léxico, gramática, concordância, comentário e fonte histórica, escolher ferramentas conforme a pergunta, evitar que software substitua análise, montar um fluxo de pesquisa reproduzível e transformar notas dispersas em um trabalho exegético escrito com tese, evidência, graus de certeza e referências verificáveis.',
  atualizadoEm: '2026-08-30',
  verMais: ['te16-metodologia-exegetica', 'te52-manuscritologia', 'te53-daniel7-aramaico'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'O estudante abre um software bíblico, clica numa palavra grega e recebe em segundos lema, morfologia, glossas, ocorrências, dicionários e comentários. A quantidade de informação parece pesquisa. Não é. Pesquisa começa quando existe uma pergunta capaz de distinguir o dado relevante do dado apenas disponível. **Ferramenta rápida pode acelerar uma boa pergunta; pode também acelerar um erro.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A metodologia exegética precisa, portanto, de uma disciplina anterior ao uso das ferramentas: saber o que cada uma é capaz de demonstrar. Um léxico não decide sozinho o sentido de uma palavra numa frase; uma gramática não substitui a leitura do argumento; um comentário não transforma opinião de especialista em dado do texto; uma busca eletrônica não converte todas as ocorrências em paralelos legítimos.',
    },
    { tipo: 'secao', titulo: '1. Comece pela pergunta, não pela ferramenta' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma pesquisa exegética madura formula perguntas progressivamente mais específicas. “O que Filipenses 2 significa?” é amplo demais para orientar trabalho. “Qual função a sequência de 2.6–11 exerce no argumento de 1.27–2.18?” já aponta para estrutura e discurso. “Como o particípio de 2.7 se relaciona ao verbo principal?” aponta para sintaxe. “Que opções textuais existem em 2.5?” aponta para crítica textual. Cada pergunta chama uma ferramenta diferente.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Delimite o problema:** escreva em uma frase o que ainda não está claro no texto.',
        '**Identifique o tipo de evidência necessário:** textual, gramatical, lexical, histórica, literária, canônica ou teológica.',
        '**Escolha a ferramenta correspondente:** não abra um comentário quando a pergunta ainda pode ser respondida lendo a perícope.',
        '**Registre o resultado e seu grau de certeza:** dado, inferência provável ou hipótese de trabalho.',
        '**Só então avance:** cada etapa deve deixar um rastro que outro leitor consiga verificar.',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Ferramenta exegética',
      texto:
        'Recurso que dá acesso a um tipo delimitado de evidência relevante para interpretar um texto bíblico — por exemplo, edição do texto, aparato, léxico, gramática, concordância, corpus, atlas, fonte histórica ou comentário. Seu valor depende de ser usado para a pergunta que consegue responder e de permanecer subordinado à análise do texto, não de possuir grande quantidade de informação.',
    },
    { tipo: 'secao', titulo: '2. Texto e edição: antes de analisar, saiba o que está diante de você' },
    {
      tipo: 'paragrafo',
      texto:
        'Uma tradução em português é Escritura traduzida e pode sustentar leitura, ensino e pregação. Para pesquisa exegética que pressupõe Hebraico 2 e Grego 2, porém, é necessário distinguir tradução, texto original editado e aparato crítico. A edição fornece um texto estabelecido por trabalho editorial; o aparato informa onde há variantes ou decisões relevantes. Nem toda edição gratuita possui o mesmo tipo de aparato.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O SBL Greek New Testament é um exemplo útil de ferramenta aberta: oferece gratuitamente um texto grego criticamente editado e registra diferenças em relação a outras edições publicadas. A própria Society of Biblical Literature ressalta que ele é uma edição criticamente editada, mas não substitui o aparato manuscritológico de Nestle-Aland ou UBS. A distinção ensina uma regra: **uma ferramenta pode ser excelente para leitura e ainda não ser suficiente para toda pergunta textual.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'No Antigo Testamento, recursos digitais de texto massorético e corpora linguísticos cumprem função semelhante para leitura e busca, mas a decisão sobre variante exige edição e aparato apropriados. O verbete de Manuscritologia aprofunda a teoria; em TE16 importa registrar no trabalho qual texto foi usado e quando uma variante afeta a tradução ou o argumento.',
    },
    { tipo: 'secao', titulo: '3. Léxico: mapa de possibilidades, não máquina de definição' },
    {
      tipo: 'paragrafo',
      texto:
        'Um léxico reúne usos e organiza sentidos possíveis de uma forma ou lema. Isso é diferente de fornecer “o significado verdadeiro”. O intérprete começa pelas possibilidades lexicais e deixa frase, construção, gênero e contexto selecionarem a opção que funciona naquela ocorrência. Quanto mais decisiva a escolha, mais importante mostrar evidência de uso comparável em vez de apenas citar uma gloss.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Lema:** forma de dicionário sob a qual as ocorrências são agrupadas.',
        '**Gloss:** equivalente curto usado para orientação inicial; não é definição completa.',
        '**Sentido:** valor que a palavra assume em determinado contexto.',
        '**Campo semântico:** conjunto de palavras e relações que ocupam uma área de significado; não significa que termos do mesmo campo sejam intercambiáveis.',
        '**Corpus de ocorrências:** conjunto de exemplos reais usados para comparar padrões de uso.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma concordância ou busca morfológica ajuda a localizar ocorrências. O passo metodológico é escolher comparáveis: mesmo autor costuma pesar mais que século distante; mesmo gênero pode ser mais informativo que coincidência vocabular; construção sintática semelhante vale mais que simples presença do lema. Cinquenta resultados não são cinquenta votos.',
    },
    { tipo: 'secao', titulo: '4. Gramática e sintaxe: a pergunta é como as palavras se relacionam' },
    {
      tipo: 'paragrafo',
      texto:
        'Morfologia identifica forma; sintaxe identifica relação. Saber que um verbo está no aoristo ou que um substantivo está no genitivo é apenas o começo. A exegese pergunta o que essa forma faz naquela cláusula e quais relações a construção permite. Uma gramática é útil porque reúne padrões da língua; não porque cria um significado especial para cada etiqueta.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ferramentas digitais como o STEP Bible podem acelerar identificação de lema, morfologia, relações e busca em textos originais. O ganho pedagógico é enorme quando o estudante já sabe conferir o resultado. O risco é o contrário: copiar a etiqueta fornecida pela interface e tratá-la como argumento. **Automação de análise não transfere responsabilidade interpretativa para o software.**',
    },
    {
      tipo: 'controversia',
      titulo: 'Quanto confiar em análise automática de línguas bíblicas?',
      posicoes: [
        {
          escola: 'Uso instrumental forte',
          sintese:
            'Emprega parsers, interlineares e buscas morfológicas como parte normal da pesquisa, porque reduzem trabalho mecânico e permitem testar hipóteses em corpora grandes. A força é eficiência; o risco é esquecer que bancos de dados também contêm decisões editoriais e ambiguidades resolvidas por alguém.',
        },
        {
          escola: 'Uso mínimo para preservar competência linguística',
          sintese:
            'Prefere análise manual antes de consultar recursos automáticos, especialmente em formação. A força é impedir dependência da interface e desenvolver leitura real. O risco é transformar lentidão em virtude e deixar de usar ferramentas que permitiriam verificar mais dados com rigor.',
        },
        {
          escola: 'Automação depois da análise inicial',
          sintese:
            'Faz primeira leitura e parsing com os conhecimentos do estudante, depois usa software para conferir, buscar paralelos e encontrar exceções. Preserva aprendizagem e ganha escala. É a prática recomendada neste portal: ferramenta funciona melhor como segundo leitor do que como primeiro intérprete.',
        },
      ],
    },
    { tipo: 'secao', titulo: '5. Fontes históricas e culturais: informação precisa ter proveniência' },
    {
      tipo: 'paragrafo',
      texto:
        'Dicionário bíblico, atlas e comentário costumam resumir informações históricas. Para afirmações importantes, pergunte de onde o resumo veio. Uma inscrição, lei, carta, moeda ou relato antigo é fonte primária para o mundo que descreve; uma história moderna interpreta essas fontes; um comentário geralmente sintetiza ambos para explicar uma passagem. Os três níveis são úteis, mas não possuem a mesma função probatória.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A regra protege contra o “fato de contexto” que circula de sermão em sermão sem origem verificável — costumes de casamento, portas urbanas, cordas, camelos, mantos, hábitos médicos ou supostas práticas rabínicas que ninguém consegue localizar numa fonte. Se uma informação cultural é decisiva para uma interpretação, sua fonte precisa ser mais forte, não mais fraca.',
    },
    { tipo: 'secao', titulo: '6. Comentários: leia depois de formular sua leitura' },
    {
      tipo: 'paragrafo',
      texto:
        'Comentário técnico é ferramenta de confronto, não oráculo. Ler cedo demais fornece ao estudante perguntas que ainda não percebeu, o que é bom, mas também fornece uma interpretação pronta que passa a parecer evidente, o que é perigoso. Um procedimento simples melhora o uso: escreva primeiro sua delimitação, estrutura, tradução provisória e tese; depois abra os comentários e registre exatamente onde eles obrigaram revisão.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Comentário exegético/técnico:** prioriza texto, língua, variantes, contexto e debate acadêmico.',
        '**Comentário histórico:** mostra como intérpretes de outro período leram o texto; não deve ser confundido com estado atual da pesquisa.',
        '**Comentário teológico:** integra o texto a temas doutrinários e canônicos.',
        '**Comentário pastoral/devocional:** enfatiza exposição e aplicação; é valioso no fim do processo, menos adequado para resolver uma questão gramatical específica.',
      ],
    },
    { tipo: 'secao', titulo: '7. O caderno de pesquisa é parte do método' },
    {
      tipo: 'paragrafo',
      texto:
        'A maioria dos trabalhos fracos não falha porque o aluno não leu; falha porque, na hora de escrever, ele já não sabe qual ideia veio de qual fonte. Notas precisam separar pelo menos quatro coisas: transcrição literal, paráfrase de autor, dado observado diretamente e reflexão própria. Misturar essas categorias cria citações imprecisas e, no pior caso, plágio involuntário.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Registre referência completa no momento da leitura.** Não planeje “achar depois”.',
        '**Marque citação literal com aspas imediatamente.** Nunca deixe uma frase copiada parecendo nota própria.',
        '**Anote página, seção ou localização.** URL sem localização não basta para fonte longa.',
        '**Escreva sua inferência em campo separado.** “Logo...” é seu argumento, não o do autor consultado.',
        '**Anote discordância.** Uma pesquisa que só registra autores que confirmam sua leitura virou arquivo de apoio, não investigação.',
      ],
    },
    {
      tipo: 'citacao',
      autor: 'Isaac Watts',
      obra: 'The Improvement of the Mind',
      fonteId: 'watts-improvement',
      texto:
        'Watts organiza o estudo como disciplina de leitura, comparação, memória, anotação, conversa e escrita — lembrando que acumular livros sem ordenar o que se aprende não produz julgamento sólido.',
    },
    { tipo: 'secao', titulo: '8. O trabalho escrito não é diário cronológico da pesquisa' },
    {
      tipo: 'paragrafo',
      texto:
        'O aluno pode ter trabalhado na ordem perícope → texto → contexto → léxico → sintaxe → discurso → teologia. O trabalho final não precisa narrar cada clique nessa ordem. Ele precisa apresentar um argumento verificável. A pergunta central determina o que entra. Pesquisa boa frequentemente deixa muita informação correta fora do texto porque ela não ajuda a demonstrar a tese.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Introdução:** apresenta perícope, problema, pergunta e tese provisória ou final.',
        '**Texto e delimitação:** registra base textual, variantes relevantes, tradução própria quando requerida e razões da unidade escolhida.',
        '**Contextos relevantes:** inclui apenas história, literatura e cânon que realmente alteram a leitura.',
        '**Análise:** mostra estrutura, cláusulas, sintaxe, palavras-chave, gênero e discurso na medida em que sustentam o argumento.',
        '**Síntese exegética:** formula o que a passagem comunicava em seu horizonte original.',
        '**Análise teológica e aplicação:** relaciona o resultado às teologias bíblica, sistemática e prática sem voltar a mudar o sentido do texto.',
        '**Conclusão:** responde à pergunta de pesquisa; não introduz nova evidência.',
      ],
    },
    { tipo: 'secao', titulo: '9. Graus de certeza tornam o trabalho mais científico, não menos confessional' },
    {
      tipo: 'paragrafo',
      texto:
        'Nem toda conclusão possui o mesmo peso. “O verbo está no imperativo” pode ser dado observável. “Esta mudança de pessoa marca uma nova seção” pode ser inferência forte. “Paulo está respondendo a uma frase usada pelos coríntios” pode ser hipótese plausível. Escrever tudo com a mesma certeza esconde a qualidade da evidência.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Certo ou diretamente observável:** texto, forma gramatical clara, sequência explícita, citação identificável.',
        '**Altamente provável:** explica melhor os dados e possui apoio convergente, embora outra leitura seja possível.',
        '**Possível:** compatível com os dados, mas sem evidência suficiente para excluir alternativas.',
        '**Especulativo:** depende de reconstrução não demonstrável; pode ser mencionado, mas não deve sustentar doutrina ou aplicação decisiva.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Confessionalidade não exige fingir certeza onde Deus não deu evidência suficiente. Pelo contrário: submeter-se à Escritura inclui recusar a tentação de fazê-la falar com precisão maior que o texto permite. O bom trabalho distingue convicção teológica de excesso de confiança exegética.',
    },
    {
      tipo: 'definicao',
      termo: 'Trabalho exegético escrito',
      texto:
        'Argumento acadêmico reproduzível que parte de uma perícope definida, declara texto e método, seleciona evidências históricas, literárias, linguísticas e canônicas relevantes, distingue dados de inferências, dialoga criticamente com fontes, formula a mensagem do texto e então mostra sua contribuição teológica e aplicação. Sua qualidade não é medida pela quantidade de ferramentas citadas, mas pela transparência com que evidências sustentam conclusões.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Na próxima pesquisa, crie uma tabela de três colunas: “pergunta”, “ferramenta adequada” e “conclusão com grau de certeza”. Se você não consegue dizer por que abriu determinado recurso, feche-o. Se uma conclusão importante veio de um clique, tente reconstruí-la sem o clique. E, antes de entregar o trabalho, escolha três afirmações centrais e pergunte: outro estudante, com as mesmas fontes, consegue repetir meu caminho e entender por que cheguei aqui? Esse é o ponto em que erudição começa a servir à Igreja em vez de apenas impressioná-la.',
    },
  ],
  fontes: [
    {
      id: 'sblgnt',
      autor: 'Michael W. Holmes (ed.)',
      ano: '2010',
      titulo: 'The Greek New Testament: SBL Edition',
      publicacao: 'Society of Biblical Literature',
      url: 'https://www.sblgnt.com/',
      idioma: 'grc',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Texto grego criticamente editado e disponibilizado gratuitamente; útil para leitura, pesquisa e comparação editorial, com limites explicitados pela própria SBL quanto ao tipo de aparato oferecido.',
    },
    {
      id: 'stepbible',
      autor: 'Tyndale House, Cambridge',
      titulo: 'STEP Bible',
      publicacao: 'Tyndale House',
      url: 'https://www.stepbible.org/',
      idioma: 'en',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Ferramenta gratuita para leitura, busca e análise de textos bíblicos, incluindo recursos de línguas originais. Deve ser usada como interface de pesquisa e conferência, não como substituto de gramática, léxico e julgamento exegético.',
    },
    {
      id: 'watts-improvement',
      autor: 'Isaac Watts',
      ano: '1741',
      titulo: 'The Improvement of the Mind',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/suppimproveofmin00wattuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratado protestante clássico sobre método de estudo, leitura, anotação, comparação e escrita.',
    },
    {
      id: 'fairbairn-hermeneutica',
      autor: 'Patrick Fairbairn',
      ano: '1858',
      titulo: 'Hermeneutical Manual',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/hermeneuticalma00fair',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Manual reformado clássico para conectar ferramentas e evidência ao trabalho exegético do Novo Testamento.',
    },
  ],
};
