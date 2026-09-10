import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u2-vogais',
  disciplina: 'TE04',
  unidade: 2,
  titulo: 'Vogais e vocalização massorética',
  objetivo: 'Reconhecer os principais sinais vocálicos tiberienses, associar grafia e valor de leitura e distinguir as vogais pronunciadas do sistema de sinais que os massoretas registraram sobre um texto consonantal muito mais antigo.',
  topicosCobertos: ['Fonemas', 'Grafia'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. O texto consonantal é mais antigo que os pontos vocálicos',
      paragrafos: [
        'Os manuscritos bíblicos foram transmitidos durante séculos em escrita essencialmente consonantal. Entre a Antiguidade tardia e a Idade Média, escribas massoretas desenvolveram sistemas de sinais para registrar com grande precisão a tradição de leitura recebida. O sistema tiberiense tornou-se o padrão das edições acadêmicas da Bíblia Hebraica.',
        'Por isso um ponto ou traço vocálico não deve ser imaginado como marca colocada pelo autor bíblico no momento da composição. Ele é parte de uma tradição textual extremamente importante, que preserva uma leitura histórica do texto consonantal. Aprender hebraico bíblico hoje exige dominar ambos: consoantes e vocalização.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Sinais vocálicos básicos — usando ב apenas como suporte gráfico',
      itens: [
        'בַ — patah: sinal sob a consoante; em convenção pedagógica, vogal do campo de a.',
        'בָ — qamets: graficamente semelhante a um pequeno T sob a consoante; sua realização histórica não deve ser reduzida a uma única regra moderna em todos os contextos.',
        'בֶ — segol: três pontos; vogal do campo de e.',
        'בֵ — tsere: dois pontos horizontais; vogal do campo de e.',
        'בִ — hireq: um ponto sob a consoante; vogal do campo de i.',
        'בֹ — holem: ponto acima; vogal do campo de o. Pode aparecer associado a ו em escrita plena.',
        'בֻ — qibbuts: três pontos diagonais sob a consoante; vogal do campo de u.',
        'בוּ — shureq: ו com ponto central funcionando como indicação vocálica de u.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Mater lectionis: quando uma letra também ajuda a indicar vogal',
      paragrafos: [
        'As letras א, ה, ו e י podem participar, em determinados ambientes, da indicação histórica de vogais; são tradicionalmente chamadas matres lectionis, “mães da leitura”. Isso explica formas em que sinais vocálicos aparecem associados a י ou ו. A presença da letra não significa automaticamente que ela seja uma consoante pronunciada naquele ponto.',
        'Para o iniciante, o procedimento seguro é aprender a palavra como cadeia de consoantes e sinais, observando gradualmente quais letras funcionam consonantalmente e quais integram uma grafia vocálica. A análise será refinada quando o curso tratar letras fracas e silabação.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Como treinar sem transformar nomes de sinais em fim em si mesmos',
      itens: [
        'Leia primeiro a consoante e localize o sinal que a acompanha.',
        'Nomeie o sinal até reconhecê-lo automaticamente; depois privilegie a leitura da sílaba inteira.',
        'Compare pares como בַ / בִ / בֻ para separar visualmente a consoante do sinal vocálico.',
        'Não use o tamanho gráfico do sinal para inferir duração vocálica.',
        'Ao encontrar ו ou י, pergunte se a letra é consonantal ou participa da representação da vogal; não decida apenas pelo nome da letra.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u2-a1',
      titulo: 'Atividade — decodificar a vocalização',
      enunciado: 'Observe בַ, בֶ, בִ, בֹ, בֻ e בוּ. Para cada forma, identifique a consoante-base e o sinal ou combinação que representa a vogal.',
      itens: [
        'Separe visualmente grafema consonantal e sinal vocálico.',
        'Nomeie patah, segol, hireq, holem, qibbuts e shureq.',
        'Explique por que וּ não deve ser analisado aqui simplesmente como a consoante vav seguida de um ponto arbitrário.'
      ],
      resposta: 'A consoante-base é ב. Os sinais são, respectivamente, patah, segol, hireq, holem, qibbuts e shureq. Em וּ, o vav participa da grafia vocálica do shureq; a função do ponto e da letra precisa ser reconhecida como unidade de vocalização, não como mera soma de uma consoante e um diacrítico sem função.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'A vocalização tiberiense registra uma tradição de leitura posterior ao texto consonantal original.',
        'Patah, qamets, segol, tsere, hireq, holem, qibbuts e shureq formam o núcleo inicial do reconhecimento vocálico.',
        'א, ה, ו e י podem funcionar como matres lectionis em determinados contextos.',
        'Pronúncia de sala de aula é uma convenção funcional; reconstruções históricas exigem mais evidência que a simples aparência dos sinais.',
        'O objetivo não é colecionar nomes de pontos, mas ler formas vocalizadas com crescente automaticidade.'
      ],
    },
  ],
  fontes: [
    {
      id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência clássica para sinais vocálicos, matres lectionis e tradição massorética.'
    },
    {
      id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Recurso aberto para exposição repetida à leitura e à sonoridade do hebraico bíblico.'
    }
  ],
  atualizadoEm: '2026-09-10',
};
