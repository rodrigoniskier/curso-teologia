import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u2-modelos-teoricos-comunicacao',
  disciplina: 'TP55',
  unidade: 2,
  titulo: 'Modelos teóricos de comunicação',
  objetivo: 'Comparar meios tradicionais e recentes por propriedades estáveis, evitando organizar a estratégia da igreja por marcas e plataformas passageiras.',
  topicosCobertos: ['Esboço teórico dos principais meios de comunicação na atualidade e contraste entre meios tradicionais e os mais recentes'],
  blocos: [
    { tipo: 'texto', titulo: '1. Um modelo serve para enxergar relações', paragrafos: [
      'Modelos de comunicação simplificam a realidade para tornar visíveis relações entre emissor, mensagem, canal, público, contexto, ruído e feedback. Eles ajudam a diagnosticar falhas, desde que não tratem pessoas como caixas passivas num diagrama.',
      'Meios tradicionais e digitais não são separados apenas por idade. O que realmente muda é a combinação de propriedades: velocidade, permanência, possibilidade de resposta, escala, controle da distribuição e capacidade de segmentação.'
    ] },
    { tipo: 'quadro', titulo: 'Cinco propriedades que atravessam tecnologias', itens: [
      'Síncrono ou assíncrono: exige presença simultânea ou permite acesso posterior?',
      'Efêmero ou permanente: desaparece rapidamente ou permanece pesquisável e citável?',
      'Empurrado ou puxado: chega a quem não procurou ou depende de busca ativa?',
      'Massa ou conversa: fala para muitos ou favorece resposta individual?',
      'Distribuição própria ou terceirizada: a igreja controla a entrega ou depende de algoritmo/plataforma?'
    ] },
    { tipo: 'texto', titulo: '2. Tradicional e recente podem trocar de função', paragrafos: [
      'Rádio ao vivo tende a ser síncrono, efêmero, empurrado e de massa. Um podcast gravado é assíncrono e permanente. Um boletim impresso pode ser empurrado e local; um site é normalmente puxado e globalmente acessível. A categoria “digital” sozinha diz pouco sobre a experiência comunicacional.',
      'A principal mudança contemporânea está no controle da distribuição. Em muitas plataformas a igreja escolhe o que publica, mas não decide quem verá. O sistema de recomendação passa a mediar alcance e pode premiar formas de conteúdo que maximizam retenção sem qualquer relação necessária com fidelidade pastoral.'
    ] },
    { tipo: 'atividade', id: 'tp55-u2-a1', titulo: 'Atividade — classificar meios', enunciado: 'Classifique rádio comunitário ao vivo, boletim impresso, site da igreja e vídeo curto em rede social segundo as cinco propriedades da unidade.', itens: ['Sincronia.', 'Permanência.', 'Modo de descoberta.', 'Tipo de relação.', 'Controle de distribuição.'], resposta: 'Não existe resposta única para todas as configurações, mas a classificação deve explicitar diferenças. Rádio ao vivo tende a síncrono/efêmero/massa; boletim a assíncrono/permanente local; site a assíncrono/permanente/puxado e sob maior controle próprio; rede social a assíncrona ou quase síncrona, permanente ou semiefêmera e com distribuição fortemente terceirizada.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Plataformas mudam; propriedades dos meios permanecem úteis.', 'O canal altera a forma de recepção da mensagem.', 'Controle da distribuição é uma variável pastoral e institucional, não só técnica.'] }
  ],
  fontes: [
    { id: 'kuyper-calvinismo', autor: 'Abraham Kuyper', ano: '1898', titulo: 'Calvinism: Six Lectures', publicacao: 'Internet Archive', url: 'https://archive.org/details/calvinismsixlect00kuyp', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Enquadramento reformado para cultura, arte e atividade pública.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência normativa para responsabilidade institucional e governo da igreja.' }
  ],
  atualizadoEm: '2026-09-11',
};