import { verbetePorId, verbetes } from './catalogo';
import type { VerbeteResumo } from '../tipos';

export interface RelacoesVerbete {
  /** Relações escolhidas editorialmente no próprio verbete. */
  diretas: VerbeteResumo[];
  /** Verbetes que apontam para este e, portanto, oferecem a volta recíproca. */
  inversas: VerbeteResumo[];
}

/**
 * Resolve `verMais` como grafo navegável em duas direções sem carregar o corpo
 * dos verbetes relacionados. A reciprocidade continua sendo propriedade da
 * interface, mas agora opera apenas sobre metadados leves.
 */
export function relacoesDe(id: string): RelacoesVerbete {
  const atual = verbetePorId.get(id);
  if (!atual) return { diretas: [], inversas: [] };

  const idsDiretos = new Set(atual.verMais ?? []);
  const diretas = [...idsDiretos]
    .map((alvo) => verbetePorId.get(alvo))
    .filter((v): v is VerbeteResumo => Boolean(v));

  const inversas = verbetes.filter(
    (v) => v.id !== id && !idsDiretos.has(v.id) && (v.verMais ?? []).includes(id),
  );

  return { diretas, inversas };
}
