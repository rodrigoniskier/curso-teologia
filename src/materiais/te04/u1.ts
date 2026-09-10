import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u1-alfabeto',
  disciplina: 'TE04',
  unidade: 1,
  titulo: 'O alfabeto hebraico',
  objetivo: 'Reconhecer, nomear e escrever as 22 letras do alfabeto hebraico, ler da direita para a esquerda e relacionar grafia e valor consonantal sem transformar uma convenção moderna de pronúncia em reconstrução absoluta do hebraico bíblico.',
  topicosCobertos: ['Fonemas', 'Grafia'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Antes da gramática, é preciso ver a palavra como hebraico',
      paragrafos: [
        'O hebraico bíblico é escrito da direita para a esquerda. Para quem lê português, a primeira dificuldade não é teológica nem sintática: é perceptiva. Enquanto cada letra ainda precisa ser convertida mentalmente em caracteres latinos, o estudante não consegue reconhecer com rapidez prefixos, terminações e padrões que depois sustentarão a morfologia.',
        'O alfabeto tradicional possui 22 letras consonantais. Cinco delas assumem forma final quando aparecem no fim da palavra: כ/ך, מ/ם, נ/ן, פ/ף e צ/ץ. Essas formas finais não constituem novas letras e não alteram por si mesmas o valor lexical da raiz.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'As 22 letras — nome e valor inicial de leitura',
      itens: [
        'א — alef: originalmente consonantal; em muitas tradições de leitura pode não receber realização consonantal audível.',
        'ב — bet; ג — gimel; ד — dalet; ה — he; ו — vav; ז — zayin.',
        'ח — het; ט — tet; י — yod; כ/ך — kaf; ל — lamed; מ/ם — mem.',
        'נ/ן — nun; ס — samekh; ע — ayin; פ/ף — pe; צ/ץ — tsade.',
        'ק — qof; ר — resh; ש — shin/sin; ת — tav.',
        'ב, כ, פ e, historicamente, também ג, ד, ת pertencem ao grupo tradicional begadkefat. A distinção fonética preservada nas tradições atuais não é idêntica para todas as seis letras.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Grafia quadrática e história não são a mesma coisa',
      paragrafos: [
        'A escrita quadrática usada nas Bíblias hebraicas impressas é resultado de história gráfica. Inscrições hebraicas antigas podem empregar formas paleo-hebraicas muito diferentes. Aprender a escrita atual é aprender a forma textual pela qual normalmente acessamos o Texto Massorético, não afirmar que Moisés ou Davi desenhavam as letras exatamente como numa edição moderna.',
        'Também convém distinguir letra, fonema e transliteração. Letra é um sinal gráfico; fonema é uma unidade contrastiva de som; transliteração é uma convenção que representa a escrita hebraica em outro alfabeto. A transliteração pode ajudar a descrever, mas deve desaparecer progressivamente da rotina de leitura.'
      ],
    },
    {
      tipo: 'lista',
      titulo: 'Pares que merecem treino visual deliberado',
      itens: [
        'ב / כ — bet e kaf: semelhantes, mas estruturalmente distintas.',
        'ד / ר — dalet e resh: uma diferença pequena no traço muda a letra.',
        'ה / ח — he e het: observe a abertura interna de ה.',
        'ו / ז / ן — vav, zayin e nun final: compare altura e detalhe superior.',
        'כ / ך, מ / ם, נ / ן, פ / ף, צ / ץ — associe cada forma medial à sua forma final.',
        'שׁ / שׂ — a mesma letra ש recebe posteriormente um ponto distintivo para shin e sin; o sinal será retomado com a vocalização.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u1-a1',
      titulo: 'Atividade — leitura sem transliteração',
      enunciado: 'Copie e leia da direita para a esquerda as sequências מלך, דבר, ספר, שלום e ארץ. Depois identifique qualquer forma final presente.',
      itens: [
        'Separe as letras de cada sequência sem usar caracteres latinos na primeira passagem.',
        'Nomeie as letras em voz alta.',
        'Marque as formas finais e indique a letra medial correspondente.'
      ],
      resposta: 'מלך = מ־ל־ך, com kaf final ך; דבר = ד־ב־ר; ספר = ס־פ־ר; שלום = ש־ל־ו־ם, com mem final ם; ארץ = א־ר־ץ, com tsade final ץ. O objetivo ainda não é traduzir, mas reconhecer a cadeia gráfica diretamente.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'O hebraico é lido da direita para a esquerda.',
        'Há 22 letras consonantais tradicionais e cinco formas finais.',
        'A escrita quadrática impressa tem história e não deve ser projetada anacronicamente sobre todos os períodos bíblicos.',
        'Transliteração é ferramenta descritiva, não etapa permanente da leitura.',
        'Pronúncia pedagógica deve ser usada com consciência de que a fonologia antiga é reconstruída a partir de evidências históricas.'
      ],
    },
  ],
  fontes: [
    {
      id: 'gesenius-hebrew-grammar-1910',
      autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley',
      ano: '1910',
      titulo: "Gesenius' Hebrew Grammar — 2nd English edition",
      publicacao: 'Internet Archive — Clarendon Press',
      url: 'https://archive.org/details/geseniushebrewgr00geseuoft',
      idioma: 'en',
      tipo: 'livro',
      acesso: 'livre',
      nota: 'Referência clássica em domínio público para formas das consoantes, classificação e história da escrita hebraica.'
    },
    {
      id: 'aleph-with-beth',
      autor: 'Bethany Case; Andrew Case',
      ano: '—',
      titulo: 'Aleph with Beth — Free Hebrew. Forever.',
      publicacao: 'Betheden Ministries / Free Hebrew. Forever.',
      url: 'https://freehebrew.online/',
      idioma: 'he',
      tipo: 'curso',
      acesso: 'livre',
      nota: 'Curso aberto para exposição auditiva, reconhecimento visual e leitura progressiva do hebraico bíblico.'
    }
  ],
  atualizadoEm: '2026-09-10',
};
