const trustPoints = [
  "Only luxury glamping retreat in the Madison-Clifty Falls corridor",
  "Private hot tubs at every accommodation",
  "5 minutes from Clifty Falls and historic downtown Madison",
  "Curated experiences for proposals, day-use escapes, and romantic stays",
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-forest/10 bg-forest text-ivory">
      <div className="mx-auto grid w-full max-w-content-xl gap-4 px-5 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustPoints.map((point) => (
          <p
            key={point}
            className="rounded-[1.5rem] border border-gold/30 bg-ivory/5 px-4 py-4 text-sm leading-6 text-ivory/85"
          >
            {point}
          </p>
        ))}
      </div>
    </section>
  );
}
