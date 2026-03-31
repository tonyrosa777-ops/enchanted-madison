// ============================================================
// THE ENCHANTED COLLECTIVE — Blog Data
// Source of truth for all blog content.
// All editorial copy lives here. Zero hard-coded strings in blog components.
// ============================================================

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: ContentBlock[];
  publishedAt: string;
  readTime: number;
  featuredImage: string;
  author: { name: string; role: string };
  metaTitle: string;
  metaDescription: string;
}

export const blogCategories = ["All", "Romance", "Glamping", "Madison", "Planning", "Local Guides"];

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // Post 1
  // ─────────────────────────────────────────────────────────────
  {
    slug: "romantic-getaway-madison-indiana",
    title: "The Ultimate Romantic Getaway Guide: Madison, Indiana",
    category: "Romance",
    excerpt:
      "Why the most romantic weekend in Indiana isn't in Gatlinburg or Brown County — and how to build the perfect two-day escape in Madison.",
    publishedAt: "2026-03-01",
    readTime: 7,
    featuredImage: "/images/blog/best-romantic-getaways-indiana.webp",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "The Ultimate Romantic Getaway in Madison, Indiana | The Enchanted Collective",
    metaDescription:
      "Skip Gatlinburg. The best romantic getaway in Indiana is hiding in Madison — a riverfront historic town with waterfalls, wine, and one very private hot tub retreat.",
    body: [
      {
        type: "paragraph",
        text: "Every year, thousands of Indiana couples pack into Gatlinburg, fight for a table at a packed Pigeon Forge restaurant, and stare at other people's vacation photos through a resort window — wondering if this is really what a romantic getaway is supposed to feel like. Brown County is lovely. We're not here to argue. But if what you want is genuine privacy, something that feels discovered rather than packaged, and a place where the only voice you hear after dark is the one beside you — Madison, Indiana is the answer you didn't know you were looking for.",
      },
      {
        type: "heading2",
        text: "Why Madison Beats the Obvious Choices",
      },
      {
        type: "paragraph",
        text: "Madison sits on the Ohio River in southern Indiana, 60 minutes from Louisville and 90 from Indianapolis. It has a 130-block National Historic Landmark District — one of the largest intact 19th-century streetscapes in America. It has Clifty Falls State Park five minutes away. It has wineries, river views, and an unhurried quality that feels genuinely different from the themed-and-monetized version of \"romantic\" that the more popular destinations have perfected. What it doesn't have is crowds. That's the point.",
      },
      {
        type: "heading2",
        text: "How to Structure a Perfect Weekend",
      },
      {
        type: "heading3",
        text: "Saturday Morning: Clifty Falls",
      },
      {
        type: "paragraph",
        text: "Start at Clifty Falls State Park before the day heats up. The Inner Loop trail takes about two hours and delivers four waterfalls — including the 70-foot main fall, which is genuinely dramatic in early spring or after rain. You're walking through a canyon, which means you're often the only people in the frame. Pack water, wear real shoes, and don't rush it. This is the kind of morning that makes an afternoon in town feel earned.",
      },
      {
        type: "heading3",
        text: "Saturday Afternoon: Historic Downtown",
      },
      {
        type: "paragraph",
        text: "Drive five minutes into downtown and walk Main Street. The architecture alone is worth the afternoon — Federal-style storefronts, Greek Revival mansions overlooking the river, the Lanier Mansion open for tours. Thomas Family Winery is a converted carriage house three blocks from the river and pours one of the better red blends in southern Indiana. On weekends they have live music. The Ohio River at evening, seen from the riverfront park, is quietly cinematic.",
      },
      {
        type: "heading3",
        text: "Saturday Evening: The Property",
      },
      {
        type: "paragraph",
        text: "This is where the weekend earns its keep. Back at The Enchanted Collective, the hot tub is warm, the fire is ready, and the world outside the property line has entirely ceased to matter. There's nowhere to be. No reservation to make it to. No couple at the next table. Just the two of you, steam rising against the darkening sky, and an evening that belongs entirely to no one but you.",
      },
      {
        type: "quote",
        text: "Angela and Marc have found their calling! Their piece of paradise truly lives up to its name. They have thought of everything to make your stay relaxing, romantic, and perfect. Five stars is not enough.",
        attribution: "Drucilla, Indianapolis, IN",
      },
      {
        type: "heading2",
        text: "What to Book in Advance",
      },
      {
        type: "list",
        items: [
          "Your accommodation — we fill up on weekends, especially spring and fall",
          "The Clifty Inn dining room for Sunday brunch (call ahead, not reservable online)",
          "Thomas Family Winery on a weekend if live music is a priority — it draws a crowd",
          "Lanier Mansion tours — check seasonal hours before you arrive",
        ],
      },
      {
        type: "paragraph",
        text: "Madison doesn't require a complicated itinerary. It requires a cleared calendar and a willingness to move slowly. The best thing that will happen this weekend probably won't be the waterfall or the wine. It'll be the conversation that starts around the fire and goes nowhere in particular for three hours.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 2
  // ─────────────────────────────────────────────────────────────
  {
    slug: "glamping-vs-hotels-couples",
    title: "Glamping vs. Hotels: Why Couples Are Choosing Canvas Over Concrete",
    category: "Glamping",
    excerpt:
      "The predictable hotel stay has a well-documented problem: couples leave without a single memory they couldn't have made at home. Here's why glamping changes that equation.",
    publishedAt: "2026-03-05",
    readTime: 6,
    featuredImage: "/images/blog/glamping-vs-camping.webp",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Glamping vs. Hotels for Couples | The Enchanted Collective",
    metaDescription:
      "Why are couples trading hotel rooms for glamping tents? Privacy, memory, and the growing sense that a memorable weekend requires more than a flat-screen and free breakfast.",
    body: [
      {
        type: "paragraph",
        text: "The hotel stay has become a kind of infrastructure — functional, uniform, and increasingly interchangeable. You check in, you find the ice machine, you order room service, you check out. Nothing went wrong. Nothing happened. This is the hotel problem: it is designed to eliminate discomfort, and in doing so, it has accidentally eliminated everything else too.",
      },
      {
        type: "heading2",
        text: "What Glamping Actually Is",
      },
      {
        type: "paragraph",
        text: "Glamorous camping. The word sounds like it was invented by a marketing department, but the concept is older than the branding. Glamping is what happens when you want the immersive quality of being outdoors — the air, the dark, the sounds that don't have an off switch — without surrendering the things that make a stay feel genuinely restorative. A real bed. Warm water. Climate control when you need it. At its best, glamping is not camping with better gear. It's a different category of experience entirely.",
      },
      {
        type: "heading2",
        text: "The Privacy Advantage",
      },
      {
        type: "paragraph",
        text: "Hotels share walls. They share pools, restaurants, lobbies, elevators, and ice machines. A hotel is, by design, a managed commons. Glamping inverts that model. Your tent is your property. Your hot tub is your hot tub. Your fire pit is lit for you alone. The nearest other guests might be a quarter mile away. This is not a minor logistical difference — it is a fundamental shift in what the experience feels like. Couples at glamping properties talk differently. They move differently. They're not performing a getaway; they're actually having one.",
      },
      {
        type: "heading2",
        text: "The Memory Advantage",
      },
      {
        type: "paragraph",
        text: "There is reasonable research suggesting that novel, emotionally resonant experiences generate stronger memories than comfortable but routine ones. A 4-star hotel room is comfortable and routine. A private tent with string lights, a fire, and a view of stars you don't normally see from your zip code is neither. The memory your brain forms is proportional to the distance from your baseline. Glamping, done well, is quite far from baseline.",
      },
      {
        type: "quote",
        text: "For our 29th anniversary we chose this place to just be still… it was PERFECT.",
        attribution: "Julie, Greentown, IN",
      },
      {
        type: "heading2",
        text: "When Hotels Still Win",
      },
      {
        type: "paragraph",
        text: "Hotels win when you need in-room dining at 2am, when a conference center is involved, when you're flying in and need a shuttle, or when your idea of vacation requires a spa that employs twelve aestheticians and a rooftop bar. Hotels are very good at being hotels. The question is whether \"hotel\" is the experience you actually want.",
      },
      {
        type: "heading2",
        text: "The Practical Comparison",
      },
      {
        type: "list",
        items: [
          "Privacy: Glamping wins — your own space, no shared walls or facilities",
          "Nature immersion: Glamping wins — you're in it, not looking at it through glass",
          "Comfort: Comparable — luxury glamping has real beds, climate control, and amenities",
          "Convenience: Hotels win — easier check-in, more services, more locations",
          "Memorable: Glamping wins — novel environments generate stronger memories",
          "Romance: Glamping wins — private hot tubs, fires, and darkness have no hotel equivalent",
        ],
      },
      {
        type: "paragraph",
        text: "The couples who stay here and come back — and many of them do — aren't choosing glamping because it's cheaper or closer. They're choosing it because a great anniversary deserves a great story, and a story requires something to actually happen.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 3
  // ─────────────────────────────────────────────────────────────
  {
    slug: "how-to-plan-proposal-indiana",
    title: "How to Plan the Perfect Proposal in Indiana (Without the Stress)",
    category: "Planning",
    excerpt:
      "The setting matters less than the feeling. A checklist for proposing well — from location logic to the overlooked details that will make the difference.",
    publishedAt: "2026-03-10",
    readTime: 8,
    featuredImage: "/images/blog/how-to-plan-the-perfect-proposal.webp",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "How to Plan a Proposal in Indiana | The Enchanted Collective",
    metaDescription:
      "A practical guide to planning an Indiana proposal — from choosing between private and public settings to what our three proposal packages actually include.",
    body: [
      {
        type: "paragraph",
        text: "The most common proposal mistake isn't choosing the wrong location. It's choosing the right location and then under-executing everything else. The setting is a backdrop. What fills the frame is preparation, presence, and the specific quality of attention that tells your person: I thought about you in every detail of this.",
      },
      {
        type: "heading2",
        text: "Choose Setting Over Scenery",
      },
      {
        type: "paragraph",
        text: "There are two categories of proposal: private and public. Public proposals — on restaurant dance floors, at sports events, at scenic overlooks crowded with other tourists — carry performance pressure for both people. You're proposing to the crowd as much as to your person. Some couples want that. Most don't. The private proposal, by contrast, is entirely yours. The answer doesn't have to perform for anyone. The tears don't have to be photogenic. The moment can be whatever it needs to be.",
      },
      {
        type: "heading3",
        text: "Why Private Works Better",
      },
      {
        type: "paragraph",
        text: "A private setting eliminates audience anxiety for both of you, allows you to take as long as you need, and creates a physical space that belongs to the memory — not a public landmark that ten thousand other couples have also used. When you bring your person to The Enchanted Collective for a proposal, the space has been prepared for exactly this. The candles, the flowers, the sign, the champagne — it's all in service of the moment you've been building toward. No strangers. No distraction. Just the two of you and what comes next.",
      },
      {
        type: "heading2",
        text: "What to Actually Prepare",
      },
      {
        type: "heading3",
        text: "The Setting",
      },
      {
        type: "list",
        items: [
          "Choose a time: golden hour (90 minutes before sunset) is reliably beautiful",
          "Book early — weekend dates, especially in May through October, fill months in advance",
          "Have a weather contingency for outdoor proposals (we handle this for you)",
          "Know the route from where you're staying/parking to the proposal space",
        ],
      },
      {
        type: "heading3",
        text: "The Logistics",
      },
      {
        type: "list",
        items: [
          "Ring: insure it before the trip — most homeowner policies cover jewelry riders",
          "Photographer: optional but worth it — the 20 minutes after a yes are unphotographable without one",
          "Phone: fully charged, Do Not Disturb on",
          "Champagne: chilled, glasses accessible, no fumbling",
        ],
      },
      {
        type: "heading2",
        text: "Our Proposal Packages",
      },
      {
        type: "paragraph",
        text: "We offer three tiers designed for different visions of the moment.",
      },
      {
        type: "list",
        items: [
          "The Enchanted Proposal ($249) — Private space reservation, rose petal and candle path, string lights, decorative floral accents, fire table, photo time after",
          "The Signature 'She Said Yes' Experience ($399) — Everything above plus the 'Marry Me' sign, champagne or sparkling toast, charcuterie board, keepsake glasses, and one hour at the hot tub or Enchanted Table",
          "The Ultimate Enchanted Engagement ($599) — Everything in the Signature plus premium florals, floating candles, aromatherapy, chocolate-covered strawberries",
        ],
      },
      {
        type: "heading2",
        text: "The Follow-Through",
      },
      {
        type: "paragraph",
        text: "Book the overnight stay. This is the part most people forget to think about in advance. After the proposal — after the yes, the phone calls, the champagne — you need somewhere to land. Not a restaurant with a reservation you're now 40 minutes late for. Not a drive home. A place where the night can continue at whatever pace it finds naturally. The Enchanted Cottage and The Velvet Buck are specifically designed for exactly this kind of evening. The hot tub is warm. The fire is ready. You've already done the hard part.",
      },
      {
        type: "quote",
        text: "They have thought of everything to make your stay relaxing, romantic, and perfect. Five stars is not enough.",
        attribution: "Drucilla, Indianapolis, IN",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 4
  // ─────────────────────────────────────────────────────────────
  {
    slug: "things-to-do-madison-indiana",
    title: "10 Things to Do in Madison, Indiana (For a Real Weekend, Not a List)",
    category: "Madison",
    excerpt:
      "Not a listicle. Ten actual recommendations — the kind you'd give a close friend who asked what to do with two days in one of Indiana's most underestimated towns.",
    publishedAt: "2026-03-15",
    readTime: 8,
    featuredImage: "/images/blog/things-to-do-madison-indiana.webp",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "10 Things to Do in Madison, Indiana | The Enchanted Collective",
    metaDescription:
      "A real guide to Madison, Indiana — from the Clifty Falls Inner Loop to Thomas Family Winery to the art of doing absolutely nothing at all.",
    body: [
      {
        type: "paragraph",
        text: "Most travel lists about Madison, Indiana mention the historic district and Clifty Falls and then run out of ideas. That's a failure of imagination. Madison is an 11,000-person town on the Ohio River that punches significantly above its weight in almost every category — food, architecture, scenery, and the quality of an unhurried afternoon. Here are ten things worth doing, written for people who want to actually experience a place rather than document it.",
      },
      {
        type: "heading2",
        text: "1. The Clifty Falls Inner Loop",
      },
      {
        type: "paragraph",
        text: "Two hours. Four waterfalls. A canyon that makes you feel appropriately small. The Inner Loop trail is the park's signature experience, and it earns the designation. Go in spring when the water volume is highest, or in fall when the canyon walls turn gold. Bring real shoes — the trail has roots and steep descents — and go early if you want the falls to yourself.",
      },
      {
        type: "heading2",
        text: "2. Lanier Mansion",
      },
      {
        type: "paragraph",
        text: "J.F.D. Lanier financed Indiana's Civil War effort, largely from this house. Built between 1840 and 1844, it's one of the finest examples of Greek Revival architecture in the Midwest, and the Indiana State Museum has restored it with genuine care. The view of the Ohio from the formal gardens is worth the admission alone.",
      },
      {
        type: "heading2",
        text: "3. Main Street Historic District Walk",
      },
      {
        type: "paragraph",
        text: "Just walk it. Park anywhere near the river and cover a few blocks in any direction. The 19th-century commercial architecture is intact in a way that almost nowhere else in Indiana can claim. This is what American main streets looked like before the highway bypasses. Independent shops, a few galleries, restaurants that have nothing to prove.",
      },
      {
        type: "heading2",
        text: "4. Thomas Family Winery",
      },
      {
        type: "paragraph",
        text: "A converted carriage house three blocks from the Ohio River. The red blends are serious, the atmosphere is relaxed, and on weekend evenings they have live music. This is a genuinely good winery in an unexpected setting — which is the best kind. Ask about their reserve bottlings.",
      },
      {
        type: "heading2",
        text: "5. The Ohio River at Evening",
      },
      {
        type: "paragraph",
        text: "The riverfront park at sunset is one of those views that people who live here probably stop seeing. Don't stop seeing it. The Ohio is wide and slow here, and the light at dusk comes in low across the water from Kentucky. Stand there for twenty minutes and do nothing. This is a legitimately good use of your time.",
      },
      {
        type: "heading2",
        text: "6. Lanthier Winery",
      },
      {
        type: "paragraph",
        text: "Fifteen minutes from downtown on the Indiana 56 Scenic Byway. Hillside vineyard, porch with river views, a solid Chambourcin that's worth the drive. Combine with Thomas Family for a full afternoon on the Ohio River wine trail.",
      },
      {
        type: "heading2",
        text: "7. The Clifty Inn Dining Room",
      },
      {
        type: "paragraph",
        text: "Inside the state park, overlooking the canyon. The Sunday buffet brunch is a Madison institution — book ahead, because it fills up, and the canyon views from the dining room window are reason enough to go even if the food were merely adequate. (It isn't.)",
      },
      {
        type: "heading2",
        text: "8. Hanover College Grounds",
      },
      {
        type: "paragraph",
        text: "Fifteen minutes from Madison, Indiana's oldest private college sits on a bluff 200 feet above the Ohio River. The grounds are open to visitors and the views are some of the best in southern Indiana. Come in late October for the fall color. Walk slowly.",
      },
      {
        type: "heading2",
        text: "9. Madison Chautauqua Festival (September)",
      },
      {
        type: "paragraph",
        text: "One weekend every September, the riverfront fills with artists from across the country for one of the Midwest's oldest outdoor arts festivals. The quality is genuinely high — paintings, sculpture, photography, handmade goods — and the setting along the river makes it one of the better festival days you'll spend anywhere in the region.",
      },
      {
        type: "heading2",
        text: "10. Intentional Nothing at the Property",
      },
      {
        type: "paragraph",
        text: "This one requires more planning than the rest. Clear your phone for the afternoon. Get in the hot tub before you're ready to. Let the fire burn longer than necessary. Don't take a photo of it. Don't plan what's next. Intentional nothing is the hardest activity on this list and probably the most valuable. It's what most people come here for, whether they know it when they book or not.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 5
  // ─────────────────────────────────────────────────────────────
  {
    slug: "clifty-falls-hiking-guide",
    title: "Clifty Falls State Park: The Complete Hiking Guide",
    category: "Madison",
    excerpt:
      "Four waterfalls, seven miles of trails, and a canyon that changes completely with the seasons. Everything you need to know before you hike Clifty Falls.",
    publishedAt: "2026-03-18",
    readTime: 7,
    featuredImage: "/images/blog/clifty-falls-hiking-guide.jpg",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Clifty Falls State Park Hiking Guide | The Enchanted Collective",
    metaDescription:
      "A complete guide to hiking Clifty Falls State Park near Madison, Indiana — trails, waterfalls, seasonal tips, and everything the park map doesn't tell you.",
    body: [
      {
        type: "paragraph",
        text: "Clifty Falls State Park sits five minutes from The Enchanted Collective and ten minutes from downtown Madison. It is, without exaggeration, one of the more dramatic natural landscapes in Indiana — a deep canyon carved by Clifty Creek, lined with limestone walls, and punctuated by four distinct waterfalls. If you're staying with us and haven't hiked it, rearrange your morning.",
      },
      {
        type: "heading2",
        text: "The Four Waterfalls",
      },
      {
        type: "heading3",
        text: "Clifty Falls — 70 feet",
      },
      {
        type: "paragraph",
        text: "The signature fall and the reason most people come. At 70 feet, it's Indiana's most dramatic waterfall — best seen in spring or after significant rainfall when the volume is at its peak. The approach trail descends steeply into the canyon, which makes the fall appear suddenly and from below, which is the right way to encounter it.",
      },
      {
        type: "heading3",
        text: "Little Clifty Falls — 17 feet",
      },
      {
        type: "paragraph",
        text: "Smaller but prettier in certain light conditions — a wide, layered cascade over mossy limestone shelves. In summer, the surrounding vegetation creates a genuinely green and enclosed space that feels almost tropical. Worth the detour off the main trail.",
      },
      {
        type: "heading3",
        text: "Tunnel Falls",
      },
      {
        type: "paragraph",
        text: "Named for the abandoned railroad tunnel visible in the canyon wall nearby, Tunnel Falls is a narrower fall that drops through a gap in the rock. The setting is unusual — industrial history overlaid with geological time — and it's the most photographed fall in the park after the main Clifty.",
      },
      {
        type: "heading3",
        text: "Hoffman Falls",
      },
      {
        type: "paragraph",
        text: "The most seasonal of the four — strong in late winter and spring, reduced to a trickle by August. If you're hiking in the dry season, temper your expectations for Hoffman. Come back in March.",
      },
      {
        type: "heading2",
        text: "Trail Guide",
      },
      {
        type: "list",
        items: [
          "Inner Loop Trail — 2.1 miles, moderate, accesses all four major waterfalls; allow 2 hours",
          "Outer Loop Trail — 5 miles, strenuous, full canyon rim traverse; allow 3–4 hours",
          "Nature Center Trail — 0.75 miles, easy, interpretive signage, good for a short visit",
          "Clifty Canyon Trail — 1.5 miles, moderate, follows the creek; muddy after rain",
        ],
      },
      {
        type: "heading2",
        text: "Best Times by Season",
      },
      {
        type: "heading3",
        text: "Spring (March–May)",
      },
      {
        type: "paragraph",
        text: "Peak waterfall season. Clifty Creek runs high after winter snowmelt and spring rains, and all four falls are running at full volume. The canyon wildflowers — Virginia bluebells, trillium, spring beauties — bloom in April. Trails are wet and can be slippery. Worth every step.",
      },
      {
        type: "heading3",
        text: "Fall (October–November)",
      },
      {
        type: "paragraph",
        text: "The canyon turns gold in late October in a way that makes every photograph look like it was taken by someone who knows what they're doing. Peak color typically arrives the last week of October. The waterfalls are lower than spring but still running, and the light through the canyon at golden hour is extraordinary.",
      },
      {
        type: "heading3",
        text: "Winter (December–February)",
      },
      {
        type: "paragraph",
        text: "Underrated. When temperatures drop below freezing, Clifty Falls partially or fully ices over — a sight that fewer than 5% of Clifty visitors ever see. The park stays open year-round; ice cleats are recommended on canyon descents after a freeze.",
      },
      {
        type: "heading2",
        text: "Practical Notes",
      },
      {
        type: "list",
        items: [
          "Indiana State Park pass ($12/day or $50/year) required for parking",
          "No dogs on canyon trails — they're not permitted below the rim",
          "The Clifty Inn inside the park serves lunch and dinner; the Sunday brunch is worth booking",
          "No swimming in the creek or at the base of falls — the canyon has serious drop hazards",
          "Restrooms at the trailhead, not on the trail itself — plan accordingly",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 6
  // ─────────────────────────────────────────────────────────────
  {
    slug: "glamping-packing-list",
    title: "What to Pack for a Luxury Glamping Weekend (And What to Leave at Home)",
    category: "Glamping",
    excerpt:
      "The most common over-packing mistake couples make — and the surprisingly short list of what you actually need for a perfect glamping weekend.",
    publishedAt: "2026-03-20",
    readTime: 5,
    featuredImage: "/images/blog/glamping-packing-list.jpg",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Luxury Glamping Packing List | The Enchanted Collective",
    metaDescription:
      "What to pack for a luxury glamping weekend at The Enchanted Collective — and the long list of things you can safely leave at home.",
    body: [
      {
        type: "paragraph",
        text: "The number one over-packing scenario we see: someone arrives with a full car and discovers that everything they brought to be comfortable — the pillows, the blankets, the toiletries, the kitchen gear — is already there, and better than what they packed. Luxury glamping is not camping with better intentions. It's accommodation that happens to be outdoors.",
      },
      {
        type: "heading2",
        text: "What We Provide (Don't Pack These)",
      },
      {
        type: "list",
        items: [
          "Premium bedding — Sleep Number king, silky linens, extra blankets",
          "Towels and robes for hot tub use",
          "Full kitchen setup including coffee, French press, filters",
          "Stocked cocktail bar (mixers, spirits, glasses)",
          "Outdoor dining setup — table, chairs, fire pit tools",
          "String lights, ambiance lighting, candles",
          "Basic toiletries — soap, shampoo, conditioner",
          "First aid kit, bug spray, sunscreen",
        ],
      },
      {
        type: "heading2",
        text: "What to Bring",
      },
      {
        type: "list",
        items: [
          "Swimsuits — you will be in the hot tub",
          "Layers for evening — temperatures drop more than you expect outdoors",
          "Comfortable shoes for trail walking, plus sandals for around the property",
          "Evening shoes if you're doing downtown Madison or a winery",
          "Your choice of wine, champagne, or spirits (we're BYOB for the good stuff)",
          "Any prescription medications and personal care items you can't live without",
          "A portable phone charger — you'll use your phone for photos even if you're trying not to",
        ],
      },
      {
        type: "heading2",
        text: "Experience Enhancers Worth Considering",
      },
      {
        type: "list",
        items: [
          "A downloaded playlist you've been meaning to listen to together",
          "A dedicated camera — phone cameras are excellent but a real camera changes your posture",
          "A book or a journal if you're the kind of person who reads or writes on vacation",
          "A board game or cards if evenings tend to go long",
        ],
      },
      {
        type: "heading2",
        text: "What to Leave at Home",
      },
      {
        type: "paragraph",
        text: "The work laptop. Candles and bath bombs for the hot tub (they damage the jets and the chemistry — please don't). Traditional camping gear — tent, sleeping bags, camp stove. Too many plans. The inclination to check your email after 8pm.",
      },
      {
        type: "quote",
        text: "They have thought of everything to make your stay relaxing, romantic, and perfect.",
        attribution: "Drucilla, Indianapolis, IN",
      },
      {
        type: "paragraph",
        text: "The shortest packing list for a glamping weekend is the most liberating: swimsuits, layers, the wine you've been saving, and the phone set to Do Not Disturb. Everything else is already there.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 7
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ohio-river-wine-country-madison",
    title: "Ohio River Wine Country: A Day Trip Guide from Madison, Indiana",
    category: "Local Guides",
    excerpt:
      "The stretch of Indiana Highway 56 along the Ohio River passes through some of the state's oldest wine country. A guide to making an afternoon of it.",
    publishedAt: "2026-03-23",
    readTime: 6,
    featuredImage: "/images/blog/ohio-river-wine-country-madison.jpg",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Ohio River Wine Country Day Trip from Madison | The Enchanted Collective",
    metaDescription:
      "A guide to Indiana's Ohio River wine trail from Madison — Thomas Family Winery, Lanthier Winery, and the US-56 Scenic Byway that connects them.",
    body: [
      {
        type: "paragraph",
        text: "Indiana is not the first name in American wine country, and anyone who tells you otherwise is trying to sell you something. What it does have, along the stretch of Highway 56 that follows the Ohio River east and west of Madison, is a handful of serious wineries in genuinely beautiful settings — the kind of afternoon that feels like a discovery rather than a destination.",
      },
      {
        type: "heading2",
        text: "The Route: US-56 Scenic Byway",
      },
      {
        type: "paragraph",
        text: "Indiana Highway 56 follows the Ohio River through Jefferson County and beyond — a two-lane road with river views, limestone bluffs, and the kind of unhurried pace that makes the drive part of the experience. From The Enchanted Collective, you're on it in ten minutes. The wineries are scattered along this corridor, which means the afternoon has a logical shape: drive the byway, stop at each winery, have dinner in Madison.",
      },
      {
        type: "heading2",
        text: "Thomas Family Winery",
      },
      {
        type: "paragraph",
        text: "In downtown Madison, three blocks from the Ohio River, inside a converted 19th-century carriage house. Thomas Family has been making wine here for decades, and they've gotten good at it. The red blends are the strength — the proprietors focus on full-bodied, approachable reds that pair well with the charcuterie they're often serving at the bar. Weekend evenings bring live acoustic music and a crowd that's the right mix of local regulars and visitors who found the place on a walk and stayed.",
      },
      {
        type: "heading3",
        text: "What to Order",
      },
      {
        type: "list",
        items: [
          "Ask for the current reserve red — the blend changes by year and it's usually the best thing on the list",
          "The sparkling rosé if it's summer and you're planning a hot tub later",
          "The flight if it's your first visit — 5 pours, $12, no rush",
        ],
      },
      {
        type: "heading2",
        text: "Lanthier Winery",
      },
      {
        type: "paragraph",
        text: "Twenty minutes east of Madison on IN-56, up a hillside above the river. The drive in tells you what to expect: winding, elevated, with Ohio River views appearing through the trees as you climb. Lanthier's signature is the Chambourcin — a French-American hybrid grape that does well in southern Indiana's climate and produces a wine with more complexity than most people expect from the region. The porch is the best seat in the house.",
      },
      {
        type: "heading3",
        text: "Practical Notes for Lanthier",
      },
      {
        type: "list",
        items: [
          "Check seasonal hours before driving — they close earlier in winter",
          "The porch fills up on Saturday afternoons — arrive by 2pm if you want a table",
          "They have a small food menu; pair the Chambourcin with the cheese plate",
        ],
      },
      {
        type: "heading2",
        text: "A Full Afternoon Itinerary",
      },
      {
        type: "list",
        items: [
          "12:00pm — Depart The Enchanted Collective",
          "12:30pm — Lunch at Clifty Inn or downtown Madison restaurant",
          "2:00pm — Thomas Family Winery for a flight and the carriage house atmosphere",
          "4:00pm — Drive IN-56 east to Lanthier Winery",
          "5:30pm — Lanthier porch, Chambourcin, Ohio River views",
          "7:00pm — Return to Madison for dinner on Main Street",
          "9:00pm — Back to the property, hot tub, end of a well-spent day",
        ],
      },
      {
        type: "paragraph",
        text: "The wine trail works best when it's not a list of stops but a shape for the afternoon — drive, pour, sit, talk, move when you're ready. Indiana's Ohio River corridor doesn't compete with Napa for volume or reputation. It doesn't need to. It has something better: no crowds, honest prices, and a river view that nobody is charging extra for.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 8
  // ─────────────────────────────────────────────────────────────
  {
    slug: "anniversary-getaway-near-indianapolis",
    title: "Anniversary Getaway Ideas Within 90 Minutes of Indianapolis",
    category: "Romance",
    excerpt:
      "A practical comparison of the best anniversary destinations within a 90-minute drive of Indianapolis — including which one is most likely to actually work.",
    publishedAt: "2026-03-26",
    readTime: 7,
    featuredImage: "/images/blog/date-night-ideas-near-louisville.webp",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Anniversary Getaway Near Indianapolis | The Enchanted Collective",
    metaDescription:
      "The best anniversary getaways within 90 minutes of Indianapolis — from Madison to Brown County to French Lick, and how to choose the right one.",
    body: [
      {
        type: "paragraph",
        text: "Indianapolis has a radius problem. Within 90 minutes, you have genuine options — a handful of destinations that each do something specific well. The mistake most couples make is choosing based on name recognition rather than fit. Brown County is not the same as French Lick, which is not the same as Madison. Before you book, know what you're actually after.",
      },
      {
        type: "heading2",
        text: "Madison, Indiana / The Enchanted Collective — 90 minutes",
      },
      {
        type: "paragraph",
        text: "The most private, most romantic option within the radius. Madison offers a historic riverfront town with real restaurants, Clifty Falls State Park, wineries, and The Enchanted Collective — the only luxury glamping and private hot tub retreat in the Louisville-Cincinnati-Indianapolis triangle. This is the right choice if you want genuine privacy, an outdoor immersive experience, and the feeling of having discovered something rather than booked something everyone else has.",
      },
      {
        type: "heading2",
        text: "Brown County — 60 minutes",
      },
      {
        type: "paragraph",
        text: "Activity-focused and beautiful in fall. Brown County State Park is Indiana's largest and delivers exceptional scenery, particularly from mid-October through early November. The town of Nashville is charming in a deliberately quaint way. Cabins and cottages are widely available. If what you want is fall color, a horseback ride, and artisan shops, Brown County delivers. It's also more crowded than Madison — a meaningful tradeoff in the fall peak season.",
      },
      {
        type: "heading2",
        text: "French Lick / West Baden — 2 hours",
      },
      {
        type: "paragraph",
        text: "Architectural splendor and a different kind of luxury. The West Baden Springs Hotel — a turn-of-the-century resort with an atrium dome that was called the Eighth Wonder of the World — is genuinely one of the most beautiful interiors in the Midwest. The spa is world-class. The golf is excellent. This is the right choice if you want historic grandeur, room service, and a spa treatment rather than an outdoor experience.",
      },
      {
        type: "heading2",
        text: "Cataract Falls — 45 minutes",
      },
      {
        type: "paragraph",
        text: "Indiana's largest waterfall by volume and a perfect half-day add-on rather than a standalone destination. Cataract Falls State Recreation Area is undervisited relative to its quality. Combine it with a night in Brown County or make it a day trip — but don't base an anniversary weekend there alone.",
      },
      {
        type: "heading2",
        text: "How to Choose",
      },
      {
        type: "list",
        items: [
          "You want genuine privacy and a romantic outdoor experience → Madison / The Enchanted Collective",
          "You want fall scenery and activity-focused days → Brown County",
          "You want architectural luxury, spa, and resort amenities → French Lick / West Baden",
          "You want the easiest possible drive → Brown County (60 min) or Cataract Falls (45 min)",
          "You want something neither of you has done before → Madison",
        ],
      },
      {
        type: "quote",
        text: "Me and my new wife decided to stay here for our honeymoon and I do not know if we could have chosen a better place. It met and exceeded our expectations!",
        attribution: "Melissa, Greenwood, IN",
      },
      {
        type: "paragraph",
        text: "The 90-minute radius from Indianapolis is genuinely rich with good options. The mistake is treating them as interchangeable. They each do something specific well, and the trip that works is the one where what the destination does well is what you actually wanted.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 9
  // ─────────────────────────────────────────────────────────────
  {
    slug: "private-hot-tub-experience-guide",
    title: "Hot Tub Under the Stars: The Complete Guide to a Private Soak",
    category: "Romance",
    excerpt:
      "Why private hot tubs have become the most requested feature in romantic travel — and what to expect when you book one here.",
    publishedAt: "2026-03-28",
    readTime: 5,
    featuredImage: "/images/blog/private-hot-tub-experience-guide.jpg",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Private Hot Tub Experience Guide | The Enchanted Collective",
    metaDescription:
      "Everything you need to know about booking a private hot tub experience at The Enchanted Collective — packages, what to expect, and why it works.",
    body: [
      {
        type: "paragraph",
        text: "The private hot tub has become the most-searched feature in romantic accommodation for a reason that has nothing to do with the hot tub itself. It's a low-variable, high-impact experience: warm water, no audience, darkness or stars depending on the hour. The variables that usually kill a romantic evening — cold, other people, nowhere to sit, nothing to do — are removed. What remains is conversation, warmth, and time.",
      },
      {
        type: "heading2",
        text: "What to Expect at Each Experience Tier",
      },
      {
        type: "heading3",
        text: "Tranquility Escape — $119",
      },
      {
        type: "paragraph",
        text: "One hour and thirty minutes. Private hot tub, candlelight, gas fire table, ambient music, plush spa robes. This is the entry-level package and it is not a compromise — it's exactly what most people are looking for when they want to get out of their routine without overwhelming it. Book this if you've never done a hot tub escape and want to understand what the experience is before committing to more.",
      },
      {
        type: "heading3",
        text: "The Luxury Escape — $149",
      },
      {
        type: "paragraph",
        text: "Two full hours. Everything in the Tranquility package plus a BYOB wine or champagne setup, access to the Fireside Lounge for an hour, the massage chair, spa water and coffee bar. This is the most popular package because it extends the time to two hours — which is the right length for this kind of evening. Not so short that you feel rushed, not so long that the water cools and you start thinking about other things.",
      },
      {
        type: "heading3",
        text: "Ultimate Escape — $199",
      },
      {
        type: "paragraph",
        text: "Four hours. Everything above plus floating candles, aromatherapy crystal infusion, a deluxe charcuterie board for two, chocolate-covered strawberries, and the Outdoor Movie Bed. This is the package for anniversaries, honeymoons, and occasions that deserve more than a few hours.",
      },
      {
        type: "heading2",
        text: "The Science (If You Need It)",
      },
      {
        type: "paragraph",
        text: "Cortisol — the primary stress hormone — drops measurably during hydrotherapy. Oxytocin, which is associated with bonding and physical closeness, rises. The warmth-to-cool contrast as you exit the water triggers a physiological relaxation response. This is not marketing language; these are reasonably well-documented physiological effects. You don't need to know any of this to enjoy the evening. But it explains why couples consistently report that they talked differently in the water — slower, more honestly, about things they don't normally get to.",
      },
      {
        type: "heading2",
        text: "How to Book",
      },
      {
        type: "list",
        items: [
          "Hot tub experiences are bookable as standalone (no overnight stay required)",
          "Available Thursday through Sunday, with time slots from late afternoon through evening",
          "The Luxury Escape (2 hours) books out the most quickly — reserve at least 2 weeks ahead on weekends",
          "You bring the champagne; we handle the setup, the ambiance, and the warm-up",
        ],
      },
      {
        type: "paragraph",
        text: "The private hot tub is one of the few truly reliable components of a romantic evening. Weather cooperates when you're already warm. The conversation finds its own pace. The stars, when they appear, are genuinely there.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Post 10
  // ─────────────────────────────────────────────────────────────
  {
    slug: "southern-indiana-travel-guide",
    title: "Southern Indiana's Best Kept Secrets (That Have Nothing to Do with Caves)",
    category: "Local Guides",
    excerpt:
      "Most people think of Marengo and Wyandotte when they think of southern Indiana. They're missing the Ohio River corridor entirely.",
    publishedAt: "2026-03-30",
    readTime: 7,
    featuredImage: "/images/blog/southern-indiana-travel-guide.jpg",
    author: { name: "Angela & Marc", role: "Hosts at The Enchanted Collective" },
    metaTitle: "Southern Indiana Travel Guide | The Enchanted Collective",
    metaDescription:
      "The real guide to southern Indiana — the Ohio River corridor, Clifty Falls, Madison's historic district, and why this region is one of the Midwest's most underestimated destinations.",
    body: [
      {
        type: "paragraph",
        text: "Southern Indiana's tourism identity has been captured by its caves. Marengo, Wyandotte, Squire Boone — spectacular underground systems that draw hundreds of thousands of visitors a year to a sliver of the region while the rest of it goes almost entirely undiscovered. The Ohio River corridor, which runs along the state's southern edge from the Kentucky border west to Illinois, is the best travel secret in the Midwest — and has been for about 200 years.",
      },
      {
        type: "heading2",
        text: "The Ohio River Corridor",
      },
      {
        type: "paragraph",
        text: "Indiana Highway 56 follows the Ohio River through Jefferson County, and this stretch of road is worth the drive from almost anywhere within three hours. Small towns perched above the river. Limestone bluffs dropping to the water. Vineyards on the hillsides. The road itself moves at a pace that makes the destination feel secondary to the journey — which is the correct priority for this part of the world.",
      },
      {
        type: "heading2",
        text: "Clifty Falls State Park",
      },
      {
        type: "paragraph",
        text: "The anchor of the region and Indiana's most dramatic waterfall park. Clifty Creek has carved a canyon through the limestone here that is genuinely startling in its scale — the Inner Loop trail drops into it and emerges at four waterfalls, the tallest of which hits 70 feet. Most visitors come in summer. The people who know to come in spring (for water volume) and fall (for canyon color) are the ones who understand what this place is capable of.",
      },
      {
        type: "heading2",
        text: "Historic Architecture Worth Stopping For",
      },
      {
        type: "paragraph",
        text: "Madison's 130-block National Historic Landmark District is one of the largest intact 19th-century streetscapes in America. This is not preservation-as-museum — these are working commercial buildings, occupied storefronts, lived-in houses. The Lanier Mansion at the river's edge is the crown jewel: Greek Revival architecture at its most considered, built in the 1840s by the man who largely financed Indiana's Civil War effort.",
      },
      {
        type: "heading2",
        text: "The Food Scene",
      },
      {
        type: "paragraph",
        text: "Madison punches well above its weight for a town of 11,000. Independent restaurants on Main Street serve food that would be unremarkable to mention in Nashville or Louisville but is genuinely surprising in context. The Clifty Inn dining room inside the state park draws visitors from a significant radius for its Sunday brunch. Thomas Family Winery pours serious red blends three blocks from the river. This is a town that has learned to take food and drink seriously without becoming precious about it.",
      },
      {
        type: "heading2",
        text: "The Accommodations Gap — And Why We Built The Enchanted Collective",
      },
      {
        type: "paragraph",
        text: "For years, Madison had a problem: it was too good to pass through but had nowhere worthy of staying. The hotel inventory was functional and forgettable. The Airbnb listings were ordinary. The gap between what the region offered in terms of scenery, architecture, food, and wine — and what existed in terms of accommodation — was significant. The Enchanted Collective was built to close that gap. Luxury glamping tents, a private cottage, hot tubs under the woodland sky, and the specific kind of curation that tells guests: we thought about this more than you had to.",
      },
      {
        type: "quote",
        text: "Angela and Marc have found their calling! Their piece of paradise truly lives up to its name. They have thought of everything to make your stay relaxing, romantic, and perfect. Five stars is not enough.",
        attribution: "Drucilla, Indianapolis, IN",
      },
      {
        type: "paragraph",
        text: "Southern Indiana's best-kept secret isn't underground. It's the 60-mile stretch of the Ohio River that runs from Madison east, the town that grew up beside it, and the fact that you can get here from Louisville in an hour and from Indianapolis in ninety minutes and still feel genuinely away.",
      },
    ],
  },
];
