import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";

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
  title: {
    template: siteData.seo.titleTemplate,
    default: siteData.seo.defaultTitle,
  },
  description: siteData.seo.defaultDescription,
  openGraph: {
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    siteName: siteData.name,
    images: [{ url: siteData.seo.ogImage }],
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
        {children}
      </body>
    </html>
  );
}
