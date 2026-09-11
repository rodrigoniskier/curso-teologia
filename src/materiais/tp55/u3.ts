import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp55-u3-comunicacao-radio',
  disciplina: 'TP55',
  unidade: 3,
  titulo: 'A comunicação por rádio',
  objetivo: 'Analisar alcance, limites e técnicas da comunicação radiofônica, incluindo o contexto comunitário, para adaptar conteúdo cristão à escuta sem apoio visual.',
  topicosCobertos: ['Emissoras de rádio comunitárias, alcance dessa mídia e técnicas de comunicação pelo rádio'],
  blocos: [
    { tipo: 'texto', titulo: '1. Rádio é linguagem para o ouvido', paragrafos: [
      'No rádio, a mensagem precisa sobreviver sem imagem, sem texto de apoio e frequentemente sem possibilidade de repetição imediata. Isso exige frases mais curtas, sinalização verbal da estrutura, vocabulário concreto, ritmo controlado e repetição funcional dos pontos essenciais.',
      'Emissoras comunitárias acrescentam outra característica: a força não está em alcançar “todo mundo”, mas em falar a uma comunidade geográfica e relacionalmente próxima. O comunicador deve conhecer hábitos, horários, linguagem e necessidades locais em vez de copiar o tom de redes nacionais.'
    ] },
    { tipo: 'quadro', titulo: 'Técnicas úteis', itens: [
      'Diga cedo o assunto e a utilidade da fala.',
      'Use uma ideia principal por bloco e transições audíveis.',
      'Prefira exemplos que possam ser imaginados sem apoio visual.',
      'Repita endereço, horário ou chamada prática quando forem essenciais.',
      'Planeje duração; rádio pune digressão porque o ouvinte não enxerga a estrutura.',
      'Distinga programa de ensino, entrevista, notícia, anúncio e devocional: cada gênero exige forma própria.'
    ] },
    { tipo: 'texto', titulo: '2. Alcance não é sinônimo de adequação', paragrafos: [
      'Uma mídia de alcance local pode ser mais útil do que uma plataforma global quando o objetivo é servir pessoas num território concreto. A pergunta pastoral não é “quantos podem ouvir?”, mas “quem precisa receber esta mensagem e em que situação?”.',
      'Também é importante não converter programação cristã em imitação do entretenimento comercial. Clareza, ritmo e profissionalismo servem a mensagem; não precisam reproduzir artificialmente urgência, sensacionalismo ou promessas que a igreja não pode sustentar.'
    ] },
    { tipo: 'atividade', id: 'tp55-u3-a1', titulo: 'Atividade — roteiro de 60 segundos', enunciado: 'Transforme um aviso eclesiástico longo em roteiro de rádio de 60 segundos para público local.', itens: ['Abra com o assunto.', 'Informe quem, quando, onde e por quê.', 'Repita apenas a informação indispensável.', 'Feche com ação clara.'], resposta: 'Um bom roteiro apresenta rapidamente o evento ou serviço, usa frases curtas, evita lista excessiva de detalhes e termina com endereço, horário ou contato. Informações secundárias devem ir para um canal consultável, como site ou mensagem.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Rádio exige escrita para ser ouvida, não para ser lida.', 'Mídia comunitária pode ter alto valor por relevância local.', 'Alcance deve ser julgado pela missão concreta, não pelo tamanho potencial da audiência.'] }
  ],
  fontes: [
    { id: 'broadus-sermoes', autor: 'John A. Broadus', ano: '1870', titulo: 'A Treatise on the Preparation and Delivery of Sermons', publicacao: 'Internet Archive', url: 'https://archive.org/details/treatiseonprepar00broarich', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Princípios de oralidade, clareza, estrutura e adaptação ao ouvinte.' },
    { id: 'spurgeon-lectures', autor: 'Charles H. Spurgeon', ano: '1877', titulo: 'Lectures to My Students', publicacao: 'Internet Archive', url: 'https://archive.org/details/lecturestomystud1877spur', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Conselhos clássicos sobre voz, clareza, linguagem e comunicação pública.' }
  ],
  atualizadoEm: '2026-09-11',
};