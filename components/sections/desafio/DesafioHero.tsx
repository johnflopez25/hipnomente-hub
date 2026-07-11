"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import DepthRings from "./DepthRings";

export const LINK_BASICO = "https://pay.hotmart.com/F106570275V";
export const LINK_VIP = "https://pay.hotmart.com/O106570435F";

// Julio 27 de 2026 a las 7:00 PM hora Colombia (UTC-5)
const DESAFIO_DATE = new Date("2026-07-27T19:00:00-05:00");

const EASE = [0.16, 1, 0.3, 1] as const;

const benefits = [
  "Protocolos seguros",
  "Paso a paso desde cero",
  "100% Online",
];

export default function DesafioHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-12 pb-20">
      {/* Background — violet glow at top, teal ember at bottom, matching the brand gradient */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0818] via-[#0a0a14] to-[#080e15]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(91,63,224,0.4)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(34,196,176,0.12)_0%,transparent_70%)]" />
        <DepthRings
          size={760}
          opacity={0.1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight mb-6 text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Aprende a hipnotizar en 7 días{" "}
          <span className="gradient-gold-text">(EN VIVO)</span>
        </motion.h1>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
        >
          {benefits.map((b) => (
            <span key={b} className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
              <CheckCircle2 className="w-4 h-4 text-[#22C4B0] shrink-0" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* Event info pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-5 py-3 mb-8"
        >
          <Calendar className="w-4 h-4 text-[#22C4B0] shrink-0" />
          <span className="text-white font-semibold text-xs md:text-sm uppercase tracking-wider">
            Del 27 de julio al 2 de agosto · 7 PM hora Colombia · Desafío online y en vivo
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="w-full max-w-sm mx-auto mb-12"
        >
          <motion.a
            href="#precios"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 w-full rounded-full font-bold cursor-pointer transition-all duration-200 bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 shadow-lg shadow-amber-900/40 hover:brightness-110 hover:scale-[1.02] px-8 py-4 text-lg uppercase tracking-wide"
          >
            <ArrowRight className="w-5 h-5" />
            Quiero hipnotizar en 7 días
          </motion.a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-widest text-[#8fe6da]/80 font-semibold">
            El desafío comienza en
          </p>
          <CountdownTimer targetDate={DESAFIO_DATE} accentClassName="text-violet-300" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
