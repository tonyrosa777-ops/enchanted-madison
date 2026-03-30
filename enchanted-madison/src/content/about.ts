/**
 * About page content — property description, proximity, amenities, host info.
 * Source: site-copy.md §About the Property + §Location & Contact
 *
 * HOST STORY GAP: Angela & Marc's personal backstory (why they built this,
 * their vision) does not exist anywhere on the current site. The three guest
 * reviews mention Angela by name and describe exceptional hospitality, but
 * there is no "meet the hosts" copy. This must be written before the /about
 * page can be fully built. See progress.md Phase 2 open item.
 */

export type ProximityItem = {
  label: string;
  distance: string;
};

export const aboutContent = {
  /** Short brand tagline used on the about page hero */
  eyebrow: "Our story",

  headline: "A one-of-a-kind countryside retreat built for connection, comfort, and a touch of magic.",

  /**
   * Intro paragraphs — from the booking platform About page.
   * These are SEO-friendly and factual. The host story (emotional/personal)
   * needs to be written separately and added before launch.
   */
  intro: [
    "The Enchanted Collective is a curated outdoor retreat located just five minutes from historic Madison, Indiana. Nestled in a peaceful natural setting in Southern Indiana, we offer luxury glamping tents, a private cottage, and wooded campsites — each designed to blend the beauty of the outdoors with elevated comfort.",
    "One of the most unique experiences at The Enchanted Collective is our private hot tub retreats under the stars, where guests can enjoy peaceful soaking time surrounded by nature. We also offer outdoor movie nights, fireside lounge spaces, proposal experiences, and date night escapes — all designed for couples and curated small groups.",
    "Our property sits close to many popular attractions including Clifty Falls State Park, downtown Madison's historic district, wineries along the Ohio River Scenic Byway, and local shops and restaurants. Guests can spend the day hiking scenic trails, exploring waterfalls, or simply relaxing around the fire.",
  ],

  /** Host names — used on About page and review attribution context */
  hosts: {
    names: "Angela & Marc",
    /**
     * EDITOR NOTE: No personal backstory copy exists on the current site.
     * Before building /about, Angela and Marc need to provide:
     *   - Why they built The Enchanted Collective
     *   - Their background / what they were doing before
     *   - Their vision for the property
     *   - A photo of the two of them
     * The three guest reviews describe Angela as exceptionally thoughtful
     * and detail-oriented — lean into that in the host story.
     */
    storyPlaceholder: true,
  },

  proximity: [
    { label: "Downtown Madison, IN", distance: "5 min" },
    { label: "Clifty Falls State Park", distance: "10 min" },
    { label: "Hanover College", distance: "15 min" },
    { label: "Rising Sun Casinos", distance: "30 min" },
    { label: "Lawrenceburg, IN", distance: "40 min" },
    { label: "Louisville, KY", distance: "60 min" },
    { label: "Cincinnati, OH", distance: "75 min" },
    { label: "Indianapolis, IN", distance: "90 min" },
  ] satisfies ProximityItem[],

  /** Full property amenity list from the booking platform */
  amenities: [
    "Private hot tubs",
    "Free outdoor parking",
    "Air conditioning",
    "Heating",
    "Smart TV",
    "Coffee maker",
    "Barbeque grills",
    "On-site hiking trails",
    "Bicycle rentals",
    "Outdoor movie nights",
    "Fireside lounge",
    "Fire sprinkler system",
    "Accessible facilities",
    "Early check-in (on request)",
    "Late check-out (on request)",
    "All public areas non-smoking",
  ],
} as const;
