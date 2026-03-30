# Enchanted Madison Phase 1 Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the coded design system, content structure, and route skeleton for the Enchanted Madison rebuild so all future page work is consistent with the market report, audit, and design contract.

**Architecture:** Build the project as a Next.js App Router application with a central content layer, contract-backed Tailwind tokens, and reusable primitives for layout, typography, conversion modules, and booking entry points. Keep the first implementation slice focused on the app shell, theme, and information architecture before shipping page-specific marketing content.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, ESLint, Vercel-ready deployment

---

### Task 1: Lock Project Foundation

**Files:**
- Modify: `progress.md`
- Create: `enchanted-madison/tailwind.config.ts`
- Create: `enchanted-madison/src/app/globals.css`
- Create: `enchanted-madison/src/lib/design-tokens.ts`

- [ ] **Step 1: Verify the app scaffold exists and install the selected fonts**

Run: `npm install @fontsource/cormorant-garamond @fontsource/source-sans-3 @fontsource/allura`
Expected: packages install cleanly with no peer dependency conflicts

- [ ] **Step 2: Encode the contract-backed tokens in `tailwind.config.ts`**

Add colors, container sizes, and font family tokens from `design-contract.md`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2C3E2D",
        rose: "#C4917B",
        gold: "#B8965A",
        cream: "#F5F0EB",
        charcoal: "#2D2926",
        stone: "#8B8178",
        ivory: "#FEFCFA",
        night: "#1A2A1E",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      maxWidth: {
        "content-sm": "40rem",
        "content-md": "56rem",
        "content-lg": "72rem",
        "content-xl": "80rem",
      },
      boxShadow: {
        warm: "0 18px 45px rgba(45, 41, 38, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 3: Set global CSS variables and base typography in `src/app/globals.css`**

Add the theme foundation:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f5f0eb;
  --foreground: #2d2926;
}

html {
  background: var(--background);
  color: var(--foreground);
}

