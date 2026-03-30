import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { aboutContent } from "../../content/about";
import { madisonGuideContent } from "../../content/madison-guide";

export const metadata: Metadata = {
  title: "Madison Guide",
  description:
    "Discover what's near The Enchanted Collective — Clifty Falls State Park, the Lanier Mansion, historic downtown Madison, and the Ohio River, all within minutes.",
  openGraph: {
    title: "Madison, Indiana Guide | The Enchanted Collective",
    description:
      "Clifty Falls State Park, the Lanier Mansion, historic downtown Madison, and the Ohio River — all within minutes of your stay.",
    url: "/madison-guide",
    type: "website",
  },
};

const categoryIcons: Record<string, string> = {
  nature: "🌿",
  history: "🏛",
  dining: "🍽",
  shopping: "🛍",
  winery: "🍷",
  activity: "🚴",
};

export default function MadisonGuidePage() {
  return (
    <PageShell
      eyebrow={madisonGuideContent.eyebrow}
      title={madisonGuideContent.headline}
      description={madisonGuideContent.intro}
    >
      {/* ── Proximity strip ───────────────────────────────────────────────── */}
      <section className="border-b border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-8 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone">
            From The Enchanted Collective
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutContent.proximity.slice(0, 6).map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-forest/10 bg-cream px-4 py-2"
              >
                <span className="text-sm font-semibold text-gold">{item.distance}</span>
                <span className="text-sm text-charcoal/75">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attraction cards ──────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {madisonGuideContent.attractions.map((attraction) => (
              <article
                key={attraction.slug}
                className={[
                  "flex flex-col rounded-[2rem] border p-7",
                  attraction.needsDetail
                    ? "border-forest/10 bg-ivory/60 opacity-70"
                    : "border-forest/10 bg-ivory shadow-warm",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {categoryIcons[attraction.category] ?? "📍"}
                  </span>
                  {attraction.distance && (
                    <span className="text-xs font-semibold text-gold">{attraction.distance}</span>
                  )}
                </div>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-forest lg:text-3xl">
                  {attraction.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/75">
                  {attraction.detail ?? attraction.summary}
                </p>
                {attraction.needsDetail && (
                  <p className="mt-auto pt-4 text-xs text-stone italic">
                    More detail coming soon.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-night">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-accent text-2xl text-gold">Make it a full weekend</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ivory lg:text-4xl">
                Stay in the middle of all of it.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-ivory/70">
                The Enchanted Collective is five minutes from everything on this page.
                Wake up in the woods, hike the falls, explore downtown — and come back
                to your hot tub in the evening.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/stays"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Browse Stays
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
