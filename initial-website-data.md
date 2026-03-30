# Enchanted Madison — Initial Website Data
**Scraped:** 2026-03-30
**Sources:** enchantedmadison.com, enchantedcollective.my.canva.site/vip, direct-book.com/properties/enchantedcollectivemadison

---

## 1. Main Site — enchantedmadison.com

### Technical Notes
- **Platform:** Canva Website Builder (export_website app)
- **OG Title:** Home
- **Language:** en
- **Favicon:** present
- **Content delivery:** Mostly image-based; very sparse HTML text nodes. Nearly all visual content is rendered via embedded images/video — not crawlable text.

### Hero Section
- **Brand Name:** The Enchanted Collective
- **Rotating Taglines:**
  - romantic stays
  - date night experience
  - proposal experiences
  - tent campsites
- **Location:** in madison, indiana

### Hero Description (only body copy on page)
> "Private wooded glamping tents, cozy campsites, 2 hour hot tub escapes, romantic proposal packages, and vacation rentals just minutes from downtown Madison, Indiana."

### Status Banner
> **OPENING JUNE 2026**

### Primary CTA
> "Unlock VIP Access for early booking access and upgrades!"
> Links to: https://enchantedcollective.my.canva.site/vip

### Navigation (anchor-based, single-page)
| Nav Label | Anchor |
|-----------|--------|
| About Us | #page-0 |
| Accommodations | #page-1 |
| Proposal Experiences | #page-3 |
| Date/Girls Night Experience | #page-6 |
| Packages | #page-4 |
| Madison, IN Info | #page-2 |
| Reviews | #page-5 |
| Contact | #page-7 |

### External Links Found on Page
- https://direct-book.com/properties/enchantedcollectivemadison — Booking engine
- https://enchantedcollective.my.canva.site/vip — VIP SMS list sign-up

### Content Limitation Note
Because the site is built on Canva, all section content (About Us, Packages, Reviews, Madison Info, etc.) is embedded inside images/design elements — **none of this content is readable by search engines or scrapers.** Only the navigation labels and the hero description exist as HTML text.

---

## 2. VIP Sign-Up Page — enchantedcollective.my.canva.site/vip

### Page Title
VIP Mobile Number Collection

### Content
- Simple opt-in form: **Name** + **Mobile Number**
- CTA: "Join VIP list for Enchanted Collective"
- SMS consent language:
  > "By providing your phone number, you agree to receive text messages from The Enchanted Collective. Message & data rates may apply. Reply STOP to opt out. We do not sell, rent, or share your personal information with third parties for marketing purposes."

### Notes
- Hosted on Canva (canva.site subdomain)
- `robots: noindex` — not indexed by search engines
- No incentive offered to sign up beyond "early booking access and upgrades"

---

## 3. Booking Engine — direct-book.com/properties/enchantedcollectivemadison

**Page Title:** Enchanted Collective Madison — Availability
**Platform:** direct-book.com (The Booking Button)

### Accommodation 1 — The Enchanted Cottage

**Type:** Cottage / Vacation Rental
**Capacity:** Sleeps 2
**Bed:** 1 King bed
**Bathrooms:** 1

**Amenities:**
- Non-smoking
- Balcony
- Kitchen
- Washing machine
- Jacuzzi
- Terrace
- Heating
- Air conditioned

**Description:**
> "Unwind at The Enchanted Cottage, a charming rural retreat with a private hot tub, fire pit, king bed, and covered outdoor dining space. Enjoy peaceful country surroundings while staying just five minutes from downtown Madison."

**Pricing (as of 2026-03-30, 2 nights / 2 guests):**
- No Refundable rate: **USD $351.00**
- Standard rate: **USD $390.00**

**Rate policy:** Book now, pay later

---

### Accommodation 2 — Velvet Buck

**Type:** Luxury Glamping Tent
**Capacity:** Sleeps 2
**Size:** 320 ft²
**View:** Countryside

**Amenities:**
- Non-smoking
- Countryside view

**Description:**
> "The Velvet Buck is a spacious luxury glamping tent nestled among the trees at The Enchanted Collective near Madison, Indiana. Enjoy cozy furnishings, a private hot tub under the stars, outdoor dining space, fire pit, and glowing string lights that create a magical woodland retreat."

**Availability:** Unavailable on tested dates (2026-03-30 – 2026-04-01)

