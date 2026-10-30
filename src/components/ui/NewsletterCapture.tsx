"use client";

import React, { useState } from "react";

export function NewsletterCapture({ variant = "footer" }: { variant?: "footer" | "cta" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setMessage(data.message || "Thanks for subscribing!");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className={isFooter ? "space-y-4" : "flex flex-col sm:flex-row gap-4"} noValidate>
      <div className={isFooter ? "space-y-2" : "flex-1"}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className={`w-full px-4 py-3 ${isFooter ? "bg-[#fdfbf7] border border-[#1e2622]/10 rounded-full" : "bg-[#fdfbf7] border border-[#1e2622]/10 rounded-full"} text-sm font-medium text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847] disabled:opacity-50`}
          placeholder="Enter your email"
          aria-describedby={status === "success" ? "newsletter-success" : status === "error" ? "newsletter-error" : undefined}
        />
        {(status === "success" || status === "error") && (
          <p id={status === "success" ? "newsletter-success" : "newsletter-error"} className={`text-xs mt-1 ${status === "success" ? "text-[#86b847]" : "text-red-500"}`} role="alert">
            {message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading" || status === "success" || !email}
        className={`px-6 py-3 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-xs uppercase tracking-[0.2em] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isFooter ? "w-full sm:w-auto" : "whitespace-nowrap"}`}
      >
        {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
}