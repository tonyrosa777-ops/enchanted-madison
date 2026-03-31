# design-system.md — The Enchanted Collective
# Brand Constitution — synthesized from market-intelligence.md + initial-business-data.md
# Last Updated: 2026-03-30

> **This document is law.** No color, font, spacing, or tone choice may deviate from
> what is defined here without explicit written approval and an update to this file.
> If a component requires a value not listed, flag it — do not improvise.

---

## 1. Brand Identity Statement

*Source: market-intelligence.md §2 (audience profile), §8 (branding direction), §4 (competitor differentiation)*

The Enchanted Collective is a nature-luxury destination for couples who want to feel something — not just go somewhere. It exists at the intersection of intimacy and wilderness: private hot tubs under woodland canopies, candlelit tent interiors, the sound of a fire while the stars pour out overhead. The brand is not a hotel, not a campground, not an Airbnb — it is a curated escape that whispers "we thought of everything so you don't have to." The experience is romantic without being saccharine, luxurious without being cold, and nature-immersive without being rustic. Visitors should feel, within 5 seconds of the homepage, that they have discovered something rare and beautiful that was made specifically for them.

---

## 2. Color Palette

*Source: market-intelligence.md §8 (recommended color palette)*

**Theme: Light (warm cream backgrounds, deep earthy type)**

This is a light-theme build. The template's dark-theme defaults are replaced entirely with the palette below. Dark sections (footer, feature callouts) use Deep Night as background.

```css
:root {
  /* Brand Colors */
  --primary: #2C3E2D;              /* Deep Forest Green — headlines, nav, footer, primary CTA */
  --primary-muted: rgba(44, 62, 45, 0.45);  /* Muted forest green — dividers, borders, hover states */
  --accent: #B8965A;               /* Muted Gold — icons, premium badges, dividers, highlights */
  --accent-rose: #C4917B;          /* Warm Dusty Rose — secondary CTA buttons, hover accents */

  /* Background Scale */
  --bg-base: #F5F0EB;              /* Warm Cream — primary page background */
  --bg-elevated: #EDE8E2;          /* Slightly deeper cream — alternating sections, subtle contrast */
  --bg-card: #FEFCFA;              /* Near-white warm — card surfaces, input backgrounds */
  --bg-dark: #1A2A1E;              /* Deep Night — footer, dark feature sections */

  /* Text Scale */
  --text-primary: #2D2926;         /* Deep Charcoal — all body copy, most headings */
  --text-secondary: #8B8178;       /* Warm Gray — captions, metadata, secondary labels */
  --text-muted: rgba(45, 41, 38, 0.45);  /* Muted charcoal — placeholder text, disabled states */
  --text-on-dark: #FEFCFA;         /* Warm White — text on dark sections and hero overlays */
}
```

### Usage Rules

| Token | Use | Never Use For |
|-------|-----|---------------|
| `--primary` | Nav, footer bg, H1/H2 on light bg, primary CTA | Body text (too heavy for long form) |
| `--accent` | Icons, dividers, "from $XX" price labels, premium badges, section dividers | Large background fills |
| `--accent-rose` | Secondary CTA buttons ("Check Availability"), hover states on CTAs | Primary brand representation |
| `--bg-base` | Page background, section fills | Cards (use --bg-card instead) |
| `--bg-dark` | Footer, full-width dark feature sections, hero overlay (50% opacity) | Most sections |
| `--text-on-dark` | All text on --bg-dark sections and hero overlays | Text on light backgrounds |

---

## 3. Typography System

*Source: market-intelligence.md §8 (typography pairing recommendation)*

### Font Roles

| Role | Font | Source | Use |
|------|------|--------|-----|
| `font-display` | Cormorant Garamond | Google Fonts | H1, H2, large hero pull quotes, section headlines |
| `font-body` | Lato | Google Fonts | All body copy, paragraphs, nav links, button labels |
| `font-mono` | Josefin Sans | Google Fonts | Eyebrow labels, badges, form labels, micro-copy, "from $XX" prices |

