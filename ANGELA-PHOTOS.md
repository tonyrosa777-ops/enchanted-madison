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

| Source file | Category | Destina
 | Page(s) | Credit | Integrated |
|---|---|---|---|---|---|
| `Logo-Final.png` | Logo | `/imag
-final.png` + favicon/apple-icon | All pages | —
ion 12 |
| `Given-Logo.png` | Logo | Refere
y | — | — | Session 12 |
| `EC Hot Tub.jpg` | Cottage | `/i
ccommodations/enchanted-cottage.webp` + `/images
odations/cottage/hot-tub.webp` | Homepage, 
 /stays/enchanted-cottage | — | Session 13

| `EC Kitchen.jpg` | Cottage | `/i
ccommodations/cottage/kitchen.webp` | /stays/enc
cottage gallery | — | Session 13 |
| `EC Front Deck.jpg` | Cottage | 
s/accommodations/cottage/front-deck.
 /stays/enchanted-cottage gallery | — | Se
3 |
| `EC Bedroom Summer.jpg` | Cottag
mages/accommodations/cottage/bedroom.web
tays/enchanted-cottage gallery | — | Se
3 |
| `EC Family Room Aerial.jpg` | Co
 `/images/accommodations/cottage/family-room
| /stays/enchanted-cottage gallery | — | Se
3 |
| `EC Cocktail Bar.jpg` | Cottage 
ges/addons/ultimate-romance.webp` + `/images/
dations/cottage/cocktail-bar.webp` | /packages, /s
chanted-cottage gallery | — | Session 13 |
| `EC Romance Package.jpg` | Cotta
dons | `/images/addons/classic-romance.webp` + `/i
ccommodations/cottage/romance-package.webp` | /p
, /stays/enchanted-cottage gallery | — | Se
3 |
| `EC Bathroom.jpg` | Cottage | `/
accommodations/cottage/bathroom.webp` | /stays/en
-cottage gallery | — | Session 13 |
| `Entrance.jpg` | Cottage | `/ima
ommodations/cottage/entrance.webp` | /stays/en
-cottage gallery | — | Session 13 |
| `Entrance.png` | Cottage | (dupl
f `Entrance.jpg`) | — | — | Reference only |
| `Swing  at EC.png` | Cottage | `
/experiences/why-enchanted.webp` | Homepage why
 | Session 13 |
| `Brighter Hot Tub Pic.png` | Hot
`/images/experiences/date-night.webp` + `/i
xperiences/date-night-card.webp` | /date-nigh
 homepage experiences card | — | Session 13 

| `Sunrise Hot Tub Escape.png` | H
| `/images/experiences/hot-tub-escape.webp` +
es/date-night/hot-tub-soak.webp` | /date-night e
ce flow | — | Session 13 + Session 15 (hot-tub-s

| `Tent Site Roasting Marshmallows
 Tent Sites | `/images/accommodations/campsite.web
mepage, /stays, /stays/campsite | — | Sessi

| `Tent Site with tent.png` | Tent
| `/images/accommodations/bell-tent.webp` | H
, /stays, /stays/bell-tent | — | Session 13 |

| `Glamping hot tub close up.png` 
ing | `/images/accommodations/velvet-buck.webp` |
ge, /stays, /stays/velvet-buck | — | Session 13

| `Outdoor Movie Bed with real bed
 Addons | `/images/addons/outdoor-movie.webp` 
ages | — | Session 13 |
| `Christmas Proposal .png` | Prop
 `/images/experiences/proposal.webp` + `/ima
eriences/proposals-card.webp` | /proposals 
omepage experiences card | — | Session 13 

| `madison-guide/Lanier Mansion Ja
ndorf.jpg` | Madison Guide | `/images/madison-g
nier-mansion.webp` | /madison-guide | Jay Weste
 Session 14 |
| `madison-guide/Downtown Madison 
Brent Spry.jpg` | Madison Guide | `/images/ma
uide/downtown-madison.webp` | /madison-
 Brent Spry | Session 14 |
| `madison-guide/Broadway Fountain
Pics.jpg` | Madison Guide | `/images/madison-g
oadway-fountain.webp` | /madison-guide | Grunt Pic
sion 14 |

---

## Awaiting From Angela

| Need | Where it lands | Why bloc

|---|---|---|
| Fireside lounge / couple-by-the-
oto | `/images/date-night/fireside-lounge.webp` |
 flow card on /date-night is currently AI placeho
