// StayCard — design-system.md §5 (Component Style Rules → Cards)
// Used on /stays overview and homepage property grid
// Image aspect: 16:10 (landscape) per design-system.md §6

import Image from "next/image";
import Link from "next/link";

interface StayCardProps {
  slug: string;
  name: string;
  type: string;
  tagline: string;
  priceFrom: number;
  capacity: number;
  image?: string;
  badge?: string; // e.g. "Opening Soon", "Most Popular"
  highlight?: string; // e.g. "Private Hot Tub · King Bed · Fire Pit"
}

export function StayCard({
  slug,
  name,
  type,
  tagline,
  priceFrom,
  capacity,
  image,
  badge,
  highlight,
}: StayCardProps) {
  const href = `/stays/${slug}`;

  return (
    <Link
      href={href}
      className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Image — 16:10 aspect ratio */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          // Placeholder until professional photography is available
          <div
            className="absolute inset-0 flex items-end p-4"
            style={{ background: "var(--bg-elevated)" }}
          >
            <span
              className="eyebrow text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Photo coming soon
            </span>
          </div>
        )}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="eyebrow px-3 py-1 rounded-full text-[10px]"
              style={{
                background: "var(--bg-dark)",
                color: "var(--text-on-dark)",
              }}
            >
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3">
        {/* Type label */}
        <p
          className="eyebrow text-[11px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {type} · Sleeps {capacity}
        </p>

        {/* Property name — H3 Cormorant Garamond 600 */}
        <h3
          className="text-2xl leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {name}
        </h3>

        {/* Tagline */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {tagline}
        </p>

        {/* Highlight pills */}
        {highlight && (
          <p
            className="text-xs"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
          >
            {highlight}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-1">
          <p
            className="text-sm font-medium tracking-wide"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
            }}
          >
            From ${priceFrom}/night
          </p>
        </div>

        <span
          className="inline-flex items-center justify-center rounded-full w-full mt-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group-hover:brightness-110"
          style={{
            background: "var(--accent)",
            color: "var(--text-on-dark)",
            fontFamily: "var(--font-body)",
          }}
        >
          View This Stay
        </span>
      </div>
    </Link>
  );
}
