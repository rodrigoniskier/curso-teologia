import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'tp01-u2-vocacao-interna-externa',
  disciplina: 'TP01',
  unidade: 2,
  titulo: 'Vocação',
  objetivo: 'Explicar a relação entre vocação interna e externa e mostrar por que a convicção pessoal precisa ser submetida ao exame da Igreja.',
  topicosCobertos: ['Interna', 'Externa'],
  blocos: [
    { tipo: 'texto', titulo: '1. A convicção pessoal importa, mas não se autentica sozinha', paragrafos: [
      'A vocação interna é a convicção do próprio candidato de que deve oferecer-se ao ministério. Ela pode amadurecer gradualmente por desejo santo, exercício de dons, percepção de necessidades e conselho de irmãos maduros; não precisa assumir a forma de voz, sonho ou experiência extraordinária.',
      'Essa dimensão subjetiva é necessária porque o ministério não deve ser imposto a quem não o deseja. Porém, intensidade de sentimento não é prova suficiente: ambição, expectativa familiar, frustração profissional ou entusiasmo recente também podem produzir convicções fortes.'
    ] },
    { tipo: 'texto', titulo: '2. O chamado externo protege a Igreja e o candidato', paragrafos: [
      'Vocação externa é o reconhecimento eclesiástico do chamado. A Igreja observa caráter, doutrina, vida doméstica, dons, estabilidade, serviço e fruto; depois examina e decide por seus concílios competentes.',
      'Na tradição reformada, o chamado externo não é carimbo burocrático sobre uma decisão privada já consumada. Ele impede que a consciência do candidato se torne autoridade final sobre um ofício que pertence a Cristo e é exercido em sua Igreja.'
    ] },
    { tipo: 'quadro', titulo: 'Discernimento convergente', itens: [
      'Interno sem externo: risco de transformar desejo em autoautorização.',
      'Externo sem interno: risco de produzir profissional religioso sem desejo real do serviço.',
      'Convergência saudável: desejo, qualificações bíblicas, dons observáveis, formação, providência e reconhecimento da Igreja.'
    ] },
    { tipo: 'atividade', id: 'tp01-u2-a1', titulo: 'Atividade — quando a igreja diz “ainda não”', enunciado: 'Um candidato afirma ter certeza absoluta de seu chamado, mas presbíteros maduros identificam imaturidade de caráter e recomendam mais tempo de prova. Como a distinção entre chamado interno e externo orienta a resposta?', itens: ['Avalie a convicção pessoal.', 'Explique o papel do juízo eclesiástico.', 'Indique uma resposta pastoral adequada.'], resposta: 'A convicção deve ser respeitada, mas não tratada como infalível. O chamado externo é parte do discernimento e pode legitimamente dizer “ainda não”. A resposta saudável é receber razões, continuar servindo, crescer nas áreas apontadas e permitir que a providência e a Igreja testem a convicção ao longo do tempo.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Chamado interno é convicção pessoal; chamado externo é reconhecimento da Igreja.', 'Nenhum dos dois deve ser absolutizado isoladamente.', 'Um chamado verdadeiro não precisa ser protegido do exame bíblico e eclesiástico.'] }
  ],
  fontes: [
    { id: 'manual-presbiteriano', autor: 'Igreja Presbiteriana do Brasil', ano: '2025', titulo: 'Manual Presbiteriano com notas remissivas — edição revista e atualizada', publicacao: 'Igreja Presbiteriana do Brasil', url: 'https://www.ipb.org.br/content/Downloads/manual_presbiteriano_2025.pdf', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Fonte normativa para candidatura, exames, licenciatura, experiência e ordenação.' },
    { id: 'calvino-institutas', autor: 'João Calvino', ano: '1559', titulo: 'Institutes of the Christian Religion — Livro IV, cap. 3', publicacao: 'Christian Classics Ethereal Library (CCEL)', url: 'https://www.ccel.org/ccel/calvin/institutes.all.html', idioma: 'en', tipo: 'obra-primaria', acesso: 'livre', nota: 'Referência clássica sobre chamado regular para o ministério.' }
  ],
  atualizadoEm: '2026-09-11',
};
