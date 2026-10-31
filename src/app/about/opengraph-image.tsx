import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Atmosyn — climate mission and charter";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "About", title: "About atmosyn." });
}
