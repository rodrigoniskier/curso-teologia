import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u8-epistemologia-1',
  disciplina: 'CG08',
  unidade: 8,
  titulo: 'Epistemologia I',
  objetivo: 'Introduzir a teoria do conhecimento distinguindo crença, verdade, justificação e sorte epistêmica, além de reconhecer fontes e limites do conhecimento humano.',
  topicosCobertos: ['Introdução à teoria do conhecimento'],
  blocos: [
    { tipo: 'texto', titulo: '1. Saber não é apenas acertar', paragrafos: ['Uma crença pode ser verdadeira por acaso. Por isso a epistemologia pergunta não apenas se uma proposição é verdadeira, mas como o sujeito chegou a ela e se o processo ou as razões utilizados são adequados.', 'A fórmula clássica “crença verdadeira justificada” continua pedagogicamente útil, embora os casos de Gettier tenham mostrado que verdade, crença e uma justificativa aparentemente boa ainda podem coincidir por sorte.'] },
    { tipo: 'quadro', titulo: 'Fontes epistêmicas comuns', itens: ['Percepção: contato sensorial com o mundo.', 'Memória: preservação de informação adquirida.', 'Razão e inferência: extração de consequências e identificação de contradições.', 'Introspecção: acesso a alguns estados mentais próprios.', 'Testemunho: conhecimento recebido de outras pessoas e instituições.'] },
    { tipo: 'texto', titulo: '2. Falibilidade não elimina conhecimento', paragrafos: ['Exigir certeza logicamente impossível de revisar tornaria quase todo conhecimento cotidiano e científico inalcançável. Uma crença pode ser racional e bem garantida mesmo quando permanece, em princípio, corrigível.', 'Maturidade epistêmica combina confiança proporcional às evidências com abertura à correção. A possibilidade abstrata de erro não coloca todas as alternativas no mesmo nível de plausibilidade.'] },
    { tipo: 'atividade', id: 'cg08-u8-a1', titulo: 'Atividade — crença verdadeira por sorte', enunciado: 'Uma pessoa olha um relógio parado há doze horas exatamente no momento em que ele volta a mostrar a hora correta. Ela acredita na hora certa. Explique por que hesitamos em chamar isso de conhecimento.', itens: ['Identifique crença e verdade.', 'Mostre onde entra a sorte.', 'Explique o problema para a justificação.'], resposta: 'A pessoa crê numa proposição verdadeira e possui uma razão aparentemente normal — olhar o relógio —, mas a conexão entre sua razão e a verdade é acidental. O caso mostra que conhecimento exige mais do que coincidência entre crença verdadeira e uma justificativa que, naquele contexto, não é confiável.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Epistemologia investiga natureza, fontes, limites e justificação do conhecimento.', 'Verdade é necessária, mas acerto por sorte não basta.', 'Conhecimento humano utiliza várias fontes.', 'Falibilidade e racionalidade podem coexistir.'] }
  ],
  fontes: [
    { id: 'sep-epistemology', autor: 'Stanford Encyclopedia of Philosophy', ano: '2024', titulo: 'Epistemology', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/epistemology/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Base acadêmica para conhecimento, justificação e ceticismo.' }
  ],
  atualizadoEm: '2026-09-10',
};
