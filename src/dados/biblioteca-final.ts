import type { ObraLivre } from './biblioteca';

/**
 * Fontes abertas acrescentadas na reta final de cobertura das disciplinas
 * sistemáticas eletivas. Mantidas separadas para que cada inclusão permaneça
 * pequena, auditável e fácil de retirar/substituir se um acervo mudar.
 */
export const bibliotecaFinal: ObraLivre[] = [
  {
    id: 'schaff-creeds-2',
    autor: 'Philip Schaff',
    ano: '1877',
    titulo: 'The Creeds of Christendom, vol. II — Greek and Latin Creeds',
    publicacao: 'Christian Classics Ethereal Library',
    url: 'https://ccel.org/ccel/schaff/creeds2/creeds2.toc.html',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TS53', 'TH01', 'TH02'],
    nota: 'Reúne regras de fé antigas, Credo Apostólico, Niceia-Constantinopla, Calcedônia e outros símbolos em textos comparáveis. É a fonte aberta mais útil para acompanhar a formação dos credos ecumênicos sem depender de citações de segunda mão.',
    base: 'domínio público',
  },
  {
    id: 'orange-529',
    autor: 'Segundo Concílio de Orange',
    ano: '529',
    titulo: 'Canons of the Second Council of Orange, A.D. 529',
    publicacao: 'Open Library — edição de 1882',
    url: 'https://openlibrary.org/books/OL28397248M/Canons_of_the_Second_Council_of_Orange_A.D._529',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TS53', 'TH02', 'TS04'],
    nota: 'Edição histórica em latim e inglês dos cânones sobre graça, pecado e livre-arbítrio. Permite situar Orange como testemunho ocidental anterior à Reforma sem projetar retrospectivamente sobre o concílio todo o sistema reformado posterior.',
    base: 'domínio público',
  },
  {
    id: 'wrf-statement-2011',
    autor: 'World Reformed Fellowship',
    ano: '2011',
    titulo: 'World Reformed Fellowship Statement of Faith',
    publicacao: 'World Reformed Fellowship',
    url: 'https://wrfnet.org/about/statement-of-faith',
    idioma: 'en',
    acesso: 'livre',
    disciplinas: ['TS53'],
    nota: 'Página oficial da declaração concluída em 2011. A própria WRF explica que pretende expressar elementos comuns das confissões reformadas históricas, aplicar a fé a questões do século XXI e incluir vozes reformadas globais, sem substituir os símbolos históricos.',
    base: 'edição autorizada',
  },
];
