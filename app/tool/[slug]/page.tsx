import { ToolHeader } from "@/app/components/ToolHeader";
import { ToolDetail, toolDetails } from "@/app/lib/data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolDetails[slug];

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name} ${tool.version} Released - Release Notes & History`,
    description: `Current stable version of ${tool.name} is ${tool.version}. Released ${tool.date}. View full version history, changelog, and upgrade guide on VersionHub.`,
    keywords: [
      tool.name,
      `${tool.name} version`,
      `${tool.name} release notes`,
      `${tool.name} changelog`,
    ],
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;

  // Strict typing here
  const tool: ToolDetail | undefined = toolDetails[slug];

  if (!tool) return notFound();

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-bgMain">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Search
        </Link>

        <ToolHeader tool={tool} />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Version History</h2>
              <div className="text-xs font-mono text-textMuted">
                Last updated: {tool.date}
              </div>
            </div>

            <div className="relative border-l border-borderMain ml-3 space-y-8 pb-4">
              {/* No 'any' here. Typescript knows 'item' is TimelineItem */}
              {tool.timeline.map((item, idx) => (
                <div key={item.version} className="relative pl-8">
                  <span
                    className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-bgMain ${
                      idx === 0 ? "bg-accent" : "bg-gray-600"
                    }`}
                  ></span>

                  <div
                    className={`p-6 rounded-xl border transition-all ${
                      idx === 0
                        ? "bg-bgCard border-accent/30 shadow-lg shadow-indigo-500/10"
                        : "bg-transparent border-borderMain"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-lg font-mono font-bold ${
                            idx === 0 ? "text-white" : "text-textMuted"
                          }`}
                        >
                          v{item.version}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/5 border border-white/10 text-textMuted">
                          {item.type}
                        </span>
                      </div>
                      <span className="text-sm text-textMuted">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm text-textMuted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-bgCard border border-borderMain">
              <h3 className="text-sm font-bold text-white mb-4">
                Latest Stable
              </h3>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-mono font-bold text-accent">
                  {tool.version}
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div className="p-6 rounded-xl bg-bgCard border border-borderMain">
              <h3 className="text-sm font-bold text-white mb-4">
                Quick Install
              </h3>
              <div className="bg-black p-3 rounded-lg border border-borderMain font-mono text-xs text-gray-300">
                npm install {slug}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
