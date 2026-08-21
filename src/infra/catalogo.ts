import catalogoJson from '../conteudo/catalogo-gerado.json';
import curriculoJson from './curriculo-gerado.json';
import type { VerbeteResumo } from '../tipos';

export interface DisciplinaResumo {
  codigo: string;
  titulo: string;
  departamento: string;
  sigla: string;
  eletiva: boolean;
  preRequisito: string;
  ementa: string;
  paginaPdf: number;
  quantidadeUnidades: number;
}

interface CurriculoCliente {
  disciplinas: DisciplinaResumo[];
  estatisticas: {
    disciplinas: number;
    unidades: number;
    referencias: number;
  };
}

const curriculo = curriculoJson as CurriculoCliente;
export const disciplinas = curriculo.disciplinas;

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
  disciplinas: DisciplinaResumo[];
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
  ...curriculo.estatisticas,
  verbetes: verbetes.length,
};
