"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AuroraBackground from "@/components/sections/desafio/AuroraBackground";
import Button from "@/components/ui/Button";
import OfferCountdown from "./OfferCountdown";
import { WA_LINK } from "./config";

const EASE = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  "Plataforma con +250 horas",
  "Clases en vivo cada semana",
  "Comunidad de +12 países",
  "Certificación",
];

export default function MentoriaHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-24">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0818] via-[#0a0a14] to-[#080e15]" />
        <AuroraBackground />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
        <motion.img
          src="/logo.webp"
          alt="Hipnomente"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="h-16 md:h-20 w-auto object-contain mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          className="text-[#8fe6da] font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-5"
        >
          Mentoría Hipnomente · Formación de un año
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.15] tracking-tight mb-6 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Un año aprendiendo hipnosis{" "}
          <span className="gradient-trance-text">con alguien al lado</span>,
          no viendo videos solo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="text-slate-300/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
        >
          Accedes a una plataforma completa de formación en hipnosis clínica y,
          además, cada semana te sientas en vivo con el Dr. Juan Roberto y con
          cientos de colegas de más de 12 países a resolver los casos reales que
          tienes en consulta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10"
        >
          {PILLARS.map((p) => (
            <span
              key={p}
              className="flex items-center gap-2 text-white/90 font-semibold text-xs sm:text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-[#22C4B0] shrink-0" />
              {p}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="w-full flex flex-col items-center gap-4 mb-12"
        >
          <Button
            variant="gold"
            size="lg"
            href="#precios"
            className="font-bold uppercase tracking-wide w-full max-w-sm"
          >
            Quiero entrar a la mentoría
            <ArrowRight className="w-5 h-5" />
          </Button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300/70 hover:text-[#8fe6da] text-sm underline underline-offset-4 decoration-white/20 transition-colors"
          >
            Tengo dudas, quiero hablar con alguien del equipo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
        >
          <OfferCountdown />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
