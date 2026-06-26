"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    q: "¿Necesito experiencia previa en hipnosis?",
    a: "Para nada. El taller está diseñado específicamente para personas sin ningún conocimiento previo. Comenzaremos desde lo más básico y progresaremos gradualmente. Si tienes experiencia, también encontrarás técnicas avanzadas para profundizar.",
  },
  {
    q: "¿La hipnosis es segura?",
    a: "Sí, completamente. La hipnosis es un estado natural de enfoque y relajación que experimentamos a diario (por ejemplo, cuando estás absorto en una película o ensoñación). Practicada responsablemente, no tiene efectos secundarios negativos. En el taller aprenderás a manejarla de forma ética y segura.",
  },
  {
    q: "¿Realmente voy a poder hipnotizar en un solo día?",
    a: "Sí. Ese es el propósito central del taller. El enfoque 100% práctico garantiza que practiques desde la primera hora. Al final del día habrás realizado múltiples inducciones hipnóticas reales con otros participantes.",
  },
  {
    q: "¿Se puede usar la hipnosis para manipular a las personas?",
    a: "No. Una persona hipnotizada nunca hará algo que vaya en contra de sus valores o que no quisiera hacer en estado de vigilia. La hipnosis es una herramienta de comunicación y bienestar, no de control. En el taller enfatizamos el uso ético en todo momento.",
  },
  {
    q: "¿Qué debo llevar al taller?",
    a: "Solo actitud y ganas de aprender. Nosotros proveemos todo el material de apoyo digital. Te recomendamos usar ropa cómoda y traer libreta si gustas tomar notas, aunque no es obligatorio.",
  },
  {
    q: "¿Cuánto tiempo dura el taller?",
    a: "Son 8 horas de taller: teórico en 2 horas y práctico en 6 horas.",
  },
  {
    q: "¿Cómo puedo reservar mi cupo?",
    a: "Después de confirmado el pago usted recibe un correo electrónico y es agregado a un grupo exclusivo.",
  },
  {
    q: "¿Puedo pagar el taller a cuotas?",
    a: "No. Desafortunadamente, en este momento sólo tenemos el pago de contado.",
  },
  {
    q: "¿Es cierto que la hipnosis es rechazada por la religión?",
    a: "La hipnosis es una técnica basada en los principios de acceso de la mente. Incluso un miembro de la Iglesia católica como el Papa Pío XII habló sobre las prácticas médicas que utilizaban la hipnosis haciendo una observación sobre su uso de forma ética.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="card-glass glow-border rounded-xl overflow-hidden"
    >
      <button
        id={`faq-${index}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-white font-medium text-sm md:text-base pr-4">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-sky-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-slate-300/70 text-sm leading-relaxed border-t border-white/8 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="relative px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,78,110,0.08)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Resolvemos tus dudas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg"
          >
            Si tienes alguna otra pregunta, escríbenos directamente.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
