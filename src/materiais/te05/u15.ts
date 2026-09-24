import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u15-sufixos-pronominais-verbos',
  disciplina: 'TE05',
  unidade: 15,
  titulo: 'Verbos: sufixos pronominais',
  objetivo: 'Reconhecer sufixos pronominais ligados a formas do perfeito e do imperfeito, distinguindo o sujeito codificado pela conjugação do objeto pronominal anexado ao verbo.',
  topicosCobertos: ['Sufixos pronominais em formas do perfeito', 'Sufixos pronominais em formas do imperfeito'],
  blocos: [
    { tipo: 'texto', titulo: '1. O verbo pode codificar sujeito e objeto na mesma palavra', paragrafos: [
      'As terminações da conjugação identificam o sujeito do verbo; um sufixo pronominal adicional pode representar o objeto. Por isso, a análise precisa separar morfemas em camadas, evitando atribuir ao mesmo elemento duas funções.',
      'Formas sufixadas podem provocar mudanças vocálicas na base. O reconhecimento parte da raiz, do tronco e da conjugação e só depois identifica o sufixo objeto.'
    ] },
    { tipo: 'quadro', titulo: 'Procedimento de parsing', itens: [
      'Identifique a raiz e o tronco verbal.',
      'Determine se a base é perfeito ou imperfeito e qual é o sujeito marcado.',
      'Separe o sufixo pronominal e determine pessoa/gênero/número do objeto.',
      'Observe mudanças vocálicas causadas pela sufixação.',
      'Traduza sujeito e objeto em português apenas depois da análise morfológica.'
    ] },
    { tipo: 'texto', titulo: '2. Sufixo verbal não é o mesmo que sufixo nominal', paragrafos: [
      'Nos substantivos, o sufixo normalmente expressa uma relação genitiva ou possessiva: “sua casa”. Em verbos transitivos, o sufixo normalmente representa o objeto: “ele o guardou”, “ele me ouviu”. A forma do pronome pode ser aparentada, mas sua função é determinada pela base à qual se liga.',
      'No imperfeito, prefixos/sufixos da conjugação e sufixo objeto podem coexistir. O estudante deve evitar segmentar pela aparência apenas; o paradigma e o léxico confirmam a análise.'
    ] },
    { tipo: 'atividade', id: 'te05-u15-a1', titulo: 'Atividade — sujeito e objeto', enunciado: 'Receba formas verbais sufixadas do perfeito e do imperfeito e faça o parsing em camadas.', itens: ['Identifique a conjugação do verbo.', 'Determine o sujeito morfológico.', 'Separe o sufixo objeto.', 'Explique qualquer mudança vocálica da base.'], resposta: 'A resposta deve distinguir claramente a morfologia que marca o sujeito da conjugação e o pronome objeto anexado. Só depois disso a tradução deve representar ambos em português.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};