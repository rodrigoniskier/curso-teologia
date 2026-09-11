import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u5-comunicacao-publicacoes',
  disciplina: 'TP55',
  unidade: 5,
  titulo: 'A comunicação por publicações',
  objetivo: 'Distinguir funções de revistas, livros e panfletos e adaptar redação, extensão e organização ao meio e ao público sem sacrificar precisão.',
  topicosCobertos: ['Revistas, livros, panfletos, alcance dessa mídia, a importância da boa redação e a adequação da redação ao meio de publicação'],
  blocos: [
    { tipo: 'texto', titulo: '1. O impresso não é um único meio', paragrafos: [
      'Livro, revista e panfleto compartilham papel, mas cumprem tarefas diferentes. O livro suporta desenvolvimento longo e consulta; a revista organiza variedade e periodicidade; o panfleto precisa comunicar uma finalidade restrita com rapidez. Copiar o mesmo texto para os três formatos produz quase sempre material inadequado.',
      'Publicações físicas têm alcance limitado por distribuição, mas podem oferecer permanência, concentração e acesso sem conta, algoritmo ou conexão. Isso as mantém relevantes em contextos locais e para públicos que não dependem de plataformas digitais.'
    ] },
    { tipo: 'quadro', titulo: 'Adequação da redação', itens: [
      'Livro: desenvolva argumento, sinalize capítulos e ofereça referências e índices quando necessário.',
      'Revista: trabalhe hierarquia visual, seções independentes e títulos informativos para leitura não linear.',
      'Panfleto: uma finalidade, poucos dados, linguagem direta e ação claramente identificável.',
      'Em todos: revise nomes, datas, endereços, ortografia, afirmações doutrinárias e permissões de uso de imagens.'
    ] },
    { tipo: 'texto', titulo: '2. Boa redação é serviço ao leitor', paragrafos: [
      'Clareza não significa empobrecer conteúdo. Significa organizar o texto para que o leitor descubra cedo o assunto, acompanhe a progressão e consiga distinguir informação principal de detalhe. Jargão teológico deve ser explicado quando o público não o domina.',
      'A redação eclesiástica também precisa ser verdadeira quanto à própria instituição. Expressões como “a igreja que transforma sua vida” ou “o melhor ministério da cidade” podem soar promocionais, mas excedem o que a igreja tem autoridade para prometer ou provar.'
    ] },
    { tipo: 'atividade', id: 'tp55-u5-a1', titulo: 'Atividade — um conteúdo, três formatos', enunciado: 'Adapte o anúncio de um curso de novos membros para panfleto, nota de revista e pequeno guia impresso.', itens: ['Defina o que deve aparecer em todos.', 'Determine o que só cabe na versão longa.', 'Reduza o panfleto a uma finalidade.'], resposta: 'Todos precisam de finalidade, público, data/local ou modo de acesso e contato. A revista pode acrescentar contexto e testemunho institucional; o guia pode explicar doutrina, etapas e perguntas frequentes. O panfleto deve preservar apenas o necessário para compreender e agir.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Suporte igual não significa função igual.', 'Boa redação começa pela necessidade do leitor.', 'Permanência do impresso exige revisão cuidadosa e responsabilidade institucional.'] }
  ],
  fontes: [
    { id: 'broadus-sermoes', autor: 'John A. Broadus', ano: '1870', titulo: 'A Treatise on the Preparation and Delivery of Sermons', publicacao: 'Internet Archive', url: 'https://archive.org/details/treatiseonprepar00broarich', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Princípios de estrutura, clareza e adequação ao público aplicáveis à redação pública.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência institucional para responsabilidades e comunicação formal da igreja.' }
  ],
  atualizadoEm: '2026-09-11',
};