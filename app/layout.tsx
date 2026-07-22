import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  IBM_Plex_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbeforecloud.com"),
  title: {
    default: "Tim Roberts: From Whackoland and Savvis to Intira and Platformz",
    template: "%s | Built Before Cloud",
  },
  description:
    "The firsthand, research-supported story of Timothy Roberts—from the Wacko Cracko Brothers and Whackoland BBS to Savvis, Intira’s NetSourcing model and Platformz, the enterprise operating infrastructure his entire life prepared him to build.",
  openGraph: {
    siteName: "Built Before Cloud",
    type: "website",
    locale: "en_US",
    url: "https://builtbeforecloud.com",
    title: "Tim Roberts: From Whackoland and Savvis to Intira and Platformz",
    description:
      "The firsthand, research-supported story of Timothy Roberts—from Whackoland BBS and the earliest digital communities to Savvis, Intira and Platformz, the enterprise operating infrastructure built from a lifetime of connecting people, systems and businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} ${sourceSerif.variable} antialiased`}
      >
        <AnnouncementBar />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
