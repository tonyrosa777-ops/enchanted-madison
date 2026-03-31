"use client";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    `${prefix}${v.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (inView) {
      animate(count, end, { duration, ease: "easeOut" });
    }
  }, [inView, end, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
