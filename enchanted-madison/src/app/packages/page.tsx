// /packages — Stay Enhancement Add-Ons
// Source: initial-business-data.md §6
// Anti-pattern #6: all pricing visible. Design: design-system.md §5 (cards).

import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay Enhancements & Add-Ons",
  description:
    "Upgrade your stay at The Enchanted Collective. Romance packages, outdoor movie nights, s'mores skillets, picnic rides, and more — bookable at checkout.",
};

// Icon per add-on — sourced from initial-business-data.md §6 descriptions
const addonMeta: Record<string, { icon: string; tag: string }> = {
  "Classic Romance Package":    { icon: "🌹", tag: "Most Romantic" },
  "Ultimate Romance Experience":{ icon: "✨", tag: "Most Popular" },
  "Outdoor Movie Night":        { icon: "🎬", tag: "Unforgettable" },
  "S'mores Skillet":            { icon: "🔥", tag: "Fan Favorite" },
  "Picnic and Ride":            { icon: "🚴", tag: "Adventure" },
};

export default function PackagesPage() {
  return (
    <PageShell>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 px-4 text-center"
        style={{ background: "var(--bg-base)" }}
      >
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Stay Enhancements
          </p>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--text-primary)",
            }}
          >
            Make It Unforgettable
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            Every add-on is available at checkout when you book an overnight stay.
            Rose petals waiting when you arrive. A fire already laid. The movie cued up.
          </p>
        </FadeUp>
      </section>

      {/* Add-ons grid */}
      <section
        className="py-12 lg:py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.addons.map((addon, i) => {
            const meta = addonMeta[addon.name] ?? { icon: "🌿", tag: "Add-On" };
            return (
              <ScaleIn key={addon.name} delay={i * 0.08}>
                <article
                  className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--primary-muted)",
                  }}
                >
                  {/* Icon + tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">{meta.icon}</span>
                    <span
                      className="text-[10px] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.08em",
                        color: "var(--accent)",
                        background: "rgba(184,150,90,0.1)",
                      }}
                    >
                      {meta.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    className="text-xl leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {addon.name}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {addon.description}
                  </p>

                  {/* Price */}
                  <p
                    className="text-base font-semibold mt-auto"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                  >
                    {"priceNote" in addon && addon.priceNote
                      ? `$${addon.price} ${addon.priceNote}`
                      : `$${addon.price}`}
                  </p>
                </article>
              </ScaleIn>
            );
          })}
        </div>
      </section>

      {/* How to add section */}
      <section
        className="py-14 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8">
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--text-primary)",
                }}
              >
                Available at Checkout
              </h2>
              <p
                className="mt-3 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                Add any enhancement when you book your overnight stay. Everything is set
                up and waiting before you arrive — no coordinating, no extra trips.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { step: "1", label: "Choose your stay", detail: "Select a cottage, tent, or campsite" },
                { step: "2", label: "Pick your add-ons", detail: "Romance, movie night, s'mores, and more" },
                { step: "3", label: "Arrive to magic", detail: "Everything is set up when you check in" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl p-5 text-center"
                  style={{ background: "var(--bg-card)" }}
                >
                  <p
                    className="text-3xl mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--accent)" }}
                  >
                    {item.step}
                  </p>
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="primary" size="lg" href="/stays">
                Browse Stays
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
