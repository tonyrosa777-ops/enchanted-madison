"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  type?: "words" | "chars";
  stagger?: number;
  delay?: number;
  className?: string;
  elementClassName?: string;
}

export function RevealText({
  text,
  type = "words",
  stagger = 0.06,
  delay = 0,
  className,
  elementClassName,
}: RevealTextProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const units = type === "words" ? text.split(" ") : text.split("");
  const separator = type === "words" ? " " : "";

  return (
    <span ref={ref} className={`inline ${className ?? ""}`} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + i * stagger, ease: "easeOut" }}
          className={`inline-block ${elementClassName ?? ""}`}
          aria-hidden="true"
        >
          {unit}
          {i < units.length - 1 ? separator : ""}
        </motion.span>
      ))}
    </span>
  );
}
