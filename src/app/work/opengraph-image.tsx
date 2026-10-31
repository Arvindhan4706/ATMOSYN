import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn work — explorations and research design";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Portfolio", title: "Our work." });
}
