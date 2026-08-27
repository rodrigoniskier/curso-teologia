import type { Verbete } from '../../tipos';

export const antigoTestamentoInspiracaoCritica: Verbete = {
  id: 'te01-at-inspiracao-critica',
  disciplina: 'TE01',
  unidade: 1,
  titulo: 'Como Entrar no Antigo Testamento: Inspiração, História e Crítica',
  subtitulo: 'Ler o AT com fé não exige fugir das perguntas históricas; exige saber quais perguntas o texto realmente permite responder',
  objetivo:
    'Ao final, você saberá por que o Antigo Testamento é indispensável à fé cristã, situará sua história no mundo antigo, relacionará inspiração e autoria humana, distinguirá crítica textual de crítica histórica e avaliará pressupostos e contribuições dos métodos críticos sem confundir investigação com incredulidade.',
  atualizadoEm: '2026-08-27',
  verMais: ['te01-canon-at', 'ts01-inspiracao', 'te03-geografia-arqueologia'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'O Antigo Testamento pode parecer ao leitor cristão uma longa antessala: genealogias, leis, guerras, poesia e profecias antes de finalmente se chegar a Jesus. Essa impressão desaparece quando se percebe que o Novo Testamento não trata essas Escrituras como cenário descartável. É nelas que os apóstolos aprendem quem Deus é, o que significam criação, pecado, aliança, sacrifício, reino, templo, messias e esperança.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Sem o Antigo Testamento, palavras centrais do evangelho continuam pronunciáveis, mas perdem sua gramática. Chamar Jesus de Cristo pressupõe a história da unção e da realeza; chamá-lo Cordeiro pressupõe sacrifício e êxodo; falar em nova aliança pressupõe a antiga; anunciar o Reino pressupõe a promessa feita a Davi e a esperança dos profetas.',
    },
    { tipo: 'secao', titulo: 'Por que estudar o Antigo Testamento', nivel: 2 },
    {
      tipo: 'lista',
      itens: [
        '**Porque era a Escritura de Jesus e dos apóstolos.** Quando o Novo Testamento fala das “Escrituras” em grande parte de suas ocorrências, o conjunto imediatamente disponível é o que chamamos Antigo Testamento.',
        '**Porque a história da redenção começa antes de Belém.** Criação, queda, promessa, aliança, êxodo, reino, exílio e restauração fornecem a estrutura na qual a obra de Cristo é anunciada.',
        '**Porque a doutrina cristã depende de sua continuidade.** Criação, providência, pecado, justiça, santidade, culto e esperança não aparecem no Novo Testamento como conceitos sem passado.',
        '**Porque ele corrige uma fé sem memória.** A vida do povo de Deus inclui espera longa, disciplina, fracasso, lamento, reforma, preservação e promessas ainda não consumadas.',
      ],
    },
    {
      tipo: 'passagem',
      referencia: 'Lucas 24.27',
      texto:
        'Jesus interpreta sua própria obra a partir de Moisés e dos Profetas, mostrando que a história anterior encontra nele seu cumprimento sem deixar de ter sentido em seu próprio contexto.',
    },
    { tipo: 'secao', titulo: 'Onde e quando essa história acontece', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'O mundo do Antigo Testamento ocupa principalmente a faixa entre Egito e Mesopotâmia. Canaã está no corredor que liga grandes potências separadas pelo deserto sírio-arábico. Essa posição explica por que um território pequeno aparece repetidamente sob pressão de Egito, Assíria, Babilônia e, mais tarde, Pérsia.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Geografia, porém, não é decoração. Israel depende de chuvas sazonais, vive entre rotas imperiais e habita uma terra sem a segurança hídrica do Nilo ou do Eufrates. A promessa de terra, as tentações ligadas aos cultos de fertilidade e o vocabulário profético de invasão e exílio são mais claros quando o mapa deixa de ser ilustração e passa a integrar a leitura.',
    },
    {
      tipo: 'termo',
      termo: 'Antigo Oriente Próximo',
      texto:
        'Expressão moderna para o conjunto de sociedades do Egito, Levante, Anatólia e Mesopotâmia no qual Israel viveu. Comparar Israel com seus vizinhos é metodologicamente legítimo quando a comparação esclarece formas literárias, instituições, língua e cultura; torna-se reducionista quando semelhança é tratada automaticamente como prova de dependência ou identidade religiosa.',
    },
    { tipo: 'secao', titulo: 'Inspiração não apaga autoria humana', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A perspectiva reformada não precisa escolher entre um livro verdadeiramente divino e um livro verdadeiramente humano. A inspiração é orgânica: Deus governa autores reais, com vocabulário, época, pesquisa, memória, fontes, estilo e intenção. O resultado não é menos Palavra de Deus por carregar as marcas de Moisés, Davi, Jeremias ou do historiador de Reis.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Essa formulação impede duas simplificações. A primeira imagina escritores em transe, como instrumentos sem personalidade. A segunda conserva apenas a experiência religiosa dos autores e deixa o texto entregue aos erros que qualquer experiência humana produziria. A doutrina bíblico-reformada afirma simultaneamente agência humana e origem divina.',
    },
    {
      tipo: 'citacao',
      autor: 'Confissão de Fé de Westminster',
      obra: 'Capítulo I, §8',
      fonteId: 'cfw-ipib',
      texto:
        'O Antigo Testamento em hebraico e o Novo em grego foram imediatamente inspirados por Deus e preservados por seu singular cuidado e providência.',
    },
    { tipo: 'secao', titulo: 'O que são “estudos críticos”', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A palavra crítica assusta porque no uso comum significa reprovação. Em estudos bíblicos ela vem do ato de distinguir e avaliar. Perguntar qual leitura manuscrita é mais antiga, como uma narrativa foi estruturada, que gênero um texto emprega ou qual situação histórica uma profecia pressupõe são perguntas críticas mesmo quando feitas por alguém que confessa a inspiração da Escritura.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Crítica textual ou baixa crítica** compara testemunhas manuscritas para estabelecer, onde elas divergem, a forma mais antiga recuperável do texto.',
        '**Crítica das fontes** pergunta se um escrito usa materiais anteriores e como eles foram incorporados.',
        '**Crítica da forma** observa gêneros e unidades menores, procurando reconhecer convenções literárias e, com maior cautela, situações de uso.',
        '**Crítica da redação** pergunta como o autor ou editor organizou materiais para produzir seu argumento final.',
        '**Crítica histórica** investiga autoria, data, destinatários, circunstâncias e relação com dados externos.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum desses instrumentos carrega incredulidade por definição. O problema surge quando um pressuposto filosófico é introduzido como se fosse resultado do método. Se, antes de examinar Isaías, decide-se que predição específica é impossível, toda profecia específica terá de ser datada depois do acontecimento. A conclusão parece histórica, mas foi determinada pela premissa.',
    },
    {
      tipo: 'controversia',
      titulo: 'Como uma leitura confessional deve lidar com a crítica?',
      posicoes: [
        {
          escola: 'Rejeição defensiva',
          sintese:
            'Desconfia de todo método associado à crítica moderna porque muitos de seus praticantes partiram de pressupostos racionalistas. Preserva o alerta sobre neutralidade impossível, mas corre o risco de abandonar perguntas legítimas e deixar a exegese conservadora dependente de respostas que nunca examinou.',
        },
        {
          escola: 'Adoção metodológica sem crítica de pressupostos',
          sintese:
            'Recebe a reconstrução acadêmica dominante como se método técnico e filosofia fossem separáveis automaticamente. Ganha acesso às ferramentas do campo, mas pode tratar naturalismo, evolução religiosa necessária ou impossibilidade do sobrenatural como fatos já demonstrados.',
        },
        {
          escola: 'Realismo crítico confessional',
          sintese:
            'Examina manuscritos, história, gênero, composição e fontes com os melhores instrumentos disponíveis, ao mesmo tempo que torna explícitas as próprias convicções e testa também as premissas do intérprete. Não usa a confissão para impedir perguntas, nem usa a academia para declarar respostas antes de analisar o texto.',
        },
      ],
    },
    { tipo: 'secao', titulo: 'Baixa crítica: quando as cópias divergem', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Não possuímos os autógrafos dos livros do Antigo Testamento. O texto chega por uma tradição de cópias, traduções antigas e fragmentos. A tarefa textual não é escolher qual Bíblia gostaríamos que existisse, mas comparar testemunhas para explicar qual leitura melhor dá origem às demais.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O Texto Massorético é a principal forma medieval do texto hebraico e a base das edições hebraicas correntes. Os massoretas preservaram as consoantes recebidas, acrescentaram sistema de vocalização e uma complexa tradição de notas. Sua uniformidade é impressionante, mas não significa que seja a única testemunha antiga disponível.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A Septuaginta, tradução grega iniciada antes da era cristã, é por vezes testemunha de uma forma hebraica diferente daquela preservada pelos massoretas. A Peshitta siríaca também participa da história das versões antigas. E os manuscritos do deserto da Judeia, sobretudo Qumran, fizeram a comparação recuar muitos séculos: alguns se alinham estreitamente ao texto massorético, outros preservam leituras próximas da Septuaginta e outros mostram formas próprias.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso pede duas recusas simétricas. Não é correto dizer que Qumran “provou que nenhuma letra mudou”: há variantes reais. Também não é correto concluir que o texto ficou irrecuperável: a grande estabilidade de muitos trechos e a possibilidade de comparar tradições independentes tornam visível justamente onde existem diferenças e que peso elas têm.',
    },
    {
      tipo: 'termo',
      termo: 'Testemunha textual',
      texto:
        'Qualquer manuscrito, versão antiga ou citação suficientemente antiga que forneça evidência sobre a forma de um texto. Uma testemunha não é automaticamente superior por ser mais antiga ou mais numerosa; seu valor depende de relação genealógica, qualidade, independência e capacidade de explicar as outras leituras.',
    },
    { tipo: 'secao', titulo: 'Cânon e texto são perguntas diferentes', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A disciplina junta cânon e texto porque ambos dizem respeito à Bíblia recebida, mas não são o mesmo problema. Cânon pergunta quais livros pertencem à Escritura. Crítica textual pergunta qual é a redação mais antiga recuperável de uma passagem dentro de um livro já recebido. Uma variante em Isaías não reabre a pergunta se Isaías é canônico; uma discussão sobre os apócrifos não decide qual leitura de Isaías 7.14 é mais antiga.',
    },
    {
      tipo: 'definicao',
      termo: 'Introdução ao Antigo Testamento',
      texto:
        'É o estudo que prepara a exegese dos livros do Antigo Testamento investigando seu lugar na história da redenção, inspiração, transmissão textual, cânon, autoria, data, destinatários, circunstâncias, estrutura, gênero e propósito. Numa perspectiva reformada, a investigação histórica não concede autoridade ao texto; procura compreender com maior precisão a Escritura cuja autoridade é recebida de Deus.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A melhor reação a uma pergunta difícil sobre o Antigo Testamento não é escondê-la do aluno. Perguntas sobre manuscritos, datas, autoria e composição não ameaçam uma fé cuja doutrina da inspiração sempre incluiu autores humanos e providência histórica. A confiança amadurece quando aprende a distinguir dificuldade de contradição, hipótese de evidência e pressuposto de conclusão. O estudante não precisa escolher entre piedade e rigor; precisa aprender a praticar rigor como forma de reverência ao texto.',
    },
  ],
  fontes: [
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — cap. I',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para inspiração, autoridade e preservação das Escrituras.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro I, caps. 6–9',
      publicacao: 'Christian Classics Ethereal Library',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Formula a autoridade própria da Escritura e o testemunho do Espírito sem eliminar evidências históricas.',
    },
    {
      id: 'kenyon-our-bible',
      autor: 'Frederic G. Kenyon',
      ano: '1895',
      titulo: 'Our Bible and the Ancient Manuscripts',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/ourbibleancient00keny',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Introdução histórica clássica à transmissão manuscrita e às versões antigas; útil como testemunho historiográfico, embora anterior às descobertas de Qumran.',
    },
    {
      id: 'sefaria-tanakh',
      autor: 'Sefaria',
      titulo: 'Tanakh — texto hebraico e tradições judaicas de leitura',
      publicacao: 'Sefaria',
      url: 'https://www.sefaria.org/texts/Tanakh',
      idioma: 'he',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Acesso público ao texto hebraico e à organização judaica do cânon para consulta direta.',
    },
    {
      id: 'smith-historical-geography',
      autor: 'George Adam Smith',
      ano: '1894',
      titulo: 'The Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historicalgeogra00smit',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Clássico de geografia histórica usado com cautela para situar rotas, relevo e relação da terra com os acontecimentos bíblicos.',
    },
  ],
};
