import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u7-ser-fazer-pastoral',
  disciplina: 'TP01',
  unidade: 7,
  titulo: 'O que o pastor deve ser e fazer',
  objetivo: 'Relacionar as características bíblicas do ministro às suas funções pastorais, mostrando que caráter não pode ser compensado por desempenho.',
  topicosCobertos: ['Características bíblicas', 'Funções do pastor'],
  blocos: [
    { tipo: 'texto', titulo: '1. O ser vem antes do desempenho', paragrafos: [
      'As listas de 1 Timóteo 3 e Tito 1 são marcadas por qualificações observáveis de caráter: irrepreensível, sóbrio, moderado, hospitaleiro, não violento, não amante do dinheiro, fiel na vida doméstica e respeitado. A aptidão para ensinar aparece como competência distintiva, mas não cancela os demais requisitos.',
      'Essa ordem impede que talento ministerial funcione como moeda para comprar indulgência moral. Eloquência não compensa arrogância; produtividade não neutraliza descontrole; ortodoxia verbal não apaga uma vida doméstica incompatível com a mensagem.'
    ] },
    { tipo: 'quadro', titulo: 'Funções pastorais centrais', itens: [
      'Ensinar: explicar a Escritura com fidelidade, clareza e aplicação.',
      'Pastorear: conhecer, alimentar, consolar, corrigir e procurar o rebanho.',
      'Governar: participar da direção e disciplina dentro da ordem conciliar.',
      'Equipar: preparar os santos para o serviço, em vez de concentrar todo ministério na figura do pastor.',
      'Proteger: vigiar doutrina, culto e práticas que possam ferir o rebanho.'
    ] },
    { tipo: 'texto', titulo: '2. Função sem caráter produz deformação do ofício', paragrafos: [
      'As funções não são uma lista de competências neutras. O pastor ensina também pelo modo como ocupa autoridade, recebe correção e trata pessoas. Por isso o caráter faz parte da qualificação pública, e não apenas da vida privada.',
      'Ao mesmo tempo, caráter sem aptidão para o trabalho específico também não basta. O ofício pastoral requer capacidade real de ensinar, cuidar e liderar segundo a Palavra. A Igreja examina quem a pessoa é e o que consegue fazer.'
    ] },
    { tipo: 'atividade', id: 'tp01-u7-a1', titulo: 'Atividade — talento e caráter em tensão', enunciado: 'Uma igreja avalia um candidato extremamente hábil na pregação, mas repetidamente agressivo em conflitos e incapaz de receber correção. Como a unidade orienta a decisão?', itens: ['Identifique o erro de compensação.', 'Relacione caráter e função.', 'Formule um princípio de avaliação.'], resposta: 'Aptidão para pregar não compensa desqualificação de caráter. As listas pastorais tratam mansidão, domínio próprio e reputação como qualificações reais. A Igreja deve avaliar caráter e competência conjuntamente, sem transformar desempenho em licença para ignorar requisitos bíblicos.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['O pastor deve ser antes de simplesmente produzir.', 'Caráter e função pertencem à mesma qualificação ministerial.', 'Aptidão para ensinar é essencial, mas nunca isenta os demais requisitos.'] }
  ],
  fontes: [
    { id: 'baxter-reformed-pastor', autor: 'Richard Baxter', ano: '1656', titulo: 'The Reformed Pastor', publicacao: 'Internet Archive', url: 'https://archive.org/details/reformedpastor00baxt', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência clássica para caráter e responsabilidades pastorais.' },
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Normatiza atribuições e responsabilidades ministeriais na IPB.' }
  ],
  atualizadoEm: '2026-09-11',
};
