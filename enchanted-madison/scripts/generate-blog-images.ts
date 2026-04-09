/**
 * generate-blog-images.ts
 * Generates the 5 missing blog featured images.
 * Run: npx tsx scripts/generate-blog-images.ts
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

const JOBS = [
  {
    filename: "clifty-falls-hiking-guide",
    prompt:
      "Dramatic waterfall cascading over layered limestone cliffs into a rocky canyon, " +
      "lush green ferns and moss covering the rock walls, dappled sunlight filtering " +
      "through a dense hardwood canopy overhead, mist rising from the pool at the base, " +
      "early morning golden hour light, Indiana state park wilderness, " +
      "landscape photography, National Geographic quality, 16:9, no people",
  },
  {
    filename: "glamping-packing-list",
    prompt:
      "Flat lay overhead shot of a curated travel packing arrangement on a weathered " +
      "wooden surface: an open leather-bound journal with handwritten notes and a brass pen, " +
      "a rolled wool blanket, a vintage compass, a small stack of trail maps, " +
      "a linen drawstring bag, a pair of sturdy hiking boots, a tin candle, " +
      "and dried wildflowers scattered between items. Warm natural window light, " +
      "editorial still life, kinfolk magazine aesthetic, muted earth tones, 16:9, no people",
  },
  {
    filename: "ohio-river-wine-country-madison",
    prompt:
      "Elegant wine tasting scene on a rustic vineyard terrace overlooking rolling green " +
      "hills and a wide river valley: two glasses of deep red wine, an uncorked bottle " +
      "with a handwritten label, a small wooden cheese board with aged cheddar and grapes, " +
      "golden late afternoon sunlight casting long warm shadows, grapevines in the " +
      "background with autumn-tinged leaves, Midwest river country landscape, " +
      "food and travel photography, editorial quality, 16:9, no people",
  },
  {
    filename: "private-hot-tub-experience-guide",
    prompt:
      "Close-up of steaming water surface in a cedar hot tub at twilight, " +
      "wisps of steam curling upward catching soft amber light from string lights " +
      "strung overhead, reflection of tiny fairy lights dancing on the water surface, " +
      "dark woodland silhouettes in the background, a folded plush white towel and " +
      "a glass of champagne on the wooden tub edge, intimate and atmospheric, " +
      "shallow depth of field, luxury wellness photography, 16:9, no people",
  },
  {
    filename: "southern-indiana-travel-guide",
    prompt:
      "Scenic overlook of the Ohio River winding through southern Indiana hill country " +
      "at golden hour, layers of forested ridgelines receding into hazy blue distance, " +
      "a weathered wooden fence and wildflowers in the foreground, warm amber sunlight " +
      "illuminating the river surface, cumulus clouds with golden edges, " +
      "Midwestern Appalachian foothills landscape, wide vista, " +
      "travel magazine cover photography, 16:9, no people",
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

  const outDir = path.resolve(__dirname, "../public/images/blog");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("\nGenerating 5 blog images via fal.ai/flux/dev...\n");

  const failed: string[] = [];

  for (const job of JOBS) {
    const dest = path.join(outDir, `${job.filename}.webp`);
    try {
      console.log(`  → ${job.filename}...`);
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
      console.log(`  ✓ Saved: public/images/blog/${job.filename}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${job.filename} — ${(err as Error).message}`);
      failed.push(job.filename);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
