import type { Verbete } from '../../tipos';

export const manuscritologia: Verbete = {
  id: 'te52-manuscritologia',
  disciplina: 'TE52',
  unidade: 1,
  titulo: 'Manuscritologia e Crítica Textual',
  subtitulo: 'Por que a sua Bíblia tem notas dizendo que alguns manuscritos não trazem certo versículo',
  objetivo:
    'Ao final, você saberá por que existem variantes e por que a abundância delas é motivo de confiança e não de dúvida, distinguirá os tipos de variante e reconhecerá quais realmente mudam o sentido, saberá o que dizer sobre as três passagens mais discutidas, entenderá como a Confissão de Westminster afirma a preservação sem exigir um manuscrito perfeito, e conhecerá com justiça as três posições em disputa sobre qual texto grego usar.',
  atualizadoEm: '2026-08-16',
  verMais: ['te02-canon-nt', 'te01-canon-at', 'ts01-inspiracao'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Abra a sua Bíblia em Marcos 16 e procure o rodapé. Em quase toda edição moderna haverá uma nota informando que os manuscritos mais antigos não trazem os versículos 9 a 20. Faça o mesmo em João 7.53, e depois procure Atos 8.37 — em algumas edições o versículo simplesmente não está lá, e a numeração pula.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta que se forma no leitor é honesta e merece resposta direta, não desconversa: se a Bíblia é a Palavra de Deus, por que os tradutores não parecem saber onde ela termina?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há duas saídas rápidas, e as duas são ruins. A primeira é suspeitar de conspiração — alguém andou tirando versículos. A segunda é a conclusão oposta e igualmente apressada: se nem isso é certo, então não dá para confiar em nada. Entender o que de fato aconteceu desarma as duas, e a explicação é mais interessante do que qualquer das duas suspeitas.',
    },
    {
      tipo: 'secao',
      titulo: 'O fato incômodo, e por que ele é uma boa notícia',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Comece pelo dado desconfortável: não possuímos nenhum original. Nenhum autógrafo de Paulo, de Lucas ou de João sobreviveu. O que temos são cópias — e cópias de cópias, feitas à mão durante catorze séculos até a invenção da imprensa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Agora o outro dado, que muda a conta inteira. Temos por volta de cinco mil e oitocentos manuscritos gregos do Novo Testamento, mais de dez mil em latim, milhares em siríaco, copta, armênio e outras línguas, além de dezenas de milhares de citações em autores cristãos dos primeiros séculos. Nenhum outro texto da Antiguidade chega perto: as obras clássicas mais bem preservadas sobrevivem em algumas centenas de cópias, e muitas em menos de dez.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ponha as duas coisas juntas e o paradoxo se desfaz. **As variantes existem porque as testemunhas são muitas.** Um texto copiado poucas vezes, num só lugar, sob controle de uma só instituição, apresenta poucas variantes — e não oferece nenhum meio de verificar se foi alterado. O Novo Testamento foi copiado cedo demais, em lugares demais e por gente demais para que alguém pudesse controlá-lo. É por isso que há tantas diferenças a comparar, e é exatamente por isso que se pode reconstruir o que estava escrito.',
    },
    {
      tipo: 'definicao',
      termo: 'Crítica textual',
      texto:
        'Disciplina que compara as cópias sobreviventes de um texto para determinar, onde elas divergem, qual leitura é a original e como as demais surgiram. Não decide o que a Bíblia deve dizer nem julga o conteúdo: é trabalho de reconstituição, do mesmo tipo que se faria com qualquer obra antiga — com a diferença de que aqui o material disponível é incomparavelmente maior.',
    },
    {
      tipo: 'secao',
      titulo: 'Que tipo de diferença estamos discutindo',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Fala-se em centenas de milhares de variantes, e o número assusta até se ver do que ele é feito. A esmagadora maioria não chega ao leitor de uma tradução, porque não muda nada no sentido.',
    },
    {
      tipo: 'lista',
      itens: [
        'Grafia. O grego tinha variação de escrita como o português teve antes dos acordos ortográficos. Trocas de vogal com o mesmo som respondem sozinhas por uma fatia enorme do total, e nenhuma delas altera uma palavra sequer na tradução.',
        'Ordem das palavras. Em grego a função sintática vem da terminação, não da posição. "Jesus ama Pedro" e "ama Pedro Jesus" são a mesma frase, e as duas viram a mesma coisa em português.',
        'Deslizes mecânicos de cópia. O copista pula uma linha porque duas terminam com as mesmas letras, repete uma sílaba, troca uma palavra pela parecida. São erros identificáveis justamente por serem previsíveis.',
        'Harmonizações. Ao copiar Marcos, o copista que sabia Mateus de cor às vezes completava uma frase pela versão mais conhecida. Por isso as leituras mais curtas costumam ser mais antigas: é mais fácil acrescentar o que se sabe do que suprimir.',
        'Diferenças que de fato mudam o sentido. Existem, e são a matéria da disciplina — mas são poucas em proporção, e é sobre elas que as notas de rodapé avisam.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Vale enunciar com precisão o que se pode e o que não se pode afirmar aqui. Não é verdade que todas as variantes sejam irrelevantes: algumas mudam o sentido de uma frase, e uma delas envolve doze versículos de Marcos. É verdade, e verificável por qualquer um que examine a lista, que **nenhum artigo da fé cristã depende de uma leitura disputada**. As doutrinas contestadas nesses trechos são todas ensinadas com abundância em outros lugares cujo texto ninguém discute.',
    },
    {
      tipo: 'secao',
      titulo: 'As três passagens que todo mundo pergunta',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O **final longo de Marcos** (16.9-20) falta nos dois manuscritos gregos mais antigos que preservam o trecho, e vários pais da igreja escrevem como quem não o conhece. Há ainda um final curto alternativo em outras cópias, o que indica que a igreja antiga já achava estranho o evangelho terminar no versículo 8. Note o que isso significa: o problema não é alguém ter cortado o fim, é o texto mais antigo terminar de modo abrupto, e mais de uma tentativa posterior de resolver isso.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A **mulher apanhada em adultério** (João 7.53–8.11) é o caso mais delicado, porque é um dos episódios mais amados dos evangelhos. Falta nos manuscritos antigos, aparece em lugares diferentes em cópias diferentes — algumas o trazem depois de João 21, outras dentro de Lucas —, e essa flutuação é o sinal clássico de material que circulava solto antes de ser inserido. Muitos estudiosos conservadores consideram provável que o episódio tenha de fato acontecido e circulado por via oral, sem por isso pertencer ao texto que João escreveu. Uma coisa não implica a outra.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O **Comma Johanneum** (1 João 5.7-8, a menção explícita ao Pai, ao Verbo e ao Espírito) é o mais instrutivo dos três. Ele não aparece em nenhum manuscrito grego antigo; surge primeiro em latim e entra no texto grego impresso do século XVI. E é justamente aqui que a doutrina serve de teste: a Trindade foi definida em Niceia e em Constantinopla sem que ninguém citasse esse versículo, pela simples razão de que quem discutia não o tinha. Uma doutrina que atravessou os concílios sem depender de um texto não passa a depender dele agora.',
    },
    {
      tipo: 'secao',
      titulo: 'No Antigo Testamento o problema é o inverso',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Tudo o que foi dito até aqui vale para o Novo Testamento. No Antigo, a situação se inverte, e confundir as duas leva a conclusões erradas nas duas pontas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Ali não há multidão de testemunhas antigas: há poucas, e tardias. A razão é uma prática de cópia radicalmente diferente. Os massoretas, entre os séculos VI e X, transmitiram o texto hebraico com uma disciplina sem paralelo — contavam letras, palavras e versículos de cada livro, registravam qual era a letra central, e descartavam a cópia que não conferisse. O resultado é uma tradição notavelmente uniforme, e também o desaparecimento sistemático dos exemplares antigos, substituídos por cópias novas e conferidas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Até 1947, o manuscrito hebraico completo mais antigo era de cerca do ano 1000. Nesse ano começaram a aparecer, em cavernas junto ao mar Morto, cópias mil anos mais velhas — e o rolo completo de Isaías, comparado ao texto massorético, mostrou-se substancialmente o mesmo. Foi a checagem que ninguém esperava poder fazer, e a disciplina dos copistas passou nela.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Resta uma questão real, e ela não é pequena: a tradução grega feita antes de Cristo, a Septuaginta, às vezes difere do hebraico — em Jeremias, de modo substancial, com um texto sensivelmente mais curto. E os autores do Novo Testamento citam com frequência a Septuaginta. O leitor que perceber isso está diante de um problema genuíno, e é bom saber que ele é de outra ordem: não se trata de erro de cópia, e sim de duas formas antigas do mesmo livro, o que a descoberta de fragmentos hebraicos alinhados com a Septuaginta tornou ainda mais interessante.',
    },
    {
      tipo: 'secao',
      titulo: 'A pergunta confessional: e a preservação?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para o leitor reformado a dificuldade não é apenas histórica. A Confissão de Westminster afirma que as Escrituras foram, pelo singular cuidado e providência de Deus, conservadas puras em todos os séculos. Como conciliar isso com uma tradição manuscrita cheia de diferenças?',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que a Confissão diz e no que ela não diz. Ela afirma que o texto foi **conservado puro**; não afirma que exista uma cópia perfeita, nem uma edição impressa isenta de erro, nem um manuscrito privilegiado. A preservação que ela descreve é distribuída: está na multidão de testemunhas espalhadas, não concentrada num exemplar que a igreja teria de identificar e guardar.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'E o contexto polêmico do capítulo confirma essa leitura. A afirmação é feita contra a pretensão de que só uma autoridade eclesiástica central poderia garantir o texto. O argumento da Confissão é o oposto do que às vezes se lhe atribui: precisamente porque a preservação é obra da providência e não de um guardião oficial, a igreja tem o texto sem precisar de um magistério que o certifique.',
    },
    {
      tipo: 'citacao',
      texto:
        'O Antigo Testamento em hebraico e o Novo em grego, sendo imediatamente inspirados por Deus e, por seu singular cuidado e providência, conservados puros em todos os séculos, são, por isso, autênticos.',
      autor: 'Confissão de Fé de Westminster',
      obra: 'cap. I.8',
      fonteId: 'cfw-ipib',
    },
    {
      tipo: 'controversia',
      titulo: 'Qual texto grego deve ser usado',
      posicoes: [
        {
          escola: 'Texto crítico',
          sintese:
            'Adotado pelas edições acadêmicas correntes e pela maioria das traduções modernas, pesa as testemunhas pela antiguidade e pela qualidade, não pelo número, partindo do princípio de que cópias posteriores tendem a acumular acréscimos. Tem a vantagem de usar manuscritos que o século XVI não conhecia; corre o risco de dar peso excessivo a poucos exemplares de uma mesma região do Egito, que sobreviveram sobretudo por causa do clima seco de lá.',
        },
        {
          escola: 'Texto majoritário ou bizantino',
          sintese:
            'Sustenta que a leitura atestada pela maioria esmagadora das cópias e usada continuamente pela igreja grega tem presunção a seu favor, e que a providência agiria no uso eclesiástico e não numa minoria de manuscritos esquecidos. A objeção que enfrenta é que número de cópias reflete quem copiou mais e por mais tempo, não necessariamente antiguidade; a força que tem é lembrar que a preservação, se é providencial, deve ter algo a ver com a igreja que leu o texto.',
        },
        {
          escola: 'Textus Receptus',
          sintese:
            'Defende as edições impressas do século XVI, base das traduções da Reforma, argumentando que abandoná-las é instabilizar o texto que a igreja confessante usou. A preocupação de fundo é séria e não deve ser ridicularizada: sem alguma estabilidade, cada geração fica refém da última hipótese acadêmica. A dificuldade é que a posição em sua forma forte precisa atribuir a uma edição impressa por um humanista do século XVI uma condição que a Confissão atribui apenas aos originais.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Convém dizer o tamanho real do desacordo, porque a temperatura da discussão sugere algo maior do que ele é. As três posições produzem traduções que concordam em quase tudo; as passagens em disputa cabem numa lista curta, e a maior delas é o final de Marcos. Quem lê uma tradução de qualquer das três famílias tem em mãos a mesma fé.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Alguém vai perguntar sobre a nota de rodapé, e o pior caminho é o que parece mais protetor: minimizar, mudar de assunto ou dizer que aquilo é invenção de liberais. Quem faz isso entrega ao ouvinte um pacote que se rompe no primeiro vídeo que ele assistir, e o estrago então é maior — porque à dúvida sobre o versículo se soma a descoberta de que o pastor não sabia ou não quis contar. O caminho útil é ensinar o que a nota significa, que é uma boa notícia disfarçada: aquela nota está ali porque os tradutores tinham manuscritos suficientes para perceber a diferença e honestidade para registrá-la. Um livro sem notas de rodapé não é mais confiável, apenas menos examinado. E o consolo a oferecer não é vago: mostre ao irmão que a doutrina que ele teme perder está ensinada em outros lugares, e abra a Bíblia neles.',
    },
    {
      tipo: 'lista',
      itens: [
        'Ao encontrar uma nota de rodapé, observe se ela diz "alguns manuscritos" ou "os manuscritos mais antigos" — a segunda formulação carrega muito mais peso que a primeira.',
        'Ao ouvir que uma tradução moderna "removeu" um versículo, verifique a ordem dos fatos: nenhuma edição moderna partiu de um texto completo e cortou trechos; o que houve foi a descoberta de cópias anteriores às que o século XVI conhecia.',
        'Ao discutir uma variante, pergunte primeiro se alguma doutrina depende dela. Na quase totalidade dos casos a resposta é não, e isso muda o tom da conversa.',
        'Ao avaliar uma leitura, lembre da regra que decorre das harmonizações: a leitura mais curta e a mais difícil costumam ser as mais antigas, porque o copista tende a completar e a facilitar, não a truncar e a complicar.',
        'Ao ler sobre manuscritos, consulte as imagens. O Codex Sinaiticus está inteiro na internet, e ver a página com as correções feitas por mãos diferentes ensina mais sobre a transmissão do texto do que qualquer explicação.',
      ],
    },
  ],
  fontes: [
    {
      id: 'codex-sinaiticus',
      autor: 'British Library, Universidade de Leipzig, Mosteiro de Santa Catarina e Biblioteca Nacional Russa',
      ano: 'séc. IV',
      titulo: 'Codex Sinaiticus — manuscrito digitalizado com transcrição',
      publicacao: 'Codex Sinaiticus Project',
      url: 'https://www.codexsinaiticus.org/en/manuscript.aspx',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A cópia completa mais antiga do Novo Testamento, do século IV, reunida digitalmente pelas quatro instituições que guardam suas partes. Traz imagem da página ao lado da transcrição palavra por palavra, com as correções de mãos posteriores marcadas — é possível ver o final de Marcos terminando no versículo 8 com os próprios olhos.',
    },
    {
      id: 'kenyon-manuscritos',
      autor: 'Frederic G. Kenyon',
      ano: '1895',
      titulo: 'Our Bible and the Ancient Manuscripts: Being a History of the Text and Its Translations',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/ourbibleancient00keny',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Introdução clássica à transmissão do texto bíblico, escrita pelo então diretor do Museu Britânico para leitores não especialistas. Anterior aos papiros do século XX, portanto desatualizada em achados, mas insuperada como explicação de como o trabalho é feito. Domínio público.',
    },
    {
      id: 'westcott-hort',
      autor: 'B. F. Westcott e F. J. A. Hort',
      ano: '1882',
      titulo: 'The New Testament in the Original Greek: Introduction and Appendix',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/newtestamentinor82west',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'O volume que expõe o método por trás da edição de 1881, com a discussão das passagens disputadas. É a peça central do debate sobre o texto crítico: quem quer avaliar a controvérsia deve ler o argumento original, e não apenas as críticas a ele. Domínio público.',
    },
    {
      id: 'eusebio-he',
      autor: 'Eusébio de Cesareia',
      ano: '325',
      titulo: 'História Eclesiástica, livro III — os escritos reconhecidos e os disputados',
      publicacao: 'Wikisource',
      url: 'https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_II/Volume_I/Church_History_of_Eusebius/Book_III/Chapter_25',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Testemunho do século IV sobre quais livros circulavam e com que estatuto, útil aqui para separar a questão do cânon — quais livros — da questão textual — que palavras dentro de cada livro. As duas são frequentemente confundidas.',
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
      nota: 'O capítulo I, parágrafo 8, é o texto confessional discutido aqui — inclusive a cláusula sobre a conservação em todos os séculos e a autoridade dos originais em hebraico e grego sobre as traduções.',
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
      nota: 'Reúne textos em português sobre crítica textual e sobre a controvérsia do Textus Receptus, incluindo defesas das diferentes posições — útil para ouvir cada lado em suas próprias palavras.',
    },
  ],
};
