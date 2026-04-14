"use client";

// AcuityModal — Phase 4 integration point for Acuity Scheduling
// When acuityUrl is empty: shows confirmation + contact info (demo/pre-launch mode)
// When acuityUrl is set: opens Acuity iframe pre-filled with the selected date
// Source: CLAUDE.md Conversion Flow Rule (no off-domain redirect)

import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

interface AcuityModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedPkg: string | null;
  pkgPrice?: number;
}

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export function AcuityModal({
  isOpen,
  onClose,
  selectedDate,
  selectedTime,
  selectedPkg,
  pkgPrice,
}: AcuityModalProps) {
  const acuityUrl = siteData.booking.acuityUrl;
  const hasRealBooking = Boolean(acuityUrl);

  // Build Acuity pre-fill URL: append date in YYYY-MM-DD format
  const acuitySrc = hasRealBooking && selectedDate
    ? `${acuityUrl}&date=${selectedDate.toISOString().split("T")[0]}`
    : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop + centering container */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center"
            style={{ background: "rgba(10,8,6,0.75)" }}
            onClick={onClose}
          >
          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="w-full md:w-auto rounded-t-3xl md:rounded-2xl overflow-hidden"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--primary-muted)",
              width: "min(100vw, 680px)",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid var(--primary-muted)" }}
            >
              <div>
                <p
                  className="eyebrow text-[10px]"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {hasRealBooking ? "Complete Your Booking" : "Request Received"}
                </p>
                {selectedDate && (
                  <p
                    className="text-sm mt-0.5"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)", fontWeight: 500 }}
                  >
                    {fmtDate(selectedDate)}{selectedTime ? ` · ${selectedTime}` : ""}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
                style={{ background: "var(--bg-elevated)", color: "var(--text-primary)" }}
                aria-label="Close"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 2l8 8M10 2l-8 8" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className={hasRealBooking ? "" : "overflow-y-auto"} style={{ maxHeight: "calc(90vh - 72px)" }}>
              {hasRealBooking ? (
                /* Acuity iframe — no outer scroll, iframe handles its own */
                <iframe
                  src={acuitySrc}
                  width="100%"
                  height="calc(90vh - 72px)"
                  frameBorder="0"
                  title="Book your escape"
                  allow="payment"
                  style={{ display: "block", height: "calc(90vh - 72px)", border: "none" }}
                />
              ) : (
                /* Demo / pre-launch mode — show confirmation summary */
                <div className="p-6 flex flex-col gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                    style={{ background: "var(--primary)", color: "var(--text-on-dark)", fontSize: "1.5rem" }}
                  >
                    ✦
                  </div>

                  <div className="text-center">
                    <h3
                      className="mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", color: "var(--text-primary)" }}
                    >
                      We&rsquo;re Holding Your Spot
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                    >
                      Angela will confirm your reservation within a few hours.
                    </p>
                  </div>

                  {/* Booking summary */}
                  <div
                    className="rounded-xl p-4 space-y-2.5"
                    style={{ background: "var(--bg-elevated)" }}
                  >
                    {[
                      { label: "Date", value: selectedDate ? fmtDate(selectedDate) : "" },
                      { label: "Time", value: selectedTime ?? "" },
                      { label: "Package", value: pkgPrice ? `${selectedPkg} · From $${pkgPrice}` : (selectedPkg ?? "") },
                    ].filter(r => r.value).map(row => (
                      <div key={row.label} className="flex justify-between text-sm gap-4">
                        <span
                          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "10px", flexShrink: 0 }}
                        >
                          {row.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)", fontWeight: 500, textAlign: "right" }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col items-center gap-2">
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em" }}
                    >
                      QUESTIONS? REACH US DIRECTLY
                    </p>
                    <a
                      href={`mailto:${siteData.email}`}
                      style={{ fontFamily: "var(--font-body)", color: "var(--primary)", fontSize: "0.9rem" }}
                    >
                      {siteData.email}
                    </a>
                    <a
                      href={`tel:${siteData.phone}`}
                      style={{ fontFamily: "var(--font-body)", color: "var(--primary)", fontSize: "0.9rem" }}
                    >
                      {siteData.phone}
                    </a>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-xs underline mx-auto"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em" }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
