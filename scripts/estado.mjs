#!/usr/bin/env node
/**
 * Imprime o estado do portal: cobertura por departamento, contagens e idiomas
 * da biblioteca.
 *
 * Existe para que nenhum documento precise guardar esses números à mão. Uma
 * tabela copiada num README ou no CLAUDE.md diverge do repositório em poucos
 * ciclos, e um documento de continuidade que envelhece errado orienta pior do
 * que nenhum. Aqui a fonte é sempre o próprio código.
 *
 *   npm run estado
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

async function arquivosDeConteudo(dir) {
  const saida = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, ent.name);
    if (ent.isDirectory()) saida.push(...(await arquivosDeConteudo(caminho)));
    else if (ent.name.endsWith('.ts') && ent.name !== 'indice.ts') saida.push(caminho);
  }
  return saida;
}

const ementas = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const depPorCodigo = new Map(ementas.map((d) => [d.codigo, d.departamento]));
const discPorDep = new Map();
for (const d of ementas) discPorDep.set(d.departamento, (discPorDep.get(d.departamento) ?? 0) + 1);

const verbPorDep = new Map();
const disciplinasCobertas = new Set();
let verbetes = 0;
for (const f of await arquivosDeConteudo(join(RAIZ, 'src/conteudo'))) {
  const s = await readFile(f, 'utf8');
  const m = s.match(/disciplina:\s*'([^']+)'/);
  if (!m) continue;
  verbetes++;
  disciplinasCobertas.add(m[1]);
  const dep = depPorCodigo.get(m[1]) ?? '(código desconhecido)';
  verbPorDep.set(dep, (verbPorDep.get(dep) ?? 0) + 1);
}

const bib = await readFile(join(RAIZ, 'src/dados/biblioteca.ts'), 'utf8');
const obras = [...bib.matchAll(/^ {4}id: '([^']+)',/gm)].length;
const idiomas = new Map();
for (const [, i] of bib.matchAll(/^ {4}idioma: '([^']+)',/gm))
  idiomas.set(i, (idiomas.get(i) ?? 0) + 1);

const restritos = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/dominios-restritos.json'), 'utf8'),
);

const linhas = [...discPorDep.entries()]
  .map(([dep, nd]) => ({ dep, nd, nv: verbPorDep.get(dep) ?? 0, razao: (verbPorDep.get(dep) ?? 0) / nd }))
  .sort((a, b) => a.razao - b.razao);

console.log(`\n${'DEPARTAMENTO'.padEnd(24)}${'disc'.padStart(5)}${'verb'.padStart(6)}${'v/disc'.padStart(9)}`);
for (const l of linhas)
  console.log(l.dep.padEnd(24) + String(l.nd).padStart(5) + String(l.nv).padStart(6) + l.razao.toFixed(2).padStart(9));

console.log(
  `\nverbetes: ${verbetes}  ·  disciplinas com verbete: ${disciplinasCobertas.size}/${ementas.length}` +
    `  ·  obras na biblioteca: ${obras}`,
);
console.log(
  'idiomas da biblioteca: ' +
    [...idiomas.entries()].sort((a, b) => b[1] - a[1]).map(([i, n]) => `${i} ${n}`).join(' · '),
);
console.log('domínios não auditáveis: ' + (restritos.map((r) => r.dominio).join(', ') || 'nenhum'));
console.log(`\npróximo alvo: ${linhas[0].dep} (menor razão)\n`);
