export function chaveMaterialUnidade(codigo: string, unidade: number): string {
  return `${codigo.toLowerCase()}:${unidade}`;
}

export function chaveMaterialDoCaminho(caminho: string): string | undefined {
  const match = caminho.match(/\/materiais\/([^/]+)\/u(\d+)\.ts$/);
  if (!match) return undefined;
  return chaveMaterialUnidade(match[1], Number(match[2]));
}
