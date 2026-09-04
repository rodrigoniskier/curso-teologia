import type { ObraLivre } from './biblioteca';

/** Fontes abertas específicas do ciclo integral de TE03 — Geografia e Arqueologia Bíblica. */
export const bibliotecaTe03: ObraLivre[] = [
  {
    id: 'iaa-dead-sea-scrolls',
    autor: 'Israel Antiquities Authority',
    ano: '—',
    titulo: 'Leon Levy Dead Sea Scrolls Digital Library',
    publicacao: 'Israel Antiquities Authority',
    url: 'https://www.deadseascrolls.org.il/',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TE03'],
    nota: 'Biblioteca digital oficial dos Manuscritos do Mar Morto, com imagens de alta resolução de milhares de fragmentos, informações sobre sítios de descoberta, conteúdo, línguas, conservação e história da publicação. É usada como fonte institucional primária para Qumran e os manuscritos, sem confundir o acervo textual com hipóteses sobre a identidade da comunidade do sítio.',
    base: 'edição autorizada',
  },
];
