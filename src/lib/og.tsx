import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared Open Graph image for inner pages, so every shared link preview
 * carries the page's own headline instead of the generic homepage card.
 * Reads the brand logo from /public at build time; no network access.
 */
export function pageOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const logo = fs.readFileSync(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fdfbf7",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={88} height={88} style={{ borderRadius: 18 }} />
          <span
            style={{
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: -1,
              color: "#1e2622",
            }}
          >
            atmosyn
          </span>
          <div
            style={{
              width: 12,
              height: 12,
              marginLeft: 8,
              marginBottom: 14,
              backgroundColor: "#4d7526",
              transform: "rotate(45deg)",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#4d7526",
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontSize: 104,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#1e2622",
            }}
          >
            {title}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(30, 38, 34, 0.75)",
          }}
        >
          <span>Climate Action · People · Research</span>
          <span>atmosyn.org</span>
        </div>
      </div>
    ),
    ogSize
  );
}
