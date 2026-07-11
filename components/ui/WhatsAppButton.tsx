"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { trackContact } from "@/lib/meta-pixel";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "¡Hola! Quiero inscribirme al Workshop de Hipnosis en Bogotá.",
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds to capture attention without being aggressive
    const timer = setTimeout(() => {
      // Only show if not manually closed in this session
      const isClosed = sessionStorage.getItem("wa_tooltip_closed");
      if (!isClosed) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    sessionStorage.setItem("wa_tooltip_closed", "true");
  };

  const whatsappNumber = "573108574778";
  const whatsappMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
      {/* Tooltip Message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl shadow-black/40 hover:bg-slate-800/95 transition-all duration-200 cursor-pointer group"
            onClick={() => trackContact()}
          >
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest leading-none mb-1">
                ¿Tienes dudas?
              </span>
              <span className="text-white text-xs font-semibold leading-normal pr-4 group-hover:text-emerald-300 transition-colors">
                Escríbenos por WhatsApp
              </span>
            </div>

            {/* Close Tooltip Button */}
            <button
              onClick={closeTooltip}
              className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Pulsing Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto relative w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow duration-350 cursor-pointer group overflow-hidden"
        aria-label="Chatea con nosotros por WhatsApp"
        onClick={() => trackContact()}
      >
        {/* Glow pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 relative z-10 filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.12 .94 11.487.94c-5.442 0-9.866 4.372-9.87 9.802 0 1.972.527 3.89 1.524 5.607L2.093 20.8l4.554-1.646zM17.43 14.94c-.29-.146-1.72-.849-1.986-.946-.266-.097-.461-.146-.656.146-.195.29-.757.946-.928 1.14-.17.195-.341.219-.631.073-.29-.146-1.226-.452-2.336-1.442-.864-.77-1.448-1.72-1.618-2.012-.17-.292-.018-.45.127-.594.13-.13.29-.34.436-.51.145-.17.195-.29.292-.485.097-.194.048-.364-.025-.51-.073-.146-.656-1.576-.898-2.16-.236-.569-.475-.491-.656-.5l-.56-.01c-.195 0-.514.073-.78.364-.266.29-1.02 1.019-1.02 2.484 0 1.465 1.07 2.879 1.216 3.072.146.194 2.1 3.21 5.1 4.51.714.31 1.27.494 1.7.632.716.227 1.37.195 1.88.119.57-.085 1.72-.703 1.96-1.382.24-.679.24-1.262.17-1.382-.07-.12-.26-.19-.55-.337z" />
        </svg>
      </motion.a>
    </div>
  );
}
