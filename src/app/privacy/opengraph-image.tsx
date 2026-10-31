import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn Privacy Policy — Data Ethics & Rights";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Governance", title: "Privacy policy." });
}

