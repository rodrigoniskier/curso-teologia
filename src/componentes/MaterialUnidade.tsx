import type { BlocoMaterialUnidade, MaterialUnidade as TMaterialUnidade } from '../tipos';

export function BlocoMaterial({ bloco }: { bloco: BlocoMaterialUnidade }) {
  if (bloco.tipo === 'texto') {
    return (
      <section className="mt-8">
        {bloco.titulo && (
          <h3 className="font-serif text-[1.32rem] font-semibold text-tinta-800">{bloco.titulo}</h3>
        )}
        <div className={bloco.titulo ? 'mt-3 space-y-3' : 'space-y-3'}>
          {bloco.paragrafos.map((p, i) => (
            <p key={i} className="text-[1rem] leading-[1.78] text-neutral-700">{p}</p>
          ))}
        </div>
      </section>
    );
  }

  if (bloco.tipo === 'lista') {
    const Lista = bloco.ordenada ? 'ol' : 'ul';
    return (
      <section className="mt-7">
        {bloco.titulo && (
          <h3 className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-tinta-700">
            {bloco.titulo}
          </h3>
        )}
        <Lista className={`mt-3 space-y-2 pl-5 text-[0.98rem] leading-relaxed text-neutral-700 ${bloco.ordenada ? 'list-decimal' : 'list-disc'}`}>
          {bloco.itens.map((item, i) => <li key={i}>{item}</li>)}
        </Lista>
      </section>
    );
  }

  if (bloco.tipo === 'exemplo') {
    return (
      <aside className="mt-7 border-l-2 border-ouro-300 bg-papel-quente px-4 py-4">
        {bloco.titulo && (
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ouro-700">
            {bloco.titulo}
          </p>
        )}
        <p className="mt-1 font-serif text-[1.05rem] italic leading-relaxed text-tinta-800">{bloco.enunciado}</p>
        <p className="mt-2 text-[0.94rem] leading-relaxed text-neutral-650">{bloco.explicacao}</p>
      </aside>
    );
  }

  if (bloco.tipo === 'quadro') {
    return (
      <aside className="mt-7 border border-margem bg-white px-5 py-4">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-tinta-700">
          {bloco.titulo}
        </p>
        <ul className="mt-3 space-y-2">
          {bloco.itens.map((item, i) => (
            <li key={i} className="text-[0.94rem] leading-relaxed text-neutral-700">{item}</li>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <section className="mt-8 border border-margem bg-papel-quente px-5 py-5">
      <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ouro-700">
        Atividade{bloco.titulo ? ` · ${bloco.titulo}` : ''}
      </p>
      <p className="mt-2 text-[0.98rem] font-medium leading-relaxed text-neutral-800">{bloco.enunciado}</p>
      {bloco.itens && (
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.95rem] leading-relaxed text-neutral-700">
          {bloco.itens.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      )}
      <details className="mt-4 border-t border-margem pt-3">
        <summary className="cursor-pointer font-sans text-[0.76rem] font-semibold text-tinta-600">
          Conferir resposta comentada
        </summary>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-neutral-650">{bloco.resposta}</p>
      </details>
    </section>
  );
}

export function MaterialUnidade({ material }: { material: TMaterialUnidade }) {
  return (
    <section className="mt-10 border-t border-margem pt-8">
      <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
        Aula da unidade
      </p>
      <h2 className="mt-1 font-serif text-[1.65rem] font-semibold leading-tight text-tinta-900">
        {material.titulo}
      </h2>
      <p className="mt-3 text-[1rem] leading-relaxed text-neutral-700">{material.objetivo}</p>

      {material.blocos.map((bloco, i) => <BlocoMaterial key={`${bloco.tipo}-${i}`} bloco={bloco} />)}

      {material.fontes.length > 0 && (
        <section className="mt-10 border-t border-margem pt-6">
          <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-tinta-700">
            Fontes e aprofundamento
          </h3>
          <ul className="mt-4 space-y-3">
            {material.fontes.map((fonte) => (
              <li key={fonte.id} className="border-l-2 border-margem pl-4">
                <a
                  href={fonte.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-[1rem] text-tinta-600 underline decoration-tinta-200 underline-offset-2 hover:decoration-tinta-600"
                >
                  {fonte.titulo}
                </a>
                <p className="mt-0.5 font-sans text-[0.76rem] text-neutral-500">
                  {fonte.autor}{fonte.ano ? ` · ${fonte.ano}` : ''}{fonte.publicacao ? ` · ${fonte.publicacao}` : ''}
                </p>
                {fonte.nota && <p className="mt-1 text-[0.9rem] leading-relaxed text-neutral-600">{fonte.nota}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
