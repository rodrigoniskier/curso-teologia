import { verbetePorId } from './catalogo';
import type { VerbeteResumo } from '../tipos';

interface RegistroBusca {
  id: string;
  /** Texto já normalizado e sem acentos, gerado no build. */
  texto: string;
  /** Texto original usado apenas para produzir o trecho contextual. */
  bruto: string;
}

export interface Achado {
  verbete: VerbeteResumo;
  trecho?: string;
}

let indicePromise: Promise<RegistroBusca[]> | undefined;

function semAcento(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function carregarIndice(): Promise<RegistroBusca[]> {
  if (!indicePromise) {
    indicePromise = fetch('/indice-busca.json').then(async (r) => {
      if (!r.ok) throw new Error(`Falha ao carregar índice de busca: HTTP ${r.status}`);
      return (await r.json()) as RegistroBusca[];
    });
  }
  return indicePromise;
}

export async function buscarVerbetes(consulta: string, limite = 8): Promise<Achado[]> {
  const q = semAcento(consulta.trim());
  if (q.length < 3) return [];

  try {
    const indice = await carregarIndice();
    const achados: Achado[] = [];
    for (const registro of indice) {
      if (!registro.texto.includes(q)) continue;
      const verbete = verbetePorId.get(registro.id);
      if (!verbete) continue;

      const j = semAcento(registro.bruto).indexOf(q);
      const trecho =
        j === -1
          ? undefined
          : (j > 40 ? '…' : '') +
            registro.bruto.slice(Math.max(0, j - 40), j + q.length + 70).trim() +
            '…';
      achados.push({ verbete, trecho });
      if (achados.length >= limite) break;
    }
    return achados;
  } catch (erro) {
    console.error(erro);
    return [];
  }
}
