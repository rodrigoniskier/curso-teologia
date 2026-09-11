import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u13-projeto-comunicacao-diagnostico',
  disciplina: 'TP55',
  unidade: 13,
  titulo: 'Elaboração de um projeto de comunicação para uma igreja local 1',
  objetivo: 'Iniciar um projeto multimídia de comunicação e evangelização a partir de diagnóstico, públicos, objetivos e critérios de fidelidade.',
  topicosCobertos: ['Projeto de uso de várias mídias para a divulgação da igreja e evangelização'],
  blocos: [
    { tipo: 'texto', titulo: '1. O projeto começa pelo problema, não pela plataforma', paragrafos: [
      'Um projeto de comunicação precisa explicar qual necessidade existe antes de listar ferramentas. “Precisamos de Instagram” é uma solução sem diagnóstico; “visitantes não encontram informação confiável sobre horários, crenças e localização” é um problema verificável.',
      'O diagnóstico deve combinar observação da igreja, do território e dos públicos: membros, visitantes, vizinhança, pessoas em busca de ensino, famílias, jovens, idosos e parceiros institucionais podem exigir canais diferentes.'
    ] },
    { tipo: 'quadro', titulo: 'Documento de diagnóstico', itens: [
      'Problema: o que hoje impede compreensão, contato, participação ou testemunho?',
      'Públicos: quem precisa receber a comunicação?',
      'Objetivo: o que deve mudar depois do projeto?',
      'Mensagem central: o que a igreja precisa comunicar com fidelidade?',
      'Restrições: equipe, orçamento, tempo, competências, privacidade e governo.',
      'Critério de sucesso: qual evidência mostrará que o problema foi realmente reduzido?'
    ] },
    { tipo: 'texto', titulo: '2. Evangelização não é campanha de marca', paragrafos: [
      'Divulgação institucional pode informar onde a igreja está e o que oferece; evangelização comunica o evangelho e convida pessoas à escuta da Palavra e à vida da comunidade. Um projeto pode servir às duas finalidades, mas deve distingui-las para não transformar Cristo em peça de branding.',
      'O conselho ou liderança competente precisa saber o que será comunicado em nome da igreja, especialmente quando o projeto envolve doutrina, imagem pública, dados pessoais, crianças, testemunhos ou campanhas financiadas.'
    ] },
    { tipo: 'atividade', id: 'tp55-u13-a1', titulo: 'Atividade — briefing do projeto', enunciado: 'Escolha uma igreja local real ou simulada e redija um briefing de uma página.', itens: ['Problema.', 'Dois públicos prioritários.', 'Um objetivo mensurável.', 'Mensagem central.', 'Três restrições.', 'Critério de sucesso.'], resposta: 'O briefing deve permitir que outra pessoa compreenda por que o projeto existe sem conhecer ainda as ferramentas escolhidas. Se o documento só lista redes, vídeos e artes, o diagnóstico ainda não foi feito.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Diagnóstico precede canal.', 'Divulgação e evangelização se relacionam, mas não são sinônimos.', 'Objetivo e critério de sucesso precisam ser definidos antes da produção.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano — edição revista com notas remissivas', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência de governo e responsabilidade institucional.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para missão, culto, liberdade e fidelidade doutrinária.' }
  ],
  atualizadoEm: '2026-09-11',
};