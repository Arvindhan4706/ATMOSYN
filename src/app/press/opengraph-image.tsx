import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn Press & Media Kit — Brand Assets & Boilerplate";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Press & Media", title: "Press kit." });
}

