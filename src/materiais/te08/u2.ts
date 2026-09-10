import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u2-alfabeto',
  disciplina: 'TE08',
  unidade: 2,
  titulo: 'Alfabeto',
  objetivo: 'Reconhecer, escrever e ler as 24 letras do alfabeto grego, distinguir vogais, ditongos e grupos consonantais e desenvolver fluência inicial suficiente para abandonar a dependência da transliteração.',
  topicosCobertos: [
    'Alfabeto: escrita e pronúncia',
    'Vogais e ditongos',
    'Consoantes mudas, líquidas e sibilantes',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Aprender a ler antes de tentar traduzir',
      paragrafos: [
        'O primeiro objetivo não é decorar nomes de letras isoladas, mas fazer com que α, β, γ e as demais formas sejam reconhecidas diretamente. Translitação pode ajudar por alguns minutos, porém se torna obstáculo quando o estudante continua lendo logos em vez de λόγος. A partir desta unidade, o grego deve ser lido como grego.',
        'Há diferentes convenções de pronúncia acadêmica, histórica e moderna. O portal usa uma pronúncia pedagógica consistente para facilitar leitura e memorização, sem afirmar que ela reproduza exatamente um único sotaque do século I. Para exegese, reconhecer a forma escrita é mais importante do que transformar uma convenção de sala de aula em doutrina histórica.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'As 24 letras',
      itens: [
        'Α α — alfa; Β β — beta; Γ γ — gama; Δ δ — delta.',
        'Ε ε — épsilon; Ζ ζ — zeta; Η η — eta; Θ θ — theta.',
        'Ι ι — iota; Κ κ — kappa; Λ λ — lambda; Μ μ — mi.',
        'Ν ν — ni; Ξ ξ — xi; Ο ο — ómicron; Π π — pi.',
        'Ρ ρ — rho; Σ σ/ς — sigma; Τ τ — tau; Υ υ — ýpsilon.',
        'Φ φ — phi; Χ χ — chi; Ψ ψ — psi; Ω ω — ômega.',
        'Sigma possui duas formas minúsculas: σ normalmente dentro da palavra e ς no final: λόγος.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Vogais e ditongos',
      paragrafos: [
        'As vogais simples são α, ε, η, ι, ο, υ e ω. Tradicionalmente ε e ο são breves, η e ω são longas, enquanto α, ι e υ podem variar historicamente em quantidade. Essa distinção ajuda a compreender acentuação e história das formas, mesmo quando uma pronúncia pedagógica moderna não preserva todas as diferenças de quantidade.',
        'Ditongos são combinações vocálicas tratadas como uma unidade silábica em muitos contextos. Entre os mais importantes para o iniciante estão αι, ει, οι, αυ, ευ, ου e υι. Iota subscrito em ᾳ, ῃ e ῳ é vestígio histórico de antigos ditongos longos e deve ser reconhecido na leitura de edições acentuadas.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Leitura orientada de ditongos',
      itens: [
        'αι — reconheça como uma única combinação gráfica; exemplo: καί.',
        'ει — exemplo: εἰ; não separe mecanicamente as duas letras em duas sílabas.',
        'οι — exemplo: οἱ.',
        'ου — muito frequente; exemplo: οὐ.',
        'αυ e ευ — a realização fonética varia por convenção, mas a identificação morfológica da sequência deve ser imediata.',
        'Quando duas vogais precisam ser lidas separadamente, a diérese pode marcar a separação: ϊ, ϋ.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. Consoantes: aprender por famílias',
      paragrafos: [
        'Agrupar consoantes ajuda mais do que decorar uma lista sem relações. As chamadas mudas ou oclusivas podem ser organizadas pelo ponto de articulação: labiais π, β, φ; velares κ, γ, χ; dentais τ, δ, θ. Essas famílias serão importantes quando estudarmos mudanças de radical diante de terminações.',
        'Entre as líquidas destacam-se λ e ρ; μ e ν são nasais e frequentemente aparecem junto delas em descrições pedagógicas mais amplas de consoantes sonoras. Sigma σ/ς é a sibilante central. ξ e ψ representam historicamente combinações consonantais e serão úteis quando formas verbais e nominais sofrerem contrações ou encontros de consoantes.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te08-u2-a1',
      titulo: 'Treino de reconhecimento sem transliteração',
      enunciado: 'Leia em voz alta e copie duas vezes cada sequência: λόγος, θεός, κύριος, Ἰησοῦς, Χριστός, πνεῦμα, καί, οὐ.',
      itens: [
        'Circule todas as vogais e sublinhe os ditongos.',
        'Identifique a palavra que contém sigma final.',
        'Classifique π, κ e τ por sua família de consoantes mudas.',
        'Leia novamente sem escrever letras latinas sobre o texto.'
      ],
      resposta: 'Ditongos visíveis incluem ου em Ἰησοῦς e οὐ, ευ em πνεῦμα e αι em καί. Sigma final aparece, por exemplo, em λόγος, θεός, κύριος, Ἰησοῦς e Χριστός. π é labial, κ é velar e τ é dental. O exercício só está concluído quando o estudante reconhece as formas gregas diretamente, sem depender de transliteração.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O alfabeto grego tem 24 letras e deve ser reconhecido diretamente.',
        'σ e ς são formas posicionais da mesma letra sigma.',
        'Vogais e ditongos influenciam leitura, acentuação e morfologia.',
        'As consoantes mudas formam famílias labiais, velares e dentais.',
        'Pronúncia é ferramenta pedagógica; a forma escrita é o dado primário para análise morfológica.'
      ],
    },
  ],
  fontes: [
    {
      id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para alfabeto, leitura e progressão morfológica.'
    },
    {
      id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática clássica em domínio público com tratamento introdutório do alfabeto e da fonologia.'
    }
  ],
  atualizadoEm: '2026-09-09',
};
