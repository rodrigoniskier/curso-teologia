#!/usr/bin/env node
/**
 * Valida a estrutura do currículo FINAL versionado.
 *
 * O pipeline de extração já resolve ligaduras e aplica as reconstruções e
 * saneamentos de layout auditados. Este script deliberadamente não corrige
 * nada: se o JSON final estiver contaminado, a validação deve falhar.
 */
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const curriculo = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const erros = [];
const avisos = [];
const erro = (m) => erros.push(m);
const aviso = (m) => avisos.push(m);

const marcadorOutraSecao = /\bUnidade\s+\d+\b|\bBIBLIOGRAFIA\b|\bPré-requisito\s*:|\bEmenta\s*:/i;
const codigos = new Set();
for (const d of curriculo) {
  if (!d.codigo) erro('disciplina sem código');
  else if (codigos.has(d.codigo)) erro(`código de disciplina duplicado: ${d.codigo}`);
  else codigos.add(d.codigo);

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
    if (marcadorOutraSecao.test(titulo))
      erro(`${d.codigo} unidade ${u.numero}: título parece conter texto de outra seção: "${titulo}"`);
    if ((titulo.match(/\bUnidade\b/gi) ?? []).length >= 2)
      erro(`${d.codigo} unidade ${u.numero}: múltiplos marcadores "Unidade" no título`);
    for (const t of topicos) {
      if (marcadorOutraSecao.test(t))
        erro(`${d.codigo} unidade ${u.numero}: tópico parece conter texto de outra seção: "${t}"`);
    }
  }

  const bibliografia = d.bibliografia ?? {};
  for (const grupo of ['basica', 'complementar']) {
    const itens = Array.isArray(bibliografia[grupo]) ? bibliografia[grupo] : [];
    for (const [i, item] of itens.entries()) {
      const texto = String(item ?? '');
      if (marcadorOutraSecao.test(texto))
        erro(`${d.codigo} bibliografia ${grupo} #${i + 1}: parece conter texto programático de outra seção`);
    }
  }
}

console.log(`✓ ${curriculo.length} disciplinas verificadas diretamente no currículo final.`);
console.log(`✓ Estrutura interna de ${curriculo.reduce((n, d) => n + d.unidades.length, 0)} unidades inspecionada.`);
if (avisos.length) {
  console.log(`\n${avisos.length} aviso(s) de sequência para conferência:`);
  for (const a of avisos) console.log(`  · ${a}`);
}
if (erros.length) {
  console.error(`\n${erros.length} erro(s) estruturais no currículo final:`);
  for (const e of erros) console.error(`  · ${e}`);
  process.exit(1);
}
console.log('\nCurrículo estruturalmente íntegro e sem overlay de execução.\n');
