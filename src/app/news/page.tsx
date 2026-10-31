import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { newsPosts } from "@/data/news";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "News — Build Log & Announcements",
  description:
    "Dated, factual updates from Atmosyn: launches, research milestones, and how our exploratory work progresses.",
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
  const hasPosts = posts.length > 0;

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("News", "/news")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              {hasPosts
                ? `Build Log · Updated ${formatDate(posts[0].date)}`
                : "Build Log · Status: In Progress"}
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              NEWS.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              Dated, factual updates on what we are building and where each effort
              actually stands. No launch theatre.
            </p>
            {hasPosts && (
              <a
                href="/rss.xml"
                className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b border-[#86b847] pb-1 hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
              >
                Subscribe via RSS &rarr;
              </a>
            )}
          </div>
        </Container>
      </section>

      <section>
        <Container size="wide">
          {hasPosts ? (
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
          ) : (
            /* Honest empty state: no announcements exist yet, so none are shown. */
            <div className="max-w-4xl p-10 sm:p-14 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-5 text-center">
              <div className="utility-label text-[#86b847]">Under Processing</div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink-gradient">
                No updates published yet.
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal max-w-xl mx-auto">
                This feed is active but empty. We publish here only when something
                real has happened — a milestone reached, a charter revision, a
                research result — never to fill space. Follow the progress record
                on our About page in the meantime.
              </p>
              <div className="pt-2">
                <Link
                  href="/about#milestones"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                >
                  View Progress Record
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
