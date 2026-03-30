import Link from "next/link";

import { primaryNavigation } from "../../content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-content-xl flex-col gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col">
            <span className="font-accent text-xl text-gold">Enchanted</span>
            <span className="font-heading text-lg font-semibold text-forest">
              The Enchanted Collective
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/vip"
              className="rounded-full border border-gold px-4 py-2 text-sm font-semibold text-forest transition hover:bg-gold hover:text-night"
            >
              Unlock VIP Access
            </Link>
            <Link
              href="/stays"
              className="rounded-full bg-rose px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Check Dates
            </Link>
          </div>
        </div>

        <nav aria-label="Primary" className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-2">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full border border-forest/10 bg-ivory px-4 py-2 text-sm font-medium text-charcoal transition hover:border-gold hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
