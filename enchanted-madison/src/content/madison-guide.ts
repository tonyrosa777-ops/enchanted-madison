/**
 * Madison, IN destination guide content.
 * Source: site-copy.md §Madison, IN Guide
 *
 * CONTENT GAP: The current site lists only 3 attractions. Per the audit (§11),
 * this page is too sparse for SEO value. The full guide needs restaurants,
 * wineries, seasonal events, and Ohio River activities added before Phase 3
 * page build. Items marked needsDetail: true are placeholders.
 */

export type Attraction = {
  slug: string;
  name: string;
  category: "nature" | "history" | "dining" | "shopping" | "winery" | "activity";
  distance?: string;
  summary: string;
  detail?: string;
  /** True when copy needs to be written or expanded before page build */
  needsDetail?: boolean;
};

export const madisonGuideContent = {
  eyebrow: "Madison, Indiana",
  headline: "There is more to explore than you expect.",
  intro:
    "Madison sits right on the banks of the Ohio River and has been voted a top Midwest destination. From dramatic waterfalls and a Greek Revival mansion to local wineries and a historic downtown, there is more than a weekend can hold — and we're five minutes from all of it.",

  attractions: [
    {
      slug: "clifty-falls",
      name: "Clifty Falls State Park",
      category: "nature",
      distance: "10 min from The Enchanted Collective",
      summary:
        "Dramatic waterfalls, gorge hiking, and one of Indiana's most scenic state parks — stunning in every season.",
      detail:
        "Clifty Falls State Park features multiple waterfall viewpoints, rugged canyon trails, and the Inn at Clifty Falls with its legendary buffet. Summer brings the waterslide and pool. Fall turns the gorge into a canvas of color. It's a can't-miss no matter when you visit.",
    },
    {
      slug: "lanier-mansion",
      name: "Lanier Mansion State Historic Site",
      category: "history",
      distance: "5 min from The Enchanted Collective",
      summary:
        "A stunning 1844 Greek Revival mansion overlooking the Ohio River, with elegantly preserved rooms and formal gardens.",
      detail:
        "Built in 1844 for financier James F.D. Lanier, this beautifully preserved Greek Revival mansion offers a glimpse into Madison's riverfront past. Tour elegant rooms with period furnishings and step into the formal gardens overlooking the Ohio River.",
    },
    {
      slug: "downtown-madison",
      name: "Historic Downtown Madison",
      category: "shopping",
      distance: "5 min from The Enchanted Collective",
      summary:
        "One of the best-preserved 19th-century downtowns in the Midwest — boutiques, restaurants, and galleries along the Ohio River.",
      detail:
        "Madison's downtown National Historic Landmark district stretches along the Ohio River with independent shops, local restaurants, wine bars, and galleries. Voted a top Midwest town, it's an easy and rewarding afternoon on foot.",
      needsDetail: false,
    },
    {
      slug: "ohio-river",
      name: "Ohio River & Scenic Byway",
      category: "activity",
      distance: "5 min from The Enchanted Collective",
      summary:
        "The Ohio River Scenic Byway winds through some of southern Indiana's most beautiful countryside, perfect for a scenic drive or a river sunset.",
      needsDetail: true,
    },
    {
      slug: "madison-wineries",
      name: "Local Wineries",
      category: "winery",
      summary:
        "Several wineries and tasting rooms are within easy reach along the Ohio River corridor.",
      needsDetail: true,
    },
    {
      slug: "madison-dining",
      name: "Where to Eat in Madison",
      category: "dining",
      summary:
        "From waterfront dining to hidden local spots, Madison punches above its weight on the food scene.",
      needsDetail: true,
    },
  ] satisfies Attraction[],

  /**
   * Seasonal notes — placeholder for future content.
   * Spring: wildflowers at Clifty Falls, Ohio River flooding views
   * Summer: waterslide, river activities, outdoor dining
   * Fall: gorge foliage at Clifty Falls, harvest festivals
   * Winter: quiet, intimate, best for hot tub escapes
   */
  seasonalNoteNeeded: true,
} as const;
