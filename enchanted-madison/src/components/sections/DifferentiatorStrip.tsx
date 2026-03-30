/**
 * DifferentiatorStrip — 4 competitive advantages grounded in market research.
 *
 * Design authorization:
 *   - Market-Intelligence-Report.md §3: competitor gap analysis identifies
 *     on-domain booking, transparent pricing, romance-first positioning, and
 *     day-use experiences as under-served in the Madison-Clifty Falls corridor.
 *   - design-contract.md §5 cards: cream bg, 1.5rem radius, warm shadow
 *   - design-contract.md §2: gold for accent numbers, forest for headings
 *   - design-contract.md §4 grid: 1-col mobile → 2-col tablet → 4-col desktop
 */

const differentiators = [
  {
    number: "01",
    heading: "Transparent Pricing",
    body: "From $55/night. Real rates on the page — no surprises at checkout.",
  },
  {
    number: "02",
    heading: "Book Without Leaving",
    body: "Every booking stays on enchantedmadison.com. No third-party redirects.",
  },
  {
    number: "03",
    heading: "Romance-First Design",
    body: "Built for couples, proposals, and curated escapes. Not a family campground.",
  },
  {
    number: "04",
    heading: "Day-Use Experiences",
    body: "Private hot tub escapes from $79. No overnight stay required.",
  },
] as const;

export function DifferentiatorStrip() {
  return (
    <section className="border-b border-forest/10 bg-ivory">
      <div className="mx-auto grid w-full max-w-[80rem] gap-px px-0 md:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item) => (
          <article
            key={item.number}
            className="group border-r border-forest/10 px-6 py-8 last:border-r-0 hover:bg-cream/60 transition-colors"
          >
            <span className="font-accent text-2xl text-gold">{item.number}</span>
            <h3 className="mt-2 font-heading text-xl font-semibold text-forest">
              {item.heading}
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
