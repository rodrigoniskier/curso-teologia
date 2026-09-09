import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te03-u13-jerusalem-tempos-cristo',
  disciplina: 'TE03',
  unidade: 13,
  titulo: 'Jerusalém nos tempos de Cristo',
  objetivo: 'Reconstruir os elementos essenciais da Jerusalém do primeiro século e do templo herodiano, relacionando topografia, peregrinação, instituições e espaço cultual às narrativas dos Evangelhos e de Atos.',
  topicosCobertos: [
    'A cidade',
    'Templo',
  ],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Jerusalém é cidade de montanha, peregrinação e poder',
      paragrafos: [
        'Jerusalém se ergue na região montanhosa de Judá e depende de rotas que sobem até a cidade. Sua posição oferece vantagens defensivas, mas exige atenção especial à água, abastecimento e acesso. A topografia ajuda a compreender movimentos entre cidade, monte das Oliveiras, vale do Cedrom e áreas adjacentes.',
        'No primeiro século, Jerusalém é simultaneamente centro religioso, administrativo e econômico. Festas de peregrinação multiplicam temporariamente sua população; hospedagem, comércio, câmbio, sacrifícios e circulação de peregrinos aumentam a pressão sobre ruas, portões e áreas próximas ao templo.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. A cidade não pode ser reduzida a um mapa fixo',
      paragrafos: [
        'Muralhas, bairros e estruturas urbanas mudaram ao longo do tempo. Reconstruções modernas combinam textos, arqueologia e topografia, mas nem toda rua ou edifício do primeiro século pode ser identificado com o mesmo grau de certeza. O estudante deve distinguir estruturas amplamente reconhecidas de localizações tradicionais ou debatidas.',
        'Essa cautela é especialmente importante em roteiros devocionais. Uma tradição posterior pode ser valiosa para a memória cristã sem se tornar automaticamente identificação arqueológica do local exato de um episódio.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '3. O templo herodiano organiza a experiência da cidade',
      paragrafos: [
        'Herodes ampliou o complexo do templo em escala monumental. O santuário propriamente dito ocupa parte de uma plataforma muito maior, com pátios, acessos e áreas de circulação. Para o Novo Testamento, “templo” pode referir-se ao conjunto ou a espaços mais específicos, conforme o termo e o contexto.',
        'O templo é centro de sacrifício, oração, ensino, peregrinação e autoridade sacerdotal. Também envolve economia: animais, ofertas, moedas e serviços aparecem no entorno do culto. Isso torna episódios de purificação do templo e disputas de autoridade simultaneamente religiosos, institucionais e espaciais.',
        'Após a destruição de 70 d.C., o complexo deixou de funcionar. Josefo escreve como testemunha do primeiro século e descreve Jerusalém, o templo e a guerra; sua perspectiva precisa ser lida criticamente, mas é indispensável para reconstruir o cenário.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Perguntas para ler uma cena em Jerusalém',
      itens: [
        'O episódio ocorre dentro do templo, em seus pátios, nas proximidades ou em outro setor da cidade?',
        'É época de festa, com aumento de peregrinos e tensão administrativa?',
        'Quais autoridades aparecem: sacerdotais, sinagogais, herodianas ou romanas?',
        'O movimento descrito envolve subida, vale, portão ou caminho para fora da cidade?',
        'A localização proposta é arqueologicamente segura, provável ou apenas tradicional?'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te03-u13-a1',
      titulo: 'Atividade — separar templo, cidade e tradição',
      enunciado: 'Um guia afirma que cada ponto moderno de um roteiro da paixão corresponde com certeza ao local exato do primeiro século. Avalie a afirmação e proponha uma forma mais rigorosa de apresentar o percurso.',
      itens: [
        'Diferencie topografia segura de identificação tradicional.',
        'Explique por que mudanças urbanas posteriores importam.',
        'Preserve o valor histórico e devocional sem criar certeza arqueológica artificial.'
      ],
      resposta: 'A topografia geral de Jerusalém e várias estruturas do período são bem conhecidas, mas nem cada rua ou estação tradicional pode ser identificada com precisão. Um roteiro rigoroso deve declarar graus de certeza, explicar transformações urbanas e distinguir memória devocional de demonstração arqueológica.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese da unidade',
      itens: [
        'Jerusalém combina topografia montanhosa, peregrinação, administração e simbolismo religioso.',
        'A cidade do primeiro século precisa ser reconstruída por fontes e arqueologia com graus de certeza.',
        'O templo herodiano é um complexo monumental, não apenas o edifício do santuário.',
        'Culto, autoridade e economia se encontram no espaço do templo.',
        'Tradição de localização deve ser distinguida de identificação arqueológica.'
      ],
    },
  ],
  fontes: [
    {
      id: 'josefo-obras',
      autor: 'Flávio Josefo',
      ano: '93',
      titulo: 'The Works of Flavius Josephus (trad. William Whiston)',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/workstranslatedb00joseuoft',
      idioma: 'en',
      tipo: 'traducao',
      acesso: 'livre',
      nota: 'Fonte antiga central para Jerusalém, templo, instituições e guerra judaico-romana.'
    },
    {
      id: 'smith-atlas',
      autor: 'George Adam Smith',
      ano: '1915',
      titulo: 'Atlas of the Historical Geography of the Holy Land',
      publicacao: 'Internet Archive',
      url: 'https://archive.org/details/atlasofhistorica00smit',
      idioma: 'en',
      tipo: 'obra-primaria',
      acesso: 'livre',
      nota: 'Mapas históricos e topográficos para Jerusalém e seus arredores.'
    }
  ],
  atualizadoEm: '2026-09-04',
};
