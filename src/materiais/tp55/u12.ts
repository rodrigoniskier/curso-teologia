import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u12-meios-comunicacao-ipb',
  disciplina: 'TP55',
  unidade: 12,
  titulo: 'Meios de comunicação usados pela IPB',
  objetivo: 'Reconhecer os meios denominacionais indicados pela ementa e relacioná-los à estrutura contemporânea de comunicação da IPB, distinguindo registro histórico de situação atual.',
  topicosCobertos: ['Editora Cultura Cristã, a IPBTV, Portal da IPB na internet, Rádio IPB e Jornal Brasil Presbiteriano'],
  blocos: [
    { tipo: 'texto', titulo: '1. A ementa registra uma fotografia institucional', paragrafos: [
      'A unidade enumera Editora Cultura Cristã, IPBTV, Portal da IPB, Rádio IPB e Jornal Brasil Presbiteriano. Nomes, formatos e integrações podem mudar com o tempo; por isso eles devem ser estudados como componentes de um ecossistema denominacional, não como uma lista eterna de marcas.',
      'Em 2026, o portal oficial da IPB apresenta notícias, Brasil Presbiteriano, Canal IPB Oficial e Rádio IPB, além de encaminhar o usuário a outras estruturas da denominação. A Editora Cultura Cristã continua aparecendo na produção e divulgação de conteúdo denominacional. A designação histórica “IPBTV” deve ser relacionada ao atual ambiente oficial de vídeo, e não tratada como se toda nomenclatura permanecesse congelada.'
    ] },
    { tipo: 'quadro', titulo: 'Funções complementares', itens: [
      'Editora Cultura Cristã: publicação e distribuição de material teológico, educacional e eclesiástico.',
      'Canal/IPBTV: comunicação audiovisual, transmissões e acervo de vídeo.',
      'Portal da IPB: referência institucional, notícias, localização, conteúdo e acesso a serviços/canais.',
      'Rádio IPB: programação sonora e transmissão contínua.',
      'Brasil Presbiteriano: jornalismo e registro da vida denominacional.'
    ] },
    { tipo: 'texto', titulo: '2. Comunicação denominacional exige identificação de autoridade', paragrafos: [
      'Quanto mais institucional o canal, maior a necessidade de distinguir informação oficial de opinião pessoal. A página de uma igreja local, o perfil de um pastor, o jornal denominacional e um canal do Supremo Concílio não possuem a mesma autoridade nem representam a mesma instância.',
      'O estudante deve aprender a rastrear autoria, data, órgão responsável e escopo antes de citar uma notícia ou orientação como “posição da IPB”. Comunicação e governo eclesiástico se encontram justamente nesse ponto.'
    ] },
    { tipo: 'atividade', id: 'tp55-u12-a1', titulo: 'Atividade — mapa denominacional', enunciado: 'Construa um mapa simples dos cinco meios exigidos pela ementa e identifique o tipo principal de conteúdo e o órgão ou ambiente institucional a que cada um está ligado.', itens: ['Publicação.', 'Vídeo.', 'Portal.', 'Rádio.', 'Jornal.'], resposta: 'O mapa deve demonstrar funções diferentes e evitar tratar todos os canais como equivalentes. Deve ainda registrar data de consulta, pois nomes, endereços e arranjos institucionais podem mudar.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['A unidade combina memória institucional e leitura do ecossistema atual.', 'Canal oficial precisa ser identificado por autoria e instância.', 'Mudanças de nome não anulam a função comunicacional que precisa ser compreendida.'] }
  ],
  fontes: [
    { id: 'ipb-portal-comunicacao-2026', autor: 'Igreja Presbiteriana do Brasil', ano: '2026', titulo: 'Portal oficial da Igreja Presbiteriana do Brasil', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte oficial contemporânea para os canais denominacionais exibidos no portal.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência normativa para estrutura e competências institucionais da IPB.' }
  ],
  atualizadoEm: '2026-09-11',
};