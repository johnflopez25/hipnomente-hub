"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const CTA_LINK = "https://pay.hotmart.com/T106206891Q";

const includes = [
  "VALOR DE LANZAMIENTO WORKSHOP",
  "ACCESO A GRABACIÓN DEL EVENTO*.",
  "RECIBE KIT HIPNOMENTE",
  "ALMUERZO Y REFRIGERIOS INCLUIDOS",
];

const eventInfo = [
  {
    icon: Calendar,
    label: "Fecha",
    value: "Sábado 13 de Junio, 2026",
    sub: "Un solo día, resultados permanentes",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "8:00 a.m. - 5:00 p.m.",
    sub: "8 horas intensivas de práctica",
  },
  {
    icon: MapPin,
    label: "Lugar",
    value: "Hotel B3 Virrey",
    sub: "Bogotá, Colombia",
    href: "https://www.google.com/maps/search/?api=1&query=Hotel+B3+Virrey+Bogota+Carrera+15+88-36",
  },
  {
    icon: Users,
    label: "Cupos",
    value: "Grupos reducidos",
    sub: "Para garantizar atención personalizada",
  },
];

export default function EventDetails() {
  return (
    <SectionWrapper
      id="detalles-evento"
      className="relative px-4 bg-[radial-gradient(ellipse_at_center,rgba(14,78,110,0.10)_0%,transparent_70%)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¡Aproveche esta oportunidad!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Reserve su cupo ahora por un valor de oportunidad
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventInfo.map((info, i) => {
                const CardComponent = info.href ? motion.a : motion.div;
                const extraProps = info.href
                  ? {
                      href: info.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "card-glass glow-border rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer block",
                    }
                  : {
                      className: "card-glass glow-border rounded-2xl p-5",
                    };

                return (
                  <CardComponent
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    {...extraProps}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <info.icon className="w-4 h-4 text-sky-400" />
                      <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider">
                        {info.label}
                      </span>
                    </div>
                    <p className="text-white font-bold text-lg leading-tight mb-1">
                      {info.value}
                    </p>
                    <p className="text-slate-400/60 text-xs">{info.sub}</p>
                  </CardComponent>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl overflow-hidden group"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hotel+B3+Virrey+Bogota+Carrera+15+88-36"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-95 transition-opacity duration-200"
              >
                <iframe
                  title="Hotel B3 Bogotá"
                  src="https://maps.google.com/maps?q=Hotel%20B3%20Virrey%20Bogota%20Carrera%2015%2088-36&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-48 border-0 opacity-80 pointer-events-none"
                  loading="lazy"
                />
                <div className="p-4 flex items-center justify-between bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-slate-300/80 text-sm font-medium">
                      Hotel B3 Virrey · Carrera 15 #88-36, Bogotá
                    </span>
                  </div>
                  <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                    Ver en Google Maps
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass glow-border rounded-2xl overflow-hidden flex flex-col relative"
          >
            {/* Gold top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600" />

            <div className="p-8 sm:p-10 flex flex-col items-center">

              {/* Premium Badge */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-8 text-center">
                <span className="text-amber-400 font-extrabold uppercase tracking-widest text-sm">
                  Valor 50% OFF
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-400/50" />
                <span className="text-amber-200/80 text-xs font-semibold uppercase tracking-wider">
                  Inscríbete antes de que cambie
                </span>
              </div>

              {/* Pricing */}
              <div className="flex flex-col items-center mb-8 w-full border-b border-white/10 pb-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-slate-400/60 line-through text-xl font-semibold">$980.000</span>
                  <span className="gradient-brand-text text-5xl sm:text-6xl font-extrabold tracking-tighter drop-shadow-sm">
                    $490.000
                  </span>
                </div>
                <p className="text-slate-300/70 font-semibold text-sm uppercase tracking-widest mt-1">
                  Primer Grupo de Inscritos
                </p>
              </div>

              {/* Includes List */}
              <ul className="space-y-4 w-full mb-10">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center justify-start sm:justify-center gap-3 text-slate-100 font-medium text-sm border-b border-white/8 pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button
                variant="gold"
                size="lg"
                fullWidth
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase tracking-wider text-center text-[11px] sm:text-sm md:text-base lg:text-lg py-4 px-4 sm:px-8"
              >
                Quiero inscribirme con el 50% de descuento
              </Button>

              <p className="text-center text-slate-400/50 text-xs mt-5">
                🔒 Proceso 100% seguro y garantizado
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
