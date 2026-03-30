import Link from "next/link";

import { primaryNavigation } from "../../content/navigation";
import { siteContent } from "../../content/site";

export function SiteFooter() {
  return (
    <footer className="bg-night text-ivory">
      {/* Conversion strip */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex w-full max-w-content-xl flex-col gap-4 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-accent text-2xl text-gold">Opening June 2026</p>
            <p className="mt-1 text-sm text-ivory/70">
              VIP members get first-look booking dates and $25 off their first stay.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/stays"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-rose px-6 py-2.5 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Check Dates
            </Link>
            <Link
              href="/vip"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-gold px-6 py-2.5 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
            >
              Join VIP List
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
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
