/**
 * generate-addon-images.ts
 * Generates images for the 5 stay enhancement add-on packages.
 * Run: npx tsx scripts/generate-addon-images.ts
 */

import { fal } from "@fal-ai/client";
import * as fs from "node:fs";
import * as path from "node:path";
import * as https from "node:https";
import * as http from "node:http";

function loadEnvLocal(): void {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) throw new Error(".env.local not found");
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

const STYLE =
  "Photorealistic luxury glamping, romantic atmosphere, Indiana woodland, " +
  "warm candlelight and firelight, string lights, cinematic composition, " +
  "National Geographic quality, 16:9, no people";

const JOBS = [
  {
    slug: "classic-romance",
    prompt: `Rose petal trail winding toward a private outdoor hot tub at twilight, floating candles casting warm amber reflections, aromatherapy crystals, string lights woven through Indiana forest trees overhead, intimate and deeply romantic mood. ${STYLE}`,
  },
  {
    slug: "ultimate-romance",
    prompt: `Gourmet charcuterie board with artisan cheeses, fresh fruit, champagne flutes, and warm muffins arranged on a rustic wooden table beside a glowing luxury glamping tent, string lights reflecting off champagne, indulgent and romantic. ${STYLE}`,
  },
  {
    slug: "outdoor-movie",
    prompt: `Large 150-inch cinema projection screen glowing softly in a woodland clearing at night, two luxurious movie beds with flowing curtains and fairy lights facing the screen, popcorn and drinks on side tables, magical outdoor cinema atmosphere. ${STYLE}`,
  },
  {
    slug: "smores-skillet",
    prompt: `Cast iron skillet filled with gooey melting chocolate and golden toasted marshmallows over glowing campfire embers, Ghirardelli chocolate squares and graham crackers arranged beside it, warm amber firelight glow, glamping campsite at night. ${STYLE}`,
  },
  {
    slug: "picnic-and-ride",
    prompt: `Romantic picnic blanket spread under a canopy of trees with charcuterie board, cookies, and two drinks, electric bikes leaning against a tree on a scenic Indiana woodland trail in golden afternoon light, idyllic and adventurous. ${STYLE}`,
  },
];

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const mod = url.startsWith("https") ? https : http;
    mod.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve()));
    }).on("error", (e) => { fs.unlink(dest, () => {}); reject(e); });
  });
}

async function main() {
  loadEnvLocal();
  const apiKey = process.env.FAL_API_KEY;
  if (!apiKey) throw new Error("FAL_API_KEY not in .env.local");
  fal.config({ credentials: apiKey });

  const outDir = path.resolve(__dirname, "../public/images/addons");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("\nGenerating 5 addon images via fal.ai/flux/dev...\n");

  const failed: string[] = [];

  for (const job of JOBS) {
    const dest = path.join(outDir, `${job.slug}.webp`);
    try {
      console.log(`  → ${job.slug}...`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await fal.subscribe("fal-ai/flux/dev" as any, {
        input: {
          prompt: job.prompt,
          image_size: "landscape_16_9",
          num_inference_steps: 28,
          guidance_scale: 3.5,
          num_images: 1,
          output_format: "jpeg",
          enable_safety_checker: true,
        },
        logs: false,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = result.data as any;
      const imageUrl: string = data?.images?.[0]?.url;
      if (!imageUrl) throw new Error("No image URL in response: " + JSON.stringify(data));
      await downloadFile(imageUrl, dest);
      console.log(`  ✓ Saved: public/images/addons/${job.slug}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${job.slug} — ${(err as Error).message}`);
      failed.push(job.slug);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
