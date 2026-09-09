import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u4-canaa-assiria-babilonia-qumran',
  disciplina: 'TE03',
  unidade: 4,
  titulo: 'Arqueologia 3',
  objetivo: 'Interpretar criticamente evidências arqueológicas de Canaã, Assíria, Babilônia e Qumran, reconhecendo o valor de camadas de destruição, inscrições imperiais e manuscritos sem transformar evidência parcial em conclusão total.',
  topicosCobertos: [
    'Arqueologia em Canaã',
    'Arqueologia na Assíria e Babilônia',
    'Qumran',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Canaã: uma camada de destruição não vem com legenda',
      paragrafos: [
        'Jericó, Hazor, Laquis, Megido e muitos outros sítios cananeus preservam sequências de ocupação, destruição e reconstrução. O primeiro cuidado é não transformar uma camada de incêndio em identificação automática com um episódio bíblico. Uma mesma cidade pode ter sido destruída diversas vezes, e a ligação entre estrato e texto depende de cronologia, identificação do sítio, conjunto cerâmico e contexto regional.',
        'Jericó tornou-se um caso clássico porque escavadores competentes propuseram leituras cronológicas diferentes para as mesmas ruínas. O ponto pedagógico não é escolher uma manchete apologética e ignorar as demais, mas compreender como uma hipótese arqueológica é construída e revisada. Quando a datação de uma camada muda, a evidência física permanece; o que muda é sua interpretação histórica.',
        'Esse princípio protege o estudante de dois extremos: dizer que cada ruína confirma diretamente uma narrativa, ou tratar qualquer debate arqueológico como refutação da história bíblica. A arqueologia trabalha com amostras, probabilidades e contextos incompletos.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Assíria e Babilônia: impérios produzem memória oficial',
      paragrafos: [
        'No primeiro milênio a.C., a documentação imperial torna-se especialmente rica. Anais, prismas, relevos, cartas e crônicas permitem comparar acontecimentos de Reis, Crônicas, Isaías, Jeremias e outros textos com fontes produzidas por potências vizinhas. Essa independência é preciosa, mas não elimina a necessidade de crítica.',
        'Senaqueribe descreve sua campanha em Judá, enumera cidades conquistadas, registra tributo e afirma ter encerrado Ezequias em Jerusalém “como um pássaro numa gaiola”. O que o rei não afirma também importa: ele não diz ter capturado Jerusalém. Como anais reais assírios existem para celebrar vitória, a ausência dessa alegação precisa ser considerada na comparação com 2 Reis 18—19 e Isaías 36—37.',
        'Fontes babilônicas exigem o mesmo cuidado. Crônicas e documentos administrativos podem oferecer datas, nomes e acontecimentos externos ao texto bíblico; ainda assim, cada documento possui propósito, lacunas e convenções. Corroboração histórica não significa que duas fontes devam narrar o mesmo evento com a mesma teologia ou ênfase.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'O prisma de Senaqueribe',
      enunciado: 'O rei assírio afirma ter conquistado cidades fortificadas de Judá e confinado Ezequias em Jerusalém, mas não reivindica a tomada da capital.',
      explicacao: 'A leitura responsável reconhece convergências e diferenças entre o registro assírio e o bíblico. O prisma confirma a campanha e a pressão sobre Judá; o silêncio sobre a captura de Jerusalém é historicamente relevante porque o gênero normalmente maximiza sucessos. Isso é uma inferência de crítica de fonte, não uma “prova automática” de cada detalhe de 2 Reis.'
    },
    {
      tipo: 'texto',
      titulo: '3. Qumran: sítio arqueológico e biblioteca manuscrita',
      paragrafos: [
        'A partir de 1947, manuscritos encontrados em cavernas do deserto da Judeia abriram uma janela sem paralelo para o judaísmo do Segundo Templo e para a transmissão textual das Escrituras hebraicas. Entre os materiais estão manuscritos bíblicos, comentários, regras comunitárias, textos litúrgicos e outras obras judaicas em hebraico, aramaico e grego.',
        'Os manuscritos são importantes para a crítica textual porque preservam testemunhos muito anteriores aos códices hebraicos medievais completos. Eles mostram ao mesmo tempo estabilidade significativa e existência de variantes textuais antigas. O resultado não é a descoberta de uma Bíblia completamente diferente, nem a demonstração de uniformidade absoluta, mas uma história de transmissão que precisa ser estudada manuscrito por manuscrito.',
        'Também é essencial distinguir cavernas, manuscritos e assentamento de Qumran. A proximidade física é uma evidência a ser explicada, não uma identidade automática entre todo texto encontrado e todos os moradores do sítio. A associação com uma comunidade sectária é importante na pesquisa, mas detalhes sobre autoria, depósito e circulação de determinados rolos continuam dependentes de argumentos específicos.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'O que Qumran permite afirmar com segurança',
      itens: [
        'Manuscritos bíblicos e não bíblicos do período do Segundo Templo foram preservados em cavernas do deserto da Judeia.',
        'O acervo amplia enormemente a base documental para estudar judaísmo, línguas e transmissão textual antes do período medieval.',
        'A existência de variantes mostra que crítica textual é parte da história real da transmissão, não uma invenção moderna.',
        'A relação entre cada manuscrito, cada caverna e o assentamento precisa ser demonstrada, não presumida.',
        'A autoridade da Escritura não depende de Qumran; o acervo ajuda a compreender a história material de sua transmissão.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u4-a1',
      titulo: 'Atividade — comparar três tipos de evidência',
      enunciado: 'Considere: (a) uma camada de destruição em uma cidade cananeia; (b) um prisma real assírio; (c) um manuscrito bíblico de Qumran. Para cada caso, indique qual pergunta ele pode responder bem e qual conclusão excederia seu alcance.',
      itens: [
        'Identifique o gênero ou tipo de evidência de cada caso.',
        'Formule uma pergunta historicamente adequada para cada evidência.',
        'Dê um exemplo de exagero apologético ou cético que deve ser evitado.'
      ],
      resposta: 'A camada pode ajudar a datar destruição e ocupação, mas não identifica sozinha o agente ou episódio. O prisma pode informar campanha, cidades, tributos e autopercepção imperial, mas não é relato neutro. O manuscrito de Qumran testemunha uma forma textual e um contexto de transmissão, mas não representa automaticamente todo o judaísmo nem resolve sozinho a história do cânon. Em todos os casos, a conclusão precisa respeitar proveniência, gênero e alcance da evidência.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Em Canaã, camadas arqueológicas precisam ser datadas e identificadas antes de serem relacionadas a narrativas.',
        'Inscrições assírias e babilônicas são fontes independentes valiosas, porém produzidas com interesses próprios.',
        'O prisma de Senaqueribe ilustra como presença, ausência e gênero documental participam da análise histórica.',
        'Qumran transformou o estudo do judaísmo do Segundo Templo e da transmissão do texto bíblico.',
        'A boa apologética não pede à arqueologia que diga mais do que a evidência permite.'
      ],
    },
  ],
  fontes: [
    {
      id: 'barton-arqueologia',
      autor: 'George A. Barton',
      ano: '1916',
      titulo: 'Archaeology and the Bible',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/archaeologybible00bartuoft',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Material histórico sobre sítios e documentação do antigo Oriente Próximo; útil para Canaã e para a história da interpretação arqueológica, com atualização crítica necessária.'
    },
    {
      id: 'luckenbill-assiria-2',
      autor: 'Daniel David Luckenbill',
      ano: '1927',
      titulo: 'Ancient Records of Assyria and Babylonia, vol. II',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/LuckenbillAncientRecordsAssyria02',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'Traduções de inscrições reais assírias, incluindo os registros da campanha de Senaqueribe contra Judá.'
    },
    {
      id: 'iaa-dead-sea-scrolls',
      autor: 'Israel Antiquities Authority',
      titulo: 'Leon Levy Dead Sea Scrolls Digital Library',
      publicacao: 'Israel Antiquities Authority',
      url: 'https://www.deadseascrolls.org.il/',
      idioma: 'en',
      tipo: 'acervo',
      acesso: 'livre',
      nota: 'Acervo digital oficial com imagens de fragmentos e documentação sobre descoberta, sítios, conteúdo, línguas e conservação dos Manuscritos do Mar Morto.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
