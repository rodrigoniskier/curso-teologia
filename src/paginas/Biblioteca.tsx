import { Link } from 'react-router-dom';
import { biblioteca } from '../dados/biblioteca';
import { porCodigo } from '../conteudo/indice';

const NOME_IDIOMA: Record<string, string> = {
  pt: 'português', en: 'inglês', de: 'alemão', nl: 'holandês',
  es: 'espanhol', la: 'latim', fr: 'francês', grc: 'grego', he: 'hebraico',
};

const ROTULO_ACESSO: Record<string, string> = {
  livre: 'acesso livre',
  cadastro: 'exige conta gratuita',
  parcial: 'acesso misto',
};

export function PaginaBiblioteca() {
  const porIdioma = [...new Set(biblioteca.map((o) => o.idioma))];

  return (
    <div>
      <header className="border-b border-margem pb-8">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-tinta-600">
          Biblioteca
        </p>
        <h1 className="mt-3 max-w-[22ch] font-serif text-[2.4rem] font-semibold leading-[1.12] text-tinta-900">
          Estudar teologia sem comprar biblioteca
        </h1>
        <p className="prosa mt-5 max-w-[64ch] text-[1.08rem] text-neutral-700">
          A formação teológica costuma esbarrar no preço dos livros. Boa parte
          das obras que realmente importam, porém, já está em domínio público —
          e as melhores delas são justamente as fontes primárias que os manuais
          caros resumem.
        </p>
        <p className="prosa mt-4 max-w-[64ch] text-[1.02rem] text-neutral-600">
          Esta página reúne o que dá para ler legalmente sem pagar nada. O
          critério de entrada é estreito de propósito: domínio público, edição
          digital autorizada, ou empréstimo de biblioteca. Cópia não autorizada
          de obra em catálogo não entra — é injusto com quem publica em
          português, e esses links morrem.
        </p>
        <p className="prosa mt-4 max-w-[64ch] text-[1.02rem] text-neutral-600">
          Onde a obra de referência ainda está no catálogo, a resposta do portal
          não é indicar uma cópia pirata: é <strong>ensinar a doutrina no próprio
          verbete</strong>, com o aparato primário aberto listado aqui ao lado.
        </p>
      </header>

      <section className="mt-9 border-l-[3px] border-ouro-300 bg-papel-quente py-4 pl-5 pr-4">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.13em] text-ouro-700">
          Por onde começar
        </p>
        <p className="mt-2 text-[1rem] leading-relaxed text-neutral-700">
          Se você puder ler uma só obra primária, leia as <em>Institutas</em> de
          Calvino: sozinhas, percorrem quase todo o programa dos quatro anos de
          Teologia Sistemática. Depois delas, a <em>Systematic Theology</em> de
          Charles Hodge cobre TS01 e TS02 integralmente, e a{' '}
          <em>Gereformeerde Dogmatiek</em> de Bavinck — cuja tradução inglesa
          custa algumas centenas de reais — está livre em holandês.
        </p>
        <p className="mt-3 text-[1rem] leading-relaxed text-neutral-700">
          Se preferir começar por algo curto, comece pelo avesso: as{' '}
          <em>Outlines of Theology</em> de A. A. Hodge percorrem a mesma matéria
          em pergunta e resposta e servem de consulta rápida; a aula inaugural de
          Vos sobre teologia bíblica cabe numa tarde; e{' '}
          <em>Christianity and Liberalism</em>, de Machen, explica em poucas
          páginas a divisão que organiza o protestantismo até hoje.
        </p>
      </section>

      {porIdioma.map((idioma) => {
        const obras = biblioteca.filter((o) => o.idioma === idioma);
        return (
          <section key={idioma} className="mt-12">
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-tinta-700">
              Em {NOME_IDIOMA[idioma]} · {obras.length}
            </h2>
            <ul className="mt-5 space-y-6">
              {obras.map((o) => (
                <li key={o.id} className="border-l-2 border-margem pl-5">
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-[1.15rem] font-semibold text-tinta-600 underline
                               decoration-tinta-200 underline-offset-2 hover:decoration-tinta-600"
                  >
                    {o.titulo}
                  </a>
                  <p className="mt-0.5 font-sans text-[0.82rem] text-neutral-600">
                    {o.autor} ({o.ano}) · {o.publicacao}
                  </p>
                  <p className="mt-2 text-[1rem] leading-relaxed text-neutral-700">{o.nota}</p>
                  <p className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    <span className="bg-tinta-50 px-1.5 py-0.5 font-sans text-[0.65rem] uppercase tracking-wide text-tinta-700">
                      {ROTULO_ACESSO[o.acesso]}
                    </span>
                    <span className="bg-ouro-100 px-1.5 py-0.5 font-sans text-[0.65rem] uppercase tracking-wide text-ouro-700">
                      {o.base}
                    </span>
                  </p>
                  <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                    {o.disciplinas.map((c) => {
                      const d = porCodigo.get(c);
                      return d ? (
                        <Link
                          key={c}
                          to={`/disciplina/${c}`}
                          title={d.titulo}
                          className="font-sans text-[0.68rem] text-neutral-500 hover:text-tinta-600 hover:underline"
                        >
                          {c}
                        </Link>
                      ) : null;
                    })}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <p className="mt-14 border-t border-margem pt-6 font-sans text-[0.8rem] leading-relaxed text-neutral-500">
        Todos estes endereços passam pela mesma auditoria automática das fontes
        dos verbetes, e a verificação semanal acusa se algum sair do ar. Um único
        hospedeiro fica fora do alcance dela por motivo alheio ao conteúdo: a
        CCEL recusa conexões vindas de servidores em nuvem, embora responda
        normalmente a navegadores comuns. O motivo fica registrado no
        repositório.
      </p>
    </div>
  );
}
