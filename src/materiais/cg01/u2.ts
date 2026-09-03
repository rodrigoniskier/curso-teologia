import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg01-u2-introducao-fonetica',
  disciplina: 'CG01',
  unidade: 2,
  titulo: 'Introdução à fonética',
  objetivo: 'Distinguir fonética e fonologia, compreender fonema como unidade funcional do sistema sonoro e relacionar a produção da fala aos principais articuladores, reconhecendo a diferença entre som, fonema e letra.',
  topicosCobertos: [
    'Fonética e fonologia',
    'Fonema e produção',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Por que estudar os sons da língua?',
      paragrafos: [
        'A escrita alfabética pode criar a impressão de que letras e sons são a mesma coisa. Não são. A fala existe como sequência de eventos sonoros produzidos pelo aparelho fonador e interpretados pelos ouvintes; a escrita representa esses sons por convenções gráficas que nem sempre estabelecem correspondência de um para um. A mesma letra pode representar sons diferentes e um mesmo som pode ser grafado de maneiras distintas.',
        'Estudar fonética e fonologia ajuda a compreender pronúncia, variação, alfabetização, ortografia, poesia, leitura em voz alta e aquisição de outras línguas. Para o estudante de teologia, a distinção também prepara a aprendizagem de grego, hebraico e línguas modernas, pois impede que se trate a grafia como espelho perfeito da pronúncia.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Fonética e fonologia: duas perguntas diferentes',
      paragrafos: [
        'A fonética investiga os sons da fala como eventos físicos. Pergunta como são produzidos pelos órgãos articulatórios, quais propriedades acústicas possuem e como são percebidos. Quando descrevemos que um som é produzido com os lábios, com a língua junto aos dentes ou com passagem de ar pela cavidade nasal, estamos fazendo uma descrição fonética.',
        'A fonologia investiga como uma língua organiza os sons em um sistema de contrastes e padrões. Pergunta quais diferenças sonoras distinguem palavras, quais sequências são permitidas, como os sons se comportam em determinados contextos e quais regularidades o falante domina sem precisar formulá-las conscientemente.',
        'As duas áreas se relacionam. A fonologia depende de realizações fonéticas, mas não se reduz a medi-las. Um falante pode produzir um mesmo fonema com pequenas diferenças articulatórias sem criar uma palavra nova. Em outros casos, uma diferença aparentemente pequena é suficiente para distinguir significados e, portanto, tem função no sistema.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Pergunta-guia',
      itens: [
        'Fonética: que som foi efetivamente produzido e como?',
        'Fonologia: que função esse som desempenha no sistema da língua?',
        'Ortografia: como a língua convencionou registrar graficamente a palavra?',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Letra não é fonema',
      enunciado: 'Observe a letra x em “táxi”, “exame”, “texto” e “xícara”.',
      explicacao: 'A mesma letra participa de representações sonoras diferentes conforme a palavra e a variedade de pronúncia. O exemplo mostra por que análise gráfica e análise sonora não podem ser confundidas. Em sentido inverso, o som inicial de “casa” e “quilo” pode ser representado por letras diferentes. A ortografia é um sistema convencional e histórico, não uma transcrição fonética exata.',
    },
    {
      tipo: 'texto',
      titulo: '3. Fonema: uma unidade de contraste',
      paragrafos: [
        'Fonema é uma unidade abstrata do sistema sonoro capaz de participar de contrastes de significado. Uma forma prática de perceber contrastes é comparar pares de palavras que diferem por um único segmento. Se a substituição de um som por outro produz outra palavra, temos evidência de que a língua trata esses sons como unidades contrastivas naquele contexto.',
        'Em “pato” e “gato”, a diferença inicial participa da distinção entre as duas palavras. O mesmo ocorre em “faca” e “vaca”. Não é necessário imaginar o fonema como uma “letra falada”; ele é uma categoria do sistema linguístico, e suas realizações concretas são sons efetivamente pronunciados.',
        'A pronúncia real apresenta variação. Um mesmo fonema pode ser realizado de maneiras diferentes conforme região, contexto fonético ou estilo sem que o falante perceba mudança de palavra. Essas variantes fonéticas são frequentemente chamadas alofones. Para uma introdução, o ponto central é compreender que o sistema abstrai diferenças irrelevantes para o contraste lexical e preserva as que são funcionalmente importantes.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'cg01-u2-a1',
      titulo: 'Atividade 1 — contraste sonoro',
      enunciado: 'Considere os pares “pato/bato”, “faca/vaca” e “mala/mola”. Explique o que a mudança de um segmento demonstra sobre o sistema sonoro do português.',
      resposta: 'Em cada par, a substituição de um segmento produz uma palavra diferente. Isso evidencia contraste fonológico: o sistema trata as unidades substituídas como capazes de distinguir significados naquele contexto. A atividade não depende do nome da letra, mas da função dos sons na língua.',
    },
    {
      tipo: 'texto',
      titulo: '4. Como a fala é produzida',
      paragrafos: [
        'A fala resulta da coordenação entre corrente de ar, fonação e articulação. De modo simplificado, o ar expirado pelos pulmões percorre as vias respiratórias; na laringe, as pregas vocais podem vibrar ou permanecer afastadas; acima da laringe, língua, lábios, dentes, alvéolos, palato e outras estruturas modificam o fluxo de ar e dão forma aos sons.',
        'Quando há vibração das pregas vocais, o som é classificado como sonoro; quando não há vibração, como surdo. A diferença pode ser percebida colocando suavemente os dedos sobre a região da laringe e alternando sons como /f/ e /v/. O objetivo não é decorar símbolos fonéticos neste momento, mas perceber que distinções linguísticas têm base em gestos articulatórios concretos.',
        'A cavidade oral e a nasal também participam. Em certos sons, o véu palatino permite que parte do ar passe pelo nariz, produzindo nasalidade. O português brasileiro utiliza nasalidade de modo relevante, como se percebe na diferença entre sequências orais e nasais em numerosas palavras.',
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Principais articuladores que você deve localizar',
      itens: [
        'Lábios: participam, por exemplo, de sons produzidos com fechamento ou aproximação labial.',
        'Dentes e região alveolar: servem como pontos de contato ou aproximação da língua.',
        'Língua: articulador extremamente móvel, com ponta, lâmina, dorso e raiz participando de diferentes sons.',
        'Palato duro e região posterior do céu da boca: pontos de articulação para diferentes consoantes.',
        'Véu palatino: controla, entre outras funções, o acesso do fluxo de ar à cavidade nasal.',
        'Pregas vocais: sua vibração diferencia sons sonoros de sons surdos.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Teste simples de sonoridade',
      enunciado: 'Pronuncie lentamente “fffff” e depois “vvvvv”, mantendo os dedos sobre a região anterior do pescoço.',
      explicacao: 'A posição articulatória dos lábios e dentes é semelhante, mas em /v/ há vibração das pregas vocais, facilmente percebida ao toque. Isso mostra como a fonética descreve propriedades concretas da produção e como uma diferença articulatória/acústica pode corresponder a contraste fonológico.',
    },
    {
      tipo: 'texto',
      titulo: '5. Vogais e consoantes: uma primeira orientação',
      paragrafos: [
        'Nas vogais, o fluxo de ar atravessa o trato vocal sem uma obstrução comparável à das consoantes. A qualidade vocálica depende sobretudo da posição da língua, do grau de abertura da boca e do arredondamento dos lábios. Por isso, vogais não devem ser definidas apenas pelas cinco letras a, e, i, o, u: o português possui mais contrastes vocálicos do que cinco em muitas variedades.',
        'Nas consoantes, há algum grau de constrição ou obstrução do fluxo de ar. Elas podem ser descritas segundo o lugar da articulação, o modo como o ar é modificado e a presença ou ausência de vibração das pregas vocais. Uma descrição completa pertence a cursos específicos de fonética; aqui interessa aprender o raciocínio: som de fala é gesto articulatório e evento acústico, não simplesmente um caractere escrito.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três níveis que não devem ser misturados',
      itens: [
        'Som/fone: realização física concreta percebida na fala.',
        'Fonema: categoria funcional do sistema, associada a contrastes.',
        'Letra/grafema: representação gráfica convencional empregada na escrita.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'cg01-u2-a2',
      titulo: 'Atividade 2 — som e escrita',
      enunciado: 'Encontre dois exemplos em português em que (a) a mesma letra pode corresponder a pronúncias diferentes ou (b) letras diferentes podem representar um som semelhante. Explique por que isso impede identificar letra e fonema.',
      resposta: 'Respostas possíveis incluem o x de “xícara”, “exame” e “táxi”, ou o som inicial de “casa” e “quilo”. O importante é demonstrar que a ortografia não estabelece correspondência perfeita e biunívoca entre símbolo gráfico e unidade sonora.',
    },
    {
      tipo: 'atividade',
      id: 'cg01-u2-a3',
      titulo: 'Atividade 3 — observação articulatória',
      enunciado: 'Pronuncie lentamente /p/, /b/, /f/, /v/, /m/ e uma vogal como /a/. Para cada caso, observe lábios, vibração na laringe e passagem de ar. Registre ao menos duas diferenças percebidas.',
      resposta: 'Espera-se perceber, por exemplo, fechamento dos lábios em /p/, /b/ e /m/; aproximação de lábio e dentes em /f/ e /v/; vibração laríngea em /b/ e /v/ em contraste com /p/ e /f/; e passagem nasal em /m/. A vogal /a/ é produzida sem fechamento comparável ao das consoantes. A finalidade é relacionar categorias linguísticas à produção física da fala.',
    },
    {
      tipo: 'texto',
      titulo: '6. Pronúncia, variação e norma',
      paragrafos: [
        'Diferenças de pronúncia entre regiões não devem ser automaticamente tratadas como falhas. A fonética registra o que os falantes produzem; a fonologia investiga os padrões do sistema. Há situações em que a escola ou a atividade pública exige atenção à inteligibilidade e à pronúncia de termos técnicos, mas isso é diferente de declarar que toda pronúncia regional é defeituosa.',
        'Na leitura pública, clareza depende menos de eliminar o sotaque e mais de controlar velocidade, articulação, pausas, ênfase e volume. O estudo dos sons pode, portanto, melhorar a comunicação sem impor uma falsa ideia de fala “sem sotaque”. Todo falante possui padrões fonéticos associados à sua história e comunidade.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Fonética estuda a realização física dos sons; fonologia estuda sua organização funcional na língua.',
        'Fonema não é letra: é uma unidade abstrata de contraste.',
        'A fala resulta da coordenação entre corrente de ar, fonação e articulação.',
        'Lábios, língua, dentes, palato, véu palatino e pregas vocais participam da produção sonora.',
        'Ortografia e sistema sonoro se relacionam, mas não correspondem perfeitamente.',
        'Variação de pronúncia é parte normal da vida das línguas.',
      ],
    },
  ],
  fontes: [
    {
      id: 'uab-fonetica-fonologia-morfologia',
      autor: 'Marli Hermenegilda Pereira; Mikaela Roberto; Ricardo Stavola Cavaliere',
      ano: '2015',
      titulo: 'Português V — Vol. 1',
      publicacao: 'Canal CECIERJ / Consórcio CEDERJ',
      url: 'https://canal.cecierj.edu.br/recurso/17163',
      idioma: 'pt',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Caderno universitário aberto utilizado para a introdução à fonética e para a distinção entre realização sonora, fonema e grafia.',
    },
  ],
  atualizadoEm: '2026-09-03',
};
