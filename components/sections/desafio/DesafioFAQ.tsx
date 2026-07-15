"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useMarket } from "./MarketContext";

const staticFaqs = [
  {
    q: "¿El desafío será en vivo?",
    a: "Sí. El Desafío Aprende a Hipnotizar en 7 Días es completamente en vivo a través de Zoom, desde el 27 de julio hasta el 2 de agosto de 2026. Las sesiones son todos los días a las 7:00 PM (hora de Colombia).",
  },
  {
    q: "¿Necesito experiencia previa en hipnosis?",
    a: "No. El desafío está diseñado específicamente para personas sin ningún conocimiento previo. Empezamos desde cero absoluto con guiones paso a paso. Si ya tienes experiencia, también encontrarás técnicas para refinar tu técnica.",
  },
  {
    q: "¿Qué necesito para participar?",
    a: "Solo necesitas un computador o celular con cámara y micrófono funcionando, conexión a internet estable, y muchas ganas de aprender. No se necesita ningún software especial más allá de Zoom.",
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Puedes pagar con tarjeta de crédito, tarjeta débito, y si estás en Colombia, también por corresponsales bancarios como Efecty.",
  },
  {
    q: "¿Tengo garantía?",
    a: "Sí. Tienes 7 días de garantía a partir de la fecha de tu compra. Si por cualquier razón no estás satisfecho, te devolvemos tu dinero sin preguntas.",
  },
  {
    q: "¿Puedo hipnotizar a alguien después del desafío?",
    a: "Sí. Al finalizar el desafío tendrás las herramientas y el protocolo base para realizar sesiones de hipnosis reales. Recuerda que la hipnosis es una habilidad: cuanto más practiques, más fluida se vuelve.",
  },
  {
    q: "¿La hipnosis es segura?",
    a: "Completamente. La hipnosis es un estado natural de enfoque y relajación. Practicada de forma responsable y ética no tiene efectos secundarios negativos. En el desafío aprenderás a manejarla con criterios de seguridad claros desde el primer día.",
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
        id={`desafio-faq-${index}`}
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

export default function DesafioFAQ() {
  const market = useMarket();

  const faqs = [
    staticFaqs[0],
    {
      q: "¿Tendré acceso a la grabación?",
      a: `Solo si eliges el plan VIP con Grabación (${market.priceVip} ${market.currency}). Con ese plan tendrás acceso a todas las grabaciones durante 30 días después del evento. Con el plan En Vivo (${market.priceBasico} ${market.currency}) no hay acceso a grabaciones, por eso recomendamos participar en vivo para aprovechar al máximo la interacción.`,
    },
    ...staticFaqs.slice(1),
  ];

  return (
    <SectionWrapper id="faq" className="relative px-4 bg-[#050308]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,196,176,0.07)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
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
            Si tienes alguna otra pregunta, escríbenos por WhatsApp.
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
