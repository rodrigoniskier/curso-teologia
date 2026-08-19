import { biblioteca as bibliotecaPrincipal } from './biblioteca';
import { bibliotecaExtra } from './biblioteca-extra';

/** Acervo completo consumido pela interface. */
export const biblioteca = [...bibliotecaPrincipal, ...bibliotecaExtra];

export const porDisciplina = (codigo: string) =>
  biblioteca.filter((o) => o.disciplinas.includes(codigo));

export type { ObraLivre } from './biblioteca';
