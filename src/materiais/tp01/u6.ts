import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u6-ordenacao',
  disciplina: 'TP01',
  unidade: 6,
  titulo: 'Ordenação',
  objetivo: 'Compreender a ordenação para o Sagrado Ministério como ato público da Igreja que reconhece, examina e investe o candidato no ofício, sem fabricar vocação por cerimônia.',
  topicosCobertos: ['Ordenação para o Sagrado Ministério'],
  blocos: [
    { tipo: 'texto', titulo: '1. Ordenação conclui um processo de discernimento', paragrafos: [
      'Na tradição presbiteriana, a ordenação ocorre depois de desejo, observação, formação, exame e prova. O concílio não começa o discernimento no dia da cerimônia; reconhece publicamente que julga o candidato chamado e qualificado para um ofício concreto.',
      'Isso impede duas distorções. A primeira trata a ordenação como transmissão automática de uma graça ministerial independente de caráter e verdade. A segunda a reduz a formalidade decorativa depois de uma decisão privada já consumada.'
    ] },
    { tipo: 'quadro', titulo: 'Etapas que dão sentido à ordenação', itens: [
      'Desejo: o candidato se oferece e examina seus motivos diante de Deus.',
      'Observação: a igreja conhece vida, família, serviço, doutrina e relacionamentos.',
      'Formação: conhecimentos e competências são desenvolvidos.',
      'Exame e prova: concílios testam doutrina, experiência religiosa, capacidade e maturidade.',
      'Chamado e ordenação: a Igreja reconhece uma relação concreta de serviço e investe o ministro.'
    ] },
    { tipo: 'texto', titulo: '2. A imposição de mãos não é mágica nem vazia', paragrafos: [
      'A imposição de mãos é sinal público de reconhecimento, continuidade e responsabilidade eclesiástica. Ela não transforma um homem desqualificado em ministro legítimo por automatismo, mas também não é gesto sem conteúdo: a Igreja assume responsabilidade por quem examina e ordena.',
      'Por isso ordenação e prestação de contas caminham juntas. A mesma Igreja que reconhece o ministro possui dever de supervisioná-lo, corrigi-lo e, quando necessário, discipliná-lo segundo a Palavra e a ordem constitucional.'
    ] },
    { tipo: 'atividade', id: 'tp01-u6-a1', titulo: 'Atividade — cerimônia e realidade eclesiástica', enunciado: 'Um candidato afirma que, depois de ordenado, nenhuma avaliação posterior de sua doutrina ou caráter pode questionar seu ministério. Avalie a afirmação.', itens: ['Explique o que a ordenação reconhece.', 'Mostre por que o ofício continua responsável diante da Igreja.', 'Distinga permanência do chamado e impunidade ministerial.'], resposta: 'A ordenação é reconhecimento público e investimento no ofício, não concessão de imunidade. O ministro permanece sujeito à Escritura, aos votos assumidos e à disciplina da Igreja. A seriedade da ordenação aumenta, e não elimina, a prestação de contas.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Ordenação é ato da Igreja sob a Palavra.', 'Ela reconhece e investe; não substitui qualificações nem produz chamado por automatismo.', 'O ministro ordenado permanece sujeito a supervisão e disciplina.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para candidatura, licenciatura, experiência e ordenação ao Ministério da Palavra.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV, cap. 3', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Exposição clássica sobre chamado legítimo e investidura ministerial.' }
  ],
  atualizadoEm: '2026-09-11',
};
