import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u8-vocacao-ensino',
  disciplina: 'TP01',
  unidade: 8,
  titulo: 'Vocação e ensino',
  objetivo: 'Explicar o chamado e o preparo para ensinar, distinguindo aptidão ministerial de mera fluência verbal e relacionando ensino fiel a estudo continuado.',
  topicosCobertos: ['Chamado para o ensino', 'Preparo para ensinar'],
  blocos: [
    { tipo: 'texto', titulo: '1. Ser apto para ensinar', paragrafos: [
      'A aptidão para ensinar é uma das qualificações funcionais mais explícitas do presbítero. Ela envolve compreender a verdade bíblica, organizá-la, comunicá-la com clareza, aplicá-la com sabedoria e responder ao erro com paciência.',
      'Fluência verbal, carisma e formação acadêmica podem ajudar, mas nenhum desses elementos sozinho constitui aptidão pastoral. O resultado procurado não é admiração pelo professor, e sim compreensão mais fiel da Palavra por parte da Igreja.'
    ] },
    { tipo: 'texto', titulo: '2. O chamado para ensinar produz disciplina de estudo', paragrafos: [
      'Quem ensina publicamente assume responsabilidade pelo conteúdo entregue. Por isso o preparo inclui leitura atenta do texto bíblico, uso responsável de ferramentas, teologia bíblica e sistemática, história da interpretação e conhecimento das pessoas que receberão o ensino.',
      'O seminário não encerra esse processo. O ministro precisa continuar estudante durante toda a vida pastoral. A simplicidade madura normalmente é fruto de estudo suficiente para distinguir o central do acessório e explicar sem ostentação.'
    ] },
    { tipo: 'quadro', titulo: 'Sinais de preparo responsável', itens: [
      'Ler o texto antes de decidir a conclusão.',
      'Distinguir interpretação, inferência e aplicação.',
      'Conhecer objeções relevantes e responder sem caricatura.',
      'Adequar linguagem ao ouvinte sem empobrecer o conteúdo.',
      'Revisar o ensino à luz da Escritura e da confissão da Igreja.'
    ] },
    { tipo: 'atividade', id: 'tp01-u8-a1', titulo: 'Atividade — ensinar não é apenas falar', enunciado: 'Um candidato comunica-se com facilidade, mas prepara aulas sem examinar o contexto bíblico e depende quase sempre de improviso. Avalie sua aptidão para ensinar.', itens: ['Separe comunicação de preparo.', 'Identifique riscos pastorais.', 'Proponha critérios de desenvolvimento.'], resposta: 'Facilidade de comunicação é útil, mas não demonstra por si só aptidão ministerial para ensinar. A Igreja precisa observar fidelidade ao texto, capacidade de organizar o conteúdo, clareza, paciência, resposta ao erro e disciplina continuada de estudo. Improviso recorrente pode transformar carisma em substituto da responsabilidade exegética.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Ensino pastoral exige verdade, clareza e aplicação.', 'Aptidão para ensinar não é sinônimo de eloquência.', 'Preparo intelectual continuado é parte da fidelidade ministerial.'] }
  ],
  fontes: [
    { id: 'spurgeon-lectures', autor: 'Charles Haddon Spurgeon', ano: '1875', titulo: 'Lectures to My Students', publicacao: 'Internet Archive', url: 'https://archive.org/details/lecturestomystud1877spur', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Aulas pastorais sobre preparo do pregador e trabalho intelectual ministerial.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Base reformada para o ministério da Palavra e o ofício de ensino.' }
  ],
  atualizadoEm: '2026-09-11',
};
