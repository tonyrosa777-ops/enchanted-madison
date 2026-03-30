import Link from "next/link";

import { primaryNavigation } from "../../content/navigation";
import { siteContent } from "../../content/site";

export function SiteFooter() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto grid w-full max-w-content-xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-accent text-2xl text-gold">Where romance meets the wild</p>
          <h2 className="font-heading text-3xl font-semibold">
            {siteContent.name}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-ivory/80">
            Luxury glamping, private hot tubs, and curated romantic escapes near
            Clifty Falls and historic downtown Madison, Indiana.
          </p>
          <div className="space-y-1 text-sm text-ivory/80">
            <p>{siteContent.location}</p>
            <p>{siteContent.phone}</p>
            <p>{siteContent.email}</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ivory/80 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
