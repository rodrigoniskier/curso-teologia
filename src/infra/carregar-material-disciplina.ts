import type { MaterialDisciplina } from '../tipos';

type ModuloMaterialDisciplina = { material: MaterialDisciplina };
type Carregador = () => Promise<unknown>;

const modulos = import.meta.glob('../materiais-disciplinas/**/*.ts') as Record<string, Carregador>;
const porCodigo = new Map<string, Carregador>();

for (const [caminho, carregar] of Object.entries(modulos)) {
  const nome = caminho.split('/').pop()?.replace(/\.ts$/, '').toUpperCase();
  if (nome) porCodigo.set(nome, carregar);
}

export async function carregarMaterialDisciplina(codigo: string): Promise<MaterialDisciplina | undefined> {
  const carregar = porCodigo.get(codigo.toUpperCase());
  if (!carregar) return undefined;
  const modulo = (await carregar()) as Partial<ModuloMaterialDisciplina>;
  return modulo.material;
}
