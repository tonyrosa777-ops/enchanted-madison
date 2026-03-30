import { SectionHeading } from "../components/ui/SectionHeading";
import { PropertyCard } from "../components/ui/PropertyCard";
import { TrustBar } from "../components/ui/TrustBar";
import { HeroSection } from "../components/sections/HeroSection";
import { DifferentiatorStrip } from "../components/sections/DifferentiatorStrip";
import { ExperiencesSection } from "../components/sections/ExperiencesSection";
import { VIPCapture } from "../components/sections/VIPCapture";
import { stays } from "../content/stays";

/**
 * Homepage — fully composed marketing page.
 *
 * Section order and rationale (grounded in Market-Intelligence-Report.md §5 conversion strategy):
 *   1. HeroSection      — establish brand and context immediately; primary CTA above fold
 *   2. DifferentiatorStrip — answer "why us?" before visitors scroll away
 *   3. Stays grid       — show transparent pricing early; converts browsers to bookers
 *   4. TrustBar         — reinforce credibility before the experience upsell
 *   5. ExperiencesSection — proposals/date night/day-use upsell; secondary revenue
 *   6. VIPCapture       — collect leads for non-immediate buyers; pre-launch offer
 */
export default function Home() {
  return (
    <main>
      {/* 1 — Cinematic full-viewport hero */}
      <HeroSection />

      {/* 2 — Competitive differentiators: transparent pricing, on-domain booking,
               romance-first positioning, day-use availability */}
      <DifferentiatorStrip />

      {/* 3 — Stays grid with visible starting rates */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-20 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Stay the night"
            title="Distinct stays with pricing you can actually see"
            description="From woodland glamping tents to a private cottage — every accommodation includes a hot tub and fire pit. Prices start on the page, not after you click through."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stays.map((stay) => (
              <PropertyCard key={stay.slug} stay={stay} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Trust signals: differentiation claims as scannable chips */}
      <TrustBar />

      {/* 5 — Experiences: proposals, date night, day-use cards */}
      <ExperiencesSection />

      {/* 6 — VIP email capture: $25 off + Madison Weekend Guide */}
      <VIPCapture />
    </main>
  );
}
