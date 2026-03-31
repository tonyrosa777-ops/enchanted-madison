// robots.ts — robots.txt for enchantedmadison.com
// Allows all crawlers. Points to sitemap. Disallows API routes.

import type { MetadataRoute } from "next";
import { siteData } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `https://${siteData.domain}/sitemap.xml`,
    host: `https://${siteData.domain}`,
  };
}
