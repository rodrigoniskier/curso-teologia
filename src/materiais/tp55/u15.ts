import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u15-projeto-comunicacao-avaliacao',
  disciplina: 'TP55',
  unidade: 15,
  titulo: 'Elaboração de um projeto de comunicação para uma igreja local 3',
  objetivo: 'Concluir o projeto multimídia com cronograma, execução piloto, métricas vinculadas aos objetivos e processo explícito de revisão.',
  topicosCobertos: ['Projeto de uso de várias mídias para a divulgação da igreja e evangelização'],
  blocos: [
    { tipo: 'texto', titulo: '1. Projeto só existe quando pode ser executado', paragrafos: [
      'Diagnóstico e matriz editorial precisam virar tarefas: responsáveis, prazos, orçamento, materiais, permissões, canais, calendário e um piloto pequeno. O piloto permite descobrir problemas de carga, clareza e integração antes de transformar uma ideia em compromisso permanente.',
      'O cronograma deve incluir revisão e manutenção. Informação de horário envelhece, pessoas mudam de função, contas perdem acesso e links quebram. Comunicação institucional é processo contínuo, não campanha que termina no lançamento.'
    ] },
    { tipo: 'quadro', titulo: 'Plano de execução', itens: [
      'Entregáveis: páginas, peças, vídeos, impressos ou fluxos que serão produzidos.',
      'Responsáveis e aprovadores: quem faz e quem assume autoridade pelo conteúdo.',
      'Prazos e dependências: o que precisa existir antes de cada publicação.',
      'Recursos: tempo, equipamento, orçamento e competências.',
      'Piloto: versão pequena para testar antes da expansão.',
      'Revisão: data em que o projeto será reavaliado e canais poderão ser encerrados ou ajustados.'
    ] },
    { tipo: 'texto', titulo: '2. Métrica precisa responder ao objetivo', paragrafos: [
      'Curtidas e visualizações são fáceis de obter e difíceis de interpretar. Se o problema era visitante sem informação, mede-se se ele encontrou horário e endereço. Se o objetivo era ampliar acesso a material de ensino, observa-se uso do conteúdo e encaminhamento para estudo, não apenas impressão na tela.',
      'Resultados espirituais não podem ser reduzidos a painel analítico. Conversão, fé, maturidade e perseverança pertencem à obra de Deus e à vida concreta da igreja. Métricas podem avaliar o processo comunicacional; não transformam fruto espiritual em indicador de marketing.'
    ] },
    { tipo: 'atividade', id: 'tp55-u15-a1', titulo: 'Projeto final — plano integrado', enunciado: 'Entregue o projeto iniciado nas U13–U14 em formato executivo de duas a quatro páginas.', itens: ['Diagnóstico e públicos.', 'Objetivo e mensagem central.', 'Matriz de canais.', 'Governança e calendário.', 'Piloto.', 'Métricas ligadas ao objetivo.', 'Data e critérios de revisão.'], resposta: 'O projeto é satisfatório quando cada canal resolve uma necessidade identificada, existe responsável real, a igreja controla ao menos um ponto de presença próprio, a mensagem é fiel e verificável, as métricas correspondem ao objetivo e há plano de revisão ou encerramento. Volume de plataformas não é critério de qualidade.' },
    { tipo: 'quadro', titulo: 'Síntese final', itens: ['Comunicação eclesiástica começa pela missão e pelo problema real.', 'Meios são escolhidos por propriedades, público e finalidade.', 'Governança, manutenção e revisão fazem parte do projeto.', 'Fidelidade não pode ser terceirizada ao algoritmo nem medida por engajamento.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência institucional para responsabilidade e governo da comunicação da igreja.' },
    { id: 'kuyper-calvinismo', autor: 'Abraham Kuyper', ano: '1898', titulo: 'Calvinism: Six Lectures', publicacao: 'Internet Archive', url: 'https://archive.org/details/calvinismsixlect00kuyp', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Enquadramento reformado para presença cristã pública e cultural.' }
  ],
  atualizadoEm: '2026-09-11',
};