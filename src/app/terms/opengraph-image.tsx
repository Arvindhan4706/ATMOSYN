import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Atmosyn Terms of Use — Academic & Open Access Terms";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Legal", title: "Terms of use." });
}

