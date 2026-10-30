"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { Mail, MapPin, Key, Copy, Check } from "lucide-react";

const pgpPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2

mQINBF3z9CABEADR5K7XJ9V8Y7Z3K2P1Q6W4R8T9U0V1W2X3Y4Z5A6B7C8D9E0
F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7G8H9I0J1
K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2
P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3
U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8T9U0V1W2X3Y4
Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5
E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6
J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7
O8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7S8
T9U0V1W2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7W8X9
Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0
D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7E8F9G0H1
I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1M2
=Atmos
-----END PGP PUBLIC KEY BLOCK-----`;

export default function ContactPage() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              Official Inquiries
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              CONTACT.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              We welcome academic proposals, student inquiries, and institutional discussions focused
              on environmental technology and collaborative research.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Primary Route */}
            <div className="p-10 sm:p-14 rounded-[24px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-6">
              <span className="utility-label text-[#86b847]">
                Primary Inquiry Route
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622]">
                Collaboration & Research Proposals
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                For research proposals, mentorship questions, or exploratory technical discussions,
                please submit your details through our collaboration inquiry portal.
              </p>
              <div className="pt-4">
                <Link
                  href="/collaboration#inquiry"
                  className="inline-block px-8 py-4 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                >
                  Go to Collaboration Form &rarr;
                </Link>
              </div>
            </div>

            {/* Administrative Notice */}
            <div className="p-10 sm:p-14 rounded-[24px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-6">
              <span className="utility-label text-[#1e2622]/50">
                Administrative Channels
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622]">
                Official Channel Configuration
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                {siteConfig.contactConfig.channelNotice}
              </p>
              <div className="pt-4 border-t border-[#1e2622]/10 space-y-2">
                <span className="utility-label text-[#1e2622]/50">
                  Channel Provisioning Checklist:
                </span>
                <ul className="space-y-1.5 text-xs text-[#1e2622]/80 font-bold uppercase tracking-wider">
                  <li>· Official domain email accounts (@atmosyn.org)</li>
                  <li>· Registered physical communications address</li>
                  <li>· Verified institutional publications repository</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-28 border-t border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Direct Channels
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              CHANNELS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#86b847]" aria-hidden="true" />
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                  Email
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <code className="text-sm font-mono text-[#1e2622]/80 bg-[#fdfbf7] px-3 py-2 rounded border border-[#1e2622]/10 flex-1">
                    research@atmosyn.org
                  </code>
                  <button
                    onClick={() => copyToClipboard("research@atmosyn.org")}
                    className="px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] border border-[#1e2622]/20 rounded transition-colors"
                    aria-label="Copy research email"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-[#1e2622]/60">
                  Primary channel for research proposals, technical inquiries, and academic collaboration.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <code className="text-sm font-mono text-[#1e2622]/80 bg-[#fdfbf7] px-3 py-2 rounded border border-[#1e2622]/10 flex-1">
                  students@atmosyn.org
                </code>
                <button
                  onClick={() => copyToClipboard("students@atmosyn.org")}
                  className="px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] border border-[#1e2622]/20 rounded transition-colors"
                  aria-label="Copy students email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-[#1e2622]/60">
                Dedicated channel for student mentorship applications and sprint inquiries.
              </p>
            </div>

            {/* Physical Address */}
            <div className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#86b847]" aria-hidden="true" />
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                  Physical Address
                </h3>
              </div>
              <address className="not-italic text-sm text-[#1e2622]/80 leading-relaxed space-y-1">
                <div>Atmosyn Research Collective</div>
                <div>1200 Climate Innovation Drive</div>
                <div>Suite 400, Research Park</div>
                <div>Boulder, CO 80301, USA</div>
              </address>
              <p className="text-xs text-[#1e2622]/60 pt-2 border-t border-[#1e2622]/10">
                For formal correspondence, legal notices, and institutional mail.
                <br />
                Please reference "Atmosyn Inquiry" on all physical mail.
              </p>
            </div>

            {/* PGP Key */}
            <div className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
              <div className="flex items-center gap-3">
                <Key className="w-6 h-6 text-[#86b847]" aria-hidden="true" />
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                  PGP Public Key
                </h3>
              </div>
              <p className="text-xs text-[#1e2622]/60">
                For encrypted communications. Fingerprint: <code className="font-mono">A1B2 C3D4 E5F6 7890 ABCD EF12 3456 7890 ABCD EF12</code>
              </p>
              <div className="relative">
                <pre className="text-[9px] font-mono text-[#1e2622]/70 bg-[#fdfbf7] border border-[#1e2622]/10 rounded p-4 overflow-x-auto max-h-48 overflow-y-auto">
                  {pgpPublicKey}
                </pre>
                <button
                  onClick={() => copyToClipboard(pgpPublicKey)}
                  className="absolute top-3 right-3 px-2 py-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] border border-[#1e2622]/20 rounded transition-colors"
                  aria-label="Copy PGP public key"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <a
                href="/pgp-key.asc"
                download
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] border-b border-[#86b847] pb-0.5 transition-colors inline-flex items-center gap-1"
              >
                <Key className="w-3 h-3" aria-hidden="true" />
                Download .asc file
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Response Time Expectations */}
      <section className="py-24 bg-[#f4f0e6]">
        <Container size="narrow">
          <div className="p-8 rounded-[20px] bg-[#fdfbf7] border border-[#1e2622]/10 text-center space-y-6">
            <div className="utility-label text-[#86b847]">Response Standards</div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2622]">
              Expected Response Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#1e2622]/80">
              <div className="p-4 bg-[#f4f0e6] rounded-[12px]">
                <p className="font-bold text-[#86b847]">Collaboration Form</p>
                <p>5-10 business days</p>
              </div>
              <div className="p-4 bg-[#f4f0e6] rounded-[12px]">
                <p className="font-bold text-[#86b847]">Direct Email</p>
                <p>3-7 business days</p>
              </div>
              <div className="p-4 bg-[#f4f0e6] rounded-[12px]">
                <p className="font-bold text-[#86b847]">Student Inquiries</p>
                <p>7-14 business days</p>
              </div>
            </div>
            <p className="text-xs text-[#1e2622]/50">
              All inquiries are reviewed by functional leads. Complex proposals may require additional review time.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
