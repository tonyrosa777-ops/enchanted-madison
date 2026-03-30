import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Allura: () => ({ variable: "font-accent" }),
  Cormorant_Garamond: () => ({ variable: "font-heading" }),
  Source_Sans_3: () => ({ variable: "font-body" }),
}));

import { metadata as contactMetadata } from "./contact/page";
import ContactPage from "./contact/page";
import { metadata as dateNightMetadata } from "./date-night/page";
import DateNightPage from "./date-night/page";
import HomePage from "./page";
import { metadata as faqMetadata } from "./faq/page";
import FaqPage from "./faq/page";
import { metadata as guideMetadata } from "./madison-guide/page";
import MadisonGuidePage from "./madison-guide/page";
import { metadata as packagesMetadata } from "./packages/page";
import PackagesPage from "./packages/page";
import { metadata as proposalsMetadata } from "./proposals/page";
import ProposalsPage from "./proposals/page";
import { metadata as reviewsMetadata } from "./reviews/page";
import ReviewsPage from "./reviews/page";
import { metadata as staysMetadata } from "./stays/page";
import StaysPage from "./stays/page";
import { metadata as rootMetadata } from "./layout";
import RootLayout from "./layout";

describe("app shell", () => {
  it("wraps pages in a branded header and footer", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>,
    );

    expect(markup).toContain("The Enchanted Collective");
    expect(markup).toContain("Unlock VIP Access");
    expect(markup).toContain("Check Dates");
    expect(markup).toContain("enchantedcollective47250@gmail.com");
  });

  it("uses the project SEO defaults in root metadata", () => {
    expect(rootMetadata.description).toContain("private hot tubs");
  });
});

describe("route skeletons", () => {
  it("replaces the starter homepage with a branded landing shell", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).toContain("Where Romance");
    expect(markup).toContain("Meets the Wild");
    expect(markup).toContain("Early Access");
    expect(markup).not.toContain("To get started, edit the page.tsx file.");
  });

  it("defines the stays route", () => {
    expect(staysMetadata.title).toBe("Stays");
    expect(renderToStaticMarkup(<StaysPage />)).toContain("<h1");
  });

  it("defines the proposals route", () => {
    expect(proposalsMetadata.title).toBe("Proposals");
    expect(renderToStaticMarkup(<ProposalsPage />)).toContain("She deserves a moment");
  });

  it("defines the date-night route", () => {
    expect(dateNightMetadata.title).toBe("Date Night");
    expect(renderToStaticMarkup(<DateNightPage />)).toContain("Forget dinner and a movie");
  });

  it("defines the packages route", () => {
    expect(packagesMetadata.title).toBe("Packages");
    expect(renderToStaticMarkup(<PackagesPage />)).toContain("Add to your escape");
  });

  it("defines the Madison guide route", () => {
    expect(guideMetadata.title).toBe("Madison Guide");
    expect(renderToStaticMarkup(<MadisonGuidePage />)).toContain("There is more to explore");
  });

  it("defines the reviews route", () => {
    expect(reviewsMetadata.title).toBe("Reviews");
    expect(renderToStaticMarkup(<ReviewsPage />)).toContain("Reviews from couples");
  });

  it("defines the FAQ route", () => {
    expect(faqMetadata.title).toBe("FAQ");
    expect(renderToStaticMarkup(<FaqPage />)).toContain("Everything you need to know");
  });

  it("defines the contact route", () => {
    expect(contactMetadata.title).toBe("Contact");
    expect(renderToStaticMarkup(<ContactPage />)).toContain("Tell us what you");
  });
});
