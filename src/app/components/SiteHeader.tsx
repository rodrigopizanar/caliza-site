import Link from "next/link";

const NAV = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Productos", href: "/productos" },
  { label: "Proceso", href: "/proceso" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteHeader({ mode = "page" }: { mode?: "hero" | "page" }) {
  const color = mode === "hero" ? "#fff" : "var(--texto-principal)";

  return (
    <header
      className={[
        "flex items-center justify-between px-8 md:px-16 py-7 z-50",
        mode === "hero"
          ? "absolute top-0 left-0 right-0"
          : "sticky top-0 left-0 right-0",
      ].join(" ")}
      style={
        mode === "page"
          ? { background: "var(--fondo)", borderBottom: "1px solid var(--linea)" }
          : {}
      }
    >
      {/* Left: brand (page mode) + social icons */}
      <div className="flex items-center gap-5">
        {mode === "page" && (
          <Link
            href="/"
            className="font-serif font-light mr-1"
            style={{ fontSize: "0.9375rem", letterSpacing: "0.15em", color }}
          >
            CĀLIZA
          </Link>
        )}

        <a
          href="https://instagram.com/calizastudio.mx"
          target="_blank"
          rel="noreferrer"
          className="flex items-center transition-transform duration-300 ease-out hover:-translate-y-0.5"
          style={{ color }}
          aria-label="Instagram de CALIZA"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" />
          </svg>
        </a>

        <a
          href="mailto:info@calizastudio.com.mx"
          className="flex items-center transition-transform duration-300 ease-out hover:-translate-y-0.5"
          style={{ color }}
          aria-label="Enviar correo a CALIZA"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16v12H4z" />
            <path d="M4 7l8 6 8-6" />
          </svg>
        </a>
      </div>

      {/* Right: desktop nav */}
      <nav className="hidden md:flex items-center gap-7 ml-12" aria-label="Navegación principal">
        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-link font-light"
            style={{
              fontSize: "0.875rem",
              color,
              letterSpacing: "0.04em",
              fontFamily: "var(--font-geist), sans-serif",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile: single link */}
      <Link
        href="/contacto"
        className="md:hidden font-light"
        style={{
          fontSize: "0.875rem",
          color,
          letterSpacing: "0.04em",
          fontFamily: "var(--font-geist), sans-serif",
        }}
      >
        Contacto
      </Link>
    </header>
  );
}
