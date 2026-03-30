import { describe, expect, it } from "vitest";

import { experienceCollections } from "./experiences";
import { primaryNavigation } from "./navigation";
import { seoDefaults } from "./seo";
import { siteContent } from "./site";
import { stays } from "./stays";

describe("site content", () => {
  it("captures the core business details for launch", () => {
    expect(siteContent.name).toBe("The Enchanted Collective");
    expect(siteContent.location).toBe("Madison, Indiana");
    expect(siteContent.launchTarget).toBe("June 2026");
    expect(siteContent.vipOffer).toContain("$25 off");
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

  it("structures the four current stay offerings", () => {
    expect(stays).toHaveLength(4);
    expect(stays.find((stay) => stay.slug === "velvet-buck")?.startingRate).toBe(
      "$195/night",
    );
  });

  it("includes romance-led experience collections for overnight and day-use revenue", () => {
    expect(experienceCollections.proposals.packages).toHaveLength(2);
    expect(experienceCollections.dayUse.packages.map((item) => item.name)).toContain(
      "2-Hour Hot Tub Escape",
    );
  });

  it("sets SEO defaults around luxury glamping and romantic escapes", () => {
    expect(seoDefaults.defaultTitle).toContain("Luxury Glamping");
    expect(seoDefaults.defaultDescription).toContain("private hot tubs");
  });
});
