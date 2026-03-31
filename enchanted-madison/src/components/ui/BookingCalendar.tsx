"use client";

// BookingCalendar — interactive date/time/package selector for Date Night page
// Demo-ready: seeded availability, no backend required.
// Phase 4: swap submit handler for Acuity Scheduling embed or API call.

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

// ─── Types ────────────────────────────────────────────────────────────────────
type Avail = "available" | "limited" | "booked" | "past";
type Step = "calendar" | "time" | "package" | "success";

interface TimeSlot {
  label: string;
  avail: "open" | "limited" | "booked";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function hash(d: Date) {
  return (d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate()) % 10;
}

function getAvail(d: Date): Avail {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const cmp = new Date(d); cmp.setHours(0, 0, 0, 0);
  if (cmp < today) return "past";
  const h = hash(d);
  const dow = d.getDay();
  if (dow === 5 || dow === 6) return h < 4 ? "booked" : h < 7 ? "limited" : "available";
  if (dow === 0) return h < 3 ? "booked" : h < 5 ? "limited" : "available";
  return h < 2 ? "booked" : h < 4 ? "limited" : "available";
}

function getTimeSlots(d: Date): TimeSlot[] {
  const h = hash(d);
  const slots: TimeSlot[] = [
    { label: "5:00 PM", avail: h < 3 ? "booked" : h < 5 ? "limited" : "open" },
    { label: "6:00 PM", avail: h < 5 ? "booked" : h < 7 ? "limited" : "open" },
    { label: "7:00 PM", avail: h < 2 ? "booked" : h < 6 ? "limited" : "open" },
    { label: "8:00 PM", avail: h < 4 ? "booked" : h < 8 ? "limited" : "open" },
  ];
  return slots;
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function firstDowOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];
const DAY_NAMES = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

// ─── Availability dot ─────────────────────────────────────────────────────────
function AvailDot({ avail }: { avail: Avail }) {
  if (avail === "past") return null;
  const color =
    avail === "booked" ? "var(--text-muted)" :
    avail === "limited" ? "var(--accent)" :
    "var(--primary)";
  return (
    <span
      className="block mx-auto mt-0.5 rounded-full"
      style={{ width: 4, height: 4, background: color }}
    />
  );
}

// ─── Slide variants ────────────────────────────────────────────────────────────
const slide = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.26, ease: "easeOut" as const } },
  exit: { x: -40, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } },
};

