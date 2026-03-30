import { PageShell } from "../components/layout/PageShell";
import { BookingEntry } from "../components/ui/BookingEntry";
import { Button } from "../components/ui/Button";
import { PropertyCard } from "../components/ui/PropertyCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TrustBar } from "../components/ui/TrustBar";
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
            <Button href="/stays">
              Check Availability
            </Button>
            <Button href="/proposals" variant="secondary">
              Explore Proposals
            </Button>
          </div>
        </div>

        <BookingEntry
          stayOptions={stays}
          experienceOptions={[
            ...experienceCollections.proposals.packages,
            ...experienceCollections.dayUse.packages,
          ]}
        />
      </section>

      <section className="mx-auto w-full max-w-content-xl px-5 pb-12 lg:px-8">
        <SectionHeading
          eyebrow="Stay the night"
          title="Distinct stays with pricing you can actually see"
          description="Transparent starting prices and high-value features are part of the trust strategy, not something we hide until checkout."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stays.map((stay) => (
            <PropertyCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>

      <TrustBar />

      <section className="bg-[linear-gradient(180deg,_rgba(26,42,30,1)_0%,_rgba(44,62,45,1)_100%)] text-ivory">
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
