import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { FileQuestion, ArrowLeft } from "lucide-react";

// The word "default" is REQUIRED here for pages
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-bgMain text-textMain">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 bg-bgCard rounded-3xl flex items-center justify-center mb-8 border border-borderMain shadow-2xl shadow-indigo-500/10">
          <FileQuestion className="w-12 h-12 text-textMuted" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tool not found
        </h1>

        <p className="text-textMuted max-w-md mx-auto mb-10 text-lg">
          We couldn&apos;t find the tool or page you&apos;re looking for. It
          might not be in our database yet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://github.com/imdeepss"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-bgCard border border-borderMain hover:bg-white/5 text-white rounded-xl font-semibold transition-all"
          >
            Request a Tool
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
