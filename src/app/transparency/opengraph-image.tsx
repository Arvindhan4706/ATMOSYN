import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn Transparency Record — Accountability & Proof";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Transparency", title: "Proof over claims." });
}

