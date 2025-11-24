import { MetadataRoute } from "next";
import { toolDetails } from "@/app/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Fetch from Env, fallback to your hardcoded Vercel URL just in case
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://versionhubs.vercel.app";

  // 2. Static Routes
  const routes = ["", "/categories", "/api"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // 3. Dynamic Tool Routes
  const toolRoutes = Object.keys(toolDetails).map((slug) => ({
    url: `${baseUrl}/tool/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...toolRoutes];
}
