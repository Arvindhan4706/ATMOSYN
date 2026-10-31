import Script from "next/script";

/**
 * Privacy-friendly, cookie-free analytics (Plausible), gated behind an env
 * var so nothing is loaded and no request leaves the browser until the
 * account exists. Because Plausible sets no cookies, no cookie banner is
 * required. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. "atmosyn.org") to enable.
 *
 * NOTE: when enabled, also allow https://plausible.io in the
 * Content-Security-Policy-Report-Only header in next.config.ts.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      strategy="afterInteractive"
      src="https://plausible.io/js/script.js"
      data-domain={domain}
    />
  );
}
