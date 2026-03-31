// ============================================================
// THE ENCHANTED COLLECTIVE — Site Data
// Source of truth: initial-business-data.md
// ALL copy lives here. Zero hard-coded strings in components.
// ============================================================

export const siteData = {
  name: "The Enchanted Collective",
  domain: "enchantedmadison.com",
  tagline: "Luxury Glamping & Private Escapes",
  description:
    "Private wooded glamping tents, a cozy cottage, 2-hour hot tub escapes, and romantic proposal packages — just minutes from downtown Madison, Indiana.",
  address: "2175 North K Road, Madison, Indiana 47250",
  phone: "812-329-2477",
  email: "enchantedcollective47250@gmail.com",
  location: "Madison, Indiana",

  // Social
  social: {
    instagram: "", // TODO: confirm handle
    facebook: "",  // TODO: confirm handle
    tiktok: "",    // TODO: confirm handle
  },

  // Booking
  booking: {
    lodgifyUrl: "https://direct-book.com/properties/enchantedcollectivemadison", // REPLACE with Lodgify embed code
    acuityUrl: "", // TODO: obtain Acuity Scheduling embed code from client
  },

  // VIP / Lead Capture
  vip: {
    headline: "Join the VIP List",
    subheadline:
      "Get first access to new dates, $25 off your first stay, and a free Perfect Madison Weekend digital guide.",
    cta: "Unlock VIP Access",
    counter: "Join 400+ couples on the list",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | The Enchanted Collective",
    defaultTitle: "The Enchanted Collective | Luxury Glamping near Madison, Indiana",
    defaultDescription:
      "The only luxury glamping retreat near Madison, Indiana — private hot tubs, romantic escapes, and proposal packages just minutes from Clifty Falls State Park.",
    ogImage: "/og-default.jpg", // TODO: create OG image
  },

  // Navigation
  nav: {
    links: [
      { label: "Stays", href: "/stays" },
      { label: "Experiences", href: "/date-night" },
      { label: "Proposals", href: "/proposals" },
      { label: "Madison Guide", href: "/madison-guide" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Check Availability", href: "/stays" },
  },

  // Hero (homepage)
  hero: {
    eyebrow: "Madison, Indiana · Opening June 2026",
    headline: "Where Romance Meets the Wild",
    subheadline:
      "Luxury glamping, private hot tubs, and curated experiences in the woods — minutes from Clifty Falls and historic downtown Madison.",
    ctaPrimary: { label: "Explore Our Stays", href: "/stays" },
    ctaSecondary: { label: "Plan Your Escape", href: "/date-night" },
    trustCopy: "The only private hot tub glamping retreat in southern Indiana",
  },

  // Stays
  stays: [
    {
      slug: "enchanted-cottage",
      name: "The Enchanted Cottage",
      type: "Vacation Rental",
      tagline: "A cozy private retreat with a hot tub, fire pit, and covered deck.",
      priceFrom: 175,
      capacity: 2,
      sqft: null,
      badge: "Opening April 2026",
      features: [
        "Private hot tub on covered deck",
        "King Sleep Number bed with silky linens",
        "Fully stocked kitchen + cocktail bar",
        "Fire pit",
        "Outdoor dining",
        "Spa-inspired bathroom",
      ],
      description:
        "Tucked within a peaceful natural setting in Southern Indiana, The Enchanted Cottage is a private one bedroom, one bath retreat designed for rest, reconnection, and elevated comfort.",
      image: "/images/cottage-hero.jpg", // TODO: real photo
    },
    {
      slug: "velvet-buck",
      name: "The Velvet Buck",
      type: "Luxury Glamping Tent",
      tagline: "A 320 sq ft woodland retreat with a private hot tub under the stars.",
      priceFrom: 175,
      capacity: 2,
      sqft: 320,
      badge: "Opening May 2026",
      features: [
        "Private hot tub",
        "Private deck",
        "String lights through woodland",
        "Countryside views",
        "Nearby bathhouse with showers",
        "Fire pit",
      ],
      description:
        "Tucked within a secluded wooded setting, The Velvet Buck is an upcoming luxury glamping retreat designed to blend immersive nature with elevated comfort.",
      image: "/images/velvet-buck-hero.jpg", // TODO: real photo
    },
    {
      slug: "bell-tent",
      name: "Curated Campsite — Bell Tent",
      type: "Glamping Campsite",
      tagline: "A 16-foot bell tent, set up and ready for your arrival.",
      priceFrom: 35,
      capacity: 2,
      sqft: 201,
      badge: null,
      features: [
        "16-ft bell tent pre-set on arrival",
        "Fire pit with cooking grate",
        "Adirondack chairs",
        "Outdoor dining table",
        "Overhead string lights",
        "Shower & bathroom access",
        "Dogs welcome",
      ],
      description:
        "Enjoy a relaxed outdoor stay with a 16-foot bell tent already set up. Bring your own bedding and make it your own.",
      image: "/images/bell-tent-hero.jpg", // TODO: real photo
    },
    {
      slug: "campsite",
      name: "Curated Campsite — Bring Your Own Tent",
      type: "Traditional Campsite",
      tagline: "A private wooded site with fire pit, chairs, and ambient lighting.",
      priceFrom: 35,
      capacity: 2,
      sqft: null,
      badge: null,
      features: [
        "Fire pit with cooking grate",
        "Adirondack chairs",
        "Outdoor dining table",
        "Overhead string lights",
        "Shower & bathroom access",
        "Bring your own tent and gear",
      ],
      description:
        "Private wooded campsites designed for guests who love a traditional outdoor experience with a thoughtfully prepared space.",
      image: "/images/campsite-hero.jpg", // TODO: real photo
    },
  ],

  // Experiences
  experiences: {
    dateNight: {
      headline: "Date Night, Reinvented",
      subheadline:
        "Forget dinner and a movie. Choose restoration instead. Two hours of warm water, candlelight, and the fireplace — for just the two of you.",
      packages: [
        {
          name: "Tranquility Escape",
          tier: "Entry",
          price: 119,
          duration: "1 hr 30 min",
          badge: null,
          includes: [
            "1-hour private hot tub soak",
            "Candlelight ambiance",
            "Gas fire table",
            "Music integration",
            "Plush spa robes",
          ],
        },
        {
          name: "The Luxury Escape",
          tier: "Most Popular",
          price: 149,
          duration: "2 hours",
          badge: "Most Popular",
          includes: [
            "Everything in Tranquility Escape",
            "BYOB wine or champagne setup",
            "1-hour private Fireside Lounge",
            "Massage chair experience",
            "Spa water & coffee bar",
          ],
        },
        {
          name: "Ultimate Escape",
          tier: "Premium",
          price: 199,
          duration: "4 hours",
          badge: "Premium",
          includes: [
            "Everything in The Luxury Escape",
            "Floating candles in hot tub",
            "Aromatherapy crystal infusion",
            "Deluxe charcuterie board for two",
            "Chocolate-covered strawberries (6)",
            "Outdoor Movie Bed",
          ],
        },
      ],
    },

    proposals: {
      headline: "She'll Say Yes Under the Stars",
      subheadline:
        "We handle every detail — the flowers, the candles, the Marry Me sign glowing through the trees, the champagne chilling by the hot tub. You just bring the ring.",
      packages: [
        {
          name: "The Enchanted Proposal",
          tier: "Entry",
          price: 249,
          duration: "1 hr 30 min",
          badge: null,
          includes: [
            "Private proposal space reservation",
            "Rose petal and candle path",
            "String lights & evening glow lighting",
            "Decorative floral accents",
            "Firepit or fire table setting",
            "Time for photos after the proposal",
          ],
        },
        {
          name: 'The Signature "She Said Yes" Experience',
          tier: "Most Popular",
          price: 399,
          duration: "1 hr 30 min",
          badge: "Most Popular",
          includes: [
            "Everything in The Enchanted Proposal",
            '"Marry Me" sign',
            "Champagne or sparkling toast setup",
            "Charcuterie board",
            "Keepsake champagne glasses",
            "1 hour hot tub or Enchanted Table time",
          ],
        },
        {
          name: "The Ultimate Enchanted Engagement",
          tier: "Premium",
          price: 599,
          duration: "1 hr 30 min",
          badge: "Premium",
          includes: [
            "Everything in the Signature Package",
            "Premium floral arrangements",
            "Floating candles & aromatherapy",
            "Chocolate-covered strawberries",
            "Keepsake champagne toasting glasses",
          ],
        },
      ],
    },
  },

  // Add-ons
  addons: [
    {
      name: "Classic Romance Package",
      price: 95,
      description:
        "Rose petal & candle trail, extra candle styling, floating candles, aromatherapy crystals, private hot tub speaker.",
    },
    {
      name: "Ultimate Romance Experience",
      price: 129,
      description:
        "Everything in Classic + breakfast basket (OJ, fresh fruit with honey, muffins) + gourmet charcuterie board + premium cigar.",
    },
    {
      name: "Outdoor Movie Night",
      price: 25,
      priceNote: "per person",
      description:
        "150-inch projection screen, romantic movie beds with curtains and fairy lights, fresh popcorn, 1 complimentary beverage.",
    },
    {
      name: "S'mores Skillet",
      price: 24,
      description:
        "Cast iron skillet with graham crackers, Ghirardelli chocolate & caramel squares, marshmallows, coconut, Heath topping, and pecans. Serves 2.",
    },
    {
      name: "Picnic and Ride",
      price: 125,
      description:
        "4 hours electric bike riding with helmets + romantic picnic for two (charcuterie board, gourmet cookies, 2 drinks, blanket).",
    },
  ],

  // Reviews
  reviews: [
    {
      name: "Drucilla",
      location: "Indianapolis, IN",
      rating: 5,
      quote:
        "Angela and Marc have found their calling! Their piece of paradise truly lives up to its name. They have thought of everything to make your stay relaxing, romantic, and perfect. Five stars is not enough.",
    },
    {
      name: "Julie",
      location: "Greentown, IN",
      rating: 5,
      quote:
        "There are not enough words to describe how amazingly relaxing this home is. For our 29th anniversary we chose this place to just be still… it was PERFECT.",
    },
    {
      name: "Melissa",
      location: "Greenwood, IN",
      rating: 5,
      quote:
        "Me and my new wife decided to stay here for our honeymoon and I do not know if we could have chosen a better place. It met and exceeded our expectations!",
    },
  ],

  // Drive times (for location section)
  driveTimes: [
    { from: "Louisville, KY", minutes: 60 },
    { from: "Cincinnati, OH", minutes: 75 },
    { from: "Indianapolis, IN", minutes: 90 },
    { from: "Clifty Falls State Park", minutes: 10 },
    { from: "Downtown Madison", minutes: 5 },
  ],

  // Footer
  footer: {
    tagline: "Where Romance Meets the Wild",
    links: [
      { label: "Stays", href: "/stays" },
      { label: "Date Night", href: "/date-night" },
      { label: "Proposals", href: "/proposals" },
      { label: "Add-Ons", href: "/packages" },
      { label: "Madison Guide", href: "/madison-guide" },
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
    legal: "© 2026 The Enchanted Collective. All rights reserved.",
    address: "2175 North K Road, Madison, Indiana 47250",
  },
};

export type SiteData = typeof siteData;
