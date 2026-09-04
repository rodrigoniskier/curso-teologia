import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u9-soberania-eleicao',
  disciplina: 'TP09',
  unidade: 9,
  titulo: 'A soberana ação de Deus e a evangelização',
  objetivo: 'Relacionar eleição e evangelização como partes do mesmo propósito soberano, mostrando por que a doutrina da eleição sustenta a proclamação universal em vez de restringi-la.',
  topicosCobertos: [
    'A eleição e a evangelização e evangelização que considera a soberania de Deus',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Soberania que envia',
      paragrafos: [
        'A soberania de Deus não descreve um Deus distante que determina resultados sem usar meios. Na Escritura, o Deus que elege também chama, envia mensageiros, abre portas, concede fé e reúne seu povo. A evangelização pertence ao próprio modo pelo qual sua soberania se manifesta na história.',
        'Isso ajuda a ler textos como Atos 18. Em Corinto, a promessa de que Deus tinha “muito povo” naquela cidade não leva Paulo a interromper a missão. Ela sustenta sua permanência e ensino. A eleição aparece como garantia de que a obra não é inútil, não como informação secreta para selecionar destinatários.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O decreto secreto e a ordem revelada',
      paragrafos: [
        'O evangelista não tem acesso ao decreto secreto de Deus. Ele possui, porém, a ordem revelada de anunciar o evangelho e chamar os ouvintes à fé. Misturar essas duas esferas produz paralisia: tenta-se descobrir previamente aquilo que Deus não revelou, em vez de obedecer ao que ele revelou claramente.',
        'A prática reformada, portanto, proclama amplamente. O convite é sincero porque a promessa é verdadeira: todo aquele que vem a Cristo pela fé será recebido. A incapacidade humana explica por que a graça é necessária; não transforma o chamado em ficção.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Quatro efeitos pastorais da soberania',
      itens: [
        'Coragem: nenhum contexto é espiritualmente impossível para Deus.',
        'Humildade: nenhuma conversão pode ser atribuída à superioridade do mensageiro.',
        'Paciência: resultados podem surgir depois de longos períodos de semeadura.',
        'Universalidade: como a identidade dos eleitos é desconhecida, o evangelho é anunciado sem discriminação.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Entre fatalismo e controle',
      paragrafos: [
        'Há dois erros opostos. O fatalismo diz que, se Deus é soberano, nossas ações não importam. O controle prático diz que, se fizermos tudo certo, o resultado está em nossas mãos. A doutrina bíblica dos meios rejeita ambos: nossas ações importam precisamente porque Deus escolhe agir por meios, mas sua eficácia salvadora não está sob nosso controle.',
        'Essa posição permite planejamento sem idolatria da estratégia. A igreja pode pesquisar o contexto, preparar líderes, treinar comunicação e avaliar processos. Contudo, ao final, não confunde excelência operacional com poder regenerador.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u9-a1',
      titulo: 'Atividade — corrigir dois extremos',
      enunciado: 'Responda a duas frases: (a) “Se Deus elegeu, nossa igreja não precisa investir em evangelização”; (b) “Se nossa campanha for profissional o bastante, teremos conversões”. Use a doutrina dos meios para corrigir ambas.',
      resposta: 'À primeira, responde-se que Deus ordena não apenas o fim da salvação, mas os meios, entre eles o anúncio da Palavra; eleição sustenta o investimento evangelístico. À segunda, responde-se que excelência pode tornar a comunicação mais clara, porém regeneração pertence ao Espírito. O meio deve ser usado com responsabilidade sem ser transformado em causa autônoma do resultado.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Eleição e evangelização não competem: Deus salva por meios que ele mesmo ordena.',
        'A igreja obedece à ordem revelada, não tenta acessar o decreto secreto.',
        'Soberania produz coragem, humildade, paciência e proclamação indiscriminada.',
        'Planejamento é legítimo; controle da conversão é impossível.',
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
      nota: 'Cap. III.6 articula eleição e meios; cap. X trata do chamado eficaz.',
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
      nota: 'Fonte reformada clássica sobre eleição, chamado externo e graça eficaz.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
