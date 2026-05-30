import { NextResponse } from "next/server";
import { GITHUB_REPOS_MOCK, GITHUB_STATS_MOCK } from "@/data/portfolio";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "khan-aarav";
const GITHUB_TOKEN    = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  Accept: "application/vnd.github.v3+json",
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
};

// ─── GET /api/github ──────────────────────────────────────────────────────────

export async function GET() {
  try {
    // Fetch user profile + repos in parallel
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`, { headers }),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

    const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]);

    const formattedRepos = repos.map((r: Record<string, unknown>) => ({
      name:          r.name,
      description:   r.description ?? "",
      stars:         r.stargazers_count,
      forks:         r.forks_count,
      language:      r.language ?? "Other",
      languageColor: "#06b6d4",
      url:           r.html_url,
      updatedAt:     r.updated_at,
      topics:        (r.topics as string[]) ?? [],
    }));

    const stats = {
      totalStars:    formattedRepos.reduce((sum: number, r: { stars: number }) => sum + r.stars, 0),
      totalForks:    formattedRepos.reduce((sum: number, r: { forks: number }) => sum + r.forks, 0),
      totalRepos:    user.public_repos,
      contributions: GITHUB_STATS_MOCK.contributions, // No public API for this
      pullRequests:  GITHUB_STATS_MOCK.pullRequests,
      streak:        GITHUB_STATS_MOCK.streak,
    };

    return NextResponse.json(
      { success: true, data: { repos: formattedRepos, stats } },
      { headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" } }
    );

  } catch {
    // Graceful fallback to mock data
    return NextResponse.json({
      success: true,
      data:    { repos: GITHUB_REPOS_MOCK, stats: GITHUB_STATS_MOCK },
      cached:  true,
    });
  }
}
