import type { Metadata } from "next";
import MentoriaLanding from "@/components/sections/mentoria/MentoriaLanding";

export const metadata: Metadata = {
  title: "Mentoría Hipnomente | Formación de un año en hipnosis aplicada",
  description:
    "Un año de formación en hipnosis clínica: plataforma con +250 horas, clases en vivo los lunes, bitácoras los miércoles con el Dr. Juan Roberto y comunidad privada de mentorados de +12 países.",
  keywords: [
    "mentoría hipnosis",
    "formación hipnosis clínica",
    "curso hipnosis terapéutica",
    "hipnoterapia profesional",
    "hipnomente mentoría",
    "certificación hipnosis",
  ],
  alternates: {
    canonical: "https://hipnomente.com/mentoria",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://hipnomente.com/mentoria",
    siteName: "Hipnomente",
    title: "Mentoría Hipnomente — Un año formándote en hipnosis aplicada",
    description:
      "Plataforma completa de formación, clases en vivo cada semana y una comunidad de profesionales de más de 12 países. Precio de lanzamiento por tiempo limitado.",
    images: [{ url: "/logo.webp", alt: "Mentoría Hipnomente" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoría Hipnomente — Formación de un año en hipnosis",
    description:
      "Plataforma con +250 horas, clases en vivo cada semana y comunidad de +12 países.",
    images: ["/logo.webp"],
  },
};

export default function MentoriaPage() {
  return <MentoriaLanding />;
}
