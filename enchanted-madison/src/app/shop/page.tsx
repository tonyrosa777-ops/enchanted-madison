// /shop — The Enchanted Collective Shop
// Source: market-intelligence.md §5 (gift card recommendation); design-system.md §2–§3
// Server component

import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/animations/FadeUp";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ShopContent } from "@/components/shop/ShopContent";
import { Button } from "@/components/ui/Button";
import { shopProducts } from "@/data/shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Gift cards, branded keepsakes, and the Perfect Madison Weekend digital guide from The Enchanted Collective.",
  openGraph: {
    title: "Shop | The Enchanted Collective",
    description:
      "Gift cards, branded keepsakes, and the Perfect Madison Weekend digital guide from The Enchanted Collective.",
    url: "https://enchantedmadison.com/shop",
  },
};

export default function ShopPage() {
  return (
    <PageShell>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays opacity={0.6} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <p
              className="uppercase tracking-widest text-xs mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.12em",
              }}
            >
              The Enchanted Collective
            </p>
            <h1
              className="leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(40px, 7vw, 72px)",
                color: "var(--text-on-dark)",
              }}
            >
              Take a Piece of the Magic Home
            </h1>
            <p
              className="leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "rgba(254, 252, 250, 0.75)",
                maxWidth: "580px",
              }}
            >
              Gift cards, branded keepsakes, and the Perfect Madison Weekend
              guide — all delivered straight to your door.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Wave Divider ───────────────────────────────────────── */}
      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* ── Shop Content ───────────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ShopContent products={shopProducts} />
        </div>
      </section>

      {/* ── Gift Cards Banner ──────────────────────────────────── */}
      <section
        className="py-12 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p
              className="uppercase tracking-widest text-xs mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.12em",
              }}
            >
              The Perfect Gift
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--text-primary)",
              }}
            >
              Give the Gift of Escape
            </h2>
            <p
              className="mb-8 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-secondary)",
                maxWidth: "520px",
              }}
            >
              Know a couple who deserves a romantic getaway? Our gift cards
              never expire and can be applied to any stay, experience, or
              add-on.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/shop#gift-cards">
                Shop Gift Cards
              </Button>
              <Button variant="ghost" size="lg" href="/stays">
                Learn More
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
