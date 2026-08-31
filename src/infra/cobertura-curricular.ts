import cobertura from '../dados/cobertura-curricular.json';
import type { Disciplina } from '../tipos';

const concluidasPorCodigo = cobertura.unidadesConcluidas as Record<string, number[]>;
const semUnidadesConcluidas = new Set(cobertura.disciplinasSemUnidadesConcluidas as string[]);

export function unidadesConcluidasDe(codigo: string): number[] {
  return [...(concluidasPorCodigo[codigo] ?? [])].sort((a, b) => a - b);
}

export function unidadeEstaConcluida(codigo: string, unidade: number): boolean {
  return concluidasPorCodigo[codigo]?.includes(unidade) ?? false;
}

export function disciplinaSemUnidadesEstaConcluida(codigo: string): boolean {
  return semUnidadesConcluidas.has(codigo);
}

export interface CoberturaDisciplina {
  totalUnidades: number;
  unidadesConcluidas: number[];
  quantidadeConcluida: number;
  percentual: number;
  concluida: boolean;
  semUnidadesOficiais: boolean;
}

/**
 * A cobertura é deliberadamente explícita. Ter um verbete ancorado numa unidade
 * não certifica que todos os tópicos dela estejam plenamente produzidos.
 */
export function coberturaDaDisciplina(
  disciplina: Pick<Disciplina, 'codigo' | 'unidades'>,
): CoberturaDisciplina {
  const totalUnidades = disciplina.unidades.length;
  const unidadesConcluidas = unidadesConcluidasDe(disciplina.codigo).filter((numero) =>
    disciplina.unidades.some((u) => u.numero === numero),
  );

  if (totalUnidades === 0) {
    const concluida = disciplinaSemUnidadesEstaConcluida(disciplina.codigo);
    return {
      totalUnidades: 0,
      unidadesConcluidas: [],
      quantidadeConcluida: 0,
      percentual: concluida ? 100 : 0,
      concluida,
      semUnidadesOficiais: true,
    };
  }

  const quantidadeConcluida = unidadesConcluidas.length;
  return {
    totalUnidades,
    unidadesConcluidas,
    quantidadeConcluida,
    percentual: (quantidadeConcluida / totalUnidades) * 100,
    concluida: quantidadeConcluida === totalUnidades,
    semUnidadesOficiais: false,
  };
}

export const estatisticasCoberturaRegistrada = {
  unidadesConcluidas: Object.values(concluidasPorCodigo).reduce((n, unidades) => n + unidades.length, 0),
  disciplinasSemUnidadesConcluidas: semUnidadesConcluidas.size,
};
