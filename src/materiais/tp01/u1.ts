import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u1-terminologia',
  disciplina: 'TP01',
  unidade: 1,
  titulo: 'Terminologia',
  objetivo: 'Distinguir vocação, dom natural e dom carismático, evitando identificar capacidade pessoal com chamado eclesiástico.',
  topicosCobertos: ['Vocação e dom natural', 'Vocação e dom carismático'],
  blocos: [
    { tipo: 'texto', titulo: '1. Por que começar pelas palavras', paragrafos: [
      'Boa parte da confusão sobre ministério começa quando vocação, talento e dom são tratados como sinônimos. Uma pessoa pode possuir excelente memória, voz, organização ou habilidade relacional sem que isso, por si só, constitua chamado para um ofício eclesiástico.',
      'Vocação descreve uma relação de responsabilidade diante de Deus; dom natural descreve capacidades providenciais presentes na constituição e história da pessoa; dom carismático ou espiritual descreve capacitação concedida para serviço e edificação do corpo. Esses elementos podem convergir, mas não são idênticos.'
    ] },
    { tipo: 'quadro', titulo: 'Três categorias que não devem ser confundidas', itens: [
      'Dom natural: capacidade humana providencial, como raciocínio, voz, memória, administração ou empatia.',
      'Dom carismático: capacitação espiritual orientada à edificação da Igreja e ao serviço cristão.',
      'Vocação ministerial: chamado para um ofício reconhecido segundo critérios bíblicos e pela Igreja, não mera soma de talentos.'
    ] },
    { tipo: 'texto', titulo: '2. Talento não autentica ofício', paragrafos: [
      'O Novo Testamento valoriza dons, mas não transforma cada dom em ofício. Alguém pode ensinar bem sem ser pastor, exercer misericórdia sem ser diácono e evangelizar com fruto sem ser ministro ordenado. O ofício envolve responsabilidade pública, qualificações morais e reconhecimento eclesiástico.',
      'Essa distinção também protege a Igreja do culto à performance. Eloquência pode impressionar antes que caráter seja conhecido; capacidade administrativa pode produzir resultados antes que maturidade espiritual seja testada. O discernimento reformado recusa fazer do desempenho o critério supremo.'
    ] },
    { tipo: 'atividade', id: 'tp01-u1-a1', titulo: 'Atividade — classificar sem confundir', enunciado: 'Um candidato possui grande facilidade de comunicação, recebe elogios após ensinar uma classe e conclui que isso prova sua vocação pastoral. Classifique o que já pode ser afirmado e o que ainda precisa ser discernido.', itens: ['Identifique possíveis dons naturais.', 'Identifique possível dom de ensino.', 'Liste elementos que ainda não foram demonstrados.'], resposta: 'A facilidade verbal pode indicar dom natural e o fruto no ensino pode sugerir capacitação para servir. Ainda faltam caráter, motivos, perseverança, vida doméstica, doutrina, oportunidade providencial e reconhecimento externo da Igreja. Nenhum talento isolado constitui vocação ministerial.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Vocação não é sinônimo de talento.', 'Dons naturais e espirituais são relevantes, mas não criam automaticamente um ofício.', 'O ministério exige convergência entre capacidade, caráter, chamado e reconhecimento eclesiástico.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para ofícios, candidatura, exames e ordenação na IPB.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Exposição reformada clássica sobre ministros e chamado eclesiástico.' }
  ],
  atualizadoEm: '2026-09-11',
};
