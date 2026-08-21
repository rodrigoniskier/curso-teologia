import { lazy, Suspense, useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Marca } from './componentes/Marca';
import { Sumario } from './componentes/Sumario';

const PaginaInicio = lazy(() =>
  import('./paginas/Inicio').then((m) => ({ default: m.PaginaInicio })),
);
const PaginaDisciplina = lazy(() =>
  import('./paginas/Disciplina').then((m) => ({ default: m.PaginaDisciplina })),
);
const PaginaBiblioteca = lazy(() =>
  import('./paginas/Biblioteca').then((m) => ({ default: m.PaginaBiblioteca })),
);

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuAberto(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-papel">
      <header className="nao-imprimir sticky top-0 z-30 border-b border-margem bg-papel/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-3.5">
          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label="Alternar sumário"
            aria-expanded={menuAberto}
            className="rounded-sm border border-margem px-2.5 py-1.5 font-sans text-sm text-tinta-700 lg:hidden"
          >
            ☰
          </button>

          <Link to="/" className="flex items-center gap-3">
            <Marca tamanho={34} />
            <span className="leading-tight">
              <span className="block font-serif text-[1.18rem] font-semibold tracking-tight text-tinta-900">
                Sola Scriptura
              </span>
              <span className="block font-sans text-[0.63rem] uppercase tracking-[0.15em] text-neutral-500">
                Portal de Teologia Reformada
              </span>
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-5">
            <Link
              to="/biblioteca"
              className="font-sans text-[0.78rem] font-medium text-tinta-700 hover:text-tinta-600 hover:underline"
            >
              Biblioteca
            </Link>
            <span className="hidden font-sans text-[0.72rem] text-neutral-500 lg:block">
              Currículo dos Seminários da IPB
            </span>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px]">
        <aside
          className={`nao-imprimir fixed inset-y-0 left-0 z-40 w-[19rem] border-r border-margem bg-papel
                      pt-16 lg:sticky lg:top-[3.7rem] lg:z-0 lg:h-[calc(100vh-3.7rem)] lg:translate-x-0 lg:pt-0
                      ${menuAberto ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:transition-none`}
        >
          <Sumario aoNavegar={() => setMenuAberto(false)} />
        </aside>

        {menuAberto && (
          <button
            type="button"
            aria-label="Fechar sumário"
            onClick={() => setMenuAberto(false)}
            className="fixed inset-0 z-30 bg-tinta-900/20 lg:hidden"
          />
        )}

        <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-[68ch]">
            <Suspense
              fallback={<p className="font-sans text-[0.9rem] text-neutral-500">Carregando página…</p>}
            >
              <Routes>
                <Route path="/" element={<PaginaInicio />} />
                <Route path="/biblioteca" element={<PaginaBiblioteca />} />
                <Route path="/disciplina/:codigo" element={<PaginaDisciplina />} />
                <Route path="/disciplina/:codigo/:verbeteId" element={<PaginaDisciplina />} />
                <Route
                  path="*"
                  element={
                    <p className="font-sans text-neutral-600">
                      Página não encontrada.{' '}
                      <Link to="/" className="text-tinta-600 underline">
                        Voltar ao início
                      </Link>
                      .
                    </p>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </main>
      </div>

      <footer className="nao-imprimir mt-20 border-t border-margem bg-papel-quente">
        <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
          <p className="font-sans text-[0.8rem] leading-relaxed text-neutral-600">
            Currículo conforme o <em>Conteúdo Programático Curricular dos Seminários Teológicos da
            Igreja Presbiteriana do Brasil</em> (Junta de Educação Teológica, 2ª ed., 2018), aprovado
            pelo Supremo Concílio Extraordinário de 2014.
          </p>
          <p className="mt-2 font-sans text-[0.75rem] text-neutral-500">
            Os textos dos verbetes são de elaboração própria. As fontes externas pertencem aos seus
            detentores de direitos e são citadas com link para o original.
          </p>
        </div>
      </footer>
    </div>
  );
}
