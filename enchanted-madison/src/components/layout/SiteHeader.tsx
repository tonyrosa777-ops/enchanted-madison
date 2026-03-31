// SiteHeader — design-system.md §5 (Navigation)
// Default: transparent bg, --text-on-dark (sits over hero)
// Scrolled: --bg-card/95 backdrop-blur, --text-primary, border-b
// Mobile: full-screen overlay from right

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { useCart } from "@/lib/cart";
import { CartDrawer } from "@/components/shop/CartDrawer";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const { count, openCart } = useCart();

  // Non-homepage pages have light backgrounds — nav must always show dark state.
  const [scrolled, setScrolled] = useState(!isHomepage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // On homepage: transparent until scrolled. On all other pages: always solid.
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b shadow-sm"
            : "border-b border-transparent"
        )}
        style={
          scrolled
            ? {
                background: "color-mix(in srgb, var(--bg-card) 95%, transparent)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderBottomColor: "var(--primary-muted)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
            onClick={closeMenu}
          >
            <span
              className="text-xl tracking-wide"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: scrolled ? "var(--primary)" : "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={4} interval={12}>The Enchanted Collective</ShimmerText>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteData.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity duration-200 hover:opacity-70"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: scrolled ? "var(--text-primary)" : "var(--text-on-dark)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={scrolled ? "primary" : "ghost-light"}
              size="sm"
              href={siteData.nav.cta.href}
            >
              {siteData.nav.cta.label}
            </Button>

            {/* Cart icon */}
            <button
              onClick={openCart}
              aria-label={`Open cart${count > 0 ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
              className="relative p-2 transition-opacity hover:opacity-70"
              style={{ color: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "var(--accent-rose)", color: "var(--text-on-dark)" }}
                >
                  {count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile cart + hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={openCart}
              aria-label={`Open cart${count > 0 ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
              className="relative p-2 transition-opacity hover:opacity-70"
              style={{ color: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {count > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: "var(--accent-rose)", color: "var(--text-on-dark)" }}
                >
                  {count}
                </span>
              )}
            </button>

            <button
              className="flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300 origin-center",
                  menuOpen ? "rotate-45 translate-y-2" : ""
                )}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300",
                  menuOpen ? "opacity-0" : ""
                )}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 transition-all duration-300 origin-center",
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-10 px-8 lg:hidden"
            style={{ background: "var(--bg-base)" }}
          >
            <nav className="flex flex-col gap-6 mt-4">
              {siteData.nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "2rem",
                      color: "var(--text-primary)",
                    }}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Button
                variant="primary"
                size="lg"
                href={siteData.nav.cta.href}
                className="w-full"
                onClick={closeMenu}
              >
                {siteData.nav.cta.label}
              </Button>

              <div className="mt-6 flex flex-col gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p style={{ fontFamily: "var(--font-body)" }}>{siteData.phone}</p>
                <p style={{ fontFamily: "var(--font-body)" }}>{siteData.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer — position:fixed, renders at any nesting level */}
      <CartDrawer />
    </>
  );
}
