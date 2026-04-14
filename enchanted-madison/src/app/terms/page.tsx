// /terms — Terms & Conditions (including SMS Terms)
// Required by 10DLC SMS compliance (Nextiva)

import { PageShell } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/animations/FadeUp";
import { ShimmerText } from "@/components/animations/ShimmerText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for The Enchanted Collective — SMS messaging terms, opt-in/opt-out, and service terms.",
};

const lastUpdated = "April 13, 2026";

export default function TermsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4 text-center"
        style={{ background: "var(--bg-base)" }}
      >
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Legal
          </p>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--text-primary)",
            }}
          >
            <ShimmerText delay={1}>Terms & Conditions</ShimmerText>
          </h1>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}
          >
            Last updated: {lastUpdated}
          </p>
        </FadeUp>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-12 flex flex-col gap-8"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--primary-muted)",
            fontFamily: "var(--font-body)",
            color: "var(--text-primary)",
          }}
        >
          <Section title="SMS Terms and Conditions">
            <p>
              By opting in to receive SMS messages, you agree to the following: receive SMS
              messages from The Enchanted Collective to provide updates and important
              information. Message frequency may vary, and message and data rates may
              apply. You can opt out anytime by replying STOP. For help or more
              information, reply HELP.
            </p>
          </Section>

          <Section title="Opt-In">
            <p>
              Consent is obtained before sending messages. Subscribers will receive a
              confirmation message upon opting in:
            </p>
            <blockquote>
              &ldquo;You have successfully been subscribed to messages from The Enchanted
              Collective from this number. Message frequency may vary. Message and Data
              Rates may apply. Reply HELP for help. Reply STOP to unsubscribe.&rdquo;
            </blockquote>
          </Section>

          <Section title="Opt-Out">
            <p>
              Reply STOP at any time to unsubscribe. You will receive a confirmation
              message:
            </p>
            <blockquote>
              &ldquo;You have now been opted-out and will receive no further messages from
              The Enchanted Collective from this number. Reply START to
              resubscribe.&rdquo;
            </blockquote>
          </Section>

          <Section title="Help">
            <p>Reply HELP for assistance. You will receive:</p>
            <blockquote>
              &ldquo;For additional information, please call The Enchanted Collective at
              812-329-2477. To opt-out, reply STOP.&rdquo;
            </blockquote>
          </Section>

          <Section title="Privacy">
            <p>
              Your information is used only for the stated purposes. See our full{" "}
              <a
                href="/privacy"
                className="underline hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                Privacy Policy
              </a>{" "}
              for complete details on how we collect, use, and protect your data.
            </p>
          </Section>

          <Section title="Use of Service">
            <p>
              By using The Enchanted Collective&apos;s website and services, you agree to
              these terms and conditions. We reserve the right to update these terms at any
              time. Continued use of our services after changes constitutes acceptance of
              the updated terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <ul>
              <li>Phone: 812-329-2477</li>
              <li>Email: enchantedcollective47250@gmail.com</li>
              <li>Address: 2175 North K Road, Madison, Indiana 47250</li>
            </ul>
          </Section>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FadeUp>
      <div className="flex flex-col gap-3">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(20px, 3vw, 26px)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h2>
        <div
          className="flex flex-col gap-3 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic"
          style={{ color: "var(--text-secondary)" }}
        >
          {children}
        </div>
      </div>
    </FadeUp>
  );
}
