/** Modelo de dados do portal. */

export type Idioma = 'pt' | 'en' | 'de' | 'nl' | 'es' | 'la' | 'fr' | 'grc' | 'he';

export type TipoFonte =
  | 'obra-primaria'   // o próprio autor: Institutas, Suma, Confissões
  | 'traducao'        // tradução de obra primária
  | 'livro'           // monografia ou livro-texto usado como fonte secundária
  | 'artigo'          // artigo acadêmico ou de divulgação
  | 'verbete'         // enciclopédia, dicionário teológico
  | 'relatorio'       // censo, relatório técnico ou publicação institucional de dados
  | 'curso'           // aula, série, currículo
  | 'documento'       // símbolo de fé, ata conciliar, constituição
  | 'acervo';         // biblioteca digital, repositório

export type NivelAcesso = 'livre' | 'cadastro' | 'parcial';

/** Uma referência externa. Toda fonte é auditada pelo script de auditoria. */
export interface Fonte {
  id: string;
  autor: string;
  /** Ano da obra original, não o da edição digital. */
  ano?: string;
  titulo: string;
  /** Onde está hospedado: CCEL, Monergismo, Archive.org... */
  publicacao?: string;
  url: string;
  idioma: Idioma;
  tipo: TipoFonte;
  acesso: NivelAcesso;
  /** Por que esta fonte é confiável e o que ela acrescenta. */
  nota?: string;
}

/**
 * Blocos de um verbete. A ordem importa: o texto é progressivo — parte do
 * problema, percorre a história e a exegese, e só então declara a doutrina.
 */
export type Bloco =
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'secao'; titulo: string; nivel?: 2 | 3 }
  | { tipo: 'citacao'; texto: string; autor: string; obra?: string; fonteId?: string }
  | { tipo: 'lista'; itens: string[]; ordenada?: boolean }
  | { tipo: 'passagem'; referencia: string; texto: string }
  /** O ponto de chegada: a doutrina enunciada em forma declarativa. */
  | { tipo: 'definicao'; termo: string; texto: string }
  /** Distinções escolásticas, termos técnicos, latim. */
  | { tipo: 'termo'; termo: string; texto: string }
  /** Aplicação pastoral — a doutrina levada ao púlpito e à alma. */
  | { tipo: 'pastoral'; texto: string }
  /** Onde as tradições divergem, exposto com honestidade. */
  | { tipo: 'controversia'; titulo: string; posicoes: { escola: string; sintese: string }[] };

export interface Verbete {
  id: string;
  /** Código da disciplina no currículo da JET/IPB, ex.: 'TS01'. */
  disciplina: string;
  /** Unidade da ementa usada como âncora editorial do verbete. Não certifica conclusão da unidade. */
  unidade?: number;
  titulo: string;
  subtitulo?: string;
  /** Uma frase: o que o leitor saberá ao final. */
  objetivo: string;
  blocos: Bloco[];
  fontes: Fonte[];
  /** Verbetes que preparam ou desdobram este. */
  verMais?: string[];
  atualizadoEm: string;
}

/**
 * Parte de um verbete necessária para navegação, listas, relações e busca.
 * O corpo completo é carregado apenas quando a rota do verbete é aberta.
 */
export interface VerbeteResumo {
  id: string;
  disciplina: string;
  unidade?: number;
  titulo: string;
  subtitulo?: string;
  objetivo: string;
  verMais?: string[];
  atualizadoEm: string;
  quantidadeBlocos: number;
  quantidadeFontes: number;
  /** Caminho usado pelo import.meta.glob, relativo a src/conteudo. */
  arquivo: string;
  /** Nome do export que contém o objeto Verbete dentro do módulo. */
  exportado: string;
}

/* ---- currículo oficial (extraído do PDF da JET/IPB) ---- */

export interface Unidade {
  numero: number;
  titulo: string;
  topicos: string[];
}

export interface Disciplina {
  codigo: string;
  titulo: string;
  departamento: string;
  sigla: string;
  eletiva: boolean;
  preRequisito: string;
  ementa: string;
  unidades: Unidade[];
  bibliografia: {
    basica: string[];
    complementar: string[];
  };
  paginaPdf: number;
}

/* ---- material didático por unidade ---- */

/**
 * Blocos próprios de aulas, idiomas e percursos práticos. Eles são separados
 * dos blocos de Verbete para não forçar toda disciplina à forma doutrinária.
 */
export type BlocoMaterialUnidade =
  | { tipo: 'texto'; titulo?: string; paragrafos: string[] }
  | { tipo: 'lista'; titulo?: string; itens: string[]; ordenada?: boolean }
  | { tipo: 'exemplo'; titulo?: string; enunciado: string; explicacao: string }
  | { tipo: 'quadro'; titulo: string; itens: string[] }
  | {
      tipo: 'atividade';
      id: string;
      titulo?: string;
      enunciado: string;
      itens?: string[];
      resposta: string;
    };

/**
 * Aula vinculada a exatamente uma unidade oficial. `topicosCobertos` repete
 * literalmente os tópicos da JET/IPB para permitir validação automatizada de
 * completude sem inferência por palavras-chave.
 */
export interface MaterialUnidade {
  id: string;
  disciplina: string;
  unidade: number;
  titulo: string;
  objetivo: string;
  topicosCobertos: string[];
  blocos: BlocoMaterialUnidade[];
  fontes: Fonte[];
  atualizadoEm: string;
}

/* ---- planejamento curricular integral ---- */

/**
 * A forma pedagógica da disciplina. Idiomas e estágios pertencem ao currículo
 * integral, mas não devem ser forçados ao formato de verbete doutrinário.
 */
export type NaturezaDisciplina = 'conteudo' | 'idioma' | 'estagio';

export type AvaliacaoId = 'av1' | 'av2';
export type LetraAlternativa = 'A' | 'B' | 'C' | 'D' | 'E';

export interface AlternativaMultiplaEscolha {
  letra: LetraAlternativa;
  texto: string;
}

/**
 * Estrutura reservada para as avaliações futuras. Nenhuma questão deve ser
 * criada enquanto o bloco de unidades correspondente não estiver concluído.
 * O par contexto + comando preserva a exigência de itens contextualizados.
 */
export interface QuestaoMultiplaEscolha {
  id: string;
  disciplina: string;
  avaliacao: AvaliacaoId;
  unidade: number;
  contexto: string;
  comando: string;
  alternativas: AlternativaMultiplaEscolha[];
  gabarito: LetraAlternativa;
  justificativa: string;
  atualizadoEm: string;
}

export type StatusModuloAvaliativo =
  | 'aguardando-conteudo'
  | 'pronto-para-elaboracao'
  | 'sem-unidades-na-faixa'
  | 'sem-unidades-oficiais'
  | 'publicado';

export interface ModuloAvaliativo {
  id: AvaliacaoId;
  rotulo: 'AV1' | 'AV2';
  disciplina: string;
  inicioUnidade: number;
  fimUnidade: number;
  unidadesAlvo: number[];
  unidadesForaDoEscopo: number[];
  status: StatusModuloAvaliativo;
  questoes: QuestaoMultiplaEscolha[];
}
