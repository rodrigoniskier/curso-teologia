import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u3-metodos-igreja-primitiva',
  disciplina: 'TP09',
  unidade: 3,
  titulo: 'Métodos evangelísticos da Igreja Primitiva',
  objetivo: 'Identificar os principais padrões evangelísticos do Novo Testamento e traduzi-los em princípios de prática contemporânea sem transformar descrições históricas em técnicas rígidas.',
  topicosCobertos: [
    'Indo e fazendo discípulos',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O Novo Testamento mostra uma missão em movimento',
      paragrafos: [
        'A evangelização da igreja primitiva não ficou confinada a reuniões religiosas. Em Atos, o evangelho atravessa casas, sinagogas, praças, estradas, cidades portuárias, tribunais e redes familiares. O movimento é importante: os discípulos não aguardam que o mundo procure a igreja; eles vão, anunciam, conversam, explicam e formam comunidades.',
        'A Grande Comissão une dois verbos que não devem ser separados na prática: ir e fazer discípulos. O alvo não é apenas obter uma resposta inicial, mas introduzir pessoas numa vida de aprendizado, obediência, batismo, comunhão e missão. Evangelização e discipulado são distintos, mas formam um processo contínuo.',
        'Esse padrão impede dois reducionismos. O primeiro transforma evangelização em evento isolado. O segundo a dissolve numa convivência sem anúncio. A igreja apostólica combina presença, palavra, chamado e acompanhamento.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Padrões recorrentes em Atos',
      itens: [
        'Proclamação pública quando existe audiência reunida.',
        'Conversação e argumentação em ambientes de pergunta e debate.',
        'Uso de casas e redes de relacionamento para ensino e hospitalidade.',
        'Adaptação do ponto de partida ao repertório do ouvinte sem alterar o evangelho.',
        'Formação de comunidades locais que continuam ensinando e testemunhando.',
        'Envio de obreiros e cooperação entre igrejas em vez de ministério individual autossuficiente.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Contextualizar o ponto de entrada não é mudar a mensagem',
      paragrafos: [
        'Pedro falando a judeus parte das promessas, dos profetas e da identidade de Jesus como Messias. Paulo diante de gentios pode partir da criação, da providência, da idolatria e do juízo. Em ambos os casos, o caminho de entrada varia porque os ouvintes possuem conhecimentos e perguntas diferentes.',
        'Contextualização fiel pergunta o que o ouvinte já entende, quais palavras exigem explicação e quais pressupostos precisam ser confrontados. Contextualização infiel muda o conteúdo para evitar toda objeção. A primeira serve à clareza; a segunda sacrifica a verdade.',
        'Por isso não existe um roteiro verbal obrigatório para toda conversa. Existe, sim, um núcleo que deve aparecer com fidelidade: Deus, nossa condição diante dele, Cristo crucificado e ressurreto e o chamado ao arrependimento e à fé.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Fazer discípulos exige uma ponte entre anúncio e igreja',
      paragrafos: [
        'Uma prática evangelística pode ser eloquente e ainda ser pastoralmente deficiente se não houver caminho para acompanhamento. No Novo Testamento, a fé professada conduz à vida comunitária. O convertido aprende, é batizado, participa da comunhão, recebe instrução e assume responsabilidades diante de outros crentes.',
        'Isso significa que planejamento evangelístico precisa responder não apenas “como alcançaremos pessoas?”, mas também “quem continuará a conversa?”, “onde essa pessoa aprenderá?”, “como a igreja verificará compreensão e profissão de fé?” e “como será integrada ao corpo?”.',
        'A responsabilidade pelo fruto não autoriza fabricar resultados. Ela obriga a igreja a criar condições de cuidado para que uma profissão de fé seja ensinada, acompanhada e discernida.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Do evento ao discipulado',
      enunciado: 'Uma igreja realiza uma ação em praça pública, conversa com dezenas de pessoas e registra contatos de interessados. Depois do evento, ninguém sabe quem fará o acompanhamento e os contatos ficam arquivados.',
      explicacao: 'Houve iniciativa de ida e possivelmente comunicação do evangelho, mas faltou parte essencial da lógica missionária apostólica: conduzir interessados a relações concretas de ensino e comunidade. O problema não está na praça, e sim na desconexão entre anúncio e discipulado.'
    },
    {
      tipo: 'atividade',
      id: 'tp09-u3-a1',
      titulo: 'Atividade — desenhar um caminho completo',
      enunciado: 'Escolha um contexto real de evangelização — vizinhança, universidade, trabalho, praça, ação social ou ambiente digital — e desenhe um percurso que vá do primeiro contato ao início do discipulado.',
      itens: [
        'Indique o ponto de entrada mais inteligível para esse público.',
        'Defina como o evangelho será apresentado com clareza.',
        'Descreva como perguntas e objeções poderão ser acolhidas.',
        'Indique quem fará o acompanhamento e como a pessoa será conectada à igreja local.'
      ],
      resposta: 'Uma resposta adequada preserva o mesmo conteúdo do evangelho, mas ajusta linguagem e ponto de partida ao público. Deve incluir conversa real, possibilidade de esclarecimento e um caminho concreto de acompanhamento, evitando tanto a lógica de evento sem continuidade quanto a convivência sem anúncio.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'A igreja primitiva evangeliza indo ao encontro das pessoas em múltiplos ambientes.',
        'Proclamação pública, conversa, hospitalidade e redes relacionais aparecem como meios complementares.',
        'O ponto de entrada pode variar; o evangelho não.',
        'Evangelização e discipulado são distintos, mas a Grande Comissão os mantém conectados.',
        'Métodos devem servir à clareza, ao cuidado e à integração comunitária, não substituir a ação de Deus.'
      ],
    },
  ],
  fontes: [
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
      nota: 'Os capítulos XXV e XXVI ajudam a relacionar missão, igreja visível e comunhão dos santos.'
    },
    {
      id: 'spurgeon-soul-winner',
      autor: 'Charles Haddon Spurgeon',
      ano: '1895',
      titulo: 'The Soul Winner',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/soulwinner0000chsp',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'cadastro',
      nota: 'Referência histórica para a responsabilidade evangelística do cristão e o cuidado com pessoas, sem transformar método em mecanismo de conversão.'
    }
  ],
  atualizadoEm: '2026-09-04',
};