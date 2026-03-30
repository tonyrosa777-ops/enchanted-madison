import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const accentFont = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Enchanted Madison",
  description:
    "Luxury glamping, private hot tubs, and curated romantic escapes near Clifty Falls and historic downtown Madison, Indiana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
