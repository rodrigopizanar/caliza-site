import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Mesa Sabana — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function MesaSabanaPage() {
  return (
    <ProyectoLayout
      titulo="Mesa Sabana"
      heroImage="/images/hero-06.png"
      heroAlt="Mesa Sabana"
      descripcion="Un objeto de diseño fabricado con intención y rigor material. Cada decisión responde a la forma, la proporción y la permanencia del trabajo."
      imagenes={[
        { src: "/images/zaguan-1105-01.jpg", alt: "Mesa Sabana — detalle de fabricación" },
        { src: "/images/hero.jpg", alt: "Mesa Sabana — en contexto" },
      ]}
    />
  )
}
