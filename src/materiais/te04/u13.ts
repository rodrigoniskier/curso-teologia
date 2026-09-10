import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u13-adjetivos-atributivo-predicativo',
  disciplina: 'TE04',
  unidade: 13,
  titulo: 'Adjetivos: uso atributivo e predicativo',
  objetivo: 'Distinguir os usos atributivo e predicativo dos adjetivos hebraicos por concordância, definitude e posição, traduzindo adequadamente orações nominais simples.',
  topicosCobertos: ['Definição dos usos atributivo e predicativo dos adjetivos'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. A mesma forma adjetiva pode participar de duas estruturas',
      paragrafos: [
        'No uso atributivo, o adjetivo integra o grupo nominal e descreve diretamente o substantivo: “o rei bom”. No uso predicativo, o adjetivo afirma algo a respeito do substantivo: “o rei é bom”. O hebraico bíblico frequentemente constrói a segunda relação sem um verbo expresso equivalente ao português “ser” no presente.',
        'Como as duas construções podem usar as mesmas formas lexicais, a análise depende de pistas sintáticas. Concordância em gênero e número permanece em ambas; definitude e posição tornam-se especialmente importantes para separar atributo e predicação.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Contraste introdutório',
      itens: [
        'Atributivo: substantivo e adjetivo concordam em gênero, número e normalmente em definitude.',
        'Predicativo: adjetivo e substantivo concordam em gênero e número, mas o adjetivo predicativo normalmente não recebe o artigo que acompanha um sujeito definido.',
        'A ordem pode ajudar, mas não deve ser tratada isoladamente como regra absoluta.',
        'A oração nominal pode exigir “é/são” na tradução portuguesa mesmo sem verbo expresso no hebraico.',
        'A definitude é pista sintática central porque distingue “o homem bom” de “o homem é bom” em muitos padrões básicos.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. Não acrescente um verbo à análise morfológica só porque ele aparece na tradução',
      paragrafos: [
        'Ao traduzir uma oração nominal para português, frequentemente inserimos uma forma de “ser” para produzir uma sentença natural. Isso é uma decisão de tradução, não prova de que haja um verbo oculto graficamente no texto. A descrição deve permanecer fiel à estrutura hebraica: sujeito nominal + predicado adjetival.',
        'Essa distinção protege a exegese. Uma tradução pode ser correta e ao mesmo tempo tornar explícita uma relação que a língua-fonte codifica sem cópula verbal no presente. O estudante deve saber explicar o que está no texto e o que foi acrescentado para a fluência portuguesa.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u13-a1',
      titulo: 'Atividade — atributo ou predicação?',
      enunciado: 'Um substantivo definido é seguido por um adjetivo do mesmo gênero e número, mas sem artigo. Qual análise deve ser testada primeiro e por quê?',
      itens: ['Compare a definitude.', 'Indique o uso provável.', 'Explique a tradução portuguesa possível.'],
      resposta: 'Deve-se testar primeiro o uso predicativo. O substantivo é definido, mas o adjetivo não compartilha essa definitude; em um padrão introdutório isso favorece a análise “o substantivo é adjetivo”. A tradução pode inserir “é”, embora a oração hebraica não precise expressar uma cópula verbal no presente.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'Atributivo modifica o substantivo dentro do grupo nominal.',
        'Predicativo afirma uma qualidade do sujeito.',
        'Gênero e número concordam nos dois usos.',
        'Definitude ajuda a distingui-los.',
        'A cópula portuguesa pode ser necessária na tradução sem existir como verbo expresso no hebraico.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para sintaxe e concordância de adjetivos atributivos e predicativos.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática contextual de grupos nominais e predicação adjetival.' }
  ],
  atualizadoEm: '2026-09-10',
};
