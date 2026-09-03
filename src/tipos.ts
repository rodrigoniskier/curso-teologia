/** Modelo de dados do portal. */

export type Idioma = 'pt' | 'en' | 'de' | 'nl' | 'es' | 'la' | 'fr' | 'grc' | 'he';

export type TipoFonte =
  | 'obra-primaria'
  | 'traducao'
  | 'livro'
  | 'artigo'
  | 'verbete'
  | 'relatorio'
  | 'curso'
  | 'documento'
  | 'acervo';

export type NivelAcesso = 'livre' | 'cadastro' | 'parcial';

export interface Fonte {
  id: string;
  autor: string;
  ano?: string;
  titulo: string;
  publicacao?: string;
  url: string;
  idioma: Idioma;
  tipo: TipoFonte;
  acesso: NivelAcesso;
  nota?: string;
}

export type Bloco =
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'secao'; titulo: string; nivel?: 2 | 3 }
  | { tipo: 'citacao'; texto: string; autor: string; obra?: string; fonteId?: string }
  | { tipo: 'lista'; itens: string[]; ordenada?: boolean }
  | { tipo: 'passagem'; referencia: string; texto: string }
  | { tipo: 'definicao'; termo: string; texto: string }
  | { tipo: 'termo'; termo: string; texto: string }
  | { tipo: 'pastoral'; texto: string }
  | { tipo: 'controversia'; titulo: string; posicoes: { escola: string; sintese: string }[] };

export interface Verbete {
  id: string;
  disciplina: string;
  unidade?: number;
  titulo: string;
  subtitulo?: string;
  objetivo: string;
  blocos: Bloco[];
  fontes: Fonte[];
  verMais?: string[];
  atualizadoEm: string;
}

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
  arquivo: string;
  exportado: string;
}

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

/**
 * Material pedagógico para disciplinas cujo programa oficial não possui
 * unidades numeradas (especialmente estágios). `ementaCoberta` deve reproduzir
 * literalmente a ementa oficial; isso permite validar cobertura sem inventar
 * unidades que não existem no currículo.
 */
export interface MaterialDisciplina {
  id: string;
  disciplina: string;
  titulo: string;
  objetivo: string;
  ementaCoberta: string;
  blocos: BlocoMaterialUnidade[];
  fontes: Fonte[];
  atualizadoEm: string;
}

export type NaturezaDisciplina = 'conteudo' | 'idioma' | 'estagio';

export type AvaliacaoId = 'av1' | 'av2';
export type LetraAlternativa = 'A' | 'B' | 'C' | 'D' | 'E';
export type TipoItemAvaliativo = 'resposta-unica' | 'resposta-multipla' | 'assercao-razao';
export type NivelBloom = 'lembrar' | 'compreender' | 'aplicar' | 'analisar' | 'avaliar' | 'criar';
export type NivelDificuldade = 'extremamente-facil' | 'facil' | 'media' | 'dificil' | 'extremamente-dificil';

export interface AlternativaMultiplaEscolha {
  letra: LetraAlternativa;
  texto: string;
  justificativa: string;
}

export interface QuestaoMultiplaEscolha {
  id: string;
  disciplina: string;
  avaliacao: AvaliacaoId;
  /** Ausente quando o programa oficial não possui unidades numeradas. */
  unidade?: number;
  tipoItem: TipoItemAvaliativo;
  tema: string;
  taxonomiaBloom: NivelBloom;
  nivelDificuldade: NivelDificuldade;
  referenciais: string[];
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
  /** `ementa-integral` é usado apenas quando não existem unidades oficiais. */
  escopo: 'unidades' | 'ementa-integral';
  status: StatusModuloAvaliativo;
  questoes: QuestaoMultiplaEscolha[];
}
