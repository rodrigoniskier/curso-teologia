import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u2-relacao-construto',
  disciplina: 'TE05',
  unidade: 2,
  titulo: 'Substantivos: relação de construto',
  objetivo: 'Distinguir estado absoluto e estado construto, analisar cadeias de construto e reconhecer como forma, definitude e tradução se organizam nessa relação.',
  topicosCobertos: ['Definição de estado absoluto e estado construto', 'Função do estado construto', 'Formas do construto'],
  blocos: [
    { tipo: 'texto', titulo: '1. Dois substantivos podem formar uma unidade sintática', paragrafos: [
      'Na relação de construto, um substantivo é ligado diretamente ao elemento nominal seguinte. O primeiro membro aparece em estado construto; o segundo funciona como termo determinante. דְּבַר־יְהוָה pode ser analisado literalmente como “palavra-de YHWH” e traduzido naturalmente como “a palavra do SENHOR”.',
      'O estado absoluto é a forma nominal usada fora dessa dependência específica. O estado construto não é um caso como no grego; é uma forma e relação sintática do substantivo hebraico.'
    ] },
    { tipo: 'quadro', titulo: 'Regras operacionais', itens: [
      'O primeiro elemento da cadeia é o construto e depende do termo seguinte.',
      'O construto normalmente não recebe artigo definido diretamente; a definitude da cadeia depende do elemento determinante.',
      'Alguns substantivos mantêm a mesma aparência no construto; outros sofrem redução vocálica ou mudança de terminação.',
      'Uma cadeia pode conter mais de dois membros, mas a análise deve identificar a dependência passo a passo.',
      'O maqqef pode aparecer entre elementos, porém sua ausência não elimina automaticamente a relação de construto.'
    ] },
    { tipo: 'texto', titulo: '2. Forma e definitude', paragrafos: [
      'Em בֵּית הַמֶּלֶךְ, “a casa do rei”, בֵּית é o construto de בַּיִת. O artigo aparece no segundo membro, e toda a cadeia é definida porque o determinante é definido.',
      'Traduzir exige identificar primeiro a relação. A sequência hebraica frequentemente corresponde em português a construções com “de”, mas nem toda relação semântica se reduz a posse estrita.'
    ] },
    { tipo: 'atividade', id: 'te05-u2-a1', titulo: 'Atividade — desmontar a cadeia', enunciado: 'Analise דְּבַר הַמֶּלֶךְ e בֵּית אֱלֹהִים.', itens: ['Identifique absoluto/construto.', 'Determine a definitude da cadeia.', 'Proponha uma tradução natural.', 'Explique por que “de” pode expressar relações além de posse.'], resposta: 'דְּבַר e בֵּית são formas construtas; הַמֶּלֶךְ é definido e torna a primeira cadeia definida. אֱלֹהִים funciona como determinante em בֵּית אֱלֹהִים. A tradução deve preservar a relação nominal, não impor automaticamente uma posse material.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};