"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRICE } from "./config";

/**
 * Barra fija que aparece cuando el visitante ya pasó el hero y se esconde
 * mientras la sección de precios está en pantalla (ahí el CTA grande ya está
 * visible y la barra solo estorbaría). Deja hueco a la derecha para no taparse
 * con el botón flotante de WhatsApp.
 */
export default function MentoriaStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pricing = document.getElementById("precios");
    let pricingOnScreen = false;

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      setVisible(pastHero && !pricingOnScreen);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        pricingOnScreen = entry.isIntersecting;
        onScroll();
      },
      { threshold: 0.15 }
    );
    if (pricing) observer.observe(pricing);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-[#0a0a14]/95 backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 py-3 pr-24 sm:pr-28">
            <div className="min-w-0 hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight truncate">
                Mentoría Hipnomente · 1 año de formación
              </p>
              <p className="text-slate-400/70 text-xs mt-0.5">
                <span className="line-through">{PRICE.regular}</span>{" "}
                <span className="text-[#8fe6da] font-semibold">
                  {PRICE.launch}
                </span>{" "}
                por lanzamiento
              </p>
            </div>
            <a
              href="#precios"
              className="ml-auto shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-bold text-sm px-5 py-2.5 shadow-lg shadow-amber-900/30 hover:brightness-105 transition-all cursor-pointer"
            >
              Ver la oferta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
