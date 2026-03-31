// SiteFooter — design-system.md §2 (--bg-dark, --text-on-dark)
// Background: Deep Night (#1A2A1E)
// Three-column layout: brand | navigation | contact

import Link from "next/link";
import { siteData } from "@/data/site";

const footerLinks = {
  Stays: [
    { label: "The Enchanted Cottage", href: "/stays/enchanted-cottage" },
    { label: "The Velvet Buck", href: "/stays/velvet-buck" },
    { label: "Bell Tent Campsite", href: "/stays/bell-tent" },
    { label: "Bring Your Own Tent", href: "/stays/campsite" },
  ],
  Experiences: [
    { label: "Date Night Escapes", href: "/date-night" },
    { label: "Proposal Packages", href: "/proposals" },
    { label: "Add-On Packages", href: "/packages" },
    { label: "Madison Guide", href: "/madison-guide" },
  ],
  "The Property": [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "VIP Early Access", href: "/vip" },
  ],
};

export function SiteFooter() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "var(--bg-dark)", color: "var(--text-on-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span
                className="text-xl tracking-wide hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "var(--text-on-dark)",
                }}
              >
                The Enchanted<br />Collective
              </span>
            </Link>

            <p
              className="mt-4 text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(254,252,250,0.65)",
              }}
            >
              Luxury glamping, private hot tubs, and curated romantic escapes — just minutes
              from Clifty Falls and historic downtown Madison, Indiana.
            </p>

            <div className="mt-6 space-y-1">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                Opening June 2026
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}
              >
                {siteData.address}
              </p>
              <a
                href={`tel:${siteData.phone}`}
                className="block text-sm hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}
              >
                {siteData.phone}
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="block text-sm hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}
              >
                {siteData.email}
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="mb-4 text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                }}
              >
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(254,252,250,0.75)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(254,252,250,0.12)",
            fontFamily: "var(--font-mono)",
            color: "rgba(254,252,250,0.4)",
            letterSpacing: "0.04em",
          }}
        >
          <p>© {new Date().getFullYear()} The Enchanted Collective. All rights reserved.</p>
          <p>Madison, Indiana · enchantedmadison.com</p>
        </div>
      </div>
    </footer>
  );
}
