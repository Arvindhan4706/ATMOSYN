"use client";

import React, { useState } from "react";

interface FormState {
  fullName: string;
  email: string;
  affiliation: string;
  pillarInterest: string;
  message: string;
  website: string;
}

export function CollaborationForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    affiliation: "",
    pillarInterest: "people-growth",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/collaboration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.issues) {
          setFieldErrors(data.issues);
        }
        setErrorMessage(data.error || "Please review the highlighted fields below.");
      } else {
        setSuccessMessage(data.message);
        setFormData({
          fullName: "",
          email: "",
          affiliation: "",
          pillarInterest: "people-growth",
          message: "",
          website: "",
        });
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please ensure your connection is active and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="inquiry" className="scroll-mt-28">
      <div className="p-10 sm:p-14 rounded-[24px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-8 shadow-sm">
        <div>
          <div className="utility-label text-[#86b847]">
            Direct Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622] mt-2">
            Collaboration & Mentorship Inquiry
          </h2>
          <p className="text-sm text-[#1e2622]/80 mt-1 font-normal">
            Proposals and inquiries are reviewed by Atmosyn&apos;s functional leads.
          </p>
        </div>

        {successMessage ? (
          <div
            className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#86b847] space-y-4"
            role="alert"
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
              Inquiry Logged Successfully
            </h3>
            <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
              {successMessage}
            </p>
            <button
              onClick={() => setSuccessMessage(null)}
              className="text-xs font-black uppercase tracking-widest text-[#86b847] hover:underline block pt-2"
            >
              Submit another inquiry &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative" noValidate>
            {errorMessage && (
              <div
                className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wide"
                role="alert"
              >
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.fullName}
                  aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                  className="w-full px-4 py-3 bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847]"
                  placeholder="e.g. Alex Rivera"
                />
                {fieldErrors.fullName && (
                  <p id="fullName-error" className="text-xs text-red-500 font-bold">
                    {fieldErrors.fullName[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                  className="w-full px-4 py-3 bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847]"
                  placeholder="name@organization.com"
                />
                {fieldErrors.email && (
                  <p id="email-error" className="text-xs text-red-500 font-bold">
                    {fieldErrors.email[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="affiliation"
                  className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]"
                >
                  Affiliation / University / Role *
                </label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  required
                  value={formData.affiliation}
                  onChange={handleChange}
                  aria-invalid={!!fieldErrors.affiliation}
                  aria-describedby={fieldErrors.affiliation ? "affiliation-error" : undefined}
                  className="w-full px-4 py-3 bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847]"
                  placeholder="e.g. Engineering Student, Tech Institute"
                />
                {fieldErrors.affiliation && (
                  <p id="affiliation-error" className="text-xs text-red-500 font-bold">
                    {fieldErrors.affiliation[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="pillarInterest"
                  className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]"
                >
                  Area of Interest
                </label>
                <select
                  id="pillarInterest"
                  name="pillarInterest"
                  value={formData.pillarInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#1e2622] focus:outline-none focus:border-[#86b847]"
                >
                  <option value="people-growth">Pillar 2: Student Mentorship & Growth</option>
                  <option value="climate-action">Pillar 1: Climate Action & Sustainability</option>
                  <option value="research-innovation">Pillar 3: Research & Emerging Tech</option>
                  <option value="general-inquiry">General Institutional Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]"
              >
                Inquiry Details or Proposal *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                className="w-full px-5 py-4 bg-[#f4f0e6] border border-[#1e2622]/10 rounded-[16px] text-sm text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847]"
                placeholder="Share your background and how you would like to collaborate with Atmosyn..."
              />
              {fieldErrors.message && (
                <p id="message-error" className="text-xs text-red-500 font-bold">
                  {fieldErrors.message[0]}
                </p>
              )}
            </div>

            {/* Honeypot field — visually hidden, only bots fill it. If a value
                arrives the server silently discards the submission. */}
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
