import ementasJson from '../dados/ementas.json';
import type { Disciplina, Verbete } from '../tipos';

import { prolegomenos } from './sistematica/prolegomenos';
import { revelacao } from './sistematica/revelacao';
import { inspiracao } from './sistematica/inspiracao';
import { atributos } from './sistematica/atributos';
import { trindade } from './sistematica/trindade';
import { decretos } from './sistematica/decretos';
import { providencia } from './sistematica/providencia';
import { imagemDeDeus } from './sistematica/imagem-de-deus';
import { pessoaDeCristo } from './sistematica/pessoa-de-cristo';
import { expiacao } from './sistematica/expiacao';
import { ordoSalutis } from './sistematica/ordo-salutis';
import { justificacao } from './sistematica/justificacao';
import { santificacao } from './sistematica/santificacao';
import { batismo } from './sistematica/batismo';
import { donsEspirituais } from './sistematica/dons-espirituais';
import { milenio } from './sistematica/milenio';
import { principioRegulador } from './sistematica/principio-regulador';
import { cosmovisao } from './sistematica/cosmovisao';
import { subscricaoConfessional } from './sistematica/subscricao-confessional';
import { etica } from './sistematica/etica';
import { teologiaDoCulto } from './sistematica/teologia-do-culto';
import { hermeneutica } from './exegetica/hermeneutica';
import { canonAT } from './exegetica/canon-at';
import { canonNT } from './exegetica/canon-nt';
import { teologiaBiblica } from './exegetica/teologia-biblica';
import { igrejaAntiga } from './historica/igreja-antiga';
import { igrejaImperial } from './historica/igreja-imperial';
import { reforma } from './historica/reforma';
import { homiletica } from './pastoral/homiletica';
import { governoPresbiteriano } from './pastoral/governo-presbiteriano';
import { poimenica } from './pastoral/poimenica';
import { aconselhamento } from './pastoral/aconselhamento';
import { evangelizacao } from './pastoral/evangelizacao';
import { filosofia } from './geral/filosofia';

/** Currículo oficial da JET/IPB, extraído do Conteúdo Programático (2ª ed., 2018). */
export const disciplinas = ementasJson as Disciplina[];

/** Verbetes já redigidos. Cresce a cada ciclo de trabalho. */
export const verbetes: Verbete[] = [
  prolegomenos,
  revelacao,
  inspiracao,
  atributos,
  trindade,
  decretos,
  providencia,
  imagemDeDeus,
  pessoaDeCristo,
  expiacao,
  ordoSalutis,
  justificacao,
  santificacao,
  batismo,
  donsEspirituais,
  milenio,
  principioRegulador,
  cosmovisao,
  subscricaoConfessional,
  etica,
  teologiaDoCulto,
  hermeneutica,
  canonAT,
  canonNT,
  teologiaBiblica,
  igrejaAntiga,
  igrejaImperial,
  reforma,
  homiletica,
  governoPresbiteriano,
  poimenica,
  aconselhamento,
  evangelizacao,
  filosofia,
];

export const ORDEM_DEPARTAMENTOS = [
  'Teologia Exegética',
  'Teologia Sistemática',
  'Teologia Histórica',
  'Teologia Pastoral',
  'Cultura Geral',
] as const;

export interface Departamento {
  nome: string;
  sigla: string;
  disciplinas: Disciplina[];
}

export const departamentos: Departamento[] = ORDEM_DEPARTAMENTOS.map((nome) => {
  const ds = disciplinas.filter((d) => d.departamento === nome);
  return { nome, sigla: ds[0]?.sigla ?? '', disciplinas: ds };
}).filter((d) => d.disciplinas.length > 0);

export const porCodigo = new Map(disciplinas.map((d) => [d.codigo, d]));
export const verbetePorId = new Map(verbetes.map((v) => [v.id, v]));

/**
 * Índice de busca em texto integral.
 *
 * A busca cobria apenas títulos e ementas de disciplina, de modo que nada do
 * que foi escrito nos verbetes era encontrável — quem procurasse "imputação"
 * não chegava à justificação. Aqui se achata todo o texto de cada verbete,
 * inclusive o conteúdo dos blocos, num campo minúsculo e sem acento.
 */
function semAcento(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function textoDoBloco(b: Verbete['blocos'][number]): string {
  switch (b.tipo) {
    case 'paragrafo':
    case 'pastoral':
      return b.texto;
    case 'secao':
      return b.titulo;
    case 'citacao':
      return `${b.texto} ${b.autor} ${b.obra ?? ''}`;
    case 'passagem':
      return `${b.referencia} ${b.texto}`;
    case 'lista':
      return b.itens.join(' ');
    case 'termo':
    case 'definicao':
      return `${b.termo} ${b.texto}`;
    case 'controversia':
      return `${b.titulo} ${b.posicoes.map((p) => `${p.escola} ${p.sintese}`).join(' ')}`;
  }
}

const indiceBusca = verbetes.map((v) => ({
  verbete: v,
  texto: semAcento(
    [
      v.titulo,
      v.subtitulo ?? '',
      v.objetivo,
      v.disciplina,
      ...v.blocos.map(textoDoBloco),
      ...v.fontes.map((f) => `${f.autor} ${f.titulo}`),
    ].join(' '),
  ),
}));

export interface Achado {
  verbete: Verbete;
  /** Trecho ao redor da primeira ocorrência, para mostrar o contexto. */
  trecho?: string;
}

export function buscarVerbetes(consulta: string, limite = 8): Achado[] {
  const q = semAcento(consulta.trim());
  if (q.length < 3) return [];
  const achados: Achado[] = [];
  for (const { verbete, texto } of indiceBusca) {
    const i = texto.indexOf(q);
    if (i === -1) continue;
    // recorta o trecho no texto original, alinhado pela posição no normalizado
    const bruto = [verbete.titulo, verbete.objetivo, ...verbete.blocos.map(textoDoBloco)].join(' ');
    const j = semAcento(bruto).indexOf(q);
    const trecho =
      j === -1
        ? undefined
        : (j > 40 ? '…' : '') +
          bruto.slice(Math.max(0, j - 40), j + q.length + 70).trim() +
          '…';
    achados.push({ verbete, trecho });
    if (achados.length >= limite) break;
  }
  return achados;
}

export function verbetesDe(codigo: string): Verbete[] {
  return verbetes.filter((v) => v.disciplina === codigo);
}

export const estatisticas = {
  disciplinas: disciplinas.length,
  unidades: disciplinas.reduce((n, d) => n + d.unidades.length, 0),
  referencias: disciplinas.reduce(
    (n, d) => n + d.bibliografia.basica.length + d.bibliografia.complementar.length,
    0,
  ),
  verbetes: verbetes.length,
  fontes: new Set(verbetes.flatMap((v) => v.fontes.map((f) => f.url))).size,
};
