import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u12-confessionalismo-escolasticos-puritanos',
  disciplina: 'TE12',
  unidade: 12,
  titulo: 'A Hermenêutica no Período Pós-Reforma',
  objetivo: 'Situar o período confessional reformado, a escolástica protestante e a tradição puritana, reconhecendo sua busca de precisão doutrinária e seus princípios de interpretação subordinados à Escritura.',
  topicosCobertos: ['O período do Confessionalismo: Escolásticos e Puritanos'],
  blocos: [
    { tipo: 'texto', titulo: '1. Confessionalização não significou substituir a Bíblia pela confissão', paragrafos: [
      'Depois da Reforma, igrejas protestantes formularam confissões e catecismos para registrar publicamente aquilo que entendiam ser o ensino bíblico. Esses documentos ganharam função eclesiástica real, mas a própria tradição reformada os apresenta como padrões subordinados: sua autoridade depende de concordarem com a Escritura.',
      'A Confissão de Westminster é especialmente clara. Ela afirma que a Escritura interpreta a Escritura e que o juiz supremo das controvérsias religiosas é o Espírito Santo falando na Escritura. Assim, o período confessional não deve ser descrito corretamente como abandono do princípio reformador, ainda que na prática qualquer tradição possa cristalizar leituras e resistir à correção.'
    ]},
    { tipo: 'quadro', titulo: 'Escolástica reformada e puritanismo', itens: [
      'Escolástica descreve sobretudo uma forma de organizar questões, distinções, objeções e respostas; não é sinônimo automático de racionalismo.',
      'Autores reformados pós-Reforma buscaram definir termos e resolver aparentes contradições com precisão lógica e exegética.',
      'Puritanos combinaram exegese, doutrina e aplicação pastoral, frequentemente com forte atenção à estrutura do texto.',
      'Confissões funcionam como memória comunitária e regra eclesiástica subordinada.',
      'O risco permanente é deixar uma formulação recebida impedir que a Escritura corrija a tradição que a formulou.'
    ]},
    { tipo: 'texto', titulo: '2. Precisão doutrinária precisa permanecer exegética', paragrafos: [
      'Distinções técnicas são úteis quando esclarecem dados reais do texto. Tornam-se nocivas quando passam a existir como sistema autossuficiente que apenas procura versículos para ilustrar conclusões já fechadas. A boa escolástica reformada pretendeu fazer o contrário: ordenar questões para que as diferenças fossem examinadas com precisão.',
      'O legado puritano lembra que interpretação não termina na descrição. Sermão, catequese e cuidado pastoral exigem aplicação. Entretanto, aplicação legítima continua ligada ao sentido textual; intensidade espiritual não compensa uma inferência que a passagem não sustenta.'
    ]},
    { tipo: 'atividade', id: 'te12-u12-a1', titulo: 'Atividade — usar uma confissão de modo subordinado', enunciado: 'Escolha um parágrafo da Confissão de Westminster e descreva como ele pode ajudar a interpretar uma passagem sem funcionar como autoridade final sobre ela.', itens: ['Identifique a síntese doutrinária da confissão.', 'Localize os textos bíblicos relevantes.', 'Explique como a exegese pode confirmar, qualificar ou corrigir sua compreensão da formulação.'], resposta: 'A confissão fornece uma síntese histórica e eclesial que orienta perguntas e alerta para relações canônicas importantes. Contudo, a passagem bíblica deve ser analisada em seu próprio contexto, e a formulação confessional é recebida porque corresponde à Escritura, não porque possua autoridade independente dela.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Confissões são normas subordinadas.', 'Escolástica é método de precisão, não sinônimo necessário de racionalismo.', 'Puritanismo integra exegese, doutrina e aplicação.', 'Sistemas teológicos devem permanecer corrigíveis pela Escritura.', 'Aplicação pastoral depende de interpretação demonstrada.'] }
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte primária confessional para Escritura, interpretação e autoridade.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Ponto de continuidade entre Reforma e ortodoxia reformada posterior.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Panorama histórico da interpretação protestante e de seus princípios.' }
  ],
  atualizadoEm: '2026-09-10',
};
