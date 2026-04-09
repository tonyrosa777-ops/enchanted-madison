/**
 * regenerate-blog-images.ts
 * Replaces 4 blog images that all looked like "tent + string lights + fire."
 * Run: npx tsx scripts/regenerate-blog-images.ts
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
    // "Glamping vs. Hotels: Why Couples Are Choosing Canvas Over Concrete"
    // Concept: luxurious tent INTERIOR — the hotel-quality bed inside canvas walls
    filename: "glamping-vs-camping",
    prompt:
      "Interior of a luxury glamping tent seen from inside looking out through " +
      "the open canvas flap, king-size bed with crisp white linen and knit throw " +
      "pillows in the foreground, Persian rug on a wooden platform floor, a brass " +
      "lantern glowing on a nightstand, through the open flap: bright morning " +
      "sunlight streaming in from a misty green forest, the contrast between " +
      "hotel-level comfort and wild nature. Daytime, warm morning light, " +
      "interior design photography, Architectural Digest quality, 16:9, no people",
  },
  {
    // "How to Plan the Perfect Proposal in Indiana (Without the Stress)"
    // Concept: ring box on moss — intimate, focused, NOT a tent or campfire
    filename: "how-to-plan-the-perfect-proposal",
    prompt:
      "Close-up of an open black velvet ring box with a single diamond engagement " +
      "ring sitting on a bed of soft green moss on a fallen tree trunk in a forest, " +
      "scattered white wildflower petals around it, soft diffused golden hour " +
      "backlight filtering through trees creating a dreamy bokeh background, " +
      "shallow depth of field, intimate and romantic, jewelry product photography " +
      "meets nature editorial, warm tones, 16:9, no people no hands",
  },
  {
    // "10 Things to Do in Madison, Indiana (For a Real Weekend, Not a List)"
    // Concept: the actual TOWN — historic Main Street, not glamping
    filename: "things-to-do-madison-indiana",
    prompt:
      "Charming historic small-town Main Street in the American Midwest at golden " +
      "hour, 19th-century brick storefronts with colorful awnings and flower boxes, " +
      "a wide tree-lined sidewalk with wrought-iron benches and vintage streetlamps, " +
      "American flags hanging from buildings, warm afternoon sunlight casting long " +
      "shadows, a church steeple visible in the distance, inviting and walkable, " +
      "small-town America travel photography, Conde Nast Traveler quality, 16:9, " +
      "no people no cars",
  },
  {
    // "Anniversary Getaway Ideas Within 90 Minutes of Indianapolis"
    // Concept: romantic scenic drive / road trip — NOT a tent dinner
    filename: "date-night-ideas-near-louisville",
    prompt:
      "A winding two-lane country road cutting through rolling green hills and " +
      "wildflower meadows in the rural Midwest, a classic red covered bridge " +
      "ahead spanning a gentle creek, dappled sunlight through overhanging " +
      "sycamore trees, split-rail wooden fence along the roadside, cumulus clouds " +
      "in a warm blue sky, the feeling of a perfect scenic drive to somewhere " +
      "special, travel adventure photography, warm afternoon light, 16:9, " +
      "no people no cars",
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

  console.log("\nRegenerating 4 blog images via fal.ai/flux/dev...\n");

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

  console.log(`\nDone. ${JOBS.length - failed.length}/${JOBS.length} regenerated.`);
  if (failed.length) console.log(`Failed: ${failed.join(", ")}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
