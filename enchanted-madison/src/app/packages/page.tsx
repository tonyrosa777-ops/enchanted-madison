// /packages — Stay Enhancement Add-Ons
// Source: initial-business-data.md §6
// Rebuilt: dark hero + image cards + brand animations matching proposals/date-night quality

import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { AddonCard } from "@/components/ui/AddonCard";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Enhancements for Your Stay",
  description:
    "Upgrade your stay at The Enchanted Collective. Romance packages, outdoor movie nights, s'mores skillets, picnic rides, and more — bookable at checkout.",
};

const addonMeta: Record<string, {
  tag: string;
  tagColor: string;
  image: string;
  imageAlt: string;
  highlight?: boolean;
}> = {
  "Classic Romance Package": {
    tag: "Most Romantic",
    tagColor: "var(--accent-rose)",
    image: "/images/addons/classic-romance.webp",
    imageAlt: "Rose petal trail and floating candles in private hot tub",
  },
  "Ultimate Romance Experience": {
    tag: "Most Popular",
    tagColor: "var(--primary)",
    image: "/images/addons/ultimate-romance.webp",
    imageAlt: "Gourmet charcuterie, champagne, and breakfast basket",
    highlight: true,
  },
  "Outdoor Movie Night": {
    tag: "Unforgettable",
    tagColor: "var(--accent)",
    image: "/images/addons/outdoor-movie.webp",
    imageAlt: "150-inch outdoor cinema screen with fairy light movie beds",
  },
  "S'mores Skillet": {
    tag: "Fan Favorite",
    tagColor: "var(--accent)",
    image: "/images/addons/smores-skillet.webp",
    imageAlt: "Cast iron s'mores skillet glowing over campfire",
  },
  "Picnic and Ride": {
    tag: "Adventure",
    tagColor: "var(--primary)",
    image: "/images/addons/picnic-and-ride.webp",
    imageAlt: "Romantic picnic blanket and electric bikes on Indiana trail",
  },
};

export default function PackagesPage() {
  const featured = siteData.addons.find(a => a.name === "Ultimate Romance Experience")!;
  const rest = siteData.addons.filter(a => a.name !== "Ultimate Romance Experience");

  return (
    <PageShell>

      {/* ── Dark Hero ── */}
      <section
        className="relative pt-32 pb-0 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={20} />
        <GodRays />
        <Embers count={14} />

        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Enhancements for Your Stay
          </p>
          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "var(--text-on-dark)",
            }}
          >
            <ShimmerText delay={1}>Make It Unforgettable</ShimmerText>
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "rgba(254,252,250,0.72)",
            }}
          >
            Rose petals waiting when you arrive. A fire already laid. The movie cued up.
            Every add-on is set before you check in — nothing to coordinate.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {[
              "Added at checkout — no extra coordination",
              "Everything set up before you arrive",
              "5 thoughtful enhancements from $24",
            ].map((item) => (
              <span
                key={item}
                className="text-xs flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  color: "rgba(254,252,250,0.5)",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "var(--accent)" }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* ── Featured card — Ultimate Romance Experience ── */}
      <section className="pt-4 pb-6 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto">
          <ScaleIn delay={0.05}>
            <article
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "var(--primary)",
                boxShadow: "0 24px 64px rgba(74,58,46,0.22)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={addonMeta["Ultimate Romance Experience"].image}
                    alt={addonMeta["Ultimate Romance Experience"].imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 hidden lg:block"
                    style={{
                      background: "linear-gradient(to right, transparent 60%, var(--primary) 100%)",
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-full text-[10px] font-bold"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "var(--accent)",
                        color: "var(--bg-dark)",
                      }}
                    >
                      ✦ Most Popular
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p
                    className="mb-2 text-xs font-semibold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(254,252,250,0.5)",
                    }}
                  >
                    The Full Experience
                  </p>
                  <h2
                    className="mb-4 leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "clamp(24px, 3vw, 36px)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {featured.name}
                  </h2>
                  <p
                    className="mb-6 text-base leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(254,252,250,0.75)",
                    }}
                  >
                    {featured.description}
                  </p>

                  <ul className="flex flex-col gap-2 mb-8">
                    {[
                      "Everything in Classic Romance",
                      "Gourmet charcuterie board",
                      "Breakfast basket — OJ, fruit, muffins",
                      "Premium cigar",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm"
                        style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.82)" }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className="text-4xl font-bold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                      >
                        ${featured.price}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "rgba(254,252,250,0.4)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Added at checkout
                      </p>
                    </div>
                    <Button variant="ghost-light" size="sm" href="/stays">
                      Book a Stay
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </ScaleIn>
        </div>
      </section>

      {/* ── Remaining 4 add-ons grid ── */}
      <section className="py-10 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((addon, i) => {
            const meta = addonMeta[addon.name] ?? {
              tag: "Add-On",
              tagColor: "var(--accent)",
              image: "/images/accommodations/enchanted-cottage.webp",
              imageAlt: addon.name,
            };

            return (
              <ScaleIn key={addon.name} delay={i * 0.08}>
                <AddonCard>
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={meta.image}
                      alt={meta.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 40vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to bottom, transparent 50%, rgba(10,8,6,0.5) 100%)",
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-[9px] font-bold"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background: meta.tagColor,
                          color: "var(--text-on-dark)",
                        }}
                      >
                        {meta.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h2
                      className="leading-snug"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {addon.name}
                    </h2>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                    >
                      {addon.description}
                    </p>
                    <div
                      className="flex items-center justify-between pt-3 mt-auto"
                      style={{ borderTop: "1px solid var(--primary-muted)" }}
                    >
                      <p
                        className="text-2xl font-bold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
                      >
                        ${addon.price}
                        {"priceNote" in addon && addon.priceNote && (
                          <span
                            className="text-sm font-normal ml-1"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                          >
                            {addon.priceNote}
                          </span>
                        )}
                      </p>
                      <span
                        className="text-[10px] font-semibold"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        Add at checkout
                      </span>
                    </div>
                  </div>
                </AddonCard>
              </ScaleIn>
            );
          })}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>How It Works</p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "var(--text-primary)",
                }}
              >
                Arrive to Everything Ready
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {[
              { step: "01", label: "Choose your stay", detail: "Pick a cottage, glamping tent, or campsite", icon: "🏕" },
              { step: "02", label: "Add your extras", detail: "Select any enhancements at checkout — no minimum", icon: "✦" },
              { step: "03", label: "Arrive to magic", detail: "Rose petals laid. Fire started. Movie queued.", icon: "🕯" },
            ].map((item, i) => (
              <ScaleIn key={item.step} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 text-center flex flex-col items-center gap-4"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                    style={{ background: "var(--bg-elevated)" }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    Step {item.step}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.15rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {item.detail}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="text-center">
              <Button variant="primary" size="lg" href="/stays">Browse Stays</Button>
              <p
                className="mt-3 text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                Add enhancements during the booking flow — no separate purchase needed
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={12} />
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Ready to Upgrade Your Night?
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "var(--text-on-dark)",
            }}
          >
            Every detail handled.<br />You just show up.
          </h2>
          <Button variant="secondary" size="lg" href="/stays">
            Choose Your Stay
          </Button>
        </FadeUp>
      </section>

    </PageShell>
  );
}
