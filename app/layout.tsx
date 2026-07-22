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
    "The firsthand, research-supported story of Timothy Munro Roberts (Tim Roberts)—from the Wacko Cracko Brothers and Whackoland BBS to Savvis, Intira’s NetSourcing model and Platformz, the enterprise operating infrastructure his entire life prepared him to build.",
  keywords: [
    "Platformz",
    "Platformz Tim Roberts",
    "Platformz Timothy Munro Roberts",
    "Platformz founder",
    "Platformz DIaaS",
    "Platformz enterprise operating system",
    "Platformz Distribution Infrastructure as a Service",
    "Platformz Looking Glass Control Tower",
    "Platformz SaaS Foundry",
    "Timothy Munro Roberts",
    "Tim Roberts",
    "Timothy Roberts",
    "timothymunroroberts.com",
    "Built Before Cloud",
    "Whackoland BBS",
    "W(hack)o Cracko Brothers",
    "Savvis",
    "DiamondNet",
    "Intira",
    "NetSourcing",
    "DIaaS",
    "Looking Glass Control Tower",
    "SaaS Foundry",
    "FUR4",
    "cloud computing history",
    "AI data center",
    "HashingSpace",
    "St. Louis BBS",
    "Phrack",
  ],
  authors: [{ name: "Timothy Munro Roberts", url: "https://builtbeforecloud.com/about-tim" }],
  creator: "Timothy Munro Roberts",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://builtbeforecloud.com/about-tim#person",
  name: "Timothy Munro Roberts",
  alternateName: ["Tim Roberts", "Timothy Roberts"],
  url: "https://builtbeforecloud.com/about-tim",
  jobTitle: "Founder, Platformz",
  worksFor: {
    "@type": "Organization",
    "@id": "https://builtbeforecloud.com/platformz#organization",
    name: "Platformz",
  },
  description:
    "Technology founder: Whackoland BBS, co-founder of Savvis and Intira (NetSourcing), designer of high-density data centers before the AI-data-center category existed, and founder of Platformz, the enterprise operating foundation.",
  knowsAbout: [
    "Platformz",
    "cloud computing",
    "network infrastructure",
    "managed hosting",
    "data center design",
    "AI data centers",
    "enterprise software",
    "digital distribution",
  ],
  sameAs: [
    "https://platformz.us/",
    "https://timothymunroroberts.com/",
    "https://www.youtube.com/watch?v=0LDF9qTTie4",
    "https://www.youtube.com/watch?v=Uu3Cwb14gn8",
  ],
};

const platformzOrgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://builtbeforecloud.com/platformz#organization",
  name: "Platformz",
  url: "https://platformz.us/",
  description:
    "Platformz is the reusable enterprise operating foundation founded by Timothy Munro Roberts (Tim Roberts). Its flagship product is DIaaS (Distribution Infrastructure as a Service), with the Looking Glass Control Tower as its executive command layer and the SaaS Foundry for client-owned software.",
  founder: {
    "@type": "Person",
    "@id": "https://builtbeforecloud.com/about-tim#person",
    name: "Timothy Munro Roberts",
    alternateName: ["Tim Roberts", "Timothy Roberts"],
    url: "https://timothymunroroberts.com/",
  },
  sameAs: [
    "https://builtbeforecloud.com/platformz",
    "https://timothymunroroberts.com/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Built Before Cloud",
  url: "https://builtbeforecloud.com",
  description:
    "The firsthand, research-supported story of Timothy Munro Roberts (Tim Roberts)—from Whackoland BBS to Savvis, Intira and Platformz.",
  author: {
    "@type": "Person",
    "@id": "https://builtbeforecloud.com/about-tim#person",
    name: "Timothy Munro Roberts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(platformzOrgJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
