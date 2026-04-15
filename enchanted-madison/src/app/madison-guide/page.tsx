// /madison-guide — Madison, Indiana Local Guide
// Source: initial-business-data.md §10; market-intelligence.md §8 (SEO Pillar 2)
// SEO targets: "things to do Madison Indiana," "Clifty Falls State Park guide," "Madison Indiana travel guide"
// Schema: TouristDestination + ItemList for individual attractions

import Image from "next/image";
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
  title: "Madison, Indiana Travel Guide",
  description:
    "The best things to do near The Enchanted Collective — Clifty Falls State Park, the Lanier Mansion, downtown Madison on the Ohio River, wineries, and more.",
};

// JSON-LD: ItemList of TouristAttraction
const guideSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Things to Do Near The Enchanted Collective — Madison, Indiana",
  description: siteData.madisonGuide.intro,
  itemListElement: siteData.madisonGuide.attractions.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristAttraction",
      name: a.name,
      description: a.description,
    },
  })),
};

// Category colors — visual differentiation per category
const categoryStyle: Record<string, string> = {
  Nature:       "var(--primary)",
  History:      "var(--accent)",
  Town:         "var(--accent-rose)",
  "Wine & Food":"var(--accent)",
  "Scenic Drive":"var(--primary)",
};

export default function MadisonGuidePage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      {/* Page hero */}
      <section
        className="relative pt-32 pb-16 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Southern Indiana
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
              <ShimmerText delay={1}>The Madison, Indiana Guide</ShimmerText>
            </h1>
            <p
              className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.75)" }}
            >
              {siteData.madisonGuide.intro}
            </p>
          </FadeUp>

          {/* Drive times — top 3 metros */}
          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-10">
              {siteData.driveTimes.slice(0, 3).map((item) => (
                <div key={item.from} className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--accent)" }}
                  >
                    {item.minutes} min
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.55)", letterSpacing: "0.06em" }}
                  >
                    {item.from}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Attractions */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
              What to See & Do
            </p>
            <h2
              className="mb-12 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--text-primary)",
              }}
            >
              5 Minutes from Your Stay
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-6">
            {siteData.madisonGuide.attractions.map((place, i) => (
              <ScaleIn key={place.name} delay={i * 0.07}>
                <article
                  className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(280px,2fr)_3fr] gap-0 transition-shadow duration-300 hover:shadow-xl"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                >
                  {/* Left: full-height image */}
                  <div className="relative w-full min-h-[240px] md:min-h-[320px]">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  {/* Right: all copy, centered vertically to fill space */}
                  <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="text-[11px] uppercase px-3 py-1 rounded-full"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.08em",
                          color: categoryStyle[place.category] ?? "var(--accent)",
                          background: "rgba(184,150,90,0.1)",
                        }}
                      >
                        {place.category}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                      >
                        {place.distance}
                      </span>
                      <span style={{ color: "var(--primary-muted)" }}>·</span>
                      <span
                        className="text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.04em" }}
                      >
                        {place.highlight}
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl leading-tight"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                    >
                      {place.name}
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                    >
                      {place.description}
                    </p>
                    <div
                      className="rounded-lg px-5 py-4"
                      style={{ background: "rgba(184,150,90,0.08)", borderLeft: "3px solid var(--accent)" }}
                    >
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                      >
                        <span
                          className="font-bold mr-2"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.06em" }}
                        >
                          TIP:
                        </span>
                        {place.tip}
                      </p>
                    </div>
                  </div>
                </article>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* "More coming" + CTA */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
            >
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                More Coming Soon
              </p>
              <h2
                className="leading-tight mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "var(--text-primary)",
                }}
              >
                Restaurant Picks. Winery Routes. Event Calendar.
              </h2>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                Our full Madison guide — including Angela & Marc&rsquo;s personal
                restaurant recommendations, Ohio River winery itineraries, and a
                seasonal event calendar — is coming before opening day.
                Join the VIP list to get it first.
              </p>
              <Button variant="primary" href="/vip">
                Join the VIP List
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-elevated)" flip={true} />

      {/* Book your stay CTA */}
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
              <ShimmerText delay={0.5}>Stay in the Heart of It All</ShimmerText>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Five minutes from downtown Madison, ten minutes from Clifty Falls —
              and a world away from everything else.
            </p>
            <Button variant="secondary" size="lg" href="/stays">
              Explore Our Stays
            </Button>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
