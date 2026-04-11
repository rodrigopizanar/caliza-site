import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { HeroSlider } from "./components/HeroSlider";
import { EditorialLogoBlock } from "./components/EditorialLogoBlock";
import { EditorialTextBlock } from "./components/EditorialTextBlock";

export default function Home() {
  return (
    <>
      <main>
        {/* ─── Hero ───────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col items-center justify-center min-h-[95vh]"
          style={{ paddingBottom: "8vh" }}
          aria-label="Marca"
        >
          {/* Header embebido en hero — texto blanco sobre imagen */}
          <SiteHeader mode="hero" />

          {/* Slider de renders */}
          <HeroSlider />
          {/* Overlay negro sutil */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.30)", zIndex: 1 }}
            aria-hidden="true"
          />
          {/* Marca centrada */}
          <div
            className="relative flex flex-col items-center -translate-y-[34vh]"
            style={{ zIndex: 2 }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: 1,
                color: "#fff",
              }}
            >
              CĀLIZA
            </p>
          </div>
        </section>

        {/* ─── Introducción ───────────────────────────────────────── */}
        <section className="pt-32 pb-28" aria-label="Introducción">
          <div className="max-w-6xl px-8 md:px-16">

            {/* Grid único: texto+imágenes izquierda / logo+texto derecha */}
            <div className="grid grid-cols-1 md:grid-cols-[760px_320px] gap-10 items-start">

              {/* Columna izquierda: título + párrafo + imágenes */}
              <div className="w-full max-w-[760px]">
                <EditorialTextBlock />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="w-full">
                    <img
                      src="/images/render1.jpg"
                      alt="Espacio CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/Baño.jpg"
                      alt="Baño CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha: logo arranca al mismo nivel que el título */}
              <EditorialLogoBlock />

            </div>
          </div>
        </section>

        {/* ─── CTA dual ───────────────────────────────────────────── */}
        <div className="relative w-full px-8 md:px-16 pt-12 pb-28 overflow-hidden">

          {/* Fondo: patrón verde animado, solo dentro de esta franja */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          >
            <div
              style={{
                position: "absolute",
                inset: "-15%",
                backgroundImage: "url('/images/patrónverde-01.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.22,
                animation: "ctaBgDrift 28s linear infinite",
              }}
            />
          </div>

          {/* Keyframe declarado inline — no requiere client component */}
          <style>{`
            @keyframes ctaBgDrift {
              0%   { transform: translateY(8%);  }
              100% { transform: translateY(-8%); }
            }
          `}</style>

          <div
            className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-center"
            style={{ zIndex: 1 }}
          >

            <div className="flex flex-col items-center">
              {/* Símbolo lineal — Mobiliario: base + dos apoyos */}
              <svg
                width="32" height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-5"
                aria-hidden="true"
              >
                <line x1="4"  y1="14" x2="28" y2="14" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="4"  y1="14" x2="4"  y2="20" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="28" y1="14" x2="28" y2="20" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="10" y1="8"  x2="22" y2="8"  stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="10" y1="8"  x2="10" y2="14" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="22" y1="8"  x2="22" y2="14" stroke="var(--texto-tenue)" strokeWidth="1"/>
              </svg>
              <h3
                className="font-light mb-6"
                style={{
                  fontSize: "0.9375rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--texto-tenue)",
                  fontFamily: "var(--font-geist), sans-serif",
                }}
              >
                Mobiliario
              </h3>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full font-light transition-colors duration-300 hover:bg-[#D4CABC] active:bg-[#BFB5A8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E7366] focus-visible:ring-offset-1"
                style={{
                  border: "1px solid var(--texto-principal)",
                  padding: "0.75rem 2rem",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--texto-principal)",
                  fontFamily: "var(--font-geist), sans-serif",
                }}
              >
                Diseña con nosotros
              </Link>
            </div>

            <div className="flex flex-col items-center">
              {/* Símbolo lineal — Espacios: marco exterior + línea divisoria */}
              <svg
                width="32" height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-5"
                aria-hidden="true"
              >
                <rect x="4" y="4" width="24" height="16" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="16" y1="4"  x2="16" y2="20" stroke="var(--texto-tenue)" strokeWidth="1"/>
                <line x1="4"  y1="13" x2="16" y2="13" stroke="var(--texto-tenue)" strokeWidth="1"/>
              </svg>
              <h3
                className="font-light mb-6"
                style={{
                  fontSize: "0.9375rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--texto-tenue)",
                  fontFamily: "var(--font-geist), sans-serif",
                }}
              >
                Espacios
              </h3>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full font-light transition-colors duration-300 hover:bg-[#D4CABC] active:bg-[#BFB5A8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6E7366] focus-visible:ring-offset-1"
                style={{
                  border: "1px solid var(--texto-principal)",
                  padding: "0.75rem 2rem",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--texto-principal)",
                  fontFamily: "var(--font-geist), sans-serif",
                }}
              >
                Compártenos tu idea
              </Link>
            </div>

          </div>
        </div>

        {/* ─── Cierre editorial / Newsletter ─────────────────────── */}
        <section className="w-full pb-20" aria-label="Novedades">

          {/* Bloque superior: imagen + formulario */}
          <div
            className="relative overflow-hidden"
            style={{
              border: "1px solid var(--acento)",
              borderRadius: "6px",
            }}
          >
            {/* Imagen de fondo */}
            <img
              src="/images/fondo.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay muy sutil */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(43,31,24,0.52)" }}
              aria-hidden="true"
            />

            {/* Contenido */}
            <div
              className="relative px-10 md:px-16 py-20 md:py-28"
              style={{ zIndex: 2 }}
            >
              <p
                className="mb-3 font-light"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-jost), sans-serif",
                }}
              >
                Novedades
              </p>
              <h2
                className="font-serif font-light leading-[1.1] mb-2"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  color: "#fff",
                  maxWidth: "600px",
                }}
              >
                SUSCRÍBETE A NUESTRA NEWSLETTER
              </h2>
              <p
                className="font-serif font-light mb-3"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.375rem)",
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "520px",
                  lineHeight: 1.5,
                }}
              >
                para recibir novedades y lanzamientos de CĀLIZA.
              </p>

              {/* Formulario */}
              <form
                className="mt-10 flex flex-col sm:flex-row gap-3"
                style={{ maxWidth: "480px" }}
                action="#"
              >
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="flex-1 bg-transparent font-light outline-none"
                  style={{
                    borderBottom: "1.5px solid var(--acento)",
                    padding: "0.875rem 0",
                    fontSize: "1rem",
                    color: "#fff",
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-jost), sans-serif",
                  }}
                />
                <button
                  type="submit"
                  className="font-light transition-opacity hover:opacity-70 whitespace-nowrap"
                  style={{
                    border: "1.5px solid var(--acento)",
                    borderRadius: "3px",
                    padding: "0.875rem 1.75rem",
                    fontSize: "0.9375rem",
                    color: "#fff",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-jost), sans-serif",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Bloque inferior: cierre sobrio */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 px-10 md:px-16 py-16 md:py-20 mt-px"
            style={{
              background: "var(--texto-principal)",
              borderRadius: "0 0 6px 6px",
            }}
          >
            {/* Col 1: marca */}
            <div>
              <p
                className="font-serif font-light mb-4"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "0.15em",
                  color: "#fff",
                }}
              >
                CĀLIZA
              </p>
              <p
                className="font-light leading-[1.7]"
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.02em",
                  maxWidth: "240px",
                }}
              >
                Diseño arquitectónico y fabricación con intención.
              </p>
            </div>

            {/* Col 2: contacto */}
            <div>
              <p
                className="font-light mb-4"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Contacto
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:info@calizastudio.com.mx"
                  className="font-light transition-opacity hover:opacity-60"
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                  }}
                >
                  info@calizastudio.com.mx
                </a>
                <a
                  href="tel:+525576681763"
                  className="font-light transition-opacity hover:opacity-60"
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                  }}
                >
                  +52 5576681763
                </a>
              </div>
            </div>

            {/* Col 3: navegación */}
            <div>
              <p
                className="font-light mb-4"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Menú
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Inicio", href: "/" },
                  { label: "Proyectos", href: "/proyectos" },
                  { label: "Diseños", href: "/estudio" },
                  { label: "Proceso", href: "/proceso" },
                  { label: "Contacto", href: "/contacto" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-light transition-opacity hover:opacity-60"
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </section>
      </main>

      <SiteFooter />
    </>
  );
}
