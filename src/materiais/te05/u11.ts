import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u11-imperfeito-qal-verbo-forte',
  disciplina: 'TE05',
  unidade: 11,
  titulo: 'Verbos: o imperfeito Qal do verbo forte',
  objetivo: 'Formar e analisar o imperfeito Qal do verbo forte, reconhecendo prefixos, sufixos e seus principais valores contextuais.',
  topicosCobertos: ['Formação do Qal imperfeito', 'Prefixos e sufixos usados para formar o imperfeito Qal', 'Os significados do imperfeito'],
  blocos: [
    { tipo: 'texto', titulo: '1. O imperfeito usa principalmente prefixos pessoais', paragrafos: [
      'O chamado imperfeito, frequentemente denominado yiqtol, marca pessoa, gênero e número por uma combinação de prefixos e, em certas formas, sufixos. O paradigma forte tradicional usa יִקְטֹל como forma-modelo.',
      'Os prefixos א, ת, י e נ são pistas importantes: אֶקְטֹל 1cs, תִּקְטֹל pode representar 2ms ou 3fs, יִקְטֹל 3ms e נִקְטֹל 1cp. Número e gênero em várias formas são completados por terminações.'
    ] },
    { tipo: 'quadro', titulo: 'Formas-modelo selecionadas', itens: [
      '3ms יִקְטֹל; 3fs תִּקְטֹל.',
      '2ms תִּקְטֹל; 2fs תִּקְטְלִי.',
      '1cs אֶקְטֹל.',
      '3mp יִקְטְלוּ; 3fp תִּקְטֹלְנָה.',
      '2mp תִּקְטְלוּ; 2fp תִּקְטֹלְנָה.',
      '1cp נִקְטֹל.'
    ] },
    { tipo: 'texto', titulo: '2. “Imperfeito” não significa simplesmente futuro', paragrafos: [
      'Yiqtol frequentemente expressa situações futuras, habituais, potenciais ou modais, entre outros usos. O contexto sintático e discursivo é decisivo, e certas construções especializadas serão estudadas nas unidades seguintes.',
      'Assim como no perfeito, a tradução portuguesa deve ser consequência da análise e não a definição da forma. A oposição qatal/yiqtol não coincide de modo simples com passado/futuro.'
    ] },
    { tipo: 'atividade', id: 'te05-u11-a1', titulo: 'Atividade — prefixo, sufixo e contexto', enunciado: 'Analise יִקְטְלוּ, תִּקְטְלִי, אֶקְטֹל e נִקְטֹל.', itens: ['Identifique pessoa/gênero/número.', 'Marque prefixos e sufixos.', 'Explique por que a tradução temporal exige contexto.'], resposta: 'יִקְטְלוּ = 3mp; תִּקְטְלִי = 2fs; אֶקְטֹל = 1cs; נִקְטֹל = 1cp. A morfologia identifica a forma, mas futuro, hábito, possibilidade ou outro valor depende da construção e do discurso.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};