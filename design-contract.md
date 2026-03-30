# design-contract.md — Enchanted Madison Brand Constitution

This contract translates the research direction in `Market-Intelligence-Report.md` section 8 and the failure points documented in `initial-audit/initial-audit.md` into enforceable implementation rules. If a design choice is not supported here or by the report, it is out of scope until approved.

## 1. Brand Identity Statement

Enchanted Madison is a romantic, intimate, nature-luxe retreat for couples and curated small-group escapes near Madison, Indiana. It is not a generic campground, not a family-first cabin directory, and not a corporate booking utility. Every touchpoint must feel private, cinematic, warm, and intentionally curated, correcting the current site's fragmented Canva-era experience and reinforcing the market position identified in the market report: the only luxury glamping and romance-forward property in the Madison-Clifty Falls corridor.

## 2. Color Palette

These colors come directly from `Market-Intelligence-Report.md` section 8. Token names are the required Tailwind keys.

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Primary | `forest` | `#2C3E2D` | Headlines, nav, footer, primary branding |
| Secondary | `rose` | `#C4917B` | CTA buttons, accents, hover states |
| Accent | `gold` | `#B8965A` | Icons, dividers, badges, premium highlights |
| Background | `cream` | `#F5F0EB` | Page backgrounds, card surfaces |
| Body text | `charcoal` | `#2D2926` | Paragraphs and long-form readable text |
| Secondary text | `stone` | `#8B8178` | Captions, metadata, helper text |
| Hero text | `ivory` | `#FEFCFA` | Text on dark image/video overlays |
| Dark sections | `night` | `#1A2A1E` | Footer, dark editorial sections, immersive romance blocks |

### Tailwind token map

```ts
colors: {
  forest: "#2C3E2D",
  rose: "#C4917B",
  gold: "#B8965A",
  cream: "#F5F0EB",
  charcoal: "#2D2926",
  stone: "#8B8178",
  ivory: "#FEFCFA",
  night: "#1A2A1E",
}
```

## 3. Typography System

The market report authorizes a refined serif headline face, a clean sans-serif for body copy, and a restrained script accent. This contract locks the specific implementation to keep the system consistent.

### Font families

- Heading font: `Cormorant Garamond`
- Body font: `Source Sans 3`
- Accent/script font: `Allura`

### Type scale

The report explicitly recommends 48-72px desktop headline sizing. Mobile values below are the implementation translation of that guidance for the required 390px-first workflow.

| Style | Mobile | Desktop | Weight | Line height | Use |
| --- | --- | --- | --- | --- | --- |
| H1 | `3rem` | `4.5rem` | `600` | `0.95` | Hero and page leads |
| H2 | `2.25rem` | `3.5rem` | `600` | `1.0` | Major section headings |
| H3 | `1.75rem` | `2.5rem` | `600` | `1.05` | Card titles and sub-sections |
| H4 | `1.25rem` | `1.75rem` | `600` | `1.15` | Eyebrows with substance, FAQs, small sections |
| Body large | `1.125rem` | `1.25rem` | `400` | `1.65` | Intro paragraphs and feature copy |
| Body | `1rem` | `1.0625rem` | `400` | `1.7` | Default paragraph copy |
| Caption | `0.875rem` | `0.875rem` | `500` | `1.4` | Metadata, labels, trust chips |
| Script accent | `1.25rem` | `1.75rem` | `400` | `1.1` | Sparing decorative use only |

### Typography rules

- Headlines use the serif font by default.
- Body copy, UI copy, and forms use the sans-serif font by default.
- Script is decorative only: section dividers, limited pull-quotes, or small accent lines. Never use script for navigation, buttons, pricing, or long paragraphs.
- Body text on light backgrounds must use `charcoal` or `forest`; body text on dark backgrounds must use `ivory`.

## 4. Spacing & Layout System

The site must feel editorial and premium, not cramped. This system exists to solve the audit's recurring density and hierarchy problems on packages, accommodations, and contact.

### Containers

| Token | Value | Usage |
| --- | --- | --- |
| `content-sm` | `40rem` | Long-form copy blocks, FAQ answers |
| `content-md` | `56rem` | Narrative sections, feature rows |
| `content-lg` | `72rem` | Standard page sections |
| `content-xl` | `80rem` | Hero, property grids, high-visual sections |

### Section rhythm

| Context | Mobile | Desktop |
| --- | --- | --- |
| Page gutter | `1.25rem` | `2rem` |
| Standard section padding | `4rem 0` | `6rem 0` |
| Hero vertical padding | `5rem 0 4rem` | `8rem 0 6rem` |
| Card padding | `1.25rem` | `1.75rem` |
| Stack gap tight | `0.75rem` | `1rem` |
| Stack gap base | `1.25rem` | `1.5rem` |
| Stack gap loose | `2rem` | `3rem` |

### Grid rules

- Mobile first at `390px`.
- Property and package cards: `1` column mobile, `2` columns tablet, `3` columns desktop.
- Comparison or proof bars: `1` column mobile, `2` columns tablet, `4` columns desktop.
- Forms: single column mobile, split fields only at tablet and above.

