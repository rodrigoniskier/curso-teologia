import ementasJson from '../dados/ementas.json';
import ementasCorrecoesJson from '../dados/ementas-correcoes.json';
import catalogoJson from '../conteudo/catalogo-gerado.json';
import type { Disciplina, VerbeteResumo } from '../tipos';

const correcoesEmenta = new Map<string, Partial<Disciplina>>(
  (ementasCorrecoesJson as Array<Partial<Disciplina> & { codigo: string }>).map((d) => [d.codigo, d]),
);

export const disciplinas = (ementasJson as Disciplina[]).map((d) => ({
  ...d,
  ...(correcoesEmenta.get(d.codigo) ?? {}),
}));

/**
 * Índice leve gerado a partir dos próprios arquivos de conteúdo. Não contém
 * blocos nem fontes completas, por isso pode permanecer no bundle inicial.
 */
export const verbetes = catalogoJson as VerbeteResumo[];

export const ORDEM_DEPARTAMENTOS = [
  'Teologia Exegética',
  'Teologia Sistemática',
  'Teologia Histórica',
  'Teologia Pastoral',
  'Cultura Geral',
] as const;

export interface Departamento {
  nome: string;
  sigla: string;
  disciplinas: Disciplina[];
}

export const departamentos: Departamento[] = ORDEM_DEPARTAMENTOS.map((nome) => {
  const ds = disciplinas.filter((d) => d.departamento === nome);
  return { nome, sigla: ds[0]?.sigla ?? '', disciplinas: ds };
}).filter((d) => d.disciplinas.length > 0);

export const porCodigo = new Map(disciplinas.map((d) => [d.codigo, d]));
export const verbetePorId = new Map(verbetes.map((v) => [v.id, v]));

export function verbetesDe(codigo: string): VerbeteResumo[] {
  return verbetes.filter((v) => v.disciplina === codigo);
}

export const estatisticas = {
  disciplinas: disciplinas.length,
  unidades: disciplinas.reduce((n, d) => n + d.unidades.length, 0),
  referencias: disciplinas.reduce(
    (n, d) => n + d.bibliografia.basica.length + d.bibliografia.complementar.length,
    0,
  ),
  verbetes: verbetes.length,
};
