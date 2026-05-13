// /about — About The Enchanted Collective
// Source: initial-business-data.md §1 (brand intro, tagline, hosts), §7 (reviews name Angela)
// Note: Full host story copy ("why we built this") is pending from Angela & Marc.
//       This page uses available brand copy as a placeholder until that content arrives.
// SEO: Organization schema

import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Enchanted Collective was built for couples who want to feel something — not just go somewhere. Meet Angela & Marc and learn about the property near Madison, Indiana.",
};

// JSON-LD: Organization
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteData.name,
  url: `https://${siteData.domain}`,
  telephone: siteData.phone,
  email: siteData.email,
  description: siteData.description,
  founders: [
    { "@type": "Person", name: "Angela" },
    { "@type": "Person", name: "Marc" },
  ],
};

// About copy — provided by Angela (2026-04-13)
// Voice: personal, vulnerable, emotionally direct. Speaks to the feeling, not the feature.
const aboutIntro = [
  "We believe the best moments in life aren\u2019t planned months in advance.",
  "They\u2019re the ones you finally decide not to put off anymore.",
  "Because somewhere between busy schedules, responsibilities, and everything pulling at your attention\u2026 it\u2019s easy to lose connection.",
  "With your partner.\nWith your friends.\nEven with yourself.",
];

const aboutMiddle = [
  "The Enchanted Collective was created as a place to pause that.",
  "A place where a simple night out can turn into something deeper \u2014 where you can actually be present, breathe, and feel like yourself again.",
  "There\u2019s something powerful about stepping away from the noise.",
  "A date night where you\u2019re not distracted\u2026 just together.\nA girls\u2019 night where the conversation flows and time slows down.\nA quiet moment under the stars where your mind finally settles.",
  "That kind of reset doesn\u2019t just feel good in the moment \u2014 it stays with you.",
];

const aboutClosing = [
  "Located in Madison, Indiana, we\u2019ve created a collection of curated stays and private experiences designed to help you relax, reconnect, and recharge \u2014 without needing a full vacation to do it.",
  "Every detail is intentional.\nEvery space is designed to feel effortless.",
  "So all you have to do is show up and enjoy it.",
  "Because you don\u2019t need more time.\nYou just need the space to use it differently.",
];

// Values — rewritten per Angela's revisions doc (2026-05-13)
// "Genuinely Private" renamed → "Thoughtful Layout, Real Setting" because the
// property is intentionally a shared natural setting, not isolated parcels.
const values = [
  {
    label: "Thoughtfully Curated",
    body: "Every detail was chosen intentionally…from the comfort of your space to the way your night unfolds. We wanted it to feel effortless, elevated, and memorable.",
  },
  {
    label: "Thoughtful Layout, Real Setting",
    body: "We’ve designed each space to feel distinct and comfortable, while still embracing the shared, natural setting around you. It’s part of the charm…a balance of your own space and the energy of being somewhere a little different.",
  },
  {
    label: "Couples-First, Always",
    body: "This place exists for connection. For slowing down. For stepping out of routine and into something that actually feels like time well spent together.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Madison, Indiana
            </p>
            <h1
              className="leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(40px, 6vw, 72px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={1}>Built for Moments That Matter</ShimmerText>
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              The Enchanted Collective is Angela & Marc&rsquo;s love letter to southern Indiana — and to every couple who deserves an escape as meaningful as the occasion.
            </p>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* About — Angela's copy */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          <FadeUp>
            <p className="eyebrow mb-4" style={{ color: "var(--accent)" }}>
              Our Story
            </p>
          </FadeUp>
          {aboutIntro.map((para, i) => (
            <FadeUp key={`intro-${i}`} delay={i * 0.06}>
              <p
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          {aboutMiddle.map((para, i) => (
            <FadeUp key={`mid-${i}`} delay={i * 0.06}>
              <p
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-5">
          {aboutClosing.map((para, i) => (
            <FadeUp key={`close-${i}`} delay={i * 0.06}>
              <p
                className={`leading-relaxed whitespace-pre-line ${i >= 2 ? "text-lg" : "text-base"}`}
                style={{
                  fontFamily: i >= 2 ? "var(--font-display)" : "var(--font-body)",
                  fontWeight: i >= 2 ? 500 : 400,
                  color: i >= 2 ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Our Approach
            </p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "var(--text-primary)",
              }}
            >
              What we believe
            </h2>
            <p
              className="mt-3 mb-10 text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary)",
              }}
            >
              How we built this place
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScaleIn key={v.label} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-7 flex flex-col gap-3 h-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                >
                  <h3
                    className="text-lg leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                  >
                    {v.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {v.body}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* What guests say */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              In Their Words
            </p>
            <blockquote
              className="text-2xl leading-relaxed mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                color: "var(--text-primary)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Angela and Marc have found their calling. Their piece of paradise truly lives up to its name. Five stars is not enough.&rdquo;
            </blockquote>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
            >
              — Drucilla, Indianapolis, IN
            </p>
            <div className="mt-8">
              <Button variant="ghost" href="/reviews">Read All Reviews</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* CTA */}
      <section
        className="relative py-16 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2
              className="leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={0.5}>Come See It for Yourself</ShimmerText>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Opening June 2026 near Madison, Indiana.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/stays">Explore Stays</Button>
              <Button variant="ghost-light" href="/contact">Get in Touch</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
