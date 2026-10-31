import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ATMOSYN — Nature × Technology × Innovation",
    short_name: "ATMOSYN",
    description:
      "Atmosyn brings people, research, and emerging technologies together to explore practical solutions for environmental and climate challenges.",
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
    ],
  };
}
