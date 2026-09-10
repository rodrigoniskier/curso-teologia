import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u9-epistemologia-2-fe-razao',
  disciplina: 'CG08',
  unidade: 9,
  titulo: 'Epistemologia II',
  objetivo: 'Analisar a relação entre fé e razão distinguindo racionalismo autônomo, fideísmo e uma compreensão reformada da razão como faculdade criada e subordinada à revelação.',
  topicosCobertos: ['Relacionamento fé e razão (Teologia e Filosofia)'],
  blocos: [
    { tipo: 'texto', titulo: '1. Fé e razão não são faculdades concorrentes', paragrafos: ['A oposição popular entre fé e razão costuma pressupor que fé é acreditar sem razões e razão é aceitar apenas o que pode ser demonstrado autonomamente. A tradição cristã reformada rejeita essa moldura: fé possui conteúdo cognitivo e a razão continua operando ao ler, inferir, comparar e argumentar.', 'O conflito real envolve autoridade e pressupostos últimos. A razão humana é valiosa porque é criatura de Deus, mas não funciona de um ponto arquimediano fora da criação, da história e do pecado.'] },
    { tipo: 'quadro', titulo: 'Três erros a evitar', itens: ['Racionalismo autônomo: só admitir como legítimo o que um tribunal independente da revelação aprova.', 'Fideísmo: tratar fé como dispensa de evidência, coerência e argumentação.', 'Irracionalismo religioso: confundir intensidade subjetiva com verdade.', 'Perspectiva reformada: usar a razão integralmente, reconhecendo sua condição criada e moralmente situada.'] },
    { tipo: 'texto', titulo: '2. Pressupostos não tornam evidências irrelevantes', paragrafos: ['Dizer que ninguém é neutro não autoriza ignorar documentos, observações ou argumentos. Evidências continuam importantes; a questão é que elas são interpretadas dentro de compromissos sobre realidade, autoridade e possibilidade.', 'A boa apologética e a boa teologia tornam esses compromissos explícitos sem usar “pressupostos” como fuga da investigação.'] },
    { tipo: 'atividade', id: 'cg08-u9-a1', titulo: 'Atividade — diagnosticar uma falsa oposição', enunciado: 'Avalie a frase: “Se uma crença depende de revelação, então não pode ser racional”. Identifique o pressuposto escondido e proponha uma resposta reformada.', itens: ['Pergunte por que apenas fontes não revelacionais seriam racionais.', 'Compare com o papel epistêmico do testemunho.', 'Diferencie autoridade da revelação e uso da razão.'], resposta: 'A frase pressupõe sem demonstrar que racionalidade exige autonomia em relação a qualquer autoridade recebida. Mas grande parte do conhecimento humano depende de testemunho confiável. A posição reformada sustenta que a revelação divina pode ser fonte racional de conhecimento e que a razão avalia relações, consequências e coerência sem se transformar na autoridade que legitima Deus.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Fé bíblica não é sinônimo de irracionalidade.', 'Razão é faculdade criada, real e indispensável.', 'Neutralidade última é diferente de objetividade ou honestidade intelectual.', 'Pressupostos devem ser explicitados, não usados para dispensar evidências.'] }
  ],
  fontes: [
    { id: 'sep-faith', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Faith', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/faith/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência acadêmica para modelos de fé e relação com razão e evidência.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Base confessional para luz da natureza e revelação especial.' }
  ],
  atualizadoEm: '2026-09-10',
};
