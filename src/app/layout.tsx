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
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${geist.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
