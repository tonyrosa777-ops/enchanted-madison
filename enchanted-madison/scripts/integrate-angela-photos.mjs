// Convert Angela's delivered photos (project root) into optimized .webp assets
// in public/images/. Keeps existing filenames so no component code changes.
import sharp from "sharp";
import { mkdir, copyFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "..");
const PUBLIC = path.resolve(process.cwd(), "public");

const MAX_WIDTH = 1600;
const QUALITY = 80;

// [sourceFilename, destination path relative to /public]
const JOBS = [
  // Accommodations
  ["EC Hot Tub.jpg", "images/accommodations/enchanted-cottage.webp"],
  ["Tent Site with tent.png", "images/accommodations/bell-tent.webp"],
  ["Tent Site Roasting Marshmallows.png", "images/accommodations/campsite.webp"],
  ["Glamping hot tub close up.png", "images/accommodations/velvet-buck.webp"],

  // Experiences
  ["Sunrise Hot Tub Escape.png", "images/experiences/hot-tub-escape.webp"],
  ["Brighter Hot Tub Pic.png", "images/experiences/date-night.webp"],
  ["Brighter Hot Tub Pic.png", "images/experiences/date-night-card.webp"],
  ["Christmas Proposal .png", "images/experiences/proposal.webp"],
  ["Christmas Proposal .png", "images/experiences/proposals-card.webp"],
  ["Swing  at EC.png", "images/experiences/why-enchanted.webp"],

  // Add-ons
  ["Outdoor Movie Bed with real bed.png", "images/addons/outdoor-movie.webp"],
  ["EC Romance Package.jpg", "images/addons/classic-romance.webp"],
  ["EC Cocktail Bar.jpg", "images/addons/ultimate-romance.webp"],

  // Cottage gallery (staged for future detail-page gallery)
  ["EC Bathroom.jpg", "images/accommodations/cottage/bathroom.webp"],
  ["EC Bedroom Summer.jpg", "images/accommodations/cottage/bedroom.webp"],
  ["EC Family Room Aerial.jpg", "images/accommodations/cottage/family-room.webp"],
  ["EC Front Deck.jpg", "images/accommodations/cottage/front-deck.webp"],
  ["EC Kitchen.jpg", "images/accommodations/cottage/kitchen.webp"],
  ["EC Cocktail Bar.jpg", "images/accommodations/cottage/cocktail-bar.webp"],
  ["EC Romance Package.jpg", "images/accommodations/cottage/romance-package.webp"],
  ["EC Hot Tub.jpg", "images/accommodations/cottage/hot-tub.webp"],
  ["Entrance.jpg", "images/accommodations/cottage/entrance.webp"],
];

async function processOne(source, destRel) {
  const src = path.join(ROOT, source);
  const dest = path.join(PUBLIC, destRel);
  if (!existsSync(src)) {
    console.warn(`SKIP (missing source): ${source}`);
    return;
  }
  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);
  console.log(`OK  ${source}  ->  /${destRel}`);
}

for (const [src, dest] of JOBS) {
  try {
    await processOne(src, dest);
  } catch (err) {
    console.error(`FAIL ${src}: ${err.message}`);
  }
}
