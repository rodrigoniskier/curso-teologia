import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u4-comunicacao-televisao',
  disciplina: 'TP55',
  unidade: 4,
  titulo: 'A comunicação por televisão',
  objetivo: 'Avaliar alcance, linguagem e técnicas da televisão, aprendendo a combinar palavra, imagem e ritmo sem permitir que a produção visual governe o conteúdo cristão.',
  topicosCobertos: ['Canais específicos, alcance dessa mídia e técnicas de comunicação por essa mídia'],
  blocos: [
    { tipo: 'texto', titulo: '1. Televisão acrescenta imagem ao discurso', paragrafos: [
      'A televisão combina voz, imagem, enquadramento, edição, cenário, texto e ritmo. Isso amplia a capacidade de explicar e demonstrar, mas também cria competição pela atenção: elementos visuais podem esclarecer a mensagem ou tornar-se a própria mensagem.',
      'Canais generalistas, segmentados e confessionais alcançam públicos diferentes. A escolha deve considerar quem realmente assiste, em que horário, com que expectativa e por quanto tempo, em vez de supor que presença num canal produz automaticamente influência.'
    ] },
    { tipo: 'quadro', titulo: 'Técnicas responsáveis', itens: [
      'Escreva para fala e imagem: o roteiro não deve repetir mecanicamente tudo o que a tela já mostra.',
      'Use enquadramento e cenário para reduzir distração, não para fabricar autoridade.',
      'Planeje começo, desenvolvimento e fechamento antes de pensar em efeitos.',
      'Quando houver entrevista, formule perguntas que permitam resposta substantiva, não apenas frases de impacto.',
      'Evite edição que altere sentido, retire qualificações importantes ou transforme hesitação em falsa certeza.',
      'Se o conteúdo for permanente, revise dados, nomes, textos bíblicos e afirmações antes da publicação.'
    ] },
    { tipo: 'texto', titulo: '2. O meio visual também forma expectativas', paragrafos: [
      'Produção profissional pode comunicar cuidado e respeito ao público, mas a estética nunca deve prometer uma igreja que não existe. Imagens, cortes e testemunhos precisam ser verdadeiros também no que sugerem, não apenas no que dizem literalmente.',
      'Para uma igreja reformada há ainda uma questão própria sobre representação visual de Cristo e uso de imagens religiosas. A decisão institucional deve ser coerente com a posição confessional do conselho, e não deixada ao gosto do editor de vídeo.'
    ] },
    { tipo: 'atividade', id: 'tp55-u4-a1', titulo: 'Atividade — revisar um roteiro televisivo', enunciado: 'Um vídeo institucional mostra apenas auditório cheio, famílias sorrindo e música emocional, sem explicar doutrina, horários nem formas de contato. Avalie o que comunica explicitamente e o que sugere implicitamente.', itens: ['Liste informações reais.', 'Liste impressões produzidas pela edição.', 'Aponte o que precisa ser acrescentado para servir ao público.'], resposta: 'O vídeo produz atmosfera, mas oferece pouca informação verificável. Uma versão responsável precisa identificar a igreja, explicar o que acontece, fornecer informações práticas e evitar imagens que prometam experiência uniforme ou sucesso garantido.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Imagem amplia explicação e também amplia risco de encenação.', 'Técnica visual deve servir verdade e compreensão.', 'Alcance televisivo só é útil quando público e propósito estão definidos.'] }
  ],
  fontes: [
    { id: 'catecismo-maior', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'O Catecismo Maior de Westminster', publicacao: 'Monergismo', url: 'https://www.monergismo.com/textos/catecismos/catecismomaior_westminster.htm', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para a discussão reformada sobre imagens e o segundo mandamento.' },
    { id: 'broadus-sermoes', autor: 'John A. Broadus', ano: '1870', titulo: 'A Treatise on the Preparation and Delivery of Sermons', publicacao: 'Internet Archive', url: 'https://archive.org/details/treatiseonprepar00broarich', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Princípios de clareza, organização e adaptação da comunicação pública ao auditório.' }
  ],
  atualizadoEm: '2026-09-11',
};