import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u10-meios-evangelizacao',
  disciplina: 'TP09',
  unidade: 10,
  titulo: 'Deus e os meios de evangelização',
  objetivo: 'Compreender Palavra, fé, conduta do evangelista e oração como meios ordenados e coerentes com a ação soberana de Deus.',
  topicosCobertos: [
    'A fé e a Palavra de Deus, a conduta de quem evangeliza e a oração',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A Palavra como meio central',
      paragrafos: [
        'A fé cristã não nasce de uma espiritualidade sem conteúdo. Romanos 10 liga fé a ouvir a mensagem de Cristo. Por isso, o meio central da evangelização é a Palavra comunicada de forma inteligível. A igreja pode usar conversas, sermões, literatura, vídeo ou ambientes digitais; o meio tecnológico muda, mas a Palavra precisa continuar governando o conteúdo.',
        'Confiar na Palavra não significa repetir frases sem considerar compreensão. A comunicação deve explicar termos, estabelecer relações e adaptar o vocabulário ao ouvinte. A autoridade pertence à verdade revelada, não a uma forma cultural específica de expressá-la.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Fé e resposta',
      paragrafos: [
        'A evangelização chama a uma resposta pessoal de arrependimento e fé. Fé salvadora não é mera concordância com fatos nem decisão de experimentar uma religião. É receber e descansar em Cristo como ele é oferecido no evangelho. Por isso, o evangelista precisa explicar tanto o objeto da fé quanto a natureza da confiança requerida.',
        'O chamado pode e deve ser urgente. Urgência, porém, difere de coerção. O mensageiro pode mostrar a seriedade do pecado, a certeza do juízo e a suficiência de Cristo; não precisa produzir uma reação observável para validar a mensagem.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'A conduta também comunica',
      itens: [
        'Verdade: não exagerar histórias, estatísticas, testemunhos ou promessas para tornar a mensagem mais convincente.',
        'Mansidão: tratar objeções sem desprezo e reconhecer a dignidade do interlocutor.',
        'Coerência: uma vida pública contraditória não torna o evangelho falso, mas pode obscurecer seu testemunho.',
        'Paciência: respeitar o tempo da conversa e distinguir perseverança de assédio.',
        'Confidencialidade: não transformar histórias pessoais de ouvintes em ilustrações públicas sem consentimento.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Oração e meios',
      paragrafos: [
        'A oração expressa que a igreja usa os meios sem divinizá-los. Oramos por oportunidades, clareza, sabedoria, coragem e conversões porque reconhecemos que Deus deve agir. A oração também reforma o mensageiro: corrige orgulho, pressa e ressentimento contra quem rejeita a mensagem.',
        'Palavra, conduta e oração não competem. Uma mensagem correta dita por uma vida manipuladora contradiz sua própria ética; uma vida admirável sem explicação não comunica o evangelho; oração sem disposição para falar transforma dependência em omissão. Os meios funcionam em conjunto sob a providência de Deus.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u10-a1',
      titulo: 'Atividade — planejar uma conversa',
      enunciado: 'Monte um plano curto para conversar com um amigo que pediu para entender o cristianismo. Inclua: um texto bíblico, duas perguntas de escuta, o conteúdo central que você quer explicar, uma atitude de conduta a observar e um motivo de oração antes da conversa.',
      resposta: 'A resposta pode variar, mas deve articular Palavra, diálogo, caráter e oração. Um exemplo: ler Marcos 2.1–12 ou Romanos 3.21–26; perguntar o que a pessoa entende por Deus e por perdão; explicar pecado, Cristo e fé; evitar pressa ou linguagem superior; orar por clareza, amor e ação do Espírito. O valor está na integração dos meios, não num roteiro inflexível.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'A Palavra é o meio normativo da mensagem evangelística.',
        'A fé é resposta a Cristo oferecido no evangelho, não simples adesão a uma experiência.',
        'A conduta do mensageiro deve ser coerente com a verdade e o amor que proclama.',
        'A oração reconhece que Deus usa meios sem transferir a eles seu poder soberano.',
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
      nota: 'Apoio confessional para Palavra, fé, arrependimento e meios de graça.',
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
      nota: 'Reflexão pastoral sobre mensagem, caráter e cuidado do evangelista.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
