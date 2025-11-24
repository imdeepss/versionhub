import { Github, X } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-borderMain bg-bgCard mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">VersionHub</h3>
            <p className="text-sm text-textMuted mt-1">
              The open-source source of truth for developers.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm font-medium text-textMuted">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/api" className="hover:text-white transition-colors">
              API
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/imdeepss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-bgMain rounded-lg border border-borderMain text-textMuted hover:text-white hover:border-accent transition-all"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="https://x.com/_imdeepss_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-bgMain rounded-lg border border-borderMain text-textMuted hover:text-white hover:border-accent transition-all"
            >
              <X className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Copyright & Portfolio Link */}
        <div className="mt-8 pt-8 border-t border-borderMain flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} VersionHub. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built by
            <a
              href="https://imdeepss.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors font-medium underline decoration-dotted underline-offset-4"
            >
              Deepakk Vishwakarma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
