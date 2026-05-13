# Angela's Photo Inventory — The Enchanted Collective

Tracking ledger for every real photo Angela has emailed for the site, where it landed in `public/images/`, and any open items.

**Workflow** (also documented in `CLAUDE.md`):
1. New email from Angela → drop into `source-photos/<category>/` (subfolder per category — `madison-guide/` is the precedent).
2. Add a row to this file immediately.
3. Add a mapping to `enchanted-madison/scripts/integrate-angela-photos.mjs`, then run `node scripts/integrate-angela-photos.mjs` from `enchanted-madison/`.

**Suggested subfolders** (migrate flat-root files into these as photos arrive):
`cottage/`, `glamping/`, `hot-tub/`, `tent-sites/`, `addons/`, `proposals/`, `madison-guide/`, `logo/`.

---

## Integrated Photos

| Source file | Category | Destination(s) | Page(s) | Credit | Integrated |
|---|---|---|---|---|---|
| `Logo-Final.png` | Logo | `/images/logo-final.png` + favicon/apple-icon | All pages | — | Session 12 |
| `Given-Logo.png` | Logo | Reference only | — | — | Session 12 |
| `EC Hot Tub.jpg` | Cottage | `/images/accommodations/enchanted-cottage.webp` + `/images/accommodations/cottage/hot-tub.webp` | Homepage, /stays, /stays/enchanted-cottage | — | Session 13 |
| `EC Kitchen.jpg` | Cottage | `/images/accommodations/cottage/kitchen.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Front Deck.jpg` | Cottage | `/images/accommodations/cottage/front-deck.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Bedroom Summer.jpg` | Cottage | `/images/accommodations/cottage/bedroom.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Family Room Aerial.jpg` | Cottage | `/images/accommodations/cottage/family-room.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Cocktail Bar.jpg` | Cottage | `/images/addons/ultimate-romance.webp` + `/images/accommodations/cottage/cocktail-bar.webp` | /packages, /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Romance Package.jpg` | Cottage / Addons | `/images/addons/classic-romance.webp` + `/images/accommodations/cottage/romance-package.webp` | /packages, /stays/enchanted-cottage gallery | — | Session 13 |
| `EC Bathroom.jpg` | Cottage | `/images/accommodations/cottage/bathroom.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `Entrance.jpg` | Cottage | `/images/accommodations/cottage/entrance.webp` | /stays/enchanted-cottage gallery | — | Session 13 |
| `Entrance.png` | Cottage | (duplicate of `Entrance.jpg`) | — | — | Reference only |
| `Swing  at EC.png` | Cottage | `/images/experiences/why-enchanted.webp` | Homepage why-us | — | Session 13 |
| `Brighter Hot Tub Pic.png` | Hot Tub | `/images/experiences/date-night.webp` + `/images/experiences/date-night-card.webp` | /date-night hero, homepage experiences card | — | Session 13 |
| `Sunrise Hot Tub Escape.png` | Hot Tub | `/images/experiences/hot-tub-escape.webp` + `/images/date-night/hot-tub-soak.webp` | /date-night experience flow | — | Session 13 + Session 15 (hot-tub-soak) |
| `Tent Site Roasting Marshmallows.png` | Tent Sites | `/images/accommodations/campsite.webp` | Homepage, /stays, /stays/campsite | — | Session 13 |
| `Tent Site with tent.png` | Tent Sites | `/images/accommodations/bell-tent.webp` | Homepage, /stays, /stays/bell-tent | — | Session 13 |
| `Glamping hot tub close up.png` | Glamping | `/images/accommodations/velvet-buck.webp` | Homepage, /stays, /stays/velvet-buck | — | Session 13 |
| `Outdoor Movie Bed with real bed.png` | Addons | `/images/addons/outdoor-movie.webp` | /packages | — | Session 13 |
| `Christmas Proposal .png` | Proposals | `/images/experiences/proposal.webp` + `/images/experiences/proposals-card.webp` | /proposals hero, homepage experiences card | — | Session 13 |
| `madison-guide/Lanier Mansion Jay Westendorf.jpg` | Madison Guide | `/images/madison-guide/lanier-mansion.webp` | /madison-guide | Jay Westendorf | Session 14 |
| `madison-guide/Downtown Madison Aerial Brent Spry.jpg` | Madison Guide | `/images/madison-guide/downtown-madison.webp` | /madison-guide | Brent Spry | Session 14 |
| `madison-guide/Broadway Fountain Grunt Pics.jpg` | Madison Guide | `/images/madison-guide/broadway-fountain.webp` | /madison-guide | Grunt Pics | Session 14 |

---

## Awaiting From Angela

| Need | Where it lands | Why blocking |
|---|---|---|
| Fireside lounge / couple-by-the-fire photo | `/images/date-night/fireside-lounge.webp` | Second flow card on /date-night is currently AI placeholder. Brand-aligned placeholder shipped (Session 15) — real photo replaces it. |
| Glamping bathroom / kitchen / bedroom additions | `/images/accommodations/velvet-buck/` gallery (Phase H8 carousel) | Carousel ships with existing 3–4 source files; more photos give Velvet Buck a richer gallery. |
| Bell Tent gallery photos (4 more) | `/images/accommodations/bell-tent/` gallery (Phase H8 carousel) | Currently only `Tent Site with tent.png`. Need ~4 more for the 5-photo carousel. fal.ai fills used in the meantime. |
| BYOT Campsite gallery photos (4 more) | `/images/accommodations/campsite/` gallery (Phase H8 carousel) | Same as Bell Tent — only 1 source photo. fal.ai fills used in the meantime. |
| The Starlit Buck hero + gallery (5 photos) | `/images/accommodations/starlit-buck.webp` + `/images/accommodations/starlit-buck/` | Phase H 5th property launches with fal.ai placeholders. Real photos swap in 1:1 once property is photographed. |
| Smores skillet real photo | `/images/addons/smores-skillet.webp` | Still AI-generated. Add-on shoot needed pre-launch. |
| Picnic and Ride real photo | `/images/addons/picnic-and-ride.webp` | Still AI-generated. Add-on shoot needed pre-launch. |
| Photo credit display preference | All Madison Guide cards | Photographers credited in source filenames (Jay Westendorf, Brent Spry, Grunt Pics) but not rendered on-page. Confirm whether Angela wants visible attribution before launch. |

---

## Notes

- Session 13 logs: original photo batch dropped at project root, integrated via `scripts/integrate-angela-photos.mjs` (sharp → webp, max 1600px, quality 80).
- Session 14: madison-guide photos delivered to project root with credited filenames, then moved into `source-photos/madison-guide/` for organization.
- Session 15 (Angela revisions pass): `hot-tub-soak.webp` slot added to the integration script using the existing `Sunrise Hot Tub Escape.png` source. Script refactored so `SOURCE_ROOT` reads from `source-photos/`, supporting both flat-root and subfolder mappings.
