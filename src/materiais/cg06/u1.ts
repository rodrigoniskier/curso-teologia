import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg06-u1-metodos-tecnicas-pesquisa',
  disciplina: 'CG06',
  unidade: 1,
  titulo: 'Introdução à Metodologia Científica: métodos e técnicas de pesquisa',
  objetivo: 'Distinguir problema, método, técnica, dado e evidência; reconhecer desenhos básicos de pesquisa e escolher procedimentos proporcionais à pergunta, inclusive em investigações bíblicas, históricas e teológicas.',
  topicosCobertos: ['Métodos e técnicas de pesquisas científicas'],
  blocos: [
    { tipo: 'texto', titulo: '1. Pesquisa começa com uma pergunta que pode ser investigada', paragrafos: [
      'Metodologia científica não é um catálogo de formulários nem sinônimo de estatística. É o estudo das decisões que ligam uma pergunta a evidências capazes de responder a ela de modo controlado, transparente e criticável. O primeiro teste de uma pesquisa é simples: outra pessoa consegue compreender o que foi perguntado, como os dados foram obtidos e por que as conclusões seguem deles?',
      'Em teologia, a natureza da pergunta determina o tipo de evidência. Uma questão exegética exige texto, gramática e contexto; uma questão histórica exige documentos e crítica de fontes; uma questão sobre práticas e percepções contemporâneas pode exigir entrevistas, questionários ou observação. Nenhuma técnica é científica apenas por ser quantitativa, e nenhuma pesquisa se torna rigorosa apenas porque contém tabelas.'
    ] },
    { tipo: 'quadro', titulo: 'Método, técnica e instrumento', itens: [
      'Método: lógica geral do caminho de investigação e do desenho adotado.',
      'Técnica: procedimento concreto de obtenção ou análise de dados, como entrevista, análise documental, levantamento ou análise temática.',
      'Instrumento: ferramenta operacional, como roteiro de entrevista, formulário, protocolo de extração ou planilha de codificação.',
      'Evidência: dado interpretado como relevante para confirmar, enfraquecer ou discriminar entre respostas possíveis.'
    ] },
    { tipo: 'texto', titulo: '2. Famílias de desenho de pesquisa', paragrafos: [
      'Pesquisas podem descrever, comparar, explicar, interpretar ou testar relações. Estudos experimentais manipulam condições quando isso é ética e logicamente possível; levantamentos coletam dados padronizados de uma população ou amostra; estudos de caso investigam fenômenos delimitados em profundidade; métodos qualitativos exploram significados, processos e contextos; métodos quantitativos mensuram variáveis e analisam padrões numéricos. Métodos mistos integram abordagens quando a pergunta realmente exige ambas.',
      'Pesquisa bibliográfica e documental não significa pesquisa menor. Em história da igreja, teologia sistemática ou exegese, o corpus documental pode ser o próprio objeto. O rigor aparece na seleção explícita do corpus, na crítica das fontes, no procedimento de análise e no tratamento honesto de evidência contrária.'
    ] },
    { tipo: 'texto', titulo: '3. Reprodutibilidade, transparência e proporcionalidade', paragrafos: [
      'Nem toda pesquisa pode ser reproduzida no sentido de repetir um experimento, mas toda pesquisa acadêmica deve ser auditável. O leitor precisa saber quais fontes foram consultadas, quais critérios de inclusão foram usados, como categorias foram definidas e quais limitações permanecem.',
      'O grau de certeza da conclusão deve ser proporcional à força do método e das evidências. Um estudo de caso pode revelar mecanismos e hipóteses relevantes sem autorizar generalizações para toda população; uma correlação não prova automaticamente causalidade; ausência de evidência em um arquivo incompleto não equivale a evidência de ausência.'
    ] },
    { tipo: 'atividade', id: 'cg06-u1-a1', titulo: 'Atividade — casar pergunta e método', enunciado: 'Para cada pergunta, indique o desenho mais adequado e justifique: (a) Como Calvino interpreta Romanos 4 em seu comentário? (b) Qual a percepção dos seminaristas sobre uso de IA na pesquisa? (c) Houve mudança na frequência de determinado termo em atas conciliares entre 1950 e 2000?', itens: ['Identifique o tipo de evidência necessário.', 'Escolha uma técnica compatível.', 'Diga uma limitação que permaneceria.'], resposta: '(a) análise textual/documental do comentário, com critérios exegéticos e históricos; (b) levantamento por questionário e/ou entrevistas, com amostragem e instrumento explícitos; (c) corpus documental de atas com protocolo de busca/codificação e análise temporal. Em todos os casos, a conclusão deve respeitar os limites do corpus e do desenho.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Pergunta vem antes da técnica.', 'Método, técnica e instrumento não são sinônimos.', 'Pesquisa documental, qualitativa e quantitativa podem ser rigorosas.', 'Rigor exige transparência, possibilidade de crítica e conclusão proporcional à evidência.'] }
  ],
  fontes: [
    { id: 'bhattacherjee-social-research', autor: 'Anol Bhattacherjee', ano: '2019', titulo: 'Social Science Research: Principles, Methods and Practices (Revised edition)', publicacao: 'University of Southern Queensland — Pressbooks', url: 'https://usq.pressbooks.pub/socialscienceresearch/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Livro-texto aberto para processo científico, desenho de pesquisa, métodos qualitativos e quantitativos e ética.' }
  ],
  atualizadoEm: '2026-09-10',
};