## 5. Component Style Rules

These rules turn the research direction into repeatable UI patterns and directly address the audit's weak CTAs, illegible pricing, and off-brand utility pages.

### Buttons

#### Primary button

- Background: `rose`
- Text: `ivory`
- Shape: pill with full radius
- Height: minimum `3.25rem`
- Padding: `0.875rem 1.5rem`
- Border: `1px solid transparent`
- Hover: darken to `forest`, keep `ivory` text
- Use for: booking, VIP capture, proposal planning, primary conversion actions

#### Secondary button

- Background: transparent
- Text: `forest` on light surfaces, `ivory` on dark surfaces
- Border: `1px solid gold`
- Shape: pill
- Hover: fill with `gold`, text flips to `night`
- Use for: exploration, gallery, content navigation

#### Ghost button

- Background: transparent
- Text: `stone` or `ivory`
- Border: none
- Underline or subtle bottom border on hover
- Use for low-emphasis supporting actions only

### Cards

- Background: `cream` on light sections or translucent `night` glass on dark sections
- Border radius: `1.5rem`
- Shadow: soft, low spread, warm shadow only
- Border: optional `1px solid` using `gold/20` or `forest/10`
- Pricing and primary benefit must appear in the top half of the card
- Never bury pricing in paragraph text

### Inputs

- Background: `ivory`
- Border: `1px solid stone`
- Text: `charcoal`
- Radius: `9999px` for short fields, `1rem` for textareas
- Focus state: `rose` ring plus `gold` border accent
- Minimum height: `3.25rem`

## 6. Photography & Media Direction

Rules sourced from the market report's photography direction and benchmark analysis.

### Required shot types

- Private hot tub under string lights at twilight
- Fire pit with blankets, drinks, and warmth cues
- Tent interior with morning light through canvas
- Empty spaces that let couples project themselves into the scene
- Clifty Falls and downtown Madison context
- Overhead or styled food moments like charcuterie or coffee
- Cinematic property footage for the hero loop

### Mood and treatment

- Golden hour or blue-hour warmth
- Moody, intimate, editorial color grading
- Natural texture over ultra-polished commercial brightness
- Framing that emphasizes privacy, enclosure, and romance

### Prohibited

- Obvious stock photography
- Family reunion or kid-centric imagery
- Harsh midday lighting
- Generic real-estate listing photography
- Overcrowded scenes that break the sense of private escape

## 7. Tone of Voice

The market report calls for warm, confident, inviting, slightly poetic language. The audit shows where the current site becomes either dry or visually decorative without useful hierarchy.

### Principle 1: Lead with sensory clarity

Before: "Private wooded glamping tents, cozy campsites, 2 hour hot tub escapes..."

After: "Luxury glamping, private hot tubs, and curated experiences in the woods of Madison, Indiana."

### Principle 2: Be romantic, not vague

Before: "Enhance your stay with curated package experiences"

After: "Add candlelight, champagne, or a private outdoor movie night to make the escape unmistakably yours."

### Principle 3: Confidence beats apology

Before: "Contact us for more info"

After: "Tell us what you're celebrating and we'll help shape the right stay, date night, or proposal setup."

### Principle 4: Answer practical questions without killing the mood

Before: dense policy/legal walls or hidden pricing

After: "From $195/night. Private hot tub included. Five minutes from Clifty Falls and historic downtown Madison."

### Principle 5: Never sound corporate

- Avoid: "availability system," "property features," "submit inquiry"
- Prefer: "check dates," "what's included," "plan your proposal," "book this escape"

## 8. Brand Personality Axes

These axes are derived from the brand personality statement in the market report and from the contrast with the current fragmented site.

| Axis | Position |
| --- | --- |
| Intimate `←●———→` Grand | Intimate-first |
| Curated `←—●——→` Rustic | Curated with natural texture |
| Mysterious `←—●——→` Literal | Slightly mysterious, never confusing |

## 9. Competitor Differentiation Statement

Enchanted Madison should not look like Dunlap Hollow's minimal hideaway, Serenity Springs' dated romance-cabin nostalgia, or Dugan Hollow's local retreat utility aesthetic. It should feel more editorial and more modern than Serenity Springs, more experience-led than Dunlap Hollow, and more premium and intentional online than Dugan Hollow. The visual system must communicate that this is not just lodging near Madison; it is the region's category-defining romantic outdoor retreat with bookable day-use and proposal experiences.

## 10. Design Anti-Patterns

- Stock photos or placeholder imagery that feels like a generic travel ad
- Generic sans-serif-only typography
- Hidden pricing or pricing trapped inside long paragraphs
- Any booking flow that leaves `enchantedmadison.com`
- Family-friendly mixed messaging that weakens the couples-first positioning
- Decorative text overlays that reduce readability
- Walls of unstructured legal or amenities text
- Canva-style image-locked content with no crawlable HTML text
- Understated CTAs that look decorative instead of actionable
- Empty pages with no trust builders, founder story, or conversion path
