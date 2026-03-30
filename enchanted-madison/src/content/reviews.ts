/**
 * Guest reviews.
 * Source: site-copy.md §Reviews
 *
 * These are the 3 verified reviews from the current site.
 * Post-opening: add a Google review widget embed and solicit additional reviews
 * via post-stay email sequence. See progress.md Phase 3 /reviews page task.
 */

export type Review = {
  guest: string;
  location: string;
  body: string;
  /** Packages mentioned — useful for social proof on package pages */
  packagesUsed?: string[];
};

export const reviews: Review[] = [
  {
    guest: "Drucilla",
    location: "Indianapolis, IN",
    body: "Angela and Marc have found their calling! Their piece of paradise truly lives up to its name \"Enchanted Cottage\". They have thought of everything to make your stay relaxing, romantic, and perfect! They have gone above and beyond so you can make \"enchanted memories.\" We will definitely return and highly recommend. Five stars is not enough for this cottage and its' hosts!",
  },
  {
    guest: "Julie",
    location: "Greentown, IN",
    body: "There are not enough words to describe how amazingly relaxing this home is! Angela has thought of every single thing to bring you comfort. I've never wrapped myself in softer blankets! The coffee bar had everything to make a perfect cup of coffee or tea. The amount of candles and soft lighting both inside and outside were remarkable! We both work in loud factories and have lots of things going on…so for our 29th anniversary we chose this place to just be still…it was PERFECT!",
    packagesUsed: [],
  },
  {
    guest: "Melissa",
    location: "Greenwood, IN",
    body: "Angela is absolutely amazing! She was very accommodating of any needs during our stay, and if there was anything we needed she was there for us. Me and my new wife decided to stay here for our honeymoon and I do not know if we could have chosen a better place to stay for our first getaway together. We had chosen the outdoor movie package as well as the romance package for our stay, and all I can say is that it met and exceeded our expectations! Would definitely recommend to anyone looking to get away from their busy life and enjoy a nice relaxing getaway.",
    packagesUsed: ["outdoor-movie", "classic-romance"],
  },
];
