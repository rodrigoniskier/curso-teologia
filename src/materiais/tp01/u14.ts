import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u14-postura-pastoral',
  disciplina: 'TP01',
  unidade: 14,
  titulo: 'Vocação e postura pastoral',
  objetivo: 'Distinguir caráter bíblico de perfil ministerial e mostrar como postura pastoral expressa coerência entre doutrina, vida, autoridade e limites.',
  topicosCobertos: ['O caráter do pastor', 'O perfil do pastor'],
  blocos: [
    { tipo: 'texto', titulo: '1. Caráter não é persona', paragrafos: [
      'Igrejas frequentemente constroem uma imagem ideal de pastor: determinada voz, roupa, repertório, extroversão, disponibilidade ou presença pública. Algumas preferências podem ser legítimas, mas não podem ser promovidas a qualificações apostólicas adicionais.',
      'Caráter pastoral é santidade cristã aplicada às responsabilidades do ofício: verdade, sobriedade, hospitalidade, justiça, domínio próprio, mansidão, desprendimento de dinheiro, ensinabilidade e trato sem favoritismo.'
    ] },
    { tipo: 'texto', titulo: '2. Perfil é forma; caráter é princípio', paragrafos: [
      'Personalidades diferentes podem encarnar as mesmas virtudes. Um introvertido e um extrovertido podem ser hospitaleiros; um pastor mais acadêmico e outro mais relacional podem ser fiéis, desde que cumpram os deveres do ofício.',
      'O perfil pastoral deve ser avaliado por sua adequação ao contexto e às responsabilidades, sem substituir o padrão bíblico. A Igreja pode considerar dons e estilo, mas não deve confundir preferência cultural com caráter.'
    ] },
    { tipo: 'quadro', titulo: 'Postura pastoral inclui limites', itens: [
      'Autoridade sem domínio: o pastor serve, persuade e presta contas.',
      'Disponibilidade sem onipresença: o rebanho tem acesso responsável, mas a família e o descanso permanecem reais.',
      'Visibilidade sem persona: comunicação pública não deve fabricar uma identidade clerical artificial.',
      'Convicção sem infalibilidade: firmeza doutrinária é compatível com receber correção.'
    ] },
    { tipo: 'atividade', id: 'tp01-u14-a1', titulo: 'Atividade — perfil local e requisito bíblico', enunciado: 'Uma igreja rejeita um candidato porque ele é introvertido, embora seja hospitaleiro, claro no ensino, maduro e relacionalmente fiel. Avalie o critério.', itens: ['Diferencie personalidade e virtude.', 'Considere necessidades reais do contexto.', 'Evite criar requisito extrabíblico.'], resposta: 'Introversão não é desqualificação bíblica. A igreja pode avaliar se o candidato consegue cumprir deveres pastorais concretos, mas deve fazê-lo por evidências de caráter, competência e adequação real, não por um estereótipo de personalidade ministerial.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Caráter pastoral é bíblico e observável.', 'Perfil ministerial pode variar legitimamente.', 'Postura fiel une convicção, limites, responsabilidade e coerência de vida.'] }
  ],
  fontes: [
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência clássica sobre caráter e exame de si no ministério.' },
    { id: 'spurgeon-lectures', autor: 'Charles Haddon Spurgeon', ano: '1875', titulo: 'Lectures to My Students', publicacao: 'Internet Archive', url: 'https://archive.org/details/lecturestomystud1877spur', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Aulas sobre caráter, limites e perigos da vida ministerial.' }
  ],
  atualizadoEm: '2026-09-11',
};
