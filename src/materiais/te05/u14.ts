import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u14-daguesh-forte-conjuntivo',
  disciplina: 'TE05',
  unidade: 14,
  titulo: 'Daguesh forte conjuntivo',
  objetivo: 'Reconhecer o daguesh forte conjuntivo como fenômeno fonológico ligado à junção estreita entre palavras e distingui-lo de outros usos do daguesh.',
  topicosCobertos: ['Uso do daguesh forte conjuntivo'],
  blocos: [
    { tipo: 'texto', titulo: '1. Nem todo daguesh forte tem a mesma motivação', paragrafos: [
      'O daguesh forte indica duplicação ou fortalecimento histórico/fonológico da consoante, mas pode surgir por razões diferentes: assimilação, padrões morfológicos, artigo definido e, em certos contextos, ligação estreita entre palavras.',
      'O chamado daguesh forte conjuntivo aparece em condições fonológicas específicas na primeira consoante de uma palavra fortemente ligada à precedente. É um fenômeno de pronúncia/tradição massorética, não um novo morfema com significado próprio.'
    ] },
    { tipo: 'quadro', titulo: 'Como não confundir', itens: [
      'Daguesh lene distingue pronúncia das letras begadkefat em determinados ambientes; não implica necessariamente duplicação histórica.',
      'Daguesh forte morfológico pode marcar assimilação, artigo ou padrões como certos troncos verbais.',
      'Daguesh forte conjuntivo depende da conexão fonológica entre palavras adjacentes.',
      'A função deve ser inferida pelo ambiente morfológico e fonológico, não apenas pelo ponto dentro da letra.'
    ] },
    { tipo: 'texto', titulo: '2. Por que estudar um detalhe tão pequeno', paragrafos: [
      'O valor pedagógico está em perceber que a vocalização e os sinais massoréticos registram uma tradição de leitura extremamente detalhada. Nem todo sinal corresponde a uma diferença lexical ou sintática.',
      'Na tradução, o daguesh conjuntivo raramente exige uma palavra portuguesa específica; sua importância é para leitura, morfologia histórica e análise correta da forma.'
    ] },
    { tipo: 'atividade', id: 'te05-u14-a1', titulo: 'Atividade — classificar o daguesh', enunciado: 'Diante de exemplos vocalizados, determine se um daguesh pode ser explicado por artigo, assimilação, padrão verbal, begadkefat ou ligação conjuntiva.', itens: ['Observe a palavra precedente.', 'Procure morfemas conhecidos.', 'Distinga efeito fonológico de significado lexical.'], resposta: 'A classificação depende do ambiente. O daguesh conjuntivo deve ser reconhecido quando a duplicação decorre da junção fonológica estreita e não de morfema como artigo ou de padrão interno do verbo.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};