import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u6-significado-perfeito',
  disciplina: 'TE05',
  unidade: 6,
  titulo: 'Verbos: o significado do perfeito',
  objetivo: 'Interpretar o perfeito hebraico a partir de aspecto, tipo lexical e contexto discursivo, evitando identificá-lo automaticamente com o pretérito perfeito português.',
  topicosCobertos: ['Maneira de traduzir o perfeito hebraico'],
  blocos: [
    { tipo: 'texto', titulo: '1. Forma verbal não equivale a um tempo português', paragrafos: [
      'O chamado perfeito hebraico, frequentemente denominado qatal, apresenta a situação verbal como um todo ou como estado/resultante segundo o verbo e o contexto. Em narrativa ele é muitas vezes traduzido por passado, mas essa correspondência é frequente, não uma definição absoluta.',
      'Verbos estativos podem produzir traduções de estado presente; contextos proféticos, condicionais ou discursivos podem exigir soluções diferentes. A pergunta correta não é “qual tempo português corresponde ao perfeito?”, mas “como esta forma funciona nesta oração e neste discurso?”.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro dados para traduzir', itens: [
      'Morfologia: confirme que a forma é realmente um perfeito da pessoa indicada.',
      'Semântica lexical: ação, processo e estado comportam-se de modo diferente.',
      'Sintaxe: observe partículas, negação, subordinação e relação com outras formas verbais.',
      'Discurso: narrativa, poesia, profecia e fala direta organizam os eventos de maneiras diferentes.'
    ] },
    { tipo: 'texto', titulo: '2. Tradução responsável é contextual', paragrafos: [
      'Em muitos textos narrativos, uma forma qatal isolada pode ser traduzida naturalmente com passado em português. Isso não autoriza usar “passado” como etiqueta morfológica universal.',
      'A distinção prepara o estudante para formas futuras do curso, especialmente imperfeito e construções com waw, cujo valor também depende da interação entre morfologia e discurso.'
    ] },
    { tipo: 'atividade', id: 'te05-u6-a1', titulo: 'Atividade — não traduza pela etiqueta', enunciado: 'Um aluno vê qualquer forma qatal e traduz automaticamente pelo pretérito perfeito. Avalie o procedimento.', itens: ['Indique por que a estratégia funciona em alguns textos.', 'Explique por que falha como regra universal.', 'Liste os dados contextuais que devem ser observados.'], resposta: 'O passado é frequente em narrativas, mas qatal não é simplesmente um “pretérito”. A tradução deve combinar morfologia, tipo lexical, sintaxe e função no discurso.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};