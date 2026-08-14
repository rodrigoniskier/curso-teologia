import { Link, useParams } from 'react-router-dom';
import { porCodigo, verbetesDe } from '../conteudo/indice';
import { Verbete } from '../componentes/Verbete';

export function PaginaDisciplina() {
  const { codigo = '', verbeteId } = useParams();
  const d = porCodigo.get(codigo);

  if (!d) {
    return (
      <p className="font-sans text-neutral-600">
        Disciplina não encontrada. <Link to="/" className="text-tinta-600 underline">Voltar ao início</Link>.
      </p>
    );
  }

  const vs = verbetesDe(codigo);
  const atual = verbeteId ? vs.find((v) => v.id === verbeteId) : undefined;

  if (atual) {
    return (
      <>
        <Link
          to={`/disciplina/${codigo}`}
          className="mb-7 inline-block font-sans text-[0.8rem] text-tinta-600 hover:underline"
        >
          ← {d.codigo} · {d.titulo}
        </Link>
        <Verbete verbete={atual} />
      </>
    );
  }

  return (
    <article>
      <header className="border-b border-margem pb-7">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-tinta-600">
          {d.departamento} · {d.codigo}
          {d.eletiva && ' · eletiva'}
        </p>
        <h1 className="mt-2 font-serif text-[2rem] font-semibold leading-tight text-tinta-900">
          {d.titulo}
        </h1>
        {d.ementa && (
          <p className="prosa mt-4 max-w-[62ch] text-[1.05rem] text-neutral-700">{d.ementa}</p>
        )}
        <p className="mt-4 font-sans text-[0.8rem] text-neutral-500">
          Pré-requisito: <span className="text-neutral-700">{d.preRequisito}</span>
        </p>
      </header>

      {vs.length > 0 && (
        <section className="mt-9">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Verbetes publicados
          </h2>
          <ul className="mt-4 space-y-3">
            {vs.map((v) => (
              <li key={v.id}>
                <Link
                  to={`/disciplina/${codigo}/${v.id}`}
                  className="block border border-margem bg-white px-5 py-4 transition-colors hover:border-tinta-400 hover:bg-papel-quente"
                >
                  <p className="font-serif text-[1.2rem] font-semibold text-tinta-700">{v.titulo}</p>
                  {v.subtitulo && (
                    <p className="mt-0.5 font-serif text-[0.98rem] italic text-neutral-600">{v.subtitulo}</p>
                  )}
                  <p className="mt-2 font-sans text-[0.82rem] leading-relaxed text-neutral-600">{v.objetivo}</p>
                  <p className="mt-2.5 font-sans text-[0.7rem] uppercase tracking-wide text-neutral-400">
                    {v.blocos.length} blocos · {v.fontes.length} fontes
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {d.unidades.length > 0 && (
        <section className="mt-11">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Programa oficial · {d.unidades.length} unidades
          </h2>
          <p className="mt-1.5 font-sans text-[0.78rem] text-neutral-500">
            Conteúdo aprovado pelo Supremo Concílio da IPB. Cada unidade receberá seu verbete.
          </p>
          <ol className="mt-5 space-y-3">
            {d.unidades.map((u) => (
              <li key={u.numero} className="border-l-2 border-margem pl-4">
                <p className="font-sans text-[0.9rem] font-semibold text-neutral-800">
                  <span className="mr-2 text-tinta-400">{u.numero}.</span>
                  {u.titulo}
                </p>
                {u.topicos.map((t, i) => (
                  <p key={i} className="mt-1 text-[0.95rem] leading-relaxed text-neutral-600">
                    {t}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}

      {(d.bibliografia.basica.length > 0 || d.bibliografia.complementar.length > 0) && (
        <section className="mt-11 border-t border-margem pt-7">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Bibliografia oficial
          </h2>
          {(['basica', 'complementar'] as const).map((k) =>
            d.bibliografia[k].length > 0 ? (
              <div key={k} className="mt-5">
                <p className="font-sans text-[0.75rem] font-semibold uppercase tracking-wide text-neutral-500">
                  {k === 'basica' ? 'Básica' : 'Complementar'}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {d.bibliografia[k].map((b, i) => (
                    <li key={i} className="text-[0.95rem] leading-relaxed text-neutral-700">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null,
          )}
        </section>
      )}
    </article>
  );
}
