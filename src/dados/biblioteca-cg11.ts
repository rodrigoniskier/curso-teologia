import type { ObraLivre } from './biblioteca';

/** Fonte aberta específica para Antropologia Geral e da Religião (CG11). */
export const bibliotecaCg11: ObraLivre[] = [
  {
    id: 'ibge-brasil-500-povoamento',
    autor: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
    ano: '2007',
    titulo: 'Brasil: 500 anos de povoamento',
    publicacao: 'IBGE',
    url: 'https://biblioteca.ibge.gov.br/visualizacao/livros/liv6687.pdf',
    idioma: 'pt',
    acesso: 'livre',
    disciplinas: ['CG11'],
    nota: 'Acervo oficial do IBGE sobre a formação populacional e cultural brasileira, com seções sobre povos indígenas, população negra, imigração e diferentes grupos que contribuíram para a formação histórica do país. Serve à exigência explícita da ementa de CG11 sobre influências indígenas, africanas e fluxos migratórios.',
    base: 'edição autorizada',
  },
];
