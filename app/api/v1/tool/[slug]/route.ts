import { toolDetails } from "@/app/lib/data";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;

  // 1. Fetch data (from your mock DB)
  const tool = toolDetails[slug.toLowerCase()];

  // 2. Handle Not Found
  if (!tool) {
    return NextResponse.json(
      { error: "Tool not found", message: `We don't track '${slug}' yet.` },
      { status: 404 }
    );
  }

  // 3. Return Clean JSON
  return NextResponse.json({
    success: true,
    data: {
      name: tool.name,
      category: tool.category,
      latest_version: tool.version,
      last_updated: tool.date,
      website: tool.website,
      // We only send the latest 5 history items to keep payload small
      history: tool.timeline.slice(0, 5),
    },
    meta: {
      source: "VersionHub Public API",
      timestamp: new Date().toISOString(),
    },
  });
}
