import { recentUpdates, trendingTools } from "@/app/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function RecentUpdates() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
      {/* LEFT: Trending (1 Column) */}
      <div className="lg:col-span-1 space-y-6">
        <h2 className="text-lg font-bold text-textMuted uppercase tracking-wider">
          🔥 Trending Now
        </h2>
        <div className="space-y-3">
          {trendingTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tool/${tool.id}`}
              className="flex items-center justify-between p-4 bg-bgCard border border-borderMain rounded-xl hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-accent group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <div className="font-semibold text-white">{tool.name}</div>
                  <div className="text-xs text-green-400 font-mono">
                    {tool.growth} this week
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-textMuted bg-bgMain px-2 py-1 rounded border border-borderMain">
                v{tool.version}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT: Recent Updates Table (2 Columns) */}
      <div className="lg:col-span-2">
        <h2 className="text-lg font-bold text-textMuted uppercase tracking-wider mb-6">
          ⚡ Just Updated
        </h2>
        <div className="bg-bgCard border border-borderMain rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-bgMain text-xs text-textMuted uppercase font-medium border-b border-borderMain">
                <tr>
                  <th className="px-6 py-4">Tool Name</th>
                  <th className="px-6 py-4">Version</th>
                  <th className="px-6 py-4">Released</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderMain">
                {recentUpdates.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-800/30 transition-colors group"
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 font-mono text-accent">
                      {item.version}
                    </td>
                    <td className="px-6 py-4 text-sm text-textMuted">
                      {item.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${item.typeColor}`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/tool/${item.id}`}
                        className="inline-flex items-center justify-center p-2 text-textMuted hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
