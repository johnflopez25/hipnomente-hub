"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, Tag } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Flag from "./Flags";
import OfferCountdown from "./OfferCountdown";
import { CHECKOUT_LINK, LOCAL_PRICES, PRICE, WA_LINK } from "./config";

const RECAP = [
  "1 año de acceso a toda la plataforma",
  "Curso Hipnosis desde Cero e Inducciones Rápidas",
  "7 formaciones terapéuticas especializadas",
  "Master Class y biblioteca de +250 horas",
  "Clases en vivo los lunes",
  "Bitácoras en vivo los miércoles",
  "Comunidad privada de mentorados",
  "Certificación al completar la formación",
];

export default function MentoriaPrecio() {
  return (
    <SectionWrapper
      id="precios"
      className="relative px-4 bg-[#050308] bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.14)_0%,transparent_70%)]"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            La inversión
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Un año completo por{" "}
            <span className="gradient-trance-text">menos de {PRICE.monthly} al mes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Un pago único que cubre los doce meses: la plataforma completa, las
            clases en vivo de cada semana y la comunidad.
          </motion.p>
        </div>

        {/* Tarjeta principal de la oferta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-glass glow-border border-violet-500/25 rounded-3xl overflow-hidden relative"
        >
          <div className="h-1.5 w-full gradient-trance" />
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/15 blur-3xl rounded-full pointer-events-none"
          />

          <div className="relative z-10 p-7 sm:p-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 text-amber-300 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-7">
                <Tag className="w-3.5 h-3.5" />
                Precio de lanzamiento
              </span>

              <p className="text-slate-500 text-xl md:text-2xl font-semibold line-through decoration-2 mb-1">
                {PRICE.regular}
              </p>
              {/* leading + padding generosos a propósito: con background-clip:text
                  el degradado solo pinta dentro de la caja del elemento, así que
                  una línea justa recorta el borde de los números. */}
              <p
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter gradient-trance-text mb-4 leading-[1.15] py-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {PRICE.launch}
              </p>
              <span className="inline-flex items-center gap-2 border border-[#22C4B0]/40 rounded-full px-5 py-2 text-sm font-bold text-[#8fe6da]">
                Ahorras {PRICE.savings}
              </span>

              <div className="mt-8 flex justify-center">
                <OfferCountdown label="La oferta termina en" />
              </div>
            </div>

            {/* Equivalencias por país */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-center text-slate-400/70 text-xs uppercase tracking-widest font-semibold mb-5">
                Equivalente aproximado en tu país
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCAL_PRICES.map((p) => (
                  <div
                    key={p.code}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <Flag code={p.code} />
                    <span className="text-slate-400/80 text-sm">
                      {p.country}
                    </span>
                    <span className="ml-auto text-white font-bold text-sm sm:text-base whitespace-nowrap">
                      {p.amount}{" "}
                      <span className="text-slate-500 font-medium text-xs">
                        {p.currency}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-500/70 text-xs mt-4">
                Valores de referencia según la tasa de cambio del día. El cobro
                final lo realiza la pasarela de pago en tu moneda local.
              </p>
            </div>

            {/* Recap de lo que incluye */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white font-bold text-base mb-5 text-center">
                Todo esto queda incluido
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {RECAP.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-300/85 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22C4B0] shrink-0 mt-px" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                variant="gold"
                size="xl"
                fullWidth
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                trackValue={PRICE.value}
                trackCurrency={PRICE.currency}
                className="font-bold uppercase tracking-wide max-w-md"
              >
                Reservar mi cupo ahora
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300/70 hover:text-[#8fe6da] text-sm underline underline-offset-4 decoration-white/20 transition-colors"
              >
                Prefiero resolver una duda antes de pagar
              </a>

              <p className="flex items-center gap-2 text-slate-500/70 text-xs mt-2">
                <Lock className="w-3.5 h-3.5" />
                Pago seguro · Acceso durante 12 meses · Certificación incluida
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
