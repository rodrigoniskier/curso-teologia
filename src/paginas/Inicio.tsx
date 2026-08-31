import { Link } from 'react-router-dom';
import { departamentos, estatisticas, verbetes } from '../infra/catalogo';

function Numero({ valor, rotulo }: { valor: number; rotulo: string }) {
  return (
    <div className="border-t-2 border-ouro-300 pt-3">
      <p className="font-serif text-[2rem] font-semibold leading-none text-tinta-700">
        {valor.toLocaleString('pt-BR')}
      </p>
      <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-[0.11em] text-neutral-500">{rotulo}</p>
    </div>
  );
}

export function PaginaInicio() {
  return (
    <div>
      <header className="border-b border-margem pb-9">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-tinta-600">
          Portal de estudos
        </p>
        <h1 className="mt-3 max-w-[20ch] font-serif text-[2.6rem] font-semibold leading-[1.1] text-tinta-900">
          Teologia Reformada, do texto à doutrina
        </h1>
        <p className="prosa mt-5 max-w-[64ch] text-[1.1rem] text-neutral-700">
          Um percurso de formação em português, organizado segundo o{' '}
          <em>Conteúdo Programático Curricular dos Seminários Teológicos da Igreja Presbiteriana do
          Brasil</em> — o currículo unificado aprovado pelo Supremo Concílio e adotado pelo Seminário
          Presbiteriano do Norte e demais seminários da IPB.
        </p>
        <p className="prosa mt-4 max-w-[64ch] text-[1.05rem] text-neutral-600">
          O plano agora acompanha as 121 disciplinas e cada unidade oficial separadamente. Idiomas e
          estágios permanecem no currículo integral com formatos pedagógicos próprios, sem serem
          artificialmente tratados como verbetes doutrinários.
        </p>
      </header>

      <section className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3">
        <Numero valor={estatisticas.disciplinas} rotulo="disciplinas no plano" />
        <Numero valor={estatisticas.unidades} rotulo="unidades oficiais" />
        <Numero valor={estatisticas.unidadesConcluidas} rotulo="unidades verificadas" />
        <Numero valor={estatisticas.modulosAvaliativos} rotulo="módulos AV1/AV2" />
        <Numero valor={estatisticas.referencias} rotulo="referências oficiais" />
        <Numero valor={estatisticas.verbetes} rotulo="verbetes publicados" />
      </section>

      {verbetes.length > 0 && (
        <section className="mt-14">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Comece por aqui
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {verbetes.map((v) => (
              <li
                key={v.id}
                className="[contain-intrinsic-size:auto_180px] [content-visibility:auto]"
              >
                <Link
                  to={`/disciplina/${v.disciplina}/${v.id}`}
                  className="flex h-full flex-col border border-margem bg-white px-5 py-5 transition-colors hover:border-tinta-400 hover:bg-papel-quente"
                >
                  <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
                    {v.disciplina}
                  </p>
                  <p className="mt-1.5 font-serif text-[1.3rem] font-semibold leading-snug text-tinta-700">
                    {v.titulo}
                  </p>
                  <p className="mt-2 font-sans text-[0.85rem] leading-relaxed text-neutral-600">
                    {v.objetivo}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
          Os cinco departamentos
        </h2>
        <ul className="mt-5 space-y-5">
          {departamentos.map((d) => (
            <li key={d.nome} className="border-l-2 border-tinta-200 pl-5">
              <p className="font-serif text-[1.25rem] font-semibold text-tinta-800">{d.nome}</p>
              <p className="mt-0.5 font-sans text-[0.78rem] text-neutral-500">
                {d.disciplinas.length} disciplinas ·{' '}
                {d.disciplinas.filter((x) => !x.eletiva).length} obrigatórias
              </p>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-neutral-600">
                {d.disciplinas
                  .filter((x) => !x.eletiva)
                  .slice(0, 6)
                  .map((x) => x.titulo)
                  .join(' · ')}
                {d.disciplinas.length > 6 && ' …'}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
