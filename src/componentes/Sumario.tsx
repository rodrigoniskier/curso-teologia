import { useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { departamentos, verbetesDe } from '../conteudo/indice';

export function Sumario({ aoNavegar }: { aoNavegar?: () => void }) {
  const { codigo } = useParams();
  const [busca, setBusca] = useState('');
  const [abertos, setAbertos] = useState<Record<string, boolean>>(() => {
    const inicial: Record<string, boolean> = {};
    for (const d of departamentos) {
      inicial[d.nome] = d.disciplinas.some((x) => verbetesDe(x.codigo).length > 0);
    }
    return inicial;
  });

  const filtrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (!q) return departamentos;
    return departamentos
      .map((d) => ({
        ...d,
        disciplinas: d.disciplinas.filter(
          (x) =>
            x.titulo.toLowerCase().includes(q) ||
            x.codigo.toLowerCase().includes(q) ||
            x.ementa.toLowerCase().includes(q),
        ),
      }))
      .filter((d) => d.disciplinas.length > 0);
  }, [busca]);

  return (
    <nav className="flex h-full flex-col" aria-label="Sumário do currículo">
      <div className="px-5 pb-3 pt-5">
        <label htmlFor="busca" className="sr-only">
          Buscar disciplina
        </label>
        <input
          id="busca"
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar disciplina ou tema…"
          className="w-full rounded-sm border border-margem bg-papel-quente px-3 py-2 font-sans text-sm
                     text-neutral-800 placeholder:text-neutral-400 focus:border-tinta-400
                     focus:outline-none focus:ring-1 focus:ring-tinta-400"
        />
      </div>

      <div className="barra-lateral flex-1 overflow-y-auto px-2 pb-10">
        {filtrados.map((dep) => {
          const aberto = busca ? true : abertos[dep.nome];
          return (
            <section key={dep.nome} className="mb-1">
              <button
                type="button"
                onClick={() => setAbertos((s) => ({ ...s, [dep.nome]: !s[dep.nome] }))}
                aria-expanded={aberto}
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left font-sans
                           text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-tinta-700
                           hover:bg-tinta-50"
              >
                <span
                  className={`text-tinta-400 transition-transform ${aberto ? 'rotate-90' : ''}`}
                  aria-hidden="true"
                >
                  ▸
                </span>
                <span className="flex-1">{dep.nome}</span>
                <span className="font-normal text-neutral-400">{dep.disciplinas.length}</span>
              </button>

              {aberto && (
                <ul className="mb-2 ml-[1.35rem] border-l border-margem">
                  {dep.disciplinas.map((d) => {
                    const n = verbetesDe(d.codigo).length;
                    const ativo = d.codigo === codigo;
                    return (
                      <li key={d.codigo}>
                        <NavLink
                          to={`/disciplina/${d.codigo}`}
                          onClick={aoNavegar}
                          className={`group flex items-baseline gap-2 border-l-2 py-[0.3rem] pl-3 pr-2 text-[0.9rem]
                            ${
                              ativo
                                ? 'border-ouro-300 bg-tinta-50 text-tinta-700'
                                : 'border-transparent text-neutral-700 hover:border-tinta-200 hover:bg-papel-quente'
                            }`}
                        >
                          <span className="font-sans text-[0.62rem] font-semibold tracking-wider text-neutral-400">
                            {d.codigo}
                          </span>
                          <span className="flex-1 leading-snug">{d.titulo}</span>
                          {n > 0 && (
                            <span
                              title={`${n} verbete(s) publicado(s)`}
                              className="mt-[0.15rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ouro-500"
                            />
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })}

        {filtrados.length === 0 && (
          <p className="px-4 py-6 font-sans text-sm text-neutral-500">
            Nenhuma disciplina corresponde a “{busca}”.
          </p>
        )}
      </div>
    </nav>
  );
}
