import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u6-pressupostos-reformados',
  disciplina: 'TP09',
  unidade: 6,
  titulo: 'Os pressupostos da evangelização reformada',
  objetivo: 'Integrar soberania, eleição, pecado, obra de Cristo, inspiração da Escritura e ação do Espírito numa prática evangelística coerente e não hiper-calvinista.',
  topicosCobertos: [
    'A soberania de Deus, a eleição de Deus, o pecado no coração do homem, o objetivo da morte de Cristo, a inspiração da Escritura e a operação do Espírito Santo',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Pressupostos não ficam apenas no papel',
      paragrafos: [
        'Toda prática evangelística pressupõe uma resposta a perguntas teológicas: quem governa a salvação, qual é a condição do ser humano, o que a cruz realizou, por que a Bíblia possui autoridade e quem efetua a conversão. Mesmo quando essas respostas não são explicitadas, elas influenciam o método. Por isso, a unidade não busca apenas memorizar doutrinas, mas observar como elas reorganizam a prática.',
        'No modelo reformado, Deus é soberano e elege graciosamente; o ser humano está espiritualmente incapaz de voltar-se a Deus por si mesmo; Cristo realiza uma obra objetiva e suficiente para salvar; a Escritura é a Palavra normativa que define a mensagem; e o Espírito aplica a obra de Cristo, produzindo vida e fé. Esse conjunto deveria gerar confiança, humildade e seriedade, não passividade.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Seis pressupostos e suas consequências',
      itens: [
        'Soberania de Deus: não há situação fora do seu governo; o evangelista trabalha com confiança e oração.',
        'Eleição: a salvação é graça desde o início; o mensageiro não seleciona previamente quem “merece” ouvir.',
        'Pecado no coração: informação e ambiente não explicam sozinhos a incredulidade; é necessária renovação interior.',
        'Objetivo da morte de Cristo: a cruz não é mero exemplo moral; Cristo efetivamente salva, expia culpa e reconcilia.',
        'Inspiração da Escritura: a mensagem é recebida e regulada pela Palavra, não inventada segundo preferência do público.',
        'Operação do Espírito Santo: o Espírito ilumina, convence, regenera e conduz à fé; técnica não substitui sua obra.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Expiação e oferta do evangelho',
      paragrafos: [
        'A tradição reformada discutiu de diferentes formas a extensão e a intenção da expiação, mas sua prática evangelística histórica não exige que o mensageiro conheça o decreto secreto de Deus. O que ele conhece é a ordem revelada: Cristo deve ser anunciado e oferecido sinceramente aos ouvintes, e todos são chamados a arrepender-se e crer.',
        'Por isso, não se deve dizer a uma pessoa específica que sabemos, por revelação privada, que Cristo morreu por ela individualmente; tampouco devemos restringir o convite porque não sabemos se ela é eleita. A linguagem bíblica é suficiente: Cristo é um Salvador perfeito; quem vem a ele não será lançado fora; todos os que creem recebem perdão e vida.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. O erro hiper-calvinista',
      paragrafos: [
        'O hiper-calvinismo transforma doutrinas verdadeiras em inferências erradas quando conclui que a incapacidade humana ou a eleição tornam impróprio chamar todos os ouvintes à fé. A Escritura faz o contrário: ordena arrependimento, anuncia perdão e usa a pregação como meio pelo qual Deus chama eficazmente seu povo.',
        'O verbete “Evangelização” do próprio portal aprofunda essa objeção pela doutrina dos meios: Deus não decretou apenas o fim da salvação, mas também a pregação, a fé e os demais meios pelos quais conduz os eleitos a Cristo. A consequência prática é intensa atividade com profunda dependência.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u6-a1',
      titulo: 'Atividade — doutrina e decisão prática',
      enunciado: 'Para cada afirmação, indique qual pressuposto reformado está sendo esquecido: (a) “Se eu usar a técnica certa, consigo converter qualquer pessoa”; (b) “Não adianta pregar, porque os eleitos serão salvos”; (c) “Podemos mudar o conteúdo se isso aumentar a aceitação”; (d) “O principal problema das pessoas é falta de educação religiosa”.',
      resposta: 'Em (a), esquece-se a operação soberana do Espírito e a incapacidade humana. Em (b), separa-se eleição dos meios ordenados por Deus. Em (c), nega-se na prática a autoridade normativa da Escritura. Em (d), reduz-se o pecado a déficit de informação. As respostas mostram como doutrina e método se implicam mutuamente.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Soberania e meios pertencem à mesma doutrina da providência salvadora.',
        'A incapacidade humana aumenta a dependência do Espírito, não elimina o chamado à fé.',
        'A cruz é obra salvadora objetiva, não apenas demonstração de amor ou exemplo moral.',
        'A Escritura define a mensagem; o Espírito torna eficaz o chamado segundo a vontade de Deus.',
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
      nota: 'Caps. III, VIII, IX, X, XIV e XV articulam decreto, Cristo, incapacidade, chamado, fé e arrependimento.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1688',
      titulo: 'Institutio Theologiae Elencticae',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Fonte reformada clássica para chamado externo e interno, fé e relação entre graça e meios.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
