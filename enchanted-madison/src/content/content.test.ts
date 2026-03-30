import { describe, expect, it } from "vitest";

import { experienceCollections } from "./experiences";
import { faqs } from "./faq";
import { madisonGuideContent } from "./madison-guide";
import { primaryNavigation } from "./navigation";
import { stayPackages } from "./packages";
import { reviews } from "./reviews";
import { seoDefaults } from "./seo";
import { siteContent } from "./site";
import { stays } from "./stays";

describe("site content", () => {
  it("captures the core business details for launch", () => {
    expect(siteContent.name).toBe("The Enchanted Collective");
    expect(siteContent.location).toBe("Madison, Indiana");
    expect(siteContent.launchTarget).toBe("June 2026");
    expect(siteContent.vipOffer).toContain("$25 off");
    expect(siteContent.phone).toBe("812-329-2477");
    expect(siteContent.address).toContain("Madison");
  });

  it("defines the primary navigation around the core conversion paths", () => {
    expect(primaryNavigation.map((item) => item.label)).toEqual([
      "Stays",
      "Proposals",
      "Date Night",
      "Packages",
      "Madison Guide",
      "Reviews",
      "FAQ",
      "Contact",
    ]);
  });
});

describe("stays", () => {
  it("defines the four current accommodation options", () => {
    expect(stays).toHaveLength(4);
    const slugs = stays.map((s) => s.slug);
    expect(slugs).toContain("enchanted-cottage");
    expect(slugs).toContain("velvet-buck");
    expect(slugs).toContain("bell-tent-campsite");
    expect(slugs).toContain("bring-your-own-tent");
  });

  it("gives every stay a full description, highlights, and amenities", () => {
    for (const stay of stays) {
      expect(stay.description.length).toBeGreaterThan(0);
      expect(stay.highlights.length).toBeGreaterThan(0);
      expect(stay.amenities.length).toBeGreaterThan(0);
    }
  });

  it("marks the bell-tent campsite as dog-friendly", () => {
    const bellTent = stays.find((s) => s.slug === "bell-tent-campsite");
    expect(bellTent?.dogs).toBe(true);
  });
});

describe("experiences", () => {
  it("offers three proposal tiers from entry to premium", () => {
    const { packages } = experienceCollections.proposals;
    expect(packages).toHaveLength(3);
    expect(packages.map((p) => p.tier)).toEqual(["entry", "popular", "premium"]);
  });

  it("prices proposals correctly across the three tiers", () => {
    const { packages } = experienceCollections.proposals;
    expect(packages[0].price).toBe("$249");
    expect(packages[1].price).toBe("$399");
    expect(packages[2].price).toBe("$599");
  });

  it("offers three date night tiers from entry to premium", () => {
    expect(experienceCollections.dateNight.packages).toHaveLength(3);
  });

  it("offers three day-use hot tub tiers", () => {
    expect(experienceCollections.dayUse.packages).toHaveLength(3);
  });

  it("includes the Tranquility Escape as the entry hot tub option", () => {
    const names = experienceCollections.dayUse.packages.map((p) => p.name);
    expect(names).toContain("Tranquility Escape");
  });
});

describe("stay packages (add-ons)", () => {
  it("defines the five bookable add-on packages", () => {
    expect(stayPackages).toHaveLength(5);
    const slugs = stayPackages.map((p) => p.slug);
    expect(slugs).toContain("classic-romance");
    expect(slugs).toContain("ultimate-romance");
    expect(slugs).toContain("outdoor-movie");
    expect(slugs).toContain("picnic-and-ride");
    expect(slugs).toContain("smores-skillet");
  });

  it("gives every package a price and at least one include", () => {
    for (const pkg of stayPackages) {
      expect(pkg.price).toBeTruthy();
      expect(pkg.includes.length).toBeGreaterThan(0);
    }
  });
});

describe("reviews", () => {
  it("has the three verified guest reviews", () => {
    expect(reviews).toHaveLength(3);
  });

  it("attributes each review to a named guest with location", () => {
    for (const review of reviews) {
      expect(review.guest).toBeTruthy();
      expect(review.location).toBeTruthy();
      expect(review.body.length).toBeGreaterThan(50);
    }
  });

  it("links Melissa's review to the outdoor movie and romance packages", () => {
    const melissa = reviews.find((r) => r.guest === "Melissa");
    expect(melissa?.packagesUsed).toContain("outdoor-movie");
    expect(melissa?.packagesUsed).toContain("classic-romance");
  });
});

describe("FAQ", () => {
  it("covers at least 10 pre-booking questions", () => {
    expect(faqs.length).toBeGreaterThanOrEqual(10);
  });

  it("spans all five categories", () => {
    const categories = new Set(faqs.map((f) => f.category));
    expect(categories.has("booking")).toBe(true);
    expect(categories.has("checkin")).toBe(true);
    expect(categories.has("amenities")).toBe(true);
    expect(categories.has("policies")).toBe(true);
    expect(categories.has("experiences")).toBe(true);
  });
});

describe("Madison guide", () => {
  it("lists at least 3 attractions", () => {
    expect(madisonGuideContent.attractions.length).toBeGreaterThanOrEqual(3);
  });

  it("includes Clifty Falls and Lanier Mansion", () => {
    const slugs = madisonGuideContent.attractions.map((a) => a.slug);
    expect(slugs).toContain("clifty-falls");
    expect(slugs).toContain("lanier-mansion");
  });
});

describe("SEO defaults", () => {
  it("sets SEO defaults around luxury glamping and romantic escapes", () => {
    expect(seoDefaults.defaultTitle).toContain("Luxury Glamping");
    expect(seoDefaults.defaultDescription).toContain("private hot tubs");
  });
});
