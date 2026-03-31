/**
 * generate-images.ts
 * Generates hero and thumbnail images for The Enchanted Collective
 * using fal.ai Flux models, then updates image paths in site.ts.
 *
 * Run: npx tsx scripts/generate-images.ts
 */

import { fal } from "@fal-ai/client";
import * as fs from "node:fs";
import * as path from "node:path";
import * as https from "node:https";
import * as http from "node:http";
import * as readline from "node:readline";

// ---------------------------------------------------------------------------
// Load .env.local (dotenv not installed; parse manually)
// ---------------------------------------------------------------------------
function loadEnvLocal(): void {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) {
    throw new Error(".env.local not found at: " + envPath);
  }
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

// ---------------------------------------------------------------------------
// Style prefix — from the brief
// ---------------------------------------------------------------------------
const STYLE_PREFIX =
  "Photorealistic luxury glamping, romantic atmosphere, Indiana woodland, " +
  "warm candlelight and firelight, string lights, cinematic composition, " +
  "National Geographic quality, 16:9";

// ---------------------------------------------------------------------------
// Image definitions
// ---------------------------------------------------------------------------
interface ImageJob {
  category: "accommodations" | "experiences" | "blog";
  slug: string;
  subject: string;
  model: "fal-ai/flux/dev" | "fal-ai/flux/schnell";
  /** Key path in site.ts stays array to update, if applicable */
  siteKey?: string;
}

const JOBS: ImageJob[] = [
  // ── Accommodations (flux/dev) ──────────────────────────────────────────
  {
    category: "accommodations",
    slug: "enchanted-cottage",
    subject:
      "private hot tub on a covered deck at golden hour, king bed visible through glass doors, " +
      "cozy Indiana woodland cottage, warm amber light, romantic, inviting",
    model: "fal-ai/flux/dev",
    siteKey: "enchanted-cottage",
  },
  {
    category: "accommodations",
    slug: "velvet-buck",
    subject:
      "luxury glamping tent in a secluded woodland clearing, private hot tub steaming under a " +
      "canopy of string lights and stars, countryside views, twilight, magical atmosphere",
    model: "fal-ai/flux/dev",
    siteKey: "velvet-buck",
  },
  {
    category: "accommodations",
    slug: "bell-tent",
    subject:
      "16-foot white bell tent with fire pit glowing orange, Adirondack chairs, overhead string " +
      "lights through forest trees, evening forest campsite, warm and inviting",
    model: "fal-ai/flux/dev",
    siteKey: "bell-tent",
  },
  {
    category: "accommodations",
    slug: "campsite",
    subject:
      "rustic wooded campsite, crackling fire pit, Adirondack chairs, Milky Way visible above " +
      "southern Indiana forest, quiet and serene, string lights in tree canopy",
    model: "fal-ai/flux/dev",
    siteKey: "campsite",
  },

  // ── Experiences (flux/dev) ─────────────────────────────────────────────
  {
    category: "experiences",
    slug: "proposal",
    subject:
      "candlelit private hot tub surrounded by rose petals floating on the water, string lights " +
      "through enchanted woodland, Marry Me sign glowing softly, champagne chilling nearby, " +
      "intimate and magical proposal setting",
    model: "fal-ai/flux/dev",
  },
  {
    category: "experiences",
    slug: "date-night",
    subject:
      "couple relaxing on a luxurious fireside lounge outdoors, candlelight reflecting off warm " +
      "faces, intimate romantic atmosphere, plush furniture, fairy lights, private woodland setting",
    model: "fal-ai/flux/dev",
  },
  {
    category: "experiences",
    slug: "hot-tub-escape",
    subject:
      "private outdoor hot tub with gentle steam rising, surrounded by fairy lights and tall trees " +
      "at twilight, warm amber and violet sky, serene and luxurious",
    model: "fal-ai/flux/dev",
  },

  // ── Blog thumbnails (flux/schnell) ────────────────────────────────────
  {
    category: "blog",
    slug: "best-romantic-getaways-indiana",
    subject:
      "romantic couple at a luxury glamping retreat in Indiana, hot tub at sunset, " +
      "editorial travel photography style",
    model: "fal-ai/flux/schnell",
  },
  {
    category: "blog",
    slug: "glamping-vs-camping",
    subject:
      "split scene: left side rustic camping tent, right side luxury glamping tent with string " +
      "lights and plush bedding, editorial comparison photo",
    model: "fal-ai/flux/schnell",
  },
  {
    category: "blog",
    slug: "things-to-do-madison-indiana",
    subject:
      "aerial view of Madison Indiana historic downtown along the Ohio River, golden hour, " +
      "travel destination editorial photography",
    model: "fal-ai/flux/schnell",
  },
  {
    category: "blog",
    slug: "how-to-plan-the-perfect-proposal",
    subject:
      "romantic proposal setup with rose petals, candles, champagne, and string lights in a " +
      "woodland setting, editorial lifestyle photography",
    model: "fal-ai/flux/schnell",
  },
  {
    category: "blog",
    slug: "date-night-ideas-near-louisville",
    subject:
      "couple enjoying a romantic evening outdoors near Louisville Kentucky, candlelight dinner " +
      "al fresco, editorial lifestyle travel photography",
    model: "fal-ai/flux/schnell",
  },
];

