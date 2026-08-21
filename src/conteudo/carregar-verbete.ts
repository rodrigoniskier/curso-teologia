import { verbetePorId } from './catalogo';
import type { Verbete } from '../tipos';

type ModuloVerbete = Record<string, unknown>;

/**
 * Cada arquivo de conteúdo vira um chunk independente. O mapa de funções é
 * pequeno: o módulo só é baixado quando `carregarVerbete` chama seu loader.
 */
const modulos = import.meta.glob<ModuloVerbete>([
  './exegetica/*.ts',
  './sistematica/*.ts',
  './historica/*.ts',
  './pastoral/*.ts',
  './geral/*.ts',
]);

const cache = new Map<string, Promise<Verbete | undefined>>();

export function carregarVerbete(id: string): Promise<Verbete | undefined> {
  const existente = cache.get(id);
  if (existente) return existente;

  const promessa = (async () => {
    const meta = verbetePorId.get(id);
    if (!meta) return undefined;
    const carregar = modulos[meta.arquivo];
    if (!carregar) throw new Error(`Módulo não encontrado para ${id}: ${meta.arquivo}`);

    const modulo = await carregar();
    const valor = modulo[meta.exportado];
    if (!valor || typeof valor !== 'object') {
      throw new Error(`Export ${meta.exportado} não encontrado em ${meta.arquivo}`);
    }
    return valor as Verbete;
  })();

  cache.set(id, promessa);
  return promessa;
}
