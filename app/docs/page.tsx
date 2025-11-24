import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import {
  ArrowRight,
  Book,
  GitPullRequest,
  Server,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://versionhubs.vercel.app";
  return (
    <div className="flex flex-col min-h-screen bg-bgMain text-textMain">
      <Navbar />

      <main className="grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
              Learn how VersionHub works, how to use our public API, and how to
              contribute to the open-source data layer.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Card 1: API */}
            <Link
              href="/api"
              className="group p-8 bg-bgCard border border-borderMain rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Public API</h3>
              <p className="text-textMuted mb-6">
                Access version data programmatically. Free for open-source
                projects and commercial use.
              </p>
              <div className="flex items-center text-blue-400 font-medium text-sm">
                Read API Docs{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Contributing */}
            <a
              href="https://github.com/imdeepss/versionhub"
              target="_blank"
              rel="noreferrer"
              className="group p-8 bg-bgCard border border-borderMain rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <GitPullRequest className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Contributing
              </h3>
              <p className="text-textMuted mb-6">
                VersionHub is open source. Help us add new tools or fix version
                data by submitting a PR.
              </p>
              <div className="flex items-center text-purple-400 font-medium text-sm">
                View on GitHub{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Content Section */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Book className="w-6 h-6 text-accent" />
              How it works
            </h2>
            <div className="bg-bgCard border border-borderMain rounded-xl p-8 mb-12">
              <ol className="space-y-6 relative border-l border-borderMain ml-3">
                <li className="ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-bgMain rounded-full ring-4 ring-bgMain border border-borderMain">
                    1
                  </span>
                  <h4 className="font-bold text-white mb-1">Data Collection</h4>
                  <p className="text-textMuted text-sm">
                    We aggregate release data from official registries like NPM,
                    PyPI, Maven, and GitHub Releases.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-bgMain rounded-full ring-4 ring-bgMain border border-borderMain">
                    2
                  </span>
                  <h4 className="font-bold text-white mb-1">Normalization</h4>
                  <p className="text-textMuted text-sm">
                    We standardize version numbers (SemVer) and categorize
                    updates (Major, Minor, Patch, Security) so they are easy to
                    read.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-bgMain rounded-full ring-4 ring-bgMain border border-borderMain">
                    3
                  </span>
                  <h4 className="font-bold text-white mb-1">Distribution</h4>
                  <p className="text-textMuted text-sm">
                    Data is served via our high-performance Edge Network
                    (Vercel) through the web UI and JSON API.
                  </p>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-accent" />
              Quick Start (CLI)
            </h2>
            <p className="text-textMuted mb-4">
              You can fetch the latest version of any tool directly from your
              terminal using `curl`.
            </p>

            <div className="bg-black p-4 rounded-xl border border-borderMain font-mono text-sm text-gray-300 overflow-x-auto">
              <span className="text-purple-400">curl</span> {appUrl}
              /api/v1/tool/nextjs
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
