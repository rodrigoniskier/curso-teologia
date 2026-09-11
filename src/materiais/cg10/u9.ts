import type { MaterialUnidade } from '../../tipos';

export const material: MaterialUnidade = {
  id: 'cg10-u9-igreja-problemas-sociais',
  disciplina: 'CG10',
  unidade: 9,
  titulo: 'A igreja e os problemas sociais',
  objetivo: 'Analisar pobreza, preconceito, educação, corrupção e política com categorias sociológicas, distinguindo diagnóstico empírico, responsabilidade moral, ação diaconal e missão própria da igreja para evitar tanto indiferentismo quanto captura partidária.',
  topicosCobertos: ['Pobreza', 'Preconceito e educação', 'Corrupção', 'Política'],
  blocos: [
    { tipo: 'texto', titulo: '1. Problemas sociais precisam ser definidos antes de serem combatidos', paragrafos: [
      'Pobreza, preconceito, corrupção e conflitos políticos não são fenômenos simples nem monocausais. Cada um envolve indivíduos, instituições, incentivos, normas, redes e processos históricos. A análise sociológica ajuda a identificar padrões e mecanismos antes de escolher respostas.',
      'Isso impede duas simplificações: transformar todo problema em falha moral privada ou, no extremo oposto, explicar toda conduta apenas por estruturas sociais. Pessoas agem dentro de condições reais, mas continuam agentes responsáveis.'
    ] },
    { tipo: 'quadro', titulo: 'Quatro campos de análise', itens: [
      'Pobreza: observe renda, trabalho, território, acesso a serviços, redes de apoio e mobilidade, sem reduzir pessoas pobres a uma categoria homogênea.',
      'Preconceito e educação: investigue estereótipos, discriminação, expectativas institucionais e desigualdades de acesso e permanência.',
      'Corrupção: além da culpa individual, examine incentivos, controles, transparência, impunidade, redes de reciprocidade e cultura organizacional.',
      'Política: diferencie Estado, governo, partidos, políticas públicas, cidadania e ação institucional da igreja; divergência política entre cidadãos não equivale automaticamente a infidelidade cristã.'
    ] },
    { tipo: 'texto', titulo: '2. Igreja, diaconia e esfera pública', paragrafos: [
      'A igreja anuncia a Palavra, administra os sacramentos e exerce disciplina; também forma discípulos para amar o próximo, praticar justiça, socorrer necessitados e viver responsavelmente na sociedade. A atuação cristã no mundo, porém, não exige converter o púlpito em extensão de partido ou campanha.',
      'A tradição reformada distingue a competência própria da igreja e a autoridade civil sem imaginar que a fé seja socialmente irrelevante. Essa distinção permite cooperação em bens comuns, denúncia moral quando a Escritura é clara e prudência onde propostas políticas concorrentes podem buscar legitimamente fins semelhantes por meios diferentes.'
    ] },
    { tipo: 'texto', titulo: '3. Da impressão ao diagnóstico verificável', paragrafos: [
      'Uma igreja que deseja responder a um problema social precisa primeiro medir o que afirma existir. Quantas famílias enfrentam insegurança alimentar? Quais barreiras mantêm jovens fora da escola? Que evidência sustenta a percepção de discriminação? Onde um processo administrativo permite abuso?',
      'A boa intenção não substitui diagnóstico. Dados, escuta local e avaliação de resultados ajudam a evitar programas que consomem recursos sem atingir o problema ou que criam dependência sem perceber.'
    ] },
    { tipo: 'atividade', id: 'cg10-u9-a1', titulo: 'Atividade final — do problema à resposta', enunciado: 'Uma igreja afirma que “o bairro está tomado pela pobreza e pela corrupção” e deseja iniciar uma ação pública. Construa um plano de análise anterior à intervenção.', itens: ['Defina operacionalmente os problemas.', 'Identifique dados e pessoas que precisam ser ouvidos.', 'Separe ação eclesiástica, ação diaconal e cidadania dos membros.', 'Defina como avaliar resultados sem vincular ajuda a apoio político ou conversão.'], resposta: 'O plano deve substituir slogans por indicadores verificáveis, mapear território e serviços existentes, ouvir moradores e atores locais, identificar competências da igreja e de instituições civis, proteger a dignidade dos beneficiários e definir resultados mensuráveis. Ajuda cristã não deve ser condicionada a voto, filiação partidária ou profissão religiosa; evangelização e misericórdia podem coexistir sem coerção.' },
    { tipo: 'quadro', titulo: 'Síntese', itens: ['Problemas sociais são multicausais e exigem diagnóstico.', 'Estrutura e responsabilidade pessoal não se anulam.', 'A igreja deve evitar tanto omissão quanto captura partidária.', 'Intervenções responsáveis usam evidências, escuta e avaliação.', 'A dignidade do próximo impede instrumentalizar assistência para poder político ou religioso.'] }
  ],
  fontes: [
    { id: 'openstax-sociology3', autor: 'Tonja R. Conerly, Kathleen Holmes e Asha Lal Tamang', ano: '2021', titulo: 'Introduction to Sociology 3e', publicacao: 'OpenStax / Rice University', url: 'https://openstax.org/details/books/introduction-sociology-3e', idioma: 'en', tipo: 'livro', acesso: 'livre', nota: 'Base aberta para pobreza, desigualdade, educação, governo e problemas sociais.' },
    { id: 'cfw-ipib', autor: 'Assembleia de Westminster', ano: '1647', titulo: 'Confissão de Fé de Westminster', publicacao: 'Igreja Presbiteriana Independente do Brasil', url: 'https://ipib.org.br/confissao-de-fe-de-westminster/', idioma: 'pt', tipo: 'documento', acesso: 'livre', nota: 'Referência confessional para vocação da igreja, liberdade cristã, magistrado civil e limites de autoridade.' }
  ],
  atualizadoEm: '2026-09-10',
};
