import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u3-vocacao-crentes-ministerial',
  disciplina: 'TP01',
  unidade: 3,
  titulo: 'Vocação de todos os crentes e vocação ministerial',
  objetivo: 'Comparar a vocação comum de todos os crentes com a vocação ministerial, preservando igualdade de dignidade cristã e distinção real de ofícios.',
  topicosCobertos: ['Diferenças', 'Semelhanças'],
  blocos: [
    { tipo: 'texto', titulo: '1. A Reforma desmonta o cristianismo de dois andares', paragrafos: [
      'A doutrina reformada da vocação rejeita a ideia de que só o clero serve a Deus em tempo integral. Todo crente pertence a Cristo e serve ao próximo em trabalho, família, igreja e sociedade. Isso devolve dignidade teológica à vida ordinária.',
      'O sacerdócio de todos os crentes, porém, não significa que todos exercem os mesmos ofícios. A igualdade diante de Deus elimina castas espirituais; não elimina responsabilidades públicas instituídas por Cristo.'
    ] },
    { tipo: 'quadro', titulo: 'Semelhanças', itens: [
      'Mesma fonte: toda vocação cristã é vivida sob a providência e senhorio de Deus.',
      'Mesmo fundamento: ninguém serve por mérito próprio, mas como alguém recebido pela graça.',
      'Mesmo fim último: glorificar a Deus e servir ao próximo.',
      'Mesma necessidade de santidade: o ministro não pertence a uma categoria moral superior.'
    ] },
    { tipo: 'quadro', titulo: 'Diferenças', itens: [
      'O ministério possui responsabilidade pública pela Palavra, cuidado e governo eclesiástico.',
      'Exige qualificações bíblicas específicas e exame eclesiástico.',
      'Envolve autoridade delimitada pelo ofício, pela Escritura e pela ordem da Igreja.',
      'Pode exigir formação, ordenação e formas específicas de sustento e dedicação.'
    ] },
    { tipo: 'texto', titulo: '2. Dois erros opostos', paragrafos: [
      'O clericalismo transforma o pastor em cristão de primeira classe e rebaixa os demais a apoiadores do ministério. O igualitarismo funcional comete o erro inverso: conclui que, como todos são sacerdotes diante de Deus, qualquer crente pode assumir qualquer função eclesiástica sem chamado ou exame.',
      'A posição reformada preserva as duas verdades: toda vida lícita pode ser serviço a Deus, e Cristo também instituiu ofícios com deveres e critérios próprios.'
    ] },
    { tipo: 'atividade', id: 'tp01-u3-a1', titulo: 'Atividade — corrigindo uma falsa hierarquia', enunciado: 'Uma igreja afirma que missionários e pastores “servem a Deus de verdade”, enquanto médicos, professores e comerciantes apenas sustentam quem serve. Corrija a frase sem dissolver a especificidade do ministério pastoral.', itens: ['Afirme a vocação comum.', 'Preserve o ofício ministerial.', 'Explique a diferença de dignidade e função.'], resposta: 'Todo crente serve a Deus em sua estação quando sua atividade é lícita e orientada ao bem. Pastores e missionários não são cristãos superiores, mas exercem responsabilidades eclesiásticas próprias, que exigem chamado, qualificações e reconhecimento da Igreja. A dignidade cristã é comum; a função não é idêntica.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Todos os crentes têm vocação diante de Deus.', 'Vocação ministerial não cria casta espiritual.', 'Igualdade de dignidade não significa identidade de função ou autoridade.'] }
  ],
  fontes: [
    { id: 'lutero-tres-tratados', autor: 'Martinho Lutero', ano: '1520', titulo: 'First Principles of the Reformation', publicacao: 'Internet Archive', url: 'https://archive.org/details/firstprinciples00buchgoog', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Contém a crítica à distinção entre estado espiritual e temporal e o argumento sobre o sacerdócio de todos os crentes.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fundamenta vocação, ofícios e a doutrina da estação cristã.' }
  ],
  atualizadoEm: '2026-09-11',
};
