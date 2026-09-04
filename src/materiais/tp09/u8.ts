import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u8-espirito-evangelizacao',
  disciplina: 'TP09',
  unidade: 8,
  titulo: 'O Espírito Santo e o poder da evangelização',
  objetivo: 'Explicar a ação do Espírito Santo na convicção, regeneração, iluminação e capacitação para o testemunho, distinguindo dependência espiritual de passividade ou de técnicas sacralizadas.',
  topicosCobertos: [
    'A ação do Espírito Santo na evangelização e evangelização que considera a ação do Espírito Santo',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O poder não está no mensageiro',
      paragrafos: [
        'A evangelização cristã faz uma afirmação que deveria produzir humildade: nenhuma habilidade do mensageiro pode produzir vida espiritual. Eloquência, conhecimento, empatia e estratégia são dons úteis, mas continuam sendo meios humanos. A passagem da morte para a vida é obra de Deus pelo Espírito.',
        'O Novo Testamento associa o Espírito tanto ao testemunho da igreja quanto à aplicação da salvação. Ele capacita os discípulos a testemunhar, convence do pecado, abre o coração, ilumina a compreensão da Palavra e produz o novo nascimento. Essa ação não torna desnecessários argumentos ou comunicação; explica por que esses meios podem servir a um efeito que ultrapassa sua capacidade natural.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Ação do Espírito e responsabilidade humana',
      itens: [
        'O Espírito convence; o evangelista deve falar verdadeiramente sobre pecado e graça.',
        'O Espírito regenera; o evangelista não tenta fabricar nova vida por pressão emocional.',
        'O Espírito ilumina; o evangelista explica a Palavra com clareza e responde a dúvidas reais.',
        'O Espírito capacita testemunhas; o cristão prepara-se, ora e age, em vez de usar “dependência” como desculpa para improvisação negligente.',
        'O Espírito produz fruto; a igreja acompanha pessoas ao longo do tempo, sem confundir intensidade momentânea com conversão segura.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Dependência não é anti-intelectualismo',
      paragrafos: [
        'Às vezes, a linguagem de dependência do Espírito é usada para desprezar estudo, planejamento e preparação. Essa conclusão não segue da doutrina reformada dos meios. Se Deus usa a Palavra, pessoas, linguagem, oração e circunstâncias, cuidar dos meios é parte da obediência. Preparar uma explicação melhor pode ser justamente uma forma de servir à obra do Espírito.',
        'O erro oposto é tratar preparação como controle. Estratégias de comunicação ajudam a remover ruído; não garantem conversão. A igreja pode avaliar se sua linguagem é compreensível, se acolhe visitantes, se acompanha interessados e se responde adequadamente a perguntas, mas deve recusar a promessa de técnicas infalíveis de decisão.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Oração como prática de dependência',
      paragrafos: [
        'A oração evangelística não é acessório devocional colocado ao lado da estratégia. Ela expressa a própria teologia da conversão: pedimos a Deus aquilo que não podemos produzir. Oramos por portas abertas, clareza, coragem, proteção, receptividade, convicção e perseverança.',
        'Isso também corrige uma espiritualidade de espetáculo. O poder do Espírito não precisa ser identificado com determinado volume de voz, clima emocional ou reação corporal. O critério da evangelização permanece a Palavra fiel, e o fruto esperado é fé em Cristo acompanhada de arrependimento e vida transformada.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u8-a1',
      titulo: 'Atividade — revisar um plano evangelístico',
      enunciado: 'Um grupo preparou um evento detalhado, mas não incluiu oração, acompanhamento nem espaço para perguntas, porque acredita que “a qualidade da produção garantirá impacto”. Reescreva o plano indicando quatro mudanças coerentes com a doutrina da ação do Espírito.',
      resposta: 'Uma resposta adequada incluirá oração antes, durante e depois; mensagem bíblica clara em vez de depender da atmosfera; oportunidade real de conversa e perguntas; acompanhamento posterior sem pressão por decisão; e avaliação da fidelidade e do cuidado, não apenas do número de respostas. A produção pode continuar bem feita, mas assume seu lugar de meio e não de causa da conversão.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O Espírito é o agente divino da aplicação da salvação.',
        'Sua ação torna a evangelização dependente e esperançosa, não passiva.',
        'Preparação e comunicação são meios legítimos; não são mecanismos de regeneração.',
        'Oração expressa a convicção de que resultados espirituais pertencem a Deus.',
        'Fidelidade bíblica e fruto duradouro são mais seguros que intensidade emocional como sinais de poder.',
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
      nota: 'Especialmente os capítulos sobre chamado eficaz, fé e meios de graça, que atribuem a eficácia salvadora à obra do Espírito pela Palavra.',
    },
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Tratamento clássico da obra interna do Espírito e da relação entre Palavra e fé.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
