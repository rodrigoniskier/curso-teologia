import { biblioteca as bibliotecaPrincipal } from './biblioteca';
import { bibliotecaExtra } from './biblioteca-extra';
import { bibliotecaFinal } from './biblioteca-final';
import { bibliotecaAprofundamento } from './biblioteca-aprofundamento';
import { bibliotecaHistoriaModerna } from './biblioteca-historia-moderna';
import { bibliotecaReforma } from './biblioteca-reforma';
import { bibliotecaFilosofia } from './biblioteca-filosofia';
import { bibliotecaLinguas } from './biblioteca-linguas';

/** Acervo completo consumido pela interface. */
export const biblioteca = [
  ...bibliotecaPrincipal,
  ...bibliotecaExtra,
  ...bibliotecaFinal,
  ...bibliotecaAprofundamento,
  ...bibliotecaHistoriaModerna,
  ...bibliotecaReforma,
  ...bibliotecaFilosofia,
  ...bibliotecaLinguas,
];

export const porDisciplina = (codigo: string) =>
  biblioteca.filter((o) => o.disciplinas.includes(codigo));

export type { ObraLivre } from './biblioteca';
