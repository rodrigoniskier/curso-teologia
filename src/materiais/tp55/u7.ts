import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u7-sites-blogs',
  disciplina: 'TP55',
  unidade: 7,
  titulo: 'Comunicação e informação em novas tecnologias 2',
  objetivo: 'Planejar site ou blog eclesiástico como canal próprio, consultável e sustentável para evangelização, edificação e informação institucional.',
  topicosCobertos: ['A utilização de sites e blogs , como criar um blog e como utilizar o blog ou site para evangelizar e edificar'],
  blocos: [
    { tipo: 'texto', titulo: '1. O valor estratégico do canal próprio', paragrafos: [
      'Site e blog oferecem uma vantagem que redes sociais não garantem: a igreja controla arquitetura, permanência e organização do conteúdo. Eles funcionam bem como referência estável para doutrina, localização, agenda, contatos, textos, materiais de estudo e respostas a perguntas frequentes.',
      'Criar um blog ou site começa menos pela ferramenta e mais pela arquitetura da informação. O visitante precisa reconhecer rapidamente quem é a igreja, no que crê, onde está, quando se reúne e como pode entrar em contato.'
    ] },
    { tipo: 'quadro', titulo: 'Estrutura mínima sustentável', itens: [
      'Identidade e breve apresentação doutrinária.',
      'Horários, endereço e formas de contato.',
      'Página de liderança e canais oficiais.',
      'Agenda ou notícias apenas se houver responsável por atualizá-las.',
      'Biblioteca de estudos, artigos ou sermões quando a igreja realmente puder mantê-la.',
      'Política de privacidade e cuidado com dados pessoais quando houver formulários.'
    ] },
    { tipo: 'texto', titulo: '2. Evangelizar e edificar pela busca', paragrafos: [
      'Conteúdo permanente permite responder perguntas que pessoas já estão fazendo. Um artigo claro sobre graça, sofrimento, batismo, culto ou como visitar a igreja pode servir por anos, sobretudo quando título e texto usam linguagem compreensível para quem ainda não domina o vocabulário presbiteriano.',
      'Edificação digital não deve ser confundida com substituição da igreja visível. Um bom site conduz a pessoa à Palavra, à congregação e ao cuidado pastoral; não cria uma comunidade virtual autossuficiente em que ninguém conhece, disciplina ou serve ninguém.'
    ] },
    { tipo: 'atividade', id: 'tp55-u7-a1', titulo: 'Atividade — arquitetura de um site local', enunciado: 'Desenhe o menu principal de um site de igreja com no máximo seis itens.', itens: ['Inclua informação para visitantes.', 'Inclua identidade doutrinária.', 'Inclua um caminho para conteúdo de edificação.', 'Elimine seções que a igreja não conseguirá manter.'], resposta: 'Uma solução possível: Início; Quem Somos; No que Cremos; Cultos e Agenda; Estudos e Sermões; Contato/Como Chegar. Um menu menor, atualizado e claro é superior a muitas páginas abandonadas.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Site próprio reduz dependência de plataformas.', 'Arquitetura de informação vem antes da ferramenta.', 'Conteúdo digital serve à igreja visível; não a substitui.'] }
  ],
  fontes: [
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Livro IV como referência para a natureza e centralidade da igreja visível.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência institucional para responsabilidade pública e governo eclesiástico.' }
  ],
  atualizadoEm: '2026-09-11',
};