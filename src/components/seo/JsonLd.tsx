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

/**
 * FAQPage schema built from the same faqs array the page renders, so the
 * structured data can never drift from the visible content.
 */
export function faqSchema(
  faqs: { question: string; answer: string }[],
  pagePath: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: `${siteConfig.url}${pagePath}`,
  };
}

/** Article schema for a published news post. */
export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/news/${post.slug}`,
  };
}
