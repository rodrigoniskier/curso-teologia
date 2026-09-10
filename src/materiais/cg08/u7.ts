import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u7-metafisica-3',
  disciplina: 'CG08',
  unidade: 7,
  titulo: 'Metafísica III',
  objetivo: 'Distinguir a reabertura heideggeriana da pergunta pelo ser da metafísica clássica e compreender a reconstrução analítica das modalidades associada a Kripke.',
  topicosCobertos: ['Reconstrução da metafísica (Martin Heidegger)', 'Metafísica das modalidades (Saul Kripke)'],
  blocos: [
    { tipo: 'texto', titulo: '1. Heidegger: voltar à pergunta pelo ser', paragrafos: ['Heidegger não simplesmente restaura Aristóteles. Ele acusa a tradição de concentrar-se nos entes e esquecer a pergunta pelo sentido do ser. Por isso distingue os entes — aquilo que é — do ser dos entes.', 'Em Ser e Tempo, a investigação parte do Dasein, o ente humano para quem seu próprio ser está em questão. Temporalidade, finitude, cuidado e ser-no-mundo tornam-se categorias fundamentais de sua análise.'] },
    { tipo: 'quadro', titulo: 'Diferença ontológica', itens: ['Entes: coisas, pessoas, eventos e tudo aquilo de que dizemos que “é”.', 'Ser: aquilo em virtude de que os entes são inteligíveis como entes.', 'A distinção impede tratar “ser” como se fosse apenas mais um objeto.', 'A teologia cristã não deve identificar automaticamente o Deus bíblico com uma peça dentro de uma ontologia filosófica.'] },
    { tipo: 'texto', titulo: '2. Kripke e o retorno técnico de possibilidade e necessidade', paragrafos: ['Na tradição analítica, a lógica modal tornou rigoroso o tratamento de expressões como “é necessário que” e “é possível que”. A semântica associada a Saul Kripke usa estruturas de mundos possíveis e relações de acessibilidade para representar condições contrafactuais.', 'Mundo possível, nesse contexto, não exige a existência de universos paralelos. É uma ferramenta semântica para falar de maneiras pelas quais as coisas poderiam ter sido. Isso reabriu perguntas sobre essência, identidade, necessidade e contingência.'] },
    { tipo: 'atividade', id: 'cg08-u7-a1', titulo: 'Atividade — necessário, possível e contingente', enunciado: 'Classifique as afirmações “2+2=4”, “Rodrigo poderia ter usado outra camisa hoje” e “um quadrado redondo existe” como necessária, contingente/possível ou impossível, explicando a diferença modal.', itens: ['Não confunda fato atual com necessidade.', 'Explique por que possibilidade não significa atualidade.', 'Identifique contradição conceitual quando houver.'], resposta: '“2+2=4” é tratada como necessária dentro da aritmética; “poderia ter usado outra camisa” descreve um estado contingente e uma alternativa possível; “quadrado redondo” é impossível porque combina propriedades contraditórias sob as definições usuais.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Heidegger reabre a pergunta pelo ser em vez de simplesmente restaurar a metafísica clássica.', 'A diferença ontológica distingue ser e entes.', 'Lógica modal formaliza necessidade e possibilidade.', 'Kripke ajudou a tornar modalidades e identidade novamente centrais na metafísica analítica.'] }
  ],
  fontes: [
    { id: 'sep-heidegger', autor: 'Stanford Encyclopedia of Philosophy', ano: '2025', titulo: 'Martin Heidegger', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/heidegger/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Base acadêmica para ser, Dasein e diferença ontológica.' },
    { id: 'sep-modal-logic', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Modal Logic', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/logic-modal/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Introdução à lógica modal e à semântica associada a Kripke.' }
  ],
  atualizadoEm: '2026-09-10',
};
