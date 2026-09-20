import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/story", "/fights", "/media", "/partners", "/contact"];
  return routes.map((route, index) => ({ url: `https://thefearlessvan.com${route}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : .8 }));
}
