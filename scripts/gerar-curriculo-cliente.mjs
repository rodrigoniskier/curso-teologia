import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = join(RAIZ, 'src', 'dados', 'ementas.json');
const RESUMO = join(RAIZ, 'src', 'infra', 'curriculo-gerado.json');
const DIR_DISCIPLINAS = join(RAIZ, 'public', 'disciplinas');

// ementas.json já é o produto final do pipeline PDF -> extração -> reconstrução
// de layouts irregulares. Nenhum patch curricular é aplicado no cliente.
const disciplinas = JSON.parse(await readFile(BASE, 'utf8'));

const resumo = disciplinas.map((d) => ({
  codigo: d.codigo,
  titulo: d.titulo,
  departamento: d.departamento,
  sigla: d.sigla,
  eletiva: d.eletiva,
  preRequisito: d.preRequisito,
  ementa: d.ementa,
  paginaPdf: d.paginaPdf,
  quantidadeUnidades: d.unidades.length,
}));

const estatisticas = {
  disciplinas: disciplinas.length,
  unidades: disciplinas.reduce((n, d) => n + d.unidades.length, 0),
  referencias: disciplinas.reduce(
    (n, d) => n + d.bibliografia.basica.length + d.bibliografia.complementar.length,
    0,
  ),
};

await mkdir(dirname(RESUMO), { recursive: true });
await rm(DIR_DISCIPLINAS, { recursive: true, force: true });
await mkdir(DIR_DISCIPLINAS, { recursive: true });
await writeFile(RESUMO, JSON.stringify({ disciplinas: resumo, estatisticas }, null, 2) + '\n');
for (const disciplina of disciplinas) {
  await writeFile(join(DIR_DISCIPLINAS, `${disciplina.codigo}.json`), JSON.stringify(disciplina) + '\n');
}

console.log(`✓ currículo cliente gerado: ${disciplinas.length} disciplinas`);
console.log(`  ${relative(RAIZ, RESUMO)} · navegação leve`);
console.log(`  ${relative(RAIZ, DIR_DISCIPLINAS)}/*.json · programa completo sob demanda`);
