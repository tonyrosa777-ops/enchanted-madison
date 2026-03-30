import Image from "next/image";

import { Button } from "./Button";
import type { Stay } from "../../content/stays";

type PropertyCardProps = {
  stay: Stay;
  /** Destination for the primary CTA. Defaults to /stays/[slug]. */
  href?: string;
};

export function PropertyCard({ stay, href }: PropertyCardProps) {
  const destination = href ?? `/stays/${stay.slug}`;
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-ivory shadow-warm">
      {/* Image / placeholder ─────────────────────────────────────────── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-night">
        {stay.image ? (
          <Image
            src={stay.image}
            alt={stay.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          /* Warm gradient placeholder — replace with real photography when available */
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 30% 100%, rgba(184,150,90,0.25) 0%, transparent 55%), linear-gradient(160deg, #1A2A1E 0%, #2C3E2D 50%, #1E3320 100%)",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
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
        <Button href={destination}>Check Availability</Button>
      </div>
      </div>
    </article>
  );
}
