import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Josefin_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteData } from "@/data/site";
import { Providers } from "@/components/layout/Providers";

// Google Analytics 4 measurement ID — supplied by Angela in the revisions doc.
// Configurable via NEXT_PUBLIC_GA_ID env var for staging vs prod overrides.
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-1VQ056C1GV";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enchantedcollectivemadison.com"),
  title: {
    template: siteData.seo.titleTemplate,
    default: siteData.seo.defaultTitle,
  },
  description: siteData.seo.defaultDescription,
  openGraph: {
    title: {
      template: siteData.seo.titleTemplate,
      default: siteData.seo.defaultTitle,
    },
    description: siteData.seo.defaultDescription,
    siteName: siteData.name,
    type: "website",
    locale: "en_US",
    url: "https://enchantedcollectivemadison.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteData.name} — Luxury Glamping near Madison, Indiana`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: siteData.seo.titleTemplate,
      default: siteData.seo.defaultTitle,
    },
    description: siteData.seo.defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} ${josefin.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body)", background: "var(--bg-base)" }}
      >
        <Providers>{children}</Providers>
        <Analytics />
        {/* Google Analytics 4 — Angela's measurement ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
