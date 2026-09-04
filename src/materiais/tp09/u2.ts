import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u2-base-biblica',
  disciplina: 'TP09',
  unidade: 2,
  titulo: 'Base bíblica da evangelização',
  objetivo: 'Compreender a evangelização a partir da revelação de Deus em Cristo, da condição humana diante de Deus e da identidade da igreja como comunidade redimida e enviada.',
  topicosCobertos: [
    'A visão de Deus em Jesus Cristo, a visão do homem – a categoria humana e a visão da Igreja uma comunidade redimida',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Começar com Deus, não com a técnica',
      paragrafos: [
        'A evangelização cristã começa com quem Deus é e com o que ele realizou em Jesus Cristo. O evangelho não é primeiramente um método para atender necessidades percebidas pelo ser humano. É a notícia de que o Deus criador, santo e misericordioso agiu na história em seu Filho, reconciliando pecadores consigo e inaugurando seu reino.',
        'Jesus não é apenas o melhor exemplo de evangelista: ele é o conteúdo decisivo da evangelização. Sua encarnação, vida obediente, morte, ressurreição e senhorio explicam por que existe uma boa notícia. Quando a mensagem começa apenas com benefícios pessoais, corre o risco de apresentar Cristo como meio para outro fim; quando começa com Deus em Cristo, os benefícios são recebidos dentro da reconciliação com o próprio Deus.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A visão bíblica do ser humano',
      paragrafos: [
        'A pessoa a quem evangelizamos é simultaneamente criatura portadora da imagem de Deus e pecadora caída. A primeira verdade impede desprezo: todo ser humano possui dignidade, racionalidade, responsabilidade e vocação diante do Criador. A segunda impede ingenuidade: o problema humano não é apenas falta de informação, baixa autoestima ou ambiente desfavorável, mas alienação moral e espiritual de Deus.',
        'Essa dupla visão muda a postura do evangelista. Porque o ouvinte é imagem de Deus, deve ser tratado com respeito, ouvido com atenção e abordado como alguém responsável. Porque é pecador, não devemos supor que argumentos perfeitos produzam automaticamente fé. A evangelização usa razões e linguagem clara, mas depende da graça que ilumina e transforma o coração.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Três lentes bíblicas',
      itens: [
        'Deus em Cristo: Criador, Senhor, Juiz e Redentor que toma a iniciativa da reconciliação.',
        'Ser humano: imagem de Deus, responsável diante dele, mas afetado integralmente pelo pecado.',
        'Igreja: povo redimido, reunido pela Palavra e enviado para testemunhar em palavra e vida.',
        'Evangelização: encontro dessas três realidades — a mensagem de Deus é levada pela comunidade redimida a seres humanos que precisam de reconciliação.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. A igreja como comunidade redimida',
      paragrafos: [
        'O Novo Testamento não apresenta evangelização como projeto isolado de especialistas. A igreja é uma comunidade chamada das trevas para a luz e, por isso, torna conhecidas as virtudes daquele que a chamou. Há pregadores enviados, evangelistas e missionários, mas há também uma comunidade inteira cuja adoração, comunhão, santidade, hospitalidade e serviço dão contexto à mensagem.',
        'Isso significa que a meta não é produzir indivíduos religiosos desconectados. O chamado evangelístico conduz a Cristo e, em Cristo, ao seu corpo. Batismo, ensino, comunhão e disciplina aparecem no horizonte do discipulado. Uma evangelização que não sabe o que fazer com quem crê ainda não pensou biblicamente o seu próprio propósito.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u2-a1',
      titulo: 'Atividade — reconstruir uma abordagem',
      enunciado: 'Um roteiro evangelístico diz apenas: “Deus quer que você seja feliz; aceite Jesus e sua vida vai melhorar”. Reescreva a abordagem em quatro movimentos que expressem a visão bíblica de Deus, do ser humano, de Cristo e da igreja.',
      resposta: 'Uma resposta adequada deve apresentar Deus como Criador e Senhor; o ser humano como imagem de Deus e pecador responsável; Cristo como aquele que morreu e ressuscitou para reconciliar pecadores; e a resposta de arrependimento e fé que introduz a pessoa numa vida de discipulado e comunhão com a igreja. Benefícios como esperança e nova vida podem ser anunciados, mas não devem substituir o problema da reconciliação com Deus.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'A evangelização é teocêntrica porque começa com a iniciativa de Deus em Cristo.',
        'A antropologia bíblica une dignidade da imagem de Deus e realidade radical do pecado.',
        'Respeitar o ouvinte e reconhecer sua incapacidade espiritual não são ideias concorrentes.',
        'A igreja é comunidade redimida e também contexto normal de incorporação do novo discípulo.',
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
      nota: 'Referência confessional para criação, queda, Cristo mediador, chamado eficaz e igreja.',
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
      nota: 'Síntese reformada clássica sobre conhecimento de Deus, condição humana, mediação de Cristo e igreja.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
