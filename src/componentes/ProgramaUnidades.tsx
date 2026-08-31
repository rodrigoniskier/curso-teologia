import { disciplinaSemUnidadesEstaConcluida, unidadeEstaConcluida } from '../infra/cobertura-curricular';
import type { Disciplina } from '../tipos';

function faixaAvaliativa(numero: number): string {
  if (numero <= 8) return 'AV1';
  if (numero <= 15) return 'AV2';
  return 'Fora de AV1/AV2';
}

export function ProgramaUnidades({ disciplina }: { disciplina: Disciplina }) {
  if (disciplina.unidades.length === 0) {
    const concluida = disciplinaSemUnidadesEstaConcluida(disciplina.codigo);
    return (
      <section className="mt-11">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
          Programa oficial
        </h2>
        <div className="mt-4 border-l-2 border-margem pl-4">
          <p className="font-sans text-[0.88rem] font-semibold text-neutral-700">
            O documento oficial não apresenta unidades programáticas estruturadas para esta disciplina.
          </p>
          <p className="mt-1.5 text-[0.94rem] leading-relaxed text-neutral-600">
            A disciplina continua pertencendo ao plano integral. Sua conclusão será registrada em nível de disciplina,
            sem inventar unidades que não constam do currículo da JET/IPB.
          </p>
          <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-wide text-neutral-400">
            Status: {concluida ? 'concluída e verificada' : 'pendente de produção e verificação'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-11">
      <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
        Programa oficial · {disciplina.unidades.length} unidades
      </h2>
      <p className="mt-1.5 font-sans text-[0.78rem] text-neutral-500">
        Cada unidade é acompanhada separadamente. “Concluída” significa que todos os tópicos oficiais foram
        revisados e considerados suficientemente cobertos.
      </p>
      <ol className="mt-5 space-y-3">
        {disciplina.unidades.map((u) => {
          const concluida = unidadeEstaConcluida(disciplina.codigo, u.numero);
          return (
            <li key={u.numero} className="border-l-2 border-margem pl-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="flex-1 font-sans text-[0.9rem] font-semibold text-neutral-800">
                  <span className="mr-2 text-tinta-400">{u.numero}.</span>
                  {u.titulo}
                </p>
                <span
                  className={`font-sans text-[0.65rem] font-semibold uppercase tracking-wide ${
                    concluida ? 'text-emerald-700' : 'text-neutral-400'
                  }`}
                >
                  {concluida ? 'Concluída' : 'Pendente'} · {faixaAvaliativa(u.numero)}
                </span>
              </div>
              {u.topicos.map((t, i) => (
                <p key={i} className="mt-1 text-[0.95rem] leading-relaxed text-neutral-600">
                  {t}
                </p>
              ))}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
