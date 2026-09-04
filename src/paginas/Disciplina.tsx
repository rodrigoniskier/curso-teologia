import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { porCodigo, verbetesDe } from '../infra/catalogo';
import { carregarDisciplina } from '../infra/carregar-disciplina';
import { carregarLeituras } from '../infra/carregar-leituras';
import { carregarVerbete } from '../infra/carregar-verbete';
import { Verbete } from '../componentes/Verbete';
import { PainelCurricular } from '../componentes/PainelCurricular';
import { ProgramaUnidades } from '../componentes/ProgramaUnidades';
import { MaterialDisciplinaPainel } from '../componentes/MaterialDisciplinaPainel';
import type { ObraLivre } from '../dados/biblioteca';
import type { Disciplina, Verbete as TVerbete } from '../tipos';

interface ProgramaCarregado {
  codigo: string;
  disciplina: Disciplina;
  livres: ObraLivre[];
}

export function PaginaDisciplina() {
  const { codigo = '', verbeteId } = useParams();
  const resumoDisciplina = porCodigo.get(codigo);
  const vs = verbetesDe(codigo);
  const resumoAtual = verbeteId ? vs.find((v) => v.id === verbeteId) : undefined;
  const [atual, setAtual] = useState<TVerbete>();
  const [falhaVerbete, setFalhaVerbete] = useState<{ id: string; tentativa: number }>();
  const [programa, setPrograma] = useState<ProgramaCarregado>();
  const [falhaDisciplina, setFalhaDisciplina] = useState<{
    codigo: string;
    tentativa: number;
  }>();
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    let ativo = true;

    if (!verbeteId || !resumoAtual) {
      return () => {
        ativo = false;
      };
    }

    void carregarVerbete(resumoAtual.id)
      .then((v) => {
        if (!ativo) return;
        if (v) setAtual(v);
        else setFalhaVerbete({ id: resumoAtual.id, tentativa });
      })
      .catch((erro: unknown) => {
        console.error(erro);
        if (ativo) setFalhaVerbete({ id: resumoAtual.id, tentativa });
      });

    return () => {
      ativo = false;
    };
  }, [verbeteId, resumoAtual?.id, tentativa]);

  useEffect(() => {
    let ativo = true;

    // Um verbete precisa apenas do resumo da disciplina e do seu próprio chunk.
    // Programa completo e biblioteca só são baixados na página geral da disciplina.
    if (!resumoDisciplina || verbeteId) {
      return () => {
        ativo = false;
      };
    }

    void Promise.all([carregarDisciplina(codigo), carregarLeituras(codigo)])
      .then(([d, obras]) => {
        if (!ativo) return;
        if (!d) {
          setFalhaDisciplina({ codigo, tentativa });
          return;
        }
        setPrograma({ codigo, disciplina: d, livres: obras });
      })
      .catch((erro: unknown) => {
        console.error(erro);
        if (ativo) setFalhaDisciplina({ codigo, tentativa });
      });

    return () => {
      ativo = false;
    };
  }, [codigo, verbeteId, resumoDisciplina?.codigo, tentativa]);

  if (!resumoDisciplina) {
    return (
      <p className="font-sans text-neutral-600">
        Disciplina não encontrada. <Link to="/" className="text-tinta-600 underline">Voltar ao início</Link>.
      </p>
    );
  }

  if (verbeteId && !resumoAtual) {
    return (
      <div>
        <p className="font-sans text-neutral-600">Verbete não encontrado.</p>
        <Link
          to={`/disciplina/${codigo}`}
          className="mt-3 inline-block font-sans text-[0.85rem] text-tinta-600 underline"
        >
          Voltar para {resumoDisciplina.codigo} · {resumoDisciplina.titulo}
        </Link>
      </div>
    );
  }

  const atualDaRota = atual?.id === resumoAtual?.id ? atual : undefined;
  const falhouVerbete =
    falhaVerbete !== undefined &&
    falhaVerbete.id === resumoAtual?.id &&
    falhaVerbete.tentativa === tentativa;

  if (verbeteId && resumoAtual && !atualDaRota) {
    return (
      <div>
        <Link
          to={`/disciplina/${codigo}`}
          className="mb-7 inline-block font-sans text-[0.8rem] text-tinta-600 hover:underline"
        >
          ← {resumoDisciplina.codigo} · {resumoDisciplina.titulo}
        </Link>
        <p className="font-sans text-[0.9rem] text-neutral-500">
          {falhouVerbete ? 'Não foi possível carregar este verbete.' : 'Carregando verbete…'}
        </p>
        {falhouVerbete && (
          <button
            type="button"
            onClick={() => setTentativa((n) => n + 1)}
            className="mt-3 font-sans text-[0.82rem] font-medium text-tinta-600 underline"
          >
            Tentar novamente
          </button>
        )}
      </div>
    );
  }

  if (atualDaRota) {
    return (
      <>
        <Link
          to={`/disciplina/${codigo}`}
          className="mb-7 inline-block font-sans text-[0.8rem] text-tinta-600 hover:underline"
        >
          ← {resumoDisciplina.codigo} · {resumoDisciplina.titulo}
        </Link>
        <Verbete verbete={atualDaRota} />
      </>
    );
  }

  const programaDaRota = programa?.codigo === codigo ? programa : undefined;
  const falhouDisciplina =
    falhaDisciplina !== undefined &&
    falhaDisciplina.codigo === codigo &&
    falhaDisciplina.tentativa === tentativa;

  if (!programaDaRota) {
    return (
      <article>
        <header className="border-b border-margem pb-7">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-tinta-600">
            {resumoDisciplina.departamento} · {resumoDisciplina.codigo}
            {resumoDisciplina.eletiva && ' · eletiva'}
          </p>
          <h1 className="mt-2 font-serif text-[2rem] font-semibold leading-tight text-tinta-900">
            {resumoDisciplina.titulo}
          </h1>
          {resumoDisciplina.ementa && (
            <p className="prosa mt-4 max-w-[62ch] text-[1.05rem] text-neutral-700">
              {resumoDisciplina.ementa}
            </p>
          )}
        </header>
        <p className="mt-7 font-sans text-[0.9rem] text-neutral-500">
          {falhouDisciplina ? 'Não foi possível carregar o programa desta disciplina.' : 'Carregando programa e leituras…'}
        </p>
        {falhouDisciplina && (
          <button
            type="button"
            onClick={() => setTentativa((n) => n + 1)}
            className="mt-3 font-sans text-[0.82rem] font-medium text-tinta-600 underline"
          >
            Tentar novamente
          </button>
        )}
      </article>
    );
  }

  const { disciplina: d, livres } = programaDaRota;

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

      <PainelCurricular disciplina={d} />
      <MaterialDisciplinaPainel codigo={d.codigo} />

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
                    {v.quantidadeBlocos} blocos · {v.quantidadeFontes} fontes
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ProgramaUnidades disciplina={d} />

      {livres.length > 0 && (
        <section className="mt-11 border-t border-margem pt-7">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Leitura gratuita para esta disciplina
          </h2>
          <p className="mt-1.5 font-sans text-[0.78rem] text-neutral-500">
            Obras em domínio público, edição autorizada ou empréstimo de
            biblioteca. <Link to="/biblioteca" className="text-tinta-600 underline">Ver a biblioteca completa</Link>.
          </p>
          <ul className="mt-5 space-y-4">
            {livres.map((o) => (
              <li key={o.id} className="border-l-2 border-ouro-300 pl-4">
                <a
                  href={o.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-[1.05rem] text-tinta-600 underline decoration-tinta-200
                             underline-offset-2 hover:decoration-tinta-600"
                >
                  {o.titulo}
                </a>
                <p className="mt-0.5 font-sans text-[0.8rem] text-neutral-600">
                  {o.autor} ({o.ano}) · {o.publicacao}
                </p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-neutral-600">{o.nota}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(d.bibliografia.basica.length > 0 || d.bibliografia.complementar.length > 0) && (
        <section className="mt-11 border-t border-margem pt-7">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Bibliografia oficial
          </h2>
          <p className="mt-1.5 font-sans text-[0.78rem] text-neutral-500">
            Como consta do programa da JET. Boa parte destes títulos está em
            catálogo; onde for o caso, os verbetes acima cobrem o conteúdo.
          </p>
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
