import ementasJson from '../dados/ementas.json';
import type { Disciplina, Verbete } from '../tipos';

import { prolegomenos } from './sistematica/prolegomenos';
import { revelacao } from './sistematica/revelacao';
import { inspiracao } from './sistematica/inspiracao';
import { atributos } from './sistematica/atributos';
import { trindade } from './sistematica/trindade';
import { decretos } from './sistematica/decretos';
import { providencia } from './sistematica/providencia';
import { imagemDeDeus } from './sistematica/imagem-de-deus';
import { pessoaDeCristo } from './sistematica/pessoa-de-cristo';
import { hermeneutica } from './exegetica/hermeneutica';

/** Currículo oficial da JET/IPB, extraído do Conteúdo Programático (2ª ed., 2018). */
export const disciplinas = ementasJson as Disciplina[];

/** Verbetes já redigidos. Cresce a cada ciclo de trabalho. */
export const verbetes: Verbete[] = [
  prolegomenos,
  revelacao,
  inspiracao,
  atributos,
  trindade,
  decretos,
  providencia,
  imagemDeDeus,
  pessoaDeCristo,
  hermeneutica,
];

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

export function verbetesDe(codigo: string): Verbete[] {
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
  fontes: new Set(verbetes.flatMap((v) => v.fontes.map((f) => f.url))).size,
};
