import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp09-u5-proposito-doutrina',
  disciplina: 'TP09',
  unidade: 5,
  titulo: 'Propósito e conteúdo doutrinário da evangelização',
  objetivo: 'Relacionar a glória de Deus, a eleição e o conteúdo doutrinário reformado sem transformar eleição em desculpa para omissão nem evangelização em aula abstrata de sistema teológico.',
  topicosCobertos: [
    'Glorificar a Deus, alcançar os eleitos e evangelização com conteúdo doutrinário reformado',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O fim principal é a glória de Deus',
      paragrafos: [
        'A evangelização visa a salvação de pessoas reais, mas seu horizonte último é a glória de Deus. Isso muda a pergunta sobre sucesso. Se a única medida for quantidade de respostas, a pressão por resultados pode deformar a mensagem. Se a glória de Deus é o fim, fidelidade, verdade, amor ao próximo e dependência do Espírito tornam-se parte do próprio critério de êxito.',
        'Glorificar a Deus não é opor-se ao desejo de conversões. Deus é glorificado justamente ao chamar pecadores para seu Filho, perdoá-los, santificá-los e reuni-los em seu povo. O problema surge quando o resultado visível é tratado como algo que o evangelista deve produzir a qualquer custo.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. “Alcançar os eleitos” não significa procurar sinais de eleição',
      paragrafos: [
        'A tradição reformada afirma que Deus escolheu um povo para a salvação e também determinou os meios pelos quais esse povo será chamado. O evangelista não conhece a identidade dos eleitos e não recebe autorização para selecioná-los por aparência, comportamento, receptividade ou origem. O chamado externo do evangelho é dirigido indiscriminadamente aos ouvintes.',
        'A eleição, portanto, sustenta a missão em vez de estreitá-la. Paulo permanece em Corinto depois de ouvir que Deus tinha “muito povo” na cidade; a promessa é razão para continuar falando. A soberania retira do mensageiro o peso de fabricar fé e, ao mesmo tempo, garante que a Palavra não depende da capacidade humana de prever quem responderá.',
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Doutrina reformada que serve à evangelização',
      itens: [
        'Soberania: Deus governa o processo e o resultado; por isso o mensageiro pode trabalhar sem manipulação.',
        'Eleição: a graça precede a resposta humana e garante um povo para Cristo; por isso o convite não depende de identificar previamente quem é eleito.',
        'Depravação: o problema humano é mais profundo que ignorância; por isso dependemos do Espírito, sem abandonar explicação e persuasão.',
        'Justificação pela fé: o pecador é recebido por causa de Cristo, não por desempenho religioso; por isso a mensagem oferece graça, não um programa de autoaperfeiçoamento.',
        'Perseverança e igreja: a meta não é uma decisão isolada, mas uma vida de fé que se expressa em discipulado e comunhão.',
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Conteúdo doutrinário não é jargão',
      paragrafos: [
        'Evangelização com conteúdo reformado não exige despejar um sistema completo sobre o ouvinte. Exige que aquilo que é dito seja governado por convicções verdadeiras. Pode ser necessário explicar eleição em uma conversa; em outra, o primeiro obstáculo pode ser quem é Deus, o que é pecado ou por que a cruz importa. A doutrina orienta a mensagem mesmo quando os termos técnicos não aparecem.',
        'O teste é simples: a linguagem usada pode ser acessível sem alterar a estrutura do evangelho? “Graça” pode ser explicada; “justificação” pode ser traduzida em linguagem comum; “eleição” pode ser tratada quando relevante. Clareza não é simplificação enganosa. A tarefa é tornar a verdade compreensível, não fazê-la parecer menos ofensiva ou mais controlável.',
      ],
    },
    {
      tipo: 'atividade',
      id: 'tp09-u5-a1',
      titulo: 'Atividade — doutrina que muda método',
      enunciado: 'Explique como a convicção de que Deus é soberano na conversão deveria modificar três práticas: pressão emocional por decisão, seleção de pessoas “mais promissoras” e desânimo após rejeição.',
      resposta: 'A soberania reduz a legitimidade da pressão emocional porque o mensageiro não produz regeneração; elimina a ideia de que só pessoas aparentemente receptivas merecem ouvir, porque a eleição é desconhecida ao evangelista; e combate o desânimo absoluto, porque rejeição imediata não determina o que Deus fará posteriormente. Em todos os casos, soberania aumenta a responsabilidade pela fidelidade e diminui a pretensão de controlar o resultado.',
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'A glória de Deus é o horizonte último da evangelização.',
        'A eleição inclui os meios: Deus chama seus eleitos por meio da Palavra anunciada.',
        'O evangelista não sabe quem é eleito e, portanto, oferece Cristo a todos sem discriminação.',
        'Doutrina reformada deve moldar conteúdo e método, não funcionar como vocabulário de grupo.',
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
      nota: 'Especialmente caps. III e X, sobre decreto, eleição, meios e chamado eficaz.',
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
      nota: 'Tratamento clássico da eleição, do chamado e da relação entre graça divina e pregação.',
    },
  ],
  atualizadoEm: '2026-09-04',
};
