import { Terminal } from "lucide-react";

export default function ApiDocs() {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://versionhubs.vercel.app";
  return (
    <div className="flex flex-col min-h-screen bg-bgMain text-textMain">
      <main className="grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 rounded-xl text-accent">
              <Terminal className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-white">API Documentation</h1>
          </div>

          <div className="space-y-12">
            {/* Intro */}
            <section className="prose prose-invert max-w-none">
              <p className="text-lg text-textMuted">
                VersionHub provides a free, public REST API for fetching version
                data programmatically. No authentication key is required for
                read-only access.
              </p>
            </section>

            {/* Endpoint 1 */}
            <section className="p-6 bg-bgCard border border-borderMain rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-green-900/30 text-green-400 font-mono text-xs rounded border border-green-900/50">
                  GET
                </span>
                <code className="text-white font-mono">/api/v1/tool/:slug</code>
              </div>

              <p className="text-textMuted mb-6">
                Returns metadata, latest version, and version history for a
                specific tool.
              </p>

              <div className="relative">
                <div className="absolute top-3 right-3 text-xs text-textMuted font-mono">
                  Example Request
                </div>
                <pre className="bg-black p-4 rounded-xl overflow-x-auto text-sm font-mono text-gray-300 border border-borderMain">
                  {/* Note the usage of ${appUrl} inside the backticks */}
                  {`curl ${appUrl}/api/v1/tool/nextjs`}
                </pre>
              </div>

              <div className="mt-4 relative">
                <div className="absolute top-3 right-3 text-xs text-textMuted font-mono">
                  Example Response
                </div>
                <pre className="bg-black p-4 rounded-xl overflow-x-auto text-sm font-mono text-green-400/90 border border-borderMain">
                  {`{
  "success": true,
  "data": {
    "name": "Next.js",
    "latest_version": "14.1.0",
    "last_updated": "2 days ago",
    "website": "https://nextjs.org"
  }
}`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
