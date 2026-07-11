import type { Metadata } from "next";
import Instructor from "@/components/sections/Instructor";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import DesafioHero from "@/components/sections/desafio/DesafioHero";
import DesafioPorQue from "@/components/sections/desafio/DesafioPorQue";
import DesafioAprenderas from "@/components/sections/desafio/DesafioAprenderas";
import DesafioRevolucion from "@/components/sections/desafio/DesafioRevolucion";
import DesafioObstaculos from "@/components/sections/desafio/DesafioObstaculos";
import DesafioTestimonios from "@/components/sections/desafio/DesafioTestimonios";
import DesafioPricing from "@/components/sections/desafio/DesafioPricing";
import DesafioFAQ from "@/components/sections/desafio/DesafioFAQ";
import DesafioFinalCTA from "@/components/sections/desafio/DesafioFinalCTA";

export const metadata: Metadata = {
  title: "Desafío: Aprende a Hipnotizar en 7 Días | Hipnomente",
  description:
    "Entrenamiento intensivo online. Aprende a hipnotizar desde cero en 7 días con sesiones diarias en vivo por Zoom. Guiado por Juan Roberto Rodríguez, psicólogo e hipnoterapeuta con más de 20 años de experiencia.",
  openGraph: {
    title: "Desafío: Aprende a Hipnotizar en 7 Días",
    description:
      "7 días de práctica guiada para aprender a hipnotizar desde cero. Online, en vivo, 27 de julio de 2026.",
    type: "website",
  },
};

export default function DesafioHipnotizarPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <DesafioHero />
      <DesafioPorQue />
      <DesafioAprenderas />
      <DesafioRevolucion />
      <DesafioObstaculos />
      <DesafioTestimonios />
      <Instructor />
      <DesafioPricing />
      <DesafioFAQ />
      <DesafioFinalCTA />
      <Footer
        isOnline={true}
        eventDateText="Del 27 de julio al 2 de agosto · 7:00 p.m."
        eventLocationText="Transmisión en Vivo por Zoom"
        waText="Hola, me gustaría recibir más información sobre el desafío de 7 días"
        customNavLinks={[
          { href: "#por-que", label: "¿Por qué?" },
          { href: "#aprenderas", label: "Qué aprenderás" },
          { href: "#testimonios", label: "Testimonios" },
          { href: "#precios", label: "Precios" },
          { href: "#faq", label: "FAQ" },
        ]}
      />
      <WhatsAppButton />
    </main>
  );
}
