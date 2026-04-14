// /privacy — Privacy Policy
// Required by 10DLC SMS compliance (Nextiva)

import { PageShell } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/animations/FadeUp";
import { ShimmerText } from "@/components/animations/ShimmerText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Enchanted Collective — how we collect, use, and protect your personal information.",
};

const lastUpdated = "April 13, 2026";

export default function PrivacyPolicyPage() {
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
            <ShimmerText delay={1}>Privacy Policy</ShimmerText>
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
          <Section title="Overview">
            <p>
              This Privacy Policy describes The Enchanted Collective&apos;s policies and
              procedures on the collection, use, and disclosure of your information when
              you use our service and tells you about your privacy rights and how the law
              protects you.
            </p>
            <p>
              We use your personal data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in accordance
              with this Privacy Policy.
            </p>
            <p>
              The Enchanted Collective is committed to safeguarding the privacy of our
              users. We want to assure you that we do not share your personal information
              with third parties. This privacy policy outlines how we collect, use, and
              protect the information you provide to us.
            </p>
          </Section>

          <Section title="Information Collection">
            <p>
              We collect only the information necessary to provide and improve our
              services. This may include your name, email address, and phone number. We do
              not sell, rent, or share this information with any third parties.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <p>
              The information collected is used solely for communicating with you as the
              intended party. We do not share your information with external parties for
              marketing or any other purposes. Additionally, no mobile or messaging consent
              information will be shared with third parties/affiliates for
              marketing/promotional purposes. All the above categories exclude text
              messaging originator opt-in data and consent; this information will not be
              shared with any third parties.
            </p>
            <p>We may use personal data for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service, including to monitor the usage of our service.</li>
              <li>
                To manage your Account: to manage your registration as a user of the
                Service. The Personal Data you provide can give you access to different
                functionalities of the Service that are available to you as a registered
                user.
              </li>
              <li>
                For the performance of a contract: the development, compliance, and
                undertaking of the purchase contract for the products, items, or services
                you have purchased or of any other contract with us through the Service.
              </li>
              <li>
                To contact you: to contact you by email, telephone calls, SMS, or other
                equivalent forms of electronic communication, such as a mobile
                application&apos;s push notifications regarding updates or informative
                communications related to the functionalities, products, or contracted
                services, including the security updates, when necessary or reasonable for
                their implementation.
              </li>
              <li>
                To provide you with news, special offers, and general information about
                other goods, services, and events which we offer that are similar to those
                that you have already purchased or enquired about unless you have opted not
                to receive such information.
              </li>
              <li>To manage your requests: to attend and manage your requests to us.</li>
            </ul>
            <p>
              All messages you send through the Service, whether to us or other users, are
              stored on our servers. The Enchanted Collective employs servers and services
              owned by third parties to retain these messages.
            </p>
          </Section>

          <Section title="Disclosure of Your Information">
            <p>
              The Enchanted Collective does not share any client data with third parties
              for marketing, promotional purposes, or any other purposes. Your personal
              information is kept confidential and is not disclosed to any outside
              organizations, except as required by law or with your explicit consent. We
              may disclose your personal information under the following limited
              circumstances:
            </p>
            <ul>
              <li>We have obtained your consent.</li>
              <li>We need to enforce our Terms of Service.</li>
              <li>
                We share information with partners or affiliates that have signed
                non-disclosure agreements with us only to provide you with a specific
                service.
              </li>
              <li>
                We may provide such information to a company controlled by or under common
                control with The Enchanted Collective for any purpose allowed by this
                Policy.
              </li>
              <li>
                We respond to subpoenas, court orders, or legal processes, or to establish
                or exercise our legal rights, or the legal rights of others, or defend
                against legal claims.
              </li>
              <li>
                When we believe it is necessary to disclose Personal Information to
                investigate, prevent, or take action regarding illegal activities, suspected
                fraud, potential threats to anyone&apos;s physical safety, violations of The
                Enchanted Collective&apos;s Terms of Service, or as otherwise required by
                law.
              </li>
              <li>
                We transfer Personal Information about you if The Enchanted Collective or
                its assets are acquired by or merged with another company.
              </li>
            </ul>
            <p>
              We may share aggregated, non-identifiable information with others without
              further notice to you, such as the total number of people who used the
              Service in a specific month or the total number of messages sent during a
              particular period.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>
              Your Personal Information may be transferred to and processed in locations
              outside of your state, province, country, or other governmental jurisdiction
              where the data protection laws may differ from those in your jurisdiction. We
              take steps to ensure that your data is handled securely and in line with this
              Policy, regardless of where it is processed.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your Personal Information only as long as necessary to fulfill the
              purposes outlined in this Policy unless a longer retention period is required
              or permitted by law. We will also retain and use your Personal Information as
              necessary to comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p>
              Our Service may use cookies and similar tracking technologies to enhance your
              experience. Cookies are small text files placed on your device to collect
              information about your activity on the Service. You can control the use of
              cookies through your browser settings, but disabling cookies may limit your
              ability to use certain features of the page or Service.
            </p>
          </Section>

          <Section title="Your Choices">
            <p>
              You have the right to access, correct, or delete your information. If you
              have any concerns or questions about your data, please contact us:
            </p>
            <ul>
              <li>Phone: 812-329-2477</li>
              <li>Email: enchantedcollective47250@gmail.com</li>
              <li>Address: 2175 North K Road, Madison, Indiana 47250</li>
            </ul>
          </Section>

          <Section title="Policy Changes">
            <p>
              We may update our privacy policy from time to time. Any changes will be
              communicated to you, and your continued use of our services implies your
              acceptance of the updated policy. By using our services, you agree to the
              terms outlined in this privacy policy.
            </p>
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
          className="flex flex-col gap-3 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {children}
        </div>
      </div>
    </FadeUp>
  );
}
