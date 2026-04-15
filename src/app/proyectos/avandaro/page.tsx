import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Avándaro — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function AvandaroPage() {
  return (
    <ProyectoLayout
      titulo="Avándaro"
      heroImage="/images/avandaro-01.png"
      heroAlt="Avándaro"
      descripcion={`Ubicado en Avándaro, un enclave donde el paisaje boscoso define la forma de habitar, la propuesta parte de una lectura sensible del entorno para construir una experiencia de refugio, apertura y permanencia. La escala horizontal, la profundidad de los aleros y la continuidad de los planos permiten que la casa se extienda hacia el exterior con naturalidad, incorporando la vegetación, la piedra y el agua como parte esencial del proyecto.

El proyecto se resuelve a partir de una relación contenida entre masa y transparencia, donde la piedra ancla, la madera envuelve y la luz cálida acentúa la profundidad de cada espacio. Las piezas monolíticas, los planos continuos y la integración entre interior y terraza construyen una atmósfera serena y contundente, donde la materia no funciona como acabado, sino como presencia arquitectónica.`}
      imagenes={[
        { src: "/images/avandaro-02.png", alt: "Avándaro — espacio" },
        { src: "/images/avandaro-01.png", alt: "Avándaro — detalle" },
      ]}
    />
  )
}
