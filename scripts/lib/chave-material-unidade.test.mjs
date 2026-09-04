import test from 'node:test';
import assert from 'node:assert/strict';
import {
  chaveMaterialDoCaminho,
  chaveMaterialUnidade,
} from '../../src/infra/chave-material-unidade.ts';

test('normaliza código e número da unidade', () => {
  assert.equal(chaveMaterialUnidade('CG01', 1), 'cg01:1');
  assert.equal(chaveMaterialUnidade('tp09', 12), 'tp09:12');
});

test('resolve arquivos com e sem zero à esquerda para a mesma unidade lógica', () => {
  assert.equal(chaveMaterialDoCaminho('../materiais/cg01/u1.ts'), 'cg01:1');
  assert.equal(chaveMaterialDoCaminho('../materiais/cg01/u01.ts'), 'cg01:1');
  assert.equal(chaveMaterialDoCaminho('../materiais/tp09/u12.ts'), 'tp09:12');
});

test('ignora caminhos que não seguem a convenção de materiais', () => {
  assert.equal(chaveMaterialDoCaminho('../conteudo/cg01/u1.ts'), undefined);
  assert.equal(chaveMaterialDoCaminho('../materiais/cg01/aula1.ts'), undefined);
});
