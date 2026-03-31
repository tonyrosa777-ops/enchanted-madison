// /optimus-pricing — INTERNAL SALES TOOL — DELETE BEFORE LAUNCH
// Optimus Business Solutions — proposal pricing page for The Enchanted Collective
// Three tiers: Starter $1,500 / Pro $3,000 / Premium $5,500

import { RoiCalculator } from "./RoiCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Investment — Optimus Business Solutions",
  description: "Internal pricing page — not for public distribution.",
  robots: { index: false, follow: false },
};

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    tag: "Launch-ready presence",
    description:
      "Everything needed to look professional, rank locally, and capture leads. Ideal for properties that want a credible online presence fast.",
    features: [
      "Full brand identity & design system",
      "Up to 6 core pages (Home, Stays, About, FAQ, Contact, Reviews)",
      "Mobile-first responsive design",
      "SEO foundations — title tags, meta, OG, schema markup",
      "VIP email capture form with $25 off incentive",
      "Vercel deployment + domain connection",
      "30-day post-launch support",
    ],
    notIncluded: ["Experience Finder quiz", "Blog / Journal", "Booking integration", "Shop / e-commerce"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$3,000",
    tag: "Most popular · Best value",
    description:
      "The full conversion engine. Guests arrive, the site qualifies them, and they book — without leaving your domain. This is what most operators need.",
    features: [
      "Everything in Starter",
      "Experience Finder — 3-question funnel routes visitors to the right booking path",
      "Journal / Blog — 10 editorial SEO articles written and published",
      "Proposals page — 3-tier packages + branded 3-step inquiry form with email notifications",
      "Date Night / Experiences pages with Acuity Scheduling embedded on-domain",
      "Stay pages with Lodgify booking widget embedded (no redirect)",
      "Madison Guide local content hub",
      "Add-Ons & Packages upsell page",
      "60-day post-launch support",
    ],
    notIncluded: ["Shop / e-commerce", "Printful POD fulfillment"],
    cta: "This Is The One",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$5,500",
    tag: "Full revenue platform",
    description:
      "Adds a complete e-commerce layer on top of Pro — sell gift cards, merchandise, and digital products with automated fulfillment. Best for operators who want to monetize every touchpoint.",
    features: [
      "Everything in Pro",
      "Full e-commerce shop (gift cards, merch, digital downloads)",
      "Persistent cart with localStorage — add items from any page",
      "Stripe Checkout integration — secure payments, receipts, webhooks",
      "Printful print-on-demand fulfillment — orders auto-routed, no manual work",
      "Automated order alerts to owner + customer confirmation emails",
      "Manual fulfillment path for digital products and gift cards",
      "90-day post-launch support",
    ],
    notIncluded: [],
    cta: "Let's Build It",
    highlight: false,
  },
];

const comparisons = [
  { feature: "Brand identity & design system", starter: true, pro: true, premium: true },
  { feature: "Core pages (Home, Stays, About, FAQ, Contact)", starter: true, pro: true, premium: true },
  { feature: "VIP email capture form", starter: true, pro: true, premium: true },
  { feature: "SEO, schema, OG tags, sitemap", starter: true, pro: true, premium: true },
  { feature: "Experience Finder quiz/funnel", starter: false, pro: true, premium: true },
  { feature: "Journal / Blog (10 articles)", starter: false, pro: true, premium: true },
  { feature: "Booking widget on-domain (Lodgify)", starter: false, pro: true, premium: true },
  { feature: "Acuity Scheduling embedded", starter: false, pro: true, premium: true },
  { feature: "Proposals page + inquiry form", starter: false, pro: true, premium: true },
  { feature: "Add-Ons & Packages upsell page", starter: false, pro: true, premium: true },
  { feature: "E-commerce shop", starter: false, pro: false, premium: true },
  { feature: "Stripe Checkout", starter: false, pro: false, premium: true },
  { feature: "Printful POD fulfillment", starter: false, pro: false, premium: true },
  { feature: "Automated order + fulfillment emails", starter: false, pro: false, premium: true },
  { feature: "Post-launch support", starter: "30 days", pro: "60 days", premium: "90 days" },
];

function Check() {
  return (
    <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem" }}>✓</span>
  );
}
function X() {
  return (
    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>—</span>
  );
}

