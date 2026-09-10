import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te12-u3-duas-naturezas-biblia',
  disciplina: 'TE12',
  unidade: 3,
  titulo: 'As duas naturezas da Bíblia: a possibilidade de interpretação',
  objetivo: 'Explicar como autoria divina e autoria humana tornam necessária e possível a interpretação histórico-gramatical, evitando tanto tratar a Bíblia como ditado mecânico quanto reduzi-la a documento meramente humano.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Palavra de Deus em linguagem humana',
      paragrafos: [
        'A Escritura reivindica origem divina e, ao mesmo tempo, chega por autores humanos reais. Eles escrevem em hebraico, aramaico e grego, usam estilos diferentes, citam fontes, organizam argumentos, escolhem gêneros e se dirigem a comunidades concretas. A inspiração não apaga nenhuma dessas marcas; é justamente por meio delas que a mensagem inspirada é comunicada.',
        'Por isso a interpretação é possível: Deus não escolheu comunicar-se por um código privado desligado da linguagem. E por isso ela é necessária: palavras humanas funcionam em contextos, gêneros, estruturas e convenções que precisam ser compreendidos.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Dois reducionismos a evitar',
      itens: [
        'Reducionismo mecânico: imaginar o autor humano como mero copista sem estilo, intenção ou contexto.',
        'Reducionismo naturalista: tratar o texto apenas como produto religioso humano e excluir previamente sua reivindicação de revelação.',
        'A posição reformada afirma inspiração plena sem eliminar meios humanos reais.',
        'Gramática e história são relevantes porque Deus escolheu falar por linguagem e acontecimentos históricos.',
        'A unidade canônica é relevante porque os muitos autores humanos servem ao propósito do único Autor divino.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A analogia com a encarnação é útil apenas até certo ponto',
      paragrafos: [
        'Teólogos às vezes comparam a dimensão divina e humana da Escritura às duas naturezas de Cristo. A comparação pode lembrar que o divino não precisa competir com o humano. Entretanto, não deve ser transformada em identidade doutrinária: a Bíblia não é uma pessoa, não possui natureza divina e humana no sentido cristológico e não participa da união hipostática.',
        'A formulação mais segura permanece documental e teológica: Deus é o autor último da Escritura e emprega autores humanos de maneira compatível com suas capacidades, contextos e intenções. Isso exige do intérprete reverência e trabalho filológico ao mesmo tempo.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te12-u3-a1',
      titulo: 'Atividade — integrar autoria divina e humana',
      enunciado: 'Explique por que estudar o contexto histórico de uma epístola não diminui sua inspiração e por que confessar inspiração não torna o contexto dispensável.',
      itens: ['Relacione autoria divina e humana.', 'Explique o papel do contexto.', 'Evite os dois reducionismos.'],
      resposta: 'A inspiração afirma que Deus comunica sua Palavra por autores humanos reais. Como esses autores falam a situações concretas em linguagem histórica, contexto e gramática pertencem ao meio escolhido por Deus. Ignorá-los não honra a inspiração; obscurece a forma pela qual a revelação foi dada.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'A Escritura tem autoria divina e autoria humana real.',
        'A inspiração não apaga gênero, estilo, história nem intenção.',
        'A linguagem humana torna interpretação possível e necessária.',
        'O estudo histórico-gramatical é consequência, não negação, da inspiração.',
        'A analogia com a encarnação deve ser usada com limites explícitos.'
      ],
    },
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Capítulo I como formulação confessional da inspiração, autoridade e modo de recepção das Escrituras.' },
    { id: 'terry-hermeneutica', autor: 'Milton Spenser Terry', ano: '1883', titulo: 'Biblical Hermeneutics', publicacao: 'Internet Archive', url: 'https://archive.org/details/biblicalhermeneu00terr', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência metodológica para linguagem, contexto e interpretação histórico-gramatical.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Formulação reformada clássica sobre Escritura, inspiração e testemunho do Espírito.' }
  ],
  atualizadoEm: '2026-09-10',
};
