"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

// Filtro honesto justo antes del precio: decir en voz alta para quién NO es
// baja las devoluciones y sube la confianza de quien sí encaja.
const FOR_YOU = [
  "Eres psicólogo, terapeuta o profesional de la salud y quieres incorporar la hipnosis a tus sesiones.",
  "Ya hiciste cursos sueltos y sientes que te falta práctica y alguien que te corrija.",
  "Empiezas desde cero y quieres una ruta ordenada en vez de videos sueltos de internet.",
  "Quieres especializarte en un área concreta: ansiedad, peso, dolor, tabaquismo, sexualidad, deporte o hipnoparto.",
  "Te importa tener colegas a quienes consultar cuando aparezca un caso difícil.",
  "Puedes sostener unas horas de estudio a la semana durante el año.",
];

const NOT_FOR_YOU = [
  "Buscas trucos de escenario o alguna forma de controlar a otras personas.",
  "Esperas resultados sin practicar con personas reales.",
  "Quieres un certificado rápido sin recorrer el proceso.",
  "No vas a poder conectarte en vivo ni participar en la comunidad en todo el año.",
];

export default function MentoriaParaQuien() {
  return (
    <SectionWrapper id="para-quien" className="relative px-4 bg-[#0a0a14]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(91,63,224,0.09)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-violet-300 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Antes de decidir
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Esta mentoría no es para todo el mundo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-base md:text-lg leading-relaxed"
          >
            Preferimos decirlo antes de que veas el precio, y no después.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-glass glow-border border-[#22C4B0]/25 rounded-2xl p-7 sm:p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#22C4B0] shrink-0" />
              Es para ti si
            </h3>
            <ul className="space-y-4">
              {FOR_YOU.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-300/80 text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C4B0] shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-glass glow-border rounded-2xl p-7 sm:p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-slate-500 shrink-0" />
              No es para ti si
            </h3>
            <ul className="space-y-4">
              {NOT_FOR_YOU.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-400/70 text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
