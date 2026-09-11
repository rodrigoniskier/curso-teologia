import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u8-redes-sociais-facebook',
  disciplina: 'TP55',
  unidade: 8,
  titulo: 'Comunicação e informação em novas tecnologias 3',
  objetivo: 'Compreender redes sociais e o caso Facebook como ambientes de distribuição terceirizada, aplicando critérios de identidade, interação, privacidade e governança.',
  topicosCobertos: ['A utilização das redes sociais e como usar o Facebook'],
  blocos: [
    { tipo: 'texto', titulo: '1. Rede social não é apenas mural digital', paragrafos: [
      'Redes sociais combinam publicação, relacionamento, recomendação automática e circulação por compartilhamento. Isso muda a comunicação: uma mensagem preparada para os membros pode alcançar estranhos; uma resposta particular pode tornar-se captura de tela; e o alcance depende em grande parte de regras que a igreja não controla.',
      'O Facebook é um exemplo histórico importante da transição entre páginas institucionais, grupos, eventos, vídeo e distribuição algorítmica. Aprender apenas onde clicar envelhece rápido; aprender a distinguir página pública, comunidade, evento, mensagem e anúncio continua útil.'
    ] },
    { tipo: 'quadro', titulo: 'Uso institucional responsável', itens: [
      'Defina claramente quais perfis e páginas são oficiais.',
      'Separe comunicação pública de dados pastorais ou disciplinares.',
      'Determine quem pode publicar e quem responde em nome da igreja.',
      'Não exponha crianças, enfermos ou aconselhados sem autorização adequada.',
      'Use eventos e avisos para facilitar participação real, não para simular comunidade.',
      'Mantenha informações essenciais também em canal próprio da igreja.'
    ] },
    { tipo: 'texto', titulo: '2. Interação pública exige prudência pastoral', paragrafos: [
      'Comentários e mensagens podem abrir portas legítimas para perguntas e contato, mas nem todo assunto deve ser resolvido diante da audiência. Dúvidas doutrinárias gerais podem receber resposta pública; conflitos pessoais, disciplina, aconselhamento e dados sensíveis pedem outro canal.',
      'A igreja também precisa resistir à pressão de publicar continuamente apenas para permanecer visível. Regularidade é útil; produção vazia para alimentar algoritmo transforma a ferramenta em senhor do calendário.'
    ] },
    { tipo: 'atividade', id: 'tp55-u8-a1', titulo: 'Atividade — triagem de interações', enunciado: 'Classifique quatro mensagens recebidas numa página: pedido de horário, dúvida sobre batismo, acusação contra um membro e pedido de aconselhamento conjugal.', itens: ['O que pode ser respondido publicamente?', 'O que deve migrar para canal privado?', 'Quem precisa assumir a resposta?'], resposta: 'Horário pode ser respondido publicamente. Dúvida doutrinária geral pode receber resposta pública e link para material mais completo. Acusação contra membro e aconselhamento conjugal devem sair imediatamente do espaço público e ser encaminhados à liderança/pessoa responsável segundo a natureza do caso.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Rede social amplia circulação e reduz controle sobre contexto.', 'Governança de conta é parte da governança institucional.', 'Nem toda interação pública deve receber resposta pública.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência para responsabilidade institucional e relações de governo eclesiástico.' },
    { id: 'catecismo-maior', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'O Catecismo Maior de Westminster', publicacao: 'Monergismo', url: 'https://www.monergismo.com/textos/catecismos/catecismomaior_westminster.htm', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'O tratamento do nono mandamento informa veracidade, reputação e prudência na comunicação pública.' }
  ],
  atualizadoEm: '2026-09-11',
};