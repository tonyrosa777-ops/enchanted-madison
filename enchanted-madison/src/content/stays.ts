export type Stay = {
  slug: string;
  name: string;
  category: string;
  startingRate: string;
  summary: string;
  highlights: string[];
};

export const stays: Stay[] = [
  {
    slug: "enchanted-cottage",
    name: "The Enchanted Cottage",
    category: "Vacation Rental",
    startingRate: "$175/night",
    summary:
      "A private cottage retreat with a king bed, kitchen, fire pit, and hot tub minutes from downtown Madison.",
    highlights: ["King bed", "Private hot tub", "Kitchen", "Covered outdoor dining"],
  },
  {
    slug: "velvet-buck",
    name: "The Velvet Buck",
    category: "Luxury Glamping Tent",
    startingRate: "$195/night",
    summary:
      "A woodland glamping tent with a private hot tub, glowing string lights, and a romantic outdoor setting.",
    highlights: ["Private hot tub", "Woodland views", "Fire pit", "Outdoor dining"],
  },
  {
    slug: "bell-tent-campsite",
    name: "Curated Campsite with Bell Tent",
    category: "Glamping Campsite",
    startingRate: "$95/night",
    summary:
      "A prepared glamping campsite with a bell tent already in place for guests who want comfort with the spirit of camping.",
    highlights: ["Bell tent provided", "Fire pit", "Outdoor dining", "Dog friendly"],
  },
  {
    slug: "bring-your-own-tent",
    name: "Curated Campsite - Bring Your Own Tent",
    category: "Traditional Campsite",
    startingRate: "$55/night",
    summary:
      "A private wooded campsite with a fire pit and dining setup for guests who want a simpler nature-forward stay.",
    highlights: ["Forest setting", "Fire pit", "Outdoor dining", "Near Clifty Falls"],
  },
];
