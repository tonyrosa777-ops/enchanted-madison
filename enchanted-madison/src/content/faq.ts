/**
 * FAQ content — 12 Q&As derived from site-copy.md §Policies.
 * Written in warm, conversational language per design-contract.md §7.
 * The goal is to answer real pre-booking questions without sounding like a legal doc.
 */

export type FAQItem = {
  slug: string;
  question: string;
  answer: string;
  category: "booking" | "checkin" | "amenities" | "policies" | "experiences";
};

export const faqs: FAQItem[] = [
  {
    slug: "checkin-checkout",
    category: "checkin",
    question: "What are check-in and check-out times?",
    answer:
      "Check-in begins at 4:00 PM and check-out is at 10:00 AM. We're a self check-in property — no front desk, no waiting in line. You'll receive personalized access details 48 hours before arrival, and your access code activates right at 4:00 PM.",
  },
  {
    slug: "self-checkin",
    category: "checkin",
    question: "How does self check-in work?",
    answer:
      "We'll send you everything you need 48 hours before arrival — your access code, directions to your specific accommodation, and any details about your stay or add-ons. Your code activates at check-in time and deactivates at check-out. There's no need to coordinate with anyone on arrival day.",
  },
  {
    slug: "minimum-age",
    category: "booking",
    question: "Is there a minimum age to book?",
    answer:
      "Yes — the primary booking guest must be 25 years of age or older and must remain on property for the duration of the stay. Valid government-issued ID may be required.",
  },
  {
    slug: "security-deposit",
    category: "booking",
    question: "Is there a security deposit?",
    answer:
      "For direct bookings, a $300 refundable security deposit hold is placed on your card 48 hours before arrival. The hold is released within 3 days after checkout as long as everything is in order. Guests booking through Airbnb or other platforms follow their platform's damage protection process instead.",
  },
  {
    slug: "cancellation",
    category: "booking",
    question: "What is the cancellation policy?",
    answer:
      "For cottages, glamping tents, and hot tub experiences: cancel 30+ days out for a full refund, 14–29 days for 50% back, and under 14 days is non-refundable. For tent campsites: cancel 14+ days out for a full refund, 7–13 days for 50%, under 7 days is non-refundable. Add-on packages follow the same terms as your lodging reservation. Reschedule requests are reviewed case-by-case.",
  },
  {
    slug: "pets",
    category: "policies",
    question: "Are pets allowed?",
    answer:
      "Dogs are welcome at our Curated Campsite with Bell Tent. Other accommodations are not currently pet-friendly. Please note that quiet hours apply to pets as well — excessive barking after 10:00 PM is included in our quiet hours policy.",
  },
  {
    slug: "hot-tub-rules",
    category: "amenities",
    question: "What are the hot tub rules?",
    answer:
      "Guests under 18 are not permitted to use the hot tubs. Please shower before entering, and avoid oils, soaps, bath bombs, or any additives. No glass in or around the hot tub. Cover must be secured after each use, and the temperature reset to 99°F at checkout. Misuse that requires draining or service carries a $250 fee.",
  },
  {
    slug: "children",
    category: "policies",
    question: "Are children welcome?",
    answer:
      "We're designed as a couples and adult retreat. Children are not prohibited from the property, but our hot tubs are strictly off-limits for guests under 18. Most guests come for the romantic atmosphere, so we recommend this as an adults-first destination.",
  },
  {
    slug: "quiet-hours",
    category: "policies",
    question: "Are there quiet hours?",
    answer:
      "Yes — quiet hours run from 10:00 PM to 8:00 AM and apply to music, outdoor areas, hot tubs, decks, and elevated conversation. The property is designed for peaceful retreats, and we take the quiet atmosphere seriously.",
  },
  {
    slug: "visitors",
    category: "policies",
    question: "Can I have visitors during my stay?",
    answer:
      "Up to 2 day visitors are allowed with prior written approval. All visitors must leave before quiet hours (10:00 PM), and total occupancy limits must never be exceeded. If you're planning something special and need to bring in additional help (like a photographer for a proposal), just let us know in advance.",
  },
  {
    slug: "camping-what-to-bring",
    category: "amenities",
    question: "What should I bring for a campsite stay?",
    answer:
      "If you're booking the Bell Tent campsite, the tent is already set up for you — but bring your own bedding, sleeping gear, and anything else to make it yours. For Bring-Your-Own-Tent sites, pack your tent, bedding, and full camping setup. Both sites include a fire pit with cooking grate, Adirondack chairs, outdoor dining table, and string lights. Firewood, bagged ice, and a S'mores Skillet can be added to your reservation.",
  },
  {
    slug: "proposal-lead-time",
    category: "experiences",
    question: "How far in advance should I book a proposal experience?",
    answer:
      "We recommend booking at least 2–4 weeks in advance, especially for weekend dates. The more lead time you give us, the more we can personalize the setup. Premium packages with floral arrangements may require additional coordination time. Reach out via the contact form if you have a specific date in mind and we'll do our best to make it work.",
  },
];