---

### Accommodation 3 — Curated Campsite with Bell Tent Provided

**Type:** Glamping Campsite
**Capacity:** Sleeps 2
**Size:** 201 ft²
**View:** Forest

**Amenities:**
- Non-smoking
- Shampoo / Body soap / Free Toiletries / Bathroom amenities
- Hairdryer
- Dogs Accepted
- Outdoor Setting
- Fire Pit
- BBQ Area / Barbeque
- Outdoor dining

**Description:**
> "Enjoy a relaxed outdoor stay at one of our Curated Campsites at The Enchanted Collective near Madison, Indiana. Each site includes a 16-foot bell tent already set up for your arrival, offering the charm of glamping while keeping the spirit of traditional camping. Inside the tent you'll find a small table and soft battery-powered lamp for convenience and ambiance. Guests bring their own bedding and sleeping gear to make the space their own.
>
> Outside, each campsite features a fire pit with cooking grate, Adirondack chairs for relaxing around the fire, and an outdoor dining table for meals under the trees.
>
> Surrounded by peaceful woods yet just minutes from downtown Madison and Clifty Falls State Park, these sites offer a simple and comfortable way to experience nature while enjoying the unique setting of The Enchanted Collective."

**Availability:** Unavailable on tested dates (2026-03-30 – 2026-04-01)

---

### Accommodation 4 — Curated Campsite — Bring Your Own Tent

**Type:** Traditional Campsite
**Capacity:** Sleeps 2
**View:** Forest

**Amenities:**
- Non-smoking
- Forest view

**Description:**
> "Experience peaceful camping at The Enchanted Collective with our Bring Your Own Tent Campsites, located just minutes from historic Madison, Indiana. These private wooded campsites are designed for guests who love a traditional outdoor experience while enjoying a thoughtfully prepared space. Each site includes a fire pit with cooking grate, Adirondack chairs for relaxing around the fire, and an outdoor dining table for meals under the trees.
>
> Surrounded by nature and quiet countryside, these campsites offer the perfect setting to unplug, gather around the fire, and enjoy evenings under the stars. Guests bring their own tent and camping gear, allowing you to create your ideal camping setup.
>
> The property is conveniently located near downtown Madison's shops and restaurants as well as the scenic hiking trails and waterfalls of Clifty Falls State Park.
>
> Whether you're looking for a simple overnight stay or a relaxing weekend in nature, our tent sites provide a peaceful basecamp for exploring southern Indiana."

**Availability:** Unavailable on tested dates (2026-03-30 – 2026-04-01)

---

## 4. Summary of Offerings (Inferred)

| Offering | Type | Key Feature |
|----------|------|-------------|
| The Enchanted Cottage | Vacation rental | Private hot tub, kitchen, king bed |
| Velvet Buck | Luxury glamping tent | Hot tub under stars, woodland setting |
| Curated Campsite (Bell Tent) | Glamping campsite | 16ft bell tent provided, dogs welcome |
| Curated Campsite (BYOT) | Traditional camping | Fire pit, Adirondack chairs, near Clifty Falls |
| Romantic Proposal Packages | Experience | Mentioned in nav, no public detail scraped |
| Date/Girls Night Experience | Experience | Mentioned in nav, no public detail scraped |
| 2-Hour Hot Tub Escapes | Add-on/experience | Mentioned in hero copy, no booking detail scraped |

---

## 5. Location Context

- **Address/Area:** Near Madison, Indiana (Jefferson County, SE Indiana)
- **Proximity claims:**
  - "just five minutes from downtown Madison"
  - "just minutes from downtown Madison and Clifty Falls State Park"
  - "near downtown Madison's shops and restaurants"
  - "near the scenic hiking trails and waterfalls of Clifty Falls State Park"
- **Opening date:** June 2026 (pre-opening as of scrape date)

---

## 6. Raw Page Sections (Navigation Labels Only — Content in Images)

Based on the navigation anchors, the following sections exist on enchantedmadison.com but their content is **not available as HTML text** (embedded in Canva image layers):

- `#page-0` — About Us
- `#page-1` — Accommodations
- `#page-2` — Madison, IN Info
- `#page-3` — Proposal Experiences
- `#page-4` — Packages
- `#page-5` — Reviews
- `#page-6` — Date/Girls Night Experience
- `#page-7` — Contact
