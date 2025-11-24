import { Categories } from "@/app/components/Categories";
import { Hero } from "@/app/components/Hero";
import { RecentUpdates } from "@/app/components/RecentUpdates";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://versionhub.vercel.app"), // Replace with your actual domain later
  title: {
    default: "VersionHub | The Source of Truth for Software Versions",
    template: "%s | VersionHub", // This adds "| VersionHub" to child pages automatically
  },
  description:
    "Track the latest versions, release notes, and changelogs for programming languages, frameworks, and developer tools. Open source and free.",
  keywords: [
    "software versions",
    "changelog",
    "release notes",
    "developer tools",
    "nextjs version",
    "python version",
  ],
  authors: [
    { name: "Deepakk Vishwakarma", url: "https://imdeepss.vercel.app" },
  ],
  creator: "Deepakk Vishwakarma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://versionhub.vercel.app",
    title: "VersionHub",
    description: "The open-source source of truth for software versions.",
    siteName: "VersionHub",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bgMain relative selection:bg-accent selection:text-white">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#272B36 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative z-10">
        <Hero />

        <div className="max-w-7xl mx-auto px-6">
          {/* 1. Categories Grid */}
          <Categories />

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-borderMain to-transparent my-12"></div>

          {/* 2. Updates & Trending */}
          <RecentUpdates />
        </div>
      </div>
    </main>
  );
}
