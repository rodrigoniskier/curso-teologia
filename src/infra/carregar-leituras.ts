import type { ObraLivre } from '../dados/biblioteca';

let moduloPromise: Promise<typeof import('../dados/biblioteca-completa')> | undefined;

function carregarModulo() {
  if (!moduloPromise) moduloPromise = import('../dados/biblioteca-completa');
  return moduloPromise;
}

export async function carregarLeituras(codigo: string): Promise<ObraLivre[]> {
  const { porDisciplina } = await carregarModulo();
  return porDisciplina(codigo);
}
