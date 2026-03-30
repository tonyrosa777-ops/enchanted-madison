import type { Metadata } from "next";

import { VIPCapture } from "../../components/sections/VIPCapture";

export const metadata: Metadata = {
  title: "VIP Early Access",
  description:
    "Join the Enchanted Madison VIP list for first-look booking dates, $25 off your first stay, and a free Madison Weekend Guide. Opening June 2026.",
  openGraph: {
    title: "VIP Early Access | The Enchanted Collective",
    description:
      "Join the VIP list for first-look booking dates and $25 off your first stay. Opening June 2026.",
    url: "/vip",
    type: "website",
  },
};

export default function VIPPage() {
  return (
    <main>
      {/* Intro block above the capture form */}
      <section className="border-b border-forest/10 bg-cream">
        <div className="mx-auto w-full max-w-[56rem] px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="font-accent text-3xl text-gold">Opening June 2026</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold leading-[0.95] text-forest lg:text-[4.5rem]">
            Be first through the gate.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-charcoal/75 lg:text-lg">
            VIP members get first access to booking dates before we open to the
            public — plus a $25 credit and a curated Madison Weekend Guide to
            start planning.
          </p>
        </div>
      </section>

      {/* Reuse the existing VIPCapture section */}
      <VIPCapture />
    </main>
  );
}
