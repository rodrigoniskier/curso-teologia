import { politicaAvaliativa } from './configuracao-curricular';
import { coberturaDaDisciplina } from '../infra/cobertura-curricular';
import type { AvaliacaoId, Disciplina, ModuloAvaliativo } from '../tipos';

function modulo(
  disciplina: Disciplina,
  id: AvaliacaoId,
  inicioUnidade: number,
  fimUnidade: number,
): ModuloAvaliativo {
  const unidadesAlvo = disciplina.unidades
    .filter((u) => u.numero >= inicioUnidade && u.numero <= fimUnidade)
    .map((u) => u.numero);
  const unidadesForaDoEscopo = disciplina.unidades
    .filter((u) => u.numero > politicaAvaliativa.av2.fimUnidade)
    .map((u) => u.numero);
  const cobertura = coberturaDaDisciplina(disciplina);

  let status: ModuloAvaliativo['status'];
  if (disciplina.unidades.length === 0) {
    status = 'sem-unidades-oficiais';
  } else if (unidadesAlvo.length === 0) {
    status = 'sem-unidades-na-faixa';
  } else if (unidadesAlvo.every((numero) => cobertura.unidadesConcluidas.includes(numero))) {
    // A estrutura existe, mas o banco de questões permanece vazio até uma etapa
    // editorial posterior e deliberada.
    status = 'pronto-para-elaboracao';
  } else {
    status = 'aguardando-conteudo';
  }

  return {
    id,
    rotulo: id === 'av1' ? 'AV1' : 'AV2',
    disciplina: disciplina.codigo,
    inicioUnidade,
    fimUnidade,
    unidadesAlvo,
    unidadesForaDoEscopo,
    status,
    questoes: [],
  };
}

/**
 * Gera dois módulos avaliativos para TODA disciplina do currículo. O módulo é
 * estrutural; não gera questões e não transforma ausência de unidade oficial em
 * conteúdo inventado.
 */
export function avaliacoesDaDisciplina(disciplina: Disciplina): ModuloAvaliativo[] {
  return [
    modulo(
      disciplina,
      'av1',
      politicaAvaliativa.av1.inicioUnidade,
      politicaAvaliativa.av1.fimUnidade,
    ),
    modulo(
      disciplina,
      'av2',
      politicaAvaliativa.av2.inicioUnidade,
      politicaAvaliativa.av2.fimUnidade,
    ),
  ];
}

export function avaliacaoDaDisciplina(
  disciplina: Disciplina,
  id: string,
): ModuloAvaliativo | undefined {
  return avaliacoesDaDisciplina(disciplina).find((avaliacao) => avaliacao.id === id);
}
