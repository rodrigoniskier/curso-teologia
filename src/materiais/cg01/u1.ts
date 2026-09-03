import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg01-u1-lingua-linguagem-comunicacao',
  disciplina: 'CG01',
  unidade: 1,
  titulo: 'Língua, linguagem e comunicação',
  objetivo: 'Distinguir linguagem e língua, reconhecer a variação como propriedade normal das línguas, comparar oralidade e escrita e analisar a integração de recursos verbais e não verbais em situações reais de comunicação.',
  topicosCobertos: [
    'Língua e linguagem',
    'Variedade linguística',
    'Oralidade e escrita',
    'Comunicação verbal e não verbal',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Linguagem é mais ampla que língua',
      paragrafos: [
        'Linguagem é a capacidade e o conjunto de recursos pelos quais seres humanos produzem e interpretam sentidos. A palavra abrange sistemas que utilizam signos de natureza diversa: palavras faladas ou escritas, gestos, imagens, diagramas, sinais sonoros, disposição gráfica e combinações entre esses recursos. Uma placa com uma seta, um mapa, uma expressão facial e um parágrafo são formas de significação, embora não funcionem do mesmo modo.',
        'Língua é um sistema histórico e social de signos linguísticos compartilhado por uma comunidade. Português, espanhol, grego e hebraico são línguas. Cada língua possui convenções de sons, formas de palavras, construções sintáticas, vocabulário e usos discursivos aprendidos por seus falantes. Por isso, língua não é apenas uma lista de palavras: é um sistema de possibilidades e restrições que permite produzir enunciados novos.',
        'A distinção é útil porque evita duas reduções. A primeira é imaginar que toda linguagem seja verbal; a segunda é imaginar que a língua exista apenas na gramática normativa. A gramática normativa descreve e recomenda certos usos associados à variedade de prestígio e à escrita formal, mas a língua real é mais ampla e contém diferentes variedades, registros e situações de uso.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Distinções essenciais',
      itens: [
        'Linguagem: capacidade e sistemas de produção de sentido; pode ser verbal ou não verbal.',
        'Língua: sistema linguístico histórico compartilhado por uma comunidade.',
        'Fala: realização concreta da língua por um falante em uma situação específica.',
        'Norma-padrão: modelo de referência usado sobretudo em situações formais de escrita e ensino; não é sinônimo de toda a língua.',
        'Uso adequado: escolha linguística compatível com interlocutor, propósito, gênero e situação.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Uma mesma informação, linguagens diferentes',
      enunciado: 'Num aviso de biblioteca aparece um ícone de celular riscado ao lado da frase “Mantenha o aparelho no silencioso”.',
      explicacao: 'A frase constitui linguagem verbal; o ícone é linguagem não verbal. Os dois recursos convergem para uma mesma orientação. O ícone permite reconhecimento rápido; a frase reduz ambiguidades. Na comunicação contemporânea, textos frequentemente são multimodais: significado verbal, imagem, cor, tipografia e organização espacial cooperam.',
    },
    {
      tipo: 'texto',
      titulo: '2. A língua varia sem deixar de ser língua',
      paragrafos: [
        'Nenhuma língua viva é absolutamente uniforme. Pessoas de regiões, idades, grupos sociais e profissões diferentes podem empregar pronúncias, palavras e construções distintas. A mesma pessoa também modifica sua maneira de falar ou escrever conforme a situação. Essa heterogeneidade recebe o nome geral de variação linguística.',
        'Podemos observar variação geográfica, quando certos usos se associam a regiões; social, quando se relacionam a grupos ou redes sociais; histórica, quando formas mudam ao longo do tempo; e situacional, quando o falante ajusta o registro à circunstância. Essas dimensões se cruzam. Uma palavra pode ser regional e informal ao mesmo tempo; uma construção antiga pode sobreviver em contextos religiosos ou jurídicos.',
        'Reconhecer a variação não significa afirmar que qualquer forma serve igualmente para qualquer contexto. A competência linguística madura inclui adequação. Em uma conversa familiar, marcas de espontaneidade e regionalidade são naturais. Em um artigo, relatório, ata ou monografia, espera-se maior controle da norma escrita formal. O erro pedagógico está tanto em desprezar variedades legítimas quanto em ignorar as convenções exigidas pelos gêneros formais.',
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Quatro perguntas para analisar uma escolha linguística',
      ordenada: true,
      itens: [
        'Quem fala ou escreve e para quem?',
        'Qual é o propósito: informar, persuadir, registrar, ensinar, celebrar, conversar?',
        'Qual é o gênero: mensagem instantânea, sermão, artigo, ata, requerimento, aula?',
        'Qual nível de formalidade e precisão esse gênero exige?',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Variação e adequação',
      enunciado: 'Compare: “A gente vai conversar depois” e “Nós analisaremos a questão posteriormente”.',
      explicacao: 'As duas frases podem ser perfeitamente compreensíveis, mas pertencem a registros diferentes. A primeira é natural em muitas situações de fala cotidiana. A segunda é típica de escrita formal e pode soar artificial numa conversa íntima. O estudo de Português não deve apenas perguntar “está certo?”, mas também “é adequado a este gênero e a esta situação?”.',
    },
    {
      tipo: 'texto',
      titulo: '3. Oralidade e escrita são modalidades, não cópias uma da outra',
      paragrafos: [
        'Fala e escrita utilizam a mesma língua, mas são produzidas e interpretadas em condições diferentes. Na conversação face a face, interlocutores compartilham tempo e espaço, podem pedir esclarecimentos imediatamente e contam com entonação, pausas, ritmo, volume, expressão facial e gestos. Por isso, a fala espontânea tolera interrupções, reformulações, repetições e referências dependentes do contexto, como “aqui”, “agora” e “aquilo ali”.',
        'Na escrita, produtor e leitor frequentemente estão separados no tempo e no espaço. O texto precisa carregar mais pistas em sua própria organização. Pontuação, paragrafação, escolha vocabular, conectores, títulos e estrutura argumentativa ajudam a compensar a ausência de entonação e de interação imediata. A escrita também permite planejamento, revisão e reescrita em grau que normalmente não existe na fala espontânea.',
        'Isso não significa que toda fala seja informal e toda escrita seja formal. Uma conferência lida pode ser altamente planejada; uma conversa por aplicativo pode ser escrita e extremamente informal. O contraste fundamental é entre modalidades e condições de produção, não entre “fala errada” e “escrita certa”.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Tendências — não regras absolutas',
      itens: [
        'Oralidade espontânea: maior dependência do contexto imediato, entonação, pausas, repetição e negociação em tempo real.',
        'Escrita planejada: maior autonomia contextual, revisão, explicitação de relações e organização gráfica.',
        'Gêneros híbridos: mensagens, legendas, roteiros e transcrições combinam propriedades das duas modalidades.',
        'Competência acadêmica: saber converter uma ideia compreensível na fala em texto autônomo, coeso e preciso.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Da fala ao texto acadêmico',
      enunciado: 'Fala: “Então, esse texto aí fala de várias coisas, mas o ponto mesmo é como o autor entende a igreja”.',
      explicacao: 'Uma reescrita acadêmica possível seria: “Embora o texto desenvolva diferentes temas, seu eixo argumentativo é a concepção de igreja defendida pelo autor.” Não se trata de “traduzir palavras difíceis”, mas de tornar explícita a relação lógica, eliminar referências vagas e adequar o enunciado ao gênero.',
    },
    {
      tipo: 'texto',
      titulo: '4. Comunicação verbal, não verbal e multimodal',
      paragrafos: [
        'Comunicação verbal emprega signos linguísticos: palavras organizadas segundo uma língua. Pode ser oral ou escrita. Comunicação não verbal emprega outros sistemas de signos, como gestos, imagens, cores, diagramas, símbolos ou organização espacial. Na prática, grande parte da comunicação é multimodal: articula mais de um sistema ao mesmo tempo.',
        'Um sermão presencial é verbal porque utiliza palavras, mas também contém recursos não verbais: postura, ritmo, pausas e direção do olhar. Um slide combina título, texto, esquema e imagem. Uma edição bíblica impressa utiliza palavras, mas também comunica hierarquia e relações por meio de capítulos, versículos, notas, recuos e tipos gráficos.',
        'Para interpretar adequadamente um texto multimodal, pergunte o que cada elemento acrescenta. Imagem e palavra podem reforçar a mesma mensagem, complementar-se ou até criar tensão. Em ambientes digitais, ignorar elementos não verbais pode levar a uma leitura incompleta do argumento.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'cg01-u1-a1',
      titulo: 'Atividade 1 — diagnosticar linguagem e língua',
      enunciado: 'Classifique cada caso e justifique brevemente: (a) o português brasileiro; (b) um gesto de silêncio com o dedo diante dos lábios; (c) a frase “A reunião começa às 19h”; (d) um infográfico que combina números, ícones e frases.',
      itens: [
        'Indique se há linguagem verbal, não verbal ou combinação das duas.',
        'No item (a), explique por que “língua” é uma categoria mais específica que “linguagem”.',
      ],
      resposta: 'O português brasileiro é uma variedade histórica da língua portuguesa e, portanto, um sistema de linguagem verbal. O gesto é linguagem não verbal. A frase é linguagem verbal. O infográfico é multimodal, pois articula recursos verbais e não verbais. “Língua” é mais específica porque designa um sistema linguístico socialmente compartilhado, enquanto “linguagem” abrange outras formas de produzir sentido.',
    },
    {
      tipo: 'atividade',
      id: 'cg01-u1-a2',
      titulo: 'Atividade 2 — adequação de registro',
      enunciado: 'Você precisa comunicar o cancelamento de uma reunião em dois contextos: uma mensagem no grupo informal de colegas e uma comunicação oficial a um conselho. Escreva uma versão para cada contexto e indique duas escolhas linguísticas que mudaram.',
      resposta: 'Espera-se que a versão informal possa usar saudação breve, sintaxe mais próxima da conversação e vocabulário cotidiano, enquanto a comunicação oficial deve identificar claramente a reunião, a decisão, a data e eventual providência, com formulação impessoal ou institucional. O ponto não é tornar o segundo texto artificialmente rebuscado, mas adequar precisão, formalidade e autonomia contextual.',
    },
    {
      tipo: 'atividade',
      id: 'cg01-u1-a3',
      titulo: 'Atividade 3 — reescrita da oralidade',
      enunciado: 'Reescreva para um relatório: “A gente viu lá que tinha umas partes que não batiam, aí resolveu conferir de novo”.',
      resposta: 'Uma possibilidade: “Durante a análise, identificamos divergências entre algumas seções e, por isso, realizamos nova conferência dos dados.” A reescrita explicita o referente, substitui expressões vagas e organiza a relação de causa e consequência sem simplesmente trocar palavras comuns por termos raros.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Linguagem é a categoria ampla; língua é um sistema verbal histórico e social.',
        'Variação é constitutiva das línguas vivas; adequação depende de gênero, propósito e interlocutor.',
        'Oralidade e escrita possuem condições de produção distintas e não devem ser hierarquizadas como “errada” e “certa”.',
        'Comunicação real frequentemente combina recursos verbais e não verbais.',
        'O domínio da norma escrita formal é uma competência de ampliação de repertório, não uma autorização para desqualificar outras variedades.',
      ],
    },
  ],
  fontes: [
    {
      id: 'cecierj-linguagem-variacao',
      autor: 'Fundação CECIERJ',
      ano: '2016',
      titulo: 'Linguagem, cultura e variação linguística',
      publicacao: 'Canal CECIERJ',
      url: 'https://canal.cecierj.edu.br/recurso/16000',
      idioma: 'pt',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Recurso educacional aberto usado como apoio para linguagem como prática social, diversidade e adequação linguística.',
    },
  ],
  atualizadoEm: '2026-09-03',
};
