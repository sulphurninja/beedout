import type { MetadataRoute } from "next";

const BASE = "https://beedout.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/businesses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/community`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/bootcamps`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
