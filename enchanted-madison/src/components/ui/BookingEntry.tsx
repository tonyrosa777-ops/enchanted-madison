import { Button } from "./Button";
import type { ExperiencePackage } from "../../content/experiences";
import type { Stay } from "../../content/stays";

type BookingEntryProps = {
  stayOptions: Stay[];
  experienceOptions: ExperiencePackage[];
};

export function BookingEntry({
  stayOptions,
  experienceOptions,
}: BookingEntryProps) {
  return (
    <section className="rounded-[2rem] border border-forest/10 bg-ivory p-6 shadow-warm">
      <p className="font-accent text-3xl text-gold">Book direct</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-forest">
        I want to escape to
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          Stay or experience
          <select className="min-h-13 rounded-full border border-stone bg-cream px-4 text-sm text-charcoal">
            {stayOptions.map((stay) => (
              <option key={stay.slug}>{stay.name}</option>
            ))}
            {experienceOptions.map((experience) => (
              <option key={experience.name}>{experience.name}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          For dates
          <input
            className="min-h-13 rounded-full border border-stone bg-cream px-4 text-sm text-charcoal"
            defaultValue="Select dates"
            readOnly
          />
        </label>
      </div>
      <p className="mt-4 text-sm leading-7 text-charcoal/75">
        The final booking flow will stay on-domain, show transparent pricing, and
        support both overnight stays and day-use experiences.
      </p>
      <div className="mt-6">
        <Button href="/stays">Check Availability</Button>
      </div>
    </section>
  );
}
