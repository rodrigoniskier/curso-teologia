import { Link } from 'react-router-dom';
import { avaliacoesDaDisciplina } from '../dados/avaliacoes';
import { naturezaDaDisciplina, rotuloNatureza } from '../dados/configuracao-curricular';
import { coberturaDaDisciplina } from '../infra/cobertura-curricular';
import type { Disciplina, ModuloAvaliativo } from '../tipos';

function rotuloStatus(avaliacao: ModuloAvaliativo): string {
  switch (avaliacao.status) {
    case 'aguardando-conteudo':
      return 'Aguardando conclusão do conteúdo';
    case 'pronto-para-elaboracao':
      return 'Conteúdo concluído · questões ainda não elaboradas';
    case 'sem-unidades-na-faixa':
      return 'Sem unidades oficiais nesta faixa';
    case 'sem-unidades-oficiais':
      return 'Programa oficial sem unidades estruturadas';
    case 'publicado':
      return 'Disponível';
  }
}

function intervalo(avaliacao: ModuloAvaliativo): string {
  if (avaliacao.unidadesAlvo.length === 0) {
    return `faixa ${avaliacao.inicioUnidade}–${avaliacao.fimUnidade}`;
  }
  const primeiro = avaliacao.unidadesAlvo[0];
  const ultimo = avaliacao.unidadesAlvo.at(-1) ?? primeiro;
  return primeiro === ultimo ? `unidade ${primeiro}` : `unidades ${primeiro}–${ultimo}`;
}

export function PainelCurricular({ disciplina }: { disciplina: Disciplina }) {
  const natureza = naturezaDaDisciplina(disciplina.codigo);
  const cobertura = coberturaDaDisciplina(disciplina);
  const avaliacoes = avaliacoesDaDisciplina(disciplina);
  const extras = disciplina.unidades.filter((u) => u.numero > 15);

  return (
    <section className="mt-9 border border-margem bg-papel-quente px-5 py-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
            Plano curricular integral
          </p>
          <h2 className="mt-1 font-serif text-[1.35rem] font-semibold text-tinta-800">
            {rotuloNatureza(natureza)}
          </h2>
        </div>
        <div className="text-right font-sans text-[0.76rem] text-neutral-600">
          {cobertura.semUnidadesOficiais ? (
            <span>{cobertura.concluida ? 'Disciplina verificada' : 'Verificação pendente'}</span>
          ) : (
            <>
              <span className="block font-semibold text-tinta-700">
                {cobertura.quantidadeConcluida}/{cobertura.totalUnidades} unidades concluídas
              </span>
              <span>{cobertura.percentual.toFixed(0)}% da cobertura oficial confirmada</span>
            </>
          )}
        </div>
      </div>

      <p className="mt-4 font-sans text-[0.82rem] leading-relaxed text-neutral-600">
        Uma unidade só aparece como concluída depois de revisão explícita de todos os seus tópicos.
        A existência de um verbete relacionado, por si só, não certifica cobertura integral.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {avaliacoes.map((avaliacao) => (
          <Link
            key={avaliacao.id}
            to={`/disciplina/${disciplina.codigo}/avaliacao/${avaliacao.id}`}
            className="block border border-margem bg-white px-4 py-4 transition-colors hover:border-tinta-300 hover:bg-papel"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-serif text-[1.15rem] font-semibold text-tinta-700">{avaliacao.rotulo}</p>
              <span className="font-sans text-[0.68rem] uppercase tracking-wide text-neutral-400">
                {intervalo(avaliacao)}
              </span>
            </div>
            <p className="mt-2 font-sans text-[0.78rem] leading-relaxed text-neutral-600">
              {rotuloStatus(avaliacao)}
            </p>
            <p className="mt-2 font-sans text-[0.7rem] text-neutral-400">
              Módulo estruturado · 0 questões publicadas
            </p>
          </Link>
        ))}
      </div>

      {extras.length > 0 && (
        <p className="mt-4 border-l-2 border-ouro-300 pl-3 font-sans text-[0.78rem] leading-relaxed text-neutral-600">
          Esta disciplina possui {extras.length} unidade(s) além da unidade 15. Elas continuam obrigatórias
          para a conclusão curricular, mas ficam fora do recorte AV1 (1–8) + AV2 (9–15) definido para as avaliações.
        </p>
      )}
    </section>
  );
}
