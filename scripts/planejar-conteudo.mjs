#!/usr/bin/env node
/**
 * Diagnóstico editorial determinístico, sem acesso à rede e sem dependências.
 *
 * A cobertura por disciplina responde se o portal já começou a tratar aquele
 * componente curricular. Este relatório responde uma pergunta diferente: em
 * quais unidades do programa há um verbete explicitamente ancorado e onde a
 * expansão tende a produzir o maior ganho curricular.
 *
 * Não se presume que uma unidade sem vínculo esteja necessariamente ausente do
 * corpo dos textos. O número é um mapa de rastreabilidade, não uma alegação de
 * completude sem leitura editorial.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR_CONTEUDO = join(RAIZ, 'src/conteudo');

async function arquivosDeConteudo(dir) {
  const saida = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, ent.name);
    if (ent.isDirectory()) saida.push(...(await arquivosDeConteudo(caminho)));
    else if (ent.name.endsWith('.ts') && !['indice.ts', 'relacoes.ts'].includes(ent.name))
      saida.push(caminho);
  }
  return saida.sort();
}

function campo(texto, nome) {
  const achado = texto.match(new RegExp(`\\b${nome}:\\s*'([^']+)'`));
  return achado?.[1];
}

function numero(texto, nome) {
  const achado = texto.match(new RegExp(`\\b${nome}:\\s*(\\d+)`));
  return achado ? Number(achado[1]) : undefined;
}

function contarPalavras(texto) {
  return texto.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
}

function contarFontes(texto) {
  const trecho = texto.match(/\bfontes:\s*\[([\s\S]*?)\n\s*\],?\s*\n};?\s*$/)?.[1] ?? '';
  return trecho.match(/\n\s*{\s*\n\s*id:\s*'/g)?.length ?? 0;
}

const ementasBase = JSON.parse(await readFile(join(RAIZ, 'src/dados/ementas.json'), 'utf8'));
const correcoes = JSON.parse(
  await readFile(join(RAIZ, 'src/dados/ementas-correcoes.json'), 'utf8'),
);
const correcoesPorCodigo = new Map(correcoes.map((d) => [d.codigo, d]));
const ementas = ementasBase.map((d) => ({ ...d, ...(correcoesPorCodigo.get(d.codigo) ?? {}) }));

const verbetes = [];
for (const caminho of await arquivosDeConteudo(DIR_CONTEUDO)) {
  const texto = await readFile(caminho, 'utf8');
  verbetes.push({
    arquivo: relative(RAIZ, caminho).replaceAll('\\', '/'),
    disciplina: campo(texto, 'disciplina'),
    unidade: numero(texto, 'unidade'),
    titulo: campo(texto, 'titulo'),
    palavras: contarPalavras(texto),
    fontes: contarFontes(texto),
  });
}

const verbetesPorDisciplina = new Map();
for (const verbete of verbetes) {
  if (!verbete.disciplina) continue;
  const lista = verbetesPorDisciplina.get(verbete.disciplina) ?? [];
  lista.push(verbete);
  verbetesPorDisciplina.set(verbete.disciplina, lista);
}

const linhas = ementas
  .map((disciplina) => {
    const daDisciplina = verbetesPorDisciplina.get(disciplina.codigo) ?? [];
    const unidadesExistentes = new Set((disciplina.unidades ?? []).map((u) => u.numero));
    const unidadesRepresentadas = new Set(
      daDisciplina.map((v) => v.unidade).filter((u) => unidadesExistentes.has(u)),
    );
    const total = unidadesExistentes.size;
    const representadas = unidadesRepresentadas.size;
    return {
      codigo: disciplina.codigo,
      titulo: disciplina.titulo,
      departamento: disciplina.departamento,
      total,
      representadas,
      lacunas: Math.max(0, total - representadas),
      verbetes: daDisciplina.length,
      palavras: daDisciplina.reduce((soma, v) => soma + v.palavras, 0),
      fontes: daDisciplina.reduce((soma, v) => soma + v.fontes, 0),
    };
  })
  .filter((linha) => linha.verbetes > 0 && linha.total > 0);

const porDepartamento = new Map();
for (const linha of linhas) {
  const atual = porDepartamento.get(linha.departamento) ?? {
    disciplinas: 0,
    unidades: 0,
    representadas: 0,
    verbetes: 0,
  };
  atual.disciplinas++;
  atual.unidades += linha.total;
  atual.representadas += linha.representadas;
  atual.verbetes += linha.verbetes;
  porDepartamento.set(linha.departamento, atual);
}

console.log('\nRASTREABILIDADE CURRICULAR');
console.log(
  `${'DEPARTAMENTO'.padEnd(24)}${'disc'.padStart(6)}${'verb'.padStart(6)}` +
    `${'unid'.padStart(7)}${'repr'.padStart(7)}${'r/unid'.padStart(9)}`,
);
for (const [departamento, dados] of [...porDepartamento].sort((a, b) => a[0].localeCompare(b[0]))) {
  const razao = dados.unidades ? dados.representadas / dados.unidades : 1;
  console.log(
    departamento.padEnd(24) +
      String(dados.disciplinas).padStart(6) +
      String(dados.verbetes).padStart(6) +
      String(dados.unidades).padStart(7) +
      String(dados.representadas).padStart(7) +
      `${(razao * 100).toFixed(1)}%`.padStart(9),
  );
}

const totais = linhas.reduce(
  (acc, linha) => ({
    unidades: acc.unidades + linha.total,
    representadas: acc.representadas + linha.representadas,
  }),
  { unidades: 0, representadas: 0 },
);
const percentual = totais.unidades ? (100 * totais.representadas) / totais.unidades : 100;
console.log(
  `\nUnidades explicitamente representadas: ${totais.representadas}/${totais.unidades} ` +
    `(${percentual.toFixed(1)}%).`,
);
console.log(
  'Este indicador mede vínculos explícitos de metadados; uma unidade sem vínculo pode estar ' +
    'sintetizada em outro verbete e exige conferência editorial.\n',
);

console.log('PRIORIDADES DE EXPANSÃO');
const prioridades = [...linhas]
  .filter((linha) => linha.lacunas > 0)
  .sort(
    (a, b) =>
      b.lacunas - a.lacunas ||
      a.representadas / a.total - b.representadas / b.total ||
      a.palavras - b.palavras ||
      a.codigo.localeCompare(b.codigo),
  )
  .slice(0, 20);
for (const linha of prioridades) {
  console.log(
    `  · ${linha.codigo} — ${linha.titulo}: ${linha.representadas}/${linha.total} unidades, ` +
      `${linha.verbetes} verbete(s), ${linha.fontes} fonte(s)`,
  );
}

console.log('\nVERBETES PARA REVISÃO DE PROFUNDIDADE');
for (const verbete of [...verbetes]
  .sort((a, b) => a.palavras - b.palavras || a.fontes - b.fontes || a.arquivo.localeCompare(b.arquivo))
  .slice(0, 15)) {
  console.log(
    `  · ${verbete.disciplina} — ${verbete.titulo}: ${verbete.palavras} palavras, ` +
      `${verbete.fontes} fonte(s) [${verbete.arquivo}]`,
  );
}
console.log();
