import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u13-imperfeito-demais-troncos',
  disciplina: 'TE05',
  unidade: 13,
  titulo: 'Verbos: imperfeito dos demais troncos',
  objetivo: 'Reconhecer padrões do imperfeito nos demais troncos, compreender a construção narrativa wayyiqtol e identificar o he-locale como marcador nominal de direção.',
  topicosCobertos: ['Formação do imperfeito dos demais troncos', 'Imperfeito com vav consecutivo', 'He-locale (indicador de direção)'],
  blocos: [
    { tipo: 'texto', titulo: '1. Cada tronco preserva sua identidade no imperfeito', paragrafos: [
      'Niphal, Piel, Pual, Hiphil, Hophal e Hithpael possuem padrões próprios no imperfeito. Os prefixos pessoais do sistema yiqtol permanecem importantes, mas vocalização, prefixos do tronco e mudanças internas permitem distinguir os binyanim.',
      'O estudante deve comparar a forma encontrada com o paradigma do tronco e com a raiz. Verbos fracos podem modificar a aparência esperada e exigem consulta ao léxico.'
    ] },
    { tipo: 'quadro', titulo: 'Waw + forma verbal narrativa', itens: [
      'A gramática tradicional chama וַ + forma prefixal de “imperfeito com waw consecutivo” ou “waw conversivo”.',
      'Na narrativa bíblica, a construção wayyiqtol frequentemente avança a sequência de eventos: וַיֹּאמֶר “e disse”, וַיֵּלֶךְ “e foi”, conforme os verbos.',
      'É melhor reconhecer a construção como forma discursiva própria do sistema narrativo do que imaginar que a letra waw simplesmente “transforma futuro em passado”.',
      'Forma, gênero textual e cadeia narrativa precisam ser lidos em conjunto.'
    ] },
    { tipo: 'texto', titulo: '2. He-locale não é terminação verbal', paragrafos: [
      'O chamado he-locale ou he direcional é um הָ־ acrescentado a certos substantivos ou advérbios para indicar direção, aproximadamente “para/em direção a”. Uma forma como מִצְרַיְמָה pode significar “para o Egito”.',
      'Embora apareça nesta unidade do programa ao lado de verbos, sua função é nominal/adverbial. Reconhecê-lo impede confundir o ה final com marca feminina ou com uma terminação verbal.'
    ] },
    { tipo: 'atividade', id: 'te05-u13-a1', titulo: 'Atividade — três camadas diferentes', enunciado: 'Em um pequeno trecho narrativo, identifique uma forma de imperfeito em tronco não-Qal, uma forma wayyiqtol e uma palavra com he-locale.', itens: ['Classifique o tronco.', 'Explique a função narrativa do wayyiqtol.', 'Mostre que o he-locale indica direção e não flexão verbal.'], resposta: 'A análise precisa manter distintas as três categorias: paradigma verbal do binyan, construção narrativa com waw e forma nominal/adverbial direcional em הָ־.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};