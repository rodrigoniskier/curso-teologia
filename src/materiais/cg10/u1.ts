import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u1-significado-historia-sociologia',
  disciplina: 'CG10',
  unidade: 1,
  titulo: 'Significado e história da Sociologia',
  objetivo: 'Definir Sociologia, situar seu surgimento histórico e distinguir seu objeto e seus métodos das demais ciências sociais sem reduzir fenômenos religiosos a explicações exclusivamente sociológicas.',
  topicosCobertos: ['Comparação com outras ciências sociais'],
  blocos: [
    { tipo: 'texto', titulo: '1. O que torna uma pergunta sociológica', paragrafos: [
      'A Sociologia investiga padrões de interação, instituições, grupos, normas, desigualdades e processos de mudança. Seu foco não elimina pessoas concretas; procura compreender como ações individuais se desenvolvem dentro de relações e estruturas que precedem cada indivíduo e são continuamente reproduzidas ou transformadas por ele.',
      'O olhar sociológico se torna especialmente útil quando um fenômeno não pode ser explicado por uma biografia isolada. Se milhares de pessoas apresentam o mesmo padrão de mobilidade, escolarização, desemprego ou participação institucional, surge uma pergunta sobre condições sociais compartilhadas.'
    ] },
    { tipo: 'texto', titulo: '2. Por que a Sociologia surgiu', paragrafos: [
      'A disciplina se consolidou no século XIX em meio à industrialização, urbanização, revoluções políticas e transformação das formas tradicionais de autoridade e comunidade. Autores clássicos como Durkheim, Marx e Weber discordaram profundamente, mas compartilharam o esforço de explicar sistematicamente uma sociedade em rápida mudança.',
      'Estudar esses autores não significa aceitar suas filosofias de fundo. Significa aprender a reconhecer problemas, conceitos e métodos que continuam estruturando perguntas sociológicas.'
    ] },
    { tipo: 'quadro', titulo: 'Sociologia e ciências próximas', itens: [
      'História enfatiza processos e acontecimentos no tempo; Sociologia também busca padrões e relações comparáveis entre casos.',
      'Antropologia enfatiza cultura, formas de vida e produção de significados; suas fronteiras com a Sociologia frequentemente se sobrepõem.',
      'Economia analisa produção, distribuição, incentivos e recursos; Sociologia pergunta também como instituições, classe, redes e normas moldam comportamentos econômicos.',
      'Ciência política concentra-se em poder, Estado e instituições políticas; Sociologia examina poder e organização em muitos outros grupos e instituições.',
      'Teologia pode formular juízos normativos sobre verdade, pecado, justiça e igreja; Sociologia descreve e explica fenômenos sociais, mas seus métodos não decidem se uma doutrina é revelada por Deus.'
    ] },
    { tipo: 'atividade', id: 'cg10-u1-a1', titulo: 'Atividade — mudar a escala da pergunta', enunciado: 'Transforme a afirmação “João deixou de frequentar a igreja” em três perguntas: uma biográfica, uma sociológica e uma teológica. Depois explique por que nenhuma delas substitui automaticamente as outras.', itens: ['Identifique fatores pessoais possíveis.', 'Formule uma pergunta sobre padrões ou condições sociais.', 'Formule uma pergunta normativa teológica.'], resposta: 'A pergunta biográfica pode investigar motivos individuais; a sociológica pode perguntar se há padrão semelhante por faixa etária, território, redes ou mudanças institucionais; a teológica pode avaliar responsabilidades e significado eclesiológico. Cada abordagem responde a tipos distintos de pergunta e evidência.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Sociologia estuda padrões sociais, relações, grupos e instituições.', 'A disciplina se consolidou em resposta às transformações da modernidade.', 'Ciências sociais se sobrepõem, mas fazem perguntas diferentes.', 'Explicar socialmente a circulação de uma crença não decide sua verdade.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Livro-texto universitário aberto para fundamentos, história e métodos da Sociologia.' }
  ],
  atualizadoEm: '2026-09-10',
};
