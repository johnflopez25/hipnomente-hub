"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { trackInitiateCheckout } from "@/lib/meta-pixel";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "trance";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  trackValue?: number;
  trackCurrency?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "gradient-brand text-white shadow-lg shadow-black/30 hover:brightness-110 hover:scale-[1.02]",
  secondary:
    "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-[1.02]",
  outline:
    "bg-transparent border-2 border-sky-400/60 text-sky-300 hover:bg-sky-500/10 hover:scale-[1.02]",
  gold:
    "bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 font-bold shadow-lg shadow-amber-900/30 hover:brightness-105 hover:scale-[1.02]",
  trance:
    "bg-transparent border-2 border-[#22C4B0]/50 text-[#8fe6da] hover:bg-[#22C4B0]/10 hover:border-[#22C4B0]/80 hover:scale-[1.02]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  href,
  target,
  rel,
  trackValue,
  trackCurrency,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-center gap-2 rounded-full font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    const isHotmart = href.includes("hotmart.com");

    const handleClick = () => {
      if (isHotmart) {
        trackInitiateCheckout(trackValue, trackCurrency);
      }
    };

    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.95 }}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileTap={{ scale: 0.95 }} {...(props as any)}>
      {children}
    </motion.button>
  );
}

