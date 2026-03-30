/**
 * Stay add-on packages — bookable enhancements on top of any overnight reservation.
 * Source: site-copy.md §Packages & Add-Ons
 */

export type StayPackage = {
  slug: string;
  name: string;
  price: string;
  summary: string;
  includes: string[];
  note?: string;
};

export const stayPackages: StayPackage[] = [
  {
    slug: "classic-romance",
    name: "Classic Romance Package",
    price: "$95",
    summary:
      "Set the stage for connection with a beautifully styled romantic atmosphere. Perfect for anniversaries, surprise date nights, or simply adding a layer of romance to your escape.",
    includes: [
      "Rose petal & candle trail",
      "Extra candle styling in the bedroom",
      "Floating candles",
      "Aromatherapy crystals",
      "Private hot tub speaker for music ambiance",
    ],
  },
  {
    slug: "ultimate-romance",
    name: "Ultimate Romance Experience",
    price: "$129",
    summary:
      "Everything in the Classic Romance Package, elevated with a full breakfast basket and indulgent morning details. Thoughtfully curated for milestone celebrations, engagements, or truly unforgettable romantic getaways.",
    includes: [
      "Everything in Classic Romance Package",
      "Breakfast basket with orange juice",
      "Fresh fruit bowls drizzled with honey",
      "Muffins & butter",
      "Gourmet charcuterie board (premium meats, cheeses, crackers, fruit, sauces, olives & pickles)",
      "Premium cigar for a refined finishing touch",
    ],
    note: "Gluten-free crackers available upon request for a $5 additional charge.",
  },
  {
    slug: "outdoor-movie",
    name: "Outdoor Movie Night",
    price: "$25/person",
    summary:
      "Lawn movie showings under the stars on a 150-inch projection screen. Guests relax on romantic movie beds with curtains, fairy lights, and blankets while enjoying fresh popcorn and one complimentary beverage.",
    includes: [
      "150-inch projection screen",
      "Romantic movie bed with curtains and fairy lights",
      "Blankets",
      "Fresh popcorn",
      "One complimentary beverage",
    ],
  },
  {
    slug: "picnic-and-ride",
    name: "Picnic & Ride",
    price: "$125",
    summary:
      "Four hours of electric bike riding with helmets plus a romantic picnic for two. Your basket is packed and ready — all you choose is where to spread the blanket.",
    includes: [
      "4 hours of electric bike riding",
      "Helmets included",
      "Charcuterie board",
      "Two gourmet sugar cookies",
      "Two drinks",
      "Blanket for the picnic spot of your choice",
    ],
  },
  {
    slug: "smores-skillet",
    name: "S'mores Skillet",
    price: "$24",
    summary:
      "A decadent cast iron skillet s'mores experience — Ghirardelli chocolate, caramel squares, heaping marshmallows, sweet coconut, heath topping, and crunchy pecans. Serves two.",
    includes: [
      "Cast iron skillet",
      "Graham crackers",
      "Ghirardelli chocolate and caramel squares",
      "Heaping marshmallows",
      "Sweet coconut",
      "Heath topping",
      "Crunchy pecans",
    ],
  },
];
