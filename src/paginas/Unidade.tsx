import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MaterialUnidade } from '../componentes/MaterialUnidade';
import { naturezaDaDisciplina, rotuloNatureza } from '../dados/configuracao-curricular';
import { carregarDisciplina } from '../infra/carregar-disciplina';
import { carregarMaterialUnidade } from '../infra/carregar-material-unidade';
import { porCodigo, verbetesDe } from '../infra/catalogo';
import { unidadeEstaConcluida } from '../infra/cobertura-curricular';
import type { Disciplina, MaterialUnidade as TMaterialUnidade } from '../tipos';

function faixaAvaliativa(numero: number): string {
  if (numero <= 8) return 'AV1';
  if (numero <= 15) return 'AV2';
  return 'Fora de AV1/AV2';
}

export function PaginaUnidade() {
  const { codigo = '', numero = '' } = useParams();
  const resumo = porCodigo.get(codigo);
  const numeroUnidade = Number(numero);
  const [disciplina, setDisciplina] = useState<Disciplina>();
  const [material, setMaterial] = useState<TMaterialUnidade>();
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    let ativo = true;
    setDisciplina(undefined);
    setMaterial(undefined);
    setFalhou(false);
    if (!resumo || !Number.isInteger(numeroUnidade)) return () => { ativo = false; };

    void Promise.all([
      carregarDisciplina(codigo),
      carregarMaterialUnidade(codigo, numeroUnidade),
    ])
      .then(([d, m]) => {
        if (!ativo) return;
        if (d) setDisciplina(d);
        else setFalhou(true);
        if (m) setMaterial(m);
      })
      .catch((erro: unknown) => {
        console.error(erro);
        if (ativo) setFalhou(true);
      });

    return () => { ativo = false; };
  }, [codigo, numeroUnidade, resumo?.codigo]);

  if (!resumo || !Number.isInteger(numeroUnidade)) {
    return <p className="font-sans text-neutral-600">Unidade não encontrada.</p>;
  }

  if (!disciplina) {
    return (
      <div>
        <Link to={`/disciplina/${codigo}`} className="font-sans text-[0.8rem] text-tinta-600 hover:underline">
          ← {resumo.codigo} · {resumo.titulo}
        </Link>
        <p className="mt-6 font-sans text-[0.9rem] text-neutral-500">
          {falhou ? 'Não foi possível carregar esta unidade.' : 'Carregando unidade…'}
        </p>
      </div>
    );
  }

  const unidade = disciplina.unidades.find((u) => u.numero === numeroUnidade);
  if (!unidade) {
    return (
      <div>
        <Link to={`/disciplina/${codigo}`} className="font-sans text-[0.8rem] text-tinta-600 hover:underline">
          ← {disciplina.codigo} · {disciplina.titulo}
        </Link>
        <p className="mt-6 font-sans text-neutral-600">Esta unidade não existe no programa oficial.</p>
      </div>
    );
  }

  const natureza = naturezaDaDisciplina(codigo);
  const concluida = unidadeEstaConcluida(codigo, numeroUnidade);
  const relacionados = verbetesDe(codigo).filter((v) => v.unidade === numeroUnidade);
  const materialDaRota = material?.disciplina === codigo && material.unidade === numeroUnidade
    ? material
    : undefined;

  return (
    <article>
      <Link to={`/disciplina/${codigo}`} className="font-sans text-[0.8rem] text-tinta-600 hover:underline">
        ← {disciplina.codigo} · {disciplina.titulo}
      </Link>

      <header className="mt-6 border-b border-margem pb-7">
        <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
          Unidade oficial {unidade.numero} · {faixaAvaliativa(unidade.numero)}
        </p>
        <h1 className="mt-2 font-serif text-[2rem] font-semibold leading-tight text-tinta-900">
          {unidade.titulo}
        </h1>
        <p className="mt-3 font-sans text-[0.78rem] text-neutral-500">
          {rotuloNatureza(natureza)} · status: {concluida ? 'concluída e verificada' : 'pendente'}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
          Tópicos do programa oficial
        </h2>
        {unidade.topicos.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {unidade.topicos.map((topico, i) => (
              <li key={i} className="border-l-2 border-margem pl-4 text-[0.98rem] leading-relaxed text-neutral-700">
                {topico}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-600">
            O programa oficial registra esta unidade pelo título, sem tópicos subordinados adicionais.
          </p>
        )}
      </section>

      {materialDaRota ? (
        <MaterialUnidade material={materialDaRota} />
      ) : (
        <section className="mt-10 border-t border-margem pt-7">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Material da unidade
          </h2>
          <p className="mt-4 font-sans text-[0.84rem] leading-relaxed text-neutral-600">
            O material pedagógico específico desta unidade ainda não foi publicado. A existência desta página não conta, por si só, como conclusão curricular.
          </p>
        </section>
      )}

      {relacionados.length > 0 && (
        <section className="mt-10 border-t border-margem pt-7">
          <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
            Verbetes relacionados
          </h2>
          <ul className="mt-4 space-y-3">
            {relacionados.map((v) => (
              <li key={v.id}>
                <Link
                  to={`/disciplina/${codigo}/${v.id}`}
                  className="block border border-margem bg-white px-4 py-3 hover:border-tinta-300 hover:bg-papel-quente"
                >
                  <p className="font-serif text-[1.05rem] font-semibold text-tinta-700">{v.titulo}</p>
                  <p className="mt-1 font-sans text-[0.78rem] leading-relaxed text-neutral-600">{v.objetivo}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
