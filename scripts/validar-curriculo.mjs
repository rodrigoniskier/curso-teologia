#!/usr/bin/env node
/**
 * Valida a estrutura do currículo depois da aplicação das correções auditadas.
 *
 * Este script existe para detectar uma classe de erro que a tipagem não vê:
 * extrações de PDF que continuam sendo JSON válido, mas engolem uma unidade na
 * outra, misturam bibliografia com título ou perdem números no meio da sequência.
 * Foi exatamente o que aconteceu em CG10 e CG13.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoes = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);

const porCodigo = new Map(base.map((d) => [d.codigo, d]));
const erros = [];
const avisos = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

const vistos = new Set();
for (const c of correcoes) {
  if (!c?.codigo) {
    erro('ementas-correcoes.json: correção sem código');
    continue;
  }
  if (vistos.has(c.codigo)) erro(`ementas-correcoes.json: correção duplicada para ${c.codigo}`);
  vistos.add(c.codigo);
  if (!porCodigo.has(c.codigo)) erro(`ementas-correcoes.json: código inexistente ${c.codigo}`);
}

const patchPorCodigo = new Map(correcoes.map((c) => [c.codigo, c]));
const curriculo = base.map((d) => ({ ...d, ...(patchPorCodigo.get(d.codigo) ?? {}) }));

for (const d of curriculo) {
  if (!Array.isArray(d.unidades)) {
    erro(`${d.codigo}: unidades não é array`);
    continue;
  }

  const numeros = d.unidades.map((u) => u.numero);
  if (numeros.some((n) => !Number.isInteger(n) || n < 1))
    erro(`${d.codigo}: número de unidade inválido (${numeros.join(', ')})`);
  if (new Set(numeros).size !== numeros.length)
    erro(`${d.codigo}: números de unidade duplicados (${numeros.join(', ')})`);

  if (numeros.length > 0) {
    const ordenados = [...numeros].sort((a, b) => a - b);
    const esperado = Array.from({ length: ordenados.at(-1) }, (_, i) => i + 1);
    const faltantes = esperado.filter((n) => !ordenados.includes(n));
    if (ordenados[0] !== 1 || faltantes.length > 0)
      aviso(`${d.codigo}: sequência de unidades não contínua; presentes ${ordenados.join(', ')}${faltantes.length ? `; faltam ${faltantes.join(', ')}` : ''}`);
  }

  for (const u of d.unidades) {
    const titulo = String(u.titulo ?? '');
    const topicos = Array.isArray(u.topicos) ? u.topicos.map(String) : [];

    // Uma segunda ocorrência de "Unidade" dentro do título quase sempre indica
    // que o recortador atravessou o começo da próxima unidade. Não bloqueamos a
    // palavra isolada por existir a possibilidade de título legítimo, mas
    // combinações típicas do PDF são tratadas como corrupção estrutural.
    if (/\bUnidade\s+\d+\b/i.test(titulo) || /\bBIBLIOGRAFIA\b/i.test(titulo))
      erro(`${d.codigo} unidade ${u.numero}: título parece conter texto de outra seção: "${titulo}"`);
    if ((titulo.match(/\bUnidade\b/gi) ?? []).length >= 2)
      erro(`${d.codigo} unidade ${u.numero}: múltiplos marcadores "Unidade" no título`);

    for (const t of topicos) {
      if (/\bUnidade\s+\d+\b/i.test(t) || /^BIBLIOGRAFIA\b/i.test(t))
        erro(`${d.codigo} unidade ${u.numero}: tópico parece conter texto de outra seção: "${t}"`);
    }
  }
}

console.log(`✓ ${curriculo.length} disciplinas verificadas após ${correcoes.length} correção(ões) curricular(es).`);
console.log(`✓ Estrutura interna de ${curriculo.reduce((n, d) => n + d.unidades.length, 0)} unidades inspecionada.`);

if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s) de sequência para conferência:`);
  for (const a of avisos) console.log(`  · ${a}`);
}

if (erros.length) {
  console.error(`\n${erros.length} erro(s) estruturais no currículo efetivo:`);
  for (const e of erros) console.error(`  · ${e}`);
  process.exit(1);
}

console.log('\nCurrículo estruturalmente íntegro.\n');
