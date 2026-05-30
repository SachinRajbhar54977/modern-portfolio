import { NextRequest, NextResponse } from "next/server";
import { PROJECTS_DATA } from "@/data/portfolio";
import type { ProjectCategory } from "@/types";

// ─── GET /api/projects ────────────────────────────────────────────────────────
// Supports: ?category=GenAI&limit=6&featured=true

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") as ProjectCategory | null;
  const limit    = parseInt(searchParams.get("limit") ?? "99");
  const featured = searchParams.get("featured") === "true";

  let projects = [...PROJECTS_DATA];

  // Filter by category
  if (category && category !== "All") {
    projects = projects.filter((p) => p.category === category);
  }

  // Featured = live projects only
  if (featured) {
    projects = projects.filter((p) => p.status === "live");
  }

  // Apply limit
  projects = projects.slice(0, limit);

  return NextResponse.json(
    { success: true, data: projects, total: PROJECTS_DATA.length },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
