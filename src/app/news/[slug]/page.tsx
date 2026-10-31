import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { newsPosts } from "@/data/news";
import { JsonLd, nestedBreadcrumbSchema } from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Update Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd
        data={nestedBreadcrumbSchema(
          "News",
          "/news",
          post.title,
          `/news/${post.slug}`
        )}
      />
      <article>
        <Container size="narrow">
          <Link
            href="/news"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] transition-colors mb-8 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
          >
            &larr; All News
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="utility-label text-[#86b847]">{post.category}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]/40">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-[#1e2622]">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#1e2622]/80 leading-relaxed font-normal mt-6 pb-10 border-b border-[#1e2622]/10">
            {post.excerpt}
          </p>

          <div className="pt-10 space-y-6">
            {post.body.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-[#1e2622]/80 leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="pt-12 mt-12 border-t border-[#1e2622]/10 flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/news"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b-2 border-[#86b847] pb-1 hover:text-[#1e2622]/70 transition-colors"
            >
              &larr; Back to News
            </Link>
            <Link
              href="/collaboration#inquiry"
              className="px-8 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
            >
              Collaborate With Us
            </Link>
          </div>
        </Container>
      </article>
    </div>
  );
}
