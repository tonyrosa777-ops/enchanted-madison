import Link from "next/link";

import { PageShell } from "../components/layout/PageShell";
import { experienceCollections } from "../content/experiences";
import { siteContent } from "../content/site";
import { stays } from "../content/stays";

export default function Home() {
  return (
    <PageShell
      eyebrow="Enchanted Madison"
      title="Where Romance Meets the Wild"
      description="Luxury glamping, private hot tubs, and curated experiences in the woods of Madison, Indiana, minutes from Clifty Falls and historic downtown."
    >
      <section className="mx-auto grid w-full max-w-content-xl gap-6 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-[2rem] bg-night px-6 py-8 text-ivory shadow-warm">
          <p className="font-accent text-3xl text-gold">Join 400+ couples on the VIP list</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">
            Early access, first-look dates, and a sweeter launch offer.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/80">
            {siteContent.vipOffer}. Built for milestone getaways, proposal plans,
            and the kind of stays people send to each other at midnight.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/stays"
              className="rounded-full bg-rose px-5 py-3 font-semibold text-ivory transition hover:bg-gold hover:text-night"
            >
              Check Availability
            </Link>
            <Link
              href="/proposals"
              className="rounded-full border border-gold px-5 py-3 font-semibold text-ivory transition hover:bg-gold hover:text-night"
            >
              Explore Proposals
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-forest/10 bg-ivory px-6 py-8 shadow-warm">
          <p className="font-accent text-3xl text-gold">Book direct</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-forest">
            Your stay should feel seamless before you even arrive.
          </h2>
          <p className="mt-4 text-base leading-7 text-charcoal/75">
            The booking experience will stay on-brand and on-domain, with guided
            entry points for overnight stays, proposal packages, and date-night
            escapes.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-content-xl px-5 pb-12 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
        </div>
      </section>

      <section className="border-y border-forest/10 bg-forest text-ivory">
        <div className="mx-auto grid w-full max-w-content-xl gap-6 px-5 py-12 lg:grid-cols-3 lg:px-8">
          <article className="rounded-[1.75rem] border border-gold/30 bg-ivory/5 p-6">
            <h2 className="font-heading text-3xl font-semibold">
              {experienceCollections.proposals.heading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ivory/75">
              Packages that turn the region’s local glamping gap into a true
              proposal destination.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-gold/30 bg-ivory/5 p-6">
            <h2 className="font-heading text-3xl font-semibold">
              {experienceCollections.dateNight.heading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ivory/75">
              Built for couples and curated small groups, not generic weekend
              traffic.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-gold/30 bg-ivory/5 p-6">
            <h2 className="font-heading text-3xl font-semibold">
              {experienceCollections.dayUse.heading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ivory/75">
              Day-use revenue and romance-led packages are part of the core model,
              not an afterthought.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
