import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Zaguán 1105 — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function Zaguan1105Page() {
  return (
    <ProyectoLayout
      titulo="Zaguán 1105"
      heroImage="/images/zaguan-1105-01.jpg"
      heroAlt="Zaguán 1105"
      descripcion={`Ubicado dentro de Zaguán, uno de los desarrollos verticales más relevantes del norte de Mérida, el proyecto se inserta en una propuesta que redefine la vida residencial contemporánea, integrando vivienda, comunidad y espacios compartidos en un mismo sistema arquitectónico.

El interior responde a esta lógica a través de una intervención precisa, donde la carpintería continua organiza el espacio y elimina la fragmentación. La piedra se integra como plano de fondo y superficie de contacto, aportando profundidad sin romper la continuidad, mientras que la iluminación integrada define la atmósfera desde el perímetro. El resultado es un espacio contenido, donde cada elemento se alinea bajo una misma lectura material y constructiva.`}
      imagenes={[
        { src: "/images/zaguan-1105-01.jpg", alt: "Zaguán 1105 — detalle" },
      ]}
    />
  )
}
