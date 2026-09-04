import type { MaterialUnidade } from '../tipos';
import { chaveMaterialDoCaminho, chaveMaterialUnidade } from './chave-material-unidade';

type ModuloMaterial = { material?: unknown; default?: unknown };
type CarregadorMaterial = () => Promise<ModuloMaterial>;

/**
 * Os materiais seguem src/materiais/<codigo-em-minusculas>/u<numero>.ts.
 * O índice é derivado dos caminhos reais retornados pelo Vite; assim o
 * carregamento não depende de zero à esquerda (u1.ts e u01.ts resolvem para
 * a mesma unidade lógica) e cada aula continua sendo um chunk independente.
 *
 * O contrato canônico dos arquivos é `export const material = { ... }`, o
 * mesmo usado pelo validador e pelo carregador de materiais de disciplinas.
 * O fallback para `default` mantém compatibilidade com módulos antigos sem
 * enfraquecer o contrato validado para os arquivos versionados atuais.
 */
const modulos = import.meta.glob<ModuloMaterial>('../materiais/*/u*.ts');
const porUnidade = new Map<string, CarregadorMaterial>();
const cache = new Map<string, Promise<MaterialUnidade | undefined>>();

for (const [caminho, carregar] of Object.entries(modulos)) {
  const chave = chaveMaterialDoCaminho(caminho);
  if (!chave) continue;

  if (porUnidade.has(chave)) {
    throw new Error(`Mais de um material resolve para a mesma unidade: ${chave}`);
  }
  porUnidade.set(chave, carregar);
}

export function carregarMaterialUnidade(
  codigo: string,
  unidade: number,
): Promise<MaterialUnidade | undefined> {
  const chave = chaveMaterialUnidade(codigo, unidade);
  const existente = cache.get(chave);
  if (existente) return existente;

  const promessa = (async () => {
    const carregar = porUnidade.get(chave);
    if (!carregar) return undefined;

    const modulo = await carregar();
    const valor = modulo.material ?? modulo.default;
    if (!valor || typeof valor !== 'object') {
      throw new Error(`Material sem export nomeado \"material\" válido: ${chave}`);
    }
    return valor as MaterialUnidade;
  })();

  cache.set(chave, promessa);
  void promessa.catch(() => {
    if (cache.get(chave) === promessa) cache.delete(chave);
  });
  return promessa;
}
