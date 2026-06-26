"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Quote, Star, Play, ZoomIn, X, MessageSquare, Video } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const videoTestimonials = [
  { id: "FvSQtnuIXog", label: "Testimonio Alumno 1" },
  { id: "3zmd3F0gkAo", label: "Testimonio Alumno 2" },
  { id: "lswQSj38sFg", label: "Testimonio Alumno 3" },
  { id: "oEJTK2c6xMo", label: "Testimonio Alumno 4" },
  { id: "NKNqVjE0Lm4", label: "Testimonio Alumno 5" },
];

const screenshotImages = [
  { src: "/testimonio1.jpeg", label: "Opinión Escrita 1" },
  { src: "/testimonio2.jpeg", label: "Opinión Escrita 2" },
  { src: "/testimonio3.jpeg", label: "Opinión Escrita 3" },
  { src: "/testimonio4.jpeg", label: "Opinión Escrita 4" },
  { src: "/testimonio5.jpeg", label: "Opinión Escrita 5" },
  { src: "/testimonio6.jpeg", label: "Opinión Escrita 6" },
  { src: "/testimonio7.jpeg", label: "Opinión Escrita 7" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState<"video" | "images">("video");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <SectionWrapper id="testimonios" className="relative px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,78,110,0.10)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3"
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
            Personas como tú que decidieron dar el paso y transformar su vida y su carrera con la hipnosis.
          </motion.p>
        </div>

        {/* Tabs Selector */}
        <div className="flex justify-center gap-2 mb-12 max-w-full">
          {[
            { id: "video", label: "Testimonios en Video", icon: Video },
            { id: "images", label: "Opiniones Escritas", icon: MessageSquare },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer border ${
                activeTab === tab.id
                  ? "gradient-brand text-white shadow-lg shadow-violet-500/20 border-violet-500"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border-white/5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {videoTestimonials.map((v) => (
                <div
                  key={v.id}
                  onClick={() => setActiveVideo(v.id)}
                  className="aspect-[9/16] rounded-2xl overflow-hidden relative cursor-pointer group bg-slate-900 border border-white/10 glow-border hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.label}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-violet-600/80 group-hover:bg-violet-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-xs font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md rounded-full py-1.5 px-3 inline-block">
                      Ver Video
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "images" && (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]"
            >
              {screenshotImages.map((img, index) => (
                <div
                  key={img.src}
                  onClick={() => setActiveImage(img.src)}
                  className="break-inside-avoid mb-6 card-glass glow-border rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden">
                    {/* Placeholder content if image fails or before uploading */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-slate-400 bg-slate-900/40">
                      <MessageSquare className="w-8 h-8 text-sky-400 mb-2 opacity-60" />
                      <p className="text-xs font-semibold text-slate-300">Reseña de Chat</p>
                      <p className="text-[10px] text-slate-500 mt-1">Sube {img.src.substring(1)} a /public</p>
                    </div>
                    {/* Testimonial Image */}
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-auto relative z-10 opacity-95 group-hover:scale-[1.03] transition-transform duration-300"
                      onError={(e) => {
                        // Hide broken image icon, fallback to placeholder
                        e.currentTarget.style.display = 'none';
                      }}
                      loading="lazy"
                    />
                    {/* Zoom icon overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-violet-600/80 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-sm aspect-[9/16] bg-slate-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 transition-colors cursor-pointer"
                  aria-label="Cerrar video"
                >
                  <X className="w-5 h-5" />
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Testimonio de YouTube Shorts"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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

