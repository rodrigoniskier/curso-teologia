import type { Verbete } from '../../tipos';

export const desafiosMissionarios: Verbete = {
  id: 'th52-desafios-missionarios',
  disciplina: 'TH52',
  unidade: 1,
  titulo: 'Desafios Missionários Contemporâneos',
  subtitulo: 'O mapa missionário envelhece — por isso a igreja precisa aprender a atualizá-lo, não apenas decorá-lo',
  objetivo:
    'Ao final, você saberá explicar por que os grandes desafios missionários contemporâneos não cabem num ranking estático, acompanhará a mudança histórica de um mundo colonial para uma igreja global policêntrica, interpretará dados atuais sobre religião, urbanização, deslocamento, liberdade religiosa, diversidade linguística e conectividade digital sem confundi-los com estratégia pronta, e terá um roteiro para atualizar periodicamente a leitura do campo sem abandonar os critérios bíblicos permanentes da missão.',
  atualizadoEm: '2026-08-19',
  verMais: ['th51-historia-pratica-missoes', 'tp25-missoes-transculturais', 'tp60-estrategia-missionaria'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Um mapa missionário impresso há vinte anos ainda pode mostrar corretamente oceanos, fronteiras e capitais. Mesmo assim, pode orientar mal a igreja. A cidade para a qual milhares migraram pode ter se tornado maior que a região rural que antes concentrava o trabalho. Uma minoria religiosa pode ter crescido, diminuído ou mudado de distribuição. Uma língua antes dominante pode conviver agora com comunidades deslocadas. Um país aberto a determinado tipo de presença estrangeira pode ter alterado leis, vistos e vigilância. Uma população quase sem acesso à internet pode estar conectada por celulares — ou continuar desconectada apesar de existir cobertura.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A dificuldade de TH52 está no próprio título: “contemporâneo” é uma categoria que vence. Um verbete escrito em 2026 não deve fingir que seus números serão verdadeiros em 2036. A resposta editorial precisa ser diferente da usada em uma disciplina sobre Niceia ou Reforma. **Em vez de congelar o presente, precisamos ensinar o aluno a ler indicadores datados, verificar sua fonte e reconstruir o diagnóstico quando o contexto mudar.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso também protege a missão de uma tentação antiga: imaginar que possuir dados sobre um povo equivale a conhecer esse povo. Estatística mostra padrões agregados; não substitui amizade, língua, observação local nem parceria com igrejas que já vivem no contexto. O mapa pode dizer onde olhar. Não pode fazer o encontro por nós.',
    },

    { tipo: 'secao', titulo: 'O primeiro desafio contemporâneo é histórico: o centro do cristianismo já não coincide com o centro do antigo poder missionário' },
    {
      tipo: 'paragrafo',
      texto:
        'O grande movimento missionário protestante dos séculos XVIII e XIX nasceu, em larga medida, em sociedades europeias e norte-americanas que também concentravam navegação, capital, educação formal e poder imperial. Essa sobreposição tornou possíveis viagens e instituições e, ao mesmo tempo, criou ambiguidades profundas. O evangelho atravessou fronteiras por meio de pessoas sinceramente devotas enquanto hábitos culturais, hierarquias raciais e interesses coloniais às vezes viajavam no mesmo navio.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O século XX desmontou progressivamente esse arranjo. Impérios europeus se dissolveram, estados independentes surgiram na África e na Ásia, igrejas locais amadureceram, seminários e denominações nacionais cresceram e movimentos cristãos passaram a enviar missionários a partir de regiões que antes apareciam apenas como “campo”. O eixo “Ocidente envia / restante recebe” tornou-se historicamente inadequado mesmo onde ainda persiste como imaginação institucional.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse deslocamento muda a pergunta. Missão contemporânea não é apenas “como chegaremos até eles?”, mas também “com quem já devemos caminhar?”, “quem tem competência que nós não temos?” e “que estruturas internacionais transformam parceria em dependência sem perceber?”. O desafio pós-colonial não é resolver culpa histórica com paralisia; é recusar que dinheiro, passaporte ou formação estrangeira sejam confundidos com maturidade e autoridade espiritual.',
    },
    {
      tipo: 'definicao',
      termo: 'Missão policêntrica',
      texto:
        'Condição histórica em que o envio cristão parte de múltiplas regiões e tradições e se dirige em múltiplas direções, sem um único centro geográfico controlando a expansão. A expressão descreve uma realidade e um ideal de parceria: igrejas na África, Ásia, América Latina, Europa, América do Norte e outros contextos podem simultaneamente enviar, receber, ensinar, aprender e cooperar.',
    },

    { tipo: 'secao', titulo: 'O mapa religioso muda por demografia, migração e troca de identidade' },
    {
      tipo: 'paragrafo',
      texto:
        'O relatório global mais recente do Pew Research Center sobre mudança religiosa, publicado em 2025, reconstrói o período 2010–2020 a partir de mais de 2.700 censos e levantamentos em 201 países e territórios. Em 2020, cristãos continuavam sendo o maior grupo religioso global, com cerca de 2,3 bilhões de pessoas, mas sua participação relativa havia caído para 28,8%. Muçulmanos cresceram mais rapidamente no período, e pessoas sem afiliação religiosa chegaram a aproximadamente 24,2% da população mundial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O valor missiológico desses números não é produzir uma competição demográfica. Eles mostram que “religião predominante” é variável regional e histórica. Crescimento pode vir de fecundidade, estrutura etária, migração ou mudança de identidade religiosa; queda proporcional não significa necessariamente que menos pessoas frequentem igrejas numa região específica. Estratégia que lê apenas percentuais globais pode concluir exatamente o contrário do que acontece numa cidade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há ainda um segundo problema: categorias amplas escondem diferenças internas. “Cristão” reúne tradições com crenças e práticas muito diferentes; “sem religião” não significa automaticamente ateísmo; “muçulmano”, “hindu” ou “budista” também não descrevem populações uniformes. A estatística é ponto de partida para perguntas, não substituto de etnografia religiosa.',
    },
    {
      tipo: 'termo',
      termo: 'Dado religioso datado',
      texto:
        'Estimativa de composição ou mudança religiosa que precisa ser citada com ano de referência, método e unidade geográfica. Em missão, deve ser tratada como fotografia estatística de um período, nunca como essência permanente de um povo. Sempre que um número orientar decisão concreta, ele deve ser atualizado na fonte original.',
    },

    { tipo: 'secao', titulo: 'A missão encontra pessoas em movimento, não apenas povos fixos no mapa' },
    {
      tipo: 'paragrafo',
      texto:
        'No fim de 2025, o UNHCR estimou 117,8 milhões de pessoas em deslocamento forçado por perseguição, conflito, violência, violações de direitos ou grave desordem pública. O número havia caído em relação ao fim de 2024, mas continuava próximo de uma escala histórica extraordinária. A categoria reúne refugiados, pessoas deslocadas internamente e outras situações com histórias, direitos e necessidades distintas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para a igreja, isso altera a geografia da missão. Uma língua ou religião associada a um país pode aparecer em bairros de outra nação; comunidades que antes exigiam travessia internacional podem estar a poucas estações de metrô; missionários enviados para um campo podem encontrar a população que desejavam servir dispersa em vários países. Migração não elimina missão transcultural. Muitas vezes a traz para dentro da mesma cidade.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O cuidado pastoral, porém, exige uma correção ética. Refugiados não são “atalhos estratégicos” para alcançar povos difíceis. São pessoas que perderam casa, segurança e redes. A igreja pode acolher, aprender língua, servir e testemunhar; não deve transformar vulnerabilidade em oportunidade de marketing missionário. Hospitalidade cristã continua boa mesmo quando não produz um relatório impressionante.',
    },

    { tipo: 'secao', titulo: 'O século urbano muda escala, anonimato, mobilidade e formação de comunidade' },
    {
      tipo: 'paragrafo',
      texto:
        'A revisão de 2025 do World Urbanization Prospects da ONU estima que cidades abrigavam 45% da população mundial de 8,2 bilhões naquele ano, mais que o dobro da proporção de 1950. A mesma revisão projeta que dois terços do crescimento populacional mundial até 2050 ocorrerão em cidades, com grande parte do restante concentrada em vilas e outros assentamentos urbanos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '“Urbano”, contudo, não é sinônimo de “megacidade”. A revisão de 2025 mudou a metodologia internacional, incorporando um grau de urbanização espacialmente harmonizado e ampliando a análise para milhares de assentamentos menores. A própria mudança metodológica oferece uma lição para missiologia: categorias geográficas são construídas para responder perguntas e podem ser redefinidas quando dados melhores aparecem.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Em cidades, proximidade física pode coexistir com distância social. Pessoas moram no mesmo quarteirão e pertencem a redes linguísticas, profissionais, religiosas e digitais diferentes. A igreja não pode assumir que plantar um prédio num bairro significa entrar automaticamente nas redes que compõem o bairro. Missão urbana exige mapear fluxos: onde pessoas trabalham, estudam, compram, transitam, formam amizade e encontram identidade.',
    },

    { tipo: 'secao', titulo: 'O sistema político define oportunidades, riscos e limites — mas não deve ser resumido por um índice único' },
    {
      tipo: 'paragrafo',
      texto:
        'Alguns estados protegem ampla liberdade de religião; outros registram, limitam ou proíbem determinadas atividades; em outros lugares a lei formal é mais liberal que a prática local, ou o contrário. A USCIRF, comissão federal independente dos Estados Unidos, publica anualmente um relatório sobre condições de liberdade religiosa e, em 2026, avaliou o ano civil de 2025, recomendando países para categorias de preocupação e observação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esse tipo de relatório é útil e insuficiente. É útil porque reúne legislação, prisões, violência e restrições documentadas. É insuficiente porque reflete uma missão institucional e uma perspectiva de política externa específica. Uma estratégia responsável compara fontes: legislação oficial do país, relatos de igrejas locais, organismos internacionais, especialistas regionais e experiências recentes de organizações que realmente atuam no contexto.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A pergunta missionária não é apenas “o país é fechado?”. Fechado para quê, para quem e sob qual categoria jurídica? Pode haver restrição a visto religioso e abertura para trabalho profissional; liberdade de culto privado e limitação de proselitismo; segurança numa região e conflito em outra. Rótulos binários economizam pensamento exatamente onde prudência exige detalhes.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A ética cristã também importa aqui. Missão não recebe licença para colocar parceiros locais em risco que estrangeiros não assumiriam para si. Segurança nunca será perfeita, e coragem pode exigir custo; mas decisões sobre comunicação, nomes, fotografias, dados e encontros devem considerar quem continuará no país depois que o visitante puder embarcar de volta.',
    },

    { tipo: 'secao', titulo: 'A diversidade linguística permanece muito maior que o conjunto de línguas globais mais visíveis' },
    {
      tipo: 'paragrafo',
      texto:
        'Glottolog 5.3 registrava, em março de 2026, 7.674 línguas faladas como primeira língua, além de línguas de sinais e outras categorias. O próprio banco adverte que classificação muda conforme novas descrições e pesquisas aparecem. Esse cuidado é importante: até a pergunta “quantas línguas existem?” depende de critérios para distinguir língua, dialeto, variedade e caso ainda insuficientemente documentado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Para a missão, a consequência não é que cada língua precise automaticamente de uma organização estrangeira separada. Algumas comunidades são multilíngues; outras usam uma língua em casa e outra para educação ou comércio; traduções podem circular entre variedades próximas ou fracassar apesar de inteligibilidade formal porque pertencem a outro grupo social. **Língua é também pertencimento, história e relação.**',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A disciplina de linguística aplicada ajuda a perguntar como a comunicação funciona; a missiologia precisa acrescentar quem decide prioridades, quem traduz, quem revisa e quem continuará ensinando. A meta não é completar uma tabela global de idiomas, mas tornar a Palavra compreensível e a igreja capaz de confessá-la na língua em que pessoas realmente vivem sua fé.',
    },

    { tipo: 'secao', titulo: 'A revolução digital conectou bilhões — e deixou bilhões em condições muito diferentes de acesso' },
    {
      tipo: 'paragrafo',
      texto:
        'Dados reunidos pelo Banco Mundial em 2026 mostram que a conectividade global ultrapassou 70% depois de duas décadas de expansão, mas aproximadamente 2,2 bilhões de pessoas ainda permaneciam offline. O acesso também é desigual: qualidade, custo, eletricidade, dispositivo, alfabetização digital, gênero, renda e localização rural alteram o que “ter internet” realmente significa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Isso corrige tanto entusiasmo quanto desprezo. Conteúdo digital pode atravessar fronteiras, apoiar diásporas, oferecer formação a líderes isolados e conectar igrejas. Ao mesmo tempo, publicar um vídeo numa plataforma mundial não significa alcançar igualmente o mundo. Algoritmo, idioma, bloqueio estatal, preço de dados, confiança e repertório cultural continuam filtrando audiência.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Missão digital também levanta questões eclesiológicas. Uma pessoa pode ouvir o evangelho sozinha no celular; discipulado, sacramentos, disciplina, mutualidade e cuidado não se transformam automaticamente em funções de plataforma. Tecnologia pode reduzir distância de informação sem abolir a necessidade de igreja encarnada em relações, lugares e responsabilidades concretas.',
    },

    { tipo: 'secao', titulo: 'Seis desafios atuais não são seis estratégias prontas' },
    {
      tipo: 'lista',
      itens: [
        '**Pluralização religiosa:** exige conhecer crenças e práticas reais do contexto, não apenas a religião majoritária declarada no censo.',
        '**Migração e deslocamento:** aproximam povos e criam vulnerabilidades; pedem hospitalidade, proteção e cooperação entre igrejas de origem e destino.',
        '**Urbanização:** concentra população, mas também fragmenta redes; pede leitura de fluxos sociais e não apenas de bairros no mapa.',
        '**Restrição política e religiosa:** exige atualização jurídica, segurança e escuta de parceiros locais em vez de heroísmo estrangeiro.',
        '**Diversidade linguística:** torna aquisição de língua, tradução e formação local infraestrutura de longo prazo, não etapa opcional.',
        '**Desigualdade digital:** cria novas portas e novos excluídos; pede estratégia híbrida capaz de usar tecnologia sem confundir audiência com comunidade.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Nenhum item diz automaticamente onde uma igreja deve enviar pessoas. Um país pode combinar forte crescimento cristão, severa restrição política, dezenas de línguas e rápida urbanização. Outro pode ser juridicamente aberto, digitalmente conectado e missionariamente negligenciado por secularização e individualismo. Desafio é propriedade do contexto; estratégia é decisão eclesial tomada depois de interpretar o contexto.',
    },

    { tipo: 'secao', titulo: 'Há uma disputa sobre o que conta como prioridade missionária' },
    {
      tipo: 'controversia',
      titulo: 'Como priorizar campos num mundo complexo',
      posicoes: [
        {
          escola: 'Prioridade por ausência de acesso ao evangelho',
          sintese:
            'Concentra recursos onde há menor presença cristã, menos igrejas ou menor acesso às Escrituras e ao testemunho cristão. Sua força é impedir que facilidade e afinidade cultural absorvam toda a energia missionária. Seu risco é transformar pessoas em percentuais, usar categorias contestáveis como se fossem fatos absolutos e subestimar igrejas locais pequenas que já existem.',
        },
        {
          escola: 'Prioridade por crise humana e oportunidade de serviço',
          sintese:
            'Responde a deslocamento, pobreza, catástrofe, migração e necessidades sociais concretas como portas para presença cristã. Sua força é unir testemunho e misericórdia. Seu risco é permitir que urgência humanitária substitua o propósito propriamente missionário de fazer discípulos e estabelecer igrejas.',
        },
        {
          escola: 'Prioridade eclesial contextual',
          sintese:
            'Usa dados de acesso, sofrimento, oportunidade, parceria e competência como informação para discernimento de igrejas que enviam e recebem. É a posição deste verbete. Não existe fórmula universal que substitua oração, chamado, dons, capacidade institucional e escuta de igrejas locais; porém decisões precisam ser justificáveis diante de evidências, e não apenas de preferência pessoal.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'Uma disciplina contemporânea precisa ensinar seu próprio prazo de validade' },
    {
      tipo: 'paragrafo',
      texto:
        'Os números usados neste verbete são deliberadamente acompanhados de data: Pew, 2020 como ano de referência; UN DESA, 2025; UNHCR, fim de 2025; USCIRF, condições de 2025 publicadas em 2026; Glottolog, março de 2026; Banco Mundial, síntese de 2026. Essa precisão não é detalhe bibliográfico. É parte da interpretação.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Defina a decisão.** Você precisa escolher um país, uma cidade, uma língua, um parceiro ou uma modalidade de presença? Colete dados para a decisão real.',
        '**Use fonte primária atual.** Censo, organismo internacional, legislação, base linguística ou relatório institucional deve ser preferido a infográfico sem metodologia.',
        '**Registre data e definição.** “Urbano”, “cristão”, “refugiado”, “língua” e “acesso à internet” têm critérios; um número sem definição parece mais preciso do que é.',
        '**Compare escalas.** Dado nacional pode esconder uma minoria regional; dado urbano pode esconder redes transnacionais; média global quase nunca decide estratégia local.',
        '**Converse com quem vive ali.** Se o retrato estatístico contradiz parceiros locais confiáveis, investigue antes de escolher qual lado “está errado”. Eles podem estar descrevendo escalas diferentes.',
        '**Defina revisão.** Dados que afetam segurança, legalidade, população ou acesso tecnológico precisam de data de rechecagem no próprio plano missionário.',
      ],
    },
    {
      tipo: 'definicao',
      termo: 'Desafio missionário contemporâneo',
      texto:
        'Condição histórica atual que afeta a possibilidade, forma, risco ou prioridade do testemunho, discipulamento e estabelecimento de igrejas — por exemplo mudanças religiosas, políticas, demográficas, geográficas, linguísticas, tecnológicas ou migratórias. Diferentemente dos mandatos bíblicos permanentes, desafios contemporâneos são variáveis e precisam ser diagnosticados com dados datados, conhecimento local e revisão periódica.',
    },
    {
      tipo: 'pastoral',
      texto:
        'Uma igreja pode se sentir segura porque possui um grande mapa com alfinetes, percentuais e fotos de povos distantes. O perigo é o mapa se tornar uma forma de manter o mundo a uma distância confortável. Dados melhores devem fazer o contrário: revelar pessoas que se movem, cidades que crescem, línguas que desaparecem, igrejas locais que amadurecem, governos que mudam e vizinhos que chegaram ontem. A Grande Comissão não envelhece; **o endereço em que obedecemos a ela muda o tempo todo**. Por isso fidelidade missionária inclui a humildade de abrir novamente a planilha, ouvir novamente os irmãos do campo e admitir que a estratégia que fazia sentido cinco anos atrás talvez precise morrer para que a missão continue viva.',
    },
  ],
  fontes: [
    {
      id: 'carey-enquiry',
      autor: 'William Carey',
      ano: '1792',
      titulo: 'An Enquiry into the Obligations of Christians to Use Means for the Conversion of the Heathens',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/pts_enquiryintotheobligations_1687_2',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte histórica para comparar a geografia missionária do fim do século XVIII com o mundo policêntrico contemporâneo; também mostra que levantamento do campo sempre fez parte do uso responsável de meios.',
    },
    {
      id: 'pew-religious-landscape-2025',
      autor: 'Pew Research Center',
      ano: '2025',
      titulo: 'How the Global Religious Landscape Changed From 2010 to 2020',
      publicacao: 'Pew Research Center',
      url: 'https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/',
      idioma: 'en',
      tipo: 'artigo',
      acesso: 'livre',
      nota: 'Levantamento global baseado em censos e pesquisas, usado para exemplificar mudança de composição religiosa e a necessidade de citar ano, definição e método.',
    },
    {
      id: 'unhcr-global-trends-2025',
      autor: 'UNHCR',
      ano: '2026',
      titulo: 'Global Trends 2025',
      publicacao: 'United Nations High Commissioner for Refugees',
      url: 'https://www.unhcr.org/media/global-trends-2025-report',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Relatório oficial mais recente sobre deslocamento forçado global, usado para discutir migração, diásporas e ética da hospitalidade missionária.',
    },
    {
      id: 'undesa-urbanization-2025',
      autor: 'United Nations Department of Economic and Social Affairs',
      ano: '2025',
      titulo: 'World Urbanization Prospects 2025',
      publicacao: 'United Nations Population Division',
      url: 'https://www.un.org/development/desa/pd/world-urbanization-prospects-2025',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Estimativas e metodologia oficiais sobre distribuição urbana e rural, usadas para mostrar urbanização e também como mudanças metodológicas alteram a leitura do mapa.',
    },
    {
      id: 'uscirf-2026',
      autor: 'U.S. Commission on International Religious Freedom',
      ano: '2026',
      titulo: '2026 Recommendations and Annual Report',
      publicacao: 'USCIRF',
      url: 'https://www.uscirf.gov/countries/2026-recommendations',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte pública para condições de liberdade religiosa em 2025. É usada como uma perspectiva institucional que deve ser cotejada com legislação local e fontes regionais.',
    },
    {
      id: 'glottolog-5-3',
      autor: 'Harald Hammarström, Robert Forkel, Martin Haspelmath e Sebastian Bank (eds.)',
      ano: '2026',
      titulo: 'Glottolog 5.3 — About Languoids',
      publicacao: 'Max Planck Institute / Glottolog',
      url: 'https://glottolog.org/glottolog/glottologinformation',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base linguística acadêmica aberta, usada para dimensionar diversidade linguística e explicitar que a classificação de línguas muda conforme a pesquisa avança.',
    },
    {
      id: 'worldbank-internet-2026',
      autor: 'World Bank',
      ano: '2026',
      titulo: 'The Unfinished Digital Revolution: Expanding Internet Access',
      publicacao: 'Atlas of Global Development',
      url: 'https://data360.worldbank.org/en/atlas/internet-access/',
      idioma: 'en',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Síntese atual de conectividade e desigualdade digital, usada para avaliar oportunidades e limites da missão mediada por plataformas.',
    },
  ],
};
