import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u1-conceito-evangelizacao',
  disciplina: 'TP09',
  unidade: 1,
  titulo: 'Introdução ao curso: o que é evangelização?',
  objetivo: 'Definir evangelização em termos bíblicos e reformados, distinguindo-a de missão, testemunho genérico, proselitismo coercitivo e mera obtenção de decisões.',
  topicosCobertos: [
    'Conceituação de evangelização e definição',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O problema da definição',
      paragrafos: [
        'A palavra evangelização é usada para atividades muito diferentes: uma conversa pessoal, uma pregação pública, uma campanha, um convite ao culto, uma ação social ou uma publicação nas redes. O primeiro passo do curso é separar a essência da evangelização das formas que ela pode assumir. Se o conceito for definido pela técnica, qualquer mudança cultural parecerá ameaça ao evangelho; se for definido de modo amplo demais, quase tudo que a igreja faz poderá ser chamado de evangelização.',
        'No Novo Testamento, a família de palavras ligada ao evangelho aponta para o anúncio de boas-novas. O conteúdo não nasce da experiência do mensageiro, embora o testemunho pessoal possa servir ao anúncio. O centro é aquilo que Deus fez em Jesus Cristo e o chamado que essa obra dirige ao ouvinte. Por isso, evangelização envolve mensagem inteligível, destinatário real e apelo sincero ao arrependimento e à fé.',
        'Uma definição reformada acrescenta uma distinção decisiva entre responsabilidade e resultado. A igreja anuncia; Deus salva. O evangelista persuade, explica, responde e suplica, mas não regenera. Isso protege simultaneamente a urgência e a honestidade: é necessário falar, mas não é necessário manipular para produzir um resultado que pertence ao Espírito Santo.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Evangelização e conceitos próximos',
      itens: [
        'Evangelização: anúncio do evangelho a quem ainda não crê, com chamado ao arrependimento e à fé.',
        'Missão: categoria mais ampla da participação da igreja no envio de Deus; inclui evangelização, formação, serviço e outras responsabilidades.',
        'Testemunho cristão: vida e palavra que tornam visível a esperança cristã; pode preparar ou acompanhar a evangelização, mas não substitui o conteúdo do evangelho.',
        'Discipulado: ensino e formação daqueles que seguem Cristo; começa com o chamado evangelístico e continua na vida da igreja.',
        'Proselitismo coercitivo: tentativa de obter adesão mediante pressão, vantagem indevida, medo ou manipulação. É incompatível com a natureza da fé como resposta à Palavra pela ação do Espírito.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Uma definição operacional',
      paragrafos: [
        'Para este curso, evangelização será entendida como o anúncio fiel e compreensível das boas-novas de Deus em Cristo a pessoas que ainda não creem, acompanhado do chamado sincero para que se arrependam, creiam e sejam incorporadas à comunidade cristã. A definição contém conteúdo, destinatário, resposta e horizonte eclesial.',
        'Ela também impede que a evangelização seja medida apenas por decisões imediatas. Uma conversa pode ser fiel mesmo quando o ouvinte não se converte; uma campanha pode gerar muitas respostas e ainda comunicar uma mensagem inadequada. O primeiro critério é fidelidade ao evangelho. Fruto importa, mas é fruto de uma semente que precisa primeiro ser verdadeira.',
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Quando uma boa ação não é, por si só, evangelização',
      enunciado: 'Uma igreja distribui alimentos com respeito e generosidade, mas decide nunca explicar por que serve nem falar de Cristo para não constranger ninguém.',
      explicacao: 'A ação pode ser um legítimo exercício de misericórdia cristã e um testemunho público valioso. Entretanto, se nenhum evangelho é comunicado, a atividade não deve ser chamada de evangelização. A distinção não diminui a misericórdia; apenas preserva o significado de cada responsabilidade da igreja.',
    },
    {
      tipo: 'atividade',
      id: 'tp09-u1-a1',
      titulo: 'Atividade — identificar a essência',
      enunciado: 'Classifique quatro situações: (a) um cristão explica a um colega quem é Jesus e o convida a crer; (b) uma igreja oferece atendimento social sem comunicação religiosa; (c) um membro conta como sua vida melhorou, mas não explica o evangelho; (d) um pregador anuncia Cristo, arrependimento e fé a uma praça quase vazia.',
      resposta: 'A situação (a) é evangelização clara. A (b) é serviço e testemunho de misericórdia, mas não evangelização em sentido estrito. A (c) é testemunho pessoal incompleto para fins evangelísticos, pois a experiência do mensageiro tomou o lugar da mensagem. A (d) continua sendo evangelização mesmo sem resposta observável: fidelidade não é definida pelo tamanho do público ou pelo número de decisões.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Evangelização é definida pelo evangelho anunciado, não por uma técnica específica.',
        'O chamado ao arrependimento e à fé pertence à mensagem evangelística.',
        'A vida cristã autentica a mensagem, mas não substitui a explicação do evangelho.',
        'A conversão é obra de Deus; a comunicação fiel é responsabilidade da igreja.',
        'Resultados devem ser desejados e acompanhados, mas não produzidos por manipulação.',
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
      nota: 'Base confessional para chamado eficaz, fé, arrependimento e relação entre meios e salvação.',
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
      nota: 'Tratamento pastoral e evangelístico clássico sobre fidelidade da mensagem, conversão e responsabilidade do mensageiro.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
