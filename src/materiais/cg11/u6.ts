import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg11-u6-cultura-transculturalidade',
  disciplina: 'CG11',
  unidade: 6,
  titulo: 'Cultura e transculturalidade',
  objetivo: 'Compreender encontros transculturais, tradução de significados e contextualização, distinguindo evangelho, forma cultural e sincretismo.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Transculturalidade começa quando ninguém é culturalmente neutro', paragrafos: [
      'Encontros transculturais não colocam uma pessoa com cultura diante de outra sem cultura. Missionário, pesquisador, pastor e comunidade local carregam língua, hábitos, estética, hierarquias, memória e expectativas próprias. O primeiro exercício de reflexividade é reconhecer a cultura do observador.',
      'No Brasil, contatos entre povos indígenas, populações africanas, colonizadores europeus e diferentes ondas migratórias produziram traduções, conflitos, resistências e novas formas sociais. Nenhuma dessas contribuições pode ser reduzida a uma lista folclórica: elas atravessam língua, alimentação, parentesco, economia, música, religiosidade e identidade regional.'
    ] },
    { tipo: 'quadro', titulo: 'Tradução cultural e contextualização', itens: [
      'Descrever o significado local antes de avaliar a forma.',
      'Distinguir conteúdo do evangelho de costumes históricos do mensageiro.',
      'Perguntar se a forma escolhida preserva, obscurece ou altera o conteúdo comunicado.',
      'Incluir cristãos locais no discernimento, porque conhecem sentidos que o observador externo pode não perceber.',
      'Aceitar que toda tradução envolve escolhas e precisa ser revista à luz da Escritura e dos efeitos reais na comunidade.'
    ] },
    { tipo: 'texto', titulo: '2. Nem estrangeirização, nem relativismo', paragrafos: [
      'Uma missão pode errar importando costumes próprios como se fossem mandamentos bíblicos. Pode errar também no sentido contrário, aceitando toda prática local apenas por ser cultural. Contextualização crítica procura compreender a prática, avaliá-la biblicamente e decidir o que pode ser mantido, transformado ou abandonado.',
      'Sincretismo não é simplesmente usar uma forma de origem não europeia. O problema aparece quando a forma ou interpretação altera o conteúdo: por exemplo, quando graça passa a funcionar como troca, Cristo ganha mediadores concorrentes ou a fé é tratada como técnica de controle espiritual.'
    ] },
    { tipo: 'atividade', id: 'cg11-u6-a1', titulo: 'Atividade — separar evangelho e costume', enunciado: 'Escolha uma prática eclesiástica que você considera normal e investigue se ela é exigência bíblica, tradição confessional, costume regional ou decisão prudencial.', itens: ['Descreva a prática.', 'Localize sua justificativa.', 'Imagine como poderia ser expressa em outra cultura sem perda do conteúdo.'], resposta: 'A boa resposta reconhece que a cultura do observador também precisa ser analisada. O objetivo é conservar o conteúdo bíblico sem canonizar formas contingentes.' }
  ],
  fontes: [
    { id: 'lery-pt', autor: 'Jean de Léry', ano: '1578', titulo: 'História de uma viagem feita à terra do Brasil', publicacao: 'Internet Archive', url: 'https://archive.org/details/historiadeumavia00lery', idioma: 'pt', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte histórica para encontro intercultural no Brasil, lida criticamente em seu contexto.' },
    { id: 'ibge-brasil-500-povoamento', autor: 'Instituto Brasileiro de Geografia e Estatística (IBGE)', ano: '2007', titulo: 'Brasil: 500 anos de povoamento', publicacao: 'IBGE', url: 'https://biblioteca.ibge.gov.br/visualizacao/livros/liv6687.pdf', idioma: 'pt', tipo: 'acervo', acesso: 'livre', nota: 'Fonte oficial para formação populacional e fluxos migratórios brasileiros.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para liberdade de consciência e critérios normativos subordinados à Escritura.' }
  ],
  atualizadoEm: '2026-09-24',
};
