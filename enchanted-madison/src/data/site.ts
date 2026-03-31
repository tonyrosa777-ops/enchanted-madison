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
  // links: primary — always visible in desktop nav (conversion-critical)
  // dropdown: secondary — "More" dropdown in desktop; merged into mobile overlay
  nav: {
    links: [
      { label: "Stays", href: "/stays" },
      { label: "Experiences", href: "/date-night" },
      { label: "Proposals", href: "/proposals" },
    ],
    dropdown: {
      label: "More",
      items: [
        { label: "Find My Escape", href: "/find-your-escape" },
        { label: "Journal", href: "/blog" },
        { label: "Shop", href: "/shop" },
        { label: "Madison Guide", href: "/madison-guide" },
        { label: "About", href: "/about" },
        { label: "Pricing ⚑", href: "/optimus-pricing" },
      ],
    },
    cta: { label: "Check Availability", href: "/stays" },
  },

  // Hero (homepage)
  hero: {
    eyebrow: "Madison, Indiana · Opening June 2026",
    headline: "Where Romance Meets the Wild",
    subheadline:
      "Luxury glamping, private hot tubs, and curated experiences in the woods — minutes from Clifty Falls and historic downtown Madison.",
    ctaPrimary: { label: "Make It Unforgettable", href: "/packages" },
    ctaSecondary: { label: "Find My Escape \u2192", href: "/find-your-escape" },
    trustCopy: "The only private hot tub glamping retreat in southern Indiana",
  },

  // Trust strip (below hero — social proof bar)
  // Source: market-intelligence.md §8 (below-hero trust signals)
  trustItems: [
    "★★★★★  5-star rated by every guest",
    "Only private hot tub glamping in southern Indiana",
    "10 min from Clifty Falls State Park",
    "Opening June 2026",
  ],

  // Why Enchanted Madison (differentiator section — positioned before reviews)
  // Source: market-intelligence.md §8 "Trust builder for pre-launch (homepage)"
  whyUs: {
    eyebrow: "The Difference",
    headline: "Why Enchanted Madison?",
    items: [
      { icon: "✦", text: "The only luxury glamping retreat in the Madison–Clifty Falls corridor" },
      { icon: "✦", text: "Private hot tubs at every accommodation — a rarity in southern Indiana" },
      { icon: "✦", text: "5 minutes from Clifty Falls State Park · 5 minutes from historic downtown" },
      { icon: "✦", text: "Curated by a team obsessed with every detail of your escape" },
    ],
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
      image: "/images/accommodations/enchanted-cottage.webp", // TODO: real photo
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
      image: "/images/accommodations/velvet-buck.webp", // TODO: real photo
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
      image: "/images/accommodations/bell-tent.webp", // TODO: real photo
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
      image: "/images/accommodations/campsite.webp", // TODO: real photo
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

  // FAQ
  // Source: initial-business-data.md §3 (amenities), §4 (accommodations), §8 (policies)
  // Steal: Firelight Camps FAQ model (market-intelligence.md §7) — address first-timer anxiety
  faq: [
    {
      category: "The Hot Tubs",
      questions: [
        {
          q: "Is the hot tub actually private?",
          a: "Yes. Every overnight accommodation (The Enchanted Cottage and The Velvet Buck) has its own dedicated private hot tub — no sharing, no scheduling, no other guests nearby. Hot tub experiences booked as standalone packages also have exclusive reserved access for your time slot.",
        },
        {
          q: "Can we use the hot tub in winter?",
          a: "Yes. The hot tubs are heated and available year-round. Soaking in warm water while snow dusts the trees is one of the most popular winter experiences we offer.",
        },
        {
          q: "Are there any hot tub rules we should know?",
          a: "Guests under 18 are not permitted in the hot tubs. Shower before entering. No oils, soaps, bath bombs, or additives in the water. No glass in or around the hot tub. Please secure the cover after each use and reset the temperature to 99°F at checkout. Misuse requiring a service call is subject to a $250 flat fee.",
        },
      ],
    },
    {
      category: "The Accommodations",
      questions: [
        {
          q: "Is there a private bathroom?",
          a: "The Enchanted Cottage has a private, spa-inspired bathroom inside the unit. The Velvet Buck tent has access to a nearby bathhouse with restrooms and showers. Both Curated Campsite options also have access to shower and bathroom facilities on the property.",
        },
        {
          q: "Do I need to bring anything for my stay?",
          a: "The Enchanted Cottage is fully stocked — linens, towels, kitchen supplies, coffee, and a cocktail bar are all ready for your arrival. The Velvet Buck will be similarly curated when it opens. The Bell Tent campsite requires guests to bring their own bedding and sleeping gear. The BYOT campsite requires your own tent, bedding, and all camping gear.",
        },
        {
          q: "Is the glamping tent weatherproof?",
          a: "Yes. Canvas glamping tents are designed to handle rain, wind, and temperature shifts. The Velvet Buck includes a private deck and is positioned on an elevated platform. We recommend checking your reservation confirmation for any weather-specific notes from Angela & Marc.",
        },
        {
          q: "Is there electricity in the tents?",
          a: "The Enchanted Cottage is fully powered with standard electrical outlets. The Velvet Buck glamping tent and campsite areas are designed to preserve the nature-immersive experience — details on power access will be confirmed in your arrival instructions.",
        },
        {
          q: "Can I bring my dog?",
          a: "Dogs are welcome at the Curated Campsite — Bell Tent option. Pets are not permitted at The Enchanted Cottage, The Velvet Buck, or any hot tub experience booking. Maximum 1 dog per site; quiet hours apply to pets as well.",
        },
      ],
    },
    {
      category: "Booking & Policies",
      questions: [
        {
          q: "What is the minimum age to book?",
          a: "The primary booking guest must be 25 years of age or older and must remain on property for the full duration of the stay. Valid government-issued ID may be required at check-in.",
        },
        {
          q: "What are check-in and check-out times?",
          a: "Check-in is at 4:00 PM. Check-out is at 10:00 AM. Early check-in and late check-out may be available on request depending on availability — please ask when booking. Unauthorized late check-out is subject to a $75 flat fee.",
        },
        {
          q: "How does check-in work?",
          a: "All check-ins are contactless self check-in. Access codes and detailed arrival instructions are sent to you 48 hours before your stay. There is no staffed front desk — Angela & Marc are available by phone or message throughout your stay.",
        },
        {
          q: "What is the cancellation policy?",
          a: "For cottages, glamping tents, and hot tub experiences: 100% refund if cancelled 30+ days before arrival; 50% refund if cancelled 14–29 days before arrival; non-refundable within 14 days. For tent campsites: 100% refund if cancelled 14+ days before arrival; 50% refund 7–13 days before; non-refundable within 7 days. No refunds for early departures or unused nights.",
        },
        {
          q: "Is there a security deposit?",
          a: "For direct bookings, a $300 refundable hold is placed on your card 48 hours before arrival and released within 3 days after checkout, pending a standard inspection. Airbnb and OTA reservations follow the respective platform's damage protection process.",
        },
        {
          q: "Are there quiet hours?",
          a: "Quiet hours are 10:00 PM to 8:00 AM and are strictly enforced. This applies to music, outdoor areas, hot tubs, decks, and elevated conversation. Guests are here for peace — we take this seriously.",
        },
      ],
    },
    {
      category: "Location & Getting Here",
      questions: [
        {
          q: "How far is it from Louisville, Cincinnati, and Indianapolis?",
          a: "The Enchanted Collective is approximately 60 minutes from Louisville, KY; 75 minutes from Cincinnati, OH; and 90 minutes from Indianapolis, IN. We sit at the geographic center of the Louisville–Cincinnati–Indianapolis triangle — close enough for a spontaneous getaway, far enough to feel completely away.",
        },
        {
          q: "Is there parking on site?",
          a: "Yes. Free outdoor parking is available for all guests. Each campsite has space for one vehicle. The Enchanted Cottage and The Velvet Buck have dedicated parking near their accommodations.",
        },
        {
          q: "How do I get there?",
          a: "We're located at 2175 North K Road, Madison, Indiana 47250. From 421, take old SR 62, then turn right on K Road. Watch for The Enchanted Collective sign near the driveway. We're 5 minutes from downtown Madison and 10 minutes from Clifty Falls State Park.",
        },
      ],
    },
  ],

  // Madison, Indiana Guide
  // Source: initial-business-data.md §10; market-intelligence.md §8 (SEO Pillar 2)
  // SEO targets: "things to do Madison Indiana," "Clifty Falls State Park," "Madison Indiana travel guide"
  madisonGuide: {
    intro:
      "Madison, Indiana is one of the Midwest's best-kept secrets — a 130-block National Historic Landmark District sitting right on the banks of the Ohio River, drawing 600,000+ visitors a year. Whether you're arriving from Louisville, Cincinnati, or Indianapolis, you're within 90 minutes of a destination worth the drive.",
    attractions: [
      {
        name: "Clifty Falls State Park",
        distance: "10 min",
        category: "Nature",
        highlight: "Must-see in every season",
        description:
          "Indiana's most dramatic waterfall park. Seven miles of trails wind through a deep canyon carved by Clifty Creek, leading to four waterfalls including the 70-foot Clifty Falls. The Clifty Inn on the park grounds offers a popular Sunday buffet. Summer brings a waterslide; fall turns the canyon walls gold.",
        tip: "The Inner Loop Trail to Clifty Falls is the most scenic — allow 2 hours. Wear sturdy shoes; the canyon is steep.",
      },
      {
        name: "Lanier Mansion",
        distance: "5 min",
        category: "History",
        highlight: "Built 1840–44",
        description:
          "One of Indiana's finest examples of Greek Revival architecture, built by financier J.F.D. Lanier whose Civil War-era loans to Indiana arguably saved the Union. The restored mansion and formal gardens overlook the Ohio River and are open for tours. A genuinely beautiful piece of American history five minutes from our property.",
        tip: "Check the Indiana State Museum website for seasonal tour hours before visiting.",
      },
      {
        name: "Downtown Madison & the Ohio River",
        distance: "5 min",
        category: "Town",
        highlight: "130-block historic district",
        description:
          "One of the largest intact 19th-century streetscapes in the United States. Walk Main Street for independent shops, galleries, and restaurants. The riverfront park is a perfect evening stop — the Ohio is wide and slow here, with views across to Kentucky. Madison hosts festivals nearly every weekend from May through October.",
        tip: "Parking is easy and free. The Chandler Hotel's rooftop terrace has the best view of the historic district.",
      },
      {
        name: "Ohio River Scenic Byway — Wineries",
        distance: "15–30 min",
        category: "Wine & Food",
        highlight: "Vineyard country",
        description:
          "The stretch of Indiana Highway 56 along the Ohio River passes through some of Indiana's oldest wine country. Thomas Family Winery and Lanthier Winery are both within 20 minutes of the property — both offer tastings with river views. Pair a winery afternoon with dinner in downtown Madison.",
        tip: "Thomas Family Winery is in a converted carriage house and has live music on select weekends.",
      },
      {
        name: "Hanover College",
        distance: "15 min",
        category: "Scenic Drive",
        highlight: "Hilltop campus above the river",
        description:
          "Indiana's oldest private college sits on a bluff 200 feet above the Ohio River. The campus grounds are open to visitors and the views are some of the best in southern Indiana — particularly in fall foliage season (late October). A short drive from Madison worth adding to any weekend itinerary.",
        tip: "Best visited late October for fall color. Free to walk the grounds.",
      },
    ],
  },

  proposalPlanner: {
    stepLabels: ["Contact Info", "Proposal Details", "Package & Extras"] as const,
    step1: {
      eyebrow: "Step 1 of 3",
      heading: "Tell Us About You",
    },
    step2: {
      eyebrow: "Step 2 of 3",
      heading: "The Details",
    },
    step3: {
      eyebrow: "Step 3 of 3",
      heading: "Your Package",
    },
    preferredTimeOptions: [
      { value: "morning", label: "Morning", detail: "10am – 12pm" },
      { value: "afternoon", label: "Afternoon", detail: "12pm – 4pm" },
      { value: "evening", label: "Evening", detail: "4pm – close" },
      { value: "flexible", label: "Flexible", detail: "Whatever works best" },
    ],
    venueLocationOptions: [
      { value: "hot-tub-area", label: "Hot Tub Area", detail: "Warm water, candlelight, private" },
      { value: "fire-pit", label: "Fire Pit Circle", detail: "Open air, amber glow, nature backdrop" },
      { value: "woodland-path", label: "Woodland Path", detail: "Rose petals through the trees" },
      { value: "open-to-suggestions", label: "Surprise Me", detail: "We will design the perfect setting" },
    ],
    whoPresentOptions: [
      { value: "just-us", label: "Just the two of us", detail: "" },
      { value: "small-group", label: "Close family or friends nearby", detail: "" },
      { value: "photographer-too", label: "A photographer will be joining", detail: "" },
    ],
    packageOptions: [
      { value: "enchanted", label: "The Enchanted Proposal", detail: "From $249" },
      { value: "signature", label: "The Signature Experience", detail: "From $399 · Most Popular" },
      { value: "ultimate", label: "The Ultimate Engagement", detail: "From $599 · Premium" },
      { value: "not-sure", label: "Not Sure Yet", detail: "We will help you decide" },
    ],
    enhancementOptions: [
      { value: "photography-coordination", label: "Photography Coordination" },
      { value: "champagne-upgrade", label: "Champagne Upgrade" },
      { value: "premium-florals", label: "Premium Floral Arrangements" },
      { value: "chocolate-strawberries", label: "Chocolate-Covered Strawberries" },
      { value: "custom-signage", label: "Custom Marry Me Signage" },
    ],
    bestTimeOptions: [
      { value: "morning", label: "Morning (9am–12pm)" },
      { value: "afternoon", label: "Afternoon (12pm–4pm)" },
      { value: "evening", label: "Evening (4pm–7pm)" },
    ],
    submitLabel: "Send My Request",
    backLabel: "Back",
    success: {
      eyebrow: "Request Received",
      heading: "We\u2019re already planning something beautiful.",
      body: "Angela and Marc will be in touch within 24 hours to confirm your date and walk through every detail. Check your inbox \u2014 and get ready.",
      cta: { label: "Explore Our Packages", href: "/proposals" },
    },
  },

  // Dedicated /find-your-escape page — full quiz with lead capture
  findYourEscape: {
    hero: {
      eyebrow: "Your Personalized Experience",
      heading: "What Kind of Night Are You Imagining?",
      subheading: "Answer a few questions and we'll match you to the perfect experience — then send a personalized recommendation straight to your inbox.",
    },
    steps: [
      {
        id: "occasion",
        question: "What's the occasion?",
        options: [
          { value: "anniversary", label: "Anniversary", detail: "Celebrating time together" },
          { value: "birthday", label: "Birthday", detail: "Make their day unforgettable" },
          { value: "proposal", label: "I'm going to propose", detail: "We handle every detail" },
          { value: "girls-night", label: "Girls night out", detail: "Just the crew, no agenda" },
          { value: "first-date", label: "First date", detail: "Start with something extraordinary" },
          { value: "just-us", label: "No reason needed", detail: "We believe in that" },
        ],
      },
      {
        id: "experience",
        question: "What kind of experience?",
        options: [
          { value: "evening", label: "An evening escape", detail: "2–4 hours, home before midnight" },
          { value: "one-night", label: "One perfect night", detail: "Check in, unplug, check out renewed" },
          { value: "few-nights", label: "A few nights away", detail: "Long enough to actually unwind" },
          { value: "undecided", label: "Not sure yet", detail: "Show us both options" },
        ],
      },
      {
        id: "priority",
        question: "What matters most?",
        options: [
          { value: "privacy", label: "Total privacy", detail: "Just us — no neighbors, no schedules" },
          { value: "luxury", label: "Luxury & pampering", detail: "Every detail handled before we arrive" },
          { value: "nature", label: "Out in the woods", detail: "Stars, fire, and fresh air" },
          { value: "romance", label: "Pure romance", detail: "Petals, candles, the whole thing" },
        ],
      },
      {
        id: "timeline",
        question: "When are you thinking?",
        options: [
          { value: "this-weekend", label: "This weekend", detail: "Let's make it happen fast" },
          { value: "this-month", label: "Within a month", detail: "Some planning runway" },
          { value: "few-months", label: "1–3 months out", detail: "Plenty of time to perfect it" },
          { value: "just-looking", label: "Just exploring", detail: "No timeline, no pressure" },
        ],
      },
    ] as const,
    contactStep: {
      question: "Almost there — where should we send your recommendation?",
      namePlaceholder: "Your first name",
      emailPlaceholder: "Email address",
      notePlaceholder: "Anything else you'd like us to know? (optional)",
      submitLabel: "Send My Recommendation →",
    },
    success: {
      eyebrow: "On its way to your inbox",
      heading: "Here's Your Perfect Match",
      body: "We've sent a personalized note to your email. Ready to lock in the date? Book a quick discovery call and we'll walk you through every detail.",
      callLabel: "Book a Discovery Call",
      callHref: "/contact",
    },
  },

  experienceFinder: {
    section: {
      eyebrow: "Find Your Escape",
      heading: "What Kind of Night Are You Imagining?",
      subheading: "Three questions. We\u2019ll match you to exactly the right experience \u2014 no browsing, no guesswork.",
      startCta: "Yes \u2014 Show Me Mine \u2192",
    },
    questions: [
      {
        id: "q1",
        question: "What are you dreaming of?",
        options: [
          { value: "romantic-evening", label: "A romantic evening for two", detail: "Candlelight, warm water, and a few hours just for you" },
          { value: "planning-to-propose", label: "I\u2019m going to propose", detail: "We build the moment \u2014 you just say the words" },
          { value: "need-a-getaway", label: "We need to escape", detail: "An overnight in the woods, disconnected from everything" },
          { value: "just-exploring", label: "I\u2019m still deciding", detail: "No pressure \u2014 let us show you what we\u2019ve got" },
        ],
      },
      {
        id: "q2",
        question: "How much time are you giving yourselves?",
        options: [
          { value: "few-hours-tonight", label: "A few stolen hours tonight", detail: "Hot tub, fireside lounge, and home before midnight" },
          { value: "one-perfect-night", label: "One perfect night", detail: "Check in, unplug, check out renewed" },
          { value: "two-or-more-nights", label: "Two nights or more", detail: "Long enough to actually unwind" },
        ],
      },
      {
        id: "q3",
        question: "When you picture it, what feels right?",
        options: [
          { value: "total-privacy", label: "Just the two of us", detail: "No neighbors, no schedules \u2014 completely ours" },
          { value: "every-detail-handled", label: "Everything handled for us", detail: "Arrive and find it already perfect" },
          { value: "out-in-nature", label: "Out in the woods, under the stars", detail: "Trees, firelight, and open air" },
          { value: "maximum-luxury", label: "Pull out all the stops", detail: "The most luxurious version of this night" },
        ],
      },
    ] as const,
    results: {
      "date-night": {
        eyebrow: "Perfect for you",
        headline: "A Private Date Night Escape",
        description: "Two hours of warm water, candlelight, and the fireside lounge \u2014 just for you. No overnight commitment, all the magic.",
        price: "From $119/couple",
        cta: { label: "See Date Night Packages", href: "/date-night" },
      },
      "proposals": {
        eyebrow: "Perfect for you",
        headline: "A Proposal She Will Never Forget",
        description: "We stage every detail \u2014 rose petals, champagne, the Marry Me sign. You focus on the moment. We handle everything else.",
        price: "Packages from $249",
        cta: { label: "Plan Your Proposal", href: "/proposals" },
      },
      "velvet-buck": {
        eyebrow: "Perfect for you",
        headline: "The Velvet Buck \u2014 Woodland Glamping",
        description: "320 sq ft of luxury in the trees. Private hot tub, string lights, and countryside views. Nature without the roughing-it.",
        price: "From $175/night",
        cta: { label: "See The Velvet Buck", href: "/stays/velvet-buck" },
      },
      "enchanted-cottage": {
        eyebrow: "Perfect for you",
        headline: "The Enchanted Cottage",
        description: "A private retreat with a hot tub on the covered deck, a king Sleep Number bed, and a fully stocked kitchen. Every detail, handled.",
        price: "From $175/night",
        cta: { label: "See The Enchanted Cottage", href: "/stays/enchanted-cottage" },
      },
      "cottage-extended": {
        eyebrow: "Perfect for you",
        headline: "The Enchanted Cottage + Romance Add-On",
        description: "Two or more nights in the Cottage with the Ultimate Romance Experience \u2014 charcuterie, rose petals, floating candles, and a breakfast basket.",
        price: "From $175/night + $129 add-on",
        cta: { label: "See The Enchanted Cottage", href: "/stays/enchanted-cottage" },
      },
      "stays-overview": {
        eyebrow: "Welcome",
        headline: "Explore All Our Stays",
        description: "Bell tent glamping, luxury woodland tents, a private cottage \u2014 there is something here for every kind of escape.",
        price: "From $35/night",
        cta: { label: "Browse All Stays", href: "/stays" },
      },
    } as const,
    triggerCopy: {
      default: "Not sure which experience is right for you?",
      stays: "Not sure which stay fits your vision?",
      dateNight: "Which package fits your evening?",
      proposals: "Which proposal package is right for you?",
    },
    triggerCta: "Find Your Escape \u2192",
  },

  // Footer
  footer: {
    tagline: "Where Romance Meets the Wild",
    links: [
      { label: "Stays", href: "/stays" },
      { label: "Date Night", href: "/date-night" },
      { label: "Proposals", href: "/proposals" },
      { label: "Journal", href: "/blog" },
      { label: "Shop", href: "/shop" },
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
