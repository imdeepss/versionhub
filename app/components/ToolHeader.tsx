import { Github, Globe, Share2 } from "lucide-react";
import { ToolDetail } from "../lib/data";

interface Props {
  tool: ToolDetail;
}

export function ToolHeader({ tool }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-borderMain pb-8">
      {/* Left: Identity */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-borderMain flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
          {tool.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{tool.name}</h1>
          <div className="flex items-center gap-4 text-textMuted text-sm">
            <a
              href={tool.github}
              target="_blank"
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
            <a
              href={tool.website}
              target="_blank"
              className="flex items-center gap-1 hover:text-white transition"
            >
              <Globe className="w-4 h-4" /> Website
            </a>
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition flex items-center gap-2">
          Subscribe
        </button>
        <button className="p-2 border border-borderMain rounded-lg text-textMuted hover:text-white hover:bg-white/5 transition">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
