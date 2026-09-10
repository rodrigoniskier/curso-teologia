import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u1-introducao-filosofia',
  disciplina: 'CG08',
  unidade: 1,
  titulo: 'Introdução ao curso: espírito filosófico e definição',
  objetivo: 'Definir filosofia como investigação racional de questões fundamentais e desenvolver o hábito filosófico de explicitar conceitos, razões e pressupostos sem tratar a razão como autoridade autônoma sobre a revelação.',
  topicosCobertos: ['O espírito filosófico e definição'],
  blocos: [
    { tipo: 'texto', titulo: '1. Filosofar começa quando uma resposta deixa de parecer óbvia', paragrafos: [
      'Filosofia não é primeiro uma coleção de nomes ou escolas. Ela começa quando perguntamos o que exatamente queremos dizer, por que acreditamos nisso e que consequências seguem de nossa resposta. Questões como “o que existe?”, “como sabemos?”, “o que devemos fazer?” e “o que torna algo belo?” atravessam ciência, política, religião e vida cotidiana.',
      'O espírito filosófico combina admiração, dúvida disciplinada, análise conceitual e argumentação. Dúvida disciplinada não é ceticismo permanente: é a disposição de testar razões, distinguir afirmações e corrigir erros.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro hábitos do estudante de filosofia', itens: [
      'Definir termos antes de discutir conclusões.',
      'Distinguir uma afirmação das razões oferecidas em favor dela.',
      'Tornar pressupostos explícitos, inclusive os próprios.',
      'Perguntar se a conclusão realmente segue das premissas.'
    ] },
    { tipo: 'texto', titulo: '2. Filosofia e teologia não são rivais simétricas', paragrafos: [
      'Para uma perspectiva reformada, a razão é criatura e dom de Deus. Ela não precisa ser desprezada, mas também não é um tribunal neutro diante do qual a revelação deve pedir autorização. O estudo filosófico serve para examinar argumentos, conceitos e cosmovisões; a Escritura permanece norma última da fé cristã.',
      'Isso evita dois erros opostos: o anti-intelectualismo, que chama de fé a recusa de pensar, e o racionalismo autônomo, que admite como verdadeiro apenas o que uma razão supostamente neutra consegue validar.'
    ] },
    { tipo: 'atividade', id: 'cg08-u1-a1', titulo: 'Atividade — transformar opinião em problema filosófico', enunciado: 'Escolha a frase “cada pessoa tem a sua verdade”. Em vez de concordar ou discordar imediatamente, formule três perguntas filosóficas que precisariam ser respondidas antes de avaliar a frase.', itens: ['Pergunte o que significa “verdade”.', 'Pergunte se a frase pretende valer para todas as pessoas.', 'Pergunte que evidência ou argumento sustentaria a afirmação.'], resposta: 'Uma boa análise começa distinguindo verdade de crença ou perspectiva, observa que a frase parece apresentar universalmente uma tese contra verdades universais e exige razões para saber se ela descreve apenas desacordos humanos ou afirma que não existe verdade independente do sujeito.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Filosofia investiga questões fundamentais por conceitos e argumentos.', 'O espírito filosófico combina admiração, dúvida disciplinada e busca de razões.', 'Toda pessoa opera com pressupostos filosóficos, mesmo sem percebê-los.', 'Na perspectiva reformada, a razão é real e valiosa, mas não autônoma diante de Deus.'] }
  ],
  fontes: [
    { id: 'sep-filosofia-religiao', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Philosophy of Religion', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/philosophy-religion/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Panorama acadêmico de questões filosóficas aplicadas à religião.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para luz da natureza, revelação e autoridade.' }
  ],
  atualizadoEm: '2026-09-10',
};
