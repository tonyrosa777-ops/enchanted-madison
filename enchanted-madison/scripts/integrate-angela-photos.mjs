// Convert Angela's delivered photos (source-photos/) into optimized .webp assets
// in public/images/. Keeps existing filenames so no component code changes.
// Source files now live in source-photos/ at the repo root (moved from the flat
// project root in Session 14 for the madison-guide subfolder pattern).
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(process.cwd(), "..");
const SOURCE_ROOT = path.join(REPO_ROOT, "source-photos");
const PUBLIC = path.resolve(process.cwd(), "public");

const MAX_WIDTH = 1600;
const QUALITY = 80;

// [sourceFilenameRelativeToSourcePhotos, destination path relative to /public]
// Sources may include a subfolder prefix (e.g. "madison-guide/Foo.jpg").
// REMAPPED 2026-05-13 per Angela's feedback: EC/enchanted photos → cottage;
// Glamping ___ + Tent Site ___ photos → tent stays (Bell Tent + BYO Campsite);
// Velvet Buck + Starlit Buck need new fal.ai-generated photos (separate script).
const JOBS = [
  // ──────────────────────────────────────────────────────────────
  // ENCHANTED COTTAGE — every EC/Enchanted source photo lands here
  // ──────────────────────────────────────────────────────────────
  // Hero (homepage stays grid card)
  ["EC Hot Tub.jpg", "images/accommodations/enchanted-cottage.webp"],
  // Full cottage gallery — every EC-labeled source photo + Entrance.jpg
  // (Angela's request: ALL EC photos go in the cottage carousel)
  ["EC Hot Tub.jpg", "images/accommodations/cottage/hot-tub.webp"],
  ["EC Bedroom Summer.jpg", "images/accommodations/cottage/bedroom.webp"],
  ["EC Family Room Aerial.jpg", "images/accommodations/cottage/family-room.webp"],
  ["EC Kitchen.jpg", "images/accommodations/cottage/kitchen.webp"],
  ["EC Cocktail Bar.jpg", "images/accommodations/cottage/cocktail-bar.webp"],
  ["EC Bathroom.jpg", "images/accommodations/cottage/bathroom.webp"],
  ["EC Front Deck.jpg", "images/accommodations/cottage/front-deck.webp"],
  ["EC Romance Package.jpg", "images/accommodations/cottage/romance-package.webp"],
  ["EC Swing.png", "images/accommodations/cottage/swing.webp"],
  ["Entrance.jpg", "images/accommodations/cottage/entrance.webp"],

  // ──────────────────────────────────────────────────────────────
  // BELL TENT SITE — Tent Site + Glamping source photos (curated glamping)
  // ──────────────────────────────────────────────────────────────
  // Hero
  ["Tent Site with tent.png", "images/accommodations/bell-tent.webp"],
  // Gallery (5 photos)
  ["Tent Site with tent.png", "images/accommodations/bell-tent/tent.webp"],
  ["Glamping hot tub close up.png", "images/accommodations/bell-tent/hot-tub.webp"],
  ["Glamping bathroom.png", "images/accommodations/bell-tent/bathroom.webp"],
  ["Glamping kitchen.png", "images/accommodations/bell-tent/kitchen.webp"],
  ["Enhanced bedroom for glamping.png", "images/accommodations/bell-tent/bedroom.webp"],

  // ──────────────────────────────────────────────────────────────
  // BYO TENT SITE (campsite) — Tent Site Marshmallows source photo
  // ──────────────────────────────────────────────────────────────
  // Hero
  ["Tent Site Roasting Marshmallows.png", "images/accommodations/campsite.webp"],
  // Gallery (single source photo + shared Glamping shots since BYO is also a tent site)
  ["Tent Site Roasting Marshmallows.png", "images/accommodations/campsite/marshmallows.webp"],
  ["Tent Site with tent.png", "images/accommodations/campsite/tent.webp"],

  // ──────────────────────────────────────────────────────────────
  // EXPERIENCES — hot tub escape backgrounds + proposal
  // ──────────────────────────────────────────────────────────────
  ["Sunrise Hot Tub Escape.png", "images/experiences/hot-tub-escape.webp"],
  ["Sunrise Hot Tub Escape.png", "images/date-night/hot-tub-soak.webp"],
  ["Brighter Hot Tub Pic.png", "images/experiences/date-night.webp"],
  ["Brighter Hot Tub Pic.png", "images/experiences/date-night-card.webp"],
  ["Christmas Proposal .png", "images/experiences/proposal.webp"],
  ["Christmas Proposal .png", "images/experiences/proposals-card.webp"],
  ["EC Swing.png", "images/experiences/why-enchanted.webp"],

  // ──────────────────────────────────────────────────────────────
  // ADD-ONS — EC-derived shots for romance, outdoor movie
  // ──────────────────────────────────────────────────────────────
  ["Outdoor Movie Bed with real bed.png", "images/addons/outdoor-movie.webp"],
  ["EC Romance Package.jpg", "images/addons/classic-romance.webp"],
  ["EC Cocktail Bar.jpg", "images/addons/ultimate-romance.webp"],

  // ──────────────────────────────────────────────────────────────
  // MADISON GUIDE — credited photographer shots (Session 14)
  // ──────────────────────────────────────────────────────────────
  ["madison-guide/Lanier Mansion Jay Westendorf.jpg", "images/madison-guide/lanier-mansion.webp"],
  ["madison-guide/Downtown Madison Aerial Brent Spry.jpg", "images/madison-guide/downtown-madison.webp"],
  ["madison-guide/Broadway Fountain Grunt Pics.jpg", "images/madison-guide/broadway-fountain.webp"],

  // ──────────────────────────────────────────────────────────────
  // VELVET BUCK + STARLIT BUCK
  // No source photos yet — heroes + galleries generated via
  // scripts/generate-velvet-starlit-images.ts (fal.ai flux/dev).
  // Old Glamping ___ → velvet-buck mappings REMOVED 2026-05-13
  // (Angela wanted those at Bell Tent / Campsite instead).
  // ──────────────────────────────────────────────────────────────
];

async function processOne(source, destRel) {
  const src = path.join(SOURCE_ROOT, source);
  const dest = path.join(PUBLIC, destRel);
  if (!existsSync(src)) {
    console.warn(`SKIP (missing source): ${source}`);
    return;
  }
  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(src)
    // .rotate() with no args applies the EXIF Orientation tag and then strips it.
    // Phone photos (iOS, Android) frequently store sideways/upside-down sensor data
    // with an Orientation tag telling viewers to rotate. Sharp drops EXIF by default
    // when writing webp, so without this the source rotation is silently lost.
    .rotate()
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
