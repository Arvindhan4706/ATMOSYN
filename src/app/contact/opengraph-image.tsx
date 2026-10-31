import { pageOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Atmosyn — official inquiries";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return pageOgImage({ eyebrow: "Official Inquiries", title: "Contact us." });
}
