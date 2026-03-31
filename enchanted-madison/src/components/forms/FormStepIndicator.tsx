"use client";

import { motion } from "framer-motion";

interface FormStepIndicatorProps {
  steps: readonly string[];
  currentStep: number; // 1-indexed
  completedSteps: Set<number>;
}

export function FormStepIndicator({ steps, currentStep, completedSteps }: FormStepIndicatorProps) {
  return (
    <div className="flex items-start justify-between mb-8">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isCompleted = completedSteps.has(stepNum);
        const isActive = currentStep === stepNum;
        const isLast = index === steps.length - 1;

        return (
          <div key={stepNum} className="flex items-start flex-1">
            {/* Circle + label */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                  background: isCompleted ? "var(--primary)" : "transparent",
                  border: isCompleted
                    ? "2px solid var(--primary)"
                    : isActive
                    ? "2px solid var(--accent)"
                    : "2px solid var(--primary-muted)",
                  color: isCompleted
                    ? "var(--text-on-dark)"
                    : isActive
                    ? "var(--accent)"
                    : "var(--text-muted)",
                }}
              >
                {isCompleted ? "✓" : String(stepNum).padStart(2, "0")}
              </div>
              <span
                className="hidden sm:block text-xs text-center"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                  color: isActive ? "var(--text-primary)" : isCompleted ? "var(--primary)" : "var(--text-muted)",
                  fontSize: "10px",
                }}
              >
                {label}
              </span>
            </div>

            {/* Connecting line (not after last step) */}
            {!isLast && (
              <div className="flex-1 h-px mt-4 mx-2 relative" style={{ background: "var(--primary-muted)" }}>
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{ background: "var(--accent)" }}
                  initial={{ width: 0 }}
                  animate={{ width: isCompleted ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
