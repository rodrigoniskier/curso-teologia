import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u2-pressupostos',
  disciplina: 'TE12',
  unidade: 2,
  titulo: 'Pressupostos',
  objetivo: 'Identificar os principais pressupostos bíblico-reformados da interpretação e avaliar como crenças sobre Deus, Escritura, ser humano, pecado e Espírito Santo influenciam a leitura.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Ninguém lê a partir de um ponto neutro',
      paragrafos: [
        'Todo intérprete chega ao texto com linguagem, memória, tradições, perguntas e crenças prévias. Reconhecer isso não significa concluir que qualquer interpretação vale tanto quanto outra. Significa abandonar a ficção da neutralidade e tornar os pressupostos examináveis diante do próprio texto.',
        'A hermenêutica reformada confessa explicitamente alguns compromissos: Deus fala de modo verdadeiro; a Escritura é Palavra de Deus em palavras humanas; seus autores não foram reduzidos a instrumentos mecânicos; o pecado afeta o julgamento humano; e o Espírito ilumina o leitor sem substituir gramática, história ou raciocínio.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Pressupostos que orientam sem dispensar investigação',
      itens: [
        'Deus é verdadeiro e não se contradiz; a unidade canônica é, portanto, uma expectativa teológica legítima.',
        'A inspiração não elimina autoria humana, gênero, vocabulário, situação histórica ou intenção comunicativa.',
        'A perspicuidade afirma clareza suficiente nas coisas necessárias à salvação, não igual facilidade de todos os textos.',
        'A queda alcança o intelecto: erudição não produz infalibilidade interpretativa.',
        'O Espírito Santo ilumina o entendimento e forma o intérprete, mas não legitima sentidos contrários ao texto.',
        'Tradições e confissões servem como testemunhas subordinadas e podem ser corrigidas pela Escritura.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Pressuposto reformado não é licença para decidir o resultado antes da leitura',
      paragrafos: [
        'A analogia da fé pode ser mal usada quando o intérprete força uma passagem a repetir sua formulação dogmática preferida. O uso responsável é diferente: doutrina e exegese entram em relação de correção contínua, sempre sob a autoridade final da Escritura.',
        'Assim, a confissão oferece uma gramática teológica de leitura, não uma lista de respostas para cada versículo. Um texto difícil precisa ser realmente analisado. Se nossa primeira leitura entra em tensão com ensino bíblico claro, a tensão é motivo para voltar aos dados, não para apagar a passagem nem para abandonar imediatamente a coerência canônica.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u2-a1',
      titulo: 'Atividade — tornar o pressuposto visível',
      enunciado: 'Um leitor afirma: “Não tenho pressupostos; apenas leio o que está escrito”. Avalie a afirmação e formule uma resposta reformada que não caia em relativismo.',
      itens: ['Mostre por que a neutralidade absoluta é implausível.', 'Indique como pressupostos podem ser criticados.', 'Explique por que isso não torna todas as leituras equivalentes.'],
      resposta: 'Todo leitor possui pré-compreensões linguísticas, culturais e teológicas. Elas devem ser reconhecidas e submetidas ao texto, à comparação canônica e à crítica de outros leitores. O fato de haver pressupostos não elimina evidência textual: interpretações continuam podendo ser mais ou menos adequadas à gramática, ao gênero, ao contexto e à totalidade da Escritura.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Neutralidade absoluta não é o ideal reformado; submissão consciente ao texto é.',
        'Inspiração e autoria humana são afirmadas juntas.',
        'Perspicuidade não significa simplicidade uniforme.',
        'Iluminação não substitui exegese.',
        'Confissões são úteis e subordinadas à Escritura.'
      ],
    },
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Capítulo I para inspiração, autoridade, perspicuidade, suficiência e regra de interpretação.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência primária reformada para Escritura, testemunho do Espírito e conhecimento de Deus.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio metodológico para condições e princípios da interpretação.' }
  ],
  atualizadoEm: '2026-09-10',
};
