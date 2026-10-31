import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn research — open research themes and lifecycle";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Research & Innovation", title: "Open research." });
}
