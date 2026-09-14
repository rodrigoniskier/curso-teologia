import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u14-projeto-comunicacao-plano',
  disciplina: 'TP55',
  unidade: 14,
  titulo: 'Elaboração de um projeto de comunicação para uma igreja local 2',
  objetivo: 'Converter o diagnóstico da unidade anterior em arquitetura de canais, responsabilidades, calendário e fluxo editorial sustentável.',
  topicosCobertos: ['Projeto de uso de várias mídias para a divulgação da igreja e evangelização'],
  blocos: [
    { tipo: 'texto', titulo: '1. Cada canal precisa de uma função', paragrafos: [
      'Depois do diagnóstico, o projeto escolhe meios. A melhor arquitetura raramente é “estar em todos”. Um site pode guardar informação estável; mensagem pode entregar avisos urgentes; vídeo pode explicar; impresso pode servir presença local; rede social pode favorecer descoberta. Canais complementares reduzem a tentativa de fazer tudo em um só lugar.',
      'Para cada meio devem existir público, finalidade, responsável, frequência e condição de encerramento. Canal sem responsável é uma dívida futura; canal sem finalidade é apenas ruído institucional.'
    ] },
    { tipo: 'quadro', titulo: 'Matriz editorial', itens: [
      'Canal: onde a comunicação será publicada ou distribuída.',
      'Função: descoberta, informação, ensino, convite, relacionamento ou arquivo.',
      'Público prioritário: quem precisa daquele canal.',
      'Responsável: quem produz, revisa, aprova e responde.',
      'Cadência: frequência realista, não idealizada.',
      'Integração: para qual canal próprio ou ação presencial o conteúdo conduz.',
      'Critério de encerramento: quando o canal deixa de justificar sua manutenção.'
    ] },
    { tipo: 'texto', titulo: '2. Governança protege mensagem e equipe', paragrafos: [
      'Um plano editorial precisa deixar claro quem fala em nome da igreja e quem apenas executa uma tarefa técnica. Designer, fotógrafo ou voluntário de mídia não devem ser obrigados a decidir sozinhos questões doutrinárias, disciplinares ou institucionais.',
      'O calendário também deve respeitar capacidade. É melhor um canal simples, regular e correto do que uma rede de perfis abandonados. Planejamento inclui férias, substituições, arquivos de senha, propriedade das contas e continuidade quando o voluntário sair.'
    ] },
    { tipo: 'atividade', id: 'tp55-u14-a1', titulo: 'Atividade — matriz de quatro canais', enunciado: 'A partir do briefing da U13, escolha no máximo quatro meios e preencha função, público, responsável, cadência e integração.', itens: ['Inclua pelo menos um canal próprio.', 'Não duplique a mesma função sem justificativa.', 'Indique quem aprova conteúdo institucional.', 'Defina a frequência que a equipe realmente consegue sustentar.'], resposta: 'A resposta deve formar um sistema, não uma coleção de perfis. Um exemplo seria: site para referência estável; lista de mensagens para avisos; vídeo quinzenal para ensino; impresso local para alcance territorial. Cada peça aponta para contato, culto ou conteúdo mais completo conforme a finalidade.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Canais devem ter funções distintas e complementares.', 'Governança editorial protege voluntários e instituição.', 'Sustentabilidade faz parte da qualidade do plano.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência para responsabilidades institucionais e conciliares.' },
    { id: 'ipb-portal-comunicacao-2026', autor: 'Igreja Presbiteriana do Brasil', ano: '2026', titulo: 'Portal oficial da Igreja Presbiteriana do Brasil', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Exemplo contemporâneo de integração entre portal, notícia, vídeo, rádio e jornal denominacional.' }
  ],
  atualizadoEm: '2026-09-11',
};