// ─── Main component ────────────────────────────────────────────────────────────
export function BookingCalendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("calendar");

  // Build calendar grid
  const { grid, availCount } = useMemo(() => {
    const first = firstDowOfMonth(viewYear, viewMonth);
    const total = daysInMonth(viewYear, viewMonth);
    const cells: Array<{ date: Date; avail: Avail } | null> = [];
    for (let i = 0; i < first; i++) cells.push(null);
    for (let d = 1; d <= total; d++) {
      const date = new Date(viewYear, viewMonth, d);
      cells.push({ date, avail: getAvail(date) });
    }
    const availCount = cells.filter(c => c && (c.avail === "available" || c.avail === "limited")).length;
    return { grid: cells, availCount };
  }, [viewYear, viewMonth]);

  const timeSlots = selected ? getTimeSlots(selected) : [];
  const packages = siteData.experiences.dateNight.packages;

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelected(null); setSelectedTime(null); setSelectedPkg(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelected(null); setSelectedTime(null); setSelectedPkg(null);
  }

  function selectDate(date: Date, avail: Avail) {
    if (avail === "past" || avail === "booked") return;
    setSelected(date);
    setSelectedTime(null);
    setSelectedPkg(null);
    setStep("time");
  }

  function selectTime(slot: TimeSlot) {
    if (slot.avail === "booked") return;
    setSelectedTime(slot.label);
    setStep("package");
  }

  function selectPkg(name: string) {
    setSelectedPkg(name);
  }

  function reset() {
    setSelected(null); setSelectedTime(null); setSelectedPkg(null);
    setStep("calendar");
  }

  // ─── STEP: success ──────────────────────────────────────────────────────────
  if (step === "success") {
    const pkg = packages.find(p => p.name === selectedPkg);
    return (
      <motion.div
        key="success"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-2xl p-8 text-center"
        style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "var(--primary)", color: "var(--text-on-dark)", fontSize: "1.75rem" }}
        >
          ✦
        </div>
        <p className="eyebrow mb-2" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Request Received
        </p>
        <h3 className="mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", color: "var(--text-primary)" }}>
          We&rsquo;re Holding Your Spot
        </h3>
        <p className="text-sm mb-6 leading-relaxed max-w-sm mx-auto" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
          Angela will confirm your reservation within a few hours. You selected:
        </p>
        <div
          className="rounded-xl p-4 mb-6 text-left space-y-2"
          style={{ background: "var(--bg-elevated)" }}
        >
          {[
            { label: "Date", value: selected ? fmtDate(selected) : "" },
            { label: "Time", value: selectedTime ?? "" },
            { label: "Package", value: `${selectedPkg} · From $${pkg?.price}` },
          ].map(row => (
            <div key={row.label} className="flex justify-between text-sm">
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "11px" }}>{row.label}</span>
              <span style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)", fontWeight: 500 }}>{row.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <a href={`mailto:${siteData.email}`} style={{ fontFamily: "var(--font-body)", color: "var(--primary)" }}>{siteData.email}</a>
          <a href={`tel:${siteData.phone}`} style={{ fontFamily: "var(--font-body)", color: "var(--primary)" }}>{siteData.phone}</a>
        </div>
        <button
          onClick={reset}
          className="mt-6 text-xs underline"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em" }}
        >
          Start over
        </button>
      </motion.div>
    );
  }

  // ─── Layout: calendar left + detail right on md+ ────────────────────────────
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_320px]">

        {/* ── Calendar column ── */}
        <div className="p-6 lg:p-8">
          {/* Month nav */}
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={prevMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-60"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Previous month"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M9 2L4 7l5 5" />
              </svg>
            </button>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text-primary)" }}>
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <button
              onClick={nextMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:opacity-60"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Next month"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </div>

          {/* Day-of-week headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAY_NAMES.map(d => (
              <div key={d} className="text-center text-[10px] font-semibold pb-2"
                style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-0.5">
            {grid.map((cell, i) => {
              if (!cell) return <div key={`empty-${i}`} />;
              const { date, avail } = cell;
              const isToday = date.toDateString() === today.toDateString();
              const isSelected = selected?.toDateString() === date.toDateString();
              const isPast = avail === "past";
              const isBooked = avail === "booked";
              const isClickable = !isPast && !isBooked;

              return (
                <button
                  key={date.toISOString()}
                  disabled={!isClickable}
                  onClick={() => selectDate(date, avail)}
                  className="relative flex flex-col items-center py-1.5 rounded-lg transition-all duration-150"
                  style={{
                    background: isSelected ? "var(--primary)" : isToday ? "var(--bg-elevated)" : "transparent",
                    opacity: isPast ? 0.28 : 1,
                    cursor: isClickable ? "pointer" : "default",
                    outline: isToday && !isSelected ? `1.5px solid var(--primary-muted)` : "none",
                  }}
                  onMouseEnter={e => {
                    if (isClickable && !isSelected) (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-elevated)";
                  }}
                  onMouseLeave={e => {
                    if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <span
                    className="text-sm leading-none"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: isSelected || isToday ? 700 : 400,
                      color: isSelected ? "var(--text-on-dark)" : isBooked ? "var(--text-muted)" : "var(--text-primary)",
                      textDecoration: isBooked ? "line-through" : "none",
                    }}
                  >
                    {date.getDate()}
                  </span>
                  {!isSelected && <AvailDot avail={avail} />}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-5 pt-4" style={{ borderTop: "1px solid var(--primary-muted)" }}>
            {[
              { color: "var(--primary)", label: "Available" },
              { color: "var(--accent)", label: "Limited" },
              { color: "var(--text-muted)", label: "Booked" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className="rounded-full" style={{ width: 6, height: 6, background: item.color, display: "inline-block" }} />
                <span className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {item.label}
                </span>
              </div>
            ))}
            <span className="ml-auto text-[10px]" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.06em" }}>
              {availCount} spots left this month
            </span>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block" style={{ background: "var(--primary-muted)" }} />

        {/* ── Detail column ── */}
        <div className="border-t md:border-t-0 p-6 lg:p-8 flex flex-col" style={{ borderColor: "var(--primary-muted)" }}>
          <AnimatePresence mode="wait">
            {step === "calendar" && (
              <motion.div key="prompt" variants={slide} initial="enter" animate="center" exit="exit"
                className="flex flex-col items-center justify-center h-full text-center gap-3 py-8"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                  style={{ background: "var(--bg-elevated)", color: "var(--primary)", fontSize: "1.4rem" }}
                >
                  ✦
                </div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                  Select a Date
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                  Choose an available evening on the calendar to see time slots and packages.
                </p>
                <p className="text-xs mt-2" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.06em" }}>
                  Weekends fill fast — book 2+ weeks out
                </p>
              </motion.div>
            )}

            {step === "time" && selected && (
              <motion.div key="time" variants={slide} initial="enter" animate="center" exit="exit">
                {/* Back */}
                <button onClick={reset} className="flex items-center gap-1.5 mb-4 text-xs opacity-60 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-primary)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M8 2L3 6l5 4"/></svg>
                  Back
                </button>
                <p className="eyebrow mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {fmtDate(selected)}
                </p>
                <p className="mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                  Choose a Time
                </p>
                <div className="flex flex-col gap-2.5">
                  {timeSlots.map(slot => (
                    <button
                      key={slot.label}
                      disabled={slot.avail === "booked"}
                      onClick={() => selectTime(slot)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-150"
                      style={{
                        background: "var(--bg-elevated)",
                        border: `1px solid var(--primary-muted)`,
                        opacity: slot.avail === "booked" ? 0.38 : 1,
                        cursor: slot.avail === "booked" ? "default" : "pointer",
                      }}
                      onMouseEnter={e => { if (slot.avail !== "booked") (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-base)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-elevated)"; }}
                    >
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: slot.avail === "booked" ? "var(--text-muted)" : "var(--text-primary)" }}>
                        {slot.label}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          background:
                            slot.avail === "booked" ? "var(--bg-card)" :
                            slot.avail === "limited" ? "rgba(184,150,90,0.15)" :
                            "rgba(74,58,46,0.08)",
                          color:
                            slot.avail === "booked" ? "var(--text-muted)" :
                            slot.avail === "limited" ? "var(--accent)" :
                            "var(--primary)",
                        }}
                      >
                        {slot.avail === "booked" ? "Taken" : slot.avail === "limited" ? "1 left" : "Open"}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "package" && selected && selectedTime && (
              <motion.div key="package" variants={slide} initial="enter" animate="center" exit="exit">
                <button onClick={() => setStep("time")} className="flex items-center gap-1.5 mb-4 text-xs opacity-60 hover:opacity-100 transition-opacity"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-primary)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M8 2L3 6l5 4"/></svg>
                  Back
                </button>
                <p className="eyebrow mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {fmtDate(selected)} · {selectedTime}
                </p>
                <p className="mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                  Choose a Package
                </p>
                <div className="flex flex-col gap-2 mb-5">
                  {packages.map(pkg => {
                    const isChosen = selectedPkg === pkg.name;
                    return (
                      <button
                        key={pkg.name}
                        onClick={() => selectPkg(pkg.name)}
                        className="rounded-xl px-4 py-3 text-left transition-all duration-150"
                        style={{
                          background: isChosen ? "var(--primary)" : "var(--bg-elevated)",
                          border: `1px solid ${isChosen ? "var(--primary)" : "var(--primary-muted)"}`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem", color: isChosen ? "var(--text-on-dark)" : "var(--text-primary)" }}>
                            {pkg.name}
                          </span>
                          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)" }}>
                            ${pkg.price}
                          </span>
                        </div>
                        <span className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: isChosen ? "rgba(254,252,250,0.6)" : "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {pkg.tier} · {pkg.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={!selectedPkg}
                  onClick={() => setStep("success")}
                  className="w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: selectedPkg ? "var(--primary)" : "var(--bg-elevated)",
                    color: selectedPkg ? "var(--text-on-dark)" : "var(--text-muted)",
                    cursor: selectedPkg ? "pointer" : "default",
                    border: `1px solid ${selectedPkg ? "var(--primary)" : "var(--primary-muted)"}`,
                  }}
                >
                  Request This Escape →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
