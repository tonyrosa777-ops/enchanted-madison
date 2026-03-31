"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";

// ─── Types ────────────────────────────────────────────────────────────────────
type Answers = Record<string, string>;
type Step = "q0" | "q1" | "q2" | "q3" | "contact" | "success";
type ResultKey = keyof typeof siteData.experienceFinder.results;

const fye = siteData.findYourEscape;
const results = siteData.experienceFinder.results;

const STEPS: Step[] = ["q0", "q1", "q2", "q3", "contact", "success"];
const PROGRESS_STEPS = 5; // q0-q3 + contact

function stepIndex(step: Step): number {
  return STEPS.indexOf(step);
}

// ─── Result routing ────────────────────────────────────────────────────────────
function getResult(answers: Answers): ResultKey {
  if (answers.occasion === "proposal") return "proposals";
  if (answers.experience === "evening") return "date-night";
  if (answers.experience === "few-nights") return "cottage-extended";
  if (answers.priority === "nature" || answers.priority === "privacy") return "velvet-buck";
  if (answers.experience === "one-night") return "enchanted-cottage";
  return "stays-overview";
}

// ─── Slide variants ────────────────────────────────────────────────────────────
const variants = {
  enter: (dir: number) => ({ x: dir * 48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.28, ease: "easeOut" as const } },
  exit: (dir: number) => ({ x: dir * -48, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } }),
};

// ─── Answer option card ────────────────────────────────────────────────────────
function OptionCard({
  option, selected, onClick,
}: {
  option: { value: string; label: string; detail: string };
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className="flex items-start gap-3 p-4 rounded-xl text-left w-full transition-all duration-200"
      style={{
        background: selected ? "rgba(254,252,250,0.14)" : "rgba(254,252,250,0.05)",
        border: `1.5px solid ${selected ? "var(--accent)" : "rgba(254,252,250,0.12)"}`,
        color: "var(--text-on-dark)",
      }}
    >
      <span
        className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
        style={{
          background: selected ? "var(--accent)" : "transparent",
          border: `1.5px solid ${selected ? "var(--accent)" : "rgba(254,252,250,0.25)"}`,
          transition: "all 0.2s",
          fontSize: "10px",
          color: "var(--bg-dark)",
          fontWeight: 700,
        }}
      >
        {selected ? "✓" : ""}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-base font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          {option.label}
        </span>
        <span className="text-sm leading-tight opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          {option.detail}
        </span>
      </span>
    </motion.button>
  );
}

