import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-night px-5 text-center">
      <p className="font-accent text-3xl text-gold">Lost in the woods?</p>
      <h1 className="mt-4 font-heading text-5xl font-semibold text-ivory lg:text-[4.5rem] lg:leading-[0.95]">
        Page not found.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-7 text-ivory/70">
        The page you&apos;re looking for doesn&apos;t exist — or may have moved.
        Let&apos;s get you back to the good stuff.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
        >
          Get Back to the Woods
        </Link>
        <Link
          href="/stays"
          className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
        >
          Browse Stays
        </Link>
      </div>
    </main>
  );
}
