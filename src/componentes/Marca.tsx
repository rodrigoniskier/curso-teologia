export function Marca({ tamanho = 40 }: { tamanho?: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* livro aberto — duas páginas */}
      <path
        d="M24 12c-4-3-9-4-14-3v26c5-1 10 0 14 3 4-3 9-4 14-3V9c-5-1-10 0-14 3z"
        fill="none"
        stroke="var(--color-tinta-600)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <line
        x1="24"
        y1="12"
        x2="24"
        y2="38"
        stroke="var(--color-tinta-600)"
        strokeWidth="2.2"
      />
      {/* a luz sobre a página */}
      <circle cx="24" cy="7" r="3.4" fill="var(--color-ouro-300)" />
    </svg>
  );
}