rand-aligned placeholder shipped (Session 15) —
hoto replaces it. |
| Glamping bathroom / kitchen / be
dditions | `/images/accommodations/velvet-buck/
ry (Phase H8 carousel) | Carousel ships with ex
3–4 source files; more photos give Velvet Buc
her gallery. |
| Bell Tent gallery photos (4 more
mages/accommodations/bell-tent/` gallery
 H8 carousel) | Currently only `Tent Site with ten
 Need ~4 more for the 5-photo carousel. fal.ai f
ed in the meantime. |
| BYOT Campsite gallery photos (4 
 `/images/accommodations/campsite/` gallery 
H8 carousel) | Same as Bell Tent — only 1 source 
fal.ai fills used in the meantime. |
| The Starlit Buck hero + gallery 
os) | `/images/accommodations/starlit-buck.webp` 
ges/accommodations/starlit-buck/` | Ph
th property launches with fal.ai placeholders.
hotos swap in 1:1 once property is photographed.

| Smores skillet real photo | `/im
dons/smores-skillet.webp` | Still AI-ge
. Add-on shoot needed pre-launch. |
| Picnic and Ride real photo | `/i
ddons/picnic-and-ride.webp` | Still AI-g
d. Add-on shoot needed pre-launch. |
| Photo credit display preference 
adison Guide cards | Photographers credited in 
filenames (Jay Westendorf, Brent Spry, Grunt Pics
ot rendered on-page. Confirm whether Angela wa
ible attribution before launch. |

---

## Notes

- Session 13 logs: original photo 
ropped at project root, integrated via `scri
integrate-angela-photos.mjs` (shar
p, max 1600px, quality 80).
- Session 14: madison-guide photos
red to project root with credited filenames, then
into `source-photos/madison-guide/` for
zation.
- Session 15 (Angela revisions pas
t-tub-soak.webp` slot added to the integratio
t using the existing `Sunrise Hot Tub Escape.p
rce. Script refactored so `SOURCE_ROOT` reads 
ource-photos/`, supporting both flat-root and subf
appings.

---

## Session 17 Integrations (2026-05-18)

Photos wired in `scripts/integrate-angela-photos.mjs` JOBS array on
the 2026-05-18 Angela call. All sources confirmed present in
`source-photos/` at session start; filenames already encode destinations.

| Source file | Destination | Page(s) |
|---|---|---|
| `Velvet-Buck-Glamping-Hotub.png` | `/images/accommodations/velvet-buck.webp` (hero) + `velvet-buck/hot-tub.webp` (gallery lead) | Homepage, /stays, /stays/velvet-buck, /glamping hero |
| `Velvet-Buck-Glamping-Kitchen.png` | `/images/accommodations/velvet-buck/kitchen.webp` | /stays/velvet-buck gallery |
| `Velvet-Buck-Glamping-Bathroom.png` | `/images/accommodations/velvet-buck/bathroom.webp` | /stays/velvet-buck gallery |
| `Velvet-Buck-Rocking-Chairs.jpg` | `/images/accommodations/velvet-buck/rocking-chairs.webp` | /stays/velvet-buck gallery (NEW slot) |
| `Velvet-Buck-Bedroom.png` | `/images/accommodations/velvet-buck/bedroom.webp` (supersedes `Enhanced bedroom for glamping.png`) | /stays/velvet-buck gallery |
| `Bell-Tent-Curated-Campsite.png` | `/images/accommodations/bell-tent.webp` + `bell-tent/tent.webp` | Homepage, /stays, /stays/bell-tent, /campsites |
| `Bring-Your-Own-Tent-Site.png` | `/images/accommodations/campsite.webp` + `campsite/tent.webp` | Homepage, /stays, /stays/campsite, /campsites, /blog/tent-camping-near-madison-indiana featured image |
| `Entrance-Glamping-Campsite-Hotub.png` | `/images/accommodations/entrance.webp` | Shared ambient — glamping + camping + hot tubs (NOT Enchanted Cottage) |
| `Private-Hot-Tub-Soak.png` | `/images/date-night/hot-tub-soak.webp` (replaces Sunrise Hot Tub Escape source) | /date-night experience flow |
| `Fireside-Lounge-Hot-Tub-Escapes-Page .png` | `/images/date-night/fireside-lounge.webp` (replaces AI placeholder) | /date-night experience flow |
| `Tranquility-Escape-Package.png` | `/images/date-night/pkg-tranquility.webp` (yoga woman) | /date-night Tranquility package card |
| `Luxury-Hot-Tub-Escape.png` | `/images/date-night/pkg-luxury.webp` (couple in hot tub) | /date-night Luxury package card |
| `Ultimate-Hot-Tub-Escape-Package.png` | `/images/date-night/pkg-ultimate.webp` (champagne + strawberries) | /date-night Ultimate package card |

### Resolved (moved out of "Awaiting From Angela")
- Glamping bathroom / kitchen — both delivered, integrated into Velvet Buck gallery.
- Fireside lounge real photo — delivered, replaces AI placeholder.

### Unresolved
- `Replaced.png` in `source-photos/` — purpose unclear. Angela: confirm whether this is meant to replace something specific, or skip.
- Starlit Buck real photos — Angela generating AI mockups, will email separately. Property still launches with fal.ai placeholders.
- Smores skillet + Picnic and Ride add-on photos — still AI; shoot needed pre-launch.
