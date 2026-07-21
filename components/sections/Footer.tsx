"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"/>
  </svg>
);

const navLinks = [
  { href: "#que-aprenderas", label: "Qué aprenderás" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#detalles-evento", label: "El Evento" },
  { href: "#faq", label: "FAQ" },
];

const socials = [
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/drjuanroberto/",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/juan.roberto.rodriguez.gonzalez.2025?locale=es_LA",
    label: "Facebook",
    color: "hover:text-blue-400",
  },
  {
    Icon: YoutubeIcon,
    href: "https://www.youtube.com/@hipnomente1",
    label: "YouTube",
    color: "hover:text-red-400",
  },
];

interface FooterProps {
  simplified?: boolean;
  isOnline?: boolean;
  eventDateText?: string;
  eventLocationText?: string;
  hideEventBox?: boolean;
  waText?: string;
  customNavLinks?: { href: string; label: string }[];
}

const defaultNavLinks = [
  { href: "#que-aprenderas", label: "Qué aprenderás" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#detalles-evento", label: "El Evento" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer({
  simplified = false,
  isOnline = false,
  eventDateText = "Sábado 13 de Junio · 8:00 a.m.",
  eventLocationText = "Hotel B3 Virrey · Bogotá, Colombia",
  hideEventBox = false,
  waText = "quiero inscribirme al workshop en bogota",
  customNavLinks,
}: FooterProps) {
  const activeNavLinks = customNavLinks || defaultNavLinks;

  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/50 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className={`grid grid-cols-1 ${simplified ? "md:grid-cols-2 max-w-4xl" : "md:grid-cols-3"} gap-12 mb-12`}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img
                src="/logo.webp"
                alt="Hipnomente Logo"
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400/60 text-sm leading-relaxed mb-6">
              Transformamos personas comunes en practicantes de hipnosis a través
              de talleres 100% prácticos. Tu capacidad de influir y sanar empieza
              aquí.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 card-glass glow-border rounded-lg flex items-center justify-center text-slate-400 ${s.color} transition-colors duration-200 cursor-pointer`}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          {!simplified && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Navegación
              </h3>
              <ul className="space-y-2">
                {activeNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400/60 hover:text-sky-300 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contáctanos
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@hipnomente.com"
                className="flex items-center gap-2 text-slate-400/60 hover:text-sky-300 text-sm transition-colors duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                info@hipnomente.com
              </a>
              <a
                href={`https://wa.me/573108574778?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400/60 hover:text-sky-300 text-sm transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                +57 310 857 4778
              </a>
            </div>

            {!hideEventBox && (
              <div className="mt-6 card-glass glow-border rounded-xl p-4">
                <p className="text-slate-300/80 text-xs leading-relaxed">
                  {isOnline ? "💻" : "📍"} <strong className="text-white">{isOnline ? "Evento online" : "Evento presencial"}</strong>
                  <br />
                  {eventLocationText}
                  <br />
                  {eventDateText}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500/40"
        >
          <p>© 2026 Hipnomente. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-300 transition-colors cursor-pointer">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-sky-300 transition-colors cursor-pointer">
              Términos y condiciones
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
