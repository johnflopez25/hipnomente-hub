"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import DepthRings from "@/components/sections/desafio/DepthRings";
import OfferCountdown from "./OfferCountdown";
import { PRICE, WA_LINK } from "./config";

export default function MentoriaFinalCTA() {
  return (
    <SectionWrapper
      id="reservar"
      className="relative px-4 bg-[#050308] bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.12)_0%,transparent_70%)] overflow-hidden"
    >
      <DepthRings
        size={520}
        opacity={0.07}
        spin={false}
        className="absolute -bottom-24 -right-24 pointer-events-none"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Dentro de un año vas a estar en algún lugar.{" "}
          <span className="gradient-trance-text">
            La pregunta es en cuál.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300/75 text-base md:text-lg mb-10 leading-relaxed"
        >
          Puedes seguir acumulando cursos que no terminas y dudas que nadie te
          resuelve. O puedes pasar los próximos doce meses practicando en serio,
          con acompañamiento cada semana y colegas de más de 12 países al lado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mb-10"
        >
          <Button
            variant="gold"
            size="xl"
            href="#precios"
            className="font-bold uppercase tracking-wide"
          >
            Entrar por {PRICE.launch}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300/70 hover:text-[#8fe6da] text-sm underline underline-offset-4 decoration-white/20 transition-colors"
          >
            Hablar con alguien del equipo antes de decidir
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <OfferCountdown label="El precio de lanzamiento termina en" />
          <p className="flex items-center justify-center gap-2 text-slate-400/60 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#22C4B0]" />
            Formación dirigida por el Dr. Juan Roberto Rodríguez · +500
            profesionales formados
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
