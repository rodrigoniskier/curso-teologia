import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u5-status-papel-sociedade',
  disciplina: 'CG10',
  unidade: 5,
  titulo: 'Status e papel na sociedade',
  objetivo: 'Distinguir status social de papel social, reconhecer posições atribuídas e adquiridas e analisar conflitos de papéis em instituições, famílias e igrejas sem reduzir identidade pessoal à função ocupada.',
  topicosCobertos: [],
  blocos: [
    { tipo: 'texto', titulo: '1. Posição e expectativa', paragrafos: [
      'Uma pessoa ocupa simultaneamente várias posições sociais: pode ser filha, professora, presbítera, vizinha, cidadã e paciente. Em Sociologia, status designa uma posição social; papel designa o conjunto de expectativas associado a essa posição.',
      'A distinção é útil porque instituições não funcionam apenas por pessoas isoladas, mas por expectativas relativamente estáveis. Quando alguém assume um ofício, cargo ou relação, outras pessoas passam a esperar determinados comportamentos.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro conceitos', itens: [
      'Status atribuído: posição recebida sem escolha direta, como idade ou parentesco de origem.',
      'Status adquirido: posição alcançada ou assumida por trajetória, escolha ou reconhecimento.',
      'Papel social: expectativas ligadas a uma posição.',
      'Conflito de papéis: tensão entre expectativas de posições diferentes ocupadas pela mesma pessoa.'
    ] },
    { tipo: 'texto', titulo: '2. Papel não é identidade total', paragrafos: [
      'Papéis organizam a vida social, mas não esgotam a pessoa. O pastor continua sendo marido, pai, amigo, cidadão e membro da comunidade; o professor continua sujeito a limites humanos fora da sala de aula.',
      'Confundir papel com identidade total pode legitimar expectativas abusivas de disponibilidade ilimitada. A análise sociológica ajuda a tornar visíveis essas expectativas e a perguntar quais delas são realmente próprias da função e quais nasceram apenas de hábitos institucionais.'
    ] },
    { tipo: 'atividade', id: 'cg10-u5-a1', titulo: 'Atividade — conflito de papéis', enunciado: 'Um pastor também é pai e recebe, no mesmo horário, uma convocação para reunião extraordinária e a notícia de que seu filho precisa de atendimento de emergência. Analise sociologicamente a situação.', itens: ['Identifique os status envolvidos.', 'Descreva as expectativas de cada papel.', 'Mostre por que conflito de papéis não significa automaticamente falha moral.'], resposta: 'Os status relevantes incluem ministro e pai; cada um traz expectativas legítimas, mas simultaneamente incompatíveis naquele momento. A Sociologia descreve a tensão institucional; decidir a prioridade concreta exige critérios morais, familiares, pastorais e circunstanciais adicionais.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Status é posição social; papel é expectativa associada.', 'Uma pessoa ocupa vários status ao mesmo tempo.', 'Papéis podem entrar em conflito.', 'Função social não esgota a identidade da pessoa.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para status, papéis, socialização e interação social.' }
  ],
  atualizadoEm: '2026-09-10',
};
