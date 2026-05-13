// PageShell — wraps all pages with SiteHeader + SiteFooter
// Phase 1 task: compose header and footer into shell
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingCTA } from "./FloatingCTA";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <FloatingCTA />
      <SiteFooter />
    </>
  );
}
