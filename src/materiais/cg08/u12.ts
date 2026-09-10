import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u12-teoria-valores-estetica',
  disciplina: 'CG08',
  unidade: 12,
  titulo: 'Teoria dos valores: Estética',
  objetivo: 'Introduzir estética como investigação filosófica do belo, do gosto, da experiência e do valor estético, distinguindo subjetivismo, objetivismo e modelos relacionais.',
  topicosCobertos: ['Estética'],
  blocos: [
    { tipo: 'texto', titulo: '1. Estética é mais ampla que filosofia da arte', paragrafos: ['Estética investiga beleza, feiura, sublime, gosto, experiência estética, julgamento e valor. Obras de arte são campo central, mas paisagens, arquitetura, voz, liturgia e até elegância matemática também podem suscitar avaliação estética.', 'A pergunta filosófica não é apenas “do que eu gosto?”, mas se julgamentos estéticos oferecem razões compartilháveis e se certas propriedades do objeto contribuem para uma resposta apropriada.'] },
    { tipo: 'quadro', titulo: 'Três maneiras de pensar o julgamento estético', itens: ['Subjetivismo forte: o juízo relata principalmente preferência do sujeito.', 'Objetivismo forte: a beleza corresponde a propriedades reais do objeto.', 'Modelos relacionais: qualidades reais fundamentam respostas de sujeitos adequadamente situados e atentos.', 'Nenhuma posição elimina automaticamente diversidade cultural ou possibilidade de educação do gosto.'] },
    { tipo: 'texto', titulo: '2. “Gosto não se discute” é insuficiente', paragrafos: ['Não se pode obrigar alguém a sentir prazer, mas disso não segue que toda avaliação estética tenha o mesmo peso. Podemos aprender a perceber estrutura, técnica, contexto e expressividade que antes ignorávamos.', 'Uma perspectiva reformada não recebe da Escritura uma teoria estética pronta. Recebe uma moldura: criação boa e ordenada, humanidade imaginativa, queda que afeta desejo e percepção e graça comum que permite realizações culturais reais fora da igreja. Isso evita tanto sectarismo estético quanto neutralidade cultural ingênua.'] },
    { tipo: 'atividade', id: 'cg08-u12-a1', titulo: 'Atividade — argumentar sobre beleza sem absolutizar o gosto', enunciado: 'Uma pessoa diz: “essa música é ruim porque eu não gostei”. Reformule a avaliação de modo filosoficamente mais responsável, indicando que razões poderiam ser discutidas.', itens: ['Diferencie reação pessoal e juízo sobre a obra.', 'Aponte propriedades observáveis.', 'Reconheça contexto e formação perceptiva.'], resposta: 'A pessoa pode dizer que não gostou e, separadamente, avaliar aspectos como coerência formal, execução, expressividade, relação entre partes e adequação ao gênero. O julgamento continua envolvendo resposta subjetiva, mas pode ser sustentado por razões públicas e aperfeiçoado por atenção e conhecimento.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Estética investiga experiência e valor estético, não apenas obras de arte.', 'Preferência pessoal e julgamento argumentado não são idênticos.', 'Objeto, sujeito e contexto podem participar da experiência estética.', 'A visão reformada oferece uma moldura criacional e ética para a cultura, não um cânon artístico infalível.'] }
  ],
  fontes: [
    { id: 'sep-aesthetic-concept', autor: 'Stanford Encyclopedia of Philosophy', ano: '2026', titulo: 'The Concept of the Aesthetic', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/aesthetic-concept/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência acadêmica para experiência, julgamento e valor estéticos.' },
    { id: 'kuyper-calvinismo', autor: 'Abraham Kuyper', ano: '1898', titulo: 'Calvinism: Six Lectures', publicacao: 'Internet Archive', url: 'https://archive.org/details/calvinismsixlect00kuyp', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fonte reformada primária para arte, criação e cultura.' }
  ],
  atualizadoEm: '2026-09-10',
};
