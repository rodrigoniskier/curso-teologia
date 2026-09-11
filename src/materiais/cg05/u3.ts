import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg05-u3-afixacao', disciplina: 'CG05', unidade: 3,
  titulo: 'Formação de palavras por afixação',
  objetivo: 'Reconhecer prefixos e sufixos frequentes para inferir classe gramatical e sentido aproximado de palavras desconhecidas em textos teológicos ingleses.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Desmontar palavras longas', paragrafos: [
      'Palavras acadêmicas inglesas frequentemente revelam sua estrutura. Em justification, o sufixo -ation forma um substantivo; em biblical, -al forma um adjetivo; em unbelief, un- marca negação; em interpreter, -er indica agente.',
      'A análise morfológica não substitui o contexto. Ela fornece duas pistas: qual classe de palavra provavelmente aparece e qual núcleo semântico está sendo modificado.'
    ] },
    { tipo: 'quadro', titulo: 'Afixos úteis', itens: ['un-, in-, im-, non-: negação ou ausência, com variações.', 're-: repetição ou retorno.', '-tion/-sion, -ment, -ness: frequentemente formam substantivos.', '-al, -ic, -ive, -ous: frequentemente formam adjetivos.', '-ly: frequentemente forma advérbios.', '-er/-or: frequentemente indica agente ou função.'] },
    { tipo: 'atividade', id: 'cg05-u3-a1', titulo: 'Atividade — decompor para compreender', enunciado: 'Analise as palavras “unfaithfulness”, “interpretation” e “doctrinal”. Separe base e afixos, indique a classe provável e proponha tradução.', itens: ['faith + -ful + -ness + un-', 'interpret + -ation', 'doctrine + -al'], resposta: 'Unfaithfulness é substantivo: infidelidade; interpretation é substantivo: interpretação; doctrinal é adjetivo: doutrinário. A morfologia ajuda antes mesmo de consultar um dicionário.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Afixos ajudam a identificar sentido e classe gramatical.', 'Formas complexas devem ser decompostas antes da tradução.', 'A hipótese morfológica sempre precisa caber no contexto.'] }
  ],
  fontes: [{ id: 'brehe-grammar-anatomy', autor: 'Steven Brehe', ano: '2019', titulo: "Brehe's Grammar Anatomy", publicacao: 'University of North Georgia Press', url: 'https://ung.edu/university-press/books/grammar-anatomy.php', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Apoio aberto à identificação de categorias e formação de palavras em inglês.' }],
  atualizadoEm: '2026-09-11',
};