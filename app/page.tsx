import { Categories } from "@/app/components/Categories";
import { Hero } from "@/app/components/Hero";
import { RecentUpdates } from "@/app/components/RecentUpdates";
import { Metadata } from "next";

// 1. Define the Base URL dynamically
const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : "http://localhost:3000";

// OR, if you put "https://" inside your env variable (Recommended):
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  // 2. Use the variable here
  metadataBase: new URL(appUrl),

  title: {
    default: "VersionHub | The Source of Truth for Software Versions",
    template: "%s | VersionHub",
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
    url: appUrl,
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
          <Categories />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-borderMain to-transparent my-12"></div>
          <RecentUpdates />
        </div>
      </div>
    </main>
  );
}
