import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u11-teoria-valores-etica',
  disciplina: 'CG08',
  unidade: 11,
  titulo: 'Teoria dos valores: Ética',
  objetivo: 'Introduzir ética normativa e metaética, distinguindo consequências, deveres, virtudes e fundamentos do valor moral, e relacionar essas categorias à visão reformada do caráter e da lei de Deus.',
  topicosCobertos: ['Ética'],
  blocos: [
    { tipo: 'texto', titulo: '1. Ética pergunta tanto “o que fazer?” quanto “por quê?”', paragrafos: ['Ética normativa procura critérios para orientar ações e caráter. Três famílias funcionam como mapa inicial: consequencialismo enfatiza resultados; deontologia, deveres e limites; ética das virtudes, caráter e florescimento. Teorias reais podem combinar elementos dessas famílias.', 'Metaética recua um nível e pergunta o que significa dizer que algo é moralmente bom, errado ou obrigatório, se há fatos morais objetivos e como podemos conhecê-los.'] },
    { tipo: 'quadro', titulo: 'Três famílias normativas', itens: ['Consequencialismo: avalia ações principalmente pelos resultados produzidos.', 'Deontologia: enfatiza deveres, regras, direitos e limites.', 'Ética das virtudes: pergunta que tipo de pessoa devemos nos tornar.', 'Uma ética cristã bíblica contém mandamentos, consequências e formação de caráter, sem se reduzir perfeitamente a uma única etiqueta filosófica.'] },
    { tipo: 'texto', titulo: '2. O problema de Eutífron e o fundamento do bem', paragrafos: ['O dilema clássico pergunta se algo é bom porque Deus ordena ou se Deus ordena porque reconhece um padrão de bem independente dele. A resposta cristã clássica rejeita a alternativa: o bem não é regra acima de Deus nem produto de capricho; a vontade santa expressa o caráter bom de Deus.', 'Essa resposta não dispensa exegese nem discernimento. Invocar “Deus mandou” por impressão privada não transforma preferências em moralidade. A norma cristã depende do Deus que se revelou e da interpretação responsável de sua Palavra.'] },
    { tipo: 'atividade', id: 'cg08-u11-a1', titulo: 'Atividade — identificar o tipo de razão moral', enunciado: 'Três pessoas dizem: (A) “não faça isso porque causará mais sofrimento”; (B) “não faça isso porque viola um dever”; (C) “não faça isso porque forma um caráter injusto”. Classifique as três razões e mostre por que a classificação não decide automaticamente qual está correta.', itens: ['Identifique consequencialismo, deontologia e virtudes.', 'Diferencie classificação de justificação.', 'Pergunte pelo fundamento último do valor.'], resposta: 'A enfatiza consequência, B dever e C caráter/virtude. A classificação mostra a estrutura da razão oferecida, mas não prova sua verdade. Ainda é preciso justificar quais consequências contam, de onde vem o dever, quais virtudes são genuínas e qual visão de bem humano sustenta o argumento.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Ética normativa orienta ação e caráter.', 'Metaética investiga a natureza e o fundamento do valor moral.', 'Consequências, deveres e virtudes são categorias distintas e complementares em muitos casos.', 'Na perspectiva reformada, o bem se fundamenta no caráter de Deus e é conhecido normativamente por sua revelação.'] }
  ],
  fontes: [
    { id: 'sep-metaethics', autor: 'Stanford Encyclopedia of Philosophy', ano: '2023', titulo: 'Metaethics', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/metaethics/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Base acadêmica para fundamentos e teorias do valor moral.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para caráter de Deus, lei moral e liberdade humana.' }
  ],
  atualizadoEm: '2026-09-10',
};
