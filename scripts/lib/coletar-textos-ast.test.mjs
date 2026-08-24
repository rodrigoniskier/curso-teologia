import assert from 'node:assert/strict';
import test from 'node:test';
import ts from 'typescript';

import { coletarTextosAst } from './coletar-textos-ast.mjs';

function inicializadorDaConstante(codigo) {
  const arquivo = ts.createSourceFile(
    'teste.ts',
    codigo,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const declaracao = arquivo.statements[0].declarationList.declarations[0];
  return declaracao.initializer;
}

test('percorre todos os ramos da AST sem parar no primeiro filho', () => {
  const inicializador = inicializadorDaConstante(`
    const verbete = {
      titulo: 'Título',
      blocos: [
        { tipo: 'paragrafo', texto: 'expressão presente apenas no corpo' },
        { tipo: 'termo', termo: 'Sensus literalis', texto: 'segundo ramo' },
      ],
    };
  `);

  assert.deepEqual(coletarTextosAst(inicializador), [
    'Título',
    'paragrafo',
    'expressão presente apenas no corpo',
    'termo',
    'Sensus literalis',
    'segundo ramo',
  ]);
});

test('mantém o acumulador informado pelo chamador', () => {
  const inicializador = inicializadorDaConstante("const bloco = ['um', 'dois'];");
  const acumulador = ['antes'];

  assert.equal(coletarTextosAst(inicializador, acumulador), acumulador);
  assert.deepEqual(acumulador, ['antes', 'um', 'dois']);
});

test('pode excluir metadados técnicos sem perder texto visível', () => {
  const inicializador = inicializadorDaConstante(`
    const fonte = {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      titulo: 'Confissão de Fé de Westminster',
      url: 'https://exemplo.invalid/cfw',
      idioma: 'pt',
      acesso: 'livre',
      nota: 'Texto integral em português.',
    };
  `);

  assert.deepEqual(
    coletarTextosAst(
      inicializador,
      [],
      new Set(['id', 'url', 'idioma', 'acesso']),
    ),
    [
      'Assembleia de Westminster',
      'Confissão de Fé de Westminster',
      'Texto integral em português.',
    ],
  );
});
