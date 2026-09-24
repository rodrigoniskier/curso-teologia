import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u10-demais-troncos',
  disciplina: 'TE05',
  unidade: 10,
  titulo: 'Verbos: os demais troncos',
  objetivo: 'Reconhecer os sete troncos verbais tradicionais e descrever suas relações morfológicas e semânticas sem impor um significado fixo a cada binyan.',
  topicosCobertos: ['Os sete troncos verbais', 'Classificação dos demais troncos'],
  blocos: [
    { tipo: 'texto', titulo: '1. Troncos são padrões morfológicos, não traduções automáticas', paragrafos: [
      'A gramática tradicional organiza grande parte do sistema verbal em sete troncos principais: Qal, Niphal, Piel, Pual, Hiphil, Hophal e Hithpael. Cada tronco possui marcas morfológicas recorrentes, mas o valor semântico de um verbo concreto precisa ser aprendido lexicalmente.',
      'É útil falar em tendências como simples/ativo, passivo ou reflexivo, intensivo e causativo apenas como orientação inicial. Nem todo Piel é “intensivo”, nem todo Hiphil pode ser traduzido mecanicamente com “fazer + verbo”.'
    ] },
    { tipo: 'quadro', titulo: 'Mapa dos sete troncos', itens: [
      'Qal — tronco básico não marcado de muitos verbos.',
      'Niphal — frequentemente médio/passivo ou outras funções relacionadas, marcado por נ ou seus efeitos morfológicos.',
      'Piel — padrão característico com vocalização própria e frequentemente daguesh na segunda radical quando fonologicamente possível.',
      'Pual — contraparte passiva tradicional do Piel.',
      'Hiphil — frequentemente associado a relações causativas, com prefixo ה em formas características.',
      'Hophal — série passiva tradicional do Hiphil.',
      'Hithpael — padrão prefixado הִתְ־, frequentemente reflexivo/recíproco ou lexicalmente especializado.'
    ] },
    { tipo: 'texto', titulo: '2. Classifique primeiro, interprete depois', paragrafos: [
      'A identificação combina prefixos, vocalização, possíveis daguesh e forma da raiz. Verbos fracos podem obscurecer marcas esperadas, razão pela qual o léxico e as partes principais continuam importantes.',
      'Depois de reconhecer o tronco, o estudante consulta o sentido daquele lema naquele binyan. Um mesmo radical pode desenvolver significados lexicalizados diferentes em troncos distintos.'
    ] },
    { tipo: 'atividade', id: 'te05-u10-a1', titulo: 'Atividade — mapa de binyanim', enunciado: 'Construa uma tabela com os sete troncos e registre apenas tendências semânticas, não definições absolutas.', itens: ['Liste marcas morfológicas iniciais.', 'Indique tendências de voz/valência.', 'Escolha um exemplo de sentido lexicalizado que mostre por que o tronco não basta para traduzir.'], resposta: 'A tabela deve servir ao reconhecimento morfológico. A tradução final depende do lema, do tronco específico e do contexto, evitando fórmulas como “Piel = intensivo” ou “Hiphil = sempre fazer alguém fazer”.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};