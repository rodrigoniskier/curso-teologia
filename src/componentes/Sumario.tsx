import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { departamentos, verbetesDe } from '../infra/catalogo';
import { buscarVerbetes, type Achado } from '../infra/busca';

/**
 * Abrir todo departamento que tenha verbete enterrava a Sistemática abaixo das
 * 27 disciplinas da Exegética. Abre-se apenas um: o da disciplina em leitura,
 * ou, na página inicial, o que tem mais verbetes publicados.
 */
function departamentoInicial(codigo?: string): string {
  if (codigo) {
    const d = departamentos.find((x) => x.disciplinas.some((y) => y.codigo === codigo));
    if (d) return d.nome;
  }
  let melhor = departamentos[0];
  let max = -1;
  for (const d of departamentos) {
    const n = d.disciplinas.reduce((s, x) => s + verbetesDe(x.codigo).length, 0);
    if (n > max) {
      max = n;
      melhor = d;
    }
  }
  return melhor.nome;
}

export function Sumario({ aoNavegar }: { aoNavegar?: () => void }) {
  const { codigo } = useParams();
  const [busca, setBusca] = useState('');
  const [achados, setAchados] = useState<Achado[]>([]);
  const [abertos, setAbertos] = useState<Record<string, boolean>>(() => ({
    [departamentoInicial(codigo)]: true,
  }));
  const ativoRef = useRef<HTMLAnchorElement>(null);

  // ao entrar direto numa URL de disciplina, garante que o departamento dela
  // esteja aberto e que o item fique visível sem o leitor ter de caçá-lo
  useEffect(() => {
    if (!codigo) return;
    const dep = departamentoInicial(codigo);
    setAbertos((s) => (s[dep] ? s : { ...s, [dep]: true }));
  }, [codigo]);

  useEffect(() => {
    ativoRef.current?.scrollIntoView({ block: 'nearest' });
  }, [codigo, abertos]);

  // O arquivo com o texto integral não entra no JavaScript inicial. Ele só é
  // solicitado quando há uma consulta com tamanho suficiente para busca útil.
  useEffect(() => {
    const q = busca.trim();
    if (q.length < 3) {
      setAchados([]);
      return;
    }

    let ativo = true;
    void buscarVerbetes(q).then((resultados) => {
      if (ativo) setAchados(resultados);
    });
    return () => {
      ativo = false;
    };
  }, [busca]);

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
        {achados.length > 0 && (
          <section className="mb-4 border-b border-margem pb-3">
            <p className="px-3 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.11em] text-ouro-700">
              Nos verbetes · {achados.length}
            </p>
            <ul className="space-y-1">
              {achados.map(({ verbete, trecho }) => (
                <li key={verbete.id}>
                  <NavLink
                    to={`/disciplina/${verbete.disciplina}/${verbete.id}`}
                    onClick={aoNavegar}
                    className="block border-l-2 border-ouro-300 py-1.5 pl-3 pr-2 hover:bg-papel-quente"
                  >
                    <span className="block font-serif text-[0.95rem] leading-snug text-tinta-700">
                      {verbete.titulo}
                    </span>
                    {trecho && (
                      <span className="mt-0.5 block font-sans text-[0.72rem] leading-snug text-neutral-500">
                        {trecho}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        )}

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
                          ref={ativo ? ativoRef : undefined}
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
          <p className="px-4 py-6 font-sans text-sm leading-relaxed text-neutral-500">
            {achados.length > 0
              ? `Nenhuma disciplina se chama assim — os resultados acima estão no corpo dos verbetes.`
              : `Nada encontrado para “${busca}”, nem entre as disciplinas nem no texto dos verbetes.`}
          </p>
        )}
      </div>
    </nav>
  );
}
