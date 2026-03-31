"use client";

import { useState } from "react";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

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
  const roiMonths = cost / liftMonthly;
  const roiPct = Math.round((liftAnnual / cost) * 100);

  return (
    <div
      className="rounded-2xl p-8 lg:p-10"
      style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
    >
      <p className="eyebrow mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        ROI Calculator
      </p>
      <h3
        className="mb-1"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", color: "var(--text-primary)" }}
      >
        Estimate Your Return
      </h3>
      <p className="mb-8 text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
        A professional conversion-optimized website drives 18–45% more direct bookings by eliminating OTA dependency and building trust at the moment of intent.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Monthly bookings */}
        <div>
          <label
            className="block mb-2 text-xs font-semibold"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}
          >
            Current monthly bookings
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={1}
              max={30}
              value={bookings}
              onChange={(e) => setBookings(Number(e.target.value))}
              className="flex-1 accent-[var(--primary)]"
            />
            <span
              className="w-8 text-center font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary)", fontSize: "1.1rem" }}
            >
              {bookings}
            </span>
          </div>
        </div>

        {/* Avg booking value */}
        <div>
          <label
            className="block mb-2 text-xs font-semibold"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}
          >
            Avg booking value
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={100}
              max={1500}
              step={50}
              value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="flex-1 accent-[var(--primary)]"
            />
            <span
              className="w-16 text-center font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary)", fontSize: "1.1rem" }}
            >
              {fmt(avgValue)}
            </span>
          </div>
        </div>

        {/* Package tier */}
        <div>
          <label
            className="block mb-2 text-xs font-semibold"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-secondary)" }}
          >
            Package
          </label>
          <div className="flex gap-2">
            {(["starter", "pro", "premium"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className="flex-1 rounded-lg py-2 text-xs font-semibold transition-all"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.06em",
                  textTransform: "capitalize",
                  background: tier === t ? "var(--primary)" : "var(--bg-elevated)",
                  color: tier === t ? "var(--text-on-dark)" : "var(--text-secondary)",
                  border: `1px solid ${tier === t ? "var(--primary)" : "var(--primary-muted)"}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Current annual revenue", value: fmt(currentAnnual), note: `${bookings} bookings/mo × ${fmt(avgValue)}` },
          { label: "Extra bookings/year", value: `+${extraBookingsYear}`, note: `~${Math.round(lift[tier] * 100)}% conversion lift` },
          { label: "Annual revenue lift", value: fmt(liftAnnual), note: `${fmt(liftMonthly)}/month added` },
          { label: "Projected annual revenue", value: fmt(projectedAnnual), note: "After website launch" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-4"
            style={{ background: "var(--bg-elevated)" }}
          >
            <p
              className="text-xl font-bold mb-0.5"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
            >
              {item.value}
            </p>
            <p className="text-xs font-semibold mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}>
              {item.label}
            </p>
            <p className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
              {item.note}
            </p>
          </div>
        ))}
      </div>

      {/* ROI summary banner */}
      <div
        className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        style={{ background: "var(--primary)", color: "var(--text-on-dark)" }}
      >
        <div>
          <p className="text-sm font-semibold opacity-80" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Website cost: {fmt(cost)}
          </p>
          <p className="text-2xl font-bold mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
            {roiPct}% annual ROI — paid back in {roiMonths < 1.5 ? "under 2 months" : `~${Math.ceil(roiMonths)} months`}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-70" style={{ fontFamily: "var(--font-body)" }}>
            Based on industry avg lift for<br />conversion-optimized direct booking sites
          </p>
        </div>
      </div>
    </div>
  );
}
