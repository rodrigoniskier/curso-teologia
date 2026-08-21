import test from 'node:test';
import assert from 'node:assert/strict';
import { mapearComConcorrencia } from './mapear-com-concorrencia.mjs';

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test('preserva a ordem da entrada mesmo quando tarefas terminam fora de ordem', async () => {
  const atrasos = [30, 1, 10, 2];
  const resultados = await mapearComConcorrencia(atrasos, 2, async (atraso, indice) => {
    await esperar(atraso);
    return `item-${indice}`;
  });

  assert.deepEqual(resultados, ['item-0', 'item-1', 'item-2', 'item-3']);
});

test('nunca ultrapassa o limite informado', async () => {
  let ativas = 0;
  let maximo = 0;

  await mapearComConcorrencia(Array.from({ length: 12 }), 3, async () => {
    ativas += 1;
    maximo = Math.max(maximo, ativas);
    await esperar(5);
    ativas -= 1;
  });

  assert.equal(maximo, 3);
  assert.equal(ativas, 0);
});

test('rejeita limites inválidos', async () => {
  await assert.rejects(
    mapearComConcorrencia([1], 0, async (item) => item),
    /inteiro positivo/,
  );
});
