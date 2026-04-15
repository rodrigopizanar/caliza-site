import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Telchac Puerto — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function TelchacPuertoPage() {
  return (
    <ProyectoLayout
      titulo="Telchac Puerto"
      heroImage="/images/telchac-03.png"
      heroAlt="Telchac Puerto"
      descripcion={`Ubicado en Telchac Puerto, donde la vida se desarrolla entre el interior y la terraza frente al mar, la propuesta parte de una lectura clara del clima y del uso cotidiano, priorizando espacios abiertos, sombra constante y una relación directa con el exterior.

El proyecto se resuelve a través de una materialidad continua y contenida, donde la piedra define las superficies principales —pisos, cubiertas y mobiliario fijo— aportando frescura, resistencia y una sensación de permanencia frente al desgaste natural del entorno. Las piezas se mantienen bajas y horizontales, permitiendo que la vista y la ventilación fluyan sin interrupciones, mientras que la carpintería y los textiles filtran la luz y suavizan la transición entre interior y exterior. El resultado es un espacio que no compite con el entorno, sino que lo acompaña, construido para habitarse con naturalidad y sin esfuerzo.`}
      imagenes={[
        { src: "/images/telchac-04.png", alt: "Telchac Puerto — espacio" },
        { src: "/images/telchac-03.png", alt: "Telchac Puerto — detalle" },
      ]}
    />
  )
}