// ---------------------------------------------------------------------------
// Cost estimates (USD, approximate as of 2026)
// ---------------------------------------------------------------------------
const COST_PER_IMAGE: Record<string, number> = {
  "fal-ai/flux/dev": 0.025,
  "fal-ai/flux/schnell": 0.003,
};

function estimateCost(): void {
  let total = 0;
  const byModel: Record<string, number> = {};
  for (const job of JOBS) {
    const cost = COST_PER_IMAGE[job.model] ?? 0;
    total += cost;
    byModel[job.model] = (byModel[job.model] ?? 0) + 1;
  }
  console.log("\n=== Cost Estimate ===");
  console.log(`  Total images: ${JOBS.length}`);
  for (const [model, count] of Object.entries(byModel)) {
    const modelCost = count * (COST_PER_IMAGE[model] ?? 0);
    console.log(
      `  ${model}: ${count} images × $${COST_PER_IMAGE[model]} = $${modelCost.toFixed(3)}`
    );
  }
  console.log(`  Estimated total: ~$${total.toFixed(3)}`);
  console.log("=====================\n");
}

// ---------------------------------------------------------------------------
// Confirm with user
// ---------------------------------------------------------------------------
function askConfirmation(): Promise<boolean> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Proceed with generation? [y/N] ", (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase() === "y");
    });
  });
}

// ---------------------------------------------------------------------------
// Generate image via fal.ai
// ---------------------------------------------------------------------------
async function generateImage(job: ImageJob): Promise<string> {
  const prompt = `${STYLE_PREFIX}, ${job.subject}`;
  console.log(`  Generating: ${job.category}/${job.slug} (${job.model})...`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await fal.subscribe(job.model as any, {
    input: {
      prompt,
      image_size: "landscape_16_9",
      num_inference_steps: job.model === "fal-ai/flux/dev" ? 28 : 4,
      guidance_scale: job.model === "fal-ai/flux/dev" ? 3.5 : undefined,
      num_images: 1,
      enable_safety_checker: true,
      output_format: "jpeg",
    },
    logs: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = result.data as any;
  const imageUrl: string = data?.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error(`No image URL in response for ${job.slug}: ${JSON.stringify(data)}`);
  }
  return imageUrl;
}

// ---------------------------------------------------------------------------
// Download image to disk
// ---------------------------------------------------------------------------
function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(destPath);
    client
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(destPath);
          downloadFile(res.headers.location!, destPath).then(resolve).catch(reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", (err) => {
        fs.unlinkSync(destPath);
        reject(err);
      });
  });
}

// ---------------------------------------------------------------------------
// Update site.ts image references for stays
// ---------------------------------------------------------------------------
function updateSiteTs(updates: Record<string, string>): void {
  const siteFile = path.resolve(__dirname, "../src/data/site.ts");
  let content = fs.readFileSync(siteFile, "utf-8");

  const slugToOldPath: Record<string, string> = {
    "enchanted-cottage": "/images/cottage-hero.jpg",
    "velvet-buck": "/images/velvet-buck-hero.jpg",
    "bell-tent": "/images/bell-tent-hero.jpg",
    campsite: "/images/campsite-hero.jpg",
  };

  let changed = 0;
  for (const [slug, newPath] of Object.entries(updates)) {
    const oldPath = slugToOldPath[slug];
    if (!oldPath) continue;
    if (content.includes(oldPath)) {
      content = content.replace(oldPath, newPath);
      changed++;
    }
  }

  if (changed > 0) {
    fs.writeFileSync(siteFile, content, "utf-8");
    console.log(`\n  Updated ${changed} image reference(s) in site.ts`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main(): Promise<void> {
  loadEnvLocal();

  const apiKey = process.env.FAL_API_KEY;
  if (!apiKey) throw new Error("FAL_API_KEY not found in .env.local");

  fal.config({ credentials: apiKey });

  console.log("\nThe Enchanted Collective — Image Generator");
  console.log("==========================================");
  estimateCost();

  const confirmed = await askConfirmation();
  if (!confirmed) {
    console.log("Cancelled.");
    process.exit(0);
  }

  const publicBase = path.resolve(__dirname, "../public/images");
  const siteUpdates: Record<string, string> = {};
  const failed: string[] = [];

  for (const job of JOBS) {
    const outputDir = path.join(publicBase, job.category);
    fs.mkdirSync(outputDir, { recursive: true });
    const outputPath = path.join(outputDir, `${job.slug}.webp`);

    try {
      const imageUrl = await generateImage(job);
      await downloadFile(imageUrl, outputPath);
      console.log(`  ✓ Saved: public/images/${job.category}/${job.slug}.webp`);

      if (job.siteKey) {
        siteUpdates[job.siteKey] = `/images/${job.category}/${job.slug}.webp`;
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${job.slug} — ${(err as Error).message}`);
      failed.push(job.slug);
    }
  }

  if (Object.keys(siteUpdates).length > 0) {
    updateSiteTs(siteUpdates);
  }

  console.log("\n==========================================");
  console.log(`Done. ${JOBS.length - failed.length}/${JOBS.length} images generated.`);
  if (failed.length > 0) {
    console.log(`Failed: ${failed.join(", ")}`);
  }
}

main().catch((err) => {
  console.error("\nFatal error:", err.message);
  process.exit(1);
});
