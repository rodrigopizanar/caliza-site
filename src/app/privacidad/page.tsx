import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de privacidad — Cāliza Studio",
  description: "Política de privacidad de CĀLIZA Studio.",
};

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section className="px-8 md:px-16 pt-20 pb-40" style={{ maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--texto-tenue)",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            Legal
          </p>

          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--texto-principal)",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              marginBottom: "3rem",
            }}
          >
            Política de privacidad
          </h1>

          <div
            className="font-light leading-[1.85]"
            style={{
              fontSize: "0.9375rem",
              color: "var(--texto-secundario)",
              letterSpacing: "0.02em",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p>
              CĀLIZA Studio respeta la privacidad de quienes visitan este sitio. No recopilamos datos personales sin consentimiento explícito del usuario.
            </p>
            <p>
              Los datos que puedas proporcionar a través del formulario de contacto o newsletter son utilizados exclusivamente para responder a tu solicitud o mantenerte informado sobre novedades de CĀLIZA. No compartimos esta información con terceros.
            </p>
            <p>
              Este sitio puede utilizar cookies de análisis para mejorar la experiencia de navegación. Puedes desactivarlas desde la configuración de tu navegador en cualquier momento.
            </p>
            <p>
              Para ejercer tu derecho de acceso, rectificación o eliminación de datos, escríbenos a{" "}
              <a
                href="mailto:info@calizastudio.com.mx"
                style={{ color: "var(--texto-principal)", textDecoration: "none" }}
              >
                info@calizastudio.com.mx
              </a>
              .
            </p>
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--linea)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-geist), sans-serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--texto-tenue)",
                textDecoration: "none",
                fontWeight: 300,
              }}
            >
              ← Inicio
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
