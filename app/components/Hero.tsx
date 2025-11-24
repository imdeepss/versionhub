import { SearchInput } from "./SearchInput";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto relative">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-borderMain bg-bgCard text-xs font-mono text-textMuted mb-8 hover:border-accent/50 transition-colors cursor-default">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        System Operational. Tracking 2,400+ Tools.
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
        The Source of Truth for <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Software Versions.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
        Track releases, changelogs, and breaking changes for your entire stack.
        <br className="hidden md:block" /> No login required. Open Source
        forever.
      </p>

      {/* Search Bar */}
      <SearchInput />
    </section>
  );
}