**Rationale:** Cormorant Garamond is one of the most elegant editorial serifs available — romantic, refined, and unmistakably premium. It differentiates directly from Dugan Hollow (no defined type system) and Dunlap Hollow (also serif but at lower quality). Lato provides warmth and readability at body sizes without the overused neutrality of Inter. Josefin Sans in uppercase with generous letter-spacing creates the label/eyebrow system that signals curation and intentionality.

### Google Fonts Import (add to layout.tsx)

```tsx
import { Cormorant_Garamond, Lato, Josefin_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});
```

Apply all three to `<html>`: `className={`${cormorant.variable} ${lato.variable} ${josefin.variable}`}`

### Type Scale

| Element | Font | Weight | Size (desktop) | Size (mobile) | Line Height |
|---------|------|--------|----------------|---------------|-------------|
| H1 (hero) | Cormorant Garamond | 600 | 72–88px | 44–52px | 1.1 |
| H1 (page) | Cormorant Garamond | 600 | 56–64px | 36–44px | 1.15 |
| H2 | Cormorant Garamond | 600 | 40–48px | 28–36px | 1.2 |
| H3 | Cormorant Garamond | 500 | 28–32px | 22–26px | 1.3 |
| H4 | Lato | 700 | 18–20px | 16–18px | 1.4 |
| Body (large) | Lato | 300 | 18px | 17px | 1.7 |
| Body (base) | Lato | 400 | 16px | 15px | 1.6 |
| Eyebrow label | Josefin Sans | 500 | 12–13px | 11–12px | — |
| Caption | Josefin Sans | 400 | 12px | 11px | 1.5 |
| Button | Lato | 700 | 14–15px | 14px | — |

**Eyebrow labels:** Always uppercase, letter-spacing 0.12em, `--accent` or `--text-secondary` color.

**CSS custom properties:**
```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Lato', -apple-system, sans-serif;
  --font-mono: 'Josefin Sans', 'DM Sans', sans-serif;
}
```

---

## 4. Spacing & Layout System

*Source: website-build-template.md (Design Tokens, Directory Structure); frontend-design.md (Spatial Composition)*

```css
/* All as Tailwind utility classes */

/* Containers */
--container-full: max-w-screen-2xl  /* Hero, full-bleed sections */
--container-content: max-w-6xl      /* Most page content (1152px) */
--container-narrow: max-w-3xl       /* Blog posts, centered copy blocks */

/* Section Vertical Padding */
Desktop: py-24 (96px) to py-32 (128px)
Mobile:  py-16 (64px) to py-20 (80px)

/* Card Padding */
Cards:   p-6 (24px) desktop, p-5 (20px) mobile
Featured card: p-8 (32px) desktop

/* Grid System */
Stays grid:      grid-cols-1 md:grid-cols-2 lg:grid-cols-3   (gap-6 / gap-8)
Experience grid: grid-cols-1 md:grid-cols-2                   (gap-6)
Reviews grid:    grid-cols-1 md:grid-cols-3                   (gap-6)
Two-column hero: grid-cols-1 lg:grid-cols-[55%_45%]

/* Gutters */
Section gap:       gap-8 (32px) to gap-12 (48px)
Component gap:     gap-4 (16px) to gap-6 (24px)
```

---

## 5. Component Style Rules

*Source: market-intelligence.md §7 (steal AutoCamp booking widget), §8 (component direction); website-build-template.md (CTA patterns)*

### Buttons

