import type { MaterialDisciplina as TMaterialDisciplina } from '../tipos';
import { BlocoMaterial } from './MaterialUnidade';

export function MaterialDisciplina({ material }: { material: TMaterialDisciplina }) {
  return (
    <section className="mt-10 border-t border-margem pt-8">
      <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
        Material prático da disciplina
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
