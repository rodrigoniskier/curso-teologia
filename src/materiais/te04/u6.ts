import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te04-u6-guturais',
  disciplina: 'TE04',
  unidade: 6,
  titulo: 'As guturais',
  objetivo: 'Reconhecer as consoantes guturais e prever suas principais consequências gráficas e vocálicas no hebraico bíblico introdutório.',
  topicosCobertos: ['Características das guturais'],
  blocos: [
    {
      tipo: 'texto',
      titulo: '1. Algumas consoantes mudam o comportamento da palavra ao redor delas',
      paragrafos: [
        'As letras א, ה, ח e ע são tradicionalmente agrupadas como guturais. ר compartilha alguns de seus comportamentos em vários paradigmas e por isso costuma ser tratada à parte como consoante com propriedades semelhantes. Para o iniciante, a consequência mais importante é perceber que essas letras não participam de todas as regras exatamente como uma consoante regular.',
        'As guturais resistem ao daguesh forte. Quando uma regra morfológica normalmente produziria duplicação da consoante, a língua frequentemente compensa com alterações de vocalização. Elas também demonstram preferência por vogais do campo de a em determinados ambientes e podem receber hatef-vogais, isto é, vogais reduzidas compostas com shva.'
      ],
    },
    {
      tipo: 'quadro',
      titulo: 'Características que precisam ser reconhecidas desde já',
      itens: [
        'א, ה, ח e ע não recebem normalmente daguesh forte.',
        'ר também resiste ao daguesh forte na tradição tiberiense e frequentemente provoca ajustes semelhantes.',
        'Guturais favorecem certas mudanças vocálicas, especialmente quando uma regra esperaria duplicação.',
        'Podem aparecer com hatef-patah, hatef-segol e hatef-qamets, sinais de vogal reduzida.',
        'ח, ע e às vezes ה final podem favorecer patah furtivo antes da consoante na leitura tradicional; o fenômeno deve ser reconhecido como regra de pronúncia/vocalização, não como inversão da direção da escrita.'
      ],
    },
    {
      tipo: 'texto',
      titulo: '2. “Exceção” é muitas vezes uma regra fonológica previsível',
      paragrafos: [
        'Quando o artigo definido ou outro morfema parece assumir uma forma diferente diante de uma gutural, não é útil decorar cada ocorrência como irregularidade isolada. A pergunta melhor é: que operação a forma regular tentaria realizar e qual propriedade da gutural impede essa operação?',
        'Essa maneira de raciocinar prepara o estudante para morfologia verbal posterior. Em vez de aprender dezenas de paradigmas como listas sem conexão, ele aprende a reconhecer que grande parte das chamadas formas fracas deriva da interação entre morfemas regulares e propriedades fonológicas das consoantes da raiz.'
      ],
    },
    {
      tipo: 'atividade',
      id: 'te04-u6-a1',
      titulo: 'Atividade — prever antes de memorizar',
      enunciado: 'Uma regra morfológica pede duplicação da primeira consoante de um substantivo, mas essa consoante é ח. Explique por que não se deve simplesmente inserir um daguesh forte e indique que tipo de ajuste você esperaria procurar na forma vocalizada.',
      itens: [
        'Identifique a propriedade relevante de ח.',
        'Diga por que a ausência de daguesh não significa ausência do morfema.',
        'Indique qual evidência adicional deve ser observada.'
      ],
      resposta: 'ח é gutural e normalmente não recebe daguesh forte. O morfema pode continuar presente, mas sua forma fonológica precisa se ajustar; por isso o estudante deve procurar mudança vocálica, alongamento compensatório ou outro padrão registrado pelo paradigma específico. A ausência do ponto não autoriza concluir que a função gramatical desapareceu.'
    },
    {
      tipo: 'quadro',
      titulo: 'Síntese',
      itens: [
        'As guturais principais são א, ה, ח e ע; ר compartilha algumas restrições.',
        'A resistência ao daguesh forte é a propriedade introdutória mais importante.',
        'Mudanças de vogal diante de guturais são frequentemente previsíveis.',
        'Hatef-vogais e patah furtivo pertencem à tradição de vocalização que registra essas propriedades.',
        'Entender a causa fonológica reduz a carga de memorização de paradigmas posteriores.'
      ],
    },
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Referência para propriedades das guturais e seus efeitos sobre daguesh e vocalização.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Prática complementar de percepção e leitura das guturais em vocabulário bíblico.' }
  ],
  atualizadoEm: '2026-09-10',
};
