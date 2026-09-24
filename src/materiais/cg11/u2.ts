import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u2-cultura-material-imaterial',
  disciplina: 'CG11',
  unidade: 2,
  titulo: 'Cultura material e imaterial',
  objetivo: 'Compreender como objetos, espaços, práticas, memórias, símbolos e valores se articulam na formação cultural, inclusive no caso brasileiro.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Material e imaterial não são mundos separados', paragrafos: [
      'Cultura material inclui artefatos, construções, vestimentas, instrumentos, alimentos preparados e outros objetos produzidos ou transformados por grupos humanos. Esses objetos não falam sozinhos: recebem significado em práticas, memórias e relações sociais.',
      'Cultura imaterial inclui língua, narrativas, valores, regras, músicas, ritos, conhecimentos e símbolos transmitidos socialmente. Na prática, as duas dimensões se entrelaçam: um templo é construção material e, ao mesmo tempo, organiza memória, autoridade, estética e pertencimento.'
    ] },
    { tipo: 'quadro', titulo: 'Ler um artefato cultural', itens: [
      'Descrever o objeto ou espaço antes de atribuir significado.',
      'Identificar quem o produz, usa, transmite ou preserva.',
      'Perguntar quais narrativas e valores o grupo associa a ele.',
      'Distinguir origem histórica de significado atual: uma forma pode mudar de sentido ao longo do tempo.'
    ] },
    { tipo: 'texto', titulo: '2. A formação cultural brasileira', paragrafos: [
      'A cultura brasileira resulta de encontros, conflitos e intercâmbios entre povos indígenas, populações africanas trazidas sob escravidão, colonizadores europeus e sucessivos fluxos migratórios. Essa formação não deve ser descrita como mistura homogênea: houve assimetrias de poder, resistência, tradução e apropriação.',
      'A contribuição indígena e africana aparece em vocabulário, alimentação, técnicas, religiosidade, música, organização do espaço, memória e costumes; imigrações posteriores acrescentaram novas redes familiares, econômicas, linguísticas e religiosas. O estudo antropológico procura reconhecer essas camadas sem reduzir nenhuma delas a folclore.'
    ] },
    { tipo: 'atividade', id: 'cg11-u2-a1', titulo: 'Atividade — objeto e significado', enunciado: 'Escolha um objeto, alimento, celebração ou espaço conhecido em sua região e analise suas dimensões material e imaterial.', itens: ['Descreva a dimensão material.', 'Identifique sentidos e memórias associados.', 'Indique quais grupos participaram historicamente de sua formação.'], resposta: 'A resposta deve distinguir o objeto de seus significados e reconhecer que práticas culturais podem resultar de múltiplos encontros históricos, com continuidades e mudanças de sentido.' }
  ],
  fontes: [
    { id: 'ibge-brasil-500-povoamento', autor: 'Instituto Brasileiro de Geografia e Estatística (IBGE)', ano: '2000', titulo: 'Brasil: 500 anos de povoamento', publicacao: 'IBGE', url: 'https://brasil500anos.ibge.gov.br/pt/estatisticas-do-povoamento', idioma: 'pt', tipo: 'acervo', acesso: 'livre', nota: 'Fonte oficial para povos indígenas, população negra, imigração e formação histórica brasileira.' },
    { id: 'lery-pt', autor: 'Jean de Léry', ano: '1578', titulo: 'História de uma viagem feita à terra do Brasil', publicacao: 'Internet Archive', url: 'https://archive.org/details/historiadeumavia00lery', idioma: 'pt', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte histórica para observar descrição cultural do Brasil do século XVI, lida criticamente como documento de seu tempo.' }
  ],
  atualizadoEm: '2026-09-24',
};
