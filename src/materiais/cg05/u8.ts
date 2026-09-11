import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u8-reconhecimento-gramatical', disciplina: 'CG05', unidade: 8,
  titulo: 'Reconhecimento de pronomes, tempos verbais, números e graus do adjetivo',
  objetivo: 'Integrar estratégias de leitura reconhecendo pronomes, formas verbais, números e comparativos/superlativos suficientes para compreender relações essenciais em textos teológicos.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Reconhecer função antes de nomear tudo', paragrafos: [
      'Na leitura instrumental, o objetivo não é produzir uma análise gramatical exaustiva de cada frase, mas reconhecer marcas que alteram o sentido. Auxiliares como is, was, has, have, will e would ajudam a localizar voz, anterioridade, continuidade ou modalidade; pronomes organizam participantes e referências.',
      'Comparativos e superlativos também mudam a argumentação: greater than estabelece comparação; the greatest identifica o grau máximo dentro de um conjunto. Números, datas, séculos e referências bíblicas precisam ser reconhecidos sem serem confundidos com outros elementos.'
    ] },
    { tipo: 'quadro', titulo: 'Marcas frequentes', itens: ['-ed pode indicar passado/particípio em verbos regulares, conforme a estrutura.', 'has/have + particípio sinaliza perfect.', 'will + forma base sinaliza futuro ou projeção.', 'more/-er ... than sinaliza comparação.', 'most/-est frequentemente marca superlativo.', 'he, she, it, they, who, which, this e these ajudam a rastrear participantes e referentes.'] },
    { tipo: 'atividade', id: 'cg05-u8-a1', titulo: 'Atividade — leitura integrada', enunciado: 'Leia: “These two confessions were written in different centuries, but the later document has preserved several of the earlier themes. Its treatment of worship is more detailed than theirs.” Explique these, were written, later, has preserved, its, more detailed than e theirs.', itens: ['Classifique a função de cada forma.', 'Depois produza uma tradução natural.'], resposta: 'These retoma duas confissões; were written é passado na voz passiva; later é comparativo temporal/contextual; has preserved é present perfect; its retoma the later document; more detailed than é comparativo; theirs substitui algo como “their treatment”. Tradução possível: “Estas duas confissões foram escritas em séculos diferentes, mas o documento posterior preservou vários dos temas anteriores. Seu tratamento do culto é mais detalhado que o delas.”' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Reconhecimento gramatical serve à compreensão, não à rotulagem vazia.', 'Auxiliares revelam relações verbais importantes.', 'Pronomes e comparativos precisam ser ligados a seus referentes e termos comparados.', 'Ao fim de CG05, o leitor deve combinar contexto, morfologia, sintaxe e coesão antes do dicionário.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência aberta de apoio às categorias e construções gramaticais da unidade.' }],
  atualizadoEm: '2026-09-11',
};