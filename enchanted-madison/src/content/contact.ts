/**
 * Contact page content — address, directions, warm copy, form field definitions.
 * Source: site-copy.md §Location & Contact
 *
 * Design-contract §7 Principle 3: "confidence beats apology"
 * Copy leads with what we can do for you, not generic "submit an inquiry."
 */

export const contactContent = {
  eyebrow: "Get in touch",
  headline: "Tell us what you're celebrating.",
  description:
    "Whether you're planning a stay, a proposal, a date night, or just have a question — we're here. Reach out and we'll get back to you quickly.",

  address: {
    street: "2175 North K Road",
    city: "Madison",
    state: "Indiana",
    zip: "47250",
    country: "United States",
    full: "2175 North K Road, Madison, Indiana 47250",
  },

  phone: ["812-329-2477", "317-421-9131"],
  email: "enchantedcollective47250@gmail.com",

  directions: {
    brief: "From 421, take old SR 62, then right on K Road.",
    landmarks: [
      "About 5 minutes from downtown Madison",
      "About 10 minutes from Clifty Falls State Park",
      "Located on N K Road",
    ],
    whatToLookFor:
      "As you travel on N K Road, watch for the entrance marked by The Enchanted Collective sign near the driveway.",
  },

  /**
   * Form field definitions — used to render the contact form in Phase 3.
   * Form submission connects to email (or a form service like Resend / Formspree)
   * once confirmed by the project owner.
   */
  formFields: [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    { name: "email", label: "Email address", type: "email", required: true },
    { name: "phone", label: "Phone number", type: "tel", required: false },
    {
      name: "celebrationType",
      label: "What are you celebrating?",
      type: "select",
      required: false,
      options: [
        "Anniversary",
        "Proposal / Engagement",
        "Honeymoon",
        "Birthday",
        "Date night",
        "Girls night",
        "Just a getaway",
        "Other",
      ],
    },
    {
      name: "message",
      label: "How can we help?",
      type: "textarea",
      required: true,
      placeholder:
        "Tell us what you have in mind — dates, what you're celebrating, any questions.",
    },
  ],
} as const;
