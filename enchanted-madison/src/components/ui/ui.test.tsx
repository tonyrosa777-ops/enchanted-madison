import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { experienceCollections } from "../../content/experiences";
import { stays } from "../../content/stays";
import { BookingEntry } from "./BookingEntry";
import { Button } from "./Button";
import { PropertyCard } from "./PropertyCard";
import { SectionHeading } from "./SectionHeading";
import { TrustBar } from "./TrustBar";

describe("ui primitives", () => {
  it("renders the button variants with the expected labels", () => {
    const markup = renderToStaticMarkup(
      <>
        <Button href="/stays">Check Dates</Button>
        <Button href="/vip" variant="secondary">
          Unlock VIP Access
        </Button>
        <Button href="/faq" variant="ghost">
          View FAQ
        </Button>
      </>,
    );

    expect(markup).toContain("Check Dates");
    expect(markup).toContain("Unlock VIP Access");
    expect(markup).toContain("View FAQ");
  });

  it("renders the section heading with an accent line and body copy", () => {
    const markup = renderToStaticMarkup(
      <SectionHeading
        eyebrow="Enchanted Madison"
        title="Where Romance Meets the Wild"
        description="Luxury glamping, private hot tubs, and curated experiences in the woods of Madison, Indiana."
      />,
    );

    expect(markup).toContain("Enchanted Madison");
    expect(markup).toContain("Where Romance Meets the Wild");
    expect(markup).toContain("Luxury glamping, private hot tubs");
  });

  it("renders a property card with visible pricing and highlights", () => {
    const markup = renderToStaticMarkup(<PropertyCard stay={stays[1]} />);

    expect(markup).toContain("The Velvet Buck");
    expect(markup).toContain("$195/night");
    expect(markup).toContain("Private hot tub");
  });

  it("renders a trust bar with direct-booking proof statements", () => {
    const markup = renderToStaticMarkup(<TrustBar />);

    expect(markup).toContain("Only luxury glamping retreat in the Madison-Clifty Falls corridor");
    expect(markup).toContain("Private hot tubs at every accommodation");
  });

  it("renders the booking entry with stay and experience options", () => {
    const markup = renderToStaticMarkup(
      <BookingEntry
        stayOptions={stays}
        experienceOptions={[
          ...experienceCollections.proposals.packages,
          ...experienceCollections.dayUse.packages,
        ]}
      />,
    );

    expect(markup).toContain("I want to escape to");
    expect(markup).toContain("The Enchanted Cottage");
    expect(markup).toContain("2-Hour Hot Tub Escape");
    expect(markup).toContain("Check Availability");
  });
});
