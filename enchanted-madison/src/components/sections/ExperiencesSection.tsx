import Link from "next/link";

import { experienceCollections } from "../../content/experiences";

/**
 * ExperiencesSection — proposals, date night, and day-use experience cards.
 *
 * Design authorization:
 *   - design-contract.md §2: night/forest gradient bg, gold borders, ivory text
 *   - design-contract.md §5 cards: translucent night glass on dark sections
 *   - design-contract.md §5 buttons: primary rose for booking, secondary gold border for exploration
 *   - design-contract.md §7 Principle 2: "romantic, not vague" — copy leads with sensory detail
 *   - Market-Intelligence-Report.md §3: proposal packages and day-use are the primary
 *     untapped revenue gaps in the corridor; lead with them prominently.
 */

const experienceConfig = [
  {
    key: "proposals" as const,
    eyebrow: "Milestone moments",
    description:
      "Candles, roses, champagne, and a setup styled for the night you'll never forget. Two packages — we handle every detail.",
    href: "/proposals",
    ctaLabel: "Explore Proposal Packages",
    accentColor: "border-rose/40",
  },
  {
    key: "dateNight" as const,
    eyebrow: "For two, or for the girls",
    description:
      "A private evening with fire, wine, and the sky. No overnight stay required — just a curated escape that actually feels like one.",
    href: "/date-night",
    ctaLabel: "See Date Night Escapes",
    accentColor: "border-gold/40",
  },
  {
    key: "dayUse" as const,
    eyebrow: "By the hour",
    description:
      "Two hours. A private hot tub. Robes, ambient lighting, and a sparkling beverage waiting. From $79/couple.",
    href: "/stays",
    ctaLabel: "Book a Hot Tub Escape",
    accentColor: "border-ivory/20",
  },
] as const;

export function ExperiencesSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Curated experiences"
      style={{
        background:
          "linear-gradient(175deg, #1A2A1E 0%, #2C3E2D 50%, #1A2A1E 100%)",
      }}
    >
      {/* Subtle warm radial behind the cards */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(184,150,90,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-5 py-20 lg:px-8 lg:py-24">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-accent text-2xl text-gold">Beyond the stay</p>
          <h2 className="mt-2 max-w-xl font-heading text-4xl font-semibold leading-tight text-ivory lg:text-5xl">
            Experiences built for<br />the moments that matter
          </h2>
        </div>

        {/* Experience cards grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {experienceConfig.map(({ key, eyebrow, description, href, ctaLabel, accentColor }) => {
            const collection = experienceCollections[key];
            return (
              <article
                key={key}
                className={`flex flex-col rounded-[1.75rem] border ${accentColor} bg-ivory/5 p-6 backdrop-blur-sm`}
              >
                {/* Card header */}
                <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                  {eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-ivory lg:text-3xl">
                  {collection.heading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ivory/70">{description}</p>

                {/* Package list */}
                <ul className="mt-5 flex flex-col gap-3">
                  {collection.packages.map((pkg) => (
                    <li
                      key={pkg.name}
                      className="rounded-xl border border-ivory/10 bg-night/40 px-4 py-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-ivory/90">
                          {pkg.name}
                        </span>
                        <span className="shrink-0 text-sm font-semibold text-gold">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-ivory/55">
                        {pkg.summary}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Card CTA — pushed to bottom */}
                <div className="mt-auto pt-6">
                  <Link
                    href={href}
                    className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
