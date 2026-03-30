"use client";

import { useState } from "react";

import { siteContent } from "../../content/site";

/**
 * VIPCapture — email list capture section with pre-launch offer.
 *
 * Design authorization:
 *   - Market-Intelligence-Report.md §6: VIP email capture is identified as the
 *     highest-leverage pre-launch trust move; $25 + guide offer validated in brief.
 *   - design-contract.md §2: night bg, gold accent, ivory text, rose CTA
 *   - design-contract.md §5 inputs: ivory bg, stone border, rose focus ring
 *   - design-contract.md §7 Principle 3: "confidence beats apology" — no hedging copy
 *
 * Form submission is intentionally a stub (console.log) until the email provider
 * (Mailchimp / ConvertKit / Klaviyo) is confirmed by the project owner.
 * Replace the handleSubmit body with the real API call at that point.
 */
export function VIPCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to confirmed email provider (Mailchimp / ConvertKit / Klaviyo)
    console.log("VIP capture:", email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      className="relative overflow-hidden bg-night"
      aria-label="Join the VIP list"
    >
      {/* Warm radial bloom — editorial warmth without being loud */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 120%, rgba(184,150,90,0.14) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[56rem] flex-col items-center px-5 py-20 text-center lg:px-8 lg:py-24">
        {/* Script accent */}
        <p className="font-accent text-3xl text-gold">Be first to know</p>

        {/* Headline */}
        <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-ivory lg:text-5xl">
          Early Access. First-Look Dates.<br />
          A Sweeter Launch Offer.
        </h2>

        {/* Offer detail */}
        <p className="mt-5 max-w-md text-base leading-7 text-ivory/70">
          Join the VIP list and get{" "}
          <span className="font-semibold text-gold">
            {siteContent.vipOffer}
          </span>{" "}
          when we open in June 2026.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="mt-8 rounded-2xl border border-gold/30 bg-ivory/5 px-8 py-6">
            <p className="font-heading text-2xl font-semibold text-ivory">
              You&apos;re on the list.
            </p>
            <p className="mt-2 text-sm text-ivory/60">
              We&apos;ll be in touch before anyone else when dates go live.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            aria-label="VIP list signup"
          >
            <label htmlFor="vip-email" className="sr-only">
              Email address
            </label>
            <input
              id="vip-email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[3.25rem] flex-1 rounded-full border border-stone/40 bg-ivory/10 px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/30"
            />
            <button
              type="submit"
              className="min-h-[3.25rem] shrink-0 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Unlock VIP Access
            </button>
          </form>
        )}

        {/* Social proof / reassurance */}
        <p className="mt-5 text-xs text-ivory/35">
          Opening June 2026&nbsp;&nbsp;·&nbsp;&nbsp;No spam, ever&nbsp;&nbsp;·&nbsp;&nbsp;Unsubscribe anytime
        </p>
      </div>
    </section>
  );
}
