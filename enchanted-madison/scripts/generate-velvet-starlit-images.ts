/**
 * generate-velvet-starlit-images.ts
 * Generates the hero + 5-photo gallery for both The Velvet Buck and The
 * Starlit Buck via fal.ai flux/dev.
 *
 * Velvet Buck = warm woodland glamping mood (twilight, fairy lights, hot tub)
 * Starlit Buck = night sky glamping mood (deep blue, stars, lanterns)
 *
 * Both properties had been using "Glamping ___" source photos that Angela
 * wanted reassigned to Bell Tent / Campsite. Velvet Buck + Starlit Buck
 * need their own distinct identity photos.
 *
 * Run: npx tsx scripts/generate-velvet-starlit-images.ts
 * No interactive prompt — runs straight through.
 */

import { fal } from "@fal-ai/client";
import * as fs from "node:fs";
import * as path from "node:path";
import * as https from "node:https";
import * as http from "node:http";

// ── env load ─────────────────────────────────────────────────────────────
function loadEnvLocal(): void {
  const envPath = path.resolve(__dirname, "../.env.local");
  if (!fs.existsSync(envPath)) throw new Error(".env.local not found");
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

// ── shared style ─────────────────────────────────────────────────────────
const STYLE = "Photorealistic luxury glamping, romantic atmosphere, Indiana woodland, cinematic composition, National Geographic quality, 16:9";

// ── jobs ─────────────────────────────────────────────────────────────────
interface Job {
  outputPath: string; // relative to /public
  prompt: string;
}

const JOBS: Job[] = [
  // The Velvet Buck — warm twilight forest glamping
  {
    outputPath: "images/accommodations/velvet-buck.webp",
    prompt: `${STYLE}, luxury bell-style glamping tent with rich velvet-toned interior visible through open canvas door, secluded woodland clearing at golden twilight, warm amber lantern light, deep green forest backdrop, intimate and inviting, lush bedding, no people`,
  },
  {
    outputPath: "images/accommodations/velvet-buck/hot-tub.webp",
    prompt: `${STYLE}, private cedar hot tub steaming under string lights beside a luxury glamping tent, twilight forest, glowing amber tones, no people`,
  },
  {
    outputPath: "images/accommodations/velvet-buck/bedroom.webp",
    prompt: `${STYLE}, interior of a luxury glamping tent at evening, king bed with deep velvet jewel-tone bedding, lantern on bedside table, soft warm light through canvas, no people`,
  },
  {
    outputPath: "images/accommodations/velvet-buck/lounge.webp",
    prompt: `${STYLE}, private outdoor lounge area beside a glamping tent, plush armchairs on a small wooden deck, fire pit glowing, string lights, fall evening, no people`,
  },
  {
    outputPath: "images/accommodations/velvet-buck/firepit.webp",
    prompt: `${STYLE}, evening fire pit beside a glamping tent in a forest clearing, Adirondack chairs draped with throw blankets, sparks rising into a star-flecked sky, no people`,
  },
  {
    outputPath: "images/accommodations/velvet-buck/exterior.webp",
    prompt: `${STYLE}, exterior view of a luxury glamping tent at dusk, warm canvas glowing from within, string lights overhead, woodland clearing, mist rising, no people`,
  },

  // The Starlit Buck — deep night sky glamping
  {
    outputPath: "images/accommodations/starlit-buck.webp",
    prompt: `${STYLE}, luxury glamping tent under a sky full of stars and the Milky Way, deep indigo night, warm lantern light glowing from inside, woodland clearing, hot tub steaming, fairy lights, magical atmosphere, no people`,
  },
  {
    outputPath: "images/accommodations/starlit-buck/exterior.webp",
    prompt: `${STYLE}, glamping tent silhouetted against a vivid star-filled sky, deep navy night, warm canvas glow, surrounding pine trees, long exposure feel, no people`,
  },
  {
    outputPath: "images/accommodations/starlit-buck/bedroom.webp",
    prompt: `${STYLE}, interior of a glamping tent at night, king bed with crisp white and midnight-blue bedding, antique lantern, stars faintly visible through an open canvas flap, intimate, no people`,
  },
  {
    outputPath: "images/accommodations/starlit-buck/hot-tub.webp",
    prompt: `${STYLE}, private hot tub steaming under an open sky filled with stars, glamping tent in soft background glow, lanterns lining a pebble path, no people`,
  },
  {
    outputPath: "images/accommodations/starlit-buck/firepit.webp",
    prompt: `${STYLE}, fire pit under a star-filled night sky outside a luxury glamping tent, Adirondack chairs, blankets, glowing embers, Milky Way faintly visible, no people`,
  },
  {
    outputPath: "images/accommodations/starlit-buck/path.webp",
    prompt: `${STYLE}, lantern-lit gravel path leading toward a luxury glamping tent at night, deep blue twilight sky, warm amber lanterns, magical entrance, no people`,
  },
];

// ── download ─────────────────────────────────────────────────────────────
function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    client
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          download(res.headers.location!, dest).then(resolve).catch(reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", (err) => {
        try { fs.unlinkSync(dest); } catch {}
        reject(err);
      });
  });
}

// ── main ─────────────────────────────────────────────────────────────────
async function main() {
  loadEnvLocal();
  const apiKey = process.env.FAL_API_KEY;
  if (!apiKey) throw new Error("FAL_API_KEY missing in .env.local");
  fal.config({ credentials: apiKey });

  const publicDir = path.resolve(__dirname, "../public");
  console.log(`\nGenerating ${JOBS.length} images via fal-ai/flux/dev`);
  console.log(`Est. cost: ~$${(JOBS.length * 0.025).toFixed(3)}\n`);

  const failed: string[] = [];
  for (const job of JOBS) {
    const outputPath = path.join(publicDir, job.outputPath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    console.log(`  → ${job.outputPath}`);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await fal.subscribe("fal-ai/flux/dev" as any, {
        input: {
          prompt: job.prompt,
          image_size: "landscape_16_9",
          num_inference_steps: 28,
          guidance_scale: 3.5,
          num_images: 1,
          enable_safety_checker: true,
          output_format: "jpeg",
        },
        logs: false,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = result.data as any;
      const url = data?.images?.[0]?.url;
      if (!url) throw new Error("no image URL in response");
      await download(url, outputPath);
      console.log(`    ✓ saved`);
    } catch (err) {
      console.error(`    ✗ failed: ${(err as Error).message}`);
      failed.push(job.outputPath);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((err) => {
  console.error("\nFatal:", err.message);
  process.exit(1);
});
