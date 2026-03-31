"use client";
import { motion } from "framer-motion";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  interval?: number;
}

export function ShimmerText({ children, className, style, delay = 1, interval = 8 }: ShimmerTextProps) {
  return (
    <span className={`relative inline-block overflow-hidden ${className ?? ""}`} style={style}>
      {children}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 25%, rgba(184,150,90,0.45) 50%, transparent 75%)",
          x: "-200%",
        }}
        animate={{ x: ["-200%", "250%"] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: interval - 1.8,
          delay,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </span>
  );
}
