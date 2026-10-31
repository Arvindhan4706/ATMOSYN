import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn news — build log and announcements";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Build Log", title: "News." });
}
