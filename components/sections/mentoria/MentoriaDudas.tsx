"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DepthRings from "@/components/sections/desafio/DepthRings";

// Primer paso del recorrido: la persona llega con dudas. Aquí no se vende nada,
// solo se le nombran en voz alta las objeciones que trae, para que sienta que la
// página entiende su situación antes de proponerle nada.
const DOUBTS = [
  "Hice cursos de hipnosis, pero cuando tengo al paciente enfrente no sé por dónde empezar.",
  "Me da miedo hacer una inducción y que no funcione.",
  "Entiendo la teoría, pero no tengo con quién practicar de verdad.",
  "No sé qué hacer cuando la persona no entra en trance.",
  "No estoy seguro de si puedo usar hipnosis con este caso en particular.",
  "Cuando me surge una duda real, no tengo a quién preguntarle.",
];

export default function MentoriaDudas() {
  return (
    <SectionWrapper id="dudas" className="relative px-4 bg-[#0a0a14] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(91,63,224,0.10)_0%,transparent_60%)] pointer-events-none"
      />
      <DepthRings
        size={520}
        opacity={0.05}
        className="absolute -left-40 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-violet-300 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            El punto de partida
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Si llegaste hasta aquí, seguro alguna de estas frases es tuya
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-base md:text-lg leading-relaxed"
          >
            Las escuchamos todas las semanas. Y casi siempre vienen de la misma
            persona: alguien que ya estudió, que ya invirtió tiempo y dinero, y
            que aun así sigue sin sentirse listo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
          {DOUBTS.map((text, i) => (
            <motion.blockquote
              key={text}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="border-l-2 border-violet-500/40 pl-5 py-3"
            >
              <p className="text-slate-200/90 text-base md:text-lg italic leading-relaxed">
                {text}
              </p>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 border-t border-white/10 pt-10 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Ninguna de esas dudas se resuelve comprando otro curso grabado.
          </p>
          <p className="text-slate-300/70 text-base md:text-lg leading-relaxed mt-4">
            Se resuelven practicando, equivocándose y teniendo a alguien con
            experiencia real que te diga qué estás haciendo mal esa misma semana.
            Eso es, literalmente, para lo que existe la Mentoría Hipnomente.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
