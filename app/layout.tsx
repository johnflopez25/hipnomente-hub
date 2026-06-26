import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import BfcacheHandler from "@/components/ui/BfcacheHandler";
import MetaPixel from "@/components/ui/MetaPixel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hipnomente.com"),
  title: "Hipnomente | Aprende a Hipnotizar en Bogotá — 13 de Junio",
  description:
    "Entrenamiento 100% práctico de hipnosis en Bogotá. Aprende a hipnotizar desde cero en un solo día. Cupos limitados · Sábado 13 de Junio · Hotel B3 Bogotá.",
  keywords: [
    "aprender hipnosis bogotá",
    "taller hipnosis colombia",
    "hipnosis práctica",
    "curso hipnosis profesional",
    "hipnomente evento",
    "entrenamiento hipnosis junio",
  ],
  authors: [{ name: "Hipnomente" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://hipnomente.com",
    siteName: "Hipnomente",
    title: "Aprende a Hipnotizar en Un Solo Día — Bogotá, 13 Junio",
    description:
      "Entrenamiento 100% práctico de hipnosis. No necesitas experiencia. Sábado 13 de Junio · Hotel B3 Bogotá. Cupos muy limitados.",
    images: [
      {
        url: "/logo.webp",
        alt: "Hipnomente — Taller de Hipnosis Bogotá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprende a Hipnotizar en Un Solo Día — Bogotá",
    description:
      "Entrenamiento 100% práctico de hipnosis. Sábado 13 de Junio · Hotel B3 Bogotá.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hipnomente.com",
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/logo.webp" type="image/webp" />
        <meta name="theme-color" content="#0d0b1e" />
      </head>
      <body
        className={`${inter.variable} ${raleway.variable} antialiased`}
      >
        <BfcacheHandler />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
