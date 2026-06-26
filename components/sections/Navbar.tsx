"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#que-aprenderas", label: "Programa" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#detalles-evento", label: "Evento" },
  { href: "#faq", label: "FAQ" },
];

interface NavbarProps {
  simplified?: boolean;
}

export default function Navbar({ simplified = false }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-4 left-4 right-4 z-50 bg-transparent rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center cursor-pointer"
          aria-label="Hipnomente inicio"
        >
          <img
            src="/logo.webp"
            alt="Hipnomente Logo"
            className="h-14 md:h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        {!simplified && (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant="gold"
            size="sm"
            href="https://pay.hotmart.com/T106206891Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar cupo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        {!simplified && (
          <button
            id="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="md:hidden w-9 h-9 card-glass rounded-lg flex items-center justify-center text-slate-400 cursor-pointer"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden card-glass border-t border-white/8 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  fullWidth
                  href="https://pay.hotmart.com/T106206891Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Reservar cupo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
