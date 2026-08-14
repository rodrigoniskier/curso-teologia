import type { Bloco, Fonte, Verbete as TVerbete } from '../tipos';

const NOME_IDIOMA: Record<string, string> = {
  pt: 'português', en: 'inglês', de: 'alemão', nl: 'holandês', es: 'espanhol',
  la: 'latim', fr: 'francês', grc: 'grego', he: 'hebraico',
};

const NOME_TIPO: Record<string, string> = {
  'obra-primaria': 'obra primária', traducao: 'tradução', artigo: 'artigo',
  verbete: 'verbete', curso: 'curso', documento: 'documento', acervo: 'acervo',
};

function RenderBloco({ bloco, fontes }: { bloco: Bloco; fontes: Fonte[] }) {
  switch (bloco.tipo) {
    case 'secao':
      return (
        <h2 className="secao-num mt-11 mb-4 font-sans text-[1.05rem] font-semibold tracking-tight text-tinta-700">
          {bloco.titulo}
        </h2>
      );

    case 'paragrafo':
      return <p>{bloco.texto}</p>;

    case 'lista': {
      const Tag = bloco.ordenada ? 'ol' : 'ul';
      return (
        <Tag
          className={`my-5 space-y-2 pl-6 ${
            bloco.ordenada ? 'list-decimal marker:font-sans marker:text-sm marker:text-tinta-400' : 'list-none'
          }`}
        >
          {bloco.itens.map((it, i) => (
            <li key={i} className={bloco.ordenada ? '' : 'relative'}>
              {!bloco.ordenada && (
                <span className="absolute -left-5 top-[0.62em] h-1 w-2.5 bg-ouro-300" aria-hidden="true" />
              )}
              {it}
            </li>
          ))}
        </Tag>
      );
    }

    case 'citacao': {
      const f = bloco.fonteId ? fontes.find((x) => x.id === bloco.fonteId) : undefined;
      return (
        <figure className="my-7 border-l-[3px] border-ouro-300 bg-papel-quente py-4 pl-6 pr-5">
          <blockquote className="text-[1.05rem] italic leading-relaxed text-neutral-800">
            “{bloco.texto}”
          </blockquote>
          <figcaption className="mt-3 font-sans text-[0.78rem] text-neutral-500">
            <span className="font-semibold text-tinta-700">{bloco.autor}</span>
            {bloco.obra && <>, {bloco.obra}</>}
            {f && (
              <>
                {' · '}
                <a
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-tinta-600 underline decoration-tinta-200 underline-offset-2 hover:decoration-tinta-600"
                >
                  fonte
                </a>
              </>
            )}
          </figcaption>
        </figure>
      );
    }

    case 'passagem':
      return (
        <figure className="my-7 bg-tinta-50 px-6 py-5">
          <p className="text-[1.05rem] leading-relaxed text-tinta-900">{bloco.texto}</p>
          <figcaption className="mt-2 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-tinta-600">
            {bloco.referencia}
          </figcaption>
        </figure>
      );

    case 'termo':
      return (
        <div className="my-6 border border-margem bg-white px-5 py-4">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
            Termo técnico
          </p>
          <p className="mt-1.5 font-serif text-[1.1rem] italic text-tinta-700">{bloco.termo}</p>
          <p className="mt-2 text-[1rem] leading-relaxed text-neutral-700">{bloco.texto}</p>
        </div>
      );

    case 'controversia':
      return (
        <div className="my-8 border-t-2 border-tinta-600 bg-papel-quente px-6 py-5">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-tinta-600">
            Onde se divide
          </p>
          <p className="mt-1 font-sans text-[0.98rem] font-semibold text-neutral-800">{bloco.titulo}</p>
          <dl className="mt-4 space-y-3.5">
            {bloco.posicoes.map((p, i) => (
              <div key={i} className="border-l-2 border-margem pl-4">
                <dt className="font-sans text-[0.82rem] font-semibold text-tinta-700">{p.escola}</dt>
                <dd className="mt-0.5 text-[0.98rem] leading-relaxed text-neutral-700">{p.sintese}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case 'definicao':
      return (
        <div className="my-8 border-2 border-tinta-600 bg-white px-6 py-5">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-tinta-600">
            Definição
          </p>
          <p className="mt-1.5 font-serif text-[1.25rem] font-semibold text-tinta-900">{bloco.termo}</p>
          <p className="mt-2.5 text-[1.05rem] leading-relaxed text-neutral-800">{bloco.texto}</p>
        </div>
      );

    case 'pastoral':
      return (
        <aside className="my-8 bg-ouro-100 px-6 py-5">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
            Nota pastoral
          </p>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-neutral-800">{bloco.texto}</p>
        </aside>
      );
  }
}

export function Verbete({ verbete }: { verbete: TVerbete }) {
  return (
    <article className="corpo-verbete">
      <header className="mb-9 border-b border-margem pb-7">
        <h1 className="font-serif text-[2.1rem] font-semibold leading-tight text-tinta-900">
          {verbete.titulo}
        </h1>
        {verbete.subtitulo && (
          <p className="mt-2 font-serif text-[1.15rem] italic text-neutral-600">{verbete.subtitulo}</p>
        )}
        <div className="mt-5 border-l-[3px] border-tinta-600 pl-4">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-tinta-600">
            Objetivo
          </p>
          <p className="mt-1 font-sans text-[0.92rem] leading-relaxed text-neutral-600">
            {verbete.objetivo}
          </p>
        </div>
      </header>

      <div className="prosa">
        {verbete.blocos.map((b, i) => (
          <RenderBloco key={i} bloco={b} fontes={verbete.fontes} />
        ))}
      </div>

      <section className="mt-14 border-t-2 border-tinta-600 pt-6">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
          Fontes ({verbete.fontes.length})
        </h2>
        <p className="mt-1.5 font-sans text-[0.78rem] text-neutral-500">
          Todos os links são verificados automaticamente pela auditoria contínua do repositório.
        </p>
        <ol className="mt-5 space-y-4">
          {verbete.fontes.map((f) => (
            <li key={f.id} className="border-l-2 border-margem pl-4">
              <a
                href={f.url}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-[1.02rem] text-tinta-600 underline decoration-tinta-200
                           underline-offset-2 hover:decoration-tinta-600"
              >
                {f.titulo}
              </a>
              <p className="mt-0.5 font-sans text-[0.8rem] text-neutral-600">
                {f.autor}
                {f.ano && ` (${f.ano})`}
                {f.publicacao && ` · ${f.publicacao}`}
              </p>
              <p className="mt-1 flex flex-wrap gap-1.5">
                {[NOME_TIPO[f.tipo], NOME_IDIOMA[f.idioma], f.acesso === 'livre' ? 'acesso livre' : f.acesso].map(
                  (t) => (
                    <span
                      key={t}
                      className="bg-tinta-50 px-1.5 py-0.5 font-sans text-[0.65rem] uppercase tracking-wide text-tinta-700"
                    >
                      {t}
                    </span>
                  ),
                )}
              </p>
              {f.nota && (
                <p className="mt-1.5 font-sans text-[0.82rem] leading-relaxed text-neutral-500">{f.nota}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-10 font-sans text-[0.75rem] text-neutral-400">
        Última revisão: {verbete.atualizadoEm}
      </p>
    </article>
  );
}
