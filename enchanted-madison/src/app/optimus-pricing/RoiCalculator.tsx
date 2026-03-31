"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Animated number hook (requestAnimationFrame, cubic ease-out) ─────────────
function useCountUp(target: number, duration = 650) {
  const [value, setValue] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = prevRef.current;
    if (from === target) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const t = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // quartic ease-out — faster at start, snappy at end
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else prevRef.current = target;
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return value;
}

// ─── Formatters ───────────────────────────────────────────────────────────────
const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label, rawValue, display, note, accent,
}: {
  label: string; rawValue: number; display: string; note: string; accent?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-1 overflow-hidden relative"
      style={{
        background: accent ? "var(--primary)" : "var(--bg-elevated)",
        border: accent ? "none" : "1px solid var(--primary-muted)",
      }}
    >
      {/* Animated number — re-keys on rawValue to trigger entry pop */}
      <AnimatePresence mode="popLayout">
        <motion.p
          key={rawValue}
          initial={{ y: -14, opacity: 0, scale: 1.08 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl font-bold leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: accent ? "var(--text-on-dark)" : "var(--primary)",
          }}
        >
          {display}
        </motion.p>
      </AnimatePresence>
      <p className="text-xs font-semibold" style={{ fontFamily: "var(--font-body)", color: accent ? "rgba(254,252,250,0.8)" : "var(--text-primary)" }}>
        {label}
      </p>
      <p className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: accent ? "rgba(254,252,250,0.5)" : "var(--text-muted)", letterSpacing: "0.04em" }}>
        {note}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function RoiCalculator() {
  const [bookings, setBookings] = useState(8);
  const [avgValue, setAvgValue] = useState(350);
  const [tier, setTier] = useState<"starter" | "pro" | "premium">("pro");

  const tierCost = { starter: 1500, pro: 3000, premium: 5500 };
  const lift = { starter: 0.18, pro: 0.32, premium: 0.45 };

  const cost = tierCost[tier];
  const currentMonthly = bookings * avgValue;
  const currentAnnual = currentMonthly * 12;
  const extraBookingsMonth = Math.round(bookings * lift[tier]);
  const extraBookingsYear = extraBookingsMonth * 12;
  const liftMonthly = extraBookingsMonth * avgValue;
  const liftAnnual = liftMonthly * 12;
  const projectedAnnual = currentAnnual + liftAnnual;
  const roiMonths = Math.max(1, Math.round(cost / (liftMonthly || 1)));
  const roiPct = Math.round((liftAnnual / cost) * 100);

  // Animated values
  const animROI = useCountUp(roiPct, 750);
  const animLiftAnnual = useCountUp(liftAnnual, 700);
  const animProjected = useCountUp(projectedAnnual, 700);
  const animExtraYear = useCountUp(extraBookingsYear, 600);
  const animCurrent = useCountUp(currentAnnual, 600);

  // Payback bar: fill % out of 12 months (cap at 12)
  const paybackFill = Math.max(0, Math.min(12, roiMonths));
  // ROI progress bar (cap visual at 600%)
  const roiBarPct = Math.min(roiPct / 600, 1) * 100;

  // Tier display label
  const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
    >
      {/* Header + inputs */}
      <div className="p-8 lg:p-10" style={{ borderBottom: "1px solid var(--primary-muted)" }}>
        <p className="mb-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
          ROI Calculator
        </p>
        <h3 className="mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", color: "var(--text-primary)" }}>
          Estimate Your Return
        </h3>
        <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
          A professional conversion-optimized website drives 18–45% more direct bookings by eliminating OTA dependency and building trust at the moment of intent.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Bookings slider */}
          <div>
            <label className="block mb-3 text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
              Monthly bookings
            </label>
            <input type="range" min={1} max={30} value={bookings}
              onChange={e => setBookings(Number(e.target.value))}
              className="w-full mb-1" style={{ accentColor: "var(--primary)" }} />
            <div className="flex justify-between text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              <span>1</span>
              <span className="font-bold text-sm" style={{ color: "var(--primary)", fontFamily: "var(--font-display)" }}>{bookings}</span>
              <span>30</span>
            </div>
          </div>

          {/* Avg value slider */}
          <div>
            <label className="block mb-3 text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
              Avg booking value
            </label>
            <input type="range" min={100} max={1500} step={50} value={avgValue}
              onChange={e => setAvgValue(Number(e.target.value))}
              className="w-full mb-1" style={{ accentColor: "var(--primary)" }} />
            <div className="flex justify-between text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              <span>$100</span>
              <span className="font-bold text-sm" style={{ color: "var(--primary)", fontFamily: "var(--font-display)" }}>{fmtUSD(avgValue)}</span>
              <span>$1,500</span>
            </div>
          </div>

          {/* Tier picker */}
          <div>
            <label className="block mb-3 text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}>
              Package
            </label>
            <div className="flex gap-2">
              {(["starter", "pro", "premium"] as const).map(t => (
                <motion.button key={t} onClick={() => setTier(t)}
                  whileTap={{ scale: 0.94 }}
                  className="flex-1 rounded-lg py-2.5 text-xs font-semibold"
                  style={{
                    fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "capitalize",
                    background: tier === t ? "var(--primary)" : "var(--bg-elevated)",
                    color: tier === t ? "var(--text-on-dark)" : "var(--text-secondary)",
                    border: `1px solid ${tier === t ? "var(--primary)" : "var(--primary-muted)"}`,
                    transition: "all 0.2s",
                  }}
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 lg:px-10" style={{ borderBottom: "1px solid var(--primary-muted)" }}>
        <StatCard label="Current annual revenue" rawValue={currentAnnual} display={fmtUSD(animCurrent)} note={`${bookings} bookings/mo × ${fmtUSD(avgValue)}`} />
        <StatCard label="Extra bookings/year" rawValue={extraBookingsYear} display={`+${animExtraYear}`} note={`~${Math.round(lift[tier] * 100)}% conversion lift`} accent />
        <StatCard label="Annual revenue lift" rawValue={liftAnnual} display={fmtUSD(animLiftAnnual)} note={`${fmtUSD(Math.round(liftMonthly))}/month added`} />
        <StatCard label="Projected annual revenue" rawValue={projectedAnnual} display={fmtUSD(animProjected)} note="After website launch" />
      </div>

      {/* ── BIG ROI BANNER ── */}
      <div className="p-6 lg:p-10" style={{ background: "var(--bg-dark)" }}>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

          {/* Left: giant ROI % */}
          <div className="flex flex-col items-center justify-center py-6 lg:py-0 lg:pr-10">
            <p className="mb-1 text-center" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(254,252,250,0.4)" }}>
              Annual ROI · {tierLabel} Package
            </p>

            {/* The big number */}
            <div className="relative flex items-end justify-center gap-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={roiPct}
                  initial={{ scale: 1.22, opacity: 0, y: -10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(4rem, 9vw, 7rem)",
                    lineHeight: 1,
                    color: roiPct >= 400 ? "var(--accent)" : "var(--text-on-dark)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {animROI}
                </motion.span>
              </AnimatePresence>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--accent)", lineHeight: 1.2, paddingBottom: "0.4rem" }}>
                %
              </span>
            </div>

            {/* ROI bar */}
            <div className="w-full max-w-[220px] mt-4">
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(254,252,250,0.1)" }}>
                <motion.div
                  className="h-full rounded-full"
                  animate={{ width: `${roiBarPct}%` }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  style={{ background: "var(--accent)" }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(254,252,250,0.3)", letterSpacing: "0.06em" }}>0%</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(254,252,250,0.3)", letterSpacing: "0.06em" }}>600%</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block" style={{ background: "rgba(254,252,250,0.08)" }} />

          {/* Right: cost + payback timeline */}
          <div className="flex flex-col justify-center gap-5 pt-6 lg:pt-0 lg:pl-10" style={{ borderTop: "1px solid rgba(254,252,250,0.08)" }}>
            {/* Cost line */}
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(254,252,250,0.4)" }}>
                Website Investment
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: "var(--text-on-dark)" }}>
                {fmtUSD(cost)}
              </p>
            </div>

            {/* Payback timeline — 12 dot months */}
            <div>
              <p className="mb-2" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(254,252,250,0.4)" }}>
                Payback timeline
              </p>
              <div className="flex gap-1.5 mb-2">
                {Array.from({ length: 12 }, (_, i) => {
                  const filled = i < paybackFill;
                  return (
                    <motion.div
                      key={i}
                      animate={{
                        background: filled ? "var(--accent)" : "rgba(254,252,250,0.12)",
                        scale: filled && i === paybackFill - 1 ? [1, 1.35, 1] : 1,
                      }}
                      transition={{ duration: 0.4, delay: filled ? i * 0.04 : 0 }}
                      className="rounded-full"
                      style={{ width: 12, height: 12, flexShrink: 0 }}
                    />
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={roiMonths}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text-on-dark)" }}
                >
                  {roiMonths <= 1 ? "Paid back in under 1 month" : `Paid back in ~${roiMonths} months`}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Lift summary */}
            <div className="rounded-xl px-4 py-3" style={{ background: "rgba(254,252,250,0.06)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(254,252,250,0.4)" }}>
                Revenue added per year
              </p>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={liftAnnual}
                  initial={{ scale: 1.12, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: "var(--accent)" }}
                >
                  {fmtUSD(animLiftAnnual)}
                </motion.p>
              </AnimatePresence>
              <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.45)" }}>
                Based on ~{Math.round(lift[tier] * 100)}% lift in direct bookings over current baseline
              </p>
            </div>
          </div>
        </div>

        {/* Fine print */}
        <p className="mt-6 text-center text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.2)", letterSpacing: "0.06em" }}>
          Estimates based on industry-average conversion lift data for hospitality direct-booking sites. Individual results vary.
        </p>
      </div>
    </div>
  );
}
