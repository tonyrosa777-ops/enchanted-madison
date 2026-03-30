import { Button } from "./Button";
import type { Stay } from "../../content/stays";

type PropertyCardProps = {
  stay: Stay;
};

export function PropertyCard({ stay }: PropertyCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone">
        {stay.category}
      </p>
      <h3 className="mt-3 font-heading text-3xl font-semibold text-forest">
        {stay.name}
      </h3>
      <p className="mt-2 text-base font-semibold text-rose">{stay.startingRate}</p>
      <p className="mt-4 text-sm leading-7 text-charcoal/75">{stay.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {stay.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full border border-forest/10 bg-cream px-3 py-1 text-xs font-medium text-forest"
          >
            {highlight}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="/stays">Book This Escape</Button>
      </div>
    </article>
  );
}
