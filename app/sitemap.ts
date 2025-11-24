import { MetadataRoute } from "next";
import { toolDetails } from "@/app/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://versionhub.vercel.app";

  // 1. Static Routes
  const routes = ["", "/categories", "/api"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // 2. Dynamic Tool Routes (Generated from your data)
  const toolRoutes = Object.keys(toolDetails).map((slug) => ({
    url: `${baseUrl}/tool/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...toolRoutes];
}
