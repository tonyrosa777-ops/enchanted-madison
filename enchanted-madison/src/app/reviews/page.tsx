import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";

export const metadata: Metadata = {
  title: "Reviews",
};

const placeholders = [
  "Founder story and early guest trust proof",
  "Future Google review integration",
  "Quote-based reassurance for couples-first booking",
];

export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Proof builds trust"
      title="Guest Reviews"
      description="The final version of this page will move beyond the current thin three-card layout and become a stronger trust surface across the funnel."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-3 lg:px-8">
        {placeholders.map((item) => (
          <article
            key={item}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-2xl font-semibold text-forest">{item}</h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
