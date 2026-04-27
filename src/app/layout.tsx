import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cāliza Studio — Architectural Design & Custom Furniture",
  description:
    "Material-driven design studio specializing in architectural spaces and custom furniture for high-end residential clients, architects, and developers.",
  openGraph: {
    title: "Cāliza Studio",
    description: "Architectural spaces. Custom furniture. Material direction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable} ${geist.variable}`}
    >
      <body className="min-h-full">
        {children}

        {/* ─── WhatsApp flotante (global) ─────────────────────────── */}
        <a
          href="https://wa.me/529991207154?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20proyecto/producto%20de%20dise%C3%B1o%20C%C4%80LIZA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-sm transition-transform duration-200 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path
              fill="white"
              d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.38 0 .02 5.36.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6A11.96 11.96 0 0 0 12.02 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.22-3.5-8.52ZM12.02 21.8c-1.84 0-3.65-.5-5.23-1.46l-.37-.22-3.65.95.98-3.56-.24-.37a9.77 9.77 0 0 1-1.5-5.14c0-5.41 4.4-9.8 9.8-9.8 2.62 0 5.09 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.41-4.4 9.8-9.8 9.8Zm5.37-7.35c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.14-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
