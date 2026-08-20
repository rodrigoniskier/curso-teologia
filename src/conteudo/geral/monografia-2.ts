import type { Verbete } from '../../tipos';

export const monografia2: Verbete = {
  id: 'cg13-monografia-2',
  disciplina: 'CG13',
  unidade: 1,
  titulo: 'Monografia 2: Da Pesquisa ao Texto Defensável',
  subtitulo:
    'Ter oitenta páginas de anotações ainda não é ter uma monografia — o trabalho começa quando cada afirmação precisa responder de onde veio e por que está ali',
  objetivo:
    'Ao final, você saberá executar o projeto elaborado em Monografia 1: organizar pesquisa bibliográfica e fichamentos sem perder a rastreabilidade das fontes, enquadrar teologicamente o tema sem predeterminar as evidências, transformar material acumulado em argumento, construir e revisar o esboço da monografia, distinguir citação direta, paráfrase e análise própria, prevenir plágio desde a tomada de notas, aplicar normas de apresentação sem confundir forma com pesquisa, redigir com clareza, trabalhar produtivamente com o orientador, preparar a apresentação pública e responder à banca distinguindo o que o trabalho demonstrou, o que apenas sugere e o que não investigou.',
  atualizadoEm: '2026-08-20',
  verMais: ['cg12-monografia-1', 'cg06-metodologia', 'te16-metodologia-exegetica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'O aluno chega ao segundo semestre da monografia com uma pasta cheia: vinte e sete PDFs, cento e cinquenta destaques, fotografias de páginas, três arquivos chamados “capítulo 1 final”, um documento com citações sem número de página e a sensação de ter pesquisado muito. Quando tenta escrever, descobre que não sabe qual citação sustenta qual afirmação. O material existe; o argumento ainda não.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa diferença é o centro de Monografia 2. Monografia 1 desenhou uma investigação: problema, pergunta, corpus, método e percurso. Agora o projeto precisa sobreviver ao contato com as fontes. Algumas expectativas serão confirmadas, outras precisarão ser corrigidas, o sumário mudará e certas leituras que pareciam essenciais deixarão de servir. Isso não é desorganização. **É o sinal de que a pesquisa está produzindo conhecimento em vez de apenas preencher um molde.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa oficial é prática: concluir a execução do projeto sob acompanhamento do orientador e entregar uma monografia para apresentação pública e avaliação por banca. Portanto esta disciplina não é um segundo curso abstrato de metodologia. Seu produto é um texto que outra pessoa consegue examinar, conferir, questionar e, quando necessário, corrigir.',
    },

    { tipo: 'secao', titulo: 'Uma monografia é uma cadeia de afirmações auditáveis' },
    {
      tipo: 'paragrafo',
      texto:
        'O leitor não estava na biblioteca com você. Ele não viu as páginas que você descartou, não participou das conversas com o orientador e não conhece as associações que pareciam óbvias durante a leitura. O texto precisa reconstruir o caminho. Para cada afirmação relevante, o leitor deve conseguir perguntar: **isto vem de uma fonte, é uma inferência do autor ou é uma conclusão produzida pela comparação das evidências?**',
    },
    {
      tipo: 'definicao',
      termo: 'Monografia acadêmica',
      texto:
        'Investigação escrita e delimitada que responde a uma pergunta por meio de um procedimento explícito e de evidências rastreáveis. Não é coleção de citações nem exposição geral de um tema. Seu argumento deve permitir que o leitor distinga fonte, interpretação e conclusão, avalie se a evidência utilizada sustenta o que se afirma e identifique os limites dentro dos quais a resposta é válida.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa definição muda o critério de progresso. Ler mais nem sempre significa avançar. Uma semana em que o pesquisador lê doze artigos e não registra o que cada um muda em seu argumento pode render menos que uma tarde em que ele organiza três documentos primários e descobre que sua hipótese precisa ser reformulada.',
    },

    { tipo: 'secao', titulo: 'Unidade 1 — enquadrar o tema na Confissão de Westminster não significa obrigar as fontes a dizerem o que a Confissão diz' },
    {
      tipo: 'paragrafo',
      texto:
        'O currículo da JET inclui explicitamente, na primeira unidade de Monografia 2, a determinação do tema e seu enquadramento na CFW. Em um seminário confessional isso faz sentido: o estudante precisa saber de que tradição parte, quais compromissos doutrinários assume e onde sua pergunta se localiza no sistema de doutrina da igreja.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O enquadramento confessional, porém, não autoriza um atalho metodológico. Se a pergunta é histórica — “o que os presbiterianos brasileiros afirmavam em 1890?” — a resposta precisa vir dos documentos históricos, ainda que eles revelem incoerência com o padrão confessional. Se a pergunta é exegética — “qual é a função desta cláusula em Romanos?” — a gramática não muda para caber numa conclusão sistemática já preferida. A Confissão fornece localização e norma doutrinária; não substitui a evidência própria de cada pergunta.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Pergunta doutrinária:** a CFW pode integrar o corpus normativo subordinado da pesquisa, sempre sob a Escritura.',
        '**Pergunta histórica:** a CFW ajuda a identificar o padrão professado, mas os documentos do período mostram como pessoas e instituições realmente pensaram e agiram.',
        '**Pergunta exegética:** a confissão declara uma síntese recebida pela igreja; o procedimento exegético precisa demonstrar como o texto bíblico sustenta, qualifica ou organiza a afirmação estudada.',
        '**Pergunta pastoral:** a confissão pode estabelecer limites doutrinários, enquanto dados locais, documentos e observação descrevem o problema concreto que será analisado.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A boa pesquisa confessional não tem medo de declarar sua posição nem precisa fingir neutralidade impossível. Sua disciplina está em outra parte: **não atribuir ao texto bíblico, ao documento histórico ou ao interlocutor aquilo que a fonte não sustenta.** Confessionalidade e exatidão não competem; quando competem, alguma coisa foi mal compreendida.',
    },

    { tipo: 'secao', titulo: 'Unidade 2 — fichamento serve para preservar a origem da ideia antes que a memória misture tudo' },
    {
      tipo: 'paragrafo',
      texto:
        'Plágio acidental frequentemente começa semanas antes da redação. O estudante copia uma frase para um arquivo, esquece as aspas, não registra a página e depois encontra aquela formulação entre suas próprias notas. Quando escreve, já não sabe se a frase nasceu dele. A primeira defesa contra isso não é um detector de similaridade no fim; é **rastreabilidade no momento da leitura**.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Ficha bibliográfica:** registra os dados necessários para reencontrar e referenciar a obra. Faça isso quando a fonte entra na pesquisa, não na madrugada anterior à entrega.',
        '**Ficha de citação:** guarda as palavras exatas entre aspas, com página ou localização precisa e contexto suficiente para impedir uso deslocado.',
        '**Ficha de resumo:** reconstrói com palavras próprias o argumento de uma seção ou obra, sem copiar sua sintaxe.',
        '**Ficha analítica:** registra o que aquela fonte muda no seu problema: concorda, contradiz, define um termo, fornece dado, revela lacuna ou obriga a reformular uma hipótese.',
        '**Ficha de pergunta:** preserva dúvidas abertas. Algumas das melhores partes do texto surgirão de perguntas que a primeira leitura não conseguiu responder.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isaac Watts tratava leitura, anotação, conversação e escrita como partes do mesmo exercício de investigação. A lição continua válida em um ambiente digital: destacar cem frases não equivale a elaborar cem notas. **O fichamento útil não pergunta apenas “o que o autor disse?”, mas “por que guardei isto e que função pode cumprir na minha pesquisa?”**',
    },

    { tipo: 'secao', titulo: 'Pesquisa bibliográfica não começa digitando o tema inteiro numa caixa de busca' },
    {
      tipo: 'paragrafo',
      texto:
        'A busca melhora quando deriva da pergunta. Separe nomes próprios, conceitos, documentos, períodos, termos técnicos e vocabulário em outros idiomas. Uma pesquisa sobre mudança confessional, por exemplo, pode exigir o nome do documento, versões históricas, atas de assembleias, termos jurídicos e autores que participaram da revisão — não apenas a expressão genérica “igreja e Estado”.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Comece pelo corpus:** localize primeiro os documentos que você afirmou que analisaria.',
        '**Mapeie o vocabulário:** registre sinônimos, traduções, grafias antigas e termos técnicos usados pelos próprios autores.',
        '**Use bibliografias como mapas:** uma boa obra secundária não é só fonte de conteúdo; suas notas mostram a conversa acadêmica que veio antes.',
        '**Rastreie para trás e para frente:** veja o que o autor cita e, quando possível, quem o citou depois.',
        '**Registre a busca:** base consultada, termos usados, data e motivo de inclusão ou exclusão. Isso evita refazer a mesma procura e aumenta a transparência.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A biblioteca física também continua tendo uma vantagem que o mecanismo de busca não reproduz perfeitamente: proximidade intelectual inesperada. Um livro encontrado ao lado de outro, um índice de coleção e uma bibliografia especializada podem revelar vocabulário que o pesquisador ainda não conhecia e, por isso, nunca teria digitado numa busca.',
    },

    { tipo: 'secao', titulo: 'Fonte primária e fonte secundária exercem funções diferentes — uma não se torna primária porque é antiga' },
    {
      tipo: 'paragrafo',
      texto:
        'A classificação depende da pergunta. As Institutas de Calvino são fonte primária numa pesquisa sobre o pensamento de Calvino e podem funcionar como interlocutor secundário numa exegese de Romanos 9. Um historiador do século XIX pode ser fonte primária para estudar a historiografia daquele século e fonte secundária quando usado para reconstruir o século XVI. O rótulo não pertence eternamente ao livro; pertence à relação entre livro e problema.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Por isso a monografia precisa deixar claro quando está afirmando **“o documento diz”**, **“o intérprete entende”** e **“eu concluo a partir da comparação”**. Misturar as três vozes faz o texto parecer mais seguro do que realmente é.',
    },

    { tipo: 'secao', titulo: 'A matriz afirmação–evidência mostra onde o capítulo ainda está sustentado apenas pela confiança do autor' },
    {
      tipo: 'paragrafo',
      texto:
        'Antes de redigir capítulos longos, monte uma tabela simples. Na primeira coluna, escreva as afirmações necessárias ao argumento. Na segunda, a evidência que sustenta cada uma. Na terceira, o tipo de evidência. Na quarta, a objeção ou explicação alternativa mais forte. Na quinta, a resposta provisória. A coluna vazia é mais útil que um parágrafo bonito: ela mostra exatamente onde ainda falta trabalho.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Afirmação:** a revisão confessional restringiu determinada competência civil.',
        '**Evidência:** comparação textual das duas redações, com localização exata.',
        '**Tipo:** documento primário.',
        '**Alternativa:** a mudança pode ser apenas estilística ou jurídica, sem alteração doutrinária.',
        '**Teste seguinte:** verificar o contexto da revisão e documentos interpretativos produzidos pelos próprios revisores.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse procedimento também impede um vício comum: um parágrafo com quatro afirmações e uma única referência no fim. O leitor não sabe se a fonte sustenta a primeira, a última ou todas. **Citação não funciona como bênção colocada no fim do parágrafo; precisa estar ligada à afirmação que realmente documenta.**',
    },

    { tipo: 'secao', titulo: 'O esboço preliminar deve perder a discussão contra a evidência quando a evidência vencer' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa distingue esboços preliminares e definitivos porque a estrutura amadurece. O projeto imaginou uma rota antes da pesquisa definitiva. Agora o material pode mostrar que dois capítulos eram um só, que uma seção inteira não responde à pergunta ou que uma distinção ausente precisa reorganizar o trabalho.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Esboço de projeto:** organiza o que você imagina que precisará investigar.',
        '**Esboço de pesquisa:** reorganiza os materiais segundo os problemas que apareceram na leitura.',
        '**Esboço argumentativo:** cada seção recebe uma frase dizendo o que precisa demonstrar para que a seção seguinte possa existir.',
        '**Sumário quase definitivo:** surge depois de capítulos redigidos e pode ser ajustado para refletir o argumento que o trabalho realmente produziu.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Um teste severo ajuda: escreva ao lado de cada capítulo **“sem este capítulo, qual parte da resposta deixa de estar demonstrada?”** Se a resposta for “nenhuma”, talvez o capítulo esteja ali porque o assunto é interessante, não porque o argumento precisa dele.',
    },

    { tipo: 'secao', titulo: 'Unidade 3 — a estrutura acadêmica torna o trabalho navegável; não torna uma pesquisa fraca verdadeira' },
    {
      tipo: 'paragrafo',
      texto:
        'Normas de apresentação cumprem uma função legítima: tornam trabalhos previsíveis o bastante para que o leitor encontre título, resumo, sumário, citações, notas e referências sem reaprender o sistema a cada documento. O manual da UNIFAL-MG de 2025 é útil porque traduz normas ABNT atuais em orientação pública e exemplificada para trabalhos acadêmicos. Mas a própria existência de um manual institucional lembra uma regra importante: **quando o seminário especifica um padrão local, o aluno precisa seguir a regra institucional aplicável, não copiar mecanicamente o modelo de outra universidade.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Também convém separar normalização de conteúdo. Margens corretas não compensam uma fonte mal lida. Referência perfeitamente formatada não transforma uma afirmação sem evidência em conclusão. A forma é parte da comunicação científica porque facilita verificação; ela não substitui o raciocínio que será verificado.',
    },

    { tipo: 'secao', titulo: 'Introdução não conta a história de como você sofreu para pesquisar — ela orienta o leitor para a investigação' },
    {
      tipo: 'lista',
      itens: [
        '**Problema e pergunta:** qual dificuldade intelectual o trabalho enfrenta e o que exatamente pergunta?',
        '**Delimitação:** o que está dentro e fora da investigação?',
        '**Justificativa:** por que vale responder esta pergunta neste recorte?',
        '**Corpus e método:** que evidências serão analisadas e por qual procedimento?',
        '**Estrutura:** como os capítulos cooperam para produzir a resposta?',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'É comum escrever a introdução cedo e reescrevê-la no fim. Isso não é fraude. O primeiro texto orienta o pesquisador; o último precisa descrever com precisão a pesquisa que realmente foi executada. Se o método mudou legitimamente, a introdução final deve dizer o método realizado, não preservar uma promessa antiga por vergonha de admitir que o projeto amadureceu.',
    },

    { tipo: 'secao', titulo: 'Capítulo não é recipiente de conteúdo: é uma etapa da demonstração' },
    {
      tipo: 'paragrafo',
      texto:
        'Um capítulo forte possui uma tarefa argumentativa. Ele começa lembrando o problema local, apresenta a evidência necessária, analisa essa evidência e termina dizendo o que foi estabelecido e o que ainda precisa ser demonstrado. Isso cria continuidade entre capítulos sem depender de frases artificiais como “no próximo capítulo veremos um assunto muito importante”.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Afirmação:** o parágrafo diz alguma coisa que pode ser avaliada.',
        '**Evidência:** mostra por que o leitor deveria aceitar a afirmação.',
        '**Análise:** explica como a evidência sustenta a afirmação e quais limites possui.',
        '**Transição:** mostra o que essa conclusão exige da próxima parte do argumento.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sem análise, a monografia vira antologia comentada: citação, frase de ligação, outra citação. O pesquisador precisa aparecer não como celebridade do texto, mas como responsável por explicar a relação entre as fontes.',
    },

    { tipo: 'secao', titulo: 'Citação direta preserva palavras; paráfrase preserva dívida intelectual' },
    {
      tipo: 'paragrafo',
      texto:
        'Use citação direta quando as palavras exatas importam: uma definição, uma formulação confessional, uma afirmação histórica controvertida, um termo cuja redação será analisada. Se apenas a ideia importa, a paráfrase costuma integrar melhor o argumento. Em ambos os casos, a autoria precisa permanecer visível.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Citação direta:** palavras de outra fonte são reproduzidas como palavras de outra fonte, com indicação conforme o padrão adotado.',
        '**Citação indireta ou paráfrase:** a ideia é reescrita de fato, com estrutura própria, mas continua atribuída ao autor de quem veio.',
        '**Conhecimento comum:** afirmação amplamente estabelecida que não depende de uma formulação particular; mesmo aqui, em temas especializados, é melhor documentar quando houver dúvida.',
        '**Análise própria:** interpretação produzida pelo pesquisador a partir de evidências apresentadas; deve ser distinguível das posições que ele está descrevendo.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Trocar três palavras por sinônimos não cria paráfrase. Isso preserva a arquitetura verbal do autor e pode produzir o chamado *patchwriting*: um mosaico em que a superfície parece nova, mas a construção continua alheia. Uma boa paráfrase nasce depois de compreender o argumento, afastar os olhos da frase original, reconstruí-lo e então conferir se o sentido permaneceu fiel.',
    },

    { tipo: 'secao', titulo: 'Plágio é um problema de autoria e rastreabilidade antes de ser um problema de software' },
    {
      tipo: 'lista',
      itens: [
        '**Cópia sem atribuição:** a forma mais evidente.',
        '**Paráfrase sem atribuição:** a frase é nova, mas a ideia identificável continua tendo autor.',
        '**Mosaico de fontes:** pequenos fragmentos são combinados de modo que a dependência intelectual fica escondida.',
        '**Fonte não consultada apresentada como consultada:** repetir uma referência encontrada em outro autor sem conferir o original cria falsa cadeia de evidência.',
        '**Reutilização opaca de texto próprio:** quando regras institucionais exigem trabalho original, reaproveitar material anterior sem indicar a relação também pode ser problema de integridade.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Detectores de similaridade podem encontrar sequências parecidas e deixar passar apropriação intelectual bem disfarçada. Também podem sinalizar citações legítimas. Por isso o estudante precisa de um sistema anterior ao detector: notas com origem, aspas mantidas desde a coleta, páginas registradas, distinção entre resumo e comentário próprio e conferência final das referências.',
    },

    { tipo: 'secao', titulo: 'Referência bibliográfica é uma promessa de que o leitor consegue refazer o caminho' },
    {
      tipo: 'paragrafo',
      texto:
        'A lista final não deve conter obras colocadas para parecer erudita. Em regra, cada item precisa corresponder a material efetivamente usado e cada obra citada precisa chegar à lista segundo o padrão institucional. O objetivo da normalização não é ornamentar o trabalho; é reduzir ambiguidade sobre identidade, autoria, edição e localização da fonte.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em fonte digital, guarde metadados enquanto o acesso está aberto. Título de página, autor institucional, data, endereço e, quando exigido, data de acesso são muito mais fáceis de conferir na hora do que meses depois, quando a página mudou. DOI e identificadores persistentes devem ser preferidos quando realmente identificam o objeto citado.',
    },

    { tipo: 'secao', titulo: 'Unidade 4 — linguagem impessoal não precisa ser linguagem sem sujeito, sem verbo forte e sem coragem' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa pede linguagem impessoal. Em muitos ambientes acadêmicos isso significa evitar o tom autobiográfico e formulações coloquiais como “eu acho”. Não significa transformar todo parágrafo em passivas longas — “foi realizada uma análise pela qual se buscou verificar...” — nem fingir que o pesquisador desapareceu. A clareza continua sendo obrigação.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Fraco:** “É importante destacar que pode-se perceber claramente que Calvino parece demonstrar...”',
        '**Mais claro:** “Calvino distingue X de Y nesta passagem.”',
        '**Fraco:** “Foi feita uma análise das duas versões com o objetivo de verificar as diferenças existentes.”',
        '**Mais claro:** “A análise compara as duas versões em quatro categorias: autoridade, proteção, competência e liberdade.”',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Texto acadêmico não precisa soar antigo para soar sério. Prefira verbos que indiquem a operação executada, termos técnicos quando realmente necessários e frases cujo sujeito lógico possa ser identificado. **A precisão aumenta quando o leitor gasta energia avaliando a ideia, não decifrando a frase.**',
    },

    { tipo: 'secao', titulo: 'Revisar por camadas é mais eficiente que tentar corrigir argumento, vírgula e referência na mesma leitura' },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Revisão da pergunta:** a conclusão responde à pergunta que a introdução realmente formula?',
        '**Revisão do argumento:** cada capítulo faz trabalho necessário e as conclusões intermediárias se conectam?',
        '**Revisão da evidência:** toda afirmação importante possui apoio adequado e nenhuma fonte está dizendo mais do que de fato diz?',
        '**Revisão das objeções:** alternativas relevantes foram tratadas com justiça, especialmente quando poderiam mudar a conclusão?',
        '**Revisão da prosa:** corte repetição, jargão, frases vagas, “é sabido”, “todos concordam” e adjetivos que substituem demonstração.',
        '**Revisão de citações e referências:** confira uma a uma entre texto, notas e lista final.',
        '**Revisão formal:** aplique o padrão institucional, paginação, sumário, títulos, tabelas, ilustrações e demais elementos exigidos.',
      ],
    },

    { tipo: 'secao', titulo: 'O orientador não é coautor invisível nem corretor que recebe o trabalho inteiro na véspera' },
    {
      tipo: 'paragrafo',
      texto:
        'Orientação funciona melhor com unidades pequenas e perguntas claras. Enviar quarenta páginas acompanhadas de “o que o senhor acha?” transfere ao orientador a tarefa de descobrir qual é a dúvida. É mais produtivo enviar uma seção com contexto: “reorganizei o capítulo porque as fontes mostraram X; minha dúvida é se Y precisa entrar aqui ou no capítulo seguinte”.',
    },
    {
      tipo: 'lista',
      itens: [
        'Registre decisões tomadas em orientação e o motivo delas.',
        'Quando discordar de uma sugestão, explique com evidência; orientação acadêmica admite argumento.',
        'Não entregue ao orientador o papel de descobrir referências que o estudante afirmou ter consultado.',
        'Não espere a versão final para revelar mudança de pergunta, método ou corpus.',
        'Envie texto suficientemente revisado para que o orientador possa avaliar pesquisa, não apenas erros mecânicos.',
      ],
    },

    { tipo: 'secao', titulo: 'A banca não existe para descobrir se o aluno consegue defender cada frase como se fosse infalível' },
    {
      tipo: 'paragrafo',
      texto:
        'A apresentação pública torna visível uma característica que já deveria existir no texto: a conclusão possui extensão e limites. Uma boa defesa não é a capacidade de responder qualquer pergunta sobre o tema. É a capacidade de mostrar o que foi investigado, como foi investigado, o que as evidências permitem concluir e onde termina a competência daquele trabalho.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Problema:** qual pergunta exigiu a pesquisa?',
        '**Corpus e método:** que material foi analisado e o que foi feito com ele?',
        '**Resultado central:** qual é a resposta em uma ou duas frases?',
        '**Evidência decisiva:** quais dados ou textos sustentam essa resposta?',
        '**Contribuição:** o que ficou mais claro depois do trabalho?',
        '**Limite:** o que a pesquisa não demonstrou e que investigação poderia continuar dali?',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Diante de uma pergunta, três respostas intelectualmente honestas precisam permanecer disponíveis: **“o trabalho demonstrou”**, **“os dados permitem sugerir, mas não demonstrar”** e **“isso não foi investigado”**. A terceira resposta, quando verdadeira, é melhor que improvisar uma certeza para parecer preparado.',
    },

    { tipo: 'secao', titulo: 'Depois da banca ainda existe pesquisa: correções precisam voltar ao texto' },
    {
      tipo: 'paragrafo',
      texto:
        'Anote objeções e correções durante a defesa. Depois, classifique-as: erro factual, lacuna de evidência, problema de redação, normalização, sugestão de expansão ou divergência interpretativa legítima. Nem todo comentário exige concordância, mas todo comentário relevante exige decisão consciente antes da versão definitiva.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A versão depositada deve ser melhor que a versão apresentada. Corrigir apenas capa e paginação desperdiça a última oportunidade de incorporar aquilo que a própria avaliação revelou.',
    },

    { tipo: 'secao', titulo: 'Extensão contemporânea: IA generativa pode ajudar no processo, mas não pode virar fonte invisível' },
    {
      tipo: 'paragrafo',
      texto:
        'A ementa de 2018 naturalmente não trata de IA generativa. Em 2026, porém, a mesma ética de rastreabilidade precisa ser aplicada a ela. Um modelo pode ajudar a testar clareza, sugerir termos de busca, comparar estruturas de parágrafos ou apontar perguntas que o texto ainda não respondeu. **Ele não transforma uma referência em verdadeira, não substitui a consulta à fonte e não possui autoridade para confirmar uma citação que o pesquisador não verificou.**',
    },
    {
      tipo: 'lista',
      itens: [
        'Nunca coloque na bibliografia uma obra porque um modelo afirmou que ela existe; abra o registro e, quando a obra for usada, consulte o original.',
        'Nunca aceite número de página, citação literal, DOI ou dado histórico sem verificação independente na fonte correspondente.',
        'Não entregue como autoria própria texto gerado quando a política institucional exige autoria humana ou declaração de uso.',
        'Use IA para tornar perguntas mais exigentes, não para evitar a leitura das fontes que dão à resposta sua evidência.',
        'Siga a política vigente do seminário e do orientador sobre declaração e limites de uso; tecnologia muda mais rápido que regulamentos, portanto confirme a regra aplicável à sua turma.',
      ],
    },

    { tipo: 'secao', titulo: 'Checklist de entrega: antes de chamar o arquivo de “final”' },
    {
      tipo: 'lista',
      itens: [
        'A pergunta da introdução e a resposta da conclusão correspondem uma à outra?',
        'Consigo apontar a evidência principal para cada afirmação central?',
        'O texto distingue claramente fonte primária, interpretação secundária e análise própria?',
        'Toda citação literal foi conferida no original efetivamente consultado?',
        'Toda paráfrase que depende de outro autor está atribuída?',
        'Cada referência citada aparece na lista final e cada item da lista possui função real no trabalho?',
        'O sumário descreve a estrutura que o texto realmente possui?',
        'As conclusões respeitam os limites do corpus e do método?',
        'O padrão de apresentação utilizado é o exigido pela instituição na versão vigente?',
        'O orientador recebeu tempo real para avaliar a versão substancial?',
        'Preparei a defesa a partir da pergunta, do método, do resultado e da evidência — e não como resumo capítulo por capítulo?',
      ],
    },

    {
      tipo: 'pastoral',
      texto:
        'Monografia parece um exercício distante do púlpito até percebermos a virtude que ela treina. O ministro passará a vida fazendo afirmações diante de pessoas que confiarão nele: “o texto diz”, “Calvino ensinou”, “a igreja sempre creu”, “a pesquisa mostra”. Cada uma dessas frases cria uma dívida de verdade. O hábito de voltar à fonte, registrar onde encontrou, distinguir fato de inferência, admitir limite e corrigir uma formulação quando a evidência não a sustenta não serve apenas para obter uma nota. **É uma forma de aprender a não usar autoridade pastoral para pedir que outros confiem onde nós mesmos não verificamos.** A banca termina; essa responsabilidade não.',
    },
  ],
  fontes: [
    {
      id: 'unifal-normalizacao-2025',
      autor: 'Universidade Federal de Alfenas',
      ano: '2025',
      titulo: 'Manual de normalização e apresentação de trabalhos acadêmicos da UNIFAL-MG',
      publicacao: 'Sistema de Bibliotecas da UNIFAL-MG',
      url: 'https://www.unifal-mg.edu.br/bibliotecas/wp-content/uploads/sites/125/2025/05/Manual-de-normalizacao-2-edicao-revista-e-atualizada-12-05-2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota:
        'Manual institucional aberto, revisto em 2025 com base nas normas ABNT vigentes, cobrindo estrutura, apresentação, projeto, citações, notas e referências. É usado como guia público de aplicação; o padrão específico do seminário continua prevalecendo quando houver adaptação institucional.',
    },
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
      nota:
        'Clássico protestante sobre leitura, anotação, investigação, conversação intelectual e escrita como disciplinas para conhecer e comunicar a verdade; complementa o uso já feito em Monografia 1.',
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
        'Documento confessional usado para explicar o “enquadramento na CFW” exigido pela ementa: localização doutrinária explícita sem confundir norma confessional com substituto das evidências históricas, textuais ou empíricas próprias de cada pesquisa.',
    },
  ],
};
