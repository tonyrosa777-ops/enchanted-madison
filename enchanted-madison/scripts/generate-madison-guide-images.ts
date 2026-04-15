/**
 * generate-madison-guide-images.ts
 * Generates hero images for the 5 Madison Guide attraction cards.
 * Run: npx tsx scripts/generate-madison-guide-images.ts
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
  "Photorealistic, cinematic composition, golden hour light, " +
  "natural color palette, National Geographic quality, 16:9, no people";

const JOBS = [
  {
    slug: "clifty-falls",
    prompt: `Clifty Falls State Park, southern Indiana — a 70-foot waterfall tumbling down moss-covered sandstone cliffs into a deep wooded canyon, autumn foliage in gold and amber, mist rising from the pool below, lush ferns at the water's edge. ${STYLE}`,
  },
  {
    slug: "lanier-mansion",
    prompt: `Lanier Mansion, Madison Indiana — grand 1840s Greek Revival mansion with white Corinthian columns, manicured formal gardens with geometric hedges, Ohio River visible in background, soft late-afternoon sun, classic American historical architecture. ${STYLE}`,
  },
  {
    slug: "downtown-madison",
    prompt: `Downtown Madison Indiana — historic 19th-century Main Street streetscape with rows of restored brick Victorian storefronts, old-fashioned lampposts with hanging flower baskets, brick sidewalks, small shops and cafes, late afternoon golden light. ${STYLE}`,
  },
  {
    slug: "ohio-river-wineries",
    prompt: `Rolling Indiana vineyard hills above the Ohio River at sunset, rows of mature grapevines, a rustic winery tasting room made from a converted historic carriage house, warm string lights on the outdoor patio, river valley in the background. ${STYLE}`,
  },
  {
    slug: "hanover-college",
    prompt: `Hanover College campus overlook — a dramatic bluff 200 feet above the Ohio River, panoramic view of the river valley with Kentucky hills in the distance, historic stone campus buildings among mature trees, peak fall foliage in red and orange. ${STYLE}`,
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

  const outDir = path.resolve(__dirname, "../public/images/madison-guide");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("\nGenerating 5 Madison Guide images via fal.ai/flux/dev...\n");

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
      console.log(`  ✓ Saved: public/images/madison-guide/${job.slug}.webp`);
    } catch (err) {
      console.error(`  ✗ Failed: ${job.slug} — ${(err as Error).message}`);
      failed.push(job.slug);
    }
  }

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} generated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
