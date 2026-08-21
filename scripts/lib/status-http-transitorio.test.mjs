import test from 'node:test';
import assert from 'node:assert/strict';
import { statusHttpTransitorio } from './status-http-transitorio.mjs';

test('repete respostas de proteção, limitação e indisponibilidade temporária', () => {
  for (const status of [403, 408, 425, 429, 500, 503, 599]) {
    assert.equal(statusHttpTransitorio(status), true, `HTTP ${status}`);
  }
});

test('mantém respostas definitivas fora da política de retry', () => {
  for (const status of [200, 301, 400, 401, 404, 410, 422]) {
    assert.equal(statusHttpTransitorio(status), false, `HTTP ${status}`);
  }
});
