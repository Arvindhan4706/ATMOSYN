import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { newsPosts } from "@/data/news";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "News — Build Log & Announcements",
  description:
    "Honest, dated updates from Atmosyn: launches, research milestones, and how our exploratory work progresses.",
};

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  const posts = [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("News", "/news")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              Build Log · Updated {formatDate(posts[0].date)}
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              NEWS.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              Dated, factual updates on what we are building and where each effort
              actually stands. No launch theatre.
            </p>
            <a
              href="/rss.xml"
              className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b border-[#86b847] pb-1 hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
            >
              Subscribe via RSS &rarr;
            </a>
          </div>
        </Container>
      </section>

      <section>
        <Container size="wide">
          <div className="space-y-10 max-w-4xl">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/news/${post.slug}`}
                  className="group block p-8 sm:p-10 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#86b847] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  <div className="flex flex-wrap items-center gap-4 pb-4 mb-4 border-b border-[#1e2622]/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847]">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]/40">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622] group-hover:text-[#1e2622]/70 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#1e2622]/80 leading-relaxed font-normal mt-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b border-[#86b847] pb-1">
                    Read Update &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
