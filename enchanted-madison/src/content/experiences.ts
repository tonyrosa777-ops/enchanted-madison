export type ExperiencePackage = {
  name: string;
  priceRange: string;
  summary: string;
};

export type ExperienceCollection = {
  heading: string;
  packages: ExperiencePackage[];
};

export const experienceCollections: Record<
  "proposals" | "dateNight" | "dayUse",
  ExperienceCollection
> = {
  proposals: {
    heading: "Proposal Packages",
    packages: [
      {
        name: "Proposal Package (Standard)",
        priceRange: "$399-$499",
        summary:
          "A romantic setup with candles, roses, champagne, and a glowing proposal moment in the woods.",
      },
      {
        name: "Proposal Package (Premium)",
        priceRange: "$699-$899",
        summary:
          "An upgraded proposal experience with premium styling, celebration details, and photographer coordination.",
      },
    ],
  },
  dateNight: {
    heading: "Date Night and Girls Night Escapes",
    packages: [
      {
        name: "Date Night Escape",
        priceRange: "$149-$199/couple",
        summary:
          "A private evening with fire pit, wine, charcuterie, and stargazing without an overnight stay.",
      },
      {
        name: "Girls Night Package",
        priceRange: "$79-$129/person",
        summary:
          "A curated social escape with drinks, photo-worthy details, and private use of the setting.",
      },
    ],
  },
  dayUse: {
    heading: "Day-Use Experiences",
    packages: [
      {
        name: "2-Hour Hot Tub Escape",
        priceRange: "$79-$99/couple",
        summary:
          "A private hot tub session with robes, towels, ambient lighting, and a sparkling beverage.",
      },
      {
        name: "Hot Tub + Romance Upgrade",
        priceRange: "$149-$179/couple",
        summary:
          "An upgraded soak with charcuterie, champagne, and a more immersive romantic setup.",
      },
    ],
  },
};
