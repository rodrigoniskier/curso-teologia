import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { avaliacaoDaDisciplina } from '../dados/avaliacoes';
import { carregarDisciplina } from '../infra/carregar-disciplina';
import { porCodigo } from '../infra/catalogo';
import { coberturaDaDisciplina } from '../infra/cobertura-curricular';
import type { Disciplina, ModuloAvaliativo } from '../tipos';

function textoStatus(avaliacao: ModuloAvaliativo): string {
  switch (avaliacao.status) {
    case 'aguardando-conteudo':
      return 'Aguardando a conclusão e a verificação de todas as unidades deste bloco.';
    case 'pronto-para-elaboracao':
      return 'O conteúdo deste bloco está concluído. A avaliação ainda não foi elaborada.';
    case 'sem-unidades-na-faixa':
      return 'O programa oficial não possui unidades nesta faixa. O módulo permanece reservado estruturalmente.';
    case 'sem-unidades-oficiais':
      return 'O programa oficial não apresenta unidades estruturadas; o escopo avaliativo não será inventado.';
    case 'publicado':
      return 'Avaliação disponível.';
  }
}

export function PaginaAvaliacao() {
  const { codigo = '', avaliacaoId = '' } = useParams();
  const resumo = porCodigo.get(codigo);
  const [disciplina, setDisciplina] = useState<Disciplina>();
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    let ativo = true;
    setDisciplina(undefined);
    setFalhou(false);
    if (!resumo) return () => { ativo = false; };

    void carregarDisciplina(codigo)
      .then((d) => {
        if (!ativo) return;
        if (d) setDisciplina(d);
        else setFalhou(true);
      })
      .catch((erro: unknown) => {
        console.error(erro);
        if (ativo) setFalhou(true);
      });

    return () => { ativo = false; };
  }, [codigo, resumo?.codigo]);

  if (!resumo) {
    return (
      <p className="font-sans text-neutral-600">
        Disciplina não encontrada. <Link to="/" className="text-tinta-600 underline">Voltar ao início</Link>.
      </p>
    );
  }

  if (!disciplina) {
    return (
      <div>
        <Link to={`/disciplina/${codigo}`} className="font-sans text-[0.8rem] text-tinta-600 hover:underline">
          ← {resumo.codigo} · {resumo.titulo}
        </Link>
        <p className="mt-7 font-sans text-[0.9rem] text-neutral-500">
          {falhou ? 'Não foi possível carregar a avaliação.' : 'Carregando módulo avaliativo…'}
        </p>
      </div>
    );
  }

  const avaliacao = avaliacaoDaDisciplina(disciplina, avaliacaoId);
  if (!avaliacao) {
    return (
      <div>
        <p className="font-sans text-neutral-600">Módulo avaliativo não encontrado.</p>
        <Link to={`/disciplina/${codigo}`} className="mt-3 inline-block font-sans text-[0.82rem] text-tinta-600 underline">
          Voltar para a disciplina
        </Link>
      </div>
    );
  }

  const cobertura = coberturaDaDisciplina(disciplina);
  const unidades = disciplina.unidades.filter((u) => avaliacao.unidadesAlvo.includes(u.numero));

  return (
    <article>
      <Link to={`/disciplina/${codigo}`} className="mb-7 inline-block font-sans text-[0.8rem] text-tinta-600 hover:underline">
        ← {disciplina.codigo} · {disciplina.titulo}
      </Link>

      <header className="border-b border-margem pb-7">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ouro-700">
          Módulo avaliativo · {avaliacao.rotulo}
        </p>
        <h1 className="mt-2 font-serif text-[2rem] font-semibold leading-tight text-tinta-900">
          {disciplina.titulo}
        </h1>
        <p className="mt-4 max-w-[62ch] font-sans text-[0.9rem] leading-relaxed text-neutral-600">
          {textoStatus(avaliacao)}
        </p>
      </header>

      <section className="mt-8 border border-margem bg-papel-quente px-5 py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-serif text-[1.25rem] font-semibold text-tinta-800">Escopo curricular</h2>
          <span className="font-sans text-[0.7rem] uppercase tracking-wide text-neutral-400">
            0 questões publicadas
          </span>
        </div>
        {unidades.length > 0 ? (
          <ol className="mt-4 space-y-2">
            {unidades.map((u) => {
              const concluida = cobertura.unidadesConcluidas.includes(u.numero);
              return (
                <li key={u.numero} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-700">
                  <span className="shrink-0 font-sans text-[0.72rem] font-semibold text-tinta-500">{u.numero}</span>
                  <span className="flex-1">{u.titulo}</span>
                  <span className={`shrink-0 font-sans text-[0.65rem] uppercase tracking-wide ${concluida ? 'text-emerald-700' : 'text-neutral-400'}`}>
                    {concluida ? 'concluída' : 'pendente'}
                  </span>
                </li>
              );
            })}
          </ol>
        ) : (
          <p className="mt-3 font-sans text-[0.86rem] leading-relaxed text-neutral-600">
            Não há unidades oficiais atribuíveis a este bloco pela regra atual.
          </p>
        )}
      </section>

      <section className="mt-8 border-l-2 border-ouro-300 pl-4">
        <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-tinta-700">
          Regra de publicação
        </h2>
        <p className="mt-2 text-[0.96rem] leading-relaxed text-neutral-650">
          As questões de múltipla escolha só serão redigidas depois que todas as unidades deste bloco estiverem
          plenamente produzidas e verificadas. Até lá, este módulo permanece intencionalmente vazio.
        </p>
      </section>

      {avaliacao.unidadesForaDoEscopo.length > 0 && (
        <p className="mt-8 font-sans text-[0.78rem] leading-relaxed text-neutral-500">
          Esta disciplina também possui unidades posteriores à 15. Elas permanecem obrigatórias no plano curricular,
          embora não integrem AV1/AV2 pela regra 1–8 e 9–15.
        </p>
      )}
    </article>
  );
}
