import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";

export const metadata: Metadata = {
  title: "Packages",
};

const packageCategories = [
  "Romance add-ons",
  "Proposal enhancements",
  "Date night extras",
  "Hot tub upgrades",
];

export default function PackagesPage() {
  return (
    <PageShell
      eyebrow="Enhance the stay"
      title="Add to Your Escape Without Guessing What It Costs"
      description="This route replaces the current paragraph-heavy package page with a structure built for pricing clarity, visual hierarchy, and direct add-on intent."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-2 lg:px-8">
        {packageCategories.map((category) => (
          <article
            key={category}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-3xl font-semibold text-forest">{category}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">
              Final implementation will turn this category into a card-based add-on
              system with visible pricing, inclusions, and a direct booking path.
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
