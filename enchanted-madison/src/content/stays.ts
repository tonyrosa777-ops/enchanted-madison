/**
 * Stay accommodations — the 4 bookable overnight options.
 * Source: site-copy.md §Accommodations + booking platform scrape
 *
 * Rate note: the main site shows $175/night for both Cottage and Velvet Buck,
 * and $35/night for Nature Sites. These are the "from" floor rates.
 * The booking platform shows $351/$390 for 2 nights on the Cottage (≈$175–195/night).
 * Rates will be confirmed and locked once Lodgify is provisioned.
 */

export type Stay = {
  slug: string;
  name: string;
  category: string;
  startingRate: string;
  /** Short tagline for cards and navigation */
  summary: string;
  /** Full long-form description for the stay detail page */
  description: string[];
  highlights: string[];
  amenities: string[];
  capacity: string;
  size?: string;
  dogs?: boolean;
  openingNote?: string;
  /** Hero image path — relative to /public. Placeholder gradient shown when absent. */
  image?: string;
};

export const stays: Stay[] = [
  {
    slug: "enchanted-cottage",
    name: "The Enchanted Cottage",
    category: "Vacation Rental",
    startingRate: "$175/night",
    capacity: "Sleeps 2",
    summary:
      "A private one-bedroom cottage with a king bed, full kitchen, covered deck, fire pit, and private hot tub — minutes from downtown Madison.",
    description: [
      "Tucked within a peaceful natural setting in Southern Indiana, The Enchanted Cottage is a private one bedroom, one bath retreat designed for rest, reconnection, and elevated comfort. Blending modern amenities with cozy charm, this thoughtfully curated getaway is ideal for couples, weekend travelers, and anyone seeking a relaxing escape surrounded by nature.",
      "Guests can unwind in the private hot tub under the stars, gather around the outdoor firepit, or enjoy quiet mornings on the covered deck overlooking the serene countryside. Inside, the cottage features inviting living spaces, a fully equipped kitchen, spa-inspired bathroom, and a King Sleep Number bed with feather bed and silky linens.",
      "Located just minutes from historic Madison, Indiana, The Enchanted Cottage offers the perfect balance of seclusion and convenience — close to local shops, dining, wineries, and riverfront attractions while still feeling worlds away from everyday life.",
    ],
    highlights: [
      "Private hot tub overlooking the woods",
      "King Sleep Number bed with feather bed and silky linens",
      "Fully stocked kitchen with coffee and cocktail bar",
      "Covered deck with outdoor dining",
      "Fire pit",
    ],
    amenities: [
      "1 King bed",
      "1 Bathroom (spa-inspired)",
      "Private hot tub",
      "Full kitchen",
      "Coffee & cocktail bar",
      "Covered deck",
      "Outdoor fire pit",
      "Air conditioning",
      "Heating",
      "Smart TV",
      "Washer",
      "Non-smoking",
    ],
    openingNote: "Opening April 2026",
  },
  {
    slug: "velvet-buck",
    name: "The Velvet Buck",
    category: "Luxury Glamping Tent",
    startingRate: "$175/night",
    capacity: "Sleeps 2",
    size: "320 sq ft",
    summary:
      "A spacious luxury canvas tent on a private wooded deck with a hot tub under the stars, fire pit, and string lights.",
    description: [
      "Tucked within a secluded wooded setting in Southern Indiana, The Velvet Buck is a luxury glamping retreat designed to blend immersive nature with elevated comfort. This private canvas tent experience offers one of the most unique and romantic glamping stays in Indiana — perfect for couples and travelers seeking a peaceful escape under the stars.",
      "The spacious furnished tent sits atop a private deck and features cozy sleeping accommodations, curated interior styling, and outdoor gathering spaces that invite guests to slow down and reconnect. Just steps outside, guests can unwind in their own private hot tub, creating the ultimate glamping experience — whether soaking beneath the night sky or enjoying a quiet morning surrounded by the sounds of nature.",
      "Guests have access to a nearby bathhouse facility with restrooms and showers, providing comfort and convenience while preserving the rustic charm of the outdoor setting.",
    ],
    highlights: [
      "Private hot tub under the stars",
      "Private deck with woodland views",
      "String lights and outdoor fire pit",
      "Outdoor dining space",
      "Bathhouse access",
    ],
    amenities: [
      "Private hot tub",
      "Private deck",
      "Outdoor fire pit",
      "Outdoor dining",
      "String lights",
      "Bathhouse access (showers & restrooms)",
      "Countryside view",
      "Non-smoking",
    ],
    openingNote: "Opening May 2026",
  },
  {
    slug: "bell-tent-campsite",
    name: "Curated Campsite — Bell Tent",
    category: "Glamping Campsite",
    startingRate: "$35/night",
    capacity: "Sleeps 2",
    size: "201 sq ft",
    dogs: true,
    summary:
      "All the charm of glamping with the tent already set up — a 16-foot bell tent, fire pit, Adirondack chairs, and wooded privacy.",
    description: [
      "Enjoy a relaxed outdoor stay at one of our Curated Campsites. Each site includes a 16-foot bell tent already set up for your arrival, offering the charm of glamping while keeping the spirit of traditional camping. Inside the tent you'll find a small table and soft battery-powered lamp for convenience and ambiance. Guests bring their own bedding and sleeping gear to make the space their own.",
      "Outside, each campsite features a fire pit with cooking grate, Adirondack chairs for relaxing around the fire, outdoor dining table, and overhead string lights for evening ambiance.",
      "Surrounded by peaceful woods yet just minutes from downtown Madison and Clifty Falls State Park, these sites offer a simple and comfortable way to experience nature. Dogs are welcome.",
    ],
    highlights: [
      "16-foot bell tent provided and set up",
      "Fire pit with cooking grate",
      "Adirondack chairs",
      "Outdoor dining table",
      "String lights",
      "Dogs welcome",
    ],
    amenities: [
      "16-ft bell tent (set up on arrival)",
      "Battery-powered lamp",
      "Fire pit with cooking grate",
      "Adirondack chairs",
      "Outdoor dining table",
      "Overhead string lights",
      "Bathhouse access (showers, restrooms, toiletries, hairdryer)",
      "BBQ area",
      "Dogs accepted",
      "Forest view",
      "Non-smoking",
    ],
  },
  {
    slug: "bring-your-own-tent",
    name: "Curated Campsite — Bring Your Own Tent",
    category: "Traditional Campsite",
    startingRate: "$35/night",
    capacity: "Sleeps 2",
    summary:
      "A private wooded campsite with a prepared fire pit, Adirondack chairs, and dining setup — you bring the tent.",
    description: [
      "Our Bring Your Own Tent campsites are designed for guests who love a traditional outdoor experience while enjoying a thoughtfully prepared space. Each site includes a fire pit with cooking grate, Adirondack chairs for relaxing around the fire, and an outdoor dining table for meals under the trees.",
      "Surrounded by nature and quiet countryside, these campsites offer the perfect setting to unplug, gather around the fire, and enjoy evenings under the stars. Guests bring their own tent and camping gear, allowing you to create your ideal setup.",
      "The property is conveniently located near downtown Madison's shops and restaurants as well as the scenic hiking trails and waterfalls of Clifty Falls State Park.",
    ],
    highlights: [
      "Private wooded setting",
      "Fire pit with cooking grate",
      "Adirondack chairs",
      "Outdoor dining table",
      "Near Clifty Falls",
    ],
    amenities: [
      "Fire pit with cooking grate",
      "Adirondack chairs",
      "Outdoor dining table",
      "Overhead string lights",
      "Bathhouse access (showers & restrooms)",
      "Forest view",
      "Non-smoking",
    ],
  },
];
