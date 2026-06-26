"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Moon, 
  Brain, 
  EyeOff, 
  BedDouble, 
  VolumeX, 
  Sun, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Video, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle 
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

// URL de Checkout / Pago (Hotmart, Wompi, etc.). Fácilmente editable por el usuario.
const CHECKOUT_URL = "https://pay.hotmart.com/YOUR_PRODUCT_ID"; // Cambiar por el link de compra real

const EASE = [0.16, 1, 0.3, 1] as const;

// 1. Audios de Hipnosis
const audios = [
  {
    num: "1",
    title: "Calma la mente",
    desc: "Para soltar el ruido mental y empezar a relajarte.",
    icon: Brain,
    accent: "text-sky-400 border-sky-500/20 bg-sky-500/5",
  },
  {
    num: "2",
    title: "Relaja tu cuerpo",
    desc: "Para aflojar la tensión física acumulada antes de dormir.",
    icon: Sparkles,
    accent: "text-teal-400 border-teal-500/20 bg-teal-500/5",
  },
  {
    num: "3",
    title: "Apaga los pensamientos",
    desc: "Para dejar de darle vueltas a pendientes, recuerdos o preocupaciones en la noche.",
    icon: EyeOff,
    accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
  },
  {
    num: "4",
    title: "Sueño profundo",
    desc: "Una guía nocturna inmersiva para preparar un descanso más reparador y continuo.",
    icon: BedDouble,
    accent: "text-violet-400 border-violet-500/20 bg-violet-500/5",
  },
  {
    num: "5",
    title: "Vuelve a dormir",
    desc: "Para cuando despiertas en la madrugada y sientes que no logras volver a conciliar el sueño.",
    icon: VolumeX,
    accent: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    num: "6",
    title: "Despierta en calma",
    desc: "Para programar un despertar sereno y comenzar tu día con mayor energía y lucidez.",
    icon: Sun,
    accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
];

// 2. Temas de Videos Psicoeducativos
const videoTopics = [
  "Por qué luchar activamente contra el insomnio puede mantenerte más despierto.",
  "Cómo preparar biológica y mentalmente tu cuerpo antes de acostarte.",
  "Cómo reprogramar tu sistema nervioso hacia estados de desactivación y calma.",
  "Cómo transformar las creencias negativas y la ansiedad asociadas al sueño.",
  "Cómo usar correctamente y potenciar la efectividad de tus hipnoaudios.",
  "Cómo estructurar una rutina nocturna simple, efectiva y sostenible en el tiempo.",
];

// 3. Pestaña "Para quién es"
const painPoints = [
  "Te cuesta conciliar el sueño aunque tu cuerpo se sienta completamente cansado.",
  "Tu mente parece activarse o acelerarse justo en el momento en que te acuestas.",
  "Te despiertas a mitad de la noche o en la madrugada y te cuesta volver a dormir.",
  "Sientes tensión física, ansiedad, frustración o preocupación al ver que no logras dormir.",
  "Quieres una herramienta guiada práctica que te ayude a relajarte antes de cerrar los ojos.",
  "Buscas una experiencia simple, de acceso inmediato y fácil de usar en casa.",
  "Quieres construir una rutina nocturna más tranquila y consciente.",
];

// 4. Beneficios esperados
const benefits = [
  "Mayor sensación de calma y tranquilidad antes de dormir.",
  "Reducción progresiva del ruido mental y la rumiación nocturna.",
  "Mayor facilidad para establecer una rutina saludable de desconexión.",
  "Relajación física profunda y alivio de tensiones musculares.",
  "Mayor sincronía con tu respiración y ritmo cardíaco de reposo.",
  "Una guía de apoyo confiable para enfrentar noches difíciles de alerta.",
  "Recuperación de la confianza en la capacidad natural de tu cuerpo para descansar.",
];

// 5. Preguntas Frecuentes (FAQ)
const faqs = [
  {
    q: "¿Necesito experiencia previa con hipnosis?",
    a: "No. Todos los audios están guiados paso a paso por el terapeuta, utilizando un lenguaje sencillo y natural. Solo debes acostarte, escuchar y dejarte guiar por la voz."
  },
  {
    q: "¿Cuánto duran los hipnoaudios?",
    a: "Cada hipnoaudio tiene una duración aproximada de 20 minutos, tiempo ideal para que tu sistema nervioso logre desacelerar y entrar en estados profundos de relajación antes del sueño."
  },
  {
    q: "¿Puedo escucharlos con audífonos?",
    a: "Sí. De hecho, recomendamos usar audífonos para disfrutar de una experiencia estéreo más inmersiva que bloquee el ruido externo y te permita concentrarte mejor en la guía sonora."
  },
  {
    q: "¿Cuándo debo escucharlos?",
    a: "Puedes escucharlos al acostarte para iniciar el sueño, como parte de tu rutina de desconexión previa, o bien en la madrugada si sufres despertares nocturnos y necesitas volver a dormir."
  },
  {
    q: "¿Esto reemplaza una consulta médica o psicológica?",
    a: "No. Este programa es una herramienta de bienestar, relajación profunda e hipnosis guiada para el descanso. No constituye ni reemplaza tratamientos médicos, terapéuticos, psicológicos o psiquiátricos."
  },
  {
    q: "¿Qué pasa si me quedo dormido escuchando el audio?",
    a: "Está perfecto. El objetivo es acompañar tu transición al descanso. Si te duermes a mitad del audio, tu cuerpo continuará descansando de manera natural; simplemente permítete soltar."
  }
];

export default function InsomniaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleScrollToCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("precio-insomnio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* 1. Navbar Simplificada */}
      <Navbar simplified={true} />

      {/* 2. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20">
        
        {/* Background Atmosférico Nocturno */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* Fondo Radial Índigo/Midnight */}
          <div className="absolute inset-0 bg-[#070b13]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_60%)]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center justify-center">
          
          {/* Badge Producto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/20 rounded-full px-4.5 py-2 mb-8 text-xs font-bold tracking-widest text-slate-300"
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0 animate-pulse" />
            <span>PROGRAMA DIGITAL · ACCESO INMEDIATO</span>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-white">¿Tu mente no se apaga cuando intentas{" "}</span>
            <span className="gradient-gold-text">dormir?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="text-lg md:text-xl text-slate-300/85 max-w-2xl mx-auto mb-5 leading-relaxed font-medium"
          >
            Descubre <strong className="text-white font-bold">Hipnosis para Dormir Profundo</strong>: una experiencia guiada para calmar tus pensamientos, relajar tu cuerpo y preparar una noche de descanso profundo.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            className="text-sm md:text-base text-slate-400/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Accede a un programa digital con <strong className="text-slate-200">6 hipnoaudios guiados</strong> y <strong className="text-slate-200">videos psicoeducativos</strong> diseñados para ayudarte a crear una rutina nocturna más tranquila, consciente y reparadora.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            className="w-full max-w-sm mx-auto"
          >
            <Button
              variant="gold"
              size="lg"
              fullWidth
              onClick={handleScrollToCheckout}
              className="font-black uppercase tracking-wider text-center text-xs sm:text-sm py-4.5 px-6"
            >
              Quiero dormir mejor esta noche
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. DOLOR / CONTEXTO */}
      <SectionWrapper id="contexto" className="border-t border-indigo-950/20 bg-slate-950/40 relative">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Moon className="w-10 h-10 text-indigo-400/30 mx-auto mb-6" />
          
          <h2 
            className="text-3xl md:text-4xl font-extrabold text-white mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Si llegas cansado a la cama… pero tu mente sigue despierta, esto es para ti
          </h2>

          <div className="space-y-6 text-slate-300/80 text-base md:text-lg leading-relaxed text-left max-w-2xl mx-auto">
            <p>
              Hay noches en las que el cuerpo está agotado, pero la mente no se detiene.
            </p>
            <p>
              Empiezas a darle vueltas a pendientes, conversaciones, preocupaciones, decisiones, recuerdos o cosas que ni siquiera puedes resolver en ese momento.
            </p>
            <p>
              Y mientras más intentas dormir, más tensión aparece.
            </p>
            <p className="border-l-2 border-indigo-500/50 pl-4 py-2 bg-indigo-950/10 rounded-r-lg font-medium text-slate-300">
              No siempre se trata de "falta de sueño". Muchas veces se trata de una mente acelerada, un cuerpo en alerta y una rutina nocturna que no le enseña a tu sistema nervioso a soltar.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-indigo-400 font-bold uppercase tracking-wider text-sm">
              Por eso creamos
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
              Hipnosis para Dormir Profundo
            </h3>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. FILOSOFÍA / PASO A PASO */}
      <SectionWrapper id="filosofia" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            No luches contra el insomnio. Aprende a preparar tu mente para descansar.
          </h2>
          
          <p className="text-slate-300/85 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Este programa no está diseñado para obligarte a dormir. Está creado para acompañarte, paso a paso, hacia un estado de mayor calma física y mental mediante audios de hipnosis guiada, respiración, relajación y sugestiones orientadas al descanso.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { step: "01", action: "Escuchas", desc: "Te pones tus audífonos." },
              { step: "02", action: "Respiras", desc: "Sincronizas tu aire." },
              { step: "03", action: "Sueltas", desc: "Aflojas el cuerpo." },
              { step: "04", action: "Bajas ritmo", desc: "Tu mente desacelera." },
              { step: "05", action: "Descansas", desc: "Concilias el sueño." },
            ].map((p, i) => (
              <div 
                key={i} 
                className="card-glass glow-border rounded-xl p-6 flex flex-col items-center justify-center"
              >
                <span className="text-indigo-400 font-extrabold text-xs block mb-2">{p.step}</span>
                <span className="text-white font-extrabold text-lg block mb-1">{p.action}</span>
                <span className="text-slate-400/70 text-xs leading-snug">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. ¿QUÉ ES EL PROGRAMA? */}
      <SectionWrapper id="que-es" className="relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block">
                BIENESTAR NOCTURNO
              </span>
              <h2 
                className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Qué es Hipnosis para Dormir Profundo?
              </h2>
              <div className="space-y-4 text-slate-300/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Es un programa digital de bienestar nocturno que combina hipnoaudios guiados y videos psicoeducativos para ayudarte a crear una experiencia de descanso más tranquila desde casa.
                </p>
                <p>
                  Está diseñado para personas que sienten que en la noche su mente se activa, su cuerpo no se relaja o el sueño se vuelve una lucha.
                </p>
                <p className="font-semibold text-slate-200">
                  No necesitas experiencia previa con hipnosis. Solo necesitas tus audífonos, un lugar cómodo y unos minutos antes de dormir.
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto shadow-2xl card-glass glow-border p-8 flex flex-col justify-center items-center text-center border-indigo-500/10 bg-gradient-to-br from-indigo-950/20 to-slate-950">
                <Moon className="w-16 h-16 text-indigo-400 mb-4 animate-pulse" />
                <h3 className="text-white font-extrabold text-xl mb-2">Tu rutina de sueño</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Apaga tus dispositivos, reproduce el audio y permite que tu mente desconecte del día a día.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>

      {/* 6. ¿QUÉ INCLUYE? (LOS 6 AUDIOS) */}
      <SectionWrapper id="incluye-audios" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block mb-3">
              CONTENIDO DETALLADO
            </span>
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Esto es lo que incluye
            </h2>
            <p className="text-slate-400/80 text-base max-w-xl mx-auto">
              Recibe 6 hipnoaudios guiados. Cada audio fue creado para acompañar un momento específico de tu descanso:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audios.map((a, i) => (
              <div 
                key={i} 
                className="card-glass glow-border rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${a.accent}`}>
                  <a.icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-indigo-400 font-extrabold mb-1">AUDIODISCO {a.num}</span>
                <h3 className="text-white font-extrabold text-lg mb-3">{a.title}</h3>
                <p className="text-slate-300/70 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. VIDEOS PSICOEDUCATIVOS */}
      <SectionWrapper id="incluye-videos">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card-glass glow-border rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-indigo-950/15 via-slate-950 to-slate-950">
            <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h2 
                  className="text-3xl font-extrabold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  También recibirás videos psicoeducativos
                </h2>
                <p className="text-slate-400/80 text-sm sm:text-base mb-8">
                  Además de los hipnoaudios, tendrás acceso a videos explicativos breves y de aplicación práctica donde aprenderás:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videoTopics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. ¿PARA QUIÉN ES? */}
      <SectionWrapper id="para-quien" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Este programa es para ti si…
            </h2>
            <p className="text-slate-400/80 text-sm sm:text-base">
              Identifícate con las siguientes situaciones. Si marcas una o más, el programa te será de gran utilidad:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 bg-slate-950/50 glow-border rounded-xl p-5"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/20">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. ¿CÓMO FUNCIONA? */}
      <SectionWrapper id="como-funciona">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ¿Cómo funciona?
            </h2>
            <p className="text-slate-400/80 text-sm sm:text-base max-w-xl mx-auto">
              El proceso es muy sencillo. Puedes escucharlo antes de dormir, durante una noche difícil o cuando despiertes en la madrugada.
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { step: "1", title: "Elige el hipnoaudio", text: "Selecciona el audio específico que necesitas para esa noche." },
              { step: "2", title: "Usa tus audífonos", desc: "Ponte tus audífonos o reproduce el audio en un altavoz a un volumen cómodo." },
              { step: "3", title: "Acuéstate en calma", desc: "Toma una posición cómoda y relajada en tu cama." },
              { step: "4", title: "Sigue la guía", desc: "Permítete escuchar la voz del terapeuta sin juzgar ni forzar el sueño." },
              { step: "5", title: "Permite el descanso", desc: "Deja que tu mente y tu cuerpo entren de manera natural en un estado de sueño." },
            ].map((s, i) => (
              <div 
                key={i} 
                className="flex gap-4 items-start bg-slate-900/25 glow-border rounded-xl p-5 border-l-4 border-l-indigo-500"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-base mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.text || s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. NO ES MÚSICA GENÉRICA */}
      <SectionWrapper id="diferenciador" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <VolumeX className="w-5 h-5" />
          </div>
          <h2 
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            No es música genérica de relajación
          </h2>
          <div className="text-slate-300/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed space-y-4 text-center">
            <p>
              Esto no es solo música de fondo.
            </p>
            <p>
              Es una experiencia guiada con hipnosis, diseñada para ayudarte a dirigir tu atención, calmar tus pensamientos y acompañar tu cuerpo hacia un estado de mayor relajación.
            </p>
            <p className="font-semibold text-indigo-300">
              Cada audio combina voz, pausas, lenguaje hipnótico y atmósfera sonora para crear una experiencia envolvente y fácil de seguir.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 11. BENEFICIOS */}
      <SectionWrapper id="beneficios">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Beneficios que puedes experimentar
            </h2>
            <p className="text-slate-400/80 text-sm sm:text-base">
              A medida que incorpores el programa a tu rutina nocturna, podrás notar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 bg-slate-900/20 glow-border rounded-xl p-4.5"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-slate-300 text-sm sm:text-base">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. ACCESO INMEDIATO */}
      <SectionWrapper id="acceso" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 
            className="text-3xl font-extrabold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Acceso inmediato
          </h2>
          <p className="text-slate-300/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-4">
            Después de realizar tu compra, recibirás acceso digital inmediato al programa en tu correo electrónico para empezar a escucharlo desde tu celular, computador o tablet.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Puedes usarlo en casa, antes de dormir, cuando viajes o cuando necesites volver a una sensación de calma.
          </p>
        </div>
      </SectionWrapper>

      {/* 13. PRECIO DE ACCESO / CHECKOUT CARD */}
      <SectionWrapper id="precio-insomnio">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block mb-3">
              PRECIO DE ACCESO
            </span>
            <h2 
              className="text-3xl md:text-4xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hipnosis para Dormir Profundo
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-glass glow-border rounded-3xl overflow-hidden flex flex-col relative border-indigo-500/20"
          >
            {/* Top gold accent line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-600 to-indigo-500" />

            <div className="p-8 sm:p-10 flex flex-col items-center">
              
              <div className="text-center mb-8">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
                  PAGO ÚNICO - ACCESO DE POR VIDA
                </span>
                <span className="text-4xl sm:text-5xl font-black text-white block">
                  $97.000 COP
                </span>
              </div>

              {/* Includes List */}
              <ul className="space-y-4 w-full mb-10">
                {[
                  "6 hipnoaudios guiados enfocados en el sueño",
                  "Videos psicoeducativos y rutinas prácticas",
                  "Acceso inmediato en tu correo electrónico",
                  "Uso libre desde celular, tablet o computador",
                  "Experiencia auditiva premium para tu rutina nocturna"
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-start gap-3 text-slate-200 font-medium text-sm border-b border-white/8 pb-4 last:border-0 last:pb-0">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Checkout Button */}
              <Button
                variant="gold"
                size="lg"
                fullWidth
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase tracking-wider text-center text-xs sm:text-sm py-4.5"
              >
                Quiero acceder ahora
              </Button>

              <div className="flex items-center gap-1.5 text-slate-400/60 text-xs mt-5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Proceso de pago 100% seguro y encriptado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 14. SUB-CTA BANNER */}
      <SectionWrapper id="sub-cta" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 
            className="text-3xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Una noche más tranquila puede empezar con una decisión simple
          </h2>
          
          <div className="text-slate-300/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-center space-y-4">
            <p>
              No necesitas seguir peleando con tu mente cada noche. Puedes empezar a crear una rutina diferente.
            </p>
            <p className="font-semibold text-slate-200">
              Una rutina donde tu cuerpo aprenda a soltar, donde tu mente pueda bajar el ritmo y donde la noche vuelva a sentirse como un espacio de descanso.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto">
            <Button
              variant="gold"
              size="lg"
              fullWidth
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black uppercase tracking-wider text-center text-xs sm:text-sm py-4.5"
            >
              Sí, quiero probar Hipnosis para Dormir Profundo
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 15. PREGUNTAS FRECUENTES (FAQ) */}
      <SectionWrapper id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block mb-3">
              PREGUNTAS FRECUENTES
            </span>
            <h2 
              className="text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Resolvemos tus dudas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="card-glass glow-border rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-white hover:text-indigo-300 font-semibold text-sm sm:text-base cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-indigo-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-300/80 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 16. AVISO IMPORTANTE */}
      <SectionWrapper id="aviso" className="bg-[#0b101b] border-y border-indigo-950/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card-glass glow-border border-amber-500/20 bg-amber-500/5 rounded-2xl p-6 md:p-8 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-extrabold text-base mb-2 uppercase tracking-wide">
                Aviso importante
              </h3>
              <p className="text-slate-300/85 text-xs sm:text-sm leading-relaxed space-y-4">
                Este programa es una herramienta de bienestar, relajación profunda e hipnosis guiada. No promete curar enfermedades ni reemplaza diagnóstico, tratamiento médico, psicológico o psiquiátrico.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-3">
                Si presentas insomnio severo, síntomas clínicos persistentes, trastornos psicológicos clínicos, o consumes medicamentos recetados para conciliar el sueño, consulta y sigue siempre las recomendaciones de un profesional de la salud cualificado.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 17. FINAL CTA BANNER */}
      <SectionWrapper id="final-insomnio" className="relative text-center py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Moon className="w-12 h-12 text-indigo-400/50 mx-auto mb-6 animate-pulse" />
          <span className="text-indigo-400 font-bold uppercase tracking-wider text-xs block mb-3">
            EMPIEZA HOY MISMO
          </span>
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Calma tu mente. Relaja tu cuerpo. Prepara tu descanso.
          </h2>
          <p className="text-slate-300/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Accede ahora a <strong className="text-white">Hipnosis para Dormir Profundo</strong> y empieza a construir una rutina nocturna más tranquila.
          </p>

          <div className="w-full max-w-sm mx-auto">
            <Button
              variant="gold"
              size="lg"
              fullWidth
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black uppercase tracking-wider text-center text-xs sm:text-sm py-4.5"
            >
              Acceder por $97.000 COP
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* 18. Footer Simplificada */}
      <Footer simplified={true} />

    </main>
  );
}
