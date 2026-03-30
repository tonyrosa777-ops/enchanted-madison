import Link from "next/link";

/**
 * HeroSection — full-viewport cinematic hero for the homepage.
 *
 * Design authorization:
 *   - design-contract.md §5 (buttons: primary rose, secondary gold border)
 *   - design-contract.md §2 (colors: night, ivory, gold, rose, forest)
 *   - design-contract.md §3 (H1 mobile 3rem / desktop 4.5rem, Cormorant Garamond 600, lh 0.95)
 *   - design-contract.md §6 (mood: moody, intimate, warm golden tones)
 *   - frontend-design.md (bold aesthetic direction: luxury/refined, spatial composition,
 *     backgrounds with depth and atmosphere, staggered scroll reveal)
 *
 * Placeholder gradient simulates a dusk woodland scene. When real photography
 * is available, replace the gradient with a Next.js <Image priority> behind the
 * overlay div — no other changes required.
 */
export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden"
      aria-label="Welcome to Enchanted Madison"
    >
      {/* Background — placeholder gradient until hero photography is ready.
          Three-layer composite: deep forest base + warm fire-glow from lower-left
          + soft rose bloom from lower-right. Mimics golden-hour-into-dusk light. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 55% at 15% 105%, rgba(184,150,90,0.28) 0%, transparent 55%)",
            "radial-gradient(ellipse 70% 50% at 85% 95%, rgba(196,145,123,0.18) 0%, transparent 50%)",
            "linear-gradient(175deg, #1A2A1E 0%, #2C3E2D 45%, #1E3320 75%, #1A2A1E 100%)",
          ].join(", "),
        }}
      />

      {/* Subtle texture overlay — fine grain to add depth per frontend-design.md */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Bottom vignette — pulls eye toward the CTA area */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-1/3 bg-gradient-to-t from-night/60 to-transparent" />

      {/* Content — positioned in the lower third for cinematic composition */}
      <div className="relative z-10 mx-auto w-full max-w-[80rem] px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
        {/* Eyebrow / location accent */}
        <p className="mb-4 font-accent text-2xl text-gold lg:text-3xl">
          Madison, Indiana
        </p>

        {/* Primary headline — design-contract §3: H1 mobile 3rem / desktop 4.5rem */}
        <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[0.95] text-ivory lg:text-[4.5rem]">
          Where Romance<br />
          Meets the Wild
        </h1>

        {/* Sub-headline — sensory-first per design-contract §7 Principle 1 */}
        <p className="mt-5 max-w-lg text-base leading-7 text-ivory/75 lg:text-lg lg:leading-8">
          Luxury glamping, private hot tubs, and curated experiences
          in the woods of Madison — minutes from Clifty Falls and
          historic downtown.
        </p>

        {/* CTAs — design-contract §5: primary rose, secondary gold border */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/stays"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
          >
            Check Dates
          </Link>
          <Link
            href="/proposals"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
          >
            Plan a Proposal
          </Link>
        </div>

        {/* Location trust line */}
        <p className="mt-8 text-xs font-medium uppercase tracking-widest text-ivory/40">
          Madison, IN&nbsp;&nbsp;·&nbsp;&nbsp;Near Clifty Falls State Park&nbsp;&nbsp;·&nbsp;&nbsp;Opening June 2026
        </p>
      </div>

      {/* Scroll indicator — subtle animated line */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/30">
            Scroll
          </span>
          <div className="h-8 w-px overflow-hidden rounded-full bg-ivory/20">
            <div
              className="h-full w-px bg-gold"
              style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
