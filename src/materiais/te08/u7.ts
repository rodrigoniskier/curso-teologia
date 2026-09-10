import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te08-u7-futuro-indicativo-ativo-medio',
  disciplina: 'TE08',
  unidade: 7,
  titulo: 'Verbos 4 — futuro do indicativo ativo e médio',
  objetivo: 'Reconhecer e formar o futuro do indicativo ativo e médio de verbos regulares, identificando o marcador -σ- e distinguindo o novo tema temporal das terminações pessoais já conhecidas.',
  topicosCobertos: ['Futuro do indicativo ativo e médio'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O futuro regular acrescenta uma marca reconhecível',
      paragrafos: [
        'Em muitos verbos regulares, o futuro é formado com o marcador σ entre o radical e as terminações. λύω oferece um modelo transparente: λυ- + σ + terminações do sistema primário produz λύσω, λύσεις, λύσει e assim por diante.',
        'A vantagem pedagógica é cumulativa: as terminações pessoais já estudadas no presente reaparecem em grande parte, enquanto o σ sinaliza uma nova série. Em vez de memorizar seis formas como palavras independentes, o estudante aprende a reconhecer estrutura.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Futuro do indicativo ativo de λύω',
      itens: [
        '1ª singular: λύσω.',
        '2ª singular: λύσεις.',
        '3ª singular: λύσει.',
        '1ª plural: λύσομεν.',
        '2ª plural: λύσετε.',
        '3ª plural: λύσουσι(ν).'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Futuro do indicativo médio de λύω',
      itens: [
        '1ª singular: λύσομαι.',
        '2ª singular: λύσῃ.',
        '3ª singular: λύσεται.',
        '1ª plural: λυσόμεθα.',
        '2ª plural: λύσεσθε.',
        '3ª plural: λύσονται.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Ativo e médio compartilham o sinal de futuro',
      paragrafos: [
        'O σ não indica voz. Ele ajuda a reconhecer a formação do futuro regular; a voz é identificada pelas terminações. λύσομεν é futuro ativo, enquanto λυσόμεθα é futuro médio. Essa separação de funções morfológicas evita análises do tipo “vi sigma, logo é ativo”.',
        'No Novo Testamento há futuros irregulares e alterações fonológicas quando certas consoantes encontram σ. Nesta unidade, o objetivo é dominar o padrão regular; as mudanças de radical serão tratadas conforme surgirem em cursos posteriores e em exercícios acompanhados.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Antecipação útil: encontros com sigma',
      itens: [
        'Labiais π, β, φ diante de σ frequentemente resultam em ψ.',
        'Velares κ, γ, χ diante de σ frequentemente resultam em ξ.',
        'Dentais τ, δ, θ tendem a desaparecer diante de σ.',
        'Esses padrões explicam muitas formas futuras; não devem ser usados para inventar um futuro sem consultar o léxico quando o verbo for irregular.'
      ],
    },
    {
      tipo: 'exemplo',
      titulo: 'Compare três séries',
      enunciado: 'λύομεν — λυόμεθα — λύσομεν',
      explicacao: 'λύομεν = presente ativo, 1ª plural; λυόμεθα = presente médio/passivo, 1ª plural; λύσομεν = futuro ativo, 1ª plural. A comparação mostra como terminação, voz e marcador de futuro trabalham em camadas.'
    },
    {
      tipo: 'atividade',
      id: 'te08-u7-a1',
      titulo: 'Transformação morfológica',
      enunciado: 'Parta das formas presentes λύω, λύομεν, λύομαι e λυόμεθα e escreva os futuros correspondentes.',
      itens: [
        'Marque com colchetes o σ de futuro em cada forma.',
        'Identifique voz, pessoa e número.',
        'Explique o que permanece igual e o que muda do presente para o futuro.',
        'Analise λύσονται sem traduzir primeiro.'
      ],
      resposta: 'λύσω, λύσομεν, λύσομαι, λυσόμεθα. O radical λυ- permanece reconhecível, acrescenta-se o marcador σ e reaparecem terminações compatíveis com a voz e a pessoa. λύσονται é 3ª plural do futuro do indicativo médio. A tradução contextual viria depois da análise.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'O futuro regular frequentemente é marcado por σ.',
        'As terminações distinguem pessoa, número e voz.',
        'Ativo e médio compartilham o marcador de futuro, mas não as terminações.',
        'Encontros consonantais com σ explicam mudanças previsíveis em muitos verbos.',
        'Verbos irregulares exigem atenção lexical; o paradigma regular é modelo, não regra sem exceções.'
      ],
    },
  ],
  fontes: [
    { id: 'ewald-elementary-greek-2022', autor: 'Owen Ewald', ano: '2022', titulo: 'Elementary New Testament Greek', publicacao: 'Seattle Pacific University Library', url: 'https://digitalcommons.spu.edu/open_books/2/', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Recurso aberto para futuro e morfologia verbal cumulativa.' },
    { id: 'machen-greek-1923', autor: 'J. Gresham Machen', ano: '1923', titulo: 'New Testament Greek for Beginners', publicacao: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/m/machen/greek/home.html', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para formação do futuro regular.' }
  ],
  atualizadoEm: '2026-09-09',
};
