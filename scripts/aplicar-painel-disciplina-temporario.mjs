import { readFile, writeFile } from 'node:fs/promises';

const caminho = new URL('../src/paginas/Disciplina.tsx', import.meta.url);
let s = await readFile(caminho, 'utf8');

const importAlvo = "import { Verbete } from '../componentes/Verbete';\n";
if (!s.includes("PainelCurricular")) {
  if (!s.includes(importAlvo)) throw new Error('import de Verbete não encontrado');
  s = s.replace(
    importAlvo,
    importAlvo +
      "import { PainelCurricular } from '../componentes/PainelCurricular';\n" +
      "import { ProgramaUnidades } from '../componentes/ProgramaUnidades';\n",
  );
}

const inserirPainel = "      </header>\n\n      {vs.length > 0 && (";
if (!s.includes('<PainelCurricular disciplina={d} />')) {
  if (!s.includes(inserirPainel)) throw new Error('ponto de inserção do painel não encontrado');
  s = s.replace(
    inserirPainel,
    "      </header>\n\n      <PainelCurricular disciplina={d} />\n\n      {vs.length > 0 && (",
  );
}

const inicio = s.indexOf('      {d.unidades.length > 0 && (');
const fimMarcador = '      {livres.length > 0 && (';
const fim = s.indexOf(fimMarcador, inicio);
if (inicio >= 0) {
  if (fim < 0) throw new Error('fim da seção de unidades não encontrado');
  s = s.slice(0, inicio) + '      <ProgramaUnidades disciplina={d} />\n\n' + s.slice(fim);
}

await writeFile(caminho, s);
console.log('Disciplina.tsx integrado ao painel curricular e ao rastreador por unidade.');
