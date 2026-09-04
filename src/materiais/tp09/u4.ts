import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u4-conteudo-mensagem',
  disciplina: 'TP09',
  unidade: 4,
  titulo: 'O conteúdo da mensagem evangelística',
  objetivo: 'Explicar por que a mensagem evangelística deve ser teocêntrica, biblicamente controlada e verdadeiramente libertadora, sem reduzir o evangelho a bem-estar pessoal ou a um programa sociopolítico.',
  topicosCobertos: [
    'Mensagem teocêntrica, mensagem bíblica e mensagem libertadora',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Mensagem teocêntrica',
      paragrafos: [
        'Uma mensagem teocêntrica começa com Deus e termina na glória de Deus. Isso não torna a pessoa irrelevante; ao contrário, situa suas necessidades na realidade maior para a qual foi criada. O problema do pecado é grave porque é rebelião contra Deus. A salvação é preciosa porque reconcilia o pecador com Deus. A vida nova é boa porque restaura comunhão e obediência ao Criador.',
        'Esse eixo corrige mensagens em que Deus aparece apenas como solucionador de problemas. Saúde emocional, relações restauradas e esperança podem acompanhar a vida cristã, mas o evangelho não promete uma trajetória livre de sofrimento. O próprio Cristo chama seus discípulos a segui-lo em meio a perdas e tribulações.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Mensagem bíblica',
      paragrafos: [
        'Ser bíblico é mais que acrescentar versículos a um roteiro pronto. Significa permitir que a própria Escritura determine as categorias e relações da mensagem. Em diferentes contextos, o ponto de entrada pode variar, mas alguns elementos reaparecem: Deus como Criador e Juiz, a realidade do pecado, Jesus Cristo em sua morte e ressurreição, a necessidade de arrependimento e fé e a esperança do reino consumado.',
        'A mensagem deve ser suficiente para que o ouvinte saiba em quem é chamado a crer e de que precisa ser salvo. Fórmulas extremamente abreviadas podem ser úteis como lembretes, mas se tornam perigosas quando substituem explicação. “Aceite Jesus” não diz, por si só, quem Jesus é, o que realizou ou o que significa recebê-lo pela fé.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Um controle de conteúdo',
      itens: [
        'Deus: quem é o Criador e Senhor diante de quem vivemos?',
        'Pecado: qual é o problema moral e espiritual que nos separa de Deus?',
        'Cristo: quem é Jesus e o que sua morte e ressurreição realizam?',
        'Resposta: o que significam arrependimento e fé?',
        'Esperança: que nova realidade começa em Cristo e será consumada em sua vitória?',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Mensagem libertadora',
      paragrafos: [
        'O evangelho é libertador em sentido radical: Cristo liberta da culpa do pecado, da condenação, do domínio escravizador do pecado e, finalmente, da própria presença do pecado. Essa libertação possui consequências concretas para relações, justiça, misericórdia e vida comunitária, porque pessoas reconciliadas com Deus aprendem uma nova forma de viver.',
        'É importante manter a ordem. Se libertação for reduzida a mudança política, econômica ou terapêutica, o centro da reconciliação com Deus desaparece. Se, ao contrário, a salvação for apresentada como experiência puramente interior sem efeitos na vida, o alcance ético do evangelho é mutilado. A evangelização anuncia uma libertação que começa na reconciliação com Deus e produz fruto em toda a existência.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u4-a1',
      titulo: 'Atividade — auditar uma mensagem',
      enunciado: 'Analise a frase: “Jesus veio para realizar seus sonhos e libertar você de tudo que impede sua felicidade”. Identifique pelo menos três problemas e produza uma alternativa curta que preserve a ideia bíblica de libertação.',
      resposta: 'A frase torna os sonhos do ouvinte o centro, não define pecado, não explica a obra de Cristo e sugere libertação de qualquer obstáculo à felicidade. Uma alternativa possível: “Deus nos criou para si, mas o pecado nos tornou culpados e escravos. Em Jesus Cristo, morto e ressurreto, Deus oferece perdão, reconciliação e nova vida; por isso ele chama você a arrepender-se e confiar em Cristo.”',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Teocentrismo impede que Deus seja reduzido a instrumento dos desejos humanos.',
        'Biblicidade significa que a Escritura governa as categorias, não apenas fornece citações.',
        'Libertação começa na reconciliação com Deus e alcança a vida inteira.',
        'A mensagem precisa explicar Deus, pecado, Cristo e resposta com clareza suficiente para ser compreendida.',
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
      nota: 'Referência para pecado, mediação de Cristo, justificação, santificação e esperança cristã.',
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
      acesso: 'livre',
      nota: 'Apoio pastoral para a clareza e integridade do conteúdo evangelístico.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
