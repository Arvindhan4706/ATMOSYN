import React from "react";
import { siteConfig } from "@/data/siteConfig";

/** Renders a JSON-LD structured-data block. Pass plain serializable data. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * BreadcrumbList schema for a page directly under the home page.
 * Home is always position 1; the page itself is position 2.
 */
export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteConfig.url}${path}`,
      },
    ],
  };
}

/**
 * BreadcrumbList schema for a nested page (e.g. a news post):
 * Home → parent → current page.
 */
export function nestedBreadcrumbSchema(
  parentName: string,
  parentPath: string,
  currentName: string,
  currentPath: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: parentName,
        item: `${siteConfig.url}${parentPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentName,
        item: `${siteConfig.url}${currentPath}`,
      },
    ],
  };
}
