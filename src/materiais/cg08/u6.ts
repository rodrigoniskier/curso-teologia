import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg08-u6-metafisica-2',
  disciplina: 'CG08',
  unidade: 6,
  titulo: 'Metafísica II',
  objetivo: 'Explicar a crítica kantiana à metafísica dogmática e o programa antimetafísico do positivismo lógico, distinguindo crítica de transformação e avaliando seus próprios critérios.',
  topicosCobertos: ['Rejeição da metafísica (Immanuel Kant)', 'Rejeição da metafísica (Positivismo lógico)'],
  blocos: [
    { tipo: 'texto', titulo: '1. Kant limita a metafísica especulativa', paragrafos: ['Descrever Kant como simples “rejeição da metafísica” exige precisão. Seu projeto crítico pergunta como o conhecimento é possível e quais limites a razão deve respeitar. O alvo é a pretensão dogmática de conhecer realidades suprassensíveis do mesmo modo que objetos da experiência.', 'A revolução copernicana kantiana sustenta que a experiência conhecida por nós é estruturada pelas condições do sujeito cognoscente. Isso restringe o que a razão teórica pode afirmar sobre alma, mundo como totalidade e Deus como se fossem objetos empíricos.'] },
    { tipo: 'quadro', titulo: 'O que muda com Kant', itens: ['Conhecimento não é mera cópia passiva de um mundo já organizado.', 'As condições do sujeito participam da forma da experiência.', 'A razão especulativa recebe limites.', 'A metafísica não desaparece: parte dela é criticada e parte é reconstruída em novas bases.'] },
    { tipo: 'texto', titulo: '2. Positivismo lógico: atacar o significado, não apenas a verdade', paragrafos: ['No século XX, o empirismo lógico tentou criticar a metafísica perguntando se certas proposições possuíam conteúdo cognitivamente significativo. Versões fortes do verificacionismo exigiam ligação clara entre afirmações factuais e condições possíveis de experiência.', 'O programa teve força crítica contra linguagem obscura, mas enfrentou uma dificuldade clássica: o próprio princípio de verificação não parece ser uma generalização empírica verificável do mesmo tipo que exige dos demais enunciados. A crítica ao mau discurso metafísico sobreviveu melhor que a tentativa de eliminar toda metafísica.'] },
    { tipo: 'atividade', id: 'cg08-u6-a1', titulo: 'Atividade — aplicar o critério ao próprio critério', enunciado: 'Um aluno afirma: “só tem significado cognitivo aquilo que pode ser verificado empiricamente”. Avalie a frase usando o próprio padrão que ela propõe.', itens: ['Pergunte se a frase é ela mesma verificável empiricamente.', 'Diferencie uma regra metodológica útil de um critério universal de significado.', 'Mostre o que ainda pode ser aproveitado da crítica positivista.'], resposta: 'O princípio forte parece não satisfazer o próprio critério, pois não é resultado direto de uma observação empírica. Como regra universal, torna-se autoderrotante ou precisa ser reformulado. Ainda assim, a exigência de clareza, condições de uso e ligação entre afirmações e evidências é uma disciplina filosófica valiosa.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Kant critica sobretudo a metafísica dogmática.', 'Seu projeto redefine os limites do conhecimento teórico.', 'O positivismo lógico tentou excluir metafísica por critérios de significado.', 'A crítica ao discurso obscuro permanece útil mesmo após o enfraquecimento do verificacionismo forte.'] }
  ],
  fontes: [
    { id: 'sep-kant', autor: 'Stanford Encyclopedia of Philosophy', ano: '—', titulo: 'Immanuel Kant', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/kant/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Base para o projeto crítico kantiano.' },
    { id: 'sep-logical-empiricism', autor: 'Stanford Encyclopedia of Philosophy', ano: '2022', titulo: 'Logical Empiricism', publicacao: 'Stanford University', url: 'https://plato.stanford.edu/entries/logical-empiricism/', idioma: 'en', tipo: 'verbete', acesso: 'livre', nota: 'Referência para positivismo lógico, verificação e antimetafísica.' }
  ],
  atualizadoEm: '2026-09-10',
};
