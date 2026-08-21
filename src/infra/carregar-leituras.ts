import type { ObraLivre } from '../dados/biblioteca';

let moduloPromise: Promise<typeof import('../dados/biblioteca-completa')> | undefined;

function carregarModulo(): Promise<typeof import('../dados/biblioteca-completa')> {
  if (moduloPromise) return moduloPromise;

  const carregamento = import('../dados/biblioteca-completa');
  moduloPromise = carregamento;
  void carregamento.catch(() => {
    if (moduloPromise === carregamento) moduloPromise = undefined;
  });
  return carregamento;
}

export async function carregarLeituras(codigo: string): Promise<ObraLivre[]> {
  const { porDisciplina } = await carregarModulo();
  return porDisciplina(codigo);
}
