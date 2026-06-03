// gtag.ts — Google Ads conversion helper (paired with the GA4 tag in layout.tsx)
//
// gtag.js is loaded ONCE in src/app/layout.tsx via the GA4 tag. This module does not
// load it again — it only provides typed access to window.gtag and a single helper for
// firing Google Ads conversions from the lead forms (which use inline success states, so
// there is no thank-you-page URL to host the event snippet).
//
// Why conversion VALUES are not hardcoded here: a value is a live Smart Bidding
// instruction that steers how much of Angela's budget Google spends to win each lead.
// That is an owner/business decision and lives in the Google Ads UI, not in source code.
// The helper therefore omits value/currency unless an explicit NEXT_PUBLIC_GADS_VALUE_<KEY>
// override is set. See GOOGLE-ADS-SETUP.md for the recommended value framework.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Google Ads conversion ID (AW-…). Single source of truth — also imported by layout.tsx. */
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-17977052951";

export type ConversionKey = "contact" | "proposal" | "quiz" | "vip";

// Per-funnel conversion labels (the segment after the slash in `send_to`).
// `contact` is LIVE today — label supplied in Angela's Google Ads email.
// The others stay `undefined` until Angela creates their conversion actions and we set the
// matching env var; reportConversion() safely no-ops for any label that isn't set yet.
const CONVERSION_LABELS: Record<ConversionKey, string | undefined> = {
  contact: process.env.NEXT_PUBLIC_GADS_LABEL_CONTACT ?? "HbWyCOjO4LccEJeekPxC",
  proposal: process.env.NEXT_PUBLIC_GADS_LABEL_PROPOSAL,
  quiz: process.env.NEXT_PUBLIC_GADS_LABEL_QUIZ,
  vip: process.env.NEXT_PUBLIC_GADS_LABEL_VIP,
};

// Optional per-funnel value override. Unset by default — value is governed in the Google
// Ads UI (see header). Only sent if explicitly provided via env.
const CONVERSION_VALUE_OVERRIDES: Record<ConversionKey, string | undefined> = {
  contact: process.env.NEXT_PUBLIC_GADS_VALUE_CONTACT,
  proposal: process.env.NEXT_PUBLIC_GADS_VALUE_PROPOSAL,
  quiz: process.env.NEXT_PUBLIC_GADS_VALUE_QUIZ,
  vip: process.env.NEXT_PUBLIC_GADS_VALUE_VIP,
};

// Dedup guard: each conversion key fires at most once per page load. Protects against
// network retries, React re-renders, and rapid double-submits inflating the count.
const firedKeys = new Set<ConversionKey>();

/**
 * Fire a Google Ads conversion for the given lead funnel. Safe to call unconditionally:
 *  - no-ops on the server, or before gtag.js has loaded
 *  - no-ops if the funnel has no conversion label configured yet
 *  - fires each key at most once per page load
 */
export function reportConversion(key: ConversionKey): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const label = CONVERSION_LABELS[key];
  if (!label) return; // funnel not wired to a conversion action yet — safe no-op

  if (firedKeys.has(key)) return; // already counted this page load
  firedKeys.add(key);

  const override = CONVERSION_VALUE_OVERRIDES[key];
  const parsed = override ? Number(override) : undefined;
  const valueParams =
    parsed !== undefined && !Number.isNaN(parsed)
      ? { value: parsed, currency: "USD" }
      : {};

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...valueParams,
  });
}
