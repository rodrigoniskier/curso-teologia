import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u7-geografia-humana-palestina-1',
  disciplina: 'TE03',
  unidade: 7,
  titulo: 'Geografia humana da Palestina 1',
  objetivo: 'Relacionar alimentação, vestuário, dinheiro, pesos e medidas às condições econômicas e sociais do mundo bíblico, evitando anacronismos e falsas conversões modernas.',
  topicosCobertos: [
    'Alimentação',
    'Vestuário',
    'Dinheiro',
    'Pesos e medidas',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Alimentação revela ecologia e desigualdade',
      paragrafos: [
        'A dieta cotidiana variava por período, região e condição social, mas cereais, pão, azeite, vinho, frutas, legumes e laticínios formavam uma base recorrente. Peixe era importante em áreas próximas a lagos e costa; carne aparecia com frequência diferente conforme riqueza, festa e disponibilidade de rebanho.',
        'A expressão “trigo, vinho e azeite” resume mais que ingredientes. Ela aponta para ciclos agrícolas, armazenamento, tributação e comércio. Fome e carestia também precisam ser lidas nesse sistema: uma sequência de seca, guerra ou interrupção de rotas podia comprometer rapidamente o abastecimento.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Vestuário era proteção e patrimônio',
      paragrafos: [
        'Túnicas, mantos, coberturas e tecidos representavam trabalho, matéria-prima e valor. Uma veste externa podia servir como proteção contra o frio noturno e funcionar como bem econômico. Isso explica a seriedade das leis que limitam retenção de uma capa dada em penhor.',
        'É perigoso imaginar um guarda-roupa moderno abundante. Presentear roupas, rasgar vestes, trocar vestimentas ou oferecer um manto pode carregar peso social e econômico que se perde quando roupa é tratada como objeto barato e facilmente substituível.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Dinheiro: moeda nem sempre significa moeda cunhada',
      paragrafos: [
        'Nos períodos mais antigos, termos como siclo funcionam primeiro como unidades de peso. Prata podia ser pesada em transações antes da generalização da cunhagem. Moedas tornam-se progressivamente mais importantes nos períodos persa, helenístico e romano, e o Novo Testamento pressupõe um ambiente monetário mais complexo.',
        'Converter automaticamente valores bíblicos em reais modernos produz uma aparência enganosa de precisão. O poder de compra depende de salário, preço local, época, escassez e finalidade da transação. Em muitos textos, a informação exegética mais segura é a relação proporcional: dívida enorme versus pequena, salário diário, oferta mínima ou custo extraordinário.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Pesos e medidas: aproximação com transparência',
      itens: [
        'Côvado é medida de comprimento baseada no antebraço e possui variações históricas; não há um único valor universal para toda a Bíblia.',
        'Siclo e talento podem designar pesos antes ou além de sua associação posterior com dinheiro.',
        'Efa e bato são medidas de capacidade usadas em contextos agrícolas e comerciais; equivalências modernas são aproximadas.',
        'A melhor prática exegética é informar ordem de grandeza e proporção quando a equivalência exata é incerta.',
        'Medidas devem ser interpretadas dentro do argumento do texto: abundância, escassez, dívida, distância ou dimensão frequentemente são mais importantes que uma conversão decimal rígida.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Uma conversão moderna que pode atrapalhar',
      enunciado: 'Um professor converte uma dívida antiga para “R$ 4.738.216,42” e apresenta o número como equivalência histórica precisa.',
      explicacao: 'A cifra com centavos sugere conhecimento que não possuímos. Variações de peso, preço, salário e poder de compra tornam esse cálculo especulativo. Para ensinar o texto, é mais honesto mostrar a escala relativa da dívida e, quando útil, fornecer uma faixa aproximada explicitamente qualificada.'
    },
    {
      tipo: 'atividade',
      id: 'te03-u7-a1',
      titulo: 'Atividade — remover anacronismos',
      enunciado: 'Reescreva as afirmações: (a) “um siclo era uma moeda padronizada em toda a história bíblica”; (b) “uma capa penhorada era apenas uma peça de roupa”; (c) “a dieta bíblica era basicamente carne e pão”.',
      itens: [
        'Identifique o anacronismo ou simplificação de cada frase.',
        'Reescreva cada uma com maior precisão histórica.',
        'Explique qual diferença essa correção faz para a interpretação de um texto.'
      ],
      resposta: 'O siclo é originalmente unidade de peso e seu uso monetário varia; uma capa podia ser proteção essencial e bem econômico; a dieta comum incluía cereais, azeite, vinho, frutas, legumes e outros alimentos, com carne em frequência desigual. As correções restauram o peso econômico e social que o primeiro leitor reconheceria.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Alimentação depende de clima, agricultura, região e posição social.',
        'Vestuário podia representar proteção, status e patrimônio.',
        'Dinheiro e cunhagem mudam ao longo dos séculos; não se deve projetar um sistema único sobre toda a Bíblia.',
        'Pesos e medidas possuem equivalências aproximadas e por vezes variáveis.',
        'Boa exegese prefere proporção e contexto a conversões modernas de falsa precisão.'
      ],
    },
  ],
  fontes: [
    {
      id: 'smith-geografia',
      autor: 'George Adam Smith',
      ano: '1894',
      titulo: 'The Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/historicalgeogra00smit',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Relaciona ambiente, agricultura e vida cotidiana às regiões da Palestina.'
    },
    {
      id: 'josefo-obras',
      autor: 'Flávio Josefo',
      ano: '93',
      titulo: 'The Works of Flavius Josephus (trad. William Whiston)',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/workstranslatedb00joseuoft',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'Fonte antiga para economia, costumes, alimentos, tributos e vida judaica no fim do período do Segundo Templo.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
