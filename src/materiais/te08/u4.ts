import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u4-verbos-introducao',
  disciplina: 'TE08',
  unidade: 4,
  titulo: 'Verbos 1',
  objetivo: 'Compreender como o verbo grego codifica pessoa, número, tempo-forma, aspecto, modo e voz, reconhecendo essas categorias antes de memorizar paradigmas completos.',
  topicosCobertos: [
    'Introdução aos verbos',
    'Tempo, modo e voz',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O verbo concentra muita informação',
      paragrafos: [
        'Uma forma verbal grega frequentemente informa, em uma única palavra, quem participa da ação, quantos participantes há, como o falante apresenta o processo e qual relação existe entre sujeito e ação. Por isso, traduzir apenas pelo radical lexical é insuficiente: λύω, λύεις e λύομεν pertencem ao mesmo verbo, mas não dizem a mesma coisa.',
        'O primeiro hábito do estudante deve ser desmontar a forma antes de traduzir. Pergunte: qual é o radical? Que terminação aparece? Ela indica pessoa e número? Que tempo-forma, modo e voz estão presentes? Só depois formule uma tradução adequada ao contexto.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Cinco perguntas para qualquer forma verbal',
      itens: [
        'Pessoa: primeira, segunda ou terceira?',
        'Número: singular ou plural?',
        'Tempo-forma: presente, futuro, aoristo etc.?',
        'Modo: indicativo, subjuntivo, imperativo ou, mais raramente, optativo?',
        'Voz: ativa, média ou passiva?'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. “Tempo” verbal não é apenas relógio',
      paragrafos: [
        'Gramáticas introdutórias tradicionalmente chamam presente, imperfeito, futuro, aoristo, perfeito e mais-que-perfeito de “tempos”. Essa nomenclatura continua útil, sobretudo no indicativo. Entretanto, o sistema grego também apresenta o evento por diferentes perspectivas aspectuais: como processo em desenvolvimento, como evento visto globalmente ou como estado resultante, entre outras distinções.',
        'No indicativo, referência temporal costuma ser especialmente relevante; fora do indicativo, a relação entre forma verbal e tempo cronológico é menos direta. Portanto, não devemos ensinar que uma etiqueta morfológica produz automaticamente uma tradução temporal fixa em qualquer contexto.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Aspecto: uma introdução suficiente para o primeiro semestre',
      itens: [
        'Formas de presente e imperfeito frequentemente apresentam o processo de modo interno ou progressivo, embora o contexto determine a tradução concreta.',
        'O aoristo frequentemente apresenta o evento de modo global, sem obrigar a tradução a significar “ação instantânea”.',
        'O perfeito frequentemente destaca um estado ou resultado ligado a uma ação anterior.',
        'Aspecto não elimina tempo; ajuda a compreender que o verbo grego organiza mais informação do que a simples oposição passado/presente/futuro.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Modos: como a ação é apresentada',
      paragrafos: [
        'O indicativo normalmente apresenta afirmações e perguntas sobre situações tratadas como reais ou constatáveis no discurso. O subjuntivo aparece em possibilidades, expectativas, exortações e diversos tipos de oração subordinada. O imperativo expressa ordens e instruções. O optativo é raro no Novo Testamento, mas deve ser reconhecido como parte do sistema histórico da língua.',
        'Essas descrições são pontos de partida, não definições mecânicas. Um imperativo pode ordenar, pedir ou orientar; um indicativo pode ocorrer em pergunta, ironia ou condição. A forma delimita possibilidades, mas o contexto continua governando a interpretação.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '4. Voz: ativa, média e passiva',
      paragrafos: [
        'Na voz ativa, o sujeito é normalmente apresentado como participante que realiza ou controla o processo: λύω, “eu solto”. Na passiva, o sujeito é apresentado como afetado pelo processo: λύομαι pode, conforme a forma e o contexto, ter valor passivo. A voz média destaca a participação do sujeito de modo que não corresponde sempre a uma perífrase reflexiva simples em português.',
        'No presente e em várias outras séries, formas médias e passivas compartilham terminações. Isso significa que morfologia e contexto precisam trabalhar juntos. “Médio/passivo” em um paradigma não é indecisão pedagógica; é uma característica real do sistema formal.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Antes de traduzir, analise',
      enunciado: 'λύομεν',
      explicacao: 'A terminação -ομεν identifica primeira pessoa do plural no presente do indicativo ativo. O radical é λυ-. Uma tradução básica é “nós soltamos”, mas em texto real o valor discursivo e lexical dependeria do contexto.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u4-a1',
      titulo: 'Classifique antes de traduzir',
      enunciado: 'Observe as formas λύω, λύεις, λύομεν e λύετε. Sem consultar uma tradução, identifique o que muda e o que permanece.',
      itens: [
        'Sublinhe o elemento lexical comum.',
        'Compare as terminações e formule uma hipótese sobre pessoa e número.',
        'Explique por que todas podem compartilhar tempo-forma, modo e voz e ainda assim ter traduções diferentes.',
        'Escreva uma regra de trabalho: “antes de traduzir um verbo grego, eu devo...”'
      ],
      resposta: 'O elemento lexical comum é λυ-. As terminações distinguem pessoa e número: -ω, -εις, -ομεν, -ετε. Todas pertencem, neste paradigma, ao presente do indicativo ativo, mas mudam o sujeito gramatical. Uma regra adequada é: antes de traduzir, identificar radical, terminação, pessoa, número, tempo-forma, modo e voz.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O verbo grego é morfologicamente informativo e deve ser analisado antes de traduzido.',
        'Pessoa e número aparecem normalmente nas terminações.',
        'Tempo-forma e aspecto não devem ser reduzidos a uma tabela cronológica.',
        'Indicativo, subjuntivo, imperativo e optativo pertencem ao sistema modal.',
        'Voz média não equivale automaticamente a reflexivo; formas médias e passivas frequentemente coincidem morfologicamente.'
      ],
    },
  ],
  fontes: [
    {
      id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto com introdução progressiva ao sistema verbal e exercícios.'
    },
    {
      id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática clássica usada para terminologia e paradigmas introdutórios.'
    }
  ],
  atualizadoEm: '2026-09-09',
};
