import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u6-presente-indicativo-medio-passivo',
  disciplina: 'TE08',
  unidade: 6,
  titulo: 'Verbos 3 — presente do indicativo médio/passivo',
  objetivo: 'Reconhecer e formar o presente do indicativo médio/passivo de verbos temáticos regulares, distinguindo morfologia compartilhada de interpretação contextual e evitando reduzir a voz média a um reflexivo automático.',
  topicosCobertos: ['Presente do indicativo médio/passivo'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Um paradigma, mais de um valor de voz',
      paragrafos: [
        'No presente, as formas tradicionalmente chamadas médio/passivas compartilham o mesmo conjunto de terminações. Assim, uma forma como λύεται é morfologicamente presente do indicativo médio/passivo; decidir se o valor no contexto é médio ou passivo exige conhecer o verbo e a frase.',
        'Isso é importante porque a voz média não significa simplesmente “fazer algo a si mesmo”. Ela pode apresentar o sujeito como especialmente envolvido, interessado ou participante do processo, e muitos verbos possuem usos médios convencionais que não aceitam uma tradução reflexiva literal.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Presente do indicativo médio/passivo de λύω',
      itens: [
        '1ª singular: λύομαι.',
        '2ª singular: λύῃ — também aparece historicamente explicada a partir de forma contraída.',
        '3ª singular: λύεται.',
        '1ª plural: λυόμεθα.',
        '2ª plural: λύεσθε.',
        '3ª plural: λύονται.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. O que a forma permite afirmar',
      paragrafos: [
        'Ao encontrar λυόμεθα, o estudante já pode afirmar: primeira pessoa do plural, presente, indicativo, morfologia médio/passiva. O que não pode afirmar sem contexto é se a melhor tradução será “nós nos soltamos”, “somos soltos” ou outra construção.',
        'Essa disciplina de separar dado morfológico de interpretação protege contra erros exegéticos. A análise deve dizer primeiro o que a forma realmente codifica; só depois o léxico e a sintaxe ajudam a decidir o sentido contextual.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Marcas que merecem memorização',
      itens: [
        '-ομαι sinaliza fortemente 1ª singular médio/passiva.',
        '-εται identifica 3ª singular.',
        '-όμεθα identifica 1ª plural e é uma forma muito útil para reconhecimento rápido.',
        '-εσθε identifica 2ª plural.',
        '-ονται identifica 3ª plural.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Contraste com a voz ativa',
      enunciado: 'λύομεν / λυόμεθα',
      explicacao: 'λύομεν é 1ª plural do presente do indicativo ativo; λυόμεθα é 1ª plural do presente do indicativo médio/passivo. O radical permanece reconhecível, enquanto a terminação altera a voz morfológica.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u6-a1',
      titulo: 'Morfologia antes do sentido',
      enunciado: 'Analise λύομαι, λύεται, λυόμεθα e λύονται sem inventar um contexto.',
      itens: [
        'Identifique pessoa e número de cada forma.',
        'Registre tempo-forma, modo e voz morfológica.',
        'Explique por que “médio/passivo” é uma análise mais responsável do que escolher uma tradução reflexiva automaticamente.',
        'Compare λυόμεθα com λύομεν da unidade anterior.'
      ],
      resposta: 'λύομαι = 1ª singular; λύεται = 3ª singular; λυόμεθα = 1ª plural; λύονται = 3ª plural. Todas são presente do indicativo médio/passivo. A morfologia compartilhada não resolve sozinha o valor de voz no contexto; por isso a tradução depende também do léxico e da sintaxe. λυόμεθα contrasta com λύομεν principalmente pela voz morfológica.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O presente médio e o presente passivo compartilham formas.',
        'A análise deve registrar “médio/passivo” quando o contexto ainda não decidiu o valor.',
        'Voz média não equivale automaticamente a reflexivo.',
        'As terminações -ομαι, -εται, -όμεθα, -εσθε e -ονται são marcadores úteis.',
        'Forma, léxico e contexto trabalham juntos na tradução.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto com introdução progressiva à voz média/passiva.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para o paradigma médio/passivo.' }
  ],
  atualizadoEm: '2026-09-09',
};
