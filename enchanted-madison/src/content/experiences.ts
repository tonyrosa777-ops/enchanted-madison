/**
 * Experience collections — proposals, date night / girls night, and day-use hot tub escapes.
 * Source: site-copy.md §Proposal Experiences + §Date Night & Girls Night + §Acuity Scheduling
 *
 * The hot tub packages (dateNight / dayUse) are the same three products positioned
 * in two contexts:
 *   dateNight  — evening experiences marketed to couples and groups
 *   dayUse     — same packages, booking-widget context (Acuity "Hot Tub Retreats")
 *
 * The fireside lounge flow is shared across all hot tub packages that include it.
 */

export type ExperiencePackage = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  tier: "entry" | "popular" | "premium";
  summary: string;
  includes: string[];
  /** Items added on top of a lower tier — displayed as "plus everything above" */
  upgradeFrom?: string;
  note?: string;
};

export type ExperienceCollection = {
  heading: string;
  eyebrow: string;
  intro: string;
  packages: ExperiencePackage[];
};

/** Shared fireside lounge description — referenced in date night copy */
export const firesideLounge = {
  heading: "The Fireside Lounge",
  description:
    "After your soak, transition indoors to the cozy Fireside Lounge — a private, spa-inspired retreat space designed for comfort and conversation.",
  includes: [
    "Plush leather lounge seating",
    "Electric fireplace ambiance",
    "Luxury full-body massage chair",
    "Spa water beverage station",
    "Coffee bar with flavored syrups",
    "Soft lighting and romantic décor",
  ],
} as const;

export const experienceCollections: Record<
  "proposals" | "dateNight" | "dayUse",
  ExperienceCollection
