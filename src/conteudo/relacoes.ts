import { verbetePorId, verbetes } from './indice';
import type { Verbete } from '../tipos';

export interface RelacoesVerbete {
  /** Relações escolhidas editorialmente no próprio verbete. */
  diretas: Verbete[];
  /** Verbetes que apontam para este e, portanto, oferecem a volta recíproca. */
  inversas: Verbete[];
}

/**
 * Resolve `verMais` como grafo navegável em duas direções sem obrigar cada
 * arquivo a duplicar manualmente a relação. A reciprocidade passa a ser uma
 * propriedade da interface, não uma tarefa editorial sujeita a esquecimento.
 */
export function relacoesDe(id: string): RelacoesVerbete {
  const atual = verbetePorId.get(id);
  if (!atual) return { diretas: [], inversas: [] };

  const idsDiretos = new Set(atual.verMais ?? []);
  const diretas = [...idsDiretos]
    .map((alvo) => verbetePorId.get(alvo))
    .filter((v): v is Verbete => Boolean(v));

  const inversas = verbetes.filter(
    (v) => v.id !== id && !idsDiretos.has(v.id) && (v.verMais ?? []).includes(id),
  );

  return { diretas, inversas };
}
