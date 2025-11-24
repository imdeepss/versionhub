"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tool/${query.toLowerCase().trim()}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="max-w-xl mx-auto relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

      {/* Input Container */}
      <div className="relative bg-bgCard border border-borderMain rounded-xl flex items-center p-1 shadow-2xl focus-within:border-accent transition-colors">
        <Search className="w-5 h-5 ml-4 text-textMuted" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for 'Next.js' or 'Python'..."
          className="w-full bg-transparent border-none text-white px-4 py-3.5 focus:outline-none focus:ring-0 placeholder-gray-600 font-medium text-lg"
        />

        <div className="hidden sm:flex items-center gap-1 pr-3">
          <button
            onClick={handleSearch}
            className="bg-bgMain border border-borderMain hover:bg-accent hover:border-accent hover:text-white text-textMuted px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all"
          >
            ⏎ ENTER
          </button>
        </div>
      </div>
    </div>
  );
}
