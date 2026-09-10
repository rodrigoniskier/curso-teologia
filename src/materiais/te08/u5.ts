import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u5-presente-indicativo-ativo',
  disciplina: 'TE08',
  unidade: 5,
  titulo: 'Verbos 2 — presente do indicativo ativo',
  objetivo: 'Reconhecer, formar e traduzir o presente do indicativo ativo de verbos temáticos regulares, identificando pessoa e número pelas terminações e evitando confundir forma de presente com uma única tradução temporal obrigatória.',
  topicosCobertos: ['Presente do indicativo ativo'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O paradigma precisa virar reconhecimento automático',
      paragrafos: [
        'Usaremos λύω como verbo-modelo. O radical λυ- recebe a vogal temática e as terminações pessoais do presente ativo. Para o estudante, o objetivo não é discutir agora toda a história morfológica das terminações, mas reconhecer a forma inteira com rapidez suficiente para que a análise de uma frase não pare a cada verbo.',
        'O presente grego frequentemente apresenta o processo a partir de dentro, mas a tradução concreta depende do contexto. λύω pode ser traduzido, conforme a frase, por “solto”, “estou soltando” ou outra formulação idiomática. O paradigma identifica morfologia; não substitui a interpretação.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Presente do indicativo ativo de λύω',
      itens: [
        '1ª singular: λύω — eu solto.',
        '2ª singular: λύεις — tu soltas / você solta.',
        '3ª singular: λύει — ele/ela solta.',
        '1ª plural: λύομεν — nós soltamos.',
        '2ª plural: λύετε — vós soltais / vocês soltam.',
        '3ª plural: λύουσι(ν) — eles/elas soltam. O ν entre parênteses é o chamado nu móvel, que pode aparecer em certos contextos fonológicos e editoriais.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Radical, vogal temática e terminação',
      paragrafos: [
        'Em verbos temáticos, ο e ε aparecem entre o radical e várias terminações. Na prática introdutória, é útil perceber padrões como λυ-ο-μεν e λυ-ε-τε. Algumas formas sofreram contrações históricas, por isso a superfície λύω, λύεις e λύει não deve ser forçada a uma segmentação simplista como se cada letra correspondesse sempre a um morfema independente.',
        'O ganho pedagógico é comparar formas. -ομεν e -ετε são muito distintivos; -ουσι(ν) sinaliza a terceira pessoa plural. Quanto mais cedo essas terminações forem reconhecidas sem tradução mental palavra por palavra, mais espaço cognitivo haverá para sintaxe e sentido.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Procedimento de análise',
      itens: [
        'Localize o verbo e procure o radical lexical.',
        'Compare a terminação com o paradigma.',
        'Identifique pessoa e número.',
        'Nomeie a forma completa: presente do indicativo ativo.',
        'Só então produza uma tradução que faça sentido na frase.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Leitura controlada',
      enunciado: 'λύομεν· λύετε· λύουσιν.',
      explicacao: 'As três formas compartilham radical e tempo-forma, modo e voz. Mudam pessoa e número: “nós soltamos”, “vocês soltam”, “eles soltam”. O exercício deve ser repetido em voz alta até a identificação ser rápida.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u5-a1',
      titulo: 'Produção e análise do paradigma',
      enunciado: 'Sem consultar a tabela, escreva as seis formas do presente do indicativo ativo de λύω e depois analise λύεις, λύομεν e λύουσιν.',
      itens: [
        'Escreva o paradigma na ordem 1s, 2s, 3s, 1p, 2p, 3p.',
        'Para cada uma das três formas indicadas, registre pessoa, número, tempo-forma, modo e voz.',
        'Explique em uma frase por que “presente” não significa que toda ocorrência deva ser traduzida mecanicamente pelo presente simples português.'
      ],
      resposta: 'Paradigma: λύω, λύεις, λύει, λύομεν, λύετε, λύουσι(ν). λύεις = 2ª singular; λύομεν = 1ª plural; λύουσιν = 3ª plural; todas são presente do indicativo ativo. A forma morfológica orienta a interpretação, mas valor temporal/aspectual e tradução idiomática dependem também do contexto.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O presente ativo de λύω possui seis formas pessoais fundamentais.',
        'Pessoa e número são recuperados principalmente pelas terminações.',
        'ο/ε funcionam como vogais temáticas em grande parte do paradigma.',
        'λύουσι(ν) pode apresentar nu móvel.',
        'Análise morfológica vem antes da escolha final de tradução.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto com paradigmas e exercícios graduados.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica em domínio público para o paradigma do presente ativo.' }
  ],
  atualizadoEm: '2026-09-09',
};
