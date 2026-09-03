import type { MaterialUnidade } from '../tipos';

type ModuloMaterial = { default?: unknown };

/**
 * Convenção permanente: src/materiais/<codigo-em-minusculas>/uNN.ts.
 * Cada aula é um chunk independente e só é baixada ao abrir a unidade.
 */
const modulos = import.meta.glob<ModuloMaterial>('../materiais/*/u*.ts');
const cache = new Map<string, Promise<MaterialUnidade | undefined>>();

function chaveDe(codigo: string, unidade: number): string {
  return `../materiais/${codigo.toLowerCase()}/u${String(unidade).padStart(2, '0')}.ts`;
}

export function carregarMaterialUnidade(
  codigo: string,
  unidade: number,
): Promise<MaterialUnidade | undefined> {
  const chave = chaveDe(codigo, unidade);
  const existente = cache.get(chave);
  if (existente) return existente;

  const promessa = (async () => {
    const carregar = modulos[chave];
    if (!carregar) return undefined;
    const modulo = await carregar();
    const valor = modulo.default;
    if (!valor || typeof valor !== 'object') {
      throw new Error(`Material sem export default válido: ${chave}`);
    }
    return valor as MaterialUnidade;
  })();

  cache.set(chave, promessa);
  void promessa.catch(() => {
    if (cache.get(chave) === promessa) cache.delete(chave);
  });
  return promessa;
}
