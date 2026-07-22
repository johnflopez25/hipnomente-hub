"use client";

import { motion } from "framer-motion";
import { Clock, GraduationCap, HelpCircle, Wifi, Stethoscope } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const staticObstacles = [
  {
    icon: GraduationCap,
    question: '"Soy principiante total."',
    answer:
      "Empezamos desde cero absoluto. Usarás guiones paso a paso y el Día 5 ya estarás haciendo tu mini-sesión de hipnosis completa con otra persona.",
  },
  {
    icon: HelpCircle,
    question: '"¿Y si no me sale?"',
    answer:
      "Cada día tiene: demostración en vivo + práctica guiada + feedback en tiempo real. Además, incluye checklist de seguridad y role-plays para manejar resistencias.",
  },
  {
    icon: Wifi,
    question: '"¿Online realmente funciona?"',
    answer:
      "Sí. Solo necesitas cámara, audio y conexión a internet. Practicamos en parejas y en grupo a través de Zoom. También tienes soporte en la comunidad de WhatsApp y materiales descargables.",
  },
  {
    icon: Stethoscope,
    question: '"Quiero aplicarlo terapéuticamente."',
    answer:
      "Saldrás con el protocolo base y los límites éticos claros para usarlo en sesiones reales. Para casos clínicos complejos existe un siguiente paso — la Mentoría Hipnomente — que te compartimos en detalle dentro del propio desafío.",
  },
];

export default function DesafioObstaculos() {
  const obstacles = [
    {
      icon: Clock,
      question: '"No tengo tiempo."',
      answer:
        "Cada sesión dura entre 60 y 75 minutos. Si eliges el plan VIP con Grabación, tienes 30 días para repasar cada sesión cuando quieras. Las tareas prácticas son de 10–20 min.",
    },
    ...staticObstacles,
  ];

  return (
    <SectionWrapper
      id="obstaculos"
      className="relative px-4 bg-[#070a12]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,196,176,0.07)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Respondemos tus dudas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Qué te impide{" "}
            <span className="gradient-trance-text">empezar?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg max-w-2xl mx-auto"
          >
            Estas son las razones más comunes — y por qué ninguna es un
            obstáculo real.
          </motion.p>
        </div>

        {/* Obstacles list */}
        <div className="space-y-4">
          {obstacles.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#22C4B0]/10 border border-[#22C4B0]/20 flex items-center justify-center mt-0.5">
                <item.icon className="w-5 h-5 text-[#22C4B0]" />
              </div>
              <div>
                <p className="text-white font-bold text-base mb-2">
                  {item.question}
                </p>
                <p className="text-slate-400/70 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
