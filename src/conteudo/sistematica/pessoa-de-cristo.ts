import type { Verbete } from '../../tipos';

export const pessoaDeCristo: Verbete = {
  id: 'ts03-pessoa-de-cristo',
  disciplina: 'TS03',
  unidade: 4,
  titulo: 'A Pessoa de Cristo',
  subtitulo: 'Duas naturezas, uma pessoa — e por que cada palavra foi conquistada a duras penas',
  objetivo:
    'Ao final, você saberá por que as heresias cristológicas são todas tentativas de aliviar a mesma tensão, o que significam os quatro advérbios de Calcedônia, e por que a união hipostática não é um enigma gratuito mas a condição de a salvação ser possível.',
  atualizadoEm: '2026-08-14',
  verMais: ['ts01-trindade', 'ts02-imagem-de-deus'],
  blocos: [
    {
      tipo: 'paragrafo',
      texto:
        'A Igreja levou quatro séculos e quatro concílios para dizer quem é Jesus. Não por lentidão: por dificuldade real. Os dados do Novo Testamento apontam para um ser que a linguagem disponível não comportava, e cada tentativa de simplificá-los quebrava alguma coisa.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'O mesmo Jesus tem fome, cansa, chora e morre — e perdoa pecados, recebe adoração, afirma existir antes de Abraão e é chamado de Deus por seus discípulos judeus monoteístas. Nenhuma dessas séries pode ser apagada sem violência ao texto.',
    },
    { tipo: 'secao', titulo: 'Quatro heresias, quatro alívios indevidos', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'As grandes heresias cristológicas não foram invenções perversas; foram tentativas sinceras de tornar Cristo pensável. Cada uma alivia a tensão sacrificando um dado — e vale examinar as quatro, porque juntas desenham, por exclusão, o contorno da ortodoxia.',
    },
    {
      tipo: 'controversia',
      titulo: 'As quatro simplificações e o que cada uma custa',
      posicoes: [
        {
          escola: 'Docetismo — a humanidade é aparente',
          sintese:
            'Cristo apenas parecia ter corpo; o divino não pode misturar-se com matéria. Elimina a fome e a morte como encenação. Custo: se Ele não morreu de fato, ninguém foi resgatado — e João já combate isso ao exigir a confissão de que veio "em carne" (1Jo 4.2).',
        },
        {
          escola: 'Apolinarismo — humanidade incompleta',
          sintese:
            'Cristo tinha corpo e alma humanos, mas o Logos divino ocupava o lugar da mente humana. Explica bem a impecabilidade. Custo: o que não é assumido não é curado — se Ele não teve mente humana, a mente humana não foi redimida.',
        },
        {
          escola: 'Nestorianismo — duas pessoas justapostas',
          sintese:
            'Em Cristo há duas pessoas, a divina e a humana, unidas por coordenação moral. Preserva a integridade das naturezas. Custo: quem morreu na cruz foi então o homem Jesus, e não o Filho de Deus — e o valor infinito do sacrifício se perde.',
        },
        {
          escola: 'Eutiquianismo (monofisismo) — uma natureza mista',
          sintese:
            'As duas naturezas se fundiram numa terceira, divino-humana. Resolve a unidade de modo simples. Custo: o resultado não é nem Deus nem homem, mas um híbrido — e um mediador que não é verdadeiramente ambas as partes não medeia nada.',
        },
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'O critério que decide todas elas foi formulado por Gregório de Nazianzo em uma frase que se tornou axioma: "o que não foi assumido não foi curado". A encarnação não é um gesto simbólico — é o modo pelo qual a natureza humana inteira é tomada e restaurada. Toda amputação da humanidade de Cristo é uma amputação da salvação.',
    },
    { tipo: 'secao', titulo: 'Calcedônia e os quatro advérbios', nivel: 2 },
    {
      tipo: 'paragrafo',
      texto:
        'Em 451, o Concílio de Calcedônia produziu a definição que se tornou o padrão universal. Sua genialidade está em ser, essencialmente, negativa: não explica como a união funciona — declara os quatro modos pelos quais ela não pode ser pensada, um contra cada heresia.',
    },
    {
      tipo: 'lista',
      itens: [
        'Sem confusão (asynchytos) — as naturezas não se misturam numa terceira. Contra Êutiques.',
        'Sem mudança (atreptos) — nenhuma se converte na outra; a divindade não vira humanidade nem o contrário. Contra Êutiques.',
        'Sem divisão (adiairetos) — não há dois sujeitos, mas um só. Contra Nestório.',
        'Sem separação (achoristos) — a união é permanente; o Filho não deixou de ser homem depois da ascensão. Contra Nestório.',
      ],
    },
    {
      tipo: 'paragrafo',
      texto:
        'Repare no que Calcedônia faz e no que se recusa a fazer. Ergue quatro cercas e deixa o campo interno em aberto. É contenção deliberada: o concílio afirma o mistério e proíbe as saídas falsas, sem pretender explicá-lo. Essa é uma lição de método tão importante quanto o conteúdo.',
    },
    {
      tipo: 'termo',
      termo: 'União hipostática',
      texto:
        'A união das duas naturezas na única hipóstase (pessoa) do Filho eterno. A pessoa é divina e preexistente; foi ela que assumiu a natureza humana, e não uma pessoa humana que foi elevada. Por isso o sujeito de tudo o que Cristo faz e sofre é sempre o Filho de Deus.',
    },
    {
      tipo: 'termo',
      termo: 'Anhypostasia e enhypostasia',
      texto:
        'O par técnico que evita o nestorianismo. A natureza humana de Cristo é anhypostatos — não subsiste como pessoa independente —, e ao mesmo tempo enhypostatos: subsiste na pessoa do Verbo. Não é humanidade impessoal; é humanidade cuja personalidade é a do Filho.',
    },
    {
      tipo: 'termo',
      termo: 'Communicatio idiomatum',
      texto:
        'A comunicação dos idiomas: como as duas naturezas pertencem a uma só pessoa, o que se predica de uma natureza pode ser dito da pessoa. Daí ser legítimo afirmar que o Filho de Deus morreu — Ele morreu segundo a natureza humana, mas quem morreu é Ele. Os reformados, contra os luteranos, negam que os atributos de uma natureza se transfiram à outra: a comunicação é à pessoa, não entre as naturezas.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Esta última distinção parece escolástica e tem consequência imediata na Ceia. Se a onipresença da divindade se comunicasse ao corpo de Cristo, esse corpo poderia estar fisicamente em toda mesa — que é a base luterana da presença corporal. A cristologia reformada, mantendo a integridade da natureza humana, sustenta que o corpo de Cristo permanece localizado no céu, e que na Ceia o Espírito nos eleva a Ele em vez de trazê-lo ao pão.',
    },
    { tipo: 'secao', titulo: 'A doutrina', nivel: 2 },
    {
      tipo: 'definicao',
      termo: 'A pessoa de Cristo',
      texto:
        'Jesus Cristo é uma só pessoa — a do Filho eterno de Deus, a segunda da Trindade — subsistindo em duas naturezas completas e distintas, a divina, que sempre teve, e a humana, que assumiu no tempo; unidas nessa pessoa sem confusão, sem mudança, sem divisão e sem separação, de modo que cada natureza conserva integralmente as suas propriedades, sem que qualquer atributo de uma se transfira à outra, e que tudo quanto se predica de qualquer das naturezas se predica corretamente da única pessoa que as possui; união que teve começo e não terá fim, permanecendo Ele para sempre Deus e homem, um só Cristo.',
    },
    {
      tipo: 'paragrafo',
      texto:
        'Cada cláusula responde a uma heresia. "Duas naturezas completas" recusa Apolinário. "Uma só pessoa" recusa Nestório. "Sem confusão nem mudança" recusa Êutiques. "Natureza humana verdadeira" recusa o docetismo. A definição é, literalmente, a cicatriz de quatro séculos de controvérsia.',
    },
    {
      tipo: 'pastoral',
      texto:
        'A pergunta que sempre volta é por que isto importa a quem não estuda teologia. Importa porque governa a que espécie de mediador se recorre. Se Cristo não é verdadeiramente Deus, sua morte é a de um mártir e não paga dívida alguma. Se não é verdadeiramente homem, não representa ninguém, e a obediência que Ele prestou não é obediência humana que possa ser contada a nosso favor. É a união das duas naturezas na mesma pessoa que torna a substituição possível. E há um segundo alcance, mais íntimo: a humanidade que Ele assumiu Ele não devolveu. Continua homem, com corpo, agora à direita do Pai. Quem ora não fala com uma abstração que ouviu falar do que é cansaço, medo e luto — fala com alguém que conhece essas coisas por dentro e que não deixou de conhecê-las ao subir. "Não temos sumo sacerdote que não possa compadecer-se das nossas fraquezas" (Hb 4.15): esta frase só é verdadeira porque Calcedônia está certa.',
    },
  ],
  fontes: [
    {
      id: 'calvino-institutas',
      autor: 'João Calvino',
      ano: '1559',
      titulo: 'Institutes of the Christian Religion — Livro II, caps. 12-14',
      publicacao: 'Christian Classics Ethereal Library (CCEL)',
      url: 'https://www.ccel.org/ccel/calvin/institutes.all.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'II.12 trata da necessidade da encarnação e II.14 da união das duas naturezas, com a discussão da communicatio idiomatum na sua forma reformada.',
    },
    {
      id: 'hodge-st2',
      autor: 'Charles Hodge',
      ano: '1872',
      titulo: 'Systematic Theology, vol. II — sobre a pessoa de Cristo',
      publicacao: 'CCEL',
      url: 'https://www.ccel.org/ccel/hodge/theology2.toc.html',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Percorre as heresias, os concílios e a controvérsia com os luteranos sobre a comunicação dos atributos. Domínio público.',
    },
    {
      id: 'turretin-latim',
      autor: 'Francis Turretin',
      ano: '1679',
      titulo: 'Institutio Theologiae Elencticae — Locus XIII, De persona Christi',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/institutiotheol00turrgoog',
      idioma: 'la',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A fonte da anhypostasia/enhypostasia e da recusa reformada da comunicação entre as naturezas. Domínio público.',
    },
    {
      id: 'cfw-ipib',
      autor: 'Assembleia de Westminster',
      ano: '1647',
      titulo: 'Confissão de Fé de Westminster, cap. VIII — De Cristo, o Mediador',
      publicacao: 'Igreja Presbiteriana Independente do Brasil',
      url: 'https://ipib.org.br/confissao-de-fe-de-westminster/',
      idioma: 'pt',
      tipo: 'documento',
      acesso: 'livre',
      nota: 'O § 2 reproduz a substância de Calcedônia em português, incluindo "sem conversão, composição ou confusão".',
    },
    {
      id: 'bavinck-gd-obra',
      autor: 'Herman Bavinck',
      ano: '1895-1901',
      titulo: 'Gereformeerde Dogmatiek — sobre a pessoa de Cristo',
      publicacao: 'DBNL',
      url: 'https://www.dbnl.org/tekst/bavi002gere00_01/',
      idioma: 'nl',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'A melhor exposição moderna do desenvolvimento histórico até Calcedônia e das controvérsias posteriores.',
    },
  ],
};
