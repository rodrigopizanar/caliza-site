"use client";

import { motion } from "framer-motion";

export function EditorialTextBlock() {
  return (
    <motion.div
      className="max-w-3xl mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2
        className="font-serif font-light leading-[1.05] tracking-[-0.015em] mb-4"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          color: "var(--texto-principal)",
        }}
      >
        Construimos con intención.
      </h2>
      <p
        className="font-light leading-[1.8]"
        style={{
          fontSize: "0.9375rem",
          color: "var(--texto-secundario)",
          letterSpacing: "0.02em",
        }}
      >
        Somos CĀLIZA, un estudio mexicano especializado en crear espacios y productos con visión y diseño. Fusionamos piedra natural, carpintería y elementos que perduran a lo largo del tiempo. Cada detalle es pensado, fabricado e instalado para brindar calidad, proporción y permanencia, creando espacios y productos con significado.
      </p>
    </motion.div>
  );
}
