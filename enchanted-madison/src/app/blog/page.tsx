// /blog — The Enchanted Journal
// Server component page
// Source: market-intelligence.md §8 (SEO content pillars), design-system.md §2–§3

import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/animations/FadeUp";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { BlogContent } from "@/components/blog/BlogContent";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "The Enchanted Journal",
  description:
    "Romantic travel guides, Madison Indiana local tips, and glamping inspiration from The Enchanted Collective.",
};

export default function BlogPage() {
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
              The Enchanted Journal
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
              Stories for Couples Who Escape
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
              Romantic travel guides, Madison Indiana insider tips, glamping how-tos, and proposal inspiration — written by your hosts.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Wave Divider ───────────────────────────────────────── */}
      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* ── Blog Content ───────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto">
          <BlogContent posts={blogPosts} />
        </div>
      </section>

      {/* ── VIP CTA ────────────────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p
              className="uppercase tracking-widest text-xs mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.12em",
              }}
            >
              Never Miss a Story
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
              {siteData.vip.headline}
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-secondary)",
              }}
            >
              New guides, local tips, and exclusive early access — straight to your inbox.
            </p>
            <Button variant="primary" size="lg" href="/vip">
              Get VIP Access
            </Button>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
