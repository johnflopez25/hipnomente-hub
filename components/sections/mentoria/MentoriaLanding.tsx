"use client";

import Instructor from "@/components/sections/Instructor";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MentoriaHero from "./MentoriaHero";
import MentoriaDudas from "./MentoriaDudas";
import MentoriaQueEs from "./MentoriaQueEs";
import MentoriaPlataforma from "./MentoriaPlataforma";
import MentoriaEnVivo from "./MentoriaEnVivo";
import MentoriaComunidad from "./MentoriaComunidad";
import MentoriaIncluye from "./MentoriaIncluye";
import MentoriaParaQuien from "./MentoriaParaQuien";
import MentoriaPrecio from "./MentoriaPrecio";
import MentoriaFAQ from "./MentoriaFAQ";
import MentoriaFinalCTA from "./MentoriaFinalCTA";
import MentoriaStickyCTA from "./MentoriaStickyCTA";
import MentoriaPixelTracker from "./MentoriaPixelTracker";
import { WA_MESSAGE } from "./config";

// El orden es el recorrido de la persona: llega con dudas (Dudas), entiende qué
// es esto (QuéEs), verifica quién enseña (Instructor), ve el contenido real
// (Plataforma / EnVivo / Comunidad), lo resume (Incluye), se autoevalúa
// (ParaQuien) y recién ahí ve el precio. Mover una sección cambia la narrativa.
export default function MentoriaLanding() {
  return (
    <>
      <MentoriaPixelTracker />
      <main className="min-h-screen overflow-x-hidden">
        <MentoriaHero />
        <MentoriaDudas />
        <MentoriaQueEs />
        <Instructor />
        <MentoriaPlataforma />
        <MentoriaEnVivo />
        <MentoriaComunidad />
        <MentoriaIncluye />
        <MentoriaParaQuien />
        <MentoriaPrecio />
        <MentoriaFAQ />
        <MentoriaFinalCTA />
        <Footer
          isOnline={true}
          hideEventBox={true}
          waText={WA_MESSAGE}
          customNavLinks={[
            { href: "#que-es", label: "Qué es la mentoría" },
            { href: "#plataforma", label: "La plataforma" },
            { href: "#en-vivo", label: "Clases en vivo" },
            { href: "#incluye", label: "Qué incluye" },
            { href: "#precios", label: "Inversión" },
            { href: "#faq", label: "FAQ" },
          ]}
        />
        <WhatsAppButton message={WA_MESSAGE} />
        <MentoriaStickyCTA />
      </main>
    </>
  );
}
