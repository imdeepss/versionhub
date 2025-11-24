import { Logo } from "@/app/components/icons/Logo";
import { Github, Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="w-8 h-8 group-hover:shadow-indigo-500/40 transition-all" />

            <span className="font-bold text-xl tracking-tight text-white">
              VersionHub
            </span>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-textMuted">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/categories"
              className="hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-textMuted hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="https://github.com/imdeepss/versionhub"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
