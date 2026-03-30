import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="bg-cream">
      <section className="relative overflow-hidden border-b border-forest/10 bg-[radial-gradient(circle_at_top,_rgba(184,150,90,0.18),_transparent_40%),linear-gradient(180deg,_rgba(245,240,235,1)_0%,_rgba(254,252,250,1)_100%)]">
        <div className="mx-auto flex w-full max-w-content-xl flex-col gap-6 px-5 py-20 lg:px-8 lg:py-28">
          {eyebrow ? (
            <p className="font-accent text-3xl text-gold">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-none text-forest lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-content-md text-lg leading-8 text-charcoal/80 lg:text-xl">
            {description}
          </p>
        </div>
      </section>
      {children}
    </main>
  );
}
