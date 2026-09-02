import plano from './plano-curricular.json';
import type { Disciplina, NaturezaDisciplina } from '../tipos';

const idiomas = new Set(plano.naturezas.idioma);
const estagios = new Set(plano.naturezas.estagio);

export function naturezaDaDisciplina(codigo: string): NaturezaDisciplina {
  if (idiomas.has(codigo)) return 'idioma';
  if (estagios.has(codigo)) return 'estagio';
  return 'conteudo';
}

export function rotuloNatureza(natureza: NaturezaDisciplina): string {
  if (natureza === 'idioma') return 'Percurso de idioma';
  if (natureza === 'estagio') return 'Percurso prático supervisionado';
  return 'Conteúdo teológico e acadêmico';
}

export interface ItemOrdemProducao {
  codigo: string;
  periodo?: string;
  origem: 'historico' | 'curriculo';
  posicao: number;
}

/**
 * A ordem do histórico tem precedência absoluta. Disciplinas que não aparecem
 * nele são anexadas somente ao final, preservando a ordem do currículo oficial.
 */
export function ordemDeProducao(disciplinas: Pick<Disciplina, 'codigo'>[]): ItemOrdemProducao[] {
  const historico = plano.ordemHistorico.map((item, i) => ({
    codigo: item.codigo,
    periodo: item.periodo,
    origem: 'historico' as const,
    posicao: i + 1,
  }));
  const usados = new Set(historico.map((item) => item.codigo));
  const restantes = disciplinas
    .filter((disciplina) => !usados.has(disciplina.codigo))
    .map((disciplina, i) => ({
      codigo: disciplina.codigo,
      origem: 'curriculo' as const,
      posicao: historico.length + i + 1,
    }));
  return [...historico, ...restantes];
}

export const politicaAvaliativa = plano.avaliacoes;
