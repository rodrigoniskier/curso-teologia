import { biblioteca as bibliotecaPrincipal } from './biblioteca';
import { bibliotecaExtra } from './biblioteca-extra';
import { bibliotecaFinal } from './biblioteca-final';

/** Acervo completo consumido pela interface. */
export const biblioteca = [...bibliotecaPrincipal, ...bibliotecaExtra, ...bibliotecaFinal];

export const porDisciplina = (codigo: string) =>
  biblioteca.filter((o) => o.disciplinas.includes(codigo));

export type { ObraLivre } from './biblioteca';
