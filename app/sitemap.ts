import type { MetadataRoute } from "next";
import { people } from "@/lib/people";
import { archiveItems } from "@/lib/archive";

export const dynamic = "force-static";

const BASE = "https://builtbeforecloud.com";

const staticRoutes = [
  "",
  "/origin",
  "/whackoland",
  "/savvis",
  "/intira",
  "/the-missing-pieces",
  "/platformz",
  "/platformz/technology",
  "/timeline",
  "/people",
  "/archive",
  "/about-tim",
  "/store",
  "/sources",
  "/corrections",
  "/contribute",
  "/contact",
  "/legal",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route}`,
      lastModified: new Date(),
    })),
    ...people.map((p) => ({
      url: `${BASE}/people/${p.slug}`,
      lastModified: new Date(),
    })),
    ...archiveItems.map((i) => ({
      url: `${BASE}/archive/${i.slug}`,
      lastModified: new Date(),
    })),
  ];
}
