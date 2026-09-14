import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u6-video-youtube',
  disciplina: 'TP55',
  unidade: 6,
  titulo: 'Comunicação e informação em novas tecnologias 1',
  objetivo: 'Planejar canais e vídeos para YouTube distinguindo finalidade, formato, público, distribuição e responsabilidade editorial.',
  topicosCobertos: ['Vídeos pelo Youtube, como criar canais de vídeo e divulgá-los e quais tipos de vídeo e mensagens podem ser transmitidos pelo Youtube'],
  blocos: [
    { tipo: 'texto', titulo: '1. Canal é compromisso editorial', paragrafos: [
      'Criar um canal de vídeo é tecnicamente simples; sustentá-lo é uma decisão institucional. Antes da abertura é preciso definir responsável, finalidade, público, frequência possível, política de comentários, direitos sobre música e imagens e critérios para retirada ou correção de conteúdo.',
      'YouTube pode hospedar sermões, aulas, entrevistas, transmissões, testemunhos, explicações doutrinárias, cobertura de eventos e informação institucional. Esses gêneros não devem ser confundidos: uma gravação integral de culto cumpre função diferente de um vídeo explicativo de três minutos.'
    ] },
    { tipo: 'quadro', titulo: 'Fluxo básico de publicação', itens: [
      'Defina a finalidade pastoral ou informacional do vídeo.',
      'Escolha formato e duração compatíveis com a finalidade.',
      'Prepare roteiro, captação de áudio e imagem e autorização de participantes quando necessária.',
      'Publique com título e descrição que expliquem honestamente o conteúdo.',
      'Divulgue em canais próprios da igreja, sem depender exclusivamente da recomendação algorítmica.',
      'Revise comentários, correções e manutenção do acervo depois da publicação.'
    ] },
    { tipo: 'texto', titulo: '2. Divulgação não é manipulação', paragrafos: [
      'Título e miniatura precisam ajudar o público a reconhecer o conteúdo; não devem prometer uma controvérsia, milagre, segredo ou resultado que o vídeo não entrega. O ganho de clique obtido por exagero cobra seu preço na credibilidade da igreja.',
      'Métricas como visualização e retenção descrevem comportamento na plataforma. Elas podem ajudar a diagnosticar clareza e distribuição, mas não medem conversão, maturidade, comunhão ou fidelidade bíblica.'
    ] },
    { tipo: 'atividade', id: 'tp55-u6-a1', titulo: 'Atividade — desenhar um canal', enunciado: 'Projete um canal para uma igreja local que só consegue produzir dois vídeos por mês.', itens: ['Defina dois formatos sustentáveis.', 'Defina quem aprova e quem publica.', 'Escolha um canal próprio para anunciar os vídeos.', 'Defina uma métrica útil e uma métrica que não deve ser confundida com fruto espiritual.'], resposta: 'Exemplo: aula bíblica curta e registro de palestra; aprovação pastoral/conselho conforme o conteúdo; divulgação pelo site/lista da igreja; taxa de conclusão pode indicar adequação de duração, enquanto número de visualizações não deve ser tratado como evidência de fruto espiritual.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Canal de vídeo exige governança e manutenção.', 'Formato segue finalidade; não o contrário.', 'Divulgação responsável informa sem fabricar expectativa.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência para responsabilidade institucional e governo da igreja.' },
    { id: 'kuyper-calvinismo', autor: 'Abraham Kuyper', ano: '1898', titulo: 'Calvinism: Six Lectures', publicacao: 'Internet Archive', url: 'https://archive.org/details/calvinismsixlect00kuyp', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Enquadramento reformado para cultura, arte e atividade pública.' }
  ],
  atualizadoEm: '2026-09-11',
};