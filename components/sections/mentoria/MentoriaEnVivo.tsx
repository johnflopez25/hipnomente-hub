"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe2, MessageCircle, Radio, Video } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const SESSIONS = [
  {
    day: "Lunes",
    kind: "Clase en vivo",
    icon: Video,
    accent: "violet",
    title: "Se desarrolla un tema completo",
    text: "Una clase online donde se profundiza en un tema concreto de hipnosis: una técnica, un tipo de caso, un aspecto del método. No es un repaso del contenido grabado, es material nuevo.",
    bullets: [
      "Explicación en profundidad, con ejemplos clínicos",
      "Espacio para preguntar durante la clase",
      "Temas que van rotando a lo largo del año",
    ],
  },
  {
    day: "Miércoles",
    kind: "Bitácora",
    icon: MessageCircle,
    accent: "teal",
    title: "Llevas tu caso y sales con una respuesta",
    text: "La bitácora es la sesión de preguntas y respuestas en vivo. Llegas con lo que te pasó esta semana en consulta, lo planteas y lo resuelves con el Dr. Juan Roberto y con los demás mentorados.",
    bullets: [
      "Preguntas directas al Dr. Juan Roberto",
      "Casos reales de colegas de más de 12 países",
      "Es el espacio donde de verdad se pierde el miedo",
    ],
  },
];

const ACCENTS = {
  violet: {
    chip: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    icon: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    dot: "bg-violet-400",
    bar: "from-violet-500 to-violet-800",
  },
  teal: {
    chip: "bg-[#22C4B0]/10 border-[#22C4B0]/25 text-[#8fe6da]",
    icon: "bg-[#22C4B0]/10 border-[#22C4B0]/25 text-[#22C4B0]",
    dot: "bg-[#22C4B0]",
    bar: "from-[#22C4B0] to-[#0d5c56]",
  },
} as const;

export default function MentoriaEnVivo() {
  return (
    <SectionWrapper id="en-vivo" className="relative px-4 bg-[#0a0a14]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,196,176,0.09)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2"
          >
            <Radio className="w-4 h-4" />
            Lo que no encuentras en un curso grabado
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Dos encuentros en vivo{" "}
            <span className="gradient-trance-text">todas las semanas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/75 text-base md:text-lg leading-relaxed"
          >
            Esta es la parte que hace que la mentoría funcione. Un video no te
            corrige. Un grupo de profesionales en vivo, sí.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {SESSIONS.map((s, i) => {
            const a = ACCENTS[s.accent as keyof typeof ACCENTS];
            return (
              <motion.div
                key={s.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="card-glass glow-border rounded-2xl overflow-hidden flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${a.bar}`} />
                <div className="p-7 sm:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center ${a.icon}`}
                    >
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-extrabold text-lg leading-none">
                        {s.day}
                      </p>
                      <span
                        className={`inline-flex items-center gap-1.5 mt-2 text-[11px] font-bold uppercase tracking-widest border rounded-full px-2.5 py-1 ${a.chip}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${a.dot} animate-pulse`}
                        />
                        {s.kind}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-slate-300/70 text-sm md:text-base leading-relaxed mb-6">
                    {s.text}
                  </p>

                  <ul className="space-y-2.5 mt-auto">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-slate-300/80 text-sm"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${a.dot} shrink-0 mt-2`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-glass glow-border rounded-2xl p-7 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Globe2 className="w-6 h-6 text-[#22C4B0] shrink-0" />
            <p className="text-slate-300/80 text-sm leading-relaxed">
              Profesionales conectados desde{" "}
              <strong className="text-white">más de 12 países</strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <BookOpen className="w-6 h-6 text-violet-300 shrink-0" />
            <p className="text-slate-300/80 text-sm leading-relaxed">
              La plataforma ya suma{" "}
              <strong className="text-white">+250 horas</strong> de grabación
              para repasar a tu ritmo
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0" />
            <p className="text-slate-300/80 text-sm leading-relaxed">
              Y entre semana,{" "}
              <strong className="text-white">la comunidad</strong> responde a
              cualquier hora
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="gold"
            size="lg"
            href="#precios"
            className="font-bold uppercase tracking-wide"
          >
            Quiero estar en las clases en vivo
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
