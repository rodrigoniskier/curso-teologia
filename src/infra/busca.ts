import { verbetePorId } from './catalogo';
import type { VerbeteResumo } from '../tipos';

interface RegistroBuscaSerializado {
  id: string;
  /** Texto original usado tanto na busca quanto no trecho contextual. */
  texto: string;
}

interface RegistroBusca extends RegistroBuscaSerializado {
  /** Cópia sem acentos criada uma vez, apenas em memória. */
  normalizado: string;
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
    const carregamento = fetch('/indice-busca.json').then(async (r) => {
      if (!r.ok) throw new Error(`Falha ao carregar índice de busca: HTTP ${r.status}`);
      const registros = (await r.json()) as RegistroBuscaSerializado[];
      return registros.map((registro) => ({
        ...registro,
        normalizado: semAcento(registro.texto),
      }));
    });
    indicePromise = carregamento;
    void carregamento.catch(() => {
      if (indicePromise === carregamento) indicePromise = undefined;
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
      if (!registro.normalizado.includes(q)) continue;
      const verbete = verbetePorId.get(registro.id);
      if (!verbete) continue;

      const j = registro.normalizado.indexOf(q);
      const trecho =
        j === -1
          ? undefined
          : (j > 40 ? '…' : '') +
            registro.texto.slice(Math.max(0, j - 40), j + q.length + 70).trim() +
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
