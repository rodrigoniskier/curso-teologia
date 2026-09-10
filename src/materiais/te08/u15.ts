import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u15-leitura-traducao-6',
  disciplina: 'TE08',
  unidade: 15,
  titulo: 'Exercícios de leitura e tradução 6',
  objetivo: 'Demonstrar domínio integrado dos conteúdos de Grego 1 por meio de leitura direta, parsing completo, tradução controlada e autodiagnóstico dos pontos que precisam ser retomados antes de Grego 2.',
  topicosCobertos: [],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Fechamento do primeiro ciclo',
      paragrafos: [
        'Grego 1 não pretende produzir independência exegética completa. Ao final deste ciclo, a competência esperada é mais fundamental e verificável: ler o alfabeto sem transliteração, reconhecer sinais gráficos, identificar paradigmas básicos de presente e futuro, analisar substantivos da segunda declinação e construir traduções simples a partir da morfologia realmente estudada.',
        'Essa base precisa estar automatizada antes que Grego 2 acrescente primeira declinação, adjetivos, preposições, imperfeito, aoristo e pronomes. Avançar sem consolidar o básico costuma produzir um estudante que reconhece nomes de categorias, mas depende de software para cada forma.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Glossário final controlado',
      itens: [
        'κύριος, -ου, ὁ — senhor.',
        'δοῦλος, -ου, ὁ — servo.',
        'λόγος, -ου, ὁ — palavra, mensagem.',
        'ἔργον, -ου, τό — obra, trabalho.',
        'λύω — solto, liberto.',
        'γράφω — escrevo.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u15-a1',
      titulo: 'Leitura final integrada',
      enunciado: 'Leia, analise e traduza sem transliteração: (a) οἱ δοῦλοι γράφουσι λόγους. (b) τοὺς δούλους λύσει ὁ κύριος. (c) τὰ ἔργα γράφουσιν οἱ δοῦλοι. (d) οἱ δοῦλοι λύονται. Para (d), o contexto informa valor passivo.',
      itens: [
        'Analise todos os verbos: pessoa, número, tempo-forma, modo e voz.',
        'Analise todos os substantivos acompanhados de artigo: gênero, número e caso.',
        'Identifique onde a ordem grega difere da ordem mais natural em português.',
        'Produza uma tradução idiomática sem apagar relações morfológicas.'
      ],
      resposta: '(a) “Os servos escrevem palavras/mensagens”: δοῦλοι nom. pl.; γράφουσι 3ª pl. presente ativo; λόγους acc. pl. (b) “O senhor libertará os servos”: τοὺς δούλους acc. pl.; λύσει 3ª sg. futuro ativo; ὁ κύριος nom. sg.; o objeto aparece antes do verbo e do sujeito. (c) “Os servos escrevem as obras/os trabalhos”: τὰ ἔργα é acc. pl. neutro porque funciona como objeto de γράφουσιν; οἱ δοῦλοι é nom. pl. sujeito. (d) “Os servos são libertados”: οἱ δοῦλοι nom. pl.; λύονται 3ª pl. presente médio/passivo, aqui com valor passivo fornecido pelo contexto.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u15-a2',
      titulo: 'Reconstrução sem tabela',
      enunciado: 'Escreva de memória os paradigmas exigidos em Grego 1.',
      itens: [
        'Presente do indicativo ativo de λύω.',
        'Presente do indicativo médio/passivo de λύω.',
        'Futuro do indicativo ativo e médio de λύω.',
        'Segunda declinação masculina de λόγος e neutra de ἔργον.',
        'Depois confira e marque apenas as formas que precisaram ser corrigidas.'
      ],
      resposta: 'Presente ativo: λύω, λύεις, λύει, λύομεν, λύετε, λύουσι(ν). Presente médio/passivo: λύομαι, λύῃ, λύεται, λυόμεθα, λύεσθε, λύονται. Futuro ativo: λύσω, λύσεις, λύσει, λύσομεν, λύσετε, λύσουσι(ν). Futuro médio: λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται. λόγος: λόγος, λόγου, λόγῳ, λόγον, λόγε; λόγοι, λόγων, λόγοις, λόγους, λόγοι. ἔργον: ἔργον, ἔργου, ἔργῳ, ἔργον, ἔργον; ἔργα, ἔργων, ἔργοις, ἔργα, ἔργα.'
    },
    {
      tipo: 'lista',
      titulo: 'Autodiagnóstico antes de Grego 2',
      itens: [
        'Leio palavras gregas diretamente, sem escrever transliteração?',
        'Reconheço imediatamente as seis pessoas do presente ativo?',
        'Separo morfologia médio/passiva de valor contextual da voz?',
        'Reconheço o σ de futuro e as terminações pessoais?',
        'Identifico nominativo, genitivo, dativo, acusativo e vocativo da segunda declinação?',
        'Consigo explicar a regra neutra de nominativo/acusativo/vocativo?',
        'Quando uma forma é ambígua, consigo dizer exatamente o que falta para resolvê-la?'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Critério de conclusão de Grego 1',
      itens: [
        'O estudante não precisa conhecer ainda toda a gramática do Novo Testamento.',
        'Precisa dominar o conjunto efetivamente ensinado sem depender de transliteração ou resposta pronta.',
        'Parsing deve anteceder tradução.',
        'Tradução deve ser proporcional ao que morfologia, léxico fornecido e contexto permitem.',
        'Lacunas identificadas no autodiagnóstico devem ser retomadas antes de acrescentar novos paradigmas.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto que fundamenta a progressão cumulativa e o fechamento por exercícios.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para paradigmas e exercícios introdutórios.' }
  ],
  atualizadoEm: '2026-09-09',
};
