"use client";

import { motion } from "framer-motion";
import { Clock, Globe2, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

// Ejemplo ilustrativo del tipo de conversación del grupo — NO son mensajes
// reales de mentorados y así se declara debajo del mockup. Si más adelante hay
// capturas reales con permiso de sus autores, este bloque se reemplaza por ellas.
const CHAT = [
  {
    side: "in",
    author: "Mentorada · México",
    text: "Tengo una paciente con ansiedad que no logra soltar el control durante la inducción. ¿Qué hago?",
  },
  {
    side: "in",
    author: "Mentorado · Argentina",
    text: "A mí me pasaba igual. Me funcionó cambiar a una inducción por fraccionamiento en vez de relajación progresiva.",
  },
  {
    side: "out",
    author: "Dr. Juan Roberto",
    text: "Exacto. Y lo vemos con calma en la bitácora del miércoles: traé el caso y lo trabajamos en vivo.",
  },
  {
    side: "in",
    author: "Mentorada · Perú",
    text: "Les cuento que apliqué el protocolo de tabaquismo y mi paciente lleva tres semanas sin fumar 🎉",
  },
];

const STATS = [
  { icon: Globe2, value: "+12", label: "países representados" },
  { icon: Clock, value: "24/7", label: "el grupo nunca cierra" },
  { icon: Users, value: "100%", label: "casos reales, no teoría" },
];

export default function MentoriaComunidad() {
  return (
    <SectionWrapper id="comunidad" className="relative px-4 bg-[#060810]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-4">
              La comunidad
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nunca más te quedas con la duda hasta la próxima clase
            </h2>
            <div className="space-y-5 text-slate-300/75 text-base leading-relaxed">
              <p>
                Al entrar a la mentoría entras también al grupo privado de
                mentorados en WhatsApp. Ahí cualquiera puede preguntar y todos
                aportan: colegas que ya pasaron por ese caso, gente que acaba de
                empezar, profesionales con años de consulta.
              </p>
              <p>
                Es donde se comparten experiencias, testimonios de pacientes,
                dudas de consulta y las cosas que no funcionaron. Muchas veces la
                respuesta llega en minutos, sin esperar al miércoles.
              </p>
              <p className="text-white font-medium">
                Formarte en hipnosis con un grupo detrás y formarte solo no se
                parecen en nada.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="card-glass glow-border rounded-xl p-4 text-center"
                >
                  <s.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                  <p className="text-2xl font-extrabold text-white leading-none mb-1.5">
                    {s.value}
                  </p>
                  <p className="text-slate-400/70 text-xs leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mockup del grupo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-glass glow-border rounded-3xl overflow-hidden max-w-md mx-auto shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              {/* Barra superior */}
              <div className="flex items-center gap-3 px-5 py-4 bg-emerald-900/25 border-b border-white/8">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <Users className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">
                    Comunidad Hipnomente
                  </p>
                  <p className="text-emerald-300/70 text-xs mt-1.5">
                    Grupo privado de mentorados
                  </p>
                </div>
              </div>

              {/* Mensajes */}
              <div className="p-5 flex flex-col gap-3">
                {CHAT.map((m, i) => (
                  <motion.div
                    key={m.text}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
                    viewport={{ once: true }}
                    className={`max-w-[88%] rounded-2xl px-4 py-3 ${
                      m.side === "out"
                        ? "self-end bg-emerald-600/20 border border-emerald-400/20 rounded-br-sm"
                        : "self-start bg-white/[0.06] border border-white/8 rounded-bl-sm"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-bold mb-1 ${
                        m.side === "out"
                          ? "text-emerald-300"
                          : "text-slate-400/80"
                      }`}
                    >
                      {m.author}
                    </p>
                    <p className="text-slate-200/90 text-sm leading-relaxed">
                      {m.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-center text-slate-500/70 text-xs mt-4 max-w-md mx-auto">
              Ejemplo ilustrativo del tipo de conversación que ocurre en el
              grupo.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