// ─── Main Wizard ───────────────────────────────────────────────────────────────
export function FindYourEscapeWizard() {
  const [step, setStep] = useState<Step>("q0");
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const resultKey = getResult(answers);
  const result = results[resultKey];

  function advance(to: Step) {
    setDirection(1);
    setStep(to);
  }

  function handleAnswer(questionId: string, value: string) {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);
    setTimeout(() => {
      const idx = stepIndex(step);
      const nextStep = STEPS[idx + 1] as Step;
      advance(nextStep);
    }, 200);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setEmailError("Please enter a valid email."); return; }
    setEmailError("");
    setSubmitting(true);
    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note, answers, recommendation: resultKey }),
      });
    } catch {
      // Graceful degradation — show result regardless
    }
    advance("success");
    setSubmitting(false);
  }

  const currentIdx = stepIndex(step);
  const progressPct = step === "success" ? 100 : Math.round((currentIdx / PROGRESS_STEPS) * 100);

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto px-4">

      {/* Progress bar */}
      {step !== "success" && (
        <div className="mb-10">
          <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(254,252,250,0.1)" }}>
            <motion.div
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.3)", letterSpacing: "0.08em" }}>
              {step === "contact" ? "Last step" : `Step ${currentIdx + 1} of ${PROGRESS_STEPS}`}
            </span>
            <span className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.3)", letterSpacing: "0.08em" }}>
              {progressPct}%
            </span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        {/* ── Questions q0–q3 ── */}
        {(["q0", "q1", "q2", "q3"] as const).map((q, qi) =>
          step === q ? (
            <motion.div
              key={q}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <p
                className="text-center mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                  color: "var(--text-on-dark)",
                  lineHeight: 1.25,
                }}
              >
                {fye.steps[qi].question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fye.steps[qi].options.map((opt) => (
                  <OptionCard
                    key={opt.value}
                    option={opt}
                    selected={answers[fye.steps[qi].id] === opt.value}
                    onClick={() => handleAnswer(fye.steps[qi].id, opt.value)}
                  />
                ))}
              </div>
            </motion.div>
          ) : null
        )}

        {/* ── Contact step ── */}
        {step === "contact" && (
          <motion.div
            key="contact"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <p
              className="text-center mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.3rem, 3vw, 1.85rem)",
                color: "var(--text-on-dark)",
                lineHeight: 1.25,
              }}
            >
              {fye.contactStep.question}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder={fye.contactStep.namePlaceholder}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "rgba(254,252,250,0.06)",
                      border: "1.5px solid rgba(254,252,250,0.15)",
                      color: "var(--text-on-dark)",
                      fontFamily: "var(--font-body)",
                    }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(254,252,250,0.15)")}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={fye.contactStep.emailPlaceholder}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "rgba(254,252,250,0.06)",
                      border: `1.5px solid ${emailError ? "var(--accent-rose)" : "rgba(254,252,250,0.15)"}`,
                      color: "var(--text-on-dark)",
                      fontFamily: "var(--font-body)",
                    }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = emailError ? "var(--accent-rose)" : "rgba(254,252,250,0.15)")}
                  />
                  {emailError && (
                    <p className="mt-1 text-xs" style={{ color: "var(--accent-rose)", fontFamily: "var(--font-mono)" }}>
                      {emailError}
                    </p>
                  )}
                </div>
              </div>

              {/* Note */}
              <textarea
                placeholder={fye.contactStep.notePlaceholder}
                value={note}
                onChange={e => setNote(e.target.value)}
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none transition-all"
                style={{
                  background: "rgba(254,252,250,0.06)",
                  border: "1.5px solid rgba(254,252,250,0.15)",
                  color: "var(--text-on-dark)",
                  fontFamily: "var(--font-body)",
                }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "rgba(254,252,250,0.15)")}
              />

              <motion.button
                type="submit"
                disabled={submitting || !name || !email}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-full text-sm font-bold transition-all"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: submitting || !name || !email ? "rgba(254,252,250,0.08)" : "var(--accent)",
                  color: submitting || !name || !email ? "rgba(254,252,250,0.3)" : "var(--bg-dark)",
                  cursor: submitting || !name || !email ? "default" : "pointer",
                }}
              >
                {submitting ? "Sending…" : fye.contactStep.submitLabel}
              </motion.button>

              <p className="text-center text-xs" style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.3)" }}>
                No spam. One personalized note from Angela. That&rsquo;s it.
              </p>
            </form>
          </motion.div>
        )}

        {/* ── Success / Result ── */}
        {step === "success" && (
          <motion.div
            key="success"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            {/* Glow icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--accent)", color: "var(--bg-dark)", fontSize: "1.5rem" }}
            >
              ✦
            </div>

            <p className="eyebrow mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {fye.success.eyebrow}
            </p>
            <h2
              className="mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text-on-dark)", lineHeight: 1.15 }}
            >
              {fye.success.heading}
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)", lineHeight: 1.6 }}>
              {fye.success.body}
            </p>

            {/* Recommendation card */}
            <div
              className="rounded-2xl p-6 mb-8 text-left"
              style={{ background: "rgba(254,252,250,0.07)", border: "1px solid rgba(254,252,250,0.12)" }}
            >
              <p className="mb-1 text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                {result.eyebrow}
              </p>
              <h3 className="mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", color: "var(--text-on-dark)" }}>
                {result.headline}
              </h3>
              <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}>
                {result.description}
              </p>
              <p className="text-sm font-bold" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--accent)" }}>
                {result.price}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" href={result.cta.href}>
                {result.cta.label}
              </Button>
              <Button variant="ghost-light" size="lg" href={fye.success.callHref}>
                {fye.success.callLabel}
              </Button>
            </div>

            <button
              onClick={() => { setStep("q0"); setAnswers({}); setName(""); setEmail(""); setNote(""); }}
              className="mt-6 text-xs transition-opacity hover:opacity-60"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "rgba(254,252,250,0.35)" }}
            >
              Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
