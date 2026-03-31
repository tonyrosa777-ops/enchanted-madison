// ExperienceCard — design-system.md §5 (Component Style Rules → Cards)
// Used on /date-night, /proposals, homepage experience section
// Image aspect: 4:3 (slightly more square, intimate feel) per design-system.md §6

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface ExperienceCardProps {
  href: string;
  name: string;
  eyebrow: string;
  description: string;
  priceFrom: number;
  duration?: string;
  image?: string;
  badge?: string; // e.g. "Most Popular"
}

export function ExperienceCard({
  href,
  name,
  eyebrow,
  description,
  priceFrom,
  duration,
  image,
  badge,
}: ExperienceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Image — 4:3 aspect ratio */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
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
                background: "var(--accent-rose)",
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
        {/* Eyebrow */}
        <p
          className="eyebrow text-[11px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {eyebrow}
          {duration && ` · ${duration}`}
        </p>

        {/* Name — H3 Cormorant Garamond 600 */}
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

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {description}
        </p>

        {/* Price */}
        <p
          className="text-sm font-medium tracking-wide mt-1"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
          }}
        >
          From ${priceFrom}
        </p>

        <Button variant="secondary" size="sm" href={href} className="w-full mt-1">
          Book This Experience
        </Button>
      </div>
    </Link>
  );
}
