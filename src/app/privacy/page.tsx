import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Ethics — GDPR & CCPA Compliant",
  description: "Comprehensive privacy disclosures, data ethics policy, and regulatory compliance (GDPR, CCPA) for Atmosyn.",
};

const lastUpdated = "October 20, 2026";
const effectiveDate = "October 20, 2026";

export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="narrow">
          <div className="space-y-4">
            <div className="utility-label text-[#86b847]">
              Governance & Compliance
            </div>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              PRIVACY.
            </h1>
            <p className="text-xl text-[#1e2622]/80 leading-relaxed font-normal pt-2">
              Atmosyn is committed to privacy, transparency, and data minimization. We collect only what
              is necessary to collaborate and conduct verified research.
            </p>
            <p className="text-xs text-[#1e2622]/50">
              Last updated: {lastUpdated} · Effective: {effectiveDate} · Version 1.0
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#86b847]">
                GDPR Compliance
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                Lawful basis: Legitimate interest & consent. Data subject rights honored per Art. 15-22.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#86b847]">
                CCPA/CPRA Compliance
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                No sale of personal information. Right to know, delete, opt-out honored per §1798.100+.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#86b847]">
                ePrivacy Directive
              </h3>
              <p className="text-sm text-[#1e2622]/80">
                No non-essential cookies. No tracking scripts. Consent not required for essential operation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container size="narrow">
          <div className="space-y-12 text-[#1e2622]/80 text-base leading-relaxed font-normal">
            <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-2">
              <h2 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                No Third-Party Advertising or Tracking Cookies
              </h2>
              <p className="text-sm">
                This website does not load behavioral tracking scripts, cross-site profiling trackers, or
                advertising networks. We do not sell or monetize visitor data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                1. Information We Collect
              </h2>
              <p>
                When you voluntarily submit a collaboration inquiry via our official form, we collect the
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
                We do <strong>not</strong> collect: IP addresses beyond standard server logs (retained 30 days),
                browser fingerprints, location data, behavioral analytics, or any automated profiling data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                2. Lawful Basis for Processing (GDPR Art. 6)
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>Legitimate Interest (Art. 6(1)(f)):</strong> Evaluating collaboration proposals, facilitating mentorship, coordinating research partnerships.</p>
                <p><strong>Consent (Art. 6(1)(a)):</strong> Newsletter subscriptions (explicit opt-in), optional communications preferences.</p>
                <p><strong>Contract Performance (Art. 6(1)(b)):</strong> Processing inquiries necessary for potential collaboration agreements.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                3. How We Use Submitted Information
              </h2>
              <p>
                The information you submit is used solely to evaluate collaboration viability, facilitate
                mentorship, and coordinate academic or technical partnerships. We never share, rent, or trade
                your contact details with external commercial third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                4. Data Retention & Deletion
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>Collaboration inquiries:</strong> Retained for 2 years from last contact, then anonymized or deleted.</p>
                <p><strong>Newsletter subscriptions:</strong> Retained until unsubscription (immediate deletion upon opt-out).</p>
                <p><strong>Server access logs:</strong> Retained 30 days for security and debugging, then purged.</p>
                <p><strong>Research data:</strong> Environmental telemetry data is anonymized at collection; no personal identifiers stored.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                5. Your Rights (GDPR Arts. 15-22, CCPA §1798.100+)
              </h2>
              <div className="space-y-2 text-sm">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Access</strong> — Request a copy of your personal data we hold.</li>
                  <li><strong>Rectification</strong> — Correct inaccurate or incomplete data.</li>
                  <li><strong>Erasure ("Right to be Forgotten")</strong> — Request deletion of your data.</li>
                  <li><strong>Restriction</strong> — Limit processing of your data.</li>
                  <li><strong>Portability</strong> — Receive your data in a structured, machine-readable format.</li>
                  <li><strong>Objection</strong> — Object to processing based on legitimate interest.</li>
                  <li><strong>Withdraw Consent</strong> — For newsletter subscriptions (at any time).</li>
                </ul>
                <p className="pt-2">
                  To exercise any right, email <code className="font-mono bg-[#fdfbf7] px-1.5 py-0.5 rounded border border-[#1e2622]/10">privacy@atmosyn.org</code> or use our collaboration inquiry portal.
                  We respond within 30 days (GDPR) / 45 days (CCPA).
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                6. Open Environmental Data Standards
              </h2>
              <p>
                Environmental telemetry data generated during research projects is anonymized and adheres
                strictly to open-access scientific standards without capturing personal identifier data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                7. Data Inquiries & Corrections
              </h2>
              <p>
                To request review, modification, or deletion of any information previously submitted to
                Atmosyn, please contact the project coordination team via our collaboration inquiry portal
                or email <code className="font-mono bg-[#fdfbf7] px-1.5 py-0.5 rounded border border-[#1e2622]/10">privacy@atmosyn.org</code>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                8. International Data Transfers
              </h2>
              <p className="text-sm">
                Atmosyn is based in the United States. If you are in the EEA/UK, your data may be processed
                in the US. We rely on Standard Contractual Clauses and your explicit consent for such transfers.
                No data is transferred to countries without adequate protection without appropriate safeguards.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                9. Security Measures
              </h2>
              <div className="space-y-2 text-sm">
                <p>• TLS 1.3 encryption for all data in transit</p>
                <p>• Encrypted storage for submitted form data (AES-256 at rest)</p>
                <p>• Access limited to authorized functional leads only</p>
                <p>• Regular security reviews and vulnerability assessments</p>
                <p>• No third-party analytics or tracking scripts loaded</p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                10. Children's Privacy
              </h2>
              <p className="text-sm">
                Our services are not directed to individuals under 16. We do not knowingly collect personal
                information from children. If you believe a minor has submitted data, contact us immediately
                for deletion.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                11. Changes to This Policy
              </h2>
              <p className="text-sm">
                We may update this policy to reflect regulatory changes or operational improvements.
                Material changes will be posted here with a revised "Last updated" date. Continued use
                after changes constitutes acceptance. For material changes affecting rights, we will
                provide direct notice (email) where feasible.
              </p>
            </div>

            <div className="space-y-3 pt-8 border-t border-[#1e2622]/10">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                12. Contact
              </h2>
              <div className="space-y-2 text-sm">
                <p><strong>Data Protection Officer:</strong> privacy@atmosyn.org</p>
                <p><strong>Postal:</strong> Atmosyn Research Collective, 1200 Climate Innovation Drive, Suite 400, Boulder, CO 80301, USA</p>
                <p><strong>Supervisory Authority (EEA):</strong> You may lodge a complaint with your local data protection authority.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
