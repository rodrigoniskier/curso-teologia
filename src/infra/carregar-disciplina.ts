import type { Disciplina } from '../tipos';

const cache = new Map<string, Promise<Disciplina | undefined>>();

export function carregarDisciplina(codigo: string): Promise<Disciplina | undefined> {
  const existente = cache.get(codigo);
  if (existente) return existente;

  const promessa = fetch(`/disciplinas/${encodeURIComponent(codigo)}.json`).then(async (r) => {
    if (r.status === 404) return undefined;
    if (!r.ok) throw new Error(`Falha ao carregar disciplina ${codigo}: HTTP ${r.status}`);
    return (await r.json()) as Disciplina;
  });

  cache.set(codigo, promessa);
  return promessa;
}
