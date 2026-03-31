/**
 * generate-date-night-images.ts
 * Generates images for the /date-night page cards (How It Works + Package tiers).
 * Run: npx tsx scripts/generate-date-night-images.ts
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
  "warm candlelight and firelight, cinematic composition, National Geographic quality, " +
  "16:9 aspect ratio, no people, no text";

const JOBS = [
  {
    slug: "hot-tub-soak",
    prompt: `Close-up of a private outdoor hot tub at night filled with steaming warm water, surrounded by flickering candles, rose petals floating on the surface, gas fire table glowing nearby, fairy lights strung through dark trees overhead, intimate and serene atmosphere. ${STYLE}`,
  },
  {
    slug: "fireside-lounge",
    prompt: `Luxurious indoor glamping lounge with plush tufted leather seating, glowing electric fireplace casting warm amber light, elegant coffee and spa water bar in background, soft pendant lighting, massage chair, warm and indulgent interior atmosphere. ${STYLE}`,
  },
  {
    slug: "pkg-tranquility",
    prompt: `Peaceful private hot tub at dusk, still steaming water reflecting candlelight, minimalist setup with fluffy white spa towels and robes folded on a wooden bench, soft string lights, calming and intimate woodland setting. ${STYLE}`,
  },
  {
    slug: "pkg-luxury",
    prompt: `Premium outdoor hot tub date night setup — champagne bottle chilling in a bucket beside the tub, two champagne flutes catching the glow of candles and fairy lights, plush loungers visible in background, fireside lounge glowing through a window, sophisticated and romantic. ${STYLE}`,
  },
  {
    slug: "pkg-ultimate",
    prompt: `Ultimate luxury outdoor glamping experience — steaming private hot tub with floating candles, artisan charcuterie board and chocolates on a side table, large outdoor movie screen glowing softly in the background through trees, premium romantic atmosphere, cinematic and lavish. ${STYLE}`,
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

  const outDir = path.resolve(__dirname, "../public/images/date-night");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("\nGenerating 5 date-night images via fal.ai/flux/dev...\n");

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
      console.log(`  ✓ Saved: public/images/date-night/${job.slug}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${job.slug} — ${(err as Error).message}`);
      failed.push(job.slug);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
