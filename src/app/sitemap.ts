import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static content-update date instead of build time, so crawlers see a
  // meaningful lastModified value (bump siteConfig.lastContentUpdate on
  // substantive content changes).
  const lastModified = new Date(siteConfig.lastContentUpdate).toISOString();

  const routes = [
    "",
    "/about",
    "/work",
    "/research",
    "/collaboration",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
