"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  threshold = 0.1,
  className,
}: StaggerContainerProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
