import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      className="px-8 md:px-16 py-10"
      style={{ borderTop: "1px solid var(--linea)" }}
    >
      {/* Fila principal */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <span
          className="font-serif font-light"
          style={{
            color: "var(--texto-principal)",
            fontSize: "0.9375rem",
            letterSpacing: "0.15em",
          }}
        >
          CĀLIZA
        </span>
        <a
          href="https://instagram.com/calizastudio.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-light transition-opacity hover:opacity-60"
          style={{
            fontSize: "0.8125rem",
            color: "var(--texto-tenue)",
            letterSpacing: "0.04em",
          }}
          aria-label="Cāliza en Instagram"
        >
          @calizastudio.mx
        </a>
        <span className="font-light" style={{ fontSize: "0.75rem", color: "var(--texto-tenue)" }}>
          Built with{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--texto-tenue)" }}
          >
            Claude Web Builder by Tododeia
          </a>
        </span>
      </div>

      {/* Fila legal */}
      <div
        className="flex items-center gap-6 mt-6"
        style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--linea)" }}
      >
        <Link
          href="/terminos"
          className="font-light transition-opacity hover:opacity-60"
          style={{
            fontFamily: "var(--font-geist), sans-serif",
            fontSize: "0.75rem",
            color: "var(--texto-tenue)",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
        >
          Términos y condiciones
        </Link>
        <span style={{ color: "var(--linea)", fontSize: "0.75rem" }}>·</span>
        <Link
          href="/privacidad"
          className="font-light transition-opacity hover:opacity-60"
          style={{
            fontFamily: "var(--font-geist), sans-serif",
            fontSize: "0.75rem",
            color: "var(--texto-tenue)",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
        >
          Política de privacidad
        </Link>
      </div>
    </footer>
  );
}
