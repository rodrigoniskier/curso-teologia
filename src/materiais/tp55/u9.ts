import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u9-orkut-twitter',
  disciplina: 'TP55',
  unidade: 9,
  titulo: 'Comunicação e informação em novas tecnologias 4',
  objetivo: 'Cumprir criticamente o tópico curricular sobre Orkut e Twitter, usando essas plataformas como estudo de caso sobre comunidades, micropublicação e obsolescência tecnológica.',
  topicosCobertos: ['Como usar o Orkut e como usar o Twitter'],
  blocos: [
    { tipo: 'texto', titulo: '1. Um tópico curricular que virou fonte histórica', paragrafos: [
      'O Orkut não pode mais ser “usado”: o próprio Google anunciou sua descontinuação para 30 de setembro de 2014. Por isso, cumprir esta unidade com fidelidade em 2026 exige distinguir o texto histórico da competência durável. O caso ensina que currículos organizados por marcas expiram junto com elas.',
      'No Orkut, perfis e comunidades mostraram como identidade, pertencimento e discussão temática podiam ser organizados numa rede social. A competência transferível é compreender comunidades digitais, moderação, reputação, arquivo público e migração quando um serviço desaparece.'
    ] },
    { tipo: 'texto', titulo: '2. Do Twitter à lógica de micropublicação', paragrafos: [
      'O tópico oficial também cita Twitter. A plataforma passou por mudanças de propriedade, nome, funcionalidades e políticas; logo, um tutorial de botões envelheceria rapidamente. O que permanece é a lógica da micropublicação: mensagens breves, circulação pública, resposta rápida, encadeamento e forte dependência de distribuição terceirizada.',
      'Para a igreja, mensagens curtas podem servir a avisos, links, frases de orientação e cobertura de eventos, mas não devem forçar doutrina complexa a caber numa forma que remove qualificações importantes. Quando o conteúdo exige contexto, o post deve conduzir a um texto, vídeo ou conversa mais completos.'
    ] },
    { tipo: 'quadro', titulo: 'Lições que sobrevivem à plataforma', itens: [
      'Comunidade digital precisa de moderação e propósito, independentemente da marca.',
      'Identidade institucional não deve depender de um serviço que pode encerrar ou suspender contas.',
      'Conteúdo curto é porta de entrada, não substituto automático de explicação longa.',
      'Arquive materiais importantes em canal próprio.',
      'Ensine princípios transferíveis; tutoriais de interface devem ser tratados como material temporário.'
    ] },
    { tipo: 'atividade', id: 'tp55-u9-a1', titulo: 'Atividade — transformar tutorial em princípio', enunciado: 'Reescreva “como criar uma comunidade no Orkut” como competência que ainda faça sentido depois do desaparecimento da plataforma.', itens: ['Defina finalidade da comunidade.', 'Defina regras de participação.', 'Defina moderação.', 'Defina plano de preservação/migração.'], resposta: 'A competência durável é projetar e moderar uma comunidade digital: propósito, público, regras, responsáveis, tipos de conteúdo, tratamento de conflito, proteção de dados e plano para migração quando a ferramenta deixar de servir.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O Orkut é agora estudo histórico, não ferramenta disponível.', 'Micropublicação favorece velocidade e concisão, mas reduz contexto.', 'A boa formação ensina propriedades do meio que sobrevivem às marcas.'] }
  ],
  fontes: [
    { id: 'google-adeus-orkut-2014', autor: 'Google Brasil', ano: '2014', titulo: 'Adeus ao Orkut', publicacao: 'Blog do Google Brasil', url: 'https://blog.google/intl/pt-br/novidades/iniciativas/adeus-ao-orkut/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Comunicado oficial sobre a descontinuação do Orkut em 30 de setembro de 2014.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência para responsabilidade institucional da comunicação da igreja.' }
  ],
  atualizadoEm: '2026-09-11',
};