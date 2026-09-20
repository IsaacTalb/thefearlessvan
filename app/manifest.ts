import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Joshua Van — The Fearless", short_name: "The Fearless", description: "The digital home of Joshua Van.", start_url: "/", display: "standalone", background_color: "#080808", theme_color: "#ff3b30", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
