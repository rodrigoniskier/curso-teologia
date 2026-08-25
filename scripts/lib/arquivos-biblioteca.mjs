import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Lista módulos que declaram entradas próprias do acervo.
 *
 * `biblioteca-completa.ts` é apenas o agregador consumido pela interface e não
 * deve ser contado novamente. Todo novo `biblioteca-*.ts` passa a entrar nos
 * validadores e diagnósticos sem exigir manutenção de listas paralelas.
 */
export async function arquivosBiblioteca(diretorioDados) {
  const entradas = await readdir(diretorioDados, { withFileTypes: true });
  return entradas
    .filter(
      (entrada) =>
        entrada.isFile() &&
        /^biblioteca(?:-[a-z0-9]+)*\.ts$/i.test(entrada.name) &&
        entrada.name !== 'biblioteca-completa.ts',
    )
    .map((entrada) => join(diretorioDados, entrada.name))
    .sort();
}
