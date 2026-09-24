import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'te05-u3-sufixos-pronominais',
  disciplina: 'TE05',
  unidade: 3,
  titulo: 'Sufixos',
  objetivo: 'Reconhecer sufixos pronominais em preposições, partículas e substantivos, relacionando-os a pessoa, gênero, número e à base morfológica que os recebe.',
  topicosCobertos: ['Sufixos pronominais em preposições e partículas', 'Sufixos pronominais em substantivos'],
  blocos: [
    { tipo: 'texto', titulo: '1. O pronome pode ser incorporado à palavra', paragrafos: [
      'O hebraico frequentemente acrescenta sufixos pronominais a preposições, partículas e substantivos. Em vez de uma palavra independente equivalente a “meu”, “dele” ou “para mim”, a relação pronominal é codificada na própria forma.',
      'לִי significa “para mim”; לְךָ “para ti” masculino singular; בּוֹ “nele”; עִמָּנוּ “conosco”. A base pode sofrer ajustes vocálicos quando recebe o sufixo.'
    ] },
    { tipo: 'quadro', titulo: 'Com substantivos', itens: [
      'דָּבָר “palavra/coisa” → דְּבָרוֹ “sua palavra / a palavra dele”.',
      'בַּיִת “casa” → בֵּיתוֹ “sua casa / a casa dele”.',
      'O sufixo ligado ao substantivo normalmente expressa relação genitiva: posse, associação, origem ou outra relação determinada pelo substantivo e contexto.',
      'A base usada na sufixação frequentemente se aproxima do estado construto, porque o substantivo passa a depender de um determinante pronominal.'
    ] },
    { tipo: 'texto', titulo: '2. Identifique a base antes do sufixo', paragrafos: [
      'Uma forma sufixada deve ser desmontada em base + elemento pronominal. Isso ajuda a recuperar o lema e evita procurar בֵּיתוֹ como se fosse uma entrada lexical independente de בַּיִת.',
      'O mesmo sufixo pode produzir traduções portuguesas diferentes segundo a classe de palavra: לִי “para mim”, בִּי “em mim”, דְּבָרִי “minha palavra”. A pessoa é a mesma; a relação semântica vem da base.'
    ] },
    { tipo: 'atividade', id: 'te05-u3-a1', titulo: 'Atividade — base e pessoa', enunciado: 'Separe לִי, בּוֹ, בֵּיתוֹ e דְּבָרֵנוּ em base e sufixo.', itens: ['Identifique a pessoa/número do sufixo.', 'Recupere o lema quando for substantivo.', 'Explique a relação expressa pela base.'], resposta: 'לִי = ל + 1cs; בּוֹ = ב + 3ms; בֵּיתוֹ deriva de בַּיִת + 3ms; דְּבָרֵנוּ deriva de דָּבָר + 1cp. A preposição define relações como “para/em”, enquanto o substantivo expressa relação genitiva/possessiva conforme o contexto.' }
  ],
  fontes: [
    { id: 'gesenius-hebrew-grammar-1910', autor: 'Wilhelm Gesenius; E. Kautzsch; A. E. Cowley', ano: '1910', titulo: "Gesenius' Hebrew Grammar — 2nd English edition", publicacao: 'Internet Archive — Clarendon Press', url: 'https://archive.org/details/geseniushebrewgr00geseuoft', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Gramática de referência em domínio público para morfologia e sintaxe do hebraico bíblico.' },
    { id: 'aleph-with-beth', autor: 'Bethany Case; Andrew Case', ano: '—', titulo: 'Aleph with Beth — Free Hebrew. Forever.', publicacao: 'Betheden Ministries / Free Hebrew. Forever.', url: 'https://freehebrew.online/', idioma: 'he', tipo: 'curso', acesso: 'livre', nota: 'Curso aberto para leitura, vocabulário e exposição contextual ao hebraico bíblico.' }
  ],
  atualizadoEm: '2026-09-24',
};