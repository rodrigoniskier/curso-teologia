import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg06-u2-padroes-abnt',
  disciplina: 'CG06',
  unidade: 2,
  titulo: 'Normas técnicas do trabalho científico: padrões da ABNT',
  objetivo: 'Compreender a finalidade da normalização acadêmica brasileira, reconhecer as principais normas aplicáveis a trabalhos, projetos, citações e referências e aplicar regras vigentes sem confundir ABNT com exigências institucionais locais.',
  topicosCobertos: ['Padrões da ABNT'],
  blocos: [
    { tipo: 'texto', titulo: '1. Normalização serve à verificabilidade', paragrafos: [
      'Normas técnicas não tornam uma pesquisa verdadeira, mas tornam sua apresentação previsível e auditável. Padronização ajuda o leitor a localizar autoria, fonte, edição, seção, tabela e referência sem precisar reaprender o sistema a cada trabalho. Por isso formatação é parte do aparato científico, embora jamais substitua problema, método e argumento.',
      'ABNT é uma família de normas, não uma única “regra de TCC”. Além disso, universidades e seminários podem adotar adaptações institucionais. O estudante deve distinguir três níveis: norma ABNT vigente, manual da instituição e decisões específicas do curso ou orientador. Quando houver diferença, ela precisa ser identificada, não atribuída erroneamente à ABNT.'
    ] },
    { tipo: 'quadro', titulo: 'Mapa normativo mínimo em 2026', itens: [
      'ABNT NBR 14724:2024 — apresentação de trabalhos acadêmicos.',
      'ABNT NBR 15287:2025 — apresentação de projetos de pesquisa.',
      'ABNT NBR 10520:2023 — citações em documentos.',
      'ABNT NBR 6023:2018 — referências.',
      'ABNT NBR 6028:2021 — resumo, resenha e recensão.',
      'Outras normas podem ser necessárias conforme o tipo de documento; sempre confira a versão vigente e o manual institucional.'
    ] },
    { tipo: 'texto', titulo: '2. O que mudou recentemente importa', paragrafos: [
      'O Manual de Normalização da UNIFAL-MG foi revisto em 2025 após a atualização da NBR 14724:2024 e da NBR 15287:2025. Isso ilustra uma regra metodológica importante: materiais antigos podem ensinar princípios úteis e, ao mesmo tempo, conter prescrições formais ultrapassadas.',
      'Um exemplo anterior é a NBR 10520:2023: nas chamadas autor-data entre parênteses, o sobrenome deixou de ser grafado obrigatoriamente em caixa alta no padrão anterior amplamente reproduzido. A lição não é decorar uma mudança isolada, mas nunca escrever “segundo a ABNT” sem saber qual norma e qual edição estão sendo usadas.'
    ] },
    { tipo: 'texto', titulo: '3. Norma técnica não substitui ética de citação', paragrafos: [
      'Uma referência perfeitamente formatada não corrige atribuição falsa, citação de segunda mão apresentada como leitura direta ou paráfrase sem crédito. Normalização organiza a declaração da fonte; integridade acadêmica exige que essa declaração corresponda ao que o pesquisador realmente consultou.',
      'Do mesmo modo, geradores automáticos de referência reduzem trabalho mecânico, mas não decidem corretamente por si mesmos qual é o tipo documental, quem é o autor responsável, qual versão foi consultada ou se a URL aponta para a fonte primária. Automatização deve ser conferida.'
    ] },
    { tipo: 'atividade', id: 'cg06-u2-a1', titulo: 'Atividade — auditar uma regra atribuída à ABNT', enunciado: 'Um colega afirma: “a ABNT exige que todo sobrenome citado entre parênteses seja escrito em CAIXA ALTA”. Como você verificaria essa afirmação em 2026?', itens: ['Identifique qual norma regula citações.', 'Confirme a edição vigente.', 'Compare norma/manual atual com modelos antigos.', 'Separe ABNT de regra institucional.'], resposta: 'A regra deve ser conferida na NBR 10520 vigente e em manual institucional atualizado. A edição de 2023 alterou a prática das chamadas autor-data que era difundida em versões anteriores; portanto, copiar um modelo antigo não basta. Depois, deve-se verificar se o seminário adota alguma adaptação própria.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['ABNT é um conjunto de normas versionadas.', 'Norma, manual institucional e decisão local precisam ser distinguidos.', 'Formatação melhora rastreabilidade, mas não substitui método nem integridade.', 'Sempre registre e confira a versão normativa usada.'] }
  ],
  fontes: [
    { id: 'unifal-normalizacao-2025', autor: 'Universidade Federal de Alfenas', ano: '2025', titulo: 'Manual de normalização e apresentação de trabalhos acadêmicos da UNIFAL-MG: com base nas normas de documentação da ABNT', publicacao: 'Sistema de Bibliotecas da UNIFAL-MG', url: 'https://www.unifal-mg.edu.br/bibliotecas/wp-content/uploads/sites/125/2025/05/Manual-de-normalizacao-2-edicao-revista-e-atualizada-12-05-2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Manual institucional atualizado após NBR 14724:2024 e NBR 15287:2025, com citações, notas e referências.' }
  ],
  atualizadoEm: '2026-09-10',
};
