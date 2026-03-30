import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";

export const metadata: Metadata = {
  title: "Madison Guide",
};

const guideThemes = [
  "Clifty Falls",
  "Historic downtown Madison",
  "Romantic dining",
  "Weekend itineraries",
];

export default function MadisonGuidePage() {
  return (
    <PageShell
      eyebrow="Plan the weekend"
      title="Madison, Indiana Guide"
      description="This route will expand the current thin destination section into a real SEO and planning asset covering local dining, downtown, Clifty Falls, and seasonal reasons to visit."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-2 lg:px-8">
        {guideThemes.map((theme) => (
          <article
            key={theme}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-3xl font-semibold text-forest">{theme}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">
              A future content block focused on discoverability, planning utility,
              and stronger local authority than the current image-based section.
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
