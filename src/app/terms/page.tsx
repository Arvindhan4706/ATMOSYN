import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Use",
  description:
    "Terms governing the use of the Atmosyn website, including content, submissions, and external links.",
};

const lastUpdated = "October 31, 2026";

export default function TermsPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Terms of Use", "/terms")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="narrow">
          <div className="space-y-4">
            <div className="utility-label text-[#4d7526]">Governance & Compliance</div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              TERMS.
            </h1>
            <p className="text-xl text-[#1e2622]/80 leading-relaxed font-normal pt-2">
              These terms govern your use of atmosyn.org and its content. By using
              the site you accept them.
            </p>
            <p className="text-xs text-[#1e2622]/70">Last updated: {lastUpdated} · Version 1.0</p>
          </div>
        </Container>
      </section>

      <section>
        <Container size="narrow">
          <div className="space-y-12 text-[#1e2622]/80 text-base leading-relaxed font-normal">
            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                1. About This Site
              </h2>
              <p className="text-sm">
                atmosyn.org is the official information website of Atmosyn. It describes
                our organization, research framework, and exploratory initiatives. The
                site is provided for general information; no part of it constitutes
                professional, scientific, or investment advice.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                2. Content & Accuracy
              </h2>
              <p className="text-sm">
                We label initiatives with their actual maturity stage and correct errors
                when identified. However, exploratory content — including research
                questions, proposed architectures, and timelines — describes intent, not
                verified results. Do not treat exploratory material as published findings.
                Content is updated periodically; the version date at the top of this page
                reflects the latest revision.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                3. Intellectual Property
              </h2>
              <p className="text-sm">
                Unless stated otherwise, the Atmosyn name, logo, website design, and
                original text are property of Atmosyn and may not be reproduced without
                permission. Third-party images and resources remain the property of their
                respective owners and are used under their respective licenses.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                4. Submissions & Inquiries
              </h2>
              <p className="text-sm">
                Information you submit through the collaboration inquiry portal is handled
                as described in our{" "}
                <Link
                  href="/privacy"
                  className="text-[#4d7526] font-bold underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                . Submitting an inquiry does not create any partnership, employment, or
                fiduciary relationship between you and Atmosyn.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                5. External Links
              </h2>
              <p className="text-sm">
                This site links to external resources (data portals, open-source projects,
                and image providers). We do not control or endorse their content and are
                not responsible for changes they make. Visiting external links is at your
                own discretion.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                6. Limitation of Liability
              </h2>
              <p className="text-sm">
                The website is provided &ldquo;as is&rdquo; without warranties of any kind.
                To the maximum extent permitted by law, Atmosyn shall not be liable for any
                indirect, incidental, or consequential damages arising from your use of this
                site or reliance on its content.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                7. Changes to These Terms
              </h2>
              <p className="text-sm">
                We may revise these terms as the organization evolves. Material changes
                will be posted here with an updated version date. Continued use of the site
                after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div className="space-y-3 pt-8 border-t border-[#1e2622]/10">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                8. Contact
              </h2>
              <p className="text-sm">
                Questions about these terms can be raised through the{" "}
                <Link
                  href="/collaboration#inquiry"
                  className="text-[#4d7526] font-bold underline underline-offset-4"
                >
                  collaboration inquiry portal
                </Link>{" "}
                (select &ldquo;General Institutional Inquiry&rdquo;). Official legal entity
                details will be published here once formal registration is complete.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