> = {
  proposals: {
    heading: "Proposal Packages",
    eyebrow: "Milestone moments",
    intro:
      "Our private Proposal Experiences are designed to take the pressure off while creating a moment that feels cinematic, intimate, and completely unforgettable. We handle every detail — you focus on the question.",
    packages: [
      {
        slug: "enchanted-proposal",
        name: "The Enchanted Proposal",
        price: "$249",
        duration: "1 hr 30 min",
        tier: "entry",
        summary:
          "A beautifully simple and romantic setup designed to create an intimate engagement moment. Perfect for heartfelt, private proposals with understated elegance.",
        includes: [
          "Private proposal space reservation",
          "Rose petal and candle path",
          "Romantic candlelit ambiance",
          "String lights & evening glow lighting",
          "Decorative floral accents",
          "Firepit or fire table setting",
          "Time for photos following the proposal",
        ],
      },
      {
        slug: "she-said-yes",
        name: 'The Signature "She Said Yes" Experience',
        price: "$399",
        duration: "1 hr 30 min",
        tier: "popular",
        upgradeFrom: "enchanted-proposal",
        summary:
          "Our most popular package — blending romance, atmosphere, and celebration details for a picture-perfect proposal moment you'll both remember forever.",
        includes: [
          "Everything in The Enchanted Proposal",
          '"Marry Me" sign',
          "Champagne or sparkling toast setup",
          "Charcuterie board",
          "Keepsake champagne glasses",
          "1 hour of hot tub time (hot tub setting) or 1 hour of Enchanted Table time (table setting)",
        ],
      },
      {
        slug: "ultimate-engagement",
        name: "The Ultimate Enchanted Engagement",
        price: "$599",
        duration: "1 hr 30 min",
        tier: "premium",
        upgradeFrom: "she-said-yes",
        summary:
          "For those who want to go all-out — the full luxury proposal experience. Transforms your proposal into a fully curated romantic event.",
        includes: [
          "Everything in The Signature Experience",
          "Premium floral arrangements",
          "Floating candles and aromatherapy (hot tub setting)",
          "Chocolate-covered strawberries",
          "Keepsake champagne toasting glasses",
        ],
      },
    ],
  },

  dateNight: {
    heading: "Date Night & Girls Night Escapes",
    eyebrow: "For two, or for the girls",
    intro:
      "Forget dinner and a movie — choose restoration instead. Private hot tub, candlelit ambiance, fireside lounge, and two hours that feel nothing like ordinary date night.",
    packages: [
      {
        slug: "tranquility-escape",
        name: "Tranquility Escape",
        price: "$119",
        duration: "1 hr 30 min",
        tier: "entry",
        summary:
          "A simple, healing soak. Perfect if you want the restorative benefits of a private hot tub without a full evening itinerary. Soothes sore muscles and helps you release tension.",
        includes: [
          "1-hour private hot tub soak",
          "Candlelight ambiance",
          "Gas fire table",
          "Music integration",
          "Use of plush spa robes",
        ],
      },
      {
        slug: "luxury-escape",
        name: "The Luxury Escape",
        price: "$149",
        duration: "2 hrs",
        tier: "popular",
        summary:
          "A beautifully balanced evening — soak, then settle into the Fireside Lounge. Simple, romantic, and unlike any date night in the area.",
        includes: [
          "1-hour private hot tub soak",
          "Candlelight ambiance",
          "Gas fire table",
          "Music integration",
          "Wine or champagne bucket setup (BYOB)",
          "Use of plush spa robes",
          "1-hour private Fireside Lounge access",
          "Massage chair experience",
          "Spa water & coffee bar with flavored syrups",
        ],
      },
      {
        slug: "ultimate-escape",
        name: "Ultimate Escape",
        price: "$199",
        duration: "4 hrs",
        tier: "premium",
        upgradeFrom: "luxury-escape",
        summary:
          "The full experience — designed for anniversaries, milestone celebrations, or unforgettable date nights. Indulgent, sensory, and deeply memorable.",
        includes: [
          "Everything in The Luxury Escape",
          "Floating candles in the hot tub",
          "Aromatherapy crystal infusion",
          "Deluxe charcuterie board for two",
          "Chocolate-covered strawberries (6)",
          "Outdoor Movie Bed",
        ],
      },
    ],
  },

  dayUse: {
    heading: "Hot Tub Escapes",
    eyebrow: "By the hour",
    intro:
      "A private hot tub, robes, ambient lighting, and a sparkling beverage waiting. No overnight stay required — from $119/couple.",
    packages: [
      {
        slug: "tranquility-escape",
        name: "Tranquility Escape",
        price: "$119",
        duration: "1 hr 30 min",
        tier: "entry",
        summary: "A private soak with candlelight, music, and robes. Simple and restorative.",
        includes: [
          "1-hour private hot tub soak",
          "Candlelight ambiance",
          "Gas fire table",
          "Music integration",
          "Use of plush spa robes",
        ],
      },
      {
        slug: "luxury-escape",
        name: "The Luxury Escape",
        price: "$149",
        duration: "2 hrs",
        tier: "popular",
        summary: "Soak + Fireside Lounge. The most complete hot tub date night experience.",
        includes: [
          "1-hour private hot tub soak",
          "Candlelight ambiance",
          "Gas fire table",
          "Music integration",
          "Wine or champagne bucket setup (BYOB)",
          "Use of plush spa robes",
          "1-hour private Fireside Lounge access",
          "Massage chair experience",
          "Spa water & coffee bar with flavored syrups",
        ],
      },
      {
        slug: "ultimate-escape",
        name: "Ultimate Escape",
        price: "$199",
        duration: "4 hrs",
        tier: "premium",
        summary: "The premium experience — floating candles, charcuterie, movie bed, and more.",
        includes: [
          "Everything in The Luxury Escape",
          "Floating candles in the hot tub",
          "Aromatherapy crystal infusion",
          "Deluxe charcuterie board for two",
          "Chocolate-covered strawberries (6)",
          "Outdoor Movie Bed",
        ],
      },
    ],
  },
};
