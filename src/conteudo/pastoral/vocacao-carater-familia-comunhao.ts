import type { Verbete } from '../../tipos';

export const vocacaoCaraterFamiliaComunhao: Verbete = {
  id: 'tp01-vocacao-carater-familia-comunhao',
  disciplina: 'TP01',
  unidade: 13,
  titulo: 'Caráter Pastoral, Colegialidade, Família e Comunhão',
  subtitulo: 'A vocação que aparece no púlpito é testada em lugares menos visíveis: conselho, casa, amizade, conflito e visitação',
  objetivo:
    'Ao final, você compreenderá a relação do pastor com presbíteros e diáconos, inclusive em situações de conflito; distinguirá caráter bíblico de construção de uma persona pastoral; relacionará qualificação ministerial e cuidado da família; reconhecerá limites éticos na expectativa colocada sobre esposa e filhos; e entenderá comunhão e visitação como partes do pastoreio, não como tarefas sociais periféricas.',
  atualizadoEm: '2026-08-29',
  verMais: ['tp01-vocacao-palavra-cuidado', 'tp12-governo-presbiteriano', 'tp02-poimenica'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'Há qualidades ministeriais que o púlpito consegue esconder. Uma pessoa pode parecer paciente durante quarenta minutos de sermão e ser incapaz de ouvir uma discordância numa reunião. Pode falar com ternura sobre família e chegar em casa sem atenção para ninguém. Pode defender comunhão cristã e viver tão isolada que nenhum irmão tem liberdade para perguntar como realmente está. Por isso as últimas unidades de Vocação e Espiritualidade levam o exame para os ambientes em que a performance pública vale menos.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A lógica é bíblica: o caráter requerido do oficial precisa ser **observável**. Hospitalidade, domínio próprio, mansidão, vida doméstica e boa reputação são qualidades que outras pessoas conseguem verificar. A espiritualidade pastoral não é uma reserva secreta de experiências com Deus; ela se torna visível na maneira como o ministro usa poder, recebe oposição, organiza prioridades, trata a própria casa e permanece irmão entre irmãos.',
    },

    { tipo: 'secao', titulo: 'Pastor, presbíteros e diáconos: trabalhar com outros também é qualificação', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A ordem presbiteriana torna impossível, pelo menos em princípio, imaginar o pastor como proprietário espiritual da congregação. Ele exerce o ministério da Palavra e participa do governo com presbíteros; trabalha ao lado de diáconos no cuidado concreto da igreja; responde a concílios e está sujeito à disciplina como qualquer outro membro e oficial. Colegialidade não é inconveniente administrativo: é parte da proteção do rebanho e do próprio ministro.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Uma relação harmônica não significa ausência de discordância. Um conselho em que ninguém discorda do pastor pode ser muito unido — ou pode ter aprendido que discordar custa caro. Harmonia cristã é capacidade de buscar a mesma fidelidade, dizer a verdade, distribuir responsabilidade, decidir de modo legítimo e continuar em comunhão quando preferências diferentes não vencem.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Com presbíteros:** o pastor precisa compartilhar informação, ouvir experiência local, distinguir autoridade do ofício de preferência pessoal e aceitar que decisões colegiadas podem contrariar sua primeira proposta.',
        '**Com diáconos:** deve respeitar o ofício, evitar tratá-los como equipe de manutenção e integrar misericórdia, administração e cuidado material à missão da igreja sem absorver suas competências.',
        '**Com concílios:** presta contas, recebe supervisão e participa de uma Igreja maior do que a congregação local; apela e argumenta pelos meios institucionais, não mobilizando relações pessoais para contornar decisões.',
        '**Com lideranças informais:** reconhece influência real sem conceder governo paralelo a pessoas carismáticas, antigas ou financeiramente poderosas.',
      ],
    },

    { tipo: 'secao', titulo: 'Quando a relação se torna conflitante', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Conflito não prova automaticamente falha de caráter. Algumas divergências existem porque responsabilidades são reais e decisões importam. O teste espiritual está em **como** o conflito é conduzido. O pastor que nunca enfrenta nada pode estar evitando seu dever; o que transforma toda divergência em batalha pela própria autoridade está protegendo a si mesmo, não o ofício.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        '**Defina o objeto:** doutrina, princípio constitucional, prudência, preferência, falha de comunicação ou ofensa pessoal exigem respostas diferentes.',
        '**Ouça a melhor versão da posição contrária:** responder a uma caricatura aumenta calor e diminui verdade.',
        '**Use o foro correto:** questões de conselho pertencem ao conselho; acusações formais seguem processo; conflitos pessoais não devem ser pregados indiretamente do púlpito.',
        '**Registre decisões relevantes:** memória institucional reduz disputas posteriores sobre o que teria sido combinado.',
        '**Preserve a possibilidade de reconciliação:** não use informação confidencial, sarcasmo, alianças familiares ou exposição pública como armas para vencer.',
      ],
    },
    {
      tipo: 'controversia',
      titulo: 'O pastor deve liderar o conselho ou apenas ser um voto entre outros?',
      posicoes: [
        {
          escola: 'Primazia executiva forte',
          sintese:
            'Enfatiza a responsabilidade pastoral de dar direção e tende a concentrar formulação de agenda, visão e execução. Pode produzir clareza, mas corre o risco de transformar colegialidade em ratificação das decisões do pastor.',
        },
        {
          escola: 'Igualação funcional completa',
          sintese:
            'Reage ao personalismo tratando o pastor como membro do conselho sem papel distintivo de liderança. Protege a pluralidade, mas pode ignorar que ensino, cuidado e dedicação ministerial dão ao pastor responsabilidades e informações próprias.',
        },
        {
          escola: 'Liderança dentro da colegialidade',
          sintese:
            'O pastor pode exercer iniciativa, ensino e direção sem possuir o conselho. Ele lidera por argumentos, serviço, conhecimento do rebanho e confiança, enquanto decisões de governo permanecem conciliares e corrigíveis.',
        },
      ],
    },

    { tipo: 'secao', titulo: 'Postura pastoral: caráter não é persona', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Há igrejas que possuem um perfil imaginário de pastor: voz específica, roupa específica, repertório cultural específico, disponibilidade permanente, extroversão, presença nas redes ou determinado estilo familiar. Parte disso pode ser preferência legítima. O problema começa quando **perfil** é confundido com **caráter bíblico** e preferências locais passam a funcionar como qualificações apostólicas adicionais.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Caráter pastoral é santidade cristã aplicada às responsabilidades do ofício. O ministro precisa ser verdadeiro, sóbrio, hospitaleiro, justo, disciplinado, ensinável, não dominador, não ganancioso e capaz de tratar pessoas sem favoritismo. Nada disso exige que todos os pastores tenham a mesma personalidade. Um introvertido e um extrovertido podem ser hospitaleiros; um pode fazê-lo numa mesa cheia, outro em conversas profundas com poucas pessoas.',
    },
    {
      tipo: 'definicao',
      termo: 'Postura pastoral',
      texto:
        'Modo habitual pelo qual o ministro encarna as virtudes e os limites do ofício em comunicação, relacionamentos, autoridade, dinheiro, sexualidade, conflitos, presença pública e vida privada. Não é construção de uma imagem clerical, mas coerência reconhecível entre doutrina professada, caráter cristão e responsabilidade ministerial.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A postura também inclui limites. Um pastor não precisa responder toda mensagem imediatamente, participar de toda atividade ou carregar sozinho toda emergência. Dizer não pode ser parte do domínio próprio e da boa administração. Disponibilidade pastoral significa que o rebanho possui acesso responsável ao cuidado; não significa que a família, o descanso e a própria alma do ministro deixaram de existir.',
    },

    { tipo: 'secao', titulo: 'A família pastoral não foi ordenada junto com o pastor', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        '1 Timóteo 3 usa a vida doméstica como evidência de maturidade: quem não sabe governar a própria casa não está pronto para cuidar da Igreja. Esse texto às vezes sofre uma distorção cruel. Em vez de examinar a responsabilidade do candidato como marido e pai, a comunidade passa a examinar esposa e filhos como se eles também tivessem assinado termos de ordenação.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**Cuidar da esposa** inclui fidelidade, presença, escuta, proteção contra expectativas indevidas da igreja e decisões ministeriais que considerem o impacto familiar. O casamento não é equipamento do ministério. A esposa pode ter dons e serviços próprios ou não assumir funções públicas específicas; ela é membro da igreja e cônjuge do pastor, não auxiliar pastoral automática.',
    },
    {
      tipo: 'paragrafo',
      texto:
        '**Cuidar dos filhos** significa disciplina amorosa, tempo, instrução e segurança para que eles possam ser crianças e adolescentes reais, não peças da reputação ministerial. Filhos de pastor não devem receber licença para qualquer comportamento nem ser julgados por uma régua que a igreja não aplicaria a outras famílias. O requisito bíblico examina se o pai exerce cuidado fiel, não se consegue produzir filhos sem pecado.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'A **educação da família** combina meios ordinários: culto público, oração, Escritura, conversa, disciplina, exemplo e vida comunitária. O perigo profissional aparece aqui também. O pastor pode preparar excelente estudo para todos e chegar à própria casa sem energia espiritual; pode aconselhar casais e adiar conversas difíceis no seu casamento. A casa não precisa de uma segunda congregação; precisa de um marido e pai cristão presente.',
    },
    {
      tipo: 'lista',
      itens: [
        'Não use esposa ou filhos como ilustrações de sermão sem consentimento e prudência; vulnerabilidade familiar não é material gratuito para o púlpito.',
        'Defina tempos protegidos em que demandas rotineiras da igreja não interrompam a família, mantendo canais claros para emergências reais.',
        'Não transforme o comportamento dos filhos em ferramenta de controle da reputação ministerial; corrija por amor a eles, não por medo do que a igreja dirá.',
        'Garanta que a esposa tenha liberdade de buscar cuidado pastoral que não dependa exclusivamente do marido, especialmente quando o próprio casamento é o assunto.',
      ],
    },

    { tipo: 'secao', titulo: 'O pastor continua sendo irmão', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'A ordenação muda responsabilidades; não cancela a necessidade de comunhão. O pastor precisa adorar, confessar, receber a Ceia, ouvir a Palavra, ser encorajado e corrigido como membro do corpo. Quando toda relação na igreja é interpretada apenas como relação entre pastor e ovelha, surge uma solidão funcional: todos conhecem o ministro, mas ninguém conhece o irmão.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Há limites reais de confidencialidade. O pastor não pode compartilhar tudo que sabe e precisa discernir amizades com cuidado. Mas sigilo não exige isolamento. Ele pode cultivar amizades maduras dentro e fora da congregação, relações com outros ministros e prestação de contas. Baxter insistia no cuidado de si porque o pastor não se torna imune às necessidades espirituais que anuncia aos demais.',
    },

    { tipo: 'secao', titulo: 'Visitação: presença pastoral com propósito', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Visitação pastoral não é sobrevivência de uma cultura em que o pastor precisava aparecer socialmente em todas as casas. É um meio de conhecer o rebanho fora do ambiente programado, levar Palavra e oração a situações específicas e perceber necessidades que raramente chegam espontaneamente ao gabinete. Uma igreja pode ter muitos eventos e ainda assim possuir membros invisíveis.',
    },
    {
      tipo: 'lista',
      itens: [
        '**Visitas de cuidado:** enfermidade, luto, crise, fragilidade econômica, nascimento, isolamento ou transições importantes pedem presença proporcional à necessidade.',
        '**Visitas de conhecimento:** famílias novas, idosos, membros pouco integrados e pessoas que raramente procuram o pastor podem ser conhecidas antes de aparecer uma crise.',
        '**Visitas de restauração:** ausência persistente, conflitos e disciplina requerem contato pastoral que una verdade, escuta e convite ao retorno.',
        '**Visitas compartilhadas:** presbíteros e outros líderes podem participar do cuidado, evitando que toda comunhão dependa de uma única pessoa e fortalecendo o governo pastoral colegiado.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'A tecnologia muda a forma de contato, mas não elimina a necessidade de presença. Uma mensagem pode avisar, acompanhar e manter vínculo; não substitui automaticamente uma conversa difícil, oração à cabeceira ou conhecimento da realidade doméstica. O critério não é preservar um ritual de visita, mas perguntar qual forma de presença serve melhor aquela pessoa naquele momento.',
    },

    {
      tipo: 'pastoral',
      texto:
        'Se quiser avaliar sua vocação longe do púlpito, observe quatro lugares: **a mesa do conselho, a mesa de casa, a conversa em que alguém discorda de você e a sala de uma pessoa que não pode oferecer nada ao seu ministério**. É ali que autoridade, paciência, família e comunhão deixam de ser conceitos. O caráter pastoral amadurece quando o ministro não precisa vencer toda reunião, não sacrifica a casa para manter uma imagem, aceita ser conhecido como irmão e visita pessoas porque elas pertencem a Cristo — não porque sua presença produzirá retorno visível.',
    },
  ],
  fontes: [
    {
      id: 'manual-presbiteriano',
      autor: 'Igreja Presbiteriana do Brasil',
      ano: '2025',
      titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada',
      publicacao: 'Igreja Presbiteriana do Brasil',
      url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Fonte normativa para governo conciliar, atribuições de oficiais, relações e disciplina na IPB.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster — caps. XXI, XXV, XXVI e XXX',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'Base confessional para comunhão dos santos, Igreja, culto e governo eclesiástico.',
    },
    {
      id: 'baxter-reformed-pastor',
      autor: 'Richard Baxter',
      ano: '1656',
      titulo: 'The Reformed Pastor',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/reformedpastor00baxt',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Referência clássica para caráter, cuidado de si, visitação e responsabilidade pelo rebanho.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro IV',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Exposição reformada clássica sobre Igreja, ministros, presbíteros, diáconos e disciplina.',
    },
    {
      id: 'spurgeon-lectures',
      autor: 'Charles Haddon Spurgeon',
      ano: '1875',
      titulo: 'Lectures to My Students',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/lecturestomystud1877spur',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Aulas pastorais sobre caráter, vida ministerial, relacionamentos e perigos próprios do ofício.',
    },
  ],
};
