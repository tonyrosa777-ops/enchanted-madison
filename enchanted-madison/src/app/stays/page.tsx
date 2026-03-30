import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";
import { stays } from "../../content/stays";

export const metadata: Metadata = {
  title: "Stays",
};

export default function StaysPage() {
  return (
    <PageShell
      eyebrow="Stay the night"
      title="Stays Designed for Slow, Romantic Escapes"
      description="A cottage, a luxury glamping tent, and curated campsite options, each positioned with transparent starting prices and a more guided booking path."
    >
      <section className="mx-auto grid w-full max-w-content-xl gap-5 px-5 py-12 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {stays.map((stay) => (
          <article
            key={stay.slug}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
              {stay.category}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-forest">
              {stay.name}
            </h2>
            <p className="mt-2 text-base font-semibold text-rose">{stay.startingRate}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">{stay.summary}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
