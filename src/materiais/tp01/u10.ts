import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u10-vocacao-missao',
  disciplina: 'TP01',
  unidade: 10,
  titulo: 'Vocação e missão',
  objetivo: 'Explicar o chamado pastoral para evangelizar e o preparo necessário para anunciar o evangelho com fidelidade, escuta e confiança na ação do Espírito.',
  topicosCobertos: ['Chamado para evangelizar', 'Preparo para evangelizar'],
  blocos: [
    { tipo: 'texto', titulo: '1. O pastor não terceiriza o evangelho', paragrafos: [
      'O ministro é chamado a fazer obra de evangelista e a formar uma igreja que testemunha. Reconhecer dons específicos de evangelização não significa transferir toda responsabilidade missionária para especialistas.',
      'O pastor anuncia Cristo a incrédulos, modela linguagem evangelística, prepara membros para responder com clareza e ajuda a igreja a receber pessoas que ainda estão conhecendo a fé.'
    ] },
    { tipo: 'texto', titulo: '2. Preparo é conteúdo e conhecimento de pessoas', paragrafos: [
      'Preparar-se para evangelizar exige domínio do conteúdo do evangelho: santidade de Deus, pecado, pessoa e obra de Cristo, arrependimento, fé, graça e senhorio. Fórmulas úteis nunca devem substituir entendimento.',
      'Também exige capacidade de ouvir. Perguntas sobre sofrimento, culpa, ciência, hipocrisia religiosa, sexualidade ou outras religiões não são obstáculos irritantes ao roteiro; revelam onde a pessoa está e quais pressupostos precisam ser compreendidos.'
    ] },
    { tipo: 'quadro', titulo: 'Urgência sem pressão', itens: [
      'A necessidade de conversão é real e deve ser comunicada com clareza.',
      'Constrangimento social não é regeneração.',
      'O evangelista apresenta Cristo e chama à resposta, mas não fabrica fé por técnica.',
      'Escutar o interlocutor não significa alterar o conteúdo da mensagem.'
    ] },
    { tipo: 'atividade', id: 'tp01-u10-a1', titulo: 'Atividade — evangelização preparada', enunciado: 'Um membro pergunta ao pastor como falar de Cristo com um colega ateu que associa religião a hipocrisia. Construa uma resposta pastoral que una preparo doutrinário e escuta.', itens: ['Defina o núcleo do evangelho.', 'Mostre como ouvir a objeção.', 'Evite manipulação.'], resposta: 'O pastor deve ajudar o membro a explicar o evangelho com clareza, perguntar o que o colega entende por hipocrisia e reconhecer pecados reais da igreja quando existirem, sem confundir falha de cristãos com falsidade de Cristo. A conversa deve chamar à fé sem pressão artificial, confiando que o Espírito convence.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Evangelizar pertence ao ministério pastoral.', 'Preparo missionário combina conteúdo, escuta e sabedoria.', 'Urgência evangelística não autoriza manipulação.'] }
  ],
  fontes: [
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Base confessional para evangelho, fé, arrependimento e Igreja.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Fundamenta o ministério da Palavra e a missão da Igreja.' }
  ],
  atualizadoEm: '2026-09-11',
};
