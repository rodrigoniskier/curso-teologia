import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u4-separacao-ministerio',
  disciplina: 'TP01',
  unidade: 4,
  titulo: 'Vocação e separação para o ministério',
  objetivo: 'Explicar consagração e dedicação exclusiva como formas de separação para o serviço, sem atribuir ao ministro uma santidade ontológica superior.',
  topicosCobertos: ['Consagração', 'Dedicação exclusiva'],
  blocos: [
    { tipo: 'texto', titulo: '1. Separar é designar para uma responsabilidade', paragrafos: [
      'Na linguagem eclesiástica, consagração pode sugerir que a pessoa se tornou uma espécie diferente de cristão. A teologia reformada rejeita essa leitura. Separar alguém para o ministério significa reconhecer publicamente uma responsabilidade determinada e ordenar a vida para exercê-la.',
      'A santidade exigida do pastor é santidade cristã real, não uma qualidade sacramental automática produzida pelo cargo. O ofício aumenta responsabilidade e prestação de contas; não cria uma classe espiritual superior.'
    ] },
    { tipo: 'texto', titulo: '2. Dedicação exclusiva é forma de exercício, não essência do chamado', paragrafos: [
      'Uma igreja pode sustentar o ministro para que concentre seu tempo na Palavra, no cuidado e no governo. Essa dedicação pode ser prudente e até necessária quando a extensão do trabalho exige disponibilidade integral.',
      'Contudo, exclusividade remunerada não constitui o chamado. Paulo trabalhou com as próprias mãos em certos períodos sem deixar de exercer seu ministério. O que define o ofício é chamado, qualificação e reconhecimento; a forma de sustento organiza seu exercício.'
    ] },
    { tipo: 'quadro', titulo: 'Distinções úteis', itens: [
      'Consagração: separação pública para serviço, não transformação ontológica.',
      'Sustento ministerial: direito e meio para viabilizar o serviço, não prova automática de vocação.',
      'Dedicação exclusiva: arranjo prudencial de tempo e trabalho, não categoria superior de espiritualidade.',
      'Bivocação: pode ser legítima, desde que responsabilidades do ofício sejam realmente cumpridas.'
    ] },
    { tipo: 'atividade', id: 'tp01-u4-a1', titulo: 'Atividade — exclusividade e chamado', enunciado: 'Um pastor precisa exercer trabalho profissional adicional por necessidade financeira. Alguém afirma que, por isso, ele não é verdadeiramente separado para o ministério. Avalie a afirmação.', itens: ['Distinga ofício de forma de sustento.', 'Considere as exigências reais do ministério.', 'Formule um critério responsável.'], resposta: 'A falta de dedicação exclusiva não anula a vocação. O critério é se o ministro foi regularmente chamado e ordenado, possui as qualificações e consegue cumprir fielmente as responsabilidades assumidas. A exclusividade pode ser desejável ou necessária em certos contextos, mas não é a essência do ofício.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Separação ministerial significa responsabilidade pública.', 'Consagração não cria cristão de categoria superior.', 'Dedicação exclusiva é forma de organizar o serviço, não fundamento do chamado.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Normatiza relações ministeriais, ordenação e exercício do ofício.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Base reformada para o chamado e a separação de ministros.' }
  ],
  atualizadoEm: '2026-09-11',
};
