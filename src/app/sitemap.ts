import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { newsPosts } from "@/data/news";

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
    "/news",
    "/contact",
    "/privacy",
    "/terms",
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

  const newsRoutes = newsPosts.map((p) => ({
    url: `${siteConfig.url}/news/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes, ...newsRoutes];
}
