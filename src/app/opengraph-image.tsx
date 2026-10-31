import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "ATMOSYN — Nature × Technology × Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  // Read the brand logo from /public at build time and embed it as a data
  // URI, so the OG image needs no network access or bundled fonts.
  const logo = fs.readFileSync(path.join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdfbf7",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={720}
          height={549}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