body {
  min-width: 390px;
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body), sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-heading), serif;
  letter-spacing: -0.02em;
}
```

- [ ] **Step 4: Add a typed token export in `src/lib/design-tokens.ts`**

```ts
export const designTokens = {
  colors: {
    forest: "#2C3E2D",
    rose: "#C4917B",
    gold: "#B8965A",
    cream: "#F5F0EB",
    charcoal: "#2D2926",
    stone: "#8B8178",
    ivory: "#FEFCFA",
    night: "#1A2A1E",
  },
  layout: {
    contentSm: "40rem",
    contentMd: "56rem",
    contentLg: "72rem",
    contentXl: "80rem",
  },
} as const;
```

- [ ] **Step 5: Update `progress.md`**

Record that contract-backed design tokens are in code.

- [ ] **Step 6: Commit**

```bash
git add progress.md enchanted-madison/tailwind.config.ts enchanted-madison/src/app/globals.css enchanted-madison/src/lib/design-tokens.ts
git commit -m "feat(design-system): encode contract-backed tokens"
```

### Task 2: Build the Content Layer

**Files:**
- Create: `enchanted-madison/src/content/site.ts`
- Create: `enchanted-madison/src/content/navigation.ts`
- Create: `enchanted-madison/src/content/stays.ts`
- Create: `enchanted-madison/src/content/experiences.ts`
- Create: `enchanted-madison/src/content/seo.ts`

- [ ] **Step 1: Create `src/content/site.ts` with business constants**

```ts
export const siteContent = {
  name: "The Enchanted Collective",
  launchTarget: "June 2026",
  location: "Madison, Indiana",
  phone: "812-329-2477",
  email: "enchantedcollective47250@gmail.com",
  vipOffer: "$25 off your first stay + free Madison Weekend Guide",
} as const;
```

- [ ] **Step 2: Create `src/content/navigation.ts`**

```ts
export const primaryNavigation = [
  { label: "Stays", href: "/stays" },
  { label: "Proposals", href: "/proposals" },
  { label: "Date Night", href: "/date-night" },
  { label: "Packages", href: "/packages" },
  { label: "Madison Guide", href: "/madison-guide" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
```

- [ ] **Step 3: Create `src/content/stays.ts` from scraped source data**

Include the cottage, Velvet Buck, bell tent site, and bring-your-own site with transparent starting-price placeholders where the report supports transparency.

- [ ] **Step 4: Create `src/content/experiences.ts` from report package guidance**

Model proposal, date-night, girls-night, and hot-tub packages using the recommended ranges from the market report.

- [ ] **Step 5: Create `src/content/seo.ts`**

Define shared metadata defaults and target content pillars:

```ts
export const seoDefaults = {
  titleTemplate: "%s | The Enchanted Collective",
  defaultTitle: "Luxury Glamping and Romantic Escapes in Madison, Indiana",
  defaultDescription:
    "Luxury glamping, private hot tubs, proposal packages, and romantic escapes near Clifty Falls and historic downtown Madison, Indiana.",
};
```

- [ ] **Step 6: Commit**

```bash
git add enchanted-madison/src/content/site.ts enchanted-madison/src/content/navigation.ts enchanted-madison/src/content/stays.ts enchanted-madison/src/content/experiences.ts enchanted-madison/src/content/seo.ts
git commit -m "feat(content): add structured site and offer content"
```

### Task 3: Create the App Shell

**Files:**
- Modify: `enchanted-madison/src/app/layout.tsx`
- Create: `enchanted-madison/src/components/layout/SiteHeader.tsx`
- Create: `enchanted-madison/src/components/layout/SiteFooter.tsx`
- Create: `enchanted-madison/src/components/layout/PageShell.tsx`

- [ ] **Step 1: Configure fonts and metadata in `src/app/layout.tsx`**

Use Next font loading or local font integration to bind `heading`, `body`, and `accent`.

- [ ] **Step 2: Build `SiteHeader.tsx`**

Include mobile-first nav, VIP CTA, and a primary booking action that keeps users on-domain.

- [ ] **Step 3: Build `SiteFooter.tsx`**

Include NAP details, core links, and SEO-supporting internal links.

- [ ] **Step 4: Build `PageShell.tsx`**

Wrap pages with consistent section spacing, max widths, and dark/light section support.

- [ ] **Step 5: Commit**

```bash
git add enchanted-madison/src/app/layout.tsx enchanted-madison/src/components/layout/SiteHeader.tsx enchanted-madison/src/components/layout/SiteFooter.tsx enchanted-madison/src/components/layout/PageShell.tsx
git commit -m "feat(shell): add branded app shell"
```

### Task 4: Build Reusable Marketing Primitives

**Files:**
- Create: `enchanted-madison/src/components/ui/Button.tsx`
- Create: `enchanted-madison/src/components/ui/SectionHeading.tsx`
- Create: `enchanted-madison/src/components/ui/PropertyCard.tsx`
- Create: `enchanted-madison/src/components/ui/TrustBar.tsx`
- Create: `enchanted-madison/src/components/ui/BookingEntry.tsx`

- [ ] **Step 1: Implement the button variants from the contract**
- [ ] **Step 2: Implement a reusable section-heading primitive with optional accent script**
- [ ] **Step 3: Build property cards with visible pricing and benefit bullets**
- [ ] **Step 4: Build a trust bar for VIP, location, and review proof**
- [ ] **Step 5: Build an on-domain booking entry component inspired by the AutoCamp conversational pattern**
- [ ] **Step 6: Commit**

```bash
git add enchanted-madison/src/components/ui/Button.tsx enchanted-madison/src/components/ui/SectionHeading.tsx enchanted-madison/src/components/ui/PropertyCard.tsx enchanted-madison/src/components/ui/TrustBar.tsx enchanted-madison/src/components/ui/BookingEntry.tsx
git commit -m "feat(ui): add core marketing primitives"
```

### Task 5: Establish Route Skeletons

**Files:**
- Modify: `enchanted-madison/src/app/page.tsx`
- Create: `enchanted-madison/src/app/stays/page.tsx`
- Create: `enchanted-madison/src/app/proposals/page.tsx`
- Create: `enchanted-madison/src/app/date-night/page.tsx`
- Create: `enchanted-madison/src/app/packages/page.tsx`
- Create: `enchanted-madison/src/app/madison-guide/page.tsx`
- Create: `enchanted-madison/src/app/reviews/page.tsx`
- Create: `enchanted-madison/src/app/faq/page.tsx`
- Create: `enchanted-madison/src/app/contact/page.tsx`

- [ ] **Step 1: Replace the starter homepage with a research-backed shell**
- [ ] **Step 2: Add placeholder but structured route shells for the seven core supporting pages**
- [ ] **Step 3: Ensure each page exports metadata and one H1**
- [ ] **Step 4: Run lint and build**

Run: `npm run lint`
Expected: no lint errors

Run: `npm run build`
Expected: production build succeeds

- [ ] **Step 5: Commit**

```bash
git add enchanted-madison/src/app/page.tsx enchanted-madison/src/app/stays/page.tsx enchanted-madison/src/app/proposals/page.tsx enchanted-madison/src/app/date-night/page.tsx enchanted-madison/src/app/packages/page.tsx enchanted-madison/src/app/madison-guide/page.tsx enchanted-madison/src/app/reviews/page.tsx enchanted-madison/src/app/faq/page.tsx enchanted-madison/src/app/contact/page.tsx
git commit -m "feat(routes): add core site route skeletons"
```

## Self-Review

- Spec coverage: This plan covers the design-system implementation requested as the next phase after Phase 0 setup. It converts the contract into code, creates the content layer required by project rules, and establishes the route architecture for the pages named in the audit and market report.
- Placeholder scan: The plan avoids vague "TBD" placeholders for the Phase 1 foundations, but page-specific final copy and image assets remain intentionally deferred to later execution tasks.
- Type consistency: The proposed file paths and token names match the design contract and Phase 0 decisions in this session.

Plan complete and saved to `docs/superpowers/plans/2026-03-30-phase-1-design-system.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
