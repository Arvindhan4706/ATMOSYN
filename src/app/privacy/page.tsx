import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy & Data Ethics",
  description:
    "How Atmosyn collects, uses, and protects information submitted through this website, and what we do not track.",
};

const lastUpdated = "October 30, 2026";

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="narrow">
          <div className="space-y-4">
            <div className="utility-label text-[#4d7526]">
              Governance & Compliance
            </div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              PRIVACY.
            </h1>
            <p className="text-xl text-[#1e2622]/80 leading-relaxed font-normal pt-2">
              Atmosyn is committed to privacy, transparency, and data minimization. We collect only what
              is necessary to evaluate collaboration inquiries, and we do not track visitors.
            </p>
            <p className="text-xs text-[#1e2622]/70">
              Last updated: {lastUpdated} · Version 1.1
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4d7526]">
                No Tracking
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                No cookies, no analytics, no advertising scripts, no fingerprinting. This site works without any of them.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4d7526]">
                Data Minimization
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                We only receive what you type into the inquiry form. There is no user database, profile, or login.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#4d7526]">
                Your Rights
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                Access, correction, and deletion requests are honored. Use the collaboration inquiry form to reach us.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container size="narrow">
          <div className="space-y-12 text-[#1e2622]/80 text-base leading-relaxed font-normal">
            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                1. Information We Collect
              </h2>
              <p>
                When you voluntarily submit a collaboration inquiry via our official form, we receive the
                following information provided directly by you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm font-medium">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Institutional or organizational affiliation</li>
                <li>Selected area of collaborative interest</li>
                <li>Message details and research proposals</li>
              </ul>
              <p className="text-sm pt-2">
                We do <strong>not</strong> collect: browser fingerprints, location data, behavioral
                analytics, advertising identifiers, or any automated profiling data. Standard
                hosting-provider access logs (IP address, request time) exist at the infrastructure
                level and are governed by our hosting provider&apos;s policies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                2. Lawful Basis for Processing
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Legitimate Interest:</strong> Evaluating collaboration proposals,
                  facilitating mentorship, coordinating research partnerships.
                </p>
                <p>
                  <strong>Consent:</strong> You choose to submit the form; you may withdraw by asking
                  us to delete your submission at any time.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                3. How We Use Submitted Information
              </h2>
              <p>
                Submitted information is transmitted to Atmosyn&apos;s internal coordination channel and
                used solely to evaluate collaboration viability, facilitate mentorship, and coordinate
                academic or technical partnerships. We never share, rent, or trade your contact
                details with external commercial third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                4. Data Retention & Deletion
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Collaboration inquiries:</strong> Retained only as long as needed to evaluate
                  the inquiry and any resulting correspondence, then deleted upon request or when the
                  topic is closed.
                </p>
                <p>
                  <strong>Hosting access logs:</strong> Managed by our hosting provider for security
                  and debugging; we do not maintain our own server logs.
                </p>
                <p>
                  <strong>No analytics or cookies:</strong> There is nothing of yours stored in your
                  browser or in an analytics system.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                5. Your Rights
              </h2>
              <div className="space-y-2 text-sm">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Access</strong> — Request a copy of the personal data we hold about you.</li>
                  <li><strong>Rectification</strong> — Correct inaccurate or incomplete data.</li>
                  <li><strong>Erasure</strong> — Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
                  <li><strong>Restriction</strong> — Limit how we process your data.</li>
                  <li><strong>Objection</strong> — Object to processing based on legitimate interest.</li>
                </ul>
                <p className="pt-2">
                  To exercise any right, submit a request through the collaboration inquiry portal
                  (select &ldquo;General Institutional Inquiry&rdquo; and state your request). We will
                  respond within 30 days.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                6. Research & Environmental Data
              </h2>
              <p className="text-sm">
                Atmosyn does not currently operate any sensor networks or collect environmental
                telemetry. When research projects that generate data begin, anonymization and open-data
                standards will be documented here before any collection starts.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                7. Third Parties
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Hosting (Vercel):</strong> Processes requests and standard infrastructure
                  logs under Vercel&apos;s own privacy policy.
                </p>
                <p>
                  <strong>Form delivery:</strong> Submissions are forwarded to our coordination
                  channel. The provider of that channel is contractually bound to use the data only
                  for delivering it to us.
                </p>
                <p>
                  <strong>Fonts &amp; images:</strong> The site self-hosts its typeface; illustrative
                  photography is loaded from Unsplash&apos;s image CDN, which receives your IP address
                  when an image loads.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                8. International Transfers
              </h2>
              <p className="text-sm">
                This website is hosted in the United States, and our team is internationally
                distributed. If you submit an inquiry from the EEA/UK, your data will be processed in
                countries without an adequacy decision; we rely on your explicit consent (via form
                submission) and on the receiving provider&apos;s standard data-protection commitments
                for such transfers.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                9. Security Measures
              </h2>
              <div className="space-y-2 text-sm">
                <p>• TLS encryption for all data in transit</p>
                <p>• Rate limiting, honeypot spam filtering, and server-side input validation on the inquiry form</p>
                <p>• Access to submissions limited to Atmosyn functional leads</p>
                <p>• No third-party analytics, tracking, or advertising scripts loaded</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-sm">
                Our services are not directed to individuals under 16. We do not knowingly collect
                personal information from children. If you believe a minor has submitted data, contact
                us through the collaboration inquiry portal and we will delete it.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                11. Changes to This Policy
              </h2>
              <p className="text-sm">
                We may update this policy to reflect operational changes or regulatory requirements.
                Material changes will be posted here with a revised &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            <div className="space-y-3 pt-8 border-t border-[#1e2622]/10">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                12. Contact
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  Official email channels are currently being provisioned (see the{" "}
                  <Link
                    href="/contact"
                    className="text-[#4d7526] font-bold underline underline-offset-4"
                  >
                    Contact page
                  </Link>{" "}
                  for status). Until then, use the collaboration inquiry portal for any privacy
                  request, including access or deletion of your data.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
