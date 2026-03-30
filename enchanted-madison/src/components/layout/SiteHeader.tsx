"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryNavigation } from "../../content/navigation";

/**
 * SiteHeader — sticky, scroll-aware, with mobile hamburger menu.
 *
 * Transparent variant (homepage only):
 *   - When pathname === "/" AND scroll < 80px: transparent bg, ivory text.
 *     Lets the cinematic hero bleed to the top edge of the viewport.
 *   - Past 80px or on any other page: cream/90 + backdrop blur (standard).
 *
 * Mobile nav:
 *   - At < md: pill nav strip hidden; hamburger button shown.
 *   - Hamburger opens a full-screen night overlay with stacked nav links
 *     and the two primary action CTAs at the bottom.
 *   - Menu closes on any link click or the × button.
 *
 * Design authorization:
 *   - design-contract.md §2 colors: cream, forest, gold, rose, ivory, night
 *   - design-contract.md §5 buttons: primary rose, secondary gold border
 *   - frontend-design.md: motion — transitions should be swift and purposeful
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener — only meaningful on the homepage
  useEffect(() => {
    if (!isHome) return;

    function onScroll() {
      setScrolled(window.scrollY > 80);
    }

    // Set initial state (handles browser back-navigation)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change (catches link clicks inside the overlay)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Compute the transparent state
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          isTransparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-forest/10 bg-cream/90 backdrop-blur",
        ].join(" ")}
      >
        <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-3 px-5 py-4 lg:px-8">

          {/* ── Top row: logo · desktop CTAs · hamburger ───────────────────── */}
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-accent text-xl text-gold">Enchanted</span>
              <span
                className={[
                  "font-heading text-lg font-semibold transition-colors duration-300",
                  isTransparent ? "text-ivory" : "text-forest",
                ].join(" ")}
              >
                The Enchanted Collective
              </span>
            </Link>

            {/* Desktop action buttons (hidden on mobile) */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/vip"
                className={[
                  "rounded-full border border-gold px-4 py-2 text-sm font-semibold transition hover:bg-gold hover:text-night",
                  isTransparent ? "text-ivory" : "text-forest",
                ].join(" ")}
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

            {/* Hamburger button (visible only on mobile) */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((v) => !v)}
              className={[
                "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition md:hidden",
                isTransparent
                  ? "border border-ivory/30 text-ivory hover:border-gold"
                  : "border border-forest/20 text-forest hover:border-gold",
              ].join(" ")}
            >
              {/* Three-line icon that morphs to × */}
              <span
                className={[
                  "block h-px w-5 bg-current transition-all duration-200",
                  menuOpen ? "translate-y-[0.4375rem] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-5 bg-current transition-all duration-200",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-5 bg-current transition-all duration-200",
                  menuOpen ? "-translate-y-[0.4375rem] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>

          {/* ── Desktop pill nav (hidden on mobile) ────────────────────────── */}
          <nav aria-label="Primary" className="hidden overflow-x-auto md:block">
            <ul className="flex min-w-max items-center gap-2">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-medium transition",
                      isTransparent
                        ? "border-ivory/20 bg-ivory/10 text-ivory hover:border-gold hover:text-gold"
                        : "border-forest/10 bg-ivory text-charcoal hover:border-gold hover:text-forest",
                      pathname === item.href
                        ? isTransparent
                          ? "border-gold/60 text-gold"
                          : "border-gold/40 text-forest font-semibold"
                        : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Mobile menu overlay ─────────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-0 z-40 flex flex-col bg-night transition-all duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        {/* Overlay header — matches header height to avoid layout jump */}
        <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-accent text-xl text-gold">Enchanted</span>
            <span className="font-heading text-lg font-semibold text-ivory">
              The Enchanted Collective
            </span>
          </Link>
          {/* Close button */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory hover:border-gold"
          >
            <span className="block h-px w-5 translate-y-px rotate-45 bg-current" />
            <span className="absolute block h-px w-5 -rotate-45 bg-current" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "flex items-center rounded-xl px-4 py-3 text-base font-medium transition",
                    pathname === item.href
                      ? "bg-ivory/10 text-gold"
                      : "text-ivory/80 hover:bg-ivory/5 hover:text-ivory",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom action CTAs */}
        <div className="border-t border-ivory/10 px-5 py-6 flex flex-col gap-3">
          <Link
            href="/stays"
            className="flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
          >
            Check Dates
          </Link>
          <Link
            href="/vip"
            className="flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
          >
            Unlock VIP Access
          </Link>
        </div>
      </div>
    </>
  );
}
