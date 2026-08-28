import type { ObraLivre } from './biblioteca';

/**
 * Fontes abertas acrescentadas nos ciclos de aprofundamento editorial.
 *
 * O arquivo começa pequeno de propósito: ele evita inflar os arquivos históricos
 * da biblioteca e oferece um ponto estável para novas fontes que sejam realmente
 * necessárias ao aprofundamento, sem transformar contagem de obras em meta.
 */
export const bibliotecaAprofundamento: ObraLivre[] = [
  {
    id: 'openstax-psychology-2e',
    autor: 'Rose M. Spielman; William J. Jenkins; Marilyn D. Lovett',
    ano: '2020',
    titulo: 'Psychology 2e',
    publicacao: 'OpenStax, Rice University',
    url: 'https://openstax.org/books/psychology-2e/pages/1-introduction',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TP04', 'CG07'],
    nota: 'Livro-texto universitário aberto usado para caracterizar, em fonte acadêmica acessível, as contribuições e os limites históricos de Freud, Skinner, Jung, Maslow e Rogers. Serve ao portal como referência descritiva, não como norma antropológica ou teológica.',
    base: 'edição autorizada',
  },
  {
    id: 'codigo-civil-br',
    autor: 'Brasil',
    ano: '2002',
    titulo: 'Código Civil — Lei 10.406/2002, texto compilado',
    publicacao: 'Presidência da República',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm',
    idioma: 'pt',
    acesso: 'livre',
    disciplinas: ['TP06', 'CG55'],
    nota: 'Fonte oficial para personalidade jurídica das organizações religiosas, representação, contratos, propriedade e casamento religioso com efeitos civis. É a referência legal primária para distinguir regras denominacionais internas dos efeitos civis produzidos fora da igreja.',
    base: 'edição autorizada',
  },
  {
    id: 'lei-registros-publicos',
    autor: 'Brasil',
    ano: '1973',
    titulo: 'Lei 6.015/1973 — Registros Públicos, texto compilado',
    publicacao: 'Presidência da República',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm',
    idioma: 'pt',
    acesso: 'livre',
    disciplinas: ['TP06'],
    nota: 'Fonte oficial para registro de imóveis e para o registro do casamento religioso com efeitos civis. Permite ensinar as rotinas documentais sem depender de formulários locais ou de instruções desatualizadas.',
    base: 'edição autorizada',
  },
  {
    id: 'ipb-forcas-integracao-2024',
    autor: 'Igreja Presbiteriana do Brasil',
    ano: '2024',
    titulo: 'Sociedades internas, federações e confederações sinodais — Brasil Presbiteriano, agosto de 2024',
    publicacao: 'Igreja Presbiteriana do Brasil',
    url: 'https://www.ipb.org.br/content/conteudos/65cf180f-b9bb-4fd1-b345-16e067f2e8c4_BP-837-agosto-2024-3.pdf',
    idioma: 'pt',
    acesso: 'livre',
    disciplinas: ['TP06'],
    nota: 'Artigo institucional que descreve a estrutura vigente das forças de integração: sociedades internas locais, federações presbiteriais, confederações sinodais e confederações nacionais, relacionando-as à Constituição da IPB e ao GTSI.',
    base: 'edição autorizada',
  },
  {
    id: 'receita-ministro-confissao-130-2021',
    autor: 'Receita Federal do Brasil',
    ano: '2021',
    titulo: 'Solução de Consulta Cosit 130/2021 — Ministro de confissão religiosa',
    publicacao: 'Receita Federal do Brasil',
    url: 'https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?termoBusca=971%252F09',
    idioma: 'pt',
    acesso: 'livre',
    disciplinas: ['TP06'],
    nota: 'Orientação oficial sobre a condição previdenciária do ministro como contribuinte individual e sobre incidência de imposto de renda. É usada para atualizar o tratamento curricular de INSS e IR sem transformar resumo pastoral em consultoria tributária individual.',
    base: 'edição autorizada',
  },
];
