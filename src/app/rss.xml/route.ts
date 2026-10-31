import { siteConfig } from "@/data/siteConfig";
import { newsPosts } from "@/data/news";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const items = [...newsPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => {
      const url = `${siteConfig.url}/news/${post.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(post.date + "T00:00:00").toUTCString()}</pubDate>`,
        `      <description>${escapeXml(post.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(siteConfig.name)} News</title>`,
    `    <link>${siteConfig.url}/news</link>`,
    `    <description>${escapeXml(siteConfig.description)}</description>`,
    "    <language>en</language>",
    `    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>`,
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
