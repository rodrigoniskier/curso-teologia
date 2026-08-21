/**
 * Aplica uma tarefa assíncrona sem ultrapassar o limite de concorrência.
 *
 * Diferentemente de lotes fixos, um novo item começa assim que qualquer vaga
 * fica livre. A saída mantém a ordem original para não alterar relatórios e
 * classificações que dependem da posição de cada entrada.
 */
export async function mapearComConcorrencia(itens, limite, tarefa) {
  if (!Number.isInteger(limite) || limite < 1) {
    throw new RangeError('O limite de concorrência deve ser um inteiro positivo.');
  }

  const resultados = new Array(itens.length);
  let proximo = 0;

  async function trabalhar() {
    while (proximo < itens.length) {
      const indice = proximo++;
      resultados[indice] = await tarefa(itens[indice], indice);
    }
  }

  const trabalhadores = Array.from(
    { length: Math.min(limite, itens.length) },
    () => trabalhar(),
  );
  await Promise.all(trabalhadores);
  return resultados;
}
