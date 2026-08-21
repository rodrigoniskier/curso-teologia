import assert from 'node:assert/strict';
import test from 'node:test';

import { removerMarcacaoEnfase } from './texto-busca.mjs';

test('remove ênfase forte sem interromper uma expressão pesquisável', () => {
  assert.equal(removerMarcacaoEnfase('o **único** modo'), 'o único modo');
});

test('remove itálico e preserva o texto ao redor', () => {
  assert.equal(
    removerMarcacaoEnfase('a expressão *sola Scriptura* orienta o argumento'),
    'a expressão sola Scriptura orienta o argumento',
  );
});

test('preserva texto sem marcação', () => {
  assert.equal(removerMarcacaoEnfase('justificação pela fé'), 'justificação pela fé');
});
