import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn people and collaboration — leadership and mentorship";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "People", title: "Grow together." });
}