export default function OptimusPricingPage() {
  return (
    <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>

      {/* Internal banner */}
      <div
        className="w-full py-2.5 px-4 text-center text-xs font-semibold"
        style={{
          background: "var(--accent)",
          color: "var(--bg-dark)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        ⚠ Internal Optimus Sales Document — Delete Before Launch
      </div>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 text-center" style={{ background: "var(--bg-dark)" }}>
        <p
          className="mb-3 text-xs font-semibold"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}
        >
          Optimus Business Solutions · Website Investment
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "var(--text-on-dark)",
            lineHeight: 1.1,
          }}
        >
          Your Website Should Be<br />Your Best Salesperson
        </h1>
        <p
          className="max-w-2xl mx-auto text-base leading-relaxed mb-2"
          style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.72)" }}
        >
          The Enchanted Collective is already a remarkable property. This website is built to match — converting romantic-getaway searches into direct bookings before a guest ever sees Airbnb or Google Hotels.
        </p>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.08em" }}
        >
          Every package is a fixed-price, fixed-scope engagement. No hourly billing. No surprises.
        </p>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-2xl p-8 flex flex-col"
                style={{
                  background: tier.highlight ? "var(--primary)" : "var(--bg-card)",
                  border: tier.highlight ? "none" : "1px solid var(--primary-muted)",
                  boxShadow: tier.highlight ? "0 20px 60px rgba(74,58,46,0.25)" : "none",
                }}
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg-dark)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tier.tag}
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: tier.highlight ? "rgba(254,252,250,0.65)" : "var(--text-muted)",
                    }}
                  >
                    {tier.highlight ? "" : tier.tag}
                  </p>
                  <p
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      color: tier.highlight ? "var(--text-on-dark)" : "var(--text-secondary)",
                    }}
                  >
                    {tier.name}
                  </p>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "2.5rem",
                      color: tier.highlight ? "var(--text-on-dark)" : "var(--primary)",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: tier.highlight ? "rgba(254,252,250,0.75)" : "var(--text-secondary)",
                    }}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start text-sm">
                      <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: tier.highlight ? "var(--accent)" : "var(--primary)", fontWeight: 700 }}
                      >
                        ✦
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          color: tier.highlight ? "rgba(254,252,250,0.88)" : "var(--text-primary)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.notIncluded.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {tier.notIncluded.map((f) => (
                      <li key={f} className="flex gap-2.5 items-start text-sm opacity-40">
                        <span className="flex-shrink-0 mt-0.5">—</span>
                        <span style={{ fontFamily: "var(--font-body)", color: tier.highlight ? "var(--text-on-dark)" : "var(--text-secondary)" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div
                  className="mt-auto rounded-xl py-3 px-6 text-center font-semibold text-sm cursor-default"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    background: tier.highlight ? "var(--text-on-dark)" : "var(--primary)",
                    color: tier.highlight ? "var(--primary)" : "var(--text-on-dark)",
                  }}
                >
                  {tier.cta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
          >
            Feature Comparison
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--primary-muted)" }}>
            {/* Header */}
            <div
              className="grid grid-cols-4 gap-0 px-6 py-4"
              style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--primary-muted)" }}
            >
              <div />
              {["Starter", "Pro", "Premium"].map((t) => (
                <div
                  key={t}
                  className="text-center text-xs font-bold"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: t === "Pro" ? "var(--primary)" : "var(--text-secondary)" }}
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 gap-0 px-6 py-3.5 items-center"
                style={{
                  background: i % 2 === 0 ? "var(--bg-base)" : "var(--bg-card)",
                  borderBottom: i < comparisons.length - 1 ? "1px solid var(--primary-muted)" : "none",
                }}
              >
                <p className="text-sm pr-4" style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}>
                  {row.feature}
                </p>
                {[row.starter, row.pro, row.premium].map((val, j) => (
                  <div key={j} className="text-center text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {val === true ? <Check /> : val === false ? <X /> : val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="mb-2 text-xs font-semibold"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}
            >
              The math
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
            >
              What This Website Is Worth to You
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto text-sm"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              Plug in your current numbers and see how a conversion-optimized website impacts your annual revenue.
            </p>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* Why Optimus / how it works */}
      <section className="py-16 px-4" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-on-dark)" }}
          >
            How the Build Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Strategy & Design",
                body: "We research your market, your competitors, and your audience before touching code. Every decision is backed by data.",
              },
              {
                step: "02",
                title: "Build & Review",
                body: "You see the site at each major milestone. No surprises at the end. Feedback rounds built in at every phase.",
              },
              {
                step: "03",
                title: "Launch & Support",
                body: "We deploy to Vercel, connect your domain, verify tracking and bookings, and stay on call for your support window.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl p-6" style={{ background: "rgba(254,252,250,0.05)" }}>
                <p
                  className="mb-3"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "2rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em" }}
                >
                  {item.step}
                </p>
                <p
                  className="mb-2 font-semibold"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--text-on-dark)" }}
                >
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you're looking at right now */}
      <section className="py-16 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="mb-3 text-xs font-semibold"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}
          >
            You&rsquo;re already seeing the Pro package
          </p>
          <h2
            className="mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
          >
            This Is the Site We Built for You
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            Everything you&rsquo;ve seen on this domain — the photography-ready hero, the Experience Finder quiz, the Proposals intake form with email notifications, the Journal with 10 editorial articles, the VIP capture flow — is the Pro package, built and live. No mockups. No wireframes. The product.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Pages built", value: "38" },
              { label: "Articles written", value: "10" },
              { label: "Forms with email", value: "3" },
              { label: "TypeScript errors", value: "0" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-4" style={{ background: "var(--bg-card)" }}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div
        className="py-6 px-4 text-center text-xs"
        style={{ background: "var(--bg-dark)", fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.35)", letterSpacing: "0.06em" }}
      >
        Optimus Business Solutions · Prepared for The Enchanted Collective · enchantedmadison.com · 2026 · CONFIDENTIAL — DELETE BEFORE LAUNCH
      </div>
    </main>
  );
}
