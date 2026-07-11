"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ZoomIn, X, MessageSquare } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const screenshotImages = [
  { src: "/testimonio1.jpeg", label: "Opinión Escrita 1" },
  { src: "/testimonio2.jpeg", label: "Opinión Escrita 2" },
  { src: "/testimonio3.jpeg", label: "Opinión Escrita 3" },
  { src: "/testimonio4.jpeg", label: "Opinión Escrita 4" },
  { src: "/testimonio5.jpeg", label: "Opinión Escrita 5" },
  { src: "/testimonio6.jpeg", label: "Opinión Escrita 6" },
  { src: "/testimonio7.jpeg", label: "Opinión Escrita 7" },
];

export default function DesafioTestimonios() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <SectionWrapper id="testimonios" className="relative px-4 bg-[#060810]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,196,176,0.08)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Testimonios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ellos ya lo lograron
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg max-w-xl mx-auto"
          >
            Personas como tú que decidieron dar el paso y aprendieron a hipnotizar.
          </motion.p>
        </div>

        {/* Masonry grid — written testimonials only */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]"
        >
          {screenshotImages.map((img) => (
            <div
              key={img.src}
              onClick={() => setActiveImage(img.src)}
              className="break-inside-avoid mb-6 card-glass glow-border rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-slate-400 bg-slate-900/40">
                  <MessageSquare className="w-8 h-8 text-[#22C4B0] mb-2 opacity-60" />
                  <p className="text-xs font-semibold text-slate-300">Reseña de Chat</p>
                </div>
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-auto relative z-10 opacity-95 group-hover:scale-[1.03] transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  loading="lazy"
                />
                {/* Zoom overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#5B3FE0]/80 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Image Lightbox Modal */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 transition-colors cursor-pointer"
                  aria-label="Cerrar imagen"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={activeImage}
                  alt="Testimonio ampliado"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