| Variant | Background | Text | Border | Hover | Shape |
|---------|-----------|------|--------|-------|-------|
| Primary | `--primary` (#2C3E2D) | `--text-on-dark` | None | bg lightens to #3a5240 | rounded-full, px-8 py-3.5 |
| Secondary / CTA | `--accent-rose` (#C4917B) | `--text-on-dark` | None | bg darkens to #b07d68 | rounded-full, px-8 py-3.5 |
| Ghost | Transparent | `--primary` | 1.5px `--primary` | bg `--primary`, text `--text-on-dark` | rounded-full, px-8 py-3.5 |
| Ghost Light | Transparent | `--text-on-dark` | 1.5px `--text-on-dark` | bg white/10 | rounded-full, px-8 py-3.5 (use on dark sections) |

**Button typography:** Lato 700, 14px, letter-spacing 0.03em. Never lowercase. No icon unless explicitly specified.

### Cards (Stay Cards)

```
Background:     --bg-card
Border:         none by default; 1px --primary-muted on hover
Border radius:  rounded-2xl (16px)
Shadow:         shadow-sm default; shadow-lg on hover
Image aspect:   16:10 (landscape), rounded-t-2xl
Padding:        p-6
Transition:     all 300ms ease
```

Property name: H3 (Cormorant Garamond 600)
Price label: Josefin Sans 500, --accent color, "from $XXX/night"
CTA: full-width primary button at card bottom

### Form Inputs

```
Background:     --bg-card
Border:         1px --primary-muted
Border radius:  rounded-xl (12px)
Focus:          border-color --primary, ring-2 ring-primary/20
Label:          Josefin Sans 500, uppercase, 12px, --text-secondary
Placeholder:    Lato 400, --text-muted
Padding:        px-4 py-3
```

### Navigation (SiteHeader)

```
Default state:    transparent bg, --text-on-dark text (for hero overlay)
Scrolled state:   bg-[--bg-card]/95 backdrop-blur-sm, --text-primary text
                  border-b border-[--primary-muted] shadow-sm
Transition:       all 400ms ease
Logo:             Cormorant Garamond 600, --primary or white depending on state
Nav links:        Josefin Sans 500, 13px, uppercase, letter-spacing 0.08em
Mobile menu:      full-screen overlay, bg-[--bg-base], slide from right
CTA button:       secondary button ("Check Availability"), shrinks slightly on mobile
```

---

## 6. Photography & Media Direction

*Source: market-intelligence.md §8 (photography direction + Dunlap Hollow approach)*

### Shot Priority List (for commission)

1. **Hot tub at twilight** — steam rising, string lights reflected in water, no people (viewers project themselves)
2. **Tent interior at dawn** — morning light through canvas, rumpled linen, coffee on a tray
3. **Fire pit with blankets and wine glasses** — bokeh background, warm tones
4. **Velvet Buck exterior — golden hour** — woodland setting, tent glowing from within
5. **Cottage deck with hot tub** — wide shot showing covered deck, wood, string lights
6. **Charcuterie board overhead** — styled with champagne, candles, the Enchanted Collective aesthetic
7. **Clifty Falls waterfall** — 10-minute context shot for the Madison Guide
8. **Downtown Madison storefront row** — Ohio River in background
9. **Couple silhouette at fire** — no faces needed, silhouette against flames
10. **Drone shot of wooded property** — establishes acreage, seclusion, proximity to trees

### Shot Processing Style

- **Warm, golden, moody.** No cold blues. No bright whites. No harsh midday sun.
- Golden hour or blue hour only for hero-quality exterior shots.
- Interior shots: candles + practical lighting, no additional artificial fill.
- Color grade: slight desaturation, lifted blacks, warm midtones, rich shadows.
- **Dunlap Hollow approach: no people in most shots.** Viewers project themselves in.
- No stock photography. No AI-generated images (current placeholders are temporary only).

### Aspect Ratios

| Use | Ratio | Notes |
|-----|-------|-------|
| Hero (video/image) | 16:9 (full screen) | Use Next.js Image with fill + object-cover |
| Stay card thumbnail | 16:10 | Landscape, optimized for card grid |
| Experience cards | 4:3 | Slightly more square, intimate feel |
| Gallery / detail | 3:2 or 1:1 | Mixed aspect ratio gallery grid |
| About / founder | 3:4 (portrait) | Crop allows personality at larger size |
| OG image | 1200x630 (1.91:1) | Every page needs one |

### Hero Video

- **Duration:** 10–20 second seamless loop
- **Autoplay:** yes, muted, loop
- **Fallback:** static hero image (same first frame) if video fails to load or if prefers-reduced-motion
- **Overlay:** 45–50% dark overlay using `bg-[--bg-dark]/50` for text legibility
- **Sequence (proposed):** sunset through trees → string lights turn on → steam rising from hot tub → fire pit sparks ascending → morning mist through canvas → hands clinking champagne glasses

---

## 7. Tone of Voice

*Source: market-intelligence.md §8 (tone: "warm, confident, inviting, slightly poetic")*

### Principle 1 — Speak to the Feeling, Not the Feature

**Rule:** Describe what the guest will experience emotionally, not what the property contains physically.

**BEFORE (wrong):** "Our hot tubs are cleaned and maintained regularly for your safety and comfort."

**AFTER (right):** "Slip into warm water under the open sky. The only thing between you and the stars is the steam."

---

### Principle 2 — You Discovered This, Not We Built This

**Rule:** Write in a way that makes the reader feel like they found a secret — not like a brand is marketing to them.

**BEFORE (wrong):** "Welcome to The Enchanted Collective. We offer romantic glamping experiences near Madison, Indiana."

**AFTER (right):** "Tucked into the woods five minutes from downtown Madison — and somehow a world away."

---

### Principle 3 — Intimate Plural (Never Corporate Singular)

**Rule:** Use "you and your person," "just the two of you," "your escape." Never "guests," "travelers," "customers."

**BEFORE (wrong):** "Guests can enjoy access to our private hot tubs and fire pits."

**AFTER (right):** "Your hot tub. Your fire. Your night under the stars — no reservations, no noise, no one else."

---

### Principle 4 — Confident, Not Superlative

**Rule:** Never use "best," "most romantic," "unmatched," or "one-of-a-kind" without concrete proof. Let specificity do the work.

**BEFORE (wrong):** "The most romantic glamping destination in Indiana!"

**AFTER (right):** "The only private hot tub glamping retreat in the Louisville-Cincinnati-Indianapolis triangle."

---

### Principle 5 — Precise Details Create Luxury

**Rule:** Specific, sensory details communicate premium quality better than adjectives. Name the blanket weight, the champagne temperature, the sound of the fire.

**BEFORE (wrong):** "Enjoy a luxurious experience with premium amenities."

**AFTER (right):** "A Sleep Number king wrapped in silky linens. A cocktail bar stocked before you arrive. The fire already lit."

---

## 8. Brand Personality Axes

*Source: market-intelligence.md §2 (audience psychographics), §8 (branding direction)*

```
Intimate      ◄━━━━━●━━━━━━━━━━━━━━━━► Grand
              (We lean intimate — couples, private, two-person scale)

Wild          ◄━━━━━━━━━━●━━━━━━━━━━► Refined
              (Nature-immersive but never rustic or rugged)

Mysterious    ◄━━━━━●━━━━━━━━━━━━━━━━► Transparent
              (A sense of discovery and the unexpected — but not withholding on pricing or policies)

Playful       ◄━━━━━━━━━━━━━━━━●━━━━► Serious
              (We're warm and inviting, not corporate — but we're not jokey)
```

---

## 9. Competitor Differentiation Statement

*Source: market-intelligence.md §4 (individual competitor deep-dives)*

### vs. Dunlap Hollow (visual branding gold standard)
Dunlap Hollow's photography is magazine-quality and their restraint is masterful — but they sell accommodations, not experiences. The Enchanted Collective matches their visual discipline while going far beyond their scope: we name the experience (proposals, date nights, hot tub escapes), we show the price, we have reviews on-site, and we publish destination content that positions us as the authority on the Madison area. Dunlap Hollow built demand through scarcity. We build it through story.

### vs. Serenity Springs (Indiana's romantic cabin incumbent)
Serenity Springs has 25 years of trust but is operating on a dated, cabin-only model with no glamping, no content marketing, and no curated experience packages. The Enchanted Collective targets the same romantic-couples audience with a more contemporary, Instagrammable experience — private outdoor hot tubs instead of indoor whirlpool tubs, glamping structures instead of traditional log cabins, and a proposal/date-night product category Serenity Springs has never attempted. We are what Serenity Springs would have built if they started today.

### vs. Dugan Hollow Retreats (closest local competitor)
Dugan Hollow has the land, the location, and the history. They do not have pricing transparency, on-site reviews, glamping structures, or experience packages. Their Wix website is a placeholder. The Enchanted Collective's digital presence will be categorically superior from day one. We do not need to be cheaper — we need to be more confident, more visual, and more specific about who we serve (couples) and what we deliver (a fully curated romantic escape).

---

## 10. Design Anti-Patterns (The Prohibited List)

*Source: market-intelligence.md §7 ("What to Avoid"); §4 (competitor weaknesses); frontend-design.md (NEVER use generic AI aesthetics)*

1. **Purple gradients on white backgrounds.** This is the signature of AI-generated generic design. Never.
2. **Inter, Roboto, Arial, or system fonts** for display type. These fonts communicate nothing about this brand.
3. **Space Grotesk** or any overused "modern" sans-serif as the primary typeface. (Per frontend-design.md.)
4. **Stock photography.** Any image that looks purchasable from Getty/Unsplash is prohibited.
5. **AI-generated imagery** beyond the current temporary placeholders. Replace immediately when real photos exist.
6. **Hiding all pricing.** Every property card shows "from $XXX/night." Every experience shows the starting price. No exceptions.
7. **Third-party redirect booking flows.** All booking embeds must be inline on-domain. No redirects to direct-book.com or external subdomains.
8. **Generic hero copy.** "Welcome to our website," "Your escape awaits," "Experience luxury" — all banned. Copy must be specific, sensory, and location-grounded.
9. **Family-friendly or mixed-audience positioning.** This is a couples brand. Copy, imagery, and UX must signal that unambiguously.
10. **Fake scarcity.** "Only 2 left!" when untrue destroys trust. Use real availability data only.
11. **Bright, clinical white backgrounds** (#FFFFFF as the primary page background). Use warm cream (#F5F0EB) instead.
12. **Blue as any accent color.** This palette is green, gold, and rose. No blue anywhere.
13. **Over-designed hero.** The hero is about the property, not the design. A cinematic photo/video with minimal text overlay is the right call. Do not add particle systems, orbs, or canvas animations to the hero — they would fight with the photography.

---

## 11. Sections to Include / Remove / Add

*Source: initial-business-data.md §2, §5, §9; market-intelligence.md §5, §7, §8; website-build-template.md (base sections)*

### Base Template Sections

| Section | Decision | Rationale |
|---------|----------|-----------|
| Shop (Stripe + Printful) | **REMOVE** | No physical products. Source: initial-business-data.md |
| Blog (Sanity CMS) | **DEFER — Phase 5+** | Madison Guide content built as static pages first; CMS added later if needed |
| Quiz / Lead capture | **REPURPOSE** | Repurpose quiz infrastructure for VIP email/SMS opt-in flow |
| Instagram feed | **REMOVE for launch** | Pre-launch; no active feed to display |
| ROI Calculator | **REMOVE** | Not applicable to hospitality/glamping |

### Custom Additions Required

| Feature | Source | Priority |
|---------|--------|----------|
| `/stays` overview page + individual stay pages (4 properties) | initial-business-data.md §4 | Phase 3 — MVP |
| `/date-night` experiences page with Acuity Scheduling embed | initial-business-data.md §5b, §9 | Phase 4 — Conversion |
| `/proposals` landing page with tiered packages, gallery, FAQ | initial-business-data.md §5a; market-intelligence.md §5 | Phase 4 — Conversion |
| `/packages` add-ons page (Romance, Movie Night, S'mores, Picnic) | initial-business-data.md §6 | Phase 5 — Secondary |
| `/madison-guide` local destination content hub | initial-business-data.md §10; market-intelligence.md §8 | Phase 5 — SEO |
| `/vip` early access sign-up with incentive offer | initial-business-data.md §11; market-intelligence.md §8 | Phase 3 — Lead Gen |
| `/faq` with first-timer glamping anxiety addressed | market-intelligence.md §7 (steal: Firelight Camps FAQ model) | Phase 5 — Secondary |
| Property availability/booking embed (Lodgify widget) | initial-business-data.md §9 | Phase 4 — Conversion |
| Experience booking embed (Acuity Scheduling) | initial-business-data.md §9 | Phase 4 — Conversion |
| Scarcity-driven VIP list counter | market-intelligence.md §7 (steal: Dunlap Hollow mailing list) | Phase 3 — Lead Gen |
