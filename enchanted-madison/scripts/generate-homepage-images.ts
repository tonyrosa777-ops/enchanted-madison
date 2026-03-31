/**
 * generate-homepage-images.ts
 * Generates images for the homepage Experiences and Why sections.
 * Run: npx tsx scripts/generate-homepage-images.ts
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
  "National Geographic quality, no people, no text";

const JOBS = [
  {
    slug: "date-night-card",
    dir: "experiences",
    prompt: `Intimate private outdoor hot tub at twilight glowing with warm amber light, floating rose petals on the water, candles flickering around the edge, fairy lights strung through dark Indiana forest trees, cozy lounge chairs and plush towels, romantic and serene. ${STYLE}`,
  },
  {
    slug: "proposals-card",
    dir: "experiences",
    prompt: `Romantic outdoor proposal setup in a woodland clearing at golden hour — arch draped with white flowers and fairy lights, champagne flutes on ice beside a blanket of rose petals, lanterns lining a path leading to the setup, warm soft light filtering through trees, luxurious and magical. ${STYLE}`,
  },
  {
    slug: "why-enchanted",
    dir: "experiences",
    prompt: `Wide establishing shot of a luxury glamping property at dusk in a lush Indiana forest — glowing tent with warm interior light visible, private hot tub steaming under twilight sky, string lights threading through trees, fire table glowing in foreground, atmospheric and cinematic. ${STYLE}`,
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

  console.log("\nGenerating 3 homepage images via fal.ai/flux/dev...\n");

  const failed: string[] = [];

  for (const job of JOBS) {
    const outDir = path.resolve(__dirname, `../public/images/${job.dir}`);
    fs.mkdirSync(outDir, { recursive: true });
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
      console.log(`  ✓ Saved: public/images/${job.dir}/${job.slug}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${job.slug} — ${(err as Error).message}`);
      failed.push(job.slug);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
