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
  /** Unidade da ementa que este verbete cobre. */
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
