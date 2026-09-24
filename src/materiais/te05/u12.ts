import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u12-jussivo-coortativo',
  disciplina: 'TE05',
  unidade: 12,
  titulo: 'Verbos: o jussivo e o coortativo',
  objetivo: 'Distinguir jussivo e coortativo como formas volitivas, reconhecendo pessoa, morfologia e função contextual sem tratá-los como simples tempos verbais.',
  topicosCobertos: ['Definição e características do jussivo', 'Definição e características do coortativo'],
  blocos: [
    { tipo: 'texto', titulo: '1. O jussivo expressa volição sobretudo em segunda e terceira pessoas', paragrafos: [
      'O jussivo é uma forma/modalidade volitiva usada especialmente para ordens, desejos, permissões, proibições ou solicitações relacionadas a segunda e terceira pessoas. Em muitos verbos sua forma é idêntica ao imperfeito; em algumas classes surgem formas encurtadas que ajudam a identificá-lo.',
      'A partícula negativa אַל é frequentemente associada a proibições com valor jussivo. A identificação, porém, depende da combinação entre morfologia, partícula e contexto.'
    ] },
    { tipo: 'quadro', titulo: 'Coortativo', itens: [
      'O coortativo é característico da primeira pessoa singular ou plural e expressa intenção, desejo, resolução ou exortação.',
      'Frequentemente apresenta uma terminação הָ־ acrescentada à forma verbal, embora a marca não seja obrigatória em todas as ocorrências.',
      'Uma tradução portuguesa pode usar “quero...”, “que eu...”, “vamos...” ou outra construção modal conforme o contexto.',
      'Jussivo e coortativo pertencem ao domínio da modalidade/volição, não a uma simples cronologia.'
    ] },
    { tipo: 'texto', titulo: '2. Forma e pragmática trabalham juntas', paragrafos: [
      'Uma forma curta ou uma terminação coortativa oferece evidência morfológica, mas o tipo de ato de fala — ordem, desejo, pedido, resolução — é estabelecido no contexto.',
      'O estudante deve evitar traduzir toda forma volitiva com o mesmo verbo auxiliar português. O alvo é preservar a força comunicativa do enunciado.'
    ] },
    { tipo: 'atividade', id: 'te05-u12-a1', titulo: 'Atividade — reconhecer volição', enunciado: 'Compare uma forma yiqtol comum, uma construção com אַל e jussivo e uma primeira pessoa com ה coortativo.', itens: ['Identifique pessoa.', 'Procure marca morfológica.', 'Descreva a força volitiva provável.', 'Escolha uma tradução portuguesa adequada ao contexto.'], resposta: 'A classificação deve combinar pessoa, forma e partículas. Jussivo aparece sobretudo em 2ª/3ª pessoas e o coortativo em 1ª pessoa; a tradução deve refletir ordem, desejo, resolução ou exortação conforme o discurso.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};