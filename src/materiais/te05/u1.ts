import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u1-substantivos-segolados',
  disciplina: 'TE05',
  unidade: 1,
  titulo: 'Substantivos: segolados',
  objetivo: 'Reconhecer substantivos segolados e suas principais classes morfológicas, evitando tratar o padrão vocálico da forma absoluta singular como paradigma invariável.',
  topicosCobertos: ['Definição', 'Categorias de substantivos segolados'],
  blocos: [
    { tipo: 'texto', titulo: '1. O que é um substantivo segolado', paragrafos: [
      'Segolados são substantivos cuja história morfológica produziu, no singular absoluto, padrões característicos de duas sílabas com acento inicial ou penúltimo e vogais que frequentemente incluem segol ou outras vogais relacionadas ao mesmo desenvolvimento histórico. מֶלֶךְ “rei”, סֵפֶר “livro”, קֹדֶשׁ “santidade/coisa santa” e בֹּקֶר “manhã” ilustram padrões frequentes.',
      'O nome da classe não significa que toda forma sempre apresente dois sinais de segol. O estudante precisa reconhecer uma família morfológica, não contar sinais gráficos.'
    ] },
    { tipo: 'quadro', titulo: 'Categorias introdutórias', itens: [
      'Padrões historicamente relacionados a bases do tipo *qatl, *qitl e *qutl aparecem com vocalizações diferentes no texto massorético.',
      'A forma absoluta singular é a porta de entrada, mas plural, construto e sufixação podem alterar as vogais do radical.',
      'מֶלֶךְ → מְלָכִים mostra que a vocalização do plural não é obtida simplesmente acrescentando ־ִים à forma singular intacta.',
      'O reconhecimento seguro combina forma lexical, padrão vocálico, gênero e consulta ao léxico.'
    ] },
    { tipo: 'texto', titulo: '2. Por que a classe importa', paragrafos: [
      'Segolados aparecem com enorme frequência no texto bíblico e sofrem mudanças previsíveis quando recebem terminações ou entram em construções de construto. Reconhecer a classe impede que o estudante procure no léxico uma forma flexionada como se fosse um lema independente.',
      'A análise deve partir das consoantes radicais e da forma lexical conhecida. A vocalização massorética registra a tradição de leitura; as alternâncias morfológicas precisam ser aprendidas dentro do sistema da língua.'
    ] },
    { tipo: 'atividade', id: 'te05-u1-a1', titulo: 'Atividade — reconhecer a família', enunciado: 'Compare מֶלֶךְ e מְלָכִים. Explique por que a forma plural não deve ser analisada como uma palavra sem relação com o singular.', itens: ['Identifique as consoantes radicais.', 'Observe a mudança vocálica.', 'Explique o valor da forma lexical no uso do léxico.'], resposta: 'As consoantes מלך permanecem reconhecíveis. A mudança vocálica faz parte da flexão do segolado; o plural deve ser relacionado ao lema מֶלֶךְ, e não tratado como vocábulo independente.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};