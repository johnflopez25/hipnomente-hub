"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PRICE, WA_LINK } from "./config";

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Necesito saber algo de hipnosis para entrar?",
    a: "No. La ruta empieza con el curso Hipnosis desde Cero, pensado para quien nunca ha hecho una inducción. Y si ya llevas tiempo practicando, la mentoría te sirve para ordenar vacíos y avanzar hacia las formaciones terapéuticas especializadas.",
  },
  {
    q: "¿Cuánto tiempo tengo acceso a los contenidos?",
    a: "Un año completo desde tu ingreso, a todos los módulos, master class y a la biblioteca de más de 250 horas de grabación. Durante ese año también participas en las clases en vivo y en la comunidad.",
  },
  {
    q: "¿Qué pasa si no puedo conectarme un lunes o un miércoles?",
    a: "No pierdes el hilo: puedes dejar tu pregunta en la comunidad de WhatsApp y seguir avanzando en la plataforma a tu ritmo. La mentoría está diseñada para gente que trabaja, no para gente con la agenda libre.",
  },
  {
    q: "¿En qué se diferencia esto del Desafío de 7 días?",
    a: "El desafío es una primera experiencia intensiva de una semana para perder el miedo y hacer tu primera inducción. La mentoría es el paso siguiente: un año de formación completa, especializaciones por área, acompañamiento en vivo cada semana y comunidad. Uno te muestra que puedes; el otro te convierte en profesional.",
  },
  {
    q: "¿Las bitácoras de los miércoles son grabadas o en vivo?",
    a: "Son completamente en vivo. Es una sesión de preguntas y respuestas donde llevas tu caso real, lo planteas y lo resuelves con el Dr. Juan Roberto y con los demás mentorados conectados desde más de 12 países.",
  },
  {
    q: "¿Recibo algún certificado?",
    a: "Sí, la mentoría incluye certificación al completar la formación.",
  },
  {
    q: "¿Cómo puedo pagar?",
    // TODO(confirmar): ajustar según los medios que habilite finalmente la pasarela.
    a: "Puedes pagar con tarjeta de crédito o débito. Según tu país también hay medios de pago locales disponibles en la pasarela. Si tienes dudas con el pago, escríbenos por WhatsApp y te ayudamos.",
  },
  {
    q: "¿Por qué el precio de lanzamiento es más bajo?",
    a: `El valor regular de la mentoría es de ${PRICE.regular}. El precio de lanzamiento de ${PRICE.launch} está pensado para el grupo que entra ahora, y sube cuando termina el contador que ves en esta página.`,
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
          <ChevronDown className="w-5 h-5 text-[#22C4B0]" />
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

export default function MentoriaFAQ() {
  return (
    <SectionWrapper id="faq" className="relative px-4 bg-[#060810]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,196,176,0.07)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lo que suelen preguntarnos
          </motion.h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-400/70 text-sm mt-10"
        >
          ¿Te quedó otra duda?{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8fe6da] hover:text-white underline underline-offset-4 transition-colors"
          >
            Escríbenos por WhatsApp
          </a>{" "}
          y te respondemos.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
