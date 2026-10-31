import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATMOSYN — Nature × Technology × Innovation",
    short_name: "ATMOSYN",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#fdfbf7",
    icons: [
      {
        src: "/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo-mark.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        // Logo pre-padded into the 80% maskable safe zone so Android does
        // not clip it behind circular/squircle launch masks.
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
