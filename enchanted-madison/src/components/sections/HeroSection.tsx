import Link from "next/link";

/**
 * HeroSection — full-viewport typographic hero for the homepage.
 *
 * Design philosophy: the headline IS the visual. Without photography,
 * the hero must make the type the centerpiece — large, bold, surrounded
 * by atmospheric depth, not buried at the bottom of a void.
 *
 * Layout: items-center so content fills the space intentionally.
 * The decorative script watermark fills the upper-right with brand
 * personality and creates visual tension with no photography needed.
 *
 * When real photography is available: add <Image priority fill> as the
 * first absolute child, set `justify-end` if you want the lower-third
 * cinematic composition, and remove the decorative watermark.
 *
 * Design authorization:
 *   - design-contract.md §5 (buttons: primary rose, secondary gold border)
 *   - design-contract.md §2 (colors: night, ivory, gold, rose, forest)
 *   - design-contract.md §3 (H1: Cormorant Garamond 600, lh 0.9–0.95)
 *   - design-contract.md §6 (mood: moody, intimate, warm golden tones)
 *   - frontend-design.md (spatial composition: unexpected, bold, memorable —
 *     generous negative space OR controlled density; type as visual element)
 */
export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Welcome to Enchanted Madison"
    >
      {/* ── Background ──────────────────────────────────────────────────── */}
      {/* Five-layer composite: rich deep forest + warm gold fire-glow from
          lower-left + rose bloom from lower-right + top darkening for
          header contrast + radial centre brightening for depth illusion. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 110% 60% at 5% 90%, rgba(184,150,90,0.45) 0%, transparent 55%)",
            "radial-gradient(ellipse 65% 50% at 85% 75%, rgba(196,145,123,0.22) 0%, transparent 55%)",
            "radial-gradient(ellipse 70% 50% at 40% 50%, rgba(44,62,45,0.40) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(8,14,10,0.85) 0%, transparent 50%)",
            "linear-gradient(170deg, #0A120C 0%, #111E14 20%, #1A2A1E 45%, #243524 70%, #1A2A1E 100%)",
          ].join(", "),
        }}
      />

      {/* Grain texture — adds tactile depth, prevents flat-digital look */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
        aria-hidden="true"
      />

      {/* ── Decorative watermark ─────────────────────────────────────────── */}
      {/* Large script "Enchanted" fills the upper-right — creates visual
          interest and brand atmosphere where photography would live later.
          Opacity deliberately low: it's atmosphere, not a text element. */}
      <span
        className="pointer-events-none absolute -right-[8vw] top-[8%] z-0 select-none font-accent leading-none text-gold/[0.07]"
        style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        aria-hidden="true"
      >
        Enchanted
      </span>

      {/* Horizontal rule accent — thin gold line left of content */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="h-px w-[4vw] bg-gradient-to-r from-transparent to-gold/30" />
      </div>

      {/* Bottom fade — softens into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/4 bg-gradient-to-t from-night/70 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-[80rem] px-5 py-32 lg:px-8 lg:py-24">

        {/* Eyebrow */}
        <p className="mb-5 font-accent text-2xl text-gold lg:text-[2rem]">
          Madison, Indiana
        </p>

        {/* Primary headline — large scale is intentional: the type fills
            the space that photography would fill. This is the brand statement. */}
        <h1 className="max-w-[14ch] font-heading text-[3.25rem] font-semibold leading-[0.92] text-ivory lg:text-[5.5rem] lg:leading-[0.88]">
          Where Romance<br />
          Meets the Wild
        </h1>

        {/* Divider */}
        <div className="mt-7 h-px w-16 bg-gold/40" />

        {/* Sub-headline */}
        <p className="mt-5 max-w-[44ch] text-base leading-7 text-ivory/70 lg:text-[1.0625rem] lg:leading-8">
          Luxury glamping, private hot tubs, and curated romantic escapes
          in the woods of Madison — minutes from Clifty Falls.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/stays"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-7 py-3 text-sm font-semibold text-ivory shadow-lg shadow-rose/20 transition hover:bg-forest"
          >
            Check Dates
          </Link>
          <Link
            href="/proposals"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:bg-gold/10"
          >
            Plan a Proposal
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory/35">
          Madison, IN&nbsp;&nbsp;·&nbsp;&nbsp;Near Clifty Falls State Park&nbsp;&nbsp;·&nbsp;&nbsp;Opening June 2026
        </p>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-ivory/25">
            Scroll
          </span>
          <div className="h-9 w-px overflow-hidden rounded-full bg-ivory/15">
            <div
              className="h-full w-px bg-gold/70"
              style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
