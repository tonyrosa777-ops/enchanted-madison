"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";

type FinderAnswers = {
  q1: string | null;
  q2: string | null;
  q3: string | null;
};

type ResultKey = keyof typeof siteData.experienceFinder.results;

type FinderState = "idle" | "q1" | "q2" | "q3" | "result";

const ef = siteData.experienceFinder;

function getRecommendation(answers: FinderAnswers): ResultKey {
  const { q1, q2, q3 } = answers;

  if (q1 === "romantic-evening") return "date-night";
  if (q1 === "planning-to-propose") return "proposals";
  if (q1 === "just-exploring") return "stays-overview";

  // q1 === "need-a-getaway"
  if (q2 === "few-hours-tonight") return "date-night";

  if (q2 === "one-perfect-night") {
    if (q3 === "out-in-nature" || q3 === "total-privacy") return "velvet-buck";
    return "enchanted-cottage";
  }

  // two-or-more-nights
  if (q3 === "out-in-nature" || q3 === "total-privacy") return "velvet-buck";
  return "cottage-extended";
}

function AnswerCard({
  option,
  isSelected,
  onClick,
}: {
  option: { value: string; label: string; detail: string };
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-start gap-3 p-4 rounded-xl text-left w-full transition-all duration-150"
      style={{
        background: isSelected ? "var(--primary)" : "var(--bg-card)",
        border: `1px solid ${isSelected ? "var(--primary)" : "var(--primary-muted)"}`,
        color: isSelected ? "var(--text-on-dark)" : "var(--text-primary)",
      }}
    >
      <span className="mt-0.5 text-sm flex-shrink-0" style={{ color: "var(--accent)" }}>✦</span>
      <span className="flex flex-col gap-0.5">
        <span className="text-base font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          {option.label}
        </span>
        <span className="text-sm leading-tight" style={{ fontFamily: "var(--font-body)", opacity: isSelected ? 0.75 : 0.6 }}>
          {option.detail}
        </span>
      </span>
    </button>
  );
}

export function ExperienceFinderSection() {
  const [finderState, setFinderState] = useState<FinderState>("idle");
  const [answers, setAnswers] = useState<FinderAnswers>({ q1: null, q2: null, q3: null });

  function handleAnswer(questionId: string, value: string) {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Auto-advance after 180ms for visual feedback
    setTimeout(() => {
      if (questionId === "q1") {
        // Some q1 answers skip q2/q3
        if (value === "romantic-evening" || value === "planning-to-propose" || value === "just-exploring") {
          setFinderState("result");
        } else {
          setFinderState("q2");
        }
      } else if (questionId === "q2") {
        if (value === "few-hours-tonight") {
          setFinderState("result");
        } else {
          setFinderState("q3");
        }
      } else if (questionId === "q3") {
        setFinderState("result");
      }
    }, 180);
  }

  function reset() {
    setAnswers({ q1: null, q2: null, q3: null });
    setFinderState("q1");
  }

  const questions = ef.questions;
  const currentQ =
    finderState === "q1" ? questions[0]
    : finderState === "q2" ? questions[1]
    : finderState === "q3" ? questions[2]
    : null;

  const resultKey = finderState === "result" ? getRecommendation(answers) : null;
  const result = resultKey ? ef.results[resultKey] : null;

  return (
    <section
      id="find-your-escape"
      className="py-16 lg:py-20 px-4"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="eyebrow text-center mb-2" style={{ color: "var(--accent)" }}>
            {ef.section.eyebrow}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {ef.section.heading}
          </h2>
          <p
            className="text-center mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            {ef.section.subheading}
          </p>
        </FadeUp>

        <AnimatePresence mode="wait">
          {/* ── Idle ── */}
          {finderState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <Button variant="primary" size="lg" onClick={() => setFinderState("q1")}>
                {ef.section.startCta}
              </Button>
            </motion.div>
          )}

          {/* ── Questions ── */}
          {currentQ && (
            <motion.div
              key={finderState}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <p
                className="text-center text-lg sm:text-xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {currentQ.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => (
                  <AnswerCard
                    key={opt.value}
                    option={opt}
                    isSelected={answers[currentQ.id as keyof FinderAnswers] === opt.value}
                    onClick={() => handleAnswer(currentQ.id, opt.value)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Result ── */}
          {finderState === "result" && result && (
            <motion.div
              key="result"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl p-6 sm:p-8 text-center"
              style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)", boxShadow: "0 12px 40px rgba(26,42,30,0.08)" }}
            >
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>{result.eyebrow}</p>
              <h3
                className="text-xl sm:text-2xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
              >
                {result.headline}
              </h3>
              <p
                className="mb-3 leading-relaxed max-w-md mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                {result.description}
              </p>
              <p
                className="text-sm font-bold mb-6"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--accent)" }}
              >
                {result.price}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="primary" href={result.cta.href}>{result.cta.label}</Button>
                <button
                  onClick={reset}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--text-secondary)" }}
                >
                  Start over &rarr;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
