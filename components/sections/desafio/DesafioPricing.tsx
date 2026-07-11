"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { LINK_BASICO, LINK_VIP } from "./DesafioHero";

const planBasico = {
  name: "En Vivo",
  price: "$97",
  currency: "USD",
  description: "Acceso completo a las 7 sesiones en vivo",
  includes: [
    "7 sesiones en vivo por Zoom (60–75 min c/u)",
    "Materiales y ejercicios de práctica diarios",
    "Sesión de preguntas y respuestas cada día",
    "Comunidad exclusiva por WhatsApp",
    "Guiones de hipnosis paso a paso",
    "Garantía de 7 días",
  ],
  cta: "Quiero el acceso en vivo",
  link: LINK_BASICO,
  highlight: false,
};

const planVip = {
  name: "VIP con Grabación",
  price: "$197",
  currency: "USD",
  description: "Todo el desafío + grabaciones por 30 días",
  includes: [
    "Todo lo del plan En Vivo",
    "Grabación de las 7 sesiones completas",
    "Acceso a las grabaciones por 30 días",
    "Acceso prioritario para hacer preguntas en vivo",
    "Material extra de repaso",
    "Garantía de 7 días",
  ],
  cta: "Quiero el plan VIP",
  link: LINK_VIP,
  highlight: true,
};

function PlanCard({
  plan,
  delay,
}: {
  plan: typeof planBasico;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`card-glass rounded-2xl overflow-hidden flex flex-col relative ${
        plan.highlight ? "glow-border border-amber-500/30" : "glow-border"
      }`}
    >
      {/* Top accent */}
      <div
        className={`h-1.5 w-full ${
          plan.highlight
            ? "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600"
            : "bg-gradient-to-r from-sky-500 to-cyan-400"
        }`}
      />

      {plan.highlight && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 rounded-full px-3 py-1">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
            Recomendado
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <p
          className={`text-sm font-bold uppercase tracking-widest mb-1 ${
            plan.highlight ? "text-amber-400" : "text-sky-400"
          }`}
        >
          {plan.name}
        </p>
        <div className="flex items-end gap-2 mb-2">
          <span
            className={`text-5xl font-extrabold tracking-tighter ${
              plan.highlight ? "gradient-gold-text" : "gradient-brand-text"
            }`}
          >
            {plan.price}
          </span>
          <span className="text-slate-400 text-sm mb-2">{plan.currency}</span>
        </div>
        <p className="text-slate-400/70 text-sm mb-8 leading-relaxed">
          {plan.description}
        </p>

        <ul className="space-y-3 mb-10 flex-1">
          {plan.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-slate-200 text-sm"
            >
              <CheckCircle2
                className={`w-5 h-5 shrink-0 mt-0.5 ${
                  plan.highlight ? "text-amber-400" : "text-sky-400"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>

        <Button
          variant={plan.highlight ? "gold" : "outline"}
          size="lg"
          fullWidth
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold uppercase tracking-wide"
        >
          {plan.cta}
        </Button>

        <p className="text-center text-slate-400/50 text-xs mt-4">
          🔒 Pago seguro · Garantía de 7 días
        </p>
      </div>
    </motion.div>
  );
}

export default function DesafioPricing() {
  return (
    <SectionWrapper
      id="precios"
      className="relative px-4 bg-[radial-gradient(ellipse_at_center,rgba(14,78,110,0.10)_0%,transparent_70%)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Elige tu plan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Cuánto invierto para{" "}
            <span className="gradient-brand-text">participar?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg max-w-2xl mx-auto"
          >
            Dos opciones según cómo prefieras vivir la experiencia.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard plan={planBasico} delay={0.1} />
          <PlanCard plan={planVip} delay={0.2} />
        </div>

        {/* Why so affordable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 card-glass glow-border rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-3">
            ¿Por qué es tan accesible?
          </p>
          <p className="text-slate-300/80 leading-relaxed text-sm md:text-base">
            Queremos que experimentes de primera mano el poder de la hipnosis.
            Este desafío es un filtro que separa a quienes solo sienten curiosidad
            de quienes están listos para dar su primer paso real. Sabemos que
            después de vivirlo, querrás seguir profundizando — y ahí es donde
            comienza el verdadero viaje.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
