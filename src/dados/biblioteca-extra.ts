import type { ObraLivre } from './biblioteca';

/**
 * Entradas recuperadas pela auditoria de integridade de 19/08/2026 e novas
 * fontes abertas incorporadas após a consolidação inicial do acervo.
 *
 * Ficam separadas do arquivo histórico apenas para que as correções sejam
 * pequenas e auditáveis. `biblioteca-completa.ts` é a fonte consumida pela
 * interface e pelos validadores.
 */
export const bibliotecaExtra: ObraLivre[] = [
  {
    id: 'sep-faith', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Faith', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/faith/', idioma: 'en', acesso: 'livre', disciplinas: ['CG08'], nota: 'Verbete acadêmico revisado por especialistas sobre os conceitos de fé e sua relação com razão, evidência e conhecimento.', base: 'edição autorizada',
  },
  {
    id: 'sep-filosofia-religiao', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Philosophy of Religion', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/philosophy-religion/', idioma: 'en', acesso: 'livre', disciplinas: ['CG08'], nota: 'Panorama acadêmico aberto dos principais problemas da filosofia da religião e das relações entre fé, razão e linguagem religiosa.', base: 'edição autorizada',
  },
  {
    id: 'sep-enlightenment', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Enlightenment', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/enlightenment/', idioma: 'en', acesso: 'livre', disciplinas: ['CG65'], nota: 'Síntese acadêmica aberta do Iluminismo, útil para situar a mudança epistemológica que molda a filosofia moderna.', base: 'edição autorizada',
  },
  {
    id: 'sep-hume', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'David Hume', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/hume/', idioma: 'en', acesso: 'livre', disciplinas: ['CG65'], nota: 'Verbete acadêmico aberto sobre Hume, incluindo causalidade, conhecimento e crítica da religião.', base: 'edição autorizada',
  },
  {
    id: 'sep-kant', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Immanuel Kant', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/kant/', idioma: 'en', acesso: 'livre', disciplinas: ['CG65'], nota: 'Introdução acadêmica aberta ao projeto crítico de Kant, à epistemologia e aos limites impostos à metafísica.', base: 'edição autorizada',
  },
  {
    id: 'sep-nietzsche', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Friedrich Nietzsche', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/nietzsche/', idioma: 'en', acesso: 'livre', disciplinas: ['CG65'], nota: 'Verbete acadêmico aberto sobre a crítica nietzschiana da moral, da religião e das pretensões de verdade.', base: 'edição autorizada',
  },
  {
    id: 'sep-plato', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Plato', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/plato/', idioma: 'en', acesso: 'livre', disciplinas: ['CG09'], nota: 'Introdução acadêmica aberta à filosofia de Platão e a seus principais problemas metafísicos, epistemológicos e éticos.', base: 'edição autorizada',
  },
  {
    id: 'sep-aquinas', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Thomas Aquinas', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aquinas/', idioma: 'en', acesso: 'livre', disciplinas: ['CG09'], nota: 'Verbete acadêmico aberto sobre Tomás de Aquino, incluindo metafísica, conhecimento e a relação entre filosofia e teologia.', base: 'edição autorizada',
  },
  {
    id: 'sep-fallacies', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Fallacies', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/fallacies/', idioma: 'en', acesso: 'livre', disciplinas: ['CG58'], nota: 'Tratamento acadêmico aberto da história e classificação das falácias, com atenção às dificuldades de defini-las apenas por listas de erros.', base: 'edição autorizada',
  },
  {
    id: 'sep-aristotle-logic', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: "Aristotle's Logic", publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aristotle-logic/', idioma: 'en', acesso: 'livre', disciplinas: ['CG58'], nota: 'Introdução acadêmica aberta à lógica aristotélica, ao silogismo e à tradição formal que dele se desenvolveu.', base: 'edição autorizada',
  },
  {
    id: 'sep-weber', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Max Weber', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/weber/', idioma: 'en', acesso: 'livre', disciplinas: ['CG10'], nota: 'Verbete acadêmico aberto sobre Weber, racionalização, ação social, religião e modernidade.', base: 'edição autorizada',
  },
  {
    id: 'schaff-hcc2-pdf', autor: 'Philip Schaff', ano: '1885', titulo: 'History of the Christian Church, vol. II — PDF integral', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/s/schaff/hcc2/cache/hcc2.pdf', idioma: 'en', acesso: 'livre', disciplinas: ['TH01'], nota: 'O segundo volume de Schaff em arquivo único, útil para leitura offline e citação; a mesma obra também está disponível em HTML.', base: 'domínio público',
  },
  {
    id: 'pm4ngos-project-dpro', autor: 'PM4NGOs', ano: '2020', titulo: 'Guia Project DPro — PMD Pro, 2ª edição', publicacao: 'PM4NGOs', url: 'https://pm4ngos.org/pt-br/metodologias-e-guias/project-dpro-pmd-pro/', idioma: 'pt', acesso: 'livre', disciplinas: ['CG53', 'TP60'], nota: 'Guia gratuito em português para gerenciamento de projetos no setor de desenvolvimento, com ferramentas de desenho, planejamento, execução, monitoramento, encerramento e sustentabilidade. A própria PM4NGOs o distribui sob licença Creative Commons BY-NC 4.0.', base: 'edição autorizada',
  },
  {
    id: 'anderson-linguistics2', autor: 'Catherine Anderson et al.', ano: '2022', titulo: 'Essentials of Linguistics, 2nd edition', publicacao: 'eCampusOntario / McMaster University', url: 'https://openlibrary-repo.ecampusontario.ca/jspui/handle/123456789/1489', idioma: 'en', acesso: 'livre', disciplinas: ['CG66', 'CG67'], nota: 'Livro-texto aberto de introdução à linguística com fonética, fonologia, morfologia, sintaxe, semântica, variação e metodologia. Distribuído sob licença Creative Commons BY-NC-SA 4.0.', base: 'edição autorizada',
  },
  {
    id: 'sapir-language', autor: 'Edward Sapir', ano: '1921', titulo: 'Language: An Introduction to the Study of Speech', publicacao: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/12629', idioma: 'en', acesso: 'livre', disciplinas: ['CG66', 'CG67', 'CG11'], nota: 'Clássico em domínio público sobre linguagem como fenômeno social e cultural, sua variabilidade e suas relações com pensamento, cultura e arte. Útil historicamente ao lado de uma introdução linguística contemporânea.', base: 'domínio público',
  },
  {
    id: 'state-language-methods', autor: 'Diane Larsen-Freeman', ano: '1990', titulo: 'Language Teaching Methods', publicacao: 'U.S. Department of State — American English', url: 'https://americanenglish.state.gov/resources/language-teaching-methods', idioma: 'en', acesso: 'livre', disciplinas: ['CG66'], nota: 'Série de formação docente disponibilizada pelo Departamento de Estado dos EUA, com guia e demonstrações de seis métodos de ensino de línguas, incluindo audiolingual, abordagem de compreensão e abordagem comunicativa.', base: 'edição autorizada',
  },
  {
    id: 'pew-religious-landscape-2025', autor: 'Pew Research Center', ano: '2025', titulo: 'How the Global Religious Landscape Changed From 2010 to 2020', publicacao: 'Pew Research Center', url: 'https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/', idioma: 'en', acesso: 'livre', disciplinas: ['TH52'], nota: 'Relatório global construído a partir de censos e pesquisas em 201 países e territórios, útil para composição religiosa, mudança de afiliação e leitura crítica de tendências demográficas. Os dados têm ano de referência e devem ser atualizados quando nova rodada for publicada.', base: 'edição autorizada',
  },
  {
    id: 'unhcr-global-trends-2025', autor: 'UNHCR', ano: '2026', titulo: 'Figures at a glance — Global Trends 2025', publicacao: 'United Nations High Commissioner for Refugees', url: 'https://www.unhcr.org/about-unhcr/overview/figures-glance', idioma: 'en', acesso: 'livre', disciplinas: ['TH52'], nota: 'Página oficial com os números de deslocamento forçado no fim de 2025 e indicação explícita do Global Trends 2025 como fonte; usada para avaliar diásporas, migração e mudança da geografia missionária.', base: 'edição autorizada',
  },
  {
    id: 'undesa-urbanization-2025', autor: 'United Nations Department of Economic and Social Affairs', ano: '2025', titulo: 'World Urbanization Prospects 2025', publicacao: 'United Nations Population Division', url: 'https://www.un.org/development/desa/pd/world-urbanization-prospects-2025', idioma: 'en', acesso: 'livre', disciplinas: ['TH52'], nota: 'Fonte oficial da ONU para estimativas e metodologia de urbanização, útil tanto pelos dados quanto pela explicitação de como definições de cidade e assentamento afetam a leitura do campo.', base: 'edição autorizada',
  },
  {
    id: 'uscirf-2026', autor: 'U.S. Commission on International Religious Freedom', ano: '2026', titulo: '2026 Recommendations and Annual Report', publicacao: 'USCIRF', url: 'https://www.uscirf.gov/countries/2026-recommendations', idioma: 'en', acesso: 'livre', disciplinas: ['TH52'], nota: 'Relatório público sobre condições de liberdade religiosa em 2025. É uma fonte institucional de política pública e deve ser cotejada com legislação local, organismos multilaterais e testemunho de parceiros do contexto.', base: 'edição autorizada',
  },
  {
    id: 'glottolog-5-3', autor: 'Harald Hammarström, Robert Forkel, Martin Haspelmath e Sebastian Bank (eds.)', ano: '2026', titulo: 'Glottolog 5.3 — About Languoids', publicacao: 'Max Planck Institute / Glottolog', url: 'https://glottolog.org/glottolog/glottologinformation', idioma: 'en', acesso: 'livre', disciplinas: ['TH52', 'CG66', 'CG67'], nota: 'Base acadêmica aberta sobre línguas e famílias linguísticas, com versão e data explícitas. Serve para dimensionar diversidade linguística sem fingir que a classificação língua/dialeto é imutável.', base: 'edição autorizada',
  },
  {
    id: 'worldbank-internet-2026', autor: 'World Bank', ano: '2026', titulo: 'The Unfinished Digital Revolution: Expanding Internet Access', publicacao: 'Atlas of Global Development', url: 'https://data360.worldbank.org/en/atlas/internet-access/', idioma: 'en', acesso: 'livre', disciplinas: ['TH52'], nota: 'Síntese contemporânea do Banco Mundial sobre expansão e desigualdade de conectividade, usada para avaliar possibilidades e limites da presença missionária mediada por plataformas.', base: 'edição autorizada',
  },
  {
    id: 'cal-aramaic-daniel7', autor: 'Comprehensive Aramaic Lexicon Project', ano: '2026', titulo: 'Comprehensive Aramaic Lexicon — Biblical Aramaic, Daniel 7', publicacao: 'Hebrew Union College', url: 'https://cal.huc.edu/showachapter.php?fullcoord=32000728', idioma: 'en', acesso: 'livre', disciplinas: ['TE53'], nota: 'Texto aramaico de Daniel 7 tokenizado e ligado às ferramentas lexicais do CAL. O projeto do Hebrew Union College reúne milhões de formas aramaicas historicamente analisáveis e declara explicitamente que a base continua em desenvolvimento; citações acadêmicas devem registrar a data de consulta.', base: 'edição autorizada',
  },
  {
    id: 'calvino-daniel2', autor: 'João Calvino', ano: '1561', titulo: 'Commentary on Daniel — Volume 2', publicacao: 'Christian Classics Ethereal Library', url: 'https://ccel.org/ccel/calvin/calcom25/calcom25.toc.html', idioma: 'en', acesso: 'livre', disciplinas: ['TE53', 'TE54', 'TE55'], nota: 'Comentário reformado clássico em domínio público. A exposição de Daniel 7.13–14 interpreta a figura humana cristologicamente e sua aproximação ao Ancião de Dias em chave de exaltação e governo, oferecendo um contraponto histórico reformado à leitura moderna.', base: 'domínio público',
  },
];
